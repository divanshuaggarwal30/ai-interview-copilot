const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema({

    resumeText: {
        type: String,
        required: true
    },

    jobDescription: {
        type: String,
        required: true
    },

    matchScore: {
        type: Number,
        required: true
    },

    matchedSkills: [{
        type: String
    }],

    missingSkills: [{
        type: String
    }]

},
{
    timestamps: true
});

module.exports = mongoose.model(
    "Analysis",
    analysisSchema
);