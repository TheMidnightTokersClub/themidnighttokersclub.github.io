(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{245:function(e,n,t){},262:function(e,n){},271:function(e,n){},289:function(e,n){},291:function(e,n){},310:function(e,n){},311:function(e,n){},374:function(e,n){},376:function(e,n){},409:function(e,n){},411:function(e,n){},412:function(e,n){},417:function(e,n){},419:function(e,n){},425:function(e,n){},427:function(e,n){},440:function(e,n){},452:function(e,n){},455:function(e,n){},460:function(e,n){},468:function(e,n){},477:function(e,n){},479:function(e,n){},548:function(e,n,t){},549:function(e,n,t){"use strict";t.r(n);var r,c,a,o,i,s,l,d,u,x,b,j,p,h,g,O,f,m,v,y,C,w,E,A=t(0),T=t.n(A),S=t(98),k=t.n(S),N=(t(245),t(14)),_=t(238),R=t(82),I=t(13),M=I.a.nav(r||(r=Object(N.a)(["\nbackground: #63D471;\nheight: 85px;\ndisplay: flex;\njustify-content: space-between;\npadding: 0.2rem calc((100vw - 1000px) / 2);\nz-index: 12;\n/* Third Nav */\n/* justify-content: flex-start; */\n"]))),D=Object(I.a)(R.b)(c||(c=Object(N.a)(["\ncolor: #808080;\ndisplay: flex;\nalign-items: center;\ntext-decoration: none;\npadding: 0 1rem;\nheight: 100%;\ncursor: pointer;\n&.active {\n\tcolor: #000000;\n}\n"]))),L=Object(I.a)(_.a)(a||(a=Object(N.a)(["\ndisplay: none;\ncolor: #808080;\n@media screen and (max-width: 768px) {\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\ttransform: translate(-100%, 75%);\n\tfont-size: 1.8rem;\n\tcursor: pointer;\n}\n"]))),F=I.a.div(o||(o=Object(N.a)(["\ndisplay: flex;\nalign-items: center;\nmargin-right: -24px;\n/* Second Nav */\n/* margin-right: 24px; */\n/* Third Nav */\n/* width: 100vw;\nwhite-space: nowrap; */\n@media screen and (max-width: 768px) {\n\tdisplay: none;\n}\n"]))),P=(I.a.nav(i||(i=Object(N.a)(["\ndisplay: flex;\nalign-items: center;\nmargin-right: 24px;\n/* Third Nav */\n/* justify-content: flex-end;\nwidth: 100vw; */\n@media screen and (max-width: 768px) {\n\tdisplay: none;\n}\n"]))),Object(I.a)(R.b)(s||(s=Object(N.a)(["\nborder-radius: 4px;\nbackground: #808080;\npadding: 10px 22px;\ncolor: #000000;\noutline: none;\nborder: none;\ncursor: pointer;\ntransition: all 0.2s ease-in-out;\ntext-decoration: none;\n/* Second Nav */\nmargin-left: 24px;\n&:hover {\n\ttransition: all 0.2s ease-in-out;\n\tbackground: #fff;\n\tcolor: #808080;\n}\n"]))),t(1)),z=function(){return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(M,{children:[Object(P.jsx)(L,{}),Object(P.jsxs)(F,{children:[Object(P.jsx)(D,{to:"/home",activeStyle:!0,children:"Home"}),Object(P.jsx)(D,{to:"/about",activeStyle:!0,children:"About"}),Object(P.jsx)(D,{to:"/mint",activeStyle:!0,children:"Mint"}),Object(P.jsx)(D,{to:"/raffles",activeStyle:!0,children:"Raffles"}),Object(P.jsx)(D,{to:"/rewards",activeStyle:!0,children:"Rewards"})]})]})})},K=t(6),U=function(){return Object(P.jsx)("div",{style:{display:"flex",justifyContent:"Right",alignItems:"Right",height:"100vh"},children:Object(P.jsx)("h1",{children:"This is the about page"})})},W=t(5),Y=t.n(W),B=t(19),H=t(12),G=t(38),q=t(46),Q=t.n(q),J=t(81),X=t.n(J),V=t(39),Z=t(100),$=t(21),ee={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CONNECTION_REQUEST":return Object($.a)(Object($.a)({},ee),{},{loading:!0});case"CONNECTION_SUCCESS":return Object($.a)(Object($.a)({},e),{},{loading:!1,account:n.payload.account,smartContract:n.payload.smartContract,web3:n.payload.web3});case"CONNECTION_FAILED":return Object($.a)(Object($.a)({},ee),{},{loading:!1,errorMsg:n.payload});case"UPDATE_ACCOUNT":return Object($.a)(Object($.a)({},e),{},{account:n.payload.account});default:return e}},te={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHECK_DATA_REQUEST":return Object($.a)(Object($.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object($.a)(Object($.a)({},e),{},{loading:!1,totalSupply:n.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object($.a)(Object($.a)({},te),{},{loading:!1,error:!0,errorMsg:n.payload});default:return e}},ce=Object(V.b)({blockchain:ne,data:re}),ae=[Z.a],oe=Object(V.c)(V.a.apply(void 0,ae)),ie=Object(V.d)(ce,oe),se=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},le=function(){return function(){var e=Object(B.a)(Y.a.mark((function e(n){var t;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,ie.getState().blockchain.smartContract.methods.totalSupply().call();case 4:t=e.sent,n({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:t}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),n(se("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}()},de=function(e){return{type:"CONNECTION_FAILED",payload:e}},ue=function(){return function(){var e=Object(B.a)(Y.a.mark((function e(n){var t,r,c,a,o,i,s,l,d;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return c=e.sent,e.next=12,c.json();case 12:if(a=e.sent,o=window,i=o.ethereum,!(i&&i.isMetaMask)){e.next=33;break}return Q.a.setProvider(i),s=new X.a(i),e.prev=18,e.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,i.request({method:"net_version"});case 24:e.sent==a.NETWORK.ID?(d=new Q.a(r,a.CONTRACT_ADDRESS),n({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(e){n(xe(e[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):n(de("Change network to ".concat(a.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),n(de("Something went wrong."));case 31:e.next=34;break;case 33:n(de("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(n){return e.apply(this,arguments)}}()},xe=function(e){return function(){var n=Object(B.a)(Y.a.mark((function n(t){return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t({type:"UPDATE_ACCOUNT",payload:{account:e}}),t(le());case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},be=I.a.div(l||(l=Object(N.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var n=e.image;return n?"url(".concat(n,")"):"none"})),je=I.a.div(d||(d=Object(N.a)(["\n  height: 8px;\n  width: 8px;\n"]))),pe=I.a.div(u||(u=Object(N.a)(["\n  height: 16px;\n  width: 16px;\n"]))),he=I.a.div(x||(x=Object(N.a)(["\n  height: 24px;\n  width: 24px;\n"]))),ge=I.a.div(b||(b=Object(N.a)(["\n  height: 32px;\n  width: 32px;\n"]))),Oe=I.a.div(j||(j=Object(N.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var n=e.flex;return n||0}),(function(e){var n=e.fd;return n||"column"}),(function(e){var n=e.jc;return n||"flex-start"}),(function(e){var n=e.ai;return n||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var n=e.image;return n?"url(".concat(n,")"):"none"})),fe=I.a.p(p||(p=Object(N.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),me=(I.a.p(h||(h=Object(N.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),I.a.p(g||(g=Object(N.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),ve=(I.a.div(O||(O=Object(N.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),I.a.button(f||(f=Object(N.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"])))),ye=I.a.button(m||(m=Object(N.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--secondary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),Ce=I.a.button(v||(v=Object(N.a)(["\n  padding: 20px;\n  border-radius: 15%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 65px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),we=I.a.div(y||(y=Object(N.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),Ee=I.a.img(C||(C=Object(N.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),Ae=(I.a.img(w||(w=Object(N.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 0px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),I.a.a(E||(E=Object(N.a)(["\n  color: white;\n  text-decoration: none;\n"]))));var Te,Se,ke,Ne,_e,Re,Ie,Me=function(){var e,n,t=Object(G.b)(),r=Object(G.c)((function(e){return e.blockchain})),c=Object(G.c)((function(e){return e.data})),a=Object(A.useState)(!1),o=Object(H.a)(a,2),i=o[0],s=o[1],l=Object(A.useState)("Click buy to mint your NFT."),d=Object(H.a)(l,2),u=d[0],x=d[1],b=Object(A.useState)(1),j=Object(H.a)(b,2),p=j[0],h=j[1],g=Object(A.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),O=Object(H.a)(g,2),f=O[0],m=O[1],v=function(){""!==r.account&&null!==r.smartContract&&t(le(r.account))},y=function(){var e=Object(B.a)(Y.a.mark((function e(){var n,t;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,m(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(A.useEffect)((function(){y()}),[]),Object(A.useEffect)((function(){v()}),[r.account]),Object(P.jsx)(be,{children:Object(P.jsxs)(Oe,{flex:1,ai:"center",style:{padding:10,backgroundColor:"var(--primary)"},image:f.SHOW_BACKGROUND?"/config/images/newbg.png":null,children:[Object(P.jsx)(Ee,{alt:"logo",src:"/config/images/spacer.png"}),Object(P.jsx)(pe,{}),Object(P.jsxs)(we,{flex:1,style:{padding:18},test:!0,children:[Object(P.jsx)(ge,{}),Object(P.jsxs)(Oe,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:18,borderRadius:50,border:"0px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(P.jsx)(me,{style:{fontSize:55,fontFamily:"Bangers",textAlign:"center",color:"var(--primary-text)"}}),Object(P.jsx)(fe,{style:{textAlign:"center",fontSize:35,color:"var(--accent-text)"}}),Object(P.jsxs)(me,{style:{textAlign:"center",fontSize:25,color:"var(--primary-text)"},children:[Object(P.jsx)("br",{}),Object(P.jsx)(ve,{onClick:function(e){e.preventDefault(),t(ue()),v()},children:"ACTIVATE"}),Object(P.jsx)(ge,{}),Object(P.jsxs)(Oe,{ai:"center",jc:"center",fd:"row",children:[Object(P.jsx)(Ce,{children:Object(P.jsx)("a",{href:"https://www.themidnighttokersclub.com",children:" HOME "})}),Object(P.jsx)(pe,{}),Object(P.jsx)(Ce,{children:Object(P.jsx)("a",{href:"https://raffle.themidnighttokersclub.com",children:" RAFFLE "})})]}),Object(P.jsx)("br",{}),Object(P.jsx)(Ae,{target:"_blank",href:f.SCAN_LINK,children:(e=f.CONTRACT_ADDRESS,n=15,e.length>n?"".concat(e.substring(0,n),"..."):e)})]}),Object(P.jsx)(pe,{}),Number(c.availableTokenCount)>=f.MAX_SUPPLY?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(fe,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(P.jsxs)(me,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",f.NFT_NAME," on"]}),Object(P.jsx)(pe,{}),Object(P.jsx)(Ae,{target:"_blank",href:f.MARKETPLACE_LINK,children:f.MARKETPLACE})]}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(fe,{style:{textAlign:"center",color:"var(--sales-text)"},children:["1 ",f.SYMBOL," costs ",f.DISPLAY_COST," ",f.NETWORK.SYMBOL,"."]}),Object(P.jsx)(je,{}),Object(P.jsx)(me,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(P.jsx)(pe,{}),""===r.account||null===r.smartContract?Object(P.jsxs)(Oe,{ai:"center",jc:"center",children:[Object(P.jsxs)(me,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",f.NETWORK.NAME," network"]}),Object(P.jsx)(pe,{}),Object(P.jsx)(ve,{onClick:function(e){e.preventDefault(),t(ue()),v()},children:"CONNECT"}),""!==r.errorMsg?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(pe,{}),Object(P.jsx)(me,{style:{textAlign:"center",color:"var(--accent-text)"},children:r.errorMsg})]}):null]}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(me,{style:{textAlign:"center",color:"var(--accent-text)"},children:u}),Object(P.jsx)(he,{}),Object(P.jsxs)(Oe,{ai:"center",jc:"center",fd:"row",children:[Object(P.jsx)(ye,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=p-1;e<1&&(e=1),h(e)}()},children:"-"}),Object(P.jsx)(he,{}),Object(P.jsx)(me,{style:{textAlign:"center",color:"var(--accent-text)"},children:p}),Object(P.jsx)(he,{}),Object(P.jsx)(ye,{disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=p+1;e>20&&(e=20),h(e)}()},children:"+"})]}),Object(P.jsx)(pe,{}),Object(P.jsx)(Oe,{ai:"center",jc:"center",fd:"row",children:Object(P.jsx)(ve,{disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=f.WEI_COST,n=f.GAS_LIMIT,c=String(e*p),a=String(n*p);console.log("Cost: ",c),console.log("Gas limit: ",a),x("Minting your ".concat(f.NFT_NAME,"...")),s(!0),r.smartContract.methods.mint(p).send({gasLimit:String(a),maxPriorityFeePerGas:null,maxFeePerGas:null,to:f.CONTRACT_ADDRESS,from:r.account,value:c}).once("error",(function(e){console.log(e),x("Please manually set the gas fee in your metamask."),s(!1)})).then((function(e){console.log(e),x("This ".concat(f.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),t(le(r.account))}))}(),v()},children:i?"BUSY":"BUY"})})]})]}),Object(P.jsx)(he,{})]}),Object(P.jsx)(ge,{})]}),Object(P.jsx)(he,{}),Object(P.jsxs)(Oe,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(P.jsx)(me,{style:{textAlign:"center",color:"var(--primary-text)"}}),Object(P.jsx)(pe,{}),Object(P.jsx)(me,{style:{textAlign:"center",color:"var(--primary-text)"}})]})]})})},De=t(22),Le={loading:!0,account:null,smartContract:null,web3:null,errorMsg:""},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CONNECTION_REQUEST":return Object($.a)(Object($.a)({},Le),{},{loading:!0});case"CONNECTION_SUCCESS":return Object($.a)(Object($.a)({},e),{},{loading:!1,account:n.payload.account,smartContract:n.payload.smartContract,web3:n.payload.web3});case"CONNECTION_FAILED":return Object($.a)(Object($.a)({},Le),{},{loading:!1,errorMsg:n.payload});case"UPDATE_ACCOUNT":return Object($.a)(Object($.a)({},e),{},{account:n.payload.account});default:return e}},Pe={loading:!1,totalSupply:0,getMaxEntries:0,getNumTickets:0,currentEntries:0,cost:0,error:!1,errorMsg:""},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHECK_DATA_REQUEST":return Object($.a)(Object($.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object($.a)(Object($.a)({},e),{},{loading:!1,getPlayerTickets:n.payload.getPlayerTickets,getMaxEntries:n.payload.getMaxEntries,getWinners:n.payload.getWinners,numWinners:n.payload.numWinners,raffleLive:n.payload.raffleLives,getNumTickets:n.payload.getNumTickets,currentEntries:n.payload.currentEntries,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object($.a)(Object($.a)({},Pe),{},{loading:!1,error:!0,errorMsg:n.payload});default:return e}},Ke=Object(V.b)({blockchain:Fe,data:ze}),Ue=[Z.a],We=Object(V.c)(V.a.apply(void 0,Ue)),Ye=Object(V.d)(Ke,We),Be=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},He=function(){return function(){var e=Object(B.a)(Y.a.mark((function e(n){var t,r,c,a,o,i,s;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,Ye.getState().blockchain.smartContract.methods.getPlayerTickets(ethereum.selectedAddress).call();case 4:return t=e.sent,e.next=7,Ye.getState().blockchain.smartContract.methods.getMaxEntries(ethereum.selectedAddress).call();case 7:return r=e.sent,e.next=10,Ye.getState().blockchain.smartContract.methods.getWinners().call();case 10:return c=e.sent,e.next=13,Ye.getState().blockchain.smartContract.methods.numWinners().call();case 13:return a=e.sent,e.next=16,Ye.getState().blockchain.smartContract.methods.raffleLive().call();case 16:return o=e.sent,e.next=19,Ye.getState().blockchain.smartContract.methods.getNumTickets().call();case 19:return i=e.sent,e.next=22,Ye.getState().blockchain.smartContract.methods.currentEntries(ethereum.selectedAddress).call();case 22:s=e.sent,n({type:"CHECK_DATA_SUCCESS",payload:{getPlayerTickets:t,getWinners:c,numWinners:a,getMaxEntries:r,raffleLive:o,getNumTickets:i,currentEntries:s}}),e.next=30;break;case 26:e.prev=26,e.t0=e.catch(1),console.log(e.t0),n(Be("Could not load data from contract."));case 30:case"end":return e.stop()}}),e,null,[[1,26]])})));return function(n){return e.apply(this,arguments)}}()},Ge=function(e){return{type:"CONNECTION_FAILED",payload:e}},qe=function(){return function(){var e=Object(B.a)(Y.a.mark((function e(n){var t,r,c,a,o,i,s,l,d;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abiRaffle.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return c=e.sent,e.next=12,c.json();case 12:if(a=e.sent,o=window,i=o.ethereum,!(i&&i.isMetaMask)){e.next=33;break}return Q.a.setProvider(i),s=new X.a(i),e.prev=18,e.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,i.request({method:"net_version"});case 24:e.sent==a.NETWORK.ID?(d=new Q.a(r,a.RAFFLE_CONTRACT_ADDRESS),n({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(e){n(Qe(e[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):n(Ge("Change network to ".concat(a.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),n(Ge("Something went wrong."));case 31:e.next=34;break;case 33:n(Ge("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(n){return e.apply(this,arguments)}}()},Qe=function(e){return function(){var n=Object(B.a)(Y.a.mark((function n(t){return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t({type:"UPDATE_ACCOUNT",payload:{account:e}}),t(He());case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},Je=I.a.button(Te||(Te=Object(N.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),Xe=I.a.button(Se||(Se=Object(N.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--secondary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),Ve=I.a.div(ke||(ke=Object(N.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),Ze=(I.a.img(Ne||(Ne=Object(N.a)(["\n  width: 275px;\n  @media (min-width: 767px) {\n    width: 600px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n  \n"]))),I.a.img(_e||(_e=Object(N.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),I.a.a(Re||(Re=Object(N.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])))),$e=I.a.a(Ie||(Ie=Object(N.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var en,nn,tn,rn,cn,an=function(){var e=Object(G.b)(),n=Object(G.c)((function(e){return e.blockchain})),t=Object(G.c)((function(e){return e.data})),r=Object(A.useState)(!1),c=Object(H.a)(r,2),a=c[0],o=c[1],i=Object(A.useState)(""),s=Object(H.a)(i,2),l=s[0],d=(s[1],Object(A.useState)("Each Toker grants you access to two tickets.")),u=Object(H.a)(d,2),x=u[0],b=u[1],j=Object(A.useState)(1),p=Object(H.a)(j,2),h=p[0],g=p[1],O=Object(A.useState)({RAFFLE_CONTRACT_ADDRESS:"",RAFFLE_SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},RAFFLE_NAME:"",SYMBOL:"",MAX_SUPPLY:1,TICKET_WEI_COST:0,TICKET_DISPLAY_COST:0,GAS_LIMIT:0,MINT_PAGE:"",PROJECT_LINK:"",SHOW_BACKGROUND:!1}),f=Object(H.a)(O,2),m=f[0],v=f[1],y=Object(A.useState)({PRIZE:"",LIVE:""}),C=Object(H.a)(y,2),w=C[0],E=C[1],T=function(){""!==n.account&&null!==n.smartContract&&e(He(n.account))},S=function(){var e=Object(B.a)(Y.a.mark((function e(){var n,t;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,v(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(A.useEffect)((function(){S()}),[]),Object(A.useEffect)((function(){T()}),[n.account]);var k=[t.getPlayerTickets].join(","),N=[t.getWinners].join(","),_=([t.tokenCount].join(","),ethereum.selectedAddress),R=t.numWinners,I=w.PRIZE,M=t.getNumTickets,D=t.currentEntries;console.log({tickets:k}),console.log({winners:N}),console.log({addy:_}),console.log({numWinners:R}),console.log({rafflePrize:I}),console.log({numTickets:M}),console.log({currentEntries:D});var L,F,z=function(){var e=Object(B.a)(Y.a.mark((function e(){var n,t;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/rewards.json");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,E(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(A.useEffect)((function(){z()}),[]),Object(P.jsx)(be,{children:Object(P.jsx)(Oe,{flex:1,ai:"center",style:{padding:10,backgroundColor:"var(--primary)"},image:m.SHOW_BACKGROUND?"/config/images/bg_2.png":null,children:Object(P.jsx)(Ve,{flex:1,style:{padding:18},test:!0,children:Object(P.jsxs)(Oe,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:18,borderRadius:50,boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(P.jsx)(Je,{onClick:function(n){n.preventDefault(),e(qe()),T()},children:"ENTER"}),Object(P.jsx)(ge,{}),Object(P.jsx)(me,{style:{fontSize:55,fontFamily:"Bangers",textAlign:"center",color:"var(--primary-text)"}}),Object(P.jsxs)(me,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Contract Address:",Object(P.jsx)("br",{}),Object(P.jsx)(Ze,{target:"_blank",href:m.RAFFLE_SCAN_LINK,children:(L=m.RAFFLE_CONTRACT_ADDRESS,F=15,L.length>F?"".concat(L.substring(0,F),"..."):L)})]}),Object(P.jsx)(fe,{style:{textAlign:"center",fontSize:25,fontWeight:"bold",color:"var(--accent-text)"}}),Object(P.jsx)(pe,{}),Number(t.totalSupply)>=m.MAX_SUPPLY?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(fe,{style:{textAlign:"center",color:"var(--accent-text)"},children:"OH SNAP.. Something Went Wrong."}),Object(P.jsx)(me,{style:{textAlign:"center",color:"var(--accent-text)"},children:"...Raffles might not be active."}),Object(P.jsx)(pe,{})]}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(fe,{style:{textAlign:"center",color:"var(--accent-text)"},children:[l,"You must have at least one Midnight Toker in your wallet to participate.",Object(P.jsx)("br",{}),"If you do not have any please visit the",Object(P.jsx)($e,{a:!0,href:"https://www.themidnighttokersclub.com/index.html",children:" Mint Page"}),Object(P.jsx)("br",{})]}),Object(P.jsxs)(fe,{style:{textAlign:"center",color:"var(--sales-text)"},children:["1 ",m.TICKET," costs ",m.TICKET_DISPLAY_COST," ",m.NETWORK.SYMBOL,"."]}),Object(P.jsx)(me,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(P.jsx)(pe,{}),""===n.account||null===n.smartContract?Object(P.jsxs)(Oe,{ai:"center",jc:"center",children:[Object(P.jsxs)(me,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",m.NETWORK.NAME," network"]}),Object(P.jsx)(pe,{}),Object(P.jsx)(Je,{onClick:function(n){n.preventDefault(),e(qe()),T()},children:"CONNECT"}),""!==n.errorMsg?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(pe,{}),Object(P.jsx)(me,{style:{textAlign:"center",color:"var(--accent-text)"},children:n.errorMsg})]}):null]}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(me,{style:{textAlign:"center",color:"var(--accent-text)"},children:[x,Object(P.jsx)("br",{}),"You can buy a maximum of ",t.getMaxEntries," tickets. ",Object(P.jsx)("br",{}),Object(P.jsx)("br",{}),"Is Raffle Active? ",w.LIVE," ",Object(P.jsx)("br",{}),"Raffle Prize is: ",w.PRIZE," ",Object(P.jsx)("br",{}),Object(P.jsx)("br",{}),"You own ",t.currentEntries," out of ",t.getNumTickets," tickets. ",Object(P.jsx)("br",{}),"Your Tickets: ",k," ",Object(P.jsx)("br",{}),"Winning Tickets: ",N," ",Object(P.jsx)("br",{}),"Total Winners: ",t.numWinners," ",Object(P.jsx)("br",{})]}),Object(P.jsx)(he,{}),Object(P.jsxs)(Oe,{ai:"center",jc:"center",fd:"row",children:[Object(P.jsx)(Xe,{style:{lineHeight:.4},disabled:a?1:0,onClick:function(e){e.preventDefault(),function(){var e=h-1;e<1&&(e=1),g(e)}()},children:"-"}),Object(P.jsx)(he,{}),Object(P.jsx)(me,{style:{textAlign:"center",color:"var(--accent-text)"},children:h}),Object(P.jsx)(he,{}),Object(P.jsx)(Xe,{disabled:a?1:0,onClick:function(e){e.preventDefault(),function(){var e=h+1;e>25&&(e=25),g(e)}()},children:"+"})]}),Object(P.jsx)(pe,{}),Object(P.jsx)(Oe,{ai:"center",jc:"center",fd:"row",children:Object(P.jsx)(Je,{disabled:a?1:0,onClick:function(t){t.preventDefault(),function(){var t,r=m.TICKET_WEI_COST,c=m.GAS_LIMIT,a=String(r*h),i=String(c*h);console.log("Cost: ",a),console.log("Gas limit: ",i),b("Grabbin' yo tickets!"),o(!0),n.smartContract.methods.enterRaffle(h).send((t={gasLimit:String(i)},Object(De.a)(t,"gasLimit",String(i)),Object(De.a)(t,"maxPriorityFeePerGas",null),Object(De.a)(t,"maxFeePerGas",null),Object(De.a)(t,"to",m.RAFFLE_CONTRACT_ADDRESS),Object(De.a)(t,"from",n.account),Object(De.a)(t,"value",a),t)).once("error",(function(e){console.log(e),b(e.message),o(!1)})).then((function(t){console.log(t),b("Your tickets have been purchased! Refresh the page if your tickets don't show."),o(!1),e(He(n.account))}))}(),T()},children:a?"BUSY":"BUY"})})]})]})]})})})})},on=function(){return Object(P.jsx)("div",{style:{display:"flex",justifyContent:"Right",alignItems:"Right",height:"100vh"},children:Object(P.jsx)("h1",{children:"Annual Report"})})},sn=t(8),ln=t(10),dn=t(16),un=t(17),xn=I.a.div(en||(en=Object(N.a)(["\n  z-index:-10;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  background-image: url('https://i.redd.it/78sv3hevebqy.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: rgba(0, 0, 0, 0.5);\n  background-blend-mode: darken;\n"]))),bn=I.a.h1(nn||(nn=Object(N.a)(["\ntext-align:center;\n  font-size: 75px;\n  color: #eee;\n  margin: 15px;\n  font-weight: 100;\n  @media (max-width: 850px) {\n    font-size: 55px;\n  }\n  @media (max-width: 650px) {\n    font-size: 30px;\n  }\n"]))),jn=I.a.button(tn||(tn=Object(N.a)(["\n  z-index:20;\n  background-color: transparent;\n  cursor: pointer;\n  color: white;\n  border: 1px solid white;\n  padding: 5px;\n  margin:5px;\n  transition-property: color,border, border-radius;\n  transition-duration: .5s, .5s, .5s;\n  transition-timing-function: linear;\n  border-radius: 10px;\n  outline: none;\n  &:hover {\n    border-radius:0;\n    border: 1px solid red;\n    color: red;\n  }\n"]))),pn=Object(I.b)(rn||(rn=Object(N.a)(["\n0%{left:0;bottom:0;}\n25%{left:-10px;bottom:0;}\n50%{left:10px;bottom:15px;}\n75%{left:0px;bottom:0;}\n80%{left:15px;bottom:10px;}\n100%{left:0px;bottom:0;}\n"]))),hn=(I.a.div(cn||(cn=Object(N.a)(["\n  animation: ","\n  z-index:10;\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 100vh;\n  background-image: url('https://i.redd.it/78sv3hevebqy.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 0.1;\n  overflow: hidden;\n\n"])),(function(e){return e.Buzz?"".concat(pn," 0.5s ease-in"):""})),function(e){Object(dn.a)(t,e);var n=Object(un.a)(t);function t(e){var r;return Object(sn.a)(this,t),(r=n.call(this,e)).state={Buzz:!1},r}return Object(ln.a)(t,[{key:"handleClick",value:function(){this.setState((function(e){return{Buzz:!e.Buzz}}))}},{key:"render",value:function(){var e=this;return Object(P.jsxs)(xn,{children:[Object(P.jsx)(bn,{children:"The Midnight Tokers Club"}),Object(P.jsx)(jn,{onMouseEnter:function(){return e.handleClick()},onMouseLeave:function(){return e.handleClick()},children:Object(P.jsx)("a",{href:"/about",children:"  JOIN THE DARKSIDE "})})]})}}]),t}(T.a.Component));var gn=function(){return Object(P.jsxs)(R.a,{children:[Object(P.jsx)(z,{}),Object(P.jsxs)(K.c,{children:[Object(P.jsx)(K.a,{path:"/home",element:Object(P.jsx)(hn,{}),exact:!0}),Object(P.jsx)(K.a,{path:"/about",element:Object(P.jsx)(U,{}),exact:!0}),Object(P.jsx)(K.a,{path:"/mint",element:Object(P.jsx)(Me,{}),exact:!0}),Object(P.jsx)(K.a,{path:"/raffles",element:Object(P.jsx)(an,{}),exact:!0}),Object(P.jsx)(K.a,{href:"https://rewards.themidnighttokersclub.com/",element:Object(P.jsx)(on,{}),exact:!0})]})]})},On=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,553)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),r(e),c(e),a(e),o(e)}))};t(548);k.a.render(Object(P.jsx)(T.a.StrictMode,{children:Object(P.jsx)(G.a,{store:Ye,children:Object(P.jsx)(gn,{})})}),document.getElementById("root")),On()}},[[549,1,2]]]);
//# sourceMappingURL=main.e3ad26af.chunk.js.map