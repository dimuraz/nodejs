const config = {
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 3000,

    database : {
        host: 'localhost',
        user: 'root',
        password: 'dmitri',
        database: 'testobjection'
    }
}

module.exports = config;