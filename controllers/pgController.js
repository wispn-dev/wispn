const { createLogicalNot } = require('typescript');
const db = require('../models/parksModel');
const pgController = {};

const loginButton = document.getElementById("this is an mui no id");
loginButton.addEventListener('click', () => {
    
})

pgController.addUser = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const addQuery = 
      `INSERT INTO tasks (email, password) VALUES ( $1, $2 );`;

      const params = [ email, password ];

      const result = await db.query(addQuery, params);
      return next();

    } catch(err) {
        return next({
          log: `middleware did not work err: ${err}`, 
          status: 400,
          message: 'global error handler caught, put in a valid post'
        });
    };
}
  pgController.checkUser = (req, res, next) => {
    const { email, password } = req.body;
    try {
      const query = `SELECT email, password FROM tasks WHERE username = $1;`;
      const params = [ email, password ];
      db.query(query, params)
        .then((data) => {
          if (data.rows.password === password) {
            return next();
          } else {
            return res.send('unsuccessful login atttempt');
          }
        }); 
    } catch(err) {
          return next({
            log: `authController.checkUser: checkUser: ${err}`,
            status: 400,
            message: { err: '400 Error occurred while checking user' },
          });
      }
  }

module.exports = pgController;

//JAVASCIVIA userController

// userController.createUser = async (req, res, next) => { //post part 2
//   const salt = await bcrypt.genSalt(10);
//   const password = await bcrypt.hash(req.body.password, salt);
//   const values = [req.body.username, password, 0];
//     const query = `INSERT INTO user_final (username, password, score) VALUES ($1, $2, $3);`; 
//         db.query(query, values)
//         .then(response => {
//             return next();
//         })
//         .catch(err => {
//         return next({
//             log: 'Express error handler caught userController.createUser error',
//             status: 400,
//             message: { err : 'error in create user middleware' },
//         });
//         });
//     };


// // rename
// userController.checkSign = (req, res, next) => { //post part 1
//   console.log('we are in the check sign:  ', req.body.username);
//   const values = [req.body.username];
//   const query = `
//     SELECT username
//     FROM user_final
//     WHERE username = $1;
//   `;
//     db.query(query, values)
//         .then((data) => {
//           //console.log('username and password exists in DB', data.rows[0]);
//           // console.log(data.rows[0]);
//           //if the user exists, send back false
//           // console.log(data.rows);
//           if (data.rows.length) return res.status(200).send(false);
          
//           return next();
//         })
//         .catch(err => console.log(err));
//     };


// userController.checkLog = (req, res, next) => { //get request
//     //localhost:3000/api?username=mike&password=mezh
//   const values = [req.query.username];
//   const password = req.query.password;
//   const query = `SELECT "username", "password" 
//   FROM user_final
//   WHERE username = $1;
//   `;
//   db.query(query, values)
//     .then((data) => {
//       if (data.rows.length) {
//         bcrypt.compare(password, data.rows[0].password)
//         .then(match => {
//           if (match) res.locals.exists = true;
//           else res.locals.exists = false;
//           return next();
//         })
//       } else {
//         res.locals.exists = false;
//         return next();
//       }
//     })
//     .catch(err => console.log(err));

// };


// JAVASCRIVIA server.json

// app.post('/api', userController.checkSign, userController.createUser, (req, res) => {
//   //post request from signup page
//   return res.status(200).send(true); 
// });

// app.get('/api', userController.checkLog, (req, res) => {
//   //get request from login page
//   return res.status(200).json(res.locals.exists);
// });
