// ------- Selectors --------
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const slidesContaner = document.querySelector(".slides");

// ------- Markup -------
const sliderData = [
  { title: "Slider 1", description: "Cool Slider 1" },
  { title: "Slider 2", description: "Cool Slider 2" },
  { title: "Slider 3", description: "Cool Slider 3" },
  { title: "Slider 4", description: "Cool Slider 4" },
  { title: "Slider 5", description: "Cool Slider 5" },
  { title: "Slider 6", description: "Cool Slider 6" },
  { title: "Slider 7", description: "Cool Slider 7" },
  { title: "Slider 8", description: "Cool Slider 8" },
  { title: "Slider 9", description: "Cool Slider 9" },
  { title: "Slider 10", description: "Cool Slider 10" },
];

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRundomColor() {
  const color = `rgb(${getRndInteger(0, 230)}, ${getRndInteger(
    0,
    255
  )}, ${getRndInteger(0, 255)})`;
  return color;
}

const slideTemplate = (data) => {
  const { title, description } = data;
  const color = getRundomColor();
  return `
  <div class="slide" style="background-color: ${color}">
    <h3 class="slide-title">${title}</h3>
    <p class="slide-description">${description}</p>
  </div>
  `;
};

const renderMarkup = () => {
  slidesContaner.innerHTML = sliderData.map(slideTemplate).join("");
};

renderMarkup();

// ------- Slide Logic -------

const clearAnimation = () => {
  const allSlides = slidesContaner.querySelectorAll(".slide");
  allSlides.forEach((slide) => {
    if (slide.classList.contains("animationFirstSlide")) {
      slide.classList.remove("animationFirstSlide");
    }
    if (slide.classList.contains("animationSecondSlide")) {
      slide.classList.remove("animationSecondSlide");
    }
    if (slide.classList.contains("animationThirdSlide")) {
      slide.classList.remove("animationThirdSlide");
    }
    if (slide.classList.contains("animationLastSlideFront")) {
      slide.classList.remove("animationLastSlideFront");
    }
    if (slide.classList.contains("animationSecondSlideBack")) {
      slide.classList.remove("animationSecondSlideBack");
    }
    if (slide.classList.contains("animationFirstSlideBack")) {
      slide.classList.remove("animationFirstSlideBack");
    }
  });
};

const showNextSlide = () => {
  const replacedItem = slidesContaner.firstElementChild;
  const secondChild = replacedItem.nextElementSibling;
  const lastChild = secondChild.nextElementSibling;
  replacedItem.classList.add("animationFirstSlide");
  secondChild.classList.add("animationSecondSlide");
  lastChild.classList.add("animationThirdSlide");
  setTimeout(() => {
    slidesContaner.append(replacedItem);
  }, 590);
};

const showPrevSlide = () => {
  const replacedItem = slidesContaner.lastElementChild;
  const firstChild = slidesContaner.firstElementChild;
  const secondChild = firstChild.nextElementSibling;
  setTimeout(() => {
    slidesContaner.prepend(replacedItem);
  }, 0);
  replacedItem.classList.add("animationLastSlideFront");
  secondChild.classList.add("animationSecondSlideBack");
  firstChild.classList.add("animationFirstSlideBack");
};

let intervalId;

const sliderRun = () => {
  intervalId = setInterval(handleRightClick, 1500);
};

const sliderStop = (e) => {
  clearInterval(intervalId);
};

const handleLeftClick = () => {
  clearAnimation();
  showPrevSlide();
};

const handleRightClick = () => {
  clearAnimation();
  showNextSlide();
};

window.addEventListener("load", sliderRun);
slidesContaner.addEventListener("mouseenter", sliderStop);
slidesContaner.addEventListener("mouseleave", sliderRun);

leftArrow.addEventListener("mouseenter", sliderStop);
rightArrow.addEventListener("mouseenter", sliderStop);
leftArrow.addEventListener("mouseleave", sliderRun);
rightArrow.addEventListener("mouseleave", sliderRun);

leftArrow.addEventListener("click", handleLeftClick);
rightArrow.addEventListener("click", handleRightClick);
