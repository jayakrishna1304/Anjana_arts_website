window.onload = function () {
    setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 3000); // 3 seconds delay
};

let slideIndex = 1; 
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

slider.appendChild(firstClone); 
slider.insertBefore(lastClone, slides[0]); 

const totalSlides = document.querySelectorAll('.slide').length;
const slideWidth = document.querySelector('.slide').clientWidth;

slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;

function moveSlide(index) {
    slideIndex = index;
    updateSlider();
}

function updateSlider() {
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;

    
    setTimeout(() => {
        if (slideIndex >= totalSlides - 1) {
            slider.style.transition = 'none';
            slideIndex = 1;
            slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
        } else if (slideIndex <= 0) {
            slider.style.transition = 'none';
            slideIndex = totalSlides - 2;
            slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
        }
        updateDots();
    }, 500);
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    let activeIndex = slideIndex - 1; 
    if (activeIndex >= dots.length) activeIndex = 0;
    if (activeIndex < 0) activeIndex = dots.length - 1;
    dots[activeIndex].classList.add('active');
}

setInterval(() => {
    slideIndex++;
    updateSlider();
}, 3000);


updateDots();

function showServiceModal(serviceName) {
    document.getElementById("selectedService").innerText = serviceName;
    document.getElementById("serviceModal").style.display = "block";
}

function showContactModal() {
    document.getElementById("serviceModal").style.display = "none";
    document.getElementById("contactModal").style.display = "block";
}

function callUs() {
    window.location.href = "tel:+919908642393"; 
}

function whatsappUs() {
    window.location.href = "https://wa.me/919908642393";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
