const exp = require('express')
const path = require('path')
const router = exp.Router()

router.get('/home', (req, res) => {
    let {
        user_id
    } = req.cookies
    let data = {
        username: '张三',
        createtime: Date.now()
    }
    if (user_id) {
        res.render('home', data)
    } else {
        res.redirect('http://127.0.0.1:6500/views/login.html')
    }
})
router.get('/detail', (req, res) => {
    let {
        user_i
    } = req.cookies
    if (user_id) {
        res.redirect('http://127.0.0.1:6500/views/detail.html')
    } else {
        res.redirect('http://127.0.0.1:6500/views/login.html')
    }
})

module.exports = router