webpackJsonp([28],{"/ycT":function(t,n,e){"use strict";function o(t){e("uiOQ")}Object.defineProperty(n,"__esModule",{value:!0});var a=e("qK+J"),i=e.n(a),s=e("6xed"),l=e("gyMJ"),r={data:function(){return{list:[],params:{pageSize:15,page:1,type:this.$route.query.type,ht_id:this.$route.query.id},status:{0:"提现中",1:"提现成功",2:"提现失败"}}},beforeRouteEnter:function(t,n,e){document.title="提现详情",e()},components:{InfiniteLoading:i.a,InlineLoading:s.a},methods:{infiniteHandler:function(t){var n=this;Object(l.O)(this.params).then(function(e){Array.isArray(e.result.data)&&(n.list=n.list.concat(e.result.data),n.list.length>=e.result.total?t.complete():(n.params.page+=1,t.loaded()))})}}},c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"scroll-container depositOthers",staticStyle:{top:"0"}},[t._l(t.list,function(n,o){return e("div",{key:o,staticClass:"detail-item flex flex-align-center"},[e("div",{staticClass:"detail-item-left flex-1"},[e("p",{staticClass:"overflow f14"},[t._v("提现金额")]),t._v(" "),e("p",{staticClass:"f13 scolor bottom-line"},[t._v(t._s(n.create_time))])]),t._v(" "),e("div",{staticClass:"detail-item-right"},[e("p",{staticClass:"overflow f14 ocolor"},[t._v("+"+t._s(n.money)+"元")]),t._v(" "),e("p",{staticClass:"f13 scolor bottom-line"},[t._v(t._s(t.status[n.status]))])])])}),t._v(" "),e("infinite-loading",{on:{infinite:t.infiniteHandler}},[e("inline-loading",{attrs:{slot:"spinner",color:"#f31374",bgColor:"rgba(255, 255, 255, 0.2)"},slot:"spinner"}),t._v(" "),e("span",{attrs:{slot:"no-results"},slot:"no-results"},[t._v("没有记录")]),t._v(" "),e("span",{attrs:{slot:"no-more"},slot:"no-more"},[t._v("没有更多啦")])],1)],2)},A=[],d={render:c,staticRenderFns:A},b=d,p=e("VU/8"),C=o,u=p(r,b,!1,C,"data-v-68cbbe46",null);n.default=u.exports},YL8E:function(t,n,e){n=t.exports=e("FZ+f")(!0),n.push([t.i,"\n.scroll-container[data-v-68cbbe46] {\n  position: absolute;\n  bottom: 0;\n  top: 44px;\n  left: 0;\n  right: 0;\n}\n.detail-item[data-v-68cbbe46] {\n  padding: 10px 15px;\n  margin-top: 10px;\n}\n.depositOthers .detail-item[data-v-68cbbe46] {\n  background-color: #fff;\n}\n.ncolor[data-v-68cbbe46] {\n  color: #f31374;\n}\n.ocolor[data-v-68cbbe46] {\n  color: #2481d2;\n}\n.scolor[data-v-68cbbe46] {\n  color: #b9b9b9;\n}\n.bottom-line[data-v-68cbbe46] {\n  margin-top: 4px;\n}\n.detail-item-right[data-v-68cbbe46] {\n  text-align: right;\n}\n","",{version:3,sources:["G:/projects/nbbp2.0.git/src/pages/DepositDetails.vue"],names:[],mappings:";AACA;EACE,mBAAmB;EACnB,UAAU;EACV,UAAU;EACV,QAAQ;EACR,SAAS;CACV;AACD;EACE,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,kBAAkB;CACnB",file:"DepositDetails.vue",sourcesContent:["\n.scroll-container[data-v-68cbbe46] {\n  position: absolute;\n  bottom: 0;\n  top: 44px;\n  left: 0;\n  right: 0;\n}\n.detail-item[data-v-68cbbe46] {\n  padding: 10px 15px;\n  margin-top: 10px;\n}\n.depositOthers .detail-item[data-v-68cbbe46] {\n  background-color: #fff;\n}\n.ncolor[data-v-68cbbe46] {\n  color: #f31374;\n}\n.ocolor[data-v-68cbbe46] {\n  color: #2481d2;\n}\n.scolor[data-v-68cbbe46] {\n  color: #b9b9b9;\n}\n.bottom-line[data-v-68cbbe46] {\n  margin-top: 4px;\n}\n.detail-item-right[data-v-68cbbe46] {\n  text-align: right;\n}\n"],sourceRoot:""}])},uiOQ:function(t,n,e){var o=e("YL8E");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("6c0d2399",o,!0)}});
//# sourceMappingURL=28.5be91d9bb3510a820c22.js.map