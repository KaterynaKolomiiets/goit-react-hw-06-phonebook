(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={li:"ContactListItem_li__u5DBj",button:"ContactListItem_button__3WhCT"}},14:function(t,e,n){t.exports={filter:"Filter_filter__24fM7"}},16:function(t,e,n){t.exports={ul:"ContactList_ul__3Xu9O"}},24:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=n(7),s=n.n(o),i=n(33),u=(n(24),n(5)),b=n(12),l=n(13),j=n(18),m=n(17),f=n(6),O=n.n(f),d=n(1),p=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.updateState=function(e){t.setState(Object(u.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{className:O.a.form,onSubmit:this.handleSubmit,children:[Object(d.jsxs)("label",{children:["Name",Object(d.jsx)("input",{autoComplete:"off",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:O.a.input,onChange:this.updateState,value:this.state.name})]}),Object(d.jsxs)("label",{children:["Number",Object(d.jsx)("input",{autoComplete:"off",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:O.a.input,onChange:this.updateState,value:this.state.number})]}),Object(d.jsx)("button",{type:"submit",className:O.a.button,children:"Add Contact"})]})}}]),n}(c.Component),h=p,x=n(14),C=n.n(x),v=n(3),_=n(4),g=Object(_.b)("contact/add"),y=Object(_.b)("contact/delete"),S=Object(_.b)("set/filter"),N=Object(_.b)("contacts/import"),w=function(){var t=Object(v.b)();return Object(d.jsx)("input",{className:C.a.filter,type:"text",name:"filter",onChange:function(e){var n=e.target.value;t(S(n))}})},k=n(16),A=n.n(k),L=n(11),D=n.n(L),I=function(t){var e=t.props,n=e.name,a=e.number,c=e.id,r=t.onDelete;return Object(d.jsxs)("li",{className:D.a.li,id:c,children:[Object(d.jsxs)("span",{children:[n,":"]}),Object(d.jsx)("span",{children:a}),Object(d.jsx)("button",{type:"button",className:D.a.button,onClick:function(){return r(c)},children:"Delete"})]})},J=function(t){return t.contacts.items},z=function(t){return t.contacts.filter},B=function(){var t=Object(v.c)(J),e=Object(v.c)(z),n=Object(v.b)(),a=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return Object(d.jsx)("ul",{className:A.a.ul,children:a.map((function(t){return Object(d.jsx)(I,{props:t,onDelete:function(){return n(y(t.id))}},Object(i.a)())}))})},E=function(){var t=Object(v.c)(J),e=Object(v.b)();Object(c.useEffect)((function(){localStorage.getItem("contacts")&&e(N(JSON.parse(localStorage.getItem("contacts"))))}),[]),Object(c.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(t))}),[t]);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(h,{onSubmit:function(n){var a=n.name,c=n.number;t.some((function(t){return t.name.toLowerCase()===a.toLowerCase()}))?alert("".concat(a," is alerady in your contacts")):e(g({id:Object(i.a)(),name:a,number:c}))}}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(w,{}),Object(d.jsx)(B,{})]})},F=n(2),M=n(8),T=Object(_.c)([],(a={},Object(u.a)(a,N,(function(t,e){return Object(M.a)(e.payload)})),Object(u.a)(a,g,(function(t,e){return[].concat(Object(M.a)(t),[e.payload])})),Object(u.a)(a,y,(function(t,e){return Object(M.a)(t).filter((function(t){return t.id!==e.payload}))})),a)),Z=Object(_.c)("",Object(u.a)({},S,(function(t,e){return e.payload}))),q=Object(F.b)({items:T,filter:Z}),P=Object(F.b)({contacts:q}),U=Object(_.a)({reducer:P,devTools:!1});s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v.a,{store:U,children:Object(d.jsx)(E,{})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"ContactForm_form__U6T2D",input:"ContactForm_input__27kot"}}},[[32,1,2]]]);
//# sourceMappingURL=main.3eb7ea3f.chunk.js.map