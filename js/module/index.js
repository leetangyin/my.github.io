
//首页轮播器
var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: 2500
});
//底部导航条选中效果
$('#m1').find('.footer_img').find('img').attr("src", "../img/footer_1_selected.png")
$('#m1').find('.footer_title').css('color', '#659758')