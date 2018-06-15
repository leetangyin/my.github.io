//返回上一级事件
function goBackClick(){
    window.history.go(-1);
}

function gotalkHowClick(){
    $('.talkcontent_left').css('color','#1EBF95')
    $('.talkcontent_right').css('color','#333')
    $('#talkhow').show()
    $('#talknew').hide()
}
function gotalkNewClick(){
    $('.talkcontent_left').css('color','#333')
    $('.talkcontent_right').css('color','#1EBF95')
    $('#talkhow').hide()
    $('#talknew').show()    
}
//评论提交事件
function speaksendClick(){
    //提交代码写在这里,提交成功后跳转到评论页
} 