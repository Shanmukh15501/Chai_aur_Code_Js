const a=1
let b=2 
var c=3
//Cannot assign in const variable bcoz data is fixed will throw error
//a=2//
b=3
c=4

//another way of printing
console.log(a,b,c)
console.table([a,b,c])


//Why should i use let instead of var bcoz var is having issue with scope so prefer only let
//if value is not defined js takes the value as undefined