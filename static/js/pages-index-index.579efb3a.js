(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{1881:function(t,e,i){var r=i("b7b1");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("26763d5d",r,!0,{sourceMap:!1,shadowMode:!1})},"1da1":function(t,e,i){"use strict";function r(t,e,i,r,n,o,a){try{var s=t[o](a),c=s.value}catch(f){return void i(f)}s.done?e(c):Promise.resolve(c).then(r,n)}function n(t){return function(){var e=this,i=arguments;return new Promise((function(n,o){var a=t.apply(e,i);function s(t){r(a,n,o,s,c,"next",t)}function c(t){r(a,n,o,s,c,"throw",t)}s(void 0)}))}}i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},"4b5e":function(t,e,i){"use strict";i.r(e);var r=i("c9d3"),n=i.n(r);for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);e["default"]=n.a},"77df":function(t,e,i){"use strict";i.r(e);var r=i("a3cd"),n=i("4b5e");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("f32f");var a,s=i("f0c5"),c=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"1720f1f6",null,!1,r["a"],a);e["default"]=c.exports},"96cf":function(t,e){!function(e){"use strict";var i,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",f="object"===typeof t,l=e.regeneratorRuntime;if(l)f&&(t.exports=l);else{l=e.regeneratorRuntime=f?t.exports:{},l.wrap=x;var u="suspendedStart",d="suspendedYield",h="executing",g="completed",p={},v={};v[a]=function(){return this};var m=Object.getPrototypeOf,w=m&&m(m(M([])));w&&w!==r&&n.call(w,a)&&(v=w);var y=C.prototype=k.prototype=Object.create(v);A.prototype=y.constructor=C,C.constructor=A,C[c]=A.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===A||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(y),t},l.awrap=function(t){return{__await:t}},E(L.prototype),L.prototype[s]=function(){return this},l.AsyncIterator=L,l.async=function(t,e,i,r){var n=new L(x(t,e,i,r));return l.isGeneratorFunction(e)?n:n.next().then((function(t){return t.done?t.value:n.next()}))},E(y),y[c]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){while(e.length){var r=e.pop();if(r in t)return i.value=r,i.done=!1,i}return i.done=!0,i}},l.values=M,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=i)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return s.type="throw",s.arg=t,e.next=r,n&&(e.method="next",e.arg=i),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),N(i),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var r=i.completion;if("throw"===r.type){var n=r.arg;N(i)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:M(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=i),p}}}function x(t,e,i,r){var n=e&&e.prototype instanceof k?e:k,o=Object.create(n.prototype),a=new R(r||[]);return o._invoke=I(t,i,a),o}function b(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(r){return{type:"throw",arg:r}}}function k(){}function A(){}function C(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){function e(i,r,o,a){var s=b(t[i],t,r);if("throw"!==s.type){var c=s.arg,f=c.value;return f&&"object"===typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(f).then((function(t){c.value=t,o(c)}),(function(t){return e("throw",t,o,a)}))}a(s.arg)}var i;function r(t,r){function n(){return new Promise((function(i,n){e(t,r,i,n)}))}return i=i?i.then(n,n):n()}this._invoke=r}function I(t,e,i){var r=u;return function(n,o){if(r===h)throw new Error("Generator is already running");if(r===g){if("throw"===n)throw o;return Q()}i.method=n,i.arg=o;while(1){var a=i.delegate;if(a){var s=j(a,i);if(s){if(s===p)continue;return s}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(r===u)throw r=g,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);r=h;var c=b(t,e,i);if("normal"===c.type){if(r=i.done?g:d,c.arg===p)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(r=g,i.method="throw",i.arg=c.arg)}}}function j(t,e){var r=t.iterator[e.method];if(r===i){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=i,j(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=b(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=i),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function B(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(B,this),this.reset(!0)}function M(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=i,e.done=!0,e};return o.next=o}}return{next:Q}}function Q(){return{value:i,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a3cd:function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return r}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"carousel-section"},[i("v-uni-view",{staticClass:"titleNview-placing"}),i("v-uni-view",{staticClass:"titleNview-background",style:{backgroundColor:t.titleNViewBackground}}),i("v-uni-swiper",{staticClass:"carousel",attrs:{circular:!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},t._l(t.carouselList,(function(e,r){return i("v-uni-swiper-item",{key:r,staticClass:"carousel-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage({title:"轮播广告"})}}},[i("v-uni-image",{attrs:{src:e.src}})],1)})),1),i("v-uni-view",{staticClass:"swiper-dots"},[i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.swiperCurrent+1))]),i("v-uni-text",{staticClass:"sign"},[t._v("/")]),i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.swiperLength))])],1)],1),i("v-uni-view",{staticClass:"hot-floor"},[i("v-uni-view",{staticClass:"floor-img-box"},[i("v-uni-image",{staticClass:"floor-img",attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553409794730&di=12b840ec4f5748ef06880b85ff63e34e&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01dc03589ed568a8012060c82ac03c.jpg%40900w_1l_2o_100sh.jpg",mode:"scaleToFill"}})],1),i("v-uni-scroll-view",{staticClass:"floor-list",attrs:{"scroll-x":!0}},[i("v-uni-view",{staticClass:"scoll-wrapper"},[t._l(t.goodsList,(function(e,r){return i("v-uni-view",{key:r,staticClass:"floor-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage(e)}}},[i("v-uni-image",{attrs:{src:e.image2,mode:"aspectFill"}}),i("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(e.title))]),i("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(e.price))])],1)})),i("v-uni-view",{staticClass:"more"},[i("v-uni-text",[t._v("查看全部")]),i("v-uni-text",[t._v("More+")])],1)],2)],1)],1),i("v-uni-view",{staticClass:"f-header m-t"},[i("v-uni-image",{attrs:{src:"/static/temp/h1.png"}}),i("v-uni-view",{staticClass:"tit-box"},[i("v-uni-text",{staticClass:"tit"},[t._v("主打产品")]),i("v-uni-text",{staticClass:"tit2"},[t._v("Guess You Like It")])],1),i("v-uni-text",{staticClass:"yticon icon-you"})],1),i("v-uni-view",{staticClass:"guess-section"},t._l(t.goodsList,(function(e,r){return i("v-uni-view",{key:r,staticClass:"guess-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage(e)}}},[i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{attrs:{src:e.image,mode:"aspectFill"}})],1),i("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(e.title))]),i("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(e.price))])],1)})),1)],1)},o=[]},b7b1:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-1720f1f6]{background:#f5f5f5}.m-t[data-v-1720f1f6]{margin-top:%?16?%}\n/* 头部 轮播图 */.carousel-section[data-v-1720f1f6]{position:relative;padding-top:10px}.carousel-section .titleNview-placing[data-v-1720f1f6]{height:0;padding-top:44px;box-sizing:initial}.carousel-section .titleNview-background[data-v-1720f1f6]{position:absolute;top:0;left:0;width:100%;height:%?426?%;transition:.4s}.carousel[data-v-1720f1f6]{width:100%;height:%?350?%}.carousel .carousel-item[data-v-1720f1f6]{width:100%;height:100%;padding:0 %?28?%;overflow:hidden}.carousel uni-image[data-v-1720f1f6]{width:100%;height:100%;border-radius:%?10?%}.swiper-dots[data-v-1720f1f6]{display:flex;position:absolute;left:%?60?%;bottom:%?15?%;width:%?72?%;height:%?36?%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);background-size:100% 100%}.swiper-dots .num[data-v-1720f1f6]{width:%?36?%;height:%?36?%;border-radius:50px;font-size:%?24?%;color:#fff;text-align:center;line-height:%?36?%}.swiper-dots .sign[data-v-1720f1f6]{position:absolute;top:0;left:50%;line-height:%?36?%;font-size:%?12?%;color:#fff;-webkit-transform:translateX(-50%);transform:translateX(-50%)}\n/* 分类 */.cate-section[data-v-1720f1f6]{display:flex;justify-content:space-around;align-items:center;flex-wrap:wrap;padding:%?30?% %?22?%;background:#fff\n  /* 原图标颜色太深,不想改图了,所以加了透明度 */}.cate-section .cate-item[data-v-1720f1f6]{display:flex;flex-direction:column;align-items:center;font-size:%?26?%;color:#303133}.cate-section uni-image[data-v-1720f1f6]{width:%?88?%;height:%?88?%;margin-bottom:%?14?%;border-radius:50%;opacity:.7;box-shadow:%?4?% %?4?% %?20?% rgba(250,67,106,.3)}.ad-1[data-v-1720f1f6]{width:100%;height:%?210?%;padding:%?10?% 0;background:#fff}.ad-1 uni-image[data-v-1720f1f6]{width:100%;height:100%}\n/* 秒杀专区 */.seckill-section[data-v-1720f1f6]{padding:%?4?% %?30?% %?24?%;background:#fff}.seckill-section .s-header[data-v-1720f1f6]{display:flex;align-items:center;height:%?92?%;line-height:1}.seckill-section .s-header .s-img[data-v-1720f1f6]{width:%?140?%;height:%?30?%}.seckill-section .s-header .tip[data-v-1720f1f6]{font-size:%?28?%;color:#909399;margin:0 %?20?% 0 %?40?%}.seckill-section .s-header .timer[data-v-1720f1f6]{display:inline-block;width:%?40?%;height:%?36?%;text-align:center;line-height:%?36?%;margin-right:%?14?%;font-size:%?26?%;color:#fff;border-radius:2px;background:rgba(0,0,0,.8)}.seckill-section .s-header .icon-you[data-v-1720f1f6]{font-size:%?32?%;color:#909399;flex:1;text-align:right}.seckill-section .floor-list[data-v-1720f1f6]{white-space:nowrap}.seckill-section .scoll-wrapper[data-v-1720f1f6]{display:flex;align-items:flex-start}.seckill-section .floor-item[data-v-1720f1f6]{width:%?150?%;margin-right:%?20?%;font-size:%?26?%;color:#303133;line-height:1.8}.seckill-section .floor-item uni-image[data-v-1720f1f6]{width:%?150?%;height:%?150?%;border-radius:%?6?%}.seckill-section .floor-item .price[data-v-1720f1f6]{color:#fa436a}.f-header[data-v-1720f1f6]{display:flex;align-items:center;height:%?140?%;padding:%?6?% %?30?% %?8?%;background:#fff}.f-header uni-image[data-v-1720f1f6]{flex-shrink:0;width:%?80?%;height:%?80?%;margin-right:%?20?%}.f-header .tit-box[data-v-1720f1f6]{flex:1;display:flex;flex-direction:column}.f-header .tit[data-v-1720f1f6]{font-size:%?34?%;color:#font-color-dark;line-height:1.3}.f-header .tit2[data-v-1720f1f6]{font-size:%?24?%;color:#909399}.f-header .icon-you[data-v-1720f1f6]{font-size:%?34?%;color:#909399}\n/* 团购楼层 */.group-section[data-v-1720f1f6]{background:#fff}.group-section .g-swiper[data-v-1720f1f6]{height:%?650?%;padding-bottom:%?30?%}.group-section .g-swiper-item[data-v-1720f1f6]{width:100%;padding:0 %?30?%;display:flex}.group-section uni-image[data-v-1720f1f6]{width:100%;height:%?460?%;border-radius:4px}.group-section .g-item[data-v-1720f1f6]{display:flex;flex-direction:column;overflow:hidden}.group-section .left[data-v-1720f1f6]{flex:1.2;margin-right:%?24?%}.group-section .left .t-box[data-v-1720f1f6]{padding-top:%?20?%}.group-section .right[data-v-1720f1f6]{flex:0.8;flex-direction:column-reverse}.group-section .right .t-box[data-v-1720f1f6]{padding-bottom:%?20?%}.group-section .t-box[data-v-1720f1f6]{height:%?160?%;font-size:%?30?%;color:#303133;line-height:1.6}.group-section .price[data-v-1720f1f6]{color:#fa436a}.group-section .m-price[data-v-1720f1f6]{font-size:%?26?%;text-decoration:line-through;color:#909399;margin-left:%?8?%}.group-section .pro-box[data-v-1720f1f6]{display:flex;align-items:center;margin-top:%?10?%;font-size:%?24?%;color:%?28?%;padding-right:%?10?%}.group-section .progress-box[data-v-1720f1f6]{flex:1;border-radius:10px;overflow:hidden;margin-right:%?8?%}\n/* 分类推荐楼层 */.hot-floor[data-v-1720f1f6]{width:100%;overflow:hidden;margin-bottom:%?20?%}.hot-floor .floor-img-box[data-v-1720f1f6]{width:100%;height:%?180?%;position:relative}.hot-floor .floor-img-box[data-v-1720f1f6]:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(hsla(0,0%,100%,.06) 30%,#f8f8f8)}.hot-floor .floor-img[data-v-1720f1f6]{width:100%;height:100%}.hot-floor .floor-list[data-v-1720f1f6]{white-space:nowrap;padding:%?20?%;padding-right:%?50?%;border-radius:%?6?%;margin-top:%?-140?%;margin-left:%?30?%;background:#fff;box-shadow:1px 1px 5px rgba(0,0,0,.2);position:relative;z-index:1}.hot-floor .scoll-wrapper[data-v-1720f1f6]{display:flex;align-items:flex-start}.hot-floor .floor-item[data-v-1720f1f6]{width:%?180?%;margin-right:%?20?%;font-size:%?26?%;color:#303133;line-height:1.8}.hot-floor .floor-item uni-image[data-v-1720f1f6]{width:%?180?%;height:%?180?%;border-radius:%?6?%}.hot-floor .floor-item .price[data-v-1720f1f6]{color:#fa436a}.hot-floor .more[data-v-1720f1f6]{display:flex;align-items:center;justify-content:center;flex-direction:column;flex-shrink:0;width:%?180?%;height:%?180?%;border-radius:%?6?%;background:#f3f3f3;font-size:%?28?%;color:#909399}.hot-floor .more uni-text[data-v-1720f1f6]:first-child{margin-bottom:%?4?%}\n/* 猜你喜欢 */.guess-section[data-v-1720f1f6]{display:flex;flex-wrap:wrap;padding:0 %?30?%;background:#fff}.guess-section .guess-item[data-v-1720f1f6]{display:flex;flex-direction:column;width:48%;padding-bottom:%?40?%}.guess-section .guess-item[data-v-1720f1f6]:nth-child(2n+1){margin-right:4%}.guess-section .image-wrapper[data-v-1720f1f6]{width:100%;height:%?330?%;border-radius:3px;overflow:hidden}.guess-section .image-wrapper uni-image[data-v-1720f1f6]{width:100%;height:100%;opacity:1}.guess-section .title[data-v-1720f1f6]{font-size:%?32?%;color:#303133;line-height:%?80?%}.guess-section .price[data-v-1720f1f6]{font-size:%?32?%;color:#fa436a;line-height:1}body.?%PAGE?%[data-v-1720f1f6]{background:#f5f5f5}',""]),t.exports=e},c9d3:function(t,e,i){"use strict";var r=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=r(i("1da1")),o={data:function(){return{titleNViewBackground:"",swiperCurrent:0,swiperLength:0,carouselList:[],goodsList:[]}},onLoad:function(){this.loadData()},methods:{loadData:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.json("carouselList");case 2:return i=e.sent,t.titleNViewBackground=i[0].background,t.swiperLength=i.length,t.carouselList=i,e.next=8,t.$api.json("goodsList");case 8:r=e.sent,t.goodsList=r||[];case 10:case"end":return e.stop()}}),e)})))()},swiperChange:function(t){var e=t.detail.current;this.swiperCurrent=e,this.titleNViewBackground=this.carouselList[e].background},navToDetailPage:function(t){var e=t.title;uni.navigateTo({url:"/pages/product/product?id=".concat(e)})}},onNavigationBarSearchInputClicked:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$api.msg("点击了搜索框");case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onNavigationBarButtonTap:function(t){var e=t.index;0===e?this.$api.msg("点击了扫描"):1===e&&uni.navigateTo({url:"/pages/notice/notice"})}};e.default=o},f32f:function(t,e,i){"use strict";var r=i("1881"),n=i.n(r);n.a}}]);