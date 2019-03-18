(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){e.exports=a.p+"static/media/categoryListFile.7893b230.bin"},109:function(e,t,a){e.exports=a(239)},239:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(99),o=a.n(i),c=a(10),l=a(6),u=a(101),s=a(243),m=a(245),d=a(102),p=(a.n(d)()({basename:"/solarpix"}),a(16)),f=a(17),b=a(21),E=a(18),h=a(22),y=a(68),g=a.n(y),v=a(103),N=a(104),j=a.n(N).a.create({baseURL:"https://binaryfour.github.io"}),O=a(242),C=a(241),w=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(i)))).renderInput=function(e){var t=e.label,n=e.input,i=e.meta,o="field ".concat(i.error&&i.touched?"error":"");return r.a.createElement("div",{className:o},r.a.createElement("label",null,t),r.a.createElement("input",Object.assign({},n,{autoComplete:"off"})),a.renderError(i))},a.renderDropdown=function(e,t){var n=e.label,i=e.input,o=e.meta,c="field ".concat(o.error&&o.touched?"error":"");return r.a.createElement("div",{className:c},r.a.createElement("label",null,n),r.a.createElement("select",i,r.a.createElement("option",{value:"solar"},"Solar"),r.a.createElement("option",{value:"site-audit"},"Site-Audit")),a.renderError(o))},a.onSubmit=function(e){a.props.onSubmit(e)},a}return Object(h.a)(t,e),Object(f.a)(t,[{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},t))}},{key:"render",value:function(){return r.a.createElement("form",{className:"ui form error",onSubmit:this.props.handleSubmit(this.onSubmit)},r.a.createElement(O.a,{name:"userName",label:"User Name",component:this.renderInput}),r.a.createElement(O.a,{name:"projectName",label:"Project Name",component:this.renderInput}),r.a.createElement(O.a,{name:"profileName",label:"Profile",component:this.renderDropdown}),r.a.createElement("br",null),r.a.createElement("button",{className:"ui button primary"},"Submit"))}}]),t}(r.a.Component),k=Object(C.a)({form:"inputForm",validate:function(e){var t={};return e.userName||(t.userName="You must enter a User Name"),e.projectName||(t.projectName="You must enter a Project Name"),e.profileName||(t.profileName="You must select a Profile"),t}})(w),x=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){a.props.createNewJob(e)},a}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SolarPix 2.0"),r.a.createElement(k,{onSubmit:this.onSubmit,initialValues:{profileName:"solar"}}))}}]),t}(r.a.Component),_=Object(c.b)(null,{createNewJob:function(e,t,a){return function(n){n({type:"CREATE_JOB",payload:{userName:e,projectName:t,profile:a}})}}})(x),S=a(105),T=a.n(S),A=a(240),D=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.readTextFile(T.a)}},{key:"renderList",value:function(){return this.props.categories.map(function(e){return r.a.createElement(A.a,{to:"/categories/".concat(e.id),className:"item",key:e.id},r.a.createElement("i",{className:"large middle aligned icon camera"}),r.a.createElement("div",{className:"content"},e.title,r.a.createElement("div",{className:"description"},e.description)))})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Category List"),r.a.createElement("div",{className:"ui celled list"},this.renderList()))}}]),t}(r.a.Component),L=Object(c.b)(function(e){return{categories:Object.values(e.categories)}},{readTextFile:function(e){return function(){var t=Object(v.a)(g.a.mark(function t(a){var n,r;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],r=0,t.next=4,j.get(e);case 4:t.sent.data.split(/\n/).forEach(function(e){if(e){var t=e.split("|"),a={id:r,title:t[0],description:t[1]};n.push(a),r+=1}}),a({type:"READ_TXT_FILE",payload:n});case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(D),P=function(){return r.a.createElement("div",{className:"ui labeled big input"},r.a.createElement("div",{className:"ui label"},"Add photo"),r.a.createElement("input",{type:"file",accept:"image/*;capture=camera",placeholder:"Add Photo"}))},R=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(e){console.log("user clicked existing image: ".concat(e))},a.onAddPhotoClick=function(e){console.log("user clicked Add Photo")},a}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.genDummyValues()}},{key:"renderList",value:function(){var e=this;return this.props.dummyValues.map(function(t){return r.a.createElement("div",{onClick:e.onClick(t.id),className:"item",key:t.id},r.a.createElement("i",{className:"large right aligned icon file image"}),r.a.createElement("div",{className:"content"},t.title,r.a.createElement("div",{className:"description"},t.description)))})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"CategoryTitle"),r.a.createElement("div",{className:"ui huge horizontal selection celled list"},this.renderList()),r.a.createElement(P,null))}}]),t}(r.a.Component),V=Object(c.b)(function(e,t){return{dummyValues:Object.values(e.dummyValues)}},{getCategory:function(e){return function(t,a){t({type:"GET_CATEGORY",payload:a().categories[e]})}},genDummyValues:function(){return{type:"GEN_DUMMY",payload:[{id:0,title:"Category 1",description:"a1"},{id:1,title:"Category 2",description:"a2"},{id:2,title:"Category 3",description:"a3"},{id:3,title:"Category 1",description:"a1"},{id:4,title:"Category 2",description:"a2"},{id:5,title:"Category 3",description:"a3"},{id:6,title:"Category 1",description:"a1"},{id:7,title:"Category 2",description:"a2"},{id:8,title:"Category 3",description:"a3"},{id:9,title:"Category 1",description:"a1"},{id:10,title:"Category 2",description:"a2"},{id:11,title:"Category 3",description:"a3"}]}}})(R),J=function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},r.a.createElement(s.a,null,r.a.createElement("div",null,"//",r.a.createElement(m.a,{path:"".concat("/solarpix","/"),exact:!0,component:_}),"//",r.a.createElement(m.a,{path:"".concat("/solarpix","/categories"),exact:!0,component:L}),"//",r.a.createElement(m.a,{path:"".concat("/solarpix","/categories/:id"),exact:!0,component:V}),r.a.createElement(m.a,{path:"/",exact:!0,component:_}),r.a.createElement(m.a,{path:"/categories",exact:!0,component:L}),r.a.createElement(m.a,{path:"/categories/:id",exact:!0,component:V}))))},M=a(244),Y=a(20),F=a(48),G=a.n(F),I={userName:null,projectName:null,profileName:null},U=a(47),X=Object(l.c)({dummyValues:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GEN_DUMMY":return console.log(),Object(Y.a)({},e,G.a.mapKeys(t.payload,"id"));default:return e}},form:M.a,newJob:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_JOB":return Object(Y.a)({},e,{userName:t.payload.userName,projectName:t.payload.projectName,profileName:t.payload.profileName});default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"READ_TXT_FILE":return console.log(),Object(Y.a)({},e,G.a.mapKeys(t.payload,"id"));default:return e}},category:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CATEGORY":return console.log(),Object(Y.a)({},e,Object(U.a)({},t.payload.id,t.payload));default:return e}}}),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,K=Object(l.e)(X,B(Object(l.a)(u.a)));o.a.render(r.a.createElement(c.a,{store:K},r.a.createElement(J,null)),document.querySelector("#root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.ffff006a.chunk.js.map