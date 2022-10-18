const { Pool } = require('pg');

const dbURI = 'postgres://lqugazyw:W-ZYPMv6S_cOzTQjMt1fLXFdS17Sji65@peanut.db.elephantsql.com/lqugazyw';
const pool = new Pool({
    connectionString: dbURI
});


module.exports = {
  query: (text, params, callback) => {
    console.log('QUERY EXECUTED', text);
    return pool.query(text, params, callback)
  }
};

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database


// `
//   CREATE TABLE tasks (
//     email VARCHAR(100),
//     password VARCHAR(100)
//     created_at TIMESTAMP
//   );
// `

// INSERT INTO tasks (user, lists)
//     VALUES ( $1, $2);`

// const client = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'wispn',
//     password: null,
//     port: 3334,
// });

// client.connect();