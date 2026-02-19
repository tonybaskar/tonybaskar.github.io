

// script for the role
document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.querySelector(".title");
    const text = "Technical Trainer";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            titleElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    titleElement.innerHTML = ""; 
    typeEffect();
});

// glow effect for the profile section
// window.addEventListener("scroll", function () {
//     let profileSection = document.getElementById("profile");
//     let scrollPosition = window.scrollY;
    
//     let glowIntensity = Math.min(scrollPosition / 5, 50); 
//     profileSection.style.boxShadow = `0px 0px ${glowIntensity}px rgba(255, 215, 0, 0.6)`;
// });

// section_text1

window.addEventListener("load", function () {
    document.querySelector(".section__text1").classList.add("show");
});






//tonybaskar's portfolio script for the announcement section

// document.addEventListener("DOMContentLoaded", () => {
//     const announcementText = document.querySelector(".announcement-text");
//     announcementText.style.opacity = 0;
//     announcementText.style.transform = "translateY(20px)";
    
//     setTimeout(() => {
//         announcementText.style.transition = "opacity 0.8s ease, transform 0.8s ease";
//         announcementText.style.opacity = 1;
//         announcementText.style.transform = "translateY(0)";
//     }, 500);
// });

// tonybaskar's portfolio script for  hamburger menu toggle open and close

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    hamburgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });
});


//tonybaskar's portfolio script for about section 

document.addEventListener('DOMContentLoaded', function () {

    
    const arrowIcon = document.querySelector('.arrow-icon');
    arrowIcon.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#Skills').scrollIntoView({
            behavior: 'smooth'
        });
    });

    
    const fadeInElements = document.querySelectorAll('.details_container, .timeline_box');

    function fadeInOnScroll() {
        fadeInElements.forEach(function (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', fadeInOnScroll);

    

    fadeInOnScroll();

    
    arrowIcon.addEventListener('mouseenter', function () {
        arrowIcon.style.filter = 'brightness(1.5)';
    });

    arrowIcon.addEventListener('mouseleave', function () {
        arrowIcon.style.filter = 'brightness(1)';
    });

    arrowIcon.addEventListener('mousedown', function () {
        arrowIcon.style.transform = 'scale(0.95)';
    });

    arrowIcon.addEventListener('mouseup', function () {
        arrowIcon.style.transform = 'scale(1)';
    });
});


// tonybaskar's portfolio  function to scroll to next section  while clicking on arrow

function scrollToSkills() {
    document.getElementById('Skills').scrollIntoView({ behavior: 'smooth' });
}
// function to scroll to achievements section
function scrollToAchievements() {
    document.getElementById('Achievements').scrollIntoView({ behavior: 'smooth' });
}
// function to scroll to Projects section
function scrollToProjects() {
    document.getElementById('Projects').scrollIntoView({ behavior: 'smooth' });
}
// function to scroll to certificates section
function scrollToCertificates() {
    document.getElementById('Certificates').scrollIntoView({ behavior: 'smooth' });
}
// function to scroll to contacts section
function scrollToContacts() {
    document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
}
// function to scroll to testimonials section
function scrollToTestimonials() {
    document.getElementById('Testimonials').scrollIntoView({ behavior: 'smooth' });
}
// function to scroll to profiile section
function scrollToprofile() {
    document.getElementById('profile').scrollIntoView({ behavior: 'smooth' });
}


//tonybaskar's portfolio script for skills section

document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');
    
    const animateSkillBar = (skill) => {
        const skillLevel = skill.querySelector('.skill-level');
        const skillPercentage = skill.querySelector('.skill-percentage');
        const targetPercentage = skillLevel.getAttribute('data-skill');

        
        skillLevel.style.width = '0%';
        skillPercentage.textContent = '0%';

       
        skillLevel.style.width = targetPercentage;

        
        let currentPercentage = 0;
        const target = parseInt(targetPercentage, 10);
        const increment = Math.ceil(target / 100); 
        const intervalTime = 20;
        const totalTime = 2000; 

        const percentageInterval = setInterval(() => {
            if (currentPercentage < target) {
                currentPercentage += increment;
                if (currentPercentage > target) currentPercentage = target; 
                skillPercentage.textContent = currentPercentage + '%';
            } else {
                clearInterval(percentageInterval);
            }
        }, totalTime / (target / increment));

        
        skillPercentage.style.opacity = '1';
        skillLevel.style.opacity = '1';
    };

   
    const observerOptions = {
        threshold: 0.5 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                const skill = entry.target;
                animateSkillBar(skill);
                
                observer.unobserve(skill);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    
    skills.forEach(skill => {
        observer.observe(skill);
    });
});

//  for impact section counter animation

const counters = document.querySelectorAll('.counter');
let counterStarted = false;

function startCounterAnimation() {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 200;

        const updateCounter = () => {
            const current = +counter.innerText;
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCounter();
    });
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
}

