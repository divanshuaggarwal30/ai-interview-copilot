const analyzeBtn = document.getElementById("analyzeBtn");

analyzeBtn.addEventListener("click", async () => {

    const resume =
        document.getElementById("resume").value.trim();

    const jobDescription =
        document.getElementById("jd").value.trim();

    if (!resume || !jobDescription) {
        alert("Please fill both fields.");
        return;
    }

    try {

        // Analyze Resume
        const response = await fetch(
            "http://localhost:5000/analyze",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    resume,
                    jobDescription
                })
            }
        );

        const data = await response.json();

        document.getElementById("resultsSection").style.display = "block";

        document.getElementById("score").innerText =
            `${data.matchScore}%`;

        // Matched Skills
        const matchedSkillsList =
            document.getElementById("matchedSkills");

        matchedSkillsList.innerHTML = "";

        data.matchedSkills.forEach(skill => {

            const li = document.createElement("li");

            li.innerText = skill;

            matchedSkillsList.appendChild(li);

        });

        // Missing Skills
        const missingSkillsList =
            document.getElementById("missingSkills");

        missingSkillsList.innerHTML = "";

        data.missingSkills.forEach(skill => {

            const li = document.createElement("li");

            li.innerText = skill;

            missingSkillsList.appendChild(li);

        });

        // Fetch Analysis History
        const historyResponse = await fetch(
            "http://localhost:5000/history"
        );

        const history = await historyResponse.json();

        const historyContainer =
            document.getElementById("historyList");

        historyContainer.innerHTML = "";

        history.forEach(item => {

            const card = document.createElement("div");

            card.className = "history-card";

            card.innerHTML = `
                <h4>Match Score: ${item.matchScore}%</h4>
                <p><strong>Date:</strong> ${new Date(item.createdAt).toLocaleString()}</p>
                <p><strong>Missing Skills:</strong> ${item.missingSkills.join(", ")}</p>
            `;

            historyContainer.appendChild(card);

        });

    }
    catch (error) {

        console.error(error);

        alert("Unable to connect to backend.");

    }

});