(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eae6ffce"],{"013f":function(t,e,a){var n=a("4ce5"),i=a("224c"),o=a("008a"),l=a("eafa"),s=a("5dd2");t.exports=function(t,e){var a=1==t,r=2==t,c=3==t,d=4==t,u=6==t,f=5==t||u,p=e||s;return function(e,s,m){for(var g,h,v=o(e),y=i(v),D=n(s,m,3),b=l(y.length),k=0,C=a?p(e,b):r?p(e,0):void 0;b>k;k++)if((f||k in y)&&(g=y[k],h=D(g,k,v),t))if(a)C[k]=h;else if(h)switch(t){case 3:return!0;case 5:return g;case 6:return k;case 2:C.push(g)}else if(d)return!1;return u?-1:c||d?d:C}}},"0602":function(t,e,a){"use strict";var n=a("f40f"),i=a.n(n);i.a},"1c34":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"DeptSelect"}},[a("el-dialog",{attrs:{title:t.titel,visible:t.dialogDeptVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogDeptVisible=e}}},[a("div",{staticClass:"bp-alert bp-alert-info",attrs:{id:"alert"}},[a("strong",[t._v("提示：")]),t._v("双击选中或取消\n    ")]),t._v(" "),a("table",{attrs:{id:"tab"}},[a("tr",[a("td",[t._v("部门列表：")]),t._v(" "),a("td",{staticStyle:{width:"80px","text-align":"center"},attrs:{rowspan:"2"}},[a("div",[a("el-button",{attrs:{type:"primary",title:"添加全部",size:"small",id:"addAll",icon:"el-icon-d-arrow-right"},on:{click:function(e){return t.addAllDept()}}})],1),t._v(" "),a("div",[a("el-button",{attrs:{type:"primary",title:"移除选中项",size:"small",icon:" el-icon-arrow-left"},on:{click:function(e){return t.removeFirstDept()}}})],1),t._v(" "),a("div",[a("el-button",{attrs:{type:"primary",title:"移除全部",size:"small",icon:"el-icon-d-arrow-right"},on:{click:function(e){return t.removeAllDept()}}})],1)]),t._v(" "),a("td",[a("span",[t._v("已选部门："+t._s(t.selectCount))])])]),t._v(" "),a("tr",[a("td",{attrs:{id:"tdTree"}},[a("div",{staticClass:"menuContent bp-borderColor",attrs:{id:"menuContent"}},[a("el-tree",{ref:"tree",staticClass:"ztree",staticStyle:{"font-size":"14px"},attrs:{"check-strictly":"",data:t.treeData,"default-checked-keys":t.keys,"node-key":"id","show-checkbox":"",props:t.defaultProps},on:{"check-change":t.handleCheckChange},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.node,i=e.data;return a("span",{staticClass:"custom-tree-node"},[a("span",{staticClass:"node",on:{dblclick:function(e){return t.dblclickNode(n,i)}}},[t._v(t._s(n.label))])])}}])})],1)]),t._v(" "),a("td",[a("select",{attrs:{id:"selected",name:"selected",multiple:"multiple"},on:{dblclick:function(e){return t.removeFirstDept()}}},t._l(t.selectData,(function(e){return a("option",{key:e.deptId,attrs:{"data-value":e},domProps:{value:e.deptId}},[t._v("\n              "+t._s(e.deptName)+"\n            ")])})),0)])])]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogDeptVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.addDeptClick}},[t._v("确 定")])],1)])],1)},i=[],o=(a("e697"),a("6d57"),a("52c1"),a("b775")),l=a("7c15"),s=(a("6c8d"),a("a336")),r=a.n(s),c={name:"DeptSelect",watch:{dialogDeptVisible:function(t){var e=this;t?e.$nextTick((function(){var t=r()(window).height()-70;r()("#DeptSelect .el-dialog").css("width","640px"),r()("#DeptSelect .el-dialog").css("margin-top","60px"),r()("#DeptSelect .el-dialog").css("max-height",t-10+"px"),r()("#DeptSelect .el-dialog").css("overflow","hidden"),r()("#DeptSelect .el-dialog__body").css("overflow-y","auto")})):(e.selectData=[],e.keys=[],e.deptNos="")}},data:function(){return{isMultiple:"",dialogDeptVisible:!1,selectCount:0,selectData:[],keys:[],deptNos:"",defaultProps:{children:"children",label:"name",id:"id"},titel:"部门选择",treeData:[]}},mounted:function(){},methods:{addDeptClick:function(){var t=this;t.$emit("addDeptClick",t.selectData)},handleCheckChange:function(t,e,a){var n=this;if("0"==n.isMultiple)e&&(n.selectData=[],n.keys=[],n.selectCount=1,n.keys.push(t.id),n.selectData.push(t.attribute),n.$refs.tree.setCheckedKeys(n.keys));else{n.selectData=[],n.keys=[];var i=n.$refs.tree.getCheckedNodes();if(n.selectCount=i.length,i.length>0)for(var o in i)n.selectData.push(i[o].attribute),n.keys.push(i[o].id)}},dblclickNode:function(t,e){var a=this;"0"==a.isMultiple&&(a.selectData=[],a.keys=[],a.selectCount=0,a.selectData.push(e.attribute),a.keys.push(t.id),a.addDeptClick())},handleNodeClick:function(t){},addAllDept:function(){var t=this;if("0"==t.isMultiple)t.$message({type:"info",message:"只能选择一个部门"});else{var e=t.$refs.tree.store._getAllNodes();if(t.selectData=[],t.keys=[],t.selectCount=e.length,e.length>0)for(var a in e)t.selectData.push(e[a].data.attribute),t.keys.push(e[a].data.id)}},removeAllDept:function(){var t=this;t.keys=[],t.selectData=[],t.selectCount=0,t.$refs.tree.setCheckedKeys(t.keys)},removeFirstDept:function(){var t=this,e=r()("#selected").find("option:selected");for(var a in t.selectData){var n=t.selectData[a];n.deptId==e.val()&&t.selectData.splice(r.a.inArray(n,t.selectData),1)}t.keys.splice(r.a.inArray(e.val(),t.keys),1),t.$refs.tree.setCheckedKeys(t.keys),t.selectCount=t.selectData.length},initAllDept:function(){var t=this;Object(o["a"])({url:l["a"].getAllDepartmentInfos,method:"get",params:{}}).then((function(e){t.treeData=e.result}))},initDept:function(){var t=this;t.initAllDept(),""!=t.deptNos&&Object(o["a"])({url:l["a"].getDepartmentInfos,method:"get",params:{depNos:t.deptNos}}).then((function(e){for(var a in t.selectData=e.result,t.selectCount=t.selectData.length,t.keys=[],t.selectData)t.keys.push(t.selectData[a].deptId)}))},closeClick:function(){var t=this;t.dialogDeptVisible=!1},init:function(t,e){var a=this;a.dialogDeptVisible=!0,a.isMultiple=e,null!=t&&""!=t.deptNos&&(a.deptNos=t.deptNos),"0"==a.isMultiple?a.titel="单选部门选择":a.titel="多选部门选择",a.initDept()}}},d=c,u=(a("9be8"),a("9ca4")),f=Object(u["a"])(d,n,i,!1,null,"6a752310",null);e["a"]=f.exports},3240:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container"},[a("div",{staticClass:"sidebar-container"},[a("div",{staticClass:"tree_content"},[a("el-tree",{ref:"tree",staticClass:"filter-tree",attrs:{data:t.treeData,props:t.defaultProps,"highlight-current":"","default-expand-all":"","filter-node-method":t.filterNode},on:{"node-click":t.handleNodeClick}})],1)]),t._v(" "),a("div",{staticClass:"main-container"},[a("div",{staticStyle:{}},[a("el-form",{ref:"form",attrs:{inline:!0,model:t.form,"label-position":t.labelPosition}},[a("el-form-item",{attrs:{label:"用户组名称","label-width":"100px"}},[a("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入用户组名称"},model:{value:t.form.roleName,callback:function(e){t.$set(t.form,"roleName",e)},expression:"form.roleName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"描述","label-width":"80px"}},[a("el-input",{staticClass:"el-form-item_input",attrs:{size:"small",placeholder:"请输入描述"},model:{value:t.form.roleNote,callback:function(e){t.$set(t.form,"roleNote",e)},expression:"form.roleNote"}})],1),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:function(e){return t.getListData()}}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"info",size:"small",icon:"el-icon-refresh-right"},on:{click:function(e){return t.resetGetDataList()}}},[t._v("重置")])],1)],1),t._v(" "),a("div",{staticStyle:{height:"calc(100vh - 150px)"},attrs:{id:"table_content"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%","font-size":"12px"},attrs:{height:t.tableHeader,border:"",data:t.tableData,"row-key":"id"}},[a("el-table-column",{attrs:{prop:"companyName",label:"基地",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"companyStationConfigNames",label:"电站",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"用户组名称",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"note",label:"描述"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createdBy",label:"创建人",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"",label:"创建时间",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.convertDateTime(e.row.createdOn)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"el-icon-edit",attrs:{size:"mini",title:"编辑角色"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}}),t._v(" "),a("el-button",{staticClass:"el-icon-user",attrs:{size:"mini",title:"人员授权"},on:{click:function(a){return t.staffSelectClick(e.row)}}}),t._v(" "),a("el-button",{staticClass:"el-icon-s-check",attrs:{size:"mini",title:"部门授权"},on:{click:function(a){return t.deptSelectClick(e.row)}}}),t._v(" "),a("el-button",{staticClass:"el-icon-delete",attrs:{size:"mini",title:"删除角色",type:"danger"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}})]}}])},[a("template",{slot:"header"},[a("span",[t._v("\n            操作\n              "),a("i",{staticClass:"el-icon-circle-plus",staticStyle:{color:"#409eff","margin-left":"3px","font-size":"17px",cursor:"pointer",top:"2px",position:"relative"},on:{click:t.addListClick}})])])],2)],1),t._v(" "),a("div",{staticClass:"my_el_pagination"},[a("el-pagination",{attrs:{"page-sizes":[20,50,100],"page-size":t.size,layout:"prev, pager, next,jumper,sizes,total",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),a("AddPage",{ref:"addpage",attrs:{title:t.addTitle},on:{addClick:t.addClick}}),t._v(" "),a("V-StaffSelect",{ref:"staffSelect",on:{addStaffClick:t.addStaffClick}}),t._v(" "),a("DeptSelect",{ref:"deptSelect",on:{addDeptClick:t.addDeptClick}})],1)])},i=[],o=(a("cc57"),a("a336")),l=a.n(o),s=a("b775"),r=a("7c15"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"addRole"}},[a("div",[a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"角色管理",visible:t.dialogVisible,"close-on-click-modal":!1,top:"5%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"left"},[a("el-tree",{ref:"tree",staticClass:"ztree",staticStyle:{"font-size":"14px",height:"300px"},attrs:{data:t.treeData,"default-expand-all":"","default-checked-keys":t.keys,"node-key":"id","show-checkbox":"",props:t.defaultProps},on:{"check-change":t.handleCheckChange}})],1),t._v(" "),a("div",{staticClass:"right"},[a("el-form",{ref:"addForm",attrs:{title:"角色管理",inline:!0,model:t.addForm,rules:t.rules,"label-position":t.labelPosition}},[a("el-form-item",{attrs:{label:"基地",prop:"companyId","label-width":"100px"}},[a("el-select",{staticClass:"el-form-item_input",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"请选择基地"},on:{change:t.getStataionData},model:{value:t.addForm.companyId,callback:function(e){t.$set(t.addForm,"companyId",e)},expression:"addForm.companyId"}},t._l(t.companyData,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"电站",prop:"companyStationConfigIds","label-width":"100px"}},[a("el-select",{staticClass:"el-form-item_input",staticStyle:{width:"200px"},attrs:{size:"small",multiple:"",placeholder:"请选择电站"},model:{value:t.companyStationConfigIds,callback:function(e){t.companyStationConfigIds=e},expression:"companyStationConfigIds"}},t._l(t.stataionData,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"用户组名称",prop:"name","label-width":"100px"}},[a("el-input",{staticClass:"el-form-item_input",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"请选择用户组名称"},model:{value:t.addForm.name,callback:function(e){t.$set(t.addForm,"name",e)},expression:"addForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"note","label-width":"100px"}},[a("el-input",{staticClass:"el-form-item_input",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"请输入描述"},model:{value:t.addForm.note,callback:function(e){t.$set(t.addForm,"note",e)},expression:"addForm.note"}})],1),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("span",[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v(" 取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.addClick}},[t._v("确 定")])],1)])],1)],1)])],1)])},d=[],u=(a("9a33"),a("6d57"),a("e697"),a("6c8d")),f={watch:{dialogVisible:function(t){var e=this;t?e.$nextTick((function(){var t=l()(window).height()-70;l()("#addRole").find(".el-dialog").css("width","700px"),l()("#addRole").find(".el-dialog").css("height",t-150+"px"),l()("#addRole").find(".el-dialog").css("overflow","hidden"),l()("#addRole").find(".el-dialog__body").css("height",t-280+"px").css("overflow-y","auto")})):(e.addForm={companyStationConfigIds:"",companyName:"",companyId:"",companyStationConfigNames:"",id:"",name:"",note:""},e.keys=[],e.stataionData=[],e.treeData=[],e.companyData=[],e.companyStationConfigIds=[],e.$refs["addForm"].resetFields())}},data:function(){return{stataionData:[],dialogVisible:!1,titel:"角色管理",labelPosition:"right",companyData:[],keys:[],isEdit:!1,defaultProps:{children:"children",label:"name",id:"id"},rules:{companyId:[{required:!0,message:"请选择基地",trigger:"blur"}],name:[{required:!0,message:"请输入用户组名称",trigger:"blur"}],note:[{required:!0,message:"请输入描述",trigger:"blur"}]},addForm:{companyStationConfigIds:"",companyName:"",companyId:"",companyStationConfigNames:"",id:"",name:"",note:""},companyStationConfigIds:[],treeData:[]}},components:{},methods:{addClick:function(){var t=this;this.$refs["addForm"].validate((function(e){if(e)if(0==t.keys.length)t.$message({type:"info",message:"至少选中一个菜单授权!"});else{for(var a in t.companyData)t.companyData[a].id==t.addForm.companyId&&(t.addForm.companyName=t.companyData[a].name);var n=[];if(t.companyStationConfigIds.length>0){var i=t.companyStationConfigIds.join(",");for(var a in t.stataionData)-1!=i.indexOf(t.stataionData[a].id)&&n.push(t.stataionData[a].name);t.addForm.companyStationConfigIds=i}t.addForm.companyStationConfigNames=n.join(","),t.addForm.menuIds=t.keys.join(","),t.$emit("addClick",t.addForm)}else;}))},handleCheckChange:function(t,e,a){var n=this;n.keys=[];var i=n.$refs.tree.getCheckedNodes();if(i.length>0)for(var o in i)n.keys.push(i[o].id)},handleNodeClick:function(t){},closeClick:function(){var t=this;t.dialogVisible=!1},getCompanyData:function(){var t=this;Object(s["a"])({url:r["a"].getStationUnitInfo,method:"get",params:{parent:"0",unitlevel:"Basic"}}).then((function(e){t.companyData=e.result}))},initMenuTree:function(){var t=this;Object(s["a"])({url:r["a"].getMenuTree,method:"get",params:{roleId:t.addForm.id,opType:t.isEdit?"edit":"add"}}).then((function(e){"200"==e.code?(t.treeData=e.result,e.workOrderManagerId&&(t.keys=e.workOrderManagerId.split(","))):t.$message({type:"info",message:e.message})}))},getStataionData:function(t){var e=this;e.addForm.companyId=t;var a=e.companyData.find((function(e){return e.id===t}));null!=a&&(e.addForm.companyName=a.name),Object(s["a"])({url:r["a"].getStationUnitInfo,method:"get",params:{parent:e.addForm.companyId,unitlevel:"Plant"}}).then((function(t){"200"==t.code?e.stataionData=t.result:e.$message({type:"info",message:t.message})}))},init:function(t,e){var a=this;a.dialogVisible=!0,a.isEdit=e,a.keys=[],a.titel="",e?(a.addForm={companyName:t.companyName,companyId:t.companyId,companyStationConfigNames:t.companyStationConfigNames,id:t.id,name:t.name,note:t.note},a.initMenuTree(),a.getCompanyData(),a.getStataionData(t.companyId),t.companyStationConfigIds&&(a.companyStationConfigIds=t.companyStationConfigIds.split(","))):(a.initMenuTree(),a.addForm.companyId=t.companyId,a.getCompanyData(),a.addForm.id=t.id,""!=t.companyId&&(a.getStataionData(a.addForm.companyId),t.companyStationConfigIds&&(a.companyStationConfigIds=t.companyStationConfigIds.split(","))))}}},p=f,m=(a("5ce6"),a("9ca4")),g=Object(m["a"])(p,c,d,!1,null,null,null),h=g.exports,v=a("9805"),y=a("1c34"),D={data:function(){return{addTitle:"",tableData:[],tableHeader:0,labelPosition:"right",size:50,total:1,PageIndex:1,form:{roleName:"",roleNote:"",companyId:"",companyStationConfigIds:""},defaultProps:{children:"children",label:"name",code:"code",id:"id"},roleId:"",treeData:[],loading:!1}},mounted:function(){var t=this;l()(".hamburger-close").show(),t.getDataTreeList(),t.getListData(),t.setHeight()},components:{AddPage:h,DeptSelect:y["a"],"V-StaffSelect":v["a"]},methods:{handleNodeClick:function(t,e,a){var n=this;n.form.companyId="",n.form.companyStationConfigIds="",1==e.level?n.form.companyId=e.data.id:(n.form.companyStationConfigIds=e.data.id,n.form.companyId=e.parent.data.id),n.getListData()},filterNode:function(t,e){return!t||-1!==e.label.indexOf(t)},getDataTreeList:function(){var t=this;Object(s["a"])({url:r["a"].getCompanyStationZtree,method:"get"}).then((function(e){t.$nextTick((function(){l()(".el-tree-node__children").removeClass("el-tree-node__children")})),t.treeData=e.result}))},convertDateTime:function(t){return u["a"].getTime(t)},resetGetDataList:function(){var t=this;t.form={roleName:"",roleNote:"",companyId:"",companyStationConfigIds:""},t.getListData()},deptSelectClick:function(t){var e=this;e.roleId=t.id,Object(s["a"])({url:r["a"].getDeptNos,method:"get",params:{roleId:t.id}}).then((function(t){if("200"==t.code){var a=t.result;e.$refs["deptSelect"].init({deptNos:a.join(",")},"1")}}))},addDeptClick:function(t){for(var e=this,a=new Array,n=0;n<t.length;n++)a.push(t[n].deptNo);Object(s["a"])({url:r["a"].addDept,method:"post",data:{id:e.roleId,staffIds:a.join(",")}}).then((function(t){"200"==t.code&&(e.$message({type:"success",message:"部门授权成功!"}),e.$refs["deptSelect"].closeClick())}))},addStaffClick:function(t){for(var e=this,a=new Array,n=0;n<t.length;n++)a.push(t[n].id);Object(s["a"])({url:r["a"].addStaff,method:"post",data:{id:e.roleId,staffIds:a.join(",")}}).then((function(t){"200"==t.code&&e.$message({type:"success",message:"人员授权成功!"})})),e.$refs["staffSelect"].closeClick()},staffSelectClick:function(t){var e=this;e.roleId=t.id,Object(s["a"])({url:r["a"].getStaffId,method:"get",params:{roleId:t.id}}).then((function(t){if(200==t.code){var a=t.result;e.$refs["staffSelect"].init({deptNos:"",selectedUser:null!=a&&a.length>0?a.join(","):""},"1")}}))},handleEdit:function(t,e){var a=this;a.$refs["addpage"].init(e,!0)},handleDelete:function(t,e){var a=this;this.$confirm("您确定要删除该信息吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["a"])({url:r["a"].deleteRole,method:"get",params:{id:e.id}}).then((function(t){200==t.code&&(a.$message({type:"success",message:"删除成功!"}),a.getListData())}))})).catch((function(){}))},addListClick:function(){var t=this;t.addTitle="添加角色";var e={id:""};e.companyId=t.form.companyId,e.companyStationConfigIds=t.form.companyStationConfigIds,t.$refs["addpage"].init(e,!1)},addClick:function(t){var e=this,a=r["a"].saveRole,n={};n={name:t.name,note:t.note,companyStationConfigIds:t.companyStationConfigIds,companyStationConfigNames:t.companyStationConfigNames,companyId:t.companyId,menuIds:t.menuIds,companyName:t.companyName},t.id&&(n.id=t.id);Object(s["a"])({url:a,method:"post",data:n}).then((function(t){"200"==t.code&&(e.$message({type:"success",message:"操作成功!"}),e.$refs["addpage"].closeClick(),e.getListData())}))},setHeight:function(){var t=this;t.$nextTick((function(){var e=document.getElementById("table_content"),a=e.offsetHeight;t.tableHeader=a-30}))},getListData:function(){var t=this;t.loading=!0,t.form.PageSize=t.size,t.form.PageIndex=t.PageIndex,Object(s["a"])({url:r["a"].roleList,method:"post",data:t.form}).then((function(e){if("200"==e.code){t.loading=!1;var a=e.result.rows;t.tableData=a,t.total=parseInt(e.result.records)}}))},handleSizeChange:function(t){var e=this;e.size=t,e.getListData()},handleCurrentChange:function(t){var e=this;e.PageIndex=t,e.getListData()}}},b=D,k=(a("0602"),Object(m["a"])(b,n,i,!1,null,"db6dc83e",null));e["default"]=k.exports},"361c":function(t,e,a){},"3b7c":function(t,e,a){"use strict";var n=a("cfb2"),i=a.n(n);i.a},"4dad":function(t,e,a){},"5ce6":function(t,e,a){"use strict";var n=a("4dad"),i=a.n(n);i.a},"5dd2":function(t,e,a){var n=a("81dc");t.exports=function(t,e){return new(n(t))(e)}},"6c8d":function(t,e,a){"use strict";a("9e76"),a("9dd9"),a("9a33");e["a"]={getUUid:function(){for(var t=[],e="0123456789abcdef",a=0;a<36;a++)t[a]=e.substr(Math.floor(16*Math.random()),1);t[14]="4",t[19]=e.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-";var n=t.join("");return n},getTime:function(t){var e=new Date(t),a=e.getFullYear()+"-",n=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",i=(e.getDate()<10?"0"+e.getDate():e.getDate())+" ",o=(e.getHours()<10?"0"+e.getHours():e.getHours())+":",l=(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":",s=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return a+n+i+o+l+s},getDate:function(t){var e=new Date(t),a=e.getFullYear()+"-",n=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",i=e.getDate()<10?"0"+e.getDate():e.getDate();return a+n+i},ConvertLevel:function(t){return"Basic"==t?"基地":"Plant"==t?"电厂":"机组"},IsCanDisplayImage:function(t){for(var e="jpg,png,gif,bmp,icon,jpeg",a=e.split(","),n=0;n<a.length;n++)if(a[n]==t)return!0;return!1},getQueryVariable:function(t){var e=window.location.href,a=e.split("?");if(a.length>1){a=a[1].split("&");for(var n=0;n<a.length;n++){var i=a[n].split("=");if(i[0]==t)return i[1]}return null}return null},setCookie:function(t,e){var a=30,n=new Date;n.setTime(n.getTime()+24*a*60*60*1e3),document.cookie=t+"="+escape(e)+";expires="+n.toGMTString()},getCookie:function(t){var e,a=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(e=document.cookie.match(a))?unescape(e[2]):null},delCookie:function(t){var e=new Date;e.setTime(e.getTime()-1);var a=getCookie(t);null!=a&&(document.cookie=t+"="+a+";expires="+e.toGMTString())}}},"81dc":function(t,e,a){var n=a("fb68"),i=a("2346"),o=a("cb3d")("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),n(e)&&(e=e[o],null===e&&(e=void 0))),void 0===e?Array:e}},9805:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bodyStaff",attrs:{id:"bodyStaffOne"}},[a("el-dialog",{attrs:{title:t.titel,visible:t.dialogStaffVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogStaffVisible=e}}},[a("div",{staticClass:"bp-alert bp-alert-info",staticStyle:{"margin-top":"10x"},attrs:{id:"alert"}},[a("strong",[t._v("提示：")]),t._v("关键字至少2个字，双击选中或取消。\n      ")]),t._v(" "),a("table",{attrs:{id:"tab"}},[a("tr",[a("td",[a("el-input",{ref:"editTagFoucus",staticStyle:{width:"200px"},attrs:{size:"mini"},on:{blur:function(e){return t.keywordChange()}},nativeOn:{keyup:function(e){return t.keywordChange()}},model:{value:t.staffName,callback:function(e){t.staffName=e},expression:"staffName"}}),t._v(" "),a("a",{staticClass:"bp-linkbtn",attrs:{id:"menuBtn",href:"#"},on:{click:function(e){return t.showDept(),!1}}},[t._v("部门")])],1),t._v(" "),a("td",{attrs:{rowspan:"2",id:"td2"}},[a("div",[a("el-button",{attrs:{type:"primary",title:"添加全部",size:"small",id:"addAll",icon:"el-icon-d-arrow-right"},on:{click:function(e){return t.allStaff()}}})],1),t._v(" "),a("div",[a("el-button",{attrs:{type:"primary",title:"移除选中项",size:"small",icon:"el-icon-arrow-right"},on:{click:function(e){return t.selectSingle()}}})],1),t._v(" "),a("div",[a("el-button",{attrs:{type:"primary",title:"移除选中项",size:"small",icon:"el-icon-arrow-left"},on:{click:function(e){return t.removeSingle()}}})],1),t._v(" "),a("div",[a("el-button",{attrs:{type:"primary",title:"移除全部",size:"small",icon:"el-icon-d-arrow-left"},on:{click:function(e){return t.removeStaff()}}})],1)]),t._v(" "),a("td",[a("span",[t._v("已选人员："+t._s(t.selectCount))])])]),t._v(" "),a("tr",[a("td",[a("select",{attrs:{id:"selecting",name:"selecting",multiple:"multiple"},on:{dblclick:function(e){return t.selectSingle(1)},click:t.showDeptName}},t._l(t.selectingData,(function(e){return a("option",{key:e.id,attrs:{"data-value":e},domProps:{value:e.id}},[t._v("\n                "+t._s(e.displayName)+"\n              ")])})),0)]),t._v(" "),a("td",{staticStyle:{"padding-top":"10px"}},[a("select",{attrs:{id:"selected",name:"selected",multiple:"multiple"},on:{dblclick:function(e){return t.removeSingle()}}},t._l(t.selectData,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v("\n                "+t._s(e.displayName)+"\n              ")])})),0)])])]),t._v(" "),a("p",{staticStyle:{"margin-bottom":"0px"},attrs:{id:"deptInfo"}},[a("strong",[t._v("所属部门："+t._s(t.currentDept))]),t._v(" "),a("span")]),t._v(" "),a("div",{staticClass:"menuContent bp-borderColor",attrs:{id:"menuContent"}},[a("el-tree",{ref:"tree",staticClass:"ztree",staticStyle:{"font-size":"14px"},attrs:{data:t.treeData,"node-key":"id",props:t.defaultProps},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.node,i=e.data;return a("span",{staticClass:"custom-tree-node"},[a("span",{staticClass:"node",on:{dblclick:function(e){return t.dblclickNode(n,i)}}},[t._v(t._s(n.label))])])}}])})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogStaffVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.addStaffClick}},[t._v("确 定")])],1)])],1)},i=[],o=(a("e697"),a("2b45"),a("9a33"),a("52c1"),a("b775")),l=a("7c15"),s=(a("6c8d"),a("a336")),r=a.n(s),c={name:"StaffSelect",watch:{dialogStaffVisible:function(t){var e=this;t?e.$nextTick((function(){var t=r()(window).height()-70;e.$nextTick((function(){r()("#bodyStaffOne .el-dialog").css("width","640px"),r()("#bodyStaffOne .el-dialog").css("margin-top","60px"),r()("#bodyStaffOne .el-dialog").css("max-height",t-10+"px"),r()("#bodyStaffOne .el-dialog").css("overflow","hidden"),r()("#bodyStaffOne .el-dialog__body").css("overflow-y","auto")}))})):(e.staffName="",e.keyUpName="",e.currentDept="",e.currentUser="",e.selectData=[],e.deptNos="",e.selectingData=[],e.selectCount=0,e.treeData=[])}},data:function(){return{isMultiple:"",dialogStaffVisible:!1,selectCount:0,selectData:[],currentUser:"",currentDept:"",queryTimeout:"",selectingData:[],deptNos:"",staffName:"",keyUpName:"",deptNoPath:"",defaultProps:{children:"children",label:"name",id:"id"},titel:"人员选择",treeData:[]}},mounted:function(){},methods:{addStaffClick:function(){var t=this;t.$emit("addStaffClick",t.selectData)},dblclickNode:function(t,e){var a=this;a.staffName=e.attribute.deptName,a.deptNoPath=e.attribute.deptNoPath,a.queryStaff(2),a.hideDept()},loadStaffs:function(){var t=this;if(null!=t.currentUser&&t.currentUser.length>0){for(var e=t.currentUser.toString().split(","),a=new Array,n=0;n<e.length;n++)e[n].length>0&&(e[n].indexOf("[")>0?a.push(e[n].split("[")[1].slice(0,-1)):a.push(e[n]));if(a.length>0){var i=l["a"].getStaffInfoByStaffIdsInfo,s={staffIDs:a.join(",")};Object(o["a"])({url:i,method:"get",params:s}).then((function(e){t.selectData=e.result,t.selectCount=t.selectData.length}))}}},showDeptName:function(){var t=this,e=r()("#selecting").find("option:selected"),a=e.val();for(var n in t.selectingData)t.selectingData[n].id==a&&(t.currentDept=t.selectingData[n].deptNamePath)},handleNodeClick:function(t){},hideDept:function(){var t=this;r()("#menuContent").fadeOut("fast"),r()(".bodyStaff").unbind("mousedown",t.onBodyDown)},showDept:function(){var t=this,e=r()("#keyword");e.offset();r()("#menuContent").css({left:"24px",top:"140px"}).slideDown("fast"),r()(".bodyStaff").bind("mousedown",t.onBodyDown)},onBodyDown:function(t){var e=this;"menuBtn"==t.target.id||"menuContent"==t.target.id||r()(t.target).parents("#menuContent").length>0||e.hideDept()},selectSingle:function(t){var e=this,a=r()("#selecting").find("option:selected"),n=a.val();for(var i in"0"==e.isMultiple&&e.selectData.length>0&&(e.selectingData.push(e.selectData[0]),e.selectData=[]),e.selectingData){var o=e.selectingData[i];o.id==n&&(e.selectData.push(o),e.selectingData.splice(r.a.inArray(o,e.selectingData),1))}e.selectCount=e.selectData.length,"0"==e.isMultiple&&1==t&&e.addStaffClick()},removeStaff:function(){var t=this;if(null!=t.selectData&&t.selectData.length>0){for(var e in t.selectData)t.selectingData.push(t.selectData[e]);t.selectData=[]}t.selectCount=0},allStaff:function(){var t=this;if("0"!=t.isMultiple){if(null!=t.selectingData&&t.selectingData.length>0){for(var e in t.selectingData)t.selectData.push(t.selectingData[e]);t.selectingData=[]}t.selectCount=t.selectData.length}},removeSingle:function(){var t=this,e=r()("#selected").find("option:selected"),a=e.val();if(null!=a&&null!=t.selectData&&t.selectData.length>0)for(var n in t.selectData){var i=t.selectData[n];i.id==a&&(t.selectingData.push(i),t.selectData.splice(r.a.inArray(i,t.selectData),1))}t.selectCount=t.selectData.length},keywordChange:function(){var t=this;t.staffName.length>1&&t.staffName!=t.keyUpName?(t.queryTimeout&&clearTimeout(t.queryTimeout),t.queryTimeout=setTimeout((function(){t.queryStaff(1)}),500)):t.staffName.length<2&&(t.queryTimeout&&clearTimeout(t.queryTimeout),t.selectingData=[]),t.keyUpName=t.staffName},queryStaff:function(t){var e=this,a=l["a"].getStaffInfosByName,n={staffName:e.staffName};2==t&&(a=l["a"].getStaffInfosByDepartNoPath,n={deptNoPath:e.deptNoPath}),Object(o["a"])({url:a,method:"get",params:n}).then((function(t){if(e.selectingData=t.result,e.selectData.length>0)for(var a in e.selectData)for(var n in e.selectingData)e.selectData[a].id==e.selectingData[n].id&&e.selectingData.splice(r.a.inArray(e.selectingData[n],e.selectingData),1)}))},initDept:function(){var t=this;Object(o["a"])({url:l["a"].getAllDepartmentInfos,method:"get",params:{depNos:t.deptNos}}).then((function(e){t.treeData=e.result}))},closeClick:function(){var t=this;t.dialogStaffVisible=!1},init:function(t,e){var a=this;a.staffName=JSON.parse(sessionStorage.userInfo)["departmentName"],a.keyUpName=JSON.parse(sessionStorage.userInfo)["departmentName"],a.deptNoPath=JSON.parse(sessionStorage.userInfo)["departmentNoPath"],a.dialogStaffVisible=!0,a.isMultiple=e,a.hideDept(),null!=t&&(null!=t.deptNos&&t.deptNos.length>0&&(a.deptNos=t.deptNos.spilt(",")),null!=t.selectedUser&&(a.currentUser=t.selectedUser)),"0"==a.isMultiple?a.titel="单选人员选择":a.titel="多选人员选择",a.initDept(),a.loadStaffs(),setTimeout((function(){a.queryStaff(2)}),200)}}},d=c,u=(a("3b7c"),a("9ca4")),f=Object(u["a"])(d,n,i,!1,null,"6c6c6327",null);e["a"]=f.exports},"9be8":function(t,e,a){"use strict";var n=a("361c"),i=a.n(n);i.a},"9e76":function(t,e,a){"use strict";var n=a("69b3"),i=a("eafa"),o=a("e754"),l=a("7108");a("0aed")("match",1,(function(t,e,a,s){return[function(a){var n=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,n):new RegExp(a)[e](String(n))},function(t){var e=s(a,t,this);if(e.done)return e.value;var r=n(t),c=String(this);if(!r.global)return l(r,c);var d=r.unicode;r.lastIndex=0;var u,f=[],p=0;while(null!==(u=l(r,c))){var m=String(u[0]);f[p]=m,""===m&&(r.lastIndex=o(c,i(r.lastIndex),d)),p++}return 0===p?null:f}]}))},cfb2:function(t,e,a){},e697:function(t,e,a){"use strict";var n=a("e46b"),i=a("013f")(5),o="find",l=!0;o in[]&&Array(1)[o]((function(){l=!1})),n(n.P+n.F*l,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("0e8b")(o)},f40f:function(t,e,a){}}]);