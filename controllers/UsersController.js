// Get all models
const Users = require('../models/Users.js');

// Create Users controller
class UsersController {
    async all(req, res){
        const users = await Users.query();
        return res.json(users);
    }

    async find(req, res){
        const user = await Users.query().findById(req.query.userId);
        return res.json(user);
    }

    async create(req, res){
        const { name, age } = req.body;
        try {
          const user = await Users.query().insert({ name, age });
          return res.json(user);
        } catch (err) {
            return res.status(404).json(err);
        }
    }

    async update(req, res){
        const { name, age } = req.body;
        try {
            const user = await Users.query()
                .findById(req.query.userId)
                .patch({
                    name: name,
                    age: age
                });
            return res.json(user);
        } catch (err) {
            return res.status(404).json(err);
        }
    }

    async delete(req, res){
        const user = await Users.query().deleteById(req.query.userId);
        return res.json(user);
    }
}

// Export UsersController to be used in routes.js
module.exports = UsersController;