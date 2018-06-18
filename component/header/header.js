(function(){
    //顶部导航为后台动态添加，没添加一个导航都会自动添加一个page内容页，自动添加的页面的模板在index.js
    $('#header').append(
        '<div id="header_top">\
            <div id="header_img" style="line-height: 49px;">\
                <a href="###"><img src="img/user_light.png"/></a>\
            </div>\
            <span>头条</span>\
        </div>\
        <div id="header_nav">\
            <div class="slide-box">\
                <div class="slide-item"><span style="border-bottom:2px solid #fff">世界杯</span></div>\
                <div class="slide-item"><span>欧冠</span></div>\
                <div class="slide-item"><span>亚冠</span></div>\
                <div class="slide-item"><span>意甲</span></div>\
                <div class="slide-item"><span>英超</span></div>\
                <div class="slide-item"><span>世界杯</span></div>\
                <div class="slide-item"><span>欧冠</span></span></div>\
                <div class="slide-item"><span>亚冠</span></div>\
                <div class="slide-item"><span>意甲</span></div>\
                <div class="slide-item"><span>英超</span></div>\
                <div class="slide-item"><span>欧冠</span></div>\
                <div class="slide-item"><span>亚冠</span></div>\
                <div class="slide-item"><span>意甲</span></div>\
                <div class="slide-item"><span>英超</span></div>\
            </div>\
        </div>\
        ')
})()