const {
    response
} = require('express')
const exp = require('express')
const app = exp()

app.use(exp.static('../public'))
app.use(exp.urlencoded({
    extended: true
}))

app.post('/test', (req, res) => {
    let {
        username
    } = req.body
    let userArr = ['lph', 'qym', 'yhj', 'ldl']
    res.send(userArr.includes(username) ? '用户名已存在' : '用户名可用')
})

app.listen('7000', () => {
    console.log('server is success')
})