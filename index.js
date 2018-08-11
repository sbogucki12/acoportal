const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cors = require('cors');
require('./models/WtsRecord');

if(process.env.NODE_ENV === 'production'){
    mongoose.connect(process.env.mongoURI)
} else {
    mongoose.connect(keys.mongoURI)
}

const WtsRecord = mongoose.model('wtsrecords');

app.get('/wtsrecords', cors(), (req, res) => {
    WtsRecord.find({})
    .then((wtsRecords) => {
        res.send(wtsRecords)
    })
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000; 
app.listen(PORT);