import{u as Ke,b as dt,e as ft,d as vt,a as Ft,c as Bt,g as it,h as Et}from"./use-key-composition.64f6e38b.js";import{c as je,cq as Rt,cr as Lt,a as m,j as Ht,b,X as Be,cs as Tt,S as Pt,U as ue,g as Qe,q as Dt,r as E,w as ge,aj as $t,bp as Nt,Z as Kt,$ as jt,o as mt,n as Z,ak as Qt,bu as Ut,ab as De,Y as Ae,V as Wt,ac as Se,W as Xt,x as Yt}from"./index.f8d1693d.js";import{u as Zt,a as Gt}from"./use-dark.5a72b96a.js";import{a as Jt,Q as el}from"./QItem.7f12b822.js";import{Q as tl}from"./QItemLabel.b218de4e.js";import{Q as ll}from"./QMenu.d22be749.js";import{Q as ul}from"./QDialog.530d53ff.js";import{r as Ne}from"./rtl.b51694b1.js";import{n as rt}from"./format.5b1c1e82.js";var nl=je({name:"QField",inheritAttrs:!1,props:Ke,emits:dt,setup(){return ft(vt())}});const ol={xs:8,sm:10,md:14,lg:20,xl:24};var al=je({name:"QChip",props:{...Zt,...Rt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:s,emit:i}){const{proxy:{$q:C}}=Qe(),M=Gt(e,C),a=Lt(e,ol),O=m(()=>e.selected===!0||e.icon!==void 0),w=m(()=>e.selected===!0?e.iconSelected||C.iconSet.chip.selected:e.icon),h=m(()=>e.iconRemove||C.iconSet.chip.remove),z=m(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),c=m(()=>{const y=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(y?` text-${y} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(z.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(M.value===!0?" q-chip--dark q-dark":"")}),k=m(()=>{const y=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},K={...y,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||C.lang.label.remove};return{chip:y,remove:K}});function p(y){y.keyCode===13&&g(y)}function g(y){e.disable||(i("update:selected",!e.selected),i("click",y))}function H(y){(y.keyCode===void 0||y.keyCode===13)&&(ue(y),e.disable===!1&&(i("update:modelValue",!1),i("remove")))}function F(){const y=[];z.value===!0&&y.push(b("div",{class:"q-focus-helper"})),O.value===!0&&y.push(b(Be,{class:"q-chip__icon q-chip__icon--left",name:w.value}));const K=e.label!==void 0?[b("div",{class:"ellipsis"},[e.label])]:void 0;return y.push(b("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Tt(s.default,K))),e.iconRight&&y.push(b(Be,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&y.push(b(Be,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:h.value,...k.value.remove,onClick:H,onKeyup:H})),y}return()=>{if(e.modelValue===!1)return;const y={class:c.value,style:a.value};return z.value===!0&&Object.assign(y,k.value.chip,{onClick:g,onKeyup:p}),Ht("div",y,F(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Pt,e.ripple]])}}});const j=1e3,il=["start","center","end","start-force","center-force","end-force"],St=Array.prototype.filter,rl=window.getComputedStyle(document.body).overflowAnchor===void 0?Dt:function(e,s){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const i=e.children||[];St.call(i,M=>M.dataset&&M.dataset.qVsAnchor!==void 0).forEach(M=>{delete M.dataset.qVsAnchor});const C=i[s];C&&C.dataset&&(C.dataset.qVsAnchor="")}))};function he(e,s){return e+s}function $e(e,s,i,C,M,a,O,w){const h=e===window?document.scrollingElement||document.documentElement:e,z=M===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-O-w,scrollMaxSize:0,offsetStart:-O,offsetEnd:-w};if(M===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=h.scrollLeft,c.scrollViewSize+=h.clientWidth),c.scrollMaxSize=h.scrollWidth,a===!0&&(c.scrollStart=(Ne===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=h.scrollTop,c.scrollViewSize+=h.clientHeight),c.scrollMaxSize=h.scrollHeight),i!==null)for(let k=i.previousElementSibling;k!==null;k=k.previousElementSibling)k.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=k[z]);if(C!==null)for(let k=C.nextElementSibling;k!==null;k=k.nextElementSibling)k.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=k[z]);if(s!==e){const k=h.getBoundingClientRect(),p=s.getBoundingClientRect();M===!0?(c.offsetStart+=p.left-k.left,c.offsetEnd-=p.width):(c.offsetStart+=p.top-k.top,c.offsetEnd-=p.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function ct(e,s,i,C){s==="end"&&(s=(e===window?document.body:e)[i===!0?"scrollWidth":"scrollHeight"]),e===window?i===!0?(C===!0&&(s=(Ne===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-s),window.scrollTo(s,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s):i===!0?(C===!0&&(s=(Ne===!0?e.scrollWidth-e.offsetWidth:0)-s),e.scrollLeft=s):e.scrollTop=s}function pe(e,s,i,C){if(i>=C)return 0;const M=s.length,a=Math.floor(i/j),O=Math.floor((C-1)/j)+1;let w=e.slice(a,O).reduce(he,0);return i%j!==0&&(w-=s.slice(a*j,i).reduce(he,0)),C%j!==0&&C!==M&&(w-=s.slice(C,O*j).reduce(he,0)),w}const gt={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},Cl=Object.keys(gt),cl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...gt};function sl({virtualScrollLength:e,getVirtualScrollTarget:s,getVirtualScrollEl:i,virtualScrollItemSizeComputed:C}){const M=Qe(),{props:a,emit:O,proxy:w}=M,{$q:h}=w;let z,c,k,p=[],g;const H=E(0),F=E(0),y=E({}),K=E(null),P=E(null),W=E(null),B=E({from:0,to:0}),_=m(()=>a.tableColspan!==void 0?a.tableColspan:100);C===void 0&&(C=m(()=>a.virtualScrollItemSize));const X=m(()=>C.value+";"+a.virtualScrollHorizontal),ye=m(()=>X.value+";"+a.virtualScrollSliceRatioBefore+";"+a.virtualScrollSliceRatioAfter);ge(ye,()=>{Y()}),ge(X,ne);function ne(){J(c,!0)}function be(n){J(n===void 0?c:n)}function G(n,r){const f=s();if(f==null||f.nodeType===8)return;const A=$e(f,i(),K.value,P.value,a.virtualScrollHorizontal,h.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd);k!==A.scrollViewSize&&Y(A.scrollViewSize),oe(f,A,Math.min(e.value-1,Math.max(0,parseInt(n,10)||0)),0,il.indexOf(r)>-1?r:c>-1&&n>c?"end":"start")}function Q(){const n=s();if(n==null||n.nodeType===8)return;const r=$e(n,i(),K.value,P.value,a.virtualScrollHorizontal,h.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd),f=e.value-1,A=r.scrollMaxSize-r.offsetStart-r.offsetEnd-F.value;if(z===r.scrollStart)return;if(r.scrollMaxSize<=0){oe(n,r,0,0);return}k!==r.scrollViewSize&&Y(r.scrollViewSize),we(B.value.from);const R=Math.floor(r.scrollMaxSize-Math.max(r.scrollViewSize,r.offsetEnd)-Math.min(g[f],r.scrollViewSize/2));if(R>0&&Math.ceil(r.scrollStart)>=R){oe(n,r,f,r.scrollMaxSize-r.offsetEnd-p.reduce(he,0));return}let V=0,v=r.scrollStart-r.offsetStart,L=v;if(v<=A&&v+r.scrollViewSize>=H.value)v-=H.value,V=B.value.from,L=v;else for(let S=0;v>=p[S]&&V<f;S++)v-=p[S],V+=j;for(;v>0&&V<f;)v-=g[V],v>-r.scrollViewSize?(V++,L=v):L=g[V]+v;oe(n,r,V,L)}function oe(n,r,f,A,R){const V=typeof R=="string"&&R.indexOf("-force")>-1,v=V===!0?R.replace("-force",""):R,L=v!==void 0?v:"start";let S=Math.max(0,f-y.value[L]),D=S+y.value.total;D>e.value&&(D=e.value,S=Math.max(0,D-y.value.total)),z=r.scrollStart;const ie=S!==B.value.from||D!==B.value.to;if(ie===!1&&v===void 0){Ce(f);return}const{activeElement:ke}=document,U=W.value;ie===!0&&U!==null&&U!==ke&&U.contains(ke)===!0&&(U.addEventListener("focusout",Ve),setTimeout(()=>{U!==null&&U.removeEventListener("focusout",Ve)})),rl(U,f-S);const Ie=v!==void 0?g.slice(S,f).reduce(he,0):0;if(ie===!0){const ee=D>=B.value.from&&S<=B.value.to?B.value.to:D;B.value={from:S,to:ee},H.value=pe(p,g,0,S),F.value=pe(p,g,D,e.value),requestAnimationFrame(()=>{B.value.to!==D&&z===r.scrollStart&&(B.value={from:B.value.from,to:D},F.value=pe(p,g,D,e.value))})}requestAnimationFrame(()=>{if(z!==r.scrollStart)return;ie===!0&&we(S);const ee=g.slice(S,f).reduce(he,0),re=ee+r.offsetStart+H.value,Me=re+g[f];let xe=re+A;if(v!==void 0){const Ee=ee-Ie,$=r.scrollStart+Ee;xe=V!==!0&&$<re&&Me<$+r.scrollViewSize?$:v==="end"?Me-r.scrollViewSize:re-(v==="start"?0:Math.round((r.scrollViewSize-g[f])/2))}z=xe,ct(n,xe,a.virtualScrollHorizontal,h.lang.rtl),Ce(f)})}function we(n){const r=W.value;if(r){const f=St.call(r.children,S=>S.classList&&S.classList.contains("q-virtual-scroll--skip")===!1),A=f.length,R=a.virtualScrollHorizontal===!0?S=>S.getBoundingClientRect().width:S=>S.offsetHeight;let V=n,v,L;for(let S=0;S<A;){for(v=R(f[S]),S++;S<A&&f[S].classList.contains("q-virtual-scroll--with-prev")===!0;)v+=R(f[S]),S++;L=v-g[V],L!==0&&(g[V]+=L,p[Math.floor(V/j)]+=L),V++}}}function Ve(){W.value!==null&&W.value!==void 0&&W.value.focus()}function J(n,r){const f=1*C.value;(r===!0||Array.isArray(g)===!1)&&(g=[]);const A=g.length;g.length=e.value;for(let V=e.value-1;V>=A;V--)g[V]=f;const R=Math.floor((e.value-1)/j);p=[];for(let V=0;V<=R;V++){let v=0;const L=Math.min((V+1)*j,e.value);for(let S=V*j;S<L;S++)v+=g[S];p.push(v)}c=-1,z=void 0,H.value=pe(p,g,0,B.value.from),F.value=pe(p,g,B.value.to,e.value),n>=0?(we(B.value.from),Z(()=>{G(n)})):ae()}function Y(n){if(n===void 0&&typeof window!="undefined"){const v=s();v!=null&&v.nodeType!==8&&(n=$e(v,i(),K.value,P.value,a.virtualScrollHorizontal,h.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd).scrollViewSize)}k=n;const r=parseFloat(a.virtualScrollSliceRatioBefore)||0,f=parseFloat(a.virtualScrollSliceRatioAfter)||0,A=1+r+f,R=n===void 0||n<=0?1:Math.ceil(n/C.value),V=Math.max(1,R,Math.ceil((a.virtualScrollSliceSize>0?a.virtualScrollSliceSize:10)/A));y.value={total:Math.ceil(V*A),start:Math.ceil(V*r),center:Math.ceil(V*(.5+r)),end:Math.ceil(V*(1+r)),view:R}}function ze(n,r){const f=a.virtualScrollHorizontal===!0?"width":"height",A={["--q-virtual-scroll-item-"+f]:C.value+"px"};return[n==="tbody"?b(n,{class:"q-virtual-scroll__padding",key:"before",ref:K},[b("tr",[b("td",{style:{[f]:`${H.value}px`,...A},colspan:_.value})])]):b(n,{class:"q-virtual-scroll__padding",key:"before",ref:K,style:{[f]:`${H.value}px`,...A}}),b(n,{class:"q-virtual-scroll__content",key:"content",ref:W,tabindex:-1},r.flat()),n==="tbody"?b(n,{class:"q-virtual-scroll__padding",key:"after",ref:P},[b("tr",[b("td",{style:{[f]:`${F.value}px`,...A},colspan:_.value})])]):b(n,{class:"q-virtual-scroll__padding",key:"after",ref:P,style:{[f]:`${F.value}px`,...A}})]}function Ce(n){c!==n&&(a.onVirtualScroll!==void 0&&O("virtualScroll",{index:n,from:B.value.from,to:B.value.to-1,direction:n<c?"decrease":"increase",ref:w}),c=n)}Y();const ae=$t(Q,h.platform.is.ios===!0?120:35);Nt(()=>{Y()});let o=!1;return Kt(()=>{o=!0}),jt(()=>{if(o!==!0)return;const n=s();z!==void 0&&n!==void 0&&n!==null&&n.nodeType!==8?ct(n,z,a.virtualScrollHorizontal,h.lang.rtl):G(c)}),mt(()=>{ae.cancel()}),Object.assign(w,{scrollTo:G,reset:ne,refresh:be}),{virtualScrollSliceRange:B,virtualScrollSliceSizeComputed:y,setVirtualScrollSize:Y,onVirtualScrollEvt:ae,localResetVirtualScroll:J,padVirtualScroll:ze,scrollTo:G,reset:ne,refresh:be}}const st=e=>["add","add-unique","toggle"].includes(e),dl=".*+?^${}()|[]\\",fl=Object.keys(Ke);var kl=je({name:"QSelect",inheritAttrs:!1,props:{...cl,...Ft,...Ke,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:st},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...dt,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:s,emit:i}){const{proxy:C}=Qe(),{$q:M}=C,a=E(!1),O=E(!1),w=E(-1),h=E(""),z=E(!1),c=E(!1);let k=null,p,g,H,F=null,y,K,P,W;const B=E(null),_=E(null),X=E(null),ye=E(null),ne=E(null),be=Bt(e),G=Et(lt),Q=m(()=>Array.isArray(e.options)?e.options.length:0),oe=m(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:we,virtualScrollSliceSizeComputed:Ve,localResetVirtualScroll:J,padVirtualScroll:Y,onVirtualScrollEvt:ze,scrollTo:Ce,setVirtualScrollSize:ae}=sl({virtualScrollLength:Q,getVirtualScrollTarget:wt,getVirtualScrollEl:et,virtualScrollItemSizeComputed:oe}),o=vt(),n=m(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,u=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const l=e.mapOptions===!0&&p!==void 0?p:[],d=u.map(q=>bt(q,l));return e.modelValue===null&&t===!0?d.filter(q=>q!==null):d}return u}),r=m(()=>{const t={};return fl.forEach(u=>{const l=e[u];l!==void 0&&(t[u]=l)}),t}),f=m(()=>e.optionsDark===null?o.isDark.value:e.optionsDark),A=m(()=>it(n.value)),R=m(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||n.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),V=m(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),v=m(()=>Q.value===0),L=m(()=>n.value.map(t=>N.value(t)).join(", ")),S=m(()=>e.displayValue!==void 0?e.displayValue:L.value),D=m(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ie=m(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||n.value.some(D.value))),ke=m(()=>o.focused.value===!0?e.tabindex:-1),U=m(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":a.value===!0?"true":"false","aria-controls":`${o.targetUid.value}_lb`};return w.value>=0&&(t["aria-activedescendant"]=`${o.targetUid.value}_${w.value}`),t}),Ie=m(()=>({id:`${o.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),ee=m(()=>n.value.map((t,u)=>({index:u,opt:t,html:D.value(t),selected:!0,removeAtIndex:yt,toggleOption:te,tabindex:ke.value}))),re=m(()=>{if(Q.value===0)return[];const{from:t,to:u}=we.value;return e.options.slice(t,u).map((l,d)=>{const q=ce.value(l)===!0,x=t+d,I={clickable:!0,active:!1,activeClass:Ee.value,manualFocus:!0,focused:!1,disable:q,tabindex:-1,dense:e.optionsDense,dark:f.value,role:"option",id:`${o.targetUid.value}_${x}`,onClick:()=>{te(l)}};return q!==!0&&(He(l)===!0&&(I.active=!0),w.value===x&&(I.focused=!0),I["aria-selected"]=I.active===!0?"true":"false",M.platform.is.desktop===!0&&(I.onMousemove=()=>{a.value===!0&&se(x)})),{index:x,opt:l,html:D.value(l),label:N.value(l),selected:I.active,focused:I.focused,toggleOption:te,setOptionIndex:se,itemProps:I}})}),Me=m(()=>e.dropdownIcon!==void 0?e.dropdownIcon:M.iconSet.arrow.dropdown),xe=m(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ee=m(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),$=m(()=>Le(e.optionValue,"value")),N=m(()=>Le(e.optionLabel,"label")),ce=m(()=>Le(e.optionDisable,"disable")),_e=m(()=>n.value.map(t=>$.value(t))),ht=m(()=>{const t={onInput:lt,onChange:G,onKeydown:Je,onKeyup:Ze,onKeypress:Ge,onFocus:Xe,onClick(u){g===!0&&Se(u)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=G,t});ge(n,t=>{p=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&o.innerLoading.value!==!0&&(O.value!==!0&&a.value!==!0||A.value!==!0)&&(H!==!0&&me(),(O.value===!0||a.value===!0)&&de(""))},{immediate:!0}),ge(()=>e.fillInput,me),ge(a,Te),ge(Q,Ot);function Ue(t){return e.emitValue===!0?$.value(t):t}function Re(t){if(t>-1&&t<n.value.length)if(e.multiple===!0){const u=e.modelValue.slice();i("remove",{index:t,value:u.splice(t,1)[0]}),i("update:modelValue",u)}else i("update:modelValue",null)}function yt(t){Re(t),o.focus()}function We(t,u){const l=Ue(t);if(e.multiple!==!0){e.fillInput===!0&&qe(N.value(t),!0,!0),i("update:modelValue",l);return}if(n.value.length===0){i("add",{index:0,value:l}),i("update:modelValue",e.multiple===!0?[l]:l);return}if(u===!0&&He(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const d=e.modelValue.slice();i("add",{index:d.length,value:l}),d.push(l),i("update:modelValue",d)}function te(t,u){if(o.editable.value!==!0||t===void 0||ce.value(t)===!0)return;const l=$.value(t);if(e.multiple!==!0){u!==!0&&(qe(e.fillInput===!0?N.value(t):"",!0,!0),le()),_.value!==null&&_.value.focus(),(n.value.length===0||Ae($.value(n.value[0]),l)!==!0)&&i("update:modelValue",e.emitValue===!0?l:t);return}if((g!==!0||z.value===!0)&&o.focus(),Xe(),n.value.length===0){const x=e.emitValue===!0?l:t;i("add",{index:0,value:x}),i("update:modelValue",e.multiple===!0?[x]:x);return}const d=e.modelValue.slice(),q=_e.value.findIndex(x=>Ae(x,l));if(q>-1)i("remove",{index:q,value:d.splice(q,1)[0]});else{if(e.maxValues!==void 0&&d.length>=e.maxValues)return;const x=e.emitValue===!0?l:t;i("add",{index:d.length,value:x}),d.push(x)}i("update:modelValue",d)}function se(t){if(M.platform.is.desktop!==!0)return;const u=t>-1&&t<Q.value?t:-1;w.value!==u&&(w.value=u)}function Oe(t=1,u){if(a.value===!0){let l=w.value;do l=rt(l+t,-1,Q.value-1);while(l!==-1&&l!==w.value&&ce.value(e.options[l])===!0);w.value!==l&&(se(l),Ce(l),u!==!0&&e.useInput===!0&&e.fillInput===!0&&Fe(l>=0?N.value(e.options[l]):y))}}function bt(t,u){const l=d=>Ae($.value(d),t);return e.options.find(l)||u.find(l)||t}function Le(t,u){const l=t!==void 0?t:u;return typeof l=="function"?l:d=>d!==null&&typeof d=="object"&&l in d?d[l]:d}function He(t){const u=$.value(t);return _e.value.find(l=>Ae(l,u))!==void 0}function Xe(t){e.useInput===!0&&_.value!==null&&(t===void 0||_.value===t.target&&t.target.value===L.value)&&_.value.select()}function Ye(t){Wt(t,27)===!0&&a.value===!0&&(Se(t),le(),me()),i("keyup",t)}function Ze(t){const{value:u}=t.target;if(t.keyCode!==void 0){Ye(t);return}if(t.target.value="",k!==null&&(clearTimeout(k),k=null),me(),typeof u=="string"&&u.length!==0){const l=u.toLocaleLowerCase(),d=x=>{const I=e.options.find(T=>x.value(T).toLocaleLowerCase()===l);return I===void 0?!1:(n.value.indexOf(I)===-1?te(I):le(),!0)},q=x=>{d($)!==!0&&(d(N)===!0||x===!0||de(u,!0,()=>q(!0)))};q()}else o.clearValue(t)}function Ge(t){i("keypress",t)}function Je(t){if(i("keydown",t),Xt(t)===!0)return;const u=h.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),l=t.shiftKey!==!0&&e.multiple!==!0&&(w.value>-1||u===!0);if(t.keyCode===27){De(t);return}if(t.keyCode===9&&l===!1){fe();return}if(t.target===void 0||t.target.id!==o.targetUid.value||o.editable.value!==!0)return;if(t.keyCode===40&&o.innerLoading.value!==!0&&a.value===!1){ue(t),ve();return}if(t.keyCode===8&&e.hideSelected!==!0&&h.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Re(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&i("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof h.value!="string"||h.value.length===0)&&(ue(t),w.value=-1,Oe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&Ve.value!==void 0&&(ue(t),w.value=Math.max(-1,Math.min(Q.value,w.value+(t.keyCode===33?-1:1)*Ve.value.view)),Oe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ue(t),Oe(t.keyCode===38?-1:1,e.multiple));const d=Q.value;if((P===void 0||W<Date.now())&&(P=""),d>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||P.length!==0)){a.value!==!0&&ve(t);const q=t.key.toLocaleLowerCase(),x=P.length===1&&P[0]===q;W=Date.now()+1500,x===!1&&(ue(t),P+=q);const I=new RegExp("^"+P.split("").map(Pe=>dl.indexOf(Pe)>-1?"\\"+Pe:Pe).join(".*"),"i");let T=w.value;if(x===!0||T<0||I.test(N.value(e.options[T]))!==!0)do T=rt(T+1,-1,d-1);while(T!==w.value&&(ce.value(e.options[T])===!0||I.test(N.value(e.options[T]))!==!0));w.value!==T&&Z(()=>{se(T),Ce(T),T>=0&&e.useInput===!0&&e.fillInput===!0&&Fe(N.value(e.options[T]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||P!=="")&&(t.keyCode!==9||l===!1))){if(t.keyCode!==9&&ue(t),w.value>-1&&w.value<d){te(e.options[w.value]);return}if(u===!0){const q=(x,I)=>{if(I){if(st(I)!==!0)return}else I=e.newValueMode;if(qe("",e.multiple!==!0,!0),x==null)return;(I==="toggle"?te:We)(x,I==="add-unique"),e.multiple!==!0&&(_.value!==null&&_.value.focus(),le())};if(e.onNewValue!==void 0?i("newValue",h.value,q):q(h.value),e.multiple!==!0)return}a.value===!0?fe():o.innerLoading.value!==!0&&ve()}}function et(){return g===!0?ne.value:X.value!==null&&X.value.contentEl!==null?X.value.contentEl:void 0}function wt(){return et()}function Vt(){return e.hideSelected===!0?[]:s["selected-item"]!==void 0?ee.value.map(t=>s["selected-item"](t)).slice():s.selected!==void 0?[].concat(s.selected()):e.useChips===!0?ee.value.map((t,u)=>b(al,{key:"option-"+u,removable:o.editable.value===!0&&ce.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:ke.value,onRemove(){t.removeAtIndex(u)}},()=>b("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:N.value(t.opt)}))):[b("span",{[ie.value===!0?"innerHTML":"textContent"]:S.value})]}function tt(){if(v.value===!0)return s["no-option"]!==void 0?s["no-option"]({inputValue:h.value}):void 0;const t=s.option!==void 0?s.option:l=>b(el,{key:l.index,...l.itemProps},()=>b(Jt,()=>b(tl,()=>b("span",{[l.html===!0?"innerHTML":"textContent"]:l.label}))));let u=Y("div",re.value.map(t));return s["before-options"]!==void 0&&(u=s["before-options"]().concat(u)),Yt(s["after-options"],u)}function Ct(t,u){const l=u===!0?{...U.value,...o.splitAttrs.attributes.value}:void 0,d={ref:u===!0?_:void 0,key:"i_t",class:R.value,style:e.inputStyle,value:h.value!==void 0?h.value:"",type:"search",...l,id:u===!0?o.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...ht.value};return t!==!0&&g===!0&&(Array.isArray(d.class)===!0?d.class=[...d.class,"no-pointer-events"]:d.class+=" no-pointer-events"),b("input",d)}function lt(t){k!==null&&(clearTimeout(k),k=null),!(t&&t.target&&t.target.qComposing===!0)&&(Fe(t.target.value||""),H=!0,y=h.value,o.focused.value!==!0&&(g!==!0||z.value===!0)&&o.focus(),e.onFilter!==void 0&&(k=setTimeout(()=>{k=null,de(h.value)},e.inputDebounce)))}function Fe(t){h.value!==t&&(h.value=t,i("inputValue",t))}function qe(t,u,l){H=l!==!0,e.useInput===!0&&(Fe(t),(u===!0||l!==!0)&&(y=t),u!==!0&&de(t))}function de(t,u,l){if(e.onFilter===void 0||u!==!0&&o.focused.value!==!0)return;o.innerLoading.value===!0?i("filterAbort"):(o.innerLoading.value=!0,c.value=!0),t!==""&&e.multiple!==!0&&n.value.length!==0&&H!==!0&&t===N.value(n.value[0])&&(t="");const d=setTimeout(()=>{a.value===!0&&(a.value=!1)},10);F!==null&&clearTimeout(F),F=d,i("filter",t,(q,x)=>{(u===!0||o.focused.value===!0)&&F===d&&(clearTimeout(F),typeof q=="function"&&q(),c.value=!1,Z(()=>{o.innerLoading.value=!1,o.editable.value===!0&&(u===!0?a.value===!0&&le():a.value===!0?Te(!0):a.value=!0),typeof x=="function"&&Z(()=>{x(C)}),typeof l=="function"&&Z(()=>{l(C)})}))},()=>{o.focused.value===!0&&F===d&&(clearTimeout(F),o.innerLoading.value=!1,c.value=!1),a.value===!0&&(a.value=!1)})}function kt(){return b(ll,{ref:X,class:V.value,style:e.popupContentStyle,modelValue:a.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&v.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:f.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:xe.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...Ie.value,onScrollPassive:ze,onBeforeShow:nt,onBeforeHide:xt,onShow:qt},tt)}function xt(t){ot(t),fe()}function qt(){ae()}function At(t){Se(t),_.value!==null&&_.value.focus(),z.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function pt(t){Se(t),Z(()=>{z.value=!1})}function zt(){const t=[b(nl,{class:`col-auto ${o.fieldClass.value}`,...r.value,for:o.targetUid.value,dark:f.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:h.value.length!==0,...o.splitAttrs.listeners.value,onFocus:At,onBlur:pt},{...s,rawControl:()=>o.getControl(!0),before:void 0,after:void 0})];return a.value===!0&&t.push(b("div",{ref:ne,class:V.value+" scroll",style:e.popupContentStyle,...Ie.value,onClick:De,onScrollPassive:ze},tt())),b(ul,{ref:ye,modelValue:O.value,position:e.useInput===!0?"top":void 0,transitionShow:K,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:nt,onBeforeHide:It,onHide:Mt,onShow:_t},()=>b("div",{class:"q-select__dialog"+(f.value===!0?" q-select__dialog--dark q-dark":"")+(z.value===!0?" q-select__dialog--focused":"")},t))}function It(t){ot(t),ye.value!==null&&ye.value.__updateRefocusTarget(o.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),o.focused.value=!1}function Mt(t){le(),o.focused.value===!1&&i("blur",t),me()}function _t(){const t=document.activeElement;(t===null||t.id!==o.targetUid.value)&&_.value!==null&&_.value!==t&&_.value.focus(),ae()}function fe(){O.value!==!0&&(w.value=-1,a.value===!0&&(a.value=!1),o.focused.value===!1&&(F!==null&&(clearTimeout(F),F=null),o.innerLoading.value===!0&&(i("filterAbort"),o.innerLoading.value=!1,c.value=!1)))}function ve(t){o.editable.value===!0&&(g===!0?(o.onControlFocusin(t),O.value=!0,Z(()=>{o.focus()})):o.focus(),e.onFilter!==void 0?de(h.value):(v.value!==!0||s["no-option"]!==void 0)&&(a.value=!0))}function le(){O.value=!1,fe()}function me(){e.useInput===!0&&qe(e.multiple!==!0&&e.fillInput===!0&&n.value.length!==0&&N.value(n.value[0])||"",!0,!0)}function Te(t){let u=-1;if(t===!0){if(n.value.length!==0){const l=$.value(n.value[0]);u=e.options.findIndex(d=>Ae($.value(d),l))}J(u)}se(u)}function Ot(t,u){a.value===!0&&o.innerLoading.value===!1&&(J(-1,!0),Z(()=>{a.value===!0&&o.innerLoading.value===!1&&(t>u?J():Te(!0))}))}function ut(){O.value===!1&&X.value!==null&&X.value.updatePosition()}function nt(t){t!==void 0&&Se(t),i("popupShow",t),o.hasPopupOpen=!0,o.onControlFocusin(t)}function ot(t){t!==void 0&&Se(t),i("popupHide",t),o.hasPopupOpen=!1,o.onControlFocusout(t)}function at(){g=M.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?s["no-option"]!==void 0||e.onFilter!==void 0||v.value===!1:!0),K=M.platform.is.ios===!0&&g===!0&&e.useInput===!0?"fade":e.transitionShow}return Qt(at),Ut(ut),at(),mt(()=>{k!==null&&clearTimeout(k)}),Object.assign(C,{showPopup:ve,hidePopup:le,removeAtIndex:Re,add:We,toggleOption:te,getOptionIndex:()=>w.value,setOptionIndex:se,moveOptionSelection:Oe,filter:de,updateMenuPosition:ut,updateInputValue:qe,isOptionSelected:He,getEmittingOptionValue:Ue,isOptionDisabled:(...t)=>ce.value.apply(null,t)===!0,getOptionValue:(...t)=>$.value.apply(null,t),getOptionLabel:(...t)=>N.value.apply(null,t)}),Object.assign(o,{innerValue:n,fieldClass:m(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:B,targetRef:_,hasValue:A,showPopup:ve,floatingLabel:m(()=>e.hideSelected!==!0&&A.value===!0||typeof h.value=="number"||h.value.length!==0||it(e.displayValue)),getControlChild:()=>{if(o.editable.value!==!1&&(O.value===!0||v.value!==!0||s["no-option"]!==void 0))return g===!0?zt():kt();o.hasPopupOpen===!0&&(o.hasPopupOpen=!1)},controlEvents:{onFocusin(t){o.onControlFocusin(t)},onFocusout(t){o.onControlFocusout(t,()=>{me(),fe()})},onClick(t){if(De(t),g!==!0&&a.value===!0){fe(),_.value!==null&&_.value.focus();return}ve(t)}},getControl:t=>{const u=Vt(),l=t===!0||O.value!==!0||g!==!0;if(e.useInput===!0)u.push(Ct(t,l));else if(o.editable.value===!0){const q=l===!0?U.value:void 0;u.push(b("input",{ref:l===!0?_:void 0,key:"d_t",class:"q-select__focus-target",id:l===!0?o.targetUid.value:void 0,value:S.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...q,onKeydown:Je,onKeyup:Ye,onKeypress:Ge})),l===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&u.push(b("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ze}))}if(be.value!==void 0&&e.disable!==!0&&_e.value.length!==0){const q=_e.value.map(x=>b("option",{value:x,selected:!0}));u.push(b("select",{class:"hidden",name:be.value,multiple:e.multiple},q))}const d=e.useInput===!0||l!==!0?void 0:o.splitAttrs.attributes.value;return b("div",{class:"q-field__native row items-center",...d,...o.splitAttrs.listeners.value},u)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[b(Be,{class:"q-select__dropdown-icon"+(a.value===!0?" rotate-180":""),name:Me.value})]:null}),ft(o)}});export{kl as Q,sl as a,Cl as c,cl as u};