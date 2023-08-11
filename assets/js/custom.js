function loadTime() {
    var a = 0;
    setInterval(function() {
        a = a + Math.floor(Math.random() * 15);
        document.querySelector("#loader h1").innerHTML = a + "%"
        if (a<100) {
            document.querySelector("#loader h1").innerHTML = a + "%";
        } else {
            a = 100
            document.querySelector("#loader h1").innerHTML = a + "%";
        }
    }, 100)
}

    const canvaBox = document.querySelector('.canvas'); 
    for(let i = 0; i > 100; i++){
        const bubbleDiv = document.createElement('div');
        bubbleDiv.className = 'bubble';
        canvaBox.appendChild(bubbleDiv);
    }


var tl = gsap.timeline();

tl.to("#loader h1", {
    scale: 3,
    delay: 0.2,
    duration: 1,
    onStart: loadTime(),
})
tl.to("#loader", {
    top:"-100vh",
    delay: 0.5,
    duration: 0.3,
})


gsap.from(".hero-back-design1", {
    
    x: "-100%",
    duration:3,
    delay:1,
    scale: 0,
    opacity:0,
    rotate: '360',
    backgroundColor: "#04aa6d",
})
gsap.from(".hero-back-design2", {
    
    x: "-100%",
    duration:5,
    delay:1,
    scale: 0,
    opacity:0,
    rotate: '360',
    backgroundColor: "#04aa6d",
})
gsap.from(".body-animtn1", {
    x: "100%",
    duration:6,
    delay:1,
    scale: 0,
    opacity:0,
    rotate: '360',
    backgroundColor: "#04aa6d",
})
gsap.from(".body-animtn2", {
    x: "100%",
    duration:12,
    delay:1,
    scale: 0,
    opacity:1,
    rotate: '360',
    backgroundColor: "blue",
})
gsap.from(".body-animtn3", {
    x: "-100%",
    duration:7,
    delay:1,
    scale: 0,
    opacity:0.7,
    rotate: '360',
    backgroundColor: "red",
})




tl.from(".hero-part .hp-subtitle, .hero-part .hp-title, .hp-para, .hero-part .hp-btnbox", {
    x: 700,
    duration:.75,
    delay:0.75,
    opacity:0,
    scale: 1,
    stagger:0.3,
})

tl.from(".hero-part .hero-image-sec", {
    x: "100%",
    scale: 0,
    opacity:0,
    delay:1,
    duration:1,
    zIndex: -11,
})

tl.from("#navbar", {
    y: -700,
    duration:0.75,
    opacity:1,
    delay:0.75,
    stagger:0.3,
    scale: 1,
})

tl.from(".night ", {
    duration:0.75,
    opacity:1,
    delay:0.75,
})