'use strict';

/**
 * Dependencies
 */

const validate = require('../');
const fs = require('fs');

require('chai').should();


/**
 * Tests
 */

describe ('validate-yaml', function () {

  let valid, invalid;

  before(function (done) {
    fs.readFile(__dirname + '/fixtures/valid.yml', 'utf-8', function (err, source) {
      if (err) {
        return done(err);
      }

      valid = source;

      done();
    });
  });

  before(function (done) {
    fs.readFile(__dirname + '/fixtures/invalid.yml', 'utf-8', function (err, source) {
      if (err) {
        return done(err);
      }

      invalid = source;

      done();
    });
  });

  it ('valid yaml', function () {
    validate(valid).should.equal(true);
  });

  it ('invalid yaml', function () {
    validate(invalid).should.equal(false);
  });

});
