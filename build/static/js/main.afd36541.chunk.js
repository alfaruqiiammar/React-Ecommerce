(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},127:function(e,t,a){},128:function(e,t){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(32),c=a.n(r),s=a(4),o=a(5),i=a(8),m=a(6),u=a(7),d=a(1),h=(n.Component,a(9)),p=a(31),g=(a(81),a(82),a(10)),E=a(66),f=Object(E.a)({email:"",full_name:"",is_login:!1,api_key:"",keyword:"",values:[],jumlah:0,total:"",listName:[],gender:"",name:"",token:""}),b=function(e){return{setEmail:function(e,t){return{email:t}},setName:function(e,t){return{full_name:t}},setLogin:function(e,t){return{is_login:t}},setKeyword:function(e,t){return{keyword:t}},setValue:function(e,t){return{values:t}},setApiKey:function(e,t){return{api_key:t}},setQuestion:function(e,t){return{question:t}},setTotal:function(e,t){return{total:t}},setJumlah:function(e,t){return{jumlah:t}},setPic:function(e,t){return{pic:t}},ubahMale:function(t){e.setState({gender:"male"})},ubahFemale:function(t){e.setState({gender:"female"})},ubahListName:function(t,a){e.setState({listName:a})},ubahName:function(t,a){e.setState({name:a})},setToken:function(t,a){e.setState({token:a})}}},v=a(11),y=a.n(v),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={data:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("http://api.alfaruqi.xyz/item").then(function(t){e.setState({data:t.data})}).catch(function(e){console.log("errrrrrr",e)})}},{key:"render",value:function(){return l.a.createElement("section",{className:"text-center my-5"},l.a.createElement("h2",{className:"h1-responsive font-weight-bold text-center my-5"},"Pilih Nominal Yang Ingin Anda Bagikan"),l.a.createElement("p",{className:"grey-text text-center w-responsive mx-auto mb-5"},"Berbagi adalah bentuk lain dari rasa bersyukur, berbagilah dengan sesama tanpa mengharapkan apapun. Kebahagiaan adalah kesetiaan. Setia atas Indahnya merasa cukup. Setia atas indahnya berbagi. Setia atas indahnya ketulusan berbuat baik."),l.a.createElement("div",{className:"container"},l.a.createElement(d.t,{className:"justify-content-center pb-1 animated pulse"},this.state.data.map(function(e,t){if(t<10)return l.a.createElement(d.i,{lg:"3",md:"6",sm:"6",className:"mb-lg-0 mb-4 pb-4"},l.a.createElement(h.b,{to:"/item/"+e.item_id},l.a.createElement(d.c,{collection:!0,className:"z-depth-1-half"},l.a.createElement("div",{className:"view zoom"},l.a.createElement("img",{src:e.url,className:"img-fluid",style:{height:"250px",width:"100%"}}),l.a.createElement("div",{className:"stripe dark"},l.a.createElement("br",null),l.a.createElement("p",{style:{color:"black"}},e.nama," ",l.a.createElement(d.m,{icon:"angle-right"})))))))}))))}}]),t}(l.a.Component);var w=Object(g.connect)("is_login",b)(function(e){return console.log("props login",e.is_login),!1===e.is_login?l.a.createElement(p.a,{to:{pathname:"/"}}):l.a.createElement("div",null,l.a.createElement(k,null),l.a.createElement("br",null),l.a.createElement("h2",{className:"h1-responsive font-weight-bold text-center my-5"},"Contoh Kegiatan yang Telah Berbagi Lakukan"),l.a.createElement(d.k,null,l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement(d.f,{activeItem:1,length:3,showControls:!0,showIndicators:!0,className:"z-depth-1"},l.a.createElement(d.g,null,l.a.createElement(d.h,{itemId:"1"},l.a.createElement(d.u,null,l.a.createElement("img",{className:"d-block w-100",src:"https://i.ytimg.com/vi/lfmBC63dPMo/maxresdefault.jpg",alt:"First slide"}))),l.a.createElement(d.h,{itemId:"2"},l.a.createElement(d.u,null,l.a.createElement("img",{className:"d-block w-100",src:"https://awsimages.detik.net.id/community/media/visual/2018/11/25/81427d97-876c-4686-a106-058c1ee8ea46.jpeg?a=1",alt:"Second slide"}))),l.a.createElement(d.h,{itemId:"3"},l.a.createElement(d.u,null,l.a.createElement("img",{className:"d-block w-100",src:"https://2.bp.blogspot.com/-PSgTHDNZ-YU/Ww1Y9-DSZ7I/AAAAAAAAABg/pVtHNSNnunEAiZlTmYOFyORvXt9FgdeeACEwYBhgL/s1600/IMG_5910.JPG",alt:"Third slide"})))))))))}),j=a(16),x=a.n(j),N=a(21),O=a(17),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).setUsername=function(e){e.preventDefault(),a.setState({username:e.target.value})},a.setPassword=function(e){e.preventDefault(),a.setState({password:e.target.value})},a.setToken=function(e){e.preventDefault(),a.setState({token:e.target.value})},a.toggle=function(){a.setState({modal:!a.state.modal})},a.doLogin=function(){var e=Object(N.a)(x.a.mark(function e(t){var n;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(O.a)(a),y.a.post("http://api.alfaruqi.xyz/auth",{username:n.state.username,password:n.state.password}).then(function(e){n.props.setLogin(!0),n.props.setToken(e.data.token),console.log(e.data.status),n.props.history.replace("/profile")}).catch(function(e){console.log("errrrrrr",e)}),alert("Selamat Datang Orang Baik!");case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={modal:!1,username:"",password:""},a.doLogin=a.doLogin.bind(Object(O.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(d.k,null,l.a.createElement(d.b,{color:"dark",onClick:this.toggle},"Sign In"),l.a.createElement(d.q,{isOpen:this.state.modal,toggle:this.toggle},l.a.createElement(d.r,null,l.a.createElement(d.k,null,l.a.createElement(d.t,null,l.a.createElement(d.i,{md:"10"},l.a.createElement("form",null,l.a.createElement("p",{className:"h5 text-center mb-4"},"Sign in"),l.a.createElement("div",{className:"grey-text"},l.a.createElement(d.n,{label:"Type your username",group:!0,type:"text",validate:!0,onChange:this.setUsername}),l.a.createElement(d.n,{label:"Type your password",group:!0,type:"password",validate:!0,onChange:this.setPassword}))))))),l.a.createElement(d.s,null,l.a.createElement(d.b,{onClick:this.doLogin,isOpen:this.state.modal14,color:"dark"},"Login"))))}}]),t}(n.Component),D=Object(g.connect)("is_login",b)(Object(p.g)(S)),C=a(30),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).toggle=function(e){return function(){var t="modal"+e;a.setState(Object(C.a)({},t,!a.state[t]))}},a.setUsername=function(e){e.preventDefault(),a.setState({username:e.target.value})},a.setEmail=function(e){e.preventDefault(),a.setState({email:e.target.value})},a.setPassword=function(e){e.preventDefault(),a.setState({password:e.target.value})},a.setStatus=function(e){e.preventDefault(),a.setState({status:e.target.value})},a.doRegister=function(){var e=Object(N.a)(x.a.mark(function e(t){var n;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=Object(O.a)(a),y.a.post("http://api.alfaruqi.xyz/user",{username:n.state.username,email:n.state.email,password:n.state.password,status:!1}).then(function(e){this.props.history.push("/")}).catch(function(e){console.log("errrrrrr",e)}),alert("Anda sudah terdaftar, yuk SignIn!");case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={modal:!1,username:"",email:"",password:"",status:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(d.k,null,l.a.createElement(d.b,{color:"dark",onClick:this.toggle(14)},"SignUp"),l.a.createElement(d.q,{isOpen:this.state.modal14,toggle:this.toggle(14),centered:!0},l.a.createElement(d.r,null,l.a.createElement(d.k,null,l.a.createElement(d.t,{className:"justify-content-center"},l.a.createElement(d.i,{md:"10"},l.a.createElement("form",null,l.a.createElement("p",{className:"h5 text-center mb-4"},"Sign up"),l.a.createElement("div",{className:"grey-text"},l.a.createElement(d.n,{label:"Your name",group:!0,type:"text",validate:!0,error:"wrong",success:"right",onChange:this.setUsername}),l.a.createElement(d.n,{label:"Your email",group:!0,type:"email",validate:!0,error:"wrong",success:"right",onChange:this.setEmail}),l.a.createElement(d.n,{label:"Your password",group:!0,type:"password",validate:!0,onChange:this.setPassword}))))))),l.a.createElement(d.s,null,l.a.createElement("div",{className:"text-center"},l.a.createElement(d.b,{onClick:function(t){e.doRegister(t)},isOpen:this.state.modal14,color:"dark"},"Register")))))}}]),t}(n.Component),B=a(25),I=a.n(B),A=a(27),T=a.n(A);a(101);var q=Object(g.connect)("is_login",b)(function(e){return console.log(e.is_login),!1===e.is_login?l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("header",{className:"fixed-top"},l.a.createElement(T.a,{collapseOnSelect:!0,expand:"lg",className:"navbarStyle",variant:"dark"},l.a.createElement(T.a.Brand,{href:"/home"},"B E R B A G I"),l.a.createElement(T.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(T.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(I.a,{className:"mr-auto"}),l.a.createElement(I.a,null,l.a.createElement(I.a.Link,{eventKey:2},l.a.createElement(h.b,{style:{color:"white"},to:"/home"},"Home")),l.a.createElement(I.a.Link,{eventKey:2},l.a.createElement(h.b,{style:{color:"white"},to:"/profile"},"Profile")),l.a.createElement(I.a.Link,{eventKey:2},l.a.createElement(h.b,{style:{color:"white"},to:"/"},"Intro"))))))):l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("header",{className:"fixed-top"},l.a.createElement(T.a,{collapseOnSelect:!0,expand:"lg",className:"navbarStyle",variant:"dark"},l.a.createElement(T.a.Brand,{href:"/home"},"B E R B A G I"),l.a.createElement(T.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(T.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(I.a,{className:"mr-auto"}),l.a.createElement(I.a,null,l.a.createElement(I.a.Link,{eventKey:2},l.a.createElement(h.b,{style:{color:"white"},to:"/home"},"Home")),l.a.createElement(I.a.Link,{eventKey:2},l.a.createElement(h.b,{style:{color:"white"},to:"/profile"},"Profile")),l.a.createElement(I.a.Link,{eventKey:2},l.a.createElement(h.b,{style:{color:"white"},to:"/"},"Intro")),l.a.createElement(I.a.Link,{eventKey:2},l.a.createElement(h.b,{to:"/",style:{color:"white"},eventKey:2,onClick:function(){return e.setLogin(!1)}},"SignOut")))))))}),P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={collapseID:""},a.toggleCollapse=function(e){return function(){a.setState(function(t){return{collapseID:t.collapseID!==e?e:""}})}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.b,{color:"dark",onClick:this.toggleCollapse("basicCollapse"),style:{marginBottom:"1rem"}},"About Us"),l.a.createElement(d.j,{id:"basicCollapse",isOpen:this.state.collapseID},l.a.createElement("p",null,"Sharing Kind merupakan sebuah e-commerce yang bertujuan untuk membantu orang-orang yang ingin berbagi kebahagiaan pada orang-orang yang kurang beruntung di sekitar kita. Banyak dari kita yang terkadang bingung ingin menyalurkan kemana atau tak ada waktu ingin menyalurkannya, dan terkadang lupa bahwa apa yang semua kita miliki sekarang ini, hanyalah titipan dari-Nya, oleh karena itu, berbagi lah kebahagiaan, karena sedikit darimu mampu membuat mereka bahagia sepenuhnya.")))}}]),t}(n.Component),z=Object(g.connect)("is_login",b)(function(e){return console.log(e.is_login),l.a.createElement(d.c,{className:"my-5 px-5 pb-5"},l.a.createElement(d.d,null,l.a.createElement(d.t,null,l.a.createElement(d.i,{md:"12"},l.a.createElement(d.c,{reverse:!0},l.a.createElement(d.u,{hover:!0,cascade:!0,waves:!0,className:"text-center animated flash"},l.a.createElement("h1",null,"Travis oke"),l.a.createElement("img",{src:"http://images4.fanpop.com/image/photos/23700000/Sharing-is-Caring-sam-winchester-23785964-900-700.jpg",style:{width:"100%",height:"300px"},alt:"",className:"img-fluid"}),l.a.createElement(d.o,{overlay:"white-slight",className:"waves-light"})),l.a.createElement(d.d,{cascade:!0,className:"text-center"},l.a.createElement("h1",{className:"font-weight-bold",style:{color:"#ffffff"}},l.a.createElement("a",{style:{color:"#000000"},href:"#!"},"Berbagi")),l.a.createElement("p",null,"est 18/08/2019"),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-md6"},l.a.createElement(D,null)),l.a.createElement("div",{className:"col-md6"},l.a.createElement(_,null)),l.a.createElement("br",null),l.a.createElement(P,null))))))))}),H=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={data:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("https://api.quotable.io/random").then(function(t){e.setState({data:t.data})}).catch(function(e){console.log("errrrrrr",e)})}},{key:"render",value:function(){return l.a.createElement("div",null,'"',this.state.data.content,'."')}}]),t}(l.a.Component),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).setUsername=function(e){e.preventDefault(),a.setState({username:e.target.value})},a.setPassword=function(e){e.preventDefault(),a.setState({password:e.target.value})},a.state={modal:!1,username:"",password:"",data:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={headers:{Authorization:"Bearer "+this.props.token}};y.a.get("http://api.alfaruqi.xyz/user",t).then(function(t){e.setState({data:t.data}),e.setState({username:t.data.username,email:t.data.email})}).catch(function(e){console.log("error user_details",e)})}},{key:"render",value:function(){return console.log("woi",this.state.data.status),!1===this.props.is_login?l.a.createElement(p.a,{to:{pathname:"/"}}):0==this.state.data.status?l.a.createElement(d.k,null,l.a.createElement("section",{className:"text-center my-5 animated rubberBand"},l.a.createElement("h3",{className:"h1-responsive font-weight-bold my-5"},"Profile"),l.a.createElement("div",null,l.a.createElement("div",{className:"mx-auto mb-4"},l.a.createElement("img",{src:"https://cdn3.iconfinder.com/data/icons/users-6/100/654853-user-men-2-512.png",className:"rounded-circle img-fluid",style:{height:"150px"}})),l.a.createElement("p",null,l.a.createElement(d.m,{icon:"quote-left"})," ",l.a.createElement(H,null)),l.a.createElement("h2",{className:"font-weight-bold"},this.state.username),l.a.createElement("h3",{className:"font-weight-bold my-3"},this.state.email)),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement(h.b,{to:"/trans"},l.a.createElement(d.b,{color:"dark",style:{width:"130px",height:"50px"}},"History"))))):l.a.createElement(d.k,null,l.a.createElement("section",{className:"text-center my-5"},l.a.createElement("h3",{className:"h1-responsive font-weight-bold my-5"},"Profile Admin"),l.a.createElement("div",null,l.a.createElement("div",{className:"mx-auto mb-4"},l.a.createElement("img",{src:"https://cdn3.iconfinder.com/data/icons/users-6/100/654853-user-men-2-512.png",className:"rounded-circle img-fluid",style:{height:"180px"}})),l.a.createElement("p",null,l.a.createElement(d.m,{icon:"quote-left"})," ",l.a.createElement(H,null)),l.a.createElement("h2",{className:"font-weight-bold"},this.state.username),l.a.createElement("h3",{className:"font-weight-bold my-3"},this.state.email),l.a.createElement(h.b,{to:"/add"},l.a.createElement(d.b,{color:"dark",className:"align-center",variant:"success",style:{width:"120px",height:"50px"}},"Tambah Barang")))))}}]),t}(n.Component),R=Object(g.connect)("is_login, token",b)(L),F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).changeHandle=function(e){a.props.setJumlah(e.target.value),a.props.setPic("")},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(d.n,{onChange:this.changeHandle,type:"number",style:{width:"100px"}})}}]),t}(l.a.Component),K=Object(g.connect)("is_login, jumlah",b)(F),M=(n.Component,function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).toggle=function(e){return function(){var t="modal"+e;a.setState(Object(C.a)({},t,!a.state[t]))}},a.setNama=function(e){e.preventDefault(),a.setState({nama:e.target.value})},a.setDetail=function(e){e.preventDefault(),a.setState({detail:e.target.value})},a.setFotoItem=function(e){e.preventDefault(),a.setState({url:e.target.value})},a.setHarga=function(e){e.preventDefault(),a.setState({harga:e.target.value})},a.setTotal=function(e){e.preventDefault(),a.setState({total:e.target.value})},a.changeHandle=function(e){a.props.setJumlah(e.target.value)},a.doDelete=function(){var e=Object(N.a)(x.a.mark(function e(t){var n;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=Object(O.a)(a),y.a.delete("http://api.alfaruqi.xyz/item/"+n.props.match.params.item_id).then(function(e){n.props.history.push("/home")}).catch(function(e){console.log("eror delete",e)}),alert("Anda sudah mendelete barang!");case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.doEdit=function(){var e=Object(N.a)(x.a.mark(function e(t){var n;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=Object(O.a)(a),y.a.put("http://api.alfaruqi.xyz/item/"+n.props.match.params.item_id,{nama:n.state.nama,detail:n.state.detail,url:n.state.url,harga:n.state.harga,total:n.state.total}).then(function(e){console.log(e.data),n.props.history.push("/home")}).catch(function(e){console.log("eror edit",e)}),alert("Anda sudah mengedit barang!");case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={user:[],data:[],nama:"",detail:"",url:"",harga:0,total:0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.jum;var e=this;y.a.get("http://api.alfaruqi.xyz/item/"+e.props.match.params.item_id).then(function(t){e.setState({data:t.data})}).catch(function(e){console.log("errrrrrr",e)});var t={headers:{Authorization:"Bearer "+this.props.token}};y.a.get("http://api.alfaruqi.xyz/user",t).then(function(t){e.setState({user:t.data}),e.setState({username:t.data.username,email:t.data.email})}).catch(function(e){console.log("error user_details",e)})}},{key:"render",value:function(){var e=this;return 0==this.state.user.status?l.a.createElement("div",null,l.a.createElement("div",{className:"container pt-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 col-xs-2"},l.a.createElement("img",{width:"100%",className:"mr-3",src:this.state.data.url,alt:"Generic placeholder"})),l.a.createElement("div",{className:"col-md-7 col-xs-12"},l.a.createElement("h2",null,this.state.data.nama),l.a.createElement("h5",null,this.state.data.detail),l.a.createElement("br",null),l.a.createElement("h3",{style:{color:"red",fontWeight:700}},"Rp ",this.state.data.harga),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},"Jumlah",l.a.createElement(K,{onChange:this.changeHandle})),l.a.createElement("div",{className:"col-md-4"},"Total Harga",l.a.createElement("h4",{className:"text-black"},"Rp ",this.props.jumlah*this.state.data.harga)),l.a.createElement("div",{className:"col-md-4"},l.a.createElement(h.b,{to:"/checkout/"+this.state.data.item_id},l.a.createElement(d.b,{color:"dark",variant:"success",style:{width:"120px",height:"50px"}},"Beli")))))))):l.a.createElement("div",null,l.a.createElement("div",{className:"container pt-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 col-xs-2"},l.a.createElement("img",{width:"100%",className:"mr-3",src:this.state.data.url,alt:"Generic placeholder"})),l.a.createElement("div",{className:"col-md-7 col-xs-12"},l.a.createElement("h2",null,this.state.data.nama),l.a.createElement("h5",null,this.state.data.detail),l.a.createElement("br",null),l.a.createElement("h3",{style:{color:"red",fontWeight:700}},"Rp ",this.state.data.harga),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},"Jumlah",l.a.createElement(K,{onChange:this.changeHandle})),l.a.createElement("div",{className:"col-md-4"},"Total Harga",l.a.createElement("h4",{className:"text-black"},"Rp ",this.props.jumlah*this.state.data.harga)),l.a.createElement("div",{className:"col-md-4"},l.a.createElement(h.b,{to:"/checkout/"+this.state.data.item_id},l.a.createElement(d.b,{color:"dark",variant:"success",style:{width:"120px",height:"50px"}},"Beli")),l.a.createElement(d.b,{color:"dark",variant:"success",style:{width:"120px",height:"50px"},onClick:function(t){e.doDelete(t)}},"Delete"),l.a.createElement(d.b,{color:"dark",style:{width:"120px",height:"50px"},onClick:this.toggle(14)},"Edit"),l.a.createElement(d.q,{isOpen:this.state.modal14,toggle:this.toggle(14),centered:!0},l.a.createElement(d.r,null,l.a.createElement(d.k,null,l.a.createElement(d.t,{className:"justify-content-center"},l.a.createElement(d.i,{md:"10"},l.a.createElement("form",null,l.a.createElement("p",{className:"h5 text-center mb-4"},"Edit Item"),l.a.createElement("div",{className:"grey-text"},l.a.createElement(d.n,{label:"Nama Barang",icon:"",group:!0,type:"email",validate:!0,error:"wrong",success:"right",onChange:this.setNama}),l.a.createElement(d.n,{label:"Detail Barang",icon:"",group:!0,type:"text",validate:!0,onChange:this.setDetail}),l.a.createElement(d.n,{label:"Foto Barang",icon:"",group:!0,type:"email",validate:!0,error:"wrong",success:"right",onChange:this.setFotoItem}),l.a.createElement(d.n,{label:"Harga Barang",icon:"",group:!0,type:"text",validate:!0,onChange:this.setHarga}),l.a.createElement(d.n,{label:"Total Barang",icon:"",group:!0,type:"text",validate:!0,onChange:this.setTotal}))))))),l.a.createElement(d.s,null,l.a.createElement("div",{className:"text-center"},l.a.createElement(d.b,{onClick:function(t){e.doEdit(t)},isOpen:this.state.modal14,color:"primary"},"Edit"))))))))),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(l.a.Component)),U=Object(g.connect)("is_login, jumlah, token",b)(M),J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={data:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.jum;var e=this;y.a.get("http://api.alfaruqi.xyz/item/"+e.props.match.params.item_id).then(function(t){e.setState({data:t.data})}).catch(function(e){console.log("errrrrrr",e)})}},{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("table",{id:"cart",class:"table table-hover table-condensed"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{width:"50%"}},"Product"),l.a.createElement("th",{style:{width:"10%"}},"Price"),l.a.createElement("th",{style:{width:"8%"}},"Quantity"),l.a.createElement("th",{style:{width:"22%"},class:"text-center"},"Subtotal"),l.a.createElement("th",{style:{width:"10%"}}))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{"data-th":"Product"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-sm-2 hidden-xs"},l.a.createElement("img",{src:this.state.data.url,style:{width:"100%"},alt:"...",class:"img-responsive"})),l.a.createElement("div",{class:"col-sm-10"},l.a.createElement("h4",{class:"nomargin"},this.state.data.nama),l.a.createElement("p",null,this.state.data.detail)))),l.a.createElement("td",{"data-th":"Price"},this.state.data.harga),l.a.createElement("td",{"data-th":"Quantity"},l.a.createElement("h5",{class:"text-center"},this.props.jumlah)),l.a.createElement("td",{"data-th":"Subtotal",class:"text-center"},"Rp ",this.props.jumlah*this.state.data.harga))),l.a.createElement("tfoot",null,l.a.createElement("tr",{class:"visible-xs"},l.a.createElement("td",{class:"text-center"},l.a.createElement("strong",null))),l.a.createElement("tr",null,l.a.createElement("td",{colspan:"2",class:"hidden-xs"}),l.a.createElement("td",{class:"hidden-xs text-center"},l.a.createElement("strong",null,"Total: Rp ",this.props.jumlah*this.state.data.harga)),l.a.createElement("td",null,l.a.createElement(h.b,{to:"/invoice/"+this.state.data.item_id},l.a.createElement(d.b,{color:"dark",style:{width:"150px",height:"50px",alignItems:"center",justifyContent:"center",padding:0}},"Proses Pembayaran ",l.a.createElement("i",{class:"fa fa-angle-right"}))))))))}}]),t}(n.Component),W=Object(g.connect)("is_login, jumlah",b)(J),Y=(a(127),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).setUsername=function(e){e.preventDefault(),a.setState({username:e.target.value})},a.setEmail=function(e){e.preventDefault(),a.setState({email:e.target.value})},a.setPassword=function(e){e.preventDefault(),a.setState({password:e.target.value})},a.setStatus=function(e){e.preventDefault(),a.setState({status:e.target.value})},a.setKodeUnik=function(e){e.preventDefault(),a.setState({kode_unik:e.target.value})},a.doTransaksi=function(){var e=Object(N.a)(x.a.mark(function e(t){var n,l,r;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=Object(O.a)(a),l=Date(Date.now()).toString().slice(4,15),r={method:"post",url:"http://api.alfaruqi.xyz/transaksi",data:{item_id:parseInt(n.props.match.params.item_id),nama_item:n.state.data.nama,total_qty:parseInt(n.props.jumlah),total_harga:n.props.jumlah*n.state.data.harga,tanggal:l},headers:{Authorization:"Bearer "+n.props.token}},console.log(r),y()(r).then(function(e){n.props.history.push("/home")}).catch(function(e){console.log("errrrrrr",e)}),alert("Transaksi sudah berhasil!");case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={data:[],item_id:"",nama_item:"",total_qty:"",total_harga:"",tanggal:"",kode_unik:0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.jum;var e=this;y.a.get("http://api.alfaruqi.xyz/item/"+e.props.match.params.item_id).then(function(t){e.setState({data:t.data})}).catch(function(e){console.log("errrrrrr",e)})}},{key:"render",value:function(){var e=this,t=Date(Date.now()).toString().slice(4,15),a=Math.floor(1e3*Math.random());return l.a.createElement("div",{class:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{class:"col-md-6 col-md-offset-3 main"},l.a.createElement("div",{class:"col-md-12"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-4"}),l.a.createElement("div",{class:"col-md-8 text-right"},l.a.createElement("h2",{style:{color:"black"}},l.a.createElement("strong",null,"Berbagi")),l.a.createElement("p",null,"Jalan Tidar, Malang"),l.a.createElement("p",null,"0896 2772 5242"),l.a.createElement("p",null,"berbagi.com"))),l.a.createElement("br",null),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-12 text-center"},l.a.createElement("h2",null,"INVOICE"),l.a.createElement("h5",null,"00000846382"))),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("table",{class:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("h5",null,"Description")),l.a.createElement("th",null,l.a.createElement("h5",null,"Quantity")),l.a.createElement("th",null,l.a.createElement("h5",null,"Amount")))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{class:"col-md-8"},this.state.data.nama),l.a.createElement("td",{class:"col-md-4 text-center"},l.a.createElement("i",{class:"fa fa-usd ","aria-hidden":"true"}),this.props.jumlah),l.a.createElement("td",{class:"col-md-4 text-center"},l.a.createElement("i",{class:"fa fa-usd","aria-hidden":"true"}),"Rp ",this.props.jumlah*this.state.data.harga)),l.a.createElement("tr",null,l.a.createElement("td",{class:" col-md-3 text-right"}),l.a.createElement("td",{class:" col-md-3 text-right"},l.a.createElement("p",null,l.a.createElement("strong",null,"Total Amount: ")),l.a.createElement("p",null,l.a.createElement("strong",null,"Code Unique: "))),l.a.createElement("td",{class:" col-md-3 text-center"},l.a.createElement("p",null,l.a.createElement("strong",null)),l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("i",{class:"fa fa-usd","aria-hidden":"true"}),this.props.jumlah*this.state.data.harga)),l.a.createElement("p",null,l.a.createElement("strong",null)),l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("i",{class:"fa fa-usd","aria-hidden":"true"})," ",a)))),l.a.createElement("tr",{style:{color:"#F81D2D"}},l.a.createElement("td",{class:"col-md-9"}),l.a.createElement("td",{class:"text-right"},l.a.createElement("h4",null,l.a.createElement("strong",null,"Total:"))),l.a.createElement("td",{class:"text-left",valign:"middle"},l.a.createElement("h4",null,l.a.createElement("strong",null,l.a.createElement("i",{class:"fa fa-usd","aria-hidden":"true"})," ",this.props.jumlah*this.state.data.harga+a," "))))))),l.a.createElement("div",null,l.a.createElement("div",{class:"col-md-12"},l.a.createElement("p",null,l.a.createElement("b",null,"Date :")," ",t),l.a.createElement("br",null),l.a.createElement("h5",null,l.a.createElement("b",null,"Informasi Pembayaran")),l.a.createElement("h6",null,"Silahkan melakukan pembayaran via :"),l.a.createElement("div",{class:"table-responsive text-nowrap"},l.a.createElement("table",{class:"table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Nama Bank"),l.a.createElement("td",null,"Bank BNI (kode bank 009)")),l.a.createElement("tr",null,l.a.createElement("td",null,"No Rekening"),l.a.createElement("td",null,"0395254909 a/n Ammar Al Faruqi")),l.a.createElement("tr",null,l.a.createElement("td",null,"Jumlah Transfer"),l.a.createElement("td",null,"Rp"," ",this.props.jumlah*this.state.data.harga+a)),l.a.createElement("tr",null,l.a.createElement("td",null,"Batas Transfer"),l.a.createElement("td",null,"24 jam setelah invoice ini keluar"))),l.a.createElement(d.b,{color:"black",onClick:function(t){e.doTransaksi(t)}},"Konfirmasi")))))))))}}]),t}(n.Component)),G=Object(g.connect)("is_login, jumlah, token",b)(Y),Q=(a(128),a(67)),V=a.n(Q),Z=a(68),X=a.n(Z),$=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={question:"",questionSubmit:"",pic:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"text-center",style:{backgroundColor:"#28209e",height:"800px",width:"100%"}},l.a.createElement("div",{style:{padding:"200px 0px 0px 0px"}},l.a.createElement("img",{className:"text-white text-center animated fadeInDown",src:V.a,height:"100px"}),l.a.createElement("img",{className:"text-white text-center animated fadeInDown",src:X.a,height:"100px"}),l.a.createElement("h1",{className:"text-white text-center animated fadeInDown",style:{fontSize:"32px"}},"Page Not Found"),l.a.createElement(h.b,{to:"/home"},l.a.createElement("button",{type:"button",className:"btn btn-info animated fadeInLeft btn-primary text-center"},l.a.createElement("h5",{className:"animated zoomIn"},"Back to Home")))),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(l.a.Component),ee=Object(g.connect)("is_login",b)($),te=function(e){return l.a.createElement(d.k,null,l.a.createElement(d.a,{style:{width:"30px",height:"30px"},color:"default"},l.a.createElement("a",{url:"facebook.com"},l.a.createElement(d.m,{fab:!0,icon:"facebook-f",size:"2x"})," ")),l.a.createElement(d.a,{style:{width:"30px",height:"30px"},color:"primary"},l.a.createElement(d.m,{fab:!0,icon:"instagram",size:"2x"})),l.a.createElement(d.a,{style:{width:"30px",height:"30px"},color:"primary"},l.a.createElement(d.m,{fab:!0,icon:"twitter",size:"2x"})))},ae=function(){return l.a.createElement(d.l,{color:"black",className:"font-small pt-4 mt-4"},l.a.createElement(d.k,{fluid:!0,className:"text-center text-md-left"},l.a.createElement(d.t,{className:"justify-content-center"},l.a.createElement(d.i,{md:"12"}))),l.a.createElement("div",{className:"footer-copyright text-center py-3"},l.a.createElement(d.k,{fluid:!0},l.a.createElement("h1",{className:"title"},"B E R B A G I"),l.a.createElement(te,null),l.a.createElement("br",null),"\xa9 ",(new Date).getFullYear()," Copyright:"," ",l.a.createElement("a",{href:"https://www.MDBootstrap.com"}," Berbagi.com "))))},ne=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).setNama=function(e){e.preventDefault(),a.setState({nama:e.target.value})},a.setDetail=function(e){e.preventDefault(),a.setState({detail:e.target.value})},a.setFotoItem=function(e){e.preventDefault(),a.setState({url:e.target.value})},a.setHarga=function(e){e.preventDefault(),a.setState({harga:e.target.value})},a.setTotal=function(e){e.preventDefault(),a.setState({total:e.target.value})},a.doAddItem=function(){var e=Object(N.a)(x.a.mark(function e(t){var n;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=Object(O.a)(a),y.a.post("http://api.alfaruqi.xyz/item",{nama:n.state.nama,detail:n.state.detail,url:n.state.url,harga:n.state.harga,total:n.state.total}).then(function(e){n.props.history.push("/home")}).catch(function(e){console.log("errrrrrr",e)}),alert("Anda sudah menambah barang, yuk SignIn!");case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={nama:"",detail:"",url:"",harga:0,total:0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(d.k,null,l.a.createElement(d.t,{className:"justify-content-center pt-5"},l.a.createElement(d.i,{md:"6"},l.a.createElement(d.c,null,l.a.createElement(d.d,null,l.a.createElement(d.e,{className:"form-header deep-blue-gradient rounded"},l.a.createElement("h3",{className:"my-3"},l.a.createElement(d.m,{icon:"spinner"})," Add Item:")),l.a.createElement("form",null,l.a.createElement("div",{className:"grey-text"},l.a.createElement(d.n,{label:"Nama Barang",icon:"",group:!0,type:"email",validate:!0,error:"wrong",success:"right",onChange:this.setNama}),l.a.createElement(d.n,{label:"Detail Barang",icon:"",group:!0,type:"text",validate:!0,onChange:this.setDetail}),l.a.createElement(d.n,{label:"Foto Barang",icon:"",group:!0,type:"email",validate:!0,error:"wrong",success:"right",onChange:this.setFotoItem}),l.a.createElement(d.n,{label:"Harga Barang",icon:"",group:!0,type:"text",validate:!0,onChange:this.setHarga}),l.a.createElement(d.n,{label:"Total Barang",icon:"",group:!0,type:"text",validate:!0,onChange:this.setTotal})),l.a.createElement("div",{className:"text-center mt-4"},l.a.createElement(d.b,{onClick:function(t){e.doAddItem(t)},color:"light-blue",className:"mb-3",type:"submit"},"Add"))),l.a.createElement(d.s,null))))))}}]),t}(n.Component),le=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).toggle=function(e){return function(){var t="modal"+e;a.setState(Object(C.a)({},t,!a.state[t]))}},a.changeHandle=function(e){a.props.setJumlah(e.target.value)},a.state={data:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={headers:{Authorization:"Bearer "+this.props.token}};y.a.get("http://api.alfaruqi.xyz/transaksi",t).then(function(t){e.setState({data:t.data})}).catch(function(e){console.log("eror trans",e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h2",null,"History Transaksi"),l.a.createElement("br",null),this.state.data.map(function(e,t){if(t<10)return l.a.createElement(d.p,null,l.a.createElement(d.p,{left:!0,className:"mr-3 pl-3",href:"#"},l.a.createElement(d.p,{object:!0,src:"https://image.flaticon.com/icons/svg/879/879890.svg",style:{width:"120px",height:"120px"},alt:""})),l.a.createElement(d.p,{body:!0},l.a.createElement(d.p,{heading:!0},t+1),l.a.createElement("p",null," ",e.nama_item),l.a.createElement("p",null,"Tanggal : ",e.tanggal),l.a.createElement("p",null," Total beli : ",e.total_qty),l.a.createElement("p",null," Total bayar : ",e.total_harga)))}))}}]),t}(l.a.Component),re=Object(g.connect)("is_login, token",b)(le),ce=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement(q,null),l.a.createElement(p.d,null,l.a.createElement(p.b,{path:"/home",component:w}),l.a.createElement(p.b,{exact:!0,path:"/",component:z}),l.a.createElement(p.b,{path:"/signin",component:D}),l.a.createElement(p.b,{path:"/signup",component:_}),l.a.createElement(p.b,{path:"/checkout/:item_id",component:W}),l.a.createElement(p.b,{path:"/profile",component:R}),l.a.createElement(p.b,{path:"/invoice/:item_id",component:G}),l.a.createElement(p.b,{path:"/donasi",component:k}),l.a.createElement(p.b,{path:"/item/:item_id",component:U}),l.a.createElement(p.b,{path:"/add",component:ne}),l.a.createElement(p.b,{path:"/trans",component:re}),l.a.createElement(p.b,{component:ee})),l.a.createElement(ae,null))}}]),t}(l.a.Component),se=Object(g.connect)("is_login",b)(ce),oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(129),a(130),a(131);c.a.render(l.a.createElement(g.Provider,{store:f},l.a.createElement(se,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");oe?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ie(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ie(t,e)})}}()},67:function(e,t,a){e.exports=a.p+"static/media/robot.d96ae0bc.png"},68:function(e,t,a){e.exports=a.p+"static/media/sorry.953f39a6.png"},69:function(e,t,a){e.exports=a(132)},81:function(e,t){},82:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.afd36541.chunk.js.map