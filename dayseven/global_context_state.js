// Importing necessary functions from React
import { createContext, useContext, useState } from "react";


// Creating a context object that will be used to share data across components
const userContext = createContext();

/**
 * Parent2 Component:
 * - This component acts as the parent in the context hierarchy.
 * - The `useState` hook is used to create a `user` state with the value 'sai'.
 * - The `userContext.Provider` wraps child components, allowing them to access the `user` value.
 */
export default function Parent2() {
  const [user] = useState('sai'); // Declare a state variable `user` with initial value 'sai'
  
  return (
    <>
      {/* Providing the `user` state value to child components using context */}
      <userContext.Provider value={user}>
        <h1>Welcome useContext Hook</h1>
        <C1 /> {/* Render child component C1 */}
       
      </userContext.Provider>

    </>
  );
}

/**
 * C1 Component:
 * - This component represents a child component that will further pass down the context value.
 * - Here, C1 passes the context value to C2.
 */
function C1() {
  return (
    <>
      <h1>C1</h1>
      <C2 /> {/* Render child component C2 */}
    </>
  );
}

/**
 * C2 Component:
 * - Similar to C1, it passes down the context to C3.
 */
function C2() {
  return (
    <>
      <h1>C2</h1>
      <C3 /> {/* Render child component C3 */}
    </>
  );
}

/**
 * C3 Component:
 * - This component passes down the context to C4.
 */
function C3() {
  return (
    <>
      <h1>C3</h1>
      <C4 /> {/* Render child component C4 */}
    </>
  );
}

/**
 * C4 Component:
 * - This component passes the context to C5.
 */
function C4() {
  return (
    <>
      <h1>C4</h1>
      <C5 /> {/* Render child component C5 */}
    </>
  );
}

/**
 * C5 Component:
 * - This component consumes the context value using the `useContext` hook.
 * - It retrieves the `user` value from the `userContext` and displays it.
 */
function C5() {
  const user = useContext(userContext); // Accessing the value from context
  
  return (
    <>
      <h1>C5 - The data is: {user}</h1> {/* Display the value of `user` from context */}
    </>
  );
}

/**
 * Key Concepts and Features:
 * 1. **Context API:** The Context API allows you to pass data through the component tree without having to manually pass props at every level.
 * 2. **createContext():** This function creates a context object that will be used to share data across components.
 * 3. **Provider:** The `Provider` component is used to make the context available to all its child components. It accepts a `value` prop that holds the data you want to share.
 * 4. **useContext():** The `useContext` hook is used to access the context value from within a functional component.
 * 
 * Key Features:
 * - **State Management:** The Context API can be used to manage global state across the application.
 * - **Avoiding Prop Drilling:** By using context, you can avoid passing props through many levels of nested components, which can make your code cleaner and more manageable.
 * 
 * Importance:
 * - Context API provides an easier and more efficient way to manage data across multiple components.
 * - It is especially useful in applications where multiple components need to share the same state (e.g., user authentication, theme settings).
 */



/*
// send the set function to globally to  function component  it was easy to modify the name;




import { createContext, useContext, useState } from "react"

const userContext=createContext()
export default function Parent2(){
      const[user,setUser]=useState('Sairam')
return(
    <>
    <userContext.Provider value={{user,setUser}}>
    <h1>welcome useContext Hook</h1>
    <C1/>
    </userContext.Provider>
    </>
)}
function C1( ){
     return(
         <>
         <h1>C1</h1>
         <C2  />
         </>
    )}
function C2( ){
    return(
         <>
         <h1>C2</h1>
         <C3 />
         </>
    )
}
 function C3( ){
    return(
         <>
         <h1>C3</h1>
         <C4 />
         </>
    )

}function C4( ){
    return(
         <>
         <h1>C4</h1>
         <C5  />
         </>
    )

}
 
 

function C5() {
  const { user, setUser } = useContext(userContext);

//   const updateUser= () => {
//     setUser("ram");
//   };

  return (
    <>
      <h1>C5: The data is {user}</h1>
      <button onClick={()=>{
        setUser("ram")
      }}>Change User</button>
    </>
  );
}

*/
