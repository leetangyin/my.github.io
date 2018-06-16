//初始化头部
light.otherheader.createHeadeer('竞猜')

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
$('.footer_list').eq(2).find('span').css('color','#25C58D')
$('.no_act').eq(2).show().css('display','block').css('border','2px solid #25C58D').css('border-radius','50%');
$('.act_img').eq(2).hide();