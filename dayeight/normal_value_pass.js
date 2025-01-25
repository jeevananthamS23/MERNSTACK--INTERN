import { useState } from "react"
 
// normally value passsing from one function to another function .
export default function Parent1(){
    const[user,setuser]=useState('sai')
    const a=()=>{
        setuser()
    }
    return(
         <>
         <h1>Parent</h1>
         <C1 user={user}/>
         </>
    )

}
 function C1(val){
    const{user}=val
    
    return(
         <>
         <h1>C1</h1>
         <C2 user={user}/>
         </>
    )

}
function C2(val){
    const{user}=val
    
    return(
         <>
         <h1>C2</h1>
         <C3 user={user}/>
         </>
    )

}

 function C3(val){
    const{user}=val
    
    return(
         <>
         <h1>C3</h1>
         <C4 user={user}/>
         </>
    )

}function C4(val){
    const{user}=val
    
    return(
         <>
         <h1>C4</h1>
         <C5 user={user}/>
         </>
    )

}
function C5(val){
    const{user}=val
    
    return(
         <>
         <h1>C5 the data is {user}</h1>
          
         </>
    )

}