webpackJsonp([12],{"7Lns":function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,'\n.bar-item[data-v-6eb0e776] {\n  padding: 0.36rem 0.3rem;\n}\n.home .bar-item[data-v-6eb0e776] {\n  margin-bottom: 1px;\n  background-color: #181b2a;\n}\n.bar-img[data-v-6eb0e776] {\n  width: 1rem;\n  margin-right: 0.4rem;\n}\n.bar-img img[data-v-6eb0e776] {\n  width: 1rem;\n  height: 1rem;\n}\n.bar-name[data-v-6eb0e776] {\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: bold;\n  margin-bottom: 5px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n}\n.home .bar-name[data-v-6eb0e776] {\n  color: #fff;\n}\n.bar-address[data-v-6eb0e776] {\n  font-size: 12px;\n  line-height: 1.5;\n  color: #ccc;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n}\n.home .bar-address[data-v-6eb0e776] {\n  color: #61667a;\n}\n.bar-distance[data-v-6eb0e776] {\n  margin-left: 0.1rem;\n}\n.home .bar-distance[data-v-6eb0e776] {\n  color: #61667a;\n}\n.bar-distance span[data-v-6eb0e776] {\n  font-size: 13px;\n}\n.bar-distance .svg-icon[data-v-6eb0e776] {\n  width: 0.32rem;\n  height: 0.32rem;\n}\n.bar-money[data-v-6eb0e776] {\n  padding: 0 10px;\n  margin-left: 10px;\n}\n.bar-money[data-v-6eb0e776]:before {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 1px;\n  background-color: #ddd;\n  content: "";\n}\n',""])},HXef:function(e,t,n){"use strict";function a(e){n("mSBM")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("Q6pl"),s=n("cHu4"),o=n("oAV5"),r=n("gyMJ"),l=n("6xed"),c={data:function(){return{adsValue:["330000","330200"],addressData:[],showAddress:!1,barsList:[],userAllow:!0,userPosition:{lat:"",lng:""},loading:!0}},beforeRouteEnter:function(e,t,n){document.title="牛霸霸屏",n()},created:function(){var e=this;this.$wechat.ready(function(){e.$wechat.getLocation({type:"wgs84",success:function(t){e.getAllRegions(t.latitude,t.longitude)},fail:function(){e.getAllRegions(32.06898,118.803473)}})})},mounted:function(){},methods:{getAllRegions:function(e,t){var n=this;Object(r._3)().then(function(a){for(var i=0;i<a.result.length&&"100000"===a.result[i].parent;i++)delete a.result[i].parent;n.addressData=a.result,n.getPosition(e,t)})},closeAddress:function(e){var t=this;if(!e)return!1;var n=this.addressData.find(function(e,n){return~~e.value==~~t.adsValue[1]});this.loading=!0,n?Object(r.E)({region_code:n.value}).then(function(e){Array.isArray(e.result)&&(t.userAllow?e.result.map(function(e,n){e.distance=Object(o.i)(e.locationLat,e.locationLng,t.userPosition.lat,t.userPosition.lng)}):e.result.map(function(e,t){e.distance="未知"}),e.result.sort(function(e,t){return e.distance-t.distance}),t.barsList=e.result)}).finally(function(){t.loading=!1}):this.loading=!1},getPosition:function(e,t){var n=this;this.$jsonp("http://api.map.baidu.com/geocoder/v2/",{location:e+","+t,coordtype:"wgs84ll",ret_coordtype:"bd09ll",output:"json",ak:"gqwAbhpew0rdL9sZei9dL2PQWGqW7beB"}).then(function(e){var t=e.result.addressComponent,a=Object(o.g)(t.province,t.city,n.addressData);a?(n.adsValue=[a.province_id,a.city_id],n.userPosition.lng=e.result.location.lng,n.userPosition.lat=e.result.location.lat,n.closeAddress(!0)):(n.$vux.toast.show({text:"当前城市暂无入驻酒吧,现已切换到宁波市",width:"15em"}),n.getAllRegions(29.88525897,121.57900597))})},wxCoordsToBaidu:function(e){var t=this,n="";e.forEach(function(e,t){n+=e.locationLat+","+e.locationLng+";"}),n=n.substring(0,n.length-1),this.$jsonp("http://api.map.baidu.com/geoconv/v1/",{coords:n,from:1,to:5,ak:"gqwAbhpew0rdL9sZei9dL2PQWGqW7beB"}).then(function(n){if(console.log(n),n.result){var a=[];n.result.forEach(function(e,t){a.push(Object(o.i)(e.y,e.x,30.575429778924,114.31992734521))}),e.map(function(e,t){e.distance=a[t]}),t.barsList=e}}).catch(function(e){console.log(e)})}},computed:{cityName:function(){var e=this,t=this.addressData.find(function(t,n){return t.value===e.adsValue[1]});return t?t.name:""}},components:{BarsList:i.a,XAddress:s.a,InlineLoading:l.a}},u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container flex flex-v",staticStyle:{"background-color":"#121420",height:"100%"}},[n("div",{staticClass:"home-header"},[n("svg-icon",{attrs:{"icon-class":"hot",className:"hot-icon"}}),n("span",{staticClass:"h-title f16"},[e._v("热门推荐")]),n("span",{staticClass:"city-now",on:{click:function(t){e.showAddress=!0}}},[e._v(e._s(e.cityName)),n("svg-icon",{attrs:{"icon-class":"arrow-down",className:"arrow-down-icon"}})],1)],1),e._v(" "),n("div",{staticClass:"flex-1 scroll"},[e.loading?n("inline-loading",{attrs:{color:"#f31374",bgColor:"rgba(255, 255, 255, 0.2)"}}):e._e(),e._v(" "),n("BarsList",{attrs:{barsList:e.barsList,enter:"home"}})],1),e._v(" "),n("x-address",{staticStyle:{display:"none"},attrs:{"hide-district":"","popup-title":"选择城市",title:"",list:e.addressData,placeholder:"请选择地址",show:e.showAddress},on:{"on-hide":e.closeAddress,"update:show":function(t){e.showAddress=t}},model:{value:e.adsValue,callback:function(t){e.adsValue=t},expression:"adsValue"}})],1)},d=[],h={render:u,staticRenderFns:d},f=h,p=n("VU/8"),m=a,b=p(c,f,!1,m,"data-v-571e2b46",null);t.default=b.exports},Q6pl:function(e,t,n){"use strict";function a(e){n("bOdx")}var i={props:["barsList","enter"],components:{},data:function(){return{}},mounted:function(){},computed:{list:function(){return this.barsList?this.barsList:[]}},methods:{pageToBarInfo:function(e,t){"home"===this.enter?this.$router.push({path:"/Main/"+e}):this.$router.push({path:"/AgentBarInfo",query:{id:e,type:3}})}},filters:{distance:function(e){return"string"==typeof e?e:Number(e/1e3).toFixed(2)+"km"}}},s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bar-list",class:{home:"home"==e.enter}},[n("ul",e._l(e.list,function(t,a){return n("li",{key:a,staticClass:"bar-item flex",on:{click:function(n){e.pageToBarInfo(t.id,t.name)}}},[n("div",{staticClass:"bar-img"},[n("img",{staticClass:"circle",attrs:{src:e._f("prefixImageUrl")(t.logo),alt:""}})]),e._v(" "),n("div",{staticClass:"bar-info flex flex-1 flex-v flex-pack-center"},[n("h2",{staticClass:"bar-name"},[e._v(e._s(t.name))]),e._v(" "),n("div",{staticClass:"bar-address"},[e._v(e._s(t.area_name)+e._s(t.address))])]),e._v(" "),"home"==e.enter?n("div",{staticClass:"bar-distance flex flex flex-align-center"},[n("svg-icon",{attrs:{"icon-class":"position"}}),n("span",[e._v(e._s(e._f("distance")(t.distance)))])],1):e._e(),e._v(" "),"home"!=e.enter?n("div",{staticClass:"tc bar-money pr flex flex-v flex-pack-center"},[n("p",{staticClass:"f16",staticStyle:{color:"red"}},[e._v(e._s(t.agent_balance))]),e._v(" "),n("p",{staticClass:"f13",staticStyle:{color:"#818181"}},[e._v("可提现收益")])]):e._e()])}))])},o=[],r={render:s,staticRenderFns:o},l=r,c=n("VU/8"),u=a,d=c(i,l,!1,u,"data-v-6eb0e776",null);t.a=d.exports},W40T:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,"\n.home-header[data-v-571e2b46] {\n  line-height: 0.8rem;\n  height: 0.8rem;\n  text-align: center;\n  color: #fff;\n  position: relative;\n  font-size: 0;\n}\n.home-header .h-title[data-v-571e2b46] {\n  vertical-align: middle;\n}\n.home-header .city-now[data-v-571e2b46] {\n  position: absolute;\n  left: 0.3rem;\n  top: 0;\n  font-size: 14px;\n}\n.home-header .hot-icon[data-v-571e2b46] {\n  width: 24px;\n  height: 24px;\n  fill: #fd2a3d;\n  margin-right: 4px;\n  vertical-align: middle;\n}\n.home-header .arrow-down-icon[data-v-571e2b46] {\n  margin-left: 4px;\n}\n.container[data-v-571e2b46] .weui-loadmore__tips {\n  color: #fff;\n}\n",""])},bOdx:function(e,t,n){var a=n("7Lns");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("3a84eeaa",a,!0)},cHu4:function(e,t,n){"use strict";var a=n("diSF"),i=n.n(a),s=n("NXHL"),o=n.n(s),r={"北京市":"110100","天津市":"120100","上海市":"310100","重庆市":"500100"},l=function(e,t){var n=i()(e,function(n,a){var i="";return 2===a?(i=o()(t,function(t){return t.name===e[1]})||{value:"__"},r[e[0]]&&(i={value:r[e[0]]}),o()(t,function(e){return e.name===n&&e.parent===i.value})):1===a&&r[e[0]]?{value:r[e[0]]}:o()(t,function(e){return e.name===n})});return i()(n,function(e){return e?e.value:"__"}).join(" ")},c=n("NE4E"),u=n("7Ah8"),d={name:"x-address",components:{PopupPicker:u.a},props:{title:{type:String,required:!0},value:{type:Array,default:function(){return[]}},rawValue:Boolean,list:{type:Array,required:!0},labelWidth:String,inlineDesc:String,placeholder:String,hideDistrict:Boolean,valueTextAlign:String,confirmText:String,cancelText:String,displayFormat:{type:Function,default:function(e,t){return t}},popupStyle:Object,popupTitle:String,show:Boolean},created:function(){if(this.currentValue.length&&this.rawValue){var e=l(this.currentValue,this.list);/__/.test(e)?(console.error("Vux: Wrong address value",this.currentValue),this.currentValue=[]):this.currentValue=e.split(" ")}this.show&&(this.showValue=!0)},methods:{emitHide:function(e){this.$emit("on-hide",e)},getAddressName:function(){return Object(c.a)(this.value,this.list)},onShadowChange:function(e,t){this.$emit("on-shadow-change",e,t)}},data:function(){return{currentValue:this.value,showValue:!1}},computed:{nameValue:function(){return Object(c.a)(this.currentValue,this.list)},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}}},watch:{currentValue:function(e){this.$emit("input",e)},value:function(e){if(e.length&&!/\d+/.test(e[0])){var t=l(e,this.list).split(" ");if("__"!==t[0]&&"__"!==t[1])return void(this.currentValue=t)}this.currentValue=e},show:function(e){this.showValue=e},showValue:function(e){this.$emit("update:show",e)}}},h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("popup-picker",{attrs:{"fixed-columns":e.hideDistrict?2:0,columns:3,data:e.list,title:e.title,"show-name":"","inline-desc":e.inlineDesc,placeholder:e.placeholder,"value-text-align":e.valueTextAlign,"confirm-text":e.confirmText,"cancel-text":e.cancelText,"display-format":e.displayFormat,"popup-style":e.popupStyle,"popup-title":e.popupTitle,show:e.showValue},on:{"on-hide":e.emitHide,"on-show":function(t){e.$emit("on-show")},"update:show":function(t){e.showValue=t},"on-shadow-change":e.onShadowChange},scopedSlots:e._u([{key:"title",fn:function(t){return[e._t("title",[t.labelTitle?n("label",{class:[t.labelClass,e.labelClass],style:t.labelStyle,domProps:{innerHTML:e._s(t.labelTitle)}}):e._e()],{labelClass:t.labelClass,labelStyle:t.labelStyles,labelTitle:t.title})]}}]),model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}})},f=[],p={render:h,staticRenderFns:f},m=p,b=n("VU/8"),v=b(d,m,!1,null,null,null);t.a=v.exports},mSBM:function(e,t,n){var a=n("W40T");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("691b3c34",a,!0)}});