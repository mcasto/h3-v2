import{Q as m}from"./QToolbarTitle.87e36e28.js";import{_ as s,cj as d,ag as c,y as p,z as f,B as e,C as o,L as l,G as u,Q as n}from"./index.a2f3cfc0.js";import{Q as v}from"./QToolbar.c770cf70.js";import{Q as _}from"./QImg.215ca481.js";import{Q as w,a as i}from"./QTable.df768e7a.js";import{u as y}from"./index.04e4e25c.js";import{f as b}from"./index.58cc3f89.js";import"./use-dark.7816c6ad.js";import"./QList.db98f5a6.js";import"./QSelect.9894fc80.js";import"./use-key-composition.f647aa55.js";import"./uid.42677368.js";import"./QItem.70400c55.js";import"./QItemLabel.f40530fc.js";import"./QMenu.e8a7b6a2.js";import"./use-tick.7958a757.js";import"./QDialog.b2ff892f.js";import"./format.de98cca4.js";import"./rtl.b51694b1.js";import"./use-fullscreen.f0adf219.js";const Q={name:"AdminEvents",computed:{...d(l,["events"])},methods:{...c(l,["deleteRec"])},created(){this.columns=[{name:"avatar"},{name:"event_name",label:"Name",field:"name",headerStyle:"text-align:left;",style:"text-align:left;"},{name:"event_date",label:"Date",field:"event_date",headerStyle:"text-align:left;",style:"text-align:left;"},{name:"event_tools"}],this.newEvent={name:"Untitled Event",event_date:b(new Date,{representation:"date"}),temp_id:y()}}};function g(a,r,h,$,E,x){return p(),f("div",null,[e(v,{class:"flex row justify-between bg-grey-3 q-mb-sm shadow-1"},{default:o(()=>[e(m,null,{default:o(()=>[u(" Events ")]),_:1}),e(n,{icon:"add_circle",color:"primary",round:"",flat:"",onClick:r[0]||(r[0]=t=>a.events.push(a.newEvent))})]),_:1}),e(w,{columns:a.columns,rows:a.events},{"body-cell-avatar":o(t=>[e(i,null,{default:o(()=>[e(_,{src:t.row.file_location},null,8,["src"])]),_:2},1024)]),"body-cell-event_tools":o(t=>[e(i,{class:"text-right"},{default:o(()=>[e(n,{icon:"edit",round:"",flat:"",color:"primary",to:t.row.id?`/admin/edit-event/${t.row.id}`:`/admin/edit-event/${t.row.temp_id}`},null,8,["to"]),e(n,{icon:"delete",round:"",flat:"",color:"primary",onClick:T=>a.deleteRec("events",t.row,"Are you sure you want to delete this event?")},null,8,["onClick"])]),_:2},1024)]),_:1},8,["columns","rows"])])}var J=s(Q,[["render",g]]);export{J as default};