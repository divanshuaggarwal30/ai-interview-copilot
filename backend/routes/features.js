const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {

    res.json({
        features: [
            "resume-analysis",
            "jd-matching",
            "skill-gap-analysis"
        ]
    });

});

module.exports = router;