module.exports = {
    local: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: 'rootSplitPretzel16',
            database: 'website'
        },
        debug: true,
        pool: {
            min: 1,
            max: 5,
        },
        migrations: {
            directory: 'migrations'
        },
    },

    development: {
        client: 'mysql',
        connection: {
            host: '',
            user: '',
            password: process.env.DB_PASSWORD,
            database: ''
        },
        pool: {
            min: 1,
            max: 5,
        },
    },

    staging: {
        client: 'mysql',
        connection: {
            host: '',
            user: '',
            password: process.env.DB_PASSWORD,
            database: ''
        },
        pool: {
            min: 1,
            max: 5,
        },
    },

    production: {
        client: 'mysql',
        connection: {
            host: '',
            user: '',
            password: process.env.DB_PASSWORD,
            database: ''
        },
        pool: {
            min: 1,
            max: 5,
        },
    }
};