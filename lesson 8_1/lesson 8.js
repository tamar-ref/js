//א
function Sum()
{
    alert(+document.getElementById("n1").value+(+document.getElementById("n2").value))
}
function Mul()
{
    alert(document.getElementById("n1").value*document.getElementById("n2").value)
}
function Pow()
{
    alert(document.getElementById("n1").value**document.getElementById("n2").value)
}
function Bin()
{
    let n1=document.getElementById("n1").value
    let n2=document.getElementById("n2").value
    let n3=parseInt(n1, 2)+parseInt(n2, 2)
    alert(n3.toString(2))
    
}
//ב
function Save()
{
    let name=document.getElementById("name").value||"אורח"
    let password=document.getElementById("password").value||"1234"
    alert("שלום "+name+" סיסמתך היא "+password)
}