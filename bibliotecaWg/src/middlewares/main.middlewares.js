const logger = require ('./logger.middleware');
const autenticar = require ('./auth.middleware');
const errorHandler =  require ('./errorHandler.middleware');
const validarContentype = require ('./contentType.middleware')

module.exports = {
    logger,
    autenticar,
    errorHandler,
    validarContentype,
};