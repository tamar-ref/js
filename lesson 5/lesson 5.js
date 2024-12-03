//תרגיל 1
//סעיף שני

//1
function SortByName()
{
    let input1=document.getElementById("name").value;
    let arr=catalog.filter(x=>x["title"].includes(input1));
    document.getElementById("t").innerHTML="";
    arr.map(x=>Print(x));
}
//2
document.addEventListener("DOMContentLoaded", function(){
    const arr0=catalog.reduce((prev,cur)=>
        {
            if(!prev.includes(cur.country))
                prev.push(cur.country)
            return prev    
        },[]);
    for (const item of arr0) {
        document.getElementById("select").innerHTML+="<option>"+item+"</option>"
    }
});
function SortByCountry()
{
    let country=event.target.value;
    const arr=catalog.filter(item=>item.country===country)
    document.getElementById("t").innerHTML="";
    arr.map(x=>Print(x))
}
//3
function SortByYear()
{
    let year_=document.getElementById("year1").value;
    let year__=document.getElementById("year2").value;
    let year1=Math.min(year_,year__);
    let year2=Math.max(year_,year__);
    let found=catalog.find(x=> x.year>=year1 && x.year<=year2);
    document.getElementById("t").innerHTML="";
    Print(found)
}
//4
function Print(t)
{
    document.getElementById("t").innerHTML+="<tr>"+"<td>"+t.id+"</td>"+"<td>"+t.title+"</td>"+"<td>"+t.artist+"</td>"+"<td>"+t.country+"</td>"+"<td>"+t.company+"</td>"+"<td>"+t.price+"</td>"+"<td>"+t.year+"</td>"+"</tr>"
}
//5
function Add()
{
    const add={
        id: catalog[catalog.length-1].id+1,
        title:document.getElementById("title").value,
        artist:document.getElementById("artist").value,
        country:document.getElementById("country").value,
        company:document.getElementById("company").value,
        price:document.getElementById("price").value,
        year:document.getElementById("year").value,
    }
    catalog.push(add);
    alert("המוצר נוסף בהצלחה");
}
//6
function Remove()
{
    let id=document.getElementById("id").value;
    let remove=catalog.findIndex(x=>x.id==id);
    catalog.splice(remove,1);
    alert("המוצר הוסר בהצלחה");
}

//תרגיל 2

//א
const names=['Alice','Bob','Tiff','Bruce','Alice'];
let obj=names.reduce((prev,cur)=>
{
    if(!prev[cur])
    {
        prev[cur]=0;
    }
    prev[cur]++;
    return prev;
},{});
console.log(obj);
//ב
const letters=['a','b','a','b','c','e','e','c','d','d','d','d'];
let arr1=letters.reduce((prev,cur)=>
{
    if(!prev.includes(cur))
    {
        prev.push(cur);
    }
    return prev;
},[])
console.log(arr1);
//ג
const numbers=[-5,25,-19,0,16,0];
let arr2=numbers.reduce((prev,cur)=>
{
    n=Math.sqrt(cur)
    if(Number.isInteger(n))
    {
        prev.push(n);
    }
    return prev;
},[])
console.log(arr2);