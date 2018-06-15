(function(){

    var news = $namespace("news");
    light.otherheader.createHeadeer('详情')
    
    //返回上一级事件
    light.news.goBackClick = function goBackClick(){
        window.history.go(-1);
    }

    //评论框获取焦点，评论变为提交事件
    light.news.getSubmitBtnClick = function (){
        $('.speaksend').show();
        $('.gotalklist').hide();
    }
    //评论框失去焦点，评论变为提交事件
    light.news.gotalkLsitBtnClick = function (){
        $('.speaksend').hide();
        $('.gotalklist').show();       
    }

    //评论提交事件
    light.news.btnSend = function (){
        //提交代码写在这里
    }    
})()