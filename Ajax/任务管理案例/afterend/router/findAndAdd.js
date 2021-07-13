const exp = require('express')
const { searchTask } = require('../db/crud/search')
const { addTask } = require('../db/crud/add')
const rou = exp.Router()
//查询方法1 ,解决跨域问题
rou.get('/search', async (req, res) => {
  let { callback } = req.query
  let data = await searchTask()
  res.send(`${callback}(${JSON.stringify(data)})`)
})

//查询方法2
rou.get('/getTodos', async (req, res) => {
  let data = await searchTask()
  res.send(data)
})

//新增
rou.post('/add', async (req, res) => {
  let { name } = req.body
  await addTask(name)
  let data = await searchTask()
  res.send(data)
})
module.exports = rou
