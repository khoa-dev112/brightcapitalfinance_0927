const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

// Delete after testing users route with query included in this file (8/20/2021)
const pool = require("../../config/database") 

router.get("/lender", (req, res) => {
    res.render('lender', {
        title: 'BCF'
    })
});

router.post("/lender", (req, res) => {
    console.log("Trying to add a new lender")
    console.log("Lender name is " + req.body.LenderCompanyName)
    const lenderCompanyName = req.body.LenderCompanyNamme
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const jobTitle = req.body.jobTitle
    const sql = `INSERT INTO (lendercompany, firstname, lastname, jobtitle) VALUES (?,?,?,?)`
    pool.query(sql, [lenderCompanyName, firstName, lastName, jobTitle], (err, results, fields)=>{
        if(err){
            console.log("Failed to insert lender data")
            res.sendStatus(500)
            return
        }
        console.log("Inserted a new lender with id: " + results.insertedId);
        res.end()
    })
    res.render('lender', {
        title: 'BCF'
    })
})

module.exports = router;