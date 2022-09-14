var express = require('express');
var router = express.Router();

// Get all controllers
const UsersController = require('../controllers/UsersController.js');
const TodosController = require('../controllers/TodosController.js');

const Users = require('../models/Users.js');

// Create all Users endpoint
router.get("/user", (req, res) => { new UsersController().find(req, res) });
router.get("/users", (req, res) => { new UsersController().all(req, res) });
router.post("/user", (req, res) => { new UsersController().create(req, res) });
router.post("/user/update", (req, res) => { new UsersController().update(req, res) });
router.get("/user/delete", (req, res) => { new UsersController().delete(req, res) });

// Create all Todos endpoint
router.get("/todo", (req, res) => { new TodosController().find(req, res) });
router.get("/todos", (req, res) => { new TodosController().all(req, res) });
router.post("/todo", (req, res) => { new TodosController().create(req, res) });
router.post("/todo/update", (req, res) => { new TodosController().update(req, res) });
router.get("/todo/delete", (req, res) => { new TodosController().delete(req, res) });

// Export routes to be used in server.js
module.exports = router;