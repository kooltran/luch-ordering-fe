(this["webpackJsonpfood-ordering"]=this["webpackJsonpfood-ordering"]||[]).push([[0],{148:function(e,a,t){e.exports=t.p+"static/media/cross.441d8611.svg"},201:function(e,a,t){},287:function(e,a,t){e.exports=t.p+"static/media/plus.311313cd.svg"},288:function(e,a,t){e.exports=t.p+"static/media/cart.890dce60.svg"},289:function(e,a,t){e.exports=t.p+"static/media/fobiden-order.6b4b70dc.svg"},296:function(e,a,t){e.exports=t.p+"static/media/congrats.211b8e65.svg"},297:function(e,a,t){e.exports=t.p+"static/media/checklist.80d775c4.svg"},307:function(e,a,t){e.exports=t.p+"static/media/logo.913ae04a.svg"},313:function(e,a,t){e.exports=t(617)},555:function(e,a,t){},556:function(e,a,t){},557:function(e,a,t){},590:function(e,a,t){},61:function(e,a,t){e.exports=t.p+"static/media/loading.546dec86.svg"},615:function(e,a,t){},617:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),l=t.n(c),i=t(120),s=t(19),u=t(6),o=t(9),d=t.n(o),m=t(26),E=t(3),p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],O=setInterval((function(e,a,t){new Date(e,a,t,13,45,0,0).getTime()-(new Date).getTime()<0&&clearInterval(O)}),1e3),g=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"null";return e.reduce((function(e,n){var r=n[a];return"object"===typeof r?(e[r[t]]=e[r[t]]||[],e[r[t]].push(n)):(e[r]=e[r]||[],e[r].push(n)),e}),{})},f=t(286),b=t.n(f)()({menu:[function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"GET_MENU_LOADING":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!0,menuList:[],getMenuFail:null});case"GET_MENU_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,menuList:a.payload,getMenuFail:null});case"GET_MENU_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,menuList:[],getMenuFail:a.payload.message});default:return e}},{menuList:[],isLoading:!1,getMenuFail:null}],users:[function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"GET_CUR_USER_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{user:a.payload,getUserFail:null});case"GET_CUR_USER_FAIL":return Object(E.a)(Object(E.a)({},e),{},{user:{},getUserFail:a.payload.message});case"GET_USERS_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{users:a.payload,getUserFail:null});case"GET_USERS_FAIL":return Object(E.a)(Object(E.a)({},e),{},{users:[],getUserFail:a.payload.message});default:return e}},{user:{},users:[],userFail:null}],cart:[function(e,a){switch(a.type){case"ADD_CART_ITEM":return Object(E.a)(Object(E.a)({},e),{},{cartList:a.payload,isAnimateCart:!0,isCartAdded:!0});case"REMOVE_CART_ADDED":return Object(E.a)(Object(E.a)({},e),{},{isCartAdded:!0,isAnimateCart:!1});case"DELETE_CART_ITEM":var t=e.cartList,n=a.payload;return Object(E.a)(Object(E.a)({},e),{},{cartList:t.filter((function(e){return e.id!==n.id})),isAnimateCart:!0,isCartAdded:!1});case"DELETE_CART":return Object(E.a)(Object(E.a)({},e),{},{cartList:[],isAnimateCart:!1,isCartAdded:!1});default:return e}},{cartList:[],isAnimateCart:!1,isCartAdded:!1}],submitOrder:[function(e,a){switch(a.type){case"SUBMIT_ORDERS_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{createOrderSuccess:!1,isLoading:!0,submitOrderFail:null});case"SUBMIT_ORDERS_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{createOrderSuccess:!0,isLoading:!1,submitOrderFail:null});case"SUBMIT_ORDERS_FAIL":return Object(E.a)(Object(E.a)({},e),{},{createOrderSuccess:!1,isLoading:!1,submitOrderFail:a.payload});default:return e}},{createOrderSuccess:!1,isLoading:!1,submitOrderFail:null}],orders:[function(e,a){switch(a.type){case"GET_ORDERS_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{isOrdersLoading:!0,orderList:[],getOrdersFail:null,deleteOrderRequest:!1,deleteOrderFail:null});case"GET_ORDERS_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{isOrdersLoading:!1,orderList:a.payload,getOrdersFail:null,deleteOrderRequest:!1,deleteOrderFail:null});case"GET_ORDERS_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isOrdersLoading:!1,orderList:[],getOrdersFail:a.payload.message,deleteOrderRequest:!1,deleteOrderFail:null});case"DELETE_ORDER_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{isOrdersLoading:!1,getOrdersFail:null,deleteOrderRequest:!0,deleteOrderFail:null});case"DELETE_ORDER_SUCCESS":var t=a.payload,n=e.orderList;return Object(E.a)(Object(E.a)({},e),{},{isOrdersLoading:!1,orderList:n.filter((function(e){return e._id!==t._id})),getOrdersFail:null,deleteOrderRequest:!1,deleteOrderFail:null});case"DELETE_ORDER_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isOrdersLoading:!1,orderList:[],getOrdersFail:null,deleteOrderRequest:!1,deleteOrderFail:a.payload.message});default:return e}},{orderList:[],isOrdersLoading:!1,getOrdersFail:null,deleteOrderRequest:!1,deleteOrderFail:null}],orderTimeout:[function(e,a){switch(a.type){case"SET_ORDER_TIMEOUT":return Object(E.a)(Object(E.a)({},e),{},{isOrderTimeout:!0});case"RESET_ORDER_TIMEOUT":return Object(E.a)(Object(E.a)({},e),{},{isOrderTimeout:!1});default:return e}},{isOrderTimeout:!1}],allOrders:[function(e,a){switch(a.type){case"GET_ALL_ORDERS_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!0,allOrderList:[],getOrdersFail:null,isCheckingPaid:!1,checkPaidFail:null});case"GET_ALL_ORDERS_SUCCESS":var t=a.payload,n=t.data,r=t.type,c=g(n,r,"username");return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,allOrderList:c,getOrdersFail:null,isCheckingPaid:!1,checkPaidFail:null});case"GET_ALL_ORDERS_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,allOrderList:[],getOrdersFail:a.payload.message,isCheckingPaid:!1,checkPaidFail:null});case"GET_ORDERS_HISTORY_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!0,allOrderList:[],getOrdersFail:null,isCheckingPaid:!1,checkPaidFail:null});case"GET_ORDERS_HISTORY_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,allOrderList:a.payload,getOrdersFail:null,isCheckingPaid:!1,checkPaidFail:null});case"GET_ORDERS_HISTORY_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,allOrderList:[],getOrdersFail:a.payload.message,isCheckingPaid:!1,checkPaidFail:null});case"CHECK_PROVIDER_PAID_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,getOrdersFail:null,isCheckingPaid:!0,checkPaidFail:null});case"CHECK_PROVIDER_PAID_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,getOrdersFail:null,isCheckingPaid:!1,allOrderList:a.payload,checkPaidFail:null});case"CHECK_PROVIDER_PAID_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,getOrdersFail:null,isCheckingPaid:!1,allOrderList:[],checkPaidFail:a.payload});case"CHECK_PAID_ALL_WEEK_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{isCheckingPaid:!0,checkPaidFail:null,isLoading:!1,getOrdersFail:null});case"CHECK_PAID_ALL_WEEK_SUCCESS":var l=g(a.payload,"user","username");return Object(E.a)(Object(E.a)({},e),{},{isCheckingPaid:!1,allOrderList:l,checkPaidFail:null,isLoading:!1,getOrdersFail:null});case"CHECK_PAID_ALL_WEEK_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isCheckingPaid:!1,allOrderList:[],checkPaidFail:a.payload.message,isLoading:!1,getOrdersFail:null});case"CHECK_PAID_ORDER_ITEM_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{isCheckingPaid:!0});case"CHECK_PAID_ORDER_ITEM_SUCCESS":var i=a.payload,s=i.data,u=i.type,o=g(s,u,"username");return Object(E.a)(Object(E.a)({},e),{},{isCheckingPaid:!1,allOrderList:o});case"CHECK_PAID_ORDER_ITEM_FAIL":return Object(E.a)(Object(E.a)({},e),{},{isCheckingPaid:!1,allOrderList:[],checkPaidFail:a.payload});default:return e}},{allOrderList:[],isLoading:!1,getOrdersFail:null,isCheckingPaid:!1,checkPaidFail:null}]}),h=Object(u.a)(b,2),_=h[0],v=h[1],y=r.a.createContext({}),C=function(e){var a=e.children,t=Object(n.useReducer)(_,v),c=Object(u.a)(t,2),l=c[0],i=c[1];return r.a.createElement(y.Provider,{value:{data:l,setData:i}},a)},S=function(){var e=Object(n.useContext)(y),a=e.data,t=e.setData;return[a,Object(n.useCallback)((function(e){var a=e.type,n=e.payload;t({payload:n,type:a})}),[t])]},j=function(e){return{type:"GET_MENU_SUCCESS",payload:e}},k=t(67),R=t.n(k);console.log("production");var L="https://luch-ordering.herokuapp.com",T="https://luch-ordering.herokuapp.com/google",D=function(){var e=localStorage.getItem("token");return R.a.get("".concat(L,"/users/current"),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return e.data}))},A=t(61),N=t.n(A),I=(t(555),t(310)),F=t(4),w=t.n(F),P=t(287),U=t.n(P),x=function(e){return{type:"ADD_CART_ITEM",payload:e}},M=function(e){var a=e.item,t=Object(n.useState)(1),c=Object(u.a)(t,2),l=c[0],i=c[1],s=S(),o=Object(u.a)(s,2),d=o[0],m=d.users,E=d.cart,p=d.orderTimeout,O=o[1],g=m.user,f=E.cartList;return r.a.createElement("div",{className:w()("menu-item",{"is-disabled":f.some((function(e){return e.id===a._id}))||p.isOrderTimeout})},r.a.createElement("div",{className:"image"},r.a.createElement("img",{className:"img-dish",src:a.img,alt:a.name}),r.a.createElement("div",{onClick:function(){var e={id:a._id,dish_name:a.name,quantity:l};if(g.username)if(0===f.length)O(x(f)),setTimeout((function(){return O({type:"REMOVE_CART_ADDED"})}),500),f.push(e);else{var t=[].concat(Object(I.a)(f),[e]);O(x(t)),setTimeout((function(){return O({type:"REMOVE_CART_ADDED"})}),500)}else window.open(T,"_self")}},r.a.createElement("img",{className:"icon-add",src:U.a,alt:""}))),r.a.createElement("div",{className:"desc"},r.a.createElement("div",{className:"info"},r.a.createElement("span",{className:"name"},a.name),r.a.createElement("span",{className:"price"},a.price)),r.a.createElement("div",{className:"quantity"},r.a.createElement("input",{type:"number",value:l,onChange:function(e){var a=e.target.value,t=parseInt(a);i(t<=0?1:t>5?5:t)}}))))},G=function(){var e=S(),a=Object(u.a)(e,2),t=a[0].menu,c=a[1],l=function(){var e=S(),a=Object(u.a)(e,2)[1];return Object(n.useCallback)(Object(m.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"GET_MENU_LOADING"}),e.prev=1,e.next=4,R.a.get("".concat(L,"/menuList")).then((function(e){return e.data}));case 4:t=e.sent,a(j(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a({type:"GET_MENU_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),[a])}(),i=t.isLoading,s=t.menuList;return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:a=e.sent,localStorage.setItem("roles",a.roles),c({type:"GET_CUR_USER_SUCCESS",payload:a});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),l()}),[c,l]),r.a.createElement("div",{className:"menu-wrapper"},i&&r.a.createElement("img",{className:"icon-loading",src:N.a,alt:"loading-spinner"}),s.map((function(e){return r.a.createElement(M,{key:e._id,item:e})})))},q=t(109),H=t(148),K=t.n(H),Q=function(e){var a=e.order,t=S(),n=Object(u.a)(t,2)[1];return r.a.createElement("div",{className:"cart-item"},r.a.createElement("div",{className:"name"},a.dish_name),r.a.createElement("div",{className:"desc"},r.a.createElement("div",{className:"qty"},a.quantity),r.a.createElement("span",{className:"remove",onClick:function(){n(function(e){return{type:"DELETE_CART_ITEM",payload:e}}(a))}},r.a.createElement("img",{src:K.a,alt:"remove-order"}))))},B=function(e){return{type:"SUBMIT_ORDERS_FAIL",payload:e}},W=function(e){return{type:"GET_ORDERS_SUCCESS",payload:e}},V=function(e){return{type:"DELETE_ORDER_SUCCESS",payload:e}},Y=function(e){return{type:"GET_ORDERS_HISTORY_SUCCESS",payload:e}},z=R.a.create({baseURL:L});z.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(localStorage.getItem("token")),e}));var J=z,X=function(e){return J.post("/orders/create",e).then((function(e){return e.data}))},$=function(e){return J.post("/orders/check-paid-provider",e).then((function(e){return e.data}))},Z=function(e){return J.post("/orders/paid-allweeks",e).then((function(e){return e.data}))},ee=function(e){return J.post("/orders/delete",e).then((function(e){return e.data}))},ae=function(e){return J.get("/orders/payment-by-week",{params:{week:e}}).then((function(e){return e.data}))},te=function(e){return J.get("/orders/payments",{params:{type:e}}).then((function(e){return e.data}))},ne=t(288),re=t.n(ne),ce=(t(556),function(){var e=S(),a=Object(u.a)(e,1)[0],t=a.cart,c=a.submitOrder,l=t.cartList,i=t.isAnimateCart,s=t.isCartAdded,o=c.isLoading,E=Object(n.useState)(!1),p=Object(u.a)(E,2),O=p[0],g=p[1],f=function(){var e=S(),a=Object(u.a)(e,2)[1];return Object(n.useCallback)(function(){var e=Object(m.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"SUBMIT_ORDERS_REQUEST"}),e.prev=1,e.next=4,X(t);case 4:e.sent,a({type:"SUBMIT_ORDERS_SUCCESS"}),a({type:"DELETE_CART"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),a(B(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}(),[a])}();Object(n.useEffect)((function(){s&&g(s)}),[s]);return r.a.createElement("div",{className:"cart-wrapper"},r.a.createElement("div",{className:w()("cart-icon",{shake:i}),onClick:function(){g(!O)}},r.a.createElement("img",{src:re.a,alt:"cart-icon"}),r.a.createElement("span",{className:"cart-qty"},l.length)),r.a.createElement("div",{className:w()("cart-content",{show:O&&l.length})},o&&r.a.createElement("img",{className:"cart-loading",src:N.a,alt:""}),l.map((function(e){return r.a.createElement(Q,{key:e.id,order:e})})),r.a.createElement("button",{className:"btn-order",onClick:function(){var e=l.map((function(e){return{dishId:e.id,quantity:e.quantity,date:(new Date).toDateString(),createdAt:q().startOf("day"),paid:!1,week:q().week()}}));f(e)}},"Order")))}),le=t(619),ie=t(289),se=t.n(ie),ue=(t(557),function(){var e=new Date,a=e.getFullYear(),t=e.getMonth(),c=e.getDate(),l=new Date(a,t,c,10,58,0,0).getTime(),i=new Date(a,t,c,8,30,0,0).getTime(),s=(new Date).getTime()>=i,o=Object(n.useState)({hours:0,minutes:0,seconds:0}),d=Object(u.a)(o,2),m=d[0],E=d[1],p=Object(n.useState)(l),O=Object(u.a)(p,1)[0],g=Object(n.useState)(!1),f=Object(u.a)(g,2),b=f[0],h=f[1],_=Object(n.useCallback)((function(){if(O){var e=(new Date).getTime(),a=O-e,t=Math.floor(a%36e5/6e4),n=Math.floor(a%6e4/1e3),r=[1,2,3,4,5,6,7,8,9],c=Math.floor(a%864e5/36e5);r.includes(c)&&(c="0".concat(c)),r.includes(t)&&(t="0".concat(t)),r.includes(n)&&(n="0".concat(n)),E({hours:c,minutes:t,seconds:n}),h(c<=0&&t<=0&&n<=0)}}),[O]);Object(n.useEffect)((function(){if(setInterval((function(){return _()}),1e3),b)return function(){return clearInterval(_)}}),[b,_]);var v=m.hours,y=m.minutes,C=m.seconds;return r.a.createElement("div",{className:"countdown"},v>=0&&y>=0&&C>0&&r.a.createElement("div",null,r.a.createElement("p",{className:"countdown-message"},"Th\u1eddi gian order c\u1ee7a b\u1ea1n c\xf2n l\u1ea1i"),r.a.createElement("span",null,v),r.a.createElement("span",null,y),r.a.createElement("span",null,C)),r.a.createElement(le.a,{className:"timeout-modal",visible:b||!s,onCancel:function(){},width:"60vw",height:"60vh",footer:null},r.a.createElement("img",{className:"timeout-icon",src:se.a,alt:"forbiden-order"}),b&&r.a.createElement("div",{className:"timeout-message"},"Th\u1eddi gian order c\u01a1m h\xf4m nay \u0111\xe3 h\u1ebft, b\u1ea1n vui l\xf2ng quay l\u1ea1i v\xe0o l\xfac"," ",r.a.createElement("span",{className:"note"},"8h00")," ng\xe0y mai nh\xe9!!!"),!s&&r.a.createElement("div",{className:"timeout-message"},"Th\u1eddi gian order ch\u01b0a t\u1edbi, b\u1ea1n vui l\xf2ng quay l\u1ea1i v\xe0o l\xfac"," ",r.a.createElement("span",{className:"note"},"8h00")," nh\xe9!!!")))}),oe=t(296),de=t.n(oe),me=t(297),Ee=t.n(me),pe=(t(589),t(123)),Oe=(t(590),function(){var e=S(),a=Object(u.a)(e,1)[0].submitOrder.createOrderSuccess,t=Object(n.useState)(a),c=Object(u.a)(t,2),l=c[0],i=c[1],o=Object(s.g)(),d="admin"===localStorage.getItem("roles");Object(n.useEffect)((function(){a&&i(a)}),[a]);var m=function(){i(!1)};return r.a.createElement("div",{className:"page"},r.a.createElement("h1",{className:"text-uppercase text-center"},"SP Team Lunch Ordering"),!d&&r.a.createElement(ue,null),r.a.createElement("a",{href:"/lunch-ordering-fe/#/orders",className:"icon-orders"},r.a.createElement("img",{src:Ee.a,alt:"checklist"})),r.a.createElement(ce,null),r.a.createElement(G,null),r.a.createElement(le.a,{className:"congrats-modal",visible:l,onCancel:m,width:"60vw",height:"60vh",footer:[r.a.createElement(pe.a,{size:"large",key:"back",onClick:m},"\u0110\xf3ng"),r.a.createElement(pe.a,{key:"submit",size:"large",type:"primary",onClick:function(){o.push("/orders")}},"Xem Order")]},r.a.createElement("img",{className:"modal-icon",src:de.a,alt:"forbiden-order"}),r.a.createElement("div",{className:"congrats-message"},"Thank you! B\u1ea1n \u0111\xe3 order th\xe0nh c\xf4ng!!",r.a.createElement("p",null,"Ch\xfac Ngon mi\u1ec7ng"))))}),ge=function(e){return{type:"CHECK_PAID_ORDER_ITEM_SUCCESS",payload:e}},fe=function(e){return{type:"CHECK_PROVIDER_PAID_SUCCESS",payload:e}},be=function(e){return{type:"CHECK_PROVIDER_PAID_FAIL",payload:e}},he=function(e){return{type:"CHECK_PAID_ALL_WEEK_SUCCESS",payload:e}},_e=function(e){return{type:"CHECK_PAID_ALL_WEEK_FAIL",payload:e}},ve=function(){var e=S(),a=Object(u.a)(e,2)[1];return{checkPaidOrderItem:Object(n.useCallback)(function(){var e=Object(m.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"CHECK_PAID_ORDER_ITEM_REQUEST"}),e.prev=1,e.next=4,r=t,J.post("/orders/check-paid",r).then((function(e){return e.data}));case 4:n=e.sent,a(ge({data:n,type:t.type})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a((e.t0,{type:"CHECK_PAID_ORDER_ITEM_FAIL"}));case 11:case"end":return e.stop()}var r}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),[a]),checkProviderPaidOrder:Object(n.useCallback)(function(){var e=Object(m.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"CHECK_PROVIDER_PAID_REQUEST"}),e.prev=1,e.next=4,$(t);case 4:n=e.sent,a(fe(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a(be(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),[a]),checkPaidOrderAllWeek:Object(n.useCallback)(function(){var e=Object(m.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"CHECK_PAID_ALL_WEEK_REQUEST"}),e.prev=1,e.next=4,Z(t);case 4:n=e.sent,a(he(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a(_e(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),[a])}},ye=function(e){var a=e.order,t=e.isAdmin,c=e.isAllOrders,l=e.type,i=(e.paymentId,e.week),s=Object(n.useState)(a.paid),o=Object(u.a)(s,2),E=o[0],O=o[1],g=ve().checkPaidOrderItem,f="date"===l,b=S(),h=Object(u.a)(b,1)[0].allOrders.isCheckingPaid,_=a.quantity,v=a.dish,y=v.name,C=v.price,j=a.user.username,k=a.date,R=S(),L=Object(u.a)(R,1)[0].orders.deleteOrderRequest,T=Object(n.useState)(!1),D=Object(u.a)(T,2),A=D[0],N=D[1],I=function(){var e=S(),a=Object(u.a)(e,2),t=(a[0].allOrders.allOrderList,a[1]);return Object(n.useCallback)(function(){var e=Object(m.a)(d.a.mark((function e(a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"DELETE_ORDER_REQUEST"}),e.prev=1,e.next=4,ee(a);case 4:n=e.sent,t(V(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"DELETE_ORDER_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),[t])}(),F=function(){return N(!1)};return Object(n.useEffect)((function(){O(a.paid)}),[a.paid]),r.a.createElement("div",{key:a._id,className:"order-item"},r.a.createElement("span",{className:"name"},"".concat(f?j:k)),r.a.createElement("span",{className:"quantity"},_),r.a.createElement("span",{className:"dish-name"},y),!c&&r.a.createElement("span",{className:"date"},function(e){if(e){var a=new Date(e),t=a.getDate(),n=a.getMonth(),r=p[n],c=a.getFullYear();return"".concat(t," ").concat(r," ").concat(c)}}(k)),r.a.createElement("span",{className:"price"},"".concat(parseInt(C.slice(0,2))*_,",000\u0111")),t&&r.a.createElement(r.a.Fragment,null,c&&r.a.createElement("div",{className:"paid"},r.a.createElement("span",{className:"order-checkbox"},r.a.createElement("input",{type:"checkbox",onChange:function(e){var t=e.target.checked,n={id:a._id,isPaid:t,type:l,week:i};g(n),O(t)},checked:E||a.paid,disabled:h}),r.a.createElement("span",{className:w()("check-mask",{"is-disabled":h})}))),!c&&r.a.createElement("span",{className:"delete",onClick:function(){return N(!0)}},r.a.createElement("img",{src:K.a,alt:"delete-order"}))),r.a.createElement(le.a,{className:"order-item__modal",visible:A,onCancel:F,footer:[r.a.createElement(pe.a,{size:"large",key:"back",onClick:F},"\u0110\xf3ng"),r.a.createElement(pe.a,{key:"submit",size:"large",type:"primary",loading:L,onClick:function(){I(a)}},"Xo\xe1")]},r.a.createElement("p",null,"B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n xo\xe1 ch\u1ee9???")))},Ce=(t(201),function(){var e=S(),a=Object(u.a)(e,2),t=a[0].orders,c=t.orderList,l=t.isOrdersLoading,i=a[1],s="admin"===localStorage.getItem("roles");Object(n.useEffect)((function(){(function(){var e=Object(m.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i({type:"GET_ORDERS_REQUEST"}),e.prev=1,e.next=4,J.get("/orders/list").then((function(e){return e.data}));case 4:a=e.sent,i(W(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),i({type:"GET_ORDERS_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}})()()}),[i]);var o=c.sort((function(e,a){return e.dish.name.localeCompare(a.name)})),E=c.map((function(e){return{quantity:e.quantity,dishName:e.dish.name,price:35}})),p=g(E,"dishName"),O=Object.keys(p).map((function(e){return{name:e,qty:p[e].reduce((function(e,a){return e+a.quantity}),0),price:p[e].reduce((function(e,a){return e+a.price*a.quantity}),0)}})),f=O.reduce((function(e,a){return e+a.qty}),0),b=O.reduce((function(e,a){return e+a.price}),0);return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"order-wrapper"},r.a.createElement("h1",{className:"order-title"},"Orders List"),l&&r.a.createElement("img",{className:"icon-loading",src:N.a,alt:"loading-spinner"}),0!==o.length&&r.a.createElement("div",{className:"order-total"},r.a.createElement("h3",{className:"title"},"Total List"),r.a.createElement("div",{className:"header"},r.a.createElement("span",null,"T\xean m\xf3n"),r.a.createElement("span",null,"S\u1ed1 L\u01b0\u1ee3ng"),r.a.createElement("span",null,"Gi\xe1")),O.map((function(e){return r.a.createElement("div",{key:e.name,className:"item"},r.a.createElement("span",null,e.name),r.a.createElement("span",null,e.qty),r.a.createElement("span",null,"".concat(e.price,".000\u0111")))})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"T\u1ed5ng c\u1ed9ng"),r.a.createElement("span",null,f),r.a.createElement("span",null,"".concat(b,".000\u0111")))),0!==o.length&&r.a.createElement("div",{className:"order-content"},r.a.createElement("div",{className:"order-item__header"},r.a.createElement("span",null,"Ng\u01b0\u1eddi Order"),r.a.createElement("span",null,"S\u1ed1 L\u01b0\u1ee3ng"),r.a.createElement("span",{className:"dish-name"},"T\xean M\xf3n"),r.a.createElement("span",null,"Ng\xe0y Order"),r.a.createElement("span",null,"Gi\xe1"),s&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"delete"}))),o.map((function(e){return r.a.createElement(ye,{key:e._id,order:e,isAdmin:s,isAllOrders:!1,type:"date"})})))))}),Se=t(91),je=t(618),ke=function(e){var a=e.handleChange,t=e.options,n=je.a.Option;return r.a.createElement(je.a,{defaultValue:t[0].value,style:{width:150},onChange:a},t.map((function(e){return r.a.createElement(n,{key:e.value,value:e.value},e.label)})))},Re=function(e){var a=e.item,t=e.isAdmin,n=e.isAllOrders,c=e.type,l=e.isCheckingPaid,i=e.week,s=ve().checkPaidOrderAllWeek,u=a.orders.every((function(e){return e.paid})),o="date"===c;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"order-item__date-title",key:a._id},r.a.createElement("span",null,a[c]),r.a.createElement("div",{className:"paid-provider"},!o&&r.a.createElement("span",{className:"order-checkbox"},r.a.createElement("input",{type:"checkbox",onChange:function(e){var t=e.target.checked;s({id:a.orders[0].user._id,isPaidAllWeek:t,userId:a.user,week:i})},checked:u,disabled:l}),r.a.createElement("span",{className:w()("check-mask",{"is-disabled":l})})))),r.a.createElement("div",{className:"order-item__header"},r.a.createElement("span",null,"".concat(o?"Ng\u01b0\u1eddi Order":"Ng\xe0y Order")),r.a.createElement("span",null,"S\u1ed1 L\u01b0\u1ee3ng"),r.a.createElement("span",null,"T\xean M\xf3n"),r.a.createElement("span",null,"Gi\xe1"),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"paid"},"Paid"),!n&&r.a.createElement("span",{className:"delete"}))),a.orders.map((function(e){return r.a.createElement(ye,{key:e._id,order:e,isAdmin:!0,isAllOrders:n,type:c,paymentId:a._id,week:i})})),r.a.createElement("div",{className:"order-item__total"},r.a.createElement("span",null,"T\u1ed5ng C\u1ed9ng"),r.a.createElement("span",null,a.totalQty),r.a.createElement("span",null),r.a.createElement("span",{className:"price"},"".concat(a.totalPrice,",000\u0111")),r.a.createElement("span",null)))},Le=t(602);q.extend(Le);var Te=q().week(),De=[{label:"Date",value:"date"},{label:"User",value:"user"}],Ae=[{label:"Current Week",value:Te},{label:"Last Week",value:Te-1},{label:"Last 2 Week",value:Te-2}],Ne=function(){var e=S(),a=Object(u.a)(e,2),t=a[0].allOrders,c=t.allOrderList,l=t.isLoading,i=t.isCheckingPaid,s=a[1],o=Object(n.useState)("date"),E=Object(u.a)(o,2),p=E[0],O=E[1],g=Object(n.useState)(Te),f=Object(u.a)(g,2),b=f[0],h=f[1],_="admin"===localStorage.getItem("roles"),v=Object.keys(c).map((function(e){var a,t=c[e],n=t.reduce((function(e,a){return e+35*a.quantity}),0),r=t.reduce((function(e,a){return e+a.quantity}),0);return a={},Object(Se.a)(a,p,e),Object(Se.a)(a,"orders",t),Object(Se.a)(a,"totalPrice",n),Object(Se.a)(a,"totalQty",r),a})),y=v.reduce((function(e,a){return e+a.totalPrice}),0),C=function(){var e=Object(m.a)(d.a.mark((function e(a,t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"GET_ALL_ORDERS_REQUEST"}),e.prev=1,e.next=4,ae(t);case 4:n=e.sent,s({type:"GET_ALL_ORDERS_SUCCESS",payload:{data:n,type:a}}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),s({type:"GET_ALL_ORDERS_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a,t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){C("date",Te)}),[s]);return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"order-wrapper"},r.a.createElement("div",{className:"order-totalweek"},r.a.createElement("span",null,"T\u1ed5ng ti\u1ec1n"),r.a.createElement("div",{className:"price"},"".concat(y,",000"),r.a.createElement("sup",null,"\u0111"))),r.a.createElement("div",{className:"order-filter"},r.a.createElement(ke,{handleChange:function(e){O(e),C(e,b)},options:De}),r.a.createElement(ke,{handleChange:function(e){h(e),C(p,e)},options:Ae})),r.a.createElement("h1",{className:"order-title"},"All Orders List"),l&&r.a.createElement("img",{className:"icon-loading",src:N.a,alt:"loading-spinner"}),0!==v.length&&v.map((function(e,a){return r.a.createElement(Re,{key:a,item:e,isAdmin:_,isAllOrders:!0,isCheckingPaid:i,type:p,week:b})}))))},Ie=function(){var e=S(),a=Object(u.a)(e,2),t=a[0].allOrders,c=t.allOrderList,l=t.isLoading,i=t.isCheckingPaid,s=a[1],o=Object(n.useState)("date"),p=Object(u.a)(o,2),O=p[0],g=p[1],f="admin"===localStorage.getItem("roles"),b=c.map((function(e){var a=e.orders.reduce((function(e,a){return e+35*a.quantity}),0),t=e.orders.reduce((function(e,a){return e+a.quantity}),0);return Object(E.a)(Object(E.a)({},e),{},{totalPrice:a,totalQty:t})})).sort((function(e,a){return new Date(a.createdAt)-new Date(e.createdAt)})),h=function(){var e=Object(m.a)(d.a.mark((function e(a){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"GET_ORDERS_HISTORY_REQUEST"}),e.prev=1,e.next=4,te(a);case 4:t=e.sent,n=t.filter((function(e){return e.orders.length>0})),s(Y(n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),s({type:"GET_ORDERS_HISTORY_FAIL",payload:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){h("date")}),[s]);return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"order-wrapper"},r.a.createElement(ke,{handleChangeType:function(e){g(e),h(e)},className:"order-filter"}),r.a.createElement("h1",{className:"order-title"},"Orders History"),l&&r.a.createElement("img",{className:"icon-loading",src:N.a,alt:"loading-spinner"}),0!==b.length&&b.map((function(e){return r.a.createElement(Re,{key:e._id,item:e,isAdmin:f,isAllOrders:!0,isCheckingPaid:i,type:O})}))))},Fe=t(306),we=t.n(Fe),Pe=function(e){var a=Object(s.h)().search,t=Object(s.g)(),n=we.a.parse(a).token||localStorage.getItem("token");return n?(localStorage.setItem("token",n),t.push("/")):window.open(T,"_self"),r.a.createElement("div",null)},Ue=t(312),xe=function(e){var a=e.component,t=Object(Ue.a)(e,["component"]),n="admin"===localStorage.getItem("roles");return r.a.createElement(s.b,Object.assign({},t,{render:function(e){var t=e.location;return n?r.a.createElement(a,null):r.a.createElement(s.a,{to:{pathname:"/",state:{from:t}}})}}))},Me=t(307),Ge=t.n(Me),qe=(t(615),t(616),t(285),function(){return r.a.createElement("div",{className:"main-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/lunch-ordering-fe",className:"main-logo"},r.a.createElement("img",{src:Ge.a,alt:"logo"})),r.a.createElement(i.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/"},r.a.createElement(Oe,null)),r.a.createElement(s.b,{path:"/orders"},r.a.createElement(Ce,null)),r.a.createElement(s.b,{path:"/login"},r.a.createElement(Pe,null)),r.a.createElement(xe,{path:"/all-orders",component:Ne}),r.a.createElement(xe,{path:"/orders-history",component:Ie})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(C,null,r.a.createElement(qe,null)),document.getElementById("root"))}},[[313,1,2]]]);
//# sourceMappingURL=main.5706086c.chunk.js.map