import{Q as m}from"./QToolbarTitle.e4f14305.js";import{_ as f,K as u,y as i,z as v,B as t,C as s,A as a,F as h,L as p,G as c,H as n,Q as d,E as Q,N as b}from"./index.5b464ed1.js";import{Q as x}from"./QToolbar.0e0f5e67.js";import{Q as T}from"./QImg.5456387b.js";import{Q as o}from"./QCardSection.759b3643.js";import{Q as g}from"./QCard.7be98e3e.js";import{f as P}from"./index.58cc3f89.js";import{p as _,f as S}from"./index.6e3da59d.js";import"./use-dark.f185129e.js";const k={name:"EventPage",computed:{...u(p,["display","events"]),event(){return this.events?this.events.filter(({path:r})=>r==this.$route.fullPath).shift():{file_location:"",event_date:P(new Date,{representation:"date"}),start_time:null}},startTime(){if(!this.event)return null;const r=_(`${this.event.event_date} ${this.event.start_time||"00:00"}`),l=this.event.start_time?"PP p":"PP";return S(r,l)},upcoming(){return new Date<_(`${this.event.event_date} ${this.event.start_time||"00:00"}`)}}},w={class:"flex row q-mt-lg"},y={class:"col-12 col-md-6"},B={class:"col-12 col-md-6"},C={class:"text-subtitle1"},H={class:"text-subtitle1"},L=["innerHTML"],N={class:"text-h6"},V=["innerHTML"];function E(r,l,M,D,F,e){return i(),v(h,null,[t(x,{class:"justify-between"},{default:s(()=>[t(m,null,{default:s(()=>[c(n(e.event.name),1)]),_:1}),t(d,{icon:"arrow_back",round:"",to:"/events"})]),_:1}),a("div",w,[a("div",y,[t(T,{src:e.event.file_location},null,8,["src"])]),a("div",B,[t(g,{flat:""},{default:s(()=>[t(o,null,{default:s(()=>[a("div",C,n(e.startTime),1),a("div",H,n(e.event.location),1),a("div",{innerHTML:e.event.details},null,8,L)]),_:1}),t(o,null,{default:s(()=>[a("div",N,n(e.event.location),1),a("div",{innerHTML:e.event.map_embed},null,8,V)]),_:1}),e.upcoming?(i(),Q(o,{key:0,class:"flex justify-end"},{default:s(()=>[t(d,{href:e.event.fb_rsvp,target:"_blank"},{default:s(()=>[c(" Facebook RSVP ")]),_:1},8,["href"])]),_:1})):b("",!0)]),_:1})])])],64)}var J=f(k,[["render",E]]);export{J as default};