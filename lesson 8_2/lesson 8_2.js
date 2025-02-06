//תרגיל 1

//1 2 3
const f=new Object()
f.name="grapes"
f.calories=150
f.price=12
f.print=function()
{
    console.log(this.name, this.calories, this.price)
}
const fruits=[
    {name:"apple" ,calories:50 ,price: 5 ,print(){console.log(this.name, this.calories, this.price)}},
    {name:"orange" ,calories:70 ,price: 3 ,print(){console.log(this.name, this.calories, this.price)}},
    f,
]
//4
for (let i = 0; i < fruits.length; i++)
{
    fruits[i].print()    
}
//5
fruits[0].color="green"
//6
for (let i = 0; i < fruits.length; i++)
{
    if("color" in fruits[i])
    fruits[i].print()    
}
//7
for (key in fruits[0])
{
    console.log(key,fruits[0][key]);
}
//8
delete(fruits[1].price)
let str=""
for(key in fruits[1])
{
    str+=key+': '+fruits[1][key]+'<br>'
}
document.getElementById("p").innerHTML=str
//9
function ChangePrice()
{
    fruits[0].price=document.getElementById("price").value
}
//10
function DeleteByCalories()
{
    fruits=fruits.filter(x=>x.calories<=document.getElementById("calories").value)
}
//11
for (let i = 0; i < fruits.length; i++)
{
    Object.defineProperty(fruits[i],"Price",{
        set(pr){
            if(pr>10 && pr<10000)
            {
                this.price=pr
            }
        }
    })    
}

//תרגיל 2

//1
function MassageBox(color, bgColor, icon, msg={title:"",body:""})
{
    this.color=color
    this.bgColor=bgColor
    this.icon=icon
    this.msg=msg
    this.render=()=>
    {
        let m=document.createElement('div')
        m.style.color=this.color
        m.style.backgroundColor=this.bgColor
        let i=document.createElement("img")
        i.setAttribute("src",icon)
        m.appendChild(i)
        
        let t=document.createElement('h1')
        t.innerHTML=this.msg.title
        m.appendChild(t)

        let b=document.createElement('p')
        b.innerHTML=this.msg.body
        m.appendChild(b)
        document.body.appendChild(m)

    }
}
//2
const info1=new MassageBox("blue","lightblue","info.jpg",{title:'information',body:'hello every body'})
const warning1=new MassageBox("orange","yellow","warning.jpg",{title:'warning',body:'this might be a problem'})
const eror1=new MassageBox("red","pink","error.jpg",{title:'error',body:'you are wrong'})
//3
const massages={
    info:info1,
    warning:warning1,
    error:eror1,
}
//5
function Add()
{
    let type=document.getElementById("select").value
    massages[type].msg.title=document.getElementById("title").value
    massages[type].msg.body=document.getElementById("body").value
    massages[type].render()
}