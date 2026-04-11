const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const uploadsDir = path.join(__dirname, '../uploads');

// GET /api/download/pdf
router.get('/pdf', (req, res) => {
  const filePath = path.join(uploadsDir, 'Arpan_Goyal_Resume.pdf');

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ success: false, message: 'Resume PDF not found' });
  }

  res.setHeader('Content-Disposition', 'attachment; filename="Arpan_Goyal_Resume.pdf"');
  res.setHeader('Content-Type', 'application/pdf');
  res.sendFile(filePath);
});

// GET /api/download/docx
router.get('/docx', (req, res) => {
  const filePath = path.join(uploadsDir, 'Arpan_Goyal_Resume.docx');

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ success: false, message: 'Resume DOCX not found' });
  }

  res.setHeader(
    'Content-Disposition',
    'attachment; filename="Arpan_Goyal_Resume.docx"'
  );
  res.setHeader(
    'Content-Type',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  );
  res.sendFile(filePath);
});

module.exports = router;
