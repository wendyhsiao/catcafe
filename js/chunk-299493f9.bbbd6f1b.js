(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-299493f9"],{"0d17":function(a,e,t){},"16b9":function(a,e,t){"use strict";var s=t("0d17"),r=t.n(s);r.a},"4d2d":function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("AdminNavbar"),t("div",{staticClass:"container py-5"},[a._m(0),t("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),a.handleSubmit(e)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"name"}},[a._v("姓名")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"name"}],staticClass:"form-control",attrs:{name:"name",type:"text",id:"name",placeholder:"請輸姓名",required:"",autofocus:""},domProps:{value:a.name},on:{input:function(e){e.target.composing||(a.name=e.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"email"}},[a._v("電子郵件")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.email,expression:"email"}],staticClass:"form-control",attrs:{name:"email",type:"email",id:"email",placeholder:"請輸入電子郵件",required:""},domProps:{value:a.email},on:{input:function(e){e.target.composing||(a.email=e.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"password"}},[a._v("密碼")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.password,expression:"password"}],staticClass:"form-control",attrs:{name:"password",type:"password",id:"password",placeholder:"請輸入密碼",required:""},domProps:{value:a.password},on:{input:function(e){e.target.composing||(a.password=e.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"password"}},[a._v("確認密碼")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.password2,expression:"password2"}],staticClass:"form-control",attrs:{name:"password2",type:"password",id:"password2",placeholder:"請輸入密碼",required:""},domProps:{value:a.password2},on:{input:function(e){e.target.composing||(a.password2=e.target.value)}}})]),t("button",{staticClass:"btn btn-primary w-100",attrs:{type:"submit"}},[a._v("立即註冊")]),t("div",{staticClass:"text-center mt-3"},[t("router-link",{attrs:{to:"/admin/catcafes/signin"}},[a._v("登入帳號")])],1)])])],1)},r=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"text-center"},[t("h1",[a._v("註冊會員")])])}],n=(t("b0c0"),t("96cf"),t("1da1")),i=t("de2e"),o=t("7696"),c=t("2fa3"),l={data:function(){return{name:"",email:"",password:"",password2:""}},components:{AdminNavbar:i["a"]},methods:{handleSubmit:function(){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var t,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,a.name&&a.email&&a.password&&a.password2){e.next=4;break}return c["a"].fire({icon:"warning",title:"所有都為必填項目！"}),e.abrupt("return");case 4:if(a.password===a.password2){e.next=7;break}return c["a"].fire({icon:"warning",title:"兩次密碼輸入不同！"}),e.abrupt("return");case 7:return e.next=9,o["a"].signUp({name:a.name,email:a.email,password:a.password,password2:a.password2});case 9:if(t=e.sent,s=t.data,"success"===s.status){e.next=13;break}throw new Error(s.message);case 13:c["a"].fire({icon:"success",title:s.message}),a.$router.push("/admin/catcafes/signin"),e.next=21;break;case 17:e.prev=17,e.t0=e["catch"](0),c["a"].fire({icon:"warning",title:"無法註冊 - ".concat(e.t0.message)}),console.log("error",e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})))()}}},u=l,d=t("2877"),m=Object(d["a"])(u,s,r,!1,null,null,null);e["default"]=m.exports},7696:function(a,e,t){"use strict";t("b0c0");var s=t("2fa3");e["a"]={signIn:function(a){var e=a.email,t=a.password;return s["b"].post("/admin/signin",{email:e,password:t})},signUp:function(a){var e=a.name,t=a.email,r=a.password,n=a.password2;return s["b"].post("/admin/signup",{name:e,email:t,password:r,password2:n})}}},de2e:function(a,e,t){"use strict";var s=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("nav",{staticClass:"navbar navbar-light bg-white"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"admin-cat-cafes"}}},[s("img",{staticClass:"logo",attrs:{src:t("6b4d")}})]),a.isAuthenticated?s("div",[s("div",{staticClass:"mx-3 d-inline-block"},[a._v(" "+a._s(a.currentUser.name)+" ")]),s("div",{staticClass:"btn btn-yellow d-inline-block",on:{click:a.logout}},[a._v("登出 ")])]):a._e()],1)},r=[],n=t("5530"),i=t("2f62"),o={computed:Object(n["a"])({},Object(i["b"])(["currentUser","isAuthenticated"])),methods:{logout:function(){this.$store.commit("revokeAuthentication"),this.$router.push("/admin/catcafes/signin")}}},c=o,l=(t("16b9"),t("2877")),u=Object(l["a"])(c,s,r,!1,null,"5b7143eb",null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-299493f9.bbbd6f1b.js.map