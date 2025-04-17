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

// Theme toggler functionality
$(document).ready(function() {
    if (typeof Typed !== 'undefined' && document.querySelector(".typing-text")) {
        var typed = new Typed(".typing-text", {
            strings: ["AI Engineer","frontend development", "backend development", "web designing", "android development", "web development"],
            loop: true,
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 500,
        });
    }

    // Theme toggler
    $('.theme-toggler span').each(function(index) {
        $(this).click(function() {
            // Reset any previous theme classes
            $('body').removeClass('theme-1 theme-2 theme-3 theme-4 theme-5');
            
            // Add theme class based on clicked span
            $('body').addClass('theme-' + (index + 1));
        });
    });

    // Responsive menu toggle (from original script)
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Scroll and navigation handling
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // Scroll top button
        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // Scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });
    
    // Load skills from skills.json
    console.log('Document ready, attempting to load skills...');
    loadSkills();
    
    // Smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });
});

// Function to load skills from skills.json
function loadSkills() {
    console.log('loadSkills function called');
    
    // Try loading the file with a complete error handler
    $.ajax({
        url: './skills.json',
        dataType: 'json',
        success: function(data) {
            console.log('Skills loaded successfully:', data);
            const skillsContainer = document.getElementById('skillsContainer');
            
            // Make sure the container exists
            if (!skillsContainer) {
                console.error('Skills container not found!');
                return;
            }
            
            // Clear the container first
            skillsContainer.innerHTML = '';
            
            // Loop through each skill and create HTML elements
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
            
            // Check if skillsContainer exists before trying to access it
            const skillsContainer = document.getElementById('skillsContainer');
            if (skillsContainer) {
                skillsContainer.innerHTML = '<p>Failed to load skills. Please check the console for errors.</p>';
            } else {
                console.error('Skills container not found!');
            }
        }
    });
}


// Start of Tawk.to Live Chat
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6800e4a6c5e333190b5b7a56/1ip1nqb1d';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
// End of Tawk.to Live Chat


// Page title and favicon change
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Sivuyisiwe Mgijima";
        $("#favicon").attr("href", "assets/images/favicon.png");
    } else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href", "assets/images/favhand.png");
    }
});


document.head.insertAdjacentHTML('beforeend', themeStyles);