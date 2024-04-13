function signUp(event) {
    event.preventDefault(); // prevent the form from submitting normally
  
    // Get the form field elements
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
  
    // Check if all form fields are filled
    if (fname.value && lname.value && email.value && password.value) {
      // Navigate to the Android page
      window.location.href = "./android_large-5.html";
    }
  }
  
  const signupForm = document.getElementById("signupForm");
  signupForm.addEventListener("submit", signUp);



  function androidclass(event) {
    event.preventDefault(); // prevent the form from submitting normally
  
    const form = event.target.form;
    const email = form.email.value;
    const password = form.password.value;
  
    // Navigate to the Android page
    window.location.href = "./android_large-5.html";
  }
  
  const signinForm = document.getElementById('signinForm');
  signinForm.addEventListener('submit', androidclass);
    function Confirmation() {
        // Get all checkbox elements
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      
        // Initialize a flag to track if any checkbox is checked
        let isChecked = false;
      
        // Loop through all checkboxes
        checkboxes.forEach((checkbox) => {
          // If a checkbox is checked, set the flag to true
          if (checkbox.checked) {
            isChecked = true;
            return; // Exit the loop since we found a checked checkbox
          }
        });
      
        // If at least one checkbox is checked, render to androidpage7
        if (isChecked) {
          window.location.href = './android_large-6.html';
        } else {
          // Display an error message if no checkbox is checked
          alert('Please select at least one goal.');
        }
      }
      function lastcall(){
        window.location.href = './android_large-5.html';
      }