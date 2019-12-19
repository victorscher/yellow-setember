//Voice Button

btnVoice = document.querySelector(".btn-voice");
btnVoiceBg = document.querySelector(".btn-voice-bg");
textBtnVoice = document.querySelector(".txt-btn-voice");
iconBtnVoice = document.querySelector(".icon-btn-voice");
onVoice = true;

btnVoice.addEventListener("mouseenter", () => {
    gsap.to(btnVoiceBg, {duration: 0.2, opacity: 1, width: "174px"});
    setTimeout(() => {
        gsap.to(textBtnVoice, {duration: 0.2, opacity: 1});
    }, 100);
});

btnVoice.addEventListener("mouseleave", () => {
    gsap.to(textBtnVoice, {duration: 0.2, opacity: 0});
    setTimeout(() => {
        gsap.to(btnVoiceBg, {duration: 0.2, opacity: 0, width: "46px"});
    }, 100);
});

btnVoice.addEventListener("click", () => {
    if(onVoice == true){
        iconBtnVoice.classList.remove("fa-volume-up");
        iconBtnVoice.classList.add("fa-volume-mute");
        textBtnVoice.textContent = "ligar voz";
        onVoice = false;
    }else{
        iconBtnVoice.classList.remove("fa-volume-mute");
        iconBtnVoice.classList.add("fa-volume-up");
        textBtnVoice.textContent = "desligar voz";
        onVoice = true;
    }
});

//Light button

btnLight = document.querySelector(".btn-light");
btnLightBg = document.querySelector(".btn-light-bg");
textBtnLight = document.querySelector(".txt-btn-light");
iconBtnLight = document.querySelector(".icon-btn-light");
onLight = true;

btnLight.addEventListener("mouseenter", () => {
    gsap.to(btnLightBg, {duration: 0.2, opacity: 1, width: "174px"});
    setTimeout(() => {
        gsap.to(textBtnLight, {duration: 0.2, opacity: 1});
    }, 100);
});

btnLight.addEventListener("mouseleave", () => {
    gsap.to(textBtnLight, {duration: 0.2, opacity: 0});
    setTimeout(() => {
        gsap.to(btnLightBg, {duration: 0.2, opacity: 0, width: "46px"});
    }, 100);
});

btnLight.addEventListener("click", () => {
    if(onLight == true){
        iconBtnLight.classList.remove("fas");
        iconBtnLight.classList.add("far");
        textBtnLight.textContent = "acender luz"
        gsap.to("html", {duration: 0.5, backgroundColor: "black"});
        gsap.to(".left-buttons-hover div", {duration: 0.5, backgroundColor: "white"});
        onLight = false;
    }else{
        iconBtnLight.classList.remove("far");
        iconBtnLight.classList.add("fas");
        textBtnLight.textContent = "apagar luz"
        gsap.to("html", {duration: 0.5, backgroundColor: "white"});
        gsap.to(".left-buttons-hover div", {duration: 0.5, backgroundColor: "#E0E0E0"});
        onLight = true;
    }
});

//Menu button

btnMenu = document.querySelector(".btn-menu");
btnMenuBg = document.querySelector(".btn-menu-bg");
textBtnMenu = document.querySelector(".txt-btn-menu");
iconBtnMenu = document.querySelector(".icon-btn-menu");
onMenu = true;

btnMenu.addEventListener("mouseenter", () => {
    gsap.to(btnMenuBg, {duration: 0.2, opacity: 1, width: "125px"});
    setTimeout(() => {
        gsap.to(textBtnMenu, {duration: 0.2, opacity: 1});
    }, 100);
});

btnMenu.addEventListener("mouseleave", () => {
    gsap.to(textBtnMenu, {duration: 0.2, opacity: 0});
    setTimeout(() => {
        gsap.to(btnMenuBg, {duration: 0.2, opacity: 0, width: "46px"});
    }, 100);
});

btnMenu.addEventListener("click", () => {
    if(onMenu == true){
        iconBtnMenu.classList.remove("fa-ellipsis-v");
        iconBtnMenu.classList.add("fa-times");
        textBtnMenu.textContent = "fechar"
        gsap.to(".menu", {duration: 1, width: "230px", ease: "elastic.out(1, 0.3)"});
        gsap.to(".right-buttons", {duration: 0.5, right: "248px"});
        gsap.to(".right-buttons-hover", {duration: 0.5, right: "245px"});
        onMenu = false;
    }else{
        iconBtnMenu.classList.remove("fa-times");
        iconBtnMenu.classList.add("fa-ellipsis-v");
        textBtnMenu.textContent = "menu";
        gsap.to(".menu", {duration: 1, width: "0px", ease: "elastic.out(1, 0.3)"});
        gsap.to(".right-buttons", {duration: 0.5, right: "38px"});
        gsap.to(".right-buttons-hover", {duration: 0.5, right: "35px"});
        onMenu = true;
    }
});