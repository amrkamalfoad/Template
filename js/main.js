let container=document.querySelector(".skills-container");
let spans=document.querySelectorAll(".skills-container .skill-div .skills>div .indication span");
let up=document.getElementsByClassName('up')[0];
window.onscroll=()=>{
    if(window.scrollY >= container.offsetTop-120){
    console.log("reached")
    spans.forEach((span)=>{
        span.style.width=span.dataset.width;
    })
    if(window.scrollY>600){
        up.style.display='block';
    }else{
        up.style.display='none';
    }
}
};

up.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
let dropListNav=document.getElementsByClassName('megainside')[0];

let otherLinks=document.getElementsByClassName('links')[0];
console.log(otherLinks)
otherLinks.addEventListener("click",function(){
    if (dropListNav.style.display === "none") {
        // If it is none, change it to block
        dropListNav.style.display = "block";
      } else {
        // If it is block, change it to none
        dropListNav.style.display = "none";
      }
})

