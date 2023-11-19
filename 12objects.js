let a = Symbol("mysym")

let obj = {
    name:'shanu',
    age:19, 
    courses:["A","B","C"],
    "fullnam":"shanmukhadari",
    email:'shanmukhadari@gmail.com',
    [a]:"sss" //This way it should be given when used symbol if [] removed it will consider as string of a

}

console.log(obj['fullnam'])
console.log(obj['email'])
console.log("Before----->",obj)
obj.name="Aryan"
// Object.freeze(obj)
obj.name="Spiderman"
console.log("After----->",obj)


obj.greetings = function(){
    console.log("Hello JS user");
}

obj.greetings1 = function(){
    console.log(`Hello JS user ${this.email}`);
}

console.log("obj.greetings",obj.greetings)
console.log("obj.greetings()",obj.greetings())
console.log("obj.greetings()",obj.greetings1())
