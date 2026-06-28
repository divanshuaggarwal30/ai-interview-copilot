const token = localStorage.getItem("token");

if (!token) {

    window.location.href = "login.html";

}

const welcomeUser =
    document.getElementById("welcomeUser");

const historyContainer =
    document.getElementById("historyContainer");

async function loadProfile() {

    try {

        const response = await fetch(

            "http://localhost:5000/profile",

            {

                headers: {

                    Authorization: `Bearer ${token}`

                }

            }

        );

        if (!response.ok) {

            localStorage.clear();

            window.location.href = "login.html";

            return;

        }

        const user = await response.json();

        welcomeUser.innerText =
            `Welcome, ${user.name}`;

    }

    catch (error) {

        console.error(error);

    }

}

async function loadHistory() {

    try {

        const response = await fetch(

            "http://localhost:5000/history"

        );

        const history = await response.json();

        historyContainer.innerHTML = "";

        if (history.length === 0) {

            historyContainer.innerHTML =
                "<p>No previous analyses found.</p>";

            return;

        }

        history.forEach(item => {

            const card =
                document.createElement("div");

            card.className = "history-card";

            card.innerHTML = `

                <h3>Match Score: ${item.matchScore}%</h3>

                <p>

                    <strong>Date:</strong>

                    ${new Date(item.createdAt).toLocaleString()}

                </p>

                <p>

                    <strong>Missing Skills:</strong>

                    ${item.missingSkills.join(", ")}

                </p>

                <hr>

            `;

            historyContainer.appendChild(card);

        });

    }

    catch (error) {

        console.error(error);

    }

}

document
    .getElementById("logoutBtn")
    .addEventListener("click", () => {

        localStorage.clear();

        window.location.href = "login.html";

    });

loadProfile();

loadHistory();