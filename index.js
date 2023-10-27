/**
 * `index.js` - Secure Module
 *
 * This file is part of the Secure Module in the Sasai BFF Common Package, responsible for authentication and security-related tasks. It exports functions for token validation and user information retrieval from JWT tokens.
 */

// Import the service responsible for token authentication
const secureService = require('./secureService');

// Import utility functions for working with tokens
const tokenUtils = require('./utils');
const {handleError} = require('./errorHandler')
/**
 * Validates a token for a specified type of authentication.
 *
 * @param {string} token - The JWT token to validate.
 * @returns {boolean} - Returns true if the token is valid, otherwise false.
 */
const validateToken = (token) => {
  try{
    return secureService.validateToken(token);
  }catch(error){
   return handleError(error);
  }
  
}

module.exports = {
  validateToken
}
