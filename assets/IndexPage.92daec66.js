import{Q as B}from"./QPage.71c815f3.js";import{_,y as n,z as c,K as y,L as Q,E as d,C as t,B as o,A as b,H as p,N as h,ck as g,M as T,G as v,Q as N,F as f,D as x,X as V,bB as G}from"./index.1339cfb4.js";import{Q as L}from"./QToolbarTitle.a9a6813c.js";import{Q as q,a as F}from"./QItem.247a1dde.js";import{Q as M}from"./QList.c604e169.js";import{Q as U}from"./QMenu.a85297b4.js";import{Q as S}from"./QToolbar.0c890d46.js";import{Q as A}from"./QInput.4b62d974.js";import{Q as E,b as C,a as w}from"./QTable.898eb4c4.js";import{u as H}from"./index.c2166660.js";import{Q as D}from"./QCardSection.5caccaa2.js";import{Q as O}from"./QImg.1ab1d6f1.js";import{Q as j}from"./QCard.aa43ab51.js";import{f as $,p as P}from"./index.6e3da59d.js";import{Q as I}from"./QTr.bc169a0a.js";import{f as k}from"./index.58cc3f89.js";import"./use-dark.8b5bedcd.js";import"./use-tick.7b2bd632.js";import"./use-key-composition.6fa8055c.js";import"./uid.42677368.js";import"./QSelect.d4cfb2a8.js";import"./QItemLabel.12f945ba.js";import"./QDialog.f38af6c2.js";import"./format.1fdd34d3.js";import"./rtl.b51694b1.js";import"./use-fullscreen.f2fed1e5.js";const z={name:"ContactPage"};function K(e,l,r,u,s,a){return n(),c("div",null,"Contact Page")}var X=_(z,[["render",K]]);const J={name:"GalleryPhotoCard",props:["photo"],computed:{...y(Q,["photos"]),date(){return $(P(this.photo.date_added),"PP")}}},R={class:"text-h6"},W={class:"text-subtitle1"},Y={key:1,controls:"",style:{"max-height":"300px"}},Z=["type","src"];function ee(e,l,r,u,s,a){return n(),d(j,{flat:"",bordered:""},{default:t(()=>[o(D,null,{default:t(()=>[b("div",R,p(r.photo.name),1),b("div",W,p(a.date),1)]),_:1}),o(D,null,{default:t(()=>[r.photo.mime.includes("image")?(n(),d(O,{key:0,src:r.photo.file_location,style:{"max-height":"300px"},fit:"contain"},null,8,["src"])):h("",!0),r.photo.mime.includes("video")?(n(),c("video",Y,[b("source",{type:r.photo.mime,src:r.photo.file_location},null,8,Z)])):h("",!0)]),_:1})]),_:1})}var te=_(J,[["render",ee]]);const ae={name:"GalleryPage",components:{GalleryPhotoCard:te},data:()=>({galleryID:null,filter:null}),computed:{...y(Q,["albums","photos"]),albumList(){if(!this.albums)return[];const e=g.exports.uniq(g.exports.flatten(this.albums.map(({photos:s})=>s))),l=g.exports.cloneDeep(this.albums).map(s=>(s.photos=s.photos.map(a=>this.photos.filter(i=>i.id==a).shift()),s.photos=s.photos.filter(({gallery:a})=>a==1),s)),r={id:H(),name:"Unsorted Photos",photos:this.photos.filter(({id:s})=>!e.includes(s)).filter(({gallery:s})=>s==1)};let u=[];return r.photos.length>0&&u.push(r),l.length>0&&(u=[...u,...l]),u},gallery(){const e=this.galleryID?g.exports.cloneDeep(this.albumList.filter(({id:l})=>l==this.galleryID).shift()):g.exports.cloneDeep(this.albumList[0]);return e||[]}}},oe={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"};function re(e,l,r,u,s,a){const i=T("gallery-photo-card");return n(),c(f,null,[o(S,{class:"justify-between"},{default:t(()=>[o(L,null,{default:t(()=>[v(p(a.gallery.name),1)]),_:1}),o(N,{icon:"photo_album",label:"Albums"},{default:t(()=>[o(U,{"auto-close":""},{default:t(()=>[o(M,{separator:""},{default:t(()=>[(n(!0),c(f,null,x(a.albumList,m=>(n(),d(q,{key:`photo-album-${m.id}`,clickable:"",onClick:he=>e.galleryID=m.id,active:m.id==a.gallery.id,"active-class":"bg-grey-3 text-black text-bold"},{default:t(()=>[o(F,null,{default:t(()=>[v(p(m.name),1)]),_:2},1024)]),_:2},1032,["onClick","active"]))),128))]),_:1})]),_:1})]),_:1})]),_:1}),o(E,{flat:"",bordered:"",grid:"",rows:a.gallery.photos,filter:e.filter,"hide-header":""},{"top-right":t(()=>[o(A,{borderless:"",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":l[0]||(l[0]=m=>e.filter=m),placeholder:"Search Album"},{append:t(()=>[o(V,{name:"search"})]),_:1},8,["modelValue"])]),item:t(m=>[b("div",oe,[o(i,{photo:m.row},null,8,["photo"])])]),_:1},8,["rows","filter"])],64)}var ne=_(ae,[["render",re]]);const se={name:"UpcomingEvents",props:["events","title"],created(){this.columns=[{label:"Name",name:"event-name",field:"name",align:"left",headerClasses:"bg-grey-3"},{label:"Date",name:"event-date",field:"event_date",align:"left",headerClasses:"bg-grey-3",format:e=>$(P(e),"PP")},{label:"Start Time",name:"event-start-time",field:"start_time",align:"left",headerClasses:"bg-grey-3",format:e=>{if(!e)return"";const l=`${k(new Date,{representation:"date"})} ${e}`,r=P(l);return $(r,"p")}},{label:"Location",name:"event-location",field:"location",align:"left",headerClasses:"bg-grey-3"}]}};function le(e,l,r,u,s,a){return n(),c(f,null,[o(S,{color:"bg-grey-3"},{default:t(()=>[o(L,null,{default:t(()=>[v(p(r.title),1)]),_:1})]),_:1}),o(E,{columns:e.columns,rows:r.events,"row-key":"id",separator:"cell"},{header:t(i=>[o(I,{props:i},{default:t(()=>[(n(!0),c(f,null,x(i.cols,m=>(n(),d(C,{key:m.name,props:i},{default:t(()=>[v(p(m.label),1)]),_:2},1032,["props"]))),128)),o(C,{"auto-width":"",class:"bg-grey-3"})]),_:2},1032,["props"])]),body:t(i=>[o(I,{props:i},{default:t(()=>[(n(!0),c(f,null,x(i.cols,m=>(n(),d(w,{key:m.name,props:i},{default:t(()=>[v(p(m.value),1)]),_:2},1032,["props"]))),128)),o(w,{"auto-width":""},{default:t(()=>[o(N,{round:"",flat:"",dense:"",icon:"pageview",to:i.row.path},null,8,["to"])]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["columns","rows"])],64)}var ie=_(se,[["render",le]]);const me={name:"EventsPage",components:{EventsTable:ie},computed:{...y(Q,["events"]),previous(){return this.events.filter(({event_date:e})=>e<k(new Date,{representation:"date"}))},upcoming(){return this.events.filter(({event_date:e})=>e>=k(new Date,{representation:"date"}))}}};function ue(e,l,r,u,s,a){const i=T("events-table");return n(),c(f,null,[a.upcoming.length>0?(n(),d(i,{key:0,events:a.upcoming,title:"Upcoming Events"},null,8,["events"])):h("",!0),a.previous.length>0?(n(),d(i,{key:1,events:a.previous,title:"Previous Events"},null,8,["events"])):h("",!0)],64)}var ce=_(me,[["render",ue]]);const de={name:"IndexPage",components:{ContactPage:X,GalleryPage:ne,EventsPage:ce},computed:{...y(Q,["navigation"]),page(){if(!this.navigation)return{};const e=this.navigation.filter(({path:l})=>l==this.$route.fullPath).shift();return e||this.pageNotFound(),e},componentName(){return this.page.component_name}},methods:{pageNotFound(){this.$router.push("/404")}}},pe=["innerHTML"];function fe(e,l,r,u,s,a){return n(),d(B,{class:"q-mx-xl"},{default:t(()=>[a.page?(n(),c("div",{key:0,innerHTML:a.page.contents},null,8,pe)):h("",!0),a.componentName?(n(),d(G(a.componentName),{key:1})):h("",!0)]),_:1})}var Ae=_(de,[["render",fe]]);export{Ae as default};