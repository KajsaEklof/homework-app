(this["webpackJsonphomework-app"]=this["webpackJsonphomework-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),i=n.n(r),s=(n(14),n(1)),c=n(2),l=n(4),u=n(3),m=n(5),h=(n(15),n(6)),v=n.n(h),p=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={days:void 0,hours:void 0,minutes:void 0,seconds:void 0},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){var t=e.props,n=t.timeTillDate,a=t.timeFormat,o=v()(n,a),r=v()(),i=v()(o-r),s=i.format("D"),c=i.format("HH"),l=i.format("mm"),u=i.format("ss");e.setState({days:s,hours:c,minutes:l,seconds:u})}),1e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.days,n=e.hours,a=e.minutes,r=e.seconds;return o.a.createElement("div",null,o.a.createElement("div",{className:"countdown-wrapper"},t,o.a.createElement("span",null," Days "),n,o.a.createElement("span",null," Hours "),a,o.a.createElement("span",null," Minutes "),r,o.a.createElement("span",null," Seconds ")))}}]),t}(a.Component),d=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App-header"},o.a.createElement("h1",null,"How long until Christmas Eve?"),o.a.createElement(p,{timeTillDate:"12 24 2019, 06:00 am",timeFormat:"MM DD YYYY, h:mm a"}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.42f252c8.chunk.js.map