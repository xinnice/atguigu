const exp = require('express')
const path = require('path')
const app = exp()

app.get('/list/:id', (request, response) => {
    console.log(request.query)
    console.log(request.params)
    //send:文本打印到浏览器窗口
    // response.send('12345678910')
    //download:绝对路径/相对路边都可以传
    // response.download('../data/images/goods1.png')
    //sendFile:只能传绝对路径,浏览器中能打开就在浏览器中打开,否则就下载
    // response.sendFile(path.resolve('../data/images/s1.png'))
    //redirect:链接重定向
    response.redirect('https://juejin.cn')
})

app.post('/list', (request, response) => {

})
app.listen(7000, (err) => {
    if (err) {
        console.log('服务器开始失败');
    } else {
        console.log('服务器开启成功');
    }
})