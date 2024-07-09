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
        document.getElementById("errorEmail").innerText = "Please enter your email.";
    } else if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById("errorEmail").innerText = "Please enter a valid email address.";
    } else {
        document.getElementById("errorEmail").innerText = "";
    }

    // Validate phone number
    var phoneNumber = document.getElementById("phoneNumber").value.trim();
    if (phoneNumber === "") {
        isValid = false;
        document.getElementById("errorPhoneNumber").innerText = "Please enter your phone number.";
    } else {
        document.getElementById("errorPhoneNumber").innerText = "";
    }

    // Validate ZIP code
    var zipCode = document.getElementById("zipCode").value.trim();
    if (zipCode === "") {
        isValid = false;
        document.getElementById("errorZipCode").innerText = "Please enter your ZIP code.";
    } else {
        document.getElementById("errorZipCode").innerText = "";
    }

    // Validate service selection
    var service = document.getElementById("servicetype").value;
    if (service === "default") {
        isValid = false;
        document.getElementById("errorService").innerText = "Please select a service.";
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
                emailjs.send("service_3qh3ogr", "template_wlux81h", {
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
                }).then(
                    function (response) {
                        // Handle success
                        console.log("Admin notification email sent successfully:", response);
                        // Show success message
                        document.getElementById("sub-form").innerHTML = `
                            <div class="submission-success">
                                <h2 class='text-center'>Thank you, submission is successful!</h2>
                                <p class='text-center'>We will connect with you soon <i class="fa fa-envelope me-2"></i></p>
                            </div>`;
                        // Optionally, clear the form fields
                        document.getElementById("sub-form").reset();
                    },
                    // function (error) {
                    //     // Handle error
                    //     console.log("Failed to send admin notification email:", error);
                    //     document.querySelector('.submission-success').innerHTML = `
                    //         <h2>Oops!</h2>
                    //         <p>There was a problem with your submission. Please try again later.</p>
                    //     `;
                    // }
                );
            })
            .catch((error) => {
                console.error("Form submission error:", error);
                document.getElementById("sub-form").innerHTML = `
                <div class="submission-success">
                    <h2 class='text-center'>It seems there was an error processing your form submission!</h2>
                    <p class='text-center'>Please try again or contact us directly so we can assist you further</p>
                    <p><a href='/contact.html' class='btn btn-primary'>Contact-Us</a></p>
                </div>`;
            })
            .finally(() => {
                document.getElementById("submitButton").value = "Submit";
            });
    }

    // Prevent default form submission
    return false;
}
