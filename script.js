

// script for the role
document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.querySelector(".title");
    const text = "Tech Enthusiast";
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
document.addEventListener('DOMContentLoaded', function() {
    const projectSections = document.querySelectorAll('.project');
    console.log('Projects found:', projectSections.length); 

    const options = {
        threshold: 0.3
    };

    const projectObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Animating:', entry.target); 
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    projectSections.forEach(section => {
        projectObserver.observe(section);
    });
});

// view project and view code button

function viewProject(projectId) {
    switch (projectId) {
        case 'project1':
            window.open("https://tonybaskar.github.io", "_blank"); 
            break;
        case 'project2':
            window.open("https://tonybaskar.github.io/CIneHavenTB/home.html", "_blank"); 
            break;
        case 'project3':
            // window.open("#", "_blank"); 
            alert("Project will be Linked soon...");
        case 'project4':
            // window.open("#", "_blank"); 
            alert("Project will be Linked soon...");
            break;
        case 'project5':
            // window.open("#", "_blank"); 
            alert("Project will be Linked soon...");
            break;
        default:
            alert("Project not found!");
    }
}

function viewCode(projectId) {
    switch (projectId) {
        case 'project1':
            window.open("https://github.com/tonybaskar/tonybaskar.github.io", "_blank"); 
            break;
        case 'project2':
            window.open("https://github.com/tonybaskar/CIneHavenTB", "_blank"); 
            break;
        case 'project3':
            // window.open("#", "_blank"); 
            alert("Code will Be linked soon...");
            break;
        case 'project4':
            // window.open("#", "_blank"); 
            alert("Code will Be linked soon...");
            break;
        case 'project5':
            // window.open("#", "_blank");
            alert("Code will Be linked soon...");
            break;
        default:
            alert("Code not found!");
    }
}


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
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = this.Name.value.trim();
    const email = this.Email.value.trim();
    const message = this.Message.value.trim();

    if (validateForm(name, email, message)) {
        showModal(`Your Message has been received , ${name}`);
        this.reset();
    } else {
        showModal('Please fill out all fields correctly.');
    }
});

function validateForm(name, email, message) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const namePattern = /^[A-Za-z\s]+$/; 

    return (
        namePattern.test(name) &&
        emailPattern.test(email) &&
        message.length > 10
    );
}

function showModal(message) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modalMessage');
    const closeButton = document.querySelector('.close-button');

    modalMessage.textContent = message;
    modal.style.display = 'block';

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}





