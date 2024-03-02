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

