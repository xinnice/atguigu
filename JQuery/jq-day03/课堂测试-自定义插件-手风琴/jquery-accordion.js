$.fn.accordion = function (obj) {

    //找到所有的li
    var oLis = $(this).find("li");

    //计算每个li的初始宽度
    var oLiInfo = {
        width: $(this).width() / oLis.length
    };
    //收缩时宽度
    var minWidth = obj.minWidth >= 0 && obj.minWidth <= oLiInfo.width ? obj.minWidth : oLiInfo.width / 2;
    //展开时宽度
    var maxWidth = $(this).width() - (minWidth * (oLis.length - 1));

    //给每个li设置宽/高/背景颜色
    oLis.each(function (index, ele) {
        $(ele).css({
            width: oLiInfo.width,
            background: obj.colors[index]
        });
    })

    //li移入事件
    oLis.on("mouseenter", function () {
        $(this).stop(true).animate({
            width: maxWidth
        }).siblings().stop(true).animate({
            width: minWidth
        });
    });

    //移出事件
    $(this).on("mouseleave", function () {
        oLis.stop(true).animate({
            width: oLiInfo.width
        });
    })


}