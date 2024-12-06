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
// function to scroll to testimonials section
function scrollToTestimonials() {
    document.getElementById('Testimonials').scrollIntoView({ behavior: 'smooth' });
}
// function to scroll to profiile section
function scrollToprofile() {
    document.getElementById('profile').scrollIntoView({ behavior: 'smooth' });
}


//skills section

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


// script for the chatbot
document.getElementById('chatbot-send').addEventListener('click', function () {
    const inputField = document.getElementById('chatbot-input');
    const userMessage = inputField.value.trim();
    const messagesContainer = document.getElementById('chatbot-messages');

    if (userMessage) {
        // Add user message to the chat
        const userDiv = document.createElement('div');
        userDiv.className = "user-message";
        userDiv.textContent = `You: ${userMessage}`;
        messagesContainer.appendChild(userDiv);

       


        // Add bot reply
        const botDiv = document.createElement('div');
        const botResponse = getBotResponse(userMessage);
        botDiv.className = "bot-message";
        botDiv.textContent = `Bot: ${botResponse}`;
        messagesContainer.appendChild(botDiv);

        // Scroll to the bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Clear the input field
        inputField.value = '';
    }
    else {
        alert('Please type a message before sending!');
    }
});

function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('hello')) {
        return 'Hi there! How can I assist you today? You can ask me about Tony\'s skills, education, or achievements.';
    } 
    else if (lowerMessage.includes('how are you')) {
        return 'I am just a bot, but I am here to help you with details about Tony. What would you like to know?';
    } 
    else if (lowerMessage.includes('nice') || lowerMessage.includes('great')) {
        return 'I’m glad you think so! Tony is an amazing person. Ask me more about his achievements or skills!';
    } 
    else if (lowerMessage.includes('thank you') || lowerMessage.includes('thanks')) {
        return 'You’re welcome! Let me know if you have more questions about Tony.';
    } 
    else if (lowerMessage.includes('name')|| lowerMessage.includes('who is')) {
        return 'My creator is Tony Baskar Y!';
    } 
    else if (lowerMessage.includes('introduce')) {
        return 'Tony Baskar Y is a dedicated B.Sc. Computer Science student with a CGPA of 8.57. Skilled in Java, JavaScript, SQL, and Full Stack Development, he’s a quick learner and a gold medalist, ready to excel in his career!';
    } 
    
    else if (lowerMessage.includes('education')) {
        return 'Tony completed his B.Sc. Computer Science with a CGPA of 8.57.';
    } 
    else if (lowerMessage.includes('skills')) {
        return 'Tony is skilled in Java, JavaScript, SQL, PL/SQL, and Full Stack Development.';
    } 
    else if (lowerMessage.includes('achievements')) {
        return 'Tony was a gold medalist and received the LIC Best Student of the Year award.and he is recently certified by nptel with 75% in programming in java';
    } 
    else if (lowerMessage.includes('quick learner')|| lowerMessage.includes('character')) {
        return 'Tony is a quick learner and excels in understanding new concepts easily.';
    } 
    else if (lowerMessage.includes('work') || lowerMessage.includes('career')|| lowerMessage.includes('experience')) {
        return 'Tony is a fresher and he is ready to work in a reputed company where he can showcase his skills and grow professionally.';
    } 
    else if (lowerMessage.includes('hobbies') || lowerMessage.includes('interests')) {
        return 'Tony enjoys coding, designing, and learning new technologies. He also likes sharing his knowledge with others.';
    } 
    else if (lowerMessage.includes('ready to work')) {
    } 
    
    else if (lowerMessage.includes('oh') || lowerMessage.includes('ok')) {
        return 'Let me know , if you want to know further about tony';
    } 
    else if (lowerMessage.includes('ready to work')) {
        return 'Yes, Tony is ready to contribute to a dynamic team and bring value to a reputed organization.';
    } 
    else if (lowerMessage.includes('hire')) {
        return 'Absolutely! Tony Baskar Y is an excellent candidate, equipped with the skills, dedication, and passion to contribute effectively to your team. He’s ready to showcase his talents and grow professionally.';
    }
    else if (lowerMessage.includes('coding')) {
        return 'Absolutely! Tony is passionate about coding and constantly learning new technologies.';
    }
    else if (lowerMessage.includes('technologies')|| lowerMessage.includes('technology')) {
        return 'Tony is skilled in Java, JavaScript, SQL, PL/SQL, Figma, Canva, MS Office, and Full Stack Development.';
    }
    else {
        return 'I’m not sure about that. Try asking about Tony\'s work, achievements, skills, education, or his readiness to work!';
    }
}



