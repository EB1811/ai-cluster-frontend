import{s as D,n as E,r as z}from"./scheduler.BvLojk_z.js";import{S as U,i as W,e as w,s as x,b as P,u as I,c as y,d as b,h as j,f as J,g as p,v as S,o as i,w as V,j as T,k as h,x as C,y as N,l as L}from"./index.aKaDqPNn.js";function q(r){let e,t;return{c(){e=w("p"),t=P(r[3]),this.h()},l(o){e=y(o,"P",{class:!0});var s=b(e);t=J(s,r[3]),s.forEach(p),this.h()},h(){i(e,"class","text-sm text-red-500")},m(o,s){T(o,e,s),h(e,t)},p(o,s){s&8&&L(t,o[3])},d(o){o&&p(e)}}}function M(r){let e,t,o,s,l,u,_,d,n,m,g,k,B,a=r[3]&&q(r);return{c(){e=w("div"),t=w("div"),o=w("input"),s=x(),l=w("button"),u=P("Join"),d=x(),n=I("svg"),m=I("path"),g=x(),a&&a.c(),this.h()},l(c){e=y(c,"DIV",{class:!0});var f=b(e);t=y(f,"DIV",{class:!0});var v=b(t);o=y(v,"INPUT",{type:!0,placeholder:!0,class:!0}),s=j(v),l=y(v,"BUTTON",{class:!0});var F=b(l);u=J(F,"Join"),F.forEach(p),d=j(v),n=S(v,"svg",{class:!0,fill:!0,stroke:!0,viewBox:!0,xmlns:!0});var O=b(n);m=S(O,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),b(m).forEach(p),O.forEach(p),v.forEach(p),g=j(f),a&&a.l(f),f.forEach(p),this.h()},h(){i(o,"type","text"),i(o,"placeholder","Email"),i(o,"class","bg-neutral-700 p-2 text-gray-200 focus:outline-none lg:w-80"),i(l,"class",_=r[4][r[0]]+" ml-2 p-2 px-6 text-white"),i(m,"stroke-linecap","round"),i(m,"stroke-linejoin","round"),i(m,"stroke-width","2"),i(m,"d","M5 13l4 4L19 7"),i(n,"class","ml-1 h-6 w-6 text-green-500 opacity-0"),i(n,"fill","none"),i(n,"stroke","currentColor"),i(n,"viewBox","0 0 24 24"),i(n,"xmlns","http://www.w3.org/2000/svg"),V(n,"opacity-100",r[2]),i(t,"class","flex flex-row items-center"),i(e,"class","flex flex-col")},m(c,f){T(c,e,f),h(e,t),h(t,o),C(o,r[1]),h(t,s),h(t,l),h(l,u),h(t,d),h(t,n),h(n,m),h(e,g),a&&a.m(e,null),k||(B=[N(o,"input",r[7]),N(l,"click",r[5])],k=!0)},p(c,[f]){f&2&&o.value!==c[1]&&C(o,c[1]),f&1&&_!==(_=c[4][c[0]]+" ml-2 p-2 px-6 text-white")&&i(l,"class",_),f&4&&V(n,"opacity-100",c[2]),c[3]?a?a.p(c,f):(a=q(c),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:E,o:E,d(c){c&&p(e),a&&a.d(),k=!1,z(B)}}}function R(r,e,t){let{fromPage:o}=e,{color:s="emerald"}=e;const l={emerald:"bg-emerald-600 hover:bg-emerald-500",indigo:"bg-indigo-600 hover:bg-indigo-500",blue:"bg-blue-600 hover:bg-blue-500"};let u="",_=!1,d="";const n=async()=>{if(console.log("Joining waitlist with email:",u),!u){t(3,d="Error: Email is required");return}if(!u.includes("@")||!u.includes(".")){t(3,d="Error: Invalid email");return}try{(await fetch("https://lefv2u7s27wmo25osdr5cygfia0zcney.lambda-url.eu-west-1.on.aws/",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:u,fromPage:o})})).status===200?(t(2,_=!0),t(3,d="")):t(3,d="Error: Failed to join waitlist")}catch{t(3,d="Error: Failed to join waitlist")}};function m(){u=this.value,t(1,u)}return r.$$set=g=>{"fromPage"in g&&t(6,o=g.fromPage),"color"in g&&t(0,s=g.color)},[s,u,_,d,l,n,o,m]}class Q extends U{constructor(e){super(),W(this,e,R,M,D,{fromPage:6,color:0})}}function A(r){let e,t,o;return{c(){e=w("footer"),t=P("Beta program coming soon..."),this.h()},l(s){e=y(s,"FOOTER",{class:!0});var l=b(e);t=J(l,"Beta program coming soon..."),l.forEach(p),this.h()},h(){i(e,"class",o=r[1][r[0]]+" px-4 py-6 text-center text-white transition-colors duration-500")},m(s,l){T(s,e,l),h(e,t)},p(s,[l]){l&1&&o!==(o=s[1][s[0]]+" px-4 py-6 text-center text-white transition-colors duration-500")&&i(e,"class",o)},i:E,o:E,d(s){s&&p(e)}}}function G(r,e,t){let{color:o="emerald"}=e;const s={emerald:"bg-emerald-600 hover:bg-emerald-500",indigo:"bg-indigo-600 hover:bg-indigo-500",blue:"bg-blue-600 hover:bg-blue-500"};return r.$$set=l=>{"color"in l&&t(0,o=l.color)},[o,s]}class X extends U{constructor(e){super(),W(this,e,G,A,D,{color:0})}}export{X as F,Q as J};
