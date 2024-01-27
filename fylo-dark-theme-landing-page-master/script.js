const inputButton = document.getElementById("submitButton");

inputButton.addEventListener("click", function (event) {
    event.preventDefault();
});

//  Scroll Animation
gsap.to("#topImg", {
    x: 0,
    opacity: 1,
    duration: 1
})

gsap.to("#bottomSection1", {
    x: 0,
    opacity: 1,
    duration: 1
})

gsap.to(".detail", {
    scale: 1,
    scrollTrigger: {
        trigger: "#section2",
        scrub: 1,
        start: "-200%",
        y: 100,
        end: "-20%",
        duration: 5
    }
});

gsap.to("#stayProd", {
    scale: 1,
    scrollTrigger: {
        trigger: "#section3",
        scrub: 1,
        start: "-70%",
        // y: 100,
        tween: 0.5,
        end: "10%",
        duration: 3
    }
});

gsap.to("#rightSection3", {
    x: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: "#section3",
        scrub: 1,
        start: "-60%",
        y: 100,
        end: "10%",
        duration: 3
    }
});

gsap.to(".testimonial", {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
        trigger: "#section4",
        scrub: 1,
        start: "-90%",
        y: 100,
        end: "-70%",
        duration: 5
    }
})

gsap.to("article", {
    left: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: "#section4",
        scrub: 4,
        start: "-80%",
        y: 100,
        end: "-20%",
        duration: 3
    }
})