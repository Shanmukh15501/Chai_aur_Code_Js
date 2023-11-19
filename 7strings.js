let firstname="shanmukh"
let middlename = "adari"
let lastname = 501
console.log(firstname+ middlename+ lastname)

console.log(`The Combination is as follows ${firstname} ${middlename} ${lastname}`)

let newstring = new String("shanmukh")
console.log(newstring)
console.log(typeof newstring)
console.log(newstring.length)
console.log(newstring.toUpperCase())
console.log(newstring.charAt(2))
console.log(newstring.indexOf('s'))

let substring = newstring.substring(0,4)
console.log(substring)
//reverse order 
//shanmukh
//-8-7-6-5-4-3-2-1
const slicestring = newstring.slice(-3,-1)
console.log(slicestring)



let trimstring = "                ssss                 "
console.log(trimstring.trim())

const url =  "https://www.geeksforgeeks.org/%20python-program-to-convert-a-list-to-string/"
console.log(url.replace("%20","------------------"))
console.log(url.includes("shanu"))
console.log(url.includes("geeksforgeeks"))
console.log(url.split("/"))