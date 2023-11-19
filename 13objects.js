let new_obj ={} // normal object
let new_obj1 = new Object() //singleton object

new_obj1.id = 1
new_obj1.name ="sss"
console.log(new_obj1)

let new_obj2 =
{
    name:"shanu",
    fulldetails:{
        age:20,
        email:"shanu@gmail.com",
        address:{
            state:"AP",
            city:"Vizag"
        }
    }
}

console.log("new_obj2",new_obj2)
console.log("new_obj2.fulldetails",new_obj2.fulldetails)
console.log("new_obj2.fulldetails.address",new_obj2.fulldetails.address)
console.log("new_obj2.fulldetails.address.state",new_obj2.fulldetails.address.state)



const obj4 = {'a':1,'b':2}
const obj5 = {'b':3,'d':4}
const obj6 = { obj4,obj5} //just like array of arrays we get objects of objects not a good pattersn
console.log(obj6)
const obj7 =  Object.assign({},obj4,obj5)
console.log(obj7)

const users = [
    {
        id:1
    },
    {
        id:2
    },
    {
        id:3
    }
]


const obj8 =  {...obj4,...obj5}

console.log(obj8)

console.log(Object.keys(obj8))

console.log(Object.values(obj8))

console.log(Object.entries(obj8))

console.log(users[1].id)


console.log(users[1].hasOwnProperty('id'))

///this is a part of destructuring of json
console.log(new_obj2)
const {name:nn} = new_obj2

console.log("NNN",nn)