
//兑换取消点击事件
function cancelClick(){
    $('#my_page_buttom').hide();
}
//点击添加地址事件
function addArrdClick(){
    $('#my_page_buttom').show();
}

//添加地址确定事件成功点击事件
function successfulClick(){
    $('.weui-input').each(function(index,ele){
        
        if($(this).attr('type') == 'number'){
            $('#dete_name').find('span').eq(1).html($(this).val())
        }else if($(this).attr('type') == 'text'){
            $('#dete_name').find('span').eq(0).html($(this).val())
        }else if($(this).attr('type') == "txt"){
            $('#det_add').html($(this).val());
        }
    })
    
    var mark =  $('#dete_name').find('span').eq(0).html() && $('#dete_name').find('span').eq(1).html() && $('#det_add').html();
    if(!mark){
        if(!$('#dete_name').find('span').eq(0).html()){
            wrong('请填写收货人')
        }else if(!$('#dete_name').find('span').eq(1).html()){
            wrong('请填写联系人电话号码')
        }else if(!$('#det_add').html()){
            wrong('请填写收货地址')
        }
    }else{
        if(isMobile($('#dete_name').find('span').eq(1).html())){
            $('#dete').show();
            $('.orderdetails_page_add').eq(0).hide();
            $('#my_page_buttom').hide()
        }else{
            wrong('请填写正确的电话号码')
        }
    }

    // $('#my_page_buttom').hide();
    // $('#toast').show();
    // setTimeout(function() {
    //     $('#toast').hide();
    // }, 1000);
}
//兑换点击事件
function showshClick(){
    //判断是否有收货地址
    var mark = $('#dete_name').find('span').eq(0).html() && $('#dete_name').find('span').eq(1).html() && $('#det_add').html();
    if(!mark){
        //没有收货地址，提示填写
        wrong('请填写收货地址')
    }else{
        //有的提交订单，然后跳转到兑换详情页
        window.location.href="orderdetails.html" 
    }
}

//错误提示
function wrong(text){
    $('#toast_text').html(text)
    $('#toast_add').show();
    setTimeout(function() {
        $('#toast_add').hide();
    }, 1000);
}
//验证电话号码
function isMobile(mobile) {
    if (!(/^1[0-9]{10}$/.test(mobile))) {
        return false;
    } else {
        return true;
    }
};
//返回上一级事件
goBackClick = function (){
    window.history.go(-1);
}