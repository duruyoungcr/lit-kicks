// loader
anime({
  targets: ".letter",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutQuad",
  duration: 1500,
  direction: "alternate",
  loop: true,
});

window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector("#loadPage");
  const body = document.querySelector("body");
  setTimeout(() => {
    loader.classList.add("loading-complete");
    body.style.overflowY = "scroll";
  }, 4000);
});

// hero animation
const tl = new TimelineMax({ delay: 2 });
const heroImages = document.querySelectorAll(".hero-img");
tl.from(".logo", 1, { x: -200, opacity: 0 })
  .from(".hero-text", 1, { opacity: 0, y: 100 }, "-=0.5")
  .from(
    ".hero-image",
    1,
    {
      y: -200,
      opacity: 0,
    },
    "-=1"
  )
  .to(heroImages[heroImages.length - 1], 1, {
    opacity: 0,
    delay: 0.5,
  })
  .to(heroImages[1], 1, { opacity: 0, delay: 0.5 });

// modal
const previewImages = document.querySelectorAll(".preview-image img");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal-image");
const modalText = document.querySelector(".modal-text");

previewImages.forEach((image) => {
  const body = document.querySelector("body");
  image.addEventListener("click", () => {
    modal.classList.add("open");
    const imageSrc = image.dataset.image;
    const imageCaption = image.dataset.text;
    modalImage.src = imageSrc;
    modalText.innerHTML = imageCaption;
  });
});

modal.addEventListener("click", (e) => {
  const body = document.querySelector("body");
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
  }
});
