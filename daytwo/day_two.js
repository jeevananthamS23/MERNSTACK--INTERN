/*

const person={
    name:'sai',
    roll:45,
    gender:'male'
}

let {name,roll,gender}=person  assigning the values to the variables  it was called destructuring
console.log(name," ",roll," ",gender)
console.log(person) 


// destructuring the objects property
let {name:n,roll:ro,gender:ge}=person  
console.log(n,ro,ge)
console.log(person)

let {n:name,r:roll,g:gender, city='mdu'}=person // also assign default value
console.log(name," ",roll," ",gender, city)
console.log(person)
============================================================================================================
*/
/*

// restofdata 

const person={
    name:'sai',
    roll:34,
    gender:'male',
    city:'cbe'
}

let {name,...restdatas}=person
console.log(name,restdatas)


// in function

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Outputs: 10

// in array 

const fruits = ["apple", "banana", "cherry", "date"];
const [first, second, ...rest] = fruits;

console.log(first); // Outputs: apple
console.log(second); // Outputs: banana
console.log(rest); // Outputs: ['cherry', 'date']


let a=[1,2,3,4]
let b=['hai','hello','welcome',a]
 
console.log('added the arr: ',b)
 b=['hai','hello','welcome',...a]
 
console.log('used res operator',b)
 

let a=[1,2,3,4]
let b=['hai','hello','welcome']
 b.push(...a)
console.log('the ans: ',b)


// in object


const person = {
    name: "John",
    age: 30,
    gender: "male",
    country: "USA"
};

const { name, age, ...rest } = person;

console.log(name); // Outputs: John
console.log(age); // Outputs: 30
console.log(rest); // Outputs: { gender: 'male', country: 'USA' }

=========================================================================================================================
*/

/*

//  functions types


// no arugumnent no return type
function add()
{
    console.log('welcome')
}

console.log('hai')
add()
 
 
// with arugumnet and with out return type
function add(a,b)
{
    c=a+b
}

console.log('hai')
add(10,12)
 
 

// with arugument with return type
function add(a,b)
{
    c=a+b
    return c
}

console.log('hai')
res=add(10,12)
console.log(res)
 
 
// with arugument with return type
function add(...a)
{
    s=0
    for(let i=0;i<a.length;i++)
     s=s+a[i]
    return s
}
 

console.log('hai')
res=add(1,2,2,2,2,2,3,)
 
console.log(res)
 
 

// with arugument with return type
function add(b,...a)
{
    console.log('the b is: ',b)
    s=0
    for(let i=0;i<a.length;i++)
     s=s+a[i]
    return s
}
 

console.log('hai')
res=add(100,1,2,2,2,2,2,3)
 
console.log(res)
 
 

// here no argument is passed so it does not throw any error instead of display undefined and in output of res is zero
function add(b,...a)
{
    console.log('the b is: ',b)
    s=0
    for(let i=0;i<a.length;i++)
     s=s+a[i]
    return s
}
 

console.log('hai')
res=add()
 
console.log(res)


function add(b,...a)// WAWR
{
    console.log('the b is: ',b)
    s=0
    for(let i=0;i<a.length;i++)
     s=s+a[i]
    return s
}
 

console.log('hai')
res=add(10)
 
console.log(res)
 

// no arugument and with return type
function add()
{
    
    return 'welcome'
}
 

console.log('hai')
res=add()
 
console.log(res)

=====================================================================================================================================

*/


/*  

// restofdata with array to destructure

let a=[1,2,3,4,5,6,4]
let [a1,b,...rest]=a
console.log(a1)
console.log(b)
console.log(rest, typeof(rest))   // typeof()  it tell the type of the data

let [q,w,e,r,t]=rest
console.log(q)
console.log(w)
console.log(e)
console.log(r)
console.log(t)

=======================================================================================================================
*/


/*

// inner function canot call out side the function explicitly


function out()
{
    function inner()
    {
        console.log("inside")
    }
    inner()
}

out()



// this type of concept is called  closure    
// Nested Functions: A closure is created when a nested function accesses variables from its outer function's scope.
// Scope Preservation: The inner function "closes over" the variables it references, keeping them alive even after the outer function exits.


function out1()
{
    function inner1()N
    {
        console.log("inside")
    }
    return inner1
}

in1=out1()
in1()
===============================================================================================

*/



/*

FUNCTION experssion


let myFun=function out() // function expression
{
     console.log('im inside the out fun')
    return function()
    {
        console.log('im inside the inner fun!!!')
        
    }
   
   
}
inn=myFun()
inn()

=====================
 
inn=myFun()
inn()
let myFun=function out()
{
     console.log('im inside the out fun')
    return function()
    {
        console.log('im inside the inner fun!!!')
        
    }
}

// inn=out()
// inn()
==============================================================================================================================================

*/

