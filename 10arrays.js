//array
const arr = [10,11,12,13,14]
const arr1 = ["shanu","sai"]

const arr2 = new Array(1,2,3,4,5)
console.log(`${arr2} ${typeof arr2}}`)
//Array Methods

arr.push(4)
arr.push(5)
console.log(`${arr} ${typeof arr}}`)
arr.pop()
console.log(`${arr} ${typeof arr}}`)
//unshift all elements and places 9 in the top place
arr.unshift(9)
//shift removes the first or top elemant in list
arr.shift()
console.log(`${arr} ${typeof arr}}`)

console.log(`${arr.includes(9)} ${arr.indexOf(9)}}`)
console.log(`${arr.includes(11)} ${arr.indexOf(11)}}`)
// convert array to string 
const newarr = arr.join()
console.log(`${newarr} ${typeof newarr}}`)

//slice and spice
console.log("slice--splice")

console.log("A")
let arr3 = [10,11,12,13,14]
console.log(`${arr3} ${typeof arr3}}`)

console.log("B")
let arr4 = arr3.slice(1,3)
console.log(`${arr3} ${typeof arr3}}`)
console.log(`${arr4} ${typeof arr4}}`)

console.log("C")
let arr5 = arr3.splice(1,3)
console.log(`${arr3} ${typeof arr3}}`)
console.log(`${arr5} ${typeof arr5}}`)

//Difference between slice and splice 
//1.slice avoids last number in range like 0-n-1
//2.splice takes the full number range 0-n
//in slice the actual array is not modified
//in splice the actual array is modified
