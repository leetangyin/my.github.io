(function(){
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
    //评论跳转
    function gotalklist(){
        window.location.href = "talklist.html"
    }
})()