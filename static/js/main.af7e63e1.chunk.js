(this["webpackJsonpfood-ordering"]=this["webpackJsonpfood-ordering"]||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/cross.441d8611.svg"},217:function(e,t,a){},220:function(e,t,a){e.exports=a.p+"static/media/plus.311313cd.svg"},221:function(e,t,a){e.exports=a.p+"static/media/cart.890dce60.svg"},222:function(e,t,a){e.exports=a.p+"static/media/fobiden-order.6b4b70dc.svg"},223:function(e,t,a){e.exports=a.p+"static/media/congrats.211b8e65.svg"},224:function(e,t,a){e.exports=a.p+"static/media/checklist.80d775c4.svg"},227:function(e,t,a){e.exports=a.p+"static/media/logo.913ae04a.svg"},230:function(e,t,a){e.exports=a(498)},473:function(e,t,a){},474:function(e,t,a){},475:function(e,t,a){},480:function(e,t,a){},495:function(e,t,a){},498:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(51),l=a.n(c),s=a(81),i=a(13),o=a(5),u=a(18),d=a.n(u),m=a(30),E=a(2),p=a(219),O=a.n(p)()({menu:[function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_MENU_LOADING":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!0,menuList:[],getMenuFail:null});case"GET_MENU_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,menuList:t.payload,getMenuFail:null});case"GET_MENU_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,menuList:[],getMenuFail:t.payload.message});default:return e}},{menuList:[],isLoading:!1,getMenuFail:null}],currentUser:[function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_CUR_USER_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{user:t.payload,userFail:null});case"GET_CUR_USER_FAIL":return Object(E.a)(Object(E.a)({},e),{},{user:{},userFail:t.payload.message});default:return e}},{user:{},userFail:null}],cart:[function(e,t){switch(t.type){case"ADD_CART_ITEM":return Object(E.a)(Object(E.a)({},e),{},{cartList:t.payload,cartAdded:!0});case"REMOVE_CART_ADDED":return Object(E.a)(Object(E.a)({},e),{},{cartAdded:!1});case"DELETE_CART_ITEM":var a=e.cartList,n=t.payload;return Object(E.a)(Object(E.a)({},e),{},{cartList:a.filter((function(e){return e.id!==n.id})),cartAdded:!1});case"DELETE_CART":return Object(E.a)(Object(E.a)({},e),{},{cartList:[],cartAdded:!1});default:return e}},{cartList:[],cartAdded:!1}],submitOrder:[function(e,t){switch(t.type){case"SUBMIT_ORDERS_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{createOrderSuccess:!1,isLoading:!0,submitOrderFail:null});case"SUBMIT_ORDERS_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{createOrderSuccess:!0,isLoading:!1,submitOrderFail:null});case"SUBMIT_ORDERS_FAIL":return Object(E.a)(Object(E.a)({},e),{},{createOrderSuccess:!1,isLoading:!1,submitOrderFail:t.payload});default:return e}},{createOrderSuccess:!1,isLoading:!1,submitOrderFail:null}],orders:[function(e,t){switch(t.type){case"GET_ORDERS_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{getOrdersRequest:!0,orderList:[],getOrdersFail:null,deleteOrderRequest:!1,deleteOrderFail:null});case"GET_ORDERS_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{getOrdersRequest:!1,orderList:t.payload,getOrdersFail:null,deleteOrderRequest:!1,deleteOrderFail:null});case"GET_ORDERS_FAIL":return Object(E.a)(Object(E.a)({},e),{},{getOrdersRequest:!1,orderList:[],getOrdersFail:t.payload.message,deleteOrderRequest:!1,deleteOrderFail:null});case"DELETE_ORDER_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{getOrdersRequest:!1,getOrdersFail:null,deleteOrderRequest:!0,deleteOrderFail:null});case"DELETE_ORDER_SUCCESS":var a=t.payload,n=e.orderList;return Object(E.a)(Object(E.a)({},e),{},{getOrdersRequest:!1,orderList:n.filter((function(e){return e._id!==a._id})),getOrdersFail:null,deleteOrderRequest:!1,deleteOrderFail:null});case"DELETE_ORDER_FAIL":return Object(E.a)(Object(E.a)({},e),{},{getOrdersRequest:!1,orderList:[],getOrdersFail:null,deleteOrderRequest:!1,deleteOrderFail:t.payload.message});default:return e}},{orderList:[],getOrdersRequest:!1,getOrdersFail:null,deleteOrderRequest:!1,deleteOrderFail:null}],orderTimeout:[function(e,t){switch(t.type){case"SET_ORDER_TIMEOUT":return Object(E.a)(Object(E.a)({},e),{},{isOrderTimeout:!0});case"RESET_ORDER_TIMEOUT":return Object(E.a)(Object(E.a)({},e),{},{isOrderTimeout:!1});default:return e}},{isOrderTimeout:!1}],allOrders:[function(e,t){switch(t.type){case"GET_ALL_ORDERS_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!0,orderList:[],getOrdersFail:null});case"GET_ALL_ORDERS_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,orderList:t.payload,getOrdersFail:null});case"GET_ALL_ORDERS_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,orderList:[],getOrdersFail:t.payload.message});default:return e}},{orderList:[],isLoading:!1,getOrdersFail:null}]}),g=Object(o.a)(O,2),f=g[0],b=g[1],v=r.a.createContext({}),h=function(e){var t=e.children,a=Object(n.useReducer)(f,b),c=Object(o.a)(a,2),l=c[0],s=c[1];return r.a.createElement(v.Provider,{value:{data:l,setData:s}},t)},_=function(){var e=Object(n.useContext)(v),t=e.data,a=e.setData;return[t,Object(n.useCallback)((function(e){var t=e.type,n=e.payload;a({payload:n,type:t})}),[a])]},y=function(e){return{type:"GET_MENU_SUCCESS",payload:e}},S=a(41),j=a.n(S);console.log("production");var R="https://luch-ordering.herokuapp.com",N="https://luch-ordering.herokuapp.com/google",T=function(){var e=localStorage.getItem("token");return j.a.get("".concat(R,"/user"),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return e.data}))},L=a(50),D=a.n(L),k=(a(473),a(228)),C=a(14),A=a.n(C),F=a(220),I=a.n(F),w=function(e){return{type:"ADD_CART_ITEM",payload:e}},U=function(e){var t=e.item,a=Object(n.useState)(1),c=Object(o.a)(a,2),l=c[0],s=c[1],i=_(),u=Object(o.a)(i,2),d=u[0],m=d.currentUser,E=d.cart,p=d.orderTimeout,O=u[1],g=m.user,f=E.cartList;return r.a.createElement("div",{className:A()("menu-item",{"is-disabled":f.some((function(e){return e.id===t._id}))||p.isOrderTimeout})},r.a.createElement("div",{className:"image"},r.a.createElement("img",{className:"img-dish",src:t.img,alt:t.name}),r.a.createElement("div",{onClick:function(){var e={id:t._id,dish_name:t.name,quantity:l};if(g.username)if(0===f.length)O(w(f)),setTimeout((function(){return O({type:"REMOVE_CART_ADDED"})}),500),f.push(e);else{var a=[].concat(Object(k.a)(f),[e]);O(w(a)),setTimeout((function(){return O({type:"REMOVE_CART_ADDED"})}),500)}else window.open(N,"_self")}},r.a.createElement("img",{className:"icon-add",src:I.a,alt:""}))),r.a.createElement("div",{className:"desc"},r.a.createElement("div",{className:"info"},r.a.createElement("span",{className:"name"},t.name),r.a.createElement("span",{className:"price"},t.price)),r.a.createElement("div",{className:"quantity"},r.a.createElement("input",{type:"number",value:l,onChange:function(e){var t=e.target.value,a=parseInt(t);s(a<=0?1:a>5?5:a)}}))))},M=function(){var e=_(),t=Object(o.a)(e,2),a=t[0].menu,c=t[1],l=function(){var e=_(),t=Object(o.a)(e,2)[1];return Object(n.useCallback)(Object(m.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_MENU_LOADING"}),e.prev=1,e.next=4,j.a.get("".concat(R,"/menuList")).then((function(e){return e.data}));case 4:a=e.sent,t(y(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"GET_MENU_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),[t])}(),s=a.isLoading,i=a.menuList;return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:t=e.sent,localStorage.setItem("roles",t.roles),c({type:"GET_CUR_USER_SUCCESS",payload:t});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),l()}),[c,l]),r.a.createElement("div",{className:"menu-wrapper"},s&&r.a.createElement("img",{className:"icon-loading",src:D.a,alt:"loading-spinner"}),i.map((function(e){return r.a.createElement(U,{key:e._id,item:e})})))},q=a(101),x=a.n(q),G=function(e){var t=e.order,a=_(),n=Object(o.a)(a,2)[1];return r.a.createElement("div",{className:"cart-item"},r.a.createElement("div",{className:"name"},t.dish_name),r.a.createElement("div",{className:"desc"},r.a.createElement("div",{className:"qty"},t.quantity),r.a.createElement("span",{className:"remove",onClick:function(){n(function(e){return{type:"DELETE_CART_ITEM",payload:e}}(t))}},r.a.createElement("img",{src:x.a,alt:"remove-order"}))))},B=function(e){return{type:"SUBMIT_ORDERS_FAIL",payload:e}},z=function(e){return{type:"GET_ORDERS_SUCCESS",payload:e}},Q=function(e){return{type:"GET_ALL_ORDERS_SUCCESS",payload:e}},J=function(e){return{type:"DELETE_ORDER_SUCCESS",payload:e.data}},P=function(e){var t=localStorage.getItem("token");return j.a.post("".concat(R,"/orders/create"),e,{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.data}))},V=function(){var e=localStorage.getItem("token");return j.a.get("".concat(R,"/orders/list"),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return e.data}))},H=function(){var e=localStorage.getItem("token");return j.a.get("".concat(R,"/orders/all"),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return e.data}))},Y=function(e){var t=localStorage.getItem("token");return j.a.post("".concat(R,"/orders/delete"),e,{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.data}))},X=a(221),K=a.n(X),W=(a(474),function(){var e=_(),t=Object(o.a)(e,1)[0],a=t.cart,c=t.submitOrder,l=a.cartList,s=a.cartAdded,i=c.isLoading,u=Object(n.useState)(!1),E=Object(o.a)(u,2),p=E[0],O=E[1],g=function(){var e=_(),t=Object(o.a)(e,2)[1];return Object(n.useCallback)(function(){var e=Object(m.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"SUBMIT_ORDERS_REQUEST"}),e.prev=1,e.next=4,P(a);case 4:e.sent,t({type:"SUBMIT_ORDERS_SUCCESS"}),t({type:"DELETE_CART"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(B(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),[t])}();return r.a.createElement("div",{className:"cart-wrapper"},r.a.createElement("div",{className:A()("cart-icon",{shake:s}),onClick:function(){return O(!p)}},r.a.createElement("img",{src:K.a,alt:"cart-icon"}),r.a.createElement("span",{className:"cart-qty"},l.length)),r.a.createElement("div",{className:A()("cart-content",{show:p&&l.length})},i&&r.a.createElement("img",{className:"cart-loading",src:D.a,alt:""}),l.map((function(e){return r.a.createElement(G,{key:e.id,order:e})})),r.a.createElement("button",{className:"btn-order",onClick:function(){var e=l.map((function(e){return{dishId:e.id,quantity:e.quantity,date:(new Date).toDateString(),paid:!1}}));g(e)}},"Order")))}),Z=a(70),$=a(222),ee=a.n($),te=(a(475),function(){var e=new Date,t=e.getFullYear(),a=e.getMonth(),c=e.getDate(),l=new Date(t,a,c,10,50,0,0).getTime(),s=new Date(t,a,c,8,30,0,0).getTime(),i=(new Date).getTime()>=s,u=Object(n.useState)({hours:0,minutes:0,seconds:0}),d=Object(o.a)(u,2),m=d[0],E=d[1],p=Object(n.useState)(l),O=Object(o.a)(p,1)[0],g=Object(n.useState)(!1),f=Object(o.a)(g,2),b=f[0],v=f[1],h=Object(n.useCallback)((function(){if(O){var e=(new Date).getTime(),t=O-e,a=Math.floor(t%36e5/6e4),n=Math.floor(t%6e4/1e3),r=[1,2,3,4,5,6,7,8,9],c=Math.floor(t%864e5/36e5);r.includes(c)&&(c="0".concat(c)),r.includes(a)&&(a="0".concat(a)),r.includes(n)&&(n="0".concat(n)),E({hours:c,minutes:a,seconds:n}),v(c<=0&&a<=0&&n<=0)}}),[O]);Object(n.useEffect)((function(){if(setInterval((function(){return h()}),1e3),b)return function(){return clearInterval(h)}}),[b,h]);var _=m.hours,y=m.minutes,S=m.seconds;return r.a.createElement("div",{className:"countdown"},_>=0&&y>=0&&S>0&&r.a.createElement("div",null,r.a.createElement("p",{className:"countdown-message"},"Th\u1eddi gian order c\u1ee7a b\u1ea1n c\xf2n l\u1ea1i"),r.a.createElement("span",null,_),r.a.createElement("span",null,y),r.a.createElement("span",null,S)),r.a.createElement(Z.a,{className:"food-modal",show:b||!i,onHide:function(){},backdrop:"static",keyboard:!1,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(Z.a.Body,{className:"food-modal__body"},r.a.createElement("img",{className:"timeout-icon",src:ee.a,alt:"forbiden-order"}),b&&r.a.createElement("div",{className:"timeout-message"},"Th\u1eddi gian order c\u01a1m h\xf4m nay \u0111\xe3 h\u1ebft, b\u1ea1n vui l\xf2ng quay l\u1ea1i v\xe0o l\xfac"," ",r.a.createElement("span",{className:"note"},"9h30")," ng\xe0y mai nh\xe9!!!"),!i&&r.a.createElement("div",{className:"timeout-message"},"Th\u1eddi gian order ch\u01b0a t\u1edbi, b\u1ea1n vui l\xf2ng quay l\u1ea1i v\xe0o l\xfac"," ",r.a.createElement("span",{className:"note"},"9h30")," nh\xe9!!!"))))}),ae=a(223),ne=a.n(ae),re=a(224),ce=a.n(re),le=(a(479),a(480),function(){var e=_(),t=Object(o.a)(e,1)[0].submitOrder.createOrderSuccess,a=Object(n.useState)(t),c=Object(o.a)(a,2),l=c[0],s=c[1],u=Object(i.g)(),d="admin"===localStorage.getItem("roles");Object(n.useEffect)((function(){t&&s(t)}),[t]);var m=function(){s(!1)};return r.a.createElement("div",{className:"page"},r.a.createElement("h1",{className:"text-uppercase text-center"},"SP Team Lunch Ordering"),!d&&r.a.createElement(te,null),r.a.createElement("a",{href:"/lunch-ordering-fe/#/orders",className:"icon-orders"},r.a.createElement("img",{src:ce.a,alt:"checklist"})),r.a.createElement(W,null),r.a.createElement(M,null),r.a.createElement(Z.a,{className:"congrats-modal food-modal",show:l,onHide:m,backdrop:"static",keyboard:!0,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(Z.a.Body,{className:"food-modal__body"},r.a.createElement("img",{className:"modal-icon",src:ne.a,alt:"forbiden-order"}),r.a.createElement("div",{className:"congrats-message"},"Thank you! B\u1ea1n \u0111\xe3 order th\xe0nh c\xf4ng!!",r.a.createElement("p",null,"Ch\xfac Ngon mi\u1ec7ng")),r.a.createElement("div",{className:"congrats-button"},r.a.createElement("button",{className:"btn-close",onClick:m},"\u0110\xf3ng"),r.a.createElement("button",{className:"go-order",onClick:function(){u.push("/orders")}},"Xem order")))))}),se=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ie=setInterval((function(e,t,a){new Date(e,t,a,13,45,0,0).getTime()-(new Date).getTime()<0&&clearInterval(ie)}),1e3),oe=function(e,t){return e.reduce((function(e,a){var n=a[t];return e[n]=e[n]||[],e[n].push(a),e}),{})},ue=function(e){var t=e.order,a=e.isAdmin,c=Object(n.useState)(t.paid),l=Object(o.a)(c,2),s=l[0],i=l[1],u=_(),E=Object(o.a)(u,2),p=(E[0].orders,E[1],function(){var e=_(),t=Object(o.a)(e,2)[1];return Object(n.useCallback)(function(){var e=Object(m.a)(d.a.mark((function e(a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"DELETE_ORDER_REQUEST"}),e.prev=1,e.next=4,Y(a);case 4:n=e.sent,t(J(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"DELETE_ORDER_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),[t])}());return r.a.createElement("div",{key:t._id,className:"order-item"},r.a.createElement("span",{className:"name"},t.user.username),r.a.createElement("span",{className:"quantity"},t.quantity),r.a.createElement("span",{className:"date"},function(e){if(e){var t=new Date(e),a=t.getDate(),n=t.getMonth(),r=se[n],c=t.getFullYear();return"".concat(a," ").concat(r," ").concat(c)}}(t.date)),r.a.createElement("span",{className:"dish-name"},t.dish.name),r.a.createElement("span",{className:"price"},t.dish.price),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"paid"},r.a.createElement("input",{type:"checkbox",onChange:function(e){var a=e.target.checked;!function(e){var t=localStorage.getItem("token");j.a.post("".concat(R,"/orders/check-paid"),e,{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.data}))}({id:t._id,isPaid:a}),i(a)},checked:s}),r.a.createElement("span",{className:"check-mask"})),r.a.createElement("span",{className:"delete",onClick:function(){p(t)}},r.a.createElement("img",{src:x.a,alt:"delete-order"}))))},de=(a(217),function(){var e=_(),t=Object(o.a)(e,2),a=t[0].orders,c=a.orderList,l=a.isLoading,s=t[1],i="admin"===localStorage.getItem("roles");Object(n.useEffect)((function(){(function(){var e=Object(m.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"GET_ORDERS_REQUEST"}),e.prev=1,e.next=4,V();case 4:a=e.sent,s(z(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),s({type:"GET_ORDERS_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}})()()}),[s]);var u=c.sort((function(e,t){return e.dish.name.localeCompare(t.name)})),E=c.map((function(e){return{quantity:e.quantity,dishName:e.dish.name,price:35}})),p=oe(E,"dishName"),O=Object.keys(p).map((function(e){return{name:e,qty:p[e].reduce((function(e,t){return e+t.quantity}),0),price:p[e].reduce((function(e,t){return e+t.price*t.quantity}),0)}})),g=O.reduce((function(e,t){return e+t.qty}),0),f=O.reduce((function(e,t){return e+t.price}),0);return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"order-wrapper"},r.a.createElement("h1",{className:"order-title"},"Orders List"),0!==c.length&&r.a.createElement("div",{className:"order-total"},r.a.createElement("h3",{className:"title"},"Total List"),r.a.createElement("div",{className:"header"},r.a.createElement("span",null,"T\xean m\xf3n"),r.a.createElement("span",null,"S\u1ed1 L\u01b0\u1ee3ng"),r.a.createElement("span",null,"Gi\xe1")),O.map((function(e){return r.a.createElement("div",{key:e.name,className:"item"},r.a.createElement("span",null,e.name),r.a.createElement("span",null,e.qty),r.a.createElement("span",null,"".concat(e.price,".000\u0111")))})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"T\u1ed5ng c\u1ed9ng"),r.a.createElement("span",null,g),r.a.createElement("span",null,"".concat(f,".000\u0111")))),l&&r.a.createElement("img",{className:"icon-loading",src:D.a,alt:"loading-spinner"}),0!==u.length&&r.a.createElement("div",{className:"order-content"},r.a.createElement("div",{className:"order-item__title"},r.a.createElement("span",null,"Ng\u01b0\u1eddi Order"),r.a.createElement("span",null,"S\u1ed1 L\u01b0\u1ee3ng"),r.a.createElement("span",null,"Ng\xe0y Order"),r.a.createElement("span",{className:"dish-name"},"T\xean M\xf3n"),r.a.createElement("span",null,"Gi\xe1"),i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"paid"},"Paid"),r.a.createElement("span",{className:"delete"}))),u.map((function(e){return r.a.createElement(ue,{key:e._id,order:e,isAdmin:i})})))))}),me=function(){var e=_(),t=Object(o.a)(e,2),a=t[0].allOrders,c=a.orderList,l=a.isLoading,s=t[1],i="admin"===localStorage.getItem("roles");Object(n.useEffect)((function(){(function(){var e=Object(m.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"GET_ALL_ORDERS_REQUEST"}),e.prev=1,e.next=4,H();case 4:a=e.sent,s(Q(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),s({type:"GET_ALL_ORDERS_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}})()()}),[s]);var u=c.sort((function(e,t){return e.dish.name.localeCompare(t.dish_name)})),E=oe(c,"date");return r.a.createElement("div",{className:"order-wrapper"},r.a.createElement("h1",{className:"order-title"},"All Orders List"),l&&r.a.createElement("img",{className:"icon-loading",src:D.a,alt:"loading-spinner"}),0!==u.length&&r.a.createElement("div",{className:"order-content"},r.a.createElement("div",{className:"order-item__title"},r.a.createElement("span",null,"Ng\u01b0\u1eddi Order"),r.a.createElement("span",null,"S\u1ed1 L\u01b0\u1ee3ng"),r.a.createElement("span",null,"Ng\xe0y Order"),r.a.createElement("span",null,"T\xean M\xf3n"),r.a.createElement("span",null,"Gi\xe1"),i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"paid"},"Paid"),r.a.createElement("span",{className:"delete"}))),Object.keys(E).map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"order-item__date-title",key:e},e),E[e].map((function(e){return r.a.createElement(ue,{key:e._id,order:e,isAdmin:!0})})))}))))},Ee=a(226),pe=a.n(Ee),Oe=function(e){var t=Object(i.h)().search,a=Object(i.g)(),n=pe.a.parse(t).token||localStorage.getItem("token");return n?(localStorage.setItem("token",n),a.push("/")):window.open(N,"_self"),r.a.createElement("div",null,"Login")},ge=a(229),fe=function(e){var t=e.component,a=Object(ge.a)(e,["component"]),n="admin"===localStorage.getItem("roles");return r.a.createElement(i.b,Object.assign({},a,{render:function(e){var a=e.location;return n?r.a.createElement(t,null):r.a.createElement(i.a,{to:{pathname:"/",state:{from:a}}})}}))},be=a(227),ve=a.n(be),he=(a(495),a(496),function(){return r.a.createElement("div",{className:"main-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/lunch-ordering-fe",className:"main-logo"},r.a.createElement("img",{src:ve.a,alt:"logo"})),r.a.createElement(s.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(le,null)),r.a.createElement(i.b,{path:"/orders"},r.a.createElement(de,null)),r.a.createElement(i.b,{path:"/login"},r.a.createElement(Oe,null)),r.a.createElement(fe,{path:"/allOrders",component:me})))))});a(497);l.a.render(r.a.createElement(h,null,r.a.createElement(he,null)),document.getElementById("root"))},50:function(e,t,a){e.exports=a.p+"static/media/loading.546dec86.svg"}},[[230,1,2]]]);
//# sourceMappingURL=main.af7e63e1.chunk.js.map