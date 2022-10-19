const express = require('express');
const path = require('path')
const app = express();
const parksController = require('./controllers/parksController');
const pgController = require('./controllers/pgController');
const PORT = 3333;

app.use(express.json());
app.use(express.urlencoded({ extended :true }));
app.use(express.static('dist'));

// app.get('/', (req, res) => {
//     return res.status(200).sendFile(path.resolve(__dirname, '../views/wherevertheyare'))
// });

app.get('/login', pgController.addUser, (req, res) => {
  return res.status(201).redirect('/showList')
})

app.get('/parks', parksController.getParks, (req, res) => {
  return res.status(200).json(res.locals.allParks);
});

app.get('/activities', parksController.getTasks, (req, res) => {
  return res.status(200).json(res.locals.allTasks);
});

//404 catch-all
app.use((req, res) => {
  return res.status(404).send('404 error found');
});

//global (not for json DOM)  
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'express error handler  caght unknown middleware error, check middleware logic',
    status: 500,
    message: { err: 'this is the default error handler'},
  };
  const updatedObj = Object.assign({}, defaultErr, err);
  return res.status(updatedObj.status).json(updatedObj.message);
});
  

app.listen(PORT, () => console.log(`server connected ${PORT}`))