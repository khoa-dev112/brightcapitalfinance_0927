Node/Express/MySQL web application for Bright Capital Finance (Lender Intake)
Created 8/9/2021
====================================================================
Initial database setup in Azure (SEE .env FOR MORE)

    host: 'tbrannon-mysql-demo.mysql.database.azure.com',
    user: 'toddb@tbrannon-mysql-demo.mysql.database.azure.com',
    password: '',
    database: 'brightcapitalfinance',
    port: 3306,
    ssl: true

====================================================================

npm init -y
npm i --save-dev nodemon
npm i express, mysql (no need for body-parser with express 4.16 or greater)

npm i dotenv to use .env

npm i bcrypt for password hashing

====================================================================

be sure to add .env and nodemodules/ to the .gitignore file

====================================================================

for testing the POST routes in POSTMAN, make sure to check 'Headers' in the top section:
KEY: Content-Type
VALUE: application/json

====================================================================

Then click back over to Body to insert data object

====================================================================

service -> controller -> router