const express = require("express");

const router = express.Router();

const Analysis = require("../models/Analysis");

router.get("/", async (req,res)=>{

    const history =
        await Analysis.find().sort({
            createdAt:-1
        });

    res.json(history);

});

module.exports = router;