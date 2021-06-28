const model = require('../model')

function addTask(name) {
    return model.create({
        name
    })
}

module.exports = {
    addTask
}