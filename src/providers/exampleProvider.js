const Example = require('models/Example');

/**
 * @description Returns examples
 * @return {Example[]}
 */
async function get() {
    try {
        return await Example.query().select();
    } catch (err) {
        console.error(`Error getting examples: ${err.message}`);
        throw new Error(`Error getting examples`);
    }
}

module.exports = {get};