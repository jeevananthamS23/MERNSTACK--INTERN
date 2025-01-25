
import { useDispatch } from 'react-redux';
import { setUsers } from './slices/userSlicers';
import { useState } from 'react';

export default function Signup() {
  const dispatch=useDispatch()
  const [input, setInput] = useState({
    roll: '',  
    college_name: '',
    name: '',  
    city: ''
  });
  const addUser=(formdata)=>{
    formdata.preventDefault()
    dispatch(setUsers(input))
  }

  
  //function formSubmit(formdata) {
    //formdata.preventDefault();  
    //console.log('success............,', input.name, input.college_name ,input.roll, input.city);
  //}

  function updateData(d) {
    var variable = d.target.name;
    var value = d.target.value;   
    console.log("The variable:  ",variable," The value:  ",value);
    
    setInput((data) => {

    
        return { ...data, [variable]: value};
    });
    
  }
return (
  /* <form onSubmit={formSubmit}>    <input type="submit" value="signup"></input> */
    <>
     
      <form >
       Name: <input type="text" name="name" onChange={updateData}></input><br/>
       College: <input   type="text"  name="college_name" onChange={updateData}></input><br/>
       Roll: <input type="text" name="roll" onChange={updateData}></input><br/>
       City: <input type="text" name="city" onChange={updateData}></input><br/>
       <button onClick={addUser}>Signup</button>
      </form>
    </>
  );
}