const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    instructor: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    level: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    duration: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true,
        enum: ["student", "instructor","admin"],
    },

    createdAt: {
        type: Date,
        required: true
    }

}, {
    timestamps: true
});

const courseModel = mongoose.model("Course", courseSchema);

module.exports = courseModel;