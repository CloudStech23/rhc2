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
            emailjs.send("service_3qh3ogr", "template_9gds2lb", {
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
            })
            .catch((error) => {
                console.log("Error sending email:", error);
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