/*
// arrow function types 

// if it is one line of code inside the function there is no need to use curly brace   and return keyword also.

let a=()=>{
    console.log('welcome') // NANR
}

a()


==========================

let a=(a,b)=>{
    c=a+b // WANR
}

res=a(12,3)
console.log('the ans: ',res)

==================================
let a=(a,b)=>{
    c=a+b // WAWR
    return c
}

res=a(12,3)
console.log('the ans: ',res)
===============================
let a=()=>{
      // NAWR
    return 'hai'
}

res=a()
console.log('the ans: ',res)

===============
let a=(x,y)=> x+y 
 
res=a(1,2)
console.log(res)

========================*/





/*

//  call back function 
//A callback function is a function that is passed as an argument to another function and is executed after 
// the completion of that function's operation. It's commonly used to handle asynchronous operations or events,
//  allowing you to define custom behavior once the operation is done.



//Summary:
//A function passed as an argument to another function.
//Executes after the main function finishes its operation.
//Often used for asynchronous tasks like API calls or event handling.



function call_back(anfun)
{
    setTimeout(()=>{
        anfun()
    },2000)
}


function anotherfun()
{
    console.log("hello world")
}

call_back(anotherfun)

*/


/*
// sync and async
function get( recCheckFun)
{
   
    name='sai'
setTimeout( ()=>{
        if(name==='sai')
        {
            recCheckFun()
        }
    } ,2000)
     console.log('im in get')
}
function check()
{
    console.log('pass')
}
get(check)
=============================

function get( recCheckFun)
{
    name='sai'
        if(name==='sai')
        {
            recCheckFun()
        }
     
     console.log('im in get')
}
function check()
{
    console.log('pass')
}
get(check)



// Synchronous Callback
// A synchronous callback is executed immediately when it's called, meaning the program waits for it 
// to finish before moving on to the next line of code.

// Blocking behavior: The program halts at that line and doesn't move forward until the callback is finished.


function greet(name, callback) {
    console.log('Hello, ' + name);  // This line runs first
    callback();  // The callback is executed immediately after the greeting
  }
  
  function sayGoodbye() {
    console.log('Goodbye!');  // This is the callback function
  }
  
  greet('John', sayGoodbye);  // The output will be:
  
  Hello, John
  Goodbye!
  

  


  // Asynchronous Callback
An asynchronous callback is executed after a delay, meaning the program doesn't wait for it. The code continues to run, 
and the callback is invoked later when an event happens (like data being fetched from a server, or after a timer finishes).

Non-blocking behavior: The program continues executing the next lines of code without waiting for the callback to complete.


console.log('Start');

setTimeout(() => {  // This is the asynchronous callback
  console.log('Inside the callback');  // This line runs after a delay of 2 seconds
}, 2000);  // Delay for 2 seconds

console.log('End');  // This line runs immediately after 'Start'



Key Difference
Synchronous callback: The program waits for the callback to finish before moving on to the next task. (Blocking)
Asynchronous callback: The program doesn't wait for the callback to finish and continues running other tasks. (Non-blocking)
*/



// promise state

// Asynchronous: You start the download, and while it’s happening, you can open a new tab, check your email, or even play a game.
//  When the download is done, it lets you know.

// 1. Promise
//A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It's a way to handle asynchronous operations (like reading files, fetching data, etc.) without using callbacks.

// A Promise has three states:

// Pending: The operation is ongoing, and the promise is not yet resolved or rejected.
// Resolved (Fulfilled): The operation completed successfully, and the promise has a value.
// Rejected: The operation failed, and the promise has a reason for failure.

// .then() The .then() method is used to handle a resolved promise. 
// It takes a callback function that is called when the promise is fulfilled. The callback function receives the value passed to resolve.
   

// The .catch() method is used to handle rejected promises. It takes a callback function that is called when the promise is rejected. 
// The callback function receives the reason (error) passed to reject.

//  The .finally() method is executed regardless of whether the promise is resolved or rejected. 
// This is useful for cleanup tasks or actions that need to occur after the promise has settled (either success or failure).



/*let a = new Promise((res, rej) => {
    var name = "sai";
    setTimeout(() => {
        if (name === 'sai') {
            res(name); 
        } else {
            rej('no data'); 
        }
    }, 2000);
});

a
    .then((name) => {
        console.log('received: ', name);
    })
    .catch((err) => {
        console.log('pb is: ', err);
    })
    .finally(() => {
        console.log('always i will print:');
    });*/





    const res = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const a = 'sai1'; 
                if (a==='sai') {
                    resolve(a);
                } else {
                    reject(new Error('no data'));
                }
            }, 1000);
        });
    };
    
    const handleData = async () => {
        try {
            const name = await res(); // Wait for the promise to resolve
            console.log('received', name); // Handle resolved value
        } catch (err) {
            console.log(err.stack); // Handle error stack
        } finally {
            console.log('received'); // Final message
        }
    };
    
    handleData(); // Call the async function






