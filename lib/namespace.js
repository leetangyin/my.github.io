;(function(window,undefined){
	"use strict";
	var _pageckageName = "light";
	window.$namespace = function(libName,returnObj){
		if(!window[_pageckageName]){
			window[_pageckageName] = {};
		}
		var obj = window[_pageckageName];
		// console.dir(obj);
		if(obj[libName]){
			console.error("命名空间"+_pageckageName+"已经存在"+libName+",请使用其他名字");
			return;
		}
		obj[libName] = returnObj || {};
		return obj[libName];
    };
})(window);