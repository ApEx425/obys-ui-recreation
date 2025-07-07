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
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      left: dets.x,
      top: dets.y,
    });
  });
}

function magnet() {
  Shery.makeMagnet("#nav2 h4" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    strength: 2,
    cursurFollow: true,
  });
}

function sheryAnimation() {
  Shery.imageEffect(".img-div", {
    style: 5,
    gooey: true,
    // debug: true
  
  });
}

locomotiveanimation();
// hoveranimation();
sheryAnimation();
animationloader();
magnet();
