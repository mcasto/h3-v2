import{Q as n}from"./QToolbarTitle.5561700f.js";import{Q as p}from"./QToolbar.09e0d651.js";import{Q as h}from"./QInput.fca7f57e.js";import{Q as g}from"./QUploader.76e796c5.js";import{Q as u}from"./QImg.24f4eca2.js";import{_ as Q,K as _,cj as b,ck as v,ag as C,M as V,y as w,z as x,B as t,C as a,F as y,L as i,A as s,Q as d,G as f,H as I}from"./index.f5c4a8b3.js";import{Q as U}from"./QCard.f7f7b988.js";import{Q as k}from"./QDialog.b086a01f.js";import{t as N,Q as T}from"./admin-editor-toolbar.0214fc2a.js";import{Q as B}from"./QForm.61eb1b6e.js";import{I as E}from"./ImageUploadHeader.97f16684.js";import"./use-key-composition.ebc3bdb8.js";import"./use-dark.cff9e6be.js";import"./uid.42677368.js";import"./format.c738b4f5.js";import"./use-tick.3dc8c6a4.js";import"./QMenu.73150e5a.js";import"./QItem.aee696dd.js";import"./QTooltip.6ebeb36a.js";import"./use-fullscreen.e623e177.js";const P={name:"AdminEditPhoto",components:{ImageUploadHeader:E},data:()=>({viewCurrentImage:!1}),computed:{..._(i,["token"]),...b(i,["photos"]),photo(){let e=this.photos.filter(({id:o,temp_id:m})=>o==this.$route.params.id||m==this.$route.params.id);return e=e.length>0?e.shift():!1,e},buttonText(){return isNaN(v.exports.toNumber(this.$route.params.id))?"Create":"Update"}},methods:{...C(i,["upsertRec"])},created(){this.toolbar=N()}},q=s("div",null," Edit Photo ",-1),A={class:"flex row"},D={class:"flex row justify-center q-gutter-x-lg q-mt-lg"},S={class:"flex row q-mt-lg"},$={class:"flex row q-my-lg"},F={class:"col-11 text-right"};function j(e,o,m,H,R,r){const c=V("image-upload-header");return w(),x(y,null,[t(p,null,{default:a(()=>[t(n,null,{default:a(()=>[q]),_:1})]),_:1}),t(B,null,{default:a(()=>[s("div",A,[t(h,{class:"col-10 offset-1",type:"text",label:"Name",modelValue:r.photo.name,"onUpdate:modelValue":o[0]||(o[0]=l=>r.photo.name=l)},null,8,["modelValue"])]),s("div",D,[t(g,{label:"Photo",accept:"image/*",url:`/api/upload-image/${e.token}/photos/${e.$route.params.id}`},{header:a(l=>[t(c,{scope:l},null,8,["scope"])]),_:1},8,["url"]),t(d,{icon:"visibility",label:"View Current Image",onClick:o[1]||(o[1]=l=>e.viewCurrentImage=!0)},{default:a(()=>[t(u,{src:r.photo.file_location},null,8,["src"])]),_:1})]),t(k,{modelValue:e.viewCurrentImage,"onUpdate:modelValue":o[2]||(o[2]=l=>e.viewCurrentImage=l)},{default:a(()=>[t(U,{style:{width:"750px","max-height":"80vh"}},{default:a(()=>[t(u,{src:r.photo.file_location},null,8,["src"])]),_:1}),t(d,{icon:"cancel",style:{position:"relative",top:"-38vh"},flat:"",round:"",color:"white",class:"bg-transparent"})]),_:1},8,["modelValue"]),s("div",S,[t(p,{class:"offset-1 col-10 bg-grey-3"},{default:a(()=>[t(n,null,{default:a(()=>[f(" Description ")]),_:1})]),_:1}),t(T,{class:"offset-1 col-10",label:"Description",definitions:{update:{tip:"Update",icon:"cloud_upload",handler:e.updateContents}},toolbar:e.toolbar,modelValue:r.photo.description,"onUpdate:modelValue":o[3]||(o[3]=l=>r.photo.description=l)},null,8,["definitions","toolbar","modelValue"])]),s("div",$,[s("div",F,[t(d,{onClick:o[4]||(o[4]=l=>e.upsertRec("photos",r.photo,"Photo Updated"))},{default:a(()=>[f(I(r.buttonText),1)]),_:1})])])]),_:1})],64)}var mt=Q(P,[["render",j]]);export{mt as default};