function submitForm() {
  var isValid = true;

  // Validate name
  var name = document.getElementById("name").value.trim();
  if (name === "") {
    isValid = false;
    document.getElementById("errorName").innerText = "Please enter your name.";
  } else {
    document.getElementById("errorName").innerText = "";
  }

  // Validate email
  var email = document.getElementById("email").value.trim();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    isValid = false;
    document.getElementById("errorEmail").innerText =
      "Please enter your email.";
  } else if (!emailRegex.test(email)) {
    isValid = false;
    document.getElementById("errorEmail").innerText =
      "Please enter a valid email address.";
  } else {
    document.getElementById("errorEmail").innerText = "";
  }

  // Validate phone number
  var phoneNumber = document.getElementById("phoneNumber").value.trim();
  if (phoneNumber === "") {
    isValid = false;
    document.getElementById("errorPhoneNumber").innerText =
      "Please enter your phone number.";
  } else {
    document.getElementById("errorPhoneNumber").innerText = "";
  }

  // Validate ZIP code
  var zipCode = document.getElementById("zipCode").value.trim();
  if (zipCode === "") {
    isValid = false;
    document.getElementById("errorZipCode").innerText =
      "Please enter your ZIP code.";
  } else {
    document.getElementById("errorZipCode").innerText = "";
  }

  // Validate service selection
  var service = document.getElementById("servicetype").value;
  if (service === "default") {
    isValid = false;
    document.getElementById("errorService").innerText =
      "Please select a service.";
  } else {
    document.getElementById("errorService").innerText = "";
  }

  // Validate user type
  var userType = document.getElementById("usertype").value;
  if (userType === "default") {
    isValid = false;
    document.getElementById("errortype").innerText = "Please select a Type.";
  } else {
    document.getElementById("errortype").innerText = "";
  }

  // Retrieve other form fields
  var address1 = document.getElementById("addressOne").value;
  var address2 = document.getElementById("addressTwo").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  if (isValid) {
    // Submit form if valid
    document.getElementById("submitButton").value = "Wait a Second..";
    var formData = new FormData(document.getElementById("sub-form"));

    fetch(document.getElementById("sub-form").getAttribute("action"), {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        // Initialize EmailJS and send email
        console.log("Form submission successful:", data);
        emailjs.init("MDsHAvuWwia9ZwLmJ");
        emailjs
          .send("service_3qh3ogr", "template_wlux81h", {
            type: userType,
            name: name,
            email: email,
            phone: phoneNumber,
            address1: address1,
            address2: address2,
            zipcode: zipCode,
            service: service,
            subject: subject,
            message: message,
          })
          .then(
            function (response) {
              // Handle success
              console.log(
                "Admin notification email sent successfully:",
                response
              );
              document.getElementById("sub-form").innerHTML = `
                            <div class="submission-success">
                                <h2 class='text-center'>Thank you, submission is successful!</h2>
                                <p class='text-center'>We will connect with you soon <i class="fa fa-envelope me-2"></i></p>
                            </div>`;
            }
            // function (error) {
            //     // Handle failure
            //     console.error("Error sending admin notification email:", error);
            // }
          );
      })
      .catch((error) => {
        // Handle fetch errors
        console.error("There was an error in form submission:", error);
        document.getElementById("sub-form").innerHTML = `
                <div class="submission-success">
                    <h2 class='text-center'>It seems there was an error processing your form submission!</h2>
                    <p class='text-center'>Please try again or contact us directly so we can assist you further</p>
                    <p><a href='https://rapidhealthconnect.netlify.app/contact' class='btn btn-primary'>Contact-Us</a></p>
                </div>`;

        // Send error email
        emailjs.init("9y2-7nt7W0n40tp2k");
        emailjs.send("service_nywgfzp", "template_5oej7kb", {
          subject: "There was an Error in Sending the Form data",
          message: `Hello RHC.org, we regret to inform that due to a technical glitch we are not able to reach the user's data to you, please contact the technical team as soon as possible, Thank you.`,

          // Error email content...
        });
      });
  }

  return false; // Prevent default form submission
}

