const model = require('../model')
const md5 = require('md5')

function createUser(username, password) {
    return model.create({
        username,
        password: md5(password)
    })
}

function login(username, password) {
    return model.findOne({
        username,
        password: md5(password)
    })
}

module.exports = {
    createUser,
    login
}