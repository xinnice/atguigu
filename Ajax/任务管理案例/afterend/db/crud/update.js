const model = require('../model')

function updateTask(id, isDone) {
  return model.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        isDone: isDone === 'true' ? true : false,
      },
    }
  )
}

function updateCheckTask(ids, isDone) {
  console.log(typeof(isDone))
  return model.updateMany(
    {
      _id: {
        $in: ids,
      },
    },
    {
      $set: {
        isDone: isDone === 'true' ? true : false,
      },
    }
  )
}

module.exports = {
  updateTask,
  updateCheckTask,
}
