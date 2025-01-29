const mongoose =require("mongoose");
const connectDb= async ()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI);               // using the process keyword to acces the .env
        console.log(`mongodb connected :${conn.connection.host}`);   // it show the connection host name 
    }

    catch(err)
    {
        console.error(`Error :${err.message}`);
        process.exit(1);
    }
};
module.exports=connectDb;
