
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST /api/contact
// @desc    Send a contact message
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Simple validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }
    
    // Create new contact message
    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });
    
    // Save the contact to database
    const savedContact = await newContact.save();
    
    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully!',
      data: savedContact
    });
    
  } catch (err) {
    console.error('Error in contact route:', err);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   GET /api/contact
// @desc    Get all contact messages (would be protected in production)
// @access  Private (in real application)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
    
  } catch (err) {
    console.error('Error fetching contacts:', err);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   PUT /api/contact/:id
// @desc    Mark a message as read
// @access  Private (in real application)
router.put('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }
    
    contact.isRead = true;
    await contact.save();
    
    res.status(200).json({
      success: true,
      message: 'Contact marked as read',
      data: contact
    });
    
  } catch (err) {
    console.error('Error updating contact:', err);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

// @route   DELETE /api/contact/:id
// @desc    Delete a contact message
// @access  Private (in real application)
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }
    
    await contact.remove();
    
    res.status(200).json({
      success: true,
      message: 'Contact deleted successfully'
    });
    
  } catch (err) {
    console.error('Error deleting contact:', err);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
});

module.exports = router;
