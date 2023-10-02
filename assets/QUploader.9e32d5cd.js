import{cq as me,c as ne,cr as ge,a as h,b as s,cs as _e,g as G,r as z,ac as ie,U as se,a1 as he,a6 as be,p as Fe,cC as ye,w as Se,o as qe,au as ke,ah as xe,cz as ze,P as le,X as we,Q as re,cy as Ue}from"./index.1339cfb4.js";import{b as Ce,h as ue}from"./format.1fdd34d3.js";import{u as Be,a as Pe}from"./use-dark.8b5bedcd.js";const Re={...me,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:t=>t>=0&&t<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},Y=50,de=2*Y,ce=de*Math.PI,Ee=Math.round(ce*1e3)/1e3;var je=ne({name:"QCircularProgress",props:{...Re,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(t,{slots:f}){const{proxy:{$q:u}}=G(),r=ge(t),o=h(()=>{const F=(u.lang.rtl===!0?-1:1)*t.angle;return{transform:t.reverse!==(u.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-F}deg)`:`rotate3d(0, 0, 1, ${F-90}deg)`}}),p=h(()=>t.instantFeedback!==!0&&t.indeterminate!==!0?{transition:`stroke-dashoffset ${t.animationSpeed}ms ease 0s, stroke ${t.animationSpeed}ms ease`}:""),b=h(()=>de/(1-t.thickness/2)),w=h(()=>`${b.value/2} ${b.value/2} ${b.value} ${b.value}`),B=h(()=>Ce(t.value,t.min,t.max)),P=h(()=>ce*(1-(B.value-t.min)/(t.max-t.min))),U=h(()=>t.thickness/2*b.value);function R({thickness:F,offset:k,color:e,cls:m,rounded:x}){return s("circle",{class:"q-circular-progress__"+m+(e!==void 0?` text-${e}`:""),style:p.value,fill:"transparent",stroke:"currentColor","stroke-width":F,"stroke-dasharray":Ee,"stroke-dashoffset":k,"stroke-linecap":x,cx:b.value,cy:b.value,r:Y})}return()=>{const F=[];t.centerColor!==void 0&&t.centerColor!=="transparent"&&F.push(s("circle",{class:`q-circular-progress__center text-${t.centerColor}`,fill:"currentColor",r:Y-U.value/2,cx:b.value,cy:b.value})),t.trackColor!==void 0&&t.trackColor!=="transparent"&&F.push(R({cls:"track",thickness:U.value,offset:0,color:t.trackColor})),F.push(R({cls:"circle",thickness:U.value,offset:P.value,color:t.color,rounded:t.rounded===!0?"round":void 0}));const k=[s("svg",{class:"q-circular-progress__svg",style:o.value,viewBox:w.value,"aria-hidden":"true"},F)];return t.showValue===!0&&k.push(s("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:t.fontSize}},f.default!==void 0?f.default():[s("div",B.value)])),s("div",{class:`q-circular-progress q-circular-progress--${t.indeterminate===!0?"in":""}determinate`,style:r.value,role:"progressbar","aria-valuemin":t.min,"aria-valuemax":t.max,"aria-valuenow":t.indeterminate===!0?void 0:B.value},_e(f.internal,k))}}});function Q(t,f,u,r){const o=[];return t.forEach(p=>{r(p)===!0?o.push(p):f.push({failedPropValidation:u,file:p})}),o}function X(t){t&&t.dataTransfer&&(t.dataTransfer.dropEffect="copy"),se(t)}const Le={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Ne=["rejected"];function Oe({editable:t,dnd:f,getFileInput:u,addFilesToQueue:r}){const{props:o,emit:p,proxy:b}=G(),w=z(null),B=h(()=>o.accept!==void 0?o.accept.split(",").map(l=>(l=l.trim(),l==="*"?"*/":(l.endsWith("/*")&&(l=l.slice(0,l.length-1)),l.toUpperCase()))):null),P=h(()=>parseInt(o.maxFiles,10)),U=h(()=>parseInt(o.maxTotalSize,10));function R(l){if(t.value)if(l!==Object(l)&&(l={target:null}),l.target!==null&&l.target.matches('input[type="file"]')===!0)l.clientX===0&&l.clientY===0&&ie(l);else{const S=u();S&&S!==l.target&&S.click(l)}}function F(l){t.value&&l&&r(null,l)}function k(l,S,O,$){let i=Array.from(S||l.target.files);const g=[],C=()=>{g.length!==0&&p("rejected",g)};if(o.accept!==void 0&&B.value.indexOf("*/")===-1&&(i=Q(i,g,"accept",d=>B.value.some(_=>d.type.toUpperCase().startsWith(_)||d.name.toUpperCase().endsWith(_))),i.length===0))return C();if(o.maxFileSize!==void 0){const d=parseInt(o.maxFileSize,10);if(i=Q(i,g,"max-file-size",_=>_.size<=d),i.length===0)return C()}if(o.multiple!==!0&&i.length!==0&&(i=[i[0]]),i.forEach(d=>{d.__key=d.webkitRelativePath+d.lastModified+d.name+d.size}),$===!0){const d=O.map(_=>_.__key);i=Q(i,g,"duplicate",_=>d.includes(_.__key)===!1)}if(i.length===0)return C();if(o.maxTotalSize!==void 0){let d=$===!0?O.reduce((_,j)=>_+j.size,0):0;if(i=Q(i,g,"max-total-size",_=>(d+=_.size,d<=U.value)),i.length===0)return C()}if(typeof o.filter=="function"){const d=o.filter(i);i=Q(i,g,"filter",_=>d.includes(_))}if(o.maxFiles!==void 0){let d=$===!0?O.length:0;if(i=Q(i,g,"max-files",()=>(d++,d<=P.value)),i.length===0)return C()}if(C(),i.length!==0)return i}function e(l){X(l),f.value!==!0&&(f.value=!0)}function m(l){se(l),(l.relatedTarget!==null||he.is.safari!==!0?l.relatedTarget!==w.value:document.elementsFromPoint(l.clientX,l.clientY).includes(w.value)===!1)===!0&&(f.value=!1)}function x(l){X(l);const S=l.dataTransfer.files;S.length!==0&&r(null,S),f.value=!1}function v(l){if(f.value===!0)return s("div",{ref:w,class:`q-${l}__dnd absolute-full`,onDragenter:X,onDragover:X,onDragleave:m,onDrop:x})}return Object.assign(b,{pickFiles:R,addFiles:F}),{pickFiles:R,addFiles:F,onDragover:e,onDragleave:m,processFiles:k,getDndNode:v,maxFilesNumber:P,maxTotalSizeNumber:U}}function oe(t){return(t*100).toFixed(2)+"%"}const $e={...Be,...Le,label:String,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,noThumbnails:Boolean,autoUpload:Boolean,hideUploadBtn:Boolean,disable:Boolean,readonly:Boolean},ve=[...Ne,"start","finish","added","removed"];function De(t,f){const u=G(),{props:r,slots:o,emit:p,proxy:b}=u,{$q:w}=b,B=Pe(r,w);function P(a,c,y){if(a.__status=c,c==="idle"){a.__uploaded=0,a.__progress=0,a.__sizeLabel=ue(a.size),a.__progressLabel="0.00%";return}if(c==="failed"){b.$forceUpdate();return}a.__uploaded=c==="uploaded"?a.size:y,a.__progress=c==="uploaded"?1:Math.min(.9999,a.__uploaded/a.size),a.__progressLabel=oe(a.__progress),b.$forceUpdate()}const U=h(()=>r.disable!==!0&&r.readonly!==!0),R=z(!1),F=z(null),k=z(null),e={files:z([]),queuedFiles:z([]),uploadedFiles:z([]),uploadedSize:z(0),updateFileStatus:P,isAlive:()=>be(u)===!1},{pickFiles:m,addFiles:x,onDragover:v,onDragleave:l,processFiles:S,getDndNode:O,maxFilesNumber:$,maxTotalSizeNumber:i}=Oe({editable:U,dnd:R,getFileInput:V,addFilesToQueue:Z});Object.assign(e,t({props:r,slots:o,emit:p,helpers:e,exposeApi:a=>{Object.assign(e,a)}})),e.isBusy===void 0&&(e.isBusy=z(!1));const g=z(0),C=h(()=>g.value===0?0:e.uploadedSize.value/g.value),d=h(()=>oe(C.value)),_=h(()=>ue(g.value)),j=h(()=>U.value===!0&&e.isUploading.value!==!0&&(r.multiple===!0||e.queuedFiles.value.length===0)&&(r.maxFiles===void 0||e.files.value.length<$.value)&&(r.maxTotalSize===void 0||g.value<i.value)),n=h(()=>U.value===!0&&e.isBusy.value!==!0&&e.isUploading.value!==!0&&e.queuedFiles.value.length!==0);Fe(ye,te);const D=h(()=>"q-uploader column no-wrap"+(B.value===!0?" q-uploader--dark q-dark":"")+(r.bordered===!0?" q-uploader--bordered":"")+(r.square===!0?" q-uploader--square no-border-radius":"")+(r.flat===!0?" q-uploader--flat no-shadow":"")+(r.disable===!0?" disabled q-uploader--disable":"")+(R.value===!0?" q-uploader--dnd":"")),T=h(()=>"q-uploader__header"+(r.color!==void 0?` bg-${r.color}`:"")+(r.textColor!==void 0?` text-${r.textColor}`:""));Se(e.isUploading,(a,c)=>{c===!1&&a===!0?p("start"):c===!0&&a===!1&&p("finish")});function A(){r.disable===!1&&(e.abort(),e.uploadedSize.value=0,g.value=0,J(),e.files.value=[],e.queuedFiles.value=[],e.uploadedFiles.value=[])}function E(){r.disable===!1&&K(["uploaded"],()=>{e.uploadedFiles.value=[]})}function W(){K(["idle","failed"],({size:a})=>{g.value-=a,e.queuedFiles.value=[]})}function K(a,c){if(r.disable===!0)return;const y={files:[],size:0},L=e.files.value.filter(q=>a.indexOf(q.__status)===-1?!0:(y.size+=q.size,y.files.push(q),q.__img!==void 0&&window.URL.revokeObjectURL(q.__img.src),!1));y.files.length!==0&&(e.files.value=L,c(y),p("removed",y.files))}function H(a){r.disable||(a.__status==="uploaded"?e.uploadedFiles.value=e.uploadedFiles.value.filter(c=>c.__key!==a.__key):a.__status==="uploading"?a.__abort():g.value-=a.size,e.files.value=e.files.value.filter(c=>c.__key!==a.__key?!0:(c.__img!==void 0&&window.URL.revokeObjectURL(c.__img.src),!1)),e.queuedFiles.value=e.queuedFiles.value.filter(c=>c.__key!==a.__key),p("removed",[a]))}function J(){e.files.value.forEach(a=>{a.__img!==void 0&&window.URL.revokeObjectURL(a.__img.src)})}function V(){return k.value||F.value.getElementsByClassName("q-uploader__input")[0]}function Z(a,c){const y=S(a,c,e.files.value,!0),L=V();L!=null&&(L.value=""),y!==void 0&&(y.forEach(q=>{if(e.updateFileStatus(q,"idle"),g.value+=q.size,r.noThumbnails!==!0&&q.type.toUpperCase().startsWith("IMAGE")){const ae=new Image;ae.src=window.URL.createObjectURL(q),q.__img=ae}}),e.files.value=e.files.value.concat(y),e.queuedFiles.value=e.queuedFiles.value.concat(y),p("added",y),r.autoUpload===!0&&e.upload())}function ee(){n.value===!0&&e.upload()}function M(a,c,y){if(a===!0){const L={type:"a",key:c,icon:w.iconSet.uploader[c],flat:!0,dense:!0};let q;return c==="add"?(L.onClick=m,q=te):L.onClick=y,s(re,L,q)}}function te(){return s("input",{ref:k,class:"q-uploader__input overflow-hidden absolute-full",tabindex:-1,type:"file",title:"",accept:r.accept,multiple:r.multiple===!0?"multiple":void 0,capture:r.capture,onMousedown:ie,onClick:m,onChange:Z})}function fe(){return o.header!==void 0?o.header(I):[s("div",{class:"q-uploader__header-content column"},[s("div",{class:"flex flex-center no-wrap q-gutter-xs"},[M(e.queuedFiles.value.length!==0,"removeQueue",W),M(e.uploadedFiles.value.length!==0,"removeUploaded",E),e.isUploading.value===!0?s(le,{class:"q-uploader__spinner"}):null,s("div",{class:"col column justify-center"},[r.label!==void 0?s("div",{class:"q-uploader__title"},[r.label]):null,s("div",{class:"q-uploader__subtitle"},[_.value+" / "+d.value])]),M(j.value,"add"),M(r.hideUploadBtn===!1&&n.value===!0,"upload",e.upload),M(e.isUploading.value,"clear",e.abort)])])]}function pe(){return o.list!==void 0?o.list(I):e.files.value.map(a=>s("div",{key:a.__key,class:"q-uploader__file relative-position"+(r.noThumbnails!==!0&&a.__img!==void 0?" q-uploader__file--img":"")+(a.__status==="failed"?" q-uploader__file--failed":a.__status==="uploaded"?" q-uploader__file--uploaded":""),style:r.noThumbnails!==!0&&a.__img!==void 0?{backgroundImage:'url("'+a.__img.src+'")'}:null},[s("div",{class:"q-uploader__file-header row flex-center no-wrap"},[a.__status==="failed"?s(we,{class:"q-uploader__file-status",name:w.iconSet.type.negative,color:"negative"}):null,s("div",{class:"q-uploader__file-header-content col"},[s("div",{class:"q-uploader__title"},[a.name]),s("div",{class:"q-uploader__subtitle row items-center no-wrap"},[a.__sizeLabel+" / "+a.__progressLabel])]),a.__status==="uploading"?s(je,{value:a.__progress,min:0,max:1,indeterminate:a.__progress===0}):s(re,{round:!0,dense:!0,flat:!0,icon:w.iconSet.uploader[a.__status==="uploaded"?"done":"clear"],onClick:()=>{H(a)}})])]))}qe(()=>{e.isUploading.value===!0&&e.abort(),e.files.value.length!==0&&J()});const I={};for(const a in e)ke(e[a])===!0?xe(I,a,()=>e[a].value):I[a]=e[a];return Object.assign(I,{upload:ee,reset:A,removeUploadedFiles:E,removeQueuedFiles:W,removeFile:H,pickFiles:m,addFiles:x}),ze(I,{canAddFiles:()=>j.value,canUpload:()=>n.value,uploadSizeLabel:()=>_.value,uploadProgressLabel:()=>d.value}),f({...e,upload:ee,reset:A,removeUploadedFiles:E,removeQueuedFiles:W,removeFile:H,pickFiles:m,addFiles:x,canAddFiles:j,canUpload:n,uploadSizeLabel:_,uploadProgressLabel:d}),()=>{const a=[s("div",{class:T.value},fe()),s("div",{class:"q-uploader__list scroll"},pe()),O("uploader")];e.isBusy.value===!0&&a.push(s("div",{class:"q-uploader__overlay absolute-full flex flex-center"},[s(le)]));const c={ref:F,class:D.value};return j.value===!0&&Object.assign(c,{onDragover:v,onDragleave:l}),s("div",c,a)}}const Te=()=>!0;function Ae(t){const f={};return t.forEach(u=>{f[u]=Te}),f}const Ie=Ae(ve);var Qe=({name:t,props:f,emits:u,injectPlugin:r})=>ne({name:t,props:{...$e,...f},emits:Ue(u)===!0?{...Ie,...u}:[...ve,...u],setup(o,{expose:p}){return De(r,p)}});function N(t){return typeof t=="function"?t:()=>t}const Me={url:[Function,String],method:{type:[Function,String],default:"POST"},fieldName:{type:[Function,String],default:()=>t=>t.name},headers:[Function,Array],formFields:[Function,Array],withCredentials:[Function,Boolean],sendRaw:[Function,Boolean],batch:[Function,Boolean],factory:Function},We=["factoryFailed","uploaded","failed","uploading"];function Xe({props:t,emit:f,helpers:u}){const r=z([]),o=z([]),p=z(0),b=h(()=>({url:N(t.url),method:N(t.method),headers:N(t.headers),formFields:N(t.formFields),fieldName:N(t.fieldName),withCredentials:N(t.withCredentials),sendRaw:N(t.sendRaw),batch:N(t.batch)})),w=h(()=>p.value>0),B=h(()=>o.value.length!==0);let P;function U(){r.value.forEach(e=>{e.abort()}),o.value.length!==0&&(P=!0)}function R(){const e=u.queuedFiles.value.slice(0);u.queuedFiles.value=[],b.value.batch(e)?F(e):e.forEach(m=>{F([m])})}function F(e){if(p.value++,typeof t.factory!="function"){k(e,{});return}const m=t.factory(e);if(!m)f("factoryFailed",new Error("QUploader: factory() does not return properly"),e),p.value--;else if(typeof m.catch=="function"&&typeof m.then=="function"){o.value.push(m);const x=v=>{u.isAlive()===!0&&(o.value=o.value.filter(l=>l!==m),o.value.length===0&&(P=!1),u.queuedFiles.value=u.queuedFiles.value.concat(e),e.forEach(l=>{u.updateFileStatus(l,"failed")}),f("factoryFailed",v,e),p.value--)};m.then(v=>{P===!0?x(new Error("Aborted")):u.isAlive()===!0&&(o.value=o.value.filter(l=>l!==m),k(e,v))}).catch(x)}else k(e,m||{})}function k(e,m){const x=new FormData,v=new XMLHttpRequest,l=(n,D)=>m[n]!==void 0?N(m[n])(D):b.value[n](D),S=l("url",e);if(!S){console.error("q-uploader: invalid or no URL specified"),p.value--;return}const O=l("formFields",e);O!==void 0&&O.forEach(n=>{x.append(n.name,n.value)});let $=0,i=0,g=0,C=0,d;v.upload.addEventListener("progress",n=>{if(d===!0)return;const D=Math.min(C,n.loaded);u.uploadedSize.value+=D-g,g=D;let T=g-i;for(let A=$;T>0&&A<e.length;A++){const E=e[A];if(T>E.size)T-=E.size,$++,i+=E.size,u.updateFileStatus(E,"uploading",E.size);else{u.updateFileStatus(E,"uploading",T);return}}},!1),v.onreadystatechange=()=>{v.readyState<4||(v.status&&v.status<400?(u.uploadedFiles.value=u.uploadedFiles.value.concat(e),e.forEach(n=>{u.updateFileStatus(n,"uploaded")}),f("uploaded",{files:e,xhr:v})):(d=!0,u.uploadedSize.value-=g,u.queuedFiles.value=u.queuedFiles.value.concat(e),e.forEach(n=>{u.updateFileStatus(n,"failed")}),f("failed",{files:e,xhr:v})),p.value--,r.value=r.value.filter(n=>n!==v))},v.open(l("method",e),S),l("withCredentials",e)===!0&&(v.withCredentials=!0);const _=l("headers",e);_!==void 0&&_.forEach(n=>{v.setRequestHeader(n.name,n.value)});const j=l("sendRaw",e);e.forEach(n=>{u.updateFileStatus(n,"uploading",0),j!==!0&&x.append(l("fieldName",n),n,n.name),n.xhr=v,n.__abort=()=>{v.abort()},C+=n.size}),f("uploading",{files:e,xhr:v}),r.value.push(v),j===!0?v.send(new Blob(e)):v.send(x)}return{isUploading:w,isBusy:B,abort:U,upload:R}}var He={name:"QUploader",props:Me,emits:We,injectPlugin:Xe},Je=Qe(He);export{Je as Q};
