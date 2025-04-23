// // Wait for the DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//   // Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyBrCO0TMUkI5xq_5XP2Gdlac2zPvZvzvT4",
//     authDomain: "personalportfolio-6e3f7.firebaseapp.com",
//     projectId: "personalportfolio-6e3f7",
//     storageBucket: "personalportfolio-6e3f7.firebasestorage.app",
//     messagingSenderId: "437625414586",
//     appId: "1:437625414586:web:40faff67d95e06183cb383",
//     measurementId: "G-SSME2KJRP9"
//   };

//   // Initialize Firebase (only if it hasn't been initialized already)
//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }
  
//   // Initialize Firestore
//   const db = firebase.firestore();

//   // Default recommendations
//   const defaultRecommendations = [
//     { name: "Ziyanda Tom", text: "I was really impressed by how quickly I found everything I needed. Great layout, solid content, and fast loading—what more could you ask for?" },
//     { name: "Chumasande Mooi", text: "I appreciate how responsive the site i asked for is. Looks just as good on my phone as it does on desktop. Not something you see every day" },
//     { name: "Zeeya Skins and Decor", text: "Working with Sivuyisiwe was an absolute pleasure. The website they created for us completely transformed our online presence. We've seen a huge increase in engagement and sales since the redesign." },
//     { name: "Cele Decor", text: "I couldn't be happier with the mobile app Sivuyisiwe built for our team. It's intuitive, fast, and has made a huge difference in how we manage day-to-day operations. The attention to detail was top-notch" },
//     { name: "James H., CEO of EcoSolutions", text: "We approached Sivuyisiwe to develop a custom e-commerce platform, and they delivered beyond our expectations. The site is user-friendly, and the design perfectly reflects our brand's personality." },
//     { name: "Emily T., Marketing Director at LuxeRetail", text: "The logo and branding package Sivuyisiwe created for our company is exactly what we needed. The design feels fresh and professional, and we've received numerous compliments from clients and partners alike" }
//   ];

//   // Function to create a testimonial card element
//   function createTestimonialCard(name, text) {
//     return `<li><div class="card"><a href=""><span class="model-name">${name}</span><span>${text}</span></a></div></li>`;
//   }

//   // Function to display recommendations
//   function displayRecommendations(recommendations) {
//     const cardList = document.getElementById('card-list');
//     if (!cardList) return; // Guard clause in case element doesn't exist
    
//     cardList.innerHTML = ''; // Clear existing cards
    
//     // Update the card count based on the number of recommendations
//     cardList.style.setProperty('--count', recommendations.length);
    
//     // Add all recommendations to the display
//     recommendations.forEach(rec => {
//       cardList.innerHTML += createTestimonialCard(rec.name, rec.text);
//     });
//   }

//   // Function to fetch recommendations from Firebase
//   function fetchRecommendations() {
//     // Start with default recommendations
//     let allRecommendations = [...defaultRecommendations];
    
//     // Get recommendations from Firebase
//     db.collection("recommendations").orderBy("timestamp", "desc").limit(10).get()
//       .then((querySnapshot) => {
//         // Add Firebase recommendations to our array
//         querySnapshot.forEach((doc) => {
//           const data = doc.data();
//           allRecommendations.push({
//             name: data.name,
//             text: data.recommendation
//           });
//         });
        
//         // Display all recommendations
//         displayRecommendations(allRecommendations);
//       })
//       .catch((error) => {
//         console.error("Error getting recommendations: ", error);
//         // If there's an error, just show the default recommendations
//         displayRecommendations(defaultRecommendations);
//       });
//   }

//   // Get references to the form, popup, and close button
//   const recommendationForm = document.getElementById('recommendationForm');
//   const popup = document.getElementById('popup');
//   const closeBtn = document.querySelector('.close-btn');
  
//   // Add event listener for form submission
//   if (recommendationForm) {
//     recommendationForm.addEventListener('submit', function(event) {
//       // Prevent the default form submission
//       event.preventDefault();
      
//       // Get form values
//       const name = document.getElementById('name').value;
//       const email = document.getElementById('email').value;
//       const recommendationText = document.getElementById('recommendation').value;
      
//       // Add a new document to Firestore
//       db.collection("recommendations").add({
//         name: name,
//         email: email,
//         recommendation: recommendationText,
//         timestamp: firebase.firestore.FieldValue.serverTimestamp()
//       })
//       .then(() => {
//         console.log("Recommendation successfully saved!");
        
//         // Reset the form
//         recommendationForm.reset();
        
//         // Show the popup
//         popup.classList.add('show');
        
//         // Refresh the recommendations display to include the new submission
//         setTimeout(fetchRecommendations, 1000); // Small delay to ensure Firestore has updated
//       })
//       .catch((error) => {
//         console.error("Error saving recommendation: ", error);
//       });
//     });
//   }
  
//   // Close the popup when the close button is clicked
//   if (closeBtn) {
//     closeBtn.addEventListener('click', function() {
//       popup.classList.remove('show');
//     });
//   }
  
//   // Also close the popup when clicking outside of it
//   window.addEventListener('click', function(event) {
//     if (event.target === popup) {
//       popup.classList.remove('show');
//     }
//   });

//   // Initial load of recommendations
//   fetchRecommendations();
// });