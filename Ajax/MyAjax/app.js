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
    res.send(req.query)
})

app.post('/test', (req, res) => {
    res.send(req.body)
})

app.listen('7500', () => {
    console.log('server is success')
})