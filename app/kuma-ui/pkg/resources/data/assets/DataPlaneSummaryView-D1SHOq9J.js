import{d as K,a as p,o as r,b as c,w as t,e,W as N,f as a,t as o,m as l,c as u,F as g,C as f,n as S,P as d,p as k,R as L,S as $,K as E,q as m,T as w,_ as I}from"./index-cbxC5pCb.js";import{S as A}from"./StatusBadge-CKRlta2z.js";import{T}from"./TagList-DYUQddHu.js";const O={class:"stack"},U={class:"stack-with-borders"},F={class:"status-with-reason"},W={key:0},q={class:"mt-4"},G={class:"stack-with-borders"},Z={class:"mt-4 stack"},j={class:"mt-2 stack-with-borders"},H=K({__name:"DataPlaneSummaryView",props:{items:{}},setup(x){const b=x;return(J,M)=>{const C=p("RouteTitle"),z=p("RouterLink"),P=p("KTooltip"),y=p("DataCollection"),v=p("KBadge"),D=p("AppView"),R=p("RouteView");return r(),c(R,{name:"data-plane-summary-view",params:{dataPlane:""}},{default:t(({t:s,route:V})=>[e(y,{items:b.items,predicate:h=>h.id===V.params.dataPlane,find:!0},{empty:t(()=>[e(N,null,{title:t(()=>[a(o(s("common.collection.summary.empty_title",{type:"Data Plane Proxy"})),1)]),default:t(()=>[a(),l("p",null,o(s("common.collection.summary.empty_message",{type:"Data Plane Proxy"})),1)]),_:2},1024)]),default:t(({items:h})=>[(r(!0),u(g,null,f([h[0]],n=>(r(),c(D,{key:n.id},{title:t(()=>[l("h2",{class:S(`type-${n.dataplaneType}`)},[e(z,{to:{name:"data-plane-detail-view",params:{dataPlane:n.id}}},{default:t(()=>[e(C,{title:s("data-planes.routes.item.title",{name:n.name})},null,8,["title"])]),_:2},1032,["to"])],2)]),default:t(()=>[a(),l("div",O,[l("div",U,[e(d,{layout:"horizontal"},{title:t(()=>[a(o(s("http.api.property.status")),1)]),body:t(()=>[l("div",F,[e(A,{status:n.status},null,8,["status"]),a(),n.dataplaneType==="standard"?(r(),c(y,{key:0,items:n.dataplane.networking.inbounds,predicate:_=>!_.health.ready,empty:!1},{default:t(({items:_})=>[e(P,{class:"reason-tooltip",placement:"bottomEnd"},{content:t(()=>[l("ul",null,[(r(!0),u(g,null,f(_,i=>(r(),u("li",{key:`${i.service}:${i.port}`},o(s("data-planes.routes.item.unhealthy_inbound",{service:i.service,port:i.port})),1))),128))])]),default:t(()=>[e(k(L),{color:k($),size:k(E)},null,8,["color","size"]),a()]),_:2},1024)]),_:2},1032,["items","predicate"])):m("",!0)])]),_:2},1024),a(),e(d,{layout:"horizontal"},{title:t(()=>[a(`
                    Type
                  `)]),body:t(()=>[a(o(s(`data-planes.type.${n.dataplaneType}`)),1)]),_:2},1024),a(),n.namespace.length>0?(r(),c(d,{key:0,layout:"horizontal"},{title:t(()=>[a(o(s("data-planes.routes.item.namespace")),1)]),body:t(()=>[a(o(n.namespace),1)]),_:2},1024)):m("",!0),a(),e(d,{layout:"horizontal"},{title:t(()=>[a(o(s("data-planes.routes.item.last_updated")),1)]),body:t(()=>[a(o(s("common.formats.datetime",{value:Date.parse(n.modificationTime)})),1)]),_:2},1024)]),a(),n.dataplane.networking.gateway?(r(),u("div",W,[l("h3",null,o(s("data-planes.routes.item.gateway")),1),a(),l("div",q,[l("div",G,[e(d,{layout:"horizontal"},{title:t(()=>[a(o(s("http.api.property.tags")),1)]),body:t(()=>[e(T,{alignment:"right",tags:n.dataplane.networking.gateway.tags},null,8,["tags"])]),_:2},1024),a(),e(d,{layout:"horizontal"},{title:t(()=>[a(o(s("http.api.property.address")),1)]),body:t(()=>[e(w,{text:`${n.dataplane.networking.address}`},null,8,["text"])]),_:2},1024)])])])):m("",!0),a(),n.dataplaneType==="standard"?(r(),c(y,{key:1,items:n.dataplane.networking.inbounds},{default:t(({items:_})=>[l("div",null,[l("h3",null,o(s("data-planes.routes.item.inbounds")),1),a(),l("div",Z,[(r(!0),u(g,null,f(_,(i,B)=>(r(),u("div",{key:B,class:"inbound"},[l("h4",null,[e(w,{text:i.tags["kuma.io/service"]},{default:t(()=>[a(o(s("data-planes.routes.item.inbound_name",{service:i.tags["kuma.io/service"]})),1)]),_:2},1032,["text"])]),a(),l("div",j,[e(d,{layout:"horizontal"},{title:t(()=>[a(o(s("http.api.property.status")),1)]),body:t(()=>[i.health.ready?(r(),c(v,{key:0,appearance:"success"},{default:t(()=>[a(o(s("data-planes.routes.item.health.ready")),1)]),_:2},1024)):(r(),c(v,{key:1,appearance:"danger"},{default:t(()=>[a(o(s("data-planes.routes.item.health.not_ready")),1)]),_:2},1024))]),_:2},1024),a(),e(d,{layout:"horizontal"},{title:t(()=>[a(o(s("http.api.property.tags")),1)]),body:t(()=>[e(T,{alignment:"right",tags:i.tags},null,8,["tags"])]),_:2},1024),a(),e(d,{layout:"horizontal"},{title:t(()=>[a(o(s("http.api.property.address")),1)]),body:t(()=>[e(w,{text:i.addressPort},null,8,["text"])]),_:2},1024)])]))),128))])])]),_:2},1032,["items"])):m("",!0)])]),_:2},1024))),128))]),_:2},1032,["items","predicate"])]),_:1})}}}),tt=I(H,[["__scopeId","data-v-329864dd"]]);export{tt as default};