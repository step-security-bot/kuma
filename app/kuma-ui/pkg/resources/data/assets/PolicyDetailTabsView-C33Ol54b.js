import{d as D,e as a,o as c,m as r,w as t,a as o,l as v,ao as C,c as R,$ as T,p as P,b as l,Q as k,J as A,t as S,E as X}from"./index-BdvfZ-Qp.js";const $={key:0},g=D({__name:"PolicyDetailTabsView",setup(B){return(L,m)=>{const _=a("RouteTitle"),d=a("XAction"),u=a("XTabs"),h=a("RouterView"),f=a("DataLoader"),y=a("AppView"),b=a("DataSource"),w=a("RouteView");return c(),r(w,{name:"policy-detail-tabs-view",params:{mesh:"",policy:"",policyPath:""}},{default:t(({route:e,t:i,uri:V})=>[o(b,{src:V(v(C),"/meshes/:mesh/policy-path/:path/policy/:name",{mesh:e.params.mesh,path:e.params.policyPath,name:e.params.policy})},{default:t(({data:s,error:x})=>[o(y,{breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:e.params.mesh}},text:e.params.mesh},{to:{name:"policy-list-view",params:{mesh:e.params.mesh,policyPath:e.params.policyPath}},text:i("policies.routes.item.breadcrumbs")}]},{title:t(()=>[s?(c(),R("h1",$,[o(T,{text:s.name},{default:t(()=>[o(_,{title:i("policies.routes.item.title",{name:s.name})},null,8,["title"])]),_:2},1032,["text"])])):P("",!0)]),default:t(()=>[m[1]||(m[1]=l()),o(f,{data:[s],errors:[x]},{default:t(()=>{var p;return[o(u,{selected:(p=e.child())==null?void 0:p.name},k({_:2},[A(e.children,({name:n})=>({name:`${n}-tab`,fn:t(()=>[o(d,{to:{name:n}},{default:t(()=>[l(S(i(`policies.routes.item.navigation.${n}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),m[0]||(m[0]=l()),o(h,null,{default:t(n=>[(c(),r(X(n.Component),{data:s},null,8,["data"]))]),_:2},1024)]}),_:2},1032,["data","errors"])]),_:2},1032,["breadcrumbs"])]),_:2},1032,["src"])]),_:1})}}});export{g as default};