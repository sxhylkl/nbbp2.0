webpackJsonp([12],{"+3al":function(n,t,a){"use strict";function e(n){a("cxuV")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("EbL4"),i=a.n(r),o={name:"countup",mounted:function(){var n=this;this.$nextTick(function(){n._countup=new i.a(n.$el,n.startVal,n.endVal,n.decimals,n.duration,n.options),n.start&&n._countup.start()})},props:{tag:{type:String,default:"span"},start:{type:Boolean,default:!0},startVal:{type:Number,default:0},endVal:{type:Number,required:!0},decimals:{type:Number,default:0},duration:{type:Number,default:2},options:{type:Object,default:function(){return{}}}},render:function(n){return n(this.tag,{},[this.startVal])},watch:{start:function(n){n&&this._countup.start()},endVal:function(n){this._countup.update(n)}}},s=a("VU/8"),l=s(o,null,!1,null,null,null),A=l.exports,u={components:{Countup:A}},c=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"container",staticStyle:{"background-color":"#121420"}},[a("div",{staticClass:"user-top"},[a("div",{staticClass:"user-box1 flex flex-align-center"},[n._m(0),n._v(" "),a("div",{staticClass:"edit-user flex flex-align-center"},[a("span",{},[a("router-link",{attrs:{to:{path:"/Profile"}}},[n._v("编辑资料")])],1),n._v(" "),a("span",{},[a("svg-icon",{attrs:{"icon-class":"share"}})],1)])]),n._v(" "),a("div",{staticClass:"user-box2"},[a("p",{staticClass:"white"},[n._v("鲜花")]),n._v(" "),n._m(1),n._v(" "),a("div",{staticClass:"rpxline",staticStyle:{"background-color":"#333743"}}),n._v(" "),n._m(2),n._v(" "),a("div",{staticClass:"flex white tag1"},[a("span",{staticClass:"sex sex-male flex flex-align-center"},[a("svg-icon",{attrs:{"icon-class":"male"}})],1),n._v(" "),a("span",{staticClass:"tag tagcity"},[n._v("宁波")])]),n._v(" "),n._m(3)])]),n._v(" "),a("div",{staticClass:"user-middle"},[a("div",{staticClass:"user-wallet flex"},[a("div",{staticClass:"w1 flex-1 tc"},[a("h3",{staticClass:"white"},[a("countup",{staticClass:"demo1",attrs:{"start-val":0,"end-val":300,duration:2}})],1),n._v(" "),a("h5",[n._v("我的余额/牛角")])]),n._v(" "),a("div",{staticClass:"w2 flex-1 tc"},[a("h3",[a("countup",{staticClass:"demo2",attrs:{"start-val":0,"end-val":30,duration:2}})],1),n._v(" "),a("h5",[n._v("我的收益/员")])])]),n._v(" "),a("div",{staticClass:"group"},[a("ul",[a("li",[a("router-link",{staticClass:"flex group-link f14 flex-align-center",attrs:{to:{path:"/"}}},[a("span",{staticStyle:{color:"#e8401b"}},[a("svg-icon",{attrs:{"icon-class":"heart"}})],1),n._v("推荐给好友"),a("svg-icon",{attrs:{"icon-class":"arrow-right",className:"arrow-right"}})],1)],1),n._v(" "),a("li",[a("router-link",{staticClass:"flex group-link f14 flex-align-center",attrs:{to:{path:"/"}}},[a("span",{staticStyle:{color:"#5bf475"}},[a("svg-icon",{attrs:{"icon-class":"about"}})],1),n._v("关于我们"),a("svg-icon",{attrs:{"icon-class":"arrow-right",className:"arrow-right"}})],1)],1),n._v(" "),a("li",[a("router-link",{staticClass:"flex group-link f14 flex-align-center",attrs:{to:{path:"/"}}},[a("span",{staticStyle:{color:"#317fe3"}},[a("svg-icon",{attrs:{"icon-class":"cooperate"}})],1),n._v("商户加盟"),a("svg-icon",{attrs:{"icon-class":"arrow-right",className:"arrow-right"}})],1)],1)])])])])},d=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"flex-1 avatar flex flex-align-center"},[e("img",{attrs:{src:a("7Otq")}})])},function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"flex u2"},[a("span",{staticClass:"level level-1"},[n._v("V1")]),n._v(" "),a("span",{staticClass:"f12 point"},[n._v("234积分")])])},function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("p",{staticClass:"sign f14 flex"},[a("span",{staticStyle:{"white-space":"nowrap"}},[n._v("签名：")]),a("span",[n._v("最开心的事就是你很好最开心")])])},function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"count-current flex"},[a("div",{staticClass:"ucount"},[a("span",{staticClass:"f20 number"},[n._v("9")]),a("span",{staticClass:"f14 text"},[n._v("点赞")])]),n._v(" "),a("div",{staticClass:"ucount"},[a("span",{staticClass:"f20 number"},[n._v("20")]),a("span",{staticClass:"f14 text"},[n._v("霸屏")])]),n._v(" "),a("div",{staticClass:"ucount"},[a("span",{staticClass:"f20 number"},[n._v("55")]),a("span",{staticClass:"f14 text"},[n._v("礼物")])])])}],m={render:c,staticRenderFns:d},p=m,C=a("VU/8"),f=e,g=C(u,p,!1,f,"data-v-5b68128a",null);t.default=g.exports},EbL4:function(n,t,a){var e,r;!function(i,o){e=o,void 0!==(r="function"==typeof e?e.call(t,a,t,n):e)&&(n.exports=r)}(0,function(n,t,a){return function(n,t,a,e,r,i){function o(n){var t,a,e,r,i,o,s=n<0;if(n=Math.abs(n).toFixed(A.decimals),n+="",t=n.split("."),a=t[0],e=t.length>1?A.options.decimal+t[1]:"",A.options.useGrouping){for(r="",i=0,o=a.length;i<o;++i)0!==i&&i%3==0&&(r=A.options.separator+r),r=a[o-i-1]+r;a=r}return A.options.numerals.length&&(a=a.replace(/[0-9]/g,function(n){return A.options.numerals[+n]}),e=e.replace(/[0-9]/g,function(n){return A.options.numerals[+n]})),(s?"-":"")+A.options.prefix+a+e+A.options.suffix}function s(n,t,a,e){return a*(1-Math.pow(2,-10*n/e))*1024/1023+t}function l(n){return"number"==typeof n&&!isNaN(n)}var A=this;if(A.version=function(){return"1.9.3"},A.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:s,formattingFn:o,prefix:"",suffix:"",numerals:[]},i&&"object"==typeof i)for(var u in A.options)i.hasOwnProperty(u)&&null!==i[u]&&(A.options[u]=i[u]);""===A.options.separator?A.options.useGrouping=!1:A.options.separator=""+A.options.separator;for(var c=0,d=["webkit","moz","ms","o"],m=0;m<d.length&&!window.requestAnimationFrame;++m)window.requestAnimationFrame=window[d[m]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[d[m]+"CancelAnimationFrame"]||window[d[m]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n,t){var a=(new Date).getTime(),e=Math.max(0,16-(a-c)),r=window.setTimeout(function(){n(a+e)},e);return c=a+e,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(n){clearTimeout(n)}),A.initialize=function(){return!(!A.initialized&&(A.error="",A.d="string"==typeof n?document.getElementById(n):n,A.d?(A.startVal=Number(t),A.endVal=Number(a),l(A.startVal)&&l(A.endVal)?(A.decimals=Math.max(0,e||0),A.dec=Math.pow(10,A.decimals),A.duration=1e3*Number(r)||2e3,A.countDown=A.startVal>A.endVal,A.frameVal=A.startVal,A.initialized=!0,0):(A.error="[CountUp] startVal ("+t+") or endVal ("+a+") is not a number",1)):(A.error="[CountUp] target is null or undefined",1)))},A.printValue=function(n){var t=A.options.formattingFn(n);"INPUT"===A.d.tagName?this.d.value=t:"text"===A.d.tagName||"tspan"===A.d.tagName?this.d.textContent=t:this.d.innerHTML=t},A.count=function(n){A.startTime||(A.startTime=n),A.timestamp=n;var t=n-A.startTime;A.remaining=A.duration-t,A.options.useEasing?A.countDown?A.frameVal=A.startVal-A.options.easingFn(t,0,A.startVal-A.endVal,A.duration):A.frameVal=A.options.easingFn(t,A.startVal,A.endVal-A.startVal,A.duration):A.countDown?A.frameVal=A.startVal-(A.startVal-A.endVal)*(t/A.duration):A.frameVal=A.startVal+(A.endVal-A.startVal)*(t/A.duration),A.countDown?A.frameVal=A.frameVal<A.endVal?A.endVal:A.frameVal:A.frameVal=A.frameVal>A.endVal?A.endVal:A.frameVal,A.frameVal=Math.round(A.frameVal*A.dec)/A.dec,A.printValue(A.frameVal),t<A.duration?A.rAF=requestAnimationFrame(A.count):A.callback&&A.callback()},A.start=function(n){A.initialize()&&(A.callback=n,A.rAF=requestAnimationFrame(A.count))},A.pauseResume=function(){A.paused?(A.paused=!1,delete A.startTime,A.duration=A.remaining,A.startVal=A.frameVal,requestAnimationFrame(A.count)):(A.paused=!0,cancelAnimationFrame(A.rAF))},A.reset=function(){A.paused=!1,delete A.startTime,A.initialized=!1,A.initialize()&&(cancelAnimationFrame(A.rAF),A.printValue(A.startVal))},A.update=function(n){if(A.initialize()){if(n=Number(n),!l(n))return void(A.error="[CountUp] update() - new endVal is not a number: "+n);A.error="",n!==A.frameVal&&(cancelAnimationFrame(A.rAF),A.paused=!1,delete A.startTime,A.startVal=A.frameVal,A.endVal=n,A.countDown=A.startVal>A.endVal,A.rAF=requestAnimationFrame(A.count))}},A.initialize()&&A.printValue(A.startVal)}})},cxuV:function(n,t,a){var e=a("wOko");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);a("rjj0")("067a59e0",e,!0)},wOko:function(n,t,a){t=n.exports=a("FZ+f")(!0),t.push([n.i,"\n.user-top[data-v-5b68128a] {\n  padding: 0.2rem 0.4rem;\n  margin-bottom: 0.2rem;\n  background-color: #181b2a;\n}\n.user-top .user-box1[data-v-5b68128a] {\n  margin-bottom: 0.2rem;\n}\n.user-top .avatar img[data-v-5b68128a] {\n  display: block;\n  width: 1.7rem;\n  height: 1.7rem;\n  border: 0.1rem solid #21313a;\n  border-radius: 50%;\n}\n.user-top .edit-user span[data-v-5b68128a] {\n  padding: 0.15rem 0.25rem;\n  background-color: #21313a;\n  border-radius: 2px;\n}\n.user-top .edit-user span a[data-v-5b68128a] {\n  color: #fff;\n  font-size: 14px;\n}\n.user-top .edit-user span[data-v-5b68128a]:last-child {\n  color: #fdd907;\n  margin-left: 10px;\n}\n.user-top .edit-user span:last-child .svg-icon[data-v-5b68128a] {\n  width: 0.36rem;\n  height: 0.36rem;\n}\n.user-top .user-box2 .u2[data-v-5b68128a] {\n  margin: 0.15rem 0;\n}\n.user-top .user-box2 .point[data-v-5b68128a] {\n  color: #61667a;\n  margin-left: 4px;\n}\n.user-top .sign[data-v-5b68128a] {\n  color: #61667a;\n  margin: 0.2rem 0;\n}\n.user-top .tag1 span[data-v-5b68128a] {\n  margin-right: 4px;\n}\n.user-top .count-current[data-v-5b68128a] {\n  margin-top: 0.24rem;\n}\n.user-top .count-current .ucount[data-v-5b68128a] {\n  margin-right: 20px;\n}\n.user-top .count-current .number[data-v-5b68128a] {\n  color: #fff;\n  margin-right: 6px;\n}\n.user-top .count-current .text[data-v-5b68128a] {\n  color: #61667a;\n}\n.user-middle[data-v-5b68128a] {\n  background-color: #181b2a;\n}\n.user-middle .group ul li[data-v-5b68128a] {\n  display: block;\n}\n.user-middle .group-link[data-v-5b68128a] {\n  padding: 0.35rem 0;\n  margin: 0 0.4rem;\n  color: #fff;\n  position: relative;\n}\n.user-middle .group-link[data-v-5b68128a]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #12151e;\n  color: #12151e;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\n.user-middle .group-link span[data-v-5b68128a] {\n  display: block;\n  width: 0.56rem;\n  height: 0.56rem;\n  line-height: 0.56rem;\n  text-align: center;\n  background-color: #2e313a;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n.user-middle .group-link .arrow-right[data-v-5b68128a] {\n  width: 0.4rem;\n  height: 0.4rem;\n  fill: #5d5e63;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.user-wallet[data-v-5b68128a] {\n  padding: 0.2rem 0.4rem;\n}\n.user-wallet .w1[data-v-5b68128a] {\n  position: relative;\n}\n.user-wallet .w1[data-v-5b68128a]:after {\n  content: '';\n  position: absolute;\n  right: 0;\n  top: 20%;\n  width: 1px;\n  bottom: 20%;\n  border-right: 1px solid #12151e;\n  color: #12151e;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n  transform: scaleX(0.5);\n}\n.user-wallet h5[data-v-5b68128a] {\n  color: #61667a;\n}\n.user-wallet h3[data-v-5b68128a] {\n  font-size: 24px;\n  margin-bottom: 2px;\n}\n.user-wallet .w2 h3[data-v-5b68128a] {\n  color: #f31374;\n}\n","",{version:3,sources:["G:/projects/nbbp2.0.git/src/pages/UserCenter.vue"],names:[],mappings:";AACA;EACE,uBAAuB;EACvB,sBAAsB;EACtB,0BAA0B;CAC3B;AACD;EACE,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,cAAc;EACd,eAAe;EACf,6BAA6B;EAC7B,mBAAmB;CACpB;AACD;EACE,yBAAyB;EACzB,0BAA0B;EAC1B,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,eAAe;CAChB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,SAAS;EACT,YAAY;EACZ,8BAA8B;EAC9B,eAAe;EACf,8BAA8B;EAC9B,sBAAsB;EACtB,+BAA+B;EAC/B,uBAAuB;CACxB;AACD;EACE,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,qBAAqB;EACrB,mBAAmB;EACnB,0BAA0B;EAC1B,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,cAAc;EACd,eAAe;EACf,cAAc;EACd,mBAAmB;EACnB,SAAS;EACT,SAAS;EACT,oCAAoC;UAC5B,4BAA4B;CACrC;AACD;EACE,uBAAuB;CACxB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,SAAS;EACT,SAAS;EACT,WAAW;EACX,YAAY;EACZ,gCAAgC;EAChC,eAAe;EACf,8BAA8B;EAC9B,sBAAsB;EACtB,+BAA+B;EAC/B,uBAAuB;CACxB;AACD;EACE,eAAe;CAChB;AACD;EACE,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,eAAe;CAChB",file:"UserCenter.vue",sourcesContent:["\n.user-top[data-v-5b68128a] {\n  padding: 0.2rem 0.4rem;\n  margin-bottom: 0.2rem;\n  background-color: #181b2a;\n}\n.user-top .user-box1[data-v-5b68128a] {\n  margin-bottom: 0.2rem;\n}\n.user-top .avatar img[data-v-5b68128a] {\n  display: block;\n  width: 1.7rem;\n  height: 1.7rem;\n  border: 0.1rem solid #21313a;\n  border-radius: 50%;\n}\n.user-top .edit-user span[data-v-5b68128a] {\n  padding: 0.15rem 0.25rem;\n  background-color: #21313a;\n  border-radius: 2px;\n}\n.user-top .edit-user span a[data-v-5b68128a] {\n  color: #fff;\n  font-size: 14px;\n}\n.user-top .edit-user span[data-v-5b68128a]:last-child {\n  color: #fdd907;\n  margin-left: 10px;\n}\n.user-top .edit-user span:last-child .svg-icon[data-v-5b68128a] {\n  width: 0.36rem;\n  height: 0.36rem;\n}\n.user-top .user-box2 .u2[data-v-5b68128a] {\n  margin: 0.15rem 0;\n}\n.user-top .user-box2 .point[data-v-5b68128a] {\n  color: #61667a;\n  margin-left: 4px;\n}\n.user-top .sign[data-v-5b68128a] {\n  color: #61667a;\n  margin: 0.2rem 0;\n}\n.user-top .tag1 span[data-v-5b68128a] {\n  margin-right: 4px;\n}\n.user-top .count-current[data-v-5b68128a] {\n  margin-top: 0.24rem;\n}\n.user-top .count-current .ucount[data-v-5b68128a] {\n  margin-right: 20px;\n}\n.user-top .count-current .number[data-v-5b68128a] {\n  color: #fff;\n  margin-right: 6px;\n}\n.user-top .count-current .text[data-v-5b68128a] {\n  color: #61667a;\n}\n.user-middle[data-v-5b68128a] {\n  background-color: #181b2a;\n}\n.user-middle .group ul li[data-v-5b68128a] {\n  display: block;\n}\n.user-middle .group-link[data-v-5b68128a] {\n  padding: 0.35rem 0;\n  margin: 0 0.4rem;\n  color: #fff;\n  position: relative;\n}\n.user-middle .group-link[data-v-5b68128a]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #12151e;\n  color: #12151e;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\n.user-middle .group-link span[data-v-5b68128a] {\n  display: block;\n  width: 0.56rem;\n  height: 0.56rem;\n  line-height: 0.56rem;\n  text-align: center;\n  background-color: #2e313a;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n.user-middle .group-link .arrow-right[data-v-5b68128a] {\n  width: 0.4rem;\n  height: 0.4rem;\n  fill: #5d5e63;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.user-wallet[data-v-5b68128a] {\n  padding: 0.2rem 0.4rem;\n}\n.user-wallet .w1[data-v-5b68128a] {\n  position: relative;\n}\n.user-wallet .w1[data-v-5b68128a]:after {\n  content: '';\n  position: absolute;\n  right: 0;\n  top: 20%;\n  width: 1px;\n  bottom: 20%;\n  border-right: 1px solid #12151e;\n  color: #12151e;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n  transform: scaleX(0.5);\n}\n.user-wallet h5[data-v-5b68128a] {\n  color: #61667a;\n}\n.user-wallet h3[data-v-5b68128a] {\n  font-size: 24px;\n  margin-bottom: 2px;\n}\n.user-wallet .w2 h3[data-v-5b68128a] {\n  color: #f31374;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=12.cc1ef9bc17c62271eae6.js.map