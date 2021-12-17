const {validationResult} = require('express-validator');

function validate(req, res, next) {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next();
    }

    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({[err.param]: err.msg}));
};

module.exports = validate;