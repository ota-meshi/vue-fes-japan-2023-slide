import{d as p,u,a as f,c as d,b as h,t as g,e as v,r as x,_ as y,f as n,g as t,h as a,F as b,i as N,n as k,o as l,j as P,k as V,l as w}from"./index-DhjlPoxv.js";import{N as S}from"./NoteDisplay-BJuo5Yj9.js";const j=p({__name:"PresenterPrint",setup(m,{expose:r}){r(),u(`
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
`),f({title:`Notes - ${d.title}`});const e={slidesWithNote:h(()=>x.map(s=>{var i;return(i=s.meta)==null?void 0:i.slide}).filter(s=>s!==void 0&&s.noteHTML!=="")),get configs(){return d},get themeVars(){return g},get total(){return v},NoteDisplay:S};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),D={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},W={class:"opacity-50"},B={class:"text-lg"},H={class:"font-bold flex gap-2"},z={class:"opacity-50"},C={key:0,class:"border-gray-400/50 mb-8"};function F(m,r,_,e,s,i){return l(),n("div",{id:"page-root",style:k(e.themeVars)},[t("div",D,[t("div",L,[t("h1",T,a(e.configs.title),1),t("div",W,a(new Date().toLocaleString()),1)]),(l(!0),n(b,null,N(e.slidesWithNote,(o,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",H,[t("div",z,a(o==null?void 0:o.no)+"/"+a(e.total),1),P(" "+a(o==null?void 0:o.title)+" ",1),r[0]||(r[0]=t("div",{class:"flex-auto"},null,-1))])]),V(e.NoteDisplay,{"note-html":o.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<e.slidesWithNote.length-1?(l(),n("hr",C)):w("v-if",!0)]))),128))])],4)}const E=y(j,[["render",F],["__file","/Users/runner/work/vue-fes-japan-2023-slide/vue-fes-japan-2023-slide/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
