(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(68)},35:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(16),s=a.n(o),c=(a(35),a(3)),r=a(4),i=a(6),u=a(5),d=a(7),m=a(17),h=a.n(m),b=new(a(28).a),v=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={loginUrl:"",resourceOwnerKeyCookie:"",resourceOwnerSecretCookie:"",isLoggedIn:!1,username:null},e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"checkLoginStatus",value:function(){var e=this;return h.a.get("https://api.threadedtweeter.com/v2/login/status",{withCredentials:!0}).then(function(t){var a=Object.assign({},e.state);console.log("checking login status"),t.data.Status?(console.log("setting username"),a.isLoggedIn=t.data.Status,a.username=t.data.username,e.setState(a)):(console.log("not logged in"),a.isLoggedIn=t.data.Status,e.setState(a))})}},{key:"componentDidMount",value:function(){var e=this;this.checkLoginStatus().then(function(t){e.state.isLoggedIn||(console.log("not logged in part 2"),h.a.get("https://api.threadedtweeter.com/v2/login?mode=webapp").then(function(t){e.setState({loginUrl:t.data.url,resourceOwnerKeyCookie:b.get("resource_owner_key"),resourceOwnerSecretCookie:b.get("resource_owner_secret"),isLoggedIn:!1,username:null});var a=e.state.resourceOwnerKeyCookie,n=e.state.resourceOwnerSecretCookie;b.set("resource_owner_key",a,{path:"/",expires:new Date("2020-1-1")}),b.set("resource_owner_secret",n,{path:"/",expires:new Date("2020-1-1")})}))})}},{key:"render",value:function(){var e,t=this.state.isLoggedIn;return console.log(this.state),e=t?"Hello ".concat(this.state.username,"!"):l.a.createElement("a",{className:"button",href:this.state.loginUrl},"Login with Twitter"),l.a.createElement("div",{className:"login_component"},e)}}]),t}(n.Component),p=a(70),E={src:"src/logo.jpg",alt:"logo",style:"width:70px;"},g=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"main-header"},l.a.createElement("div",{className:"sub-header1"},l.a.createElement("div",{className:"h-1"},l.a.createElement("div",null,"Tweet"),l.a.createElement("div",null,"Together")),l.a.createElement("div",{className:"h-2"},l.a.createElement("img",{src:E.src,alt:E.alt,style:E.width})),l.a.createElement("div",{className:"h-3"},"Threaded Tweeter")),l.a.createElement("div",{className:"sub-header2"},l.a.createElement("div",{className:"h-4"},l.a.createElement(p.a,{path:"/",component:v}))))}}]),t}(n.Component),O=a(9),f=a(18),j=a.n(f);j.a.setAppElement("#main");var y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={showModal:!1},e.handleOpenModal=e.handleOpenModal.bind(Object(O.a)(Object(O.a)(e))),e.handleCloseModal=e.handleCloseModal.bind(Object(O.a)(Object(O.a)(e))),e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"notbutton",onClick:this.handleOpenModal},"Splitting options"),l.a.createElement(j.a,{isOpen:this.state.showModal,class:"modal-content"},l.a.createElement("div",{class:"modal-header"},l.a.createElement("div",{class:"modal-title",id:"exampleModalLabel"},"Tweet splitting allows us to formate your thread for you."),l.a.createElement("button",{onClick:this.handleCloseModal,type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{class:"modal-body"},"..."),l.a.createElement("div",{class:"modal-footer"},l.a.createElement("form",null,l.a.createElement("div",{class:"b-7","data-dismiss":"modal"},l.a.createElement("input",{type:"submit2",value:"cancel"})),l.a.createElement("div",{class:"b-6"},l.a.createElement("input",{type:"submit2",value:"submit"}))))))}}]),t}(l.a.Component),w=l.a.createElement("div",{className:"b-1"},"Auto splitting: off"),k=l.a.createElement("div",{className:"b-3"},l.a.createElement("input",{type:"submit2",value:"submit"})),x=l.a.createElement("div",{className:"b-2"},l.a.createElement(y,null)),N=function(e){var t=e.boxes;return l.a.createElement("div",null,t.map(function(e){return l.a.createElement("div",{key:e.index},l.a.createElement("textarea",{type:"text2",id:"tweet",name:"tweet"}),l.a.createElement("div",{className:"sub-body2"},l.a.createElement("div",{className:"b-4"},"Add picture"),C))}))},C=l.a.createElement("div",{className:"b-5"},"0/280 characters used"),S=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleaddbox=a.handleaddbox.bind(Object(O.a)(Object(O.a)(a))),a.handleremovebox=a.handleremovebox.bind(Object(O.a)(Object(O.a)(a)));var n=[];return n.push({boxnum:{index:1}}),a.state={boxes:n},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleaddbox",value:function(){var e=this.state.boxes;e.push({index:e.length}),this.setState({boxes:e}),console.log("handleaddbox "+this.state.boxes.length)}},{key:"handleremovebox",value:function(){var e=this.state.boxes;e.splice(e.length-1,1),this.setState({boxes:e}),console.log("handleremovebox "+this.state.boxes.length)}},{key:"render",value:function(){var e,t=this.state.boxes;return e=1===t.length?l.a.createElement("div",{className:"centeronebutton"},l.a.createElement("button",{className:"circlebutton",onClick:this.handleaddbox},"+")):l.a.createElement("div",{className:"centeronebutton"},l.a.createElement("button",{className:"circlebutton",onClick:this.handleremovebox},"-"),l.a.createElement("button",{className:"circlebutton",onClick:this.handleaddbox},"+")),l.a.createElement("div",{className:"main-body"},l.a.createElement("div",{className:"sub-body"},l.a.createElement("div",{className:"sub-body1"},w,x),l.a.createElement(N,{boxes:t}),e,k))}}]),t}(l.a.Component),M=l.a.createElement("form",{action:"http://google.com"},l.a.createElement("input",{type:"link",value:"contact us"})),L=l.a.createElement("form",{action:"http://google.com"},l.a.createElement("input",{type:"link",value:"help"})),_={src:"src/logo2.jpg",alt:"logo2",style:"width:55px;"},I=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"main-footer"},l.a.createElement("div",{className:"h-1"},L),l.a.createElement("div",{className:"h-2"},l.a.createElement("img",{src:_.src,alt:_.alt,style:_.width})),l.a.createElement("div",{className:"h-5"},M))}}]),t}(n.Component),T=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"bodystyle"},l.a.createElement(g,null),l.a.createElement(S,null),l.a.createElement(I,null))}}]),t}(n.Component),A=(a(66),a(69)),D=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(A.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(T,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.f5e6bbd7.chunk.js.map