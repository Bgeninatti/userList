(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),c=a.n(s),i=(a(14),a(1)),o=a(2),l=a(4),u=a(3),m=a(5),d=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-light bg-light fixed-top"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Users List"))}}]),t}(n.Component),h=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card m-3"},r.a.createElement("div",{className:"card-header"},"#",this.props.id),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},this.props.email)))}}]),t}(n.Component),p=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"d-flex justify-content-center mt-5"},r.a.createElement("div",{className:"spinner-border text-primary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}}]),t}(n.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},this.props.loading?r.a.createElement(p,null):this.props.users.length>0?this.props.users.map(function(e){return r.a.createElement(h,{key:e.id,id:e.id,email:e.email})}):r.a.createElement("p",null,"No users found"))))}}]),t}(n.Component),f={rest:{users:"http://localhost:8000/api/user/"}};var v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={loading:!1,users:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.fetchUsers()}},{key:"fetchUsers",value:function(){var e=this;this.setState({loading:!0}),fetch(f.rest.users).then(function(e){return e.json()}).then(function(t){var a;console.log(t),e.setState({loading:!1,users:(a=t,a.map(function(e){return{id:(t=e).id,email:t.email};var t}))})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(b,{loading:this.state.loading,users:this.state.users}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(15);c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.da68a2ab.chunk.js.map