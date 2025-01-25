import { useSelector } from "react-redux";
//import { useParams } from "react-router-dom";
//import { deleteuser } from "./slices/userSlicers";
export default function User1()
{
    // const{id}=useParams()
    const users=useSelector((state)=>state.userInfo.eusers)
    const fruits=useSelector((state)=>state.fruitInfo.fruit)
    const number=useSelector((state)=>state.numbersInfo.numbers)
    console.log('the users:' ,users)
    console.log('the fruit:' ,fruits)
    console.log('the number:',number)
    return (<>
    <h1>I'm in the User</h1>
            {users.map((user, index) => (
                <div key={index}>
                    <h1>{user.name}</h1>
                    <h1>{user.roll}</h1>
                    <h1>{user.college_name}</h1>
                    <h1>{user.city}</h1>
                </div>
            ))}

            <h1>Fruits:</h1>
            {fruits.map((fruit, index) => (
                <div key={index}>
                    <h2>{fruit}</h2>
                </div>
            ))}


            <h1>Array</h1>
            {
                number.map((ele,ind)=>(<div key={ind}><h2>{ele  }  </h2></div>))
            }
    </>)
}