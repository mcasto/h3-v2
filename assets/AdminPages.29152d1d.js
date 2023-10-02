import{Q as l}from"./QSelect.d4cfb2a8.js";import{Q as r}from"./QToolbar.0c890d46.js";import{t as d,Q as p}from"./admin-editor-toolbar.cd535c0a.js";import{_ as m,cj as g,ag as u,y as i,z as c,B as s,C as h,E as P,N as f,L as n}from"./index.1339cfb4.js";import"./use-key-composition.6fa8055c.js";import"./use-dark.8b5bedcd.js";import"./uid.42677368.js";import"./QItem.247a1dde.js";import"./QItemLabel.12f945ba.js";import"./QMenu.a85297b4.js";import"./use-tick.7b2bd632.js";import"./QDialog.f38af6c2.js";import"./format.1fdd34d3.js";import"./rtl.b51694b1.js";import"./QTooltip.47eb9dd2.js";import"./use-fullscreen.f2fed1e5.js";const b={name:"AdminPages",data:()=>({selectedPage:null}),computed:{...g(n,["editingPage","navigation"]),pageList(){return this.navigation.map(({id:e,name:t})=>({id:e,name:t}))}},watch:{selectedPage(){this.editingPage=this.navigation.filter(({id:e})=>e==this.selectedPage.id).shift()}},methods:{...u(n,["updatePages","upsertRec"]),updateContents(){this.upsertRec("pages",this.editingPage).then(()=>{this.$q.notify({message:"Page contents updated.",position:"top-right",color:"positive",classes:"q-mt-xl"})})}},created(){this.toolbar=d()},mounted(){this.selectedPage=this.pageList[0]}};function V(e,t,v,w,y,o){return i(),c("div",null,[s(r,{class:"flex row justify-between bg-grey-3 q-mb-sm shadow-1"},{default:h(()=>[s(l,{modelValue:e.selectedPage,"onUpdate:modelValue":t[0]||(t[0]=a=>e.selectedPage=a),options:o.pageList,label:"Select Page to Edit",style:{width:"300px"},dense:"","option-label":"name"},null,8,["modelValue","options"])]),_:1}),e.editingPage?(i(),P(p,{key:0,modelValue:e.editingPage.contents,"onUpdate:modelValue":t[1]||(t[1]=a=>e.editingPage.contents=a),"min-height":"80vh",placeholder:"Page content ...",definitions:{update:{tip:"Update",icon:"cloud_upload",handler:o.updateContents}},toolbar:e.toolbar},null,8,["modelValue","definitions","toolbar"])):f("",!0)])}var T=m(b,[["render",V]]);export{T as default};