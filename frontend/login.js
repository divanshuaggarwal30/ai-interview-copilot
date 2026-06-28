const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value.trim();

    if (!email || !password) {

        alert("Please fill all fields.");

        return;

    }

    try {

        const response = await fetch(
            "http://localhost:5000/login",
            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

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

        localStorage.setItem(
            "token",
            data.token
        );

        localStorage.setItem(
            "userName",
            data.name
        );

        window.location.href = "dashboard.html";

    }

    catch (error) {

        console.error(error);

        alert("Unable to connect to server.");

    }

});