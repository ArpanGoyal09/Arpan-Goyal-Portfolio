const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { contactValidation, handleValidationErrors } = require('../middleware/validation');

// POST /api/contact
router.post('/', contactValidation, handleValidationErrors, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Message received! I will get back to you soon.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
});

module.exports = router;
