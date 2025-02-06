let count = 1
const HtmlElement = function(type, textContent)
{
    this.type = type
    this.textContent = textContent
    this.id = count
    count += 1
}
HtmlElement.prototype.render = function()
{
    return `<${this.type} id="elem${this.id}">${this.textContent}</${this.type}>`
}
const ImageElement = function(src, alt)
{
    HtmlElement.call(this, 'img', alt)
    this.src = src
    this.alt = alt
}
ImageElement.prototype = Object.create(HtmlElement.prototype)
ImageElement.prototype.constructor = ImageElement
ImageElement.prototype.render = function()
{
    return `<img src="${this.src}" id="elem${this.id}" alt="${this.alt}"><br>`
}
const SelectElement = function(options)
{
    HtmlElement.call(this, 'select', '')
    this.options = options
}
SelectElement.prototype = Object.create(HtmlElement.prototype)
SelectElement.prototype.constructor = SelectElement
SelectElement.prototype.render = function()
{
    let opt=``
    this.options.forEach(element => {
        opt+=`<option value="${element}">${element}</option>`
    });
    return `<select id="elem${this.id}">${opt}</select><br>`
}
function CreateElement()
{
    let type = document.getElementById("type").value
    let textContent = document.getElementById("textContent").value
    let element = new HtmlElement(type, textContent)
    document.body.innerHTML+=element.render()
}
function CreateImage()
{
    let src = document.getElementById("src").value
    let alt = document.getElementById("alt").value
    let element = new ImageElement(src, alt)
    document.body.innerHTML+=element.render()
}
function CreateSelect()
{
    let options = (document.getElementById("options").value).split(',')
    let element = new SelectElement(options)
    document.body.innerHTML+=element.render()
}