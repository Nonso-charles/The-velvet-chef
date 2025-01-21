// Toggle hamburger menu and search bar visibility
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Javascript for filter function
function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
        } else if (item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none'
        }
    });
}


// Select all gallery images and the lightbox element
const galleryImages = document.querySelectorAll('.gallery-image');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeLightbox = document.querySelector('.close-lightbox');


// Open the lightbox when an image is clicked
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImage.src = image.src;
    });
});

// Close the lightbox when the close button is clicked
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
})

// Close the lightbox when clicking outside the image
lightbox.addEventListener('click', () => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Tab Functionality
const tabs = document.querySelectorAll('.tab');
const items = document.querySelectorAll('.gallery-item');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Get selected category
        const category = tab.getAttribute('data-category');

        // Show/Hide items
        items.forEach(item => {
            if (item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});


// Advanced slider logic
const track = document.querySelector('.slider-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.slider-item');

let currentIndex = 0;
const slideWidth = slides[0].clientWidth;

// Function to update the slider position
function updateSliderPosition() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Next Button 
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSliderPosition();
});

// Prev Button
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSliderPosition();
});

//Autoplay
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSliderPosition();
}, 5000);