import{d,u as _,a as u,c as m,b as p,r as h,o,e as n,f as t,t as a,g as l,F as f,h as v,n as g,i as x,j as y,k as b,l as k,m as N,_ as w}from"./index-7bd55ef2.js";import{N as P}from"./NoteDisplay-f35df2a9.js";const V={class:"m-4"},j={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},S={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=d({__name:"PresenterPrint",setup(F){_(`
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
`),u({title:`Notes - ${m.title}`});const i=p(()=>h.map(s=>{var r;return(r=s.meta)==null?void 0:r.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,r)=>(o(),n("div",{id:"page-root",style:g(l(x))},[t("div",V,[t("div",j,[t("h1",L,a(l(m).title),1),t("div",S,a(new Date().toLocaleString()),1)]),(o(!0),n(f,null,v(i.value,(e,c)=>(o(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",D,a(e==null?void 0:e.no)+"/"+a(l(y)),1),b(" "+a(e==null?void 0:e.title)+" ",1),H])]),k(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(o(),n("hr",z)):N("v-if",!0)]))),128))])],4))}}),E=w(C,[["__file","/Users/runner/work/vue-fes-japan-2023-slide/vue-fes-japan-2023-slide/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
