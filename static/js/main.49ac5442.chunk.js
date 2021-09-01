(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={li:"ContactList_li__1j9WI",ul:"ContactList_ul__2EeAm",button:"ContactList_button__2T5vq"}},21:function(t,e,n){t.exports={label:"Filter_label__3N8Xo",input:"Filter_input__1zlxa"}},36:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(12),o=n.n(r),u=(n(36),n(22)),s=n(65),i=n(9),b=n.n(i),l=n(6),j=n(7),f=n.n(j),d=n(16),O=n(11),p=n.n(O),h=n(2),m=Object(h.b)("contacts/fetchContactsRequest"),v=Object(h.b)("contacts/fetchContactsSuccess"),x=Object(h.b)("contacts/fetchContactsError"),C=Object(h.b)("contacts/addContactsRequest"),g=Object(h.b)("contacts/addContactsSuccess"),_=Object(h.b)("contacts/addContactsError"),y=Object(h.b)("contacts/deleteContactsRequest"),k=Object(h.b)("contacts/deleteContactsSuccess"),w=Object(h.b)("contacts/deleteContactsError"),F=Object(h.b)("contacts/changeFilter");p.a.defaults.baseURL="http://localhost:4040";var N=function(t){var e=t.name,n=t.number;return function(){var t=Object(d.a)(f.a.mark((function t(c){var a,r,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={name:e,number:n},c(C()),t.prev=2,t.next=5,p.a.post("/contacts",a);case 5:r=t.sent,o=r.data,c(g(o)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),c(_(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},S=function(t){return function(){var e=Object(d.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(y()),p.a.delete("/contacts/".concat(t)).then((function(){return n(k(t))})).catch((function(t){return n(w(t))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){return function(){var t=Object(d.a)(f.a.mark((function t(e){var n,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(m()),t.prev=1,t.next=4,p.a.get("/contacts");case 4:n=t.sent,c=n.data,e(v(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(x(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},A=n(13),E=function(t){return t.contacts.filter},q={getLoading:function(t){return t.contacts.loading},getFilter:E,getVisibleContacts:Object(A.a)([function(t){return t.contacts.items},E],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},z=n(1);var D=Object(l.b)(null,(function(t){return{onSubmit:function(e,n){return t(N(e,n))}}}))((function(t){var e=t.onSubmit,n=Object(c.useState)(""),a=Object(u.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),l=Object(u.a)(i,2),j=l[0],f=l[1],d=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":o(c);break;case"number":f(c);break;default:return}};return Object(z.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(r,j),o(""),f("")},children:[Object(z.jsxs)("div",{className:b.a.container,children:[Object(z.jsxs)("label",{className:b.a.label,htmlFor:Object(s.a)(),children:["Name"," ",Object(z.jsx)("input",{className:b.a.input,type:"text",name:"name",value:r,id:Object(s.a)(),onChange:d,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(z.jsxs)("label",{className:b.a.label,children:["Number",Object(z.jsx)("input",{id:Object(s.a)(),className:b.a.input,type:"tel",name:"number",value:j,onChange:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]})]}),Object(z.jsx)("button",{type:"submit",children:"Add contact"})]})})),B=n(21),J=n.n(B),R=Object(l.b)((function(t){return{value:q.getFilter(t)}}),(function(t){return{onChange:function(e){return t(F(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(z.jsxs)("label",{className:J.a.label,children:["Find contacts by name",Object(z.jsx)("input",{className:J.a.input,type:"text",value:e,onChange:n})]})})),T=n(17),Z=n.n(T),I=Object(l.b)((function(t){return{contacts:q.getVisibleContacts(t)}}),(function(t){return{onDeleteContacts:function(e){return t(S(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContacts;return Object(z.jsx)("ul",{className:Z.a.ul,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(z.jsxs)("li",{className:Z.a.li,name:c,children:[c,": ",a,Object(z.jsx)("button",{className:Z.a.button,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})}));var P,M,V,U=Object(l.b)(null,(function(t){return{fetchContacts:function(){return t(L())}}}))((function(){var t=Object(l.c)();return Object(c.useEffect)((function(){return t(L())}),[t]),Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)("div",{children:[Object(z.jsx)("h1",{children:"Phonebook"}),Object(z.jsx)(D,{}),Object(z.jsx)("h2",{children:"Contacts"}),Object(z.jsx)(R,{}),Object(z.jsx)(I,{})]})})})),W=n(15),X=n(4),$=n(3),G=Object(h.c)([],(P={},Object(X.a)(P,v,(function(t,e){return e.payload})),Object(X.a)(P,g,(function(t,e){var n=e.payload;return t.some((function(t){return t.name===n.name}))?(alert("".concat(n.name," is already in contacts.")),t):[].concat(Object(W.a)(t),[n])})),Object(X.a)(P,k,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),P)),H=Object(h.c)("",Object(X.a)({},F,(function(t,e){return e.payload}))),K=Object(h.c)(!1,(M={},Object(X.a)(M,m,(function(){return!0})),Object(X.a)(M,v,(function(){return!1})),Object(X.a)(M,x,(function(){return!1})),Object(X.a)(M,C,(function(){return!0})),Object(X.a)(M,g,(function(){return!1})),Object(X.a)(M,_,(function(){return!1})),Object(X.a)(M,y,(function(){return!0})),Object(X.a)(M,k,(function(){return!1})),Object(X.a)(M,w,(function(){return!1})),M)),Q=Object(h.c)(null,(V={},Object(X.a)(V,x,(function(t,e){return e.payload})),Object(X.a)(V,m,(function(){return null})),V)),Y=Object($.b)({items:G,filter:H,loading:K,error:Q}),tt=n(31),et=n.n(tt),nt=n(8),ct=[].concat(Object(W.a)(Object(h.d)({serializableCheck:{ignoredActions:[nt.a,nt.f,nt.b,nt.c,nt.d,nt.e]}})),[et.a]),at={store:Object(h.a)({reducer:{contacts:Y},middleware:ct,devTools:!1})},rt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))};n(62);o.a.render(Object(z.jsx)(a.a.StrictMode,{children:Object(z.jsx)(l.a,{store:at.store,children:Object(z.jsx)(U,{})})}),document.getElementById("root")),rt()},9:function(t,e,n){t.exports={label:"ContactForm_label__2ZJgB",input:"ContactForm_input__2g16E"}}},[[63,1,2]]]);
//# sourceMappingURL=main.49ac5442.chunk.js.map