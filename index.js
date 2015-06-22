'use strict';

/**
 * Dependencies
 */

const yaml = require('js-yaml');


/**
 * Expose validate function
 */

module.exports = validate;


/**
 * Validate yaml
 */

function validate (source) {
  let isValid = true;

  try {
    yaml.safeLoad(source);
  } catch (err) {
    isValid = false;
  }

  return isValid;
}
