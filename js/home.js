gsap.to(".main-title", {duration: 1.5, opacity: 1});
gsap.to(".main-text", {duration: 2, opacity: 1});
gsap.to(".main-button", {duration: 1, opacity: 1, width:"270px", height:"48px", fontSize: "18px"});

let mainButton = document.querySelector(".main-button");

mainButton.addEventListener("click", () => {
    gsap.to(".main-button", {duration: 0.5, opacity: 0, zIndex: 0});
    gsap.to(".slider", {duration: 0.5, opacity: 0.9, zIndex: 1});
    gsap.to(".dot", {duration: 0.1, opacity: 1});
    gsap.to(".slider", {duration: 0.5, value: 39 })
   
    gsap.to(".image-1", {duration: 1.5, opacity: 0});
    gsap.to(".image-2", {duration: 1.5, opacity: 0});
    gsap.to(".image-3", {duration: 1.5, opacity: 0});
    gsap.to(".image-4", {duration: 1.5, opacity: 0});
    gsap.to(".main-title", {duration: 1.5, fontSize: "24px", marginTop: "65px"})
    gsap.to(".main-text", {duration: 1.5, opacity: 0});

    gsap.to(".talk-title", {duration: 1.5, opacity: 1});
    gsap.to(".talk-text", {duration: 1.5, opacity: 1});
    gsap.to(".talk-img", {duration: 1.5, opacity: 0.9});
   
    gsap.to(".left-bar", {duration: 1.5, x: 0});
    gsap.to(".right-bar", {duration: 1.5, x: 0});
    
});