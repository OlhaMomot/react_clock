(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(7),c=n.n(a),o=n(2),i=n(3),s=n(5),r=n(4),l=n(1),u=n.n(l),d=(n(12),n(0)),m=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={today:new Date},t.timerId=0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({today:new Date}),console.info(t.state.today.toUTCString().slice(-12,-4))}),1e3)}},{key:"shouldComponentUpdate",value:function(t,e){return t.name!==this.props.name||e.today!==this.state.today}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.debug("Renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:this.props.name})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:this.state.today.toUTCString().slice(-12,-4)})]})}}]),n}(u.a.Component);function h(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var p=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={hasClock:!0,clockName:"Clock-0"},t.timerId=0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;document.addEventListener("contextmenu",(function(e){e.preventDefault(),t.setState({hasClock:!1})})),document.addEventListener("click",(function(){t.setState({hasClock:!0})})),this.timerId=window.setInterval((function(){t.setState({clockName:h()})}),3300)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),this.state.hasClock&&Object(d.jsx)(m,{name:this.state.clockName})]})}}]),n}(u.a.Component);c.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5f4e45d1.chunk.js.map