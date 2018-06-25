

//评论框获取焦点，评论变为提交事件
function getSubmitBtnClick(){
    $('.speaksend').show();
    $('.gotalklist').hide();
}
//评论框失去焦点，评论变为提交事件
function gotalkLsitBtnClick(){
    $('.speaksend').hide();
    $('.gotalklist').show();       
}
//评论提交事件
function speaksendClick(){
    //提交代码写在这里
} 

//返回上一级事件
goBackClick = function (){
    window.history.go(-1);
}
