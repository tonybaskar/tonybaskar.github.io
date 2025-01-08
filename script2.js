//tonybaskar's portfolio  script for the chatbot
document.getElementById('chatbot-send').addEventListener('click', function () {
    const inputField = document.getElementById('chatbot-input');
    const userMessage = inputField.value.trim();
    const messagesContainer = document.getElementById('chatbot-messages');

    if (userMessage) {
       
        const userDiv = document.createElement('div');
        userDiv.className = "user-message";
        userDiv.textContent = `You: ${userMessage}`;
        messagesContainer.appendChild(userDiv);

       


       
        const botDiv = document.createElement('div');
        const botResponse = getBotResponse(userMessage);
        botDiv.className = "bot-message";
        botDiv.textContent = `Bot: ${botResponse}`;
        messagesContainer.appendChild(botDiv);

       
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        
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

