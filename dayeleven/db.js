// const mongodb= require('mongodb');  // mongodb functionality are accessed using the mongodb variable
// const MongoClient = mongodb.MongoClient;   // MongoClint is a class 


// let objectId=mongodb.ObjectId; // ObjectId was take in mongodb
// let database;
// async function getDatabase()
// {             // why await because the function is return a promise so we use a await  why because the value can taken or not taken from db so we wait some time . if we use await then we async in function defenition
//     const client = await  MongoClient.connect('mongodb://127.0.0.1:27017'); // connection string is passed to the connect function   then client was created
//     database =client.db('intern');   // using clint we can access  database  with in the mongodb 
//     if(database!=0)
//     {
//         console.log("database is created successfully");
//     }

//     else{
//         console.log('database connection failed');
//     }

//     return database;
// }

// module.exports={getDatabase,objectId};



// mongoose setup

const mongse=require('mongoose')    // Required to use MongoDB's functionality in the code via the mongoose library.


let database;
async function getDatabase()
{        mongse.connect('mongodb://127.0.0.1:27017/intern')  // passing connection string with database and it return object    
                                                              // Calls the connect method of the mongoose object to establish a connection to the MongoDB database.   This line initiates the database connection process.
    .then(()=>{   //  Attaches a .then callback to handle the successful connection case.
       // Why: Logs the message "db connected" to the console if the connection is established successfully.
        console.log("db connected");
    })
    .catch(()=>{

        // Attaches a .catch callback to handle errors during the connection process.
// Why: Logs the message "db error......." to the console if there is an error connecting to the database.
        console.log("db error.......")
    })
}
getDatabase();   // Purpose: Calls the getDatabase function to initiate the connection process.
     //Why: Ensures the function runs and attempts to connect to the MongoDB database.
     module.exports = { getDatabase };


// Allows the database connection logic to be modular and accessible from other parts of the application.