import{Q as i}from"./QInput.5e205dea.js";import{_ as r,ag as n,y as m,E as p,C as o,L as u,A as l,B as t,Q as f,G as w}from"./index.5b464ed1.js";import{Q as c}from"./QForm.9ed165b2.js";import{Q as g}from"./QPage.9a77681b.js";import"./use-key-composition.146d2699.js";import"./use-dark.f185129e.js";import"./uid.42677368.js";const d=!1,h={name:"AdminSignIn",data:()=>({email:d?"castoware@gmail.com":"",password:d?"Q1IVdGlk]kOp=3tKW2o]":"",showPass:!1}),methods:{...n(u,["signIn"])}},v={class:"full-width text-white q-mt-md",style:{"max-width":"300px"}},V=l("div",{class:"text-h4"},"AlpacAdmin",-1),b={class:"flex justify-end q-mt-md"};function k(e,a,Q,y,I,x){return m(),p(g,{class:"flex justify-start q-pl-xl full-width",style:{"background-image":"url(/images/admin-alpaca.jpeg)","background-repeat":"no-repeat","background-position":"top right","background-size":"100vw 100vh","object-fit":"cover"}},{default:o(()=>[l("div",v,[V,t(c,null,{default:o(()=>[t(i,{type:"email",label:"E-Mail",modelValue:e.email,"onUpdate:modelValue":a[0]||(a[0]=s=>e.email=s),filled:"","label-color":"white","input-class":"text-white"},null,8,["modelValue"]),t(i,{type:e.showPass?"text":"password",label:"Password",modelValue:e.password,"onUpdate:modelValue":a[1]||(a[1]=s=>e.password=s),filled:"","label-color":"white","input-class":"text-white"},null,8,["type","modelValue"]),l("div",b,[t(f,{onClick:a[2]||(a[2]=s=>e.signIn({email:e.email,password:e.password},e.$router))},{default:o(()=>[w("Sign In")]),_:1})])]),_:1})])]),_:1})}var C=r(h,[["render",k]]);export{C as default};