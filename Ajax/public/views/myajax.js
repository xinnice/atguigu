function myAjax(options) {
    let {
        type = 'get',
            url,
            dataType = 'json',
            data,
            timeout = 1000 * 30,
            beforeSend,
            success,
            error,
            complete
    } = options
    if (!url) {
        return
    }
    let bef = beforeSend && beforeSend()
    if (bef === false) {
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
            complete && complete()
            if (xhr.status === 200) {
                let params = null
                if (dataType === 'json') {
                    params = JSON.parse(xhr.responseText)
                } else if (dataType === 'text') {
                    params = xhr.responseText
                }
                success && success(params)
            } else {
                error && error(xhr)
            }
        }
    }
}

function objToStrnig(obj) {
    let arr = []
    for (let key in obj) {
        arr.push(`${key}=${obj[key]}`)
    }
    return arr.join('&')
}