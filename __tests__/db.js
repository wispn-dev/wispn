const fs = require('fs');
const db = require('../models/parksModel');
const path = require('path');

const testJsonFile = path.resolve(__dirname, '../models/parksModel.test.json');

describe('db unit tests', () => {
  beforeAll((done) => {
    fs.writeFile(testJsonFile, JSON.stringify([]), () => {
      db.reset();
      done();
    });
  })

  afterAll((done) => {
    fs.writeFile(testJsonFile, JSON.stringify([]), done);
  })

  describe('#sync', () => {
    it('writes a valid list to the JSON file', () => {
      const result = db.sync()
      
    })
  })



})