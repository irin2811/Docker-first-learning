const db = require('../db');

class UserController {
    async createUser(req, res) {
        const {name, surname, age} = req.body;
        const newPerson = await db.query(
            'INSERT INTO person (name, surname, age) VALUES ($1, $2, $3) RETURNING *', [name, surname, age]
        );
        res.json(newPerson.rows[0]);
    }
    async getUser(req, res) {
        const id = req.params.id;
        const user = await db.query(
            'SELECT * FROM person WHERE id=$1', [id]
        );
        res.json(user.rows[0]);
    }
    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM person');
        res.json(users.rows);
    }
    async updateUser(req, res) {
        const {id, name, surname, age} = req.body;
        const user = await db.query(
            'UPDATE person SET name=$2, surname=$3, age=$4 where id=$1 RETURNING *',
            [id, name, surname, age]
        );
        res.json(user.rows[0]);
    }
    async deleteUser(req, res) {
        const id = req.params.id;
        const user = await db.query('DELETE from person where id=$1', [id]);
        res.json('User was deleted!');
    }
}

module.exports = new UserController();
