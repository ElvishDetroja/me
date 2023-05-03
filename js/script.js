const preloader = document.getElementById("preloader");

setTimeout(() => {
  preloader.classList.add("hide");
}, 2000);

setTimeout(() => {
  preloader.style.display = "none";
}, 3100);

//
//
//
//
//
//
//

const smoothScrollWrapper = document.querySelector(".smooth-scroll-wrapper");
var locoYOffset;
let locoScroll;

window.addEventListener("load", () => {
  locoScroll = new LocomotiveScroll({
    el: smoothScrollWrapper,
    smooth: true,
    scrollFromAnywhere: true,
    direction: "horizontal",
    mobile: {
      breakpoint: 0,
      smooth: true,
      direction: "horizontal",
    },
    tablet: {
      breakpoint: 0,
      smooth: true,
      direction: "horizontal",
    },
    lerp: 0.05,
    multiplier: 0.5,
  });

  locoScroll.on("scroll", ({ limit, scroll }) => {
    locoYOffset = scroll.y;
  });

  function ScrollUpdate() {
    locoScroll.update();
  }

  imagesLoaded(smoothScrollWrapper, { background: true }, ScrollUpdate);

  window.addEventListener("resize", ScrollUpdate);

  setTimeout(() => {
    ScrollUpdate();
  }, 2000);

  //
  //
});

//
//
//
//
//
//
//

const musicSignal = document.querySelector(".music-signal");
const audio = document.querySelector(".audio");

musicSignal.addEventListener("click", (e) => {
  if (e.target.checked) {
    audio.play();
    audio.setAttribute("autoplay", "");
  } else {
    audio.pause();
    audio.removeAttribute("autoplay");
  }
});

//
//
//
//
//

const hero = document.querySelector(".hero");
const pointer = document.querySelector(".pointer");

let heroHeight = hero.getBoundingClientRect().height;
let pointerHeight = hero.offsetHeight;

window.addEventListener("mousemove", (event) => {
  let x = event.clientX;
  let y = event.clientY;

  if (window.innerWidth < 600 && window.innerHeight > 600) {
    y = y < heroHeight ? y : Math.floor(heroHeight) - 100;
  }

  const keyframes = {
    transform: `translate(${x}px, ${y}px)`,
  };

  pointer.animate(keyframes, {
    duration: 800,
    fill: "forwards",
  });
});

//
//
//
//
//
//

const projectBoxImage = [...document.querySelectorAll(".project-box-image")];

projectBoxImage.map((projectBoxImg) => {
  const img = [...projectBoxImg.querySelectorAll("img")];

  new hoverEffect({
    parent: projectBoxImg,
    intensity1: 0.5,
    intensity2: 0.5,
    angle2: Math.PI / 2,
    image1: img[0].getAttribute("src"),
    image2: img[1].getAttribute("src"),
    imagesRatio: 1080 / 1920,
    displacementImage:
      "https://elvishdetroja.github.io/me/img/preview/heightMap.png",
  });
});

//
//
//
//
//
//
//

const readMore = [...document.querySelectorAll(".read-more")];
const projectWrapper = [...document.querySelectorAll(".project-wrapper")];

readMore.map((readMo, index) => {
  readMo.addEventListener("click", () => {
    if (projectWrapper[index].classList.contains("hide")) {
      readMo.innerText = "COLLAPSE";
      projectWrapper[index].classList.remove("hide");
    } else {
      readMo.innerText = "READ MORE";
      projectWrapper[index].classList.add("hide");
    }
  });
});

//
//
//
//
//
//
//
//
//
//
//
//
//

const header = document.querySelector("header");
const anchor = [...header.querySelectorAll("a")];

anchor.map((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();

    let target = document.querySelector(a.getAttribute("href"));

    locoScroll.scrollTo(target, {
      duration: 3000,
      easing: [0.25, 0.0, 0.35, 1.0],
      disableLerp: true,
    });

    ScrollUpdate();
  });
});

//
//
//
//
//
//
//
//
//
//

const blob = document.querySelector(".blob");
const projectContainer = document.querySelector(".project-container");

window.addEventListener("mousemove", (event) => {
  locoYOffset = locoYOffset == undefined ? 0 : locoYOffset;

  const x = event.pageX;
  const y = event.pageY + locoYOffset;

  const keyframes = {
    left: `${x}px`,
    top: `${y}px`,
  };

  blob.animate(keyframes, {
    duration: 800,
    fill: "forwards",
  });
});

//
//
//
//
//
//
//
//
//
//
//

const options = {
  threshold: 0.4,
};

function appearFunc(entries, appearOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      if (locoYOffset == 0 || locoYOffset == undefined) {
        setTimeout(() => {
          entry.target.classList.add("opacity");
          appearOnScroll.unobserve(entry.target);
        }, 2500);
      } else {
        entry.target.classList.add("opacity");
        appearOnScroll.unobserve(entry.target);
      }
    }
  });
}

const appearOnScroll = new IntersectionObserver(appearFunc, options);

const profileContainer = document.querySelector(".profile-container");

appearOnScroll.observe(profileContainer);

//
//
//
//
//
//
//
