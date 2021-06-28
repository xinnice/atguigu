//输入框回车添加数据
$(".todo-header input").on("keydown", function (e) {
    if (e.keyCode === 13) {

        var value = $(this).val().trim();
        if (!value) {
            return;
        }
        var strHtml = '<li>\
                    <label>\
                    <input type="checkbox" />\
                    <span>' + value + '</span>\
                    </label>\
                    <button class="btn btn-danger">删除</button>\
                    </li>';

        $(".todo-main").append(strHtml);
        $(this).val("");
        allCheck();
        updateText();
    }
});

//单选
$(".todo-main").on("click", "li>label>input", function () {
    $(this).next().toggleClass("isDel");
    allCheck();
    updateText();
});

//全选
$(".todo-footer label input").on("click", function () {
    $(".todo-main li label input").prop("checked", $(this).prop("checked"));
    $(this).prop("checked") ? $(".todo-main li label span").addClass("isDel") :
        $(".todo-main li label span").removeClass("isDel");
    updateText();
});

//单行删除
$(".todo-main").on("click", "li button", function () {
    $(this).parent().remove();
    allCheck();
    updateText();
})

//删除全部选中
$(".todo-footer").on("click", "button", function () {
    $(".todo-main li label input:checked").parent().parent().remove();
    allCheck();
    updateText();
})

//是否全选
function allCheck() {
    var inputChecks = $(".todo-main li label input:checked").length;
    var inputs = $(".todo-main li label input").length;
    if (inputChecks === 0 && inputs === 0) {
        $(".todo-footer label input").prop("checked", false);
        return;
    }
    $(".todo-footer label input").prop("checked", inputChecks === inputs);
}

//更新文本
function updateText() {
    var checkCount = $(".todo-main li label input:checked").length;
    var count = $(".todo-main li label input").length;
    $("#done").text(checkCount);
    $("#allDo").text(count);
}