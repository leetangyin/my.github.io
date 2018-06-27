// 启动轮播器
var swiper = new Swiper('.swiper-container', {
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    autoplay: {
        delay: 800,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    }
})
//返回上一级事件
goBackClick = function (){
    window.history.go(-1);
}
//初始化底部导航
$('.footer_list').eq(2).find('span').css('color','#25C58D')
$('.no_act').eq(2).show().css('display','block')
$('.act_img').eq(2).hide();


//顶部导航栏点击事件
$('#quiz_nav').find('.slide-item').each(function(index,ele){
    $(this).click(function(){
        $('#quiz_nav').find('.slide-item').find('span').css('color','#333');
        $(this).find('span').css('color','#1DBE96');
        $('.pk_content_body').hide();
        $('.pk_content_body').eq(index).show()
    })
})

//立即领取事件
function lijiClick(){
    $('.my_hb').css('background','url(img/chb.png) no-repeat').css('background-size','100% 100%')
    $('.li').hide()
    $('.qu').show()
}
// initPage()
$('.cl_img').click(function(){
    $('.weui_mask_bg').hide()
})