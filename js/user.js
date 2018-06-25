
//个人中心跳转
function goPageClick(test){
    window.location.href=  test + ".html"
}
//初始化底部导航
$('.footer_list').eq(4).find('span').css('color','#25C58D')
$('.no_act').eq(4).show().css('display','block')
$('.act_img').eq(4).hide();
//返回上一级事件
goBackClick = function (){
    window.history.go(-1);
}