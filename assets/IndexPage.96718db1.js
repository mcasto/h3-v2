import{Q as B}from"./QPage.b315a01d.js";import{_,y as n,z as u,K as y,L as Q,E as d,C as t,B as o,A as b,H as p,N as h,ck as g,M as T,G as v,Q as N,F as f,D as x,X as V,bB as G}from"./index.0f6227c2.js";import{Q as L}from"./QToolbarTitle.e4028a64.js";import{Q as q,a as F}from"./QItem.b5b79933.js";import{Q as M}from"./QList.4ffe35c0.js";import{Q as U}from"./QMenu.9ddf5c1d.js";import{Q as S}from"./QToolbar.2e611446.js";import{Q as A}from"./QInput.0783992a.js";import{Q as E,b as C,a as w}from"./QTable.a3c22440.js";import{u as H}from"./index.4ad7fce3.js";import{Q as D}from"./QCardSection.e0926048.js";import{Q as O}from"./QImg.2ace3909.js";import{Q as j}from"./QCard.ca785a3c.js";import{f as $,p as P}from"./index.6e3da59d.js";import{Q as I}from"./QTr.d75339f6.js";import{f as k}from"./index.58cc3f89.js";import"./use-dark.95ee2633.js";import"./use-tick.ca603a49.js";import"./use-key-composition.86f1530a.js";import"./uid.42677368.js";import"./QSelect.c7dbe8ba.js";import"./QItemLabel.b72ce872.js";import"./QDialog.78957ec9.js";import"./format.5d379463.js";import"./rtl.b51694b1.js";import"./use-fullscreen.f10d4068.js";const z={name:"ContactPage"};function K(e,s,r,m,l,a){return n(),u("div",null,"Contact Page")}var X=_(z,[["render",K]]);const J={name:"GalleryPhotoCard",props:["photo"],computed:{...y(Q,["photos"]),date(){return $(P(this.photo.date_added),"PP")}}},R={class:"text-h6"},W={class:"text-subtitle1"},Y={key:1,controls:"",style:{"max-height":"300px"}},Z=["type","src"];function ee(e,s,r,m,l,a){return n(),d(j,{flat:"",bordered:""},{default:t(()=>[o(D,null,{default:t(()=>[b("div",R,p(r.photo.name),1),b("div",W,p(a.date),1)]),_:1}),o(D,null,{default:t(()=>[r.photo.mime.includes("image")?(n(),d(O,{key:0,src:r.photo.file_location,style:{"max-height":"300px"},fit:"contain"},null,8,["src"])):h("",!0),r.photo.mime.includes("video")?(n(),u("video",Y,[b("source",{type:r.photo.mime,src:r.photo.file_location},null,8,Z)])):h("",!0)]),_:1})]),_:1})}var te=_(J,[["render",ee]]);const ae={name:"GalleryPage",components:{GalleryPhotoCard:te},data:()=>({galleryID:null,filter:null}),computed:{...y(Q,["albums","photos"]),albumList(){if(!this.albums)return[];console.log({albums:this.albums});const e=g.exports.uniq(g.exports.flatten(this.albums.map(({photos:l})=>l)));console.log({albumPhotos:e});const s=g.exports.cloneDeep(this.albums).map(l=>(l.photos=l.photos.map(a=>this.photos.filter(i=>i.id==a).shift()),l.photos=l.photos.filter(({gallery:a})=>a==1),l));console.log({albums:s});const r={id:H(),name:"Unsorted Photos",photos:this.photos.filter(({id:l})=>!e.includes(l)).filter(({gallery:l})=>l==1)};console.log({unsorted:r});let m=[];return r.photos.length>0&&m.push(r),s.length>0&&(m=[...m,...s]),console.log({ret:m}),m},gallery(){const e=this.galleryID?g.exports.cloneDeep(this.albumList.filter(({id:s})=>s==this.galleryID).shift()):g.exports.cloneDeep(this.albumList[0]);return e||[]}}},oe={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"};function re(e,s,r,m,l,a){const i=T("gallery-photo-card");return n(),u(f,null,[o(S,{class:"justify-between"},{default:t(()=>[o(L,null,{default:t(()=>[v(p(a.gallery.name),1)]),_:1}),o(N,{icon:"photo_album",label:"Albums"},{default:t(()=>[o(U,{"auto-close":""},{default:t(()=>[o(M,{separator:""},{default:t(()=>[(n(!0),u(f,null,x(a.albumList,c=>(n(),d(q,{key:`photo-album-${c.id}`,clickable:"",onClick:he=>e.galleryID=c.id,active:c.id==a.gallery.id,"active-class":"bg-grey-3 text-black text-bold"},{default:t(()=>[o(F,null,{default:t(()=>[v(p(c.name),1)]),_:2},1024)]),_:2},1032,["onClick","active"]))),128))]),_:1})]),_:1})]),_:1})]),_:1}),o(E,{flat:"",bordered:"",grid:"",rows:a.gallery.photos,filter:e.filter,"hide-header":""},{"top-right":t(()=>[o(A,{borderless:"",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":s[0]||(s[0]=c=>e.filter=c),placeholder:"Search Album"},{append:t(()=>[o(V,{name:"search"})]),_:1},8,["modelValue"])]),item:t(c=>[b("div",oe,[o(i,{photo:c.row},null,8,["photo"])])]),_:1},8,["rows","filter"])],64)}var ne=_(ae,[["render",re]]);const se={name:"UpcomingEvents",props:["events","title"],created(){this.columns=[{label:"Name",name:"event-name",field:"name",align:"left",headerClasses:"bg-grey-3"},{label:"Date",name:"event-date",field:"event_date",align:"left",headerClasses:"bg-grey-3",format:e=>$(P(e),"PP")},{label:"Start Time",name:"event-start-time",field:"start_time",align:"left",headerClasses:"bg-grey-3",format:e=>{if(!e)return"";const s=`${k(new Date,{representation:"date"})} ${e}`,r=P(s);return $(r,"p")}},{label:"Location",name:"event-location",field:"location",align:"left",headerClasses:"bg-grey-3"}]}};function le(e,s,r,m,l,a){return n(),u(f,null,[o(S,{color:"bg-grey-3"},{default:t(()=>[o(L,null,{default:t(()=>[v(p(r.title),1)]),_:1})]),_:1}),o(E,{columns:e.columns,rows:r.events,"row-key":"id",separator:"cell"},{header:t(i=>[o(I,{props:i},{default:t(()=>[(n(!0),u(f,null,x(i.cols,c=>(n(),d(C,{key:c.name,props:i},{default:t(()=>[v(p(c.label),1)]),_:2},1032,["props"]))),128)),o(C,{"auto-width":"",class:"bg-grey-3"})]),_:2},1032,["props"])]),body:t(i=>[o(I,{props:i},{default:t(()=>[(n(!0),u(f,null,x(i.cols,c=>(n(),d(w,{key:c.name,props:i},{default:t(()=>[v(p(c.value),1)]),_:2},1032,["props"]))),128)),o(w,{"auto-width":""},{default:t(()=>[o(N,{round:"",flat:"",dense:"",icon:"pageview",to:i.row.path},null,8,["to"])]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["columns","rows"])],64)}var ie=_(se,[["render",le]]);const ce={name:"EventsPage",components:{EventsTable:ie},computed:{...y(Q,["events"]),previous(){return this.events.filter(({event_date:e})=>e<k(new Date,{representation:"date"}))},upcoming(){return this.events.filter(({event_date:e})=>e>=k(new Date,{representation:"date"}))}}};function me(e,s,r,m,l,a){const i=T("events-table");return n(),u(f,null,[a.upcoming.length>0?(n(),d(i,{key:0,events:a.upcoming,title:"Upcoming Events"},null,8,["events"])):h("",!0),a.previous.length>0?(n(),d(i,{key:1,events:a.previous,title:"Previous Events"},null,8,["events"])):h("",!0)],64)}var ue=_(ce,[["render",me]]);const de={name:"IndexPage",components:{ContactPage:X,GalleryPage:ne,EventsPage:ue},computed:{...y(Q,["navigation"]),page(){if(!this.navigation)return{};const e=this.navigation.filter(({path:s})=>s==this.$route.fullPath).shift();return e||this.pageNotFound(),e},componentName(){return this.page.component_name}},methods:{pageNotFound(){this.$router.push("/404")}}},pe=["innerHTML"];function fe(e,s,r,m,l,a){return n(),d(B,{class:"q-mx-xl"},{default:t(()=>[a.page?(n(),u("div",{key:0,innerHTML:a.page.contents},null,8,pe)):h("",!0),a.componentName?(n(),d(G(a.componentName),{key:1})):h("",!0)]),_:1})}var Ae=_(de,[["render",fe]]);export{Ae as default};
