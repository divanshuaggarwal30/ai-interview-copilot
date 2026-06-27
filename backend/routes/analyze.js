const express = require("express");
const Analysis = require("../models/Analysis");

const router = express.Router();

router.post("/", async (req, res) => {

    try {

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

        // Save analysis to MongoDB
        const analysis = new Analysis({
            resumeText: resume,
            jobDescription: jobDescription,
            matchScore,
            matchedSkills,
            missingSkills
        });

        await analysis.save();

        res.status(200).json({
            matchScore,
            matchedSkills,
            missingSkills
        });

    } catch (error) {

        console.error("Analyze Error:", error);

        res.status(500).json({
            message: "Internal Server Error"
        });

    }

});

module.exports = router;