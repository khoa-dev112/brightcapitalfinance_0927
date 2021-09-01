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

router.post("/lender", (req, res) => {
    console.log("Trying to add a new lender")
    const lenderCompanyName = req.body.LenderCompanyNamme
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
    const minLoanLend = req.body.MinLoanLend
    const maxLoanLend = req.body.MaxLoanLend
    const additionalNotes = req.body.AdditionalNotes
    const entven = req.body.entven
    const hotels = req.body.hotels
    const pubs = req.body.pubs
    const resstk = req.body.resstk
    const retvil = req.body.retvil
    const stuacc = req.body.stuacc
    const vlnda = req.body.vlnda
    const vlwda = req.body.vlwda
    const asspur = req.body.asspur
    const assref = req.body.assref
    const devfin = req.body.devfin
    const eqtfin = req.body.eqtfin
    const mezfin = req.body.mezfin
    const resour = req.body.resour
    const secmor = req.body.secmor
    const subfin = req.body.subfin
    const aas_nswmetro = req.body.NSWMetro
    const aas_nswregional = req.body.aas_nswregional
    const aas_act = req.body.aas_act
    const aas_vicmetro = req.body.aas_vicmetro
    const aas_qldmetro = req.body.aas_qldmetro
    const aas_qldregional = req.body.aas_qldregional
    const aas_wametro = req.body.aas_wametro
    const aas_waregional = req.body.aas_waregional
    const aas_sametro = req.body.aas_sametro
    const aas_saregional = req.body.aas_saregional
    const aas_tasmetro = req.body.aas_tasmetro
    const aas_tasregional = req.body.aas_tasregional
    const aas_ntmetro = req.body.aas_ntmetro
    const aas_ntregional = req.body.aas_ntregional
    

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
                                    additionalnotes,
                                    entven, 
                                    hotels,
                                    pubs, 
                                    resstk, 
                                    retvil, 
                                    stuacc, 
                                    vlnda, 
                                    vlwda,
                                    asspur, 
                                    assref, 
                                    devfin, 
                                    eqtfin, 
                                    mezfin, 
                                    resour,
                                    secmor, 
                                    subfin,     
                                    aas_nswmetro, 
                                    aas_nswregional,
                                    aas_act, 
                                    aas_vicmetro, 
                                    aas_qldmetro,
                                    aas_qldregional, 
                                    aas_wametro, 
                                    aas_waregional, 
                                    aas_sametro,
                                    aas_saregional, 
                                    aas_tasmetro, 
                                    aas_tasregional, 
                                    aas_ntmetro,
                                    aas_ntregional) 
                                    VALUES (?,?,?,?,?,?,?,?,?,?,
                                            ?,?,?,?,?,?,?,?,?,?,
                                            ?,?,?,?,?,?,?,?,?,?,
                                            ?,?,?,?,?,?,?,?,?,?,
                                            ?,?,?,?,?)`

    pool.query(sql, [lenderCompanyName, 
                        firstName, 
                        lastName, 
                        jobTitle, 
                        businessPhone, 
                        mobilePhone, 
                        email, 
                        streetAddress, 
                        city,
                        postCode, 
                        state, 
                        country, 
                        minLoanLend, 
                        maxLoanLend, 
                        additionalNotes, 
                        entven, 
                        hotels, 
                        pubs, 
                        resstk, 
                        retvil, 
                        stuacc, 
                        vlnda, 
                        vlwda, 
                        asspur,
                        assref, 
                        devfin, 
                        eqtfin, 
                        mezfin, 
                        resour, 
                        secmor, 
                        subfin, 
                        aas_nswmetro, 
                        aas_nswregional, 
                        aas_act, 
                        aas_vicmetro, 
                        aas_qldmetro,
                        aas_qldregional, 
                        aas_wametro, 
                        aas_waregional, 
                        aas_sametro,
                        aas_saregional, 
                        aas_tasmetro, 
                        aas_tasregional, 
                        aas_ntmetro,
                        aas_ntregional
                    ], (err, results, fields)=>{
        if(err){
            console.log("Failed to insert lender data")
            res.sendStatus(500)
            return
        }
        console.log("Inserted a new lender with id: " + results.insertedId);
        res.end()
    })
    res.redirect('/')
})

module.exports = router;