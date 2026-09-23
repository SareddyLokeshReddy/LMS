const Course = require("../models/course");

// Get all courses
const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();

        return res.status(200).json({
            message: "Courses fetched successfully",
            courses: courses
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};


// Get course by ID
const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        return res.status(200).json({
            message: "Course fetched successfully",
            course: course
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};


// Create course
const createCourse = async (req, res) => {
    try {
        const {
            title,
            description,
            instructor,
            category,
            level
        } = req.body;

        if (
            !title ||
            !description ||
            !instructor ||
            !category ||
            !level
        ) {
            return res.status(400).json({
                message: "Invalid Input"
            });
        }

        const course = new Course({
            title: title,
            description: description,
            instructor: instructor,
            category: category,
            level: level
        });

        await course.save();

        return res.status(201).json({
            message: "Course created successfully",
            course: course
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};


// Update course
const updateCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!course) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        return res.status(200).json({
            message: "Course updated successfully",
            course: course
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};


// Delete course
const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);

        if (!course) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        return res.status(200).json({
            message: "Course deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};


module.exports = {
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
};