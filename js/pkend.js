//返回上一级事件
function goBackClick(){
    console.log('lee')
    window.history.go(-1);
}
//初始化底部导航
$('.footer_list').eq(2).find('span').css('color','#25C58D')
$('.no_act').eq(2).show().css('display','block');
$('.act_img').eq(2).hide();

