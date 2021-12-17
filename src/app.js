const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const errorHandler = require('./middleware/errorHandler');
const environment = process.env.NODE_ENV || "local";

require('./startup/knex')(environment);
require('./startup/routes')(app);

app.use(errorHandler);

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

module.exports = {app, server};