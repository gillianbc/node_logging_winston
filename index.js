var logger = require('./winston');

var x = 10;

if (x > 1) {
    logger.error(`${x} is too big`);
    logger.debug(`${x} is too big`)
    logger.info(`${x} is too big`)
};

logger.error(new Error("This is an error"));

try {
    throw "Errrrrr";
} catch (error) {
    logger.error(new Error("This is also an error:" + error));
}

logger.log({
    level: 'info',
    message: 'What time are we starting?'
});

logger.log('info', 'test message %s, %s', 'first', 'second', { number: 123 });

logger.log('silly', "127.0.0.1 - there's no place like home");
logger.log('debug', "127.0.0.1 - there's no place like home");
logger.log('verbose', "127.0.0.1 - there's no place like home");
logger.log('info', "127.0.0.1 - there's no place like home");
logger.log('warn', "127.0.0.1 - there's no place like home");
logger.log('error', "127.0.0.1 - there's no place like home");
logger.info("127.0.0.1 - there's no place like home");
logger.warn("127.0.0.1 - there's no place like home");
logger.error("127.0.0.1 - there's no place like home");