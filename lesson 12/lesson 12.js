//1
function shopping(arr1, arr2)
{
    return new Promise((resolve, reject) => {
        if (arr1.length != arr2.length)
        {
            reject("You forgot some products")
        }
        arr1.sort((a, b) => { return a.localeCompare(b) })
        arr2.sort((a, b) => { return a.localeCompare(b) })
        for (let i = 0; i < arr1.length; i++) {
            console.log(arr1[i], arr2[i]);
            if (arr1[i] !== arr2[i])
            {
                reject("You forgot some products")
            }
        }
        resolve("Good Work")
    })
}
//2
function promiceDice()
{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const result1 = Math.floor(Math.random() * 6 + 1)
            const result2 = Math.floor(Math.random() * 6 + 1)
            if(result1===result2)
            {
                resolve("lucky, "+ result1)
            }
            else
            {
                resolve("the first number is "+ result1+ " the second number is "+ result2)
            }
        }, 3000)
    })
}
function callbackDice(cb)
{
    const result1 = Math.floor(Math.random() * 6 + 1)
    const result2 = Math.floor(Math.random() * 6 + 1)
    setTimeout(()=>{
        cb(result1, result2)
    },0)
}
const cb = (result1, result2) =>
{
    if(result1===result2)
    {
        console.log("lucky, "+ result1);
    }
    else
    {
        console.log("the first number is "+ result1+ " the second number is "+ result2)
    }
}
callbackDice(cb)