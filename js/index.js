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
$('.footer_list').eq(0).find('span').css('color','#25C58D')
$('.no_act').eq(0).show().css('display','block');
$('.act_img').eq(0).hide();

//监控滚动条时间
$(window).on("scroll", scrollFn());

//滚动条到底部填充数据成功加载数据#load隐藏。
function scrollFn(){
    if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
        $('#load').show();
        alert('执行了')
        setTimeout(function() {
            $('#load').hide();
        }, 800);
    }
}
