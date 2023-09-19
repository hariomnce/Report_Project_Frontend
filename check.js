// document.getElementById("login-form").addEventListener("submit", function(event) {
//     event.preventDefault();

//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;debugger

//     fetch("http://localhost:8080/authenticate", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ username, password })
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Login failed");
//         }
//         return response.json();
//     })
//     .then(data => {
//         const jwtToken = data.token;
//         console.log("JWT Token:", jwtToken);
//     })
//     .catch(error => {
//         document.getElementById("error-message").textContent = "Login failed. Please check your credentials.";
//         console.error("Login error:", error);
//     });
// });

document.getElementById('login-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const apiUrl = 'http://localhost:8080/authenticate';debugger
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const tokenResult = document.getElementById('token-result');
  let formData = {
      email: username,
      password:password
  }
 // fetch(apiUrl, {
  //    method: "POST",
   //   headers: {
   //     Accept: "application/json",
    //    "Content-Type": "application/json",
    //  },
   //   body: JSON.stringify(formData),
   // })

  try {
    const response = await fetch(apiUrl, {
         method: 'POST',
      headers: {
             Accept: "application/json",
             "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
     });

     if (!response.ok) {
          throw new Error('Login failed');
      }

      const data = await response.json();

      if (!data.jwtToken) {
          throw new Error('Token not found in response');
      }

      const jwtToken = data.jwtToken;
      
     // tokenResult.innerHTML = `JWT Token: ${jwtToken}`;
  } catch (error) {
      console.error('Error fetching JWT token:', error);
      tokenResult.innerHTML = 'Login failed';
  }
});