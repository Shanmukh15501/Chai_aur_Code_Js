function say(){
    console.log("1");
    console.log("2");
    console.log("3");
    console.log("4");
    console.log("5");

}
// say()

function add_two_num(num1,num2){
    console.log(num1+num2)
    return num1+num2
}

add_two_num(3,4)
const res = add_two_num(3,"4")
console.log("res",res)


function login(username)
{
    if (!username){
        console.log("ReEnter UserName")
        return false
    }
    else{
        console.log(`${username} logged in`)
        return true
    }
}
console.log("RE",login())
console.log("RE",login("shanu"))




function numbers(num1)
{
    return num1
}
console.log("RE",numbers(2,2,2))

function numbers1(...num2)
{
    return num2
}
console.log("RE1",numbers1(2,2,2))

function numbers2(val1,...num3)
{
    return num3
}
console.log("RE2",numbers2(2,3,4))

let userdetails = {
    name:"shanu",
    age:21

}

function userdetail(anyobject)
{
    console.log(`The username is ${anyobject.name}`)
    return true
}
console.log("RE2",userdetail(userdetails))

let arr = [1,2,3,4]
function arraydetails(arrayy)
{
    console.log(`The arrayy is ${arrayy}`)
    return arrayy[1]
}
console.log("arraydetails",arraydetails(arr))