import{_ as l}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-5da7628f.js";import{E as n}from"./ErrorBlock-0115ac4c.js";import{_ as s}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-f2c88c43.js";import{d as f,o as r,e as a,a as o,n as i}from"./index-89f68547.js";const m={key:3},p=f({__name:"StatusInfo",props:{isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},error:{type:[Error,null],required:!1,default:null}},setup(e){return(t,u)=>(r(),a("div",null,[e.isLoading?(r(),o(s,{key:0})):e.hasError||e.error!==null?(r(),o(n,{key:1,error:e.error},null,8,["error"])):e.isEmpty?(r(),o(l,{key:2})):(r(),a("div",m,[i(t.$slots,"default")]))]))}});export{p as _};