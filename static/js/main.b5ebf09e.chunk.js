(this.webpackJsonpdiscord_tz=this.webpackJsonpdiscord_tz||[]).push([[0],{25:function(e,t,a){e.exports=a(48)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"editPerson",(function(){return y})),a.d(n,"setActiveUser",(function(){return S})),a.d(n,"sendMessage",(function(){return A}));var r=a(0),s=a.n(r),c=a(10),i=a.n(c),o=a(6),u=Object(r.createContext)(),m=function(){var e=Object(r.useContext)(u);return{state:e.state,actions:e.actions}},l=(a(30),a(31),a(32),function(e){var t=e.user,a=e.children,n=e.chat;return s.a.createElement("nav",{className:"sidebar".concat(n?" sidebar--chat":"")},a,t)});a(33);function d(e){var t=e.name,a=e.id;return s.a.createElement("li",{className:"sidebar__item"},s.a.createElement(o.b,{to:"/room/".concat(a),activeClassName:"active"},s.a.createElement("svg",{className:"icon-pound sidebar__icon"},s.a.createElement("use",{xlinkHref:"#icon-pound"})),t))}var p=a(2);a(39);function f(e){var t=e.children,a=e.name,n=Object(r.useState)(!1),c=Object(p.a)(n,2),i=c[0],o=c[1];return s.a.createElement("div",{className:"sidebar__menu"},s.a.createElement("div",{className:"sidebar__head",onClick:function(){return o(!i)}},s.a.createElement("svg",{className:"icon-play sidebar__dropdown-icon sidebar__dropdown-icon".concat(i?"--active":"")},s.a.createElement("use",{xlinkHref:"#icon-play"})),s.a.createElement("h2",{className:"sidebar__title"},a)),i&&s.a.createElement("ul",{className:"sidebar__list"},t||s.a.createElement("div",{className:"sidebar__warning"},"\u041a\u043e\u043c\u043d\u0430\u0442\u0430 \u043f\u0443\u0441\u0442\u0430")))}var E=a(1);a(40),a(41);function v(e){var t=m().state,a=Object(E.f)().pathname.split("/")[2]||null,n=a?t.rooms.find((function(e){return e.id===+a})).name:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043e\u043c\u043f\u043d\u0430\u0442\u0443";return s.a.createElement("div",{className:"content__header"},s.a.createElement("svg",{className:"icon-pound content__icon"},s.a.createElement("use",{xlinkHref:"#icon-pound"})),s.a.createElement("h1",{className:"content__title"},n))}var h=a(7),_=a(50),g=a(49);a(42),a(43);function b(e){var t=e.children;return s.a.createElement("div",{className:"chat__messages messages-wrap"},t)}a(44);function N(e){var t=e.message;return s.a.createElement("div",{className:"messages__item item-message"},s.a.createElement("img",{src:t.user.img,alt:"avatar",className:"item-message__ava"}),s.a.createElement("div",{className:"item-message__wrap"},s.a.createElement("span",{className:"item-message__name"},t.user.name),s.a.createElement("span",{className:"item-message__date"}),s.a.createElement("span",{className:"item-message__text"},t.text)))}a(45);function I(e){var t,a=e.onMessage,n=e.roomId,c=m().state,i=Object(r.useState)(""),o=Object(p.a)(i,2),u=o[0],l=o[1],d=Object(r.useRef)(null),f=+document.activeElement.scrollHeight;return Object(r.useEffect)((function(){f=d.current.scrollHeight,d.current.style.height="auto",(t=+d.current.scrollHeight)>f?d.current.style.height=f+"px":(d.current.style.height=t+"px",f=d.current.scrollHeight)}),[f]),s.a.createElement("form",{className:"chat__form form-chat",onSubmit:function(e){e.preventDefault(),0!==u.length&&(a(+n,c.user.id,u),l(""))}},s.a.createElement("input",{ref:d,className:"form-chat__textarea",value:u,onChange:function(e){return l(e.target.value)}}))}function O(e){e.messages;var t=e.onMessage,a=Object(r.useRef)(),n=m().state,c=Object(E.g)().id,i=n.messages.filter((function(e){return e.roomId===+c})).map((function(e){return Object(h.a)({},e,{user:n.people.find((function(t){return t.id===e.userId}))})}));return Object(r.useEffect)((function(){a.current.scrollIntoView({behavior:"smooth"})}),[i.length]),s.a.createElement("div",{className:"chat__content"},s.a.createElement(b,null,i.length>0?s.a.createElement(_.a,null,i.map((function(e){return s.a.createElement(g.a,{key:e.id,timeout:300,classNames:"item",mountOnEnter:!0},s.a.createElement(N,{message:e}))}))):s.a.createElement("h3",{className:"messages-wrap__title"},"\u0411\u0443\u0434\u0442\u0435 \u043f\u0435\u0440\u0432\u044b\u043c\u0438"),s.a.createElement("div",{className:"chat__scroll",ref:a})),s.a.createElement(I,{onMessage:t,roomId:c}))}a(46),a(47);function j(e){var t=e.user,a=e.onSelect,n=e.openModal;return s.a.createElement("li",{className:"chat__users-item chat-users-item",onClick:function(){a(t),n(!0)}},s.a.createElement("div",{className:"chat-users-item__ava"},s.a.createElement("img",{src:t.img||"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.vFK3EwPLrvUWNEGCAhfvjwHaHa%26pid%3DApi&f=1",alt:"ava"}),t.online?s.a.createElement("div",{style:{backgroundColor:"#4fb511"}}):s.a.createElement("div",null)),s.a.createElement("div",{className:"chat-users-item__wrap"},s.a.createElement("span",{className:"chat-users-item__name"},t.name),s.a.createElement("span",{className:"chat-users-item__status"},t.status)))}function F(e){var t=e.onEdit,a=e.onSelect,n=m().state,c=function(e){var t=Object(r.useRef)(null),a=Object(r.useState)(e),n=Object(p.a)(a,2),s=n[0],c=n[1],i=function(e){t.current&&!t.current.contains(e.target)&&(e.preventDefault(),e.stopPropagation(),c(!1))},o=function(e){"Escape"===e.key&&c(!1)};return Object(r.useEffect)((function(){return document.addEventListener("click",i,!0),document.addEventListener("keydown",o,!0),function(){document.removeEventListener("click",i,!0),document.removeEventListener("keydown",o,!0)}}),[t]),{visible:s,setVisible:c,ref:t}}(!1),i=c.visible,o=c.setVisible,u=c.ref,l=Object(r.useState)(null),d=Object(p.a)(l,2),f=(d[0],d[1]),E=Object(r.useState)(""),v=Object(p.a)(E,2),h=v[0],_=v[1],b=Object(r.useState)(""),N=Object(p.a)(b,2),I=N[0],O=N[1];Object(r.useEffect)((function(){f(n.activeUser),n.activeUser&&_(n.activeUser.node)}),[n.activeUser]);var F=n.people.filter((function(e){return e.online})),k=n.people.filter((function(e){return!e.online}));return s.a.createElement("div",{className:"chat__users users-chat"},s.a.createElement(g.a,{in:!0===i,timeout:300,classNames:"popup",unmountOnExit:!0},s.a.createElement("div",{className:"chat__users-popup chat-users-popup",ref:u},s.a.createElement("div",{className:"chat-users-popup__header"},s.a.createElement("img",{src:n.activeUser&&n.activeUser.img||"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.vFK3EwPLrvUWNEGCAhfvjwHaHa%26pid%3DApi&f=1",alt:"ava"}),s.a.createElement("span",{className:"chat-users-popup__name"},n.activeUser&&n.activeUser.name)),s.a.createElement("div",{className:"chat-users-popup__body"},s.a.createElement("span",{className:"chat-users-popup__role-head"},n.activeUser&&n.activeUser.role?"\u0420\u043e\u043b\u044c":"\u041d\u0435\u0442 \u0440\u043e\u043b\u0435\u0439"),n.activeUser&&n.activeUser.role&&s.a.createElement("span",{className:"chat-users-popup__role-body"},n.activeUser&&n.activeUser.role),s.a.createElement("span",{className:"chat-users-popup__node-head"},"\u0417\u0430\u043c\u0435\u0442\u043a\u0430"),s.a.createElement("input",{className:"chat-users-popup__node-body",placeholder:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0447\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443",value:h,onChange:function(e){return _(e.target.value)},onBlur:function(){return t(n.activeUser.id,h)}}),s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),O("")}},s.a.createElement("input",{className:"chat-users-popup__message",value:I,onChange:function(e){return O(e.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0434\u0435\u043d\u0438\u0435"}))))),s.a.createElement("div",{className:"users-chat__online"},s.a.createElement("h3",null,"\u0412 \u0441\u0435\u0442\u0438 ",F.length),F.map((function(e){return s.a.createElement(j,{key:e.id,user:e,onSelect:a,openModal:o})}))),s.a.createElement("div",{className:"users-chat__online"},s.a.createElement("h3",null,"\u0412\u043d\u0435 \u0441\u0435\u0442\u0438 ",k.length),k.map((function(e){return s.a.createElement(j,{key:e.id,user:e,onSelect:a,openModal:o})}))))}function k(){var e=m(),t=(e.state,e.actions);return s.a.createElement("section",{className:"chat"},s.a.createElement(v,{text:"test"}),s.a.createElement(E.c,null,s.a.createElement(E.a,{path:"/room/:id"},s.a.createElement(O,{onMessage:function(e,a,n){t.sendMessage({id:Math.random().toString(36).substr(2,9),roomId:e,userId:a,text:n})}})),s.a.createElement(E.a,{path:"/"},s.a.createElement("h1",{className:"chat__warning"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043e\u043c\u043d\u0430\u0442\u0443"))),s.a.createElement(F,{onEdit:function(e,a){t.editPerson(e,a)},onSelect:function(e){t.setActiveUser(e)}}))}var x=function(){var e=m(),t=e.state;return e.actions,s.a.createElement("div",{className:"app"},s.a.createElement(l,null,t.server.map((function(e){return s.a.createElement(f,{name:e.name,key:e.id},e.rooms&&e.rooms.map((function(e){return s.a.createElement(d,{key:e.id,name:e.name,id:e.id})})))}))),s.a.createElement(k,null))},y=function(e,t){return{type:"EDIT_PERSON",payload:{text:t,personId:e}}},S=function(e){return{type:"SET_ACTIVE_USER",payload:{user:e}}},A=function(e){return{type:"SEND_MESSAGE",payload:{obj:e}}},U=a(22),H=function(e){var t=e.initialState,a=e.reducer,n=e.actions,c=e.children,i=Object(r.useReducer)(a,t),o=Object(p.a)(i,2),m=o[0],l=o[1],d=Object(r.useMemo)((function(){return function(e,t){return Object.entries(e).reduce((function(e,a){var n=Object(p.a)(a,2),r=n[0],s=n[1];return e[r]=function(){var e=s.apply(void 0,arguments);return"function"===typeof e.then?e.then(t):"function"===typeof e?e(t):e.type&&t(e),e},e}),{})}(n,l)}),[n,l]),f=Object(r.useMemo)((function(){return{state:m,actions:d}}),[m,d]);return s.a.createElement(u.Provider,{value:f},c)};i.a.render(s.a.createElement(H,{initialState:{user:{id:11,name:"UserName",status:"\u041a\u043e\u0440\u043e\u043b\u044c \u043a\u043e\u0440\u043e\u043b\u0435\u0439",role:"\u041a\u043e\u0440\u043e\u043b\u044c \u043a\u043e\u0440\u043e\u043b\u0435\u0439",node:"\u041a\u043e\u0440\u043e\u043b\u044c \u043a\u043e\u0440\u043e\u043b\u0435\u0439",img:"",online:!0},server:[{id:1,name:"home",rooms:[{id:1,serverId:1,name:"welcome"},{id:2,serverId:1,name:"test room"},{id:3,serverId:1,name:"\u041d\u0443 \u0447\u0435 \u043f\u0430\u0446\u0430\u043d\u044b"}]},{id:2,name:"welcome"},{id:3,name:"\u0440\u0430\u0431\u043e\u0442\u0430",rooms:[{id:4,serverId:3,name:"\u041d\u043e\u0432\u0435\u043d\u044c\u043a\u0438\u0439"}]},{id:4,name:"\u043e\u0442\u0434\u044b\u0445"}],rooms:[{id:1,serverId:1,name:"welcome"},{id:2,serverId:1,name:"test room"},{id:3,serverId:1,name:"\u041d\u0443 \u0447\u0435 \u043f\u0430\u0446\u0430\u043d\u044b"},{id:4,serverId:3,name:"\u041d\u043e\u0432\u0435\u043d\u044c\u043a\u0438\u0439"}],messages:[{id:1,roomId:1,userId:1,text:"\u0412\u0441\u0435\u043c \u043f\u0440\u0438\u0432\u0435\u0442! \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u0447\u0430\u0442. \u041f\u043e\u0435\u0445\u0430\u043b\u0438"},{id:2,roomId:1,userId:2,text:"\u041f\u0440\u0438\u0432\u0435\u0442 \u0432\u0441\u0435\u043c"},{id:3,roomId:1,userId:3,text:"\u043e! \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f. \u0421\u043b\u044b\u0445\u0430\u043b \u043d\u043e\u0432\u0435\u043d\u044c\u043a\u0433\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u0437\u044f\u0442\u044c?"},{id:4,roomId:1,userId:1,text:"\u042d\u0442\u043e \u0432 \u043a\u043e\u043c\u043d\u0430\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u0430 \u043e\u0431\u0441\u0443\u0434\u0438\u043c"},{id:5,roomId:3,userId:2,text:"\u041d\u0443 \u0448\u043e \u043f\u0430\u0446\u0430\u043d\u044b, \u043f\u043e \u043f\u0438\u0432\u0443?"},{id:6,roomId:3,userId:1,text:"\u0410\u043d\u0442\u043e\u043d, \u043f\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435\u0441\u044c \u043a\u043e\u0440\u043f\u0430\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u0439 \u044d\u0442\u0438\u043a\u0438"},{id:7,roomId:3,userId:5,text:"\u041e\u0439, \u0430\u043d\u0442\u043e\u043d \u043a\u0430\u043a \u0432\u0441\u0435\u0433\u0434\u0430...\ud83d\ude12"},{id:8,roomId:4,userId:3,text:"\u041d\u0430 \u0441\u0447\u0435\u0442 \u043d\u043e\u0432\u0435\u043d\u044c\u043a\u043e\u0433\u043e. \u042f \u0431\u044b \u043f\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u043b \u0441 \u043d\u0438\u043c. \u041a\u0430\u043a \u0440\u0430\u0437 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043d\u0438\u0434 \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c. \u0411\u0440\u0430\u0442\u044c \u0431\u0443\u0434\u0435\u0442\u0435?"},{id:9,roomId:4,userId:3,text:"\u041e\u043d \u0435\u0449\u0435 \u0438 React \u0437\u043d\u0430\u0435\u0442! \u0432\u043e\u043e\u0431\u0449\u0435 \u043a\u0440\u0443\u0442\u043e"},{id:10,roomId:4,userId:4,text:"\u0414\u0430, \u044f \u0431\u044b \u0442\u043e\u0436\u0435 \u0441 \u043d\u0438\u043c \u043f\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0430"}],people:[{id:1,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",status:"\u0420\u0430\u0431\u043e\u0442\u0430 \u043f\u0440\u0435\u0436\u0434\u0435 \u0432\u0441\u0435\u0433\u043e!",role:"\u0410\u0434\u043c\u0438\u043d",node:"\u0422\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043c\u0435\u0442\u043a\u0430",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5l6NuHjFQzKcVPhPys9XrgHaHa%26pid%3DApi&f=1",online:!0},{id:2,name:"Anton",status:"\u041e\u0442\u0434\u044b\u0445 \u0432\u0430\u043d \u043b\u0430\u0444!",role:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0449\u0438\u043a",node:"\u0422\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043c\u0435\u0442\u043a\u0430",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lLNTTZyUEASliSpFe7qLUgHaHa%26pid%3DApi&f=1",online:!0},{id:3,name:"Gerald",status:"\u0422\u0440\u0443\u0434\u044f\u0433\u0430 \u0440\u0430\u0431\u043e\u0442\u044f\u0433\u0430!",role:"Hunter",node:"\u0422\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043c\u0435\u0442\u043a\u0430",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.UPjIS3BJIb18IZPFPdmjpQHaHa%26pid%3DApi&f=1",online:!0},{id:4,name:"\u0421\u0430\u0448\u0430",status:"\u0422\u0432\u043e\u0440\u0447\u0435\u0441\u0442\u0432\u043e \u0432 \u043a\u0430\u0436\u0434\u043e\u043c \u0438\u0437 \u043d\u0430\u0441",role:"HR manager",node:"",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MR40vakaaJi1AOgAE0mMgAHaHa%26pid%3DApi&f=1",online:!1},{id:5,name:"\u042e\u043b\u044f",status:"\u0421\u043b\u043e\u0436\u043d\u044b\u0439 \u043f\u043e\u0434\u0440\u043e\u0441\u0442\u043e\u043a",role:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0449\u0438\u043a",node:"",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.QGHhEaTTjwiDInIQ4NvnYQHaHa%26pid%3DApi&f=1",online:!0},{id:6,name:"\u041a\u0438\u0440\u0438\u043b\u043b",status:"",role:"",node:"",img:"",online:!1},{id:7,name:"\u0418\u0432\u0430\u043d",status:"",role:"",node:"",img:"",online:!1},{id:8,name:"\u0438\u0433\u043e\u0440\u044c",status:"",role:"",node:"",img:"",online:!1},{id:11,name:"UserName",status:"\u041a\u043e\u0440\u043e\u043b\u044c \u043a\u043e\u0440\u043e\u043b\u0435\u0439",role:"\u041a\u043e\u0440\u043e\u043b\u044c \u043a\u043e\u0440\u043e\u043b\u0435\u0439",node:"\u041a\u043e\u0440\u043e\u043b\u044c \u043a\u043e\u0440\u043e\u043b\u0435\u0439",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.B6Mzdq8gxzd7C8Gi5grE3gHaHa%26pid%3DApi&f=1",online:!0}],activeUser:null},reducer:function(e,t){switch(t.type){case"EDIT_PERSON":return Object(h.a)({},e,{people:e.people.map((function(e){return e.id===t.payload.personId?Object(h.a)({},e,{node:t.payload.text}):e}))});case"SET_ACTIVE_USER":return Object(h.a)({},e,{activeUser:t.payload.user});case"SEND_MESSAGE":return Object(h.a)({},e,{messages:[].concat(Object(U.a)(e.messages),[t.payload.obj])});default:return e}},actions:n},s.a.createElement(o.a,null,s.a.createElement(s.a.StrictMode,null,s.a.createElement(x,null)))),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.b5ebf09e.chunk.js.map