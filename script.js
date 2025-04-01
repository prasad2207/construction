document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".navbar-toggler");
    const navOverlay = document.querySelector(".nav-overlay");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    button.addEventListener("click", function () {
        navOverlay.classList.toggle("active");
    });

    navOverlay.addEventListener("click", function (event) {
        if (event.target === navOverlay) {
            navOverlay.classList.remove("active");
            navbarCollapse.classList.remove("show");
        }
    });
});

function solveSimpleChallenge() {
    console.log("Function is working!");
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");
});

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("5iTukbMhW6VPWDZ_V"); // Replace with your EmailJS Public Key

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        console.log("Submit button clicked!"); // Check if this logs in the console

        // Get form values
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        // Debugging: Check if values are being captured
        console.log("Form Data:", formData);

        // Send email via EmailJS
        emailjs.send("service_85zieud", "template_8gqfpft", formData)
            .then(function (response) {
                alert("Email sent successfully!");
                console.log("SUCCESS!", response.status, response.text);
            })
            .catch(function (error) {
                alert("Failed to send email.");
                console.log("FAILED...", error);
            });
    });
});

