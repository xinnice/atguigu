const model = require('../model')

function updateTask(id, isDone) {
    return model.updateOne({
        _id: id
    }, {
        $set: {
            isDone
        }
    })
}

function updateCheckTask(ids, isDone) {
    return model.updateMany({
        _id: {
            $in: ids
        }
    }, {
        $set: {
            isDone
        }
    })
}

module.exports = {
    updateTask,
    updateCheckTask
}