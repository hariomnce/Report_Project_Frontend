// document.getElementById("loginform").addEventListener("submit", function (event) {
//     event.preventDefault();

document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submitButton");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Get the entered username and password
    // const enteredUsername = document.getElementById("username").value;
    // const enteredPassword = document.getElementById("password").value;

    submitButton.addEventListener("click", () => {debugger
        const nameInputValue = document.getElementById("name").value;
        const emailInputValue = document.getElementById("email").value;
        const passwordInputValue = document.getElementById("password").value;
        const formData = {
            name: nameInputValue,
            email: emailInputValue,
            password: passwordInputValue
        };
        console.log(formData,"formdata");
        fetch('http://localhost:8080/sign-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.parse(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            console.log("response", response)// return response.json();
        })
        .then(data => {
            // Display API response in the result div
            // resultDiv.textContent = data.message;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    });

    // Check if the entered username and password match your criteria
    // Replace this with your actual validation logic
    // if (enteredUsername === "desiredUsername" && enteredPassword === "desiredPassword") {
    //     // Authentication successful, you can redirect or perform other actions here
    //     console.log("Login successful");
    // } else {
    //     // Display an error message if authentication fails
    //     const messageElement = document.getElementById("message");
    //     messageElement.textContent = "Invalid username or password. Please try again.";
    // }

});