const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});

app.post("/analyze", (req, res) => {

    const result = {
        matchScore: 60,
        missingSkills: [
            "Node",
            "MongoDB"
        ]
    };

    res.json(result);
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});