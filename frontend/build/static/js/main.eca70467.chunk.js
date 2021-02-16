(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{31:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var a=c(6),r=c(1),s=c(0),n=c(11),o=c.n(n),l=c(48),i=c(8),d=c(14),u=c(20),j=c(50),m=c(51),b="ALL_PRODUCTS_REQUEST",p="ALL_PRODUCTS_SUCCESS",h=" ALL_PRODUCTS_FAIL",O="PRODUCT_DETAILS_REQUEST",x="PRODUCT_DETAILS_SUCCESS",f="PRODUCT_DETAILS_FAIL",g="CLEAR_ERRORS",v="LOGIN_REQUEST",y="LOGIN_SUCCESS",N="LOGIN_FAIL",S="REGISTER_USER_REQUEST",w="REGISTER_USER_SUCCESS",_="REGISTER_USER_FAIL",C="LOAD_USER_REQUEST",E="LOAD_USER_SUCCESS",k="LOAD_USER_FAIL",I="LOGOUT_SUCCESS",L="LOGOUT_FAIL",R="CLEAR_ERRORS",A=c(60),F="ADD_TO_CART",T="REMOVE_ITEM_CART",P=Object(u.combineReducers)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return{loading:!0,products:[]};case p:return{loading:!1,products:t.payload.products,productsCount:t.payload.productsCount,resPerPage:t.payload.resPerPage,filteredProductsCount:t.payload.filteredProductsCount};case h:return{loading:!1,error:t.payload};case g:return Object(a.a)(Object(a.a)({},e),{},{error:null});default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(a.a)(Object(a.a)({},e),{},{loading:!0});case x:return{loading:!1,product:t.payload};case f:return Object(a.a)(Object(a.a)({},e),{},{error:t.payload});case g:return Object(a.a)(Object(a.a)({},e),{},{error:null});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:case S:case C:return{loading:!0,isAuthenticated:!1};case y:case w:case E:return Object(a.a)(Object(a.a)({},e),{},{loading:!1,isAuthenticated:!0,user:t.payload});case I:return{loading:!1,isAuthenticated:!1,user:null};case k:return{loading:!1,isAuthenticated:!1,user:null,error:t.payload};case L:return Object(a.a)(Object(a.a)({},e),{},{error:t.payload});case N:case _:return Object(a.a)(Object(a.a)({},e),{},{loading:!1,isAuthenticated:!1,user:null,error:t.payload});case R:return Object(a.a)(Object(a.a)({},e),{},{error:null});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:var c=t.payload,r=e.cartItems.find((function(e){return e.product===c.product}));return r?Object(a.a)(Object(a.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===r.product?c:e}))}):Object(a.a)(Object(a.a)({},e),{},{cartItems:[].concat(Object(A.a)(e.cartItems),[c])});case T:return Object(a.a)(Object(a.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});default:return e}}}),D={cart:{cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]},users:{cartItems:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):{}}},U=[j.a],M=Object(m.composeWithDevTools)({}),q=Object(u.createStore)(P,D,M(u.applyMiddleware.apply(void 0,U))),G=(c(31),c(7)),W=c(10),$=c(9),J=c.n($),B=c(16),Q=c(19),V=c.n(Q),Y=function(){return function(){var e=Object(B.a)(J.a.mark((function e(t){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:R});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},z=c(13),H=function(e){var t=e.history,c=Object(s.useState)(""),a=Object(z.a)(c,2),n=a[0],o=a[1];return Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),n.trim()?t.push("/search/".concat(n)):t.push("/")},children:Object(r.jsxs)("div",{className:"input-group",children:[Object(r.jsx)("input",{className:"form-control",type:"text",id:"search-field",placeholder:"Search for style, size, season",autocomplete:"off",onChange:function(e){return o(e.target.value)}}),Object(r.jsx)("div",{className:"input-group-append",children:Object(r.jsx)("button",{id:"search_btn",className:"btn",children:Object(r.jsx)("i",{className:"fa fa-search","aria-hidden":"true"})})})]})})},K=function(){var e=Object(d.d)(),t=Object(i.b)(),c=Object(i.c)((function(e){return e.users})),a=c.user,s=c.loading,n=Object(i.c)((function(e){return e.cart})).cartItems;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("nav",{className:"navbar row",children:[Object(r.jsx)("div",{className:"col-12 col-md-3",children:Object(r.jsx)("div",{className:"navbar-brand",children:Object(r.jsx)(G.b,{to:"/",children:Object(r.jsx)("img",{className:"rounded-circle-logo",src:"./images/Logo_wardrobe.jpg",alt:"Logo"})})})}),Object(r.jsx)("div",{className:"col-12 col-md-6 mt-2 mt-md-0",children:Object(r.jsx)(W.a,{render:function(e){var t=e.history;return Object(r.jsx)(H,{history:t})}})}),Object(r.jsxs)("div",{className:"col-12 col-md-3 mt-4 mt-md-0 text-center",children:[Object(r.jsxs)(G.b,{to:"/cart",style:{textDecoration:"none"},children:[Object(r.jsx)("span",{className:"ml-3",id:"cart",children:"Cart"}),Object(r.jsx)("span",{className:"ml-1",id:"cart_count",children:n.length})]}),a?Object(r.jsxs)("div",{className:"ml-4 dropdown d-inline",children:[Object(r.jsxs)(G.b,{to:"#!",className:"btn dropdown-toggle text-white mr-4",type:"button",id:"dropDownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[Object(r.jsx)("figure",{className:"avatar avatar-nav",children:Object(r.jsx)("img",{src:"/images/avatar1.jpg",alt:"avatar",className:"rounded-circle"})}),Object(r.jsx)("span",{className:"user-name-header",children:a&&a.name})]}),Object(r.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropDownMenuButton",children:[a&&"admin"===a.role&&Object(r.jsx)(G.b,{className:"dropdown-item",to:"/dashboard",children:"Dashboard"}),Object(r.jsx)(G.b,{className:"dropdown-item",to:"/orders/me",children:"Orders"}),Object(r.jsx)(G.b,{className:"dropdown-item",to:"/me",children:"Profile"}),Object(r.jsx)(G.b,{className:"dropdown-item text-danger",to:"/",children:" "}),Object(r.jsx)(G.b,{className:"dropdown-item text-danger",to:"/",onClick:function(){t(function(){var e=Object(B.a)(J.a.mark((function e(t){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.a.get("http://localhost:4000/api/v1/logout");case 3:t({type:I}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t({type:L,payload:e.t0.response.data.message});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()),e.success("Logged out successfully")},children:"Logout"})]})]}):!s&&Object(r.jsx)(G.b,{to:"/login",className:"btn ml-4",id:"login_btn",children:"Login"})]})]})})},X=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("footer",{className:"py-1",children:Object(r.jsxs)("p",{className:"text-center mt-1",children:["Webshop by Sabina van der Schaaf de Mar\xe9, Technigo bootcamp 2021.",Object(r.jsx)("p",{children:"All Rights Reserved"})]})})})},Z=c(52),ee=c.n(Z),te=c(53),ce=function(e){var t=e.title;return Object(r.jsx)("div",{children:Object(r.jsx)(te.a,{children:Object(r.jsxs)("title",{children:[" ","".concat(t," - Best Capsule Wardrobes")]})})})},ae=function(e){var t=e.product,c=e.col;return Object(r.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-".concat(c," my-3"),children:Object(r.jsxs)("div",{className:"card p-3 rounded",children:[Object(r.jsx)("img",{className:"card-img-top mx-auto",src:t.images[0].url,alt:t.name}),Object(r.jsx)("div",{className:"card-body d-flex flex-column",children:Object(r.jsx)("h5",{className:"card-title",children:Object(r.jsx)(G.b,{to:"/product/".concat(t._id),children:t.name})})}),Object(r.jsxs)("p",{className:"card-text",children:["$",t.price]}),Object(r.jsx)(G.b,{to:"/product/".concat(t._id),id:"view_btn",className:"btn btn-block",children:"View Details"})]})})},re=function(){return Object(r.jsx)("div",{className:"loader",children:" "})},se=c(37),ne=(c(93),(0,se.a.createSliderWithTooltip)(se.a.Range)),oe=function(e){var t=e.match,c=Object(s.useState)(1),a=Object(z.a)(c,2),n=a[0],o=a[1],l=Object(s.useState)([1,1e3]),u=Object(z.a)(l,2),j=u[0],m=u[1],O=Object(s.useState)(""),x=Object(z.a)(O,2),f=x[0],g=x[1],v=Object(d.d)(),y=Object(i.b)(),N=Object(i.c)((function(e){return e.products})),S=N.loading,w=N.products,_=N.error,C=N.productsCount,E=N.resPerPage,k=N.filteredProductsCount,I=t.params.keyword;Object(s.useEffect)((function(){if(_)return v.error(_);y(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c=arguments.length>3?arguments[3]:void 0;return function(){var a=Object(B.a)(J.a.mark((function a(r){var s,n,o;return J.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:b}),s="http://localhost:4000/api/v1/products?",e&&(s+="keyword=".concat(e,"&")),t&&(s+="page=".concat(t,"&")),c&&(s+="category=".concat(c,"&")),a.next=8,V.a.get(s);case 8:n=a.sent,o=n.data,r({type:p,payload:o}),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(0),r({type:h,payload:a.t0.response.data.message});case 16:case"end":return a.stop()}}),a,null,[[0,13]])})));return function(e){return a.apply(this,arguments)}}()}(I,n,j,f))}),[y,v,_,I,n,j,f]);var L=C;return I&&(L=k),Object(r.jsx)(r.Fragment,{children:S?Object(r.jsx)(re,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ce,{title:"Complete Capsule Wardrobe Online"}),Object(r.jsx)("h1",{id:"products_heading",children:"Latest Capsule Wardrobes"}),Object(r.jsx)("section",{id:"products",className:"container mt-5",children:Object(r.jsx)("div",{className:"row",children:I?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"col-6 col-md-3 mt-5 mb-5",children:Object(r.jsxs)("div",{className:"px-5",children:[Object(r.jsx)(ne,{marks:{1:"$1",1e3:"$1000"},min:1,max:1e3,defaultValue:[1,1e3],tipFormatter:function(e){return"$".concat(e)},tipProps:{placement:"top",visible:!0},value:j,onChange:function(e){return m(e)}}),Object(r.jsx)("hr",{className:"my-5"}),Object(r.jsxs)("div",{className:"mt-5",children:[Object(r.jsx)("h4",{className:"mb-3",children:"Categories"}),Object(r.jsx)("ul",{className:"pl-0",children:["Casual","Festive","Colorfull","Summer","Winter","Monochrome","Sporty","M","S","L"].map((function(e){return Object(r.jsx)("li",{style:{cursor:"pointer",listStyleType:"none"},onClick:function(){return g(e)},children:e},e)}))})]}),Object(r.jsx)("hr",{className:"my-5"})]})}),Object(r.jsx)("div",{className:"col-6 col-md-9",children:Object(r.jsx)("div",{className:"row",children:w.map((function(e){return Object(r.jsx)(ae,{product:e,col:4},e._id)}))})})]}):w.map((function(e){return Object(r.jsx)(ae,{product:e,col:3},e._id)}))})}),E<=L&&Object(r.jsx)("div",{className:"d-flex justify-content-center mt-5",children:Object(r.jsx)(ee.a,{activePage:n,itemsCountPerPage:E,totalItemsCount:C,onChange:function(e){o(e)},nextPageText:"Next",prevPageText:"Prev",itemClass:"page-item",linkClass:"page/link"})})]})})},le=c(98),ie=function(e,t){return function(){var c=Object(B.a)(J.a.mark((function c(a,r){var s,n;return J.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,V.a.get("http://localhost:4000/api/v1/product/".concat(e));case 2:s=c.sent,n=s.data,a({type:F,payload:{product:n.product._id,name:n.product.price,image:n.product.images[0].url,stock:n.product.stock,quantity:t}}),localStorage.setItem("cartItems",JSON.stringify(r().cart.cartItems));case 6:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()},de=function(e){var t=e.match,c=Object(s.useState)(1),a=Object(z.a)(c,2),n=a[0],o=a[1],l=Object(i.b)(),u=Object(d.d)(),j=Object(i.c)((function(e){return e.productDetails})),m=j.loading,b=j.error,p=j.product;Object(s.useEffect)((function(){var e;l((e=t.params.id,function(){var t=Object(B.a)(J.a.mark((function t(c){var a,r;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:O}),t.next=4,V.a.get("http://localhost:4000/api/v1/product/".concat(e));case 4:a=t.sent,r=a.data,c({type:x,payload:r.product}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c({type:f,payload:t.t0.response.data.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}())),b&&(u.error(b),l(function(){var e=Object(B.a)(J.a.mark((function e(t){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:g});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[l,u,b,t.params.id]);return Object(r.jsx)(r.Fragment,{children:m?Object(r.jsx)(re,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ce,{title:p.name}),Object(r.jsxs)("div",{className:"row d-flex justify-content-around",children:[Object(r.jsx)("div",{className:"col-12 col-lg-5 img-fluid",id:"product_image",children:Object(r.jsx)(le.a,{pause:"hover",children:p.images&&p.images.map((function(e){return Object(r.jsx)(le.a.Item,{children:Object(r.jsx)("img",{className:"d-block w-100",src:e.url,alt:p.title})},e.public_id)}))})}),Object(r.jsxs)("div",{className:"col-12 col-lg-5 mt-5",children:[Object(r.jsx)("h3",{children:p.name}),Object(r.jsxs)("p",{id:"product_id",children:["Product # ",p._id]}),Object(r.jsxs)("p",{id:"product_price",children:["$ ",p.price]}),Object(r.jsxs)("div",{className:"stockCounter d-inline",children:[Object(r.jsx)("span",{className:"btn btn-danger minus",onClick:function(){var e=document.querySelector(".count");if(!(e.valueAsNumber<=1)){var t=e.valueAsNumber-1;o(t)}},children:"-"}),Object(r.jsx)("input",{type:"number",className:"form-control count d-inline",value:n,readOnly:!0}),Object(r.jsx)("span",{className:"btn btn-primary plus",onClick:function(){var e=document.querySelector(".count");if(!(e.valueAsNumber>=p.stock)){var t=e.valueAsNumber+1;o(t)}},children:"+"})]}),Object(r.jsx)("button",{type:"button",id:"cart_btn",className:"btn btn-primary d-inline ml-4",disabled:0===p.stock,onClick:function(){l(ie(t.params.id,n)),u.success("Item Added to Cart")},children:"Add to Cart"}),Object(r.jsx)("hr",{}),Object(r.jsxs)("p",{children:["Status:"," ",Object(r.jsx)("span",{id:"stock_status",className:p.stock>0?"greenColor":"redColor",children:p.stock>0?"In Stock":"Out of Stock"})]}),Object(r.jsx)("hr",{}),Object(r.jsx)("h4",{className:"mt-2",children:"Description:"}),Object(r.jsx)("p",{children:p.description}),Object(r.jsx)("hr",{})]})]})]})})},ue=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.cart})).cartItems,c=function(t){e(function(e){return function(){var t=Object(B.a)(J.a.mark((function t(c,a){return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({type:T,payload:e}),localStorage.setItem("cartItems",JSON.stringify(a().cart.cartItems));case 2:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}()}(t))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ce,{title:"Your Cart"}),0===t.length?Object(r.jsx)("h2",{className:"mt-5",children:"Your Cart is Empty"}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h2",{className:"mt-5",children:["Your Cart: ",Object(r.jsxs)("b",{children:[t.length," items"]})]}),Object(r.jsxs)("div",{className:"row d-flex justify-content-between",children:[Object(r.jsx)("div",{className:"col-12 col-lg-8",children:t.map((function(t){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"cart-item",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-4 col-lg-3",children:Object(r.jsx)("img",{src:t.image,alt:"#",height:"90",width:"115"})}),Object(r.jsx)("div",{className:"col-5 col-lg-3",children:Object(r.jsx)(G.b,{to:"/products/".concat(t.product)})}),Object(r.jsx)("div",{className:"col-4 col-lg-2 mt-4 mt-lg-0",children:Object(r.jsxs)("p",{id:"card_item_price",children:[t.name," $"]})}),Object(r.jsx)("div",{className:"col-4 col-lg-3 mt-4 mt-lg-0",children:Object(r.jsxs)("div",{className:"stockCounter d-inline",children:[Object(r.jsx)("span",{className:"btn btn-danger minus",onClick:function(){return function(t,c){var a=c-1;a<=0||e(ie(t,a))}(t.product,t.quantity)},children:"-"}),Object(r.jsx)("input",{type:"number",className:"form-control count d-inline",value:t.quantity,readOnly:!0}),Object(r.jsx)("span",{className:"btn btn-primary plus",onClick:function(){return function(t,c,a){var r=c+1;r>a||e(ie(t,r))}(t.product,t.quantity,t.stock)},children:"+"})]})}),Object(r.jsx)("div",{className:"col-4 col-lg-1 mt-4 mt-lg-0",children:Object(r.jsx)("i",{id:"delete_cart_item",className:"fa fa-trash btn btn-danger",onClick:function(){return c(t.product)}})})]})},t.product),Object(r.jsx)("hr",{})]})}))}),Object(r.jsx)("div",{className:"col-12 col-lg-3 my-4",children:Object(r.jsxs)("div",{id:"order_summary",children:[Object(r.jsx)("h4",{children:"Order Summary"}),Object(r.jsx)("hr",{}),Object(r.jsxs)("p",{children:["Subtotal:"," ",Object(r.jsxs)("span",{className:"order-summary-values",children:[t.reduce((function(e,t){return e+Number(t.quantity)}),0)," ","(Item)"]})]}),Object(r.jsxs)("p",{children:["Est. total:"," ",Object(r.jsxs)("span",{className:"order-summary-values",children:["$",t.reduce((function(e,t){return e+t.quantity*t.name}),0).toFixed(2)]})]}),Object(r.jsx)("hr",{}),Object(r.jsx)("button",{id:"checkout_btn",className:"btn btn-primary btn-block",children:"Check out"})]})})]})]})]})},je=function(e){var t=e.history,c=Object(s.useState)(""),a=Object(z.a)(c,2),n=a[0],o=a[1],l=Object(s.useState)(""),u=Object(z.a)(l,2),j=u[0],m=u[1],b=Object(d.d)(),p=Object(i.b)(),h=Object(i.c)((function(e){return e.users})),O=h.isAuthenticated,x=h.error,f=h.loading;Object(s.useEffect)((function(){O&&t.push("/"),x&&(b.error(x),p(Y()))}),[p,b,O,x,t]);return Object(r.jsx)(r.Fragment,{children:f?Object(r.jsx)(re,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ce,{title:"Login"}),Object(r.jsx)("div",{className:"row wrapper",children:Object(r.jsx)("div",{className:"col-10 col-lg-5",children:Object(r.jsxs)("form",{className:"shadow-lg",onSubmit:function(e){e.preventDefault(),p(function(e,t){return function(){var c=Object(B.a)(J.a.mark((function c(a){var r,s,n;return J.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,a({type:v}),r={headers:{"content-Type":"application/json"}},c.next=5,V.a.post("http://localhost:4000/api/v1/login",{email:e,password:t},r);case 5:s=c.sent,n=s.data,a({type:y,payload:n.user}),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(0),a({type:N,payload:c.t0.response.data.message});case 13:case"end":return c.stop()}}),c,null,[[0,10]])})));return function(e){return c.apply(this,arguments)}}()}(n,j))},children:[Object(r.jsx)("h1",{className:"mb-3",children:"Login"}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"email_field",children:"Email"}),Object(r.jsx)("input",{type:"email",id:"email_field",required:!0,minLength:"5",maxLength:"20",className:"form-control",placeholder:"Email@something.com",value:n,autocomplete:"off",onChange:function(e){return o(e.target.value)}})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"password_field",children:"Password"}),Object(r.jsx)("input",{type:"password",id:"password_field",className:"form-control",placeholder:"Min length 5 characters",required:!0,minLength:"5",maxLength:"20",value:j,autocomplete:"off",onChange:function(e){return m(e.target.value)}})]}),Object(r.jsx)(G.b,{to:"/password/forgot",className:"float-right mb-4",children:"Forgot Password?"}),Object(r.jsx)("button",{id:"login_button",type:"submit",className:"btn btn-block py-3",children:"LOGIN"}),Object(r.jsx)(G.b,{to:"/register",className:"float-right mt-3",children:"New User?"})]})})})]})})},me=c(28),be=function(e){var t=e.history,c=Object(s.useState)({name:"",email:"",password:""}),n=Object(z.a)(c,2),o=n[0],l=n[1],u=o.name,j=o.email,m=o.password,b=Object(s.useState)(""),p=Object(z.a)(b,2),h=p[0],O=p[1],x=Object(s.useState)("./images/avatar1.jpg"),f=Object(z.a)(x,2),g=f[0],v=f[1],y=Object(d.d)(),N=Object(i.b)(),C=Object(i.c)((function(e){return e.users})),E=C.isAuthenticated,k=C.error,I=C.loading;Object(s.useEffect)((function(){E&&t.push("/"),k&&(y.error(k),N(Y()))}),[N,y,E,k,t]);var L=function(e){if("avatar"===e.target.name){var t=new FileReader;t.onload=function(){2===t.readyState&&(v(t.result),O(t.result))},t.readAsDataURL(e.target.files[0])}else l(Object(a.a)(Object(a.a)({},o),{},Object(me.a)({},e.target.name,e.target.value)))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ce,{title:"Register User"}),Object(r.jsx)("div",{className:"row wrapper",children:Object(r.jsx)("div",{className:"col-10 col-lg-5",children:Object(r.jsxs)("form",{className:"shadow-lg",onSubmit:function(e){e.preventDefault();var t,c=new FormData;c.set("name",u),c.set("email",j),c.set("password",m),c.set("image",h),N((t=c,function(){var e=Object(B.a)(J.a.mark((function e(c){var a,r,s;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),c({type:S}),a={headers:{"Content-Type":"multipart/form-data"}},e.next=6,V.a.post("http://localhost:4000/api/v1/register",t,a);case 6:r=e.sent,s=r.data,c({type:w,payload:s.user}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),c({type:_,payload:e.t0.response.data.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()))},encType:"multipart/form-data",children:[Object(r.jsx)("h1",{className:"mb-3",children:"Register"}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"email_field",children:"Name"}),Object(r.jsx)("input",{type:"name",id:"name_field",className:"form-control",minLength:"1",maxLength:"30",required:!0,name:"name",value:u,placeholder:"Firstname  Lastname",autocomplete:"off",onChange:L})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"email_field",children:"Email"}),Object(r.jsx)("input",{type:"email",id:"email_field",className:"form-control",name:"email",value:j,required:!0,minLength:"5",autocomplete:"off",placeholder:"Email@something.com",onChange:L})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"password_field",children:"Password"}),Object(r.jsx)("input",{type:"password",id:"password_field",className:"form-control",name:"password",required:!0,minLength:"5",maxLength:"20",placeholder:"Min length 5 characters",value:m,autocomplete:"off",onChange:L})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"avatar_upload",children:"Avatar"}),Object(r.jsxs)("div",{className:"d-flex align-items-center",children:[Object(r.jsx)("div",{children:Object(r.jsx)("figure",{className:"avatar mr-3 item-rtl",children:Object(r.jsx)("img",{src:g,className:"rounded-circle",alt:"Avatar Preview"})})}),Object(r.jsxs)("div",{className:"custom-file",children:[Object(r.jsx)("input",{type:"file",name:"avatar",className:"custom-file-input",id:"customFile",accept:"images/*",autocomplete:"off",onChange:L}),Object(r.jsx)("label",{className:"custom-file-label",htmlFor:"customFile",children:"Choose Avatar"})]})]})]}),Object(r.jsx)("button",{id:"register_button",type:"submit",className:"btn btn-block py-3",disabled:!!I,children:"REGISTER"})]})})})]})},pe=function(){var e=Object(i.c)((function(e){return e.users})),t=e.user,c=e.loading;return Object(r.jsx)(r.Fragment,{children:c?Object(r.jsx)(re,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ce,{title:"My Profile page"}),Object(r.jsxs)("h3",{className:"mt-5 ml-5",children:["Welcome ",t.name,", you look great today!"]}),Object(r.jsxs)("div",{className:"row justify-content-around mt-5 user-info",children:[Object(r.jsxs)("div",{className:"col-12 col-md-3",children:[Object(r.jsx)("figure",{className:"avatar avatar-profile",children:Object(r.jsx)("img",{className:"rounded-circle img-fluid",src:"/images/avatar1.jpg",alt:t.name})}),Object(r.jsx)(G.b,{to:"/me/update",id:"edit_profile",className:"btn btn-primary btn-block my-5",children:"Edit Profile"})]}),Object(r.jsxs)("div",{className:"col-12 col-md-5",children:[Object(r.jsx)("h4",{children:"Full Name"}),Object(r.jsx)("p",{children:t.name}),Object(r.jsx)("h4",{children:"Email Address"}),Object(r.jsx)("p",{children:t.email}),Object(r.jsx)("h4",{children:"Shipping Address"}),Object(r.jsx)("p",{children:"My Street 123"}),Object(r.jsx)("p",{children:"In my town 123 45"}),Object(r.jsx)("p",{children:"The City"}),"admin"!==t.role&&Object(r.jsx)(G.b,{to:"/orders/me",className:"btn btn-danger btn-block mt-5",children:"My Orders"}),Object(r.jsx)(G.b,{to:"/password/update",className:"btn btn-primary btn-block mt-3",children:"Change Password"})]})]})]})})},he=function(){return Object(s.useEffect)((function(){q.dispatch(function(){var e=Object(B.a)(J.a.mark((function e(t){var c,a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:C}),e.next=4,V.a.get("http://localhost:4000/api/v1/me");case 4:c=e.sent,a=c.data,t({type:E,payload:a.user}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:k,payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(r.jsxs)(G.a,{children:[Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(K,{}),Object(r.jsxs)("div",{className:"container container-fluid",children:[Object(r.jsx)(W.a,{path:"/",component:oe,exact:!0}),Object(r.jsx)(W.a,{path:"/search/:keyword",component:oe}),Object(r.jsx)(W.a,{path:"/product/:id",component:de,exact:!0}),Object(r.jsx)(W.a,{path:"/login",component:je}),Object(r.jsx)(W.a,{path:"/register",component:be}),Object(r.jsx)(W.a,{path:"/me",component:pe,exact:!0}),Object(r.jsx)(W.a,{path:"/cart",component:ue,exact:!0})]})]}),Object(r.jsx)(X,{})]})},Oe={timeout:5e3,position:d.b.BOTTOM_CENTER,transition:d.c.SCALE};o.a.render(Object(r.jsx)(i.a,{store:q,children:Object(r.jsx)(d.a,Object(a.a)(Object(a.a)({template:l.a},Oe),{},{children:Object(r.jsx)(he,{})}))}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.eca70467.chunk.js.map