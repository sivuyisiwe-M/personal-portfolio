// $(document).ready(function () {

//     $('#menu').click(function () {
//         $(this).toggleClass('fa-times');
//         $('.navbar').toggleClass('nav-toggle');
//     });

//     $(window).on('scroll load', function () {
//         $('#menu').removeClass('fa-times');
//         $('.navbar').removeClass('nav-toggle');

//         if (window.scrollY > 60) {
//             document.querySelector('#scroll-top').classList.add('active');
//         } else {
//             document.querySelector('#scroll-top').classList.remove('active');
//         }

//         // scroll spy
//         $('section').each(function () {
//             let height = $(this).height();
//             let offset = $(this).offset().top - 200;
//             let top = $(window).scrollTop();
//             let id = $(this).attr('id');

//             if (top > offset && top < offset + height) {
//                 $('.navbar ul li a').removeClass('active');
//                 $('.navbar').find(`[href="#${id}"]`).addClass('active');
//             }
//         });
//     });

//     // smooth scrolling
//     $('a[href*="#"]').on('click', function (e) {
//         e.preventDefault();
//         $('html, body').animate({
//             scrollTop: $($(this).attr('href')).offset().top,
//         }, 500, 'linear')
//     });

//     // <!-- emailjs to mail contact form data -->
//     $("#contact-form").submit(function (event) {
//         emailjs.init("56OwB3kioY5uKDyLE");

//         emailjs.sendForm('service_sdt171t', 'template_txs92qc', this)
//             .then(function (response) {
//                 console.log('SUCCESS!', response.status, response.text);
//                 document.getElementById("contact-form").reset();
//                 alert("Form Submitted Successfully");
//             }, function (error) {
//                 console.log('FAILED...', error);
//                 alert("Form Submission Failed! Try Again");
//             });
//         event.preventDefault();
//     });
//     // <!-- emailjs to mail contact form data -->

// });

// document.addEventListener('visibilitychange',
//     function () {
//         if (document.visibilityState === "visible") {
//             document.title = "Portfolio | sivuyisiwewe mgijima";
//             $("#favicon").attr("href", "assets/images/favicon.png");
//         }
//         else {
//             document.title = "Come Back To Portfolio";
//             $("#favicon").attr("href", "assets/images/favhand.png");
//         }
//     });


// // <!-- typed js effect starts -->
// var typed = new Typed(".typing-text", {
//     strings: ["frontend development", "backend development", "web designing", "android development", "web development"],
//     loop: true,
//     typeSpeed: 50,
//     backSpeed: 25,
//     backDelay: 500,
// });
// // <!-- typed js effect ends -->

// async function fetchData(type = "skills") {
//     let response
//     type === "skills" ?
//         response = await fetch("skills.json")
//         :
//         response = await fetch("./projects/projects.json")
//     const data = await response.json();
//     return data;
// }

// function showSkills(skills) {
//     let skillsContainer = document.getElementById("skillsContainer");
//     let skillHTML = "";
//     skills.forEach(skill => {
//         skillHTML += `
//         <div class="bar">
//               <div class="info">
//                 <img src=${skill.icon} alt="skill" />
//                 <span>${skill.name}</span>
//               </div>
//             </div>`
//     });
//     skillsContainer.innerHTML = skillHTML;
// }

// function showProjects(projects) {
//     let projectsContainer = document.querySelector("#work .box-container");
//     let projectHTML = "";
//     projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
//         projectHTML += `
//         <div class="box tilt">
//       <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
//       <div class="content">
//         <div class="tag">
//         <h3>${project.name}</h3>
//         </div>
//         <div class="desc">
//           <p>${project.desc}</p>
//           <div class="btns">
//             <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
//             <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
//           </div>
//         </div>
//       </div>
//     </div>`
//     });
//     projectsContainer.innerHTML = projectHTML;

//     // <!-- tilt js effect starts -->
//     VanillaTilt.init(document.querySelectorAll(".tilt"), {
//         max: 15,
//     });
//     // <!-- tilt js effect ends -->

//     /* ===== SCROLL REVEAL ANIMATION ===== */
//     const srtop = ScrollReveal({
//         origin: 'top',
//         distance: '80px',
//         duration: 1000,
//         reset: true
//     });

//     /* SCROLL PROJECTS */
//     srtop.reveal('.work .box', { interval: 200 });

// }

// fetchData().then(data => {
//     showSkills(data);
// });

// fetchData("projects").then(data => {
//     showProjects(data);
// });

