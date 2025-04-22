// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the form, popup, and close button
    const recommendationForm = document.getElementById('recommendationForm');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');
    
    // Add event listener for form submission
    recommendationForm.addEventListener('submit', function(event) {
      // Prevent the default form submission
      event.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const recommendation = document.getElementById('recommendation').value;
      
      // Here you would typically send the data to a server
      // For now, we'll just show the popup
      console.log('Recommendation submitted:', { name, email, recommendation });
      
      // Reset the form
      recommendationForm.reset();
      
      // Show the popup
      popup.classList.add('show');
      
      // Optionally, you could save the recommendation in localStorage
      // or use a backend API to store it
    });
    
    // Close the popup when the close button is clicked
    closeBtn.addEventListener('click', function() {
      popup.classList.remove('show');
    });
    
    // Also close the popup when clicking outside of it
    window.addEventListener('click', function(event) {
      if (event.target === popup) {
        popup.classList.remove('show');
      }
    });
  });