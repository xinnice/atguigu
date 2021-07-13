let Util = {
    myAjax,
    objToStr,
    render
}

function myAjax(options) {
    return new Promise((resolve, reject) => {
        let {
            url,
            type = 'get',
            data
        } = options
        if (!url) {
            return
        }
        let params = objToStr(data)
        if (type === 'get') {
            url += '?' + params
            params = null
        }
        let xhr = new XMLHttpRequest()
        xhr.open(type, url)
        if (type === 'post') {
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
        }
        xhr.send(params)

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject()
                }
            }
        }
    })
}

function objToStr(obj) {
    let arr = []
    for (const key in obj) {
        arr.push(`${key}=${obj[key]}`)
    }
    return arr.join('&')
}

function render(data) {

    //没有数据时友好提示
    const tips = document.querySelector('#tips')
    const todo_main = document.querySelector('.todo-main')
    const todo_footer = document.querySelector('.todo-footer')
    if (data.length === 0) {
        tips.style.display = 'block'
        todo_main.style.display = 'none'
        todo_footer.style.display = 'none'
    } else {
        tips.style.display = 'none'
        todo_main.style.display = 'block'
        todo_footer.style.display = 'block'
    }

    //渲染数据
    let count = 0;
    let arr = data.map((item, index) => {
        item.isDone ? count++ : null;
        return `<li id=${item._id}>
                    <label>
                    <input type="checkbox" ${item.isDone?"checked":""}/>
                    <span class=${item.isDone?"active":""}>${item.name}</span>
                    </label>
                    <button class="btn btn-danger">删除</button>
                </li>`
    });
    document.querySelector('.todo-main').innerHTML = arr.join('')


    //修改已完成 and 全部
    let doneCount = document.querySelector('#done')
    let totalCount = document.querySelector('#total')
    let allCheck = document.querySelector('.todo-footer input[type=checkbox]')
    if (data.length > 0 && data.length === count) {
        allCheck.checked = true
    } else {
        allCheck.checked = false
    }
    doneCount.textContent = `已完成${count}`
    totalCount.textContent = ` / 全部${data.length}`
}