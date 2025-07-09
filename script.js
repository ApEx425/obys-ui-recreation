function locomotiveanimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

function animationloader() {
  var tl = gsap.timeline();

  tl.from(".line h1 ,h2", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.3,
  });

  tl.from("#timer h5 ,h6", {
    opacity: 0,
    onStart: function () {
      var load = document.querySelector("#timer h5");
      var grow = 0;

      setInterval(function () {
        if (grow < 100) {
          grow++;
          load.innerHTML = grow;
        } else {
          grow === 100;
        }
      }, 70);
    },
  });

  tl.from("#blow h5", {
    y: 1100,
    duration: 1.3,
  });

  tl.to("#loader", {
    y: -1000,
    opacity: 0,
    duration: 0.4,
    delay: 0,
  });

  tl.from("#pag1", {
    delay: 0.1,
    opacity: 0,
    duration: 0.8,
  });

  tl.to("#loader", {
    display: "none",
  });


  

  tl.from("#hero1 h1 , #hero2 h1 , #hero3 h1, #hero4 h1", {
    y: 150,
    stagger: 0.2,
  });

  
}

function hoveranimation() {
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23,1,0.320,1)",
    duration: 1,
  });

  Shery.makeMagnet("#nav2 h4");

  const videoContainer = document.querySelector("#videotag");
  const videoCursor = document.querySelector("#videocrsr");
  const video = document.querySelector("#videotag video");

  var flag = 0;
  videoContainer.addEventListener("click", function () {
    if (flag == 0) {
      video.play();
      video.style.opacity = 1;

      document.querySelector(
        "#videocrsr"
      ).innerHTML = `<i class="ri-pause-line"></i>`;
      gsap.to("#videocrsr", {
        scale: 0.5,
        duration: 1,
      });
      flag = 1;
    } else {
      video.pause();
      video.style.opacity = 0;
      document.querySelector(
        "#videocrsr"
      ).innerHTML = `<i class="ri-play-large-fill"></i>`;
      gsap.to("#videocrsr", {
        scale: 1,
      });
    }
  });

  // Smooth follow using gsap.quickTo
  const setX = gsap.quickTo(videoCursor, "left", {
    duration: 0.3,
    ease: "power2.out",
  });
  const setY = gsap.quickTo(videoCursor, "top", {
    duration: 0.3,
    ease: "power2.out",
  });

  videoContainer.addEventListener("mousemove", (e) => {
    gsap.to(".mousefollower", {
      opacity: 0,
      duration: 0.5,
    });

    const bounds = videoContainer.getBoundingClientRect();
    const x = e.clientX - bounds.left - videoCursor.offsetWidth / 2;
    const y = e.clientY - bounds.top - videoCursor.offsetHeight / 2;

    setX(x);
    setY(y);
  });

  videoContainer.addEventListener("mouseleave", function () {
    gsap.to(".mousefollower", {
      opacity: 1,
    });
    gsap.to("#videocrsr", {
      top: "-10%",
      left: "80%",
    });
  });
}

function sheryAnimation() {
  Shery.imageEffect(".img-div", {
    style: 5,
    gooey: true,
    // debug: true
    config: {
      a: { value: 2.75, range: [0, 30] },
      b: { value: -0.97, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7499854889390236 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 1, y: 1 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: true },
      growSize: { value: 15, range: [1, 15] },
      durationOut: { value: 5, range: [0.1, 5] },
      durationIn: { value: 2.94, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: false },
      maskVal: { value: 1, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.2, range: [0, 2], _gsap: { id: 28 } },
      discard_threshold: { value: 1, range: [0, 1] },
      antialias_threshold: { value: 0.02, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
    delay:1
  });
}

function hero3animation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#flag", {
      x: dets.x - 160,
      y: dets.y - 200,
    });
  });
  var hero3 = document.querySelector("#hero3");
  hero3.addEventListener("mouseenter", function () {
    gsap.to("#flag", {
      opacity: 1,
      duration: 1,
    });
  });
  hero3.addEventListener("mouseleave", function () {
    gsap.to("#flag", {
      opacity: 0,
      duration: 0.7,
    });
  });
}

function lastanimation() {
  gsap.from("#footer-head h1",{
    opacity:0 ,
    delay:5 ,
    duration:4 , 
    onStart: function() {
      $('.tlt').textillate({ in: { effect: 'fadeIn' } });
    }
  })

}


locomotiveanimation();
hoveranimation();
sheryAnimation();
animationloader();
hero3animation();