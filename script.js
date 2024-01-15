let blur=document.querySelector("#cursor-blur");
let csr=document.querySelector("#cursor");
document.addEventListener('mousemove',function(dir){ 
    csr.style.left=dir.x+"px";
    csr.style.top=dir.y+"px";
    blur.style.left=dir.x-170+"px";
    blur.style.top=dir.y-170+"px";
})

var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter" ,function(){
        csr.style.scale=3
        csr.style.backgroundColor="transparent"
        csr.style.border="1px solid black"
    })

    elem.addEventListener("mouseleave" ,function(){
        csr.style.scale=1
        csr.style.backgroundColor="#95c11e"
        csr.style.border="0px solid black"
    })
})

gsap.to("#nav",{
    backgroundColor:'blue',
    height:"200px",
    duration:0.5 ,
    // delay:1,

    scrollTrigger:{
        trigger:"#nav",
        scroll:"body",
        // markers:true,
        start:"top -0%",
        scrub:1
    }

})

gsap.to("#main",{
    backgroundColor:"black",
    innerWidth:"100%",
    outerWidth:"100%",
    scrollTrigger:{
    trigger:"#main",
    scroll:"body",
    start:"top -0%",
    end:"top -90%",
    duration:5,
    
    scrub:3
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.6,
    scrollTrigger:{
        trigger:"about-us",
        scroller:"body",
        markers:true,
        start:"top 70%",
        end:"top 75%",
    }

})
