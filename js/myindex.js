//返回上一级事件
goBackClick = function (){
    window.history.go(-1);
}

//赛事跳转
function goDetailsPageClick (url){
    window.location.href = url + ".html" 
}