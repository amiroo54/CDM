(function(){"use strict";var e={3556:function(e,n,t){var o=t(7764),r=t(4108);const l=(0,r.QD)("h1",{id:"h001"},"Central Download Manager",-1);function i(e,n){const t=(0,r.E1)("router-view");return(0,r.Wz)(),(0,r.An)(r.ae,null,[l,(0,r.K2)(t)],64)}var u=t(4100);const a={},s=(0,u.c)(a,[["render",i]]);var c=s,d=t(7464);const f=(0,r.QD)("pre",null,[(0,r.QD)("p")],-1),p={class:"box"},h=(0,r.QD)("pre",null,[(0,r.QD)("p")],-1),v={class:"box"},m=(0,r.QD)("pre",null,[(0,r.QD)("p",null," ")],-1),g={class:"box"};function y(e,n,t,o,l,i){const u=(0,r.E1)("SingleDownload"),a=(0,r.E1)("MassDownload"),s=(0,r.E1)("QueryControl");return(0,r.Wz)(),(0,r.An)(r.ae,null,[f,(0,r.QD)("div",p,[(0,r.K2)(u)]),h,(0,r.QD)("div",v,[(0,r.K2)(a)]),m,(0,r.QD)("div",g,[(0,r.K2)(s)])],64)}const b=e=>((0,r.ED)("data-v-5c3980e5"),e=e(),(0,r.ii)(),e),w=b((()=>(0,r.QD)("h2",null,"Single Download",-1))),D={placeholder:"URL",ref:"single"};function k(e,n,t,o,l,i){return(0,r.Wz)(),(0,r.An)(r.ae,null,[w,(0,r.QD)("input",D,null,512),(0,r.QD)("button",{id:"download",onClick:n[0]||(n[0]=(...e)=>i.download&&i.download(...e))},"Download")],64)}var Q={methods:{download(){let e=this.$refs.single.value;console.log(e);let n={method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({link:e})};fetch("/single",n).then((async e=>{console.log("done")}))}}};const z=(0,u.c)(Q,[["render",k],["__scopeId","data-v-5c3980e5"]]);var A=z;const S=(0,r.QD)("h2",null,"Mass Download",-1),O={placeholder:"URL",ref:"URL",id:"URL"},W={placeholder:".rar, .zip, .7z",ref:"extentions"},_={key:0,id:"list"};function j(e,n,t,o,l,i){const u=(0,r.E1)("ListLink"),a=(0,r.E1)("QueryDate");return(0,r.Wz)(),(0,r.An)(r.ae,null,[S,(0,r.QD)("input",O,null,512),(0,r.QD)("input",W,null,512),(0,r.QD)("button",{ref:"send",onClick:n[0]||(n[0]=(...e)=>i.send&&i.send(...e))},"Send",512),l.is_sent?((0,r.Wz)(),(0,r.An)("div",_,[((0,r.Wz)(!0),(0,r.An)(r.ae,null,(0,r.mi)(l.links,((e,t)=>((0,r.Wz)(),(0,r.Az)(u,{url:e,modelValue:l.download_links,"onUpdate:modelValue":n[1]||(n[1]=e=>l.download_links=e),onCheckboxUpdated:i.updateDownloadLinks},null,8,["url","modelValue","onCheckboxUpdated"])))),256))])):(0,r.g1)("",!0),l.is_sent?((0,r.Wz)(),(0,r.Az)(a,{key:1,id:"time",ref:"time"},null,512)):(0,r.g1)("",!0),l.is_sent?((0,r.Wz)(),(0,r.An)("button",{key:2,onClick:n[2]||(n[2]=(...e)=>i.download&&i.download(...e))},"Download")):(0,r.g1)("",!0)],64)}t(3248);var C=t(9096);const x=["value"];function L(e,n,t,o,l,i){return(0,r.Wz)(),(0,r.An)(r.ae,null,[(0,r.QD)("input",{type:"checkbox",value:t.url,onChange:n[0]||(n[0]=(...e)=>i.updateSelection&&i.updateSelection(...e))},null,40,x),(0,r.QD)("p",null,(0,C.WA)(t.url),1)],64)}var E={props:{url:String,value:String},methods:{updateSelection(e){this.$emit("checkbox-updated",{url:this.url,checked:e.target.checked})}}};const q=(0,u.c)(E,[["render",L]]);var U=q;const P=(0,r.QD)("label",{for:"start"},"Start Immediately",-1),T=(0,r.QD)("label",{for:"nostart"},"Don't Start",-1),V=(0,r.QD)("label",{for:"queue"},"Start at",-1);function M(e,n,t,l,i,u){return(0,r.Wz)(),(0,r.An)(r.ae,null,[(0,r.wt)((0,r.QD)("input",{type:"radio",ref:"start",id:"start","onUpdate:modelValue":n[0]||(n[0]=e=>i.selection=e),value:"0"},null,512),[[o.sz,i.selection]]),(0,r.mY)(),P,(0,r.wt)((0,r.QD)("input",{type:"radio",ref:"nostart",id:"nostart","onUpdate:modelValue":n[1]||(n[1]=e=>i.selection=e),value:"1"},null,512),[[o.sz,i.selection]]),(0,r.mY)(),T,(0,r.wt)((0,r.QD)("input",{type:"radio",ref:"queue",id:"queue","onUpdate:modelValue":n[2]||(n[2]=e=>i.selection=e),value:"2"},null,512),[[o.sz,i.selection]]),(0,r.mY)(),V,2==i.selection?(0,r.wt)(((0,r.Wz)(),(0,r.An)("input",{key:0,type:"time",ref:"time","onUpdate:modelValue":n[3]||(n[3]=e=>i.time=e)},null,512)),[[o.Og,i.time]]):(0,r.g1)("",!0)],64)}var N=t(2500),R={data(){return{selection:0,time:(0,N.IL)("")}}};const K=(0,u.c)(R,[["render",M]]);var $=K,I={data(){return{links:[],is_sent:!1,download_links:[]}},components:{ListLink:U,QueryDate:$},methods:{send(){var e=this.$refs.extentions.value.split(","),n=this.$refs.URL.value;""==e&&(e=[".rar",".zip",".7z"]),""!=n&&fetch("/mass",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({URL:n,extentions:e})}).then((async e=>{this.is_sent=!0;let n=await e.json();this.links=n}))},download(){console.log(this.download_links);let e=this.$refs.time,n=new Date;if(2==e.selection){let[t,o]=e.time.split(":");n.setHours(t,o,0)}else 1==e.selection&&(n=void 0);console.log(n);let t={method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({links:this.download_links,date:n})};fetch("/list",t).then((e=>{200==e.status&&(is_sent=!1)}))},updateDownloadLinks(e){if(e.checked)this.download_links.push(e.url);else{const n=this.download_links.indexOf(e.url);n>-1&&this.download_links.splice(n,1)}}}};const J=(0,u.c)(I,[["render",j]]);var Y=J;const F=(0,r.QD)("h2",null,"Queries",-1),H={class:"box"};function B(e,n,t,o,l,i){const u=(0,r.E1)("SingleQuery");return(0,r.Wz)(),(0,r.An)(r.ae,null,[F,((0,r.Wz)(!0),(0,r.An)(r.ae,null,(0,r.mi)(l.queries,(e=>((0,r.Wz)(),(0,r.An)("div",H,[(0,r.K2)(u,{query:e},null,8,["query"])])))),256))],64)}const G=(0,r.QD)("button",null,"Start",-1),X=(0,r.QD)("button",null,"Pause",-1);function Z(e,n,t,o,l,i){return(0,r.Wz)(),(0,r.An)(r.ae,null,[(0,r.QD)("h3",null,(0,C.WA)(t.query.name),1),((0,r.Wz)(!0),(0,r.An)(r.ae,null,(0,r.mi)(t.query.links,(e=>((0,r.Wz)(),(0,r.An)("li",null,(0,C.WA)(e),1)))),256)),G,X],64)}var ee={props:{query:Object}};const ne=(0,u.c)(ee,[["render",Z]]);var te=ne,oe={components:{SingleQuery:te},data(){return{queries:Array}},methods:{getQueries(){fetch("/queries").then((async e=>{let n=await e.json();console.log(n),this.queries=n}))}},created(){this.getQueries()}};const re=(0,u.c)(oe,[["render",B]]);var le=re,ie={name:"HomeView",components:{SingleDownload:A,MassDownload:Y,QueryControl:le}};const ue=(0,u.c)(ie,[["render",y]]);var ae=ue;const se=[{path:"/",name:"home",component:ae},{path:"/setting",name:"setting",component:()=>t.e(152).then(t.bind(t,6352))}],ce=(0,d.gv)({history:(0,d.oz)("/"),routes:se});var de=ce;(0,o.W0)(c).use(de).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var l=n[o]={exports:{}};return e[o].call(l.exports,l,l.exports,t),l.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,l){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],l=e[c][2];for(var u=!0,a=0;a<o.length;a++)(!1&l||i>=l)&&Object.keys(t.O).every((function(e){return t.O[e](o[a])}))?o.splice(a--,1):(u=!1,l<i&&(i=l));if(u){e.splice(c--,1);var s=r();void 0!==s&&(n=s)}}return n}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[o,r,l]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/about.3e33962f.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="gui:";t.l=function(o,r,l,i){if(e[o])e[o].push(r);else{var u,a;if(void 0!==l)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+l){u=d;break}}u||(a=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+l),u.src=o),e[o]=[r];var f=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),a&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={524:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var l=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=l);var i=t.p+t.u(n),u=new Error,a=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var l=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+l+": "+i+")",u.name="ChunkLoadError",u.type=l,u.request=i,r[1](u)}};t.l(i,a,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,l,i=o[0],u=o[1],a=o[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(a)var c=a(t)}for(n&&n(o);s<i.length;s++)l=i[s],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(c)},o=self["webpackChunkgui"]=self["webpackChunkgui"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[999],(function(){return t(3556)}));o=t.O(o)})();
//# sourceMappingURL=app.ffdf576a.js.map