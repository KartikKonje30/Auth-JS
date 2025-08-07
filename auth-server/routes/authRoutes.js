
const express = require('express');
const router = express.Router();

// Get collection of all users
router.get('/users', (req, res) => {});

// Register / Signup API
router.post('/signup', (req, res) => {
    let data = req.body;
    res.send(data);
});

// Login API
router.post('/login', (req, res) => {});

// Logout API
router.post('/logout', (req, res) => {});

module.exports = router;