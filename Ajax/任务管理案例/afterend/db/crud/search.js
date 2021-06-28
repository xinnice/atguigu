const model = require('../model')

function searchTask() {
    return model.find()
}

module.exports = {
    searchTask
}