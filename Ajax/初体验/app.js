const {
    response
} = require('express')
const exp = require('express')
const app = exp()

app.use(exp.static('../public'))
app.use(exp.urlencoded({
    extended: true
}))

app.get('/test', (req, res) => {
    res.send('get-success')
})

app.post('/test', (req, res) => {
    res.send('post-success')
})

app.listen('7000', () => {
    console.log('server is success')
})