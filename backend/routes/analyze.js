const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {

    const { resume, jobDescription } = req.body;

    if (!resume || !jobDescription) {
        return res.status(400).json({
            message: "Resume and Job Description are required"
        });
    }

    const resumeSkills = [
        ...new Set(
            resume
                .toLowerCase()
                .split(/\s+/)
                .map(skill => skill.trim())
                .filter(skill => skill.length > 0)
        )
    ];

    const jdSkills = [
        ...new Set(
            jobDescription
                .toLowerCase()
                .split(/\s+/)
                .map(skill => skill.trim())
                .filter(skill => skill.length > 0)
        )
    ];

    const matchedSkills = jdSkills.filter(skill =>
        resumeSkills.includes(skill)
    );

    const missingSkills = jdSkills.filter(skill =>
        !resumeSkills.includes(skill)
    );

    const matchScore =
        jdSkills.length === 0
            ? 0
            : Math.round(
                (matchedSkills.length / jdSkills.length) * 100
            );

    res.json({
        matchScore,
        matchedSkills,
        missingSkills
    });

});

module.exports = router;