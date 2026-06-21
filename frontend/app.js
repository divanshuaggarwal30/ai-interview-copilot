const analyzeBtn = document.getElementById("analyzeBtn");

analyzeBtn.addEventListener("click", async () => {

    const resume =
        document.getElementById("resume").value;

    const jobDescription =
        document.getElementById("jd").value;

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

    document.getElementById("score").innerText =
        `Match Score: ${data.matchScore}%`;

    const skillsList =
        document.getElementById("missingSkills");

    skillsList.innerHTML = "";

    data.missingSkills.forEach(skill => {

        const li =
            document.createElement("li");

        li.innerText = skill;

        skillsList.appendChild(li);

    });

});