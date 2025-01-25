const express= require('express');   // we can access all the functionality of the express under the name express
const exhbs=require('express-handlebars');// we can access all the functionality of the express -handlebars under the name express
const bodyparser=require('body-parser');
const app= express();   // express would return a object
const dbo=require('./db');
const { ObjectId } = require('mongodb');
const objid = dbo.objectId;
const studentmodel=require('./models/studentModel');
// configure Handlebars

app.engine('hbs',exhbs.engine(
    {    layoutsDir:'viewsfold/',
         defaultLayout: 'maincopy',
         extname:'hbs',
    }
)
);

   // hbs  name of the   app engine
   //layoutsDir - directory of the folder
   // defaultLayout -- html files
   // extname  --   extension

app.set('view engine','hbs');    //  name of the app engine
app.set('views','viewsfold');  // name of the folder to render a file.
app.use(bodyparser.urlencoded({extended:true}));

/// Routes
app.get('/', async (req, res) => {
    let edit_id,edit_stu,data;
    //  let database = await dbo.getDatabase();
    //  const collection = database.collection('student');
    //  const cursor = collection.find({});
    //  let data = await cursor.toArray();
     let msg = '';
      if(req.query.edit_idd)
      {
        edit_id=req.query.edit_idd
        edit_stu=await collection.findOne({_id:  new objid(edit_id)})  //new ObjectId
      }
      if(req.query.del_idd)
        {
          del_id=req.query.del_idd
          await collection.deleteOne({_id:  new objid(del_id)})  //new ObjectId
          res.redirect('/?status=3');
        }

     // Check if query parameter 'status' is present and equals '1'
     if (req.query.status === '1') {
         msg = "Data inserted successfully...";
     }
     else if (req.query.status === '2') {
        msg = "Data updated successfully...";
    }
    else if (req.query.status === '3') {
      msg = "Data deleted successfully...";
  }

     console.log('The data:', data);
     res.render('maincopy', { msg, data,edit_id,edit_stu });
 });


//  app.get('/', async (req, res) => {
//      let database = await dbo.getDatabase();
//      const collection = database.collection('student');
//      const cursor = collection.find({});
//      let data = await cursor.toArray(); // Ensures 'data' is an array
//      const msg = req.query.status === '1' ? "Data inserted successfully..." : "Test";
 
//      console.log('Data passed to template:', data); // For debugging
//      res.render('maincopy', { msg, data });
//  });
 


app.post('/stuinfo',async(req,res)=>{
    //  let database= await dbo.getDatabase();
    //   const collection=database.collection('student');
      const stud={name:req.body.name,age:req.body.age,city:req.body.city}
      const newstu=new studentmodel(stud);
      newstu.save();
      // await collection.insertOne(stud);
      res.redirect('/?status=1');

      
})

app.post('/updateinfo/:e_id',async(req,res)=>{
  const database=await dbo.getDatabase();
  const collection=database.collection('student');
  const stud={name:req.body.name,age:req.body.age,city:req.body.city};
  let ed_idd=req.params.e_id;  // parser the paramater data 
  await collection.updateOne({_id: new objid(ed_idd)},{$set:stud});

  res.redirect('/?status=2');
})





// start the server

app.listen(8000,()=>{        // it was place to render the data on this port
  console.log('Listening on port 8000...');
});



