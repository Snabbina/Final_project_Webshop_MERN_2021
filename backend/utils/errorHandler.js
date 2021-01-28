//Error Handler Class
//Global error handler backend
//ErrorHandler = child  Error= parent, inherentence, 

class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}


module.exports = ErrorHandler