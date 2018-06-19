//返回上一级事件
function goBackClick(){
    window.history.go(-1);
}
//忘记密码返回上层
function goLoginClick(){
    $('#loginpage').show()
    $('#forgetpage').hide()
    $('#login_t').hide()
    $('#forgetpage_t').hide()
}
//忘记密码第而步返回
function goToForgetTClick(){
    $('#login_t').hide()
    $('#loginpage').hide()
    $('#forgetpage').hide()
    $('#forgetpage_t').show()
}
//忘记密码
function gotoForgetClick(){
    $('#login_t').hide()
    $('#loginpage').hide()
    $('#forgetpage').show()
    $('#forgetpage_t').hide()   
}
//返回登录
function onGogoLogiinClick(){
    $('#login_t').hide()
    $('#loginpage').show()
    $('#forgetpage').hide()
    $('#forgetpage_t').hide()  
}

function gotoLoginYClick(){
    $('#login_t').show()
    $('#loginpage').hide()
    $('#forgetpage').hide()
    $('#forgetpage_t').hide()  
}