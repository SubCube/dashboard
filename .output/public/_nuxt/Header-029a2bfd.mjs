import{_ as r,d as u,c as d,a as s,f as c,w as a,p,e as v,g,o as m}from"./bootstrap-8f944e24.mjs";const f=u({setup(e,{expose:n}){n();const l={logout:i=>{alert(i)}};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),t=e=>(p("data-v-697f1a2c"),e=e(),v(),e),h=t(()=>s("button",{class:"switcher","aria-details":"switcher"},null,-1)),k={class:"menu"},b=t(()=>s("img",{src:"/icons/home.svg",alt:"home-icon"},null,-1)),x=t(()=>s("img",{src:"/icons/message.svg",alt:"message-icon"},null,-1)),w=t(()=>s("img",{src:"/icons/bank.svg",alt:"bank-icon"},null,-1)),S=t(()=>s("img",{src:"/icons/docs.svg",alt:"docs-icon"},null,-1)),C=t(()=>s("img",{src:"/icons/settings.svg",alt:"settings-icon"},null,-1)),I=t(()=>s("img",{src:"/icons/logout.svg",alt:"logout-icon"},null,-1)),N=[I];function $(e,n,_,l,i,y){const o=g("NuxtLink");return m(),d("header",null,[h,s("nav",k,[c(o,{to:"/",class:"link","active-class":"active"},{default:a(()=>[b]),_:1}),c(o,{to:"/about",class:"link","active-class":"active"},{default:a(()=>[x]),_:1}),c(o,{to:"/bank",class:"link","active-class":"active"},{default:a(()=>[w]),_:1}),c(o,{to:"/docs",class:"link","active-class":"active"},{default:a(()=>[S]),_:1}),c(o,{to:"/settings",class:"link","active-class":"active"},{default:a(()=>[C]),_:1})]),s("button",{class:"logout","active-class":"active",onClick:n[0]||(n[0]=B=>l.logout("logout"))},N)])}var L=r(f,[["render",$],["__scopeId","data-v-697f1a2c"]]);export{L as default};