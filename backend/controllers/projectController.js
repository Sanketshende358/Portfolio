// controllers/projectController.js
const Project = require('../models/Project');

// Get all projects
const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// backend/controllers/projectController.js

const addProject = async (req, res) => {
    const { title, projectLink } = req.body;
    const image = req.file.filename; // Get the uploaded image filename

    try {
        const newProject = new Project({ title, image, projectLink });
        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getProjects, addProject };