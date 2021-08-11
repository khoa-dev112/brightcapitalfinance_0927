const { 
    create,
    getLenderById,
    getLenders,
    updateLender,
    deleteLender 
} = require('./lender.service');

module.exports = {
    createLender: (req, res)=>{
        const body = req.body;
        create(body, (err, results) =>  {
            if(err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'Database connection error'
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        });
    },
    getLenderById: (req, res) => {
        const id = req.params.id;
        getLenderById(id, (err, results) => {
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "Record not found"
                })
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    },
    getLenders: (req, res) => {
        getLenders((err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    updateLender: (req, res) => {
        const body = req.body;
        updateLender(body, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "updated successfully"
            });
        });
    },
    deleteLender: (req, res) => {
        const data = req.body;
        deleteLender(data, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 0,
                    message: "Record Not Found"
                })
            }
            return res.json({
                success: 1,
                message: "Lender deleted successfully"
            });
        });
    }
};