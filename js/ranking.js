//初始化头部
light.otherheader.createHeadeer('排行榜')

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