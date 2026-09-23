const express = require("express");

const courseRouter = express.Router();

courseRouter.get("/courses", (req, res) => {
    res.status(200).json({
        message: "Courses working"
    });
});

module.exports = courseRouter;