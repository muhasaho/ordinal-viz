(this["webpackJsonpordinal-viz"]=this["webpackJsonpordinal-viz"]||[]).push([[0],{155:function(t,a,e){},156:function(t,a,e){},263:function(t,a,e){"use strict";e.r(a);var n,r,i=e(1),s=e.n(i),c=e(133),l=e.n(c),o=(e(155),e(148)),u=(e(156),e(147)),d=e(272),f=e(274),p=e(273),b=e(275),j=e(269),m=e(14),v=function(t,a,e){return[{x:t,y:a},{x:t,y:e}]},x=function(t){var a=t.className,e=t.breaks,n=t.pdfData,r=t.title,i=t.range,s=Math.max.apply(Math,Object(u.a)(n.map((function(t){return t.y}))))+.001;return Object(m.jsx)("div",{className:a,children:Object(m.jsxs)(d.a,{theme:f.a.material,padding:{top:20,bottom:30},children:[Object(m.jsx)(p.a,{x:0,y:10,text:r}),Object(m.jsx)(b.a,{style:{grid:{stroke:"none"}}}),Object(m.jsx)(j.a,{data:n,style:{data:{stroke:"#009688"}}}),e.map((function(t){return Object(m.jsx)(j.a,{data:v(t,0,s),style:{data:{stroke:"#f44336",opacity:.8}}},t)})),null===i||void 0===i?void 0:i.map((function(t){return Object(m.jsx)(j.a,{data:v(t,0,s)},t)}))]})})},y=e(95),h=e.n(y),k=function(t,a,e){return h.a.normal.pdf(t,a,e)},O=function(t,a,e){return Array.from(Array(t)).map((function(){return h.a.normal.sample(a,e)}))}(1e4,n=50,r=8).map((function(t){return{x:t,y:k(t,n,r)}})),g=[{title:"Equal (5) Intervals",pdfData:O,breaks:[35.6,45.2,54.8,64.4]},{title:"Equal (9) Intervals",pdfData:O,breaks:[31.33,36.67,42,47.33,52.67,58,63.33,68.67]},{title:"Equal (7) Intervals",pdfData:O,breaks:[32.86,39.71,46.57,53.43,60.29,67.14]},{title:"Unequal (7) Intervals Monotonic (r = 1.2)",pdfData:O,breaks:[29.72,34.18,39.53,45.95,53.66,62.9]},{title:"Unequal (7) Intervals Monotonic (r = 1.5)",pdfData:O,breaks:[27.49,29.73,33.09,38.12,45.68,57.01]},{title:"Unequal (7) Intervals Symmetric (fat tail r = 1.2)",pdfData:O,breaks:[35.96,42.4,47.76,52.24,57.6,64.04]},{title:"Unequal (7) Intervals Symmetric (thin tail r = 1.2)",pdfData:O,breaks:[30.47,35.84,42.27,57.73,64.16,69.53]}];var D=function(){return Object(m.jsx)("div",{className:"App",children:g.map((function(t){return Object(m.jsx)(x,Object(o.a)({range:[26,74],className:"Viz"},t),t.title)}))})},I=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,278)).then((function(a){var e=a.getCLS,n=a.getFID,r=a.getFCP,i=a.getLCP,s=a.getTTFB;e(t),n(t),r(t),i(t),s(t)}))};l.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root")),I()}},[[263,1,2]]]);
//# sourceMappingURL=main.0fdee0a6.chunk.js.map