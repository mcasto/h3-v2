import{Q as i}from"./QInput.4b62d974.js";import{_ as r,ag as n,y as m,E as p,C as o,L as u,A as l,B as t,Q as f,G as w}from"./index.1339cfb4.js";import{Q as c}from"./QForm.ca0c22e9.js";import{Q as g}from"./QPage.71c815f3.js";import"./use-key-composition.6fa8055c.js";import"./use-dark.8b5bedcd.js";import"./uid.42677368.js";const d=!1,h={name:"AdminSignIn",data:()=>({email:d?"castoware@gmail.com":"",password:d?"Q1IVdGlk]kOp=3tKW2o]":"",showPass:!1}),methods:{...n(u,["signIn"])}},v={class:"full-width text-white q-mt-md",style:{"max-width":"300px"}},V=l("div",{class:"text-h4"},"AlpacAdmin",-1),b={class:"flex justify-end q-mt-md"};function k(e,a,Q,y,I,x){return m(),p(g,{class:"flex justify-start q-pl-xl full-width",style:{"background-image":"url(/images/admin-alpaca.jpeg)","background-repeat":"no-repeat","background-position":"top right","background-size":"100vw 100vh","object-fit":"cover"}},{default:o(()=>[l("div",v,[V,t(c,null,{default:o(()=>[t(i,{type:"email",label:"E-Mail",modelValue:e.email,"onUpdate:modelValue":a[0]||(a[0]=s=>e.email=s),filled:"","label-color":"white","input-class":"text-white"},null,8,["modelValue"]),t(i,{type:e.showPass?"text":"password",label:"Password",modelValue:e.password,"onUpdate:modelValue":a[1]||(a[1]=s=>e.password=s),filled:"","label-color":"white","input-class":"text-white"},null,8,["type","modelValue"]),l("div",b,[t(f,{onClick:a[2]||(a[2]=s=>e.signIn({email:e.email,password:e.password},e.$router))},{default:o(()=>[w("Sign In")]),_:1})])]),_:1})])]),_:1})}var C=r(h,[["render",k]]);export{C as default};