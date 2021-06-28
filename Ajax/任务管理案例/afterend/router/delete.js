const exp = require('express')
const {
    deleteTask,
    deleteCheckTask
} = require('../db/crud/delete')
const {
    searchTask
} = require('../db/crud/search')
const rou = exp.Router()

//删除一条数据
rou.post('/delete', async (req, res) => {
    let {
        id
    } = req.body
    await deleteTask(id)
    let data = await searchTask()
    res.send(data)
})

//删除选中数据
rou.post('/deleteCheck',async (req, res) => {
    let {
        ids
    } = req.body
    ids = JSON.parse(ids)
    await deleteCheckTask(ids)
    let data = await searchTask()
    res.send(data)
})

module.exports = rou