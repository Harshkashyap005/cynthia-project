
const scroll = new LocomotiveScroll({
    el: document.querySelector(`#main`),
    smooth: true
});



//function circleMouseFollower(xscale, yscale) {
//    window.addEventListener("mousemove", function (dets) {
//      document.querySelector(
//        "#minicircle"
//      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
//    });
//  }
  

//circleMouseFollower()

const circle = document.getElementById('minicircle');

document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    circle.style.left = mouseX - 10 + 'px'; // Adjust for half of the circle's width
    circle.style.top = mouseY - 10 + 'px';  // Adjust for half of the circle's height
});


function firstpageanim(){
    var tl = gsap.timeline();

    tl.from(".nav", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })

    .to(".boundingelem", {
        y:0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        ease: Expo.easeInOut,
    })

    .from(".links", {
        y: -10,
        opacity:0,
        duration: 1.5,
        delay: -1,
        ease:Expo.easeInOut
    });
}

firstpageanim()
document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
  