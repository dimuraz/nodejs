const config = require("./config/config");

const development = {
    development: {
        client: "mysql",
        connection: {
            host: config.database.host,
            database: config.database.database,
            user: config.database.user,
            password: config.database.password
        },
        debug: true
    }
}

module.exports = development;
