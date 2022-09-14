// Route Class
const express = require("express");
const app = express();

// Get config
const config = require('./config/config');

// Require router files
const routes = require("./routes/routes");

// Accept JSON data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Include the routes to express
app.use("/", routes);

// Start the server
app.listen(config.PORT, config.HOST, () => {
  console.log(`Running on http://${config.HOST}:${config.PORT}`);
});