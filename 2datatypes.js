//what is use strict in js
//This says use only latest syntax of js

//alert("hi") This will throw error bcoz we are running through node not browser

let name = "sai"
let age =25
let result = false
//Primitive------------------------------------------------------------
//number holds data upto 2**53
//bigint
//string
//boolean true/false
//null
//undefined
//Difference between null and undefined --> undefined means variable is created no data allocated
//->null means empty does not mean a="" which is wrong a=null which means asigning an empty box in it
//symbol -> useful while working with react for uniqueness
let a = Symbol("123")
let b = Symbol("123")
console.log(typeof a)
console.log(a)
console.log(b)
console.log(a==b)


//object----------
//null is an object
console.log(typeof age)
console.log(typeof null)
console.log(typeof undefined)


//Non-Primitive-------------------------------------
//Array
let arrrray = ["ddd","fff","ss"]

console.log(arrrray)

// objects
let objj = {
    name:"shanu",

    age:22,
}
//Function
const myfunction = function(){
    console.log("Hello World");
}


console.log(typeof arr)
console.log(typeof objj)
console.log(typeof myfunction)

//----------Memory Management
//All primitive come under stack non primitives come under heap
let ooo = {
    email:"shanmukhadari@gmail.com",
    age:22
}
ooo1=ooo
ooo.age=21
let arrs = ["ddd","fff","ss"]
arr1=arrs
arrs[0]="sssssss"
console.log(arrs)
console.log(arr1)


console.log(ooo)
console.log(ooo1)