// function submitForm() {
//     if (validateForm()) {
//         document.getElementById('sub-form').innerHTML = `
//                 <div class="submission-success">
//                     <h2>Thank you, submission is successful!</h2>
//                     <p>We will connect with you soon <i class="fa fa-envelope me-2"></i></p>
//                     <a class="btn btn-primary py-2 px-3 me-3" href="index.html">
//                                     Go back to Home
//                                 </a>
//                 </div>`
//         return true;
//     } else {
//         // If validation fails, prevent form submission
//         return false;
//     }

// }

// ############################################################################################################################################################################

//Contact form

function contact() {
  var isValid = true;

  var inputName = document.getElementById("name").value;
  var inputEmail = document.getElementById("email").value;
  var inputMessage = document.getElementById("message").value;
  var inputPhone = document.getElementById("phone").value;
  var ProblemType = document.getElementById("title3").value;
  var inputSubject = document.getElementById("subject").value;

  var nameError = document.getElementById("errorName");
  var emailError = document.getElementById("errorEmail");
  var messageError = document.getElementById("errorMessage");
  var errorPhone = document.getElementById("errorPhone");
  var problemError = document.getElementById("Problemerrortype");

  if (inputName.trim() === "") {
      nameError.innerHTML = "Please enter your name.";
      isValid = false;
  } else {
      nameError.innerHTML = "";
  }
  if (inputEmail.trim() === "") {
      emailError.innerHTML = "Please enter your email.";
      isValid = false;
  } else {
      emailError.innerHTML = "";
  }
  if (inputMessage.trim() === "") {
      messageError.innerHTML = "Please enter your message.";
      isValid = false;
  } else {
      messageError.innerHTML = "";
  }
  if (inputPhone.trim() === "") {
      errorPhone.innerHTML = "Please enter your Contact Number.";
      isValid = false;
  } else {
      errorPhone.innerHTML = "";
  }
  if (ProblemType === "default") {
      problemError.innerText = "Please select a Type.";
      isValid = false;
  } else {
      problemError.innerText = "";
  }

  if (isValid) {
      document.getElementById("submitButton").value = "Wait a Second..";
      var formData = new FormData(document.getElementById("sub-form"));

      fetch(document.getElementById("sub-form").getAttribute("action"), {
          method: "POST",
          body: formData,
      })
      .then((response) => {
          if (!response.ok) {
              throw new Error("Network response was not ok");
          }
          return response.text();
      })
      .then((data) => {
          console.log(data); // Log success message

          emailjs.send("service_3qh3ogr", "template_z41537p", {
              name: inputName,
              email: inputEmail,
              phone: inputPhone,
              title3: ProblemType,
              subject: inputSubject,
              message: inputMessage,
          })
          .then((response) => {
              console.log("Admin notification email sent successfully:", response);
              document.getElementById("sub-form").innerHTML = `
                  <div class="submission-success">
                      <h2 class='text-center'>Thank you, submission is successful!</h2>
                      <p class='text-center'>We will connect with you soon <i class="fa fa-envelope me-2"></i></p>
                  </div>`;
          });
      })
      .catch((error) => {
          console.log("Error in Sending data", error);
          document.getElementById("sub-form").innerHTML = `
            <div class="submission-success">
                <h2 class='text-center'>It seems there was an error processing your form submission!</h2>
                <p class='text-center'>Please try again or contact us directly so we can assist you further</p>
                <p class='item-center'><a href='mailto:info@rapidhealthconnect.org' class='btn btn-primary text-center'>Mail-Us</a></p>
            </div>`;
          emailjs.send("service_nywgfzp", "template_5oej7kb", {
            subject: "There was an Error in Sending the Form data",
            message: `Hello RHC.org, we regret to inform that due to technical glitch we are not able to reach the user's data <b>(Contact Form)</b> to you, please contact the technical team as soon as possible, Thank you.`,
            email: inputEmail,
          });
      });
  }

  return false; // Prevent default form submission
}
 

