(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b61b5992"],{"0054":function(e,t,a){},"013f":function(e,t,a){var i=a("4ce5"),o=a("224c"),l=a("008a"),n=a("eafa"),r=a("5dd2");e.exports=function(e,t){var a=1==e,s=2==e,c=3==e,d=4==e,p=6==e,m=5==e||p,u=t||r;return function(t,r,f){for(var g,y,v=l(t),h=o(v),b=i(r,f,3),C=n(h.length),k=0,D=a?u(t,C):s?u(t,0):void 0;C>k;k++)if((m||k in h)&&(g=h[k],y=b(g,k,v),e))if(a)D[k]=y;else if(y)switch(e){case 3:return!0;case 5:return g;case 6:return k;case 2:D.push(g)}else if(d)return!1;return p?-1:c||d?d:D}}},"1c34":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"DeptSelect"}},[a("el-dialog",{attrs:{title:e.titel,visible:e.dialogDeptVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogDeptVisible=t}}},[a("div",{staticClass:"bp-alert bp-alert-info",attrs:{id:"alert"}},[a("strong",[e._v("提示：")]),e._v("双击选中或取消\n    ")]),e._v(" "),a("table",{attrs:{id:"tab"}},[a("tr",[a("td",[e._v("部门列表：")]),e._v(" "),a("td",{staticStyle:{width:"80px","text-align":"center"},attrs:{rowspan:"2"}},[a("div",[a("el-button",{attrs:{type:"primary",title:"添加全部",size:"small",id:"addAll",icon:"el-icon-d-arrow-right"},on:{click:function(t){return e.addAllDept()}}})],1),e._v(" "),a("div",[a("el-button",{attrs:{type:"primary",title:"移除选中项",size:"small",icon:" el-icon-arrow-left"},on:{click:function(t){return e.removeFirstDept()}}})],1),e._v(" "),a("div",[a("el-button",{attrs:{type:"primary",title:"移除全部",size:"small",icon:"el-icon-d-arrow-right"},on:{click:function(t){return e.removeAllDept()}}})],1)]),e._v(" "),a("td",[a("span",[e._v("已选部门："+e._s(e.selectCount))])])]),e._v(" "),a("tr",[a("td",{attrs:{id:"tdTree"}},[a("div",{staticClass:"menuContent bp-borderColor",attrs:{id:"menuContent"}},[a("el-tree",{ref:"tree",staticClass:"ztree",staticStyle:{"font-size":"14px"},attrs:{"check-strictly":"",data:e.treeData,"default-checked-keys":e.keys,"node-key":"id","show-checkbox":"",props:e.defaultProps},on:{"check-change":e.handleCheckChange},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.node,o=t.data;return a("span",{staticClass:"custom-tree-node"},[a("span",{staticClass:"node",on:{dblclick:function(t){return e.dblclickNode(i,o)}}},[e._v(e._s(i.label))])])}}])})],1)]),e._v(" "),a("td",[a("select",{attrs:{id:"selected",name:"selected",multiple:"multiple"},on:{dblclick:function(t){return e.removeFirstDept()}}},e._l(e.selectData,(function(t){return a("option",{key:t.deptId,attrs:{"data-value":t},domProps:{value:t.deptId}},[e._v("\n              "+e._s(t.deptName)+"\n            ")])})),0)])])]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogDeptVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.addDeptClick}},[e._v("确 定")])],1)])],1)},o=[],l=(a("e697"),a("6d57"),a("52c1"),a("b775")),n=a("7c15"),r=(a("6c8d"),a("a336")),s=a.n(r),c={name:"DeptSelect",watch:{dialogDeptVisible:function(e){var t=this;e?t.$nextTick((function(){var e=s()(window).height()-70;s()("#DeptSelect .el-dialog").css("width","640px"),s()("#DeptSelect .el-dialog").css("margin-top","60px"),s()("#DeptSelect .el-dialog").css("max-height",e-10+"px"),s()("#DeptSelect .el-dialog").css("overflow","hidden"),s()("#DeptSelect .el-dialog__body").css("overflow-y","auto")})):(t.selectData=[],t.keys=[],t.deptNos="")}},data:function(){return{isMultiple:"",dialogDeptVisible:!1,selectCount:0,selectData:[],keys:[],deptNos:"",defaultProps:{children:"children",label:"name",id:"id"},titel:"部门选择",treeData:[]}},mounted:function(){},methods:{addDeptClick:function(){var e=this;e.$emit("addDeptClick",e.selectData)},handleCheckChange:function(e,t,a){var i=this;if("0"==i.isMultiple)t&&(i.selectData=[],i.keys=[],i.selectCount=1,i.keys.push(e.id),i.selectData.push(e.attribute),i.$refs.tree.setCheckedKeys(i.keys));else{i.selectData=[],i.keys=[];var o=i.$refs.tree.getCheckedNodes();if(i.selectCount=o.length,o.length>0)for(var l in o)i.selectData.push(o[l].attribute),i.keys.push(o[l].id)}},dblclickNode:function(e,t){var a=this;"0"==a.isMultiple&&(a.selectData=[],a.keys=[],a.selectCount=0,a.selectData.push(t.attribute),a.keys.push(e.id),a.addDeptClick())},handleNodeClick:function(e){},addAllDept:function(){var e=this;if("0"==e.isMultiple)e.$message({type:"info",message:"只能选择一个部门"});else{var t=e.$refs.tree.store._getAllNodes();if(e.selectData=[],e.keys=[],e.selectCount=t.length,t.length>0)for(var a in t)e.selectData.push(t[a].data.attribute),e.keys.push(t[a].data.id)}},removeAllDept:function(){var e=this;e.keys=[],e.selectData=[],e.selectCount=0,e.$refs.tree.setCheckedKeys(e.keys)},removeFirstDept:function(){var e=this,t=s()("#selected").find("option:selected");for(var a in e.selectData){var i=e.selectData[a];i.deptId==t.val()&&e.selectData.splice(s.a.inArray(i,e.selectData),1)}e.keys.splice(s.a.inArray(t.val(),e.keys),1),e.$refs.tree.setCheckedKeys(e.keys),e.selectCount=e.selectData.length},initAllDept:function(){var e=this;Object(l["a"])({url:n["a"].getAllDepartmentInfos,method:"get",params:{}}).then((function(t){e.treeData=t.result}))},initDept:function(){var e=this;e.initAllDept(),""!=e.deptNos&&Object(l["a"])({url:n["a"].getDepartmentInfos,method:"get",params:{depNos:e.deptNos}}).then((function(t){for(var a in e.selectData=t.result,e.selectCount=e.selectData.length,e.keys=[],e.selectData)e.keys.push(e.selectData[a].deptId)}))},closeClick:function(){var e=this;e.dialogDeptVisible=!1},init:function(e,t){var a=this;a.dialogDeptVisible=!0,a.isMultiple=t,null!=e&&""!=e.deptNos&&(a.deptNos=e.deptNos),"0"==a.isMultiple?a.titel="单选部门选择":a.titel="多选部门选择",a.initDept()}}},d=c,p=(a("9be8"),a("9ca4")),m=Object(p["a"])(d,i,o,!1,null,"6a752310",null);t["a"]=m.exports},"361c":function(e,t,a){},"5dd2":function(e,t,a){var i=a("81dc");e.exports=function(e,t){return new(i(e))(t)}},"6c8d":function(e,t,a){"use strict";a("9e76"),a("9dd9"),a("9a33");t["a"]={getUUid:function(){for(var e=[],t="0123456789abcdef",a=0;a<36;a++)e[a]=t.substr(Math.floor(16*Math.random()),1);e[14]="4",e[19]=t.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-";var i=e.join("");return i},getTime:function(e){var t=new Date(e),a=t.getFullYear()+"-",i=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",o=(t.getDate()<10?"0"+t.getDate():t.getDate())+" ",l=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",n=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",r=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return a+i+o+l+n+r},getDate:function(e){var t=new Date(e),a=t.getFullYear()+"-",i=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",o=t.getDate()<10?"0"+t.getDate():t.getDate();return a+i+o},ConvertLevel:function(e){return"Basic"==e?"基地":"Plant"==e?"电厂":"机组"},IsCanDisplayImage:function(e){for(var t="jpg,png,gif,bmp,icon,jpeg",a=t.split(","),i=0;i<a.length;i++)if(a[i]==e)return!0;return!1},getQueryVariable:function(e){var t=window.location.href,a=t.split("?");if(a.length>1){a=a[1].split("&");for(var i=0;i<a.length;i++){var o=a[i].split("=");if(o[0]==e)return o[1]}return null}return null},setCookie:function(e,t){var a=30,i=new Date;i.setTime(i.getTime()+24*a*60*60*1e3),document.cookie=e+"="+escape(t)+";expires="+i.toGMTString()},getCookie:function(e){var t,a=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(a))?unescape(t[2]):null},delCookie:function(e){var t=new Date;t.setTime(t.getTime()-1);var a=getCookie(e);null!=a&&(document.cookie=e+"="+a+";expires="+t.toGMTString())}}},"81dc":function(e,t,a){var i=a("fb68"),o=a("2346"),l=a("cb3d")("species");e.exports=function(e){var t;return o(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!o(t.prototype)||(t=void 0),i(t)&&(t=t[l],null===t&&(t=void 0))),void 0===t?Array:t}},"9be8":function(e,t,a){"use strict";var i=a("361c"),o=a.n(i);o.a},"9e76":function(e,t,a){"use strict";var i=a("69b3"),o=a("eafa"),l=a("e754"),n=a("7108");a("0aed")("match",1,(function(e,t,a,r){return[function(a){var i=e(this),o=void 0==a?void 0:a[t];return void 0!==o?o.call(a,i):new RegExp(a)[t](String(i))},function(e){var t=r(a,e,this);if(t.done)return t.value;var s=i(e),c=String(this);if(!s.global)return n(s,c);var d=s.unicode;s.lastIndex=0;var p,m=[],u=0;while(null!==(p=n(s,c))){var f=String(p[0]);m[u]=f,""===f&&(s.lastIndex=l(c,o(s.lastIndex),d)),u++}return 0===u?null:m}]}))},a267:function(e,t,a){e.exports=a.p+"static/img/close.9efce744.png"},b88a:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"dashboard-container"},[i("div",{staticClass:"sidebar-container"},[i("div",{staticClass:"tree_content"},[i("el-tree",{staticStyle:{"font-size":"14px"},attrs:{data:e.treeData,"node-key":"id","default-expand-all":"","highlight-current":"",props:e.defaultProps,"expand-on-click-node":!1,"render-content":e.renderContent}})],1)]),e._v(" "),i("div",{staticClass:"main-container"},[i("div",[i("el-form",{ref:"form",attrs:{model:e.form}},[i("el-form-item",{attrs:{label:"姓名："}},[i("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入姓名"},model:{value:e.form.staffname,callback:function(t){e.$set(e.form,"staffname",t)},expression:"form.staffname"}}),e._v(" "),i("span",{staticClass:"el-form-item_titel my_el-form-item_tite"},[e._v("联系方式：")]),e._v(" "),i("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入联系方式"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}}),e._v(" "),i("span",{staticClass:"el-form-item_titel my_el-form-item_tite"},[e._v("磁卡号：")]),e._v(" "),i("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入磁卡号"},model:{value:e.form.magneticCardId,callback:function(t){e.$set(e.form,"magneticCardId",t)},expression:"form.magneticCardId"}}),e._v(" "),i("span",{staticClass:"el-form-item_titel my_el-form-item_tite"},[e._v("成员类型：")]),e._v(" "),i("el-select",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请选择"},model:{value:e.form.memberType,callback:function(t){e.$set(e.form,"memberType",t)},expression:"form.memberType"}},[i("el-option",{key:"",attrs:{label:"全部",value:""}}),e._v(" "),i("el-option",{key:"MEMBER",attrs:{label:"工作组成员",value:"MEMBER"}}),e._v(" "),i("el-option",{key:"LEADER",attrs:{label:"班组长",value:"LEADER"}})],1),e._v(" "),i("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:function(t){return e.searchGetDataList()}}},[e._v("查询")]),e._v(" "),i("el-button",{attrs:{type:"info",size:"small",icon:"el-icon-refresh-right"},on:{click:function(t){return e.resetGetDataList()}}},[e._v("重置")])],1)],1)],1),e._v(" "),i("div",{staticStyle:{height:"calc(100vh - 150px)"},attrs:{id:"table_content"}},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"font-size":"12px"},attrs:{data:e.tableData,border:"",height:e.tableHeader}},[i("el-table-column",{attrs:{label:"姓名",width:"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.staffname+"["+t.row.staffid+"]"))])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"magneticCardId",label:"磁卡号"}}),e._v(" "),i("el-table-column",{attrs:{prop:"specialityGroup",label:"执行专业",width:"150",align:"center"}}),e._v(" "),i("el-table-column",{attrs:{prop:"deptName",label:"所属部门",width:"150"}}),e._v(" "),i("el-table-column",{attrs:{label:"身份证号",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(e.getIdcard(t.row.idCard)))])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"callNo",label:"CALL机号",width:"80"}}),e._v(" "),i("el-table-column",{attrs:{prop:"mobile",label:"手机号",width:"100"}}),e._v(" "),i("el-table-column",{attrs:{prop:"createdBy",label:"添加人",width:"100"}}),e._v(" "),i("el-table-column",{attrs:{label:"操作",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{staticClass:"el-icon-edit",attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}}),e._v(" "),i("el-button",{staticClass:"el-icon-delete",attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}})]}}])},[i("template",{slot:"header"},[i("span",[e._v("\n              操作\n              "),i("i",{staticClass:"el-icon-circle-plus",staticStyle:{color:"#409eff","margin-left":"3px","font-size":"17px",cursor:"pointer",top:"2px",position:"relative"},on:{click:e.addListClick}})])])],2)],1),e._v(" "),i("div",{staticClass:"my_el_pagination"},[i("el-pagination",{attrs:{"page-sizes":[20,50,100],"page-size":e.size,layout:"prev, pager, next, jumper,sizes,total",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)]),e._v(" "),i("div",{attrs:{id:"workManagerAdd"}},[i("el-dialog",{attrs:{title:"人员信息管理",top:"4%",visible:e.dialogVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("div",[i("el-form",{ref:"addForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.addForm,rules:e.rules,"label-width":"100px","label-position":e.labelPosition}},[i("el-form-item",{attrs:{label:"工号",prop:"staffid"}},[i("el-input",{staticClass:"el-form-input",attrs:{size:"small",placeholder:"请输入工号"},model:{value:e.addForm.staffid,callback:function(t){e.$set(e.addForm,"staffid",t)},expression:"addForm.staffid"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"姓名",prop:"staffname"}},[i("el-input",{staticClass:"el-form-input",attrs:{size:"small",placeholder:"请输入姓名"},model:{value:e.addForm.staffname,callback:function(t){e.$set(e.addForm,"staffname",t)},expression:"addForm.staffname"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"磁卡号",prop:"magneticCardId"}},[i("el-input",{staticClass:"el-form-input",attrs:{size:"small",placeholder:"请输入磁卡号"},model:{value:e.addForm.magneticCardId,callback:function(t){e.$set(e.addForm,"magneticCardId",t)},expression:"addForm.magneticCardId"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"身份证号",prop:"idCard"}},[i("el-input",{staticClass:"el-form-input",attrs:{size:"small",placeholder:"请输入身份证号"},model:{value:e.addForm.idCard,callback:function(t){e.$set(e.addForm,"idCard",t)},expression:"addForm.idCard"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"所属公司",prop:"companyCode"}},[i("el-select",{staticClass:"el-form-input",attrs:{size:"small",placeholder:"请选择所属公司"},on:{change:e.setConstRecByTypeInfoCategoryData},model:{value:e.addForm.companyCode,callback:function(t){e.$set(e.addForm,"companyCode",t)},expression:"addForm.companyCode"}},e._l(e.ConstRecByTypeInfoData,(function(e){return i("el-option",{key:e.id,attrs:{label:e.constDesc,value:e.value}})})),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"执行专业",prop:"specialityGroup"}},[i("el-select",{staticClass:"el-form-input",attrs:{multiple:"",size:"small",placeholder:"请选择执行专业"},model:{value:e.addForm.specialityGroup,callback:function(t){e.$set(e.addForm,"specialityGroup",t)},expression:"addForm.specialityGroup"}},e._l(e.companySpecialityData,(function(e){return i("el-option",{key:e.id,attrs:{label:e.specialityName,value:e.specialityCode}})})),1)],1),e._v(" "),i("el-form-item",{ref:"deptNameForm",attrs:{label:"所属部门",prop:"deptName"}},[i("el-input",{staticClass:"el-form-input",attrs:{size:"small",placeholder:"请输入所属部门"},on:{focus:function(t){return e.deptSelectClick()}},model:{value:e.addForm.deptName,callback:function(t){e.$set(e.addForm,"deptName",t)},expression:"addForm.deptName"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"是否采集人脸"}},[i("el-switch",{attrs:{disabled:!0},model:{value:e.addForm.isCollectFacePic,callback:function(t){e.$set(e.addForm,"isCollectFacePic",t)},expression:"addForm.isCollectFacePic"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"CALL机号码",prop:"callNo"}},[i("el-input",{staticClass:"el-form-input",attrs:{size:"small",placeholder:"请输入CALL机号码"},model:{value:e.addForm.callNo,callback:function(t){e.$set(e.addForm,"callNo",t)},expression:"addForm.callNo"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"手机号码",prop:"mobile"}},[i("el-input",{staticClass:"el-form-input",attrs:{size:"small",placeholder:"请输入手机号码"},model:{value:e.addForm.mobile,callback:function(t){e.$set(e.addForm,"mobile",t)},expression:"addForm.mobile"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"邮件地址",prop:"email"}},[i("el-input",{staticClass:"el-form-input",attrs:{size:"small",placeholder:"请输入邮件地址"},model:{value:e.addForm.email,callback:function(t){e.$set(e.addForm,"email",t)},expression:"addForm.email"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"联系方式"}},[i("el-input",{staticClass:"el-form-input",attrs:{size:"small",placeholder:"请输入联系方式"},model:{value:e.addForm.telephonenumber,callback:function(t){e.$set(e.addForm,"telephonenumber",t)},expression:"addForm.telephonenumber"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"工作组成员",prop:"memberType"}},[i("el-select",{staticClass:"el-form-input",attrs:{size:"small",placeholder:"请选择工作组成员"},model:{value:e.addForm.memberType,callback:function(t){e.$set(e.addForm,"memberType",t)},expression:"addForm.memberType"}},e._l(e.personTypeData,(function(e){return i("el-option",{key:e.id,attrs:{label:e.constDesc,value:e.constDesc}})})),1)],1),e._v(" "),e.addForm.updatetime?i("el-form-item",{attrs:{label:"最后修改时间"}},[i("span",[e._v(e._s(e.setTime(e.addForm.updatetime)))])]):e._e(),e._v(" "),e.isUpload?i("el-form-item",{staticStyle:{width:"490px"},attrs:{label:"图片"}},[e.fileData.length>0?i("div",{staticClass:"fjcontent",staticStyle:{float:"left","margin-right":"30px",padding:"15px 0px 0 0"}},e._l(e.fileData,(function(t){return i("div",{key:t.id,staticClass:"fjlist",staticStyle:{"min-width":"120px"}},["png"==t.type||"jpeg"==t.type||"gif"==t.type||"jpg"==t.type?i("div",{staticClass:"fjlistconent"},[i("img",{staticClass:"flclose",attrs:{src:a("a267")},on:{click:function(a){return e.deleteFileClick(t)}}}),e._v(" "),i("div",{on:{click:function(a){return e.downloadClick(t)}}},[i("img",{staticClass:"fjimg",attrs:{src:e.showImageInfo+t.id}})]),e._v(" "),i("div",{staticClass:"fjname"},[e._v("\n                   "+e._s(t.name)+"\n                ")])]):e._e()])})),0):e._e(),e._v(" "),i("el-button",{staticStyle:{float:"left"},attrs:{type:"primary",size:"small"},on:{click:e.setImgClick}},[e._v("上传图片")]),e._v(" "),i("input",{staticStyle:{display:"none"},attrs:{id:"file",type:"file",accept:"image/png, image/jpeg, image/gif, image/jpg"},on:{change:function(t){return e.changepic(this)}}})],1):e._e()],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addDataListClick()}}},[e._v("确 定")])],1)])],1),e._v(" "),i("div",{attrs:{id:"workManagerGS"}},[i("el-dialog",{attrs:{title:"公司专业管理",visible:e.dialogVisibleaddWx},on:{"update:visible":function(t){e.dialogVisibleaddWx=t}}},[i("div",[i("el-form",{ref:"addWxForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.addWxForm,rules:e.addWxFormrules,"label-position":e.labelPosition}},[i("el-form-item",{attrs:{label:"所属公司",prop:"companyCode","label-width":"150px"}},[i("el-select",{staticClass:"el-form-item_input",staticStyle:{width:"250px"},attrs:{size:"small",placeholder:"请选择所属公司"},model:{value:e.addWxForm.companyCode,callback:function(t){e.$set(e.addWxForm,"companyCode",t)},expression:"addWxForm.companyCode"}},e._l(e.ConstRecByTypeInfoData,(function(e){return i("el-option",{key:e.id,attrs:{label:e.constDesc,value:e.value}})})),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"专业编码",prop:"specialityCode","label-width":"150px"}},[i("el-input",{staticClass:"el-form-item_input",staticStyle:{width:"250px"},attrs:{size:"small",placeholder:"请输入执行专业编码"},model:{value:e.addWxForm.specialityCode,callback:function(t){e.$set(e.addWxForm,"specialityCode",t)},expression:"addWxForm.specialityCode"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"专业名称",prop:"specialityName","label-width":"150px"}},[i("el-input",{staticClass:"el-form-item_input",staticStyle:{width:"250px"},attrs:{size:"small",placeholder:"请输入执行专业名称"},model:{value:e.addWxForm.specialityName,callback:function(t){e.$set(e.addWxForm,"specialityName",t)},expression:"addWxForm.specialityName"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"备注说明","label-width":"150px"}},[i("el-input",{staticStyle:{width:"250px"},attrs:{type:"textarea",placeholder:"请输入备注说明"},model:{value:e.addWxForm.remark,callback:function(t){e.$set(e.addWxForm,"remark",t)},expression:"addWxForm.remark"}})],1)],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogVisibleaddWx=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.addWxTreeClick}},[e._v("确 定")])],1)])],1),e._v(" "),i("DeptSelect",{ref:"deptSelect",on:{addDeptClick:e.addDeptClick}})],1)},o=[],l=(a("5ab2"),a("6d57"),a("e10e"),a("ce3c")),n=(a("9a33"),a("e697"),a("52c1")),r=a("b775"),s=a("7c15"),c=a("6c8d"),d=a("a336"),p=a.n(d),m=a("1c34");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(l["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g=function(e,t,a){v.isUpload=!1,""==t&&a(new Error("身份证号不能为空"));var i=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;i.test(t)?(v.isUpload=!0,a()):a(new Error("身份证号码不对，请重新输入"))},y=function(e,t,a){""===t?a(new Error("手机号不能为空")):/^1\d{10}$/.test(t)?a():a(new Error("手机号格式错误"))},v={},h={name:"workManager",data:function(){var e=function(e,t,a){var i=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;t?setTimeout((function(){i.test(t)?a():a(new Error("请输入正确的邮箱格式"))}),100):a()};return{loading:!1,imgSrc:"",dialogVisible:!1,dialogVisibleaddWx:!1,labelPosition:"right",isUpload:!1,PageIndex:1,showImageInfo:s["a"].showImageInfo,downloadFileInfo:s["a"].downloadFileInfo,tableHeader:0,size:50,total:1,tableData:[],fileData:[],treeData:[],personTypeData:[],companySpecialityData:[],rules:{staffid:[{required:!0,message:"请输入员工号",trigger:"blur"}],staffname:[{required:!0,message:"请输入姓名",trigger:"blur"}],magneticCardId:[{required:!0,message:"请输入磁卡号",trigger:"blur"}],deptName:[{required:!0,message:"请选择部门",trigger:"blur"}],idCard:[{required:!0,validator:g,trigger:"blur"}],mobile:[{required:!0,validator:y,trigger:"blur"}],email:[{required:!1,validator:e,trigger:"blur"}]},addForm:{mobile:"",staffname:"",companyCode:"",magneticCardId:"",specialityGroup:"",memberType:"",remark:"",callNo:"",email:"",companyName:"",telephonenumber:"",deptid:"",deptName:"",updatetime:"",updateuserid:"",isCollectFacePic:""},form:{mobile:"",staffname:"",companyCode:"",magneticCardId:"",specialityGroup:"",memberType:""},addWxFormrules:{specialityName:[{required:!0,message:"请输入专业名称",trigger:"blur"}],specialityCode:[{required:!0,message:"请输入专业编码",trigger:"blur"}],companyCode:[{required:!0,message:"请输入所属公司",trigger:"blur"}]},addWxForm:{specialityName:"",specialityCode:"",companyCode:"",remark:"",id:"",companyName:""},ApplyData:[],defaultProps:{children:"children",label:"name",code:"code",id:"id"},ConstRecByTypeInfoData:[],unitData:[]}},watch:{dialogVisible:function(e){var t=this;e?(t.fileData=[],t.$nextTick((function(){var e=p()(window).height()-70;p()("#workManagerAdd .el-dialog").css("width","720px"),p()("#workManagerAdd .el-dialog").css("max-height",e-10+"px"),p()("#workManagerAdd .el-dialog__body").css("max-height",e-150+"px"),p()("#workManagerAdd .el-dialog").css("margin-top","60px"),p()("#workManagerAdd .el-dialog__body").css("overflow-y","auto")})),t.getConstRecByTypeInfo(),t.getPersonTypeData(),""!=t.addForm.companyCode&&t.initSpeciality()):t.$refs["addForm"].resetFields()},dialogVisibleaddWx:function(e){var t=this;e?t.$nextTick((function(){p()("#workManagerGS .el-dialog").css("width","550px"),t.fileData=[]})):(t.addWxForm={},t.$refs["addWxForm"].resetFields())}},components:{DeptSelect:m["a"]},mounted:function(){var e=this;v=this,e.getDataTreeList(),e.getDataList(),e.setHeight(),p()(".hamburger-close").show(),p()(window).resize((function(){e.setHeight()}))},methods:{setTime:function(e){return c["a"].getTime(e)},downloadClick:function(e){var t=document.createElement("a");t.href=s["a"].serverUrl()+"/fme/UC/downloadFileInfo?fileID="+e.id,document.body.appendChild(t),t.click()},getPersonTypeData:function(){var e=this;Object(r["a"])({url:s["a"].getConstRecByTypeInfo,method:"get",params:{type:"personType"}}).then((function(t){e.personTypeData=t.result}))},getFileList:function(){var e=this;Object(r["a"])({url:s["a"].getFileInfo,method:"get",params:{businessid:e.addForm.idCard,businessType:""}}).then((function(t){200==t.code&&(console.log(JSON.parse(JSON.stringify(t.result))),e.fileData=t.result)}))},deptSelectClick:function(){var e=this;e.$refs["deptSelect"].init({deptNos:""},"0")},addDeptClick:function(e){var t=this;null!=e&&e.length>0?t.$nextTick((function(){t.addForm.deptid=e[0].deptId,t.addForm.deptName=e[0].deptName,t.$refs["deptNameForm"].clearValidate(),t.$forceUpdate()})):(t.addForm.deptid="",t.addForm.deptName=""),t.$refs["deptSelect"].closeClick()},getIdcard:function(e){var t=e.substr(0,6)+"********"+e.substr(e.length-4,e.length);return t},timestampToTime:function(e){if(""!=e){var t=new Date(e),a=t.getFullYear()+"-",i=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",o=(t.getDate()<10?"0"+t.getDate():t.getDate())+" ",l=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",n=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",r=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return a+i+o+l+n+r}return""},addListClick:function(){var e=this;e.addForm={mobile:"",staffname:"",companyCode:e.form.companyCode,magneticCardId:"",specialityGroup:"",memberType:"",callNo:"",email:"",companyName:"",telephonenumber:"",deptid:"",deptName:"",updatetime:"",updateuserid:"",isCollectFacePic:""},""!=e.form.specialityGroup&&(e.addForm.specialityGroup=[e.form.specialityGroup]),e.addForm.isCollectFacePic=!1,e.fileData=[],e.dialogVisible=!0,e.isUpload=!1},addDataListClick:function(){var e=this;e.$refs["addForm"].validate((function(t){if(t){if(""!=e.addForm.companyCode&&e.addForm.companyCode.length>0){var a=e.ConstRecByTypeInfoData.find((function(t){return t.value===e.addForm.companyCode}));e.addForm.companyName=a.constDesc}var i=e.addForm.specialityGroup;null!=i&&i.length>0?e.addForm.specialityGroup=i.join(","):e.addForm.specialityGroup="",e.addForm.isCollectFacePic=e.addForm.isCollectFacePic?"Y":"N",Object(r["a"])({url:s["a"].saveStaff,method:"post",data:e.addForm}).then((function(t){200==t.code?(e.$message({type:"success",message:"操作成功!"}),e.getDataList(),e.dialogVisible=!1):(e.addForm.specialityGroup=i,e.$message({type:"info",message:t.message}))}))}else;}))},deleteFileClick:function(e){var t=this;Object(r["a"])({url:s["a"].deleteFile,method:"get",params:{fileID:e.id}}).then((function(e){200==e.code?(t.$message({type:"success",message:"删除成功!"}),t.imgSrc="",t.getFileList(),t.getDataList()):t.$message({type:"info",message:e.message})}))},setImgClick:function(){var e=this;if(e.fileData.length>0)return e.$message.error("请删除图片后再上传"),!1;p()("#file").trigger("click")},changepic:function(){console.log("执行");var e=this,t=new FileReader,a=document.getElementById("file").files[0];t.readAsDataURL(a);var i=new FormData;i.append("file",document.getElementById("file").files[0]);JSON.parse(sessionStorage.userInfo)["toKey"];i.append("SubType","Staff"),i.append("BusinessID",e.addForm.idCard),p.a.ajax({url:s["a"].uploadFile,type:"POST",data:i,headers:{"X-CSRFToken":JSON.parse(sessionStorage.userInfo)["toKey"]},processData:!1,contentType:!1,beforeSend:function(){},success:function(t){console.log("执行请求"),e.getFileList(),e.getDataList()},error:function(e){console.log(e)}}),t.onload=function(e){}},setHeight:function(){var e=this;e.$nextTick((function(){var t=document.getElementById("table_content"),a=t.offsetHeight;e.tableHeader=a-60}))},initSpeciality:function(){var e=this;Object(r["a"])({url:s["a"].getCompanySpecialityByCode+"?companyCode="+e.addForm.companyCode,method:"get"}).then((function(t){e.companySpecialityData=t.result}))},setConstRecByTypeInfoCategoryData:function(e){var t=this;t.addForm.companyCode=e,Object(r["a"])({url:s["a"].getCompanySpecialityByCode+"?companyCode="+e,method:"get"}).then((function(e){t.companySpecialityData=e.result,t.addForm.specialityGroup=""}))},getConstRecByTypeInfo:function(){var e=this;Object(r["a"])({url:s["a"].getConstRecByTypeInfo+"?type=Company",method:"get"}).then((function(t){e.ConstRecByTypeInfoData=t.result}))},handleEdit:function(e,t){var a=this;a.addForm=JSON.parse(JSON.stringify(t)),a.isUpload=!0,a.isCollectFacePic="Y"==a.isCollectFacePic,""!=a.addForm.specialityGroup?a.addForm.specialityGroup=a.addForm.specialityGroup.split(","):a.addForm.specialityGroup="",a.dialogVisible=!0,a.getFileList()},handleDelete:function(e,t){var a=this;this.$confirm("您确定要删除该信息吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["a"])({url:s["a"].deleteStaff,method:"post",data:{idCard:t.idCard}}).then((function(e){200==e.code?(a.$message({type:"success",message:"删除成功!"}),a.getDataList()):a.$message({type:"info",message:e.message})}))})).catch((function(){}))},searchGetDataList:function(){var e=this;e.PageIndex=1,e.getDataList()},resetGetDataList:function(){var e=this;e.form={mobile:"",staffname:"",companyCode:"",magneticCardId:"",specialityGroup:"",memberType:""},e.PageIndex=1,e.getDataList()},getDataList:function(){var e=this;"全部"==e.form.memberType&&(e.form.memberType=""),e.loading=!0;var t={staffname:e.form.staffname,mobile:e.form.mobile,companyCode:e.form.companyCode,specialityGroup:e.form.specialityGroup,memberType:e.form.memberType,PageSize:e.size,PageIndex:e.PageIndex};Object(r["a"])({url:s["a"].getStaffInfo,method:"post",data:t}).then((function(t){e.loading=!1;var a=t.result.rows;e.tableData=a,e.total=parseInt(t.result.records)}))},addWxTreeClick:function(){var e=this,t=this;this.$refs["addWxForm"].validate((function(a){if(a){if(""!=t.addWxForm.companyCode&&t.addWxForm.companyCode.length>0){var i=t.ConstRecByTypeInfoData.find((function(e){return e.value===t.addWxForm.companyCode}));t.addWxForm.companyName=i.constDesc}Object(r["a"])({url:s["a"].saveCompanySpeciality,method:"post",data:t.addWxForm}).then((function(e){200==e.code?(t.$message({type:"success",message:"操作成功!"}),t.getDataTreeList(),t.dialogVisibleaddWx=!1):t.$message({type:"info",message:e.message})}))}else console.log(e.addWxForm)}))},appendTreeData:function(e){var t=this;t.addWxForm.companyCode=e.code,t.form.companyCode=e.code,t.dialogVisibleaddWx=!0,t.getConstRecByTypeInfo()},removeTree:function(e){var t=this;this.$confirm("您确定要删除该节点吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["a"])({url:s["a"].deleteCompanySpeciality,method:"post",data:{id:e.id}}).then((function(e){200==e.code?(t.$message({type:"success",message:"删除成功!"}),t.getDataTreeList()):t.$message({type:"info",message:e.message})}))})).catch((function(){}))},renderContent:function(e,t){var a=this,i=t.node,o=t.data;t.store;return"全部"==i.label?e("span",{class:"custom-tree-node"},[e("span",{on:{click:function(){return a.onClickTree(o,i)}}},[i.label])]):"null"!=JSON.stringify(o.children)&&""!=JSON.stringify(o.children)&&void 0!=JSON.stringify(o.children)&&"undefined"!=JSON.stringify(o.children)?e("span",{class:"custom-tree-node"},[e("span",{on:{click:function(){return a.onClickTree(o,i)}}},[i.label]),e("span",[e("i",{class:"el-icon-circle-plus",style:"color:#409eff;margin-left: 10px;font-size:16px",on:{click:function(){return a.appendTreeData(o)}}})])]):e("span",{class:"custom-tree-node"},[e("span",{on:{click:function(){return a.onClickTree(o,i)}}},[i.label]),e("span",[e("i",{class:"el-icon-remove",style:"color:red;margin-left: 10px;font-size:16px",on:{click:function(){return a.removeTree(o)}}})])])},onClickTree:function(e,t){var a=this;a.form.companyCode="",a.form.specialityGroup="",2==t.level?a.form.companyCode=e.code:3==t.level&&(a.form.companyCode=e.attribute.companyCode,a.form.specialityGroup=e.code),a.getDataList()},getDataTreeList:function(){var e=this;Object(r["a"])({url:s["a"].getCompanySpeciality,method:"get"}).then((function(t){e.treeData=t.result,e.$nextTick((function(){p()(".el-tree-node__children").removeClass("el-tree-node__children")}))}))},handleSizeChange:function(e){var t=this;t.size=e,t.getDataList(),console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){var t=this;t.PageIndex=e,t.getDataList()}},computed:f({},Object(n["b"])(["name"]))},b=h,C=(a("d2bc"),a("9ca4")),k=Object(C["a"])(b,i,o,!1,null,"58c623e2",null);t["default"]=k.exports},d2bc:function(e,t,a){"use strict";var i=a("0054"),o=a.n(i);o.a},e697:function(e,t,a){"use strict";var i=a("e46b"),o=a("013f")(5),l="find",n=!0;l in[]&&Array(1)[l]((function(){n=!1})),i(i.P+i.F*n,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a("0e8b")(l)}}]);