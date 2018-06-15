(function(window, undefined) {

    var utils = $namespace("utlis");

    utils.isCardNo = function(card) {
        // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (reg.test(card) === false) {
            return false;
        } else {
            return true;
        }
    };

    // 手机号码的验证 
    utils.isMobile = function(mobile) {
        if (!(/^1[0-9]{10}$/.test(mobile))) {
            return false;
        } else {
            return true;
        }
    };

    // 判断是否为数字 
    utils.isNumber = function(num) {
        return /^[0-9]*$/.test(num)
    }
    // light.utils.test = function(){
    //     alert('lee')
    // }
})(window);
