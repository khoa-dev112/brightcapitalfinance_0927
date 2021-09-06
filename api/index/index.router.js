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
    console.log(req.body.aas_nswmetro)
    const lender = req.body
    const lenderCompanyName = lender.LenderCompanyName
    const firstName = lender.FirstName
    const lastName = lender.LastName
    const jobTitle = lender.JobTitle
    const businessPhone = lender.BusinessPhone
    const mobilePhone = lender.MobilePhone
    const email = lender.EmailAddress
    const streetAddress = lender.StreetAddress
    const city = lender.City
    const postCode = lender.PostCode
    const state = lender.State
    const country = lender.Country
    const minLoanLend = lender.MinimumLoanLend
    const maxLoanLend = lender.MaximumLoanLend
    // const additionalNotes = lender.AdditionalNotes
    const aas_nswmetro = lender.NSWMetro
    const aas_nswregional = lender.NSWRegional
    const aas_act = lender.ACT
    const aas_vicmetro = lender.VICMetro
    const aas_vicregional = lender.VICRegional
    const aas_qldmetro = lender.QLDMetro
    const aas_qldregional = lender.QLDRegional
    const aas_wametro = lender.WAMetro
    const aas_waregional = lender.WARegional
    const aas_sametro = lender.SAMetro
    const aas_saregional = lender.SARegional
    const aas_tasmetro = lender.TASMetro
    const aas_tasregional = lender.TASRegional
    const aas_ntmetro = lender.NTMetro
    const aas_ntregional = lender.NTRegional
    // const resDevConstruction = lender.ResidentialDevelopmentConstruction
    const residualApartmentStock = lender.ResidualApartmentStock
    const commercialSitePurchaseRefinance = lender.CommercialSitePurchaseRefinance
    const landSubdivision = lender.LandSubdivision
    
    

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
                                    aas_nswmetro,
                                    aas_nswregional,
                                    aas_act,
                                    aas_vicmetro,
                                    aas_vicregional,
                                    aas_qldmetro,
                                    aas_qldregional,
                                    aas_wametro,
                                    aas_waregional,
                                    aas_sametro,
                                    aas_saregional,
                                    aas_tasmetro,
                                    aas_tasregional,
                                    aas_ntmetro,
                                    aas_ntregional,                                   
                                    residualapartmentstock,
                                    commercial_site_purchase_refinance,
                                    landsubdivision) 
                                    VALUES (?,?,?,?,?,?,?,?,?,?,
                                            ?,?,?,?,?,?,?,?,?,?,
                                            ?,?,?,?,?,?,?,?,?,?,
                                            ?,?)`

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
                        aas_nswmetro,
                        aas_nswregional,
                        aas_act,
                        aas_vicmetro,
                        aas_vicregional,
                        aas_qldmetro,
                        aas_qldregional,
                        aas_wametro,
                        aas_waregional,
                        aas_sametro,
                        aas_saregional,
                        aas_tasmetro,
                        aas_tasregional,
                        aas_ntmetro,
                        aas_ntregional,
                        // resDevConstruction,
                        residualApartmentStock,
                        commercialSitePurchaseRefinance,
                        landSubdivision
 
                    ], (err, results, fields)=>{
        if(err){
            console.log("Failed to insert lender data!!!")
            console.log(err)
            res.sendStatus(500)
            return
        }
        console.log("Inserted a new lender with id: " + results.insertedId);
        res.end()
    })
    res.redirect('/successful')
})

module.exports = router;