# ACO Portal




## Background


"ACO" = Aircraft Certification Office. 


For practice purposes only (unless the FAA finds this useful), I am creating an app that I wish we had at my previous office when I worked with the Federal Aviation Administration.


This is going to be an app that functions as a portal between the local aircraft certification office and the people that the office serves.  


Here is the initial concept, on paper: 


![Imgur](https://i.imgur.com/sqd9iVM.jpg)



P.S.:  At my old office, we had a database that tracked all of the office's incoming and outgoing documents and work assignments as well as deadlines.  The system utilized technology that was deprecated before the system was ever in even put into use!   I'm not sure if I'm going to build that entire system into this app (because it would require some persistent cloud storage that I'm not certain I want to fund), but I've decided to at least create the UI for the system within this app, connected to a "LAACO Staff" link and log-in page.  




## Technology


The planned technology stack: 


*Client Side*


+ Node.js
+ Express
+ ReactJS
+ Redux
+ ReactRouter
+ Material-UI
+ VSCode
+ Jest/Enzyme (testing)


*Authentication / Persistent Data:* 


+ .NET Core (Web API)
+ Identity Server 4
+ SQL Server 
+ Visual Studio Community



## TO-DO


[ ] Add text fields to profile page for street, city, zip and selection for state.


[ ] Adjust formatting on all subcomponents for iPad 






## Screenshots



+ Day Twelve, August 13, 2018:



*Added component to allow users to retrieve and edit a record:*



![recordIt](http://g.recordit.co/zO9syI9yhw.gif)



+ Day Eleven, August 10, 2018: 



*Connected app to dummy data loaded in mLab:*



![recordIt](http://g.recordit.co/Ouu0bc0yK6.gif)




*Created some dummy data in a MongoDB instance on mLab:*



![Imgur](https://i.imgur.com/1aSK1xQ.jpg)



+ Day Ten, August 9, 2018: 



*Practicing basic snapshot technique via Enzyme for testing:*



![Imgur](https://i.imgur.com/xSiiQMI.jpg)




+ Day Nine, August 7, 2018:



*Added prototype "record entry" feature for document tracking tool:*


![recordIt](http://g.recordit.co/6RruJOTf2C.gif)



+ Day Eight, July 19, 2018: 




*Added staff component:*




![recordIt](http://g.recordit.co/UXEmLSRDvI.gif)



+ Day Seven, July 17, 2018: 



*Added content to DER and Current Applicant components:*



![recordIt](http://g.recordit.co/ch04u1IQVa.gif)




+ Day Six, July 16, 2018: 



*The "Advisor" dropdown on the profile page now conditionally renders:* 



![recordIt](http://g.recordit.co/5KCyetaAbj.gif)





+ Day Five, July 13, 2018: 



![recordIt](http://g.recordit.co/makdTWNIuD.gif)



+ Day Four, July 12, 2018: 



*Added some temp components:* 



![recordIt](http://g.recordit.co/DL0ivraLS3.gif)



+ Day Three, July 11, 2018: 


*Added some content:*


![RecordIt](http://g.recordit.co/7H17va7D70.gif)



+ Day Two, July 10, 2018:


*Added a landing page and a warning banner:* 



![Imgur](https://i.imgur.com/UuTSsyF.jpg)



+ Day One, July 9, 2018: 


*Working on the color, utilizing Material-UI theme:*


![Imgur](https://i.imgur.com/XarM0OV.jpg)



*Off and Running:*


![recordIt](http://g.recordit.co/kqFbFDBfls.gif)




## Timeline: 



**Day Twelve, August 13, 2018:**


+ Added component that allows user to retrieve record from the MongoDB instance on mLab (searchable by the records' unique "control number"). Record can then be edited, saved, and returned to database. 



**Day Eleven, August 10, 2018:**



+ Used fetch to get dummy data from mLab to feed wtsRecord component.
+ Connected app to MongoDB instance via mongoose.  Tonight, I will create a React component that allows the user to get the records by clicking a button. 
+ Created some dummy data in a MongoDB instance on mLab.



**Day Ten, August 9, 2018:**


+ Practicing testing components via Enzyme snapshots.   My previous experience unit testing has been with functions, using assertion statements.  I'm sadly behind the curve when it comes to automated testing of React components, but I'm trying to catch up by getting up to speed with Jest/Enzyme.  



**Day Nine, August 7, 2018:**


+ My previous office had a tool for tracking all work assignments; a tool that I am going to incorporate into this app.  I implemented the first part: a component that allows the office's administrative support staff to enter a record into the system.  Of course, it's all currently notional because there is no server-side mechanism currently in place to allow this app to save persistent data.  This current "prototype" version is just to present the idea for future intended functionality. 

<br />

The record entry component generates a deadline for the assignment based on the specific type of record (different record types have different allowances for duration to complete).  The component also generates a unique "control number" to track the assignment, though currently, that functionality is simply an incrementing counter.  In the real tool, that control number will increment from the last saved record in the database.  



**Day Eight, July 19, 2018:** 


+ Added Staff component. 



**Day Seven, July 17, 2018:**



+ Added content to both DER and Current Applicant components. 



**Day Six, July 16, 2018:**



+ Made the "Advisor" dropdown in the Profile component conditional (by passing props to the state in the Profile component from the Current Applicant component).
+ Wired up navigation from login to Current Applicant component. 
+ Added Current Applicant component. 



**Day Five, July 13, 2018:** 



+ Added Profile component. 
+ Added DER component.



**Day Four, July 12, 2018:**



+ Wired up the Redux store (Redux will be used to maintain the user authorization within state while logged in)
+ Added temporary components. 



**Day Three, July 11, 2018:**


+ Added HomeTabs component and login component.



**Day Two, July 10, 2018:**


+ Added a warning banner. 
+ Added a landing page. 



**Day One, July 9, 2018:** 


+ Implemented Material-UI
+ Implemented ReactRouter 
+ Deployed to Heroku via Heroku CLI (and git)
+ Initialed git for GitHub.
+ Used Create-React-App to ... create the react app.
+ Configured Express server



## Credit


**I'm in the market for a full time position**, preferably either in the Los Angeles area, where I currently reside, or in Las Vegas, where I intend to be.  I love to build and look forward to mastering any technology that your company uses.  My preferred architecture is currently Node/Express/React/Mongo (MERN) and for any real heavy backend implementations: .NET Core, to include SQL Server, Entity Framework, Identity Server, LINQ, etc.  


Please visit [my portfolio](http://bogoodski.herokuapp.com/ "Portfolio - Steve Bogucki")





<br/>
<br/>

![Imgur](https://i.imgur.com/UqK2Qmw.jpg)