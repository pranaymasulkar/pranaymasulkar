// Create Elements
let tl = gsap.timeline();
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    gsap.to(".loader h1", {
      opacity: 0,
      duration: 2,
      fontSize: "7vh",
      ease: Expo.easeInOut,
      y: -200,
      stagger: 0.4,
    });
    gsap.to(".loader", {
      height: "0",
      duration: 3,
      ease: Expo.easeInOut,
    });
  }
};
// Create Element

function creaeteNodes() {
  let contEntElem = document.querySelectorAll(".contpara");
  contEntElem.forEach((e) => {
    let child = document.createElement("span");
    child.classList.add("contwraper");
    e.appendChild(child);
  });

  let titleH1 = document.querySelectorAll(".title-h1");
  titleH1.forEach((e) => {
    let child = document.createElement("span");
    child.classList.add("titleWraper");
    e.appendChild(child);
  });
}
creaeteNodes();

// Content Wraper Animation
tl.to(".titleWraper", {
  left: "-100%",
  duration: 2,
  delay: 1,
  ease: Expo.easeInOut,
})
  .to(".contwraper", {
    left: "100%",
    duration: 1,
    delay: -1.4,
    ease: Expo.easeInOut,
  })
  .to(".btn-primary", {
    backgroundColor: "#fff",
    color: "#000",
    duration: 1,
    delay: -1.4,
    ease: Expo.easeInOut,
  })
  .to(".navbar", {
    opacity: 1,
    duration: 2,
    delay: -1.4,
    ease: Expo.easeInOut,
  })
  .from(".wctop", {
    x: "-100%",
    left: "0",
  })
  .to(".wctop", {
    x: "0",
  })
  .from(".wcbott", {
    x: "100%",
    left: "0",
  })
  .to(".wcbott", {
    x: "0",
  })
  .from(".where-click p", {
    x: "-100%",
    left: "0",
  })
  .to(".where-click p", {
    x: "0",
    duration: 4,
    backgroundColor: "rgba(0, 0, 0, 0.34)",
    color: "#fff",
  })
  .from(".slink i", {
    duration: 0.5,
    opacity: 0,
    y: -100,
    stagger: 0.1,
    ease: "back.in",
  })
  .to(".slink i", {
    y: 0,
    duration: 1,
    rotation: 360,
    opacity: 1,
    delay: -3,
    stagger: 0.2,
    ease: "sine.out",
    force3D: true,
  });

// Hove Animation
Shery.imageEffect("#back", {
  style: 5,
  //   debug: true,
  gooey: true,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: 0.75, range: [-1, 1] },
    aspect: { value: 2.0206327372764785 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.4, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.74, range: [0, 10] },
    metaball: { value: 0.25, range: [0, 2] },
    discard_threshold: { value: 0.25, range: [0, 1] },
    antialias_threshold: { value: 0.01, range: [0, 0.1] },
    noise_height: { value: 0.17, range: [0, 2] },
    noise_scale: { value: 23.97, range: [0, 100] },
  },
  // slideStyle: (setScroll) => {
  //   window.addEventListener("scroll", () => {
  //     setScroll(window.scrollY / innerHeight); //Updating the scroll
  //   });
  // },
});

// Hero Left side effects

let elems = document.querySelectorAll(".elem");

elems.forEach(function (elem) {
  let h1s = elem.querySelectorAll(".title-h1");
  let index = 0;
  let animationg = false;

  document.querySelector("#main").addEventListener("click", () => {
    if (!animationg) {
      animationg = true;
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], {
            top: "100%",
          });
          animationg = false;
        },
      });

      index == h1s.length - 1 ? (index = 0) : index++;

      gsap.to(h1s[index], {
        top: "0%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    }

    // right content end
  });
});

// Hero Right Side Effects
