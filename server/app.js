const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const connectDB = require("./config/db");
const authRoute = require("./routes/authRoutes");
const courseRoute = require("./routes/courseRoutes");

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

connectDB();

app.get("/welcome", (req, res) => {
    res.send("welcome back");
});

app.use("/api/auth", authRoute);
app.use("/api/courses", courseRoute);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});