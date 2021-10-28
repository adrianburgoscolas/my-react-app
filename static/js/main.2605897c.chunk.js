(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},23:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(4),u=n.n(i),r=(n(15),n(16),n(5)),l=n(2),o={sendInput:function(t){return{type:"INPUT",payload:t}},sendResult:function(t){return{type:"RESULT",payload:t}}},s=(n(23),n(1)),a=function(){var t=Object(l.b)(),e=Object(l.c)((function(t){return t.result})),n=Object(c.useState)(""),i=Object(r.a)(n,2),u=i[0],a=i[1],d=Object(c.useState)("0"),b=Object(r.a)(d,2),j=b[0],f=b[1],O=Object(c.useState)(""),v=Object(r.a)(O,2),h=v[0],p=v[1];Object(c.useEffect)((function(){/=|[+/*-]$/.test(u)||t(o.sendInput(u))}),[h,e,t,u,j]),"equal"===h&&(f(e),a(e+""),p("newcalc"));var x=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0";if("clear"===n)return a(""),f("0"),t(o.sendInput("0")),void t(o.sendResult("0"));"0"===j&&"0"===u&&/[-\d]/.test(n)?(a(n),f(n)):"newcalc"===h&&/\d/.test(n)?(a(n),f(n),p("")):"newcalc"===h&&/[+/*-]/.test(n)?(a(e+n),f(n),p("")):"newcalc"===h&&/\./.test(n)?(a(e+".0"),f(e+".0"),p("")):/\./.test(j)&&/\./.test(n)?f(j):/[+/*]-/.test(u)&&/[+/*]/.test(n)?(a(u.slice(-u.length,-2)+n),f(n)):/[+/*]/.test(j)&&/[+/*]/.test(n)?(a(u.slice(-u.length,-1)+n),f(n)):/[+/*]/.test(j)&&/-/.test(n)?(a(u+n),f(n)):/(\.0)$/.test(j)&&/\d/.test(n)?(a(u.slice(-u.length,-1)+n),f(j.slice(-j.length,-1)+n)):/\d/.test(j)&&/\./.test(n)?(a(u+".0"),f(j+".0")):/\d$/.test(j)&&/[+/*-]/.test(n)?(a(u+n),f(n)):/^0$/.test(j)&&/\d/.test(n)?(a(u.slice(-u.length,-1)+n),f(n)):/[+/*-]/.test(j)&&/\d/.test(n)?(a(u+n),f(n)):/\d?/.test(j)&&/\d/.test(n)?(a(u+n),f(j+n)):/[+/*-]/.test(j)&&/\./.test(n)&&(f("0.0"),a(u+"0.0"))};return Object(s.jsxs)("div",{id:"box",children:[Object(s.jsx)("div",{id:"input",children:u}),Object(s.jsx)("div",{id:"display",children:j}),Object(s.jsxs)("div",{id:"keyboard",children:[Object(s.jsx)("button",{id:"equals",onClick:function(){return p("equal")},value:"=",children:"="}),Object(s.jsx)("button",{id:"one",onClick:function(){return x("1")},value:"1",children:"1"}),Object(s.jsx)("button",{id:"two",onClick:function(){return x("2")},value:"2",children:"2"}),Object(s.jsx)("button",{id:"three",onClick:function(){return x("3")},value:"3",children:"3"}),Object(s.jsx)("button",{id:"four",onClick:function(){return x("4")},value:"4",children:"4"}),Object(s.jsx)("button",{id:"five",onClick:function(){return x("5")},value:"5",children:"5"}),Object(s.jsx)("button",{id:"six",onClick:function(){return x("6")},value:"6",children:"6"}),Object(s.jsx)("button",{id:"seven",onClick:function(){return x("7")},value:"7",children:"7"}),Object(s.jsx)("button",{id:"eight",onClick:function(){return x("8")},value:"8",children:"8"}),Object(s.jsx)("button",{id:"nine",onClick:function(){return x("9")},value:"9",children:"9"}),Object(s.jsx)("button",{id:"zero",onClick:function(){return x("0")},value:"0",children:"0"}),Object(s.jsx)("button",{id:"add",onClick:function(){return x("+")},value:"+",children:"+"}),Object(s.jsx)("button",{id:"subtract",onClick:function(){return x("-")},value:"\u2011",children:"-"}),Object(s.jsx)("button",{id:"multiply",onClick:function(){return x("*")},value:"x",children:"*"}),Object(s.jsx)("button",{id:"divide",onClick:function(){return x("/")},value:"/",children:"/"}),Object(s.jsx)("button",{id:"decimal",onClick:function(){return x(".")},value:".",children:"."}),Object(s.jsx)("button",{id:"clear",onClick:function(){return x("clear")},value:"AC",children:"AC"})]})]})},d=n(9),b=function(t){var e=Object(l.c)((function(t){return t.input})),n=Object(l.b)();return Object(c.useEffect)((function(){var t=Object(d.a)(e);n(o.sendResult(t))}),[e,n]),Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(a,{})})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,u=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),u(t),r(t)}))},f=n(10),O=n(3),v={input:"",result:"0"},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INPUT":return Object(O.a)(Object(O.a)({},t),{},{input:e.payload});case"RESULT":return Object(O.a)(Object(O.a)({},t),{},{result:e.payload});default:return t}},p=Object(f.a)(h);u.a.render(Object(s.jsx)(l.a,{store:p,children:Object(s.jsx)(b,{})}),document.getElementById("root")),j()},9:function(module,__webpack_exports__,__webpack_require__){"use strict";var calculator=function calculator(inputData){var op=inputData.split(/(\d\.?\d?)/),a=eval(op.join(""));return a};__webpack_exports__.a=calculator}},[[25,1,2]]]);
//# sourceMappingURL=main.2605897c.chunk.js.map