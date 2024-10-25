import{d as A,e as d,o as r,m as c,w as t,a,k as l,t as o,b as e,c as u,H as g,J as k,n as K,Y as p,S as L,l as f,a1 as X,K as E,p as m,a0 as v,q as I}from"./index-DpAqRYT5.js";import{q as O}from"./kong-icons.es676-DS3Pu575.js";import{T as z}from"./TagList-BgX3qtz-.js";const U={class:"stack"},q={class:"stack-with-borders"},Z={class:"status-with-reason"},F={key:0},G={class:"mt-4"},H={class:"stack-with-borders"},J={class:"mt-4 stack"},Y={class:"mt-2 stack-with-borders"},j=A({__name:"DataPlaneSummaryView",props:{items:{}},setup(T){const x=T;return(M,Q)=>{const b=d("XEmptyState"),C=d("RouteTitle"),R=d("RouterLink"),D=d("KTooltip"),y=d("DataCollection"),P=d("XAction"),w=d("XBadge"),V=d("AppView"),B=d("RouteView");return r(),c(B,{name:"data-plane-summary-view",params:{dataPlane:""}},{default:t(({t:s,route:S,can:$})=>[a(y,{items:x.items,predicate:h=>h.id===S.params.dataPlane,find:!0},{empty:t(()=>[a(b,null,{title:t(()=>[l("h2",null,o(s("common.collection.summary.empty_title",{type:"Data Plane Proxy"})),1)]),default:t(()=>[e(),l("p",null,o(s("common.collection.summary.empty_message",{type:"Data Plane Proxy"})),1)]),_:2},1024)]),default:t(({items:h})=>[(r(!0),u(g,null,k([h[0]],n=>(r(),c(V,{key:n.id},{title:t(()=>[l("h2",{class:K(`type-${n.dataplaneType}`)},[a(R,{to:{name:"data-plane-detail-view",params:{dataPlane:n.id}}},{default:t(()=>[a(C,{title:s("data-planes.routes.item.title",{name:n.name})},null,8,["title"])]),_:2},1032,["to"])],2)]),default:t(()=>[e(),l("div",U,[l("div",q,[a(p,{layout:"horizontal"},{title:t(()=>[e(o(s("http.api.property.status")),1)]),body:t(()=>[l("div",Z,[a(L,{status:n.status},null,8,["status"]),e(),n.dataplaneType==="standard"?(r(),c(y,{key:0,items:n.dataplane.networking.inbounds,predicate:_=>_.state!=="Ready",empty:!1},{default:t(({items:_})=>[a(D,{class:"reason-tooltip"},{content:t(()=>[l("ul",null,[(r(!0),u(g,null,k(_,i=>(r(),u("li",{key:`${i.service}:${i.port}`},o(s("data-planes.routes.item.unhealthy_inbound",{service:i.service,port:i.port})),1))),128))])]),default:t(()=>[a(f(O),{color:f(X),size:f(E)},null,8,["color","size"]),e()]),_:2},1024)]),_:2},1032,["items","predicate"])):m("",!0)])]),_:2},1024),e(),a(p,{layout:"horizontal"},{title:t(()=>[e(`
                    Type
                  `)]),body:t(()=>[e(o(s(`data-planes.type.${n.dataplaneType}`)),1)]),_:2},1024),e(),n.namespace.length>0?(r(),c(p,{key:0,layout:"horizontal"},{title:t(()=>[e(o(s("data-planes.routes.item.namespace")),1)]),body:t(()=>[e(o(n.namespace),1)]),_:2},1024)):m("",!0),e(),$("use zones")&&n.zone?(r(),c(p,{key:1,layout:"horizontal"},{title:t(()=>[e(`
                    Zone
                  `)]),body:t(()=>[a(P,{to:{name:"zone-cp-detail-view",params:{zone:n.zone}}},{default:t(()=>[e(o(n.zone),1)]),_:2},1032,["to"])]),_:2},1024)):m("",!0),e(),a(p,{layout:"horizontal"},{title:t(()=>[e(o(s("data-planes.routes.item.last_updated")),1)]),body:t(()=>[e(o(s("common.formats.datetime",{value:Date.parse(n.modificationTime)})),1)]),_:2},1024)]),e(),n.dataplane.networking.gateway?(r(),u("div",F,[l("h3",null,o(s("data-planes.routes.item.gateway")),1),e(),l("div",G,[l("div",H,[a(p,{layout:"horizontal"},{title:t(()=>[e(o(s("http.api.property.tags")),1)]),body:t(()=>[a(z,{alignment:"right",tags:n.dataplane.networking.gateway.tags},null,8,["tags"])]),_:2},1024),e(),a(p,{layout:"horizontal"},{title:t(()=>[e(o(s("http.api.property.address")),1)]),body:t(()=>[a(v,{text:`${n.dataplane.networking.address}`},null,8,["text"])]),_:2},1024)])])])):m("",!0),e(),n.dataplaneType==="standard"?(r(),c(y,{key:1,items:n.dataplane.networking.inbounds},{default:t(({items:_})=>[l("div",null,[l("h3",null,o(s("data-planes.routes.item.inbounds")),1),e(),l("div",J,[(r(!0),u(g,null,k(_,(i,N)=>(r(),u("div",{key:N,class:"inbound"},[l("h4",null,[a(v,{text:i.tags["kuma.io/service"]},{default:t(()=>[e(o(s("data-planes.routes.item.inbound_name",{service:i.tags["kuma.io/service"]})),1)]),_:2},1032,["text"])]),e(),l("div",Y,[a(p,{layout:"horizontal"},{title:t(()=>[e(o(s("http.api.property.state")),1)]),body:t(()=>[i.state==="Ready"?(r(),c(w,{key:0,appearance:"success"},{default:t(()=>[e(o(s(`http.api.value.${i.state}`)),1)]),_:2},1024)):(r(),c(w,{key:1,appearance:"danger"},{default:t(()=>[e(o(s(`http.api.value.${i.state}`)),1)]),_:2},1024))]),_:2},1024),e(),a(p,{layout:"horizontal"},{title:t(()=>[e(o(s("http.api.property.tags")),1)]),body:t(()=>[a(z,{alignment:"right",tags:i.tags},null,8,["tags"])]),_:2},1024),e(),a(p,{layout:"horizontal"},{title:t(()=>[e(o(s("http.api.property.address")),1)]),body:t(()=>[a(v,{text:i.addressPort},null,8,["text"])]),_:2},1024)])]))),128))])])]),_:2},1032,["items"])):m("",!0)])]),_:2},1024))),128))]),_:2},1032,["items","predicate"])]),_:1})}}}),at=I(j,[["__scopeId","data-v-f4e4339b"]]);export{at as default};