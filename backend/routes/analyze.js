const express = require("express");
const Analysis = require("../models/Analysis");

const router = express.Router();

router.post("/", async (req, res) => {
    try {

        const { resume, jobDescription } = req.body;

        // Validate input
        if (
            !resume ||
            !jobDescription ||
            !resume.trim() ||
            !jobDescription.trim()
        ) {
            return res.status(400).json({
                message: "Resume and Job Description are required"
            });
        }

        // Extract unique words from resume
        const resumeSkills = [
            ...new Set(
                resume
                    .toLowerCase()
                    .split(/\s+/)
                    .map(skill => skill.trim())
                    .filter(skill => skill.length > 0)
            )
        ];

        // Extract unique words from Job Description
        const jdSkills = [
            ...new Set(
                jobDescription
                    .toLowerCase()
                    .split(/\s+/)
                    .map(skill => skill.trim())
                    .filter(skill => skill.length > 0)
            )
        ];

        // Calculate matched skills
        const matchedSkills = jdSkills.filter(skill =>
            resumeSkills.includes(skill)
        );

        // Calculate missing skills
        const missingSkills = jdSkills.filter(skill =>
            !resumeSkills.includes(skill)
        );

        // Calculate match score
        const matchScore =
            jdSkills.length === 0
                ? 0
                : Math.round(
                    (matchedSkills.length / jdSkills.length) * 100
                );

        // Save analysis to MongoDB
        const analysis = await Analysis.create({
            resumeText: resume,
            jobDescription,
            matchScore,
            matchedSkills,
            missingSkills
        });

        // Send response
        res.status(200).json({
            id: analysis._id,
            matchScore,
            matchedSkills,
            missingSkills
        });

    } catch (error) {

        console.error("Analyze Route Error:", error);

        res.status(500).json({
            message: "Internal Server Error"
        });

    }
});

module.exports = router;