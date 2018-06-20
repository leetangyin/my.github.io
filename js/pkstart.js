//返回上一级事件
function goBackClick(){
    console.log('lee')
    window.history.go(-1);
}
//初始化底部导航
$('.footer_list').eq(2).find('span').css('color','#25C58D')
$('.no_act').eq(2).show().css('display','block');
$('.act_img').eq(2).hide();

function betClick(text){
    $('#bet').show();
    $('#my_mode').show();
    $('#choose_text').val(text);
}
function closeBetClick(){
    $('#bet').hide();
    $('#my_mode').hide();
    $('#choose_text').val('');
}
function addClick(){
    $('.bet_but_num').find('input').val(parseInt($('.bet_but_num').find('input').val()) + 1)
    $('#integral_num').html(parseInt($('.bet_but_num').find('input').val())*100)
}
function reductionClick(){
    if(parseInt($('.bet_but_num').find('input').val())>0){
        $('.bet_but_num').find('input').val(parseInt($('.bet_but_num').find('input').val()) - 1)
        $('#integral_num').html(parseInt($('.bet_but_num').find('input').val())*100)
    }
}