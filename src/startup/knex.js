const Knex = require('knex');
const {Model} = require('objection');
const knexConfig = require('../config/knexfile');

const connect = (env) => {
    const config = knexConfig[env];

    if (!config) {
        throw Error(`Database connection error: invalid environment ${env}`);
    }

    config.connection.typeCase = function (field, next) {
        if(field.type === 'TINY' && field.length === 1) {
            let value = field.string();
            return value ? (value === '1') : null;
        }

        return next();
    }

    const knex = Knex(config);
    // Bind all models to the knex instance
    Model.knex(knex);

    return knex;
}

module.exports = connect;