(this["webpackJsonppjsip-generate-users"]=this["webpackJsonppjsip-generate-users"]||[]).push([[0],{11:function(e,n,t){},13:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(4),l=t.n(c),s=(t(11),t(2)),o=function(e){var n=Object(a.useState)(e),t=Object(s.a)(n,2),r=t[0],c=t[1];return[r,function(e){var n=e.target.value;c(n)},c]},i=function(){return Object(a.useState)((function(){return"id".concat(Math.random())}))[0]},u=t(0),j=function(e){var n=e.label,t=e.value,a=e.onChange,r=e.rows,c=void 0===r?5:r,l=e.cols,s=void 0===l?30:l,o=e.readOnly,j=i();return Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsxs)("label",{htmlFor:j,children:[n,":"]}),Object(u.jsx)("textarea",{id:j,cols:s,rows:c,value:t,onChange:a,readOnly:o,children:"Your text"})]})},b=t(5),d=t(6),p=["label","type"],O=function(e){var n=e.label,t=e.type,a=void 0===t?"text":t,r=Object(d.a)(e,p),c=i();return Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsxs)("label",{htmlFor:c,children:[n,":"]}),Object(u.jsx)("input",Object(b.a)({id:c,name:"text",type:a},r))]})},m=function(){return Object(u.jsxs)("div",{className:"terminal-nav",children:[Object(u.jsx)("div",{className:"terminal-logo",children:Object(u.jsx)("div",{className:"logo terminal-prompt",children:Object(u.jsx)("a",{href:"/",className:"no-style",children:"Pjsip.conf generator"})})}),Object(u.jsx)("nav",{className:"terminal-menu"})]})},N=function(e){var n=e.name,t=e.password;return"[".concat(n,"]\ntype = endpoint\ncontext = from").concat(n,"\ndisallow = all\nallow = ulaw\naors = ").concat(n,"\nauth = auth").concat(n,"\n \n[").concat(n,"]\ntype = aor\nmax_contacts = 1\n \n[auth").concat(n,"]\ntype=auth\nauth_type=userpass\npassword=").concat(t,"\nusername=").concat(n)},h=function(){var e=o("[$TRANSPORT_NAME]\ntype=transport\nallow_reload=yes\nprotocol=udp\nbind=0.0.0.0:5060"),n=Object(s.a)(e,2),t=n[0],r=n[1],c=o("udp-transport"),l=Object(s.a)(c,2),i=l[0],b=l[1],d=o("rtu"),p=Object(s.a)(d,2),h=p[0],v=p[1],x=o("192.168.1.1"),f=Object(s.a)(x,2),P=f[0],_=f[1],g=o("[$UPLINK_NAME]\rtype=aor\rcontact=sip:$UPLINK_IP\r\r[$UPLINK_NAME]\ntype=endpoint\ntransport=$TRANSPORT_NAME\ncontext=from_$UPLINK_NAME\ndisallow=all\nallow=ulaw\naors=rtu\ndirect_media=no\r\r[$UPLINK_NAME]\ntype=identify\nendpoint=$UPLINK_NAME\nmatch=$UPLINK_IP\n"),y=Object(s.a)(g,2),A=y[0],w=y[1],I=o("200,qwerty\r201,qwer123"),$=Object(s.a)(I,2),E=$[0],M=$[1],U=Object(a.useState)(""),K=Object(s.a)(U,2),L=K[0],T=K[1];return Object(a.useEffect)((function(){var e=function(e,n,t,a,r){return(e+"\r\n\r\n"+n).replaceAll("$TRANSPORT_NAME",t).replaceAll("$UPLINK_NAME",a).replaceAll("$UPLINK_IP",r)}(t,A,i,h,P),n=function(e){return e.trim().split("\r").map((function(e){return e.split(",")})).map((function(e){var n=Object(s.a)(e,2);return{name:n[0],password:n[1]}})).map(N).join("\r\n\r\n")}(E);T(e+"\r\n\r\n"+n)}),[t,i,h,P,A,E]),Object(u.jsxs)("div",{className:"container terminal greed",children:[Object(u.jsx)(m,{}),Object(u.jsxs)("div",{className:"grid",children:[Object(u.jsx)(O,{label:"$UPLINK_IP",value:P,onChange:_}),Object(u.jsx)(O,{label:"$TRANSPORT_NAME",value:i,onChange:b}),Object(u.jsx)(O,{label:"$UPLINK_NAME",value:h,onChange:v}),Object(u.jsx)(j,{value:t,onChange:r,label:"Transpor"}),Object(u.jsx)(j,{value:A,onChange:w,label:"Transport"}),Object(u.jsx)(j,{value:E,onChange:M,label:"Users"})]}),Object(u.jsx)(j,{rows:40,value:L,readOnly:!0,label:"Result"})]})};l.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.c570e639.chunk.js.map