// // <!-- tilt js effect starts -->
// VanillaTilt.init(document.querySelectorAll(".tilt"), {
//     max: 15,
// });
// // <!-- tilt js effect ends -->


// // pre loader start
// // function loader() {
// //     document.querySelector('.loader-container').classList.add('fade-out');
// // }
// // function fadeOut() {
// //     setInterval(loader, 500);
// // }
// // window.onload = fadeOut;
// // pre loader end

// // disable developer mode
// document.onkeydown = function (e) {
//     if (e.keyCode == 123) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//         return false;
//     }
// }

// // Start of Tawk.to Live Chat
// // var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
// // (function () {
// //     var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
// //     s1.async = true;
// //     s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
// //     s1.charset = 'UTF-8';
// //     s1.setAttribute('crossorigin', '*');
// //     s0.parentNode.insertBefore(s1, s0);
// // })();
// // End of Tawk.to Live Chat


// /* ===== SCROLL REVEAL ANIMATION ===== */
// const srtop = ScrollReveal({
//     origin: 'top',
//     distance: '80px',
//     duration: 1000,
//     reset: true
// });

// /* SCROLL HOME */
// srtop.reveal('.home .content h3', { delay: 200 });
// srtop.reveal('.home .content p', { delay: 200 });
// srtop.reveal('.home .content .btn', { delay: 200 });

// srtop.reveal('.home .image', { delay: 400 });
// srtop.reveal('.home .linkedin', { interval: 600 });
// srtop.reveal('.home .github', { interval: 800 });
// srtop.reveal('.home .twitter', { interval: 1000 });
// srtop.reveal('.home .telegram', { interval: 600 });
// srtop.reveal('.home .instagram', { interval: 600 });
// srtop.reveal('.home .dev', { interval: 600 });

// /* SCROLL ABOUT */
// srtop.reveal('.about .content h3', { delay: 200 });
// srtop.reveal('.about .content .tag', { delay: 200 });
// srtop.reveal('.about .content p', { delay: 200 });
// srtop.reveal('.about .content .box-container', { delay: 200 });
// srtop.reveal('.about .content .resumebtn', { delay: 200 });


// /* SCROLL SKILLS */
// srtop.reveal('.skills .container', { interval: 200 });
// srtop.reveal('.skills .container .bar', { delay: 400 });

// /* SCROLL EDUCATION */
// srtop.reveal('.education .box', { interval: 200 });

// /* SCROLL PROJECTS */
// srtop.reveal('.work .box', { interval: 200 });

// /* SCROLL EXPERIENCE */
// srtop.reveal('.experience .timeline', { delay: 400 });
// srtop.reveal('.experience .timeline .container', { interval: 400 });

// /* SCROLL CONTACT */
// srtop.reveal('.contact .container', { delay: 400 });
// srtop.reveal('.contact .container .form-group', { delay: 400 });





// // second
$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
 
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
 
        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
 
    // Load skills from skills.json
    console.log('Document ready, attempting to load skills...');
    loadSkills();
 
    // Smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });
});
 
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Sivuyisiwe Mgijima";
        $("#favicon").attr("href", "./assets/images/favicon.png");
    } else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href", "./assets/images/favhand.png");
    }
});
 
// Function to load skills from skills.json
function loadSkills() {
    console.log('loadSkills function called');
   
    $.ajax({
        url: './skills.json',
        dataType: 'json',
        success: function(data) {
            console.log('Skills loaded successfully:', data);
            const skillsContainer = document.getElementById('skillsContainer');
           
            if (!skillsContainer) {
                console.error('Skills container not found!');
                return;
            }
           
            skillsContainer.innerHTML = '';
           
            data.forEach(skill => {
                const skillDiv = document.createElement('div');
                skillDiv.className = 'bar';
               
                skillDiv.innerHTML = `
                    <div class="info">
                        <img src="${skill.icon}" alt="${skill.name}"/>
                        <span>${skill.name}</span>
                    </div>
                `;
               
                skillsContainer.appendChild(skillDiv);
            });
        },
        error: function(xhr, status, error) {
            console.error('Error details:');
            console.error('Status:', status);
            console.error('Error:', error);
            console.error('Response:', xhr.responseText);
           
            const skillsContainer = document.getElementById('skillsContainer');
            if (skillsContainer) {
                skillsContainer.innerHTML = '<p>Failed to load skills. Please check the console for errors.</p>';
            } else {
                console.error('Skills container not found!');
            }
        }
    });
}
 
