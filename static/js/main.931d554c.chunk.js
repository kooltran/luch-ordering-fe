(this["webpackJsonpfood-ordering"]=this["webpackJsonpfood-ordering"]||[]).push([[0],{150:function(e,a,t){e.exports=t.p+"static/media/cross.441d8611.svg"},285:function(e,a,t){},289:function(e,a,t){e.exports=t.p+"static/media/plus.311313cd.svg"},290:function(e,a,t){e.exports=t.p+"static/media/cart.890dce60.svg"},291:function(e,a,t){e.exports=t.p+"static/media/fobiden-order.6b4b70dc.svg"},298:function(e,a,t){e.exports=t.p+"static/media/congrats.211b8e65.svg"},299:function(e,a,t){e.exports=t.p+"static/media/checklist.80d775c4.svg"},309:function(e,a,t){e.exports=t.p+"static/media/logo.913ae04a.svg"},316:function(e,a,t){e.exports=t(619)},558:function(e,a,t){},559:function(e,a,t){},560:function(e,a,t){},593:function(e,a,t){},617:function(e,a,t){},619:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),i=t.n(c),l=t(122),s=t(19),u=t(6),o=t(13),d=t.n(o),m=t(25),E=t(2),p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],O=setInterval((function(e,a,t){new Date(e,a,t,13,45,0,0).getTime()-(new Date).getTime()<0&&clearInterval(O)}),1e3),g=t(288),f=t.n(g)()({menu:[function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"GET_MENU_LOADING":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!0,menuList:[],getMenuFail:null});case"GET_MENU_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,menuList:a.payload,getMenuFail:null});case"GET_MENU_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,menuList:[],getMenuFail:a.payload.message});default:return e}},{menuList:[],isLoading:!1,getMenuFail:null}],users:[function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"GET_CUR_USER_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{user:a.payload,getUserFail:null});case"GET_CUR_USER_FAIL":return Object(E.a)(Object(E.a)({},e),{},{user:{},getUserFail:a.payload.message});case"GET_USERS_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{users:a.payload,getUserFail:null});case"GET_USERS_FAIL":return Object(E.a)(Object(E.a)({},e),{},{users:[],getUserFail:a.payload.message});default:return e}},{user:{},users:[],userFail:null}],cart:[function(e,a){switch(a.type){case"ADD_CART_ITEM":return Object(E.a)(Object(E.a)({},e),{},{cartList:a.payload,isAnimateCart:!0,isCartAdded:!0});case"REMOVE_CART_ADDED":return Object(E.a)(Object(E.a)({},e),{},{isCartAdded:!0,isAnimateCart:!1});case"DELETE_CART_ITEM":var t=e.cartList,n=a.payload;return Object(E.a)(Object(E.a)({},e),{},{cartList:t.filter((function(e){return e.id!==n.id})),isAnimateCart:!0,isCartAdded:!1});case"DELETE_CART":return Object(E.a)(Object(E.a)({},e),{},{cartList:[],isAnimateCart:!1,isCartAdded:!1});default:return e}},{cartList:[],isAnimateCart:!1,isCartAdded:!1}],submitOrder:[function(e,a){switch(a.type){case"SUBMIT_ORDERS_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{createOrderSuccess:!1,isLoading:!0,submitOrderFail:null});case"SUBMIT_ORDERS_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{createOrderSuccess:!0,isLoading:!1,submitOrderFail:null});case"SUBMIT_ORDERS_FAIL":return Object(E.a)(Object(E.a)({},e),{},{createOrderSuccess:!1,isLoading:!1,submitOrderFail:a.payload});default:return e}},{createOrderSuccess:!1,isLoading:!1,submitOrderFail:null}],orders:[function(e,a){switch(a.type){case"GET_ORDERS_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{isOrdersLoading:!0,orderList:[],getOrdersFail:null,deleteOrderRequest:!1,deleteOrderFail:null});case"GET_ORDERS_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{isOrdersLoading:!1,orderList:a.payload,getOrdersFail:null,deleteOrderRequest:!1,deleteOrderFail:null});case"GET_ORDERS_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isOrdersLoading:!1,orderList:[],getOrdersFail:a.payload.message,deleteOrderRequest:!1,deleteOrderFail:null});case"DELETE_ORDER_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{isOrdersLoading:!1,getOrdersFail:null,deleteOrderRequest:!0,deleteOrderFail:null});case"DELETE_ORDER_SUCCESS":var t=a.payload,n=e.orderList;return Object(E.a)(Object(E.a)({},e),{},{isOrdersLoading:!1,orderList:n.filter((function(e){return e._id!==t._id})),getOrdersFail:null,deleteOrderRequest:!1,deleteOrderFail:null});case"DELETE_ORDER_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isOrdersLoading:!1,orderList:[],getOrdersFail:null,deleteOrderRequest:!1,deleteOrderFail:a.payload.message});default:return e}},{orderList:[],isOrdersLoading:!1,getOrdersFail:null,deleteOrderRequest:!1,deleteOrderFail:null}],orderTimeout:[function(e,a){switch(a.type){case"SET_ORDER_TIMEOUT":return Object(E.a)(Object(E.a)({},e),{},{isOrderTimeout:!0});case"RESET_ORDER_TIMEOUT":return Object(E.a)(Object(E.a)({},e),{},{isOrderTimeout:!1});default:return e}},{isOrderTimeout:!1}],allOrders:[function(e,a){switch(a.type){case"GET_ALL_ORDERS_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!0,allOrderList:[],getOrdersFail:null,isCheckingPaid:!1,checkPaidFail:null});case"GET_ALL_ORDERS_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,allOrderList:a.payload,getOrdersFail:null,isCheckingPaid:!1,checkPaidFail:null});case"GET_ALL_ORDERS_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,allOrderList:[],getOrdersFail:a.payload.message,isCheckingPaid:!1,checkPaidFail:null});case"CHECK_PROVIDER_PAID_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,getOrdersFail:null,isCheckingPaid:!0,checkPaidFail:null});case"CHECK_PROVIDER_PAID_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,getOrdersFail:null,isCheckingPaid:!1,allOrderList:a.payload,checkPaidFail:null});case"CHECK_PROVIDER_PAID_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,getOrdersFail:null,isCheckingPaid:!1,allOrderList:[],checkPaidFail:a.payload});case"CHECK_PAID_ALL_WEEK_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{isCheckingPaid:!0,checkPaidFail:null,isLoading:!1,getOrdersFail:null});case"CHECK_PAID_ALL_WEEK_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{isCheckingPaid:!1,allOrderList:a.payload,checkPaidFail:null,isLoading:!1,getOrdersFail:null});case"CHECK_PAID_ALL_WEEK_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isCheckingPaid:!1,allOrderList:[],checkPaidFail:a.payload.message,isLoading:!1,getOrdersFail:null});case"CHECK_PAID_ORDER_ITEM_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{isCheckingPaid:!0});case"CHECK_PAID_ORDER_ITEM_SUCCESS":var t=e.allOrderList,n=a.payload,r=t.map((function(e){return e._id===n._id?Object(E.a)(Object(E.a)({},e),{},{orders:n.orders,isPaid:n.isPaid}):e}));return Object(E.a)(Object(E.a)({},e),{},{isCheckingPaid:!1,allOrderList:r});case"CHECK_PAID_ORDER_ITEM_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isCheckingPaid:!1,allOrderList:[],checkPaidFail:a.payload});default:return e}},{allOrderList:[],isLoading:!1,getOrdersFail:null,isCheckingPaid:!1,checkPaidFail:null}]}),b=Object(u.a)(f,2),h=b[0],_=b[1],v=r.a.createContext({}),y=function(e){var a=e.children,t=Object(n.useReducer)(h,_),c=Object(u.a)(t,2),i=c[0],l=c[1];return r.a.createElement(v.Provider,{value:{data:i,setData:l}},a)},C=function(){var e=Object(n.useContext)(v),a=e.data,t=e.setData;return[a,Object(n.useCallback)((function(e){var a=e.type,n=e.payload;t({payload:n,type:a})}),[t])]},j=function(e){return{type:"GET_MENU_SUCCESS",payload:e}},S=t(67),L=t.n(S);console.log("production");var R="https://luch-ordering.herokuapp.com",k="https://luch-ordering.herokuapp.com/google",T=function(){var e=localStorage.getItem("token");return L.a.get("".concat(R,"/users/current"),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return e.data}))},D=t(76),A=t.n(D),N=(t(558),t(313)),I=t(4),F=t.n(I),P=t(289),w=t.n(P),U=function(e){return{type:"ADD_CART_ITEM",payload:e}},x=function(e){var a=e.item,t=Object(n.useState)(1),c=Object(u.a)(t,2),i=c[0],l=c[1],s=C(),o=Object(u.a)(s,2),d=o[0],m=d.users,E=d.cart,p=d.orderTimeout,O=o[1],g=m.user,f=E.cartList;return r.a.createElement("div",{className:F()("menu-item",{"is-disabled":f.some((function(e){return e.id===a._id}))||p.isOrderTimeout})},r.a.createElement("div",{className:"image"},r.a.createElement("img",{className:"img-dish",src:a.img,alt:a.name}),r.a.createElement("div",{onClick:function(){var e={id:a._id,dish_name:a.name,quantity:i};if(g.username)if(0===f.length)O(U(f)),setTimeout((function(){return O({type:"REMOVE_CART_ADDED"})}),500),f.push(e);else{var t=[].concat(Object(N.a)(f),[e]);O(U(t)),setTimeout((function(){return O({type:"REMOVE_CART_ADDED"})}),500)}else window.open(k,"_self")}},r.a.createElement("img",{className:"icon-add",src:w.a,alt:""}))),r.a.createElement("div",{className:"desc"},r.a.createElement("div",{className:"info"},r.a.createElement("span",{className:"name"},a.name),r.a.createElement("span",{className:"price"},a.price)),r.a.createElement("div",{className:"quantity"},r.a.createElement("input",{type:"number",value:i,onChange:function(e){var a=e.target.value,t=parseInt(a);l(t<=0?1:t>5?5:t)}}))))},M=function(){var e=C(),a=Object(u.a)(e,2),t=a[0].menu,c=a[1],i=function(){var e=C(),a=Object(u.a)(e,2)[1];return Object(n.useCallback)(Object(m.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"GET_MENU_LOADING"}),e.prev=1,e.next=4,L.a.get("".concat(R,"/menuList")).then((function(e){return e.data}));case 4:t=e.sent,a(j(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a({type:"GET_MENU_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),[a])}(),l=t.isLoading,s=t.menuList;return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:a=e.sent,localStorage.setItem("roles",a.roles),c({type:"GET_CUR_USER_SUCCESS",payload:a});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),i()}),[c,i]),r.a.createElement("div",{className:"menu-wrapper"},l&&r.a.createElement("img",{className:"icon-loading",src:A.a,alt:"loading-spinner"}),s.map((function(e){return r.a.createElement(x,{key:e._id,item:e})})))},G=t(150),q=t.n(G),K=function(e){var a=e.order,t=C(),n=Object(u.a)(t,2)[1];return r.a.createElement("div",{className:"cart-item"},r.a.createElement("div",{className:"name"},a.dish_name),r.a.createElement("div",{className:"desc"},r.a.createElement("div",{className:"qty"},a.quantity),r.a.createElement("span",{className:"remove",onClick:function(){n(function(e){return{type:"DELETE_CART_ITEM",payload:e}}(a))}},r.a.createElement("img",{src:q.a,alt:"remove-order"}))))},H=function(e){return{type:"SUBMIT_ORDERS_FAIL",payload:e}},Q=function(e){return{type:"GET_ORDERS_SUCCESS",payload:e}},B=function(e){return{type:"GET_ALL_ORDERS_SUCCESS",payload:e}},V=function(e){return{type:"DELETE_ORDER_SUCCESS",payload:e}},W=L.a.create({baseURL:R});W.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(localStorage.getItem("token")),e}));var z=W,J=function(e){return z.post("/orders/create",e).then((function(e){return e.data}))},X=function(e){return z.post("/orders/check-paid-provider",e).then((function(e){return e.data}))},Y=function(e){return z.post("/orders/paid-allweeks",e).then((function(e){return e.data}))},$=function(e){return z.post("/orders/delete",e).then((function(e){return e.data}))},Z=function(e){return z.get("/orders/payment",{params:{type:e}}).then((function(e){return e.data}))},ee=t(290),ae=t.n(ee),te=(t(559),function(){var e=C(),a=Object(u.a)(e,1)[0],t=a.cart,c=a.submitOrder,i=t.cartList,l=t.isAnimateCart,s=t.isCartAdded,o=c.isLoading,E=Object(n.useState)(!1),p=Object(u.a)(E,2),O=p[0],g=p[1],f=function(){var e=C(),a=Object(u.a)(e,2)[1];return Object(n.useCallback)(function(){var e=Object(m.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"SUBMIT_ORDERS_REQUEST"}),e.prev=1,e.next=4,J(t);case 4:e.sent,a({type:"SUBMIT_ORDERS_SUCCESS"}),a({type:"DELETE_CART"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),a(H(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}(),[a])}();Object(n.useEffect)((function(){s&&g(s)}),[s]);return r.a.createElement("div",{className:"cart-wrapper"},r.a.createElement("div",{className:F()("cart-icon",{shake:l}),onClick:function(){g(!O)}},r.a.createElement("img",{src:ae.a,alt:"cart-icon"}),r.a.createElement("span",{className:"cart-qty"},i.length)),r.a.createElement("div",{className:F()("cart-content",{show:O&&i.length})},o&&r.a.createElement("img",{className:"cart-loading",src:A.a,alt:""}),i.map((function(e){return r.a.createElement(K,{key:e.id,order:e})})),r.a.createElement("button",{className:"btn-order",onClick:function(){var e=i.map((function(e){return{dishId:e.id,quantity:e.quantity,date:(new Date).toDateString(),paid:!1}}));f(e)}},"Order")))}),ne=t(620),re=t(291),ce=t.n(re),ie=(t(560),function(){var e=new Date,a=e.getFullYear(),t=e.getMonth(),c=e.getDate(),i=new Date(a,t,c,10,58,0,0).getTime(),l=new Date(a,t,c,8,30,0,0).getTime(),s=(new Date).getTime()>=l,o=Object(n.useState)({hours:0,minutes:0,seconds:0}),d=Object(u.a)(o,2),m=d[0],E=d[1],p=Object(n.useState)(i),O=Object(u.a)(p,1)[0],g=Object(n.useState)(!1),f=Object(u.a)(g,2),b=f[0],h=f[1],_=Object(n.useCallback)((function(){if(O){var e=(new Date).getTime(),a=O-e,t=Math.floor(a%36e5/6e4),n=Math.floor(a%6e4/1e3),r=[1,2,3,4,5,6,7,8,9],c=Math.floor(a%864e5/36e5);r.includes(c)&&(c="0".concat(c)),r.includes(t)&&(t="0".concat(t)),r.includes(n)&&(n="0".concat(n)),E({hours:c,minutes:t,seconds:n}),h(c<=0&&t<=0&&n<=0)}}),[O]);Object(n.useEffect)((function(){if(setInterval((function(){return _()}),1e3),b)return function(){return clearInterval(_)}}),[b,_]);var v=m.hours,y=m.minutes,C=m.seconds;return r.a.createElement("div",{className:"countdown"},v>=0&&y>=0&&C>0&&r.a.createElement("div",null,r.a.createElement("p",{className:"countdown-message"},"Th\u1eddi gian order c\u1ee7a b\u1ea1n c\xf2n l\u1ea1i"),r.a.createElement("span",null,v),r.a.createElement("span",null,y),r.a.createElement("span",null,C)),r.a.createElement(ne.a,{className:"timeout-modal",visible:b||!s,onCancel:function(){},width:"60vw",height:"60vh",footer:null},r.a.createElement("img",{className:"timeout-icon",src:ce.a,alt:"forbiden-order"}),b&&r.a.createElement("div",{className:"timeout-message"},"Th\u1eddi gian order c\u01a1m h\xf4m nay \u0111\xe3 h\u1ebft, b\u1ea1n vui l\xf2ng quay l\u1ea1i v\xe0o l\xfac"," ",r.a.createElement("span",{className:"note"},"8h00")," ng\xe0y mai nh\xe9!!!"),!s&&r.a.createElement("div",{className:"timeout-message"},"Th\u1eddi gian order ch\u01b0a t\u1edbi, b\u1ea1n vui l\xf2ng quay l\u1ea1i v\xe0o l\xfac"," ",r.a.createElement("span",{className:"note"},"8h00")," nh\xe9!!!")))}),le=t(298),se=t.n(le),ue=t(299),oe=t.n(ue),de=(t(592),t(125)),me=(t(593),function(){var e=C(),a=Object(u.a)(e,1)[0].submitOrder.createOrderSuccess,t=Object(n.useState)(a),c=Object(u.a)(t,2),i=c[0],l=c[1],o=Object(s.g)(),d="admin"===localStorage.getItem("roles");Object(n.useEffect)((function(){a&&l(a)}),[a]);var m=function(){l(!1)};return r.a.createElement("div",{className:"page"},r.a.createElement("h1",{className:"text-uppercase text-center"},"SP Team Lunch Ordering"),!d&&r.a.createElement(ie,null),r.a.createElement("a",{href:"/lunch-ordering-fe/#/orders",className:"icon-orders"},r.a.createElement("img",{src:oe.a,alt:"checklist"})),r.a.createElement(te,null),r.a.createElement(M,null),r.a.createElement(ne.a,{className:"congrats-modal",visible:i,onCancel:m,width:"60vw",height:"60vh",footer:[r.a.createElement(de.a,{size:"large",key:"back",onClick:m},"\u0110\xf3ng"),r.a.createElement(de.a,{key:"submit",size:"large",type:"primary",onClick:function(){o.push("/orders")}},"Xem Order")]},r.a.createElement("img",{className:"modal-icon",src:se.a,alt:"forbiden-order"}),r.a.createElement("div",{className:"congrats-message"},"Thank you! B\u1ea1n \u0111\xe3 order th\xe0nh c\xf4ng!!",r.a.createElement("p",null,"Ch\xfac Ngon mi\u1ec7ng"))))}),Ee=function(e){return{type:"CHECK_PAID_ORDER_ITEM_SUCCESS",payload:e}},pe=function(e){return{type:"CHECK_PROVIDER_PAID_SUCCESS",payload:e}},Oe=function(e){return{type:"CHECK_PROVIDER_PAID_FAIL",payload:e}},ge=function(e){return{type:"CHECK_PAID_ALL_WEEK_SUCCESS",payload:e}},fe=function(e){return{type:"CHECK_PAID_ALL_WEEK_FAIL",payload:e}},be=function(){var e=C(),a=Object(u.a)(e,2)[1];return{checkPaidOrderItem:Object(n.useCallback)(function(){var e=Object(m.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"CHECK_PAID_ORDER_ITEM_REQUEST"}),e.prev=1,e.next=4,r=t,z.post("/orders/check-paid",r).then((function(e){return e.data}));case 4:n=e.sent,a(Ee(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a((e.t0,{type:"CHECK_PAID_ORDER_ITEM_FAIL"}));case 11:case"end":return e.stop()}var r}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),[a]),checkProviderPaidOrder:Object(n.useCallback)(function(){var e=Object(m.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"CHECK_PROVIDER_PAID_REQUEST"}),e.prev=1,e.next=4,X(t);case 4:n=e.sent,a(pe(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a(Oe(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),[a]),checkPaidOrderAllWeek:Object(n.useCallback)(function(){var e=Object(m.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"CHECK_PAID_ALL_WEEK_REQUEST"}),e.prev=1,e.next=4,Y(t);case 4:n=e.sent,a(ge(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a(fe(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),[a])}},he=function(e){var a=e.order,t=e.isAdmin,c=e.isAllOrders,i=e.type,l=e.paymentId,s=Object(n.useState)(a.paid),o=Object(u.a)(s,2),E=o[0],O=o[1],g=be().checkPaidOrderItem,f="date"===i,b=C(),h=Object(u.a)(b,1)[0].allOrders.isCheckingPaid,_=a.quantity,v=a.dish,y=v.name,j=v.price,S=a.user.username,L=a.date,R=C(),k=Object(u.a)(R,1)[0].orders.deleteOrderRequest,T=Object(n.useState)(!1),D=Object(u.a)(T,2),A=D[0],N=D[1],I=function(){var e=C(),a=Object(u.a)(e,2),t=(a[0].allOrders.allOrderList,a[1]);return Object(n.useCallback)(function(){var e=Object(m.a)(d.a.mark((function e(a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"DELETE_ORDER_REQUEST"}),e.prev=1,e.next=4,$(a);case 4:n=e.sent,t(V(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"DELETE_ORDER_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),[t])}(),P=function(){return N(!1)};return Object(n.useEffect)((function(){O(a.paid)}),[a.paid]),r.a.createElement("div",{key:a._id,className:"order-item"},r.a.createElement("span",{className:"name"},"".concat(f?S:L)),r.a.createElement("span",{className:"quantity"},_),r.a.createElement("span",{className:"dish-name"},y),!c&&r.a.createElement("span",{className:"date"},function(e){if(e){var a=new Date(e),t=a.getDate(),n=a.getMonth(),r=p[n],c=a.getFullYear();return"".concat(t," ").concat(r," ").concat(c)}}(L)),r.a.createElement("span",{className:"price"},"".concat(parseInt(j.slice(0,2))*_,",000\u0111")),t&&r.a.createElement(r.a.Fragment,null,c&&r.a.createElement("div",{className:"paid"},r.a.createElement("span",{className:"order-checkbox"},r.a.createElement("input",{type:"checkbox",onChange:function(e){var t=e.target.checked,n={id:a._id,isPaid:t,type:i,paymentId:l};g(n),O(t)},checked:E||a.paid,disabled:h}),r.a.createElement("span",{className:F()("check-mask",{"is-disabled":h})}))),!c&&r.a.createElement("span",{className:"delete",onClick:function(){return N(!0)}},r.a.createElement("img",{src:q.a,alt:"delete-order"}))),r.a.createElement(ne.a,{className:"order-item__modal",visible:A,onCancel:P,footer:[r.a.createElement(de.a,{size:"large",key:"back",onClick:P},"\u0110\xf3ng"),r.a.createElement(de.a,{key:"submit",size:"large",type:"primary",loading:k,onClick:function(){I(a)}},"Xo\xe1")]},r.a.createElement("p",null,"B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n xo\xe1 ch\u1ee9???")))},_e=(t(285),function(){var e=C(),a=Object(u.a)(e,2),t=a[0].orders,c=t.orderList,i=t.isOrdersLoading,l=a[1],s="admin"===localStorage.getItem("roles");Object(n.useEffect)((function(){(function(){var e=Object(m.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l({type:"GET_ORDERS_REQUEST"}),e.prev=1,e.next=4,z.get("/orders/list").then((function(e){return e.data}));case 4:a=e.sent,l(Q(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l({type:"GET_ORDERS_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}})()()}),[l]);var o=c.sort((function(e,a){return e.dish.name.localeCompare(a.name)})),E=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e.reduce((function(e,n){var r=n[a];return"object"===typeof r&&t?(e[r[t]]=e[r[t]]||[],e[r[t]].push(n)):(e[r]=e[r]||[],e[r].push(n)),e}),{})}(c.map((function(e){return{quantity:e.quantity,dishName:e.dish.name,price:35}})),"dishName"),p=Object.keys(E).map((function(e){return{name:e,qty:E[e].reduce((function(e,a){return e+a.quantity}),0),price:E[e].reduce((function(e,a){return e+a.price*a.quantity}),0)}})),O=p.reduce((function(e,a){return e+a.qty}),0),g=p.reduce((function(e,a){return e+a.price}),0);return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"order-wrapper"},r.a.createElement("h1",{className:"order-title"},"Orders List"),i&&r.a.createElement("img",{className:"icon-loading",src:A.a,alt:"loading-spinner"}),0!==o.length&&r.a.createElement("div",{className:"order-total"},r.a.createElement("h3",{className:"title"},"Total List"),r.a.createElement("div",{className:"header"},r.a.createElement("span",null,"T\xean m\xf3n"),r.a.createElement("span",null,"S\u1ed1 L\u01b0\u1ee3ng"),r.a.createElement("span",null,"Gi\xe1")),p.map((function(e){return r.a.createElement("div",{key:e.name,className:"item"},r.a.createElement("span",null,e.name),r.a.createElement("span",null,e.qty),r.a.createElement("span",null,"".concat(e.price,".000\u0111")))})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"T\u1ed5ng c\u1ed9ng"),r.a.createElement("span",null,O),r.a.createElement("span",null,"".concat(g,".000\u0111")))),0!==o.length&&r.a.createElement("div",{className:"order-content"},r.a.createElement("div",{className:"order-item__header"},r.a.createElement("span",null,"Ng\u01b0\u1eddi Order"),r.a.createElement("span",null,"S\u1ed1 L\u01b0\u1ee3ng"),r.a.createElement("span",{className:"dish-name"},"T\xean M\xf3n"),r.a.createElement("span",null,"Ng\xe0y Order"),r.a.createElement("span",null,"Gi\xe1"),s&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"delete"}))),o.map((function(e){return r.a.createElement(he,{key:e._id,order:e,isAdmin:s,isAllOrders:!1,isDateMode:!0})})))))}),ve=t(621),ye=function(e){var a=e.handleChangeType,t=e.className,n=ve.a.Option;return r.a.createElement(ve.a,{defaultValue:"date",style:{width:120},onChange:a,className:t},r.a.createElement(n,{value:"date"},"Date"),r.a.createElement(n,{value:"user"},"User"))},Ce=t(149),je=function(e){var a=e.item,t=e.isAdmin,n=e.isAllOrders,c=e.type,i=e.isCheckingPaid,l=a.orders[0].user,s=Object(Ce.a)({},l._id,l.username),u=be(),o=u.checkProviderPaidOrder,d=u.checkPaidOrderAllWeek,m="date"===c;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"order-item__date-title",key:a._id},r.a.createElement("span",null,"".concat(m?a.createdAt:s[a.user])),r.a.createElement("div",{className:"paid-provider"},r.a.createElement("span",{className:"order-checkbox"},r.a.createElement("input",{type:"checkbox",onChange:m?function(e){var t=e.target.checked;o({id:a._id,isPaid:t})}:function(e){var t=e.target.checked;d({id:a._id,isPaidAllWeek:t,userId:a.user})},checked:a.isPaid,disabled:i}),r.a.createElement("span",{className:F()("check-mask",{"is-disabled":i})})))),r.a.createElement("div",{className:"order-item__header"},r.a.createElement("span",null,"".concat(m?"Ng\u01b0\u1eddi Order":"Ng\xe0y Order")),r.a.createElement("span",null,"S\u1ed1 L\u01b0\u1ee3ng"),r.a.createElement("span",null,"T\xean M\xf3n"),r.a.createElement("span",null,"Gi\xe1"),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"paid"},"Paid"),!n&&r.a.createElement("span",{className:"delete"}))),a.orders.map((function(e){return r.a.createElement(he,{key:e._id,order:e,isAdmin:!0,isAllOrders:n,type:c,paymentId:a._id})})),r.a.createElement("div",{className:"order-item__total"},r.a.createElement("span",null,"T\u1ed4NG C\u1ed8NG"),r.a.createElement("span",null,a.totalQty),r.a.createElement("span",null),r.a.createElement("span",{className:"price"},"".concat(a.totalPrice,",000\u0111")),r.a.createElement("span",null)))},Se=function(){var e=C(),a=Object(u.a)(e,2),t=a[0].allOrders,c=t.allOrderList,i=t.isLoading,l=t.isCheckingPaid,s=a[1],o=Object(n.useState)("date"),p=Object(u.a)(o,2),O=p[0],g=p[1],f="admin"===localStorage.getItem("roles"),b=c.map((function(e){var a=e.orders.reduce((function(e,a){return e+35*a.quantity}),0),t=e.orders.reduce((function(e,a){return e+a.quantity}),0);return Object(E.a)(Object(E.a)({},e),{},{totalPrice:a,totalQty:t})})).sort((function(e,a){return new Date(a.createdAt)-new Date(e.createdAt)})),h=function(){var e=Object(m.a)(d.a.mark((function e(a){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"GET_ALL_ORDERS_REQUEST"}),e.prev=1,e.next=4,Z(a);case 4:t=e.sent,n=t.filter((function(e){return e.orders.length>0})),s(B(n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),s({type:"GET_ALL_ORDERS_FAIL",payload:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){h("date")}),[s]);return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"order-wrapper"},r.a.createElement(ye,{handleChangeType:function(e){g(e),h(e)},className:"order-filter"}),r.a.createElement("h1",{className:"order-title"},"All Orders List"),i&&r.a.createElement("img",{className:"icon-loading",src:A.a,alt:"loading-spinner"}),0!==b.length&&b.map((function(e){return r.a.createElement(je,{key:e._id,item:e,isAdmin:f,isAllOrders:!0,isCheckingPaid:l,type:O})}))))},Le=t(308),Re=t.n(Le),ke=function(e){var a=Object(s.h)().search,t=Object(s.g)(),n=Re.a.parse(a).token||localStorage.getItem("token");return n?(localStorage.setItem("token",n),t.push("/")):window.open(k,"_self"),r.a.createElement("div",null)},Te=t(315),De=function(e){var a=e.component,t=Object(Te.a)(e,["component"]),n="admin"===localStorage.getItem("roles");return r.a.createElement(s.b,Object.assign({},t,{render:function(e){var t=e.location;return n?r.a.createElement(a,null):r.a.createElement(s.a,{to:{pathname:"/",state:{from:t}}})}}))},Ae=t(309),Ne=t.n(Ae),Ie=(t(617),t(618),t(287),function(){return r.a.createElement("div",{className:"main-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/lunch-ordering-fe",className:"main-logo"},r.a.createElement("img",{src:Ne.a,alt:"logo"})),r.a.createElement(l.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/"},r.a.createElement(me,null)),r.a.createElement(s.b,{path:"/orders"},r.a.createElement(_e,null)),r.a.createElement(s.b,{path:"/login"},r.a.createElement(ke,null)),r.a.createElement(De,{path:"/all-orders",component:Se})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null,r.a.createElement(Ie,null)),document.getElementById("root"))},76:function(e,a,t){e.exports=t.p+"static/media/loading.546dec86.svg"}},[[316,1,2]]]);
//# sourceMappingURL=main.931d554c.chunk.js.map