// ------- Selectors --------
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const slidesContaner = document.querySelector(".slides");

// ------- Markup -------
const sliderData = [
  { title: "Slider 1", description: "Cool Slider 1" },
  { title: "Slider 2", description: "Cool Slider 2" },
  { title: "Slider 3", description: "Cool Slider 3" },
];

const slideTemplate = (data) => {
  const { title, description } = data;
  return `
  <div class="slide">
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
    if (slide.classList.contains("animationNextSlide")) {
      slide.classList.remove("animationNextSlide");
    }
  });
};

const showNextSlide = () => {
  const replacedItem = slidesContaner.firstElementChild;
  const nextItem = replacedItem.nextElementSibling;
  replacedItem.classList.add("animationFirstSlide");
  nextItem.classList.add("animationNextSlide");
  slidesContaner.append(replacedItem);
};

const showPrevSlide = () => {
  const replacedItem = slidesContaner.lastElementChild;
  const nextItem = replacedItem.nextElementSibling;
  replacedItem.classList.add("animationFirstSlide");
  nextItem.classList.add("animationNextSlide");
  slidesContaner.append(replacedItem);
};

const handleLeftClick = () => {
  clearAnimation();
  showPrevSlide();
};

const handleRightClick = () => {
  clearAnimation();
  showNextSlide();
};

leftArrow.addEventListener("click", handleLeftClick);
rightArrow.addEventListener("click", handleRightClick);
