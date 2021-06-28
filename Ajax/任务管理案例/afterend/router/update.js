const exp = require('express')
const {
    updateTask,
    updateCheckTask
} = require('../db/crud/update')
const {
    searchTask
} = require('../db/crud/search')
const rou = exp.Router()

//修改一条数据
rou.post('/update', async (req, res) => {
    let {
        id,
        isDone
    } = req.body
    await updateTask(id, isDone)
    let data = await searchTask()
    res.send(data)
})

//修改选中数据
rou.post('/updateCheck',async (req, res) => {
    let {
        ids,
        isDone
    } = req.body
    ids = JSON.parse(ids)
    await updateCheckTask(ids, isDone)
    let data = await searchTask()
    res.send(data)
})

module.exports = rou