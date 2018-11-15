function selectmenu(i) {
    if (i != undefined && i != "") {
        //$("#" + id + " > p.footer_title").addClass("selected");
        $("#m" + i + " p:nth-child(2)").addClass("selected");
        $("#m" + i + " p:nth-child(1) img").attr("src", "/mobile/images/footer_" + i + "_selected.png");
    }
}
function tooter_menu_slide(obj) {
    $("#footer-main-nav > li > ul").not($(obj).parent().find("ul")).hide();
    $(obj).parent().find("ul").slideToggle(200);
}

var header_html = '<div class="footer-menu"><ul id="footer-main-nav">' +
    '<li id="m1"><a href="/html/index.html">' +
    '    <p class="footer_img"><img src="../img/footer_1_.png" style="height:94%;"/></p>' +
    '    <p class="footer_title">首页</p>' +
    '</a></li>' +
    '<li id="m2"><a href="/html/category_list.html">' +
    '    <p class="footer_img"><img src="../img/footer_2_.png" style="height:94%;"/></p>' +
    '    <p class="footer_title">分类</p>' +
    '</a></li>' +
    '<li id="m3"><a href="/mall/html/my_collect.aspx">' +
    '    <p class="footer_img"><img src="../img/footer_3_.png" style="height:92%;"/></p>' +
    '    <p class="footer_title">美食学堂</p>' +
    '</a></li>' +
    '<li id="m4"><a href="/mall/html/shopping_cart.aspx" style="position:relative;">' +
    '    <p class="footer_img"><img src="../img/footer_4_.png"/></p>' +
    '    <p class="footer_title">购物车</p>' +
    '    <div class="red_tips" id="cart_count" style="position: absolute;top:0;left: 50%;z-index: 1;">0</div>'+
    '</a></li>' +
    '<li id="m5"><a href="/mall/html/user/index.aspx">' +
    '    <p class="footer_img"><img src="../img/footer_5_.png"/></p>' +
    '    <p class="footer_title">我的</p>' +
    '</a></li>' +
    '</ul></div>';
document.write(header_html);
