webpackJsonp([10],{QRoP:function(n,e,t){var i=t("Up7C");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("e71935ea",i,!0)},Syi4:function(n,e,t){e=n.exports=t("FZ+f")(!0),e.push([n.i,"/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.vux-tab-ink-bar {\n  position: absolute;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: #04BE02;\n  text-align: center;\n}\n.vux-tab-ink-bar-transition-forward {\n  -webkit-transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s;\n  transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s;\n}\n.vux-tab-ink-bar-transition-backward {\n  -webkit-transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s, left 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s, left 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.vux-tab {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  background-color: #fff;\n  height: 44px;\n  position: relative;\n}\n.vux-tab button {\n  padding: 0;\n  border: 0;\n  outline: 0;\n  background: 0 0;\n  -webkit-appearance: none;\n          appearance: none;\n}\n.vux-tab .vux-tab-item {\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  background: -webkit-linear-gradient(top, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;\n  background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;\n  background-size: 100% 1px;\n  font-size: 14px;\n  text-align: center;\n  line-height: 44px;\n  color: #666;\n}\n.vux-tab .vux-tab-item.vux-tab-selected {\n  color: #04BE02;\n  border-bottom: 3px solid #04BE02;\n}\n.vux-tab .vux-tab-item.vux-tab-disabled {\n  color: #ddd;\n}\n.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected {\n  background: 0 0;\n}\n/** when=prop:custom-bar-width **/\n.vux-tab-bar-inner {\n  display: block;\n  background-color: #04BE02;\n  margin: auto;\n  height: 100%;\n  -webkit-transition: width 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: width 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.vux-tab-item-badge {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  box-sizing: border-box;\n  display: inline-block;\n  height: 18px;\n  min-width: 18px;\n  padding: 0 4px;\n  border-radius: 30px;\n  margin: auto 0 auto 4px;\n  line-height: 18px;\n  font-size: 11px;\n  background-clip: padding-box;\n  vertical-align: middle;\n}\n","",{version:3,sources:["G:/projects/nbbp2.0.git/node_modules/vux/src/components/tab/tab.vue"],names:[],mappings:"AAAA;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF,WAAW;AACX;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;EACE,mBAAmB;EACnB,YAAY;EACZ,UAAU;EACV,QAAQ;EACR,0BAA0B;EAC1B,mBAAmB;CACpB;AACD;EACE,8GAA8G;EAC9G,sGAAsG;CACvG;AACD;EACE,8GAA8G;EAC9G,sGAAsG;CACvG;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,uBAAuB;EACvB,aAAa;EACb,mBAAmB;CACpB;AACD;EACE,WAAW;EACX,UAAU;EACV,WAAW;EACX,gBAAgB;EAChB,yBAAyB;UACjB,iBAAiB;CAC1B;AACD;EACE,eAAe;EACf,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;EAChB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,yGAAyG;EACzG,oGAAoG;EACpG,0BAA0B;EAC1B,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;CACb;AACD;EACE,eAAe;EACf,iCAAiC;CAClC;AACD;EACE,YAAY;CACb;AACD;EACE,gBAAgB;CACjB;AACD,kCAAkC;AAClC;EACE,eAAe;EACf,0BAA0B;EAC1B,aAAa;EACb,aAAa;EACb,8DAA8D;EAC9D,sDAAsD;CACvD;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,UAAU;EACV,uBAAuB;EACvB,sBAAsB;EACtB,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,oBAAoB;EACpB,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;EAChB,6BAA6B;EAC7B,uBAAuB;CACxB",file:"tab.vue",sourcesContent:["/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.vux-tab-ink-bar {\n  position: absolute;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: #04BE02;\n  text-align: center;\n}\n.vux-tab-ink-bar-transition-forward {\n  -webkit-transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s;\n  transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s;\n}\n.vux-tab-ink-bar-transition-backward {\n  -webkit-transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s, left 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s, left 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.vux-tab {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  background-color: #fff;\n  height: 44px;\n  position: relative;\n}\n.vux-tab button {\n  padding: 0;\n  border: 0;\n  outline: 0;\n  background: 0 0;\n  -webkit-appearance: none;\n          appearance: none;\n}\n.vux-tab .vux-tab-item {\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  background: -webkit-linear-gradient(top, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;\n  background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;\n  background-size: 100% 1px;\n  font-size: 14px;\n  text-align: center;\n  line-height: 44px;\n  color: #666;\n}\n.vux-tab .vux-tab-item.vux-tab-selected {\n  color: #04BE02;\n  border-bottom: 3px solid #04BE02;\n}\n.vux-tab .vux-tab-item.vux-tab-disabled {\n  color: #ddd;\n}\n.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected {\n  background: 0 0;\n}\n/** when=prop:custom-bar-width **/\n.vux-tab-bar-inner {\n  display: block;\n  background-color: #04BE02;\n  margin: auto;\n  height: 100%;\n  -webkit-transition: width 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: width 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.vux-tab-item-badge {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  box-sizing: border-box;\n  display: inline-block;\n  height: 18px;\n  min-width: 18px;\n  padding: 0 4px;\n  border-radius: 30px;\n  margin: auto 0 auto 4px;\n  line-height: 18px;\n  font-size: 11px;\n  background-clip: padding-box;\n  vertical-align: middle;\n}\n"],sourceRoot:""}])},Up7C:function(n,e,t){e=n.exports=t("FZ+f")(!0),e.push([n.i,"\n#tab-header[data-v-16063481] {\n  background-color: #181b2a;\n}\n.vux-tab .vux-tab-item[data-v-16063481] {\n  background: none;\n}\n.vux-tab .vux-tab-item.vux-tab-selected[data-v-16063481] {\n  color: #f31374;\n  border-bottom: 3px solid #f31374;\n}\n.container[data-v-16063481] {\n  height: 100%;\n}\n.container[data-v-16063481] .vux-tab-ink-bar {\n  background-color: #f31374;\n}\n","",{version:3,sources:["G:/projects/nbbp2.0.git/src/pages/Detail.vue"],names:[],mappings:";AACA;EACE,0BAA0B;CAC3B;AACD;EACE,iBAAiB;CAClB;AACD;EACE,eAAe;EACf,iCAAiC;CAClC;AACD;EACE,aAAa;CACd;AACD;EACE,0BAA0B;CAC3B",file:"Detail.vue",sourcesContent:["\n#tab-header[data-v-16063481] {\n  background-color: #181b2a;\n}\n.vux-tab .vux-tab-item[data-v-16063481] {\n  background: none;\n}\n.vux-tab .vux-tab-item.vux-tab-selected[data-v-16063481] {\n  color: #f31374;\n  border-bottom: 3px solid #f31374;\n}\n.container[data-v-16063481] {\n  height: 100%;\n}\n.container[data-v-16063481] .vux-tab-ink-bar {\n  background-color: #f31374;\n}\n"],sourceRoot:""}])},Znkm:function(n,e,t){"use strict";var i=t("piuB"),a={name:"tab-item",mixins:[i.a],props:{activeClass:String,disabled:Boolean,badgeBackground:{type:String,default:"#f74c31"},badgeColor:{type:String,default:"#fff"},badgeLabel:String},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}},r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"vux-tab-item",class:[n.currentSelected?n.activeClass:"",{"vux-tab-selected":n.currentSelected,"vux-tab-disabled":n.disabled}],style:n.style,on:{click:n.onItemClick}},[n._t("default"),n._v(" "),void 0!==n.badgeLabel&&""!==n.badgeLabel?t("span",{staticClass:"vux-tab-item-badge",style:{background:n.badgeBackground,color:n.badgeColor}},[n._v("\n  "+n._s(n.badgeLabel))]):n._e()],2)},o=[],c={render:r,staticRenderFns:o},A=c,s=t("VU/8"),u=s(a,A,!1,null,null,null);e.a=u.exports},gfct:function(n,e,t){var i=t("Syi4");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("465fe95e",i,!0)},odqc:function(n,e,t){"use strict";function i(n){t("gfct")}var a=t("piuB"),r={name:"tab",mixins:[a.b],mounted:function(){var n=this;this.$nextTick(function(){setTimeout(function(){n.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0},customBarWidth:[Function,String],preventDefault:Boolean},computed:{barLeft:function(){return this.currentIndex*(100/this.number)+"%"},barRight:function(){return(this.number-this.currentIndex-1)*(100/this.number)+"%"},innerBarStyle:function(){return{width:"function"==typeof this.customBarWidth?this.customBarWidth(this.currentIndex):this.customBarWidth,backgroundColor:this.barActiveColor||this.activeColor}},barStyle:function(){var n={left:this.barLeft,right:this.barRight,display:"block",height:this.lineWidth+"px",transition:this.hasReady?null:"none"};return this.customBarWidth?n.backgroundColor="transparent":n.backgroundColor=this.barActiveColor||this.activeColor,n},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}}},watch:{currentIndex:function(n,e){this.direction=n>e?"forward":"backward",this.$emit("on-index-change",n,e)}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}}},o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"vux-tab",class:{"vux-tab-no-animate":!n.animate}},[n._t("default"),n._v(" "),n.animate?t("div",{staticClass:"vux-tab-ink-bar",class:n.barClass,style:n.barStyle},[n.customBarWidth?t("span",{staticClass:"vux-tab-bar-inner",style:n.innerBarStyle}):n._e()]):n._e()],2)},c=[],A={render:o,staticRenderFns:c},s=A,u=t("VU/8"),b=i,d=u(r,s,!1,b,null,null);e.a=d.exports},otl1:function(n,e,t){"use strict";function i(n){t("QRoP")}Object.defineProperty(e,"__esModule",{value:!0});var a=t("odqc"),r=t("Znkm"),o={data:function(){return{currentView:"Charge"}},beforeRouteEnter:function(n,e,t){document.title="详情记录",t()},components:{Tab:a.a,TabItem:r.a,Charge:function(){return t.e(38).then(t.bind(null,"d4/e"))},Consume:function(){return t.e(36).then(t.bind(null,"xhnK"))},Deposit:function(){return t.e(37).then(t.bind(null,"oKa5"))},Exchange:function(){return t.e(35).then(t.bind(null,"Gx5k"))},Income:function(){return t.e(34).then(t.bind(null,"Dnre"))}},methods:{replace:function(n,e){if(n===this.currentView)return!1;document.title=e,this.currentView=n}}},c=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"container bg1 borderbox"},[t("tab",{attrs:{id:"tab-header"}},[t("tab-item",{attrs:{selected:"Charge"==n.currentView},on:{"on-item-click":function(e){n.replace("Charge","充值详情")}}},[n._v("充值")]),n._v(" "),t("tab-item",{attrs:{selected:"Consume"==n.currentView},on:{"on-item-click":function(e){n.replace("Consume","消费详情")}}},[n._v("消费")]),n._v(" "),t("tab-item",{attrs:{selected:"Income"==n.currentView},on:{"on-item-click":function(e){n.replace("Income","收益详情")}}},[n._v("收益")]),n._v(" "),t("tab-item",{attrs:{selected:"Exchange"==n.currentView},on:{"on-item-click":function(e){n.replace("Exchange","兑换详情")}}},[n._v("兑换")]),n._v(" "),t("tab-item",{attrs:{selected:"Deposit"==n.currentView},on:{"on-item-click":function(e){n.replace("Deposit","提现详情")}}},[n._v("提现")])],1),n._v(" "),t(n.currentView,{tag:"component"})],1)},A=[],s={render:c,staticRenderFns:A},u=s,b=t("VU/8"),d=i,l=b(o,u,!1,d,"data-v-16063481",null);e.default=l.exports},piuB:function(n,e,t){"use strict";t.d(e,"b",function(){return a}),t.d(e,"a",function(){return r});var i=t("0FxO"),a={mounted:function(){this.value>=0&&(this.currentIndex=this.value),this.updateIndex()},methods:{updateIndex:function(){if(this.$children&&this.$children.length){this.number=this.$children.length;for(var n=this.$children,e=0;e<n.length;e++)n[e].currentIndex=e,n[e].currentSelected&&(this.index=e)}}},props:{value:Number},watch:{currentIndex:function(n,e){e>-1&&this.$children[e]&&(this.$children[e].currentSelected=!1),n>-1&&this.$children[n]&&(this.$children[n].currentSelected=!0),this.$emit("input",n),this.$emit("on-index-change",n,e)},index:function(n){this.currentIndex=n},value:function(n){this.index=n}},data:function(){return{index:-1,currentIndex:this.index,number:this.$children.length}}},r={props:{selected:{type:Boolean,default:!1}},mounted:function(){this.$parent.updateIndex()},beforeDestroy:function(){var n=this.$parent;this.$nextTick(function(){n.updateIndex()})},methods:{onItemClick:function(n){var e=this;if(this.$parent.preventDefault)return void this.$parent.$emit("on-before-index-change",this.currentIndex);void 0!==this.disabled&&!1!==this.disabled||(this.currentSelected=!0,this.$parent.currentIndex=this.currentIndex,this.$nextTick(function(){e.$emit("on-item-click",e.currentIndex)})),!0===n&&Object(i.a)(this.link,this.$router)}},watch:{currentSelected:function(n){n&&(this.$parent.index=this.currentIndex)},selected:function(n){this.currentSelected=n}},data:function(){return{currentIndex:-1,currentSelected:this.selected}}}}});
//# sourceMappingURL=10.0d8eb27a6fa361cc1ea2.js.map