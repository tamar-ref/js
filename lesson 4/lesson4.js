//עמוד 6
//תרגיל 3
const myBox = (arr=[]) => {
    return(num) => {
        if(typeof num == "number")
        {
            arr.push(num);
        }
        return arr;
    }
}
const add1 = myBox([1,5,2])
console.log(add1(10));
console.log(add1('try'));
console.log(add1(100));