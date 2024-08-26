let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}


const coords = {x: 0, y: 0};
const circles = document.querySelectorAll(".circle");


circles.forEach(function (circle, index){
    circle.x = 0;
    circle.y = 0;
});



window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;

    
   
});

function animateCircles(){

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index){

        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12+ "px";

        circle.style.scale = (circles.length - index) / circles.length;
        circle.x = x;
        circle.y = y;
        
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}    

menuIcon.oneclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


animateCircles();

const loaderContainer = document.querySelector(".loader-container")
const pageContent = document.querySelector("#page-content")
window.addEventListener("load", () =>{
    loaderContainer.classList.add("hidden")
    pageContent.classList.add("visible");
})
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

requestAnimationFrame(raf)





