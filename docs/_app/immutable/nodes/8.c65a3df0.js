/* empty css                      */import{s as R,n as q,o as V}from"../chunks/scheduler.feaddeb4.js";import{S as z,i as F,g as k,m as j,s as S,e as D,h as w,j as O,y as I,n as x,f as v,c as H,k as n,a as E,x as _,C as L,o as N}from"../chunks/index.a0f02fa7.js";import{e as G}from"../chunks/each.e59479a4.js";import{b as $}from"../chunks/paths.04807aaa.js";import{a as T,s as U}from"../chunks/axios.c23ec867.js";const ee=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));function M(f,a,s){const o=f.slice();return o[3]=a[s],o}function P(f){let a,s=f[3].name+"",o,c,g,h,i,C,b,u,p,y,m,d;return{c(){a=k("div"),o=j(s),c=S(),g=k("hr"),h=S(),i=k("a"),C=j("Honlap"),u=S(),p=k("a"),y=j("    Git    "),d=S(),this.h()},l(t){a=w(t,"DIV",{class:!0});var e=O(a);o=x(e,s),c=H(e),g=w(e,"HR",{}),h=H(e),i=w(e,"A",{class:!0,href:!0,target:!0});var r=O(i);C=x(r,"Honlap"),r.forEach(v),u=H(e),p=w(e,"A",{class:!0,href:!0,target:!0});var l=O(p);y=x(l,"    Git    "),l.forEach(v),d=H(e),e.forEach(v),this.h()},h(){n(i,"class","hl svelte-1bko94w"),n(i,"href",b=f[3].web.slice(0,4)=="http"?f[3].web:`http://${f[3].web}`),n(i,"target","_blank"),n(p,"class","g svelte-1bko94w"),n(p,"href",m=f[3].git.slice(0,4)=="http"?f[3].git:`http://${f[3].git}`),n(p,"target","_blank"),n(a,"class","e svelte-1bko94w")},m(t,e){E(t,a,e),_(a,o),_(a,c),_(a,g),_(a,h),_(a,i),_(i,C),_(a,u),_(a,p),_(p,y),_(a,d)},p(t,e){e&2&&s!==(s=t[3].name+"")&&N(o,s),e&2&&b!==(b=t[3].web.slice(0,4)=="http"?t[3].web:`http://${t[3].web}`)&&n(i,"href",b),e&2&&m!==(m=t[3].git.slice(0,4)=="http"?t[3].git:`http://${t[3].git}`)&&n(p,"href",m)},d(t){t&&v(a)}}}function B(f){let a,s,o="Főoldal",c,g="Adatlap",h,i,C,b,u,p="Honlapok",y,m,d=G(f[1]),t=[];for(let e=0;e<d.length;e+=1)t[e]=P(M(f,d,e));return{c(){a=k("div"),s=k("a"),s.textContent=o,c=k("a"),c.textContent=g,h=k("a"),i=j("Oktatási csatorna"),b=S(),u=k("h1"),u.textContent=p,y=S();for(let e=0;e<t.length;e+=1)t[e].c();m=D(),this.h()},l(e){a=w(e,"DIV",{class:!0});var r=O(a);s=w(r,"A",{href:!0,class:!0,"data-svelte-h":!0}),I(s)!=="svelte-1fu3lgf"&&(s.textContent=o),c=w(r,"A",{href:!0,class:!0,"data-svelte-h":!0}),I(c)!=="svelte-n78dx"&&(c.textContent=g),h=w(r,"A",{href:!0,class:!0});var l=O(h);i=x(l,"Oktatási csatorna"),l.forEach(v),r.forEach(v),b=H(e),u=w(e,"H1",{class:!0,"data-svelte-h":!0}),I(u)!=="svelte-rbkdto"&&(u.textContent=p),y=H(e);for(let A=0;A<t.length;A+=1)t[A].l(e);m=D(),this.h()},h(){n(s,"href",$+"/"),n(s,"class","svelte-1bko94w"),n(c,"href",$+"/regm/"),n(c,"class","svelte-1bko94w"),n(h,"href",C=$+"/stream/"+f[0].name),n(h,"class","svelte-1bko94w"),n(a,"class","menu svelte-1bko94w"),n(u,"class","svelte-1bko94w")},m(e,r){E(e,a,r),_(a,s),_(a,c),_(a,h),_(h,i),E(e,b,r),E(e,u,r),E(e,y,r);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,r);E(e,m,r)},p(e,[r]){if(r&1&&C!==(C=$+"/stream/"+e[0].name)&&n(h,"href",C),r&2){d=G(e[1]);let l;for(l=0;l<d.length;l+=1){const A=M(e,d,l);t[l]?t[l].p(A,r):(t[l]=P(A),t[l].c(),t[l].m(m.parentNode,m))}for(;l<t.length;l+=1)t[l].d(1);t.length=d.length}},i:q,o:q,d(e){e&&(v(a),v(b),v(u),v(y),v(m)),L(t,e)}}}function J(f,a,s){var o={un:null},c=U,g=[];return V(async()=>{s(0,o.un=localStorage.getItem("un")||"",o);try{const h=await T.get(c+"req.php");s(1,g=h.data),g.forEach(i=>{i.un==o.un&&s(0,o.name=i.name,o)})}catch(h){console.log(h)}}),[o,g]}class te extends z{constructor(a){super(),F(this,a,J,B,R,{})}}export{te as component,ee as universal};