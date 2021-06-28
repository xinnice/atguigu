const oTxt = document.querySelector('input[name=txt]');
const oPwd = document.querySelector('input[name=pwd]');
const logBtn = document.querySelector('input[name=sub]');

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

logBtn.onclick = function (e) {
    let spans = document.querySelectorAll('#form span');
    if (!(spans[0].textContent === 'Ok') || !(spans[1].textContent === 'Ok')) {
        alert('表单校验不通过!')
        e.preventDefault()
    }
}

oTxt.oninput = fromReg;
oPwd.oninput = fromReg;