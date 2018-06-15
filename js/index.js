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
$('#header_nav').find('li').each(function(index,ele){
    $(this).click(function(){
        $('#header_nav').find('li').find('span').css('border',"none");
        $(this).find('span').css('border-bottom', "2px solid #fff");
        if(index == 0){
            $('#index_content_hot').show()
            $('#index_content_word').hide()
            $('#index_content_viode').hide()
            $('#index_content_zhongchao').hide()
        }else if(index == 1){
            $('#index_content_hot').hide()
            $('#index_content_word').show()
            $('#index_content_viode').hide()
            $('#index_content_zhongchao').hide()
        }else if(index == 2){
            $('#index_content_hot').hide()
            $('#index_content_word').hide()
            $('#index_content_viode').show()
            $('#index_content_zhongchao').hide()
        }else if(index == 3){
            $('#index_content_hot').hide()
            $('#index_content_word').hide()
            $('#index_content_viode').hide()
            $('#index_content_zhongchao').show()
        }
        //alert($(this).index())
    })
})

// $('#header_nav').find('li').each(function(index,element){
//     console.log(index)
// })

// $('#header_nav').find('li').click(function(){
//     $('#header_nav').find('li').find('span').css('border',"none");
//     $(this).find('span').css('border-bottom', "2px solid #fff")
// })
