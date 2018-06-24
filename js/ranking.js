
//胜率页面切换
$('.ranking_nav_left').click(function(){
    $('.ranking_nav_left').find('span').css('border-bottom','3px solid #26C688');
    $('.ranking_nav_right').find('span').css('border-bottom','none');
    $('#victory').show();
    $('#integral').hide();
})
//积分排行点击页面切换
//胜率页面切换
$('.ranking_nav_right').click(function(){
    $('.ranking_nav_right').find('span').css('border-bottom','3px solid #26C688');
    $('.ranking_nav_left').find('span').css('border-bottom','none');
    $('#victory').hide();
    $('#integral').show();
})
//初始化底部导航
$('.footer_list').eq(1).find('span').css('color','#25C58D')
$('.no_act').eq(1).show().css('display','block');
$('.act_img').eq(1).hide();

//返回上一级事件
goBackClick = function (){
    window.history.go(-1);
}