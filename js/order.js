//初始化头部
light.otherheader.createHeadeer('我的订单')

//订单状态的切换
$('#order_list').find('ul').find('li').each(function(index,ele){
    $(this).click(function(){
        $('#order_list').find('ul').find('li').css('border','none');
        $(this).css('border-bottom','1px solid #26C688');
        $('.order_list').css('display','none');
        $('.order_list').eq(index).show();
    })
})