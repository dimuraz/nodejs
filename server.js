// Route Class
const express = require("express");
const app = express();

// Get config
const config = require('./config/config');

// Require router files
const routes = require("./routes/routes");

// Import and initialize Knex.js
const Knex = require("knex");
const knexFile = require("./knex.js");
const knex = Knex(knexFile.development);

// Import Objection.js Model class
const { Model } = require("objection");

// Bind all models to the knex instance
Model.knex(knex);

// Accept JSON data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Include the routes to express
app.use("/", routes);

// Start the server
app.listen(config.PORT, config.HOST, () => {
  console.log(`Running on http://${config.HOST}:${config.PORT}`);
});