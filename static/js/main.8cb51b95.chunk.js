(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{17:function(e,t,n){e.exports={notes_title:"Notes_notes_title__22gZW",new_note_form:"Notes_new_note_form__23Hkl",notes:"Notes_notes__1C2w2",timestamp:"Notes_timestamp__1Qres"}},19:function(e,t,n){e.exports={container:"Register_container__2CpZo",register_img:"Register_register_img__31hHB",wave_img:"Register_wave_img__3vNB-",register:"Register_register__FCH_-"}},24:function(e,t,n){e.exports={home:"Home_home__1BgyG",home_img:"Home_home_img__19Bnx",open_btn:"Home_open_btn__3OTlt"}},25:function(e,t,n){e.exports={container:"Login_container__1DF8G",login_img:"Login_login_img__3z7mT",wave_img:"Login_wave_img__JzQir"}},27:function(e,t,n){e.exports={signout:"Signout_signout__2ZW-q",signout_btn:"Signout_signout_btn___j0cz"}},36:function(e,t,n){e.exports={nav_title:"Navigation_nav_title__PcA7I"}},37:function(e,t,n){e.exports={footer:"Footer_footer__1BDmJ"}},43:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),o=n(33),i=n.n(o),a=(n(43),n(13)),r=n(15),u=n(6),l=n(27),j=n.n(l),d=n(8),b=(n(32),n(45),n(54),{apiKey:"AIzaSyBNjS1-f74x2tyRYKOOBI5tVbhaGdkUHKQ",authDomain:"notes-a-ecb14.firebaseapp.com",projectId:"notes-a-ecb14",storageBucket:"notes-a-ecb14.appspot.com",messagingSenderId:"1002240956605",appId:"1:1002240956605:web:0b1eb9425e88845c48ffd4",measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"/tea-milas/notesy-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyBNjS1-f74x2tyRYKOOBI5tVbhaGdkUHKQ",REACT_APP_APP_ID:"1:1002240956605:web:0b1eb9425e88845c48ffd4",REACT_APP_AUTH_DOMAIN:"notes-a-ecb14.firebaseapp.com",REACT_APP_MEASUREMENT_ID:"G-8BS958WF5X",REACT_APP_MESSAGING_SENDER_ID:"1002240956605",REACT_APP_PROJECT_ID:"notes-a-ecb14",REACT_APP_STORAGE_BUCKET:"notes-a-ecb14.appspot.com"}).REACT_APP_MEASUREMENZ_ID});d.a.initializeApp(b);var h=d.a.firestore(),_=d.a.auth(),p=(d.a.storage(),d.a,n(1)),m=function(){var e=Object(u.f)();return Object(p.jsx)("div",{className:j.a.signout,children:Object(p.jsx)("button",{className:j.a.signout_btn,onClick:function(){_.signOut().then(e.push("/"))},children:"SO"})})},g=n(36),O=n.n(g),f=function(){return Object(p.jsxs)("nav",{children:[Object(p.jsx)("h2",{className:O.a.nav_title,children:"Notesy"}),Object(p.jsx)(m,{})]})},x=n(24),v=n.n(x),w=n(37),N=n.n(w),S=function(){return Object(p.jsx)("footer",{className:N.a.footer,children:Object(p.jsx)("p",{children:"Made by Tea | March 2021"})})},A=n(17),E=n.n(A),P=n(30),D=n.n(P),y=n(38),C=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(""),i=Object(a.a)(o,2),r=i[0],u=i[1],l=Object(c.useState)(""),j=Object(a.a)(l,2),b=j[0],_=j[1],p=d.a.auth().currentUser.uid,m=function(){h.collection("users").doc(p).collection("notes").get().then((function(e){_(e.docs.map((function(e){return e.data()})))}))},g=function(){var e=Object(y.a)(D.a.mark((function e(t){var n,c,o,i,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target[0].value,c=t.target[1].value,o=(new Date).getDate(),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],(a=h.collection("users").doc(p).collection("notes")).doc().set({title:n,description:c,day:o,month:i[(new Date).getMonth()]}),e.next=9,a.get().then((function(e){e.docs.map((function(e){return a.doc(e.id).update({noteID:e.id})}))}));case 9:m(),s(" "),u(" ");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){m()}),[]),{getNotes:m,submitNote:g,deleteNote:function(e){h.collection("users").doc(p).collection("notes").doc(e).delete().then((function(){_(b.filter((function(t){return t.id!==e}))),m(),console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)}))},title:n,setTitle:s,description:r,setDescription:u,notes:b,setNotes:_}},I=function(){var e=C(),t=(e.getNotes,e.submitNote),n=e.deleteNote,c=e.title,s=e.setTitle,o=e.description,i=e.setDescription,a=e.notes;e.setNotes;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{className:E.a.notes_title,children:"Write down things you don't want to forget: "}),Object(p.jsxs)("form",{onSubmit:t,className:E.a.new_note_form,children:[Object(p.jsx)("label",{children:"Title"}),Object(p.jsx)("input",{type:"text",value:c,onChange:function(e){return s(e.target.value)},required:!0}),Object(p.jsx)("label",{children:"Description"}),Object(p.jsx)("input",{type:"text",value:o,onChange:function(e){return i(e.target.value)},required:!0}),Object(p.jsx)("button",{type:"submit",children:"Add"})]}),Object(p.jsx)("section",{className:E.a.notes,children:a&&a.map((function(e){return Object(p.jsxs)("article",{className:E.a.notes_note,children:[Object(p.jsx)("h3",{children:e.title}),Object(p.jsx)("button",{onClick:function(){return n(e.noteID)},children:"X"}),Object(p.jsx)("p",{children:e.description}),Object(p.jsxs)("h4",{className:E.a.timestamp,children:[e.day,(t=e.day,1===t?"st":2===t?"nd":3===t?"rd":t?"th":void 0)," ",e.month]})]},e.noteID);var t}))})]})},T=n.p+"static/media/wfh_8.2f13ed09.svg",R=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(window.innerWidth),i=Object(a.a)(o,2),r=i[0],u=i[1],l=function(){u(window.innerWidth)};Object(c.useEffect)((function(){return window.addEventListener("resize",l),function(){window.removeEventListener("resize",l)}}),[]);var j=r<=768,b=d.a.auth().currentUser.displayName;return Object(p.jsxs)("div",{className:v.a.home,children:[Object(p.jsx)(f,{}),Object(p.jsxs)("main",{children:[Object(p.jsx)("img",{className:v.a.home_img,src:T,alt:"girl with a laptop"}),Object(p.jsxs)("h2",{children:["Hi ",b,"!"]}),j?Object(p.jsx)("button",{className:v.a.open_btn,onClick:function(){return s(!n)},children:n?"Close notes":"Add a new note"}):Object(p.jsx)(I,{}),j&&n&&Object(p.jsx)(I,{})]}),Object(p.jsx)(S,{})]})},U=n(25),B=n.n(U),k=n.p+"static/media/wfh_1.6474e993.svg",F=n.p+"static/media/wave.c08d1e01.svg",H=function(){var e=Object(c.useContext)(L),t=Object(u.f)(),n=new d.a.auth.GoogleAuthProvider;return Object(p.jsxs)("section",{className:B.a.container,children:[Object(p.jsx)("img",{className:B.a.login_img,src:k,alt:"girl with a laptop"}),Object(p.jsx)("h1",{children:"Notesy"}),Object(p.jsxs)("form",{onSubmit:function(n){n.preventDefault();var c=n.target[0].value,s=n.target[1].value;_.signInWithEmailAndPassword(c,s).then((function(n){var c=d.a.auth().currentUser.uid;e.setUserId(c),t.push("/home")})).catch((function(e){alert("Your email or password don't match!")}))},children:[Object(p.jsx)("input",{placeholder:"email...",required:!0}),Object(p.jsx)("input",{type:"password",placeholder:"password...",required:!0}),Object(p.jsx)("button",{type:"submit",children:"Login"}),Object(p.jsx)("button",{onClick:function(){n.addScope("https://www.googleapis.com/auth/contacts.readonly"),d.a.auth().signInWithPopup(n).then((function(e){t.push("/home")})).catch((function(e){console.log(e.message)}))},children:"Google login"}),Object(p.jsxs)("p",{children:["Don't have an account?",Object(p.jsx)(u.a,{children:Object(p.jsx)(r.b,{to:"/register",children:Object(p.jsx)("span",{children:"Register here"})})})]})]}),Object(p.jsx)("img",{className:B.a.wave_img,src:F,alt:"wave background"})]})},M=n(19),W=n.n(M),G=n.p+"static/media/wfh_2.5e32af89.svg",K=function(){var e=Object(u.f)(),t=Object(c.useContext)(L);return Object(p.jsxs)("div",{className:W.a.container,children:[Object(p.jsx)("img",{className:W.a.register_img,src:G,alt:"person with a phone"}),Object(p.jsx)("h1",{children:"Register"}),Object(p.jsxs)("form",{className:W.a.register,onSubmit:function(n){n.preventDefault();var c=n.target[0].value,s=n.target[1].value,o=n.target[2].value;t.setUser(c),h.collection("users").doc().set({username:c,email:s}),h.collection("users").get().then((function(e){e.forEach((function(e){h.collection("users").doc(e.id).update({userID:e.id})}))})),_.createUserWithEmailAndPassword(s,o).then((function(t){alert(c+", you have succesfully registered!"),d.a.auth().currentUser.updateProfile({displayName:c}),e.push("/")})).catch((function(e){alert(e.message)}))},children:[Object(p.jsx)("input",{placeholder:"username..."}),Object(p.jsx)("input",{placeholder:"email..."}),Object(p.jsx)("input",{type:"password",placeholder:"password..."}),Object(p.jsx)("button",{type:"submit",children:"Register"})]}),Object(p.jsx)("img",{className:W.a.wave_img,src:F,alt:"wave background"})]})},L=Object(c.createContext)({}),z=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(""),i=Object(a.a)(o,2),l={user:n,setUser:s,userId:i[0],setUserId:i[1]};return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(L.Provider,{value:l,children:Object(p.jsx)(r.a,{children:Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{exact:!0,path:"/",children:Object(p.jsx)(H,{})}),Object(p.jsx)(u.a,{path:"/register",children:Object(p.jsx)(K,{})}),Object(p.jsx)(u.a,{path:"/home",children:Object(p.jsx)(R,{})})]})})})})};var J=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(z,{})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),o(e),i(e)}))};i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(J,{})}),document.getElementById("root")),q()}},[[53,1,2]]]);
//# sourceMappingURL=main.8cb51b95.chunk.js.map