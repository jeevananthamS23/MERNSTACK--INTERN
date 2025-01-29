const express=require("express");    // declare a express package
const {
    createEmployee,
    getEmployees,
    editEmployee,
    deleteEmployee,
    getSingleEmployee
}   = require("../controllers/employeecontollers");   // destructuring with in path createEmployee alone taken
const router=express.Router();  // in express package taken Router function  only . if you give express() then it will return all the function
router.post("/",createEmployee);  // post trigger then it wil go to the "/" route page
router.get("/",getEmployees)
router.put("/:id",editEmployee);
router.delete("/:id",deleteEmployee);
router.get("/:id",getSingleEmployee);
module.exports=router;   