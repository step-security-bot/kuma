import{d as g,h as u,aI as b,Y as S,aJ as B,r as p,o as i,i as T,w as t,j as n,a6 as x,n as e,p as c,a7 as m,H as l,l as r,F as _,I as f,m as z}from"./index-bc0f9b6f.js";import{S as D}from"./StatusBadge-6c2080f6.js";import{_ as N}from"./SubscriptionList.vue_vue_type_script_setup_true_lang-aca63728.js";import"./AccordionList-6f284841.js";const $=["data-testid","innerHTML"],A={"data-testid":"detail-view-details",class:"stack"},H={class:"columns"},I={key:0},P=g({__name:"DetailView",props:{data:{},notifications:{default:()=>[]}},setup(h){const s=h,v=u(()=>b(s.data)),k=u(()=>S(s.data)),w=u(()=>B(s.data));return(L,Z)=>{const y=p("KCard"),C=p("AppView"),V=p("RouteView");return i(),T(V,{name:"zone-cp-detail-view"},{default:t(({t:a})=>[n(C,null,x({default:t(()=>{var o;return[e(),c("div",A,[n(y,null,{body:t(()=>[c("div",H,[n(m,null,{title:t(()=>[e(l(a("http.api.property.status")),1)]),body:t(()=>[n(D,{status:k.value},null,8,["status"])]),_:2},1024),e(),n(m,null,{title:t(()=>[e(l(a("http.api.property.type")),1)]),body:t(()=>[e(l(a(`common.product.environment.${v.value||"unknown"}`)),1)]),_:2},1024),e(),n(m,null,{title:t(()=>[e(l(a("zone-cps.routes.item.authentication_type")),1)]),body:t(()=>[e(l(w.value||a("common.not_applicable")),1)]),_:2},1024)])]),_:2},1024),e(),(i(!0),r(_,null,f([((o=s.data.zoneInsight)==null?void 0:o.subscriptions)??[]],d=>(i(),r(_,{key:d},[d.length>0?(i(),r("div",I,[c("h2",null,l(a("zone-cps.detail.subscriptions")),1),e(),n(y,{class:"mt-4"},{body:t(()=>[n(N,{subscriptions:d},null,8,["subscriptions"])]),_:2},1024)])):z("",!0)],64))),128))])]}),_:2},[s.notifications.length>0?{name:"notifications",fn:t(()=>[c("ul",null,[(i(!0),r(_,null,f(s.notifications,o=>(i(),r("li",{key:o.kind,"data-testid":`warning-${o.kind}`,innerHTML:a(`common.warnings.${o.kind}`,o.payload)},null,8,$))),128)),e()])]),key:"0"}:void 0]),1024)]),_:1})}}});export{P as default};