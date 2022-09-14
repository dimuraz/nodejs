// Get all models
const Todos = require('../models/Todos.js');

// Create Todos controller
class TodosController {
    async all(req, res){
        const todos = await Todos.query();
        return res.json(todos);
    }

    async find(req, res){
        const todo = await Todos.query().findById(req.query.todoId);
        return res.json(todo);
    }

    async create(req, res){
        const { name, age } = req.body;
        try {
          const todo = await Todos.query().insert({ name, age });
          return res.json(todo);
        } catch (err) {
            return res.status(404).json(err);
        }
    }

    async update(req, res){
        const { name, age } = req.body;
        try {
            const todo = await Todos.query()
                .findById(req.query.todoId)
                .patch({
                    name: name,
                    age: age
                });
            return res.json(todo);
        } catch (err) {
            return res.status(404).json(err);
        }
    }

    async delete(req, res){
        const todo = await Todos.query().deleteById(req.query.todoId);
        return res.json(todo);
    }
}

// Export TodosController to be used in routes.js
module.exports = TodosController;