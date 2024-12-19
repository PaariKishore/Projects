
let currentSlide = 0;

function showSlides() {
    const slides = document.querySelectorAll('.hero-content');
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? 'block' : 'none';
    });
    currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlides, 5000);
showSlides(); 

const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', event => {
    const inputs = document.querySelectorAll('.search-input');
    let isValid = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.style.border = '1px solid red';
            isValid = false;
        } else {
            input.style.border = '1px solid #ccc';
        }
    });

    if (!isValid) {
        event.preventDefault();
        alert('Please fill out all fields before searching!');
    }
});

const cards = document.querySelectorAll('.card');

function handleScrollAnimation() {
    const triggerBottom = window.innerHeight / 5 * 4;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('show');
        } else {
            card.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);
handleScrollAnimation();

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const carousel = document.querySelector('.carousel');
let scrollAmount = 0;

function autoSlide() {
    const cardWidth = document.querySelector('.card').offsetWidth + 32; 
    const maxScroll = carousel.scrollWidth - carousel.offsetWidth;

    if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
    } else {
        scrollAmount += cardWidth;
    }

    carousel.style.transform = `translateX(-${scrollAmount}px)`;
}

setInterval(autoSlide, 3000);
