let script = document.createElement('script')
script.src = 'http://127.0.0.1:7000/search?callback=getData'
document.body.appendChild(script)

//初始化加载数据
function getData(data) {
    Util.render(data)
}

//添加数据
let input = document.querySelector('.todo-header input')
input.onkeydown = async function (e) {
    if (e.keyCode === 13) {
        let value = this.value.trim()
        if (!value) {
            return
        }
        let data = await Util.myAjax({
            url: 'http://127.0.0.1:7000/add',
            type: 'post',
            data: {
                name: value
            }
        })
        Util.render(data)
        input.value = ''
    }
}

//修改 or 删除 一条数据
let todo_main = document.querySelector('.todo-main')
todo_main.addEventListener('click', async (e) => {
    switch (e.target.nodeName) {
        case 'INPUT': {
            let check = e.target.checked
            let res = await Util.myAjax({
                url: 'http://127.0.0.1:7000/update',
                type: 'post',
                data: {
                    id: e.target.parentNode.parentNode.id,
                    isDone: check
                }
            })
            Util.render(res)
        }
        break;
    case 'BUTTON': {
        let res = await Util.myAjax({
            url: 'http://127.0.0.1:7000/delete',
            type: 'post',
            data: {
                id: e.target.parentNode.id,
            }
        })
        Util.render(res)
    }
    break;
    default:
        break;
    }
})

//修改所有数据
let checkall = document.querySelector('.todo-footer label input')
checkall.addEventListener('click', async function (e) {
    let lis = document.querySelectorAll('.todo-main li')
    let check = this.checked
    // let arr = []
    // lis.forEach((item, index) => {
    //     if (item.firstElementChild.firstElementChild.checked !== check) {
    //         arr.push(item.id)
    //     }
    // })
    let ids = Array.from(lis).reduce((prev, item) => {
        if (item.firstElementChild.firstElementChild.checked !== check) {
            prev.push(item.id)
        }
        return prev
    }, [])
    let res = await Util.myAjax({
        url: 'http://127.0.0.1:7000/updateCheck',
        type: 'post',
        data: {
            // ids: JSON.stringify(arr),
            ids: JSON.stringify(ids),
            isDone: check
        }
    })
    Util.render(res)
})

//删除选中数据
let delCheck = document.querySelector('.todo-footer button')
delCheck.addEventListener('click', async function (e) {
    let lis = document.querySelectorAll('.todo-main li')
    // let arr = []
    // lis.forEach((item, index) => {
    //     let check = item.firstElementChild.firstElementChild.checked
    //     if (check) {
    //         arr.push(item.id)
    //     }
    // })
    let ids = Array.from(lis).reduce((prev, item) => {
        if (item.firstElementChild.firstElementChild.checked) {
            prev.push(item.id)
        }
        return prev
    }, [])
    let res = await Util.myAjax({
        url: 'http://127.0.0.1:7000/deleteCheck',
        type: 'post',
        data: {
            // ids: JSON.stringify(arr),
            ids: JSON.stringify(ids)
        }
    })
    Util.render(res)
})