import{d as _,a4 as d,a5 as p,a6 as m,b as u,a7 as h,o,e as n,f as t,t as a,g as r,F as f,h as g,n as v,a8 as x,a9 as y,k as b,l as k,m as N,_ as P}from"./index-Be9o6lQk.js";import{N as w}from"./NoteDisplay-BnuKGKnj.js";const V={class:"m-4"},D={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},S={class:"opacity-50"},T={class:"text-lg"},z={class:"font-bold flex gap-2"},B={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),C={key:0,class:"border-gray-400/50 mb-8"},F=_({__name:"PresenterPrint",setup(M){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=u(()=>h.map(s=>{var l;return(l=s.meta)==null?void 0:l.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,l)=>(o(),n("div",{id:"page-root",style:v(r(x))},[t("div",V,[t("div",D,[t("h1",L,a(r(m).title),1),t("div",S,a(new Date().toLocaleString()),1)]),(o(!0),n(f,null,g(i.value,(e,c)=>(o(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",z,[t("div",B,a(e==null?void 0:e.no)+"/"+a(r(y)),1),b(" "+a(e==null?void 0:e.title)+" ",1),H])]),k(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(o(),n("hr",C)):N("v-if",!0)]))),128))])],4))}}),E=P(F,[["__file","/Users/mattiamanzati/Desktop/long-running-process/node_modules/.pnpm/@slidev+client@0.43.6_postcss@8.4.30_vite@4.4.9/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
