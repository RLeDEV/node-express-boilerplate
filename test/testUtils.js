const mocha = require('mocha');
const should = require('should');
const knex = require('../src/startup/knex');

let db;

async function getDB() {
    if (!db) {
        db = await knex('local');
    }

    return db;
}

async function deleteExampleTable() {
    const db = await getDB();
    return db.raw('DELETE FROM example')
        .then(() => console.log('Deleted example table'))
        .catch((err) => console.error(`Error deleting example table: ${err.message}`));
}

module.exports = {
    mocha,
    should,
    deleteExampleTable
}