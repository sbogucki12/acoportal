const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('./models/WtsRecord');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const flash = require('flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

if(process.env.NODE_ENV === 'production'){
    mongoose.connect(process.env.mongoURI)
} else {
    const keys = require('./config/keys');
    mongoose.connect(keys.mongoURI)
}

const WtsRecord = mongoose.model('wtsrecords');
const User = require('./models/User');

app.get('/api/wtsrecords', cors(), (req, res) => {
    WtsRecord.find({})
    .then((wtsRecords) => {
        res.send(wtsRecords)
    })
})

app.get('/api/wtsrecord', cors(), (req, res) => {
    const controlNumber = req.query.controlnumber;
    WtsRecord.findOne({controlNumber: controlNumber}, (err, record) => {
        res.send(record);
    })    
  });




app.use(session({
    secret: 'secret',
    saveUninitialized: true, 
    resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(expressValidator({
    errorFormatter: (param, msg, value) => {
        const namespace = param.split('.')
        , root          = namespace.shift()
        , formParam     = root; 

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param   :   formParam, 
            msg     :    msg, 
            value   :   value
        };
    }
}));

app.use(flash());

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null; 
    next();
})



app.post('/api/register', cors(), (req, res) => {
    const firstName     = req.body.firstName;
    const lastName      = req.body.lastName;
    const email         = req.body.email; 
    const password      = req.body.password; 
    const password2     = req.body.password2;
    const company       = req.body.company;
    const street        = req.body.street; 
    const city          = req.body.city; 
    const usState       = req.body.usState; 
    const zipcode       = req.body.zipcode;
    const phone         = req.body.phone;  
    const role          = req.body.role; 
    const advisor       = req.body.advisor;
    const username      = req.body.email;
    
    req.checkBody('firstName', 'First name is required').notEmpty();
    req.checkBody('lastName', 'Last name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('role', 'Association to LAACO is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

    const errors = req.validationErrors();

    if(errors){
        res.send(errors)
    } else {
        const newUser = new User({
            firstName: firstName, 
            lastName: lastName,
            email: email, 
            password: password,
            company: company,              
            street: street, 
            city: city, 
            usState: usState, 
            zipcode: zipcode, 
            phone: phone, 
            role: role, 
            advisor: advisor,
            username: username
        })

        User.createUser(newUser, (err, user) => {
            if(err) throw err; 
            console.log(user);
        })

        // req.flash('success_msg', 'You are registered and can now log in.')
        res.send("Record Saved.")
    }
});

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.getUserById(id, (err, user) => {
        done(err, user);
    });
});

passport.use(new LocalStrategy(
    (username, password, done) => {
        User.getUserByUsername(username, (err, user) => {
            if(err) throw err;
            if(!user){
                return done(null, false, {message: 'Unknown username'})
            }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err; 
            if(isMatch){
                return done(null, user)
            } else {
                return done(null, false, {message: 'Invalid Password'})
            }
        })
    });
}));

app.post('/login', cors(),  
    passport.authenticate('local', {
        successRedirect: '/goodlogin',
        failureRedirect: '/badlogin',
        failureFlash: true
    }),
    (req, res) => {
        res.send("success")
});

app.get('/goodlogin', (req, res) => {
    res.send('Username and Password match')
});

app.get('/badlogin', (req, res) => {
    res.send('Username and Password do NOT match')
});

app.get('/goodlogout', (req, res) => {
    res.send('You have logged out')
});

app.get('/logout', (req, res) => {
    req.logout();

    req.flash('success_msg', 'You are logged out');

    res.redirect('/goodlogout');
});

ensureAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    } else {
        req.flash('error_msg', 'You are not logged in.');
        res.redirect('/loginagain');
        // TODO: should redirect to login or send message back to react so it rerenders login form
    }
}

app.get('/goodlogout', (req, res) => {
    res.send('You need to log in')
});

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))   
    })
}



const PORT = process.env.PORT || 5000; 
app.listen(PORT);
console.log(`Server now running on ${PORT}`);