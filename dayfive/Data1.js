/*import Display from "./Display"

function Data()
{
    let name='sai'
    const ans=my name is ${name}
    return(
        <>
        <h1>my name is  {name}</h1>
        <h1>  {ans} </h1>
       <Display />
        </>
    )
}
export default Data


=================================

import Display from "./Display"

function Data()
{
    let name='sai'
    const ans=my name is ${name}
    return(
        <>
        <h1>my name is  {name}</h1>
        <h1>  {ans} </h1>
       <Display n={name} />
        </>
    )
}
export default Data
=======================================

*/


import Display from "./Display";

function Data() {
    const person = {
        empName: 'dena',
        city: 'cbe',
    };
    let name = 'sai';
    let roll = 12;
    const g = 'male';

    return (
        <>
            <h1>My name is {name}</h1>
            <Display n={name} roll={roll} ge={g} obj1={person} />
        </>
    );
}

export default Data;
