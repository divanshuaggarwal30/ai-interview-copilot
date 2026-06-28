require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const healthRoute = require("./routes/health");
const featuresRoute = require("./routes/features");
const analyzeRoute = require("./routes/analyze");
const historyRoute = require("./routes/history");
const authRoute = require("./routes/auth");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/health", healthRoute);
app.use("/features", featuresRoute);
app.use("/analyze", analyzeRoute);
app.use("/history", historyRoute);
app.use("/", authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});