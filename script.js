


let t = gsap.timeline()


t.from("#navbar img,#nav-links ul li,#nav-log  ",{
    y:-100,
    stagger:0.5,
    duration:1,
    opacity:0,
    delay:1

})

t.from("#main h1", {
    y:140,
    stagger:0.2,
    opacity:0 
})

t.from("#main .first-img, #main .fourth-img ", {
    // scale:0,
    // opacity:1,
    stagger:0.2,
    x:-50,
    // duration:1,
    opacity:0,
})

t.from("#main .third-img, #main .fifth-img ", {
    // scale:0,
    // opacity:1,
    stagger:0.2,
    x:50,
    // duration:1,
    opacity:0,
})


// for scroll 

t.from("#main .scroll ", {
    scale:0,
    opacity:0
})


t.to("#main .scroll ", {
   y:10,
   repeat:-9,
   duration:0.6,
   yoyo:true
})


// sec page 

gsap.from("#sec-page .welcome", {
    x:220,
    opacity:0,
    scrollTrigger:"#sec-page .welcome",
    delay:1,
    duration:1.2,
    scrollTrigger:{
        trigger:"#sec-page .welcome",
        scroller:"body",      
        // markers:true
        // scrub:true
    }
})

gsap.from("#sec-page .to", {
    x:-220,
    opacity:0,
    delay:1,
    duration:1.2,
    scrollTrigger:{
        trigger:"#sec-page .to",
        scroller:"body",
        // scrub:true
        
    }
})

gsap.from("#sec-page .squarespace", {
    x:220,
    opacity:0,
    duration:1.2,
    delay:1,
    scrollTrigger:{
        trigger:"#sec-page .squarespace",
        scroller:"body",
        // scrub:true,
        // markers:true,
        // start:"top 70%",
        // end:"top 80%"
    }
})

// for images page 2


gsap.from(".one .page-img2,.one .page-img1 ", {
    x:220,
    opacity:0,
    stagger:1,
    duration:1,
    delay:2,
    scrollTrigger:{
        trigger:"#sec-page .one",
        scroller:"body",
        
    }
})


gsap.from(".two .page-img3,.two .page-img4 ", {
    x:220,
    opacity:0,
    stagger:1,
    duration:1,
    delay:2,
    scrollTrigger:{
        trigger:"#sec-page .two",
        scroller:"body",
        
    }
})




gsap.from(".one1 .page-img5,.one1 .page-img6 ", {
    x:220,
    opacity:0,
    stagger:1,
    duration:1,
    delay:2,
    scrollTrigger:{
        trigger:"#sec-page .one1",
        scroller:"body",
        
    }
})


gsap.from(".two2 .page-img7,.two2 .page-img8 ", {
    x:220,
    opacity:0,
    stagger:1,
    duration:1,
    delay:2,
    scrollTrigger:{
        trigger:"#sec-page .two2",
        scroller:"body",
        
    }
})



// last img 



gsap.from(" .mid-img ", {
    y:200,
    opacity:0,
    duration:1,
    delay:4,
    scrollTrigger:{
        trigger:"#sec-page .one1",
        scroller:"body",
        
    }
})