(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a06705e4"],{"013f":function(e,t,a){var n=a("4ce5"),i=a("224c"),r=a("008a"),s=a("eafa"),o=a("5dd2");e.exports=function(e,t){var a=1==e,l=2==e,c=3==e,d=4==e,u=6==e,m=5==e||u,p=t||o;return function(t,o,f){for(var g,h,v=r(t),y=i(v),D=n(o,f,3),b=s(y.length),I=0,k=a?p(t,b):l?p(t,0):void 0;b>I;I++)if((m||I in y)&&(g=y[I],h=D(g,I,v),e))if(a)k[I]=h;else if(h)switch(e){case 3:return!0;case 5:return g;case 6:return I;case 2:k.push(g)}else if(d)return!1;return u?-1:c||d?d:k}}},"0ac8":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-container"},[a("div",{staticClass:"sidebar-container"},[a("div",{staticClass:"tree_content"},[a("el-tree",{staticStyle:{"font-size":"14px"},attrs:{data:e.treeData,"node-key":"id",props:e.defaultProps,"highlight-current":"","expand-on-click-node":!1,"render-content":e.renderContent}})],1)]),e._v(" "),a("div",{staticClass:"main-container"},[a("div",[a("el-form",{ref:"searchForm",attrs:{model:e.searchForm}},[a("el-form-item",{attrs:{label:"姓名："}},[a("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入姓名"},model:{value:e.searchForm.staffName,callback:function(t){e.$set(e.searchForm,"staffName",t)},expression:"searchForm.staffName"}}),e._v(" "),a("span",{staticClass:"el-form-item_titel my_el-form-item_tite"},[e._v("授权时间：")]),e._v(" "),a("el-date-picker",{staticStyle:{width:"160px"},attrs:{type:"date",size:"small",placeholder:"开始日期"},model:{value:e.searchForm.planStartDatetime,callback:function(t){e.$set(e.searchForm,"planStartDatetime",t)},expression:"searchForm.planStartDatetime"}}),e._v(" "),a("span",{staticClass:"el-form-item_titel my_el-form-item_tite"},[e._v("至：")]),e._v(" "),a("el-date-picker",{staticStyle:{width:"160px"},attrs:{type:"date",size:"small",placeholder:"结束日期"},model:{value:e.searchForm.planEndDatetime,callback:function(t){e.$set(e.searchForm,"planEndDatetime",t)},expression:"searchForm.planEndDatetime"}}),e._v(" "),a("span",{staticClass:"el-form-item_titel my_el-form-item_tite"},[e._v("人员类型：")]),e._v(" "),a("el-select",{staticClass:"el-form-item_input",staticStyle:{width:"146px"},attrs:{size:"small",placeholder:"人员类型"},model:{value:e.searchForm.personType,callback:function(t){e.$set(e.searchForm,"personType",t)},expression:"searchForm.personType"}},e._l(e.personTypeData,(function(e){return a("el-option",{key:e.id,attrs:{label:e.constDesc,value:e.id}})})),1),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:function(t){return e.getDataList("check")}}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"info",size:"small",icon:"el-icon-refresh-right"},on:{click:function(t){return e.resetGetDataList()}}},[e._v("重置")])],1)],1)],1),e._v(" "),a("div",{staticStyle:{height:"calc(100vh - 150px)"},attrs:{id:"table_content"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"font-size":"12px"},attrs:{data:e.tableData,border:"",height:e.tableHeader}},[a("el-table-column",{attrs:{prop:"subname",label:"大修轮次",width:"100",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"工作区域",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"staffName",label:"姓名",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"magneticCardId",label:"磁卡号",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{label:"授权时间",width:"140",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.timestampToTime(t.row.planStartDatetime)))]),e._v(" "),a("br"),a("span",[e._v(e._s(e.timestampToTime(t.row.planEndDatetime)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"实际工作时间",width:"140",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[null!=t.row.startDate?a("span",[e._v(e._s(e.timestampToTime(t.row.startDate)))]):e._e(),e._v(" "),null!=t.row.endDate?a("span",[a("br"),e._v(e._s(e.timestampToTime(t.row.planEndDatetime)))]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"人像识别",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:e.showImage(t.row.idCard)}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"人员类型",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[null!=t.row.personType?a("span",[e._v(e._s(e.firstPersonType(t.row.personType)))]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"操作说明"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"el-icon-edit",attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{staticClass:"el-icon-delete",attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])},[a("template",{slot:"header"},[a("span",[e._v("\n              操作\n              "),a("i",{staticClass:"el-icon-circle-plus",staticStyle:{color:"#409eff","margin-left":"3px","font-size":"17px",cursor:"pointer",top:"2px",position:"relative"},on:{click:e.addListClick}})])])],2)],1),e._v(" "),a("div",{staticClass:"my_el_pagination"},[a("el-pagination",{attrs:{"page-sizes":[20,50,100],"page-size":e.size,"current-page":e.PageIndex,layout:"prev, pager, next, jumper,sizes,total",total:e.total},on:{"update:currentPage":function(t){e.PageIndex=t},"update:current-page":function(t){e.PageIndex=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)]),e._v(" "),a("authorizationEdit",{ref:"addpage",on:{getDataList:e.getDataList,addClick:e.addClick}})],1)},i=[],r=a("a336"),s=a.n(r),o=a("b775"),l=a("7c15"),c=a("6c8d"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{attrs:{id:"authorizationEdit"}},[a("el-dialog",{attrs:{title:e.titel,visible:e.dialogVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"addForm",attrs:{inline:!0,model:e.addForm,rules:e.rules,"label-position":e.labelPosition}},[a("el-form-item",{attrs:{label:"基地",prop:"companyId","label-width":"105px"}},[a("el-select",{staticClass:"el-form-item_input",staticStyle:{width:"176px"},attrs:{size:"small",placeholder:"请选择基地"},on:{change:e.getStataionData},model:{value:e.addForm.companyId,callback:function(t){e.$set(e.addForm,"companyId",t)},expression:"addForm.companyId"}},e._l(e.companyData,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"电站",prop:"stationId","label-width":"105px"}},[a("el-select",{staticClass:"el-form-item_input",staticStyle:{width:"176px"},attrs:{size:"small",placeholder:"请选择电站"},on:{change:e.getRepairSequenceData},model:{value:e.addForm.stationId,callback:function(t){e.$set(e.addForm,"stationId",t)},expression:"addForm.stationId"}},e._l(e.stataionData,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"大修轮次",prop:"sequenceId","label-width":"105px"}},[a("el-select",{staticClass:"el-form-item_input",staticStyle:{width:"176px"},attrs:{size:"small",placeholder:"请选择大修轮次"},on:{change:e.getRangeData},model:{value:e.addForm.sequenceId,callback:function(t){e.$set(e.addForm,"sequenceId",t)},expression:"addForm.sequenceId"}},e._l(e.sequenceData,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"工作区域",prop:"repairWorkRangeManagerId","label-width":"105px",required:!0}},[a("el-select",{staticClass:"el-form-item_input",staticStyle:{width:"176px"},attrs:{size:"small"},model:{value:e.addForm.repairWorkRangeManagerId,callback:function(t){e.$set(e.addForm,"repairWorkRangeManagerId",t)},expression:"addForm.repairWorkRangeManagerId"}},e._l(e.rangeData,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),a("el-form-item",{ref:"staffName",attrs:{label:"姓名",prop:"staffName","label-width":"105px"}},[a("el-input",{staticClass:"el-form-item_input",staticStyle:{width:"176px"},attrs:{size:"small",placeholder:"请输入姓名"},on:{focus:function(t){return e.staffSelectClick()}},model:{value:e.addForm.staffName,callback:function(t){e.$set(e.addForm,"staffName",t)},expression:"addForm.staffName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"磁卡号",prop:"magneticCardId","label-width":"105px"}},[a("el-input",{staticClass:"el-form-item_input",staticStyle:{width:"176px"},attrs:{size:"small",placeholder:"请输入磁卡号"},model:{value:e.addForm.magneticCardId,callback:function(t){e.$set(e.addForm,"magneticCardId",t)},expression:"addForm.magneticCardId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"授权开始时间",prop:"planStartDatetime","label-width":"105px"}},[a("el-date-picker",{staticStyle:{width:"176px"},attrs:{size:"small",type:"date","picker-options":e.pickerStartDate,placeholder:"请选择计划开始时间"},model:{value:e.addForm.planStartDatetime,callback:function(t){e.$set(e.addForm,"planStartDatetime",t)},expression:"addForm.planStartDatetime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"结束时间",prop:"planEndDatetime","label-width":"105px"}},[a("el-date-picker",{staticStyle:{width:"176px"},attrs:{size:"small",type:"date","picker-options":e.pickerStartDate,placeholder:"请选择计划结束时间"},model:{value:e.addForm.planEndDatetime,callback:function(t){e.$set(e.addForm,"planEndDatetime",t)},expression:"addForm.planEndDatetime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"人员类型",prop:"personType","label-width":"105px"}},[a("el-select",{staticClass:"el-form-item_input",staticStyle:{width:"176px"},attrs:{size:"small"},model:{value:e.addForm.personType,callback:function(t){e.$set(e.addForm,"personType",t)},expression:"addForm.personType"}},e._l(e.personTypeData,(function(e){return a("el-option",{key:e.id,attrs:{label:e.constDesc,value:e.constDesc}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"创建人",prop:"name","label-width":"105px"}},[a("span",[e._v(e._s(e.addForm.createdBy))])]),e._v(" "),e.isUpload?a("el-form-item",{staticStyle:{width:"497px"},attrs:{label:"图片","label-width":"105px"}},[a("input",{staticStyle:{display:"none"},attrs:{type:"file",accept:"image/png, image/jpeg, image/gif, image/jpg",id:"file"},on:{change:function(t){return e.changepic(this)}}}),e._v(" "),e.fileData.length>0?a("div",{staticClass:"fjcontent",staticStyle:{float:"left","margin-right":"30px",padding:"15px 0px 0 0"}},e._l(e.fileData,(function(t){return a("div",{key:t.id,staticClass:"fjlist",staticStyle:{"min-width":"120px"}},["png"==t.type||"jpeg"==t.type||"gif"==t.type||"jpg"==t.type?a("div",{staticClass:"fjlistconent"},[a("div",{on:{click:function(a){return e.downloadClick(t)}}},[a("img",{staticClass:"fjimg",attrs:{src:e.showImageInfo+t.id}})]),e._v(" "),a("div",{staticClass:"fjname"},[e._v("\n                  "+e._s(t.name)+"\n                ")])]):e._e()])})),0):e._e()]):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"备注","label-width":"105px"}},[a("el-input",{staticStyle:{width:"477px"},attrs:{type:"textarea",placeholder:"请输入备注"},model:{value:e.addForm.remark,callback:function(t){e.$set(e.addForm,"remark",t)},expression:"addForm.remark"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.addClick}},[e._v("确 定")])],1)],1)],1),e._v(" "),a("StaffSelect",{ref:"staffSelect",on:{addStaffClick:e.addStaffClick}})],1)},u=[],m=(a("cc57"),a("e697"),a("9805")),p={watch:{dialogVisible:function(e){var t=this;e?t.$nextTick((function(){var e=s()(window).height()-70;s()("#authorizationEdit .el-dialog").css("width","700px"),s()("#authorizationEdit .el-dialog").css("max-height",e-10+"px"),s()("#authorizationEdit .el-dialog__body").css("max-height",e-150+"px"),s()("#authorizationEdit .el-dialog").css("margin-top","60px"),s()("#authorizationEdit .el-dialog__body").css("overflow-y","auto")})):(t.addForm={companyCode:"",companyName:"",companyId:"",planEndDatetime:"",planStartDatetime:"",remark:"",createdBy:"",id:"",magneticCardId:"",stationId:"",sequenceId:"",staffName:"",repairWorkRangeManagerId:"",personType:"",workRange:"",idCard:""},t.startDate="",t.endDate="",t.$refs["addForm"].resetFields(),t.fileData=[])}},data:function(){return{stataionData:[],sequenceData:[],rangeData:[],imgSrc:"",showImageInfo:l["a"].showImageInfo,downloadFileInfo:l["a"].downloadFileInfo,startDate:"",endDate:"",fileData:[],isUpload:!1,personTypeData:[],dialogVisible:!1,titel:"人员授权管理编辑",labelPosition:"right",companyData:[],rules:{companyId:[{required:!0,message:"请选择基地",trigger:"blur"}],stationId:[{required:!0,message:"请选择电站",trigger:"blur"}],planStartDatetime:[{required:!0,message:"请选择开始日期",trigger:"blur"}],planEndDatetime:[{required:!0,message:"请选择开始日期",trigger:"blur"}],personType:[{required:!0,message:"请选择人员类型",trigger:"blur"}],staffName:[{required:!0,message:"请输入姓名",trigger:"blur"}],magneticCardId:[{required:!0,message:"请输入磁卡号",trigger:"blur"}],sequenceId:[{required:!0,message:"请选择大修轮次",trigger:"blur"}],repairWorkRangeManagerId:[{required:!0,message:"请选择工作区域",trigger:"blur"}]},addForm:{companyCode:"",companyName:"",companyId:"",planEndDatetime:"",planStartDatetime:"",remark:"",createdBy:"",id:"",magneticCardId:"",stationId:"",sequenceId:"",staffName:"",repairWorkRangeManagerId:"",personType:"",workRange:"",idCard:""}}},components:{StaffSelect:m["a"]},created:function(){},computed:{pickerStartDate:function(){var e=this;return{disabledDate:function(t){return""!=e.startDate?!(t.getTime()>=e.startDate&&t.getTime()<=e.endDate):t.getTime()>(new Date).getTime()+432e7}}}},mounted:function(){this},methods:{downloadClick:function(e){var t=document.createElement("a");t.href=l["a"].serverUrl()+"/fme/UC/downloadFileInfo?fileID="+e.id,document.body.appendChild(t),t.click()},addStaffClick:function(e){var t=this;if(e.length>0){var a=e[0];t.$nextTick((function(){t.$set(t.addForm,"staffName",a.displayName),t.$set(t.addForm,"idCard",a.idCard),t.$set(t.addForm,"magneticCardId",a.magneticCardId),t.$refs["staffName"].clearValidate()}))}else t.$set(t.addForm,"staffName",""),t.$set(t.addForm,"idCard",""),t.$set(t.addForm,"magneticCardId","");t.$refs["staffSelect"].closeClick()},staffSelectClick:function(){var e=this;e.$refs["staffSelect"].init({deptNos:"",selectedUser:e.addForm.staffName},"0")},addClick:function(){var e=this;this.$refs["addForm"].validate((function(t){t&&e.$emit("addClick",e.addForm)}))},getPersonTypeData:function(){var e=this;Object(o["a"])({url:l["a"].getConstRecByTypeInfo,method:"get",params:{type:"personType"}}).then((function(t){e.personTypeData=t.result}))},closeClick:function(){var e=this;e.dialogVisible=!1},getCompanyData:function(){var e=this;Object(o["a"])({url:l["a"].getStationUnitInfo,method:"get",params:{parent:"0",unitlevel:"Basic"}}).then((function(t){e.companyData=t.result}))},getFileList:function(){var e=this;Object(o["a"])({url:l["a"].getFileInfo,method:"get",params:{businessid:e.addForm.idCard,businessType:""}}).then((function(t){console.log("执行要图片"),200==t.code&&(e.fileData=t.result)}))},deleteFileClick:function(e){var t=this;Object(o["a"])({url:l["a"].deleteFile,method:"get",params:{fileID:e.id}}).then((function(e){200==e.code?(t.$message({type:"success",message:"删除成功!"}),t.imgSrc="",t.getFileList(),t.$emit("getDataList")):t.$message({type:"info",message:e.message})}))},setImgClick:function(){var e=this;if(e.fileData.length>0)return this.$message({message:"请删除图片后再选择图片",type:"warning"}),!1;s()("#file").trigger("click")},changepic:function(){var e=this,t=new FileReader,a=document.getElementById("file").files[0];t.readAsDataURL(a);var n=new FormData;n.append("file",document.getElementById("file").files[0]);JSON.parse(sessionStorage.userInfo)["toKey"];n.append("SubType","Staff"),n.append("BusinessID",e.addForm.idCard),s.a.ajax({url:l["a"].uploadFile,type:"POST",data:n,headers:{"X-CSRFToken":JSON.parse(sessionStorage.userInfo)["toKey"]},processData:!1,contentType:!1,beforeSend:function(){},success:function(t){e.getFileList(),e.$emit("getDataList")},error:function(e){console.log(e)}}),t.onload=function(e){}},getStataionData:function(e){var t=this;t.addForm.companyId=e;var a=t.companyData.find((function(t){return t.id===e}));null!=a&&(t.addForm.companyCode=a.code,t.addForm.companyName=a.name),Object(o["a"])({url:l["a"].getStationUnitInfo,method:"get",params:{parent:t.addForm.companyId,unitlevel:"Plant"}}).then((function(e){200==e.code?t.stataionData=e.result:t.$message({type:"info",message:e.message})}))},getRepairSequenceData:function(e){var t=this;Object(o["a"])({url:l["a"].getRepairSequenceInfo,method:"get",params:{companyId:e,subId:0}}).then((function(e){t.sequenceData=e.result}))},getRangeData:function(e){var t=this;Object(o["a"])({url:l["a"].getRepairSequenceInfo,method:"get",params:{companyId:e,subId:1}}).then((function(a){if(200==a.code)for(var n in t.rangeData=a.result,t.sequenceData)t.sequenceData[n].id==e&&(t.startDate=t.sequenceData[n].planStartDate,t.endDate=t.sequenceData[n].planEndDate);else t.$message({type:"info",message:a.message})}))},init:function(e,t){var a=this;this,a.dialogVisible=!0,a.getPersonTypeData(),a.getCompanyData(),t?(a.isUpload=!0,a.addForm={companyCode:e.companyCode,companyName:e.companyName,companyId:e.companyId,planEndDatetime:e.planEndDatetime,planStartDatetime:e.planStartDatetime,remark:e.remark,createdBy:e.createdBy,id:e.id,magneticCardId:e.magneticCardId,stationId:e.stationId,sequenceId:e.sequenceId,repairWorkRangeManagerId:e.repairWorkRangeManagerId,personType:e.personType,workRange:e.workRange,idCard:e.idCard,staffName:e.staffName},a.getStataionData(e.companyId),a.getRepairSequenceData(e.stationId),a.getRangeData(e.sequenceId),a.getFileList()):(a.addForm.createdBy=e.createdBy,a.addForm.id=e.id,a.isUpload=!1,""!=e.companyId&&(a.addForm.companyId=e.companyId,a.getStataionData(a.addForm.companyId),""!=e.stationId&&(a.addForm.stationId=e.stationId,a.getRepairSequenceData(e.stationId),""!=e.sequenceId&&(a.addForm.sequenceId=e.sequenceId,a.getRangeData(e.sequenceId),""!=e.repairWorkRangeManagerId&&(a.addForm.repairWorkRangeManagerId=e.repairWorkRangeManagerId)))))}}},f=p,g=a("9ca4"),h=Object(g["a"])(f,d,u,!1,null,"05a9e8aa",null),v=h.exports,y={name:"index",data:function(){return{loading:!1,PageIndex:1,tableHeader:0,labelPosition:"right",dialogVisible:!1,size:50,total:1,tableData:[],personTypeData:[],searchForm:{staffName:"",personType:"",planStartDatetime:null,planEndDatetime:null,repairWorkRangeManagerId:"",sequenceId:"",stationId:"",companyId:""},defaultProps:{children:"children",label:"name",code:"code",id:"id"},treeData:[]}},mounted:function(){var e=this;e.getPersonTypeData(),e.getDataTreeList(),e.getDataList(),e.setHeight(),s()(window).resize((function(){e.setHeight()}))},components:{authorizationEdit:v},methods:{RndNum:function(){for(var e="",t=0;t<1e3;t++)e+=Math.floor(10*Math.random());return e},showImage:function(e){var t=this,a="/fme/UC/firstImageInfo?bussinessId="+e+"&randomNum="+t.RndNum();return a},addListClick:function(){var e=this;e.postType="add",e.$refs["addpage"].init({id:c["a"].getUUid(),companyId:e.searchForm.companyId,stationId:e.searchForm.stationId,sequenceId:e.searchForm.sequenceId,repairWorkRangeManagerId:e.searchForm.repairWorkRangeManagerId,createdBy:JSON.parse(sessionStorage.userInfo)["displayName"]},!1)},firstPersonType:function(e){var t=this,a="";for(var n in t.personTypeData)t.personTypeData[n].id==e&&(a=t.personTypeData[n].constDesc);return a},getPersonTypeData:function(){var e=this;Object(o["a"])({url:l["a"].getConstRecByTypeInfo,method:"get",params:{type:"personType"}}).then((function(t){e.personTypeData=t.result}))},addClick:function(e){var t=this,a=l["a"].saveBpWorkspacePersonAuth,n={companyCode:e.companyCode,companyName:e.companyName,remark:e.remark,id:e.id,magneticCardId:e.magneticCardId,repairWorkRangeManagerId:e.repairWorkRangeManagerId,personType:e.personType,staffName:e.staffName,idCard:e.idCard};""!=e.planStartDatetime&&(n.planStartDatetime=new Date(e.planStartDatetime).getTime(),n.planEndDatetime=new Date(e.planEndDatetime).getTime()),Object(o["a"])({url:a,method:"post",data:n}).then((function(e){200==e.code&&(t.$message({type:"success",message:"操作成功!"}),t.$refs["addpage"].closeClick(),t.getDataList())}))},setHeight:function(){var e=this;e.$nextTick((function(){var t=document.getElementById("table_content"),a=t.offsetHeight;e.tableHeader=a-60}))},handleEdit:function(e,t){var a=this;a.postType="edit",a.$refs["addpage"].init(t,!0)},handleDelete:function(e,t){var a=this;this.$confirm("您确定要删除该信息吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["a"])({url:l["a"].deleteBpWorkspacePersonAuth,method:"post",data:{id:t.id}}).then((function(e){200==e.code?(a.$message({type:"success",message:"删除成功!"}),a.getDataList()):a.$message({type:"info",message:e.message})}))})).catch((function(){}))},resetGetDataList:function(){var e=this;e.searchForm.companyId="",e.searchForm.stationId="",e.searchForm.sequenceId="",e.searchForm.repairWorkRangeManagerId="",e.searchForm.staffName="",e.searchForm.personType="",e.searchForm.planStartDatetime=null,e.searchForm.planEndDatetime=null,e.PageIndex=1,e.getDataList()},getDataList:function(e){var t=this;t.loading=!0,"check"==e&&(t.PageIndex=1);var a={companyId:t.searchForm.companyId,stationId:t.searchForm.stationId,sequenceId:t.searchForm.sequenceId,repairWorkRangeManagerId:t.searchForm.repairWorkRangeManagerId,staffName:t.searchForm.staffName,personType:t.searchForm.personType,PageSize:t.size,PageIndex:t.PageIndex};null!=t.searchForm.planStartDatetime&&(a.planStartDatetime=new Date(t.searchForm.planStartDatetime).getTime()),null!=t.searchForm.planEndDatetime&&(a.planEndDatetime=new Date(t.searchForm.planEndDatetime).getTime()),Object(o["a"])({url:l["a"].getBpVWorkspacePersonAuthInfo,method:"post",data:a}).then((function(e){var a=e.result.rows;t.loading=!1,t.tableData=a,t.total=parseInt(e.result.records)}))},timestampToTime:function(e){var t=new Date(e),a=t.getFullYear()+"-",n=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",i=(t.getDate()<10?"0"+t.getDate():t.getDate())+" ",r=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",s=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",o=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return a+n+i+r+s+o},renderContent:function(e,t){var a=this,n=t.node,i=t.data;t.store;return"全部"==n.label?e("span",{class:"custom-tree-node"},[e("span",[n.label])]):("null"!=JSON.stringify(i.children)&&""!=JSON.stringify(i.children)&&void 0!=JSON.stringify(i.children)&&JSON.stringify(i.children),e("span",{class:"custom-tree-node"},[e("span",{on:{click:function(){return a.onClickTree(i,n)}}},[n.label])]))},onClickTree:function(e,t){var a=this;1==t.level?(a.searchForm.companyId=e.id,a.searchForm.stationId="",a.searchForm.sequenceId="",a.searchForm.repairWorkRangeManagerId=""):2==t.level?(a.searchForm.companyId=e.attribute.companyId,a.searchForm.stationId=e.id,a.searchForm.sequenceId="",a.searchForm.repairWorkRangeManagerId=""):3==t.level?(a.searchForm.companyId=e.attribute.subParentId,a.searchForm.stationId=e.attribute.companyId,a.searchForm.sequenceId=e.id,a.searchForm.repairWorkRangeManagerId=""):(a.searchForm.companyId=e.attribute.subParentId,a.searchForm.stationId=e.attribute.subId,a.searchForm.sequenceId=e.attribute.companyId,a.searchForm.repairWorkRangeManagerId=e.id),a.getDataList()},getDataTreeList:function(){var e=this;Object(o["a"])({url:l["a"].getWorkRangeInfo,method:"get"}).then((function(t){e.treeData=t.result,e.$nextTick((function(){s()(".el-tree-node.is-expanded").removeClass("el-tree-node__children")}))}))},handleSizeChange:function(e){},handleCurrentChange:function(e){var t=this;t.PageIndex=e,t.getDataList()}}},D=y,b=(a("82cc"),Object(g["a"])(D,n,i,!1,null,"2bea14c8",null));t["default"]=b.exports},"3b7c":function(e,t,a){"use strict";var n=a("cfb2"),i=a.n(n);i.a},"5dd2":function(e,t,a){var n=a("81dc");e.exports=function(e,t){return new(n(e))(t)}},"616d":function(e,t,a){},"6c8d":function(e,t,a){"use strict";a("9e76"),a("9dd9"),a("9a33");t["a"]={getUUid:function(){for(var e=[],t="0123456789abcdef",a=0;a<36;a++)e[a]=t.substr(Math.floor(16*Math.random()),1);e[14]="4",e[19]=t.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-";var n=e.join("");return n},getTime:function(e){var t=new Date(e),a=t.getFullYear()+"-",n=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",i=(t.getDate()<10?"0"+t.getDate():t.getDate())+" ",r=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",s=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",o=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return a+n+i+r+s+o},getDate:function(e){var t=new Date(e),a=t.getFullYear()+"-",n=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",i=t.getDate()<10?"0"+t.getDate():t.getDate();return a+n+i},ConvertLevel:function(e){return"Basic"==e?"基地":"Plant"==e?"电厂":"机组"},IsCanDisplayImage:function(e){for(var t="jpg,png,gif,bmp,icon,jpeg",a=t.split(","),n=0;n<a.length;n++)if(a[n]==e)return!0;return!1},getQueryVariable:function(e){var t=window.location.href,a=t.split("?");if(a.length>1){a=a[1].split("&");for(var n=0;n<a.length;n++){var i=a[n].split("=");if(i[0]==e)return i[1]}return null}return null},setCookie:function(e,t){var a=30,n=new Date;n.setTime(n.getTime()+24*a*60*60*1e3),document.cookie=e+"="+escape(t)+";expires="+n.toGMTString()},getCookie:function(e){var t,a=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(a))?unescape(t[2]):null},delCookie:function(e){var t=new Date;t.setTime(t.getTime()-1);var a=getCookie(e);null!=a&&(document.cookie=e+"="+a+";expires="+t.toGMTString())}}},"81dc":function(e,t,a){var n=a("fb68"),i=a("2346"),r=a("cb3d")("species");e.exports=function(e){var t;return i(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!i(t.prototype)||(t=void 0),n(t)&&(t=t[r],null===t&&(t=void 0))),void 0===t?Array:t}},"82cc":function(e,t,a){"use strict";var n=a("616d"),i=a.n(n);i.a},9805:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bodyStaff",attrs:{id:"bodyStaffOne"}},[a("el-dialog",{attrs:{title:e.titel,visible:e.dialogStaffVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogStaffVisible=t}}},[a("div",{staticClass:"bp-alert bp-alert-info",staticStyle:{"margin-top":"10x"},attrs:{id:"alert"}},[a("strong",[e._v("提示：")]),e._v("关键字至少2个字，双击选中或取消。\n      ")]),e._v(" "),a("table",{attrs:{id:"tab"}},[a("tr",[a("td",[a("el-input",{ref:"editTagFoucus",staticStyle:{width:"200px"},attrs:{size:"mini"},on:{blur:function(t){return e.keywordChange()}},nativeOn:{keyup:function(t){return e.keywordChange()}},model:{value:e.staffName,callback:function(t){e.staffName=t},expression:"staffName"}}),e._v(" "),a("a",{staticClass:"bp-linkbtn",attrs:{id:"menuBtn",href:"#"},on:{click:function(t){return e.showDept(),!1}}},[e._v("部门")])],1),e._v(" "),a("td",{attrs:{rowspan:"2",id:"td2"}},[a("div",[a("el-button",{attrs:{type:"primary",title:"添加全部",size:"small",id:"addAll",icon:"el-icon-d-arrow-right"},on:{click:function(t){return e.allStaff()}}})],1),e._v(" "),a("div",[a("el-button",{attrs:{type:"primary",title:"移除选中项",size:"small",icon:"el-icon-arrow-right"},on:{click:function(t){return e.selectSingle()}}})],1),e._v(" "),a("div",[a("el-button",{attrs:{type:"primary",title:"移除选中项",size:"small",icon:"el-icon-arrow-left"},on:{click:function(t){return e.removeSingle()}}})],1),e._v(" "),a("div",[a("el-button",{attrs:{type:"primary",title:"移除全部",size:"small",icon:"el-icon-d-arrow-left"},on:{click:function(t){return e.removeStaff()}}})],1)]),e._v(" "),a("td",[a("span",[e._v("已选人员："+e._s(e.selectCount))])])]),e._v(" "),a("tr",[a("td",[a("select",{attrs:{id:"selecting",name:"selecting",multiple:"multiple"},on:{dblclick:function(t){return e.selectSingle(1)},click:e.showDeptName}},e._l(e.selectingData,(function(t){return a("option",{key:t.id,attrs:{"data-value":t},domProps:{value:t.id}},[e._v("\n                "+e._s(t.displayName)+"\n              ")])})),0)]),e._v(" "),a("td",{staticStyle:{"padding-top":"10px"}},[a("select",{attrs:{id:"selected",name:"selected",multiple:"multiple"},on:{dblclick:function(t){return e.removeSingle()}}},e._l(e.selectData,(function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v("\n                "+e._s(t.displayName)+"\n              ")])})),0)])])]),e._v(" "),a("p",{staticStyle:{"margin-bottom":"0px"},attrs:{id:"deptInfo"}},[a("strong",[e._v("所属部门："+e._s(e.currentDept))]),e._v(" "),a("span")]),e._v(" "),a("div",{staticClass:"menuContent bp-borderColor",attrs:{id:"menuContent"}},[a("el-tree",{ref:"tree",staticClass:"ztree",staticStyle:{"font-size":"14px"},attrs:{data:e.treeData,"node-key":"id",props:e.defaultProps},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.node,i=t.data;return a("span",{staticClass:"custom-tree-node"},[a("span",{staticClass:"node",on:{dblclick:function(t){return e.dblclickNode(n,i)}}},[e._v(e._s(n.label))])])}}])})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogStaffVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addStaffClick}},[e._v("确 定")])],1)])],1)},i=[],r=(a("e697"),a("2b45"),a("9a33"),a("52c1"),a("b775")),s=a("7c15"),o=(a("6c8d"),a("a336")),l=a.n(o),c={name:"StaffSelect",watch:{dialogStaffVisible:function(e){var t=this;e?t.$nextTick((function(){var e=l()(window).height()-70;t.$nextTick((function(){l()("#bodyStaffOne .el-dialog").css("width","640px"),l()("#bodyStaffOne .el-dialog").css("margin-top","60px"),l()("#bodyStaffOne .el-dialog").css("max-height",e-10+"px"),l()("#bodyStaffOne .el-dialog").css("overflow","hidden"),l()("#bodyStaffOne .el-dialog__body").css("overflow-y","auto")}))})):(t.staffName="",t.keyUpName="",t.currentDept="",t.currentUser="",t.selectData=[],t.deptNos="",t.selectingData=[],t.selectCount=0,t.treeData=[])}},data:function(){return{isMultiple:"",dialogStaffVisible:!1,selectCount:0,selectData:[],currentUser:"",currentDept:"",queryTimeout:"",selectingData:[],deptNos:"",staffName:"",keyUpName:"",deptNoPath:"",defaultProps:{children:"children",label:"name",id:"id"},titel:"人员选择",treeData:[]}},mounted:function(){},methods:{addStaffClick:function(){var e=this;e.$emit("addStaffClick",e.selectData)},dblclickNode:function(e,t){var a=this;a.staffName=t.attribute.deptName,a.deptNoPath=t.attribute.deptNoPath,a.queryStaff(2),a.hideDept()},loadStaffs:function(){var e=this;if(null!=e.currentUser&&e.currentUser.length>0){for(var t=e.currentUser.toString().split(","),a=new Array,n=0;n<t.length;n++)t[n].length>0&&(t[n].indexOf("[")>0?a.push(t[n].split("[")[1].slice(0,-1)):a.push(t[n]));if(a.length>0){var i=s["a"].getStaffInfoByStaffIdsInfo,o={staffIDs:a.join(",")};Object(r["a"])({url:i,method:"get",params:o}).then((function(t){e.selectData=t.result,e.selectCount=e.selectData.length}))}}},showDeptName:function(){var e=this,t=l()("#selecting").find("option:selected"),a=t.val();for(var n in e.selectingData)e.selectingData[n].id==a&&(e.currentDept=e.selectingData[n].deptNamePath)},handleNodeClick:function(e){},hideDept:function(){var e=this;l()("#menuContent").fadeOut("fast"),l()(".bodyStaff").unbind("mousedown",e.onBodyDown)},showDept:function(){var e=this,t=l()("#keyword");t.offset();l()("#menuContent").css({left:"24px",top:"140px"}).slideDown("fast"),l()(".bodyStaff").bind("mousedown",e.onBodyDown)},onBodyDown:function(e){var t=this;"menuBtn"==e.target.id||"menuContent"==e.target.id||l()(e.target).parents("#menuContent").length>0||t.hideDept()},selectSingle:function(e){var t=this,a=l()("#selecting").find("option:selected"),n=a.val();for(var i in"0"==t.isMultiple&&t.selectData.length>0&&(t.selectingData.push(t.selectData[0]),t.selectData=[]),t.selectingData){var r=t.selectingData[i];r.id==n&&(t.selectData.push(r),t.selectingData.splice(l.a.inArray(r,t.selectingData),1))}t.selectCount=t.selectData.length,"0"==t.isMultiple&&1==e&&t.addStaffClick()},removeStaff:function(){var e=this;if(null!=e.selectData&&e.selectData.length>0){for(var t in e.selectData)e.selectingData.push(e.selectData[t]);e.selectData=[]}e.selectCount=0},allStaff:function(){var e=this;if("0"!=e.isMultiple){if(null!=e.selectingData&&e.selectingData.length>0){for(var t in e.selectingData)e.selectData.push(e.selectingData[t]);e.selectingData=[]}e.selectCount=e.selectData.length}},removeSingle:function(){var e=this,t=l()("#selected").find("option:selected"),a=t.val();if(null!=a&&null!=e.selectData&&e.selectData.length>0)for(var n in e.selectData){var i=e.selectData[n];i.id==a&&(e.selectingData.push(i),e.selectData.splice(l.a.inArray(i,e.selectData),1))}e.selectCount=e.selectData.length},keywordChange:function(){var e=this;e.staffName.length>1&&e.staffName!=e.keyUpName?(e.queryTimeout&&clearTimeout(e.queryTimeout),e.queryTimeout=setTimeout((function(){e.queryStaff(1)}),500)):e.staffName.length<2&&(e.queryTimeout&&clearTimeout(e.queryTimeout),e.selectingData=[]),e.keyUpName=e.staffName},queryStaff:function(e){var t=this,a=s["a"].getStaffInfosByName,n={staffName:t.staffName};2==e&&(a=s["a"].getStaffInfosByDepartNoPath,n={deptNoPath:t.deptNoPath}),Object(r["a"])({url:a,method:"get",params:n}).then((function(e){if(t.selectingData=e.result,t.selectData.length>0)for(var a in t.selectData)for(var n in t.selectingData)t.selectData[a].id==t.selectingData[n].id&&t.selectingData.splice(l.a.inArray(t.selectingData[n],t.selectingData),1)}))},initDept:function(){var e=this;Object(r["a"])({url:s["a"].getAllDepartmentInfos,method:"get",params:{depNos:e.deptNos}}).then((function(t){e.treeData=t.result}))},closeClick:function(){var e=this;e.dialogStaffVisible=!1},init:function(e,t){var a=this;a.staffName=JSON.parse(sessionStorage.userInfo)["departmentName"],a.keyUpName=JSON.parse(sessionStorage.userInfo)["departmentName"],a.deptNoPath=JSON.parse(sessionStorage.userInfo)["departmentNoPath"],a.dialogStaffVisible=!0,a.isMultiple=t,a.hideDept(),null!=e&&(null!=e.deptNos&&e.deptNos.length>0&&(a.deptNos=e.deptNos.spilt(",")),null!=e.selectedUser&&(a.currentUser=e.selectedUser)),"0"==a.isMultiple?a.titel="单选人员选择":a.titel="多选人员选择",a.initDept(),a.loadStaffs(),setTimeout((function(){a.queryStaff(2)}),200)}}},d=c,u=(a("3b7c"),a("9ca4")),m=Object(u["a"])(d,n,i,!1,null,"6c6c6327",null);t["a"]=m.exports},"9e76":function(e,t,a){"use strict";var n=a("69b3"),i=a("eafa"),r=a("e754"),s=a("7108");a("0aed")("match",1,(function(e,t,a,o){return[function(a){var n=e(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,n):new RegExp(a)[t](String(n))},function(e){var t=o(a,e,this);if(t.done)return t.value;var l=n(e),c=String(this);if(!l.global)return s(l,c);var d=l.unicode;l.lastIndex=0;var u,m=[],p=0;while(null!==(u=s(l,c))){var f=String(u[0]);m[p]=f,""===f&&(l.lastIndex=r(c,i(l.lastIndex),d)),p++}return 0===p?null:m}]}))},cfb2:function(e,t,a){},e697:function(e,t,a){"use strict";var n=a("e46b"),i=a("013f")(5),r="find",s=!0;r in[]&&Array(1)[r]((function(){s=!1})),n(n.P+n.F*s,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("0e8b")(r)}}]);