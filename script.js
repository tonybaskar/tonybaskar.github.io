//tonybaskar's portfolio  script to reveal the letters of my name tonybaskar y

document.addEventListener("DOMContentLoaded", function() {
    const name = "Tony Baskar Y";
    const nameElement = document.getElementById("name");
    let index = 0;

    function typeWriter() {
        if (index < name.length) {
            nameElement.innerHTML += name.charAt(index);
            index++;
            setTimeout(typeWriter, 150); 
        }
    }

    typeWriter();
});

//tonybaskar's portfolio script for the announcement section

document.addEventListener("DOMContentLoaded", () => {
    const announcementText = document.querySelector(".announcement-text");
    announcementText.style.opacity = 0;
    announcementText.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        announcementText.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        announcementText.style.opacity = 1;
        announcementText.style.transform = "translateY(0)";
    }, 500);
});


// tonybaskar's portfolio script for  hamburger menu toggle open and close

function toggleMenu()
{
    const menu= document.querySelector(".menu-links");
    const icon= document.querySelector(".hamburger-icon");
    menu.classList.toggle("open") 
    icon.classList.toggle("open")

}


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

 
    setInterval(nextCertificate, 10000);
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



