function back(url) {
    if (url != "") {
        if (url == undefined)
        { $("#a_header_left").attr("onclick", "history.go(-1);"); }
        else
            $("#a_header_left").attr("href", url);
        $("#a_header_left").removeClass("m-header-left");
        $("#a_header_left").addClass("m-header-back");
    }
    else {
        $("#a_header_left").removeClass("m-header-back");
        $("#a_header_left").addClass("m-header-left");
    }
}
function settitle(title) {

    if (title != "" && title != undefined) {
        $(".m-header-title").html(title);
    }
}

function header_right(html) {

    if (html != "" && html != undefined) {
        $(".m-header-right").html(html);
    }
}
var header_html = '<div class="header" id="header">' +
    '    <a id="a_header_left" class="m-header-left"></a>' +
    '    <h1 class="m-header-title"></h1>' +
    '    <p class="m-header-right"></p>' +
    '</div>';
document.write(header_html);

