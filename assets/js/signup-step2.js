/** 
Author: Build Rise Shine with Nyros (BRS) 
Created: 2023 
Library / Component: Step 2 form
Description: Logic for step 2 form
(c) Copyright by BRS with Nyros. 
**/

// Validation for the form 2 [radio buttons and dropdown] for signup-step2.html
function validate() {
  let plan = document.forms['myform']['plan'].value
  let sel_opt = document.forms['myform']['sel_opt'].value

  if (plan == '') {
    document.getElementById('error1').innerHTML = 'Please select anyone'

    return false
  } else if (plan == 'a' || plan == 'b' || plan == 'c') {
    document.getElementById('error1').innerHTML = ''
  }

  if (sel_opt == 'Select an Option') {
    document.getElementById('error2').innerHTML = 'please select anyone'
    return false
  } else if (sel_opt == 'a' || sel_opt == 'b' || sel_opt == 'c') {
    document.getElementById('error2').innerHTML = ''
  }
}
//-------------------------------------------------------------------------------------------
function validate() {
  // Clear previous error messages and reset border color
  document.getElementById("error-msg").innerText = "";
  document.getElementById("phoneNumber").classList.remove("error-border");

  // Validate phone number
  var phoneNumber = document.getElementById("phoneNumber").value;
  var regex = /^[0-9+]+$/;

  if (!regex.test(phoneNumber)) {
    // Display error message
    document.getElementById("error-msg").innerText = "Invalid phone number. Please enter numbers.";
    document.getElementById("error-msg").style.color = "red";

    // Add error-border class to highlight the input field
    document.getElementById("phoneNumber").classList.add("error-border");

    return false;
  }

  // Other validations and form submission logic can be added here

  return true; // If all validations pass, allow form submission
}

function removeError() {
  // Clear the error message and reset border color when the user starts typing again
  document.getElementById("error-msg").innerText = "";
  document.getElementById("phoneNumber").classList.remove("error-border");
}


