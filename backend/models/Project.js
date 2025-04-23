
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Project category is required'],
    enum: ['web', 'mobile', 'app', 'design', 'other'],
    default: 'web'
  },
  image: {
    type: String,
    required: [true, 'Project image is required']
  },
  tags: {
    type: [String],
    required: true
  },
  demoLink: {
    type: String,
    required: false
  },
  codeLink: {
    type: String,
    required: false
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', ProjectSchema);
