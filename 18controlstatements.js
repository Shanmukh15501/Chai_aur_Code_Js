const temperature = 100
if (temperature<50)
{
    console.log("The temperature is less than 50");
}
else if (temperature > 50 &&  temperature < 100)
{
    console.log("The temperature is > than 50 and < 100");
}
else{

    console.log("Danger-----------------------------");

}


option = 2

switch(option)
{

    case 1:
        console.log("You Choose Case-1");
        break;
    case 2:
        console.log("You choose case 2");
        break;
    default:
        console.log("You Ended in default")
        break;

}


// nullish Coaleansce operator ??
let x=10;
console.log(x??1099999)
console.log(null??10)
console.log(undefined??10)


//Terenary operator
const tea = 100

tea >=1000? console.log("price > 100"):console.log("price < 100")


let obj = {};



if (Object.keys(obj).length == '0')
{
    console.log("YEEEEEEEEEEEEEEEEEEES");
}
else{
    console.log("NOOOOOOOOOOOOOOOO")
}


if (Object.keys(obj).length === '0')
{
    console.log("YEEEEEEEEEEEEEEEEEEES");
}
else{
    console.log("NOOOOOOOOOOOOOOOO")
}


for (let i=0;i<=10;i++)
{
    const element = i;
    console.log(element);
    if (element === 5)
    {
        console.log("5 is the best");
    }
}


let num = 987;
let sum =0;
let result = 0

while(num!==0)
{
    let rem = num%10;
    result = result * 10 + rem;
    num = parseInt(num/10);


}
console.log("final",result);

let arr = ["shakti","bhakti","trupti"]

for (let i =0; i<arr.length;i++)
{
    console.log(arr[i])
}


//for of loop


for (const i of arr)
{
    console.log(`-------->${i}`)
}

let data = new Map()

data.set('in','india');
data.set('usa','united states of america');
data.set('aus','australia');


console.log(data)



for (const [key,value] of data)
{
    console.log(`--${key}------>${value}`)
}


arr.forEach(function(val)
{
    val = val + '.exe'
    console.log(val);
}

)

console.log(`--${arr}`)



arr.forEach((item,index,arr)=>

{
    console.log(item,index,arr);
}


)