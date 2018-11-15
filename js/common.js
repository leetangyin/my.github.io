function get_cart_count(conid) {
    var ajaxdata = { ac: "get_count" };
    $.ajax({
        type: "post",
        url: "/mobile/shopping_cart.aspx",
        //dataType: "json",
        data: ajaxdata,
        beforeSend: function () {
        },
        success: function (result) {
            var count = parseInt(result);
            if (count > 0) {
                $("#" + conid).html(result);
                $("#" + conid).show();
            } else {
                $("#" + conid).hide();
            }
        },
        error: function () {
            //alert('err');
        },
        complete: function () { }
    });
}

function bind_wrap_num(cid, add_num) {
    var curr = $("#" + cid).val();
    var num = parseInt(curr == "" || curr == undefined || curr == null ? "0" : curr);
    num = num + add_num;
    if (num <= 0) {
        num = 0;
    }
    $("#" + cid).val(num);
}




////////////////////////////////////////购物车
function bind_row_num_ui(cid) {
    //alert($("#" + cid).parent().find(".update_num_l").html());
    var curr = $("#" + cid).html();
    var num = parseInt(curr == "" || curr == undefined || curr == null ? "0" : curr);

    if (num > 0) {
        $("#" + cid).parent().find(".update_num_l").show();
    } else {
        $("#" + cid).parent().find(".update_num_l").hide();
        $("#" + cid).html("");
    }
    //$("#" + cid).val(num);
}
var lastTimeId = 0;
function addtocart(id, add, callback) {
    if (id <= 0) {
        pop_alert("id错误");
        return false;
    }
    var curr = $("#num_" + id).html();
    var num = parseInt(curr == "" || curr == undefined || curr == null ? "0" : curr);
    //if (num == 1 && add == -1)
    //    return false;
    var new_num = num + add;
    if (new_num < 0) {
        //new_num = 0;
        return false;
    }
    //价格策略
    if (lastTimeId != id) {
        $("#priceMethod_" + lastTimeId).css("display", "none");
        lastTimeId = id;
        $("#priceMethod_" + id).css("display", "block");
    } else {
        $("#priceMethod_" + id).css("display", "block");
    }
    
    var ajaxdata = { ac: "addcart", id: id, num: add };
    $.ajax({
        type: "post",
        url: "/mobile/shopping_cart.aspx",
        dataType: "json",
        data: ajaxdata,
        beforeSend: function () {
        },
        success: function (result) {
            if (result.code > 0) {
                $("#num_" + id).html(new_num);
                get_cart_count("cart_count");
                bind_row_num_ui("num_" + id);
            } else if (result.code == -1) {
                location.href = "/mobile/user/login.aspx";
            } else {
                pop_alert(result.message);
            }
            
            if (typeof callback == "function") {
                fn()
            }
        },
        error: function () {
        },
        complete: function () { RemoveLoadDialog(); }
    });
}


//购物车部分
function get_cart_list() {
    $.ajax({
        url: "../shopping_cart.aspx",
        type: "post",
        dataType: "json",
        data: { ac: "get_cart_list" },
        beforeSend: function () {
        },
        success: function (data) {
            //alert(data);
            add_cart_row(data);

        },
        error: function (m, s, g) {

        },
        complete: function () { RemoveLoadDialog(); }
    });
}
function add_cart_row(jsons) {
    var json = jsons.data;
    if (json.length > 0) {
        for (var i = 0; i < json.length; i++) {
            $("#num_" + json[i].id).html(json[i].num);
            bind_row_num_ui("num_" + json[i].id);
        }
    }
}
console.log('lee')