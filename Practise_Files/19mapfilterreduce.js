const ans = [1,2,3,4,5,6,7,8]
// ans.forEach((item,index,ans)=>

// {
//     console.log(item,index,ans);
// }
// )

const result  =  ans.filter((ans)=>{

    return ans>5
})

// console.log(result)

//another way
new_num = []
ans.forEach(
    
    (ans)=>{

        if (ans > 5)
        {
            new_num.push(ans)
        }
    }

)

// console.log(new_num)


jntuk = [
    {
        name:"shanmukh",
        subject:"java"
    },
    {
        name:"nikhil",
        subject:"java"
    },
    {
        name:"arvind",
        subject:"python"
    },
    {
        name:"shanmukh",
        subject:"python"
    }

]

const result1 = []

jntuk.filter(
    
    (bk)=>{

        if ((bk.name === 'shanmukh') && (bk.subject === 'python'))
        {

            result1.push(bk);
            return result1
        
        }
    }
)

console.log("result1",result1)


const num = [1,2,3,4,5,6,7,8,9,10,11,12]

const numbers = [
    
    num.map((bk)=>{


        return bk+1

    }


    )
]
console.log("numbers",numbers)
