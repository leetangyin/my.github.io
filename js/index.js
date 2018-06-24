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

//监控滚动条事件,填充数据
$(window).scroll(function(){
    if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
        $('#load').show();
        setTimeout(function() {
            $('#load').hide();
        }, 200);
    }    
})



//顶部导航栏点击事件
$('#header_nav').find('.slide-item').each(function(index,ele){
    $(this).click(function(){
        $('#header_nav').find('.slide-item').find('span').css('border','none');
        $(this).find('span').css('border-bottom','2px solid #fff');
        $('.index_page').hide();
        $('.index_page').eq(index).show()
    })
})

//跳转到详情页
function goDetails(){
    window.location.href="news.html" 
}










