webpackJsonp([9],{"+3al":function(n,t,e){"use strict";function a(n){e("rtAN")}Object.defineProperty(t,"__esModule",{value:!0});var r=e("EbL4"),i=e.n(r),o={name:"countup",mounted:function(){var n=this;this.$nextTick(function(){n._countup=new i.a(n.$el,n.startVal,n.endVal,n.decimals,n.duration,n.options),n.start&&n._countup.start()})},props:{tag:{type:String,default:"span"},start:{type:Boolean,default:!0},startVal:{type:Number,default:0},endVal:{type:Number,required:!0},decimals:{type:Number,default:0},duration:{type:Number,default:2},options:{type:Object,default:function(){return{}}}},render:function(n){return n(this.tag,{},[this.startVal])},watch:{start:function(n){n&&this._countup.start()},endVal:function(n){this._countup.update(n)}}},s=e("VU/8"),l=s(o,null,!1,null,null,null),c=l.exports,A=e("KaAT"),u=e("C/Tl"),d={components:{Countup:c,Group:A.a,Cell:u.a},methods:{}},m=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container bg1"},[e("div",{staticClass:"user-top bg2"},[e("div",{staticClass:"user-box1 flex flex-align-center"},[n._m(0),n._v(" "),e("div",{staticClass:"edit-user flex flex-align-center"},[e("span",{},[e("router-link",{attrs:{to:{path:"/Profile"}}},[n._v("编辑资料")])],1),n._v(" "),e("span",{},[e("svg-icon",{attrs:{"icon-class":"share"}})],1)])]),n._v(" "),e("div",{staticClass:"user-box2"},[e("p",{staticClass:"white"},[n._v("鲜花")]),n._v(" "),n._m(1),n._v(" "),e("div",{staticClass:"rpxline",staticStyle:{"background-color":"#333743"}}),n._v(" "),n._m(2),n._v(" "),e("div",{staticClass:"flex white tag1"},[e("span",{staticClass:"sex sex-male flex flex-align-center"},[e("svg-icon",{attrs:{"icon-class":"male"}})],1),n._v(" "),e("span",{staticClass:"tag tagcity"},[n._v("宁波")])]),n._v(" "),n._m(3)])]),n._v(" "),e("div",{staticClass:"user-middle bg2"},[e("div",{staticClass:"user-wallet flex"},[e("div",{staticClass:"w1 flex-1 tc",on:{click:function(t){n.$router.push({path:"/Charge"})}}},[e("h3",{staticClass:"white"},[e("countup",{staticClass:"demo1",attrs:{"start-val":0,"end-val":300,duration:2}})],1),n._v(" "),e("h5",[n._v("我的余额/牛角")])]),n._v(" "),e("div",{staticClass:"w2 flex-1 tc",on:{click:function(t){n.$router.push({path:"/Income"})}}},[e("h3",[e("countup",{staticClass:"demo2",attrs:{"start-val":0,"end-val":30,duration:2}})],1),n._v(" "),e("h5",[n._v("我的收益/员")])])]),n._v(" "),e("group",[e("cell",{attrs:{title:"推荐给好友",color:"#e8401b","is-link":!0,"icon-name":"heart","link-path":{path:"/"}}}),n._v(" "),e("cell",{attrs:{title:"关于我们",color:"#5bf475","is-link":!0,"icon-name":"about","link-path":{path:"/About"}}}),n._v(" "),e("cell",{attrs:{title:"商户加盟",color:"#317fe3","is-link":!0,"icon-name":"cooperate","link-path":{path:"/"}}})],1)],1)])},p=[function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"flex-1 avatar flex flex-align-center"},[a("img",{attrs:{src:e("7Otq")}})])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"flex u2 flex-align-center"},[e("span",{staticClass:"level level-1"},[n._v("V1")]),n._v(" "),e("span",{staticClass:"f12 point"},[n._v("234积分")])])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("p",{staticClass:"sign f14 flex"},[e("span",{staticStyle:{"white-space":"nowrap"}},[n._v("签名：")]),e("span",[n._v("最开心的事就是你很好最开心")])])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"count-current flex"},[e("div",{staticClass:"ucount"},[e("span",{staticClass:"f20 number"},[n._v("9")]),e("span",{staticClass:"f14 text"},[n._v("点赞")])]),n._v(" "),e("div",{staticClass:"ucount"},[e("span",{staticClass:"f20 number"},[n._v("20")]),e("span",{staticClass:"f14 text"},[n._v("霸屏")])]),n._v(" "),e("div",{staticClass:"ucount"},[e("span",{staticClass:"f20 number"},[n._v("55")]),e("span",{staticClass:"f14 text"},[n._v("礼物")])])])}],f={render:m,staticRenderFns:p},C=f,g=e("VU/8"),v=a,B=g(d,C,!1,v,"data-v-9fea67be",null);t.default=B.exports},"7JEF":function(n,t,e){t=n.exports=e("FZ+f")(!0),t.push([n.i,"\n.user-top[data-v-9fea67be] {\n  padding: 0.2rem 0.4rem;\n  margin-bottom: 0.2rem;\n}\n.user-top .user-box1[data-v-9fea67be] {\n  margin-bottom: 0.2rem;\n}\n.user-top .avatar img[data-v-9fea67be] {\n  display: block;\n  width: 1.7rem;\n  height: 1.7rem;\n  border: 0.1rem solid #21313a;\n  border-radius: 50%;\n}\n.user-top .edit-user span[data-v-9fea67be] {\n  padding: 0.15rem 0.25rem;\n  background-color: #21313a;\n  border-radius: 2px;\n}\n.user-top .edit-user span a[data-v-9fea67be] {\n  color: #fff;\n  font-size: 14px;\n}\n.user-top .edit-user span[data-v-9fea67be]:last-child {\n  color: #fdd907;\n  margin-left: 10px;\n}\n.user-top .edit-user span:last-child .svg-icon[data-v-9fea67be] {\n  width: 0.36rem;\n  height: 0.36rem;\n}\n.user-top .user-box2 .u2[data-v-9fea67be] {\n  margin: 0.15rem 0;\n}\n.user-top .user-box2 .point[data-v-9fea67be] {\n  color: #61667a;\n  margin-left: 4px;\n}\n.user-top .sign[data-v-9fea67be] {\n  color: #61667a;\n  margin: 0.2rem 0;\n}\n.user-top .tag1 span[data-v-9fea67be] {\n  margin-right: 4px;\n}\n.user-top .count-current[data-v-9fea67be] {\n  margin-top: 0.24rem;\n}\n.user-top .count-current .ucount[data-v-9fea67be] {\n  margin-right: 20px;\n}\n.user-top .count-current .number[data-v-9fea67be] {\n  color: #fff;\n  margin-right: 6px;\n}\n.user-top .count-current .text[data-v-9fea67be] {\n  color: #61667a;\n}\n.user-wallet[data-v-9fea67be] {\n  padding: 0.2rem 0.4rem;\n}\n.user-wallet .w1[data-v-9fea67be] {\n  position: relative;\n}\n.user-wallet .w1[data-v-9fea67be]:after {\n  content: '';\n  position: absolute;\n  right: 0;\n  top: 20%;\n  width: 1px;\n  bottom: 20%;\n  border-right: 1px solid #12151e;\n  color: #12151e;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n  transform: scaleX(0.5);\n}\n.user-wallet h5[data-v-9fea67be] {\n  color: #61667a;\n}\n.user-wallet h3[data-v-9fea67be] {\n  font-size: 24px;\n  margin-bottom: 2px;\n}\n.user-wallet .w2 h3[data-v-9fea67be] {\n  color: #f31374;\n}\n","",{version:3,sources:["E:/Sites/nbbp2.0.git/src/pages/UserCenter.vue"],names:[],mappings:";AACA;EACE,uBAAuB;EACvB,sBAAsB;CACvB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,cAAc;EACd,eAAe;EACf,6BAA6B;EAC7B,mBAAmB;CACpB;AACD;EACE,yBAAyB;EACzB,0BAA0B;EAC1B,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,eAAe;CAChB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,SAAS;EACT,SAAS;EACT,WAAW;EACX,YAAY;EACZ,gCAAgC;EAChC,eAAe;EACf,8BAA8B;EAC9B,sBAAsB;EACtB,+BAA+B;EAC/B,uBAAuB;CACxB;AACD;EACE,eAAe;CAChB;AACD;EACE,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,eAAe;CAChB",file:"UserCenter.vue",sourcesContent:["\n.user-top[data-v-9fea67be] {\n  padding: 0.2rem 0.4rem;\n  margin-bottom: 0.2rem;\n}\n.user-top .user-box1[data-v-9fea67be] {\n  margin-bottom: 0.2rem;\n}\n.user-top .avatar img[data-v-9fea67be] {\n  display: block;\n  width: 1.7rem;\n  height: 1.7rem;\n  border: 0.1rem solid #21313a;\n  border-radius: 50%;\n}\n.user-top .edit-user span[data-v-9fea67be] {\n  padding: 0.15rem 0.25rem;\n  background-color: #21313a;\n  border-radius: 2px;\n}\n.user-top .edit-user span a[data-v-9fea67be] {\n  color: #fff;\n  font-size: 14px;\n}\n.user-top .edit-user span[data-v-9fea67be]:last-child {\n  color: #fdd907;\n  margin-left: 10px;\n}\n.user-top .edit-user span:last-child .svg-icon[data-v-9fea67be] {\n  width: 0.36rem;\n  height: 0.36rem;\n}\n.user-top .user-box2 .u2[data-v-9fea67be] {\n  margin: 0.15rem 0;\n}\n.user-top .user-box2 .point[data-v-9fea67be] {\n  color: #61667a;\n  margin-left: 4px;\n}\n.user-top .sign[data-v-9fea67be] {\n  color: #61667a;\n  margin: 0.2rem 0;\n}\n.user-top .tag1 span[data-v-9fea67be] {\n  margin-right: 4px;\n}\n.user-top .count-current[data-v-9fea67be] {\n  margin-top: 0.24rem;\n}\n.user-top .count-current .ucount[data-v-9fea67be] {\n  margin-right: 20px;\n}\n.user-top .count-current .number[data-v-9fea67be] {\n  color: #fff;\n  margin-right: 6px;\n}\n.user-top .count-current .text[data-v-9fea67be] {\n  color: #61667a;\n}\n.user-wallet[data-v-9fea67be] {\n  padding: 0.2rem 0.4rem;\n}\n.user-wallet .w1[data-v-9fea67be] {\n  position: relative;\n}\n.user-wallet .w1[data-v-9fea67be]:after {\n  content: '';\n  position: absolute;\n  right: 0;\n  top: 20%;\n  width: 1px;\n  bottom: 20%;\n  border-right: 1px solid #12151e;\n  color: #12151e;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n  transform: scaleX(0.5);\n}\n.user-wallet h5[data-v-9fea67be] {\n  color: #61667a;\n}\n.user-wallet h3[data-v-9fea67be] {\n  font-size: 24px;\n  margin-bottom: 2px;\n}\n.user-wallet .w2 h3[data-v-9fea67be] {\n  color: #f31374;\n}\n"],sourceRoot:""}])},"C/Tl":function(n,t,e){"use strict";function a(n){e("G+Go")}var r={props:["color","title","iconName","isLink","linkPath"]},i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("li",{on:{click:function(t){n.$router.push(n.linkPath)}}},[e("div",{staticClass:"flex group-cell f14 flex-align-center",class:{link:n.isLink}},[e("span",{style:{color:n.color}},[e("svg-icon",{attrs:{"icon-class":n.iconName,className:"left-icon"}})],1),e("div",{staticClass:"flex-1 f15"},[n._v(n._s(n.title))]),n.isLink?e("svg-icon",{attrs:{"icon-class":"arrow-right",className:"arrow-right"}}):n._e(),e("div",{staticClass:"slot-content"},[n._t("default")],2)],1)])},o=[],s={render:i,staticRenderFns:o},l=s,c=e("VU/8"),A=a,u=c(r,l,!1,A,"data-v-3e8cdc31",null);t.a=u.exports},EbL4:function(n,t,e){var a,r;!function(i,o){a=o,void 0!==(r="function"==typeof a?a.call(t,e,t,n):a)&&(n.exports=r)}(0,function(n,t,e){return function(n,t,e,a,r,i){function o(n){var t,e,a,r,i,o,s=n<0;if(n=Math.abs(n).toFixed(c.decimals),n+="",t=n.split("."),e=t[0],a=t.length>1?c.options.decimal+t[1]:"",c.options.useGrouping){for(r="",i=0,o=e.length;i<o;++i)0!==i&&i%3==0&&(r=c.options.separator+r),r=e[o-i-1]+r;e=r}return c.options.numerals.length&&(e=e.replace(/[0-9]/g,function(n){return c.options.numerals[+n]}),a=a.replace(/[0-9]/g,function(n){return c.options.numerals[+n]})),(s?"-":"")+c.options.prefix+e+a+c.options.suffix}function s(n,t,e,a){return e*(1-Math.pow(2,-10*n/a))*1024/1023+t}function l(n){return"number"==typeof n&&!isNaN(n)}var c=this;if(c.version=function(){return"1.9.3"},c.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:s,formattingFn:o,prefix:"",suffix:"",numerals:[]},i&&"object"==typeof i)for(var A in c.options)i.hasOwnProperty(A)&&null!==i[A]&&(c.options[A]=i[A]);""===c.options.separator?c.options.useGrouping=!1:c.options.separator=""+c.options.separator;for(var u=0,d=["webkit","moz","ms","o"],m=0;m<d.length&&!window.requestAnimationFrame;++m)window.requestAnimationFrame=window[d[m]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[d[m]+"CancelAnimationFrame"]||window[d[m]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n,t){var e=(new Date).getTime(),a=Math.max(0,16-(e-u)),r=window.setTimeout(function(){n(e+a)},a);return u=e+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(n){clearTimeout(n)}),c.initialize=function(){return!(!c.initialized&&(c.error="",c.d="string"==typeof n?document.getElementById(n):n,c.d?(c.startVal=Number(t),c.endVal=Number(e),l(c.startVal)&&l(c.endVal)?(c.decimals=Math.max(0,a||0),c.dec=Math.pow(10,c.decimals),c.duration=1e3*Number(r)||2e3,c.countDown=c.startVal>c.endVal,c.frameVal=c.startVal,c.initialized=!0,0):(c.error="[CountUp] startVal ("+t+") or endVal ("+e+") is not a number",1)):(c.error="[CountUp] target is null or undefined",1)))},c.printValue=function(n){var t=c.options.formattingFn(n);"INPUT"===c.d.tagName?this.d.value=t:"text"===c.d.tagName||"tspan"===c.d.tagName?this.d.textContent=t:this.d.innerHTML=t},c.count=function(n){c.startTime||(c.startTime=n),c.timestamp=n;var t=n-c.startTime;c.remaining=c.duration-t,c.options.useEasing?c.countDown?c.frameVal=c.startVal-c.options.easingFn(t,0,c.startVal-c.endVal,c.duration):c.frameVal=c.options.easingFn(t,c.startVal,c.endVal-c.startVal,c.duration):c.countDown?c.frameVal=c.startVal-(c.startVal-c.endVal)*(t/c.duration):c.frameVal=c.startVal+(c.endVal-c.startVal)*(t/c.duration),c.countDown?c.frameVal=c.frameVal<c.endVal?c.endVal:c.frameVal:c.frameVal=c.frameVal>c.endVal?c.endVal:c.frameVal,c.frameVal=Math.round(c.frameVal*c.dec)/c.dec,c.printValue(c.frameVal),t<c.duration?c.rAF=requestAnimationFrame(c.count):c.callback&&c.callback()},c.start=function(n){c.initialize()&&(c.callback=n,c.rAF=requestAnimationFrame(c.count))},c.pauseResume=function(){c.paused?(c.paused=!1,delete c.startTime,c.duration=c.remaining,c.startVal=c.frameVal,requestAnimationFrame(c.count)):(c.paused=!0,cancelAnimationFrame(c.rAF))},c.reset=function(){c.paused=!1,delete c.startTime,c.initialized=!1,c.initialize()&&(cancelAnimationFrame(c.rAF),c.printValue(c.startVal))},c.update=function(n){if(c.initialize()){if(n=Number(n),!l(n))return void(c.error="[CountUp] update() - new endVal is not a number: "+n);c.error="",n!==c.frameVal&&(cancelAnimationFrame(c.rAF),c.paused=!1,delete c.startTime,c.startVal=c.frameVal,c.endVal=n,c.countDown=c.startVal>c.endVal,c.rAF=requestAnimationFrame(c.count))}},c.initialize()&&c.printValue(c.startVal)}})},"G+Go":function(n,t,e){var a=e("Qy2V");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("b816e8de",a,!0)},KaAT:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"group"},[e("ul",[n._t("default")],2)])},r=[],i={render:a,staticRenderFns:r},o=i,s=e("VU/8"),l=s(null,o,!1,null,null,null);t.a=l.exports},Qy2V:function(n,t,e){t=n.exports=e("FZ+f")(!0),t.push([n.i,'\nli[data-v-3e8cdc31] {\n  display: block;\n}\n.group-cell[data-v-3e8cdc31] {\n  padding: 0.35rem 0;\n  margin: 0 0.4rem;\n  color: #fff;\n  position: relative;\n}\n.group-cell .left-icon[data-v-3e8cdc31] {\n  width: 0.3rem;\n  height: 0.3rem;\n}\n.group-cell[data-v-3e8cdc31]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #12151e;\n  color: #12151e;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\n.group-cell > span[data-v-3e8cdc31] {\n  display: block;\n  width: 0.56rem;\n  height: 0.56rem;\n  line-height: 0.56rem;\n  text-align: center;\n  background-color: #2e313a;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n.group-cell .arrow-right[data-v-3e8cdc31] {\n  width: 0.4rem;\n  height: 0.4rem;\n  fill: #5d5e63;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.group-cell.link .slot-content[data-v-3e8cdc31] {\n  margin-right: 0.4rem;\n}\n',"",{version:3,sources:["E:/Sites/nbbp2.0.git/src/components/User/Cell.vue"],names:[],mappings:";AACA;EACE,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,cAAc;EACd,eAAe;CAChB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,SAAS;EACT,YAAY;EACZ,8BAA8B;EAC9B,eAAe;EACf,8BAA8B;EAC9B,sBAAsB;EACtB,+BAA+B;EAC/B,uBAAuB;CACxB;AACD;EACE,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,qBAAqB;EACrB,mBAAmB;EACnB,0BAA0B;EAC1B,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,cAAc;EACd,eAAe;EACf,cAAc;EACd,mBAAmB;EACnB,SAAS;EACT,SAAS;EACT,oCAAoC;UAC5B,4BAA4B;CACrC;AACD;EACE,qBAAqB;CACtB",file:"Cell.vue",sourcesContent:['\nli[data-v-3e8cdc31] {\n  display: block;\n}\n.group-cell[data-v-3e8cdc31] {\n  padding: 0.35rem 0;\n  margin: 0 0.4rem;\n  color: #fff;\n  position: relative;\n}\n.group-cell .left-icon[data-v-3e8cdc31] {\n  width: 0.3rem;\n  height: 0.3rem;\n}\n.group-cell[data-v-3e8cdc31]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #12151e;\n  color: #12151e;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\n.group-cell > span[data-v-3e8cdc31] {\n  display: block;\n  width: 0.56rem;\n  height: 0.56rem;\n  line-height: 0.56rem;\n  text-align: center;\n  background-color: #2e313a;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n.group-cell .arrow-right[data-v-3e8cdc31] {\n  width: 0.4rem;\n  height: 0.4rem;\n  fill: #5d5e63;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.group-cell.link .slot-content[data-v-3e8cdc31] {\n  margin-right: 0.4rem;\n}\n'],sourceRoot:""}])},rtAN:function(n,t,e){var a=e("7JEF");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("e7c4e3b8",a,!0)}});
//# sourceMappingURL=9.a8dfb8ec0b82565873aa.js.map