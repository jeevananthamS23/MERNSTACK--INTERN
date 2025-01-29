const mongoos=require('mongoose');
const employeeschema=new mongoos.Schema({empid:Number,empname:String});
module.exports=mongoos.model("Employee",employeeschema);