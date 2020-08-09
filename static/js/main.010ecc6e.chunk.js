(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),s=(a(99),a(25)),l=a.n(s),i=a(37),u=a(12),m=(a(101),a(237)),d=a(238),p=a(239),f=a(231),h=a(235),v=a(236);a(102);var E=function(e){return r.a.createElement(f.a,{className:"card_info ".concat(e.isRed&&"box-red"," ").concat(e.isGreen&&"box-green"),onClick:e.onClick},r.a.createElement(h.a,null,r.a.createElement(v.a,{color:"primary"},e.title),r.a.createElement("h2",{className:"box_increment",style:{color:e.caseColor}},"+",e.increment),r.a.createElement(v.a,{className:"box_total"},r.a.createElement("span",{className:"upper"},e.total)," Total")))},b=(a(106),a(242)),y=a(243),g=a(18),j=a(14),x=a.n(j),w=a(240),O=a(241),C={cases:{hex:"#CC1034",color:"rgba(204, 16, 52, 0.4)",multiplier:900},recovered:{hex:"#73cf11",color:"rgba(115, 207, 17, 0.4)",multiplier:1200},deaths:{hex:"#fb4443",color:"rgba(251, 68, 67, 0.4)",multiplier:2e3}},N=function(e){var t=Object(g.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t};var k=function(e){var t=e.countries,a=e.type,n=e.center,c=e.zoom;return r.a.createElement("div",{className:"map"},r.a.createElement(b.a,{center:n,zoom:c},r.a.createElement(y.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return r.a.createElement(w.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:C[t].hex,fillColor:C[t].hex,radius:Math.sqrt(e[t])*C[t].multiplier},r.a.createElement(O.a,null,r.a.createElement("div",{className:"popup_country"},r.a.createElement("div",{className:"popup_text"},e.country),r.a.createElement("img",{className:"popup_country_flag",src:e.countryInfo.flag})),r.a.createElement("div",{className:"popup_text"},r.a.createElement("strong",null,"Total Cases:")," ",x()(e.cases).format("0,0")),r.a.createElement("div",{className:"popup_text"},r.a.createElement("strong",null,"Active Cases:")," ",x()(e.active).format("0,0")),r.a.createElement("div",{className:"popup_text"},r.a.createElement("strong",null,"Recovered:")," ",x()(e.recovered).format("0,0")),r.a.createElement("div",{className:"popup_text"},r.a.createElement("strong",null,"Deaths:")," ",x()(e.deaths).format("0,0"))))}))}(t,a)))};a(107);var _=function(e){return r.a.createElement("div",{className:"table"},r.a.createElement("tr",null,r.a.createElement("td",null,"Worldwide"),r.a.createElement("td",null,x()(e.worldTotal).format("0,0"))),e.countries.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.country),r.a.createElement("td",null,x()(e.cases).format("0,0")))})))},S=a(87),I={legend:{display:!1},elements:{points:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return x()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return x()(e).format("0a")}}}]}};var R=function(e){var t=e.type,a=e.countryCode,c=Object(n.useState)({}),o=Object(u.a)(c,2),s=o[0],m=o[1],d=Object(n.useState)(!0),p=Object(u.a)(d,2),f=p[0],h=p[1],v=function(e,t){var a,n=[];for(var r in e[t]){if(a){var c={x:r,y:e[t][r]-a};n.push(c)}a=e[t][r]}return n};return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="worldwide"===a?"https://disease.sh/v3/covid-19/historical/all?lastdays=60":"https://disease.sh/v3/covid-19/historical/".concat(a,"?lastdays=60"),e.next=3,fetch(n).then((function(e){return e.json()})).then((function(e){1===Object.keys(e).length?h(!1):(m(v("worldwide"===a?e:e.timeline,t)),h(!0))}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,a]),r.a.createElement("div",null,s.length>0&&f?r.a.createElement(S.Line,{options:I,data:{datasets:[{backgroundColor:C[t].color,borderColor:C[t].hex,data:s}]}}):r.a.createElement("h3",{className:"no_data"},"There is no data for the last 60 days"))};a(204);var T=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)("worldwide"),s=Object(u.a)(o,2),v=s[0],b=s[1],y=Object(n.useState)({}),g=Object(u.a)(y,2),j=g[0],w=g[1],O=Object(n.useState)([]),S=Object(u.a)(O,2),I=S[0],T=S[1],W=Object(n.useState)({lat:21,lng:105.8}),z=Object(u.a)(W,2),D=z[0],M=z[1],A=Object(n.useState)(3),G=Object(u.a)(A,2),L=G[0],B=G[1],J=Object(n.useState)("https://disease.sh/v3/covid-19/historical/all?lastdays=60"),Y=Object(u.a)(J,2),q=(Y[0],Y[1],Object(n.useState)([])),F=Object(u.a)(q,2),$=F[0],H=F[1],K=Object(n.useState)("cases"),P=Object(u.a)(K,2),Q=P[0],U=P[1],V=Object(n.useState)(0),X=Object(u.a)(V,2),Z=X[0],ee=X[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,code:e.countryInfo.iso3,flag:e.countryInfo.flag}}));H(e),c(t),T(N(e))}));case 2:return e.next=4,fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){w(e),ee(e.cases)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var te=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,b(a),n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=5,fetch(n).then((function(e){return e.json()})).then((function(e){w(e),"worldwide"!==a&&(M([e.countryInfo.lat,e.countryInfo.long]),B(4))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app_left"},r.a.createElement("div",{className:"app_header"},r.a.createElement("div",{className:"app_title"},r.a.createElement("h1",null,"Covid 19 Tracker")),r.a.createElement(m.a,{className:"app_dropdown"},r.a.createElement(d.a,{variant:"outlined",value:v,onChange:te,className:"country_option"},r.a.createElement(p.a,{value:"worldwide"},"World Wide"),a.map((function(e){return r.a.createElement(p.a,{value:e.code},e.name,r.a.createElement("img",{className:"country_flag",src:e.flag}))})))))," ",r.a.createElement("div",{className:"statistics"},r.a.createElement(E,{caseColor:C.cases.hex,isRed:"cases"===Q,isGreen:!1,onClick:function(e){return U("cases")},title:"Coronavirus Cases",increment:x()(j.todayCases).format("0,0"),total:x()(j.cases).format("0a")}),r.a.createElement(E,{caseColor:C.recovered.hex,isRed:!1,isGreen:"recovered"===Q,onClick:function(e){return U("recovered")},title:"Recovered",increment:x()(j.todayRecovered).format("0,0"),total:x()(j.recovered).format("0a")}),r.a.createElement(E,{caseColor:C.deaths.hex,isRed:"deaths"===Q,isGreen:!1,onClick:function(e){return U("deaths")},title:"Deaths",increment:x()(j.todayDeaths).format("0,0"),total:x()(j.deaths).format("0a")})),r.a.createElement(k,{countries:$,type:Q,center:D,zoom:L})),r.a.createElement(f.a,{className:"app_right"},r.a.createElement(h.a,null,r.a.createElement("h3",{style:{fontSize:"24px"}},"Live Cases by Countries"),r.a.createElement(_,{countries:I,worldTotal:Z}),r.a.createElement("h3",{className:"graph_title"},"worldwide"===v?"Worldwide":j.country," ",r.a.createElement("span",{style:{color:C[Q].hex}},Q)," in last 60 days"),r.a.createElement(R,{type:Q,countryCode:v}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(205)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.010ecc6e.chunk.js.map