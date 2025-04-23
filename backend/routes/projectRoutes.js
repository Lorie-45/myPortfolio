
const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get('/', async (req, res) => {
  try {
    // Handle query parameters for filtering
    const queryParams = {};
    
    // Filter by category if provided
    if (req.query.category && req.query.category !== 'all') {
      queryParams.category = req.query.category;
    }
    
    // Filter featured projects if requested
    if (req.query.featured === 'true') {
      queryParams.featured = true;
    }
    
    // Handle sorting
    let sortBy = { createdAt: -1 }; // Default sort by newest
    if (req.query.sort) {
      switch (req.query.sort) {
        case 'oldest':
          sortBy = { createdAt: 1 };
          break;
        case 'title-asc':
          sortBy = { title: 1 };
          break;
        case 'title-desc':
          sortBy = { title: -1 };
          break;
        default:
          sortBy = { createdAt: -1 };
      }
    }
    
    // Get projects with applied filters
    const projects = await Project.find(queryParams).sort(sortBy);
    
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (err) {
    console.error('Error fetching projects:', err);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   GET /api/projects/:id
// @desc    Get a single project by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: project
    });
  } catch (err) {
    console.error('Error fetching project:', err);
    
    if (err.kind === 'ObjectId') {
      return res.status(404).json({
        success: false,
        message: 'Project not found - Invalid ID'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   POST /api/projects
// @desc    Create a new project
// @access  Private (in real application)
router.post('/', async (req, res) => {
  try {
    const { title, description, category, image, tags, demoLink, codeLink, featured } = req.body;
    
    // Simple validation
    if (!title || !description || !category || !image || !tags) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }
    
    // Create new project
    const newProject = new Project({
      title,
      description,
      category,
      image,
      tags: Array.isArray(tags) ? tags : tags.split(',').map(tag => tag.trim()),
      demoLink,
      codeLink,
      featured: featured || false
    });
    
    // Save the project to database
    const savedProject = await newProject.save();
    
    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: savedProject
    });
  } catch (err) {
    console.error('Error creating project:', err);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   PUT /api/projects/:id
// @desc    Update a project
// @access  Private (in real application)
router.put('/:id', async (req, res) => {
  try {
    const { title, description, category, image, tags, demoLink, codeLink, featured } = req.body;
    
    // Build project object
    const projectFields = {};
    if (title) projectFields.title = title;
    if (description) projectFields.description = description;
    if (category) projectFields.category = category;
    if (image) projectFields.image = image;
    if (tags) {
      projectFields.tags = Array.isArray(tags) ? tags : tags.split(',').map(tag => tag.trim());
    }
    if (demoLink !== undefined) projectFields.demoLink = demoLink;
    if (codeLink !== undefined) projectFields.codeLink = codeLink;
    if (featured !== undefined) projectFields.featured = featured;
    
    // Update project
    let project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }
    
    // Update and return the updated project
    project = await Project.findByIdAndUpdate(
      req.params.id,
      { $set: projectFields },
      { new: true }
    );
    
    res.status(200).json({
      success: true,
      message: 'Project updated successfully',
      data: project
    });
  } catch (err) {
    console.error('Error updating project:', err);
    
    if (err.kind === 'ObjectId') {
      return res.status(404).json({
        success: false,
        message: 'Project not found - Invalid ID'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   DELETE /api/projects/:id
// @desc    Delete a project
// @access  Private (in real application)
router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }
    
    await project.remove();
    
    res.status(200).json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (err) {
    console.error('Error deleting project:', err);
    
    if (err.kind === 'ObjectId') {
      return res.status(404).json({
        success: false,
        message: 'Project not found - Invalid ID'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

module.exports = router;
