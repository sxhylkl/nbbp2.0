webpackJsonp([20],{"9P8V":function(t,a,e){var n=e("KTca");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("54ad6e4c",n,!0)},KTca:function(t,a,e){a=t.exports=e("FZ+f")(!0),a.push([t.i,"\n.container[data-v-1a2df46e] {\n  padding: 15px;\n  width: auto;\n}\n.title[data-v-1a2df46e] {\n  font-weight: normal;\n  margin-bottom: 10px;\n}\n.help-title[data-v-1a2df46e] {\n  position: relative;\n}\n.help-title .svg-icon[data-v-1a2df46e] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%) rotate(90deg);\n          transform: translateY(-50%) rotate(90deg);\n  width: 18px;\n  height: 18px;\n  -webkit-transition: -webkit-transform .3s ease;\n  transition: -webkit-transform .3s ease;\n  transition: transform .3s ease;\n  transition: transform .3s ease, -webkit-transform .3s ease;\n}\n.help-title .svg-icon.move[data-v-1a2df46e] {\n  -webkit-transform: translateY(-50%) rotate(-90deg);\n          transform: translateY(-50%) rotate(-90deg);\n}\n.help-title .svg-icon.right[data-v-1a2df46e] {\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.help-title[data-v-1a2df46e],\n.help-main[data-v-1a2df46e] {\n  padding: 10px 20px 10px 0;\n  margin: 0 10px;\n}\n.help-main[data-v-1a2df46e] {\n  border-top: 1px dashed #ddd;\n  font-size: 14px;\n  color: #696969;\n}\n.help-main img[data-v-1a2df46e] {\n  width: 80%;\n  max-width: 100%;\n}\n.help-main p[data-v-1a2df46e] {\n  margin-bottom: 6px;\n}\n.help-content[data-v-1a2df46e] {\n  margin-bottom: 10px;\n}\n.help-content[data-v-1a2df46e]:last-child {\n  margin-bottom: 0;\n}\np.suojin[data-v-1a2df46e] {\n  margin-left: 22px;\n}\n.red[data-v-1a2df46e] {\n  color: red;\n}\n.link[data-v-1a2df46e] {\n  color: #13abee;\n}\n.line[data-v-1a2df46e] {\n  height: 1px;\n  background-color: #ddd;\n  width: 100%;\n  margin: 10px 0;\n}\n","",{version:3,sources:["G:/projects/nbbp2.0.git/src/pages/HelpAgent.vue"],names:[],mappings:";AACA;EACE,cAAc;EACd,YAAY;CACb;AACD;EACE,oBAAoB;EACpB,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,SAAS;EACT,SAAS;EACT,kDAAkD;UAC1C,0CAA0C;EAClD,YAAY;EACZ,aAAa;EACb,+CAA+C;EAC/C,uCAAuC;EACvC,+BAA+B;EAC/B,2DAA2D;CAC5D;AACD;EACE,mDAAmD;UAC3C,2CAA2C;CACpD;AACD;EACE,oCAAoC;UAC5B,4BAA4B;CACrC;AACD;;EAEE,0BAA0B;EAC1B,eAAe;CAChB;AACD;EACE,4BAA4B;EAC5B,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,WAAW;EACX,gBAAgB;CACjB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,WAAW;CACZ;AACD;EACE,eAAe;CAChB;AACD;EACE,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,eAAe;CAChB",file:"HelpAgent.vue",sourcesContent:["\n.container[data-v-1a2df46e] {\n  padding: 15px;\n  width: auto;\n}\n.title[data-v-1a2df46e] {\n  font-weight: normal;\n  margin-bottom: 10px;\n}\n.help-title[data-v-1a2df46e] {\n  position: relative;\n}\n.help-title .svg-icon[data-v-1a2df46e] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%) rotate(90deg);\n          transform: translateY(-50%) rotate(90deg);\n  width: 18px;\n  height: 18px;\n  -webkit-transition: -webkit-transform .3s ease;\n  transition: -webkit-transform .3s ease;\n  transition: transform .3s ease;\n  transition: transform .3s ease, -webkit-transform .3s ease;\n}\n.help-title .svg-icon.move[data-v-1a2df46e] {\n  -webkit-transform: translateY(-50%) rotate(-90deg);\n          transform: translateY(-50%) rotate(-90deg);\n}\n.help-title .svg-icon.right[data-v-1a2df46e] {\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.help-title[data-v-1a2df46e],\n.help-main[data-v-1a2df46e] {\n  padding: 10px 20px 10px 0;\n  margin: 0 10px;\n}\n.help-main[data-v-1a2df46e] {\n  border-top: 1px dashed #ddd;\n  font-size: 14px;\n  color: #696969;\n}\n.help-main img[data-v-1a2df46e] {\n  width: 80%;\n  max-width: 100%;\n}\n.help-main p[data-v-1a2df46e] {\n  margin-bottom: 6px;\n}\n.help-content[data-v-1a2df46e] {\n  margin-bottom: 10px;\n}\n.help-content[data-v-1a2df46e]:last-child {\n  margin-bottom: 0;\n}\np.suojin[data-v-1a2df46e] {\n  margin-left: 22px;\n}\n.red[data-v-1a2df46e] {\n  color: red;\n}\n.link[data-v-1a2df46e] {\n  color: #13abee;\n}\n.line[data-v-1a2df46e] {\n  height: 1px;\n  background-color: #ddd;\n  width: 100%;\n  margin: 10px 0;\n}\n"],sourceRoot:""}])},"duY/":function(t,a,e){"use strict";function n(t){e("9P8V")}Object.defineProperty(a,"__esModule",{value:!0});var i=e("eYZV"),s={components:{Collapse:i.a},data:function(){return{isActive:[0,0,0,0,0,0],code:""}},beforeRouteEnter:function(t,a,e){document.title="帮助设置";var n=JSON.parse(localStorage.getItem("agentNeed"));e(function(t){t.code=n.code})},methods:{click:function(t){this.isActive[t]=0===this.isActive[t]?1:0,this.$forceUpdate()}}},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("h3",{staticClass:"title"},[t._v("使用帮助")]),t._v(" "),e("div",{staticClass:"help-content fff"},[e("div",{staticClass:"help-title",on:{click:function(a){t.click(0)}}},[t._v("代理注册后如何使用牛霸系统？"),e("svg-icon",{class:{move:t.isActive[0]},attrs:{"icon-class":"arrow-right"}})],1),t._v(" "),e("collapse",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive[0],expression:"isActive[0]"}],staticClass:"help-main collapse-wrap"},[e("p",[t._v("1、定位找到使用牛霸系统的目标商户：")]),t._v(" "),e("p",{staticClass:"suojin"},[t._v("酒吧（餐吧、静吧、演艺吧）。")]),t._v(" "),e("p",{staticClass:"suojin"},[t._v("餐厅、庆典、婚礼、年会、寺庙等需要大屏互动的场合。")]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("p",[t._v("2、推荐商户免费注册使用牛霸系统。")]),t._v(" "),e("p",[t._v("重要：商户注册时，推荐人填写您的推荐码-- "),e("span",{staticClass:"red"},[t._v(t._s(t.code))])]),t._v(" "),e("p",[e("img",{attrs:{src:"./static/help/a1.png"}})]),t._v(" "),e("p",[t._v("餐厅、庆典、婚礼、年会、寺庙等需要大屏互动的场合。")]),t._v(" "),e("p",[t._v("点击查看"),e("router-link",{staticClass:"link",attrs:{to:{path:"/BusinessJoin?type=1"}}},[t._v("牛霸系统介绍及注册页")])],1),t._v(" "),t._t("default")],2)])],1),t._v(" "),e("h3",{staticClass:"title"},[t._v("常见问题")]),t._v(" "),e("div",{staticClass:"help-content fff"},[e("div",{staticClass:"help-title",on:{click:function(a){t.click(1)}}},[t._v("代理的分成收益如何计算？"),e("svg-icon",{class:{move:t.isActive[1]},attrs:{"icon-class":"arrow-right"}})],1),t._v(" "),e("collapse",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive[1],expression:"isActive[1]"}],staticClass:"help-main collapse-wrap"},[e("p",[t._v("成为商户代理后，你可以在后台按设置各个角色的分成比例：")]),t._v(" "),e("p",[e("img",{attrs:{src:"./static/help/a2.png"}})]),t._v(" "),e("p",[t._v("以酒吧市场为例：")]),t._v(" "),e("p",[t._v("如果您推荐酒吧B注册使用牛霸霸屏，若该酒吧某消费者使用牛霸霸屏软件消费100元，")]),t._v(" "),e("p",[t._v("按照您的代理分成比例25%计算，您将获得收益：")]),t._v(" "),e("p",{staticClass:"red"},[t._v("100X25%=25元")]),t._v(" "),e("p",[t._v("按该酒吧用户每天在牛霸平台上的消费额为1000元计算，您作为代理一年的收益为：")]),t._v(" "),e("p",{staticClass:"red"},[t._v("1000X30X12X25%=9万元")]),t._v(" "),e("p",[t._v("若您一共代理12家酒吧，每月发展1家，您作为代理一年的收益为：")]),t._v(" "),e("p",{staticClass:"red"},[t._v("90000X12=108万元")]),t._v(" "),t._t("default")],2)])],1),t._v(" "),e("div",{staticClass:"help-content fff"},[e("div",{staticClass:"help-title",on:{click:function(a){t.click(2)}}},[t._v("如何提现？"),e("svg-icon",{class:{move:t.isActive[2]},attrs:{"icon-class":"arrow-right"}})],1),t._v(" "),e("collapse",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive[2],expression:"isActive[2]"}],staticClass:"help-main collapse-wrap"},[e("p",[t._v("当消费者消费后，您作为代理的分成金额自动进入您的代理账户，您可以随时手动发起提现到微信钱包。")]),t._v(" "),t._t("default")],2)])],1)])},d=[],l={render:o,staticRenderFns:d},r=l,A=e("VU/8"),p=n,v=A(s,r,!1,p,"data-v-1a2df46e",null);a.default=v.exports},eYZV:function(t,a,e){"use strict";var n="0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out",i={"before-enter":function(t){t.style.transition=n,t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter:function(t){t.dataset.oldOverflow=t.style.overflow,0!==t.scrollHeight?(t.style.height=t.scrollHeight+"px",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.height="",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},"after-enter":function(t){t.style.transition="",t.style.height="",t.style.overflow=t.dataset.oldOverflow},"before-leave":function(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.height=t.scrollHeight+"px",t.style.overflow="hidden"},leave:function(t){0!==t.scrollHeight&&(t.style.transition=n,t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0)},"after-leave":function(t){t.style.transition="",t.style.height="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}};a.a={name:"collapseTransition",functional:!0,render:function(t,a){var e=a.children;return t("transition",{on:i},e)}}}});
//# sourceMappingURL=20.ae901299743618267ab6.js.map