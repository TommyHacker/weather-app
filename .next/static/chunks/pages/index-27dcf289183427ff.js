(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3685:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1878)}])},1878:function(e,t,n){"use strict";n.r(t);var a=n(5893),c=n(7294),s=n(4155),i=n(9669);s.env.API_KEY;t.default=function(){var e=(0,c.useState)("location not set!"),t=e[0],n=e[1],s=(0,c.useState)(),r=s[0],o=s[1],l=(0,c.useState)(),u=l[0],h=l[1],d=(0,c.useState)(),m=d[0],p=d[1],f=(0,c.useState)(),x=f[0],_=f[1],j=(0,c.useState)(),N=j[0],w=j[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"weather-container",children:[(0,a.jsx)("h1",{className:"location",children:t}),(0,a.jsx)("p",{className:"time",children:x}),N?(0,a.jsx)("img",{className:"icon",src:N,alt:"weather icon"}):"",r?(0,a.jsxs)("p",{className:"weather",children:["weather: ",r]}):"",u?(0,a.jsxs)("p",{className:"temp",children:[u,"\xb0C"]}):"0C",m?(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"small-text",children:"feels like"})," ",m,"\xb0C"]}):""]}),(0,a.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),i.get("http://api.weatherapi.com/v1/current.json?key=".concat("8944119ceb2c45258f6142745221101","&q=").concat(t)).then((function(e){o(e.data.current.condition.text),h(e.data.current.temp_c),p(e.data.current.feelslike_c),_(e.data.location.localtime.split("").slice(11,16).join("")),w(e.data.current.condition.icon)})).catch((function(e){return console.log(e)})),e.target.locationName.value=""}(e)},children:[(0,a.jsx)("input",{type:"text",name:"locationName",onChange:function(e){return n(e.target.value)},placeholder:"location"}),(0,a.jsx)("button",{type:"submit",children:"Get Weather"})]})]})}}},function(e){e.O(0,[669,774,888,179],(function(){return t=3685,e(e.s=t);var t}));var t=e.O();_N_E=t}]);