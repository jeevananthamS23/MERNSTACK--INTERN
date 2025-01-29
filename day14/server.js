const express=require("express");// import to use express functionality
const bodyParser=require("body-parser");  // import to use body-parser functinality
const dotenv =require("dotenv");          //   to use the dotenv to configure database. connection initialliation
const connectDb=require("./backend/configs/db");   // import db file in that  file

const employeeRoutes=require("./backend/routes/employee");  // import the routes

dotenv.config();     //   to use the dotenv to configure database. connection initialliation

connectDb();  // connection established  or  directly call the variable declare here must  expot like this in db file module.exports=connectDb;    you can use the variable to call the va

const app=express();  // call express then it return all the functionality

app.use(bodyParser.json()); // parse the data from the post man

app.use("/api/employees",employeeRoutes); // use the url in /api/employees along with triggered route and you can give any name to it 

const PORT =process.env.PORT || 8000;  // set port from  process.env.PORT  or take 8000 port 

app.listen(PORT,()=>console.log(`the surver running on the port ${PORT}`));   // simply give app.listen()  function to run but why use call back function because then only you knoe the port is running or not



