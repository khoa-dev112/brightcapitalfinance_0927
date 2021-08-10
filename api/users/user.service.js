const pool = require("../../config/database")

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into users(first_name,last_name,email_address,password)
            values(?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.email_address,
                data.password
            ],
            (error, results, fields) => {
                if (error) {
                return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },
    getUsers: callBack => {
        pool.query(
            `select userID, first_name, last_name, email_address from users`,
            [],
            (error, results, fields) => {
                if(error){
                    return callBack(error)
                }
                    return callBack(null, results)
            }
            )
    },
    getUserById: (id, callBack) => {
        pool.query(
            `select userID, first_name, last_name, email_address from users where userID = ?`,
            [id],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                    return callBack(null, results[0]);
            }
        )
    },
    updateUser: (data, callBack) => {
        pool.query(
            'update users set first_name=?, last_name=?, email_address=?, password=? where userID=?',
            [
                data.first_name,
                data.last_name,
                data.email_address,
                data.password,
                data.userID
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error); 
                }
                    return callBack(null, results[0]);
            }
        )
    },
    deleteUser: (data, callBack) => {
        pool.query(
            `delete from users where userID = ?`,
            [data.userID],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                    return callBack(null, results[0]);
            }
        )
    }
}