const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value.trim();

    if (!name || !email || !password) {

        alert("Please fill all fields.");

        return;

    }

    try {

        const response = await fetch(
            "http://localhost:5000/signup",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name,
                    email,
                    password
                })

            }
        );

        const data = await response.json();

        if (!response.ok) {

            alert(data.message);

            return;

        }

        alert("Signup Successful!");

        window.location.href = "login.html";

    }

    catch (error) {

        console.error(error);

        alert("Unable to connect to backend.");

    }

});