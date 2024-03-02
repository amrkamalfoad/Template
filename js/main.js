//scroll up Button
let container=document.querySelector(".skills-container");
let spans=document.querySelectorAll(".skills-container .skill-div .skills>div .indication span");
let up=document.getElementsByClassName('up')[0];
window.onscroll=()=>{
    if(window.scrollY >= container.offsetTop-120){
    console.log("reached");
    spans.forEach((span)=>{
        span.style.width=span.dataset.width;
    })
    if(window.scrollY>600){
        up.style.display='block';
    }else{
        up.style.display='none';
    }
    }
    if(window.scrollY>=divstats.offsetTop){
        if(!started){
            for(let i=0;i<countspan.length;i++){
                incNum(countspan[i])
            }
            started=true;
        } 
    }

};

up.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
// by click on otherLinks in nav a dropdrown list appear
let dropListNav=document.getElementsByClassName('megainside')[0];
let otherLinks=document.getElementsByClassName('links')[0];
let drop=document.getElementsByClassName('megainside')[0];

otherLinks.addEventListener('mouseover',function(){
    dropListNav.style.display = "block";
})
otherLinks.addEventListener('mouseout',function(){
    dropListNav.style.display = "none";
})
drop.addEventListener('mouseover',function(){
    dropListNav.style.display = "block";
})
drop.addEventListener('mouseout',function(){
    dropListNav.style.display = "none";
})


//links on click scroll to container
let articles=document.getElementById('articles');
let divarticles=document.getElementsByClassName('articles')[0];
let gallery=document.getElementById('gallery');
let divgallery=document.getElementsByClassName('gallery-container')[0];
let features=document.getElementById('features');
let divfeatures=document.getElementsByClassName('features')[0];
let testimonals=document.getElementById('testimonials');
let divtestimonals=document.getElementsByClassName('test')[0];
let team=document.getElementById('team');
let divteammembers=document.getElementsByClassName('team-members')[0];
let services=document.getElementById('services');
let divservices=document.getElementsByClassName('services-container')[0];
let skills=document.getElementById('ourskills');
let divskills=document.getElementsByClassName('skills-container')[0];
let works=document.getElementById('howitworks');
let divworks=document.getElementsByClassName('works-container')[0];
let events=document.getElementById('events');
let divevents=document.getElementsByClassName('events-container')[0];
let plans=document.getElementById('plans');
let divplans=document.getElementsByClassName('plans-container')[0];
let videos=document.getElementById('videos');
let divvideos=document.getElementsByClassName('videos-container')[0];
let stats=document.getElementById('stats');
let divstats=document.getElementsByClassName('stats-container')[0];
let discount=document.getElementById('discount');
let divdiscount=document.getElementsByClassName('discount-container')[0];

articles.addEventListener('click',function(){
    window.scrollTo({
        top:divarticles.offsetTop,
        behavior:"smooth"
    })
})
gallery.addEventListener('click',function(){
    window.scrollTo({
        top:divgallery.offsetTop,
        behavior:"smooth"
    })
})
features.addEventListener('click',function(){
    window.scrollTo({
        top:divfeatures.offsetTop,
        behavior:"smooth"
    })
})
testimonals.addEventListener('click',function(){
    window.scrollTo({
        top:divtestimonals.offsetTop,
        behavior:"smooth"
    })
})
services.addEventListener('click',function(){
    window.scrollTo({
        top:divservices.offsetTop,
        behavior:"smooth"
    })
})
skills.addEventListener('click',function(){
    window.scrollTo({
        top:divskills.offsetTop,
        behavior:"smooth"
    })
})
works.addEventListener('click',function(){
    window.scrollTo({
        top:divworks.offsetTop,
        behavior:"smooth"
    })
})
events.addEventListener('click',function(){
    window.scrollTo({
        top:divevents.offsetTop,
        behavior:"smooth"
    })
})
plans.addEventListener('click',function(){
    window.scrollTo({
        top:divplans.offsetTop,
        behavior:"smooth"
    })
})
videos.addEventListener('click',function(){
    window.scrollTo({
        top:divvideos.offsetTop,
        behavior:"smooth"
    })
})
stats.addEventListener('click',function(){
    window.scrollTo({
        top:divstats.offsetTop,
        behavior:"smooth"
    })
});
discount.addEventListener('click',function(){
    window.scrollTo({
        top:divdiscount.offsetTop,
        behavior:"smooth"
    })
});

//counter stats increasings numbers
let countspan=document.getElementsByClassName('count');
let started =false //function started no

function incNum(el){
    let goal=el.dataset.count;
        let count=setInterval(()=>{
            el.textContent++;
            if(el.textContent == goal){
                clearInterval(count)
            }
            
        },2000/goal)
}

