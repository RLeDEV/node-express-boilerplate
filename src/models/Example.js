const {Model} = require('objection');

class Example extends Model {
    static get tableName() {
        return 'example';
    }
}

module.exports = Model;