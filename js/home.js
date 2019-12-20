gsap.to(".main-title", {duration: 1.5, opacity: 1});
gsap.to(".main-text", {duration: 2, opacity: 1});
gsap.to(".main-button", {duration: 1, opacity: 1, width:"270px", height:"48px", fontSize: "18px"});

let mainButton = document.querySelector(".main-button");

mainButton.addEventListener("click", () => {
    gsap.to(".main-button", {duration: 0.5, opacity: 0, zIndex: 0});
    gsap.to(".slider", {duration: 0.5, opacity: 0.9, zIndex: 1});
    gsap.to(".dot", {duration: 0.1, opacity: 1});
    gsap.to(".slider", {duration: 0.5, value: 39 })
    setTimeout(() => {
        let event = new Event('change');
        document.querySelector(".slider").dispatchEvent(event);
    }, 600);
});