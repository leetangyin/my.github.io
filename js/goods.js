//初始化头部
light.otherheader.createHeadeer('商品详情')
//兑换取消点击事件
function cancelClick(){
    $('#my_page_buttom').hide();
}
//兑换成功点击事件
function successfulClick(){
    $('#my_page_buttom').hide();
    $('#toast').show();
    setTimeout(function() {
        $('#toast').hide();
    }, 1000);
}
//兑换点击事件
function showshClick(){
    $('#my_page_buttom').show();
}
