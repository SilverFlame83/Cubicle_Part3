const productServices = require('../services/product');
const accessoryServices = require('../services/accessory');


async function init() {
    return (req, res, next) => {
        const storage = Object.assign({},productServices,accessoryServices)
        req.storage = storage;
        next();
    };
}

module.exports = init;


