const a1 = 100
if (true)
{
    let a=10;
    var b=11;
    const c=12;
    const a1=10000000
    console.log("a1",a1)
}
//Var should be avoided bcoz it is dangerous and does not follow scope it can be changed anywhere
//console.log(a)
console.log(b)
//console.log(c)

console.log("a1",a1)

one() // this can be placed below or top because func is already initialized

function one()
{
    const username ="shanu";
    function two()
    {   
        const email = "sss@gmail.com"
        console.log(username)// the variable in f'one has a scope till the end of the brace
    }
    //console.log(email)  --> since email is inside two its scope only in b.w them
    two()
}


//Till now you made a function made a func call and stored the data in the variable
//now new Technique
//answer() this cannot be called because the function is not inititalized
const answer  = function()
{
    return 4
}

console.log("answer",answer())


const obj1 = {
    name:"shanu",
    age:21,
    nickname:function(named){
        console.log(`The name is ${named}`)
        console.log("this",this)

    },
    nickname2:function(){
        console.log(`The name is ${this.name}`)
        console.log(this)

    }
}
console.log("obj1",obj1)
console.log("obj1.nickname1",obj1.nickname("ssssssssssss"))
console.log("obj1.nickname2",obj1.nickname2())

