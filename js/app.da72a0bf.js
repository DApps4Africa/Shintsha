(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],d=0,u=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(u.length)u.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var p=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"21b8":function(t,e,s){t.exports=s.p+"img/join.c94cb38d.jpg"},2211:function(t,e,s){t.exports=s.p+"img/spha.6989ab4a.jpg"},"32d8":function(t,e,s){t.exports=s.p+"img/owans.f394a680.jpg"},"32e7":function(t,e,s){t.exports=s.p+"img/pape.e771d64d.jpg"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-app-bar",{staticClass:"nav-header",attrs:{app:"",flat:"",dark:""}},[a("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:{center:!0},expression:"{ center: true }"}],staticClass:"websiteFont",attrs:{height:"64px",text:""}},[a("v-toolbar-title",{staticClass:"websiteFont",on:{click:function(e){return t.$vuetify.goTo(t.home,t.options)}}},[t._v("Shintsha")])],1),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},t._l(t.menu,(function(e){return a("v-btn",{key:e.title,attrs:{text:""},on:{click:function(s){return t.$vuetify.goTo(e.to,t.options)}}},[t._v(" "+t._s(e.title)+" ")])})),1),a("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-app-bar-nav-icon",t._g({staticClass:"hidden-md-and-up",attrs:{slot:"activator"},slot:"activator"},s))]}}])},[a("v-list",t._l(t.menu,(function(e){return a("v-list-item",{key:e.title,on:{click:function(s){return t.gotTo(e.to)}}},[a("v-list-item-content",[a("v-list-item-title",{attrs:{href:e.to}},[t._v(t._s(e.title))])],1)],1)})),1)],1)],1),a("v-content",[a("v-container",{staticClass:"fill-height spanwidth",attrs:{justify:"center",align:"center"}},[a("v-row",[a("v-row",[a("v-col",{staticClass:"atf-wrap",attrs:{id:"home"}},[a("v-flex",{staticClass:"col-wrap col-wrap-flex"},[a("div",{staticClass:"row-container"},[a("div",{staticClass:"left-col-atf"},[a("div",{staticClass:"app-header text-center",attrs:{justify:"center"}},[a("h1",[t._v("Shintsha ")]),a("h2",[t._v("A Decentralized Online Market built on "),a("i",{staticClass:"fa fa-ethereum",attrs:{"aria-hidden":"true"}}),t._v(" Ethereum Connecting Farmers with Buyers In Minutes!!!")])]),a("div",{staticClass:"cta-container"},t._l(t.supportedMediaButtons,(function(e,s){return a("div",{directives:[{name:"ripple",rawName:"v-ripple",value:{center:!0},expression:"{ center: true }"}],key:s,staticClass:"playstore-div"},[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(s){var i=s.on;return[a("a",t._g({staticClass:"cta-btn playstore-btn",attrs:{href:e.href},on:{click:function(s){return t.activateStep(e.command)}}},i),[a("i",{class:e.class})])]}}],null,!0)},[a("span",[t._v(t._s(e.description))])])],1)})),0)])])]),a("v-row",{staticClass:"pad_left ",attrs:{justify:"center",align:"center"}},[a("div",{staticClass:"app-image text-center"},[a("figure",[a("div",{staticClass:"base"},[a("div",{staticClass:"buttons-left"},[a("div",{staticClass:"volume"}),a("div",{staticClass:"assistant"})]),a("div",{staticClass:"lock"}),a("div",{staticClass:"front"},[a("div",{staticClass:"top"},[a("div",{staticClass:"sensor sensor-tiny"}),a("div",{staticClass:"sensor sensor-large"}),a("div",{staticClass:"sensor sensor-medium"}),a("div",{staticClass:"sensor sensor-tiny"}),a("div",{staticClass:"speaker"}),a("div",{staticClass:"camera"}),a("div",{staticClass:"sensor sensor-tiny"})]),a("div",{directives:[{name:"ripple",rawName:"v-ripple",value:{center:!0},expression:"{ center: true }"}],staticClass:"screen"})])])])])])],1),a("main",{staticClass:"below-the-fold",attrs:{id:"btf-section"}},[a("section",{staticClass:"why-our-app",attrs:{id:"how_it_works"}},[a("div",{staticClass:"woa-wrap text-center"},[a("div",{staticClass:"row-container"},[a("div",{staticClass:"woa-title"},[a("h1",[t._v("How It Works?")])]),a("div",{staticClass:"col-container-woa"},[a("div",{staticClass:"left-col-woa"},[a("div",{staticClass:"heading_font"},[a("h1",[t._v("Farmer")])]),t._l(t.instructionsFarmer,(function(e,s){return a("ul",{key:s},[a("h3",{staticClass:"h3"},[t._v(t._s(e.title))]),a("li",{staticClass:"row-flex-it"},[a("i",{class:e.iconName}),a("span",{staticClass:"list-text"},[t._v(t._s(e.text))]),a("br")])])}))],2),a("div",{staticClass:"right-col-woa"},[a("div",{staticClass:"heading_font"},[a("h1",[t._v("Consumer")])]),t._l(t.instructionsConsumers,(function(e,s){return a("ul",{key:s},[a("h3",{staticClass:"h3"},[t._v(t._s(e.title))]),a("li",{staticClass:"row-flex-it"},[a("i",{class:e.iconName}),a("p",{staticClass:"list-text ow"},[t._v(t._s(e.text))])])])}))],2)])])])])]),a("v-col",{staticClass:"pad_top pad_left_small",attrs:{id:"use_cases"}},[a("main",{attrs:{id:"btf-section"}},[a("section",{staticClass:"why-our-app",attrs:{id:"use_cases"}},[a("div",{staticClass:"woa-wrap text-center"},[a("div",{staticClass:"row-container"},[a("div",{staticClass:"woa-title"},[a("h2",[t._v("Shintsha Use Cases")])]),a("v-container",{staticClass:"col-container-woa"},[a("v-row",t._l(t.usecases,(function(e,s){return a("v-col",{key:s,attrs:{cols:"12",md:"6"}},[a("v-card",{directives:[{name:"ripple",rawName:"v-ripple",value:{center:!0},expression:"{ center: true }"}],staticClass:"mx-auto",attrs:{"max-width":"390"}},[a("v-img",{attrs:{src:e.img,height:"300px",width:"100%",contain:""}}),a("div",{staticClass:"text-xs-center"},[a("v-card-title",{staticClass:"card_title_style pa-2",staticStyle:{width:"100%",padding:"0%",display:"inline-block","font-weight":"bold",color:"black"}},[t._v(" "+t._s(e.title)+" ")])],1),a("v-divider"),a("v-card-text",{staticClass:"card_content"},[t._v(" "+t._s(e.text)+" ")])],1)],1)})),1)],1)],1)])])])])],1),a("v-row",{staticClass:"green_blue"},t._l(t.accoladesList,(function(e,s){return a("v-col",{key:s,staticClass:"d-flex child-flex pad_bot_top",attrs:{cols:"12",md:"4"}},[a("v-card",{directives:[{name:"ripple",rawName:"v-ripple",value:{center:!0},expression:"{ center: true }"}],staticClass:"mx-auto",attrs:{"max-width":"390"}},[a("v-img",{staticClass:"white--text align-end",attrs:{"aspect-ratio":16/9,contain:"",height:"250px",src:e.image}}),a("v-card-text",{staticClass:"text--primary"},[a("div",{staticClass:"acc_font_size"},[a("a",{attrs:{href:e.url}},[t._v(t._s(e.text))])])])],1)],1)})),1),a("v-row",[a("v-footer",{staticStyle:{width:"100%"},attrs:{dark:"",padless:""}},[a("v-card",{staticClass:" nav-header lighten-1 white--text text-center",staticStyle:{width:"100%"},attrs:{flat:""}},[a("v-card-text",[a("a",{attrs:{href:"mailto:dapps4Africa@yahoo.com"}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",{staticClass:"mx-4 white--text",attrs:{icon:""}},[a("v-icon",t._g({attrs:{size:"30px"}},s),[t._v("fa fa-envelope")])],1)]}}])},[a("span",[t._v("Send Email")])])],1)]),a("v-card-text",{staticClass:"white--text pt-1 footer_font"},[t._v(" Contact Us ")]),a("a",{attrs:{href:"mailto:dapps4Africa@yahoo.com"}},[a("v-card-text",{staticClass:"white--text pt-1 footer_font"},[t._v(" "+t._s(t.email)+" ")])],1),a("v-divider"),a("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Shinstha")])])],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{"max-width":"600"},model:{value:t.whatsAppSteps,callback:function(e){t.whatsAppSteps=e},expression:"whatsAppSteps"}},[[a("v-stepper",{model:{value:t.whatsAppNext,callback:function(e){t.whatsAppNext=e},expression:"whatsAppNext"}},[a("v-stepper-header",{staticClass:"green_blue"},[a("v-stepper-step",{attrs:{step:"1"}},[t._v("Alert")]),a("v-divider"),a("v-stepper-step",{attrs:{step:"2"}},[t._v("SandBox")]),a("v-divider"),a("v-stepper-step",{attrs:{step:"3"}},[t._v("Activation")]),a("v-divider"),a("v-stepper-step",{attrs:{step:"4"}},[t._v("Done")])],1),a("v-stepper-items",[a("v-stepper-content",{attrs:{step:"1"}},[a("v-card",{staticClass:"mb-12",attrs:{color:"lighten-1"}},[a("v-container",[a("v-card-text",{staticClass:"text-center"},[t._v(" Please note this is a beta version of the steps required to use the "),a("b",[t._v("Shintsha")]),t._v(" Platform in the near future these steps will change as this version is the initial MVP ")])],1)],1),a("v-btn",{attrs:{color:"green"},on:{click:function(e){t.whatsAppNext=2}}},[t._v(" Continue ")]),a("v-btn",{attrs:{text:""},on:{click:function(e){t.whatsAppSteps=!1}}},[t._v("Cancel")])],1),a("v-stepper-content",{attrs:{step:"2"}},[a("v-card",{staticClass:"mb-12",attrs:{color:"lighten-1"}},[a("v-container",[a("v-card-text",{staticClass:"text-center"},[t._v(" Save the following number "),a("br"),a("b",[t._v("+14155238886")]),t._v(" "),a("br"),t._v(" as a contact on your mobile device Preferably as "),a("b",[t._v("Shintsha")])])],1)],1),a("v-btn",{attrs:{color:"green"},on:{click:function(e){t.whatsAppNext=3}}},[t._v(" Continue ")]),a("v-btn",{attrs:{text:""},on:{click:function(e){t.whatsAppSteps=!1}}},[t._v("Cancel")])],1),a("v-stepper-content",{attrs:{step:"3"}},[a("v-card",{staticClass:"mb-12",attrs:{color:"lighten-1"}},[a("v-container",[a("v-card-text",{staticClass:"text-center"},[t._v(" Once the number is saved send the "),a("b",[t._v("Join using-forth")]),t._v(" command illustrated by the screenshot below ")]),a("v-card-text",{staticClass:"text-center"},[a("v-img",{attrs:{src:s("21b8")}})],1)],1)],1),a("v-btn",{attrs:{color:"green"},on:{click:function(e){t.whatsAppNext=4}}},[t._v(" Continue ")]),a("v-btn",{attrs:{text:""},on:{click:function(e){t.whatsAppSteps=!1}}},[t._v("Cancel")])],1),a("v-stepper-content",{attrs:{step:"4"}},[a("v-card",{staticClass:"mb-12",attrs:{color:"lighten-1"}},[a("v-container",[a("v-card-text",{staticClass:"text-center"},[t._v(" Once the number is saved send the following command "),a("b",[t._v("Menu")]),t._v(" illustrated by the screenshot below ")]),a("v-card-text",{staticClass:"text-center"},[a("v-img",{attrs:{src:s("6e8f")}})],1)],1)],1),a("v-btn",{attrs:{color:"green"},on:{click:function(e){t.whatsAppNext=1}}},[t._v(" Continue ")]),a("v-btn",{attrs:{text:""},on:{click:function(e){t.whatsAppSteps=!1}}},[t._v("Cancel")])],1)],1)],1)]],2)],1)],1)],1)],1)],1),a("v-row",{attrs:{id:"contact","no-gutters":""}})],1)},n=[],r=s("3d20"),o=s.n(r),c={components:{},data:function(){return{menu:[{to:"#how_it_works",title:"How It Works?"},{to:"#use_cases",title:"Use Cases"},{to:"#contact",title:"Contact"}],instructionsFarmer:[{text:"Farmers can create an account on the Shintsha platform through the different supported mediums.",iconName:"fas fa-user-edit",title:"Create Account"},{text:"Farmers can use the Shintsha platform to register their crops",iconName:"fas fa-plus",title:"Crop Listing"},{text:"Farmers can interact with the different harvests or Produce listed on the Shintsha platform which interacts with blockchain",iconName:"fas fa-exchange-alt",title:"Access to Consumers"},{text:"Through the use of the Blockchain, new business models are enabled which enable farmers to, CrowdFund, and sell their products directly to consumers",iconName:"fa fa-ethereum",title:"Business Models"}],instructionsConsumers:[{text:"Consumers can create an account through<br> the supported mediums.",iconName:"fas fa-user-edit",title:"Create Account"},{text:"Consumers can use the Shinstha platform to purchase crops listed by farmers directly",iconName:"fa fa-ethereum",title:"Purchase Crops"}],usecases:[{img:"./assets/usecases/proof-of-crop.jpg",text:"Shintsha Uses Smart Contracts to give transparency and proof of ownership of crops listed by Farmers, which enables trust amongt all actors of the shintsha platform value chain",title:"Proof of Crop"},{img:"./assets/usecases/business-model.jpg",text:"Shintsha allows the creation of new business models and decentralized finances such crowdfunding, and decentralised loans for farmers",title:"Business Models"},{img:"./assets/usecases/supply-chain1.jpg",text:"Farmers who list their crops on Shintsha will allow consumers to easily trace the origin of the crop through different supported mediums",title:"Supply Chain"},{img:"./assets/usecases/delivery.png",text:"Members of the Community can signup to deliver crops and earn",title:"Community Driven Delivery Services"}],profiles:[{name:"Owanate Amachree",role:"Backend Developer and Technical Writer",about:"Project Shintsha Developer",github:"https://github.com/owans",img:s("32d8")},{name:"Badara Diakhate",role:"Blockchain Developer, React Developer",about:"Project Shintsha Developer",github:"#",img:s("32e7")},{name:"Siphamandla Mjoli",role:"Blockchain Engineer, Blockchain Game Developer",about:"Project Shintsha Developer",github:"https://github.com/Brianspha",img:s("2211")}],icons:[{icon:"fab fa-google-plus",description:"Send Email"}],email:"dapps4Africa@yahoo.com",supportedMediaButtons:[{href:"#",class:"fas fa-sms",description:"SMS",command:"SMS"},{href:"#",class:"fa fa-desktop",description:"Web App",command:"WebApp"},{href:"#",class:"fab fa-whatsapp",description:"WhatsApp",command:"WhatsApp"}],whatsAppSteps:!1,whatsAppNext:0,accoladesList:[{text:"Overall Winners of the Road to Devcon Open Finance Bounty",image:"./assets/road_to_devcon1.png",url:"https://gitcoin.co/hackathon/road-to-devcon/?"},{text:"Consensys Lab Realy Alumni",image:"./assets/labs.png",url:"https://labs.consensys.net/relays"},{text:"Joint Winners of the Decentralised Research Award by Consensys Labs",image:"./assets/labs.png",url:"https://github.com/ConsenSys/Road-To-Devcon-Relay/issues/3"}],duration:600,offset:0,easing:"easeInOutQuad",home:"#home"}},mounted:function(){this.warnUser()},methods:{options:function(){return{duration:this.duration,offset:this.offset,easing:this.easing}},warnUser:function(){o.a.fire({title:"Beta",text:"This Website is under development",icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6"})},gotTo:function(t){},activateStep:function(t){switch(t){case"WhatsApp":this.whatsAppSteps=!0;break;default:break}},onScroll:function(t){this.offsetTop=t.target.scrollTop}}},l=c,p=(s("7e97"),s("2877")),d=s("6544"),u=s.n(d),v=s("7496"),h=s("40dc"),f=s("5bc1"),m=s("8336"),b=s("b0af"),C=s("99d9"),w=s("62ad"),g=s("a523"),_=s("a75b"),x=s("169a"),y=s("ce7e"),S=s("0e8f"),k=s("553a"),A=s("132d"),V=s("adda"),j=s("8860"),N=s("da13"),B=s("5d23"),T=s("e449"),O=s("0fd9"),D=s("2fa4"),M=s("7e85"),P=s("e516"),F=s("9c54"),I=s("56a4"),W=s("2a7f"),L=s("3a2f"),R=s("269a"),U=s.n(R),E=s("5607"),z=Object(p["a"])(l,i,n,!1,null,"6668cae5",null),J=z.exports;u()(z,{VApp:v["a"],VAppBar:h["a"],VAppBarNavIcon:f["a"],VBtn:m["a"],VCard:b["a"],VCardText:C["a"],VCardTitle:C["b"],VCol:w["a"],VContainer:g["a"],VContent:_["a"],VDialog:x["a"],VDivider:y["a"],VFlex:S["a"],VFooter:k["a"],VIcon:A["a"],VImg:V["a"],VList:j["a"],VListItem:N["a"],VListItemContent:B["a"],VListItemTitle:B["b"],VMenu:T["a"],VRow:O["a"],VSpacer:D["a"],VStepper:M["a"],VStepperContent:P["a"],VStepperHeader:F["a"],VStepperItems:F["b"],VStepperStep:I["a"],VToolbarItems:W["a"],VToolbarTitle:W["b"],VTooltip:L["a"]}),U()(z,{Ripple:E["a"]});s("bf40");var $=s("f309");a["default"].use($["a"]);var H=new $["a"]({icons:{iconfont:"mdi"},breakpoint:{thresholds:{xs:340,sm:540,md:800,lg:1280},scrollBarWidth:24}}),q=(s("77ed"),s("5977"),s("a093")),G=s("6ac3"),Q=s.n(G),Y=s("5f5b"),K=(s("f9e3"),s("2dd8"),s("2f62"));a["default"].use(K["a"]);var X=new K["a"].Store({state:{}});a["default"].use(Y["a"]),a["default"].use(Q.a),a["default"].use(q["a"]),a["default"].config.productionTip=!1,new a["default"]({vuetify:H,store:X,render:function(t){return t(J)}}).$mount("#app")},"6e8f":function(t,e,s){t.exports=s.p+"img/activate.56cc4bb6.jpg"},"7e97":function(t,e,s){"use strict";var a=s("be58"),i=s.n(a);i.a},be58:function(t,e,s){}});
//# sourceMappingURL=app.da72a0bf.js.map