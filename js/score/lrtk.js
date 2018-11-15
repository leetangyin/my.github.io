var isupdate = true;
$(document).ready(function(){
    var stepW = 24;
    var description = new Array("(1分)", "(2分)", "(3分)", "(4分)", "(5分)", "(6分)", "(7分)", "(8分)", "(9分)", "(10分)");
    var stars = $("#star > li");
    var descriptionTemp;
    $("#showb").css("width",0);
    stars.each(function(i){
        $(stars[i]).click(function (e) {
            //alert(isupdate);
            if (isupdate=="false") {
                return;
            }
            var n = i + 1;
            //alert(n);
            $("#showb").css({"width":stepW*n});
            descriptionTemp = description[i];
            $(this).find('a').blur();
            return stopDefault(e);
            return descriptionTemp;
        });
    });
    stars.each(function(i){
        $(stars[i]).hover(
            function () {
                if (isupdate == "false") {
                    return;
                }
                $(".description").text(description[i]);
            },
            function () {
                if (isupdate == "false") {
                    return;
                }
                if(descriptionTemp != null)
                    $(".description").text(descriptionTemp);
                else 
                    $(".description").text(" ");
            }
        );
    });
});
//function stopDefault(e){
//    if(e && e.preventDefault)
//           e.preventDefault();
//    else
//           window.event.returnValue = false;
//    return false;
//};

function selected(i) {
    //stars.each(function (i) {
    //    $(stars[i]).hover(
    //        function () {
    //            $(".description").text(description[i]);
    //        },
    //        function () {
    //            if (descriptionTemp != null)
    //                $(".description").text(descriptionTemp);
    //            else
    //                $(".description").text(" ");
    //        }
    //    );
    //});
}