(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/logo2.6ed5019e.JPG"},32:function(e,t,a){e.exports=a(71)},37:function(e,t,a){},58:function(e,t,a){e.exports=a.p+"static/media/logo.56a41b55.JPG"},69:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(17),s=a.n(o),i=(a(37),a(3)),r=a(4),c=a(6),h=a(5),d=a(7),u=a(1),m=a(13),p=a.n(m),b=new(a(31).a),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(h.a)(t).call(this))).state={loginUrl:"",resourceOwnerKeyCookie:"",resourceOwnerSecretCookie:"",isLoggedIn:!1,username:null},e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"checkLoginStatus",value:function(){var e=this,t=Object.assign({},this.state);return p.a.get("https://api.threadedtweeter.com/v2/login/status",{withCredentials:!0}).then(function(a){t.isLoggedIn=a.data.Status,t.username=a.data.username,e.setState(t)},function(a){t.isLoggedIn=!1,e.setState(t)})}},{key:"logout",value:function(){console.log("logging out"),b.remove("access_token_key",{path:"/",domain:".threadedtweeter.com"}),b.remove("access_token_secret",{path:"/",domain:".threadedtweeter.com"}),window.location.reload()}},{key:"componentDidMount",value:function(){var e=this;this.checkLoginStatus().then(function(t){e.state.isLoggedIn||(console.log("not logged in part 2"),p.a.get("https://api.threadedtweeter.com/v2/login?mode=webapp").then(function(t){e.setState({loginUrl:t.data.url,resourceOwnerKeyCookie:t.data.cookie_1,resourceOwnerSecretCookie:t.data.cookie_2,isLoggedIn:!1,username:null});var a=e.state.resourceOwnerKeyCookie.split(";")[0].split("=")[1],n=e.state.resourceOwnerSecretCookie.split(";")[0].split("=")[1];b.set("resource_owner_key",a,{path:"/",expires:new Date("2020-1-1"),domain:".threadedtweeter.com"}),b.set("resource_owner_secret",n,{path:"/",expires:new Date("2020-1-1"),domain:".threadedtweeter.com"})}))})}},{key:"render",value:function(){var e,t=this.state.isLoggedIn;return console.log(this.state),e=t?l.a.createElement(l.a.Fragment,null," ",l.a.createElement("span",null," Hello ",this.state.username," ")," ",l.a.createElement("a",{className:"button",onClick:this.logout},"Logout")," "):this.state.loginUrl?l.a.createElement("a",{className:"button",href:this.state.loginUrl},"Login with Twitter"):"Loading...",l.a.createElement("div",{className:"login_component"},e)}}]),t}(n.Component),v=a(73),g=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"main-header"},l.a.createElement("div",{className:"sub-header1"},l.a.createElement("div",{className:"h-1"},l.a.createElement("div",null,"Tweet"),l.a.createElement("div",null,"Together")),l.a.createElement("div",{className:"h-2"},l.a.createElement("img",{width:"70px",src:a(58),alt:"logo"})),l.a.createElement("div",{className:"h-3",onClick:this.props.handleHome},"Threaded Tweeter")),l.a.createElement("div",{className:"sub-header2"},l.a.createElement("div",{className:"h-4"},l.a.createElement(v.a,{path:"/",component:f}))))}}]),t}(n.Component),w=a(18),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={value:"",file:""},a.handleChange=a.handleChange.bind(Object(u.a)(Object(u.a)(a))),a.fileHandler=a.fileHandler.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({value:t}),this.props.onChange(this.props.id,t)}},{key:"fileHandler",value:function(e){this.setState({file:e.target.files[0]}),console.log(this.state.file)}},{key:"render",value:function(){var e;return e=this.state.value.length<=280?l.a.createElement("div",{className:"b-5"},this.state.value.length,"/280"):l.a.createElement("div",{className:"b-5-red"},this.state.value.length,"/280"),l.a.createElement("div",null,l.a.createElement("textarea",{type:"text2",id:"tweet",name:"tweet",onChange:this.handleChange,value:this.state.value}),l.a.createElement("div",{className:"sub-body2"},l.a.createElement("div",{className:"b-4"},l.a.createElement("input",{type:"file",onChange:this.fileHandler})),e))}}]),t}(l.a.Component),y=a(29),O=a.n(y),j={content:{top:"30%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0px"}},C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={Bsplitting:e.Bsplitting,splitting:e.splitting,showModal:e.showModal},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e;return"off"===this.props.splitting?(e=l.a.createElement("div",{className:"b-1"},"Auto splitting: off"),console.log("splitting displays off")):(e=l.a.createElement("div",{className:"b-1"},"Auto splitting: on"),console.log("splitting displays on")),l.a.createElement("div",{className:"sub-body1"},e,l.a.createElement("div",{className:"b-2"},l.a.createElement("button",{type:"button",className:"notbutton",onClick:this.props.handleOpenModal},"Splitting options"),l.a.createElement(O.a,{isOpen:this.props.showModal,style:j},l.a.createElement("div",{className:"modal-header"},l.a.createElement("div",{className:"modal-title",id:"exampleModalLabel"},"Tweet splitting allows us to formate your thread for you."),l.a.createElement("button",{onClick:this.props.handleCloseModal,type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",null,"Basic splitting:",l.a.createElement("input",{name:"Bsplitting",type:"checkbox",checked:this.props.Bsplitting,onChange:this.props.handleInputChange}))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("div",{className:"b-7","data-dismiss":"modal"},l.a.createElement("button",{type:"submit2",onClick:this.props.handleCancel},"cancel")),l.a.createElement("div",{className:"b-6"},l.a.createElement("button",{type:"submit2",onClick:this.props.handleCloseModal}," submit "))))))}}]),t}(l.a.Component),k=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleaddbox=a.handleaddbox.bind(Object(u.a)(Object(u.a)(a))),a.handleremovebox=a.handleremovebox.bind(Object(u.a)(Object(u.a)(a))),a.handleInputChange=a.handleInputChange.bind(Object(u.a)(Object(u.a)(a))),a.handleTweetChange=a.handleTweetChange.bind(Object(u.a)(Object(u.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(Object(u.a)(a))),a.handleCancel=a.handleCancel.bind(Object(u.a)(Object(u.a)(a))),a.handleOpenModal=a.handleOpenModal.bind(Object(u.a)(Object(u.a)(a))),a.handleCloseModal=a.handleCloseModal.bind(Object(u.a)(Object(u.a)(a)));var n=[];return n.push({index:0}),a.state={boxes:n,Bsplitting:!1,splitting:"off",showModal:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleSubmit",value:function(){for(var e=this.state.boxes.length,t=[],a=0;a<e;a++)t.push({STATUS:this.state[a],MEDIA:[]});var n={TWEETS:t};console.log(JSON.stringify(n));var l=new XMLHttpRequest;l.open("POST","https://api.threadedtweeter.com/v2/post-thread",!1),l.withCredentials=!0,l.send(JSON.stringify(n));var o=l.response;console.log(o)}},{key:"handleaddbox",value:function(){var e=this.state.boxes;e.push({index:e.length}),this.setState({boxes:e}),console.log("handleaddbox "+this.state.boxes.length)}},{key:"handleOpenModal",value:function(){this.setState({showModal:!0}),console.log("Open Modal")}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1}),console.log("Close Modal")}},{key:"handleremovebox",value:function(){var e=this.state.boxes;e.splice(e.length-1,1),this.setState({boxes:e}),console.log("handleremovebox "+this.state.boxes.length)}},{key:"handleCancel",value:function(){this.setState({Bsplitting:!1,splitting:"off"}),console.log("cancel: set splitting state "+this.state.splitting),console.log("cancel: set Bsplitting state "+this.state.Bsplitting),this.setState({showModal:!1})}},{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(w.a)({},n,a)),!0===this.state.Bsplitting?(this.setState({splitting:"off"}),console.log("set splitting state off")):(this.setState({splitting:"on"}),console.log("set splitting state on"))}},{key:"handleTweetChange",value:function(e,t){this.setState(Object(w.a)({},e,t))}},{key:"render",value:function(){var e,t=this,a=this.state.boxes.map(function(e){return l.a.createElement(E,{key:e.index,id:e.index,onChange:t.handleTweetChange,value:t.state[e]})});e=1===this.state.boxes.length?l.a.createElement("div",{className:"centeronebutton"},l.a.createElement("button",{className:"circlebutton",onClick:this.handleaddbox},"+")):l.a.createElement("div",{className:"centeronebutton"},l.a.createElement("button",{className:"circlebutton",onClick:this.handleremovebox},"-"),l.a.createElement("button",{className:"circlebutton",onClick:this.handleaddbox},"+"));var n=l.a.createElement("div",{className:"b-3"},l.a.createElement("button",{type:"submit2",onClick:this.handleSubmit},"submit"));return l.a.createElement("div",{className:"main-body"},l.a.createElement("div",{className:"sub-body"},l.a.createElement(C,{showModal:this.state.showModal,Bsplitting:this.state.Bsplitting,splitting:this.state.splitting,handleInputChange:this.handleInputChange,handleCancel:this.handleCancel,handleOpenModal:this.handleOpenModal,handleCloseModal:this.handleCloseModal}),a,e,n))}}]),t}(l.a.Component),N=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"main-footer"},l.a.createElement("div",{className:"h-1"},l.a.createElement("button",{type:"link",onClick:this.props.handleHelp}," help ")),l.a.createElement("div",{className:"h-2"},l.a.createElement("img",{width:"55px",src:a(27),alt:"logo2"})),l.a.createElement("div",{className:"h-5"},l.a.createElement("button",{type:"link",onClick:this.props.handleContact}," contact us ")))}}]),t}(n.Component),x=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"splash-footer"},l.a.createElement("div",{className:"splash-header"},l.a.createElement("div",{className:"splash-1"},"Threaded Tweeter")),l.a.createElement("div",{className:"splash-body"},l.a.createElement("div",{className:"splash-2"},l.a.createElement("button",{type:"link",onClick:this.props.handleContact}," contact us ")),l.a.createElement("div",{className:"splash-3"},l.a.createElement(v.a,{path:"/",component:f})),l.a.createElement("div",{className:"splash-4"},l.a.createElement("button",{type:"link",onClick:this.props.handleHelp}," help "))),l.a.createElement("div",{className:"splash-subfooter"},l.a.createElement("div",{className:"splash-5"},"An innovative tool for quick and easy threaded tweets"),l.a.createElement("img",{width:"100px",src:a(27),alt:"logo2"}),l.a.createElement("div",{className:"splash-5"},"Tweet Together lot of othe words that I havent figured out yet lot of othe words that I havent figured out yet lot of othe words that I havent figured out yet lot of othe words that I havent figured out yet lot of othe words that I havent figured out yet lot of othe words that I havent figured out yet lot of othe words that I havent figured out yet")))}}]),t}(n.Component),H=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"help"},l.a.createElement("div",{className:"help-header"},"Contact us"),l.a.createElement("div",{className:"help-body"},'We are creating a tool called "Threaded Tweeter" which will serve as a tool for computer power users to quickly and easily compose and post threaded tweets. The core product will be a command line tool that allows a user to compose a tweet thread in their preferred text editor, and post to twitter from the comfort of their terminal emulator.',l.a.createElement("div",{className:"help-subheader"},"https://github.com/peakay/ThreadedTweeter"),l.a.createElement("div",{className:"help-subheader"})))}}]),t}(n.Component),T=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"help"},l.a.createElement("div",{className:"help-header"},"Help"),l.a.createElement("div",{className:"help-body"},l.a.createElement("div",{className:"help-subheader"},"General information:"),"Threaded Tweeter is a web application that can help you make threaded tweets on twitter. You have full control of what content goes in each tweet, including pictures, but we can format you tweets for you as well.",l.a.createElement("div",{className:"help-subheader"},"How to create a thread:"),"Users must first login with twitter and authorize our app to post tweets on their page. Threaded tweeter will only post threads you create, and delete unfinished threads if there was a fatal error. Type or paste your tweet into the textbox. Use the \u201c+\u201d button to add a new tweet to your thread. Tweets appear on the page in order, first to last. Click the \u201c-\u201d button to remove a tweet from your thread. You can attach a picture to any tweet by clicking the \u201cAdd picture\u201d button or dragging a picture onto the tweet from your desktop. Tweets are constrained by Twitter\u2019s 280 character count. Threaded Tweeter shows an indicator of your current character count for each tweet at the bottom right of the textbox. Our app can automatically split and format your tweets for you. Click \u201csplitting options\u201d above the text box to access these. Click \u201csend\u201d to publish your tweet. After publishing a tweet, you should see a \u201cSuccess\u201d message and a window showing your thread.",l.a.createElement("div",{className:"help-subheader"},"Tweet splitting options:"),"Splitting can be done at the end of the next word, after punctuation such as periods, commas and semicolons, or at punctuation and emoji. We can also number the tweets in your thread for you. You can put custom text at the start and or end of each tweet. This text will not appear at the start of your first tweet or the end of your last tweet. You can use this option to put in ellipses, for example.",l.a.createElement("div",{className:"help-subheader"},"Errors:"),"If you received an error notice it may have been caused by some of these common errors: Attempting to post a tweet while not logged in. Attempting to post a tweet over the character limit. Authentication or authorization failures. Connection/Internet failures. If a failure occurs after some of the thread has already been posted, Threaded Tweeter will attempt to delete them for you. Certain errors, such as a dropped connection, may make it impossible to delete the unfinished thread. Threaded Tweeter will show you your timeline after a failure occurs, so you can check for partial threads and delete them manually.",l.a.createElement("div",{className:"help-subheader"})))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"after-tweet"},l.a.createElement("div",{className:"after-tweet-header"},l.a.createElement("div",{className:"success-1"},"Success!"),l.a.createElement("div",{className:"success-2"},"Your thread of X tweets was posted sucessfully.")),l.a.createElement("div",{className:"after-tweet-body"},"TODO:PUTTWEET"),l.a.createElement("div",{className:"after-tweet-footer"},l.a.createElement("button",{type:"link",onClick:this.props.handleHome}," post another ")))}}]),t}(l.a.Component),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"after-tweet"},l.a.createElement("div",{className:"after-tweet-header"},l.a.createElement("div",{className:"fail-1"},"Uh-oh!"),l.a.createElement("div",{className:"fail-2"},"Your thread failed to post, we tried to delete the incomplete thread, but one or more tweets may still be on your feed. Please check your feed for unfinished threads.")),l.a.createElement("div",{className:"after-tweet-body"},"TODO:PUT TWEET"),l.a.createElement("div",{className:"after-tweet-footer"},l.a.createElement("button",{type:"link",onClick:this.props.handleHome}," post another ")),l.a.createElement("button",{type:"button",className:"notbutton",onClick:this.props.handleHelp},"what happened?"))}}]),t}(l.a.Component),I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={loggedin:!0,help:!1,contact:!1,tweetsent:"no"},a.handleHelp=a.handleHelp.bind(Object(u.a)(Object(u.a)(a))),a.handleContact=a.handleContact.bind(Object(u.a)(Object(u.a)(a))),a.handleHome=a.handleHome.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleHelp",value:function(){this.setState({help:!0,contact:!1}),console.log("help")}},{key:"handleContact",value:function(){this.setState({help:!1,contact:!0}),console.log("contact us")}},{key:"handleHome",value:function(){this.setState({help:!1,contact:!1,tweetsent:"no"})}},{key:"render",value:function(){var e;return e=!0===this.state.help?l.a.createElement("div",{className:"bodystyle"},l.a.createElement(g,{handleHome:this.handleHome}),l.a.createElement(T,null),l.a.createElement(N,{handleHelp:this.handleHelp,handleContact:this.handleContact})):!0===this.state.contact?l.a.createElement("div",{className:"bodystyle"},l.a.createElement(g,{handleHome:this.handleHome}),l.a.createElement(H,null),l.a.createElement(N,{handleHelp:this.handleHelp,handleContact:this.handleContact})):!0===this.state.loggedin?"success"===this.state.tweetsent?l.a.createElement("div",{className:"bodystyle"},l.a.createElement(g,{handleHome:this.handleHome}),l.a.createElement(S,{handleHome:this.handleHome}),l.a.createElement(N,{handleHelp:this.handleHelp,handleContact:this.handleContact})):"fail"===this.state.tweetsent?l.a.createElement("div",{className:"bodystyle"},l.a.createElement(g,{handleHome:this.handleHome}),l.a.createElement(M,{handleHome:this.handleHome,handleHelp:this.handleHelp}),l.a.createElement(N,{handleHelp:this.handleHelp,handleContact:this.handleContact})):l.a.createElement("div",{className:"bodystyle"},l.a.createElement(g,{handleHome:this.handleHome}),l.a.createElement(k,null),l.a.createElement(N,{handleHelp:this.handleHelp,handleContact:this.handleContact})):l.a.createElement(x,{handleHelp:this.handleHelp,handleContact:this.handleContact}),l.a.createElement("div",null,e)}}]),t}(n.Component),B=(a(69),a(72)),L=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(B.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(I,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,2,1]]]);
//# sourceMappingURL=main.71030cee.chunk.js.map