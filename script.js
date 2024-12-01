// script to reveal the letters of my name tonybaskar y

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

//script for the announcement section

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


// script for  hamburger menu toggle open and close

function toggleMenu()
{
    const menu= document.querySelector(".menu-links");
    const icon= document.querySelector(".hamburger-icon");
    menu.classList.toggle("open") // here the menu classlist calls the inbuilt function toggle with class open
    icon.classList.toggle("open")

}
// for about section reveal as the visitor scrolls the screen

document.addEventListener('DOMContentLoaded', function () {

    // Smooth scrolling to the Skills section
    const arrowIcon = document.querySelector('.arrow-icon');
    arrowIcon.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#Skills').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Fade-in effect for About section content
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

    // Initial call to check if elements are already in view

    fadeInOnScroll();

    // Interactive arrow icon - change color on hover
    arrowIcon.addEventListener('mouseenter', function () {
        arrowIcon.style.filter = 'brightness(1.5)';
    });

    arrowIcon.addEventListener('mouseleave', function () {
        arrowIcon.style.filter = 'brightness(1)';
    });

    // Change arrow color on click
    arrowIcon.addEventListener('mousedown', function () {
        arrowIcon.style.transform = 'scale(0.95)';
    });

    arrowIcon.addEventListener('mouseup', function () {
        arrowIcon.style.transform = 'scale(1)';
    });
});


//  function to scroll to next section  while clicking on arrow

function scrollToSkills() {
    document.getElementById('Skills').scrollIntoView({ behavior: 'smooth' });
}
// function to scroll to achivement section
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
// function to scroll to profiile section
function scrollToprofile() {
    document.getElementById('profile').scrollIntoView({ behavior: 'smooth' });
}

// for skill section interactivity

// document.addEventListener('DOMContentLoaded', () => {
//     const skills = document.querySelectorAll('.skill');

//     const animateSkillBar = (skill) => {
//         const skillLevel = skill.querySelector('.skill-level');
//         const skillPercentage = skill.querySelector('.skill-percentage');
//         const targetPercentage = skillLevel.getAttribute('data-skill');

//         // Reset skill level width and percentage for the clicked skill only
//         skillLevel.style.width = '0%';
//         skillPercentage.textContent = '0%';

//         // Force a reflow to ensure the reset width is applied
//         skillLevel.offsetHeight;

//         // Start animating the skill level width
//         skillLevel.style.width = targetPercentage;

//         // Animate percentage
//         let currentPercentage = 0;
//         const target = parseInt(targetPercentage, 10);
//         const increment = Math.ceil(target / 100); // Increment step size
//         const intervalTime = 20; // Time in ms for each increment
//         const totalTime = 2000; // Total time for animation in ms

//         const percentageInterval = setInterval(() => {
//             if (currentPercentage < target) {
//                 currentPercentage += increment;
//                 if (currentPercentage > target) currentPercentage = target; // Clamp value
//                 skillPercentage.textContent = currentPercentage + '%';
//             } else {
//                 clearInterval(percentageInterval);
//             }
//         }, totalTime / (target / increment));

//         // Ensure the percentage remains visible after animation
//         skillPercentage.style.opacity = '1';
//         skillLevel.style.opacity = '1';
//     };

//     // Add click event listeners to each skill
//     skills.forEach(skill => {
//         skill.addEventListener('click', () => {
//             animateSkillBar(skill);

//             // Ensure all percentages are kept visible after animation
//             skills.forEach(otherSkill => {
//                 const otherSkillPercentage = otherSkill.querySelector('.skill-percentage');
//                 const otherSkillLevel = otherSkill.querySelector('.skill-level');
//                 otherSkillPercentage.style.opacity = '1';
//                 otherSkillLevel.style.opacity = '1';
//             });
//         });
//     });
// });


//new updated automatic increase of percentage when the user scrolls

document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');
    
    const animateSkillBar = (skill) => {
        const skillLevel = skill.querySelector('.skill-level');
        const skillPercentage = skill.querySelector('.skill-percentage');
        const targetPercentage = skillLevel.getAttribute('data-skill');

        // Reset skill level width and percentage
        skillLevel.style.width = '0%';
        skillPercentage.textContent = '0%';

        // Start animating the skill level width
        skillLevel.style.width = targetPercentage;

        // Animate percentage
        let currentPercentage = 0;
        const target = parseInt(targetPercentage, 10);
        const increment = Math.ceil(target / 100); // Increment step size
        const intervalTime = 20; // Time in ms for each increment
        const totalTime = 2000; // Total time for animation in ms

        const percentageInterval = setInterval(() => {
            if (currentPercentage < target) {
                currentPercentage += increment;
                if (currentPercentage > target) currentPercentage = target; // Clamp value
                skillPercentage.textContent = currentPercentage + '%';
            } else {
                clearInterval(percentageInterval);
            }
        }, totalTime / (target / increment));

        // Ensure the percentage remains visible after animation
        skillPercentage.style.opacity = '1';
        skillLevel.style.opacity = '1';
    };

    // Create an intersection observer to detect when the skills section is visible
    const observerOptions = {
        threshold: 0.5 // Trigger when at least 50% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the skill is visible, animate it
                const skill = entry.target;
                animateSkillBar(skill);
                // Unobserve the skill after animation
                observer.unobserve(skill);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each skill
    skills.forEach(skill => {
        observer.observe(skill);
    });
});


