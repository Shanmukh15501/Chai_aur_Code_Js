//this works only for objects not functions
//1-------------------------
function arr()
{
    console.log("1");
}
arr()
//2-------------------------

const arr1 = function()
{
    console.log("2");
}
arr1()
//3-----------------------arrow functions
//const arr2 = () => {} ('has the parameters') { logic inside func }
//if used {} braces u need to use return key word

const arr2 = (num1,num2) => {
    return num1 + num2
}

console.log("arr2",arr2(3,4))


//4----------- arrow func with () 
const arr3 = (num1,num2) => (num1 + num2)


console.log("arr3",arr3(3,4))
