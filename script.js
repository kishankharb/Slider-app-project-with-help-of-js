const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

// with help of we get html class

let slideNumber = 1;
const length = images.length;

// loop in button create with help of length variable
for(let i = 0 ; i < length; i++){
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
}
// button css here
const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "aqua";

// create resetBg function for bg color

const resetBg = () => {
buttons.forEach((button) => {
    button.style.backgroundColor ="transparent";
});
};

// use foreach loop for button for click event 

buttons.forEach((button , i) => {
    button.addEventListener("click",() => {
        resetBg();
        slider.style.transform = `translateX(-${i * 800}px)`;
        slideNumber = i + 1;
        button.style.backgroundColor = "aqua";
    });
});
// create nextSlide function for next image in slider
const nextSlide = () =>{
slider.style.transform = `translateX(-${slideNumber * 800}px)`;
slideNumber++;
}
// create prevSlide  function for before slide

const prevSlide  = () =>{
    slider.style.transform = `translateX(-${(slideNumber -2) * 800}px)`;
    slideNumber--;
}

// create getFirstSlide  function for first slide

const getFirstSlide = () =>{
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

// create getLastSlide  function for last slide 

const getLastSlide = () =>{
    slider.style.transform =` translateX(-${(length - 1) * 800}px)`;
    slideNumber = length;
}

// create changeColor  function for button color 

const changeColor  = () => {
    resetBg();
    buttons[slideNumber - 1].style.backgroundColor = "aqua";
}

// create add eventlister on right arrow 

right.addEventListener("click",()=>{
    slideNumber < length ? nextSlide() : getFirstSlide();
    changeColor()
})
// create add eventlister on left arrow 

left.addEventListener("click",()=>{
    slideNumber > 1 ? prevSlide() : getFirstSlide();
    changeColor()
});
