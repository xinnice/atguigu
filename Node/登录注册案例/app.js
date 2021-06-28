(async () => {
    const db = require('./database/db')
    const exp = require('express')
    const cookieParser = require('cookie-parser')
    const rt = require('./routes/rt')
    const loginafter = require('./routes/loginafter')
    const app = exp()
    await db

    app.use(exp.static('./public'))
    app.use(exp.urlencoded({
        extended: true
    }))
    app.use(cookieParser())
    app.set('view engine', 'ejs')
    app.set('views', './template')
    app.use(rt)
    app.use(loginafter)
    app.listen(6500, (err) => {
        if (!err) {
            console.log('服务器启动成功')
        } else {
            console.log('服务器启动失败')
        }
    })
})()