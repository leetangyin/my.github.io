(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f09565e"],{"013f":function(e,t,a){var r=a("4ce5"),l=a("224c"),o=a("008a"),n=a("eafa"),i=a("5dd2");e.exports=function(e,t){var a=1==e,s=2==e,d=3==e,c=4==e,m=6==e,u=5==e||m,p=t||i;return function(t,i,f){for(var g,v,h=o(t),b=l(h),k=r(i,f,3),D=n(b.length),w=0,C=a?p(t,D):s?p(t,0):void 0;D>w;w++)if((u||w in b)&&(g=b[w],v=k(g,w,h),e))if(a)C[w]=v;else if(v)switch(e){case 3:return!0;case 5:return g;case 6:return w;case 2:C.push(g)}else if(c)return!1;return m?-1:d||c?c:C}}},2238:function(e,t,a){},"31e8":function(e,t,a){},"3b7c":function(e,t,a){"use strict";var r=a("cfb2"),l=a.n(r);l.a},"50fd":function(e,t,a){"use strict";var r=a("31e8"),l=a.n(r);l.a},"5dd2":function(e,t,a){var r=a("81dc");e.exports=function(e,t){return new(r(e))(t)}},"6c8d":function(e,t,a){"use strict";a("9e76"),a("9dd9"),a("9a33");t["a"]={getUUid:function(){for(var e=[],t="0123456789abcdef",a=0;a<36;a++)e[a]=t.substr(Math.floor(16*Math.random()),1);e[14]="4",e[19]=t.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-";var r=e.join("");return r},getTime:function(e){var t=new Date(e),a=t.getFullYear()+"-",r=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",l=(t.getDate()<10?"0"+t.getDate():t.getDate())+" ",o=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",n=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",i=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return a+r+l+o+n+i},getDate:function(e){var t=new Date(e),a=t.getFullYear()+"-",r=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",l=t.getDate()<10?"0"+t.getDate():t.getDate();return a+r+l},ConvertLevel:function(e){return"Basic"==e?"基地":"Plant"==e?"电厂":"机组"},IsCanDisplayImage:function(e){for(var t="jpg,png,gif,bmp,icon,jpeg",a=t.split(","),r=0;r<a.length;r++)if(a[r]==e)return!0;return!1},getQueryVariable:function(e){var t=window.location.href,a=t.split("?");if(a.length>1){a=a[1].split("&");for(var r=0;r<a.length;r++){var l=a[r].split("=");if(l[0]==e)return l[1]}return null}return null},setCookie:function(e,t){var a=30,r=new Date;r.setTime(r.getTime()+24*a*60*60*1e3),document.cookie=e+"="+escape(t)+";expires="+r.toGMTString()},getCookie:function(e){var t,a=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(a))?unescape(t[2]):null},delCookie:function(e){var t=new Date;t.setTime(t.getTime()-1);var a=getCookie(e);null!=a&&(document.cookie=e+"="+a+";expires="+t.toGMTString())}}},"81dc":function(e,t,a){var r=a("fb68"),l=a("2346"),o=a("cb3d")("species");e.exports=function(e){var t;return l(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!l(t.prototype)||(t=void 0),r(t)&&(t=t[o],null===t&&(t=void 0))),void 0===t?Array:t}},9805:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bodyStaff",attrs:{id:"bodyStaffOne"}},[a("el-dialog",{attrs:{title:e.titel,visible:e.dialogStaffVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogStaffVisible=t}}},[a("div",{staticClass:"bp-alert bp-alert-info",staticStyle:{"margin-top":"10x"},attrs:{id:"alert"}},[a("strong",[e._v("提示：")]),e._v("关键字至少2个字，双击选中或取消。\n      ")]),e._v(" "),a("table",{attrs:{id:"tab"}},[a("tr",[a("td",[a("el-input",{ref:"editTagFoucus",staticStyle:{width:"200px"},attrs:{size:"mini"},on:{blur:function(t){return e.keywordChange()}},nativeOn:{keyup:function(t){return e.keywordChange()}},model:{value:e.staffName,callback:function(t){e.staffName=t},expression:"staffName"}}),e._v(" "),a("a",{staticClass:"bp-linkbtn",attrs:{id:"menuBtn",href:"#"},on:{click:function(t){return e.showDept(),!1}}},[e._v("部门")])],1),e._v(" "),a("td",{attrs:{rowspan:"2",id:"td2"}},[a("div",[a("el-button",{attrs:{type:"primary",title:"添加全部",size:"small",id:"addAll",icon:"el-icon-d-arrow-right"},on:{click:function(t){return e.allStaff()}}})],1),e._v(" "),a("div",[a("el-button",{attrs:{type:"primary",title:"移除选中项",size:"small",icon:"el-icon-arrow-right"},on:{click:function(t){return e.selectSingle()}}})],1),e._v(" "),a("div",[a("el-button",{attrs:{type:"primary",title:"移除选中项",size:"small",icon:"el-icon-arrow-left"},on:{click:function(t){return e.removeSingle()}}})],1),e._v(" "),a("div",[a("el-button",{attrs:{type:"primary",title:"移除全部",size:"small",icon:"el-icon-d-arrow-left"},on:{click:function(t){return e.removeStaff()}}})],1)]),e._v(" "),a("td",[a("span",[e._v("已选人员："+e._s(e.selectCount))])])]),e._v(" "),a("tr",[a("td",[a("select",{attrs:{id:"selecting",name:"selecting",multiple:"multiple"},on:{dblclick:function(t){return e.selectSingle(1)},click:e.showDeptName}},e._l(e.selectingData,(function(t){return a("option",{key:t.id,attrs:{"data-value":t},domProps:{value:t.id}},[e._v("\n                "+e._s(t.displayName)+"\n              ")])})),0)]),e._v(" "),a("td",{staticStyle:{"padding-top":"10px"}},[a("select",{attrs:{id:"selected",name:"selected",multiple:"multiple"},on:{dblclick:function(t){return e.removeSingle()}}},e._l(e.selectData,(function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v("\n                "+e._s(t.displayName)+"\n              ")])})),0)])])]),e._v(" "),a("p",{staticStyle:{"margin-bottom":"0px"},attrs:{id:"deptInfo"}},[a("strong",[e._v("所属部门："+e._s(e.currentDept))]),e._v(" "),a("span")]),e._v(" "),a("div",{staticClass:"menuContent bp-borderColor",attrs:{id:"menuContent"}},[a("el-tree",{ref:"tree",staticClass:"ztree",staticStyle:{"font-size":"14px"},attrs:{data:e.treeData,"node-key":"id",props:e.defaultProps},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.node,l=t.data;return a("span",{staticClass:"custom-tree-node"},[a("span",{staticClass:"node",on:{dblclick:function(t){return e.dblclickNode(r,l)}}},[e._v(e._s(r.label))])])}}])})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogStaffVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addStaffClick}},[e._v("确 定")])],1)])],1)},l=[],o=(a("e697"),a("2b45"),a("9a33"),a("52c1"),a("b775")),n=a("7c15"),i=(a("6c8d"),a("a336")),s=a.n(i),d={name:"StaffSelect",watch:{dialogStaffVisible:function(e){var t=this;e?t.$nextTick((function(){var e=s()(window).height()-70;t.$nextTick((function(){s()("#bodyStaffOne .el-dialog").css("width","640px"),s()("#bodyStaffOne .el-dialog").css("margin-top","60px"),s()("#bodyStaffOne .el-dialog").css("max-height",e-10+"px"),s()("#bodyStaffOne .el-dialog").css("overflow","hidden"),s()("#bodyStaffOne .el-dialog__body").css("overflow-y","auto")}))})):(t.staffName="",t.keyUpName="",t.currentDept="",t.currentUser="",t.selectData=[],t.deptNos="",t.selectingData=[],t.selectCount=0,t.treeData=[])}},data:function(){return{isMultiple:"",dialogStaffVisible:!1,selectCount:0,selectData:[],currentUser:"",currentDept:"",queryTimeout:"",selectingData:[],deptNos:"",staffName:"",keyUpName:"",deptNoPath:"",defaultProps:{children:"children",label:"name",id:"id"},titel:"人员选择",treeData:[]}},mounted:function(){},methods:{addStaffClick:function(){var e=this;e.$emit("addStaffClick",e.selectData)},dblclickNode:function(e,t){var a=this;a.staffName=t.attribute.deptName,a.deptNoPath=t.attribute.deptNoPath,a.queryStaff(2),a.hideDept()},loadStaffs:function(){var e=this;if(null!=e.currentUser&&e.currentUser.length>0){for(var t=e.currentUser.toString().split(","),a=new Array,r=0;r<t.length;r++)t[r].length>0&&(t[r].indexOf("[")>0?a.push(t[r].split("[")[1].slice(0,-1)):a.push(t[r]));if(a.length>0){var l=n["a"].getStaffInfoByStaffIdsInfo,i={staffIDs:a.join(",")};Object(o["a"])({url:l,method:"get",params:i}).then((function(t){e.selectData=t.result,e.selectCount=e.selectData.length}))}}},showDeptName:function(){var e=this,t=s()("#selecting").find("option:selected"),a=t.val();for(var r in e.selectingData)e.selectingData[r].id==a&&(e.currentDept=e.selectingData[r].deptNamePath)},handleNodeClick:function(e){},hideDept:function(){var e=this;s()("#menuContent").fadeOut("fast"),s()(".bodyStaff").unbind("mousedown",e.onBodyDown)},showDept:function(){var e=this,t=s()("#keyword");t.offset();s()("#menuContent").css({left:"24px",top:"140px"}).slideDown("fast"),s()(".bodyStaff").bind("mousedown",e.onBodyDown)},onBodyDown:function(e){var t=this;"menuBtn"==e.target.id||"menuContent"==e.target.id||s()(e.target).parents("#menuContent").length>0||t.hideDept()},selectSingle:function(e){var t=this,a=s()("#selecting").find("option:selected"),r=a.val();for(var l in"0"==t.isMultiple&&t.selectData.length>0&&(t.selectingData.push(t.selectData[0]),t.selectData=[]),t.selectingData){var o=t.selectingData[l];o.id==r&&(t.selectData.push(o),t.selectingData.splice(s.a.inArray(o,t.selectingData),1))}t.selectCount=t.selectData.length,"0"==t.isMultiple&&1==e&&t.addStaffClick()},removeStaff:function(){var e=this;if(null!=e.selectData&&e.selectData.length>0){for(var t in e.selectData)e.selectingData.push(e.selectData[t]);e.selectData=[]}e.selectCount=0},allStaff:function(){var e=this;if("0"!=e.isMultiple){if(null!=e.selectingData&&e.selectingData.length>0){for(var t in e.selectingData)e.selectData.push(e.selectingData[t]);e.selectingData=[]}e.selectCount=e.selectData.length}},removeSingle:function(){var e=this,t=s()("#selected").find("option:selected"),a=t.val();if(null!=a&&null!=e.selectData&&e.selectData.length>0)for(var r in e.selectData){var l=e.selectData[r];l.id==a&&(e.selectingData.push(l),e.selectData.splice(s.a.inArray(l,e.selectData),1))}e.selectCount=e.selectData.length},keywordChange:function(){var e=this;e.staffName.length>1&&e.staffName!=e.keyUpName?(e.queryTimeout&&clearTimeout(e.queryTimeout),e.queryTimeout=setTimeout((function(){e.queryStaff(1)}),500)):e.staffName.length<2&&(e.queryTimeout&&clearTimeout(e.queryTimeout),e.selectingData=[]),e.keyUpName=e.staffName},queryStaff:function(e){var t=this,a=n["a"].getStaffInfosByName,r={staffName:t.staffName};2==e&&(a=n["a"].getStaffInfosByDepartNoPath,r={deptNoPath:t.deptNoPath}),Object(o["a"])({url:a,method:"get",params:r}).then((function(e){if(t.selectingData=e.result,t.selectData.length>0)for(var a in t.selectData)for(var r in t.selectingData)t.selectData[a].id==t.selectingData[r].id&&t.selectingData.splice(s.a.inArray(t.selectingData[r],t.selectingData),1)}))},initDept:function(){var e=this;Object(o["a"])({url:n["a"].getAllDepartmentInfos,method:"get",params:{depNos:e.deptNos}}).then((function(t){e.treeData=t.result}))},closeClick:function(){var e=this;e.dialogStaffVisible=!1},init:function(e,t){var a=this;a.staffName=JSON.parse(sessionStorage.userInfo)["departmentName"],a.keyUpName=JSON.parse(sessionStorage.userInfo)["departmentName"],a.deptNoPath=JSON.parse(sessionStorage.userInfo)["departmentNoPath"],a.dialogStaffVisible=!0,a.isMultiple=t,a.hideDept(),null!=e&&(null!=e.deptNos&&e.deptNos.length>0&&(a.deptNos=e.deptNos.spilt(",")),null!=e.selectedUser&&(a.currentUser=e.selectedUser)),"0"==a.isMultiple?a.titel="单选人员选择":a.titel="多选人员选择",a.initDept(),a.loadStaffs(),setTimeout((function(){a.queryStaff(2)}),200)}}},c=d,m=(a("3b7c"),a("9ca4")),u=Object(m["a"])(c,r,l,!1,null,"6c6c6327",null);t["a"]=u.exports},"9e76":function(e,t,a){"use strict";var r=a("69b3"),l=a("eafa"),o=a("e754"),n=a("7108");a("0aed")("match",1,(function(e,t,a,i){return[function(a){var r=e(this),l=void 0==a?void 0:a[t];return void 0!==l?l.call(a,r):new RegExp(a)[t](String(r))},function(e){var t=i(a,e,this);if(t.done)return t.value;var s=r(e),d=String(this);if(!s.global)return n(s,d);var c=s.unicode;s.lastIndex=0;var m,u=[],p=0;while(null!==(m=n(s,d))){var f=String(m[0]);u[p]=f,""===f&&(s.lastIndex=o(d,l(s.lastIndex),c)),p++}return 0===p?null:u}]}))},c9f7:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"deptManager"},[a("div",{staticStyle:{}},[a("el-form",{ref:"form",attrs:{inline:!0,model:e.form,"label-position":e.labelPosition}},[a("el-form-item",{attrs:{label:"工单号","label-width":"100px"}},[a("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入工单号"},model:{value:e.form.workOrderNo,callback:function(t){e.$set(e.form,"workOrderNo",t)},expression:"form.workOrderNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"工作内容","label-width":"80px"}},[a("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入工作内容"},model:{value:e.form.workContent,callback:function(t){e.$set(e.form,"workContent",t)},expression:"form.workContent"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"工作负责人","label-width":"80px"}},[a("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入工作负责人"},model:{value:e.form.workPerson,callback:function(t){e.$set(e.form,"workPerson",t)},expression:"form.workPerson"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"功能位置","label-width":"80px"}},[a("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入功能位置"},model:{value:e.form.equipmentCode,callback:function(t){e.$set(e.form,"equipmentCode",t)},expression:"form.equipmentCode"}})],1),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:function(t){return e.getListData()}}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"info",size:"small",icon:"el-icon-refresh-right"},on:{click:function(t){return e.resetGetDataList()}}},[e._v("重置")])],1)],1),e._v(" "),a("div",{staticStyle:{height:"calc(100vh - 150px)"},attrs:{id:"table_content"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%","font-size":"12px"},attrs:{height:e.tableHeader,border:"",data:e.tableData,"row-key":"id"}},[a("el-table-column",{attrs:{prop:"planFactory",label:"计划工厂",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"workOrderNo",label:"工单编号",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"workContent",label:"工作内容"}}),e._v(" "),a("el-table-column",{attrs:{prop:"maintenanceCenter",label:"维护中心"}}),e._v(" "),a("el-table-column",{attrs:{prop:"workPerson",label:"工作负责人",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"noticeNo",label:"通知单号",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"equipmentCode",label:"功能位置",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"计划开始时间",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.convertDateTime(t.row.planStartDate)))]),e._v(" "),a("br"),a("span",[e._v(e._s(e.convertDateTime(t.row.planCompleteDate)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"实际工作时间",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[null!=t.row.startDate?a("span",[e._v(e._s(e.convertDateTime(t.row.startDate)))]):e._e(),e._v(" "),null!=t.row.complateDate?a("span",[a("br"),e._v(e._s(e.convertDateTime(t.row.complateDate)))]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"number",label:"开工人数",align:"center",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"component",label:"工具数量",align:"center",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"el-icon-edit",attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}}),e._v(" "),a("el-button",{staticClass:"el-icon-user",attrs:{size:"mini"},on:{click:function(a){return e.staffSelectClick(t.$index,t.row)}}}),e._v(" "),a("el-button",{staticClass:"el-icon-delete",attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}})]}}])},[a("template",{slot:"header"},[a("span",[e._v("\n            操作\n              "),a("i",{staticClass:"el-icon-circle-plus",staticStyle:{color:"#409eff","margin-left":"3px","font-size":"17px",cursor:"pointer",top:"2px",position:"relative"},on:{click:e.addListClick}})])])],2)],1),e._v(" "),a("div",{staticClass:"my_el_pagination"},[a("el-pagination",{attrs:{"page-sizes":[20,50,100],"page-size":e.size,layout:"prev, pager, next,jumper,sizes,total",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),a("AddPage",{ref:"addpage",attrs:{title:e.addTitle},on:{addClick:e.addClick}}),e._v(" "),a("V-StaffSelect",{ref:"staffSelect",on:{addStaffClick:e.addStaffClick}})],1)},l=[],o=a("a336"),n=a.n(o),i=a("b775"),s=a("7c15"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"addWorkManage"}},[a("div",[a("el-dialog",{attrs:{title:"工单管理",visible:e.dialogVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",[a("el-form",{ref:"addForm",attrs:{inline:!0,model:e.addForm,rules:e.rules,"label-position":e.labelPosition}},[a("el-form-item",{attrs:{label:"计划工厂",prop:"planFactory","label-width":"100px"}},[a("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入计划工厂"},model:{value:e.addForm.planFactory,callback:function(t){e.$set(e.addForm,"planFactory",t)},expression:"addForm.planFactory"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"工单编号",prop:"workOrderNo","label-width":"100px"}},[a("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入工单编号"},model:{value:e.addForm.workOrderNo,callback:function(t){e.$set(e.addForm,"workOrderNo",t)},expression:"addForm.workOrderNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"工作内容",prop:"workContent","label-width":"100px"}},[a("el-input",{staticClass:"el-form-item_input",staticStyle:{width:"450px"},attrs:{type:"textarea",size:"small",placeholder:"请输入工作内容"},model:{value:e.addForm.workContent,callback:function(t){e.$set(e.addForm,"workContent",t)},expression:"addForm.workContent"}})],1),e._v(" "),a("el-form-item",{ref:"workPerson",attrs:{label:"工作负责人",prop:"workPerson","label-width":"100px"}},[a("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入工作负责人"},nativeOn:{click:function(t){return e.staffSelectClick()}},model:{value:e.addForm.workPerson,callback:function(t){e.$set(e.addForm,"workPerson",t)},expression:"addForm.workPerson"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系方式",prop:"workPersonContact","label-width":"100px"}},[a("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入工作负责人联系方式"},model:{value:e.addForm.workPersonContact,callback:function(t){e.$set(e.addForm,"workPersonContact",t)},expression:"addForm.workPersonContact"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"设备编码",prop:"equipmentCode","label-width":"100px"}},[a("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入功能位置编号"},model:{value:e.addForm.equipmentCode,callback:function(t){e.$set(e.addForm,"equipmentCode",t)},expression:"addForm.equipmentCode"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"设备名称",prop:"equipmentName","label-width":"100px"}},[a("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入功能位置描述"},model:{value:e.addForm.equipmentName,callback:function(t){e.$set(e.addForm,"equipmentName",t)},expression:"addForm.equipmentName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"开工人数","label-width":"100px"}},[a("el-input",{staticClass:"el-form-item_input",attrs:{disabled:"disabled",size:"small",placeholder:"请输入开工人数"},model:{value:e.addForm.number,callback:function(t){e.$set(e.addForm,"number",t)},expression:"addForm.number"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"维护中心",prop:"maintenanceCenter","label-width":"100px"}},[a("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入维护中心"},model:{value:e.addForm.maintenanceCenter,callback:function(t){e.$set(e.addForm,"maintenanceCenter",t)},expression:"addForm.maintenanceCenter"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"计划开始时间",prop:"planStartDate","label-width":"100px"}},[a("el-date-picker",{staticStyle:{width:"185px"},attrs:{size:"small","picker-options":e.planStarDateOptions,type:"date",placeholder:"请选择计划开始时间"},model:{value:e.addForm.planStartDate,callback:function(t){e.$set(e.addForm,"planStartDate",t)},expression:"addForm.planStartDate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"计划完成时间",prop:"planCompleteDate","label-width":"100px"}},[a("el-date-picker",{staticStyle:{width:"185px"},attrs:{size:"small",type:"date","picker-options":e.planEndDateOptions,placeholder:"请选择计划完成时间"},model:{value:e.addForm.planCompleteDate,callback:function(t){e.$set(e.addForm,"planCompleteDate",t)},expression:"addForm.planCompleteDate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"实际开始时间","label-width":"100px"}},[a("el-date-picker",{staticStyle:{width:"185px"},attrs:{size:"small","picker-options":e.startDateDateOptions,type:"date",placeholder:"请选择实际开始时间"},model:{value:e.addForm.startDate,callback:function(t){e.$set(e.addForm,"startDate",t)},expression:"addForm.startDate"}})],1),e._v(" "),a("el-form-item",{attrs:{size:"small",label:"实际完成时间","label-width":"100px"}},[a("el-date-picker",{staticStyle:{width:"185px"},attrs:{"picker-options":e.endDateOptions,type:"date",placeholder:"请选择实际开始时间"},model:{value:e.addForm.complateDate,callback:function(t){e.$set(e.addForm,"complateDate",t)},expression:"addForm.complateDate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户状态","label-width":"100px"}},[a("el-select",{staticClass:"el-form-item_input",staticStyle:{width:"185px"},attrs:{size:"small"},model:{value:e.addForm.userState,callback:function(t){e.$set(e.addForm,"userState",t)},expression:"addForm.userState"}},e._l(e.userData,(function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"订单类型","label-width":"100px"}},[a("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入订单类型"},model:{value:e.addForm.orderType,callback:function(t){e.$set(e.addForm,"orderType",t)},expression:"addForm.orderType"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"优先级","label-width":"100px"}},[a("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入优先级"},model:{value:e.addForm.priorityLevel,callback:function(t){e.$set(e.addForm,"priorityLevel",t)},expression:"addForm.priorityLevel"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"PM作业类型","label-width":"100px"}},[a("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入PM作业类型"},model:{value:e.addForm.pmWorkType,callback:function(t){e.$set(e.addForm,"pmWorkType",t)},expression:"addForm.pmWorkType"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"房间号","label-width":"100px"}},[a("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入房间号"},model:{value:e.addForm.postionRoom,callback:function(t){e.$set(e.addForm,"postionRoom",t)},expression:"addForm.postionRoom"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"CCM标识","label-width":"100px"}},[a("el-select",{staticClass:"el-form-item_input",staticStyle:{width:"185px"},attrs:{size:"small"},model:{value:e.addForm.ccmLogo,callback:function(t){e.$set(e.addForm,"ccmLogo",t)},expression:"addForm.ccmLogo"}},e._l(e.ccmLogoData,(function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"安全等级","label-width":"100px"}},[a("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入设备质量安全等级"},model:{value:e.addForm.equQualityAndSatetyLevel,callback:function(t){e.$set(e.addForm,"equQualityAndSatetyLevel",t)},expression:"addForm.equQualityAndSatetyLevel"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"通知单","label-width":"100px"}},[a("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入通知单"},model:{value:e.addForm.noticeNo,callback:function(t){e.$set(e.addForm,"noticeNo",t)},expression:"addForm.noticeNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注","label-width":"100px"}},[a("el-input",{staticClass:"el-form-item_input",staticStyle:{width:"450px"},attrs:{type:"textarea",size:"small",placeholder:"请输入备注"},model:{value:e.addForm.remark,callback:function(t){e.$set(e.addForm,"remark",t)},expression:"addForm.remark"}})],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.addClick}},[e._v("确 定")])],1)])],1),e._v(" "),a("StaffSelect",{ref:"staffSelect",on:{addStaffClick:e.addStaffClick}})],1)},c=[],m=(a("e697"),a("6c8d")),u=a("9805"),p={watch:{dialogVisible:function(e){var t=this;e?t.$nextTick((function(){var e=n()(window).height()-70;n()("#addWorkManage").find(".el-dialog").css("width","700px"),n()("#addWorkManage").find(".el-dialog").css("max-height",e-100+"px"),n()("#addWorkManage").find(".el-dialog").css("overflow","hidden"),n()("#addWorkManage").find(".el-dialog__body").css("max-height",e-230+"px").css("overflow-y","auto")})):(t.addForm={planFactory:"",userState:"",workOrderNo:"",workContent:"",orderType:"",priorityLevel:"",pmWorkType:"",maintenanceCenter:"",workPerson:"",workPersonContact:"",ccmLogo:"",noticeNo:"",equQualityAndSatetyLevel:"",planStartDate:"",planCompleteDate:"",postionRoom:"",equipmentCode:"",equipmentName:"",startDate:"",complateDate:"",remark:"",number:"",component:"",preCha:"",id:""},t.$refs["addForm"].resetFields())}},data:function(){var e=this;return{planEndDateOptions:{disabledDate:function(t){if(e.addForm.planStartDate)return"number"==typeof e.addForm.planStartDate?t.getTime()<e.addForm.planStartDate:t.getTime()<e.addForm.planStartDate.getTime()}},planStarDateOptions:{disabledDate:function(t){if(e.addForm.planCompleteDate)return"number"==typeof e.addForm.planCompleteDate?t.getTime()>e.addForm.planCompleteDate:t.getTime()>e.addForm.planCompleteDate.getTime()}},endDateOptions:{disabledDate:function(t){if(e.addForm.startDate)return"number"==typeof e.addForm.startDate?t.getTime()<e.addForm.startDate:t.getTime()<e.addForm.startDate.getTime()}},startDateDateOptions:{disabledDate:function(t){if(e.addForm.completeDate)return"number"==typeof e.addForm.startDate?t.getTime()>e.addForm.completeDate:t.getTime()>e.addForm.completeDate.getTime()}},dialogVisible:!1,labelPosition:"right",titel:"",addForm:{planFactory:"",userState:"",workOrderNo:"",workContent:"",orderType:"",priorityLevel:"",pmWorkType:"",maintenanceCenter:"",workPerson:"",workPersonContact:"",ccmLogo:"",noticeNo:"",equQualityAndSatetyLevel:"",planStartDate:"",planCompleteDate:"",postionRoom:"",equipmentCode:"",equipmentName:"",startDate:"",complateDate:"",remark:"",number:"",component:"",preCha:"",id:""},userData:[{code:"RTW",name:"RTW"},{code:"WIP",name:"WIP"},{code:"PFT",name:"PFT"}],ccmLogoData:[{code:"Y",name:"是"},{code:"N",name:"否"}],level:"",rules:{workOrderNo:[{required:!0,message:"请输入工单编号",trigger:"blur"}],workContent:[{required:!0,message:"请输入工作内容",trigger:"blur"}],workPerson:[{required:!0,message:"请选择工作负责人",trigger:"blur"}],workPersonContact:[{required:!0,message:"请输入联系方式",trigger:"blur"}],equipmentCode:[{required:!0,message:"请输入设备编码",trigger:"blur"}],equipmentName:[{required:!0,message:"请输入设备名称",trigger:"blur"}],planStartDate:[{required:!0,message:"请选择计划开始日期",trigger:"blur"}],planCompleteDate:[{required:!0,message:"请选择计划完成日期",trigger:"blur"}],maintenanceCenter:[{required:!0,message:"请输入维护中心",trigger:"blur"}]}}},components:{StaffSelect:u["a"]},methods:{addStaffClick:function(e){var t=this;if(e.length>0){var a=e[0];t.addForm.workPerson=a.displayName,t.addForm.workPersonContact=a.mobile,t.$refs["workPerson"].clearValidate()}else t.addForm.workPerson="",t.addForm.workPersonContact="";t.$forceUpdate(),t.$refs["staffSelect"].closeClick()},staffSelectClick:function(){var e=this;e.$refs["staffSelect"].init({deptNos:"",selectedUser:e.addForm.workPerson},"0")},addClick:function(){var e=this;this.$refs["addForm"].validate((function(t){t&&e.$emit("addClick",e.addForm)}))},closeClick:function(){var e=this;e.dialogVisible=!1},init:function(e,t){var a=this;a.dialogVisible=!0,a.type=t,t&&(a.addForm=e)}}},f=p,g=(a("50fd"),a("9ca4")),v=Object(g["a"])(f,d,c,!1,null,"6c818fd2",null),h=v.exports,b={data:function(){return{addTitle:"",tableData:[],tableHeader:0,labelPosition:"right",size:50,total:1,PageIndex:1,itemEdit:{},form:{workOrderNo:"",workContent:"",workPerson:"",equipmentCode:""},loading:!1}},mounted:function(){var e=this;n()(".hamburger-close").hide(),e.getListData(),e.setHeight()},components:{AddPage:h,"V-StaffSelect":u["a"]},methods:{convertDateTime:function(e){return m["a"].getDate(e)},resetGetDataList:function(){var e=this;e.form={workOrderNo:"",workContent:"",workPerson:"",equipmentCode:""},e.getListData()},addStaffClick:function(e){var t=this,a=new Array;if(e.length>0)for(var r=0;r<e.length;r++){var l={idCard:e[r].idCard,magneticCard:e[r].magneticCardId,staffName:e[r].displayName,eStfepname:e[r].deptName,eContact:e[r].mobile,workOrderNo:t.itemEdit.workOrderNo,workOrderDesc:t.itemEdit.workContent};a.push(l)}else a.push({workOrderNo:t.itemEdit.workOrderNo});Object(i["a"])({url:s["a"].saveWorkOrderPerson,method:"post",data:{list:a}}).then((function(e){"200"==e.code&&t.$message({type:"success",message:"人员授权成功!"})})),t.$refs["staffSelect"].closeClick()},staffSelectClick:function(e){var t=this;t.itemEdit=e,Object(i["a"])({url:s["a"].getWorkOrderPersonByNo,method:"get",params:{workOrderNo:e.workOrderNo}}).then((function(e){if(200==e.code){var a=e.result;t.$refs["staffSelect"].init({deptNos:"",selectedUser:null!=a&&a.length>0?a:""},"1")}}))},handleEdit:function(e,t){var a=this;a.$refs["addpage"].init(t,!0)},handleDelete:function(e,t){var a=this;this.$confirm("您确定要删除该信息吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["a"])({url:s["a"].deleteWorkOrder,method:"post",data:{workOrderNo:t.workOrderNo}}).then((function(e){200==e.code&&(a.$message({type:"success",message:"删除成功!"}),a.getListData())}))})).catch((function(){}))},addListClick:function(){var e=this;e.addTitle="添加工单号";var t={id:""};e.$refs["addpage"].init(t,!1)},addClick:function(e){var t=this,a=s["a"].saveWorkOrder,r={};r=e,r.planStartDate=new Date(e.planStartDate).getTime(),r.planCompleteDate=new Date(e.planCompleteDate).getTime(),e.startDate&&(r.startDate=new Date(e.startDate).getTime()),e.complateDate&&(r.complateDate=new Date(e.complateDate).getTime()),Object(i["a"])({url:a,method:"post",data:r}).then((function(e){"200"==e.code&&(t.$message({type:"success",message:"操作成功!"}),t.$refs["addpage"].closeClick(),t.getListData())}))},setHeight:function(){var e=this;e.$nextTick((function(){var t=document.getElementById("table_content"),a=t.offsetHeight;e.tableHeader=a-30}))},getListData:function(){var e=this;e.loading=!0,e.form.PageSize=e.size,e.form.PageIndex=e.PageIndex,Object(i["a"])({url:s["a"].getWorkOrderManagerInfo,method:"post",data:e.form}).then((function(t){if(e.loading=!1,"200"==t.code){var a=t.result.rows;e.tableData=a,e.total=parseInt(t.result.records)}}))},handleSizeChange:function(e){var t=this;t.size=e,t.getListData()},handleCurrentChange:function(e){var t=this;t.PageIndex=e,t.getListData()}}},k=b,D=(a("f91d"),Object(g["a"])(k,r,l,!1,null,"43848dbe",null));t["default"]=D.exports},cfb2:function(e,t,a){},e697:function(e,t,a){"use strict";var r=a("e46b"),l=a("013f")(5),o="find",n=!0;o in[]&&Array(1)[o]((function(){n=!1})),r(r.P+r.F*n,"Array",{find:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),a("0e8b")(o)},f91d:function(e,t,a){"use strict";var r=a("2238"),l=a.n(r);l.a}}]);