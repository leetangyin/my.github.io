(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-category-category"],{"0edb":function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-5889d969],\n.content[data-v-5889d969]{height:100%;background-color:#f8f8f8}.content[data-v-5889d969]{display:flex}.left-aside[data-v-5889d969]{flex-shrink:0;width:%?200?%;height:100%;background-color:#fff}.f-item[data-v-5889d969]{display:flex;align-items:center;justify-content:center;width:100%;height:%?100?%;font-size:%?28?%;color:#606266;position:relative}.f-item.active[data-v-5889d969]{color:#fa436a;background:#f8f8f8}.f-item.active[data-v-5889d969]:before{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:%?36?%;width:%?8?%;background-color:#fa436a;border-radius:0 4px 4px 0;opacity:.8}.right-aside[data-v-5889d969]{flex:1;overflow:hidden;padding-left:%?20?%}.s-item[data-v-5889d969]{display:flex;align-items:center;height:%?70?%;padding-top:%?8?%;font-size:%?28?%;color:#303133}.t-list[data-v-5889d969]{display:flex;flex-wrap:wrap;width:100%;background:#fff;padding-top:%?12?%}.t-list[data-v-5889d969]:after{content:"";flex:99;height:0}.t-item[data-v-5889d969]{flex-shrink:0;display:flex;justify-content:center;align-items:center;flex-direction:column;width:%?176?%;font-size:%?26?%;color:#666;padding-bottom:%?20?%}.t-item uni-image[data-v-5889d969]{width:%?140?%;height:%?140?%}body.?%PAGE?%[data-v-5889d969]{background-color:#f8f8f8}',""]),t.exports=e},"118a":function(t,e,r){var n=r("0edb");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=r("4f06").default;i("4cc17098",n,!0,{sourceMap:!1,shadowMode:!1})},"1da1":function(t,e,r){"use strict";function n(t,e,r,n,i,o,a){try{var c=t[o](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function c(t){n(a,i,o,c,s,"next",t)}function s(t){n(a,i,o,c,s,"throw",t)}c(void 0)}))}}r("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"4afc":function(t,e,r){"use strict";r.r(e);var n=r("63e9"),i=r("f92e");for(var o in i)"default"!==o&&function(t){r.d(e,t,(function(){return i[t]}))}(o);r("e14b");var a,c=r("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"5889d969",null,!1,n["a"],a);e["default"]=s.exports},"4c87":function(t,e,r){"use strict";var n=r("4ea4");r("99af"),r("4de4"),r("c740"),r("4160"),r("26e9"),r("ac1f"),r("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var i=n(r("1da1")),o={data:function(){return{sizeCalcState:!1,tabScrollTop:0,currentId:1,flist:[],slist:[],tlist:[]}},onLoad:function(){this.loadData()},methods:{loadData:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.json("cateList");case 2:r=e.sent,r.forEach((function(e){e.pid?e.picture?t.tlist.push(e):t.slist.push(e):t.flist.push(e)}));case 4:case"end":return e.stop()}}),e)})))()},tabtap:function(t){this.sizeCalcState||this.calcSize(),this.currentId=t.id;var e=this.slist.findIndex((function(e){return e.pid===t.id}));this.tabScrollTop=this.slist[e].top},asideScroll:function(t){this.sizeCalcState||this.calcSize();var e=t.detail.scrollTop,r=this.slist.filter((function(t){return t.top<=e})).reverse();r.length>0&&(this.currentId=r[0].pid)},calcSize:function(){var t=0;this.slist.forEach((function(e){var r=uni.createSelectorQuery().select("#main-"+e.id);r.fields({size:!0},(function(r){e.top=t,t+=r.height,e.bottom=t})).exec()})),this.sizeCalcState=!0},navToList:function(t,e){uni.navigateTo({url:"/pages/product/list?fid=".concat(this.currentId,"&sid=").concat(t,"&tid=").concat(e)})}}};e.default=o},"63e9":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"content"},[r("v-uni-scroll-view",{staticClass:"left-aside",attrs:{"scroll-y":!0}},t._l(t.flist,(function(e){return r("v-uni-view",{key:e.id,staticClass:"f-item b-b",class:{active:e.id===t.currentId},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.tabtap(e)}}},[t._v(t._s(e.name))])})),1),r("v-uni-scroll-view",{staticClass:"right-aside",attrs:{"scroll-with-animation":!0,"scroll-y":!0,"scroll-top":t.tabScrollTop},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.asideScroll.apply(void 0,arguments)}}},t._l(t.slist,(function(e){return r("v-uni-view",{key:e.id,staticClass:"s-list",attrs:{id:"main-"+e.id}},[r("v-uni-text",{staticClass:"s-item"},[t._v(t._s(e.name))]),r("v-uni-view",{staticClass:"t-list"},t._l(t.tlist,(function(n){return n.pid===e.id?r("v-uni-view",{key:n.id,staticClass:"t-item",on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.navToList(e.id,n.id)}}},[r("v-uni-image",{attrs:{src:n.picture}}),r("v-uni-text",[t._v(t._s(n.name))])],1):t._e()})),1)],1)})),1)],1)},o=[]},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,i=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=b;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={},y={};y[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(z([])));m&&m!==n&&i.call(m,a)&&(y=m);var w=E.prototype=L.prototype=Object.create(y);_.prototype=w.constructor=E,E.constructor=_,E[s]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},k(S.prototype),S.prototype[c]=function(){return this},l.AsyncIterator=S,l.async=function(t,e,r,n){var i=new S(b(t,e,r,n));return l.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(w),w[s]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=z,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return c.type="throw",c.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;C(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:z(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function b(t,e,r,n){var i=e&&e.prototype instanceof L?e:L,o=Object.create(i.prototype),a=new P(n||[]);return o._invoke=j(t,r,a),o}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function L(){}function _(){}function E(){}function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function S(t){function e(r,n,o,a){var c=x(t[r],t,n);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(u).then((function(t){s.value=t,o(s)}),(function(t){return e("throw",t,o,a)}))}a(c.arg)}var r;function n(t,n){function i(){return new Promise((function(r,i){e(t,n,r,i)}))}return r=r?r.then(i,i):i()}this._invoke=n}function j(t,e,r){var n=f;return function(i,o){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return G()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=x(t,e,r);if("normal"===s.type){if(n=r.done?p:h,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=x(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function z(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){while(++n<t.length)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:G}}function G(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},e14b:function(t,e,r){"use strict";var n=r("118a"),i=r.n(n);i.a},f92e:function(t,e,r){"use strict";r.r(e);var n=r("4c87"),i=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a}}]);