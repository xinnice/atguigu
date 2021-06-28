const exp = require('express')
const app = exp()

app.get('/test', (req, res) => {
    setTimeout(() => {
        let {
            callback
        } = req.query
        res.send(`${callback}(${JSON.stringify([100,200,300])})`)
    }, 2000)
})

app.post('/test', (req, res) => {

})

app.listen('7000', () => {
    console.log('server is success');
})