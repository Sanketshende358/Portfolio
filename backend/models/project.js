// backend/models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String, // Store the image filename
        required: true,
    },
    projectLink: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Project', projectSchema);