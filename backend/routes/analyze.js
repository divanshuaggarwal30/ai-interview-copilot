const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {

    res.json({
        matchScore: 82,
        missingSkills: [
            "Node.js",
            "MongoDB"
        ]
    });

});

module.exports = router;