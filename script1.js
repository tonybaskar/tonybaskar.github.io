
document.addEventListener('DOMContentLoaded', function() {
         
            const carouselInner = document.getElementById('carouselInner');
            const carouselItems = document.querySelectorAll('.carousel-item');
            const prevButton = document.getElementById('prev');
            const nextButton = document.getElementById('next');
            const indicators = document.querySelectorAll('.indicator');
            let currentIndex = 0;
            
            
            function updateCarousel() {
                carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                indicators.forEach((indicator, index) => {
                    if (index === currentIndex) {
                        indicator.classList.add('active');
                    } else {
                        indicator.classList.remove('active');
                    }
                });
            }
            
            
            nextButton.addEventListener('click', function() {
                currentIndex = (currentIndex + 1) % carouselItems.length;
                updateCarousel();
            });
            
            
            prevButton.addEventListener('click', function() {
                currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
                updateCarousel();
            });
            
           
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', function() {
                    currentIndex = index;
                    updateCarousel();
                });
            });
            
          
            setInterval(function() {
                currentIndex = (currentIndex + 1) % carouselItems.length;
                updateCarousel();
            }, 5000);
            
             function scrollToprofile() {
                const profileSection = document.getElementById('profile');
                if (profileSection) {
                    profileSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
            
            
            document.querySelector('.arrowup-icon').addEventListener('click', scrollToprofile);
        });


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
