(function(window, undefined) {

    var http = $namespace("http");
    /*
        提交数据到服务器
    */

    //  POST形式请求
   function myPost(url, params, succFn, failFn) {
    $.post(url, params||{}, function(data) {
            if(data){
            if (data.success === true) {
                if (succFn) succFn(data);
            } else {
                if (failFn) failFn(data);
            }
        }else{
                console.warn(url+"->server data return null"  + '请求错误');
        }
        }, "json");
    }
    //  GET形式请求
    function myGet(url, params, succFn, failFn) {
        $.get(url, params||{}, function(data) {
            if(data){
               if (data.success === true) {
                   if (succFn) succFn(data);
               } else {
                   if (failFn) failFn(data);
               }
           }else{
                console.warn(url+"->server data return null" + '请求错误');
           }
        }, "json");
    };
    //暴露myPost,myGet两个方法
    http.post = myPost;
    http.get = myGet;

})(window)
