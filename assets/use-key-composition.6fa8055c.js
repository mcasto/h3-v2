import{i as re,w as A,d as Y,o as D,ai as ne,g as O,r as m,a as i,aj as ue,ah as ae,ak as ie,U as se,n as de,Z as fe,$ as ce,t as ve,b as a,ab as B,X as Q,P as pe,k as E,T as me,a1 as ge}from"./index.1339cfb4.js";import{u as be,a as he}from"./use-dark.8b5bedcd.js";import{u as Ce}from"./uid.42677368.js";function qe({validate:e,resetValidation:o,requiresQForm:l}){const r=re(ne,!1);if(r!==!1){const{props:c,proxy:s}=O();Object.assign(s,{validate:e,resetValidation:o}),A(()=>c.disable,n=>{n===!0?(typeof o=="function"&&o(),r.unbindComponent(s)):r.bindComponent(s)}),Y(()=>{c.disable!==!0&&r.bindComponent(s)}),D(()=>{c.disable!==!0&&r.unbindComponent(s)})}else l===!0&&console.error("Parent QForm not found on useFormChild()!")}const W=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,J=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,X=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,I=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,P=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,U={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>W.test(e),hexaColor:e=>J.test(e),hexOrHexaColor:e=>X.test(e),rgbColor:e=>I.test(e),rgbaColor:e=>P.test(e),rgbOrRgbaColor:e=>I.test(e)||P.test(e),hexOrRgbColor:e=>W.test(e)||I.test(e),hexaOrRgbaColor:e=>J.test(e)||P.test(e),anyColor:e=>X.test(e)||I.test(e)||P.test(e)},ye=[!0,!1,"ondemand"],_e={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>ye.includes(e)}};function xe(e,o){const{props:l,proxy:r}=O(),c=m(!1),s=m(null),n=m(null);qe({validate:C,resetValidation:x});let f=0,h;const V=i(()=>l.rules!==void 0&&l.rules!==null&&l.rules.length!==0),g=i(()=>l.disable!==!0&&V.value===!0),_=i(()=>l.error===!0||c.value===!0),T=i(()=>typeof l.errorMessage=="string"&&l.errorMessage.length!==0?l.errorMessage:s.value);A(()=>l.modelValue,()=>{k()}),A(()=>l.reactiveRules,b=>{b===!0?h===void 0&&(h=A(()=>l.rules,()=>{k(!0)})):h!==void 0&&(h(),h=void 0)},{immediate:!0}),A(e,b=>{b===!0?n.value===null&&(n.value=!1):n.value===!1&&(n.value=!0,g.value===!0&&l.lazyRules!=="ondemand"&&o.value===!1&&S())});function x(){f++,o.value=!1,n.value=null,c.value=!1,s.value=null,S.cancel()}function C(b=l.modelValue){if(g.value!==!0)return!0;const F=++f,M=o.value!==!0?()=>{n.value=!0}:()=>{},q=(d,v)=>{d===!0&&M(),c.value=d,s.value=v||null,o.value=!1},R=[];for(let d=0;d<l.rules.length;d++){const v=l.rules[d];let p;if(typeof v=="function"?p=v(b,U):typeof v=="string"&&U[v]!==void 0&&(p=U[v](b)),p===!1||typeof p=="string")return q(!0,p),!1;p!==!0&&p!==void 0&&R.push(p)}return R.length===0?(q(!1),!0):(o.value=!0,Promise.all(R).then(d=>{if(d===void 0||Array.isArray(d)===!1||d.length===0)return F===f&&q(!1),!0;const v=d.find(p=>p===!1||typeof p=="string");return F===f&&q(v!==void 0,v),v===void 0},d=>(F===f&&(console.error(d),q(!0)),!1)))}function k(b){g.value===!0&&l.lazyRules!=="ondemand"&&(n.value===!0||l.lazyRules!==!0&&b!==!0)&&S()}const S=ue(C,0);return D(()=>{h!==void 0&&h(),S.cancel()}),Object.assign(r,{resetValidation:x,validate:C}),ae(r,"hasError",()=>_.value),{isDirtyModel:n,hasRules:V,hasError:_,errorMessage:T,validate:C,resetValidation:x}}const G=/^on[A-Z]/;function Se(e,o){const l={listeners:m({}),attributes:m({})};function r(){const c={},s={};for(const n in e)n!=="class"&&n!=="style"&&G.test(n)===!1&&(c[n]=e[n]);for(const n in o.props)G.test(n)===!0&&(s[n]=o.props[n]);l.attributes.value=c,l.listeners.value=s}return ie(r),r(),l}let y=[],w=[];function ee(e){w=w.filter(o=>o!==e)}function Pe(e){ee(e),w.push(e)}function Oe(e){ee(e),w.length===0&&y.length!==0&&(y[y.length-1](),y=[])}function Fe(e){w.length===0?e():y.push(e)}function Re(e){y=y.filter(o=>o!==e)}function j(e){return e===void 0?`f_${Ce()}`:e}function Ae(e){return e!=null&&(""+e).length!==0}const Te={...be,..._e,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Me=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Ue(){const{props:e,attrs:o,proxy:l,vnode:r}=O();return{isDark:he(e,l.$q),editable:i(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:m(!1),focused:m(!1),hasPopupOpen:!1,splitAttrs:Se(o,r),targetUid:m(j(e.for)),rootRef:m(null),targetRef:m(null),controlRef:m(null)}}function je(e){const{props:o,emit:l,slots:r,attrs:c,proxy:s}=O(),{$q:n}=s;let f=null;e.hasValue===void 0&&(e.hasValue=i(()=>Ae(o.modelValue))),e.emitValue===void 0&&(e.emitValue=t=>{l("update:modelValue",t)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:z,onFocusout:H}),Object.assign(e,{clearValue:L,onControlFocusin:z,onControlFocusout:H,focus:v}),e.computedCounter===void 0&&(e.computedCounter=i(()=>{if(o.counter!==!1){const t=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,u=o.maxlength!==void 0?o.maxlength:o.maxValues;return t+(u!==void 0?" / "+u:"")}}));const{isDirtyModel:h,hasRules:V,hasError:g,errorMessage:_,resetValidation:T}=xe(e.focused,e.innerLoading),x=e.floatingLabel!==void 0?i(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):i(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),C=i(()=>o.bottomSlots===!0||o.hint!==void 0||V.value===!0||o.counter===!0||o.error!==null),k=i(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),S=i(()=>`q-field row no-wrap items-start q-field--${k.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(x.value===!0?" q-field--float":"")+(F.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(g.value===!0?" q-field--error":"")+(g.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&C.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),b=i(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(g.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length!==0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),F=i(()=>o.labelSlot===!0||o.label!==void 0),M=i(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&g.value!==!0?` text-${o.labelColor}`:"")),q=i(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:x.value,modelValue:o.modelValue,emitValue:e.emitValue})),R=i(()=>{const t={for:e.targetUid.value};return o.disable===!0?t["aria-disabled"]="true":o.readonly===!0&&(t["aria-readonly"]="true"),t});A(()=>o.for,t=>{e.targetUid.value=j(t)});function d(){const t=document.activeElement;let u=e.targetRef!==void 0&&e.targetRef.value;u&&(t===null||t.id!==e.targetUid.value)&&(u.hasAttribute("tabindex")===!0||(u=u.querySelector("[tabindex]")),u&&u!==t&&u.focus({preventScroll:!0}))}function v(){Fe(d)}function p(){Re(d);const t=document.activeElement;t!==null&&e.rootRef.value.contains(t)&&t.blur()}function z(t){f!==null&&(clearTimeout(f),f=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,l("focus",t))}function H(t,u){f!==null&&clearTimeout(f),f=setTimeout(()=>{f=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,l("blur",t)),u!==void 0&&u())})}function L(t){se(t),n.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),l("update:modelValue",null),l("clear",o.modelValue),de(()=>{T(),n.platform.is.mobile!==!0&&(h.value=!1)})}function oe(){const t=[];return r.prepend!==void 0&&t.push(a("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:B},r.prepend())),t.push(a("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},te())),g.value===!0&&o.noErrorIcon===!1&&t.push($("error",[a(Q,{name:n.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?t.push($("inner-loading-append",r.loading!==void 0?r.loading():[a(pe,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&t.push($("inner-clearable-append",[a(Q,{class:"q-field__focusable-action",tag:"button",name:o.clearIcon||n.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:L})])),r.append!==void 0&&t.push(a("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:B},r.append())),e.getInnerAppend!==void 0&&t.push($("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&t.push(e.getControlChild()),t}function te(){const t=[];return o.prefix!==void 0&&o.prefix!==null&&t.push(a("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&t.push(e.getShadowControl()),e.getControl!==void 0?t.push(e.getControl()):r.rawControl!==void 0?t.push(r.rawControl()):r.control!==void 0&&t.push(a("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},r.control(q.value))),F.value===!0&&t.push(a("div",{class:M.value},E(r.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&t.push(a("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),t.concat(E(r.default))}function le(){let t,u;g.value===!0?_.value!==null?(t=[a("div",{role:"alert"},_.value)],u=`q--slot-error-${_.value}`):(t=E(r.error),u="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(t=[a("div",o.hint)],u=`q--slot-hint-${o.hint}`):(t=E(r.hint),u="q--slot-hint"));const Z=o.counter===!0||r.counter!==void 0;if(o.hideBottomSpace===!0&&Z===!1&&t===void 0)return;const K=a("div",{key:u,class:"q-field__messages col"},t);return a("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:B},[o.hideBottomSpace===!0?K:a(me,{name:"q-transition--field-message"},()=>K),Z===!0?a("div",{class:"q-field__counter"},r.counter!==void 0?r.counter():e.computedCounter.value):null])}function $(t,u){return u===null?null:a("div",{key:t,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},u)}let N=!1;return fe(()=>{N=!0}),ce(()=>{N===!0&&o.autofocus===!0&&s.focus()}),Y(()=>{ve.value===!0&&o.for===void 0&&(e.targetUid.value=j()),o.autofocus===!0&&s.focus()}),D(()=>{f!==null&&clearTimeout(f)}),Object.assign(s,{focus:v,blur:p}),function(){const u=e.getControl===void 0&&r.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...R.value}:R.value;return a("label",{ref:e.rootRef,class:[S.value,c.class],style:c.style,...u},[r.before!==void 0?a("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:B},r.before()):null,a("div",{class:"q-field__inner relative-position col self-stretch"},[a("div",{ref:e.controlRef,class:b.value,tabindex:-1,...e.controlEvents},oe()),C.value===!0?le():null]),r.after!==void 0?a("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:B},r.after()):null])}}const De={name:String};function ze(e){return i(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function He(e={}){return(o,l,r)=>{o[l](a("input",{class:"hidden"+(r||""),...e.value}))}}function Le(e){return i(()=>e.name||e.for)}const Be=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,we=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Ve=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,ke=/[a-z0-9_ -]$/i;function Ne(e){return function(l){if(l.type==="compositionend"||l.type==="change"){if(l.target.qComposing!==!0)return;l.target.qComposing=!1,e(l)}else l.type==="compositionupdate"&&l.target.qComposing!==!0&&typeof l.data=="string"&&(ge.is.firefox===!0?ke.test(l.data)===!1:Be.test(l.data)===!0||we.test(l.data)===!0||Ve.test(l.data)===!0)===!0&&(l.target.qComposing=!0)}}export{De as a,Me as b,Le as c,Ue as d,je as e,Fe as f,Ae as g,Ne as h,Pe as i,Se as j,He as k,ze as l,Oe as r,Te as u};
