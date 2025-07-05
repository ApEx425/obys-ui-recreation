function animationloader(){
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
    y: -1000 ,
    opacity: 0 ,
    duration: 0.4 ,
    delay: 7, 
})

tl.from("#pag1",{
    delay:0.1 ,
    opacity:0 ,
    duration:0.8 ,

})

tl.to("#loader",{
    display:"none" ,
})

tl.from("#hero1 h1 , #hero2 h1 , #hero3 h1, #hero4 h1",{
    y:150 ,
    stagger:0.2,
})


}



 


    


function hoveranimation(){
document.addEventListener("mousemove",function(dets){
gsap.to("#crsr",{
    left:dets.x ,
    top:dets.y
})
}) 
}

function magnet(){
 
  Shery.makeMagnet("#nav2 h4" /* Element to target.*/, {
  //Parameters are optional.
  ease:"cubic-bezier(0.23, 1, 0.320, 1)",
   strength:2,
   cursurFollow:true ,
});
}


animationloader()
hoveranimation()
magnet()

 