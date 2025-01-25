import React from 'react';
import { setFruit} from './slices/fruitSlicer';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function About()
{  const dispatch=useDispatch();
    const [input,setinput]=useState("");
     const addfruit=(data)=>{
        data.preventDefault()
        dispatch(setFruit(input))
      }

      function updateData(d) {
        var variable = d.target.value

        console.log("The fruit_name:  ",variable);
        
        setinput(variable);

    }
        

    return (<>
    
     <h1>fruit</h1>

     :<input type="text" name="fruit_name" onChange={updateData}></input><br/>
     <button onClick={addfruit}>add</button>
    </>);
}