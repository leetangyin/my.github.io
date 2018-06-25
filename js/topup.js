
//返回上一级事件
goBackClick = function (){
    window.history.go(-1);
}
//点击充值，显示充值页面
$('#my_show_but').click(function(){
    $('#my_page_buttom').show();
})
//充值取消点击事件
function cancelClick(){
    $('#my_page_buttom').hide();
}
//充值成功点击事件
function successfulClick(){
    $('#my_page_buttom').hide();
    $('#toast').show();
    setTimeout(function() {
        $('#toast').hide();
    }, 500);
}
//充值面额点击事件
$('.placeholder').each(function(index,ele){
    $(this).click(function(){
        $('.placeholder').css('background-color','#fff').css('color','#333').css('border','1px solid #ccc')
        $('.placeholder').find('span').css('color','#ccc');
        $(this).css('background-color','#30CE81').css('border','none')
        $(this).find('span').css('color','#fff')
        $('#pay_momey').html($(this).find('.topup_num').html())
        
    })
})