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

//根据导航初始化页面模板
function initPage(){
    var pagesize = $('#header_nav').find('.slide-item').length;
    for(var i = 1; i<=pagesize; i++){
        var titel = $('#header_nav').find('.slide-item').eq(i).find('span').html();
        var tmp = '<div class="index_page">\
                    <div class="weui-cell" onclick="goDetails()">\
                        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">\
                    <img src="img/test.jpg" style="width: 80px;display: block">\
                </div>\
                <div class="weui-cell__bd">\
                    <p style="margin-bottom:10px;">'+titel+'的天下足球天下足球天</p>\
                    <p style="font-size: 13px;color: #888888;" class="grand">\
                    <span>足球战报</span><span>评论1</span>\
                </p>\
                </div>\
                </div>\
            </div>\
        ' 
        $('#index_page_conent').append(tmp);            
    }
    $('.index_page').hide();
    $('.index_page').eq(0).show();
}

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

initPage();








