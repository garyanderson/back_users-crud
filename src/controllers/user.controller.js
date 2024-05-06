const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async (req, res) => {
    const users = await User.findAll();
    return res.json(users);
});

const create = catchError(async(req, res) => {
    const { firstname, lastname, email, password, birthday } = req.body;
    const user = await User.create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        birthday: birthday,
    });
    return res.status(201).json(user);
});

const getOneUser = catchError(async(req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id)
return res.json(user)
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({ where: { id: id } });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { firstname, lastname, email, password, birthday } = req.body;
    const user = await User.update({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        birthday: birthday,
    }, { where: { id: id }, returning: true });
    return res.json(user[1][0]);
});

module.exports = {
    getAll,
    create,
    getOneUser,
    remove,
    update
}