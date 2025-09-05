// Hamburger Menu functionality
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".list a").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

gsap.registerPlugin(ScrollTrigger);

let container = document.querySelector(".projectcards");
let sections = gsap.utils.toArray(".card");

gsap.to(sections, {
  xPercent: -130 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal",
    start: "top top", // start when horizontal section hits top
    pin: true, // pin this section
    scrub: 1, // smooth link scroll with animation
    anticipatePin: 1, // helps avoid jumpy pinning
    end: () => "+=" + container.scrollWidth, // scroll length = container width
  },
});
