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

//初始化底部导航
$('.footer_list').eq(3).find('span').css('color','#25C58D')
$('.no_act').eq(3).show().css('display','block');
$('.act_img').eq(3).hide();


//监控滚动条事件,填充数据
$(window).scroll(function(){
    if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
        $('#load').show();
        setTimeout(function() {
            $('#load').hide();
        }, 200);
    }    
})