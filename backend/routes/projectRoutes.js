// routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const upload = require('../multerConfig');
const { getProjects, addProject } = require('../controllers/projectController');

// GET all projects
router.get('/projects', getProjects);

// POST a new project with image upload
router.post('/projects', upload.single('image'), addProject);

module.exports = router;