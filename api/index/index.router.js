const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

// Delete after testing users route with query included in this file (8/20/2021)
const pool = require("../../config/database") 

router.get("/lender", (req, res) => {
    res.render('lender', {
        title: 'Bright Capital Finance'
    })
});

module.exports = router;