import{K as z}from"./index-FZCiQto1.js";import{d as C,a as i,o as l,b as r,w as e,e as a,m as h,f as o,t as _,F as V,c as b,Q as I,q as v,a1 as B,p as E,x as L,y as N,_ as R}from"./index-H9kuPi5I.js";import{A}from"./AppCollection-jO6goene.js";import{E as T}from"./ErrorBlock-dtRm8bS3.js";import{L as D}from"./LinkBox-VWGhjo2v.js";import{T as x}from"./TextWithCopyButton-WiPvXg9-.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-_XEV9lqg.js";import"./CopyButton-6xMoQ2pP.js";const K=m=>(L("data-v-4df4cfc0"),m=m(),N(),m),$=K(()=>h("b",null,"External",-1)),q=C({__name:"ExternalServiceListView",setup(m){return(F,O)=>{const k=i("RouteTitle"),c=i("RouterLink"),g=i("KCard"),y=i("AppView"),u=i("DataSource"),w=i("RouteView");return l(),r(u,{src:"/me"},{default:e(({data:f})=>[f?(l(),r(w,{key:0,name:"external-service-list-view",params:{page:1,size:f.pageSize,mesh:""}},{default:e(({can:S,route:t,t:p})=>[a(u,{src:`/meshes/${t.params.mesh}/external-services?page=${t.params.page}&size=${t.params.size}`},{default:e(({data:n,error:d})=>[a(y,null,B({title:e(()=>[h("h2",null,[a(k,{title:p("external-services.routes.items.title")},null,8,["title"])])]),default:e(()=>[o(),o(),a(g,null,{default:e(()=>[d!==void 0?(l(),r(T,{key:0,error:d},null,8,["error"])):(l(),r(A,{key:1,class:"external-service-collection","data-testid":"external-service-collection","empty-state-message":p("common.emptyState.message",{type:"Services"}),headers:[{label:"Name",key:"name"},{label:"Address",key:"address"},{label:"Details",key:"details",hideLabel:!0}],"page-number":t.params.page,"page-size":t.params.size,total:n==null?void 0:n.total,items:n==null?void 0:n.items,error:d,onChange:t.update},{name:e(({row:s})=>[a(x,{text:s.name},{default:e(()=>[a(c,{to:{name:"external-service-detail-view",params:{mesh:s.mesh,service:s.name},query:{page:t.params.page,size:t.params.size}}},{default:e(()=>[o(_(s.name),1)]),_:2},1032,["to"])]),_:2},1032,["text"])]),address:e(({row:s})=>[s.networking.address?(l(),r(x,{key:0,text:s.networking.address},null,8,["text"])):(l(),b(V,{key:1},[o(_(p("common.collection.none")),1)],64))]),details:e(({row:s})=>[a(c,{class:"details-link","data-testid":"details-link",to:{name:"external-service-detail-view",params:{mesh:s.mesh,service:s.name}}},{default:e(()=>[o(_(p("common.collection.details_link"))+" ",1),a(v(I),{display:"inline-block",decorative:"",size:v(z)},null,8,["size"])]),_:2},1032,["to"])]),_:2},1032,["empty-state-message","page-number","page-size","total","items","error","onChange"]))]),_:2},1024)]),_:2},[S("use gateways ui")?{name:"actions",fn:e(()=>[a(D,null,{default:e(()=>[a(c,{to:{name:"service-list-view",params:{mesh:t.params.mesh}}},{default:e(()=>[o(`
                Internal
              `)]),_:2},1032,["to"]),o(),a(c,{to:{name:"external-service-list-view",params:{mesh:t.params.mesh}}},{default:e(()=>[$]),_:2},1032,["to"])]),_:2},1024)]),key:"0"}:void 0]),1024)]),_:2},1032,["src"])]),_:2},1032,["params"])):E("",!0)]),_:1})}}}),M=R(q,[["__scopeId","data-v-4df4cfc0"]]);export{M as default};
