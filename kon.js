var a=document.querySelector("#page2 #img2");
var m=document.querySelector("#page2 #img1");
var b=document.querySelector("#line #ine");
var c=document.querySelector("#page2 #img3");
var d=document.querySelector("#page2 #nav h5");
var e=document.querySelector("#page2 #nav h4");
var f=document.querySelector("#page2 #nav h3");

e.addEventListener("click",function(){

    e.style.color="white";
    b.style.left="20%";
    a.style.opacity="1";
    m.style.opacity="0";
    c.style.opacity="0";
    d.style.color="#b2b1b1";
    f.style.color="#b2b1b1";

})
f.addEventListener("click",function(){
    
    f.style.color="white";
    b.style.left="45%";
    c.style.opacity="1";
    a.style.opacity="0";
    m.style.opacity="0";
    e.style.color="#b2b1b1";
    d.style.color="#b2b1b1";

})
d.addEventListener("click",function(){
    console.log("d");
    d.style.color="white";
    b.style.left="0";
    m.style.opacity="1";
    c.style.opacity="0";
    a.style.opacity="0";
    f.style.color="#b2b1b1";
    e.style.color="#b2b1b1"

})