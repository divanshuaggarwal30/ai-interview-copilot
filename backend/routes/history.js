const express = require("express");

const router = express.Router();

const Analysis = require("../models/Analysis");

router.get("/", async (req, res) => {

    try {

        const history = await Analysis
            .find()
            .sort({ createdAt: -1 });

        res.json(history);

    } catch (error) {

        res.status(500).json({
            message: "Unable to fetch history"
        });

    }

});

module.exports = router;