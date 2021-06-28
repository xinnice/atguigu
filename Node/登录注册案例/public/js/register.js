const oTxt = document.querySelector('input[name=txt]');
const oPwd = document.querySelector('input[name=pwd]');
const oConPwd = document.querySelector('input[name=conpwd]');
const regBtn = document.querySelector('input[name=sub]');

function fromReg() {
    let value = this.value;
    if (!value) {
        return;
    }
    let reg = null;
    let str = null;
    switch (this.name) {
        case 'txt':
            reg = /^web\w{6,8}$/;
            str = 'web开头9-11位';
            break;
        case 'pwd':
            reg = /^\w{6,8}$/;
            str = '字母/数组/下划线 6-8位'
            break;
        default:
            break;
    }
    let oSpan = this.nextElementSibling;
    if (reg.test(value)) {
        oSpan.textContent = 'Ok';
        oSpan.style.color = 'green';
    } else {
        oSpan.textContent = str;
        oSpan.style.color = 'red';
    }
}

oConPwd.oninput = function () {
    let value = this.value.trim();
    if (!value) {
        return;
    }
    let span = this.nextElementSibling;
    if (value === oPwd.value.trim()) {
        span.textContent = 'Ok'
        span.style.color = 'green'
    } else {
        span.textContent = '两次密码不一致'
        span.style.color = 'red'
    }
}

regBtn.onclick = function (e) {
    let spans = document.querySelectorAll('#form span');
    let password = document.querySelector('input[name=pwd]');
    let conpassword = document.querySelector('input[name=conpwd]');
    if (!(spans[0].textContent === 'Ok') || !(spans[1].textContent === 'Ok') || !(spans[2].textContent === 'Ok')) {
        alert('表单校验不通过!')
        e.preventDefault()
    }

    if (password.value.trim() !== conpassword.value.trim()) {
        alert('两次密码不一致')
        e.preventDefault()
    }
}

oTxt.oninput = fromReg;
oPwd.oninput = fromReg;