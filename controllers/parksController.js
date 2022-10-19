// const { URI } = require('../controllers/parksController');
const parksController = {};

parksController.getParks = async (req, res, next) => {
  try {
    const url = "https://developer.nps.gov/api/v1/parks?limit=600";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type" : "application/json",
        "x-api-key": "rlelqY4gf9IeaKNEFnBl9ojkeYP71TbrCmwnAE66"
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      res.locals.allParks = data;
      return next();
    })
  } catch(err) {
      return next({
        log: `middleware did not work err: ${err}`, 
        status: 400,
        message: 'global error handler caught in parks controller'
      });
    };
  };


parksController.getTasks = async (req, res, next)=> {
  try {
    const url = "https://developer.nps.gov/api/v1/activities/parks";
    console.log('in get tasks');
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type" : "application/json",
        "x-api-key": "rlelqY4gf9IeaKNEFnBl9ojkeYP71TbrCmwnAE66"
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const output = [];
      data.data.forEach(obj => {
        output.push(obj.name)
      });
      res.locals.allTasks = output;
      return next();
    })
} catch (err) {
    console.log(err);
      return next({
        log: `middleware did not work err: ${err}`,
        status: 400,
        message: 'global error handler caught in tasks contoller'
      });
    };
  }

module.exports = parksController;