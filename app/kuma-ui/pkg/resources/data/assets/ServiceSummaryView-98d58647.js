import{d as F,l as $,u as I,a as y,o as t,b as m,w as e,e as r,p,f as s,q as a,t as i,c as _,a1 as h,s as w,F as A,W as D,y as M,z as N,a5 as P,_ as q}from"./index-287cffdc.js";import{_ as f}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-07e40817.js";import{E as C}from"./ErrorBlock-d2b1e8cd.js";import{_ as R}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-69adf9f8.js";import{_ as L}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-ff9814f9.js";import{S as Q}from"./StatusBadge-9d53f593.js";import{T as W}from"./TagList-c8b87d31.js";import{T as S}from"./TextWithCopyButton-270d741f.js";import"./index-fce48c05.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-0e3545a8.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-54dcc965.js";import"./CopyButton-c63b5581.js";import"./toYaml-4e00099e.js";const z=u=>(M("data-v-395f02c7"),u=u(),N(),u),K={class:"summary-title-wrapper"},j=z(()=>p("img",{"aria-hidden":"true",src:P},null,-1)),G={class:"summary-title"},H={key:1,class:"stack"},J={class:"mt-4"},O={key:0},U={key:3,class:"stack"},X={key:1,class:"stack"},Y={key:0},Z={class:"mt-4"},ee=F({__name:"ServiceSummaryView",props:{service:{default:void 0}},setup(u){const{t:o}=$(),V=I(),c=u;return(te,se)=>{const T=y("RouteTitle"),E=y("RouterLink"),g=y("DataSource"),b=y("AppView"),B=y("RouteView");return t(),m(B,{name:"service-summary-view",params:{mesh:"",service:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:e(({route:n})=>[r(b,null,{title:e(()=>[p("div",K,[j,s(),p("h2",G,[r(E,{to:{name:"service-detail-view",params:{service:n.params.service}}},{default:e(()=>[r(T,{title:a(o)("services.routes.item.title",{name:n.params.service})},null,8,["title"])]),_:2},1032,["to"])])])]),default:e(()=>{var k,x;return[s(),c.service===void 0?(t(),m(f,{key:0},{message:e(()=>[p("p",null,i(a(o)("common.collection.summary.empty_message",{type:"Service"})),1)]),default:e(()=>[s(i(a(o)("common.collection.summary.empty_title",{type:"Service"}))+" ",1)]),_:1})):(t(),_("div",H,[p("div",null,[p("h3",null,i(a(o)("services.routes.item.overview")),1),s(),p("div",J,[c.service.serviceType==="external"?(t(),_("div",O,[r(g,{src:`/meshes/${c.service.mesh}/external-services/for/${c.service.name}`},{default:e(({data:l,error:v})=>[v?(t(),m(C,{key:0,error:v},null,8,["error"])):l===void 0?(t(),m(R,{key:1})):l===null?(t(),m(f,{key:2,"data-testid":"no-matching-external-service"},{title:e(()=>[p("p",null,i(a(o)("services.detail.no_matching_external_service",{name:c.service.name})),1)]),_:1})):(t(),_("div",U,[r(h,null,{title:e(()=>[s(i(a(o)("http.api.property.address")),1)]),body:e(()=>[r(S,{text:l.networking.address},null,8,["text"])]),_:2},1024),s(),l.tags!==null?(t(),m(h,{key:0},{title:e(()=>[s(i(a(o)("http.api.property.tags")),1)]),body:e(()=>[r(W,{tags:l.tags},null,8,["tags"])]),_:2},1024)):w("",!0)]))]),_:1},8,["src"])])):(t(),_("div",X,[r(h,null,{title:e(()=>[s(i(a(o)("http.api.property.status")),1)]),body:e(()=>[r(Q,{status:c.service.status},null,8,["status"])]),_:1}),s(),r(h,null,{title:e(()=>[s(i(a(o)("http.api.property.address")),1)]),body:e(()=>[c.service.addressPort?(t(),m(S,{key:0,text:c.service.addressPort},null,8,["text"])):(t(),_(A,{key:1},[s(i(a(o)("common.detail.none")),1)],64))]),_:1}),s(),r(D,{online:((k=c.service.dataplanes)==null?void 0:k.online)??0,total:((x=c.service.dataplanes)==null?void 0:x.total)??0},{title:e(()=>[s(i(a(o)("http.api.property.dataPlaneProxies")),1)]),_:1},8,["online","total"])]))])]),s(),c.service.serviceType==="external"?(t(),_("div",Y,[p("h3",null,i(a(o)("services.routes.item.config")),1),s(),p("div",Z,[r(g,{src:`/meshes/${n.params.mesh}/external-services/for/${n.params.service}`},{default:e(({data:l,error:v})=>[v?(t(),m(C,{key:0,error:v},null,8,["error"])):l===void 0?(t(),m(R,{key:1})):l===null?(t(),m(f,{key:2,"data-testid":"no-matching-external-service"},{title:e(()=>[p("p",null,i(a(o)("services.detail.no_matching_external_service",{name:n.params.service})),1)]),_:2},1024)):(t(),m(L,{key:3,id:"code-block-service",resource:l,"resource-fetcher":d=>a(V).getExternalService({mesh:l.mesh,name:l.name},d),"is-searchable":"",query:n.params.codeSearch,"is-filter-mode":n.params.codeFilter==="true","is-reg-exp-mode":n.params.codeRegExp==="true",onQueryChange:d=>n.update({codeSearch:d}),onFilterModeChange:d=>n.update({codeFilter:d}),onRegExpModeChange:d=>n.update({codeRegExp:d})},null,8,["resource","resource-fetcher","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"]))]),_:2},1032,["src"])])])):w("",!0)]))]}),_:2},1024)]),_:1})}}});const ye=q(ee,[["__scopeId","data-v-395f02c7"]]);export{ye as default};
