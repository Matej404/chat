(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),s=r(7),i=r.n(s),o=r(8),l=r(2),c=r(3),d=r(5),u=r(4),m=(r(13),r(0)),h=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(c.a)(r,[{key:"renderMessage",value:function(e){var t=e.member,r=e.text,n=this.props.currentMember,a=t.id===n.id?"Messages-message currentMember":"Messages-message",s=Math.round(99999998*Math.random()+1);return Object(m.jsxs)("li",{className:a,children:[Object(m.jsx)("span",{className:"avatar",style:{backgroundColor:t.clientData.color}}),Object(m.jsxs)("div",{className:"Message-content",children:[Object(m.jsx)("div",{className:"username",children:t.clientData.username}),Object(m.jsx)("div",{className:"text",children:r})]})]},s)}},{key:"render",value:function(){var e=this,t=this.props.messages;return Object(m.jsx)("ul",{className:"Messages-list",children:t.map((function(t){return e.renderMessage(t)}))})}}]),r}(n.Component),b=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={text:""},e}return Object(c.a)(r,[{key:"onChange",value:function(e){this.setState({text:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state.text.trim();t.length<1||(this.props.onSendMessage(t),this.setState({text:""}))}},{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:function(t){return e.onSubmit(t)},children:[Object(m.jsx)("input",{onChange:function(t){return e.onChange(t)},value:this.state.text,type:"text",placeholder:"Type message",autoFocus:!0}),Object(m.jsx)("button",{children:"SEND"})]})})}}]),r}(n.Component),g=r.p+"static/media/logo.1a80f5ae.png";function p(){var e=["autumn","hidden","bitter","misty","silent","empty","dry","dark","summer","icy","delicate","quiet","white","cool","spring","winter","patient","twilight","dawn","crimson","wispy","weathered","blue","billowing","broken","cold","damp","falling","frosty","green","long","late","lingering","bold","little","morning","muddy","old","red","rough","still","small","sparkling","throbbing","shy","wandering","withered","wild","black","young","holy","solitary","fragrant","aged","snowy","proud","floral","restless","divine","polished","ancient","purple","lively","nameless"],t=["waterfall","river","breeze","moon","rain","wind","sea","morning","snow","lake","sunset","pine","shadow","leaf","dawn","glitter","forest","hill","cloud","meadow","sun","glade","bird","brook","butterfly","bush","dew","dust","field","fire","flower","firefly","feather","grass","haze","mountain","night","pond","darkness","snowflake","silence","sound","sky","shape","surf","thunder","violet","water","wildflower","wave","water","resonance","sun","wood","dream","cherry","tree","fog","frost","voice","paper","frog","smoke","star"];return e[Math.floor(Math.random()*e.length)]+t[Math.floor(Math.random()*t.length)]}function f(){var e=["red","green","blue","maroon","navy","blueviolet","brown","cadetblue","darkblue","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","forestgreen","mediumblue","goldenrod","indianred","indigo","lightcoral","lightsalmon","lightseagreen","lightslategray","lightsteelblue","limegreen","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumturquoise","mediumvioletred","moccasin","olive","orchid","palegreen","palevioletred","peru","plum","royalblue","salmon"];return e[Math.floor(Math.random()*e.length)]}var j=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(l.a)(this,r),(e=t.call(this)).onSendMessage=function(t){e.drone.publish({room:"observable-room",message:t})},e.state={messages:[],member:{username:p(),color:f()}},e.drone=new window.Scaledrone("agavMsSzoIOcx6MN",{data:e.state.member}),e}return Object(c.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.drone.on("open",(function(t){if(t)return console.error(t);var r=Object(o.a)({},e.state.member);r.id=e.drone.clientId,e.setState({member:r})})),this.drone.subscribe("observable-room").on("data",(function(t,r){var n=e.state.messages;n.push({member:r,text:t}),e.setState({messages:n})}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("div",{className:"App-header",children:[Object(m.jsx)("img",{className:"img",src:g,alt:"logo"}),Object(m.jsx)("h1",{children:"CHAT ROOM"})]}),Object(m.jsx)(h,{messages:this.state.messages,currentMember:this.state.member}),Object(m.jsx)(b,{onSendMessage:this.onSendMessage})]})}}]),r}(a.a.Component);i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(j,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.592fb7c0.chunk.js.map