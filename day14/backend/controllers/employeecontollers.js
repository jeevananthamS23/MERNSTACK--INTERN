
const Employee=require("../models/EmployeeModel");  // here model was imported from the models
exports.createEmployee=async(req,res)=>{  //   same as post method  here we use method called createEmployee .
    try{
        const {empid,empname}=req.body;  // we parse the data from the url. the destructuring is way to parse the data  or // name:req.body.name
        const newEmployee =new Employee({empid,empname});   //  here we pass the data throuhgh constructor and it return the  document
        const savedEmployee= await newEmployee.save();  //  use the document to save
        res.status(201).json(savedEmployee);    // it was render on the postman  ---- status(201)  201 mean the operation was executed successfully.status() function show the status.
    }

    catch (err)      // if error occur then it execute
    {
        res.status(500).json({error:err.message});  // 500 mean operation eas not execute successfully
    }
}


//  The json() function in res.status().json() is used to send a JSON-formatted response to the client (in this case, Postman or a frontend application). It is part of the Express.js framework and is commonly used in APIs to return structured data or error messages.


exports.getEmployees=async(req,res)=>{
    try{
        const employees=await Employee.find();
        res.status(200).json(employees);

    }

    catch(err)
    {
        res.status(500).json({error: err.message});
    }
};


exports.editEmployee=async (req,res)=> {
   try{ //  const ed_id =req.params; one way and another way is const e_id=req.params.id another way
     const e_id=req.params.id;
    const {empid,empname}=req.body;
    const updatedEmployee=await Employee.findByIdAndUpdate(e_id,{empid,empname},{new:true});

    if(!updatedEmployee)
    { return res.status(404).json({message:"employee not found"});

    }
    res.status(200).json(updatedEmployee);
}catch(err)
{
    res.status(500).json({error: err.message});
}
}
    



exports.deleteEmployee=async (req,res)=> {
    try{ //  const ed_id =req.params; one way and another way is const e_id=req.params.id another way
      const {id}=req.params;
   
     await Employee.findByIdAndDelete(id);
     res.status(200).json({message:"employee deleted"});
    }
 
 catch(err)
 {
     res.status(500).json({error: err.message});
 }
}


exports.getSingleEmployee=async (req,res)=> {
    try{ //  const ed_id =req.params; one way and another way is const e_id=req.params.id another way
      const {id}=req.params;
   
     let data=await Employee.findById(id);
     res.status(200).json(data);
    }
 
 catch(err)
 {
     res.status(500).json({error: err.message});
 }
}





  