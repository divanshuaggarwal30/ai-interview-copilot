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

        document.getElementById(
            "resultsSection"
        ).style.display = "block";

        document.getElementById("score").innerText =
            `${data.matchScore}%`;

        // Matched Skills
        const matchedSkillsList =
            document.getElementById("matchedSkills");

        matchedSkillsList.innerHTML = "";

        data.matchedSkills.forEach(skill => {

            const li =
                document.createElement("li");

            li.innerText = skill;

            matchedSkillsList.appendChild(li);

        });

        // Missing Skills
        const missingSkillsList =
            document.getElementById("missingSkills");

        missingSkillsList.innerHTML = "";

        data.missingSkills.forEach(skill => {

            const li =
                document.createElement("li");

            li.innerText = skill;

            missingSkillsList.appendChild(li);

        });

    }
    catch (error) {

        console.error(error);

        alert("Unable to connect to backend.");

    }

});