webpackJsonp([29],{"04ld":function(t,e,s){var n=s("KWm7");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s("rjj0")("05772b00",n,!0)},KWm7:function(t,e,s){e=t.exports=s("FZ+f")(!0),e.push([t.i,"\n.b[data-v-493e4f60] {\n  color: #3d7fd9;\n}\n.section[data-v-493e4f60] {\n  margin: 0 0.45rem;\n  padding: 0.5rem 0;\n}\n.article[data-v-493e4f60] {\n  padding: 0.25rem;\n  margin-top: 10px;\n  background-color: #f5f5f5;\n  border-radius: 5px;\n}\n","",{version:3,sources:["G:/projects/nbbp2.0.git/src/pages/HelpBusinessInsert.vue"],names:[],mappings:";AACA;EACE,eAAe;CAChB;AACD;EACE,kBAAkB;EAClB,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,iBAAiB;EACjB,0BAA0B;EAC1B,mBAAmB;CACpB",file:"HelpBusinessInsert.vue",sourcesContent:["\n.b[data-v-493e4f60] {\n  color: #3d7fd9;\n}\n.section[data-v-493e4f60] {\n  margin: 0 0.45rem;\n  padding: 0.5rem 0;\n}\n.article[data-v-493e4f60] {\n  padding: 0.25rem;\n  margin-top: 10px;\n  background-color: #f5f5f5;\n  border-radius: 5px;\n}\n"],sourceRoot:""}])},xqyj:function(t,e,s){"use strict";function n(t){s("04ld")}Object.defineProperty(e,"__esModule",{value:!0});var i=s("rBKV"),a={data:function(){return{info:{qrcode:"",name:"",id:""}}},beforeRouteEnter:function(t,e,s){document.title="公众号接入牛霸微上墙";var n=JSON.parse(localStorage.getItem("businessNeed"));s(function(t){t.info=n})},filters:{screenUrl:function(t){return i.BASE_API+"/screen/?ht_id="+t},listUrl:function(t){return i.BASE_API+"/dist/#/"}},methods:{previewImage:function(t){t=i.BASE_API+"/dist/"+t;var e={current:t,urls:[t]};this.$wechat.previewImage(e)}}},r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container pr fff"},[s("section",{staticClass:"section"},[s("h4",{staticClass:"b f15"},[t._v("1、填入公众号底栏菜单的URL地址：")]),t._v(" "),s("article",{staticClass:"article"},[s("p",{staticClass:"b f14"},[t._v(t._s(t.info.name)+"URL: ")]),t._v(" "),s("p",{staticClass:"f14",staticStyle:{"-webkit-user-select":"text","user-select":"text"}},[t._v(t._s(t._f("screenUrl")(t.info.id)))]),t._v(" "),s("p",{staticClass:"b f14",staticStyle:{"margin-top":"10px"}},[t._v("酒吧列表页URL: ")]),t._v(" "),s("p",{staticClass:"f14",staticStyle:{"-webkit-user-select":"text","user-select":"text"}},[t._v(t._s(t._f("listUrl")(t.info.id)))]),t._v(" "),s("p",{staticClass:"f14",staticStyle:{"margin-top":"10px"}},[t._v("请选择您需要在公众号底栏打开的菜单链接复制")])])]),t._v(" "),s("section",{staticClass:"section"},[s("h4",{staticClass:"b f15"},[t._v("2、电脑登录公众号后台设置底栏菜单")]),t._v(" "),s("article",{staticClass:"article"},[s("p",{staticClass:"b f14"},[t._v("登录进入公众号后台--自定义菜单（如下图）--将复制的链接填入相应位置")]),t._v(" "),s("img",{staticStyle:{width:"100%",margin:"10px 0"},attrs:{src:"./static/help/insert-business.png"},on:{click:function(e){t.previewImage("./static/help/insert-business.png")}}})]),t._v(" "),s("p",{staticClass:"f14",staticStyle:{"margin-top":"10px"}},[t._v("成功设置后即可在您的公众号里点击微上墙参与互动")])])])},c=[],o={render:r,staticRenderFns:c},l=o,f=s("VU/8"),p=n,d=f(a,l,!1,p,"data-v-493e4f60",null);e.default=d.exports}});
//# sourceMappingURL=29.ec48e8609f09104106fe.js.map