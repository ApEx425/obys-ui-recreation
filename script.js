var tl = gsap.timeline();

tl.from(".line h1 ,h2",{
    y:150 ,
    stagger:0.25,
    duration:0.6,
    delay:0.3 ,  
})


tl.from("#timer h5 ,h6",{
    
       opacity:0,
       onStart: function(){
        var load = document.querySelector("#timer h5")
        var grow = 0

setInterval(
   function(){
     if (grow<100)
        {grow++
        load.innerHTML = grow}

    else{
        grow === 100 
    }
   } 
    ,70)
    }
})

tl.from("#blow h5",{
      y:1100 ,
      duration:1.3 ,
    })
      
    

tl.to("#loader",{
    opacity: 0 ,
    duration: 0.4 ,
    delay: 7, 
})

tl.from("#pag1",{
    delay:0.1 ,
    y:1200 ,
    opacity:0 ,
    duration:0.8 ,

})

tl.to("#loader",{
    display:"none" ,
})




//  font-family: "Atkinson Hyperlegible Mono", sans-serif;





    
