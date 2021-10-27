const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

// Delete after testing users route with query included in this file (8/20/2021)
const pool = require("../../config/database")

router.get('/', (req, res) => {
    res.render("landing", {
        title: 'BCF'
    })

})

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

    //Form fields vs database columns configuration
    //db and form values are string, but db has comma (,) if it's a multi-select field
    //e.g. { db: "lendercompany", form: "LenderCompanyName" }, { db: "land_sub_residential,land_sub_commercial", form: "LandSubdivision" },
    //IMPORTANT: multi-select must have the same sequence (options) in the form and db string below
    const fieldConfig = [
        { db: "lendercompany", form: "LenderCompanyName" },
        { db: "firstname", form: "FirstName" },
        { db: "lastname", form: "LastName" },
        { db: "jobtitle", form: "JobTitle" },
        { db: "businessphone", form: "BusinessPhone" },
        { db: "mobilephone", form: "MobilePhone" },
        { db: "email", form: "EmailAddress" },
        { db: "streetaddress", form: "StreetAddress" },
        { db: "city", form: "City" },
        { db: "postcode", form: "PostCode" },
        { db: "state", form: "State" },
        { db: "country", form: "Country" },
        { db: "aas_nswmetro", form: "NSWMetro" },
        { db: "aas_nswregional", form: "NSWRegional" },
        { db: "aas_act", form: "ACT" },
        { db: "aas_vicmetro", form: "VICMetro" },
        { db: "aas_vicregional", form: "VICRegional" },
        { db: "aas_qldmetro", form: "QLDMetro" },
        { db: "aas_qldregional", form: "QLDRegional" },
        { db: "aas_wametro", form: "WAMetro" },
        { db: "aas_waregional", form: "WARegional" },
        { db: "aas_sametro", form: "SAMetro" },
        { db: "aas_saregional", form: "SARegional" },
        { db: "aas_tasmetro", form: "TASMetro" },
        { db: "aas_tasregional", form: "TASRegional" },
        { db: "aas_ntmetro", form: "NTMetro" },
        { db: "aas_ntregional", form: "NTRegional" },
        { db: "apartments,townhouse_villa,retirement_village", form: "ResidentialDevelopmentConstruction" },
        { db: "minloanlendresdevcon", form: "MinimumLoanLendResDevCon" },
        { db: "maxloanlendresdevcon", form: "MaximumLoanLendResDevCon" },
        { db: "minintrateresdevcon", form: "MinimumIntRateResDevCon" },   
        { db: "non_specialist_construction,serviced_apartments_hotel,student_accommodation,hostel", form: "CommercialConstruction" }, 
        { db: "minloanlendcomcon", form: "MinimumLoanLendComCon" },
        { db: "maxloanlendcomcon", form: "MaximumLoanLendComCon" },
        { db: "minintratecomcon", form: "MinimumIntRateComCon" },         
        { db: "land_sub_residential,land_sub_commercial", form: "LandSubdivision" },
        { db: "minloanlendlandsub", form: "MinimumLoanLendLandSub" },
        { db: "maxloanlendlandsub", form: "MaximumLoanLendLandSub" },
        { db: "minintratelandsub", form: "MinimumIntRateLandSub" },  
        { db: "residential_with_da,residential_without_da", form: "LandSubdivision1" },
        { db: "minloanlendlandpurrefi", form: "MinimumLoanLendLandPurRefi" },
        { db: "maxloanlendlandpurrefi", form: "MaximumLoanLendLandPurRefi" },
        { db: "minintratelandpurrefi", form: "MinimumIntRateLandPurRefi" },  
        { db: "btr_construction,btr_purchase,btr_refinance", form: "LandSubdivision2" },
        { db: "minloanlendbtr", form: "MinimumLoanLendBTR" },
        { db: "maxloanlendbtr", form: "MaximumLoanLendBTR" },
        { db: "minintratebtr", form: "MinimumIntRateBTR" },  
        { db: "ndis_sda_construction,ndis_sda_purchase,ndis_sda_refinance", form: "LandSubdivision3" },
        { db: "minloanlendndis", form: "MinimumLoanLendNDIS" },
        { db: "maxloanlendndis", form: "MaximumLoanLendNDIS" },
        { db: "minintratendis", form: "MinimumIntRateNDIS" }, 
        { db: "residual_apartment_stock", form: "ResidualApartmentStock" },
        { db: "minloanlendras", form: "MinimumLoanLendRAS" },
        { db: "maxloanlendras", form: "MaximumLoanLendRAS" },
        { db: "minintrateras", form: "MinimumIntRateRAS" }, 
        { db: "commercial_site_purchase_refinance", form: "CommercialSitePurchaseRefinance" },
        { db: "minloanlendcspr", form: "MinimumLoanLendCSPR" },
        { db: "maxloanlendcspr", form: "MaximumLoanLendCSPR" },
        { db: "minintratecspr", form: "MinimumIntRateCSPR" }, 
        { db: "second_mortgages", form: "SecondMortgages" },
        { db: "minloanlendsm", form: "MinimumLoanLendSM" },
        { db: "maxloanlendsm", form: "MaximumLoanLendSM" },
        { db: "minintratesm", form: "MinimumIntRateSM" }, 
        { db: "equity_finance", form: "EquityFinance" },
        { db: "minloanlendef", form: "MinimumLoanLendEF" },
        { db: "maxloanlendef", form: "MaximumLoanLendEF" },
        { db: "minintrateef", form: "MinimumIntRateEF" }, 
        { db: "mezzanine_finance", form: "MezzanineFinance" },
        { db: "minloanlendmf", form: "MinimumLoanLendMF" },
        { db: "maxloanlendmf", form: "MaximumLoanLendMF" },
        { db: "minintratemf", form: "MinimumIntRateMF" }, 
        { db: "resources", form: "Resources" },
        { db: "minloanlendres", form: "MinimumLoanLendRES" },
        { db: "maxloanlendres", form: "MaximumLoanLendRES" },
        { db: "minintrateres", form: "MinimumIntRateRES" }              
    ]

    const lender = req.body;

    //get all database fields including single or multi-select form fields
    const dbFields = fieldConfig.map(f => lender[f.form] ? `${f.db}` : '').join(',').split(',').filter(f => f);

    //get all form values 
    const values = fieldConfig.reduce((acc, f) => {
        const value = lender[f.form];
        if (value) {
            const dbFieldsArray = f.db.split(',');
            if (dbFieldsArray.length > 1) { //multi-select field
                //multi-select values can be a string (one item selected) or an array (more than one item selected)
                const selection = Array.isArray(value) ?
                    //get the correct db fieldname(s) from the config string
                    value.map(v => dbFieldsArray[parseInt(v)]) :
                    dbFieldsArray[parseInt(value)];
                //finally, add true or false to the item selected    
                return [...acc, ...dbFieldsArray.map(a => selection.includes(a) ? true : null)]

            } else {  //single field
                return [...acc, value]
            }

        } else {
            return acc;
        }
    }, []);

    const sql = `INSERT INTO lenders (${dbFields.join(',')}) 
        VALUES ( ${values.map(v => '?').join(',')})`

    // console.log(dbFields.length, values.length, dbFields, values, sql); res.end();

    pool.query(sql, values, (err, results, fields) => {
        if (err) {
            console.log("Failed to insert lender data!!!")
            console.log(err)
            res.sendStatus(500)
            return
        }
        console.log("Inserted a new lender with id: " + results.insertId);
        res.end()
    })
    res.redirect('/successful')
})

