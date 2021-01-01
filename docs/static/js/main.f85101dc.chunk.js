(this["webpackJsonppairing-tool"]=this["webpackJsonppairing-tool"]||[]).push([[0],{164:function(e,t){},170:function(e,t,n){},171:function(e,t,n){},173:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),i=n(13),s=n.n(i),o=n(10),d=n(24),u={updateAttendeesNewScreen:!1},l=Object(d.b)({name:"toggles",initialState:u,reducers:{overrideToggle:function(e,t){t.payload.toggle in e&&(e[t.payload.toggle]="true"===t.payload.value)}}}),j=l.reducer,A=l.actions.overrideToggle,b={languages:["HTML","CSS","JS","Python","Ruby","SQL","Java","PHP","Other"]},g=Object(d.b)({name:"configuration",initialState:b,reducers:{}}).reducer,f=function(e){return e.configuration.languages},O=n(78),p=n.n(O),h=n(100),m=n(11),x=n(112),v=n(101),C=n.n(v),S=n(15),N=n(102),k=n.n(N),y=function(e,t){return t.reduce((function(t,n){var a=e.toLowerCase().includes(n.toLowerCase()),c=!t.includes(n);return a&&c?[].concat(Object(S.a)(t),[n]):t}),[])},w=function(e,t){return{name:e.Name,role:"Student",new:"true"===e["New attendee"],tutorial:e.Tutorial,notes:e.Note,languages:y("".concat(e.Note," ").concat(e.Tutorial),t)}},I=function(e,t){return{name:e.Name,role:"Coach",new:"true"===e["New attendee"],skills:e.Skills,notes:e.Note,languages:y("".concat(e.Note," ").concat(e.Skills),t)}},J={parse:function(e,t){return k.a.parse(e,{header:!0}).data.reduce((function(e,n){switch(n.Role){case"Student":return[].concat(Object(S.a)(e),[w(n,t)]);case"Coach":return[].concat(Object(S.a)(e),[I(n,t)]);default:return e}}),[])}},E={students:[],coaches:[]},B=Object(d.b)({name:"pairings",initialState:E,reducers:{resetPairings:function(e){e.students=[],e.coaches=[]},addPeopleForPairings:function(e,t){var n=t.payload,a=[].concat(e.students.map((function(e){return e.id}))).concat(e.coaches.map((function(e){return e.id}))),c=function(e,t){return e.filter((function(e){return!t.includes(e.id)}))},r=function(e){return e.map((function(e){return{id:e.id,name:e.name,languages:e.languages,group:0}}))};e.students=e.students.concat(r(c(n.students,a))),e.coaches=e.coaches.concat(r(c(n.coaches,a)))},moveCoachToGroup:function(e,t){var n=t.payload,a=e.coaches.findIndex((function(e){return e.id===n.coachId}));e.coaches[a]=Object(m.a)(Object(m.a)({},e.coaches[a]),{},{group:n.groupId})},moveStudentToGroup:function(e,t){var n=t.payload,a=e.students.findIndex((function(e){return e.id===n.studentId}));e.students[a]=Object(m.a)(Object(m.a)({},e.students[a]),{},{group:n.groupId})}}}),Q=B.reducer,D=B.actions,H=D.addPeopleForPairings,P=D.moveCoachToGroup,T=D.moveStudentToGroup,R=D.resetPairings,Z=function(e){return e.pairings.students.filter((function(e){return 0===e.group}))},U=function(e){return e.pairings.coaches.filter((function(e){return 0===e.group}))},K=function(e){return F(G(e.pairings,f(e),M(L(W(e.pairings,"students"),W(e.pairings,"coaches")))))},F=function(e){return e.sort((function(e,t){return e.id>t.id?1:-1}))},G=function(e,t,n){var a=function(t,n){return t[n].map((function(t){return e[n].find((function(e){return e.id===t.id})).languages||[]}))};return n.map((function(e){var n=a(e,"students").concat(a(e,"coaches")),c=n.length>0?t.reduce((function(e,t){return n.every((function(e){return e.includes(t)}))?[].concat(Object(S.a)(e),[t]):e}),[]):[];return Object(m.a)(Object(m.a)({},e),{},{languages:c})}))},M=function(e){var t=e.map((function(e){return e.id})).reduce((function(e,t){return t>e?t:e}),0)+1;return[].concat(Object(S.a)(e),[{id:t,students:[],coaches:[],languages:[]}])},L=function(e,t){return e.concat(t).reduce((function(e,t){var n=e.findIndex((function(e){return e.id===t.id}));return n>-1?[].concat(Object(S.a)(z(e,n)),[{id:e[n].id,students:[].concat(Object(S.a)(e[n].students),Object(S.a)(t.students)),coaches:[].concat(Object(S.a)(e[n].coaches),Object(S.a)(t.coaches)),languages:[]}]):[].concat(Object(S.a)(e),[t])}),[])},W=function(e,t){return e[t].filter((function(e){return e.group>0})).reduce((function(e,n){var a={id:n.id,name:n.name},c=e.findIndex((function(e){return e.id===n.group}));if(c>-1){var r=e[c],i={id:r.id,students:r.students||[],coaches:r.coaches||[],languages:r.languages||[]};return i[t]=[].concat(Object(S.a)(r[t]),[a]),[].concat(Object(S.a)(z(e,c)),[i])}var s={id:n.group,students:[],coaches:[],languages:[]};return s[t]=[a],[].concat(Object(S.a)(e),[s])}),[])},z=function(e,t){return[].concat(Object(S.a)(e.slice(0,t)),Object(S.a)(e.slice(t+1)))},Y={list:[],nextId:1,readyForPairing:!1},X=Object(d.b)({name:"attendees",initialState:Y,reducers:{addAttendee:function(e,t){e.list.some((function(e){e.id,e.attendance;var n=Object(x.a)(e,["id","attendance"]);return C()(n,t.payload)}))||(e.list.push(Object(m.a)({id:e.nextId,attendance:!1},t.payload)),e.nextId+=1)},updateAttendeeName:function(e,t){var n=e.list.findIndex((function(e){return e.id===t.payload.id})),a=e.list[n];e.list[n]=Object(m.a)(Object(m.a)({},a),{},{name:t.payload.name})},updateAttendeeNotes:function(e,t){var n=e.list.findIndex((function(e){return e.id===t.payload.id})),a=e.list[n];e.list[n]=Object(m.a)(Object(m.a)({},a),{},{notes:t.payload.notes})},updateAttendeeSkills:function(e,t){var n=e.list.findIndex((function(e){return e.id===t.payload.id})),a=e.list[n];e.list[n]=Object(m.a)(Object(m.a)({},a),{},{skills:t.payload.skills})},updateAttendeeTutorial:function(e,t){var n=e.list.findIndex((function(e){return e.id===t.payload.id})),a=e.list[n];e.list[n]=Object(m.a)(Object(m.a)({},a),{},{tutorial:t.payload.tutorial})},toggleAttendance:function(e,t){var n=e.list.findIndex((function(e){return e.id===t.payload})),a=e.list[n];e.list[n]=Object(m.a)(Object(m.a)({},a),{},{attendance:!a.attendance})},toggleRole:function(e,t){var n=e.list.findIndex((function(e){return e.id===t.payload})),a=e.list[n],c="Student"===a.role?"Coach":"Student";e.list[n]=Object(m.a)(Object(m.a)({},a),{},{role:c})},toggleLanguage:function(e,t){var n=e.list.findIndex((function(e){return e.id===t.payload.id})),a=e.list[n],c=a.languages.includes(t.payload.language)?a.languages.filter((function(e){return e!==t.payload.language})):a.languages.concat(t.payload.language);e.list[n]=Object(m.a)(Object(m.a)({},a),{},{languages:c})},readyForPairing:function(e){e.readyForPairing=!0},reviewAttendeesAgain:function(e){e.readyForPairing=!1}}}),q=X.reducer,V=X.actions,$=V.addAttendee,_=V.updateAttendeeName,ee=V.updateAttendeeNotes,te=V.updateAttendeeSkills,ne=V.updateAttendeeTutorial,ae=V.toggleAttendance,ce=V.toggleRole,re=V.toggleLanguage,ie=V.readyForPairing,se=V.reviewAttendeesAgain,oe=function(e){return e.attendees.list},de=function(e){return e.attendees.list.filter((function(e){return"Student"===e.role}))},ue=function(e){return e.attendees.list.filter((function(e){return"Coach"===e.role}))},le=function(e){return de(e).filter((function(e){return!0===e.attendance}))},je=function(e){return ue(e).filter((function(e){return!0===e.attendance}))},Ae=function(e){return e.attendees.list.length>0},be=function(e){return e.attendees.readyForPairing},ge=function(){return function(e,t){var n=t();e(ie()),e(H({students:le(n),coaches:je(n)}))}},fe={toggles:u,configuration:b,attendees:Y,pairings:E};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=n(111),pe={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"solid",backgroundColor:"#fafafa",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},he={borderColor:"#2196f3",backgroundColor:"#daefff"},me={borderColor:"#00e676",backgroundColor:"#e0ffef"},xe={borderColor:"#ff1744",backgroundColor:"#ffe4e7"},ve=function(){var e=Object(o.b)(),t=Object(c.useCallback)((function(t){return t.forEach((function(t){return e(function(e){return function(){var t=Object(h.a)(p.a.mark((function t(n,a){var c,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.text();case 3:c=t.sent,r=f(a()),J.parse(c,r).forEach((function(e){return n($(e))})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}()}(t))}))}),[e]),n=Object(Oe.a)({onDrop:t,accept:"text/csv",maxFiles:1}),r=n.getRootProps,i=n.getInputProps,s=n.isDragActive,d=n.isDragAccept,u=n.isDragReject,l=Object(c.useMemo)((function(){return Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)({},pe),s?he:{}),d?me:{}),u?xe:{})}),[s,u,d]);return Object(a.jsxs)("div",Object(m.a)(Object(m.a)({},r({style:l})),{},{children:[Object(a.jsx)("input",Object(m.a)({},i())),Object(a.jsx)("span",{children:"Drag and Drop the CSV here"}),Object(a.jsx)("span",{children:"or"}),Object(a.jsx)("span",{children:"Click here to select the file"})]}))},Ce=n.p+"static/media/pairingCsvImg.d0d3fc48.png",Se=(n(170),function(){return Object(a.jsxs)("div",{className:"CsvParseStep",children:[Object(a.jsx)("h1",{children:"Pairing Tool"}),Object(a.jsx)("span",{children:"Step 1: Download the pairing CSV from the workshop page"}),Object(a.jsx)("img",{alt:"Pairing CSV",src:Ce}),Object(a.jsx)("span",{children:"And process the CSV file here"}),Object(a.jsx)(ve,{})]})}),Ne=n(17),ke=n(223),ye=n(218),we=n(224),Ie=n(222),Je=n(107),Ee=n.n(Je),Be=n.p+"static/media/firstTimer.ada51372.jpg",Qe=(n(171),function(e){var t=e.data,n=Object(o.c)(f),c=Object(o.b)();return Object(a.jsxs)(ye.a,{className:"AttendeeCard",children:[Object(a.jsxs)(Ie.a,{children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("h4",{className:"CardName",children:t.name}),t.new&&Object(a.jsx)("img",{className:"CardNew",src:Be,alt:"First Timer"}),Object(a.jsx)(ke.a,{className:"CardAttending ".concat(t.attendance?"Show":"NoShow"),variant:"outlined",onClick:function(){return c(ae(t.id))},children:Object(a.jsx)(Ee.a,{})})]}),Object(a.jsxs)("section",{children:[!!t.tutorial&&Object(a.jsx)("span",{className:"CardTutorial",children:t.tutorial}),!!t.skills&&Object(a.jsx)("span",{className:"CardSkills",children:t.skills}),Object(a.jsx)("span",{className:"CardNotes",children:t.notes})]})]}),Object(a.jsx)(we.a,{className:"CardLanguages",children:n.map((function(e){return Object(a.jsx)(ke.a,{className:"".concat(e,"Button ").concat(t.languages.includes(e)?"Active":"Inactive"),variant:"contained",color:"primary",onClick:function(){return c(re({id:t.id,language:e}))},children:e})}))})]})}),De=n(231),He=n(235),Pe=n(226),Te=n(225),Re=n(236),Ze=n(232),Ue=(n(173),function(e){var t=e.attendee,n=Object(o.c)(f),r=Object(c.useState)(""),i=Object(Ne.a)(r,2),s=i[0],d=i[1],u=Object(c.useState)(!1),l=Object(Ne.a)(u,2),j=l[0],A=l[1],b=Object(c.useState)(""),g=Object(Ne.a)(b,2),O=g[0],p=g[1],h=Object(c.useState)(""),m=Object(Ne.a)(h,2),x=m[0],v=m[1],C=Object(c.useState)(""),N=Object(Ne.a)(C,2),k=N[0],y=N[1],w=Object(c.useState)(""),I=Object(Ne.a)(w,2),J=I[0],E=I[1],B=Object(c.useState)([]),Q=Object(Ne.a)(B,2),D=Q[0],H=Q[1],P=Object(o.b)(),T=function(e){return"attendee-editor-".concat(e)};Object(c.useEffect)((function(){d(t.name),A(t.attendance),p(t.role),v(t.notes),y(void 0!==t.skills?t.skills:""),E(void 0!==t.tutorial?t.tutorial:""),H(t.languages)}),[t.name,t.attendance,t.role,t.notes,t.skills,t.tutorial,t.languages]);var R=Object(a.jsx)(De.a,{"data-test-id":T("name"),className:"NameInput",label:"Name",value:s,onChange:function(e){return d(e.target.value)},onBlur:function(){return P(_({id:t.id,name:s}))}}),Z=Object(a.jsx)(He.a,{label:"Attendance",labelPlacement:"top",control:Object(a.jsx)(Pe.a,{"data-test-id":T("attendance"),name:"attendance",color:"primary",checked:j,onChange:function(){A(!j),P(ae(t.id))}})}),U=Object(a.jsx)(Te.a,{component:"fieldset",children:Object(a.jsxs)(Re.a,{"aria-label":"role",name:"role",value:O,onChange:function(e){p(e.target.value),P(ce(t.id))},children:[Object(a.jsx)(He.a,{label:"Student",value:"Student",control:Object(a.jsx)(Ze.a,{"data-test-id":T("role-student")})}),Object(a.jsx)(He.a,{label:"Coach",value:"Coach",control:Object(a.jsx)(Ze.a,{"data-test-id":T("role-coach")})})]})}),K=Object(a.jsx)(De.a,{"data-test-id":T("notes"),label:"Notes",fullWidth:!0,multiline:!0,rowsMax:2,value:x,onChange:function(e){return v(e.target.value)},onBlur:function(){return P(ee({id:t.id,notes:x}))}}),F=Object(a.jsx)(De.a,{"data-test-id":T("skills"),label:"Skills",fullWidth:!0,multiline:!0,rowsMax:2,value:k,onChange:function(e){return y(e.target.value)},onBlur:function(){return P(te({id:t.id,skills:k}))}}),G=Object(a.jsx)(De.a,{"data-test-id":T("tutorial"),label:"Tutorial",fullWidth:!0,value:J,onChange:function(e){return E(e.target.value)},onBlur:function(){return P(ne({id:t.id,tutorial:J}))}}),M=Object(a.jsx)("div",{className:"LanguageButtons",children:n.map((function(e){return Object(a.jsx)(ke.a,{"data-test-id":T("language-".concat(e)),className:"".concat(e,"Button ").concat(D.includes(e)?"Active":"Inactive"),variant:"contained",color:"primary",onClick:function(){if(D.includes(e)){var n=D.indexOf(e);H([].concat(Object(S.a)(D.slice(0,n)),Object(S.a)(D.slice(n+1))))}else H([].concat(Object(S.a)(D),[e]));P(re({id:t.id,language:e}))},children:e},e)}))});return Object(a.jsxs)("div",{className:"AttendeeEditor","data-test-id":"attendee-editor",children:[Object(a.jsxs)("div",{className:"Row",children:[R,Z,U]}),Object(a.jsx)("div",{className:"Row",children:K}),Object(a.jsx)("div",{className:"Row",children:F}),Object(a.jsx)("div",{className:"Row",children:G}),Object(a.jsx)("div",{className:"Row",children:M}),Object(a.jsxs)("div",{className:"ComingSoon",children:[Object(a.jsx)("p",{children:Object(a.jsx)("em",{children:"Here we can add more configuration options in the future"})}),Object(a.jsx)("p",{children:Object(a.jsx)("em",{children:"Useful when we want to persist this information and/or auto-calculate pairs"})})]})]})}),Ke=n(227),Fe=n.p+"static/media/newbie.e578ead4.png",Ge=(n(175),function(e){var t=e.attendee,n=e.selected,c=e.onClick,r="".concat(!0===n?"SelectedToEdit":""," ").concat(t.attendance?"IsAttending":"IsNotAttending"),i="Student"===t.role?"fas fa-book-reader":"fas fa-graduation-cap";return Object(a.jsxs)("div",{"data-test-id":"attendee-display-name",className:"AttendeeDisplayName ".concat(r),onClick:c,children:[Object(a.jsx)("img",{className:"FirstTimerIcon ".concat(!1===t.new?"Hidden":""),src:Fe,alt:"First Timer"}),Object(a.jsx)(Ke.a,{className:"RoleIcon ".concat(i)}),Object(a.jsx)("span",{className:"AttendeeNameLabel",children:t.name})]})}),Me=n(188),Le=n(228),We=n(229),ze=(n(176),function(){var e;return Object(o.c)((e="updateAttendeesNewScreen",function(t){return t.toggles[e]}))?Object(a.jsx)(Ye,{}):Object(a.jsx)(Xe,{})}),Ye=function(){var e=Object(c.useState)(void 0),t=Object(Ne.a)(e,2),n=t[0],r=t[1],i=Object(o.c)(oe),s=Object(o.b)(),d=function(e){return"update-attendees-step-".concat(e)},u=Object(a.jsx)("div",{"data-test-id":d("new-attendee"),onClick:function(){return s($({name:"",role:"Student",languages:[],attendance:!0}))},children:Object(a.jsx)(Me.a,{children:Object(a.jsx)(Le.a,{})})}),l=Object(a.jsx)(a.Fragment,{children:i.slice().reverse().map((function(e){return Object(a.jsx)(Ge,{attendee:e,selected:void 0!==n&&n.id===e.id,onClick:function(){return function(e){void 0===n||n.id!==e.id?r(e):r(void 0)}(e)}},e.id)}))});return Object(a.jsxs)("div",{className:"UpdateAttendeesStep",children:[Object(a.jsxs)("div",{className:"UpdateAttendeesStepHeader",children:[Object(a.jsx)("span",{children:"Step 2: Update attendance, skills and add new students or coaches"}),Object(a.jsx)(ke.a,{"data-test-id":d("pairing"),className:"UpdateAttendeesStepDone",variant:"contained",color:"primary",endIcon:Object(a.jsx)(We.a,{}),onClick:function(){return s(ge())},children:"Continue to pairings"})]}),Object(a.jsxs)("div",{className:"UpdateAttendeesStepContent",children:[Object(a.jsxs)("div",{className:"Attendees","data-test-id":d("list"),children:[u,l]}),void 0!==n&&Object(a.jsx)(Ue,{attendee:n})]})]})},Xe=function(){var e=Object(c.useState)(""),t=Object(Ne.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),s=Object(Ne.a)(i,2),d=s[0],u=s[1],l=Object(o.c)(de),j=Object(o.c)(ue),A=Object(o.b)();return Object(a.jsxs)("div",{className:"UpdateAttendeesStep",children:[Object(a.jsxs)("div",{className:"UpdateAttendeesStepHeader",children:[Object(a.jsx)("span",{children:"Step 2: Update attendance, skills and add new students or coaches"}),Object(a.jsx)(ke.a,{className:"UpdateAttendeesStepDone",variant:"contained",color:"primary",endIcon:Object(a.jsx)(We.a,{}),onClick:function(){return A(ge())},children:"Continue to pairings"})]}),Object(a.jsxs)("div",{className:"UpdateAttendeesStepContent",children:[Object(a.jsxs)("div",{className:"Students",children:[Object(a.jsx)("h3",{children:"Students"}),Object(a.jsxs)("div",{className:"AddNew",children:[Object(a.jsx)(De.a,{className:"AddNewName",label:"Name",value:n,onChange:function(e){return r(e.target.value)},fullWidth:!0}),Object(a.jsx)(ke.a,{variant:"outlined",color:"primary",onClick:function(){""!==n&&(A($({name:n,role:"Student",languages:[],attendance:!0})),r(""))},children:"New Student"})]}),l.slice().reverse().map((function(e){return Object(a.jsx)(Qe,{data:e},e.id)}))]}),Object(a.jsxs)("div",{className:"Coaches",children:[Object(a.jsx)("h3",{children:"Coaches"}),Object(a.jsxs)("div",{className:"AddNew",children:[Object(a.jsx)(De.a,{className:"AddNewName",label:"Name",value:d,onChange:function(e){return u(e.target.value)},fullWidth:!0}),Object(a.jsx)(ke.a,{variant:"outlined",color:"primary",onClick:function(){""!==d&&(A($({name:d,role:"Coach",languages:[],attendance:!0})),u(""))},children:"New Coach"})]}),j.slice().reverse().map((function(e){return Object(a.jsx)(Qe,{data:e},e.id)}))]})]})]})},qe=n(230),Ve=n(110),$e="Student",_e="Coach",et=n(233),tt=n(108),nt=n.n(tt),at=(n(177),function(e){var t=e.attendee,n=e.type,c=Object(et.a)({item:{type:n,id:t.id},collect:function(e){return{isDragging:!!e.isDragging()}}}),r=Object(Ne.a)(c,2),i=r[0].isDragging,s=r[1];return Object(a.jsx)("div",{ref:s,className:"Available".concat(n).concat(!0===i?" Dragging":""),children:Object(a.jsx)(ke.a,{className:"Button",variant:"contained",color:"default",endIcon:Object(a.jsx)(nt.a,{}),children:t.name})})}),ct=(n(178),function(e){var t=e.data,n=e.type,c=Object(o.c)(f);return Object(a.jsx)(ye.a,{className:"AttendeeCompactCard",children:Object(a.jsxs)(Ie.a,{className:"CardContent",children:[Object(a.jsx)("section",{children:c.map((function(e){return Object(a.jsx)(ke.a,{className:"".concat(e,"Button ").concat(t.languages.includes(e)?"Active":"Inactive"),variant:"contained",color:"primary",children:e})}))}),Object(a.jsx)(at,{attendee:t,type:n})]})})}),rt=n(234),it=(n(179),function(e){var t=e.groupId,n=e.children,c=Object(o.b)(),r=Object(rt.a)({accept:$e,drop:function(e){return c(T({studentId:e.id,groupId:t}))},collect:function(e){return{isOver:!!e.isOver()}}}),i=Object(Ne.a)(r,2),s=i[0].isOver,d=i[1];return Object(a.jsx)("div",{ref:d,className:"StudentDropzone ".concat(s&&"IsOver"),children:n})}),st=(n(180),function(e){var t=e.groupId,n=e.children,c=Object(o.b)(),r=Object(rt.a)({accept:_e,drop:function(e){return c(P({coachId:e.id,groupId:t}))},collect:function(e){return{isOver:!!e.isOver()}}}),i=Object(Ne.a)(r,2),s=i[0].isOver,d=i[1];return Object(a.jsx)("div",{ref:d,className:"CoachDropzone ".concat(s&&"IsOver"),children:n})}),ot=n(109),dt=n.n(ot),ut=(n(181),function(){var e=Object(o.c)(Z),t=Object(o.c)(U),n=Object(o.c)(K),c=Object(o.b)();return Object(a.jsx)(qe.a,{backend:Ve.a,children:Object(a.jsxs)("div",{className:"PairingsStep",children:[Object(a.jsxs)("div",{className:"PairingsStepHeader",children:[Object(a.jsx)("span",{children:"Step 3: Start organising the pairs by dragging the names of the participants to groups"}),Object(a.jsx)(ke.a,{className:"PairingsStepBack",variant:"contained",color:"primary",startIcon:Object(a.jsx)(dt.a,{}),onClick:function(){return c((function(e){e(R()),e(se())}))},children:"Review attendance and skills"})]}),Object(a.jsxs)("div",{className:"PairingsStepContent",children:[Object(a.jsxs)("div",{className:"Attendees",children:[Object(a.jsx)("h4",{children:"Students"}),Object(a.jsxs)(it,{groupId:0,children:[e.map((function(e){return Object(a.jsx)(ct,{data:e,type:$e})})),0===e.length&&Object(a.jsx)("span",{className:"EmptyDropzone",children:"Drag a student here"})]}),Object(a.jsx)("h4",{children:"Coaches"}),Object(a.jsxs)(st,{groupId:0,children:[t.map((function(e){return Object(a.jsx)(ct,{data:e,type:_e})})),0===t.length&&Object(a.jsx)("span",{className:"EmptyDropzone",children:"Drag a coach here"})]})]}),Object(a.jsxs)("div",{className:"Pairs",children:[Object(a.jsx)("h4",{children:"Pairs"}),n.map((function(e){return Object(a.jsxs)("div",{className:"PairingGroup",children:[Object(a.jsxs)(it,{groupId:e.id,children:[e.students.map((function(e){return Object(a.jsx)(at,{attendee:e,type:$e})})),0===e.students.length&&Object(a.jsx)("span",{className:"EmptyDropzone",children:"Drag a student here"})]}),Object(a.jsxs)(st,{groupId:e.id,children:[e.coaches.map((function(e){return Object(a.jsx)(at,{attendee:e,type:_e})})),0===e.coaches.length&&Object(a.jsx)("span",{className:"EmptyDropzone",children:"Drag a coach here"})]}),Object(a.jsx)("div",{className:"PairingGroupLanguages",children:e.languages.map((function(e){return Object(a.jsx)(ke.a,{className:"".concat(e,"Button Active"),variant:"contained",color:"primary",children:e})}))})]})}))]})]})]})})}),lt=(n(182),function(){var e=Object(o.c)(Ae),t=Object(o.c)(be);return Object(a.jsxs)("div",{className:"PairingTool",children:[!t&&!e&&Object(a.jsx)(Se,{}),!t&&e&&Object(a.jsx)(ze,{}),t&&Object(a.jsx)(ut,{})]})}),jt=(n(183),function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"AppHeader",children:[Object(a.jsx)("img",{alt:"Codebar",src:"data:image/png;base64,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"}),Object(a.jsx)("span",{children:"Pairing Tool"})]}),Object(a.jsx)("div",{className:"AppContent",children:Object(a.jsx)(lt,{})})]})}),At=(n(184),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe;return Object(d.a)({reducer:{toggles:j,configuration:g,attendees:q,pairings:Q},preloadedState:e})}());new URLSearchParams(window.location.search).forEach((function(e,t){return At.dispatch(A({toggle:t,value:e}))})),s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(o.a,{store:At,children:Object(a.jsx)(jt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[185,1,2]]]);
//# sourceMappingURL=main.f85101dc.chunk.js.map