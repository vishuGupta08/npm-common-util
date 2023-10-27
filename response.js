const ERROR_CODES = require('./errorCodes')
const Response = {
    success(data) {
      return {
        success: true,
        data: data,
      };
    },
    error(message, errorCode= ERROR_CODES.INTERNAL_SERVER_ERROR) {
      return {
        success: false,
        errorCode: errorCode,
        message: message,
      };
    },
  };
  
  module.exports = Response;
  