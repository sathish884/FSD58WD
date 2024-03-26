// Window Object
//window.alert("Hello")
const innerheight = window.innerHeight;
const innerwidth = window.innerWidth;
console.log("height :", innerheight)
console.log("width :", innerwidth)
const pro = window.prompt();
console.log("promt msg :", pro)
//const win = window.open("https://chat.openai.com/c/7f4e77eb-4995-46a0-8189-2df6c628f29a", "_blank")

// setTimeout(() => {
//     win.close();
// }, 5000);
const loc = window.location;
console.log("location :", loc)

window.confirm("are you sure");

// Document objects

const createEle = document.createElement('div');
createEle.createElement = 'h1'
//createEle.id = "myCont";
createEle.className = "myCon";
createEle.innerText = "Hello, sathish";
//createEle.textContent = "Hello, sathish";
createEle.style.color = "red";
createEle.style.width = '50px';


// append the div element to the body of the document
document.body.appendChild(createEle)