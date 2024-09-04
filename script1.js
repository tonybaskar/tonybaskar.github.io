// for achievement section


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


// for project section
document.addEventListener('DOMContentLoaded', function() {
    const projectSections = document.querySelectorAll('.project');
    console.log('Projects found:', projectSections.length); // Debugging

    const options = {
        threshold: 0.3
    };

    const projectObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Animating:', entry.target); // Debugging
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    projectSections.forEach(section => {
        projectObserver.observe(section);
    });
});

// for contact section
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = this.Name.value.trim();
    const email = this.Email.value.trim();
    const message = this.Message.value.trim();

    if (validateForm(name, email, message)) {
        showModal(`Thanks for your valuable feedback, ${name}`);
        this.reset();
    } else {
        showModal('Please fill out all fields correctly.');
    }
});

function validateForm(name, email, message) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const namePattern = /^[A-Za-z\s]+$/; // Allows only letters and spaces

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


