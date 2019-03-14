(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){e.exports=a.p+"static/media/categoryListFile.7893b230.bin"},106:function(e,t,a){e.exports=a(236)},236:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(96),o=a.n(c),i=a(13),l=a(5),u=a(98),s=a(239),m=a(242),p=a(99),d=a.n(p)()(),b=a(16),f=a(17),E=a(20),h=a(18),v=a(21),N=a(65),j=a.n(N),O=a(100),y=a(101),g=a.n(y).a.create({baseURL:"https://binaryfour.github.io/"}),w=a(240),S=a(238),_=function(e){function t(){var e,a;Object(b.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).renderInput=function(e){var t=e.label,r=e.input,c=e.meta,o="field ".concat(c.error&&c.touched?"error":"");return n.a.createElement("div",{className:o},n.a.createElement("label",null,t),n.a.createElement("input",Object.assign({},r,{autoComplete:"off"})),a.renderError(c))},a.renderDropdown=function(e,t){var r=e.label,c=e.input,o=e.meta,i="field ".concat(o.error&&o.touched?"error":"");return n.a.createElement("div",{className:i},n.a.createElement("label",null,r),n.a.createElement("select",c,n.a.createElement("option",{value:"solar"},"Solar"),n.a.createElement("option",{value:"site-audit"},"Site-Audit")),a.renderError(o))},a.onSubmit=function(e){a.props.onSubmit(e)},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return n.a.createElement("div",{className:"ui error message"},n.a.createElement("div",{className:"header"},t))}},{key:"render",value:function(){return n.a.createElement("form",{className:"ui form error",onSubmit:this.props.handleSubmit(this.onSubmit)},n.a.createElement(w.a,{name:"userName",label:"User Name",component:this.renderInput}),n.a.createElement(w.a,{name:"projectName",label:"Project Name",component:this.renderInput}),n.a.createElement(w.a,{name:"profileName",label:"Profile",component:this.renderDropdown}),n.a.createElement("br",null),n.a.createElement("button",{className:"ui button primary"},"Submit"))}}]),t}(n.a.Component),k=Object(S.a)({form:"inputForm",validate:function(e){var t={};return e.userName||(t.userName="You must enter a User Name"),e.projectName||(t.projectName="You must enter a Project Name"),e.profileName||(t.profileName="You must select a Profile"),t}})(_),x=function(e){function t(){var e,a;Object(b.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(E.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).onSubmit=function(e){a.props.createNewJob(e),d.push("/categories")},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"SolarPix 2.0"),n.a.createElement(k,{onSubmit:this.onSubmit,initialValues:{profileName:"solar"}}))}}]),t}(n.a.Component),T=Object(i.b)(null,{createNewJob:function(e,t,a){return{type:"CREATE_JOB",payload:{userName:e,projectName:t,profile:a}}}})(x),C=a(102),L=a.n(C),A=function(e){function t(){return Object(b.a)(this,t),Object(E.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.readTextFile(L.a)}},{key:"renderList",value:function(){return this.props.categories.map(function(e){return n.a.createElement("div",{className:"item",key:e.id},n.a.createElement("i",{className:"large middle aligned icon camera"}),n.a.createElement("div",{className:"content"},e.title,n.a.createElement("div",{className:"description"},e.description)))})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h2",null,"Category List"),n.a.createElement("div",{className:"ui celled list"},this.renderList()))}}]),t}(n.a.Component),D=Object(i.b)(function(e){return{categories:Object.values(e.categories)}},{readTextFile:function(e){return function(){var t=Object(O.a)(j.a.mark(function t(a){var r;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],t.next=3,g.get(e);case 3:t.sent.data.split(/\n/).forEach(function(e){if(e){var t=e.split("|"),a={id:t[0],title:t[0],description:t[1]};r.push(a)}}),a({type:"READ_TXT_FILE",payload:r});case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(A),J=function(e){function t(){return Object(b.a)(this,t),Object(E.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,"CategoryEdit")}}]),t}(n.a.Component),F=function(){return n.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},n.a.createElement(s.a,null,n.a.createElement("div",null,n.a.createElement(m.a,{path:"/",exact:!0,component:T}),n.a.createElement(m.a,{path:"#/categories",exact:!0,component:D}),n.a.createElement(m.a,{path:"#/categories/:id",exact:!0,component:J}))))},I=a(241),P=a(46),R={userName:null,projectName:null,profileName:null},U=a(104),X=a.n(U),Y=Object(l.c)({form:I.a,newJob:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_JOB":return Object(P.a)({},e,{userName:t.payload.userName,projectName:t.payload.projectName,profileName:t.payload.profileName});default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"READ_TXT_FILE":return console.log(),Object(P.a)({},e,X.a.mapKeys(t.payload,"id"));default:return e}}}),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,M=Object(l.e)(Y,B(Object(l.a)(u.a)));o.a.render(n.a.createElement(i.a,{store:M},n.a.createElement(F,null)),document.querySelector("#root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.28e976c4.chunk.js.map