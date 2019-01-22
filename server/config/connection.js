const { Pool } = require('pg');

const connectionString = new Pool({
    user: 'Superuser',
    host: 'localhost',
    database: 'endpointDB',
    password: 'olivialive',
    port: 5432,
});

module.exports = connectionString;