// Fetch projects
function getProjects() {
    return fetch("projects.json")
        .then(response => response.json())
        .then(data => data);
}
 
function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    if (!projectsContainer) return; // Skip if not on a page with projects
    let projectsHTML = "";
    projects.forEach(project => {
        projectsHTML += `
        <div class="grid-item ${project.category}">
            <div class="box tilt" style="width: 380px; margin: 1rem">
                <img draggable="false" src="./assets/images/projects/${project.image}.png" alt="project" />
                <div class="content">
                    <div class="tag">
                        <h3>${project.name}</h3>
                    </div>
                    <div class="desc">
                        <p>${project.desc}</p>
                        <div class="btns">
                            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    });
    projectsContainer.innerHTML = projectsHTML;
 
    // Isotope filter
    var $grid = $('.box-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        masonry: { columnWidth: 200 }
    });
 
    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}
 
getProjects().then(data => showProjects(data));
 
// Portfolio Chatbot
class PortfolioChatbot {
    constructor() {
        this.portfolioData = {
            name: "Sivuyisiwe Mgijima",
            profession: "Full-Stack Web Developer, Android App Developer",
            projects: [
                {
                    name: "Portfolio Website",
                    description: "A personal portfolio showcasing my web development skills",
                    link: "#" // Replace with actual link
                },
                {
                    name: "Android App",
                    description: "A mobile application developed for a client",
                    link: "#" // Replace with actual link
                }
            ],
            skills: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Android SDK"],
            resume: "#", // Replace with your resume link
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/sivuyisiwe-mgijima-3b873611a/",
                github: "https://github.com/sivuyisiwe-M/"
            }
        };
 
        this.responses = {
            greeting: [
                "Hello! I'm Sivuyisiwe's portfolio assistant. How can I help you explore their work?",
                "Hi there! I can tell you about Sivuyisiwe Mgijima's projects and skills. What's on your mind?",
                "Welcome! I'm here to guide you through Sivuyisiwe's portfolio. Ask me anything!"
            ],
            name: [
                `I'm ${this.portfolioData.name}.`,
                `My name is ${this.portfolioData.name}, nice to meet you!`
            ],
            profession: [
                `I'm a ${this.portfolioData.profession}.`,
                `My expertise lies in ${this.portfolioData.profession}.`
            ],
            projects: [
                "I have several projects in my portfolio. Would you like to know about my Portfolio Website or Android App?",
                "My projects include web and mobile applications. Interested in my Portfolio Website or Android App?"
            ],
            skills: [
                `My skills include: ${this.portfolioData.skills.join(", ")}.`,
                `I'm proficient in ${this.portfolioData.skills.join(", ")}.`
            ],
            resume: [
                "You can find my resume linked on the portfolio page.",
                "My resume is available for download via the portfolio."
            ],
            contact: [
                "Reach out to me via the contact form on my portfolio or connect on LinkedIn or GitHub.",
                "You can contact me at +27 683150682 or sivuyisiwe.mgijima6.com. Check my LinkedIn or GitHub for more!"
            ],
            default: [
                "Not sure about that. Ask me about my projects, skills, or how to get in touch!",
                "Could you clarify? I'm happy to help with info about my portfolio or background.",
                "Try asking about my projects, skills, or experience!"
            ]
        };
 
        this.initializeChatbot();
    }
 
    initializeChatbot() {
        this.createChatInterface();
        this.bindEvents();
    }
 
    createChatInterface() {
        const chatHTML = `
            <div id="portfolio-chatbot" class="chatbot-container">
                <div class="chatbot-header">
                    <h3>Portfolio Assistant</h3>
                    <button id="chatbot-toggle">💬</button>
                </div>
                <div id="chatbot-messages" class="chatbot-messages"></div>
                <div class="chatbot-input">
                    <input type="text" id="chatbot-input" placeholder="Ask about Sivuyisiwe's portfolio..." />
                    <button id="chatbot-send">Send</button>
                </div>
            </div>
           
            <style>
                .chatbot-container {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    width: 320px;
                    height: 450px;
                    background: white;
                    border: 2px solidrgb(125, 51, 209);
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    z-index: 9999;
                    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
                }
               
                .chatbot-header {
                    background:rgb(226, 127, 13);
                    color: white;
                    padding: 10px;
                    border-radius: 8px 8px 0 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
               
                .chatbot-header h3 {
                    margin: 0;
                    font-size: 22px;
                }
               
                #chatbot-toggle {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 18px;
                    cursor: pointer;
                }
               
                .chatbot-messages {
                    flex: 1;
                    padding: 10px;
                    overflow-y: auto;
                    background: #f9f9f9;
                }
               
                .message {
                    margin: 10px 0;
                    padding: 8px 12px;
                    border-radius: 15px;
                    max-width: 80%;
                }
               
                .user-message {
                    background: #4CAF50;
                    color: white;
                    margin-left: auto;
                    text-align: right;
                }
               
                .bot-message {
                    background: white;
                    color: #333;
                    border: 1px solid #ddd;
                }
               
                .chatbot-input {
                    display: flex;
                    padding: 10px;
                    border-top: 1px solid #ddd;
                }
               
                #chatbot-input {
                    flex: 1;
                    padding: 8px;
                    border: 1px solid #ddd;
                    border-radius: 20px;
                    outline: none;
                }
               
                #chatbot-send {
                    margin-left: 10px;
                    padding: 8px 15px;
                    background: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 20px;
                    cursor: pointer;
                }
               
                #chatbot-send:hover {
                    background: #45a049;
                }
               
                .chatbot-minimized {
                    height: 50px;
                }
               
                .chatbot-minimized .chatbot-messages,
                .chatbot-minimized .chatbot-input {
                    display: none;
                }
            </style>
        `;
 
        document.body.insertAdjacentHTML('beforeend', chatHTML);
 
        // Add welcome message
        setTimeout(() => {
            this.addMessage(this.getRandomResponse('greeting'), 'bot');
        }, 1000);
    }
 
    bindEvents() {
        const chatbotInput = document.getElementById('chatbot-input');
        const chatbotSend = document.getElementById('chatbot-send');
        const chatbotToggle = document.getElementById('chatbot-toggle');
        const chatbotContainer = document.getElementById('portfolio-chatbot');
 
        chatbotSend.addEventListener('click', () => this.handleUserInput());
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleUserInput();
            }
        });
 
        chatbotToggle.addEventListener('click', () => {
            chatbotContainer.classList.toggle('chatbot-minimized');
        });
    }
 
    handleUserInput() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
 
        if (message) {
            this.addMessage(message, 'user');
            input.value = '';
 
            setTimeout(() => {
                const response = this.generateResponse(message);
                this.addMessage(response, 'bot');
            }, 500);
        }
    }
 
    addMessage(message, sender) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.textContent = message;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
 
    generateResponse(message) {
        const lowerMessage = message.toLowerCase();
 
        if (this.containsKeywords(lowerMessage, ['hello', 'hi', 'hey', 'greetings'])) {
            return this.getRandomResponse('greeting');
        }
 
        if (this.containsKeywords(lowerMessage, ['name', 'who are you', 'your name'])) {
            return this.getRandomResponse('name');
        }
 
        if (this.containsKeywords(lowerMessage, ['profession', 'job', 'work', 'career', 'what do you do'])) {
            return this.getRandomResponse('profession');
        }
 
        if (this.containsKeywords(lowerMessage, ['projects', 'portfolio', 'work samples','work'])) {
            if (this.containsKeywords(lowerMessage, ['portfolio website'])) {
                return `My Portfolio Website showcases my web development skills: ${this.portfolioData.projects[0].description}. Check it out here: ${this.portfolioData.projects[0].link}`;
            }
            if (this.containsKeywords(lowerMessage, ['android app'])) {
                return `My Android App is a mobile project: ${this.portfolioData.projects[1].description}. See it here: ${this.portfolioData.projects[1].link}`;
            }
            return this.getRandomResponse('projects');
        }
 
        if (this.containsKeywords(lowerMessage, ['skills', 'abilities', 'expertise', 'technologies'])) {
            return this.getRandomResponse('skills');
        }
 
        if (this.containsKeywords(lowerMessage, ['resume', 'cv', 'download'])) {
            return this.getRandomResponse('resume');
        }
 
        if (this.containsKeywords(lowerMessage, ['contact', 'reach', 'email', 'hire', 'connect','get hold'])) {
            return this.getRandomResponse('contact');
        }
 
        if (this.containsKeywords(lowerMessage, ['experience', 'background'])) {
            return `I have experience as a ${this.portfolioData.profession}. My portfolio includes projects in web and mobile development.`;
        }
 
        return this.getRandomResponse('default');
    }
 
    containsKeywords(message, keywords) {
        return keywords.some(keyword => message.includes(keyword));
    }
 
    getRandomResponse(category) {
        const responses = this.responses[category];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}
 
// Initialize chatbot
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioChatbot();
});
 
// Disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
};
 