(async function () {
    const db = require('./db/connect')
    const exp = require('express')
    const cors = require('cors')

    await db
    console.log('database is connected');

    const app = exp()

    //引入路由中间件
    const fuRouter = require('./router/findAndAdd')
    const upRouter = require('./router/update')
    const deRouter = require('./router/delete')

    //对于post请求的参数自动解析
    app.use(exp.urlencoded({
        extended: true
    }))

    //使用跨域资源共享中间件
    app.use(cors())

    //使用路由中间件
    app.use(fuRouter)
    app.use(upRouter)
    app.use(deRouter)

    
 
    //开启服务器
    app.listen('7500', (err) => {
        if (err) {
            console.log('server is fail');
        } else {
            console.log('server is success');
        }
    })
})()