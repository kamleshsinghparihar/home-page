   var nav = document.querySelector("nav")
   nav.addEventListener("mouseenter", function(){
    var tl = gsap.timeline()

    tl.to(".nav-bottom" , {
        height:"21vh"
    })
    tl.to(".bottom-div h5 span" , {
        display:"block"
    })
    tl.to(".nav-part2 h5",{
        display:"block"
    })
   })