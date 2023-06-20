import{d as A,u as Z,q as o,s as V,O as I,o as w,a as O,w as z,h as l,b as p,g as k,k as f,P as x,e as S,f as B}from"./index-89f68547.js";import{_ as L}from"./ZoneEgressDetails.vue_vue_type_script_setup_true_lang-52571b68.js";import{j as P,k as $,g as q,_ as C}from"./RouteView.vue_vue_type_script_setup_true_lang-9d97c07b.js";import{_ as F}from"./RouteTitle.vue_vue_type_script_setup_true_lang-a3524fac.js";import{D as Q}from"./DataOverview-02bc3a27.js";import{Q as v}from"./QueryParameter-70743f73.js";import"./DefinitionListItem-ef42bc59.js";import"./EnvoyData-bc9842a2.js";import"./kongponents.es-8a32a5dc.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-50de6279.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-35246334.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-5da7628f.js";import"./ErrorBlock-0115ac4c.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-f2c88c43.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-64f7b19d.js";import"./TabsWidget-aa33fe8a.js";import"./TextWithCopyButton-198e58f9.js";import"./TagList-20a7c70f.js";import"./StatusBadge-1ff8f67a.js";const R={class:"zoneegresses"},U={class:"kcard-stack"},j={class:"kcard-border"},G={key:0,class:"kcard-border"},de=A({__name:"ZoneEgressListView",props:{selectedZoneEgressName:{type:[String,null],required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(N){const i=N,g=P(),{t:_}=$(),T={title:"No Data",message:"There are no Zone Egresses present."},b=Z(),u=o(!0),c=o(null),n=o({headers:[{label:"Status",key:"status"},{label:"Name",key:"entity"}],data:[]}),r=o(null),y=o(null),E=o(i.offset);V(()=>b.params.mesh,function(){b.name==="zone-egress-list-view"&&m(0)}),m(i.offset);async function m(e){var a;E.value=e,v.set("offset",e>0?e:null),u.value=!0,c.value=null;const t=x;try{const{items:s,next:d}=await g.getAllZoneEgressOverviews({size:t,offset:e});y.value=d,n.value.data=D(s??[]),await h({name:i.selectedZoneEgressName??((a=n.value.data[0])==null?void 0:a.entity.name)})}catch(s){n.value.data=[],r.value=null,s instanceof Error?c.value=s:console.error(s)}finally{u.value=!1}}function D(e){return e.map(t=>{const{name:a}=t,s={name:"zone-egress-detail-view",params:{zoneEgress:a}},d=I(t.zoneEgressInsight??{});return{entity:t,detailViewRoute:s,status:d}})}async function h({name:e}){if(e===void 0){r.value=null,v.set("zoneEgress",null);return}try{r.value=await g.getZoneEgressOverview({name:e}),v.set("zoneEgress",e)}catch(t){console.error(t)}}return(e,t)=>(w(),O(C,null,{default:z(()=>[l(F,{title:p(_)("zone-egresses.routes.items.title")},null,8,["title"]),k(),l(q,{breadcrumbs:[{to:{name:"zone-egress-list-view"},text:p(_)("zone-egresses.routes.items.breadcrumbs")}]},{default:z(()=>{var a;return[f("div",R,[f("div",U,[f("div",j,[l(Q,{"selected-entity-name":(a=r.value)==null?void 0:a.name,"page-size":p(x),"is-loading":u.value,error:c.value,"empty-state":T,"table-data":n.value,"table-data-is-empty":n.value.data.length===0,next:y.value,"page-offset":E.value,onTableAction:h,onLoadData:m},null,8,["selected-entity-name","page-size","is-loading","error","table-data","table-data-is-empty","next","page-offset"])]),k(),r.value!==null?(w(),S("div",G,[l(L,{"zone-egress-overview":r.value},null,8,["zone-egress-overview"])])):B("",!0)])])]}),_:1},8,["breadcrumbs"])]),_:1}))}});export{de as default};