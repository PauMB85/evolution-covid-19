(this["webpackJsonpevolucion-covid-19"]=this["webpackJsonpevolucion-covid-19"]||[]).push([[0],{104:function(e,a,t){},199:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(28),c=t.n(o),s=(t(81),t(6)),l=t.n(s),i=t(13),u=t(21),d=t(29),m=t.n(d),p=m.a.create({baseURL:"https://covid19.mathdro.id/api"});p.interceptors.response.use((function(e){return e.data?e.data:e}));var v=p,f=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.get();case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.get("/daily");case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),b=(t(99),t(214)),E=t(215),g=t(216),y=t(217),N=t(32),C=t.n(N);t(104);var w=function(e){var a=e.summary,t=a.infected,r=a.recovered,o=a.deaths,c=a.isLoading;return n.a.createElement("div",{className:"Summary"},n.a.createElement("h1",{className:"Summary--title"},"Summary in the world"),n.a.createElement("div",{className:"Summary--cards"},n.a.createElement(b.a,{container:!0,justify:"space-between"},n.a.createElement(b.a,{item:!0,xs:12,md:3,component:E.a,className:"card card--recovered"},n.a.createElement(g.a,null,n.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),n.a.createElement(y.a,{variant:"h5",component:"h2"},n.a.createElement(C.a,{start:0,end:c?0:r,duration:2,separator:","})),n.a.createElement(y.a,{variant:"body2",component:"p"},"Number of recoveries by COVID-19."))),n.a.createElement(b.a,{item:!0,xs:12,md:3,component:E.a,className:"card card--infected"},n.a.createElement(g.a,null,n.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Infected"),n.a.createElement(y.a,{variant:"h5",component:"h2"},n.a.createElement(C.a,{start:0,end:c?0:t,duration:2,separator:","})),n.a.createElement(y.a,{variant:"body2",component:"p"},"Number of infected by COVID-19."))),n.a.createElement(b.a,{item:!0,xs:12,md:3,component:E.a,className:"card card--deaths"},n.a.createElement(g.a,null,n.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),n.a.createElement(y.a,{variant:"h5",component:"h2"},n.a.createElement(C.a,{start:0,end:c?0:o,duration:2,separator:","})),n.a.createElement(y.a,{variant:"body2",component:"p"},"Number of deaths by COVID-19."))))))},O=t(218),x=t(200),j=t(219),S=t(72);var k=function(e){var a=e.chartConfig,t=Object(r.useState)({}),o=Object(u.a)(t,2),c=o[0],s=o[1];Object(r.useEffect)((function(){console.log("los datos que recibimos son: ",a),function(){var e=a.dataCharts,t=a.labelsCharts,r=e.map((function(e){return l(e)}));s({datasets:r,labels:t})}()}),[]);var l=function(e){var a=e.label,t=e.color;return{label:a,fill:!1,lineTension:.1,backgroundColor:t,borderColor:t,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:{color:t},pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:t,pointHoverBorderColor:t,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:e.data}};return n.a.createElement("div",null,n.a.createElement(S.a,{data:c}))};var B=function(){var e=Object(r.useState)({isLoading:!0}),a=Object(u.a)(e,2),t=a[0],o=a[1],c=Object(r.useState)(),s=Object(u.a)(c,2),d=s[0],m=s[1];Object(r.useEffect)((function(){var e=function(){var e=Object(i.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:a=e.sent,v(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(i.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:a=e.sent,p(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),a()}),[]);var p=function(e){console.log("al crear chart data",e);var a=[],t=[],r=[],n=[];e.forEach((function(e){a.push(e.deaths.total?e.deaths.total:e.deaths),t.push(e.totalRecovered?e.totalRecovered:e.recovered),r.push(e.totalConfirmed?e.totalConfirmed:e.confirmed),n.push(e.reportDate?e.reportDate:e.date)})),m({dataCharts:[{label:"Recovered",color:"rgba(0, 255, 0, 0.25)",data:t},{label:"Infected",color:"rgba(255, 0, 0, 0.25)",data:r},{label:"Deaths",color:"rgba(0, 0, 0, 0.5)",data:a}],labelsCharts:n})},v=function(e){o({infected:e.confirmed.value,recovered:e.recovered.value,deaths:e.deaths.value,isLoading:!1})};return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App--header"},n.a.createElement("h1",null,"COVID - 19")),n.a.createElement("main",{className:"App--main"},n.a.createElement(O.a,{className:"App--main__conteiner"},n.a.createElement("div",{className:"App--main__conteiner--elements"},n.a.createElement(w,{summary:t}),d?n.a.createElement(k,{chartConfig:d}):null))),n.a.createElement("footer",{className:"App--footer"},n.a.createElement(x.a,{className:"paper",variant:"outlined",square:!0},n.a.createElement("div",{className:"flex-column"},n.a.createElement("div",{className:"social"}),n.a.createElement("div",{className:"rights"},"\xa9 Pau Maravi Busquets - v0.1"),n.a.createElement("div",{className:"rights"},"All the data is from ",n.a.createElement(j.a,{href:"https://github.com/mathdroid/covid-19-api",target:"_blank",rel:"noreferrer"},"Mathdro"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,a,t){e.exports=t(199)},81:function(e,a,t){},99:function(e,a,t){}},[[76,1,2]]]);
//# sourceMappingURL=main.3fe1b05c.chunk.js.map