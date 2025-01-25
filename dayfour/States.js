import { useState } from "react"

/*

export default function States(){
    var clr='blue'
    console.log("b4  : ",clr)
     function change()
     {
        clr='red'                                                         //  here  we change   color but it does not change in 
                                                                          // page it was change only in the variable . so this draw back we use stae 

        console.log('after.......',clr)
        
     }
     
  
    return(
        <>
        <h1>i love {clr} color</h1>
        <button onClick={change}>click here!! </button>
        </>
    )
}


====================================
export default function States(){
    var clr='blue'
    console.log("b4  : ",clr)
      
    return(
        <>
        <h1>i love {clr} color</h1>
        <button onClick={()=>{
             clr='red'
             console.log('after.......',clr)
        }}>click here!! </button>
        </>
    )
}



export default function States(){
    //var clr='blue'
    var [clr,setClr]= useState('blue')
    console.log("b4  : ",clr)
      
    return(
        <>
        <h1>i love {clr} color</h1>
        <button onClick={()=>{setClr(clr='red')} }>click here!! </button>
        </>
    )
}




export default function States(){
    
    var [clr,setClr]= useState('blue')
    var [name,setName]= useState('jeevanantham_S')
     
    return(
        <>
        <h1> my name is {name} <br></br>i love {clr} color</h1>
        <button onClick={()=>{ setClr('red') ; setName('demo')}
            }>click here!! </button>
        </>
    )
}

The useState hook is used to enable functional components to handle dynamic data, making them 
more powerful and flexible. It is a key feature in modern React development.






export default function States() {
  // Define state with initial values for color and name
  const [data, setData] = useState({
    clr: "",
    name: "jeeva",
  });

  return (
    <>
   
      {/* Use a style object to dynamically set the color }

      <br></br>
      <br></br>
   <center>   <h1 style={{ color: data.clr }}>
        My name is {data.name}
        <br />
        <br></br>
        I love {data.clr} color
      </h1>
    </center>
    <br></br>

      {/* Update state when button is clicked }
   <center> <div> <button
        onClick={() => {
          setData({
            clr: "lightblue", // New color
            name: "jeevanantham_S", // New name
          });
        }}
      >
        Click here!!
      </button>
      </div> 
</center>

<br></br>
<center>
<div>
      <button
        onClick={() => {
          setData({
            clr: "", // New color
            name: "sai", // New name
          });
        }}
      >
        reset!!
      </button>
      </div>
      </center>
      

      
    </>
  );
}


*/
export default function States() {
    
    const [arr, setArr] = useState([1, 2, 3]);
  
    
    function changeArray() {
      const updatedArray = arr.map((d) => d + 10); 
      setArr(updatedArray);
    }
  
    return (
      <>
        <h1>Array: {arr.join(", ")}</h1>
        <button onClick={changeArray}>Click here!!</button>
      </>
    );
  }

  