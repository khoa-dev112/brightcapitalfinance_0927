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

router.get("/successful", (req, res) => {
    res.render('successful', {
        title: 'BCF'
    })
})

// router.post("/lender", (req, res) => {
//     console.log("Trying to add a new lender!")
//     const lenderCompanyName = req.body.LenderCompanyNamme
//     const firstName = req.body.FirstName
//     const lastName = req.body.LastName
//     const jobTitle = req.body.JobTitle

//     const sql = `INSERT INTO lenders (lendercompany, 
//                                     firstname, 
//                                     lastname, 
//                                     jobtitle, 
//                                     ) 
//                                     VALUES (?,?,?,?)`

//     pool.query(sql, [lenderCompanyName, 
//                         firstName, 
//                         lastName, 
//                         jobTitle
//                     ], (err, results, fields)=>{
//         if(err){
//             console.log("Failed to insert lender data!")
//             res.sendStatus(500)
//             return
//         }
//         console.log("Inserted a new lender with id: " + results.insertedId);
//         res.end()
//     })
//     res.redirect('/')
// })

// POST request from the lender form
router.post('/lender', (req, res) => {
    console.log("Trying to add a new lender!")
    console.log("Lender name is " + req.body.LenderCompanyName)
    
    const lenderCompanyName =  req.body.LenderCompanyName
    const firstName = req.body.FirstName
    const lastName = req.body.LastName
    const jobTitle = req.body.JobTitle
    const businessPhone = req.body.BusinessPhone
    const mobilePhone = req.body.MobilePhone
    const email = req.body.EmailAddress
    const streetAddress = req.body.StreetAddress
    const city = req.body.City
    const postCode = req.body.PostCode
    const state = req.body.State
    const country = req.body.Country
    const minLoanLend = req.body.MinimumLoanLend
    const maxLoanLend = req.body.MaximumLoanLend
    const nswMetro = req.body.NSWMetro
   
    


    

    const sql = `INSERT INTO lenders (lendercompany,
                                    firstname,
                                    lastname,
                                    jobtitle,
                                    businessphone,
                                    mobilephone,
                                    email,
                                    streetaddress,
                                    city,
                                    postcode,
                                    state,
                                    country,
                                    minloanlend,
                                    maxloanlend,
                                    nswmetro
                                    ) 
                                    VALUES (
                                    ?,?,?,?,?,?,?,?,?,?,
                                    ?,?,?,?,?
                                    )`
   
    pool.query(sql,[lenderCompanyName,firstName, lastName, jobTitle, businessPhone, mobilePhone, email,
                    streetAddress, city, postCode, state, country, minLoanLend, maxLoanLend, nswMetro
        ], (err, results, fields) => {
        if(err){
            console.log("Failed to insert data into lender table")
            console.log(err)
            res.sendStatus(500)
            return
        }
        console.log("Inserted a new lender with id: " + results.insertedId)

        res.end()
    })
    res.redirect('/successful')
})

module.exports = router;