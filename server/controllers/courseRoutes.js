const express = require("express");

const {
    protect,
    authorize
} = require("../middleware/authMiddleware");

const {
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse,
    getCourseById
} = require("../controllers/courseControllers");

const courseRoute = express.Router();

courseRoute.get("/", protect, getCourse);

courseRoute.post(
    "/",
    protect,
    authorize("instructor", "admin"),
    createCourse
);

courseRoute.get("/:id", protect, getCourseById);

courseRoute.put(
    "/:id",
    protect,
    authorize("instructor", "admin"),
    updateCourse
);

courseRoute.delete(
    "/:id",
    protect,
    authorize("instructor", "admin"),
    deleteCourse
);

module.exports = courseRoute;