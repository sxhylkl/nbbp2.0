webpackJsonp([39],{"/EMU":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.top[data-v-06d3085e] {\n  padding: 15px 0;\n}\n.top img[data-v-06d3085e] {\n  width: 60px;\n  height: 60px;\n}\n.top p[data-v-06d3085e] {\n  font-size: 12px;\n}\n#iframe[data-v-06d3085e] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n}\n.tip[data-v-06d3085e] {\n  margin: 15px 10px;\n  padding: 5px;\n  background-color: #d2d2d2;\n  color: #939393;\n  border-radius: 3px;\n}\n",""])},"0L4D":function(t,e,n){"use strict";function i(t){n("YVVn")}Object.defineProperty(e,"__esModule",{value:!0});var a=n("woOf"),o=n.n(a),s=n("pDNl"),r=n("rHil"),d=n("1DHf"),l=n("2sLL"),c=n("jd+X"),f=n("7Otq"),m=n.n(f),p=n("gyMJ"),u={name:"BasicBusiness",components:{XInput:s.a,Group:r.a,Cell:d.a,XButton:l.a,Upload:c.a},beforeRouteEnter:function(t,e,n){document.title="基础信息",n()},data:function(){return{showTip:!1,mapVisible:!1,mapLoad:!1,defaultLogo:m.a,showLogo:"",loading:!1,form:{id:this.$route.query.id?this.$route.query.id:"",name:"",logo:"",address:"",locationLng:"",locationLat:"",province_name:"",city_name:"",area_name:""}}},created:function(){var t=this;Object(p.x)({ht_id:this.$route.query.id}).then(function(e){t.form=e.result,t.showLogo=e.result.logo,e.result.province_id||(t.showTip=!0)})},mounted:function(){document.getElementById("iframe").style.width=window.innerWidth+"px",document.getElementById("iframe").style.height=window.innerHeight+"px",window.addEventListener("message",this.onSelectAddress,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onSelectAddress,!1)},methods:{updateInfo:function(){var t=this;if(""===this.form.name)return void this.$vux.toast.show({text:"酒吧名称不能为空"});this.loading=!0,Object(p._35)(this.form).then(function(e){t.$vux.toast.show({text:"修改成功"}),t.$route.query.toMain&&t.$router.replace("/Main/"+t.$route.query.id)}).finally(function(){t.loading=!1})},afterClip:function(t){this.form.logo=t,this.showLogo=t},onSelectAddress:function(t){if(!t.data.type){var e=JSON.parse(t.data);if(-1!==e.address.indexOf("市")){var n=e.address.indexOf("市");e.address=e.address.substring(n+1)}if(-1!==e.address.indexOf("区")){var i=e.address.indexOf("区");e.address=e.address.substring(i+1)}var a={address:e.address,locationLng:e.point.lng,locationLat:e.point.lat,province_name:e.addressComponents.province,city_name:e.addressComponents.city,area_name:e.addressComponents.district};this.form=o()({},this.form,a),this.mapVisible=!1,console.log(t.data)}},showMap:function(){var t=this;this.mapVisible=!0,this.mapLoad||setTimeout(function(){document.getElementById("iframe").src="./map/index.html",t.mapLoad=!0},300)}},computed:{calAddress:function(){if(this.form.address)return this.form.area_name+this.form.address}}},h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container min-h"},[n("div",{staticClass:"inner"},[n("div",{staticClass:"top flex flex-v flex-align-center"},[n("upload",{staticClass:"pr",attrs:{name:"upload-logo",limitSize:400,"is-crop":!0,isFlag:1,isLogo:!0},on:{"on-clip":t.afterClip}},[t.showLogo?n("img",{staticClass:"circle",attrs:{src:t.$options.filters.prefixImageUrl(t.showLogo)}}):n("img",{attrs:{src:t.defaultLogo}}),t._v(" "),n("label",{staticClass:"n-label",attrs:{for:"upload-logo"}})]),t._v(" "),n("p",[t._v("商户logo，将展示在二维码、商户首页上")])],1),t._v(" "),n("group",{attrs:{"label-width":"4.5em","label-margin-right":"2em","label-align":"right"}},[n("x-input",{attrs:{title:"昵&emsp;&emsp;称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),n("cell",{attrs:{title:"商户地址",value:t.calAddress,"is-link":"","value-align":"left"},nativeOn:{click:function(e){t.showMap(e)}}})],1),t._v(" "),n("div",{staticClass:"bottom_abs"},[n("x-button",{attrs:{gradients:["#1D62F0","#1D62F0"],"show-loading":t.loading},nativeOn:{click:function(e){t.updateInfo(e)}}},[t._v("保存")])],1),t._v(" "),n("transition",{attrs:{name:"slide-fade"}},[n("iframe",{directives:[{name:"show",rawName:"v-show",value:t.mapVisible,expression:"mapVisible"}],staticStyle:{"background-color":"#fff"},attrs:{src:"",id:"iframe",frameborder:"0",allowTransparency:"true"}})])],1),t._v(" "),t.showTip?n("div",{staticClass:"tip f13"},[t._v("提示: 如果您的当前商户未填写地址将不会出现在牛霸商户列表页，请尽快填写。")]):t._e()])},g=[],v={render:h,staticRenderFns:g},x=v,w=n("VU/8"),b=i,_=w(u,x,!1,b,"data-v-06d3085e",null);e.default=_.exports},YVVn:function(t,e,n){var i=n("/EMU");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("4a769574",i,!0)}});