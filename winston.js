var appRoot = require('app-root-path');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;
 
const myFormat = printf(info => {
  return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});
// Ensure the logs folder exists in the root folder of the application
// Winston will create the log file, but not the folder
var options = {
    file: {
      level: 'info',
      filename: `${appRoot}/logs/app.log`,
      handleExceptions: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5
    },
    console: {
      level: 'debug',
      handleExceptions: true
    },
  };
const logger = createLogger({
  format: combine(
    format.splat(),
    format.colorize(),
    label({ label: 'Information' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.File(options.file),
    new transports.Console(options.console)]
});

module.exports = logger;