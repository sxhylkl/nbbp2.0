webpackJsonp([31],{CcjU:function(e,t,n){var i=n("G1ZL");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("785261d4",i,!0)},G1ZL:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"\n.register-top[data-v-2457caee] {\n  padding-top: 20px;\n  padding-bottom: 30px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.register-top .logo[data-v-2457caee] {\n  width: 60px;\n  height: 60px;\n}\n.register-top .slogan[data-v-2457caee] {\n  margin-top: 10px;\n  font-size: 16px;\n}\n.footer-btn[data-v-2457caee] {\n  margin: 30px 10px 0;\n  /* position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%; */\n}\n.vux-x-input.disabled[data-v-2457caee] {\n  color: rgba(0, 0, 0, 0.5);\n}\n","",{version:3,sources:["G:/projects/nbbp2.0.git/src/pages/Register.vue"],names:[],mappings:";AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;UACvB,uBAAuB;EAC/B,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;CAC7B;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,iBAAiB;EACjB,gBAAgB;CACjB;AACD;EACE,oBAAoB;EACpB;;;iBAGe;CAChB;AACD;EACE,0BAA0B;CAC3B",file:"Register.vue",sourcesContent:["\n.register-top[data-v-2457caee] {\n  padding-top: 20px;\n  padding-bottom: 30px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.register-top .logo[data-v-2457caee] {\n  width: 60px;\n  height: 60px;\n}\n.register-top .slogan[data-v-2457caee] {\n  margin-top: 10px;\n  font-size: 16px;\n}\n.footer-btn[data-v-2457caee] {\n  margin: 30px 10px 0;\n  /* position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%; */\n}\n.vux-x-input.disabled[data-v-2457caee] {\n  color: rgba(0, 0, 0, 0.5);\n}\n"],sourceRoot:""}])},S2NW:function(e,t,n){"use strict";function i(e){n("CcjU")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),o=n.n(a),r=n("rHil"),s=n("pDNl"),l=n("2sLL"),c=n("gyMJ"),d=n("NYxO"),u={name:"Register",data:function(){return{type:0,r_business:{name:"",phone:"",code:""},r_agent:{name:"",phone:""},loading:!1,code:""}},beforeRouteEnter:function(e,t,n){1===Number(e.query.type)?document.title="牛霸商户入驻":2===Number(e.query.type)&&(document.title="牛霸代理入驻"),n(function(t){t.type=e.query.type?e.query.type:0;var n=e.query.code?e.query.code.toString():"";n&&""!==n&&(t.code=n,t.r_business.code=n)})},created:function(){},methods:o()({},Object(d.b)("user",["getUserInfo"]),{SubmitRegister:function(){var e=this;this.$validator.validateAll().then(function(t){var n=e.vErrors.all();n.length>0?e.$vux.toast.show({text:n[0],width:"10em"}):(e.loading=!0,1===Number(e.type)?Object(c.Z)(e.r_business).then(function(t){e.getUserInfo().then(function(t){e.$vux.toast.show({text:"注册成功"}),setTimeout(function(){e.$vux.toast.hide(),e.$router.push("/MyBars")},800)})}).catch(function(){e.loading=!1}):Object(c.d)(e.r_agent).then(function(t){e.getUserInfo().then(function(t){e.$vux.toast.show({text:"注册成功"}),setTimeout(function(){e.$vux.toast.hide(),e.$router.push("/AgentCenter")},800)})}).catch(function(){e.loading=!1}))})}}),components:{Group:r.a,XInput:s.a,XButton:l.a}},p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container min-h"},[e._m(0),e._v(" "),1==e.type?[n("group",[n("x-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required",expression:"'required'",modifiers:{initial:!0}}],attrs:{title:"酒吧名称",name:"name",placeholder:"",type:"text","data-vv-as":"酒吧名称"},model:{value:e.r_business.name,callback:function(t){e.$set(e.r_business,"name",t)},expression:"r_business.name"}}),e._v(" "),n("x-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required|numeric|mobile",expression:"'required|numeric|mobile'",modifiers:{initial:!0}}],attrs:{title:"手机号码",pattern:"[0-9]*",name:"phone",placeholder:"",type:"number","data-vv-as":"手机号码"},model:{value:e.r_business.phone,callback:function(t){e.$set(e.r_business,"phone",t)},expression:"r_business.phone"}}),e._v(" "),n("x-input",{attrs:{title:"推荐码",disabled:!!e.code,name:"code",placeholder:"",type:"text","data-vv-as":"推荐码"},model:{value:e.r_business.code,callback:function(t){e.$set(e.r_business,"code",t)},expression:"r_business.code"}})],1)]:e._e(),e._v(" "),2==e.type?[n("group",[n("x-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required",expression:"'required'",modifiers:{initial:!0}}],attrs:{title:"用户名",name:"agentname",placeholder:"",type:"text","data-vv-as":"用户名"},model:{value:e.r_agent.name,callback:function(t){e.$set(e.r_agent,"name",t)},expression:"r_agent.name"}}),e._v(" "),n("x-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required|numeric|mobile",expression:"'required|numeric|mobile'",modifiers:{initial:!0}}],attrs:{title:"手机号码",pattern:"[0-9]*",name:"mobile",placeholder:"",type:"number","data-vv-as":"手机号码"},model:{value:e.r_agent.phone,callback:function(t){e.$set(e.r_agent,"phone",t)},expression:"r_agent.phone"}})],1)]:e._e(),e._v(" "),n("div",{staticClass:"footer-btn"},[n("x-button",{attrs:{gradients:["#1D62F0","#67b8f5"],disabled:e.loading,"show-loading":e.loading},nativeOn:{click:function(t){e.SubmitRegister(t)}}},[e._v("立即注册")])],1)],2)},v=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"register-top"},[i("img",{staticClass:"logo",attrs:{src:n("7Otq")}}),e._v(" "),i("p",{staticClass:"slogan"},[e._v("牛霸，互动娱乐领导品牌")])])}],m={render:p,staticRenderFns:v},b=m,A=n("VU/8"),g=i,x=A(u,b,!1,g,"data-v-2457caee",null);t.default=x.exports}});
//# sourceMappingURL=31.3805b17c21d9f804bfaf.js.map