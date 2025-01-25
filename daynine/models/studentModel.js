const mongose=require("mongoose");


/*This imports the mongoose library.
Why: Mongoose is used to connect with a MongoDB database and provides tools for defining schemas, models, and database interaction.*/

const studentSchema =new mongose.Schema({name:String,age:Number,city:String})   /// Scheme class   with schema class  constructor  Schema({name:string,age:Number,city:string})

/*Purpose: Defines the structure of the documents in the studentcollection collection.
new mongose.Schema({...}): Creates a schema object.
Fields:
name: Stores the student’s name, and its type is String.
age: Stores the student’s age, and its type is Number.
city: Stores the student’s city, and its type is String.
Schema Validation:
Mongoose allows additional validation, such as required fields, default values, and custom logic.
*/ 




const stumdl=mongose.model('studentcollection',studentSchema) 
// Purpose: Creates a Mongoose model, which acts as an interface for interacting with the studentcollection collection in MongoDB.
// mongose.model(name, schema):
// name: 'studentcollection', the name of the collection.
// schema: studentSchema, the defined schema for the documents in the collection.
// Automatic Pluralization:
// Mongoose pluralizes the name (studentcollection) to studentcollections in the database unless explicitly specified.
// Model Methods:
// Once created, the stumdl object provides various methods to interact with the database, such as:
// .create(): Create a new document.
// .find(): Retrieve documents.
// .findOne(): Retrieve a single document.
// .updateOne(): Update a single document.
// .deleteOne(): Delete a single document.







module.exports=stumdl;

// Purpose: Exports the stumdl model so it can be imported and used in other parts of the application.


