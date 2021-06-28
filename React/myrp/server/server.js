const exp = require('express')
const cors = require('cors')
const app = exp()

app.use(cors())

app.get('/addData', (req, res) => {
  res.send('nice')
})

app.get('/getData', (req, res) => {
  let data = [
    {
      name: 'zs',
      age: 17,
      info: '考试100分',
    },
    {
      name: 'ls',
      age: 20,
      info: '考试99分',
    },
    {
      name: '骚灿',
      age: 14,
      info: '考试1000分',
    },
    {
      name: '野猪佩奇',
      age: 30,
      info: '考试999分',
    },
    {
      name: '骚猪乔治',
      age: 50,
      info: '考试99999分',
    },
  ]
  res.send(data)
})

app.listen(7500, (err) => {
  err || console.log('server is success')
})