window.addEventListener('scroll', () => {
    const section = document.querySelector('.impact-section');
    if (isInViewport(section) && !counterStarted) {
        startCounterAnimation();
        counterStarted = true;
    }
});

// tonybaskar's portfolio script for achievement section
document.addEventListener('DOMContentLoaded', function () {
    const achievementItems = document.querySelectorAll('.achievement');
    const options = {
        threshold: 0.3
    };

    const achievementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-achievement');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    achievementItems.forEach(item => {
        achievementObserver.observe(item);
    });
});

VanillaTilt.init(document.querySelectorAll(".achievement"), {
    max: 15,
    speed: 300,
    glare: true,
    "max-glare": 0.4,
});


// tonybaskar's portfolio script for project section
// Project URLs mapping
        const projectUrls = {
            project1: {
                project: "https://digitalmarkentrysystembts.netlify.app/",
                code: "https://github.com/tonybaskar/smart-mark-entry-system/"
            },
            project2: {
                project: "https://tonybaskar.github.io/",
                code: "https://github.com/tonybaskar/tonybaskar.github.io"
            },
            project3: {
                project: "https://tonybaskar.github.io/CIneHavenTB/home.html",
                code: "https://github.com/tonybaskar/CIneHavenTB"
            },
            project4: {
                project: "",
                code: "https://github.com/tonybaskar/-AI-Gesture-Based-Volume-Control"
            },
            project5: {
                project: "",
                code: ""
            },
            project6: {
                project: "",
                code: ""
            }
        };

        
        function handleProjectButtonClick(event) {
            const button = event.currentTarget;
            const projectId = button.getAttribute('data-project-id');
            const buttonType = button.getAttribute('data-type');
            
          
            const url = projectUrls[projectId]?.[buttonType];
            
            if (url) {
               
                window.open(url, '_blank');
            } else {
                console.error('URL not found for:', projectId, buttonType);
                alert('Project link not available at the moment.');
            }
        }

        
        document.addEventListener('DOMContentLoaded', function() {
            
            const viewProjectButtons = document.querySelectorAll('.view-project-btn');
            viewProjectButtons.forEach(button => {
                button.addEventListener('click', handleProjectButtonClick);
            });

          
            const viewCodeButtons = document.querySelectorAll('.view-code-btn');
            viewCodeButtons.forEach(button => {
                button.addEventListener('click', handleProjectButtonClick);
            });

          
            const buttons = document.querySelectorAll('button');
            buttons.forEach(button => {
                button.removeAttribute('onclick');
            });
        });


// tonybaskar's portfolio script for the certificate section
document.addEventListener('DOMContentLoaded', () => {
    const certificates = document.querySelectorAll('.certificate-container');
    let currentCertificate = 0;

    
    const showCertificate = (index) => {
        certificates.forEach((cert, i) => {
            if (i === index) {
                cert.style.display = 'inline-block'; 
            } else {
                cert.style.display = 'none'; 
            }
        });
    };

    
    showCertificate(currentCertificate);

    
    const nextCertificate = () => {
        currentCertificate = (currentCertificate + 1) % certificates.length;
        showCertificate(currentCertificate);
    };

    
    const prevCertificate = () => {
        currentCertificate = (currentCertificate - 1 + certificates.length) % certificates.length;
        showCertificate(currentCertificate);
    };

   
    document.getElementById('nextBtn').addEventListener('click', nextCertificate);
    document.getElementById('prevBtn').addEventListener('click', prevCertificate);

 
    setInterval(nextCertificate, 5000);
});

// tonybaskar's portfolio script for contact section

        document.addEventListener('DOMContentLoaded', function() {
            const contactForm = document.getElementById('contactForm');
            const modal = document.getElementById('modal');
            const modalMessage = document.getElementById('modalMessage');
            const closeButton = document.querySelector('.close-button');
            const submitBtn = document.getElementById('submitBtn');
            
            closeButton.addEventListener('click', function() {
                modal.style.display = 'none';
            });
            
            
            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
            
            
            contactForm.addEventListener('submit', function(event) {
                event.preventDefault();
                
              
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
                
            
                setTimeout(function() {
                   
                    modalMessage.textContent = "Thank you for your message! I'll get back to you soon.";
                    modal.style.display = 'flex';
                    
                   
                    contactForm.reset();
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                    submitBtn.disabled = false;
                }, 1500);
            });
            
           
            const inputs = document.querySelectorAll('input, textarea');
            inputs.forEach(input => {
               
                input.addEventListener('focus', function() {
                    this.parentElement.classList.add('focused');
                });
                
           
                input.addEventListener('blur', function() {
                    if (this.value === '') {
                        this.parentElement.classList.remove('focused');
                    }
                });
            });
        });
        
        // Function to scroll to testimonials section
        function scrollToTestimonials() {
            const testimonialsSection = document.getElementById('Testimonials');
            if (testimonialsSection) {
                testimonialsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }



