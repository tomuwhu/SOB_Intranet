/* empty css                      */import{s as H,n as w,o as L,r as D}from"../chunks/scheduler.feaddeb4.js";import{S as M,i as V,g as h,s as R,m as T,h as b,j as E,f as n,c as I,y as j,n as A,k,a as p,x as P,o as F,z as N,A as z}from"../chunks/index.a0f02fa7.js";import{b as O}from"../chunks/paths.17eb41be.js";import{a as U,s as g}from"../chunks/axios.c23ec867.js";import{m as q}from"../chunks/md5.876f5683.js";const re=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));function J(c){let t,s="Honlaplista",r,f,o;return{c(){t=h("a"),t.textContent=s,r=h("a"),f=T("Oktatási csatorna"),this.h()},l(l){t=b(l,"A",{href:!0,class:!0,"data-svelte-h":!0}),j(t)!=="svelte-1ljur3m"&&(t.textContent=s),r=b(l,"A",{href:!0,class:!0});var e=E(r);f=A(e,"Oktatási csatorna"),e.forEach(n),this.h()},h(){k(t,"href",O+"/honlapok/"),k(t,"class","svelte-5rm7ui"),k(r,"href",o=O+"/stream/"+c[0].name),k(r,"class","svelte-5rm7ui")},m(l,e){p(l,t,e),p(l,r,e),P(r,f)},p(l,e){e&1&&o!==(o=O+"/stream/"+l[0].name)&&k(r,"href",o)},d(l){l&&(n(t),n(r))}}}function G(c){let t,s="regisztráció";return{c(){t=h("a"),t.textContent=s,this.h()},l(r){t=b(r,"A",{href:!0,class:!0,"data-svelte-h":!0}),j(t)!=="svelte-gav7xn"&&(t.textContent=s),this.h()},h(){k(t,"href",O+"/reg/"),k(t,"class","svelte-5rm7ui")},m(r,f){p(r,t,f)},p:w,d(r){r&&n(t)}}}function K(c){let t,s=c[0].err+"",r,f,o;return{c(){t=h("span"),r=T(s),f=R(),o=h("br"),this.h()},l(l){t=b(l,"SPAN",{class:!0});var e=E(t);r=A(e,s),e.forEach(n),f=I(l),o=b(l,"BR",{}),this.h()},h(){k(t,"class","svelte-5rm7ui")},m(l,e){p(l,t,e),P(t,r),p(l,f,e),p(l,o,e)},p(l,e){e&1&&s!==(s=l[0].err+"")&&F(r,s)},d(l){l&&(n(t),n(f),n(o))}}}function Q(c){let t,s=c[0].name+"",r,f,o,l,e,d,v,x="Logout",y,m;return{c(){t=h("div"),r=T(s),f=R(),o=h("br"),l=R(),e=h("br"),d=R(),v=h("button"),v.textContent=x,this.h()},l(a){t=b(a,"DIV",{class:!0});var _=E(t);r=A(_,s),_.forEach(n),f=I(a),o=b(a,"BR",{}),l=I(a),e=b(a,"BR",{}),d=I(a),v=b(a,"BUTTON",{class:!0,"data-svelte-h":!0}),j(v)!=="svelte-hd9vso"&&(v.textContent=x),this.h()},h(){k(t,"class","svelte-5rm7ui"),k(v,"class","svelte-5rm7ui")},m(a,_){p(a,t,_),P(t,r),p(a,f,_),p(a,o,_),p(a,l,_),p(a,e,_),p(a,d,_),p(a,v,_),y||(m=N(v,"click",c[5]),y=!0)},p(a,_){_&1&&s!==(s=a[0].name+"")&&F(r,s)},d(a){a&&(n(t),n(f),n(o),n(l),n(e),n(d),n(v)),y=!1,m()}}}function W(c){let t,s,r,f,o,l,e,d,v,x,y,m="Login",a,_,S,i,C;return{c(){t=h("input"),s=R(),r=h("br"),f=h("br"),o=R(),l=h("input"),e=R(),d=h("br"),v=h("br"),x=R(),y=h("button"),y.textContent=m,a=R(),_=h("br"),S=h("br"),this.h()},l(u){t=b(u,"INPUT",{type:!0,placeholder:!0,class:!0}),s=I(u),r=b(u,"BR",{}),f=b(u,"BR",{}),o=I(u),l=b(u,"INPUT",{type:!0,placeholder:!0,class:!0}),e=I(u),d=b(u,"BR",{}),v=b(u,"BR",{}),x=I(u),y=b(u,"BUTTON",{class:!0,"data-svelte-h":!0}),j(y)!=="svelte-nja564"&&(y.textContent=m),a=I(u),_=b(u,"BR",{}),S=b(u,"BR",{}),this.h()},h(){k(t,"type","text"),k(t,"placeholder","Felhasználónév"),k(t,"class","svelte-5rm7ui"),k(l,"type","password"),k(l,"placeholder","Jelszó"),k(l,"class","svelte-5rm7ui"),k(y,"class","svelte-5rm7ui")},m(u,B){p(u,t,B),z(t,c[1]),p(u,s,B),p(u,r,B),p(u,f,B),p(u,o,B),p(u,l,B),z(l,c[2]),p(u,e,B),p(u,d,B),p(u,v,B),p(u,x,B),p(u,y,B),p(u,a,B),p(u,_,B),p(u,S,B),i||(C=[N(t,"input",c[6]),N(l,"input",c[7]),N(y,"click",c[4])],i=!0)},p(u,B){B&2&&t.value!==u[1]&&z(t,u[1]),B&4&&l.value!==u[2]&&z(l,u[2])},d(u){u&&(n(t),n(s),n(r),n(f),n(o),n(l),n(e),n(d),n(v),n(x),n(y),n(a),n(_),n(S)),i=!1,D(C)}}}function X(c){let t,s,r,f="SOB Intranet",o,l,e,d=c[0].msg+"",v;function x(i,C){return i[3]?J:G}let y=x(c),m=y(c);function a(i,C){return i[3]?i[0].err?K:Q:W}let _=a(c),S=_(c);return{c(){t=h("div"),m.c(),s=R(),r=h("h1"),r.textContent=f,o=R(),S.c(),l=R(),e=h("span"),v=T(d),this.h()},l(i){t=b(i,"DIV",{class:!0});var C=E(t);m.l(C),C.forEach(n),s=I(i),r=b(i,"H1",{class:!0,"data-svelte-h":!0}),j(r)!=="svelte-j6uv1b"&&(r.textContent=f),o=I(i),S.l(i),l=I(i),e=b(i,"SPAN",{class:!0});var u=E(e);v=A(u,d),u.forEach(n),this.h()},h(){k(t,"class","menu svelte-5rm7ui"),k(r,"class","svelte-5rm7ui"),k(e,"class","svelte-5rm7ui")},m(i,C){p(i,t,C),m.m(t,null),p(i,s,C),p(i,r,C),p(i,o,C),S.m(i,C),p(i,l,C),p(i,e,C),P(e,v)},p(i,[C]){y===(y=x(i))&&m?m.p(i,C):(m.d(1),m=y(i),m&&(m.c(),m.m(t,null))),_===(_=a(i))&&S?S.p(i,C):(S.d(1),S=_(i),S&&(S.c(),S.m(l.parentNode,l))),C&1&&d!==(d=i[0].msg+"")&&F(v,d)},i:w,o:w,d(i){i&&(n(t),n(s),n(r),n(o),n(l),n(e)),m.d(),S.d(i)}}}function Y(c,t,s){let r;var f=g,o,l;const e={un:"-",name:"...",err:null,msg:""};L(async()=>{s(0,e.un=localStorage.getItem("un")||"",e);try{const m=await U.post(f,e.un);s(0,e.un=m.data.un,e),s(0,e.name=m.data.name,e)}catch(m){s(0,e.err=m,e)}});function d(m){U.post(f+"login.php",{un:o,pw:q(l)}).then(a=>{s(0,e.un=a.data.un,e),e.un==null&&(s(0,e.msg="Hibás felhasználónév vagy jelszó!",e),setInterval(()=>s(0,e.msg="",e),1e3)),s(0,e.name=a.data.name,e),localStorage.setItem("un",e.un)}).catch(a=>s(0,e.err=a,e))}function v(m){U.post(f+"logout.php",e.un).then(a=>{s(0,e.un="",e),s(0,e.name="...",e),localStorage.removeItem("un")}).catch(a=>s(0,e.err=a,e))}function x(){o=this.value,s(1,o)}function y(){l=this.value,s(2,l)}return c.$$.update=()=>{c.$$.dirty&1&&s(3,r=e.un&&e.name)},[e,o,l,r,d,v,x,y]}class ue extends M{constructor(t){super(),V(this,t,Y,X,H,{})}}export{ue as component,re as universal};