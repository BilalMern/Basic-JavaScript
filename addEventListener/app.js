// let nav = document.querySelector("#nav").innerHTML=`<h1>Hello there</h1>`
// document.querySelector("#nav").onclick=abc
// function abc(){
//    document.querySelector("#nav").style.color="red"
// }

// let nav = document.getElementById("nav");
// nav.innerHTML=`<h1>Hello there</h1>`
// nav.onclick=abc;
// function abc (){
//     nav.style.background="red"
// }

let nav = document.querySelector("#nav");
nav.innerHTML=`<h1>Hello there</h1>`
nav.addEventListener("click",abc);
function abc (){
    nav.style.background="red"
}


