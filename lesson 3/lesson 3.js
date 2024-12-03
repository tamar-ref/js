//עמוד 6

//1
const arr=[81,4,-6,25,-5];
const f= function(select,from,where)
{
    let arr=from.map(select);
    let arr0=[];
    for (let i = 0; i < arr.length; i++)
    {
        if(where(arr[i]))
        {
            arr0.push(arr[i]);
        }        
    }
    return arr0
}
console.log(arr);
console.log(f(x=>Math.sqrt(x) , arr , x=>x>0));
//2
const mult=function(...args)
{
    if (args.length>1)
    {
        let m=1;
        for (let i = 0; i < args.length; i++)
        {
            m*=args[i];            
        }
        return m;
    }
    let arg1=args[0]
    return function(...arg2)
    {
        let sum=0;
        for (let i = 0; i < arg2.length; i++)
        {
            sum+=arg2[i];
        }
        return args[0]*sum;
    }
}
console.log(mult(2,3,10));//60
console.log(mult(2)(3,10));//26