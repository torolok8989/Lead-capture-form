document.getElementById("leadForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let projectType = document.getElementById("project-type").value;
    let details = document.getElementById("details").value.trim();

    // Validation checks
    if (name === "" || phone === "") {
        alert("Full Name and Phone Number are required!");
        return;
    }
    
    if (email !== "" && !validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Simulate form submission
    console.log("Form Submitted:", { name, phone, email, projectType, details });

    // Show success message
    document.getElementById("success-message").classList.remove("hidden");

    // Reset form fields
    document.getElementById("leadForm").reset();
});

// Email validation function
function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
