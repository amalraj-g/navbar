const bar=document.querySelector(".hamburger");
const page=document.querySelector("ul");

bar.addEventListener("click",()=>{
    page.classList.toggle("show");
    bar.children[0].classList.toggle("slide1");
    bar.children[1].classList.toggle("slide2");
    bar.children[2].classList.toggle("slide3");
});