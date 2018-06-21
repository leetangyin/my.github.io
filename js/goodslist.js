//初始化头部
light.otherheader.createHeadeer('全部商品')
var markleft = true
var markright = true

$('#placeholder_left').click(function(){
    if(markleft){
        $('#placeholder_left').find('img').css('display','none');
        $('#placeholder_left').find('img').eq(0).css('display','inline-block');
        markleft = false
    }else{
        $('#placeholder_left').find('img').css('display','none');
        $('#placeholder_left').find('img').eq(2).css('display','inline-block');
        markleft = true        
    }
    $('#placeholder_right').find('img').css('display','none');
    $('#placeholder_right').find('img').eq(0).css('display','inline-block');
    markright = true
})

$('#placeholder_right').click(function(){
    if(markright){
        $('#placeholder_right').find('img').css('display','none');
        $('#placeholder_right').find('img').eq(1).css('display','inline-block');
        markright = false
    }else{
        $('#placeholder_right').find('img').css('display','none');
        $('#placeholder_right').find('img').eq(2).css('display','inline-block');
        markright = true        
    }
    $('#placeholder_left').find('img').css('display','none');
    $('#placeholder_left').find('img').eq(1).css('display','inline-block');
    markleft = true
})