let slider = document.querySelector(".slider");

slider.onmouseleave = function(){
    if(slider.value >= 0 && slider.value <= 26){
        gsap.to(slider, {duration: 1, value: 13})
    }else if(slider.value > 26 && slider.value <= 52){
        gsap.to(slider, {duration: 1, value: 39})     
    }else if(slider.value > 52 && slider.value <= 78){
        gsap.to(slider, {duration: 1, value: 65})
    }else{
        gsap.to(slider, {duration: 1, value: 91})
    }

    if(slider.value <= 26){
        gsap.to(".image-1", {duration: 1.5, y: 0, opacity: 1});
        gsap.to(".image-2", {duration: 1.5, x: 0, opacity: 1});
        gsap.to(".image-3", {duration: 1.5, x: 0, opacity: 1});
        gsap.to(".image-4", {duration: 1.5, y: 0, opacity: 1});
        gsap.to(".main-title", {duration: 1.5, opacity: 1, fontSize: "48px", marginTop: "181px"});
        gsap.to(".main-text", {duration: 1.5, opacity: 1});
        gsap.to(".left-bar", {duration: 1.5, x: -187});
        gsap.to(".right-bar", {duration: 1.5, x: 187});
        gsap.to(".talk-title", {duration: 1.5, opacity: 0});
        gsap.to(".talk-text", {duration: 1.5, opacity: 0});
        gsap.to(".talk-img", {duration: 1.5, opacity: 0});
    }

    else if(slider.value > 26 && slider.value <= 52){
        gsap.to(".left-bar", {duration: 1.5, x: 0, borderRadius: "0 0 100px 0"});
        gsap.to(".right-bar", {duration: 1.5, x: 0, borderRadius: " 100px 0 0 0"});
        gsap.to(".talk-title", {duration: 1.5, opacity: 1});
        gsap.to(".talk-text", {duration: 1.5, opacity: 1});
        gsap.to(".talk-img", {duration: 2, opacity: 0.9});
    }else if(slider.value > 52 && slider.value <= 78){
        gsap.to(".left-bar", {duration: 1.5, x: 1179, borderRadius: "100px 0 0 0"});
        gsap.to(".right-bar", {duration: 1.5, x: -1179, borderRadius: " 0 0 100px 0"});
    }else if(slider.value > 78 && slider.value <= 104){
        gsap.to(".left-bar", {duration: 1.5, x: 0, borderRadius: "0 0 100px 0"});
        gsap.to(".right-bar", {duration: 1.5, x: 0, borderRadius: "100px 0 0 0"});
    }


}

slider.onchange = function(){
    if(slider.value > 26){
        gsap.to(".image-1", {duration: 1.5, opacity: 0});
        gsap.to(".image-2", {duration: 1.5, opacity: 0});
        gsap.to(".image-3", {duration: 1.5, opacity: 0});
        gsap.to(".image-4", {duration: 1.5, opacity: 0});
        gsap.to(".main-title", {duration: 1.5, fontSize: "24px", marginTop: "65px"})
        gsap.to(".main-text", {duration: 1.5, opacity: 0});
        
    }

    if(slider.value > 26 && slider.value <= 52){
        gsap.to(".left-bar", {duration: 1.5, x: 0});
        gsap.to(".right-bar", {duration: 1.5, x: 0});
    }
}


