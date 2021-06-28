const exp = require('express')
const router = exp.Router()
const {
    createUser,
    login
} = require('../database/crud')
router.post('/register', async (req, res) => {
    let {
        txt,
        pwd
    } = req.body
    await createUser(txt, pwd)
    res.redirect('/views/login.html')
})
router.post('/login', async (req, res) => {
    let {
        txt,
        pwd
    } = req.body
    let user = await login(txt, pwd)
    if (user) {
        res.cookie('user_id', user._id)
        res.redirect('http://127.0.0.1:6500/home')
    } else {
        res.send('用户名或密码错误')
    }
})

module.exports = router