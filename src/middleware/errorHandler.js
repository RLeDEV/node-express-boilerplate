function errorHandler(err, req, res, next) {
    if (err) {
        if (!res.statusCode || res.statusCode === 200) {
            res.status(400);
        }

        res.send({error: err.message})
    } else {
        next();
    }
}

module.exports = errorHandler;