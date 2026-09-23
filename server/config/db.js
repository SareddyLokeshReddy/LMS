const mongoose = require('mongoose');
async function connectDB() {
     await mongoose.connect("");
     console.log("MongoDB connected successfully");
}
module.exports = connectDB; 