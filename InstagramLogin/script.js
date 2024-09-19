// Function to toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById("password");
    const showButton = document.querySelector(".show-password");
    
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showButton.textContent = "Hide";
    } else {
      passwordInput.type = "password";
      showButton.textContent = "Show";
    }
  }
  
  // Function to show/hide the "Show" button based on the input value
  document.getElementById("password").addEventListener("input", function() {
    const passwordInput = document.getElementById("password");
    const showButton = document.querySelector(".show-password");
  
    if (passwordInput.value.length > 0) {
      // If there is text in the password field, show the "Show" button
      showButton.style.display = "inline-block";
    } else {
      // If the password field is empty, hide the "Show" button
      showButton.style.display = "none";
    }
  });
  