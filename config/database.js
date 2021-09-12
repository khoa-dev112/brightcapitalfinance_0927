const { createPool } = require('mysql');

// DEV - Azure
const pool = createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST_DEV,
    user: process.env.DB_USER_DEV,
    password: process.env.DB_PASS_DEV,
    database: process.env.MYSQL_DB_DEV,
    multipleStatements: true,
    ssl: true,
    connectionLimit: 10
})

// TEST - Heroku (JawsDB)
// const pool = createPool({
//     port: process.env.DB_PORT,
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.MYSQL_DB,
//     multipleStatements: true,
//     ssl: true,
//     connectionLimit: 10
// })

module.exports = pool;