(this["webpackJsonppairing-tool"]=this["webpackJsonppairing-tool"]||[]).push([[0],{159:function(e,t){},165:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){},169:function(e,t,n){},170:function(e,t,n){},171:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),i=n.n(c),r=n(11),s=n.n(r),o=n(12),u=n(24),d={},l=Object(u.b)({name:"toggles",initialState:d,reducers:{overrideToggle:function(e,t){t.payload.toggle in e&&(e[t.payload.toggle]="true"===t.payload.value)}}}),j=l.reducer,A=l.actions.overrideToggle,g={languages:["HTML","CSS","JS","Python","Ruby","SQL","Java","PHP","Other"]},f=Object(u.b)({name:"configuration",initialState:g,reducers:{}}).reducer,b=function(e){return e.configuration.languages},p=n(75),O=n.n(p),h=n(100),v=n(13),m=n(109),x=n(101),y=n.n(x),k=n(15),S=n(102),C=n.n(S),N=function(e,t){return t.reduce((function(t,n){var a=e.toLowerCase().includes(n.toLowerCase()),c=!t.includes(n);return a&&c?[].concat(Object(k.a)(t),[n]):t}),[])},J=function(e,t){return{name:e.Name,role:"Student",new:"true"===e["New attendee"],tutorial:e.Tutorial,notes:e.Note,languages:N("".concat(e.Note," ").concat(e.Tutorial),t)}},w=function(e,t){return{name:e.Name,role:"Coach",new:"true"===e["New attendee"],skills:e.Skills,notes:e.Note,languages:N("".concat(e.Note," ").concat(e.Skills),t)}},E={parse:function(e,t){return C.a.parse(e,{header:!0}).data.reduce((function(e,n){switch(n.Role){case"Student":return[].concat(Object(k.a)(e),[J(n,t)]);case"Coach":return[].concat(Object(k.a)(e),[w(n,t)]);default:return e}}),[])}},I={students:[],coaches:[]},B=Object(u.b)({name:"pairings",initialState:I,reducers:{resetPairings:function(e){e.students=[],e.coaches=[]},addPeopleForPairings:function(e,t){var n=t.payload,a=[].concat(e.students.map((function(e){return e.id}))).concat(e.coaches.map((function(e){return e.id}))),c=function(e,t){return e.filter((function(e){return!t.includes(e.id)}))},i=function(e){return e.map((function(e){return{id:e.id,name:e.name,languages:e.languages,group:0}}))};e.students=e.students.concat(i(c(n.students,a))),e.coaches=e.coaches.concat(i(c(n.coaches,a)))},moveCoachToGroup:function(e,t){var n=t.payload,a=e.coaches.findIndex((function(e){return e.id===n.coachId}));e.coaches[a]=Object(v.a)(Object(v.a)({},e.coaches[a]),{},{group:n.groupId})},moveStudentToGroup:function(e,t){var n=t.payload,a=e.students.findIndex((function(e){return e.id===n.studentId}));e.students[a]=Object(v.a)(Object(v.a)({},e.students[a]),{},{group:n.groupId})}}}),Q=B.reducer,D=B.actions,H=D.addPeopleForPairings,P=D.moveCoachToGroup,Z=D.moveStudentToGroup,T=D.resetPairings,R=function(e){return e.pairings.students.filter((function(e){return 0===e.group}))},U=function(e){return e.pairings.coaches.filter((function(e){return 0===e.group}))},K=function(e){return G(F(e.pairings,b(e),M(L(z(e.pairings,"students"),z(e.pairings,"coaches")))))},G=function(e){return e.sort((function(e,t){return e.id>t.id?1:-1}))},F=function(e,t,n){var a=function(t,n){return t[n].map((function(t){return e[n].find((function(e){return e.id===t.id})).languages||[]}))};return n.map((function(e){var n=a(e,"students").concat(a(e,"coaches")),c=n.length>0?t.reduce((function(e,t){return n.every((function(e){return e.includes(t)}))?[].concat(Object(k.a)(e),[t]):e}),[]):[];return Object(v.a)(Object(v.a)({},e),{},{languages:c})}))},M=function(e){var t=e.map((function(e){return e.id})).reduce((function(e,t){return t>e?t:e}),0)+1;return[].concat(Object(k.a)(e),[{id:t,students:[],coaches:[],languages:[]}])},L=function(e,t){return e.concat(t).reduce((function(e,t){var n=e.findIndex((function(e){return e.id===t.id}));return n>-1?[].concat(Object(k.a)(W(e,n)),[{id:e[n].id,students:[].concat(Object(k.a)(e[n].students),Object(k.a)(t.students)),coaches:[].concat(Object(k.a)(e[n].coaches),Object(k.a)(t.coaches)),languages:[]}]):[].concat(Object(k.a)(e),[t])}),[])},z=function(e,t){return e[t].filter((function(e){return e.group>0})).reduce((function(e,n){var a={id:n.id,name:n.name},c=e.findIndex((function(e){return e.id===n.group}));if(c>-1){var i=e[c],r={id:i.id,students:i.students||[],coaches:i.coaches||[],languages:i.languages||[]};return r[t]=[].concat(Object(k.a)(i[t]),[a]),[].concat(Object(k.a)(W(e,c)),[r])}var s={id:n.group,students:[],coaches:[],languages:[]};return s[t]=[a],[].concat(Object(k.a)(e),[s])}),[])},W=function(e,t){return[].concat(Object(k.a)(e.slice(0,t)),Object(k.a)(e.slice(t+1)))},Y={list:[],nextId:1,readyForPairing:!1},X=Object(u.b)({name:"attendees",initialState:Y,reducers:{addAttendee:function(e,t){e.list.some((function(e){e.id,e.attendance;var n=Object(m.a)(e,["id","attendance"]);return y()(n,t.payload)}))||(e.list.push(Object(v.a)({id:e.nextId,attendance:!1},t.payload)),e.nextId+=1)},updateAttendeeName:function(e,t){var n=e.list.findIndex((function(e){return e.id===t.payload.id})),a=e.list[n];e.list[n]=Object(v.a)(Object(v.a)({},a),{},{name:t.payload.name})},updateAttendeeNotes:function(e,t){var n=e.list.findIndex((function(e){return e.id===t.payload.id})),a=e.list[n];e.list[n]=Object(v.a)(Object(v.a)({},a),{},{notes:t.payload.notes})},updateAttendeeSkills:function(e,t){var n=e.list.findIndex((function(e){return e.id===t.payload.id})),a=e.list[n];e.list[n]=Object(v.a)(Object(v.a)({},a),{},{skills:t.payload.skills})},updateAttendeeTutorial:function(e,t){var n=e.list.findIndex((function(e){return e.id===t.payload.id})),a=e.list[n];e.list[n]=Object(v.a)(Object(v.a)({},a),{},{tutorial:t.payload.tutorial})},toggleAttendance:function(e,t){var n=e.list.findIndex((function(e){return e.id===t.payload})),a=e.list[n];e.list[n]=Object(v.a)(Object(v.a)({},a),{},{attendance:!a.attendance})},toggleRole:function(e,t){var n=e.list.findIndex((function(e){return e.id===t.payload})),a=e.list[n],c="Student"===a.role?"Coach":"Student";e.list[n]=Object(v.a)(Object(v.a)({},a),{},{role:c})},toggleLanguage:function(e,t){var n=e.list.findIndex((function(e){return e.id===t.payload.id})),a=e.list[n],c=a.languages.includes(t.payload.language)?a.languages.filter((function(e){return e!==t.payload.language})):a.languages.concat(t.payload.language);e.list[n]=Object(v.a)(Object(v.a)({},a),{},{languages:c})},readyForPairing:function(e){e.readyForPairing=!0},reviewAttendeesAgain:function(e){e.readyForPairing=!1}}}),q=X.reducer,V=X.actions,$=V.addAttendee,_=V.updateAttendeeName,ee=V.updateAttendeeNotes,te=V.updateAttendeeSkills,ne=V.updateAttendeeTutorial,ae=V.toggleAttendance,ce=V.toggleRole,ie=V.toggleLanguage,re=V.readyForPairing,se=V.reviewAttendeesAgain,oe=function(e){return e.attendees.list},ue=function(e){return function(e){return e.attendees.list.filter((function(e){return"Student"===e.role}))}(e).filter((function(e){return!0===e.attendance}))},de=function(e){return function(e){return e.attendees.list.filter((function(e){return"Coach"===e.role}))}(e).filter((function(e){return!0===e.attendance}))},le=function(e){return e.attendees.list.length>0},je=function(e){return e.attendees.readyForPairing},Ae={toggles:d,configuration:g,attendees:Y,pairings:I};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge=n(214),fe=(n(165),function(){var e=Object(o.b)(),t=Object(c.useRef)(null);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"file",ref:t,onChange:function(t){var n,a=t.target.files;a&&a.length&&e((n=a[0],function(){var e=Object(h.a)(O.a.mark((function e(t,a){var c,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.text();case 3:c=e.sent,i=b(a()),E.parse(c,i).forEach((function(e){return t($(e))})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()))},style:{display:"none"},accept:"*.csv","data-test":"csv-upload-button"}),Object(a.jsx)(ge.a,{variant:"contained",color:"primary",onClick:function(){return t.current.click()},className:"UploadCsvButton",children:"Upload CSV"})]})}),be=n.p+"static/media/pairingCsvImg.d0d3fc48.png",pe=(n(166),function(){return Object(a.jsxs)("div",{className:"CsvParseStep",children:[Object(a.jsx)("h1",{children:"Pairing Tool"}),Object(a.jsx)("span",{children:"Step 1: Download the pairing CSV from the workshop page"}),Object(a.jsx)("img",{alt:"Pairing CSV",src:be}),Object(a.jsx)(fe,{})]})}),Oe=n(17),he=n(226),ve=n(230),me=n(219),xe=n(218),ye=n(231),ke=n(227),Se=(n(167),function(e){var t=e.attendee,n=Object(o.c)(b),i=Object(c.useState)(""),r=Object(Oe.a)(i,2),s=r[0],u=r[1],d=Object(c.useState)(!1),l=Object(Oe.a)(d,2),j=l[0],A=l[1],g=Object(c.useState)(""),f=Object(Oe.a)(g,2),p=f[0],O=f[1],h=Object(c.useState)(""),v=Object(Oe.a)(h,2),m=v[0],x=v[1],y=Object(c.useState)(""),S=Object(Oe.a)(y,2),C=S[0],N=S[1],J=Object(c.useState)(""),w=Object(Oe.a)(J,2),E=w[0],I=w[1],B=Object(c.useState)([]),Q=Object(Oe.a)(B,2),D=Q[0],H=Q[1],P=Object(o.b)(),Z=function(e){return"attendee-editor-".concat(e)};Object(c.useEffect)((function(){u(t.name),A(t.attendance),O(t.role),x(t.notes),N(void 0!==t.skills?t.skills:""),I(void 0!==t.tutorial?t.tutorial:""),H(t.languages)}),[t.name,t.attendance,t.role,t.notes,t.skills,t.tutorial,t.languages]);var T=Object(a.jsx)(he.a,{"data-test-id":Z("name"),className:"NameInput",label:"Name",value:s,onChange:function(e){return u(e.target.value)},onBlur:function(){return P(_({id:t.id,name:s}))}}),R=Object(a.jsx)(ve.a,{label:"Attendance",labelPlacement:"top",control:Object(a.jsx)(me.a,{"data-test-id":Z("attendance"),name:"attendance",color:"primary",checked:j,onChange:function(){A(!j),P(ae(t.id))}})}),U=Object(a.jsx)(xe.a,{component:"fieldset",children:Object(a.jsxs)(ye.a,{"aria-label":"role",name:"role",value:p,onChange:function(e){O(e.target.value),P(ce(t.id))},children:[Object(a.jsx)(ve.a,{label:"Student",value:"Student",control:Object(a.jsx)(ke.a,{"data-test-id":Z("role-student")})}),Object(a.jsx)(ve.a,{label:"Coach",value:"Coach",control:Object(a.jsx)(ke.a,{"data-test-id":Z("role-coach")})})]})}),K=Object(a.jsx)(he.a,{"data-test-id":Z("notes"),label:"Notes",fullWidth:!0,multiline:!0,rowsMax:2,value:m,onChange:function(e){return x(e.target.value)},onBlur:function(){return P(ee({id:t.id,notes:m}))}}),G=Object(a.jsx)(he.a,{"data-test-id":Z("skills"),label:"Skills",fullWidth:!0,multiline:!0,rowsMax:2,value:C,onChange:function(e){return N(e.target.value)},onBlur:function(){return P(te({id:t.id,skills:C}))}}),F=Object(a.jsx)(he.a,{"data-test-id":Z("tutorial"),label:"Tutorial",fullWidth:!0,value:E,onChange:function(e){return I(e.target.value)},onBlur:function(){return P(ne({id:t.id,tutorial:E}))}}),M=Object(a.jsx)("div",{className:"LanguageButtons",children:n.map((function(e){return Object(a.jsx)(ge.a,{"data-test-id":Z("language-".concat(e)),className:"".concat(e,"Button ").concat(D.includes(e)?"Active":"Inactive"),variant:"contained",color:"primary",onClick:function(){if(D.includes(e)){var n=D.indexOf(e);H([].concat(Object(k.a)(D.slice(0,n)),Object(k.a)(D.slice(n+1))))}else H([].concat(Object(k.a)(D),[e]));P(ie({id:t.id,language:e}))},children:e},e)}))});return Object(a.jsxs)("div",{className:"AttendeeEditor","data-test-id":"attendee-editor",children:[Object(a.jsxs)("div",{className:"Row",children:[T,R,U]}),Object(a.jsx)("div",{className:"Row",children:K}),Object(a.jsx)("div",{className:"Row",children:G}),Object(a.jsx)("div",{className:"Row",children:F}),Object(a.jsx)("div",{className:"Row",children:M}),Object(a.jsxs)("div",{className:"ComingSoon",children:[Object(a.jsx)("p",{children:Object(a.jsx)("em",{children:"Here we can add more configuration options in the future"})}),Object(a.jsx)("p",{children:Object(a.jsx)("em",{children:"Useful when we want to persist this information and/or auto-calculate pairs"})})]})]})}),Ce=n(220),Ne=n.p+"static/media/newbie.e578ead4.png",Je=(n(169),function(e){var t=e.attendee,n=e.selected,c=e.onClick,i="".concat(!0===n?"SelectedToEdit":""," ").concat(t.attendance?"IsAttending":"IsNotAttending"),r="Student"===t.role?"fas fa-book-reader":"fas fa-graduation-cap";return Object(a.jsxs)("div",{"data-test-id":"attendee-display-name",className:"AttendeeDisplayName ".concat(i),onClick:c,children:[Object(a.jsx)("img",{className:"FirstTimerIcon ".concat(!1===t.new?"Hidden":""),src:Ne,alt:"First Timer"}),Object(a.jsx)(Ce.a,{className:"RoleIcon ".concat(r)}),Object(a.jsx)("span",{className:"AttendeeNameLabel",children:t.name})]})}),we=n(183),Ee=n(221),Ie=n(222),Be=(n(170),function(){var e=Object(c.useState)(void 0),t=Object(Oe.a)(e,2),n=t[0],i=t[1],r=Object(o.c)(oe),s=Object(o.b)(),u=function(e){return"update-attendees-step-".concat(e)},d=Object(a.jsx)("div",{"data-test-id":u("new-attendee"),onClick:function(){return s($({name:"",role:"Student",languages:[],attendance:!0}))},children:Object(a.jsx)(we.a,{children:Object(a.jsx)(Ee.a,{})})}),l=Object(a.jsx)(a.Fragment,{children:r.slice().reverse().map((function(e){return Object(a.jsx)(Je,{attendee:e,selected:void 0!==n&&n.id===e.id,onClick:function(){return function(e){void 0===n||n.id!==e.id?i(e):i(void 0)}(e)}},e.id)}))});return Object(a.jsxs)("div",{className:"UpdateAttendeesStep",children:[Object(a.jsxs)("div",{className:"UpdateAttendeesStepHeader",children:[Object(a.jsx)("span",{children:"Step 2: Update attendance, skills and add new students or coaches"}),Object(a.jsx)(ge.a,{"data-test-id":u("pairing"),className:"UpdateAttendeesStepDone",variant:"contained",color:"primary",endIcon:Object(a.jsx)(Ie.a,{}),onClick:function(){return s((function(e,t){var n=t();e(re()),e(H({students:ue(n),coaches:de(n)}))}))},children:"Continue to pairings"})]}),Object(a.jsxs)("div",{className:"UpdateAttendeesStepContent",children:[Object(a.jsxs)("div",{className:"Attendees","data-test-id":u("list"),children:[d,l]}),void 0!==n&&Object(a.jsx)(Se,{attendee:n})]})]})}),Qe=n(225),De=n(108),He="Student",Pe="Coach",Ze=n(228),Te=n(106),Re=n.n(Te),Ue=(n(171),function(e){var t=e.attendee,n=e.type,c=Object(Ze.a)({item:{type:n,id:t.id},collect:function(e){return{isDragging:!!e.isDragging()}}}),i=Object(Oe.a)(c,2),r=i[0].isDragging,s=i[1];return Object(a.jsx)("div",{ref:s,className:"Available".concat(n).concat(!0===r?" Dragging":""),children:Object(a.jsx)(ge.a,{className:"Button",variant:"contained",color:"default",endIcon:Object(a.jsx)(Re.a,{}),children:t.name})})}),Ke=n(223),Ge=n(224),Fe=(n(173),function(e){var t=e.data,n=e.type,c=Object(o.c)(b);return Object(a.jsx)(Ke.a,{className:"AttendeeCompactCard",children:Object(a.jsxs)(Ge.a,{className:"CardContent",children:[Object(a.jsx)("section",{children:c.map((function(e){return Object(a.jsx)(ge.a,{className:"".concat(e,"Button ").concat(t.languages.includes(e)?"Active":"Inactive"),variant:"contained",color:"primary",children:e})}))}),Object(a.jsx)(Ue,{attendee:t,type:n})]})})}),Me=n(229),Le=(n(174),function(e){var t=e.groupId,n=e.children,c=Object(o.b)(),i=Object(Me.a)({accept:He,drop:function(e){return c(Z({studentId:e.id,groupId:t}))},collect:function(e){return{isOver:!!e.isOver()}}}),r=Object(Oe.a)(i,2),s=r[0].isOver,u=r[1];return Object(a.jsx)("div",{ref:u,className:"StudentDropzone ".concat(s&&"IsOver"),children:n})}),ze=(n(175),function(e){var t=e.groupId,n=e.children,c=Object(o.b)(),i=Object(Me.a)({accept:Pe,drop:function(e){return c(P({coachId:e.id,groupId:t}))},collect:function(e){return{isOver:!!e.isOver()}}}),r=Object(Oe.a)(i,2),s=r[0].isOver,u=r[1];return Object(a.jsx)("div",{ref:u,className:"CoachDropzone ".concat(s&&"IsOver"),children:n})}),We=n(107),Ye=n.n(We),Xe=(n(176),function(){var e=Object(o.c)(R),t=Object(o.c)(U),n=Object(o.c)(K),c=Object(o.b)();return Object(a.jsx)(Qe.a,{backend:De.a,children:Object(a.jsxs)("div",{className:"PairingsStep",children:[Object(a.jsxs)("div",{className:"PairingsStepHeader",children:[Object(a.jsx)("span",{children:"Step 3: Start organising the pairs by dragging the names of the participants to groups"}),Object(a.jsx)(ge.a,{className:"PairingsStepBack",variant:"contained",color:"primary",startIcon:Object(a.jsx)(Ye.a,{}),onClick:function(){return c((function(e){e(T()),e(se())}))},children:"Review attendance and skills"})]}),Object(a.jsxs)("div",{className:"PairingsStepContent",children:[Object(a.jsxs)("div",{className:"Attendees",children:[Object(a.jsx)("h4",{children:"Students"}),Object(a.jsxs)(Le,{groupId:0,children:[e.map((function(e){return Object(a.jsx)(Fe,{data:e,type:He})})),0===e.length&&Object(a.jsx)("span",{className:"EmptyDropzone",children:"Drag a student here"})]}),Object(a.jsx)("h4",{children:"Coaches"}),Object(a.jsxs)(ze,{groupId:0,children:[t.map((function(e){return Object(a.jsx)(Fe,{data:e,type:Pe})})),0===t.length&&Object(a.jsx)("span",{className:"EmptyDropzone",children:"Drag a coach here"})]})]}),Object(a.jsxs)("div",{className:"Pairs",children:[Object(a.jsx)("h4",{children:"Pairs"}),n.map((function(e){return Object(a.jsxs)("div",{className:"PairingGroup",children:[Object(a.jsxs)(Le,{groupId:e.id,children:[e.students.map((function(e){return Object(a.jsx)(Ue,{attendee:e,type:He})})),0===e.students.length&&Object(a.jsx)("span",{className:"EmptyDropzone",children:"Drag a student here"})]}),Object(a.jsxs)(ze,{groupId:e.id,children:[e.coaches.map((function(e){return Object(a.jsx)(Ue,{attendee:e,type:Pe})})),0===e.coaches.length&&Object(a.jsx)("span",{className:"EmptyDropzone",children:"Drag a coach here"})]}),Object(a.jsx)("div",{className:"PairingGroupLanguages",children:e.languages.map((function(e){return Object(a.jsx)(ge.a,{className:"".concat(e,"Button Active"),variant:"contained",color:"primary",children:e})}))})]})}))]})]})]})})}),qe=(n(177),function(){var e=Object(o.c)(le),t=Object(o.c)(je);return Object(a.jsxs)("div",{className:"PairingTool",children:[!t&&!e&&Object(a.jsx)(pe,{}),!t&&e&&Object(a.jsx)(Be,{}),t&&Object(a.jsx)(Xe,{})]})}),Ve=(n(178),function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"AppHeader",children:[Object(a.jsx)("img",{alt:"Codebar",src:"data:image/png;base64,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"}),Object(a.jsx)("span",{children:"Pairing Tool"})]}),Object(a.jsx)("div",{className:"AppContent",children:Object(a.jsx)(qe,{})})]})}),$e=(n(179),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae;return Object(u.a)({reducer:{toggles:j,configuration:f,attendees:q,pairings:Q},preloadedState:e})}());new URLSearchParams(window.location.search).forEach((function(e,t){return $e.dispatch(A({toggle:t,value:e}))})),s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(o.a,{store:$e,children:Object(a.jsx)(Ve,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[180,1,2]]]);
//# sourceMappingURL=main.418b8aae.chunk.js.map