let marvel = ["Spideman","Ironman"]
let dc = ["batman","superman"]

marvel.push(dc)

console.log("full_form",marvel)

let marvel1 = ["Spideman","Ironman"]
let dc1 = ["batman","superman"]

let full_form1  = marvel1.concat(dc1)

console.log("full_form1",full_form1)

let full_form2  = [...marvel1,...dc1]
console.log("full_form2",full_form2)

let data = [1,2,3,[4,5,6],7,8]
console.log(data.flat(Infinity))


//Create an array other ways
const score1=1
const score2=2
const score3=3
console.log("T/F",Array.isArray("Shanu"))
console.log("Array of ->",Array.from("Shanu"))
console.log("ME",Array.of(score1,score2,score3))
