(this.webpackJsonplongrich_1=this.webpackJsonplongrich_1||[]).push([[0],{58:function(e,t,a){e.exports=a(88)},63:function(e,t,a){},64:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),l=a.n(r),i=(a(63),a(27)),c=a(6),m=(a(64),a(108)),s=a(116),d=a(110),u=a(112),h=a(111),g=a(44),E=a.n(g),y=Object(m.a)((function(e){return{root:{flexGrow:1,margin:0},menuButton:{marginRight:e.spacing(2)},biodata:{diplay:"flex",flexDirection:"column",justifyContent:"center",alignItems:"end",backgroundColor:"#8345C8",height:120,color:"#FCFCFC"},details:{minHeight:"100%",margin:30}}}));function p(){var e=y();return o.a.createElement("div",{className:e.root},o.a.createElement(s.a,{position:"static",style:{background:"#8345C8"}},o.a.createElement(d.a,{variant:"dense"},o.a.createElement(h.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},o.a.createElement(E.a,null)),o.a.createElement(u.a,{variant:"h6",color:"inherit"}))))}var b=a(45),f=a(46),v=a(50),C=a(49),x=a(113),k=a(114),F=a(115),j=a(28),S=a.n(j),B=a(48),w=a.n(B),N=a(47),O=a.n(N),I=(Object(m.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},biodata:{diplay:"flex",flexDirection:"column",justifyContent:"center",alignItems:"end",backgroundColor:"#8345C8",height:120,color:"#FCFCFC"},details:{minHeight:"100%",margin:30}}})),{diplay:"flex",flexDirection:"column",justifyContent:"center",alignItems:"end",backgroundColor:"#8345C8",height:120,color:"#FCFCFC"}),T=function(e){Object(v.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={firstname:"Olutimi",lastname:"Balogun",membershipCode:"NG123",stockistCode:"NG001",mobile:"08023008263",telephone:"2341-27065330",address:"12 Balogun street, Ikeja, Lagos",year_of_join:"2019",contactName:"Victoria Abu"},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;O.a.get("http://"),console.log(e)}},{key:"render",value:function(){var e=this.props;console.log(this.props);var t=this.props.match.params.id;return o.a.createElement("div",null,o.a.createElement(x.a,{container:!0,spacing:0},o.a.createElement(x.a,{item:!0,xs:12},o.a.createElement("div",{style:I},o.a.createElement(u.a,{style:{textAlign:"center",paddingTop:30},variant:"h6"}," ",this.state.firstname," ",this.state.lastname," ",t),o.a.createElement(u.a,{style:{textAlign:"center"},variant:"body1",color:"inherit"},"Stockist "))),o.a.createElement(x.a,{item:!0,xs:1}),o.a.createElement(x.a,{item:!0,xs:10,style:{margin:30}},o.a.createElement(u.a,{color:"textSecondary",variant:"body1"},o.a.createElement("b",null,"Membership Code:")," ",this.state.membershipCode),o.a.createElement(u.a,{color:"textSecondary",variant:"body1"},o.a.createElement("b",null,"Address: ")," ",this.state.address),o.a.createElement(u.a,{color:"textSecondary",variant:"body1"},o.a.createElement("b",null,"Stockist Code: ")," ",this.state.stockistCode),o.a.createElement(u.a,{color:"textSecondary",variant:"body1"},o.a.createElement("b",null,"Year of joining:")," ",this.state.year_of_join),o.a.createElement(u.a,{color:"textSecondary",variant:"body1",style:{marginBottom:20}},o.a.createElement("b",null,"Staff/Contact name: ")," ",this.state.contactName," "),o.a.createElement(k.a,null),o.a.createElement(x.a,{item:!0,container:!0,style:{marginTop:20}},o.a.createElement(x.a,{item:!0,xs:1},o.a.createElement(S.a,{fontSize:"small",style:{marginTop:10,paddingRight:50}})),o.a.createElement(x.a,{item:!0,xs:11},o.a.createElement(u.a,{variant:"body1",style:{marginBottom:0,fontWeight:400}},"  ",this.state.mobile),o.a.createElement(u.a,{color:"textSecondary",variant:"body2",style:{marginBottom:20}}," Mobile "))),o.a.createElement(k.a,null),o.a.createElement(x.a,{item:!0,container:!0,style:{marginTop:20}},o.a.createElement(x.a,{item:!0,xs:1},o.a.createElement(w.a,{fontSize:"small",style:{marginTop:10,paddingRight:50}})),o.a.createElement(x.a,{item:!0,xs:11},o.a.createElement(u.a,{variant:"body1",style:{marginBottom:0,fontWeight:400}},"  ",this.state.telephone),o.a.createElement(u.a,{color:"textSecondary",variant:"body2",style:{marginLeft:0}}," Telephone"))),o.a.createElement("br",null),o.a.createElement(F.a,{variant:"contained",color:"primary",size:"small",className:e.button,startIcon:o.a.createElement(S.a,null),style:{backgroundColor:"#8345C8"}},o.a.createElement("a",{style:{textDecoration:"none",color:"#FFFFFF"},href:"tel:".concat(this.state.mobile)}," Call"))),o.a.createElement(x.a,{item:!0,xs:1})))}}]),a}(n.Component);var _=function(){return o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement(p,null),o.a.createElement(i.a,null,o.a.createElement(c.a,{exact:!0,path:"/longrich/:id",component:T}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.c11a6ec8.chunk.js.map