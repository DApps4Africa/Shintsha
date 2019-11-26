(function (t) {
    function e(e) {
        for (var s, r, o = e[0], c = e[1], l = e[2], d = 0, u = []; d < o.length; d++) r = o[d], Object.prototype.hasOwnProperty.call(i, r) && i[r] && u.push(i[r][0]), i[r] = 0;
        for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (t[s] = c[s]);
        p && p(e);
        while (u.length) u.shift()();
        return n.push.apply(n, l || []), a()
    }

    function a() {
        for (var t, e = 0; e < n.length; e++) {
            for (var a = n[e], s = !0, o = 1; o < a.length; o++) {
                var c = a[o];
                0 !== i[c] && (s = !1)
            }
            s && (n.splice(e--, 1), t = r(r.s = a[0]))
        }
        return t
    }
    var s = {},
        i = {
            app: 0
        },
        n = [];

    function r(e) {
        if (s[e]) return s[e].exports;
        var a = s[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, r), a.l = !0, a.exports
    }
    r.m = t, r.c = s, r.d = function (t, e, a) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, r.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function (t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (r.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var s in t) r.d(a, s, function (e) {
                return t[e]
            }.bind(null, s));
        return a
    }, r.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = o.push.bind(o);
    o.push = e, o = o.slice();
    for (var l = 0; l < o.length; l++) e(o[l]);
    var p = c;
    n.push([0, "chunk-vendors"]), a()
})({
    0: function (t, e, a) {
        t.exports = a("56d7")
    },
    "0854": function (t, e, a) {},
    "21b8": function (t, e, a) {
        t.exports = "https://github.com/DApps4Africa/Shintsha-Product-Website/blob/master/src/assets/screenshots/join.jpg?raw=true"
    },
    2211: function (t, e, a) {
        t.exports = a.p + "dist/img/spha.6989ab4a.jpg"
    },
    "32d8": function (t, e, a) {
        t.exports = a.p + "/dist/img/owans.f394a680.jpg"
    },
    "32e7": function (t, e, a) {
        t.exports = a.p + "img/pape.e771d64d.jpg"
    },
    "4d89": function (t, e, a) {
        "use strict";
        var s = a("0854"),
            i = a.n(s);
        i.a
    },
    "56d7": function (t, e, a) {
        "use strict";
        a.r(e);
        a("e260"), a("e6cf"), a("cca6"), a("a79d");
        var s = a("2b0e"),
            i = function () {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("v-app", {
                    attrs: {
                        id: "inspire"
                    }
                }, [s("v-app-bar", {
                    staticClass: "nav-header",
                    attrs: {
                        app: "",
                        flat: "",
                        dark: ""
                    }
                }, [s("v-btn", {
                    directives: [{
                        name: "ripple",
                        rawName: "v-ripple",
                        value: {
                            center: !0
                        },
                        expression: "{ center: true }"
                    }],
                    staticClass: "websiteFont",
                    attrs: {
                        height: "64px",
                        text: ""
                    }
                }, [s("v-toolbar-title", {
                    staticClass: "websiteFont"
                }, [t._v("Shintsha")])], 1), s("v-spacer"), s("v-toolbar-items", {
                    staticClass: "hidden-sm-and-down"
                }, t._l(t.menu, (function (e) {
                    return s("v-btn", {
                        key: e.title,
                        attrs: {
                            to: e.to,
                            href: e.to,
                            text: ""
                        }
                    }, [t._v(t._s(e.title) + " ")])
                })), 1), s("v-menu", {
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function (e) {
                            var a = e.on;
                            return [s("v-app-bar-nav-icon", t._g({
                                staticClass: "hidden-md-and-up",
                                attrs: {
                                    slot: "activator"
                                },
                                slot: "activator"
                            }, a))]
                        }
                    }])
                }, [s("v-list", t._l(t.menu, (function (e) {
                    return s("v-list-item", {
                        key: e.title,
                        on: {
                            click: function (a) {
                                return t.gotTo(e.to)
                            }
                        }
                    }, [s("v-list-item-content", [s("v-list-item-title", {
                        attrs: {
                            href: e.to
                        }
                    }, [t._v(t._s(e.title))])], 1)], 1)
                })), 1)], 1)], 1), s("v-content", {
                    attrs: {
                        justify: "center",
                        align: "center"
                    }
                }, [s("v-container", {
                    staticClass: "fill-height spanwidth"
                }, [s("v-row", [s("v-row", {
                    staticClass: "above-the-fold"
                }, [s("v-col", {
                    staticClass: "atf-wrap",
                    attrs: {
                        id: "home"
                    }
                }, [s("div", {
                    staticClass: "col-wrap col-wrap-flex"
                }, [s("div", {
                    staticClass: "row-container"
                }, [s("div", {
                    staticClass: "left-col-atf"
                }, [s("div", {
                    staticClass: "app-header"
                }, [s("h1", [t._v("Shintsha ")]), s("h2", [t._v("A Decentralized Online Market built on "), s("i", {
                    staticClass: "fa fa-ethereum",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }), t._v(" Ethereum Connecting Farmers with Buyers In Minutes!!!")])]), s("div", {
                    staticClass: "cta-container"
                }, t._l(t.supportedMediaButtons, (function (e, a) {
                    return s("div", {
                        directives: [{
                            name: "ripple",
                            rawName: "v-ripple",
                            value: {
                                center: !0
                            },
                            expression: "{ center: true }"
                        }],
                        key: a,
                        staticClass: "playstore-div"
                    }, [s("v-tooltip", {
                        attrs: {
                            top: ""
                        },
                        scopedSlots: t._u([{
                            key: "activator",
                            fn: function (a) {
                                var i = a.on;
                                return [s("a", t._g({
                                    staticClass: "cta-btn playstore-btn",
                                    attrs: {
                                        href: e.href
                                    },
                                    on: {
                                        click: function (a) {
                                            return t.activateStep(e.command)
                                        }
                                    }
                                }, i), [s("i", {
                                    class: e.class
                                })])]
                            }
                        }], null, !0)
                    }, [s("span", [t._v(t._s(e.description))])])], 1)
                })), 0)])])]), s("v-row", {
                    staticClass: "pad_left"
                }, [s("v-col", [s("div", {
                    staticClass: "app-image"
                }, [s("figure", [s("div", {
                    staticClass: "base"
                }, [s("div", {
                    staticClass: "buttons-left"
                }, [s("div", {
                    staticClass: "volume"
                }), s("div", {
                    staticClass: "assistant"
                })]), s("div", {
                    staticClass: "lock"
                }), s("div", {
                    staticClass: "front"
                }, [s("div", {
                    staticClass: "top"
                }, [s("div", {
                    staticClass: "sensor sensor-tiny"
                }), s("div", {
                    staticClass: "sensor sensor-large"
                }), s("div", {
                    staticClass: "sensor sensor-medium"
                }), s("div", {
                    staticClass: "sensor sensor-tiny"
                }), s("div", {
                    staticClass: "speaker"
                }), s("div", {
                    staticClass: "camera"
                }), s("div", {
                    staticClass: "sensor sensor-tiny"
                })]), s("div", {
                    directives: [{
                        name: "ripple",
                        rawName: "v-ripple",
                        value: {
                            center: !0
                        },
                        expression: "{ center: true }"
                    }],
                    staticClass: "screen"
                })])])])])])], 1)], 1), s("main", {
                    staticClass: "below-the-fold",
                    attrs: {
                        id: "btf-section"
                    }
                }, [s("section", {
                    staticClass: "why-our-app",
                    attrs: {
                        id: "use_cases"
                    }
                }, [s("div", {
                    staticClass: "woa-wrap"
                }, [s("div", {
                    staticClass: "row-container"
                }, [s("div", {
                    staticClass: "woa-title"
                }, [s("h1", [t._v("How It Works?")])]), s("div", {
                    staticClass: "col-container-woa"
                }, [s("div", {
                    staticClass: "left-col-woa"
                }, [s("div", {
                    staticClass: "heading_font"
                }, [s("h1", [t._v("Farmer")])]), t._l(t.instructionsFarmer, (function (e, a) {
                    return s("ul", {
                        key: a
                    }, [s("h3", {
                        staticClass: "h3"
                    }, [t._v(t._s(e.title))]), s("li", {
                        staticClass: "row-flex-it"
                    }, [s("i", {
                        class: e.iconName
                    }), s("span", {
                        staticClass: "list-text"
                    }, [t._v(t._s(e.text))]), s("br")])])
                }))], 2), s("div", {
                    staticClass: "right-col-woa"
                }, [s("div", {
                    staticClass: "heading_font"
                }, [s("h1", [t._v("Consumer")])]), t._l(t.instructionsConsumers, (function (e, a) {
                    return s("ul", {
                        key: a
                    }, [s("h3", {
                        staticClass: "h3"
                    }, [t._v(t._s(e.title))]), s("li", {
                        staticClass: "row-flex-it"
                    }, [s("i", {
                        class: e.iconName
                    }), s("span", {
                        staticClass: "list-text"
                    }, [t._v(t._s(e.text))])])])
                }))], 2)])])])])]), s("v-col", {
                    staticClass: "pad_top pad_left_small",
                    attrs: {
                        id: "use_cases"
                    }
                }, [s("main", {
                    staticClass: "below-the-fold",
                    attrs: {
                        id: "btf-section"
                    }
                }, [s("section", {
                    staticClass: "why-our-app",
                    attrs: {
                        id: "use-cases"
                    }
                }, [s("div", {
                    staticClass: "woa-wrap"
                }, [s("div", {
                    staticClass: "row-container"
                }, [s("div", {
                    staticClass: "woa-title"
                }, [s("h2", [t._v("Shintsha Use Cases")])]), s("v-container", {
                    staticClass: "col-container-woa card_title_cutsom"
                }, [s("v-row", {
                    attrs: {
                        cols: "12",
                        sm: "4"
                    }
                }, t._l(t.usecases, (function (e, a) {
                    return s("v-col", {
                        key: a,
                        attrs: {
                            cols: "12",
                            sm: "4",
                            width: "600px"
                        }
                    }, [s("v-card", {
                        directives: [{
                            name: "ripple",
                            rawName: "v-ripple",
                            value: {
                                center: !0
                            },
                            expression: "{ center: true }"
                        }],
                        staticClass: "mx-auto"
                    }, [s("v-img", {
                        attrs: {
                            src: e.img,
                            height: "300px",
                            width: "100%"
                        }
                    }), s("div", {
                        staticClass: "text-xs-center"
                    }, [s("v-card-title", {
                        staticClass: "card_title_style",
                        staticStyle: {
                            width: "100%",
                            padding: "0%",
                            display: "inline-block",
                            "font-weight": "bold",
                            color: "black"
                        }
                    }, [t._v(" " + t._s(e.title) + " ")])], 1), s("v-divider"), s("v-card-text", {
                        staticClass: "card_content"
                    }, [t._v(" " + t._s(e.text) + " ")])], 1)], 1)
                })), 1)], 1)], 1)])])])])], 1), s("v-row", [s("v-footer", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        dark: "",
                        padless: ""
                    }
                }, [s("v-card", {
                    staticClass: " nav-header lighten-1 white--text text-center",
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        flat: ""
                    }
                }, [s("v-card-text", [s("a", {
                    attrs: {
                        href: "mailto:dapps4Africa@yahoo.com"
                    }
                }, [s("v-tooltip", {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function (e) {
                            var a = e.on;
                            return [s("v-btn", {
                                staticClass: "mx-4 white--text",
                                attrs: {
                                    icon: ""
                                }
                            }, [s("v-icon", t._g({
                                attrs: {
                                    size: "30px"
                                }
                            }, a), [t._v("fa fa-envelope")])], 1)]
                        }
                    }])
                }, [s("span", [t._v("Send Email")])])], 1)]), s("v-card-text", {
                    staticClass: "white--text pt-1 footer_font"
                }, [t._v(" Contact Us ")]), s("a", {
                    attrs: {
                        href: "mailto:dapps4Africa@yahoo.com"
                    }
                }, [s("v-card-text", {
                    staticClass: "white--text pt-1 footer_font"
                }, [t._v(" " + t._s(t.email) + " ")])], 1), s("v-divider"), s("v-card-text", {
                    staticClass: "white--text"
                }, [t._v(" " + t._s((new Date).getFullYear()) + " — "), s("strong", [t._v("Shinstha")])])], 1)], 1), s("v-row", {
                    attrs: {
                        justify: "center"
                    }
                }, [s("v-dialog", {
                    attrs: {
                        "max-width": "600"
                    },
                    model: {
                        value: t.whatsAppSteps,
                        callback: function (e) {
                            t.whatsAppSteps = e
                        },
                        expression: "whatsAppSteps"
                    }
                }, [
                    [s("v-stepper", {
                        model: {
                            value: t.whatsAppNext,
                            callback: function (e) {
                                t.whatsAppNext = e
                            },
                            expression: "whatsAppNext"
                        }
                    }, [s("v-stepper-header", {
                        staticClass: "green_blue"
                    }, [s("v-stepper-step", {
                        attrs: {
                            step: "1"
                        }
                    }, [t._v("Alert")]), s("v-divider"), s("v-stepper-step", {
                        attrs: {
                            step: "2"
                        }
                    }, [t._v("SandBox")]), s("v-divider"), s("v-stepper-step", {
                        attrs: {
                            step: "3"
                        }
                    }, [t._v("Activation")]), s("v-divider"), s("v-stepper-step", {
                        attrs: {
                            step: "4"
                        }
                    }, [t._v("Done")])], 1), s("v-stepper-items", [s("v-stepper-content", {
                        attrs: {
                            step: "1"
                        }
                    }, [s("v-card", {
                        staticClass: "mb-12",
                        attrs: {
                            color: "lighten-1"
                        }
                    }, [s("v-container", [s("v-card-text", {
                        staticClass: "text-center"
                    }, [t._v(" Please not this is a beta version of the steps required to use the "), s("b", [t._v("Shintsha")]), t._v(" Platform in the near future these steps will change as this version is the initial MVP ")])], 1)], 1), s("v-btn", {
                        attrs: {
                            color: "green"
                        },
                        on: {
                            click: function (e) {
                                t.whatsAppNext = 2
                            }
                        }
                    }, [t._v(" Continue ")]), s("v-btn", {
                        attrs: {
                            text: ""
                        },
                        on: {
                            click: function (e) {
                                t.whatsAppSteps = !1
                            }
                        }
                    }, [t._v("Cancel")])], 1), s("v-stepper-content", {
                        attrs: {
                            step: "2"
                        }
                    }, [s("v-card", {
                        staticClass: "mb-12",
                        attrs: {
                            color: "lighten-1"
                        }
                    }, [s("v-container", [s("v-card-text", {
                        staticClass: "text-center"
                    }, [t._v(" Save the following number "), s("br"), s("b", [t._v("+14155238886")]), t._v(" "), s("br"), t._v(" as a contact on your mobile device Preferably as "), s("b", [t._v("Shintsha")])])], 1)], 1), s("v-btn", {
                        attrs: {
                            color: "green"
                        },
                        on: {
                            click: function (e) {
                                t.whatsAppNext = 3
                            }
                        }
                    }, [t._v(" Continue ")]), s("v-btn", {
                        attrs: {
                            text: ""
                        },
                        on: {
                            click: function (e) {
                                t.whatsAppSteps = !1
                            }
                        }
                    }, [t._v("Cancel")])], 1), s("v-stepper-content", {
                        attrs: {
                            step: "3"
                        }
                    }, [s("v-card", {
                        staticClass: "mb-12",
                        attrs: {
                            color: "lighten-1"
                        }
                    }, [s("v-container", [s("v-card-text", {
                        staticClass: "text-center"
                    }, [t._v(" Once the number is saved send the "), s("b", [t._v("Join using-forth")]), t._v(" command illustrated by the screenshot below ")]), s("v-card-text", {
                        staticClass: "text-center"
                    }, [s("v-img", {
                        attrs: {
                            src: a("21b8")
                        }
                    })], 1)], 1)], 1), s("v-btn", {
                        attrs: {
                            color: "green"
                        },
                        on: {
                            click: function (e) {
                                t.whatsAppNext = 4
                            }
                        }
                    }, [t._v(" Continue ")]), s("v-btn", {
                        attrs: {
                            text: ""
                        },
                        on: {
                            click: function (e) {
                                t.whatsAppSteps = !1
                            }
                        }
                    }, [t._v("Cancel")])], 1), s("v-stepper-content", {
                        attrs: {
                            step: "4"
                        }
                    }, [s("v-card", {
                        staticClass: "mb-12",
                        attrs: {
                            color: "lighten-1"
                        }
                    }, [s("v-container", [s("v-card-text", {
                        staticClass: "text-center"
                    }, [t._v(" Once the number is saved send the following command "), s("b", [t._v("Menu")]), t._v(" illustrated by the screenshot below ")]), s("v-card-text", {
                        staticClass: "text-center"
                    }, [s("v-img", {
                        attrs: {
                            src: a("6e8f")
                        }
                    })], 1)], 1)], 1), s("v-btn", {
                        attrs: {
                            color: "green"
                        },
                        on: {
                            click: function (e) {
                                t.whatsAppNext = 1
                            }
                        }
                    }, [t._v(" Continue ")]), s("v-btn", {
                        attrs: {
                            text: ""
                        },
                        on: {
                            click: function (e) {
                                t.whatsAppSteps = !1
                            }
                        }
                    }, [t._v("Cancel")])], 1)], 1)], 1)]
                ], 2)], 1)], 1)], 1)], 1)], 1), s("v-row", {
                    attrs: {
                        id: "contact",
                        "no-gutters": ""
                    }
                })], 1)
            },
            n = [],
            r = a("3d20"),
            o = a.n(r),
            c = {
                components: {},
                data: function () {
                    return {
                        menu: [{
                            to: "#how_it_works",
                            title: "How It Works?"
                        }, {
                            to: "#use_cases",
                            title: "Use Cases"
                        }, {
                            to: "#contact",
                            title: "Contact"
                        }],
                        instructionsFarmer: [{
                            text: "Farmers can create an account on the Shintsha platform through the different supported mediums.",
                            iconName: "fas fa-user-edit",
                            title: "Create Account"
                        }, {
                            text: "Farmers can use the Shintsha platform to register crops they have produced or harvested",
                            iconName: "fas fa-plus",
                            title: "Crop Listing"
                        }, {
                            text: "Farmers can interact with the different harvests they have listed on the Shintsha platform which interacts with blockchain",
                            iconName: "fas fa-exchange-alt",
                            title: "Access to Consumers"
                        }, {
                            text: "Through the use of the Blockchain, new business models are enabled which enable farmers to, CrowdFund, and sell their products directly to consumers",
                            iconName: "fa fa-ethereum",
                            title: "Business Models"
                        }],
                        instructionsConsumers: [{
                            text: "Consumers can create an account on the Shintsha platform through the different supported mediums.",
                            iconName: "fas fa-user-edit",
                            title: "Create Account"
                        }, {
                            text: "Consumers can use the Shinstha platform to purchase crops listed by farmers directly",
                            iconName: "fa fa-ethereum",
                            title: "Purchase Crops"
                        }],
                        usecases: [{
                            img: "https://www.commercial-hydroponic-farming.com/wp-content/uploads/2014/02/quality-vegetable-crops-hydroponics.jpg",
                            text: "Shintsha Uses Smart Contracts to give transparency and proof of ownership of crops listed by Farmers, which enables trust amongt all actors of the shintsha platform value chain",
                            title: "Proof of Crop"
                        }, {
                            img: "https://www.dutchnews.nl/wpcms/wp-content/uploads/2016/10/corn-field-young-plants-farm.jpg",
                            text: "Shintsha allows the creation of new business models and decentralized finances such crowdfunding, and decentralised loans for farmers",
                            title: "Business Models"
                        }, {
                            img: "https://205324-619698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/09/BlockchainMultichain-1-Cover.jpg",
                            text: "Farmers who list their crops on Shintsha will allow consumers to easily trace the origin of the crop through different supported mediums",
                            title: "Supply Chain"
                        }],
                        profiles: [{
                            name: "Owanate Amachree",
                            role: "Backend Developer and Technical Writer",
                            about: "Project Shintsha Developer",
                            github: "https://github.com/owans",
                            img: a("32d8")
                        }, {
                            name: "Badara Diakhate",
                            role: "Blockchain Developer, React Developer",
                            about: "Project Shintsha Developer",
                            github: "#",
                            img: a("32e7")
                        }, {
                            name: "Siphamandla Mjoli",
                            role: "Blockchain Engineer, Blockchain Game Developer",
                            about: "Project Shintsha Developer",
                            github: "https://github.com/Brianspha",
                            img: a("2211")
                        }],
                        icons: [{
                            icon: "fab fa-google-plus",
                            description: "Send Email"
                        }],
                        email: "dapps4Africa@yahoo.com",
                        supportedMediaButtons: [{
                            href: "#",
                            class: "fas fa-sms",
                            description: "SMS",
                            command: "SMS"
                        }, {
                            href: "#",
                            class: "fa fa-desktop",
                            description: "Web App",
                            command: "WebApp"
                        }, {
                            href: "#",
                            class: "fab fa-whatsapp",
                            description: "WhatsApp",
                            command: "WhatsApp"
                        }],
                        whatsAppSteps: !1,
                        whatsAppNext: 0
                    }
                },
                mounted: function () {
                    this.warnUser()
                },
                methods: {
                    warnUser: function () {
                        o.a.fire({
                            title: "Beta",
                            text: "This Website is under development",
                            icon: "warning",
                            showCancelButton: !1,
                            confirmButtonColor: "#3085d6"
                        })
                    },
                    gotTo: function (t) {},
                    activateStep: function (t) {
                        switch (t) {
                            case "WhatsApp":
                                this.whatsAppSteps = !0;
                                break;
                            default:
                                break
                        }
                    },
                    onScroll: function (t) {
                        this.offsetTop = t.target.scrollTop
                    }
                }
            },
            l = c,
            p = (a("4d89"), a("2877")),
            d = a("6544"),
            u = a.n(d),
            v = a("7496"),
            h = a("40dc"),
            f = a("5bc1"),
            m = a("8336"),
            w = a("b0af"),
            b = a("99d9"),
            C = a("62ad"),
            _ = a("a523"),
            g = a("a75b"),
            x = a("169a"),
            y = a("ce7e"),
            S = a("553a"),
            k = a("132d"),
            A = a("adda"),
            V = a("8860"),
            j = a("da13"),
            N = a("5d23"),
            B = a("e449"),
            M = a("0fd9"),
            T = a("2fa4"),
            O = a("7e85"),
            P = a("e516"),
            F = a("9c54"),
            D = a("56a4"),
            I = a("2a7f"),
            W = a("3a2f"),
            U = a("269a"),
            q = a.n(U),
            E = a("5607"),
            L = Object(p["a"])(l, i, n, !1, null, "c7d19798", null),
            z = L.exports;
        u()(L, {
            VApp: v["a"],
            VAppBar: h["a"],
            VAppBarNavIcon: f["a"],
            VBtn: m["a"],
            VCard: w["a"],
            VCardText: b["a"],
            VCardTitle: b["b"],
            VCol: C["a"],
            VContainer: _["a"],
            VContent: g["a"],
            VDialog: x["a"],
            VDivider: y["a"],
            VFooter: S["a"],
            VIcon: k["a"],
            VImg: A["a"],
            VList: V["a"],
            VListItem: j["a"],
            VListItemContent: N["a"],
            VListItemTitle: N["b"],
            VMenu: B["a"],
            VRow: M["a"],
            VSpacer: T["a"],
            VStepper: O["a"],
            VStepperContent: P["a"],
            VStepperHeader: F["a"],
            VStepperItems: F["b"],
            VStepperStep: D["a"],
            VToolbarItems: I["a"],
            VToolbarTitle: I["b"],
            VTooltip: W["a"]
        }), q()(L, {
            Ripple: E["a"]
        });
        a("bf40");
        var H = a("f309");
        s["default"].use(H["a"]);
        var J = new H["a"]({
                icons: {
                    iconfont: "mdi"
                }
            }),
            R = (a("77ed"), a("5977"), a("a093")),
            $ = a("6ac3"),
            G = a.n($),
            Y = a("5f5b");
        a("f9e3"), a("2dd8");
        s["default"].use(Y["a"]), s["default"].use(G.a), s["default"].use(R["a"]), s["default"].config.productionTip = !1, new s["default"]({
            vuetify: J,
            render: function (t) {
                return t(z)
            }
        }).$mount("#app")
    },
    "6e8f": function (t, e, a) {
        t.exports = "https://github.com/DApps4Africa/Shintsha-Product-Website/blob/master/src/assets/screenshots/activate.jpg?raw=true"
    }
});
//# sourceMappingURL=app.06832b50.js.map