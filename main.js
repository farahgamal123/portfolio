let togglebtn = document.querySelector(".togglebtn");
let nav = document.querySelector(".navlinks");
let links = document.querySelector(".navlinks li");

togglebtn.addEventListener("click",function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})
let typed=new typed(".input",{
    strings:["Frontend Developer","Ux Designer","Web Developer"],
    
})