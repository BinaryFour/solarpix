(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){e.exports=a.p+"static/media/categoryListFile_install.d1a472a9.bin"},129:function(e,t,a){e.exports=a.p+"static/media/categoryListFile_pcsv.f1797b56.bin"},134:function(e,t,a){e.exports=a(297)},297:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),i=a.n(o),c=a(15),s=a(7),l=a(121),u=a(122),p=a(78),m=a.n(p),d=a(305),h=a(303),f=a(56),g=a(9),b=a(10),v=a(12),y=a(11),E=a(13),O=a(132),w=a(5),j=a.n(w),N=a(16),S=a(126),k=a.n(S).a.create({baseURL:"https://binaryfour.github.io"}),T=a(302),x=a(301),C=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(o)))).renderInput=function(e){var t=e.label,n=e.input,o=e.meta,i="field ".concat(o.error&&o.touched?"error":"");return r.a.createElement("div",{className:i},r.a.createElement("label",null,t),r.a.createElement("input",Object.assign({},n,{autoComplete:"off"})),a.renderError(o))},a.renderDropdown=function(e,t){var n=e.label,o=e.input,i=e.meta,c="field ".concat(i.error&&i.touched?"error":"");return r.a.createElement("div",{className:c},r.a.createElement("label",null,n),r.a.createElement("select",o,r.a.createElement("option",{value:"install"},"Install"),r.a.createElement("option",{value:"pcsv"},"PCSV")),a.renderError(i))},a.onSubmit=function(e){a.props.onSubmit(e)},a}return Object(E.a)(t,e),Object(b.a)(t,[{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},t))}},{key:"render",value:function(){return r.a.createElement("form",{className:"ui form error",onSubmit:this.props.handleSubmit(this.onSubmit)},r.a.createElement(T.a,{name:"userName",label:"User Initials",component:this.renderInput}),r.a.createElement(T.a,{name:"projectName",label:"Project Name (try to use one word, all use same)",component:this.renderInput}),r.a.createElement(T.a,{name:"profileName",label:"Profile",component:this.renderDropdown}),r.a.createElement("br",null),r.a.createElement("button",{className:"ui button primary"},"Submit"))}}]),t}(r.a.Component),I=Object(x.a)({form:"inputForm",validate:function(e){var t={};return(!e.userName||e.userName.length>3)&&(t.userName="You must enter a User Name (Max 3 characters)"),e.projectName||(t.projectName="You must enter a Project Name"),e.profileName||(t.profileName="You must select a Profile"),t}})(C),A=new(a(127).a)("empowerDb");A.version(1).stores({photoDb:"photoId, uploadStatus"});var D=A,L=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={toCategories:!1,toDelete:!1},a.onSubmit=function(e){a.props.createNewJob(e),a.setState({toCategories:!0})},a}return Object(E.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){try{localStorage.getItem("state").includes('"categories":{}')&&!D.isOpen()||this.setState({toDelete:!0})}catch(e){console.log(e)}}},{key:"render",value:function(){return!0===this.state.toCategories?r.a.createElement(O.a,{to:"/categories"}):!0===this.state.toDelete?r.a.createElement(O.a,{to:"/delete"}):r.a.createElement("div",null,r.a.createElement("h1",null,"SolarPix 2.0"),r.a.createElement(I,{onSubmit:this.onSubmit,initialValues:{profileName:"install"}}))}}]),t}(r.a.Component),_=Object(c.b)(null,{createNewJob:function(e,t,a){return function(n){n({type:"CREATE_JOB",payload:{userName:e,projectName:t,profile:a}})}}})(L),P=a(128),R=a.n(P),U=a(129),M=a.n(U),Q=a(299),F=function(e){function t(){return Object(g.a)(this,t),Object(v.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(b.a)(t,[{key:"renderList",value:function(e){return this.props.links.map(function(e){return r.a.createElement(Q.a,{to:e.path,className:"item",key:e.id},e.label)})}},{key:"render",value:function(){var e="ui bottom fixed ".concat(this.props.links.length," item huge menu");return r.a.createElement("div",{className:e},this.renderList())}}]),t}(r.a.Component),J=[{path:"/delete",id:"newJob",label:"New Job"}],W=function(e){function t(){return Object(g.a)(this,t),Object(v.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){try{if(localStorage.getItem("state").includes('"categories":{}'))switch(this.props.formValues.profileName){case"install":this.props.readTextFile(R.a);break;case"pcsv":this.props.readTextFile(M.a)}}catch(e){console.log(e)}}},{key:"renderList",value:function(){return this.props.categories.map(function(e){return r.a.createElement(Q.a,{to:"/categories/".concat(e.id),className:"item",key:e.id},r.a.createElement("i",{className:"large middle aligned icon camera"}),r.a.createElement("div",{className:"content"},e.title,r.a.createElement("div",{style:{float:"right",marginLeft:"10px"}},"Taken Pics",r.a.createElement("div",{style:{textAlign:"center"}},e.photoQty)),r.a.createElement("div",{className:"description"},e.description)))})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Category List"),r.a.createElement("div",{className:"ui celled list",style:{marginBottom:"48px"}},this.renderList()),r.a.createElement(F,{links:J}))}}]),t}(r.a.Component),G=Object(c.b)(function(e){return{categories:Object.values(e.categories),formValues:e.newJob.userName}},{readTextFile:function(e){return function(){var t=Object(N.a)(j.a.mark(function t(a){var n,r;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],r=0,t.next=4,k.get(e);case 4:t.sent.data.split(/\n/).forEach(function(e){if(e){var t=e.split("|"),a={id:r,title:t[0],description:t[1],photoQty:0};n.push(a),r+=1}}),a({type:"READ_TXT_FILE",payload:n});case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(W),Y={display:"none"},B=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).handleImage=function(e){a.props.onSubmit(e.target.files[0])},a}return Object(E.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui labeled big input"},r.a.createElement("input",{className:"inputfile",id:"file",onChange:this.handleImage,type:"file",accept:"image/*;capture=camera",style:Y}),r.a.createElement("label",{className:"ui button large primary",htmlFor:"file"},"Take Photo"))}}]),t}(r.a.Component),V=function(e){function t(){return Object(g.a)(this,t),Object(v.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return i.a.createPortal(r.a.createElement("div",{className:"ui dimmer modals visible active",style:{display:this.props.show}},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible active"},r.a.createElement("div",{className:"header"},this.props.title),r.a.createElement("div",{className:"content"},this.props.content),r.a.createElement("img",{className:"ui medium rounded centered image",alt:"",src:this.props.image,style:{marginBottom:"10px"}}),r.a.createElement("div",{className:"actions"},this.props.actions))),document.querySelector("#modal"))}}]),t}(r.a.Component),X=function(){var e=Object(N.a)(j.a.mark(function e(t){var a,n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"http://upload.empower-solar.com/index2.php",a={auth:{username:"upload",password:"nD2Qm9t4"},crossDomain:!0},(n=new FormData).append("upload",t),e.next=7,k.post("https://cors-anywhere.herokuapp.com/http://upload.empower-solar.com/index2.php",n,a);case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),H=[{path:"/categories",id:"categoryList",label:"Back"}],q=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r))))._isMounted=!1,a.testVar=!1,a.state={categoryId:a.props.match.params.id,image:{},showImage:"",imageTitle:"",imageId:"",imageQty:"",thumbnails:[],showModal:"none"},a.onClickThumbnail=function(){var e=Object(N.a)(j.a.mark(function e(t){var n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=URL.createObjectURL(t.photo),e.next=3,a.setState({showModal:"",image:t.photo,showImage:n,imageId:t.photoId});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.uploadFile=Object(N.a)(j.a.mark(function e(){var t,n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.imageId,n=a.state.image,e.next=4,a.setState({showModal:"none",image:{},showImage:"",imageId:""});case 4:a.toastSettings("Uploading File...","info"),X(n).then(function(e){a.toastSettings("Uploaded Image!","success"),a.updateStatusTrue(t),a._isMounted&&a.getThumbnails()}).catch(function(e){console.log(e),a.toastSettings("Image upload fail.  You can click on an thumbnail to re-attempt upload","error")});case 6:case"end":return e.stop()}},e)})),a.onAddPhoto=function(){var e=Object(N.a)(j.a.mark(function e(t){var n,r,o,i,c;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.type.startsWith("image")){e.next=13;break}return n=a.props.formValues,r=a.state.imageQty+1,o="".concat(n.projectName,"-").concat(n.profileName,"_").concat(a.props.category.title,"-").concat(r,"_").concat(n.userName),i="".concat(a.state.categoryId,"_").concat(t.lastModified),c=new File([t],o+".jpeg",{type:t.type}),e.next=8,a.setState({imageTitle:o,imageId:i});case 8:try{a.saveToDb(c),a.getThumbnails()}catch(s){a.toastSettings("Screenshot this and send to your dev ".concat(s),"error")}a.toastSettings("Uploading File...","info"),X(c).then(function(e){a.toastSettings("Uploaded Image!","success"),a.updateStatusTrue(i),a._isMounted&&a.getThumbnails()}).catch(function(e){console.log(e),a.toastSettings("Image upload fail.  You can click on an thumbnail to re-attempt upload","error")}),e.next=14;break;case 13:a.toastSettings("Only images can be accepted","warning");case 14:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.saveToDb=function(){var e=Object(N.a)(j.a.mark(function e(t){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.photoDb.add({photoId:"".concat(a.state.imageId),fileName:a.state.imageTitle,uploadStatus:!1,photo:t});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.updateStatusTrue=function(){var e=Object(N.a)(j.a.mark(function e(t){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.photoDb.update(t,{uploadStatus:!0});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.getThumbnails=Object(N.a)(j.a.mark(function e(){var t,n,r,o;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.categoryId,e.next=3,D.photoDb.where("photoId").startsWith(t).count();case 3:if(!((n=e.sent)>0)){e.next=12;break}return e.next=7,D.photoDb.where("photoId").startsWith(t);case 7:return r=e.sent,e.next=10,r.toArray();case 10:o=e.sent,a.setState({thumbnails:o});case 12:a.props.updatePhotoQty(t,n),a.setState({imageQty:n});case 14:case"end":return e.stop()}},e)})),a.toastSettings=function(e,t){a.props.toastManager.add(e,{appearance:t,autoDismiss:!0})},a}return Object(E.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.props.getCategory(this.state.categoryId),D.isOpen()||D.open(),this.getThumbnails()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"renderActions",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return e.uploadFile()},className:"ui button primary"},"Upload"),r.a.createElement("button",{onClick:function(){return e.setState({showModal:"none",image:{},showImage:"",imageId:""})},className:"ui button"},"Cancel"))}},{key:"renderList",value:function(){var e=this;return this.state.thumbnails.map(function(t){if(t){var a=URL.createObjectURL(t.photo);return r.a.createElement("div",{onClick:function(a){return e.onClickThumbnail(t)},className:"item",key:t.photoId},r.a.createElement("img",{className:"ui small rounded centered image",src:a,alt:"",style:{marginBottom:"5px"}}),r.a.createElement("div",{className:"description"},t.uploadStatus?"Uploaded!":"Not Uploaded"))}return r.a.createElement("div",null)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(V,{show:this.state.showModal,title:this.state.image.name,image:this.state.showImage,actions:this.renderActions(),onDismiss:function(){return e.setState({showModal:"none"})}}),r.a.createElement("h2",null,this.props.category.title),r.a.createElement("h3",null,this.props.category.description),r.a.createElement(B,{onSubmit:this.onAddPhoto}),r.a.createElement("h3",null,"Photos: ",this.state.imageQty),r.a.createElement("div",{className:"ui huge horizontal selection celled list",style:{marginBottom:"60px"}},this.renderList()),r.a.createElement(F,{links:H}))}}]),t}(r.a.Component),z=Object(f.withToastManager)(q),K=Object(c.b)(function(e,t){return{category:Object.values(e.categories)[t.match.params.id],formValues:e.newJob.userName}},{getCategory:function(e){return function(t,a){t({type:"GET_CATEGORY",payload:a().categories[e]})}},addPhoto:function(e,t,a){return{type:"ADD_PHOTO",payload:{id:e,photoQty:t,photoQueue:a}}},updatePhotoQty:function(e,t){return{type:"UPDATE_PHOTOQTY",payload:{id:e,photoQty:t}}}})(z),$=a(300),Z=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={cancel:!1,toPath:!1},a.resetData=Object(N.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.props.clearLocalStorage(),e.next=3,D.delete();case 3:a.setState({toPath:!0});case 4:case"end":return e.stop()}},e)})),a}return Object(E.a)(t,e),Object(b.a)(t,[{key:"renderActions",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return e.resetData()},className:"ui button negative"},"New Job"),r.a.createElement(Q.a,{to:"/categories",className:"ui button"},"Cancel"))}},{key:"render",value:function(){var e=this;return this.state.cancel?r.a.createElement($.a,{to:"/categories"}):this.state.toPath?r.a.createElement($.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement(V,{title:"Detected previous session.  Delete old photos?",content:"You have session data.  If you create a new job, you will lose all the photos you took from your previous session.  Delete photos and create a new job?",path:"/categories",actions:this.renderActions(),onDismiss:function(){return e.setState({toPath:!0})}}))}}]),t}(r.a.Component),ee=Object(c.b)(null,{clearLocalStorage:function(){return window.localStorage.clear(),{type:"CLEAR_LOCALSTORAGE",payload:{}}}})(Z),te=function(){return r.a.createElement(f.ToastProvider,null,r.a.createElement("p",null,"v0.2.0"),r.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(h.a,{path:"/",exact:!0,component:_}),r.a.createElement(h.a,{path:"/categories",exact:!0,component:G}),r.a.createElement(h.a,{path:"/categories/:id",exact:!0,component:K}),r.a.createElement(h.a,{path:"/delete",exact:!0,component:ee})))))},ae=a(304),ne=a(17),re={userName:null,projectName:null,profileName:null},oe=a(39),ie=a(130),ce=a.n(ie),se=Object(s.combineReducers)({form:ae.a,newJob:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_JOB":return Object(ne.a)({},e,{userName:t.payload.userName,projectName:t.payload.projectName,profileName:t.payload.profileName});default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"READ_TXT_FILE":return Object(ne.a)({},e,ce.a.mapKeys(t.payload,"id"));case"ENCODE_IMAGE":case"GET_CATEGORY":return Object(ne.a)({},e,Object(oe.a)({},t.payload.id,t.payload));case"GET_LOCALSTORAGE":return Object(ne.a)({},e,{categories:t.payload});case"UPDATE_PHOTOQTY":return Object(ne.a)({},e,Object(oe.a)({},t.payload.id,Object(ne.a)({},e[t.payload.id],{photoQty:t.payload.photoQty})));default:return e}},uploadQueue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TO_UPLOAD":return Object(ne.a)({},e,{uploadQueue:t.payload});default:return e}},clearStorage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1?arguments[1]:void 0).type){case"CLEAR_LOCALSTORAGE":return Object(ne.a)({},e,{categories:void 0,newJob:void 0});default:return e}}}),le=function(e,t){return"CLEAR_LOCALSTORAGE"===t.type&&(e=void 0),se(e,t)},ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function pe(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var me=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),de=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.compose,he=Object(s.createStore)(le,me,de(Object(s.applyMiddleware)(l.a),Object(u.offline)(m.a)));he.subscribe(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){}}({newJob:he.getState().newJob,categories:he.getState().categories})}),i.a.render(r.a.createElement(c.a,{store:he},r.a.createElement(te,null)),document.querySelector("#root")),function(e){if("serviceWorker"in navigator){if(new URL("/solarpix",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/solarpix","/service-worker.js");ue?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):pe(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):pe(t,e)})}}()}},[[134,1,2]]]);
//# sourceMappingURL=main.03a42f98.chunk.js.map