// All Lenders GET Route
router.get('/lenders', (req, res) => {
    let sql = "SELECT * FROM lenders WHERE liid IS NOT NULL;";
    let query = pool.query(sql, (err, rows, results) => {
        if (err) throw err;
        console.log(rows[0].liid, rows)
        res.render('lenders', {
            title: 'Bright Capital Finance - All Lenders',
            lenderresults: rows
        })
    })
})

// All Lenders - ADMIN -  GET Route
router.get('/lenders-admin', (req, res) => {
    let sql = `SELECT * FROM lenders WHERE liid IS NOT NULL; SELECT * FROM loantypes;`;
    let query = pool.query(sql, (err, rows, results) => {
        if (err) throw err;
        console.log(rows[0].liid, rows)
        res.render('lenders-admin', {
            title: 'Bright Capital Finance - All Lenders',
            lenderresults: rows[0],
            typeofloanArray: rows[1],
            // serviceArray: rows[1],
            // cashierArray: rows[2],
            // salespersonArray: rows[3],
            // posidArray: rows[4],
            // trailernumberArray: rows[5],
            // openingdayArray: rows[6],
            // stateArray: rows[7],  
        })
    })
})

// LENDER DETAIL GET ROUTE - view detail of a lender
router.get("/lenders/:liid", (req, res) => {
    // the order with the provided ID
    //render edit template with that sale
    
    let id = req.params.liid
    let sql = 'SELECT * FROM lenders WHERE liid = ' + id + ';'
    console.log(sql)
    
    let query = pool.query(sql, (err, rows) => {
        if(err) throw err;
        console.log(sql)
        console.log(rows[0].aas_nswmetro)
        res.render('lenderdetail', {
            title: 'Bright Capital Finance - Lender Detail',
            lenderresult: rows[0]
        }) 
    })
});

router.delete('/lenders/:id', (req, res) => {
    let id = req.body.id
    let sql = "SELECT * FROM lenders WHERE liid = " + id + ";"
    let query = pool.query(sql, )
})

module.exports = router;