//  Importing the useState hook from React to manage state in the component
// import { useState } from 'react';

/*export default function Form1()
{
    function formSubmit(formdata)
    {    formdata.preventDefault()
        console.log('success............')
    }
    const[name,setName]=useState("")
    return(
        <>
        <form>
Name: <input type="text" onChange={(data)=>{setName(data.target.value)}}></input>
        <button onClick={formSubmit}>signup</button>
        </form>
        <h1>the name is: {name}</h1>
        </>
    )
}*/



/*

export default function Form1() {
    // Define state variables for Name, Department, and Year
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [year, setYear] = useState("");

    // Handle form submission
    function formSubmit(formdata) {
        formdata.preventDefault();
        console.log("Form submitted successfully!");
        console.log("Name:", name);
        console.log("Department:", department);
        console.log("Year:", year);
    }

    return (
        <>
            <form onSubmit={formSubmit}>
                <div>
                    Name:{" "}
                    <input
                        type="text"
                        onChange={(data) => setName(data.target.value)}
                    />
                </div>
                <div>
                    Department:{" "}
                    <input
                        type="text"
                        onChange={(data) => setDepartment(data.target.value)}
                    />
                </div>
                <div>
                    Year:{" "}
                    <input
                        type="text"
                        onChange={(data) => setYear(data.target.value)}
                    />
                </div>
                <input type="submit" value="Signup" />
            </form>
            <h1>The name is: {name}</h1>
            <h2>The department is: {department}</h2>
            <h2>The year is: {year}</h2>
        </>
    );
}
*/



/*
export default function Form1() {
    function formSubmit(e) {    
        e.preventDefault();
        console.log('success............,', input.name, input.roll, input.city);
    }

    const [input, setInput] = useState({
        roll: '',
        name: '',
        city: ''
    });

    return (
        <>
            <form onSubmit={formSubmit}>
                Name: {" "}
                <input 
                    type="text" 
                    onChange={(data) => { setInput({ ...input, name: data.target.value }) }} 
                />
                <br />

                Roll: {" "}
                <input 
                    type="text" 
                    onChange={(data) => { setInput({ ...input, roll: data.target.value }) }} 
                />
                <br />

                City: {" "}
                <input 
                    type="text" 
                    onChange={(data) => { setInput({ ...input, city: data.target.value }) }} 
                />
                <br />

                <input type="submit" value="signup" />
            </form>
        </>
    );
}

*/






// /**
//  * The Form1 functional component in JavaScript uses useState for state management to handle form input
//  * fields and submission.
//  * @returns The `Form1` functional component is returning JSX elements that render a form with input
//  * fields for Name, Roll, and City. Each input field has an `onChange` event handler that calls the
//  * `updateData` function to update the state based on user input. The form also has a submit button
//  * that triggers the `formSubmit` function on submission. The current state values for Name, Roll,
//  */

// // Defining the Form1 functional component
// export default function Form1() {
  
//   // State management using useState to store the form data
//   // The state variable 'input' holds the form values, and setInput is the function used to update the state
//   const [input, setInput] = useState({
//     roll: '',  // Initial value for 'roll' field is empty
//     name: '',  // Initial value for 'name' field is empty
//     city: ''   // Initial value for 'city' field is empty
//   });

//   // Function to handle form submission
//   function formSubmit(formdata) {
//     formdata.preventDefault();  // Prevent the default form submission (page reload)
    
//     // Log the current state (name, roll, city) to the console on form submit
//     console.log('success............,', input.name, input.roll, input.city);
//   }

//   // Function to handle input field updates
//   function updateData(d) {
//     // Extract the name and value from the input field
//     var variable = d.target.name;  // The 'name' attribute of the input field
//     var value = d.target.value;    // The value entered by the user in the input field
    
//     setInput((data) => {
//         /* 
//         setInput is a function from the useState hook, used to update the state. 
//         When called, React automatically passes the current state (input) to the callback function.
//         */
    
//         /* 
//         data represents the current state (the input object) at the time of calling setInput. 
//         React implicitly passes it to the callback function.
//         */
    
//         return { 
//             /* 
//             The spread operator (...) copies all existing properties of the input state (roll, name, city).
//             This ensures other fields remain unchanged when updating the changed field.
//             */
//             ...data, 
    
//             /* 
//             [variable]: value updates the specific field (roll, name, or city) based on the dynamic variable name.
//             This allows you to update only one field at a time while keeping the rest intact.
//             */
//             [variable]: value 
//         };
//     });
    
//   }

//   // Returning the JSX that renders the form
//   return (
//     <>
//       The form element triggers the formSubmit function when submitted
//       <form onSubmit={formSubmit}>
//         {/* Name input field with onChange handler to update state on input change */}
//         Name: <input type="text" name="name" onChange={updateData}></input><br/>
        
//         {/* Roll input field with onChange handler */}
//         Roll: <input type="text" name="roll" onChange={updateData}></input><br/>
        
//         {/* City input field with onChange handler */}
//         City: <input type="text" name="city" onChange={updateData}></input><br/>
        
//         {/* Submit button for the form */}
//         <input type="submit" value="signup"></input>
//       </form>
//     </>
//   );
// }

// /* Name: <input type="text" name='txtName' onChange={(data)=>{setInput({...input,name:data.target.value})}}></input><br/>
// Roll: <input type="text" name='txtRoll' onChange={(data)=>{setInput({...input,roll:data.target.value})}}></input><br/>
// City: <input type="text" name='txtCity' onChange={(data)=>{setInput({...input,city:data.target.value})}}></input><br/> */















export default function Form1() {
 

    return (
        <>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>








<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"></input>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"></input>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"></input>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"></input>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"></input>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>







        </>
    );
}
