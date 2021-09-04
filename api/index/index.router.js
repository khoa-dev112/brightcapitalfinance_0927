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
    const lender = req.body
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
    const minLoanLend = lender.MinLoanLend
    const maxLoanLend = lender.MaxLoanLend
    // const additionalNotes = lender.AdditionalNotes
    const aas_nswmetro = lender.NSWMetro
    const aas_nswregional = lender.aas_nswregional
    const aas_act = lender.aas_act
    const aas_vicmetro = lender.aas_vicmetro
    const aas_qldmetro = lender.aas_qldmetro
    const aas_qldregional = lender.aas_qldregional
    const aas_wametro = lender.aas_wametro
    const aas_waregional = lender.aas_waregional
    const aas_sametro = lender.aas_sametro
    const aas_saregional = lender.aas_saregional
    const aas_tasmetro = lender.aas_tasmetro
    const aas_tasregional = lender.aas_tasregional
    const aas_ntmetro = lender.aas_ntmetro
    const aas_ntregional = lender.aas_ntregional
    const apartments = lender.Apartments
    const townhousevilla = lender.TownHouseVilla
    const retirementvillage = lender.RetirementVillage
    const residualapartmentstock = lender.ResidualApartmentStock
    const nonspecialistconstruction = lender.NonSpecialistConstruction
    const servicedapartmentshotel = lender.ServicedApartmentsHotel
    const studentaccomodation = lender.StudentAccomodation
    const hostel = lender.Hostel
    const commercialsitepurchaserefinance = lender.CommercialSitePurchaseRefinance
    const residentialsubdivision = lender.ResidentalSubdivision
    const commercialsubdivision = lender.CommercialSubdivision
    const residentialwithda = lender.ResidentialWithDA
    const residentialwithoutda = lender.ResidentialWithoutD
    const constructionbtr = lender.RentConstruction
    const purchasebtr = lender.RentPurchase
    const refinancebtr = lender.RefinancePurchase
    const constructionndissda = lender.NDISSDAConstruction
    const purchasendissda = lender.NDISSDAPurchase
    const refinancendissda = lender.NDISSDARefinance
    const secondmortgages = lender.SecondMortgages
    const equityfinance = lender.EquityFinance
    const mezzaninefinance = lender.MezzanineFinance
    const resources = lender.Resources
    

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
                                    apartments,
                                    townhousevilla,
                                    retirementvillage,
                                    residualapartmentstock,
                                    nonspecialistconstruction,
                                    servicedapartmentshotel,
                                    studentaccomodation,
                                    hostel,
                                    commercialsitepurchaserefinance,
                                    residentialsubdivision,
                                    commercialsubdivision,
                                    residentialwithda,
                                    residentialwithoutda,
                                    constructionbtr,
                                    purchasebtr,
                                    refinancebtr,
                                    constructionndissda,
                                    purchasendissda,
                                    refinancendissda,
                                    secondmortgages,
                                    equityfinance,
                                    mezzaninefinance,
                                    resources) 
                                    VALUES (?,?,?,?,?,?,?,?,?,?,
                                            ?,?,?,?,?,?,?,?,?,?,
                                            ?,?,?,?,?,?,?,?,?,?,
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
                        apartments,
                        townhousevilla,
                        retirementvillage,
                        residualapartmentstock,
                        nonspecialistconstruction,
                        servicedapartmentshotel,
                        studentaccomodation,
                        hostel,
                        commercialsitepurchaserefinance,
                        residentialsubdivision,
                        commercialsubdivision,
                        residentialwithda,
                        residentialwithoutda,
                        constructionbtr,
                        purchasebtr,
                        refinancebtr,
                        constructionndissda,
                        purchasendissda,
                        refinancendissda,
                        secondmortgages,
                        equityfinance,
                        mezzaninefinance,
                        resources
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