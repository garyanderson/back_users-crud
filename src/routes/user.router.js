const { getAll, create, getOneUser, remove, update } = require('../controllers/user.controller');
const express = require('express');

const usersRouter = express.Router();

usersRouter.route("/users")
		.get(getAll)
		.post(create);

usersRouter.route("/users/:id")
		.get(getOneUser)
		.delete(remove)
		.put(update)

module.exports = usersRouter;