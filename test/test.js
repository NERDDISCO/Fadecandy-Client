/**
 * Test dependencies.
 */
var should = require('should');
var fadecandyClient = require('../index.js');





/**
 * Tests.
 */

describe('Fadecandy Client', function() {

  describe('connect to Fadecandy Server', function() {
    it('Should create a connection to *:7890', function(done) {

      var client = new fadecandyClient({
        host : 'nerddisco.slave',
        port : 7890,
        callback : function() {
          client.should.have.property('connected', true);

          done();
        }
      });

    }); // it
  }); // describe

}); // describe