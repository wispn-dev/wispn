const request = require('supertest');
const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/parks', () => {
    describe('GET', () => {
      it('responds w 200 and and json object', () => {
          return request(server)
            .get('/parks')
            .expect('Content-Type', /json/)
            .expect(200);
     });
    });




});