document.getElementById("loginform").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the entered username and password
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    // Check if the entered username and password match your criteria
    // Replace this with your actual validation logic
    if (enteredUsername === "desiredUsername" && enteredPassword === "desiredPassword") {
        // Authentication successful, you can redirect or perform other actions here
        console.log("Login successful");
    } else {
        // Display an error message if authentication fails
        const messageElement = document.getElementById("message");
        messageElement.textContent = "Invalid username or password. Please try again.";
    }

});