webpackJsonp([30],{"1RPE":function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"\n.register-top[data-v-10220a62] {\n  padding-top: 20px;\n  padding-bottom: 30px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.register-top .logo[data-v-10220a62] {\n  width: 60px;\n  height: 60px;\n}\n.register-top .slogan[data-v-10220a62] {\n  margin-top: 10px;\n  font-size: 16px;\n}\n.footer-btn[data-v-10220a62] {\n  margin: 30px 10px 0;\n  /* position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%; */\n}\n","",{version:3,sources:["G:/projects/nbbp2.0.git/src/pages/Register.vue"],names:[],mappings:";AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;UACvB,uBAAuB;EAC/B,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;CAC7B;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,iBAAiB;EACjB,gBAAgB;CACjB;AACD;EACE,oBAAoB;EACpB;;;iBAGe;CAChB",file:"Register.vue",sourcesContent:["\n.register-top[data-v-10220a62] {\n  padding-top: 20px;\n  padding-bottom: 30px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.register-top .logo[data-v-10220a62] {\n  width: 60px;\n  height: 60px;\n}\n.register-top .slogan[data-v-10220a62] {\n  margin-top: 10px;\n  font-size: 16px;\n}\n.footer-btn[data-v-10220a62] {\n  margin: 30px 10px 0;\n  /* position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%; */\n}\n"],sourceRoot:""}])},S2NW:function(e,t,n){"use strict";function i(e){n("a/P+")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),o=n.n(a),r=n("rHil"),s=n("pDNl"),l=n("2sLL"),u=n("gyMJ"),c=n("NYxO"),d={name:"Register",data:function(){return{type:0,r_business:{name:"",phone:"",code:""},r_agent:{name:"",phone:""},loading:!1,code:""}},beforeRouteEnter:function(e,t,n){1===Number(e.query.type)?document.title="牛霸商户入驻":2===Number(e.query.type)&&(document.title="牛霸代理入驻"),n(function(t){t.type=e.query.type?e.query.type:0;var n=e.query.code.toString();n&&""!==n&&(n=n.replace(/\,/g,"").replace(/\s/g,""),t.code=n,t.r_business.code=n)})},created:function(){},methods:o()({},Object(c.b)("user",["getUserInfo"]),{SubmitRegister:function(){var e=this;this.$validator.validateAll().then(function(t){var n=e.vErrors.all();n.length>0?e.$vux.toast.show({text:n[0],width:"10em"}):(e.loading=!0,1===Number(e.type)?Object(u.U)(e.r_business).then(function(t){e.getUserInfo().then(function(t){e.$vux.toast.show({text:"注册成功"}),setTimeout(function(){e.$vux.toast.hide(),e.$router.push("/MyBars")},800)})}).catch(function(){e.loading=!1}):Object(u.d)(e.r_agent).then(function(t){e.getUserInfo().then(function(t){e.$vux.toast.show({text:"注册成功"}),setTimeout(function(){e.$vux.toast.hide(),e.$router.push("/AgentCenter")},800)})}).catch(function(){e.loading=!1}))})}}),components:{Group:r.a,XInput:s.a,XButton:l.a}},p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container min-h"},[e._m(0),e._v(" "),1==e.type?[n("group",[n("x-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required",expression:"'required'",modifiers:{initial:!0}}],attrs:{title:"酒吧名称",name:"name",placeholder:"",type:"text","data-vv-as":"酒吧名称"},model:{value:e.r_business.name,callback:function(t){e.$set(e.r_business,"name",t)},expression:"r_business.name"}}),e._v(" "),n("x-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required|numeric|mobile",expression:"'required|numeric|mobile'",modifiers:{initial:!0}}],attrs:{title:"手机号码",pattern:"[0-9]*",name:"phone",placeholder:"",type:"number","data-vv-as":"手机号码"},model:{value:e.r_business.phone,callback:function(t){e.$set(e.r_business,"phone",t)},expression:"r_business.phone"}}),e._v(" "),n("x-input",{attrs:{title:"推荐码",disabled:!!e.code,name:"code",placeholder:"",type:"text","data-vv-as":"推荐码"},model:{value:e.r_business.code,callback:function(t){e.$set(e.r_business,"code",t)},expression:"r_business.code"}})],1)]:e._e(),e._v(" "),2==e.type?[n("group",[n("x-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required",expression:"'required'",modifiers:{initial:!0}}],attrs:{title:"用户名",name:"agentname",placeholder:"",type:"text","data-vv-as":"用户名"},model:{value:e.r_agent.name,callback:function(t){e.$set(e.r_agent,"name",t)},expression:"r_agent.name"}}),e._v(" "),n("x-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required|numeric|mobile",expression:"'required|numeric|mobile'",modifiers:{initial:!0}}],attrs:{title:"手机号码",pattern:"[0-9]*",name:"mobile",placeholder:"",type:"number","data-vv-as":"手机号码"},model:{value:e.r_agent.phone,callback:function(t){e.$set(e.r_agent,"phone",t)},expression:"r_agent.phone"}})],1)]:e._e(),e._v(" "),n("div",{staticClass:"footer-btn"},[n("x-button",{attrs:{gradients:["#1D62F0","#67b8f5"],disabled:e.loading,"show-loading":e.loading},nativeOn:{click:function(t){e.SubmitRegister(t)}}},[e._v("立即注册")])],1)],2)},m=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"register-top"},[i("img",{staticClass:"logo",attrs:{src:n("7Otq")}}),e._v(" "),i("p",{staticClass:"slogan"},[e._v("牛霸，互动娱乐领导品牌")])])}],v={render:p,staticRenderFns:m},b=v,g=n("VU/8"),A=i,x=g(d,b,!1,A,"data-v-10220a62",null);t.default=x.exports},"a/P+":function(e,t,n){var i=n("1RPE");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("76f32500",i,!0)}});
//# sourceMappingURL=30.f2d23f576b0ba52574a6.js.map