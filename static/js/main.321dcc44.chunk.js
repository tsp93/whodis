(this.webpackJsonpwhodis=this.webpackJsonpwhodis||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/vefforritunarbudin.6e21efd1.JPG"},function(e,t,a){e.exports=a.p+"static/media/Pacalot.08f715c1.png"},function(e,t,a){e.exports=a.p+"static/media/breakout.52779cac.JPG"},,,,function(e,t,a){e.exports=a(48)},,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),i=a(21),o=a(15),s=a.n(o),m=a(3),u=a(1),f=a.n(u),d=a(4);a(37);function g(e){var t=e.chapters,a=Object(n.useState)(!0),l=Object(d.a)(a,2),c=l[0],i=l[1],o=Object(n.useState)(!1),s=Object(d.a)(o,2),f=s[0],g=s[1],E=Object(n.useState)(""),h=Object(d.a)(E,2),p=h[0],k=h[1];function v(){window.scrollY>920?g(!0):g(!1),N()}function N(){""===window.location.hash?k(""):window.innerHeight+window.pageYOffset>=document.body.offsetHeight?k("contact"):k(window.location.hash.slice(1))}function b(){i(!c),window.innerWidth<=1200?Object(u.configureAnchors)({offset:-100,scrollDuration:10}):Object(u.configureAnchors)({offset:-20,scrollDuration:10})}return Object(n.useEffect)((function(){return window.addEventListener("scroll",v),window.addEventListener("hashchange",N),function(){window.removeEventListener("scroll",v),window.removeEventListener("hashchange",N)}})),r.a.createElement("div",{className:"navbar ".concat(f?"sticky":"")},r.a.createElement("button",{className:"navbutton",onClick:b},r.a.createElement(m.a,null)),r.a.createElement("div",{className:"navcontent ".concat(c?"collapsed":"")},t.map((function(e,t){return r.a.createElement("a",{key:t,className:"navlink ".concat(e[0]===p?"filled":""),href:"#".concat(e[0]),onClick:b},e[1])}))))}Object(u.configureAnchors)({offset:-100,scrollDuration:10});a(38);function E(e){var t=e.place,a=e.years,n=e.title,l=e.info;return r.a.createElement("div",{className:"edu-container"},r.a.createElement("div",{className:"left-side"},r.a.createElement("h3",{className:"eduPlace"},t),r.a.createElement("p",{className:"eduYears"},a)),r.a.createElement("div",{className:"right-side"},r.a.createElement("h5",{className:"eduTitle"},n),r.a.createElement("p",{className:"eduInfo"},l)))}a(39);function h(e){var t,a=e.title,l=e.ratingAmount;return r.a.createElement("li",{className:"know-container"},r.a.createElement("p",{className:"know-title"},a),r.a.createElement("div",{className:"know-rating"},(t=l)>3||t<0?(console.error("A rating can only go from 0-3"),r.a.createElement("p",null,"Invalid rating!")):r.a.createElement(n.Fragment,null,r.a.createElement("p",{className:1===l?"text selected":"text"},"S\xe6mileg"),r.a.createElement("p",null," | "),r.a.createElement("p",{className:2===l?"text selected":"text"},"G\xf3\xf0"),r.a.createElement("p",null," | "),r.a.createElement("p",{className:3===l?"text selected":"text"},"\xc1g\xe6t"))))}a(40);function p(e){var t=e.categoryNumber,a=e.categoryName;function n(e,t){return e[1]===t[1]?0:e[1]<t[1]?1:-1}return r.a.createElement("div",{className:"know-category-".concat(a)},r.a.createElement("h3",{className:"category-title"},a),function(e){var a=e.filter((function(e){return e[2]===t})).sort(n),l=Math.ceil(a.length/2),c=a.slice(0,l),i=a.slice(l,a.length);return r.a.createElement("div",{className:"know-list"},r.a.createElement("ul",{className:"know-column"},c.map((function(e,t){return r.a.createElement(h,{key:t,title:e[0],ratingAmount:e[1]})}))),r.a.createElement("ul",{className:"know-column"},i.map((function(e,t){return r.a.createElement(h,{key:t+100,title:e[0],ratingAmount:e[1]})}))))}([["Java",3,1],["C++",3,1],["C",2,1],["Python",2,1],["HTML5",3,1],["CSS",3,1],["SASS",2,1],["React",3,1],["Node.js",2,1],["Typescript",2,1],["Express.js",2,1],["JSON",3,1],["MySQL",2,1],["PostgreSQL",2,1],["Haskell",1,1],["OpenGL",1,1],["WebGL",2,1],["LaTeX",3,2],["Android Studio",2,2],["IntelliJ IDEA",2,2],["Matlab",2,2],["Git",3,2],["VSCode",3,2],["Atom",3,2],["\xcdslenska (F\xf6\xf0urtunga)",3,3],["Enska (M\xf3\xf0urtunga)",3,3],["Danska (Sk\xf3ladanska)",2,3],["\xde\xfdska (Ein bisschen)",1,3]]))}a(41);function k(e){var t=e.hyperref,a=e.image,n=e.altText,l=e.captionTitle,c=e.caption;return r.a.createElement("div",{className:"project"},r.a.createElement("figure",{className:"projectImg"},r.a.createElement("a",{href:t},r.a.createElement("img",{src:a,alt:n}),r.a.createElement("figcaption",null,r.a.createElement("h2",null,l),r.a.createElement("hr",null),r.a.createElement("p",null,c)))))}a(42);function v(e){var t=e.contact,a=e.details;return r.a.createElement("div",{className:"contact-detail"},r.a.createElement("p",null,t),r.a.createElement("p",null,a))}var N=a(16),b=a.n(N),w=a(17),y=a.n(w),j=a(18),S=a.n(j);a(43);function T(){return r.a.createElement(n.Fragment,null,r.a.createElement(s.a,{title:"Thomas Sam\xfael P\xe1lsson - Ferilskr\xe1"}),r.a.createElement("header",{className:"frontpage-header"},r.a.createElement("h1",null,"Thomas Sam\xfael P\xe1lsson ",r.a.createElement("hr",null)),r.a.createElement("h2",null,"Ferilskr\xe1"),r.a.createElement("a",{href:"#about",className:"scroll-down",onClick:function(){window.innerWidth<=1200?Object(u.configureAnchors)({offset:-100,scrollDuration:10}):Object(u.configureAnchors)({offset:-20,scrollDuration:10})}},r.a.createElement("span",{className:"arrow-down"},r.a.createElement(m.b,null)))),r.a.createElement(g,{chapters:[["about","Um mig"],["education","Menntun"],["knowledge","Kunn\xe1tta"],["projects","Verkefni"],["contact","Hafa samband"]]}),r.a.createElement("div",{className:"info"},r.a.createElement(f.a,{id:"about"},r.a.createElement("div",{className:"about"},r.a.createElement("h1",null,"Um mig"),r.a.createElement("p",null,"Thomas Sam\xfael P\xe1lsson heiti \xe9g, \xfatskrifa\xf0ur nemandi \xfar H\xcd \xfear sem \xe9g hlaut B.Sc. gr\xe1\xf0u \xed hugb\xfana\xf0arverkfr\xe6\xf0i. \xc9g er ",function(){var e=new Date,t=new Date("06/12/1993"),a=e.getFullYear()-t.getFullYear(),n=e.getMonth()-t.getMonth();return(n<0||0===n&&e.getDate()<t.getDate())&&(a-=1),a}()," \xe1ra a\xf0 aldri, dugna\xf0ardrengur, fr\xe1b\xe6r, \xe6\xf0islegur og umfram allt h\xf3gv\xe6r. \xc1hugasamur um margs konar forritun, jafnframt fram- og bakendaforritun, og tilb\xfainn \xed allt. \xc9g \xe1 \xfea\xf0 til a\xf0 a\xf0lagast n\xfdjum hlutum frekar flj\xf3tt."),r.a.createElement("hr",null))),r.a.createElement(f.a,{id:"education"},r.a.createElement("div",{className:"education"},r.a.createElement("h1",null,"Menntun"),r.a.createElement(E,{place:"H\xe1sk\xf3li \xcdslands",years:"2016-2019",title:"Bachelor - Hugb\xfana\xf0arverkfr\xe6\xf0i (Software Engineering)",info:"\xdatskrifa\xf0ist vori\xf0 2019 me\xf0 fyrstu einkunn. \xc9g l\xe6r\xf0i margt og miki\xf0 \xed m\xf6rgum mismunandi \xe1f\xf6ngum eins og Vefforritun, Verkefnastj\xf3rnun og Gervigreind. M\xe9r gekk yfirleitt betur \xed forritunar\xe1f\xf6ngum frekar en verkfr\xe6\xf0i\xe1f\xf6ngum."}),r.a.createElement(E,{place:"Menntask\xf3linn \xed Reykjav\xedk",years:"2009-2013",title:"St\xfadentspr\xf3f - N\xe1tt\xfarufr\xe6\xf0ibraut",info:"\xdatskrifa\xf0ist vori\xf0 2013 af n\xe1tt\xfarufr\xe6\xf0ibraut. \xc9g kynntist \xe1 seinasta \xe1ri forritun \xed fyrsta sinn gegnum val\xe1fanga sem kenndi Java."}),r.a.createElement("hr",null))),r.a.createElement(f.a,{id:"knowledge"},r.a.createElement("div",{className:"knowledge"},r.a.createElement("h1",null,"Kunn\xe1tta"),r.a.createElement(p,{categoryNumber:1,categoryName:"Forritunarkunn\xe1tta"}),r.a.createElement(p,{categoryNumber:2,categoryName:"T\xe6knikunn\xe1tta"}),r.a.createElement(p,{categoryNumber:3,categoryName:"Tungum\xe1l"}),r.a.createElement("hr",null))),r.a.createElement(f.a,{id:"projects"},r.a.createElement("div",{className:"projects"},r.a.createElement("h1",null,"Verkefni"),r.a.createElement(k,{hyperref:"https://vef2-h2-mak78-tsp3-pab14.herokuapp.com/",image:b.a,altText:"An online shopping system",captionTitle:"Vefforritunarb\xfa\xf0in",caption:"H\xf3pverkefni \xed vefforritun (G\xe6ti teki\xf0 ca. m\xedn\xfatu a\xf0 hla\xf0ast inn)"}),r.a.createElement(k,{hyperref:"https://notendur.hi.is/~tsp3/tolvuleikjaforritun/PacSnake/",image:y.a,altText:"A hybrid between Pacman and Snake",captionTitle:"PacSnake",caption:"H\xf3pverkefni \xed t\xf6lvuleikjaforritun"}),r.a.createElement(k,{hyperref:"https://notendur.hi.is/~tsp3/tolvuleikjaforritun/breakout/",image:S.a,altText:"The classic game Breakout",captionTitle:"Breakout",caption:"Einstaklingsverkefni \xed t\xf6lvuleikjaforritun"})))),r.a.createElement(f.a,{id:"contact"},r.a.createElement("footer",{className:"frontpage-footer"},r.a.createElement("h1",null,"Hafa samband"),r.a.createElement("div",{className:"contact-details"},r.a.createElement(v,{contact:"Netfang:",details:"thomasspalsson@gmail.com"}),r.a.createElement(v,{contact:"S\xedmi:",details:"(+354) 858 7793"}),r.a.createElement("div",{className:"links"},r.a.createElement("a",{href:"https://www.linkedin.com/in/thomas-p%C3%A1lsson-0159b6153/"},r.a.createElement(m.d,{className:"linkedIn"})),r.a.createElement("a",{href:"https://github.com/tsp93"},r.a.createElement(m.c,{className:"github"})))))))}a(44);var A=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(T,null))};a(45);c.a.render(r.a.createElement(i.a,null,r.a.createElement(A,null)),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.321dcc44.chunk.js.map