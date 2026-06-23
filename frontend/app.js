const analyzeBtn = document.getElementById("analyzeBtn");

analyzeBtn.addEventListener("click", async () => {

    const resumeFile =
        document.getElementById("resumeFile").files[0];

    const jdFile =
        document.getElementById("jdFile").files[0];

    if (!resumeFile || !jdFile) {
        alert("Please upload both files");
        return;
    }

    const response = await fetch(
        "http://localhost:5000/analyze",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                resume: resumeFile.name,
                jobDescription: jdFile.name
            })
        }
    );

    const data = await response.json();

    document.getElementById("score").innerText =
        `${data.matchScore}%`;

    const skillsList =
        document.getElementById("missingSkills");

    skillsList.innerHTML = "";

    data.missingSkills.forEach(skill => {

        const li = document.createElement("li");

        li.innerText = skill;

        skillsList.appendChild(li);

    });

});