const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

let conString;
if (process.env.DATABASE_URL) {
    conString = new Pool({
        connectionString: process.env.DATABASE_URL,
    });
} else {
    conString = new Pool({
        user: 'Superuser',
        host: 'localhost',
        database: 'endpointDB',
        password: 'olivialive',
        port: 5432,
    });
}


module.exports = conString;
