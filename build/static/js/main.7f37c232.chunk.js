(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){e.exports=n(160)},158:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(82),c=n.n(o),i=n(22),l=n(2),u=n(185),s=n(180),m=n(87),h=n.n(m),p=n(83),f=n.n(p),d=n(58),v=n.n(d),y=n(90),g=n.n(y),E=n(91),x=n.n(E),b=n(92),w=n.n(b),j=n(88),O=n.n(j),L=n(94),S=n.n(L),k=n(93),C=n.n(k),I=n(89),N=n.n(I),F=n(95),_=n.n(F),R=n(66),G=n.n(R),P=n(96),D=n.n(P),T=[{name:"New",icon:r.a.createElement(f.a,null)},{name:"Coding",icon:r.a.createElement(v.a,null)},{name:"ReactJS",icon:r.a.createElement(v.a,null)},{name:"NextJS",icon:r.a.createElement(v.a,null)},{name:"Music",icon:r.a.createElement(h.a,null)},{name:"Education",icon:r.a.createElement(O.a,null)},{name:"Podcast",icon:r.a.createElement(N.a,null)},{name:"Movie",icon:r.a.createElement(g.a,null)},{name:"Gaming",icon:r.a.createElement(x.a,null)},{name:"Live",icon:r.a.createElement(w.a,null)},{name:"Sport",icon:r.a.createElement(G.a,null)},{name:"Fashion",icon:r.a.createElement(C.a,null)},{name:"Beauty",icon:r.a.createElement(S.a,null)},{name:"Comedy",icon:r.a.createElement(_.a,null)},{name:"Gym",icon:r.a.createElement(G.a,null)},{name:"Crypto",icon:r.a.createElement(D.a,null)}],J=n(4),A=n(184),W=n(182),H=n(179),Y=function(){var e=Object(a.useState)(""),t=Object(J.a)(e,2),n=t[0],o=t[1],c=Object(l.l)();return r.a.createElement(A.a,{component:"form",onSubmit:function(e){e.preventDefault(),n&&(c("/search/".concat(n)),o(""))},sx:{borderRadius:20,border:"1px solid #e3e3e3",pl:2,boxShadow:"none",mr:{sm:5}}},r.a.createElement("input",{className:"search-bar",placeholder:"Search...",value:n,onChange:function(e){o(e.target.value)}}),r.a.createElement(W.a,{type:"submit",sx:{p:"10px",color:"red"}},r.a.createElement(H.a,null)))},z=function(){return r.a.createElement(s.a,{direction:"row",alignItems:"center",p:2,sx:{position:"sticky",backgroud:"#000",top:0,justifyContent:"space-between"}},r.a.createElement(i.b,{to:"/",style:{display:"flex",alignItems:"center"}},r.a.createElement("img",{src:"https://i.ibb.co/s9Qys2j/logo.png",alt:"logo",height:45})),r.a.createElement(Y,null))},B=n(186),M=n(16),V=n(97),X=n.n(V);function q(){q=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(C){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof h?t:h,c=Object.create(o.prototype),i=new L(r||[]);return a(c,"_invoke",{value:b(e,n,i)}),c}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(C){return{type:"throw",arg:C}}}e.wrap=u;var m={};function h(){}function p(){}function f(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(S([])));y&&y!==t&&n.call(y,o)&&(d=y);var g=f.prototype=h.prototype=Object.create(d);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function x(e,t){var r;a(this,"_invoke",{value:function(a,o){function c(){return new t(function(r,c){!function a(r,o,c,i){var l=s(e[r],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){a("next",e,c,i)},function(e){a("throw",e,c,i)}):t.resolve(m).then(function(e){u.value=e,c(u)},function(e){return a("throw",e,c,i)})}i(l.arg)}(a,o,r,c)})}return r=r?r.then(c,c):c()}})}function b(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return k()}for(n.method=r,n.arg=o;;){var c=n.delegate;if(c){var i=w(c,n);if(i){if(i===m)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=s(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function w(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=f,a(g,"constructor",{value:f,configurable:!0}),a(f,"constructor",{value:p,configurable:!0}),p.displayName=l(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(x.prototype),l(x.prototype,c,function(){return this}),e.AsyncIterator=x,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var c=new x(u(t,n,a,r),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},E(g),l(g,i,"Generator"),l(g,o,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=S,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return c.type="throw",c.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],c=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;O(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}var U="https://youtube-v31.p.rapidapi.com",Z={method:"GET",url:U,params:{maxResults:"50"},headers:{"X-RapidAPI-Key":"ca8abd6dc7msh6e57db756918508p11b024jsne3ebcd61d8ee","X-RapidAPI-Host":"youtube-v31.p.rapidapi.com"}},K=function(){var e=Object(M.a)(q().mark(function e(t){var n,a;return q().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.get("".concat(U,"/").concat(t),Z);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(a.useState)("New"),t=Object(J.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)([]),i=Object(J.a)(c,2),l=i[0],m=i[1];return Object(a.useEffect)(function(){K("search?part=snippet&q=".concat(n)).then(function(e){return m(e.items)})},[n]),r.a.createElement(s.a,{sx:{flexDirection:{sx:"column",md:"row"}}},r.a.createElement(u.a,{sx:{height:{sx:"auto",md:"92vh"},borderRight:"1px solid #3d3d3d",px:{sx:0,md:2}}},r.a.createElement(oe,{selectedCategory:n,setSelectedCategory:o}),r.a.createElement(B.a,{className:"copyright",variant:"body2",sx:{mt:1.5,color:"#fff"}},"Copyright 2022 Aecop")),r.a.createElement(u.a,{p:2,sx:{overflowY:"auto",height:"90vh",flex:2}},r.a.createElement(B.a,{variant:"h4",fontWeight:"bold",mb:2,sx:{color:"white"}},n," ",r.a.createElement("span",{style:{color:"#F31503"}},"Videos")),r.a.createElement(ce,{videos:l})))},$=function(){var e=Object(a.useState)(null),t=Object(J.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)([]),i=Object(J.a)(c,2),s=i[0],m=i[1],h=Object(l.n)().id;return Object(a.useEffect)(function(){h&&(K("channels?part=snippet&id=".concat(h)).then(function(e){o(e.items[0])}),K("search?channelId=".concat(h,"&part=snippet&order=date")).then(function(e){return m(e.items)}))},[h]),r.a.createElement(u.a,{minHeight:"95vh"},r.a.createElement(u.a,null,r.a.createElement("div",{style:{background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(23,9,121,1) 55%, rgba(0,212,255,1) 100%)",zIndex:10,height:"300px"}}),r.a.createElement(me,{channelDetail:n})),r.a.createElement(u.a,{display:"flex",p:"2"},r.a.createElement(u.a,{sx:{mr:{sm:"100px"}}}),r.a.createElement(ce,{videos:s})))},ee=function(){var e=Object(a.useState)([]),t=Object(J.a)(e,2),n=t[0],o=t[1],c=Object(l.n)().searchTerm;return Object(a.useEffect)(function(){c&&K("search?part=snippet&q=".concat(c)).then(function(e){return o(e.items)})},[c]),r.a.createElement(u.a,{p:2,sx:{overflowY:"auto",height:"90vh",flex:2}},r.a.createElement(B.a,{variant:"h4",fontWeight:"bold",mb:2,sx:{color:"white"}},"Result for: ",c," ",r.a.createElement("span",{style:{color:"#F31503"}},"Videos")),r.a.createElement(ce,{videos:n}))},te=n(98),ne=n.n(te),ae=n(181),re=function(){var e=Object(a.useState)(null),t=Object(J.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(null),m=Object(J.a)(c,2),h=m[0],p=m[1],f=Object(l.n)().id;if(Object(a.useEffect)(function(){f&&(K("videos?part=snippet,statistics&id=".concat(f)).then(function(e){o(e.items[0])}),K("search?part=snippet&relatedToVideoId=".concat(f,"&type=video")).then(function(e){return p(e.items)}))},[f]),null!==n){var d=n.snippet,v=d.title,y=d.channelId,g=d.channelTitle,E=n.statistics,x=E.viewCount,b=E.likeCount;return r.a.createElement(u.a,{minHeight:"95vh"},r.a.createElement(s.a,{direction:{xs:"colum",md:"row"}},r.a.createElement(u.a,{flex:1},r.a.createElement(u.a,{sx:{width:"100",position:"sticky",top:"86px"}},r.a.createElement(ne.a,{url:"https://www.youtube.com/watch?v=".concat(f),className:"react-player",controls:!0}),r.a.createElement(B.a,{color:"#fff",variant:"h5",fontWeight:"bold",p:2},v,r.a.createElement(s.a,{direction:"row",justifyContent:"space-between",sx:{color:"#fff"},py:2,px:2},r.a.createElement(i.b,{to:"/channel/".concat(y)},r.a.createElement(B.a,{variant:{sm:"subtitle1",md:"h6"},color:"#fff"},g,r.a.createElement(ae.a,{sx:{fontsize:"10px",color:"gray",ml:"3px",mt:"8px"}}))),r.a.createElement(s.a,{direction:"row",gap:"15px"},r.a.createElement(B.a,{variant:"body1",sx:{opacity:.8}},parseInt(x).toLocaleString()," views"),r.a.createElement(B.a,{variant:"body1",sx:{opacity:.8}},parseInt(b).toLocaleString()," likes")))))),r.a.createElement(u.a,{px:2,py:{md:1,xs:5},justifyContent:"center",alignItems:"center"},r.a.createElement(ce,{videos:h,direction:"column"}))))}},oe=function(e){var t=e.selectedCategory,n=e.setSelectedCategory;return r.a.createElement(s.a,{direction:"row",sx:{overflowY:"auto",height:{sx:"auto",md:"95%"},flexDirection:{md:"column"}}},T.map(function(e){return r.a.createElement("button",{className:"category-btn",onClick:function(){return n(e.name)},style:{background:e.name===t&&"#FC1503",color:"white"},key:e.name},r.a.createElement("span",{style:{color:e.name===t?"white":"red",marginRight:"15px"}},e.icon),r.a.createElement("span",{style:{opacity:e.name===t?"1":"0.8"}},e.name))}))},ce=function(e){var t=e.videos,n=e.direction;return t&&r.a.createElement(s.a,{direction:n||"row",flexWrap:"wrap",justifyContent:"start",gap:2},t.map(function(e,t){return r.a.createElement(u.a,{key:t},e.id.videoId&&r.a.createElement(se,{video:e}),e.id.channelId&&r.a.createElement(me,{channelDetail:e}))}))},ie=n(187),le=n(188),ue=n(189),se=function(e){var t=e.video,n=t.id.videoId,a=t.snippet;return r.a.createElement(ie.a,{sx:{width:{xs:"100%",sm:"358px",md:"320px"},boxShadow:"none",borderRadius:"0"}},r.a.createElement(i.b,{to:n?"/video/".concat(n):"/video/GDa8kZLNhJ4"},r.a.createElement(le.a,{image:a.thumbnails.high.url,alt:a.title,sx:{width:{xs:"100%",sm:"358px",md:"320px"},height:180}})),r.a.createElement(ue.a,{sx:{backgroundColor:"#1e1e1e",height:"105px"}},r.a.createElement(i.b,{to:n?"/video/".concat(n):"/video/GDa8kZLNhJ4"},r.a.createElement(B.a,{variant:"subtitle1",fontWeight:"bold",color:"#FFFFFF"},a.title.slice(0,50)||"Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI".slice(0,50))),r.a.createElement(i.b,{to:a.channelId?"/channel/".concat(a.channelId):"/channel/UCmXmlB4-HJytD7wek0Uo97A"},r.a.createElement(B.a,{variant:"subtitle2",fontWeight:"bold",color:"gray"},a.channelTitle||"JavaScript Mastery",r.a.createElement(ae.a,{sx:{fontSize:12,color:"gray",ml:"5px"}})))))},me=function(e){var t=e.channelDetail;return t&&r.a.createElement(u.a,{sx:{boxShadow:"none",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center",width:{xs:"356px",md:"320px"},height:"326px",margin:"auto"}},r.a.createElement(i.b,{to:"/channel/".concat(t.id.channelId)},r.a.createElement(ue.a,{sx:{ml:"10px",display:"flex",flexDirection:"column",justifyContent:"center",textalign:"center",color:"#fff"}},r.a.createElement(le.a,{image:t.snippet.thumbnails.high.url||"http://dergipark.org.tr/assets/app/images/buddy_sample.png",alt:t.snippet.title,sx:{borderRadius:"50%",height:"180px",width:"180px",mb:2}}),r.a.createElement(B.a,{variant:"h6",sx:{justifyContent:"center",textalign:"center"}},t.snippet.title,r.a.createElement(ae.a,{sx:{fontSize:12,color:"gray",ml:"5px"}})))))},he=function(){return r.a.createElement(i.a,null,r.a.createElement(u.a,{sx:{backgroundColor:"#000"}},r.a.createElement(z,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,element:r.a.createElement(Q,null)}),r.a.createElement(l.a,{path:"/video/:id",element:r.a.createElement(re,null)}),r.a.createElement(l.a,{path:"/channel/:id",element:r.a.createElement($,null)}),r.a.createElement(l.a,{path:"/search/:searchTerm",element:r.a.createElement(ee,null)}))))};n(158);c.a.createRoot(document.getElementById("root")).render(r.a.createElement(he,null))}},[[105,1,2]]]);
//# sourceMappingURL=main.7f37c232.chunk.js.map