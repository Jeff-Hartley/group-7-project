document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('search-bar').addEventListener('input', function (event) {
        const searchTerm = event.target.value.toLowerCase();
        const recipes = document.querySelectorAll('.recipe');
        
  //script for fetching ingredients to filter and display.
        recipes.forEach(recipe => {
            const ingredients = recipe.getAttribute('data-ingredients');
            if (ingredients && ingredients.toLowerCase().includes(searchTerm)) {
                recipe.style.display = 'block';
            } else {
                recipe.style.display = 'none';
            }
        });
    });
  
    document.getElementById('signup').addEventListener('submit', function (event) {
        event.preventDefault();
  
        // Get form values
        const name = document.getElementById('name').value.trim();
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
        document.getElementById('signup').reset();
    });
  
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
  
    function displayResponse(message, type) {
        const formResponse = document.getElementById('formResponse');
        formResponse.textContent = message;
        formResponse.style.color = type === 'success' ? 'green' : 'red';
    }
  });
=======
  document.getElementById('search-bar').addEventListener('input', function (event) {
      const searchTerm = event.target.value.toLowerCase();
      const recipes = document.querySelectorAll('.recipe');
      
//script for fetching ingredients to filter and display.
      recipes.forEach(recipe => {
          const ingredients = recipe.getAttribute('data-ingredients');
          if (ingredients && ingredients.toLowerCase().includes(searchTerm)) {
              recipe.style.display = 'block';
          } else {
              recipe.style.display = 'none';
          }
      });
  });

  document.getElementById('signup').addEventListener('submit', function (event) {
      event.preventDefault();

      // Get form values
      const name = document.getElementById('name').value.trim();
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
      document.getElementById('signup').reset();
  });

  function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  function displayResponse(message, type) {
      const formResponse = document.getElementById('formResponse');
      formResponse.textContent = message;
      formResponse.style.color = type === 'success' ? 'green' : 'red';
  }
});

