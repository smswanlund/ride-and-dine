(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){},34:function(e,a,t){e.exports=t(65)},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},60:function(e,a,t){},63:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(16),r=t.n(l),o=t(67),s=t(68),i=t(32),m=t(10),u=t(11),d=t(9),h=t(8),p=t(12),g=t(3);t(39);function E(e){var a=e.fluid,t=e.children;return c.a.createElement("div",{className:"container".concat(a?"-fluid":"")},t)}function v(e){var a=e.fluid,t=e.children;return c.a.createElement("div",{className:"row".concat(a?"-fluid":"")},t)}function f(e){var a=e.size,t=e.children;return c.a.createElement("div",{className:a.split(" ").map(function(e){return"col-"+e}).join(" ")},t)}t(21);var b=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(h.a)(a).call(this))).state={showMenu:!1},console.log(t=Object(d.a)(this,Object(h.a)(a).call(this))),t.showMenu=t.showMenu.bind(Object(g.a)(Object(g.a)(t))),t.closeMenu=t.closeMenu.bind(Object(g.a)(Object(g.a)(t))),t.select=t.select.bind(Object(g.a)(Object(g.a)(t))),t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"showMenu",value:function(e){var a=this;e.preventDefault(),this.setState({showMenu:!0},function(){document.addEventListener("click",a.closeMenu)})}},{key:"closeMenu",value:function(){var e=this;this.setState({showMenu:!1},function(){document.removeEventListener("click",e.closeMenu)})}},{key:"handleChange",value:function(e){this.props.onChange(e.target.value),this.setState({showMenu:!this.state.showMenu})}},{key:"select",value:function(e){console.log(e.target.getAttribute("value")),this.props.handleChange(e.target.getAttribute("value"))}},{key:"render",value:function(){var e=this,a="dropdown-menu".concat(this.state.showMenu?" show":"");return c.a.createElement("div",{className:"dropdown",onClick:this.showMenu},c.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true"},"Radius: ",8046==this.props.value?"5 mi":1609==this.props.value?"1 mi":"10 mi"),c.a.createElement("div",{className:a,"aria-labelledby":"dropdownMenuButton"},c.a.createElement("a",{className:"dropdown-item",href:"#nogo",value:1609,onClick:function(a){return e.select(a)}},"1 mile"),c.a.createElement("a",{className:"dropdown-item",href:"#nogo",value:8046,onClick:function(a){return e.select(a)}},"5 miles"),c.a.createElement("a",{className:"dropdown-item",href:"#nogo",value:16093,onClick:function(a){return e.select(a)}},"10 miles")))}}]),a}(c.a.Component),N=(t(40),function(e){return c.a.createElement("div",{className:"card",onClick:e.toggle},c.a.createElement("div",{className:"card-header"},e.name),c.a.createElement("ul",null,c.a.createElement("li",{className:"list-group-item"},c.a.createElement("img",{src:e.img,alt:e.name+" picture from yelp"}))),c.a.createElement("div",{className:"card-bottom"}))}),w=(t(41),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(h.a)(a).call(this))).state={showMenu:!1},t.showMenu=t.showMenu.bind(Object(g.a)(Object(g.a)(t))),t.closeMenu=t.closeMenu.bind(Object(g.a)(Object(g.a)(t))),t.select=t.select.bind(Object(g.a)(Object(g.a)(t))),t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"showMenu",value:function(e){var a=this;e.preventDefault(),this.setState({showMenu:!0},function(){document.addEventListener("click",a.closeMenu)})}},{key:"closeMenu",value:function(){var e=this;this.setState({showMenu:!1},function(){document.removeEventListener("click",e.closeMenu)})}},{key:"select",value:function(e){console.log(e.target.getAttribute("name")),this.props.onClick(e.target.getAttribute("name"))}},{key:"render",value:function(){var e=this,a="dropdown-menu".concat(this.state.showMenu?" showOne":"");return c.a.createElement("div",{className:"dropdown",onClick:this.showMenu},c.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true"},"Category: ",this.props.name.substring(0,1).toUpperCase()+this.props.name.substring(1,this.props.name.length)),c.a.createElement("div",{className:a,"aria-labelledby":"dropdownMenuButton"},c.a.createElement("a",{className:"dropdown-item",href:"#nogo",name:"all",onClick:function(a){return e.select(a)}},"All"),c.a.createElement("a",{className:"dropdown-item",href:"#nogo",name:"american",onClick:function(a){return e.select(a)}},"American"),c.a.createElement("a",{className:"dropdown-item",href:"#nogo",name:"bbq",onClick:function(a){return e.select(a)}},"BBQ"),c.a.createElement("a",{className:"dropdown-item",href:"#nogo",name:"chinese",onClick:function(a){return e.select(a)}},"Chinese"),c.a.createElement("a",{className:"dropdown-item",href:"#nogo",name:"indpak",onClick:function(a){return e.select(a)}},"Indian"),c.a.createElement("a",{className:"dropdown-item",href:"#nogo",name:"italian",onClick:function(a){return e.select(a)}},"Italian"),c.a.createElement("a",{className:"dropdown-item",href:"#nogo",name:"mexican",onClick:function(a){return e.select(a)}},"Mexican"),c.a.createElement("a",{className:"dropdown-item",href:"#nogo",name:"thai",onClick:function(a){return e.select(a)}},"Thai"),c.a.createElement("a",{className:"dropdown-item",href:"#nogo",name:"vegan",onClick:function(a){return e.select(a)}},"Vegan"),c.a.createElement("a",{className:"dropdown-item",href:"#nogo",name:"coffee",onClick:function(a){return e.select(a)}},"Coffee")))}}]),a}(c.a.Component)),C=t(28),y=t.n(C),j=t(31),O=(t(60),function(e){return c.a.createElement("div",{className:"card big-card"},c.a.createElement("div",{className:"big-header card-header"},e.name," ",c.a.createElement("button",{className:"btn btn-outline-danger close-card",onClick:e.toggle},"X")),c.a.createElement("ul",null,c.a.createElement("li",{className:"list-group-item"},c.a.createElement("img",{className:"big-picture",src:e.img,alt:e.name+" picture from yelp"}))),c.a.createElement("div",{className:"big-bottom"},c.a.createElement("div",{className:"reviews"},"Read the Reviews"),c.a.createElement("div",{className:"delivery"},"Get it Delivered"),c.a.createElement("div",{className:"rides"},"Get a Ride")))}),k="",M="",x=function(e){function a(e){var t;return Object(m.a)(this,a),console.log(e),(t=Object(d.a)(this,Object(h.a)(a).call(this,e))).updateWidth=function(){t.setState({width:window.innerWidth||document.getElementById.clientWidth})},t.displayLocationInfo=function(e){M=e.coords.longitude,k=e.coords.latitude,t.setState({location:!0}),t.searchRes(t.state.value,t.state.name)},t.handleChange=function(e){t.searchRes(e),t.setState({value:e})},t.handleCategoryChange=function(e){t.searchRes(e,t.setState({name:e}))},t.state={error:null,isLoading:!0,data:[],name:"all",value:8046,location:!1,width:window.innerWidth||document.documentElement.clientWidth},t.handleChange=t.handleChange.bind(Object(g.a)(Object(g.a)(t))),t.handleCategoryChange=t.handleCategoryChange.bind(Object(g.a)(Object(g.a)(t))),t.searchRes=t.searchRes.bind(Object(g.a)(Object(g.a)(t))),t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWidth()),navigator.geolocation&&navigator.geolocation.getCurrentPosition(this.displayLocationInfo)}},{key:"searchRes",value:function(e){var a=this;y.a.get("https://cors-anywhere.herokuapp.com/".concat("https://api.yelp.com/v3/businesses/search?"),{headers:{Authorization:"Bearer ".concat("cYmchs-D7ks1z6zf7ZmYjUaQA9520b_efKJEruSleDKTTrcIbFohp9JLOHOr186XIPlnC8Sj9dOZRY_QsNyLU0_FgLdsmQXsINQWEBHQdcoLjRc-qfDUJhEhRfYPXnYx")},params:{latitude:k,longitude:M,rating:5,categories:this.state.name,limit:8,radius:this.state.value,sort_by:"rating",term:"food"}}).then(function(e){a.setState({isLoading:!1,data:e.data.businesses,value:a.state.value,name:a.state.name},function(){return console.log(a.state)})})}},{key:"render",value:function(){var e=this.state,a=e.error,t=e.isLoading,n=e.data,l=e.location;return a?c.a.createElement("div",null,"Error: ",a.message):l?t?c.a.createElement("div",null,"Loading"):c.a.createElement(E,{fluid:!0},c.a.createElement(b,{value:this.state.value,handleChange:this.handleChange}),c.a.createElement(w,{name:this.state.name,onClick:this.handleCategoryChange}),c.a.createElement(j.a,{className:"grid",data:n,keys:function(e){return e.name},heights:400,columns:this.state.width>640?this.state.width>1080?4:2:1},function(e,a,t){return c.a.createElement("div",{className:"cell"},a&&c.a.createElement(O,{name:e.name,img:e.image_url,toggle:t,id:e.id}),!a&&c.a.createElement(N,{name:e.name,img:e.image_url,toggle:t}))})):c.a.createElement("div",null,"You must enable location")}}]),a}(n.Component),L=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement(E,{fluid:!0,className:"align-center"},c.a.createElement(v,null,c.a.createElement(f,{size:"lg-3"}),c.a.createElement(f,{size:"lg-6",offset:"3"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body text-center"},c.a.createElement("h2",null,"Login"),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{for:"user/email",className:"col-sm-2"},"Username/",c.a.createElement("br",null),"Email"),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("input",{type:"text",id:"user/email",className:"form-control"}))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{for:"password",className:"col-sm-2"},"Password"),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("input",{type:"password",id:"password",className:"form-control"}))),c.a.createElement("button",{className:"btn btn-primary"},"Login"),c.a.createElement("hr",null),"Don't have an account? ",c.a.createElement("a",{href:"createaccount"},"Create One Here"))))))}}]),a}(n.Component),R=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement(E,{fluid:!0,className:"align-center"},c.a.createElement(v,null,c.a.createElement(f,{size:"lg-3"}),c.a.createElement(f,{size:"lg-6",offset:"3"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body text-center"},c.a.createElement("h2",null,"Create Account"),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{for:"username",className:"col-sm-2"},"Username"),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("input",{type:"text",id:"username",className:"form-control"}))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{for:"email",className:"col-sm-2"},"Email"),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("input",{type:"text",id:"email",className:"form-control"}))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{for:"name",className:"col-sm-2"},"Name"),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("input",{type:"text",id:"name",className:"form-control"}))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{for:"password",className:"col-sm-2"},"Password"),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("input",{type:"password",id:"password",className:"form-control"}))),c.a.createElement("button",{className:"btn btn-primary"},"Create Account"))))))}}]),a}(n.Component);var S=function(e){var a=e.children;return c.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},a)};var A=function(){return c.a.createElement(E,{fluid:!0},c.a.createElement(v,null,c.a.createElement(f,{size:"md-12"},c.a.createElement(S,null,c.a.createElement("h1",null,"404 Page Not Found"),c.a.createElement("h1",null,c.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},D=t(69);t(63);var z=function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-blue"},c.a.createElement("a",{className:"navbar-brand",href:"/"},"Ride and Dine"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("div",{className:"navbar-nav"},c.a.createElement(D.a,{exact:!0,to:"/",className:"nav-link",activeClassName:"hidden"},"Home"),c.a.createElement(D.a,{exact:!0,to:"/createaccount",className:"nav-link",activeClassName:"hidden"},"Create Account"),c.a.createElement(D.a,{exact:!0,to:"/login",className:"nav-link",activeClassName:"hidden"},"Login"))))};var B=function(){return c.a.createElement(o.a,null,c.a.createElement("div",null,c.a.createElement(z,null),c.a.createElement(s.a,null,c.a.createElement(i.a,{exact:!0,path:"/",component:x}),c.a.createElement(i.a,{exact:!0,path:"/main",component:x}),c.a.createElement(i.a,{exact:!0,path:"/login",component:L}),c.a.createElement(i.a,{exact:!0,path:"/createaccount",component:R}),c.a.createElement(i.a,{component:A}))))};r.a.render(c.a.createElement(B,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.c28e6f72.chunk.js.map