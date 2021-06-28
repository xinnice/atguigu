function myAjax(options) {
    return new Promise((resolve, reject) => {
        let {
            type = 'get',
                url,
                dataType = 'json',
                data,
                timeout = 1000 * 30,
                beforeSend
        } = options
        if (!url) {
            return
        }
        let xhr = new XMLHttpRequest()
        xhr.timeout = timeout
        let params = objToStrnig(data)
        if (type === 'get') {
            url = `${url}?${params}`
            params = null
        }
        xhr.open(type, url)
        if (type === 'post') {
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
        }
        xhr.send(params)

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let params = null
                    if (dataType === 'json') {
                        params = JSON.parse(xhr.responseText)
                    } else if (dataType === 'text') {
                        params = xhr.responseText
                    }
                    resolve(params)
                } else {
                    reject()
                }
            }
        }
    })
}

function objToStrnig(obj) {
    let arr = []
    for (let key in obj) {
        arr.push(`${key}=${obj[key]}`)
    }
    return arr.join('&')
}