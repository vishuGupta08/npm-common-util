/**
 * `errorHandler.js` - Error Handling Module
 *
 * This file defines a custom error handling module for the Sasai BFF Common Package. It provides a custom error class `CustomError` and an error handling function `handleError` for centralizing and customizing the way errors are managed within the package.

 * Custom Error Class:
 * - `CustomError`: A custom error class that allows you to create custom error instances with specific error messages and status codes.

 * Error Handling Function:
 * - `handleError(err)`: The error handling function designed to log and handle errors as needed. It can be customized to meet the error handling requirements of your package.

 * Usage:
 * - Import the `CustomError` class and the `handleError` function into your package functions where custom errors need to be thrown and handled.

 * Example:
 * ```javascript
 * const { CustomError, handleError } = require('./errorHandler');
 * throw new CustomError('Custom error message', 400);
 * ```
 */
const Response = require('./response')
class CustomError extends Error {
    constructor(message, errorCode) {
      super(message);
      this.errorCode = errorCode;
    }
  }
  
  const handleError = (err) => {
    return Response.error(err.message, err.errorCode ?? err.code)
  };
  
  module.exports = {
    CustomError,
    handleError,
  };
  