webpackJsonp([18],{S2NW:function(e,t,n){"use strict";function i(e){n("qjTT")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),o=n.n(a),r=n("rHil"),s=n("pDNl"),c=n("2sLL"),l=n("/kga"),d=n("gyMJ"),u=n("NYxO"),p={name:"Register",data:function(){return{type:0,r_business:{name:"",phone:"",code:""},r_agent:{name:"",phone:""},concernVisible:!1,isConcern:!1,ticket:"",loading:!1}},beforeRouteEnter:function(e,t,n){1===Number(e.query.type)?document.title="牛霸商户入驻":2===Number(e.query.type)&&(document.title="牛霸代理入驻"),n(function(t){t.type=e.query.type?e.query.type:0})},created:function(){var e=this,t=1===Number(this.$route.query.type)?2:3;Object(d.I)({ht_id:0,type:t,url:window.location.hash.substring(1)}).then(function(t){"已关注"===t.result?e.isConcern=!0:(e.ticket=t.result,e.isConcern=!1)})},methods:o()({},Object(u.b)("user",["getUserInfo"]),{SubmitRegister:function(){var e=this;this.$validator.validateAll().then(function(t){var n=e.vErrors.all();n.length>0?e.$vux.toast.show({text:n[0]}):(e.loading=!0,1===Number(e.type)?Object(d.K)(e.r_business).then(function(t){e.isConcern?e.getUserInfo().then(function(t){e.$vux.toast.show({text:"注册成功"}),e.$router.push("/MyBars")}):e.concernVisible=!0}).catch(function(){e.loading=!1}):Object(d.d)(e.r_agent).then(function(t){e.isConcern?e.getUserInfo().then(function(t){e.$vux.toast.show({text:"注册成功"}),e.$router.push("/AgentCenter")}):e.concernVisible=!0}).catch(function(){e.loading=!1}))})}}),components:{Group:r.a,XInput:s.a,XButton:c.a,XDialog:l.a}},b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container min-h"},[e._m(0),e._v(" "),1==e.type?[n("group",[n("x-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required",expression:"'required'",modifiers:{initial:!0}}],attrs:{title:"酒吧名称",name:"name",placeholder:"",type:"text","data-vv-as":"酒吧名称"},model:{value:e.r_business.name,callback:function(t){e.$set(e.r_business,"name",t)},expression:"r_business.name"}}),e._v(" "),n("x-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required|numeric|mobile",expression:"'required|numeric|mobile'",modifiers:{initial:!0}}],attrs:{title:"手机号码",name:"phone",placeholder:"",type:"number","data-vv-as":"手机号码"},model:{value:e.r_business.phone,callback:function(t){e.$set(e.r_business,"phone",t)},expression:"r_business.phone"}}),e._v(" "),n("x-input",{attrs:{title:"推荐码",name:"code",placeholder:"",type:"text","data-vv-as":"推荐码"},model:{value:e.r_business.code,callback:function(t){e.$set(e.r_business,"code",t)},expression:"r_business.code"}})],1)]:e._e(),e._v(" "),2==e.type?[n("group",[n("x-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required",expression:"'required'",modifiers:{initial:!0}}],attrs:{title:"用户名",name:"agentname",placeholder:"",type:"text","data-vv-as":"用户名"},model:{value:e.r_agent.name,callback:function(t){e.$set(e.r_agent,"name",t)},expression:"r_agent.name"}}),e._v(" "),n("x-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required|numeric|mobile",expression:"'required|numeric|mobile'",modifiers:{initial:!0}}],attrs:{title:"手机号码",name:"mobile",placeholder:"",type:"number","data-vv-as":"手机号码"},model:{value:e.r_agent.phone,callback:function(t){e.$set(e.r_agent,"phone",t)},expression:"r_agent.phone"}})],1)]:e._e(),e._v(" "),n("div",{staticClass:"footer-btn"},[n("x-button",{attrs:{gradients:["#1D62F0","#19D5FD"],disabled:e.loading,"show-loading":e.loading},nativeOn:{click:function(t){e.SubmitRegister(t)}}},[e._v("立即注册")])],1),e._v(" "),n("x-dialog",{attrs:{"dialog-style":{"max-width":"100%",width:"100%","background-color":"transparent"}},model:{value:e.concernVisible,callback:function(t){e.concernVisible=t},expression:"concernVisible"}},[n("div",{staticClass:"qrcode-box"},[n("div",{staticClass:"qrcode-info flex flex-v flex-align-center white"},[e.ticket?n("img",{staticClass:"qrcode",attrs:{src:"https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket="+e.ticket}}):e._e(),e._v(" "),n("p",{staticClass:"f14",staticStyle:{"margin-top":"10px"}},[e._v("请长按二维码")]),e._v(" "),n("p",{staticClass:"f14"},[e._v("关注牛霸霸屏官方公众号")])])])])],2)},m=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"register-top"},[i("img",{staticClass:"logo",attrs:{src:n("7Otq")}}),e._v(" "),i("p",{staticClass:"slogan"},[e._v("牛霸，互动娱乐领导品牌")])])}],v={render:b,staticRenderFns:m},A=v,g=n("VU/8"),f=i,x=g(p,A,!1,f,"data-v-fccabc2c",null);t.default=x.exports},gpG7:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"\n.register-top[data-v-fccabc2c] {\n  padding-top: 20px;\n  padding-bottom: 30px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.register-top .logo[data-v-fccabc2c] {\n  width: 60px;\n  height: 60px;\n}\n.register-top .slogan[data-v-fccabc2c] {\n  margin-top: 10px;\n  font-size: 16px;\n}\n.footer-btn[data-v-fccabc2c] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n.qrcode[data-v-fccabc2c] {\n  width: 3rem;\n  height: 3rem;\n  max-width: 400px;\n}\n","",{version:3,sources:["E:/Sites/nbbp2.0.git/src/pages/Register.vue"],names:[],mappings:";AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;UACvB,uBAAuB;EAC/B,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;CAC7B;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,iBAAiB;EACjB,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,QAAQ;EACR,YAAY;CACb;AACD;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;CAClB",file:"Register.vue",sourcesContent:["\n.register-top[data-v-fccabc2c] {\n  padding-top: 20px;\n  padding-bottom: 30px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.register-top .logo[data-v-fccabc2c] {\n  width: 60px;\n  height: 60px;\n}\n.register-top .slogan[data-v-fccabc2c] {\n  margin-top: 10px;\n  font-size: 16px;\n}\n.footer-btn[data-v-fccabc2c] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n.qrcode[data-v-fccabc2c] {\n  width: 3rem;\n  height: 3rem;\n  max-width: 400px;\n}\n"],sourceRoot:""}])},qjTT:function(e,t,n){var i=n("gpG7");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("1df483c1",i,!0)}});
//# sourceMappingURL=18.31b266a1714566bff352.js.map