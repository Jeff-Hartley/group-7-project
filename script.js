document.addEventListener('DOMContentLoaded', function () {
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
  