document.addEventListener('DOMContentLoaded', function () {

    // Search Bar Input Event Listener
    document.getElementById('search-bar').addEventListener('input', function (event) {
        const searchTerm = event.target.value.toLowerCase();
        const recipes = document.querySelectorAll('.recipe');
        
        // Filter recipes based on the search term
        recipes.forEach(recipe => {
            const ingredients = recipe.getAttribute('data-ingredients');
            if (ingredients && ingredients.toLowerCase().includes(searchTerm)) {
                recipe.style.display = 'block';
            } else {
                recipe.style.display = 'none';
            }
        });
    });
  
    // Signup Form Submit Event Listener
    document.getElementById('signup').addEventListener('submit', function (event) {
        event.preventDefault();
  
        // Get form values
        const name = document.getElementById('name').value.trim(); // Get name field value
        const email = document.getElementById('email').value.trim();
  
        // Validate inputs
        if (!name || !email) {
            displayResponse('Please fill out all fields.', 'error');
            return;
        }
  
        if (!validateEmail(email)) {
            displayResponse('Please enter a valid email address.', 'error');
            return;
        }
  
        console.log('Form Data:', { name, email });
        displayResponse('You have been successfully signed up', 'success');
        
        setTimeout(function () {
            document.getElementById('signup').reset();
            document.getElementById('formResponse').style.display = 'none'; // Hide message after reset
        }, 2000);
    });
  
    // Email Validation Function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
  
    // Display Success/Error Messages Function
    function displayResponse(message, type) {
        const formResponse = document.getElementById('formResponse');
        formResponse.textContent = message;
        formResponse.style.color = type === 'success' ? 'green' : 'red';
        formResponse.style.display = 'block'; // Show the message container
    }

});
