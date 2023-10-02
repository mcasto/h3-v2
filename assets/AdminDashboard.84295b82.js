import{Q as E,a as w}from"./QItem.247a1dde.js";import{c as I,r as g,a as i,w as Q,b as v,k as S,j as M,x as N,n as L,g as j,_ as P,L as F,M as O,y as h,E as C,C as r,B as f,z as T,D as R,F as G,G as H,H as X,X as J,N as K}from"./index.1339cfb4.js";import{Q as U}from"./QList.c604e169.js";import{Q as W}from"./QPage.71c815f3.js";import{T as Y}from"./TouchPan.4745458f.js";import{u as Z,a as ee}from"./use-dark.8b5bedcd.js";import"./touch.3df10340.js";var te=I({name:"QSplitter",props:{...Z,modelValue:{type:Number,required:!0},reverse:Boolean,unit:{type:String,default:"%",validator:e=>["%","px"].includes(e)},limits:{type:Array,validator:e=>e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"?!1:e[0]>=0&&e[0]<=e[1]},emitImmediately:Boolean,horizontal:Boolean,disable:Boolean,beforeClass:[Array,String,Object],afterClass:[Array,String,Object],separatorClass:[Array,String,Object],separatorStyle:[Array,String,Object]},emits:["update:modelValue"],setup(e,{slots:l,emit:a}){const{proxy:{$q:_}}=j(),p=ee(e,_),u=g(null),d={before:g(null),after:g(null)},m=i(()=>`q-splitter no-wrap ${e.horizontal===!0?"q-splitter--horizontal column":"q-splitter--vertical row"} q-splitter--${e.disable===!0?"disabled":"workable"}`+(p.value===!0?" q-splitter--dark":"")),c=i(()=>e.horizontal===!0?"height":"width"),D=i(()=>e.reverse!==!0?"before":"after"),s=i(()=>e.limits!==void 0?e.limits:e.unit==="%"?[10,90]:[50,1/0]);function V(t){return(e.unit==="%"?t:Math.round(t))+e.unit}const q=i(()=>({[D.value]:{[c.value]:V(e.modelValue)}}));let B,b,x,z,o;function A(t){if(t.isFirst===!0){const y=u.value.getBoundingClientRect()[c.value];B=e.horizontal===!0?"up":"left",b=e.unit==="%"?100:y,x=Math.min(b,s.value[1],Math.max(s.value[0],e.modelValue)),z=(e.reverse!==!0?1:-1)*(e.horizontal===!0?1:_.lang.rtl===!0?-1:1)*(e.unit==="%"?y===0?0:100/y:1),u.value.classList.add("q-splitter--active");return}if(t.isFinal===!0){o!==e.modelValue&&a("update:modelValue",o),u.value.classList.remove("q-splitter--active");return}const n=x+z*(t.direction===B?-1:1)*t.distance[e.horizontal===!0?"y":"x"];o=Math.min(b,s.value[1],Math.max(s.value[0],n)),d[D.value].value.style[c.value]=V(o),e.emitImmediately===!0&&e.modelValue!==o&&a("update:modelValue",o)}const $=i(()=>[[Y,A,void 0,{[e.horizontal===!0?"vertical":"horizontal"]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function k(t,n){t<n[0]?a("update:modelValue",n[0]):t>n[1]&&a("update:modelValue",n[1])}return Q(()=>e.modelValue,t=>{k(t,s.value)}),Q(()=>e.limits,()=>{L(()=>{k(e.modelValue,s.value)})}),()=>{const t=[v("div",{ref:d.before,class:["q-splitter__panel q-splitter__before"+(e.reverse===!0?" col":""),e.beforeClass],style:q.value.before},S(l.before)),v("div",{class:["q-splitter__separator",e.separatorClass],style:e.separatorStyle,"aria-disabled":e.disable===!0?"true":void 0},[M("div",{class:"q-splitter__separator-area absolute-full"},S(l.separator),"sep",e.disable!==!0,()=>$.value)]),v("div",{ref:d.after,class:["q-splitter__panel q-splitter__after"+(e.reverse===!0?"":" col"),e.afterClass],style:q.value.after},S(l.after))];return v("div",{class:m.value,ref:u},N(l.default,t))}}});const ae={name:"AdminDashboard",data:()=>({items:[{label:"Navigation",name:"admin-navigation",path:"/admin/navigation"},{label:"Pages",name:"admin-pages",path:"/admin/pages"},{label:"Events",name:"admin-events",path:"/admin/events"},{label:"Photos",name:"admin-photos",path:"/admin/photos"},{label:"Contacts",name:"admin-contacts",path:"/admin/contacts"}]}),mounted(){const e=F();[{table:"pages",storeSection:"navigation",sortBy:"sort_order",sortDir:"ASC"},{table:"events",sortBy:"event_date",sortDir:"DESC"},{table:"photos",sortBy:"date_added",sortDir:"DESC"},{table:"albums",sortBy:"name",sortDir:"DESC"},{table:"contacts",sortBy:"date",sortDir:"DESC"}].forEach(a=>{e.getItems(a)})}};function re(e,l,a,_,p,u){const d=O("router-view");return h(),C(te,{"model-value":25},{before:r(()=>[f(U,{separator:"",bordered:""},{default:r(()=>[(h(!0),T(G,null,R(e.items,(m,c)=>(h(),C(E,{key:`admin-nav-item-${c}`,to:m.path,exact:""},{default:r(()=>[f(w,null,{default:r(()=>[H(X(m.label),1)]),_:2},1024),m.name==e.$route.name?(h(),C(w,{key:0,side:""},{default:r(()=>[f(J,{name:"chevron_right"})]),_:1})):K("",!0)]),_:2},1032,["to"]))),128))]),_:1})]),after:r(()=>[f(W,{style:{"max-height":"95vh","overflow-y":"scroll"}},{default:r(()=>[f(d)]),_:1})]),_:1})}var me=P(ae,[["render",re]]);export{me as default};
