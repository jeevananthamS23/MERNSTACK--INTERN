


//  The useState hook is a fundamental React Hook that allows you to add state to functional components. 
// It is used to manage state variables and update them when necessary.

// syntax :  const [state, setState] = useState(initialValue);
// state: The current state value. 
// setState: A function to update the state.
// initialValue: The initial value of the state (can be a primitive, object, array, etc.).

//  Rules for Using useState
//Only Call useState at the Top Level:
  // Do not call useState inside loops, conditions, or nested functions.
//Use in Functional Components Only:
  //   Hooks can only be used in functional components, not class components.
// Each useState is Independent:
// You can have multiple useState calls to manage different states.























import { useReducer } from "react"

//import { useEffect, useState,useReducer } from "react"
/*export default function Demo(){
    const[count1,setCount1]=useState(0)
    const[count2,setCount2]=useState(0)
    useEffect(()=>{
        console.log('rendering...')
    })
    return(
        <>
        <h1>the state val is {count1}</h1>
        <h1>the state val is {count2}</h1>
        <button onClick={()=>{setCount1(count1+1)}}>count1</button>

      
        <button onClick={()=>{setCount2(count2+1)}}>count2</button>
        </>


    )
}*/









//   useReducer 

// What is a State Reducer?

// A state reducer is a function that manages the state of a component. 
// It takes two arguments:
// 1. Current State: The existing state of the application.
// 2. Action: An object that describes what needs to be done (usually has a `type` and `payload`).

// The reducer processes the action and returns a new state based on the specified logic.

// Key Points of a Reducer:
// - A reducer is a pure function, meaning it doesn't modify the existing state directly. Instead, it returns a new state.
// - Reducers are typically used with the `useReducer` hook in React for complex state management.

// How Does useReducer Work?

// The `useReducer` hook is an alternative to `useState` for managing state in functional components. 
// It is ideal for:
// - Handling complex state logic.
// - Managing multiple related state transitions.

// Syntax of useReducer:
// const [state, dispatch] = useReducer(reducer, initialState);

// Explanation of Parameters:
// - `reducer`: A function that determines how the state updates based on actions.
// - `initialState`: The initial value of the state.
// - `state`: The current state of the component.
// - `dispatch`: A function to send actions to the reducer.







export default function Demo() {
    // **State Reducer**: A reducer function that defines how the state is updated based on an action.
    // The `balance` is the current state, and `action` defines what needs to be done.
    const transactionReducer = (balance, action) => { 
        switch (action.type) { 
            case 'WITHDRAW': 
                // If the action type is 'WITHDRAW', subtract the action's payload (amount) from the balance.
                return balance - action.payload; 
            case 'DEPOSIT': 
                // If the action type is 'DEPOSIT', add the action's payload (amount) to the balance.
                return balance + action.payload; 
            default: 
                // Return the current balance if no matching action type is found.
                return balance; 
        }
    };

    // Function to handle withdrawal actions.
    // It dispatches an action object with `type` as 'WITHDRAW' and `payload` as the withdrawal amount.
    const withdraw = (amount) => {
        dispatch({ type: 'WITHDRAW', payload: amount });
    };

    // Function to handle deposit actions.
    // It dispatches an action object with `type` as 'DEPOSIT' and `payload` as the deposit amount.
    const deposit = (amount) => {
        dispatch({ type: 'DEPOSIT', payload: amount });
    };

    // **useReducer Hook**:
    // - `transactionReducer`: The reducer function that handles state updates.
    // - `1000`: The initial state (starting balance).
    // - `balance`: The current state (managed by the reducer).
    // - `dispatch`: The function used to send actions to the reducer.
    const [balance, dispatch] = useReducer(transactionReducer, 1000);

    return (
        <>
            {/* Display the current balance */}
            <h1>The balance is: {balance}</h1>

            {/* Button to withdraw 500, which dispatches a 'WITHDRAW' action */}
            <button onClick={() => withdraw(500)}>Withdraw</button>

            {/* Button to deposit 1000, which dispatches a 'DEPOSIT' action */}
            <button onClick={() => deposit(1000)}>Deposit</button>
        </>
    );
}



