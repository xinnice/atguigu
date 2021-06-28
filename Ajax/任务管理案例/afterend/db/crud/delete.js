const model = require('../model')

function deleteTask(id, isDone) {
    return model.remove({
        _id: id
    })
}

function deleteCheckTask(ids, isDone) {
    return model.remove({
        _id: {
            $in: ids
        }
    })
}

module.exports = {
    deleteTask,
    deleteCheckTask
}