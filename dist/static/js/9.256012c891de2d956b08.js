webpackJsonp([9],{HXef:function(n,t,e){"use strict";function a(n){e("pwyO")}Object.defineProperty(t,"__esModule",{value:!0});var i=e("Q6pl"),o=e("cHu4"),r=e("oAV5"),s=e("gyMJ"),l=e("6xed"),c={data:function(){return{adsValue:["330000","330200"],addressData:[],showAddress:!1,barsList:[],userAllow:!0,userPosition:{lat:"",lng:""},loading:!0}},beforeRouteEnter:function(n,t,e){document.title="牛霸霸屏",e()},created:function(){var n=this;this.$wechat.ready(function(){n.$wechat.getLocation({type:"wgs84",success:function(t){n.getAllRegions(t.latitude,t.longitude)},fail:function(){n.getAllRegions(32.06898,118.803473)}})})},mounted:function(){},methods:{getAllRegions:function(n,t){var e=this;Object(s.W)().then(function(a){for(var i=0;i<a.result.length&&"100000"===a.result[i].parent;i++)delete a.result[i].parent;e.addressData=a.result,e.getPosition(n,t)})},closeAddress:function(n){var t=this;if(!n)return!1;var e=this.addressData.find(function(n,e){return~~n.value==~~t.adsValue[1]});this.loading=!0,e?Object(s.A)({region_code:e.value}).then(function(n){Array.isArray(n.result)&&(t.userAllow?n.result.map(function(n,e){n.distance=Object(r.h)(n.locationLat,n.locationLng,t.userPosition.lat,t.userPosition.lng)}):n.result.map(function(n,t){n.distance="未知"}),n.result.sort(function(n,t){return n.distance-t.distance}),t.barsList=n.result)}).finally(function(){t.loading=!1}):this.loading=!1},getPosition:function(n,t){var e=this;this.$jsonp("http://api.map.baidu.com/geocoder/v2/",{location:n+","+t,coordtype:"wgs84ll",ret_coordtype:"bd09ll",output:"json",ak:"gqwAbhpew0rdL9sZei9dL2PQWGqW7beB"}).then(function(n){var t=n.result.addressComponent,a=Object(r.g)(t.province,t.city,e.addressData);a?(e.adsValue=[a.province_id,a.city_id],e.userPosition.lng=n.result.location.lng,e.userPosition.lat=n.result.location.lat,e.closeAddress(!0)):(e.$vux.toast.show({text:"当前城市暂无入驻酒吧,现已切换到宁波市",width:"15em"}),e.getAllRegions(29.88525897,121.57900597))})},wxCoordsToBaidu:function(n){var t=this,e="";n.forEach(function(n,t){e+=n.locationLat+","+n.locationLng+";"}),e=e.substring(0,e.length-1),this.$jsonp("http://api.map.baidu.com/geoconv/v1/",{coords:e,from:1,to:5,ak:"gqwAbhpew0rdL9sZei9dL2PQWGqW7beB"}).then(function(e){if(console.log(e),e.result){var a=[];e.result.forEach(function(n,t){a.push(Object(r.h)(n.y,n.x,30.575429778924,114.31992734521))}),n.map(function(n,t){n.distance=a[t]}),t.barsList=n}}).catch(function(n){console.log(n)})}},computed:{cityName:function(){var n=this,t=this.addressData.find(function(t,e){return t.value===n.adsValue[1]});return t?t.name:""}},components:{BarsList:i.a,XAddress:o.a,InlineLoading:l.a}},d=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container flex flex-v",staticStyle:{"background-color":"#121420",height:"100%"}},[e("div",{staticClass:"home-header"},[e("svg-icon",{attrs:{"icon-class":"hot",className:"hot-icon"}}),e("span",{staticClass:"h-title f16"},[n._v("热门推荐")]),e("span",{staticClass:"city-now",on:{click:function(t){n.showAddress=!0}}},[n._v(n._s(n.cityName)),e("svg-icon",{attrs:{"icon-class":"arrow-down",className:"arrow-down-icon"}})],1)],1),n._v(" "),e("div",{staticClass:"flex-1 scroll"},[n.loading?e("inline-loading",{attrs:{color:"#f31374",bgColor:"rgba(255, 255, 255, 0.2)"}}):n._e(),n._v(" "),e("BarsList",{attrs:{barsList:n.barsList,enter:"home"}})],1),n._v(" "),e("x-address",{staticStyle:{display:"none"},attrs:{"hide-district":"","popup-title":"选择城市",title:"",list:n.addressData,placeholder:"请选择地址",show:n.showAddress},on:{"on-hide":n.closeAddress,"update:show":function(t){n.showAddress=t}},model:{value:n.adsValue,callback:function(t){n.adsValue=t},expression:"adsValue"}})],1)},u=[],A={render:d,staticRenderFns:u},h=A,b=e("VU/8"),f=a,p=b(c,h,!1,f,"data-v-190d19c8",null);t.default=p.exports},HpKq:function(n,t,e){var a=e("YZ7j");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("abbfcf38",a,!0)},JpLa:function(n,t,e){t=n.exports=e("FZ+f")(!0),t.push([n.i,"\n.home-header[data-v-190d19c8] {\n  line-height: 0.8rem;\n  height: 0.8rem;\n  text-align: center;\n  color: #fff;\n  position: relative;\n  font-size: 0;\n}\n.home-header .h-title[data-v-190d19c8] {\n  vertical-align: middle;\n}\n.home-header .city-now[data-v-190d19c8] {\n  position: absolute;\n  left: 0.3rem;\n  top: 0;\n  font-size: 14px;\n}\n.home-header .hot-icon[data-v-190d19c8] {\n  width: 24px;\n  height: 24px;\n  fill: #fd2a3d;\n  margin-right: 4px;\n  vertical-align: middle;\n}\n.home-header .arrow-down-icon[data-v-190d19c8] {\n  margin-left: 4px;\n}\n.container[data-v-190d19c8] .weui-loadmore__tips {\n  color: #fff;\n}\n","",{version:3,sources:["E:/Sites/nbbp2.0.git/src/pages/Home.vue"],names:[],mappings:";AACA;EACE,oBAAoB;EACpB,eAAe;EACf,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,aAAa;CACd;AACD;EACE,uBAAuB;CACxB;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,OAAO;EACP,gBAAgB;CACjB;AACD;EACE,YAAY;EACZ,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,uBAAuB;CACxB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,YAAY;CACb",file:"Home.vue",sourcesContent:["\n.home-header[data-v-190d19c8] {\n  line-height: 0.8rem;\n  height: 0.8rem;\n  text-align: center;\n  color: #fff;\n  position: relative;\n  font-size: 0;\n}\n.home-header .h-title[data-v-190d19c8] {\n  vertical-align: middle;\n}\n.home-header .city-now[data-v-190d19c8] {\n  position: absolute;\n  left: 0.3rem;\n  top: 0;\n  font-size: 14px;\n}\n.home-header .hot-icon[data-v-190d19c8] {\n  width: 24px;\n  height: 24px;\n  fill: #fd2a3d;\n  margin-right: 4px;\n  vertical-align: middle;\n}\n.home-header .arrow-down-icon[data-v-190d19c8] {\n  margin-left: 4px;\n}\n.container[data-v-190d19c8] .weui-loadmore__tips {\n  color: #fff;\n}\n"],sourceRoot:""}])},Q6pl:function(n,t,e){"use strict";function a(n){e("HpKq")}var i={props:["barsList","enter"],components:{},data:function(){return{}},mounted:function(){},computed:{list:function(){return this.barsList?this.barsList:[]}},methods:{pageToBarInfo:function(n,t){"home"===this.enter?this.$router.push({path:"/Main/"+n}):this.$router.push({path:"/AgentBarInfo",query:{id:n,type:3}})}},filters:{distance:function(n){return"string"==typeof n?n:Number(n/1e3).toFixed(2)+"km"}}},o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"bar-list",class:{home:"home"==n.enter}},[e("ul",n._l(n.list,function(t,a){return e("li",{key:a,staticClass:"bar-item flex",on:{click:function(e){n.pageToBarInfo(t.id,t.name)}}},[e("div",{staticClass:"bar-img"},[e("img",{staticClass:"circle",attrs:{src:n._f("prefixImageUrl")(t.logo),alt:""}})]),n._v(" "),e("div",{staticClass:"bar-info flex flex-1 flex-v flex-pack-center"},[e("h2",{staticClass:"bar-name"},[n._v(n._s(t.name))]),n._v(" "),e("div",{staticClass:"bar-address"},[n._v(n._s(t.area_name)+n._s(t.address))])]),n._v(" "),"home"==n.enter?e("div",{staticClass:"bar-distance flex flex flex-align-center"},[e("svg-icon",{attrs:{"icon-class":"position"}}),e("span",[n._v(n._s(n._f("distance")(t.distance)))])],1):n._e(),n._v(" "),"home"!=n.enter?e("div",{staticClass:"tc bar-money pr flex flex-v flex-pack-center"},[e("p",{staticClass:"f16",staticStyle:{color:"red"}},[n._v(n._s(t.agent_balance))]),n._v(" "),e("p",{staticClass:"f13",staticStyle:{color:"#818181"}},[n._v("可提现收益")])]):n._e()])}))])},r=[],s={render:o,staticRenderFns:r},l=s,c=e("VU/8"),d=a,u=c(i,l,!1,d,"data-v-6c99bb84",null);t.a=u.exports},YZ7j:function(n,t,e){t=n.exports=e("FZ+f")(!0),t.push([n.i,'\n.bar-item[data-v-6c99bb84] {\n  padding: 0.36rem 0.3rem;\n}\n.home .bar-item[data-v-6c99bb84] {\n  margin-bottom: 1px;\n  background-color: #181b2a;\n}\n.bar-img[data-v-6c99bb84] {\n  width: 1rem;\n  margin-right: 0.4rem;\n}\n.bar-img img[data-v-6c99bb84] {\n  width: 1rem;\n  height: 1rem;\n}\n.bar-name[data-v-6c99bb84] {\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: bold;\n  margin-bottom: 5px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n}\n.home .bar-name[data-v-6c99bb84] {\n  color: #fff;\n}\n.bar-address[data-v-6c99bb84] {\n  font-size: 12px;\n  line-height: 1.5;\n  color: #ccc;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n}\n.home .bar-address[data-v-6c99bb84] {\n  color: #61667a;\n}\n.bar-distance[data-v-6c99bb84] {\n  margin-left: 0.1rem;\n}\n.home .bar-distance[data-v-6c99bb84] {\n  color: #61667a;\n}\n.bar-distance span[data-v-6c99bb84] {\n  font-size: 13px;\n}\n.bar-distance .svg-icon[data-v-6c99bb84] {\n  width: 0.32rem;\n  height: 0.32rem;\n}\n.bar-money[data-v-6c99bb84] {\n  padding: 0 10px;\n  margin-left: 10px;\n}\n.bar-money[data-v-6c99bb84]:before {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 1px;\n  background-color: #ddd;\n  content: "";\n}\n',"",{version:3,sources:["E:/Sites/nbbp2.0.git/src/components/Center/BarsList.vue"],names:[],mappings:";AACA;EACE,wBAAwB;CACzB;AACD;EACE,mBAAmB;EACnB,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,qBAAqB;EACrB,6BAA6B;EAC7B,sBAAsB;EACtB,iBAAiB;CAClB;AACD;EACE,YAAY;CACb;AACD;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,qBAAqB;EACrB,6BAA6B;EAC7B,sBAAsB;EACtB,iBAAiB;CAClB;AACD;EACE,eAAe;CAChB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,eAAe;CAChB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,gBAAgB;EAChB,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,UAAU;EACV,WAAW;EACX,uBAAuB;EACvB,YAAY;CACb",file:"BarsList.vue",sourcesContent:['\n.bar-item[data-v-6c99bb84] {\n  padding: 0.36rem 0.3rem;\n}\n.home .bar-item[data-v-6c99bb84] {\n  margin-bottom: 1px;\n  background-color: #181b2a;\n}\n.bar-img[data-v-6c99bb84] {\n  width: 1rem;\n  margin-right: 0.4rem;\n}\n.bar-img img[data-v-6c99bb84] {\n  width: 1rem;\n  height: 1rem;\n}\n.bar-name[data-v-6c99bb84] {\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: bold;\n  margin-bottom: 5px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n}\n.home .bar-name[data-v-6c99bb84] {\n  color: #fff;\n}\n.bar-address[data-v-6c99bb84] {\n  font-size: 12px;\n  line-height: 1.5;\n  color: #ccc;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n}\n.home .bar-address[data-v-6c99bb84] {\n  color: #61667a;\n}\n.bar-distance[data-v-6c99bb84] {\n  margin-left: 0.1rem;\n}\n.home .bar-distance[data-v-6c99bb84] {\n  color: #61667a;\n}\n.bar-distance span[data-v-6c99bb84] {\n  font-size: 13px;\n}\n.bar-distance .svg-icon[data-v-6c99bb84] {\n  width: 0.32rem;\n  height: 0.32rem;\n}\n.bar-money[data-v-6c99bb84] {\n  padding: 0 10px;\n  margin-left: 10px;\n}\n.bar-money[data-v-6c99bb84]:before {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 1px;\n  background-color: #ddd;\n  content: "";\n}\n'],sourceRoot:""}])},cHu4:function(n,t,e){"use strict";var a=e("diSF"),i=e.n(a),o=e("NXHL"),r=e.n(o),s={"北京市":"110100","天津市":"120100","上海市":"310100","重庆市":"500100"},l=function(n,t){var e=i()(n,function(e,a){var i="";return 2===a?(i=r()(t,function(t){return t.name===n[1]})||{value:"__"},s[n[0]]&&(i={value:s[n[0]]}),r()(t,function(n){return n.name===e&&n.parent===i.value})):1===a&&s[n[0]]?{value:s[n[0]]}:r()(t,function(n){return n.name===e})});return i()(e,function(n){return n?n.value:"__"}).join(" ")},c=e("NE4E"),d=e("7Ah8"),u={name:"x-address",components:{PopupPicker:d.a},props:{title:{type:String,required:!0},value:{type:Array,default:function(){return[]}},rawValue:Boolean,list:{type:Array,required:!0},labelWidth:String,inlineDesc:String,placeholder:String,hideDistrict:Boolean,valueTextAlign:String,confirmText:String,cancelText:String,displayFormat:{type:Function,default:function(n,t){return t}},popupStyle:Object,popupTitle:String,show:Boolean},created:function(){if(this.currentValue.length&&this.rawValue){var n=l(this.currentValue,this.list);/__/.test(n)?(console.error("Vux: Wrong address value",this.currentValue),this.currentValue=[]):this.currentValue=n.split(" ")}this.show&&(this.showValue=!0)},methods:{emitHide:function(n){this.$emit("on-hide",n)},getAddressName:function(){return Object(c.a)(this.value,this.list)},onShadowChange:function(n,t){this.$emit("on-shadow-change",n,t)}},data:function(){return{currentValue:this.value,showValue:!1}},computed:{nameValue:function(){return Object(c.a)(this.currentValue,this.list)},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}}},watch:{currentValue:function(n){this.$emit("input",n)},value:function(n){if(n.length&&!/\d+/.test(n[0])){var t=l(n,this.list).split(" ");if("__"!==t[0]&&"__"!==t[1])return void(this.currentValue=t)}this.currentValue=n},show:function(n){this.showValue=n},showValue:function(n){this.$emit("update:show",n)}}},A=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("popup-picker",{attrs:{"fixed-columns":n.hideDistrict?2:0,columns:3,data:n.list,title:n.title,"show-name":"","inline-desc":n.inlineDesc,placeholder:n.placeholder,"value-text-align":n.valueTextAlign,"confirm-text":n.confirmText,"cancel-text":n.cancelText,"display-format":n.displayFormat,"popup-style":n.popupStyle,"popup-title":n.popupTitle,show:n.showValue},on:{"on-hide":n.emitHide,"on-show":function(t){n.$emit("on-show")},"update:show":function(t){n.showValue=t},"on-shadow-change":n.onShadowChange},scopedSlots:n._u([{key:"title",fn:function(t){return[n._t("title",[t.labelTitle?e("label",{class:[t.labelClass,n.labelClass],style:t.labelStyle,domProps:{innerHTML:n._s(t.labelTitle)}}):n._e()],{labelClass:t.labelClass,labelStyle:t.labelStyles,labelTitle:t.title})]}}]),model:{value:n.currentValue,callback:function(t){n.currentValue=t},expression:"currentValue"}})},h=[],b={render:A,staticRenderFns:h},f=b,p=e("VU/8"),m=p(u,f,!1,null,null,null);t.a=m.exports},pwyO:function(n,t,e){var a=e("JpLa");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("454c3af1",a,!0)}});
//# sourceMappingURL=9.256012c891de2d956b08.js.map