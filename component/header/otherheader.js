(function(window, undefined) {

    var otherheader = $namespace("otherheader");
    otherheader.createHeadeer = function(titel){
        $('#otherheader').append(
            '<div class="otherheader_left"  onclick="light.news.goBackClick()"><img src="img/left.png" style="width:11px"></div>\
                <div class="otherheader_text"><span>'+titel+'</span></div>\
                <div class="otherheader_right"><img src="img/share.png"></div>\
            </div>'
        )
    }
    //返回上一级事件
    goBackClick = function goBackClick(){
        window.history.go(-1);
    }
})(window)