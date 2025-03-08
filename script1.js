

// tonybaskar's portfolio script for the testimonials section
const testimonials = [
    {
        name: "Antony",
        designation: "Student at SHC",
        feedback: "Really good to see this God may bless you abundantly and by His grace you can achieve a lot. Really really hats off you. BASKAR",
        rating: 5,
        image: "assets/personAvatar.png"
    },
    {
        name: "Shalini",
        designation: "Student at SHC",
        feedback: "Congratulations for ur success and keep rocking by ur skills.i wish u to achieve & continue the successful path.",
        rating: 4,
        image: "assets/personAvatar.png"
    },
    {
        name: "Christhu Raj",
        designation: "Senior Software Engineer",
        feedback: "Nice Tony, you really created a nice Profile",
        rating: 5,
        image: "assets/personAvatar.png"
    }
];

const carouselInner = document.getElementById("carouselInner");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentIndex = 0;
let autoScrollInterval;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateCarousel();
    resetAutoScroll();
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateCarousel();
    resetAutoScroll();
});

document.getElementById("testimonialForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
     console.log("username",username)
    const designation = document.getElementById("designation").value;
    const feedback = document.getElementById("feedback").value;
    const rating = document.getElementById("rating").value;

    const newTestimonial = {
        username,
        designation,
        feedback,
        rating,
        image: "assets/personAvatar.png"
    };

    testimonials.push(newTestimonial);

    const newCarouselItem = document.createElement("div");
    newCarouselItem.classList.add("carousel-item");
    newCarouselItem.innerHTML = `
        <img src="${newTestimonial.image}" alt="${newTestimonial.username}">
        <h3>${newTestimonial.username}</h3>
        <p class="designation">${newTestimonial.designation}</p>
        <p class="feedback">"${newTestimonial.feedback}"</p>
        <div class="rating">${"&#9733;".repeat(newTestimonial.rating)}${"&#9734;".repeat(5 - newTestimonial.rating)}</div>
    `;

    carouselInner.appendChild(newCarouselItem);
    alert(`Thank you for your testimonial, ${username}!`);
    e.target.reset();
    resetAutoScroll();
});

// Auto-scroll functionality

function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateCarousel();
    }, 5000); 
}

function resetAutoScroll() {
    clearInterval(autoScrollInterval);
    startAutoScroll();
}

// Initialize carousel and start auto-scroll
updateCarousel();
startAutoScroll();


// Scroll to top button
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) { 
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

 
    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });

        
        scrollToTopBtn.classList.add('bounce');
        setTimeout(() => {
            scrollToTopBtn.classList.remove('bounce');
        }, 1000);
    });
});










