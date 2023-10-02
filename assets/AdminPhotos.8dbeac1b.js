import{u as ye,a as Pe,b as ke,c as Ae}from"./QTabs.05b8f6a8.js";import{c as H,a7 as Ce,a1 as I,q as xe,a8 as we,a9 as B,aa as W,ad as ae,U as X,ae as j,r as le,a as k,w as Qe,g as fe,b as q,T as Te,cD as Ve,k as O,n as qe,aS as Se,j as $e,K as G,ck as De,ag as F,_ as K,L as w,y as m,E as b,C as u,B as l,X as ie,N as C,z as _,G as x,H as U,A as h,Q as y,M,D as R,F as S,ce as Ie,cE as se}from"./index.f5c4a8b3.js";import{Q as Le}from"./QUploader.76e796c5.js";import{Q as Ne}from"./QMenu.73150e5a.js";import{Q as ve}from"./QToolbar.09e0d651.js";import{Q as re}from"./QList.e5f95b0b.js";import{g as ue,s as de}from"./touch.3df10340.js";import{c as Ee,a as A,Q as Y}from"./QItem.aee696dd.js";import{u as Be}from"./use-cache.b0833c75.js";import{u as Ue,a as Me}from"./use-dark.cff9e6be.js";import{Q as J}from"./QImg.24f4eca2.js";import{Q as Re}from"./QInput.fca7f57e.js";import{Q as Fe}from"./QPopupEdit.1696ee0c.js";import{Q as Ke}from"./QTooltip.6ebeb36a.js";import{Q as ze}from"./QToolbarTitle.5561700f.js";import{Q as We}from"./QDialog.b086a01f.js";import"./uid.42677368.js";import"./use-tick.3dc8c6a4.js";import"./rtl.b51694b1.js";import"./format.c738b4f5.js";import"./use-key-composition.ebc3bdb8.js";var me=H({name:"QTab",props:ye,emits:Pe,setup(e,{slots:o,emit:s}){const{renderTab:p}=ke(e,o,s);return()=>p("div")}});function Xe(e){const o=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((s,p)=>{const r=parseFloat(s);r&&(o[p]=r)}),o}var je=Ce({name:"touch-swipe",beforeMount(e,{value:o,arg:s,modifiers:p}){if(p.mouse!==!0&&I.has.touch!==!0)return;const r=p.mouseCapture===!0?"Capture":"",t={handler:o,sensitivity:Xe(s),direction:ue(p),noop:xe,mouseStart(a){de(a,t)&&we(a)&&(B(t,"temp",[[document,"mousemove","move",`notPassive${r}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(a,!0))},touchStart(a){if(de(a,t)){const n=a.target;B(t,"temp",[[n,"touchmove","move","notPassiveCapture"],[n,"touchcancel","end","notPassiveCapture"],[n,"touchend","end","notPassiveCapture"]]),t.start(a)}},start(a,n){I.is.firefox===!0&&W(e,!0);const d=ae(a);t.event={x:d.left,y:d.top,time:Date.now(),mouse:n===!0,dir:!1}},move(a){if(t.event===void 0)return;if(t.event.dir!==!1){X(a);return}const n=Date.now()-t.event.time;if(n===0)return;const d=ae(a),Q=d.left-t.event.x,v=Math.abs(Q),T=d.top-t.event.y,f=Math.abs(T);if(t.event.mouse!==!0){if(v<t.sensitivity[1]&&f<t.sensitivity[1]){t.end(a);return}}else if(window.getSelection().toString()!==""){t.end(a);return}else if(v<t.sensitivity[2]&&f<t.sensitivity[2])return;const P=v/n,V=f/n;t.direction.vertical===!0&&v<f&&v<100&&V>t.sensitivity[0]&&(t.event.dir=T<0?"up":"down"),t.direction.horizontal===!0&&v>f&&f<100&&P>t.sensitivity[0]&&(t.event.dir=Q<0?"left":"right"),t.direction.up===!0&&v<f&&T<0&&v<100&&V>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&v<f&&T>0&&v<100&&V>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&v>f&&Q<0&&f<100&&P>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&v>f&&Q>0&&f<100&&P>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(X(a),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ee(),t.styleCleanup=L=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const $=()=>{document.body.classList.remove("no-pointer-events--children")};L===!0?setTimeout($,50):$()}),t.handler({evt:a,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:n,distance:{x:v,y:f}})):t.end(a)},end(a){t.event!==void 0&&(j(t,"temp"),I.is.firefox===!0&&W(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),a!==void 0&&t.event.dir!==!1&&X(a),t.event=void 0)}};if(e.__qtouchswipe=t,p.mouse===!0){const a=p.mouseCapture===!0||p.mousecapture===!0?"Capture":"";B(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}I.has.touch===!0&&B(t,"main",[[e,"touchstart","touchStart",`passive${p.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const s=e.__qtouchswipe;s!==void 0&&(o.oldValue!==o.value&&(typeof o.value!="function"&&s.end(),s.handler=o.value),s.direction=ue(o.modifiers))},beforeUnmount(e){const o=e.__qtouchswipe;o!==void 0&&(j(o,"main"),j(o,"temp"),I.is.firefox===!0&&W(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchswipe)}});const Ye={name:{required:!0},disable:Boolean},ce={setup(e,{slots:o}){return()=>q("div",{class:"q-panel scroll",role:"tabpanel"},O(o.default))}},He={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Oe=["update:modelValue","beforeTransition","transition"];function Ge(){const{props:e,emit:o,proxy:s}=fe(),{getCacheWithFn:p}=Be();let r,t;const a=le(null),n=le(null);function d(i){const c=e.vertical===!0?"up":"left";D((s.$q.lang.rtl===!0?-1:1)*(i.direction===c?1:-1))}const Q=k(()=>[[je,d,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),v=k(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),T=k(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),f=k(()=>`--q-transition-duration: ${e.transitionDuration}ms`),P=k(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),V=k(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),L=k(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);Qe(()=>e.modelValue,(i,c)=>{const g=N(i)===!0?z(i):-1;t!==!0&&te(g===-1?0:g<z(c)?-1:1),a.value!==g&&(a.value=g,o("beforeTransition",i,c),qe(()=>{o("transition",i,c)}))});function $(){D(1)}function Z(){D(-1)}function ee(i){o("update:modelValue",i)}function N(i){return i!=null&&i!==""}function z(i){return r.findIndex(c=>c.props.name===i&&c.props.disable!==""&&c.props.disable!==!0)}function he(){return r.filter(i=>i.props.disable!==""&&i.props.disable!==!0)}function te(i){const c=i!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(i===-1?v.value:T.value):null;n.value!==c&&(n.value=c)}function D(i,c=a.value){let g=c+i;for(;g>-1&&g<r.length;){const E=r[g];if(E!==void 0&&E.props.disable!==""&&E.props.disable!==!0){te(i),t=!0,o("update:modelValue",E.props.name),setTimeout(()=>{t=!1});return}g+=i}e.infinite===!0&&r.length!==0&&c!==-1&&c!==r.length&&D(i,i===-1?r.length:-1)}function oe(){const i=z(e.modelValue);return a.value!==i&&(a.value=i),!0}function ne(){const i=N(e.modelValue)===!0&&oe()&&r[a.value];return e.keepAlive===!0?[q(Se,V.value,[q(L.value===!0?p(P.value,()=>({...ce,name:P.value})):ce,{key:P.value,style:f.value},()=>i)])]:[q("div",{class:"q-panel scroll",style:f.value,key:P.value,role:"tabpanel"},[i])]}function be(){if(r.length!==0)return e.animated===!0?[q(Te,{name:n.value},ne)]:ne()}function _e(i){return r=Ve(O(i.default,[])).filter(c=>c.props!==null&&c.props.slot===void 0&&N(c.props.name)===!0),r.length}function ge(){return r}return Object.assign(s,{next:$,previous:Z,goTo:ee}),{panelIndex:a,panelDirectives:Q,updatePanelsList:_e,updatePanelIndex:oe,getPanelContent:be,getEnabledPanels:he,getPanels:ge,isValidPanelName:N,keepAliveProps:V,needsUniqueKeepAliveWrapper:L,goToPanelByOffset:D,goToPanel:ee,nextPanel:$,previousPanel:Z}}var pe=H({name:"QTabPanel",props:Ye,setup(e,{slots:o}){return()=>q("div",{class:"q-tab-panel",role:"tabpanel"},O(o.default))}}),Je=H({name:"QTabPanels",props:{...He,...Ue},emits:Oe,setup(e,{slots:o}){const s=fe(),p=Me(e,s.proxy.$q),{updatePanelsList:r,getPanelContent:t,panelDirectives:a}=Ge(),n=k(()=>"q-tab-panels q-panel-parent"+(p.value===!0?" q-tab-panels--dark q-dark":""));return()=>(r(o),$e("div",{class:n.value},t(),"pan",e.swipeable,()=>a.value))}});const Ze={name:"AdminPhotosLineItem",props:["photo"],computed:{...G(w,["albums"]),inAlbum(){return De.exports.flatten(this.albums.map(({photos:o})=>o)).includes(this.photo.id)}},methods:{...F(w,["deleteRec"])}},et=["src"],tt={class:"flex row"};function ot(e,o,s,p,r,t){return m(),b(Y,null,{default:u(()=>[l(A,{side:""},{default:u(()=>[t.inAlbum?(m(),b(ie,{key:0,name:"photo_album",color:"primary"})):(m(),b(ie,{key:1}))]),_:1}),l(A,{avatar:""},{default:u(()=>[s.photo.mime.includes("image")?(m(),b(J,{key:0,src:s.photo.file_location},null,8,["src"])):C("",!0),s.photo.mime.includes("video")?(m(),_("video",{key:1,src:s.photo.file_location,height:"53",width:"40"},null,8,et)):C("",!0)]),_:1}),l(A,null,{default:u(()=>[x(U(s.photo.name),1)]),_:1}),l(A,{side:""},{default:u(()=>[h("div",tt,[l(y,{icon:"edit",round:"",flat:"",color:"primary",to:`/admin/edit-photo/${s.photo.id}`},null,8,["to"]),l(y,{icon:"delete",round:"",flat:"",color:"primary",onClick:o[0]||(o[0]=a=>e.deleteRec("photos",s.photo,"Are you sure you want to delete this photo?"))})])]),_:1})]),_:1})}var nt=K(Ze,[["render",ot]]);const at={name:"AddAlbumPhoto",props:["dialog"],computed:{...G(w,["photos"]),photoList(){return this.photos.filter(({id:e})=>!this.dialog.album.photos.includes(e))},visible:{get(){return this.dialog.visible},set(e){this.$emit("close")}}},methods:{...F(w,["addPhotoToAlbum"])}},lt={class:"bg-white"},it={class:"flex row q-px-md"},st={key:1,controls:"",height:"300"},rt=["src","type"],ut={class:"q-mt-xs"};function dt(e,o,s,p,r,t){const a=M("q-spacer");return m(),b(We,{modelValue:t.visible,"onUpdate:modelValue":o[1]||(o[1]=n=>t.visible=n),"full-width":""},{default:u(()=>[h("div",lt,[l(ve,{class:"bg-grey-3 shadow-1 q-mb-sm"},{default:u(()=>[l(ze,null,{default:u(()=>[x(" Add photo(s) to "+U(s.dialog.album.name)+" Album ",1)]),_:1}),l(a),l(y,{round:"",flat:"",icon:"cancel",onClick:o[0]||(o[0]=n=>e.$emit("close"))})]),_:1}),h("div",it,[(m(!0),_(S,null,R(t.photoList,n=>(m(),_("div",{key:`add-album-photo-${n.id}`,class:"col-12 col-md-3 q-pa-sm text-center"},[h("div",null,[n.mime.includes("image")?(m(),b(J,{key:0,src:n.file_location,height:"300px",fit:"contain"},null,8,["src"])):C("",!0),n.mime.includes("video")?(m(),_("video",st,[h("source",{src:n.file_location,type:n.mime},null,8,rt)])):C("",!0)]),h("div",ut,[l(y,{color:"primary",onClick:d=>e.addPhotoToAlbum({album:s.dialog.album,photo:n})},{default:u(()=>[x("Add To Album")]),_:2},1032,["onClick"])])]))),128))])])]),_:1},8,["modelValue"])}var mt=K(at,[["render",dt]]);const ct={name:"AdminAlbumLineItem",components:{AddAlbumPhoto:mt},props:["album","photos"],data(){return{addAlbumPhotoDialog:{visible:!1,album:null},albumName:this.album.name,expanded:!1}},computed:{photoList(){return this.photos?this.photos.filter(({id:o})=>this.album.photos.includes(o)):[]}},methods:{...F(w,["deleteRec","removePhotoFromAlbum","updateAlbumName"])}},pt={class:"cursor-pointer"},ft={class:"flex row"},vt={class:"flex row"},ht={key:1,controls:"",height:"300"},bt=["src","type"],_t={class:"text-center"};function gt(e,o,s,p,r,t){const a=M("add-album-photo");return m(),_(S,null,[l(Y,null,{default:u(()=>[l(A,{side:""},{default:u(()=>[l(y,{round:"",flat:"",icon:r.expanded?"expand_more":"chevron_right",onClick:o[0]||(o[0]=n=>r.expanded=!r.expanded)},null,8,["icon"])]),_:1}),l(A,null,{default:u(()=>[h("div",pt,[x(U(s.album.name)+" ",1),l(Fe,{modelValue:r.albumName,"onUpdate:modelValue":o[1]||(o[1]=n=>r.albumName=n),"auto-save":"",onSave:o[2]||(o[2]=(n,d)=>{e.updateAlbumName({...s.album,name:n})})},{default:u(n=>[l(Re,{modelValue:n.value,"onUpdate:modelValue":d=>n.value=d,dense:"",autofocus:"",onKeyup:Ie(n.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"]),x(" ("+U(t.photoList.length)+" photos) ",1)])]),_:1}),l(A,{side:""},{default:u(()=>[h("div",ft,[l(y,{round:"",flat:"",icon:"add_a_photo",color:"primary",onClick:o[3]||(o[3]=n=>r.addAlbumPhotoDialog={visible:!0,album:s.album})}),l(y,{round:"",flat:"",icon:"delete",color:"primary",onClick:o[4]||(o[4]=n=>e.deleteRec("albums",s.album,"Are you sure you want to remove this album? Photos will remain."))})])]),_:1})]),_:1}),r.expanded?(m(),b(Y,{key:0},{default:u(()=>[l(A,null,{default:u(()=>[h("div",vt,[(m(!0),_(S,null,R(t.photoList,n=>(m(),_("div",{key:`admin-album-line-item-photo-${n.id}`,class:"col-4 q-pa-sm"},[h("div",null,[n.mime.includes("image")?(m(),b(J,{key:0,src:n.file_location,height:"300px",fit:"contain"},null,8,["src"])):C("",!0),n.mime.includes("video")?(m(),_("video",ht,[h("source",{src:n.file_location,type:n.mime},null,8,bt)])):C("",!0)]),h("div",_t,[l(y,{color:"primary",round:"",flat:"",icon:"do_not_disturb_on",onClick:d=>e.removePhotoFromAlbum({album:s.album,photo:n})},{default:u(()=>[l(Ke,null,{default:u(()=>[x(" Remove From Album ")]),_:1})]),_:2},1032,["onClick"])])]))),128))])]),_:1})]),_:1})):C("",!0),l(a,{dialog:r.addAlbumPhotoDialog,onClose:o[5]||(o[5]=n=>r.addAlbumPhotoDialog.visible=!1)},null,8,["dialog"])],64)}var yt=K(ct,[["render",gt]]);const Pt={name:"AdminPhotos",components:{AdminAlbumLineItem:yt,AdminPhotosLineItem:nt},data:()=>({tab:"photos"}),computed:{...G(w,["albums","photos","token"]),imgHeight(){return Math.floor(se.height*.3)},imgWidth(){return Math.floor(se.width*.25)}},methods:{...F(w,["getItems","upsertRec"]),async addItem(){this.tab=="albums"&&(await this.upsertRec("albums",{name:"Untitled Album",photos:"[]"}),this.getItems({table:"albums"}))}}};function kt(e,o,s,p,r,t){const a=M("admin-photos-line-item"),n=M("admin-album-line-item");return m(),_(S,null,[l(ve,{class:"bg-grey-3 flex row justify-between"},{default:u(()=>[l(Ae,{modelValue:e.tab,"onUpdate:modelValue":o[0]||(o[0]=d=>e.tab=d)},{default:u(()=>[l(me,{name:"photos"},{default:u(()=>[x(" Photos ")]),_:1}),l(me,{name:"albums"},{default:u(()=>[x(" Albums ")]),_:1})]),_:1},8,["modelValue"]),l(y,{icon:"add_circle",flat:"",round:"",color:"primary",onClick:t.addItem},{default:u(()=>[e.tab=="photos"?(m(),b(Ne,{key:0,anchor:"bottom left",self:"top left"},{default:u(()=>[l(Le,{multiple:"",accept:"image/*",url:`/api/upload-photos/${e.token}`,onFinish:o[1]||(o[1]=d=>e.getItems({table:"photos"}))},null,8,["url"])]),_:1})):C("",!0)]),_:1},8,["onClick"])]),_:1}),l(Je,{modelValue:e.tab,"onUpdate:modelValue":o[2]||(o[2]=d=>e.tab=d)},{default:u(()=>[l(pe,{name:"photos"},{default:u(()=>[l(re,{bordered:"",separator:""},{default:u(()=>[(m(!0),_(S,null,R(e.photos,d=>(m(),b(a,{key:`photo-list-item-${d.id}`,photo:d},null,8,["photo"]))),128))]),_:1})]),_:1}),l(pe,{name:"albums"},{default:u(()=>[l(re,{bordered:"",separator:""},{default:u(()=>[(m(!0),_(S,null,R(e.albums,d=>(m(),b(n,{key:`album-admin-list-item-${d.id}`,album:d,photos:e.photos},null,8,["album","photos"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var zt=K(Pt,[["render",kt]]);export{zt as default};