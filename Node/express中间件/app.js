const exp = require('express')
const app = exp()

app.use(exp.urlencoded({
    extended: true
}))

app.get('/exp', (req, res) => {
    res.send('get-success');
})

app.post('/exp', (req, res) => {
    console.log(req.body)
    res.send('post-success');
})

app.listen(6000, (error) => {
    if (!error) {
        console.log('sever开启成功');
    } else {
        console.log('sever开启失败');
    }
})