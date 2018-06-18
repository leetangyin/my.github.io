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
$('.no_act').eq(2).show().css('display','block')
$('.act_img').eq(2).hide();


//根据导航初始化页面模板
function initPage(){
    var pagesize = $('#quiz_nav').find('.slide-item').length;
    for(var i = 1; i<pagesize; i++){
        var titel = $('#quiz_nav').find('.slide-item').eq(i).find('span').html();
        console.log(titel+i)
        var tmp = '<div class="pk_content_body">\
                <div class="pk_content">\
                        <div class="pk_time">\
                            2018年6月10日 星期天\
                        </div>\
                        <div class="pk">\
                            <div class="pk_top">\
                                <span>'+ titel+ i +' A组 23：00</span>\
                                <a href="pkend.html" class="pk_but">对战</a>\
                            </div>\
                            <div class="pk_countries">\
                                <span>俄国</span>\
                                <img class="pk_countries_guoone" src="img/guo1.png">\
                                <img class="pk_countries_pk_img" src="img/pk_guo.png">\
                                <img class="pk_countries_guotwo" src="img/guo2.png">\
                                <span>沙特</span>\
                            </div>\
                            <div class="pk_state">已结束</div>\
                        </div>\
                    </div>\
                </div>\
                ' 
        $('#pk_page').append(tmp);            
    }
    $('.pk_content_body').hide();
    $('.pk_content_body').eq(0).show();
}

//顶部导航栏点击事件
$('#quiz_nav').find('.slide-item').each(function(index,ele){
    $(this).click(function(){
        $('#quiz_nav').find('.slide-item').find('span').css('color','#333');
        $(this).find('span').css('color','#1DBE96');
       // if(!index){
          //  $(this).find('span').css('color','#1DBE96');
            // $('.swiper-container').show();
            // $('#quiz_nav').css('background','#fff').css('color','#333');
            // $(this).find('span').css('border-bottom','node');
            // $('#quiz_header').hide();
            // $('#quiz_top').show();
            // $('#otherheader').show();
            // $('#pk_page').css('padding-top','0');
       // }else{
            // $(this).find('span').css('color','#1DBE96');
            // $('#otherheader').find('span').html('赛事');
            // $('#quiz_top').hide();
            // $('.swiper-container').hide();
            // $('#quiz_nav').css('background','#26C688').css('color','#fff');
            // $('#quiz_nav').find('.slide-item').find('span').css('border','none');
            // $(this).find('span').css('border-bottom','2px solid #fff');
            // $('#quiz_header').show();
            // $('#otherheader').hide()
            // $('#pk_page').css('padding-top','60px');
       // }
        $('.pk_content_body').hide();
        $('.pk_content_body').eq(index).show()
    })
})

initPage()