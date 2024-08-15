
//HEADER SECTION - SCROLL TO SECTION
function firstcrollToSection(){
    const section = document.getElementById('firstTargetSection');
    section.scrollIntoView({ behavior: 'smooth' });
  }
function secondscrollToSection() {
    const section = document.getElementById('secondTargetSection');
    section.scrollIntoView({ behavior: 'smooth' });
  }
  function thirdscrollToSection() {
    const section = document.getElementById('thirdTargetSection');
    section.scrollIntoView({ behavior: 'smooth' });
  }
  function fourthscrollToSection() {
    const section = document.getElementById('fourthTargetSection');
    section.scrollIntoView({ behavior: 'smooth' });
  }

//1.TYPING AND DELETING EFFECT - FIRST SECTION

const textElement = document.getElementById('typewriter-text');
const texts = ["Web Developer", "Web Designer", "Front End Developer"];
let currentIndex = 0;
let currentText = '';
let isDeleting = false;
let typingSpeed = 100;
let pauseAfterTyping = 2000; // Pause duration after text is fully typed
let pauseAfterDeleting = 500; // Pause duration before starting the next text

function type() {
    const fullText = texts[currentIndex];

    if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
    } else {
        currentText = fullText.substring(0, currentText.length + 1);
    }

    // Highlight the last word in blue
    let displayText;
    if (!isDeleting && currentText === fullText) {
        const words = currentText.split(' ');
        const lastWord = words.pop(); // Remove the last word from the array
        const restText = words.join(' '); // Join the remaining words
        displayText = `${restText} <span style="color: #40A6B5;font-weigth:bolder; font-family: $font-oswald-bold;">${lastWord}</span>`;
    } else {
        displayText = currentText;
    }

    textElement.innerHTML = displayText;

    if (!isDeleting && currentText === fullText) {
        // Pause before starting to delete
        setTimeout(() => {
            isDeleting = true;
            type();
        }, pauseAfterTyping);
    } else if (isDeleting && currentText === '') {
        // Move to the next text after deleting
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        setTimeout(type, pauseAfterDeleting); // Pause before typing the next text
    } else {
        setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
    }
}

// Start the typewriter effect
type();

// 2.PROGRESS BAR WITH PERCENTAGE - SECOND SECTION

document.addEventListener("DOMContentLoaded", () => {
    const progressElements = document.querySelectorAll('.progress-done');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                animateProgress(element);
                observer.unobserve(element);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    progressElements.forEach(element => {
        observer.observe(element);
    });

    function animateProgress(element) {
        let counter = 0;
        const targetWidth = parseInt(element.getAttribute("data-target-width"), 10);
        const interval = setInterval(() => {
            counter++;
            if (counter <= targetWidth) {
                element.style.width = counter + "%";
                element.innerHTML = counter + "%";
            } else {
                clearInterval(interval);
            }
        }, 50);
    }
});

//3.IMAGE SLIDER - THIRD SECTION 

document.addEventListener('DOMContentLoaded', () => {
    type();
});


let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}





  






