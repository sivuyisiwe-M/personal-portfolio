// // Initialize Firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyBrCO0TMUkI5xq_5XP2Gdlac2zPvZvzvT4",
//     authDomain: "personalportfolio-6e3f7.firebaseapp.com",
//     projectId: "personalportfolio-6e3f7",
//     storageBucket: "personalportfolio-6e3f7.firebasestorage.app",
//     messagingSenderId: "437625414586",
//     appId: "1:437625414586:web:40faff67d95e06183cb383",
//     measurementId: "G-SSME2KJRP9"
//   };
  
//   // Initialize Firebase - only do this once
//   firebase.initializeApp(firebaseConfig);
//   const db = firebase.firestore();
  
//   // Inside your form submit event listener
//   recommendationForm.addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const recommendation = document.getElementById('recommendation').value;
    
//     // Add a new document to Firestore
//     db.collection("recommendations").add({
//       name: name,
//       email: email,
//       recommendation: recommendation,
//       timestamp: firebase.firestore.FieldValue.serverTimestamp()
//     })
//     .then(() => {
//       console.log("Recommendation successfully saved!");
//       popup.classList.add('show');
//       recommendationForm.reset();
//     })
//     .catch((error) => {
//       console.error("Error saving recommendation: ", error);
//     });
//   });