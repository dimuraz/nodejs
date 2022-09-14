const config = require("./config/config");

const knex = {
    development: {
        client: "mysql",
        connection: {
            host: config.database.host,
            user: config.database.user,
            port : 3306,
            password: config.database.password,
            database: config.database.database
        },
        debug: true
    }
}

module.exports = knex;
