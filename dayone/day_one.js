/*const message= 'hello world'
console.log(message)



const message1 = 'Hello world' 
console.log(message1)

// hoisting 
myMessage= 'hello'
console.log("my data is: ",myMessage)


// template literals 
const myName= 'dhoni'
const rollNo=55
console.log("my name is",myName,"My roll number",rollNo)
console.log(my name is ${myName} My roll number ${rollNo} )

// canot reassig the const key word data 
// can reassig the let and var key word data



var name="rohit21"
function disp(){name="jeeva"
  console.log(name)
  if(true){ name="rock"
    console.log(name)
  }
    console.log(name)
}
disp() 

  console.log(outside the function ${name})
  
  
  // const canot redeclare but inside function and block it was recreated
const  name1="rohit"
function disp(){
    const name1="jeeva"
  console.log(name1)
  if(true){ const name1="rock"
    console.log(name1)
  }}disp() 
  console.log(outside the function ${name1})
  
  
  
  // objects  and array are reference type in javascript
  
  const person={
      roll: 23,
      stuname:"jeevanantham_s"
    }
    
    person.stuname="jeeva"
    console.log(person)
    
    
    // array in javascript
    
    const arr=[1,2,5,"d"]
    console.log(arr)
    
    
   const person1={
    roll:23,
    stuName:"sai"
  }
  person.stuName="ram"
  console.log(person1.stuName);
const per=[12,'nan',90,89]
  const a=[23,1,4,6]
  /*
 {
  0:23
  1:1
  2:4
  3:6
  }
  */
/*  a[0]=45
 console.log(a);
 
 
 // string
 
  b="ram"
  c=`hai erwer
  weerewrewrewrw werwerwerwe werwerewrewr `
 console.log(a);
 console.log(b);
 console.log(c);
 
 
 // numbers   and nan -> not a number
 
 console.log("Hello, World!");
 a1 = 12;
b = 32432423442343242342342222222222n;
c = Infinity;
 d1 = 10 / 0;
 e = 5 < Infinity;
 d = 'hai' * 3;
f=NaN
console.log(a1);
console.log(b);
console.log(c);
console.log(d1);
console.log(e);
console.log(d);
console.log(f);


// true and false  and typeof key word


let a3= false
let b3= true
console.log(a3)
console.log(b3)
console.log (typeof.(a3))*/

/* 
// null  and undefined
let a= null
console.log(a)
console.log (typeof (a))



let a65
console.log(a,typeof(a65))*/


// equality operators  and power operator
/*
var a=89
var b='1'
console.log(a===b)
var c=5
console.log(c===a)
console.log(b!==a)
console.log(a**5) // power operator


*/
/*

let a=[12,4,"sai",23.4]
let datas=[100,200,300]
let person={name:'reena', roll:5}
console.log(a)
a.push(datas,800,person)
console.log(a)

console.log(a[4])
a[4].push(400)
console.log(a)
// ============================

let p=[12,4,"sai",23.4]
let datas8=[100,200,300]
let person8={name:'reena', roll:5}
console.log(p)
p.unshift(datas8,800,person8)
p.unshift(800)
console.log(p)
console.log(p[0])

// =========================================
let k5=[12,4,"sai",23.4]
let k89=[100,200,300]
let k7={name:'reena', roll:5}
k5.push(datas,800,person)
//res=a.pop()
res=k5[4].pop()
 
console.log("result" ,res)
console.log(k5)

// ===========================================
let a89=[12,4,"sai",23.4]
 
res=a89.shift()
 
console.log("result" ,res)
console.log(a89)

// ===============================
*/
/*
// delete operator in delete an element in array

let a=[12,4,"sai",23.4]
console.log("b4 del",a.length)
res=delete a[1]
console.log(a)

console.log("after del",a.length)

for(let i=0;i<a.length;i++)
console.log(a[i])


let ar=[12,4,1]
var s=0
 

for(let i=0;i<arr.length;i++)
s=s+arr[i]   // sum of elements
console.log(s)  */


/* // splice is used to modifies the array
let a=[10,20,30,40,50]
let b=[100,200,300]
console.log('len: ',a.length)
 
a.splice(1,2,b)//index, how many ele u dnt want
console.log('len : ',a.length)
console.log('datas : ',a)
*/


/*   slice is like a substring method in java
let a=[10,20,30,14]
res =a.slice(1,4)
console.log(res)

*/


/*   objects 

let perso={
  roll:12,
  name:"sai"
}
console.log(perso)
console.log("dot notation: ",perso.name ," ",perso.roll)
console.log("sqr brkt notation: ",perso["name"] ," ",perso["roll"])

let person={
  roll:12,
  name:"sai"
}
person.name="ram"
person['roll']=1
console.log(person)

let peron={
  roll:12,
  name:"sai"
}
peron.city="CBE"
peron['state']='TN'
peron.name="ram"
peron['roll']=1
console.log(peron)


//delete person.roll
delete peron['roll']
console.log('after del',peron)


let peson=[{
  roll:12,
  name:"sai"
},{
  roll:13,
  name:"ram"
}

]
 
console.log(peson)
for(let a of peson)
console.log(a.roll," "+a['name'])
//console.log(a)


*/


let person={
  roll:12,
  name:"sai",
  city:'ceb',
  state:'tn'
} 
 
 
console.log(person)
for(let key in person)
console.log(key ," : ",person[key])