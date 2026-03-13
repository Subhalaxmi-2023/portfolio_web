let text="Web Developer | Programmer"
let i=0

function typing(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i)
i++
setTimeout(typing,100)
}
}
typing()

document.getElementById("darkMode").onclick=function(){
document.body.classList.toggle("dark")
}

let topBtn=document.getElementById("topBtn")

window.onscroll=function(){
if(document.documentElement.scrollTop>200){
topBtn.style.display="block"
}else{
topBtn.style.display="none"
}
}

topBtn.onclick=function(){
window.scrollTo({
top:0,
behavior:"smooth"
})
}

document.querySelector(".menu-toggle").onclick=function(){
document.querySelector(".nav").classList.toggle("active")
}

document.getElementById("contactForm").addEventListener("submit",function(e){
e.preventDefault()
alert("Message sent successfully!")
})
