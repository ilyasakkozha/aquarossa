webpackJsonp(
    [1],
    {
        "3qiv": function (a, b, c) {
            "use strict";
            Object.defineProperty(b, "__esModule", { value: !0 });
            var d = c("PExH"),
                e = c.n(d),
                f = c("SU4g"),
                g = c("SSrt"),
                h = c("4sMD"),
                j = c("tmUY"),
                i = c("Z4No"),
                k = c("a9Ib"),
                l = c("lEHP"),
                m = c("dgdz"),
                n = c("YXJT"),
                o = c("p7iy"),
                p = c("TpQl"),
                q = c("juYr"),
                r = c.n(q),
                s = c("QAGU"),
                t = c.n(s),
                u = navigator.userAgent || navigator.vendor || window.opera,
                v = -1 < u.indexOf("Instagram");
            document.documentElement.classList && v && (window.document.body.classList.add("instagram-browser"), alert("debugging within the Instagram in-app browser"));
            var w = Object(m.a)();
            w || ((document.getElementById("welcome-logo").style.display = "none"), (document.getElementById("welcome-logo-fallback").style.display = "initial")), !1;
            var x = window.TweenLite,
                y = window.ScrollMagic,
                z = window.Power0;
            x.defaultEase = z.easeNone;
            var A = document.getElementById("still-bottles"),
                B = document.getElementById("tank-bottles"),
                C = document.getElementById("spark-bottles"),
                D = document.getElementById("tea-bottles"),
                E = document.getElementById("sweet-bottles"),
                F = document.getElementById("sport-bottles"),
                G = document.getElementById("trolls-bottles"),
                H = document.getElementById("ufc-bottles"),
                I = document.getElementById("terminator-bottles"),
                J = document.getElementById("vkus-bottles"),
                K = document.getElementById("exel-bottles"),
                L = new y.Controller(),
                M = new l.a(),
                N = document.querySelectorAll(".modal-trigger");
            Object(i.a)(function () {
                function a() {
                    document.querySelectorAll(".starmodal-body .order__tabs li").forEach(function (a) {
                        a.addEventListener("click", function () {
                            document.querySelectorAll(".starmodal-body .order__tabs li").forEach(function (a) {
                                a.classList.remove("active");
                            }),
                                this.classList.add("active"),
                                document.querySelectorAll(".starmodal-body .order__oneblock").forEach(function (a) {
                                    a.classList.remove("active");
                                });
                            var a = Array.prototype.slice.call(this.parentElement.children).indexOf(this),
                                b = 0;
                            document.querySelectorAll(".starmodal-body .order__oneblock").forEach(function (c) {
                                b === a && c.classList.add("active"), b++;
                            });
                        });
                    });
                }
                document.getElementById("trans") &&
                    (Object(o.a)(), Object(j.a)(F), Object(j.a)(A), Object(j.a)(B), Object(j.a)(C), Object(j.a)(K), Object(j.a)(E), Object(j.a)(D), Object(j.a)(G), Object(j.a)(H), Object(j.a)(I), Object(j.a)(J), Object(n.a)(L)),
                    r()("#articleSlider").slick({
                        dots: !1,
                        arrows: !1,
                        infinite: !1,
                        speed: 300,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        responsive: [
                            { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                        ],
                    });
                var b = r()(".productSlider-5"),
                    c = r()(".productSlider-3"),
                    d = r()(".productSlider-5,.productSlider-3");
                r()(".productSlider-5,.productSlider-3").on("init", function () {
                    r()(".slick-slide[data-slick-index=-1]", r()(".productSlider-5,.productSlider-3")).addClass("isprev"), r()(".slick-slide[data-slick-index=1]", r()(".productSlider-5,.productSlider-3")).addClass("isnext");
                }),
                    c.slick({ dots: !1, arrows: !0, infinite: !0, centerMode: !0, speed: 600, slidesToShow: 3, slidesToScroll: 3, responsive: [{ breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: !1 } }] }),
                    b.slick({
                        dots: !1,
                        arrows: !0,
                        infinite: !0,
                        centerMode: !0,
                        speed: 600,
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        responsive: [
                            { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 3, centerMode: !0 } },
                            { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: !1 } },
                        ],
                    }),
                    d.on("beforeChange", function (a, b, c, e) {
                        var f,
                            g = b.slideCount - 1;
                        (f = e === c ? "same" : 1 === Math.abs(e - c) ? (0 < e - c ? "right" : "left") : 0 < e - c ? "left" : "right"),
                            r()(".prev,.next,.isprev,.isnext", d).removeClass("prev next isprev isnext"),
                            "right" === f &&
                                (r()('.slick-cloned[data-slick-index="' + (e + g + 1) + '"]', d).addClass("slick-current-clone-animate"),
                                r()(".slick-slide[data-slick-index=" + +c + "]", d).addClass("prev"),
                                r()(".slick-slide[data-slick-index=" + +(c + 2) + "]", d).addClass("next")),
                            "left" === f &&
                                (r()('.slick-cloned[data-slick-index="' + (e - g - 1) + '"]', d).addClass("slick-current-clone-animate"),
                                r()(".slick-slide[data-slick-index=" + +(c - 2) + "]", d).addClass("prev"),
                                r()(".slick-slide[data-slick-index=" + +c + "]", d).addClass("next"));
                    }),
                    d.on("afterChange", function (a, b, c) {
                        r()(".slick-current-clone-animate", d).removeClass("slick-current-clone-animate"),
                            r()(".slick-current-clone-animate", d).removeClass("slick-current-clone-animate"),
                            r()(".isprev,.isnext", d).removeClass("isprev isnext"),
                            r()(".slick-slide[data-slick-index=" + +(c - 1) + "]", d).addClass("isprev"),
                            r()(".slick-slide[data-slick-index=" + +(c + 1) + "]", d).addClass("isnext");
                    }),
                    Object(k.a)(),
                    M.init(),
                    document.querySelectorAll(".header__nav li")[1].addEventListener("click", function (a) {
                        !this.classList.contains("open") && 768 > window.innerWidth ? (this.classList.add("open"), a.preventDefault()) : this.classList.remove("open");
                    }),
                    window.addEventListener("scroll", function () {
                        50 < window.scrollY ? document.getElementsByClassName("header")[0].classList.add("fixed") : document.getElementsByClassName("header")[0].classList.remove("fixed");
                    }),
                    (function () {
                        document.querySelectorAll(".contactsList__title").forEach(function (a) {
                            a.addEventListener("click", function () {
                                1200 > window.innerWidth && this.parentNode.classList.toggle("open");
                            });
                        }),
                            document.querySelectorAll(".contactsList__close").forEach(function (a) {
                                a.addEventListener("click", function () {
                                    document.querySelectorAll(".contactsBottom__btn").forEach(function (a) {
                                        a.classList.remove("open");
                                    }),
                                        this.parentNode.classList.toggle("open");
                                });
                            }),
                            document.querySelectorAll(".contactsBottom__btn").forEach(function (a) {
                                a.addEventListener("click", function () {
                                    document.querySelectorAll(".contactsBottom__btn").forEach(function (a) {
                                        a.classList.remove("open");
                                    }),
                                        document.querySelectorAll(".contactsList__item").forEach(function (a) {
                                            a.classList.remove("open");
                                        }),
                                        1200 < window.innerWidth && (this.classList.add("open"), document.getElementsByClassName("city-" + this.dataset.city)[0].classList.add("open"));
                                });
                            });
                    })(),
                    N.forEach(function (b) {
                        b.addEventListener("click", function () {
                            M.show(document.getElementById(this.getAttribute("data-starmodal")), this), "order" === this.getAttribute("data-starmodal") && a(), "product" === this.getAttribute("data-starmodal") && e();
                        });
                    });
                var e = function () {
                    document.querySelectorAll(".modal-trigger2").forEach(function (b) {
                        b.addEventListener("click", function () {
                            M.destroy(), M.show(document.getElementById(this.getAttribute("data-starmodal")), this), "order" === this.getAttribute("data-starmodal") && a();
                        });
                    });
                };
                p.a.fromTo(".header__link", 2, { opacity: 0 }, { opacity: 1 }),
                    p.a.fromTo(".header__logo", 2, { opacity: 0 }, { opacity: 1 }),
                    p.a.fromTo(".header__language", 2, { opacity: 0 }, { opacity: 1 }),
                    p.a.fromTo(".welcome__logo", 2, { opacity: 0 }, { opacity: 1 }),
                    document.getElementById("menubtn").addEventListener("click", function () {
                        !0 === this.classList.contains("open")
                            ? (this.classList.remove("open"), document.getElementById("header").classList.remove("open"))
                            : (this.classList.add("open"), document.getElementById("header").classList.add("open"));
                    });
                for (
                    var f = document.getElementsByClassName("accordion__name"),
                        g = function () {
                            this.parentElement.classList.toggle("show");
                        },
                        h = 0;
                    h < f.length;
                    h++
                )
                    f[h].addEventListener("click", g, !1);
            });
        },
        In3p: function (a, b) {
            "use strict";
            b.a = function () {
                return 680 > window.innerWidth;
            };
        },
        "L/3X": function (a, b, c) {
            "use strict";
            c.d(b, "a", function () {
                return g;
            });
            var d = window.TimelineMax,
                e = window.$,
                f = e("#exel-blue"),
                g = new d();
            g.addLabel("start").fromTo(f, 0.5, { opacity: 0 }, { opacity: 1 }, "start").addLabel("middle").fromTo(f, 0.5, { opacity: 1 }, { opacity: 0 }, "middle");
        },
        OtJC: function (a, b, c) {
            "use strict";
            c.d(b, "d", function () {
                return j;
            }),
                c.d(b, "a", function () {
                    return k;
                }),
                c.d(b, "c", function () {
                    return l;
                }),
                c.d(b, "b", function () {
                    return m;
                });
            var d = c("Ur0d"),
                e = c("TAem"),
                f = c("SMdh"),
                g = c("L/3X"),
                h = c("PEMv"),
                i = window.ScrollMagic,
                j = new i.Scene({ triggerElement: "#tea", triggerHook: 0.5 }).setTween(e.a),
                k = new i.Scene({ triggerElement: "#exel", triggerHook: 0.5 }).setTween(g.a),
                l = new i.Scene({ triggerElement: "#sweet", triggerHook: 0.5 }).setTween(d.a),
                m = new i.Scene({ triggerElement: "#sport", triggerHook: 0.5 }).setTween(f.a),
                n = new i.Scene({ triggerElement: "#spark", triggerHook: 0.3 }).setClassToggle(".header__link", "white"),
                o = new i.Scene({ triggerElement: "#tea", triggerHook: 0.3 }).setClassToggle(".header__link", "white");
        },
        PEMv: function () {
            "use strict";
            var a = window.TimelineMax,
                b = window.$,
                c = b("#tank-big"),
                d = b("#tank-mid"),
                e = b("#tank-small"),
                f = new a();
            f.addLabel("start").fromTo(c, 1, { x: -30, y: -10 }, { x: 0, y: 0 }, "start").fromTo(d, 1, { x: -10 }, { x: 0 }, "start").fromTo(e, 1, { x: 20, y: 20 }, { x: 0, y: 0 }, "start");
        },
        PExH: function () {},
        SMdh: function (a, b, c) {
            "use strict";
            c.d(b, "a", function () {
                return h;
            });
            var d = window.TimelineMax,
                e = window.$,
                f = e("#sport-girl"),
                g = e("#sport-grass"),
                h = new d();
            h.addLabel("start").fromTo(f, 1, { x: 40 }, { x: 0 }, "start").fromTo(g, 1, { x: -20 }, { x: 0 }, "start");
        },
        TAem: function (a, b, c) {
            "use strict";
            c.d(b, "a", function () {
                return g;
            });
            var d = window.TimelineMax,
                e = window.$,
                f = e("#tea-girl"),
                g = new d();
            g.addLabel("start").fromTo(f, 1, { y: 100 }, { y: 0 }, "start");
        },
        Ur0d: function (a, b, c) {
            "use strict";
            c.d(b, "a", function () {
                return l;
            });
            var d = window.TimelineMax,
                e = window.$,
                f = e("#sweet-family"),
                g = e("#bird1"),
                h = e("#bird2"),
                i = e("#bird3"),
                j = e("#bird4"),
                k = e("#bird5"),
                l = new d();
            l.addLabel("start")
                .fromTo(f, 1, { x: -10 }, { x: 0 }, "start")
                .fromTo(g, 1, { scale: 0.7, x: 30, y: 20 }, { scale: 1, x: 0, y: 0 }, "start")
                .fromTo(h, 1, { x: -40 }, { x: 0 }, "start")
                .fromTo(i, 1, { scale: 0.5, x: -20, y: -20 }, { scale: 1, x: 0, y: 0 }, "start")
                .fromTo(j, 1, { scale: 0.6, x: 40, y: 20 }, { scale: 1, x: 0, y: 0 }, "start")
                .fromTo(k, 1, { x: -40 }, { x: 0 }, "start");
        },
        YXJT: function (a, b, c) {
            "use strict";
            var d = c("OtJC"),
                e = c("In3p"),
                f = (function () {
                    function a(a, b) {
                        var c = [],
                            d = !0,
                            e = !1,
                            f = void 0;
                        try {
                            for (var g, h = a[Symbol.iterator](); !(d = (g = h.next()).done) && (c.push(g.value), !(b && c.length === b)); d = !0);
                        } catch (a) {
                            (e = !0), (f = a);
                        } finally {
                            try {
                                !d && h["return"] && h["return"]();
                            } finally {
                                if (e) throw f;
                            }
                        }
                        return c;
                    }
                    return function (b, c) {
                        if (Array.isArray(b)) return b;
                        if (Symbol.iterator in Object(b)) return a(b, c);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    };
                })(),
                g = window.$,
                h = window.ScrollMagic,
                i = window.TimelineMax;
            b.a = function (a) {
                var b = g(".transition-cloud"),
                    c = Object(e.a)() ? 733 < g(window).height() : 1100 < g(window).height();
                b.each(function (b, d) {
                    var j = c ? d.getAttribute("data-trigger-tall") : d.getAttribute("data-trigger"),
                        k = d.getAttribute("data-delta").split(","),
                        l = f(k, 2),
                        m = l[0],
                        n = l[1],
                        o = new i();
                    o.fromTo(g(d), 0.75, { y: m + "%" }, { y: n + "%", scale: 1 + Math.round(100 * (Math.random() / 10)) / 100 }, "start");
                    var p = new h.Scene({ triggerElement: j, triggerHook: 0, duration: Object(e.a)() ? (c ? 866 : 733) : c ? 1300 : 1100 }).setTween(o);
                    a.addScene(p);
                });
                var j = g("#sweet").height(),
                    k = g("#tea").height(),
                    l = g("#exel").height(),
                    m = g("#sport").height();
                d.c.duration(j), d.b.duration(m), d.d.duration(k), d.a.duration(l + l / 4), a.addScene([d.c, d.d, d.a, d.b]);
            };
        },
        Z4No: function (a, b, c) {
            "use strict";
            var d = c("lc7f"),
                e = c.n(d);
            b.a = function (a) {
                var b = document.getElementById("loading"),
                    c = document.getElementById("count"),
                    d = document.getElementById("retry"),
                    f = document.getElementById("spinner"),
                    g = e()(document.querySelectorAll(".loaded"), { background: !0 }),
                    h = 100 / g.images.length;
                g.on("progress", function (a) {
                    var b = (a.progressedCount * h).toFixed(0);
                    c.innerHTML = "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430: " + b + "%";
                }),
                    g.on("done", function () {
                        (b.style.display = "none"), a();
                    }),
                    g.on("fail", function () {
                        (c.innerHTML = "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"),
                            (d.style.display = "block"),
                            (f.style.display = "none"),
                            d.addEventListener("click", function () {
                                document.location.reload(!0);
                            });
                    });
            };
        },
        a9Ib: function (a, b, c) {
            "use strict";
            var d = c("SlRH"),
                e = c.n(d);
            b.a = function () {
                new e.a(".rellax", { center: !0 });
            };
        },
        dgdz: function (a, b) {
            "use strict";
            b.a = function () {
                for (var a, b = "clipPath", c = ["webkit", "moz", "ms", "o"], d = [b], e = document.createElement("testelement"), f = "polygon(50% 0%, 0% 100%, 100% 100%)", g = 0; g < c.length; g++)
                    (a = c[g] + b.charAt(0).toUpperCase() + b.slice(1)), d.push(a);
                for (var h, i = 0; i < d.length; i++) if (((h = d[i]), "" === e.style[h] && ((e.style[h] = f), "" !== e.style[h]))) return !0;
                return !1;
            };
        },
        lEHP: function (a, b, c) {
            "use strict";
            function d(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
            }
            var e = c("juYr"),
                f = c.n(e),
                g = (function () {
                    function a(a, b) {
                        for (var c, d = 0; d < b.length; d++) (c = b[d]), (c.enumerable = c.enumerable || !1), (c.configurable = !0), "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
                    }
                    return function (b, c, d) {
                        return c && a(b.prototype, c), d && a(b, d), b;
                    };
                })(),
                h = (function () {
                    function a() {
                        d(this, a),
                            (this.overlay = document.createElement("div")),
                            (this.modalBody = document.createElement("div")),
                            (this.modalContent = document.createElement("div")),
                            (this.closeButton = document.createElement("button")),
                            (this.blank = document.createElement("div")),
                            (this.blank.innerText = "Empty modal"),
                            (this.addClassNames = this.addClassNames.bind(this)),
                            (this.clearClassNames = this.clearClassNames.bind(this)),
                            (this.init = this.init.bind(this)),
                            (this.show = this.show.bind(this)),
                            (this.hide = this.hide.bind(this)),
                            (this.stopPropagation = this.stopPropagation.bind(this)),
                            (this.applyEventListeners = this.applyEventListeners.bind(this)),
                            (this.removeEventListeners = this.removeEventListeners.bind(this)),
                            (this.makeCloseButton = this.makeCloseButton.bind(this)),
                            (this.handleEscape = this.handleEscape.bind(this)),
                            (this.transitionIn = this.transitionIn.bind(this)),
                            (this.transitionOut = this.transitionOut.bind(this));
                    }
                    return (
                        g(a, [
                            {
                                key: "init",
                                value: function () {
                                    var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                    (this.config = a), this.addClassNames(), this.makeCloseButton(), this.modalBody.appendChild(this.modalContent), this.overlay.appendChild(this.modalBody);
                                },
                            },
                            {
                                key: "makeCloseButton",
                                value: function () {
                                    var a = this.config.closeButton,
                                        b = void 0 === a ? {} : a,
                                        c = b.parent,
                                        d = void 0 === c ? "modal" : c,
                                        e = b.text,
                                        f = void 0 === e ? "" : e,
                                        g = b.innerHTML;
                                    (this.closeButton.innerHTML = g || f), "overlay" === d ? this.overlay.appendChild(this.closeButton) : "modal" === d && this.modalBody.appendChild(this.closeButton);
                                },
                            },
                            {
                                key: "clearClassNames",
                                value: function () {
                                    for (var a = this.overlay.classList, b = this.modalBody.classList, c = this.modalBody.classList; 0 < a.length; ) a.remove(a[0]);
                                    for (; 0 < b.length; ) b.remove(b[0]);
                                    for (; 0 < c.length; ) c.remove(c[0]);
                                },
                            },
                            {
                                key: "addClassNames",
                                value: function () {
                                    var a = this.config.classNames,
                                        b = void 0 === a ? {} : a,
                                        c = b.overlay,
                                        d = void 0 === c ? "starmodal-overlay" : c,
                                        e = b.modalBody,
                                        f = void 0 === e ? "starmodal-body" : e,
                                        g = b.modalContent,
                                        h = void 0 === g ? "starmodal-content" : g,
                                        i = b.closeButton,
                                        j = void 0 === i ? "starmodal-close-button" : i;
                                    this.clearClassNames(), this.overlay.classList.add(d), this.modalBody.classList.add(f), this.modalContent.classList.add(h), this.closeButton.classList.add(j);
                                },
                            },
                            {
                                key: "applyEventListeners",
                                value: function () {
                                    window.addEventListener("keyup", this.handleEscape),
                                        this.overlay.addEventListener("click", this.hide),
                                        this.closeButton.addEventListener("click", this.hide),
                                        this.modalBody.addEventListener("click", this.stopPropagation);
                                },
                            },
                            {
                                key: "removeEventListeners",
                                value: function () {
                                    window.removeEventListener("keyup", this.handleEscape),
                                        this.overlay.removeEventListener("click", this.hide),
                                        this.closeButton.removeEventListener("click", this.hide),
                                        this.modalBody.removeEventListener("click", this.stopPropagation);
                                },
                            },
                            {
                                key: "transitionIn",
                                value: function () {
                                    var a = this,
                                        b = this.config.transitionClassNames,
                                        c = void 0 === b ? {} : b,
                                        d = c.overlayIn,
                                        e = void 0 === d ? "starmodal-overlay-in" : d,
                                        f = c.overlayOut,
                                        g = void 0 === f ? "starmodal-overlay-out" : f,
                                        h = c.modalIn,
                                        i = void 0 === h ? "starmodal-modal-in" : h,
                                        j = c.modalOut,
                                        k = void 0 === j ? "starmodal-modal-out" : j;
                                    this.overlay.classList.add(g),
                                        this.modalBody.classList.add(k),
                                        setTimeout(function () {
                                            a.overlay.classList.remove(g), a.overlay.classList.add(e), a.modalBody.classList.remove(k), a.modalBody.classList.add(i);
                                        }, 10);
                                },
                            },
                            {
                                key: "transitionOut",
                                value: function () {
                                    var a = this.config.transitionClassNames,
                                        b = void 0 === a ? {} : a,
                                        c = b.overlayIn,
                                        d = void 0 === c ? "starmodal-overlay-in" : c,
                                        e = b.overlayOut,
                                        f = void 0 === e ? "starmodal-overlay-out" : e,
                                        g = b.modalIn,
                                        h = void 0 === g ? "starmodal-modal-in" : g,
                                        i = b.modalOut,
                                        j = void 0 === i ? "starmodal-modal-out" : i;
                                    this.overlay.classList.remove(d), this.overlay.classList.add(f), this.modalBody.classList.remove(h), this.modalBody.classList.add(j);
                                },
                            },
                            {
                                key: "show",
                                value: function (a, b) {
                                    "product" === a.id &&
                                        ((document.getElementById("productModal__title").innerHTML = b.getAttribute("data-title")),
                                        (document.getElementById("productModal__text").innerHTML = b.getAttribute("data-text")),
                                        (document.getElementById("productModal__volume").innerHTML = b.getAttribute("data-volume")),
                                        document.getElementById("productModal__link").setAttribute("href", b.getAttribute("data-link"))),
                                        a && (this.content = a.cloneNode(!0)),
                                        (document.body.style.overflow = "hidden"),
                                        this.modalContent.appendChild(this.content || this.blank),
                                        document.body.appendChild(this.overlay),
                                        this.transitionIn(),
                                        this.applyEventListeners(),
                                        document.getElementById("menubtn").classList.remove("open"),
                                        document.getElementById("header").classList.remove("open");
                                },
                            },
                            {
                                key: "hide",
                                value: function () {
                                    var a = this;
                                    this.transitionOut(),
                                        this.removeEventListeners(),
                                        setTimeout(function () {
                                            for (; a.modalContent.firstChild; ) a.modalContent.removeChild(a.modalContent.firstChild);
                                            (a.content = void 0), document.body.removeChild(a.overlay), (document.body.style.overflow = "auto");
                                        }, 200);
                                },
                            },
                            {
                                key: "destroy",
                                value: function () {
                                    for (; this.modalContent.firstChild; ) this.modalContent.removeChild(this.modalContent.firstChild);
                                    (this.content = void 0), document.body.removeChild(this.overlay);
                                },
                            },
                            {
                                key: "handleEscape",
                                value: function (a) {
                                    var b = a || window.event,
                                        c = !1;
                                    (c = "key" in b ? "Escape" === b.key || "Esc" === b.key : 27 === b.keyCode), c && this.hide();
                                },
                            },
                            {
                                key: "stopPropagation",
                                value: function (a) {
                                    a.stopPropagation();
                                },
                            },
                        ]),
                        a
                    );
                })();
            b.a = h;
        },
        p7iy: function (a, b, c) {
            "use strict";
            var d = Math.round;
            c.d(b, "a", function () {
                return u;
            });
            var e = c("juYr"),
                f = c.n(e),
                g = c("B1iE"),
                h = c.n(g),
                i = c("In3p"),
                j = f()("#welcome"),
                k = f()(".welcome__clip-image"),
                l = f()("#trees"),
                m = f()("#mount"),
                n = f()("#clouds"),
                o = f()("#sky"),
                p = Object(i.a)(),
                q = {
                    initial: { x: p ? 350 : 200, y: p ? 50 : j.height() - 300 },
                    clip: { time: p ? 6 : 3 },
                    trees: { time: p ? 4 : 2, multipliers: { x: p ? 1 : 0.2, y: p ? 1 : 0.15 } },
                    mount: { time: p ? 5 : 2.5, multipliers: { x: p ? 2 : 0.3, y: p ? 2 : 0.2 } },
                    sky: { time: p ? 6 : 3, multipliers: { x: 0.5, y: 0.3 } },
                    clouds: { time: p ? 6 : 3, multipliers: { x: p ? 0.8 : 0.2, y: p ? 0.8 : 0.1 } },
                },
                r = function () {
                    var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        b = q.trees,
                        c = q.mount,
                        d = q.sky,
                        e = q.clouds,
                        f = q.clip,
                        g = q.initial,
                        h = j.width(),
                        i = j.height(),
                        p = a.pageX,
                        r = void 0 === p ? g.x : p,
                        s = a.pageY,
                        t = void 0 === s ? g.y : s,
                        u = r / (h / 100),
                        v = t / (i / 100);
                    window.TweenMax.to(k, f.time, { backgroundPositionX: u, backgroundPositionY: v, ease: window.Power4.easeOut }),
                        window.TweenMax.to(l, b.time, { x: (u - 50) * b.multipliers.x, y: (v - 50) * b.multipliers.y, ease: window.Power4.easeOut }),
                        window.TweenMax.to(m, c.time, { x: (u - 50) * c.multipliers.x, y: (v - 50) * c.multipliers.y, ease: window.Power4.easeOut }),
                        window.TweenMax.to(o, d.time, { x: (u - 50) * d.multipliers.x, y: (v - 50) * d.multipliers.y, ease: window.Power4.easeOut }),
                        window.TweenMax.to(n, e.time, { x: (u - 50) * e.multipliers.x, y: (v - 50) * e.multipliers.y, ease: window.Power4.easeOut });
                },
                s = function () {
                    var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        b = j.width(),
                        c = j.height();
                    if (f()(window).scrollTop() < c) {
                        var e = b <= c,
                            g = a.accelerationIncludingGravity,
                            h = g.x,
                            i = g.y,
                            o = e ? d(h) : d(i),
                            p = e ? d(i) : d(h),
                            q = 5 * (o + 10),
                            r = 4 * (p + 10);
                        window.TweenMax.to(k, 1, { backgroundPositionX: q, backgroundPositionY: r }),
                            window.TweenMax.to(l, 1, { x: 1 * (q - 50), y: 1 * (r - 50) }),
                            window.TweenMax.to(m, 1.5, { x: 2 * (q - 50), y: 2 * (r - 50) }),
                            window.TweenMax.to(n, 2.5, { x: 0.8 * -(q - 50), y: 0.8 * -(r - 50) });
                    }
                },
                t = function (a) {
                    var b = j.width(),
                        c = j.height(),
                        e = q.trees,
                        g = q.mount,
                        h = q.clouds;
                    if (f()(window).scrollTop() < c) {
                        var i = b <= c,
                            o = a.x,
                            p = a.y,
                            r = i ? d(o) : d(p),
                            s = i ? d(p) : d(o),
                            t = 5 * (r + 10),
                            u = 5 * (s + 10);
                        window.TweenMax.to(k, 1, { backgroundPositionX: t, backgroundPositionY: -u }),
                            window.TweenMax.to(l, 1, { x: (t - 50) * e.multipliers.x, y: (u - 50) * e.multipliers.y }),
                            window.TweenMax.to(m, 1.5, { x: (t - 50) * g.multipliers.x, y: (u - 50) * g.multipliers.y }),
                            window.TweenMax.to(n, 2.5, { x: -(t - 50) * h.multipliers.x, y: -(u - 50) * h.multipliers.y });
                    }
                },
                u = function () {
                    r(),
                        j.on(
                            "mousemove",
                            Object(g.throttle)(function (a) {
                                r(a);
                            }, 1e3 / 60)
                        ),
                        window.Accelerometer
                            ? window.navigator.permissions
                                  .query({ name: "accelerometer" })
                                  .then(function (a) {
                                      if ("granted" === a.state) {
                                          var b = new window.Accelerometer({ frequency: 20 });
                                          b.addEventListener("reading", function () {
                                              t(b);
                                          }),
                                              b.start();
                                      }
                                  })
                                  .catch(function (a) {
                                      return console.error(a);
                                  })
                            : window.DeviceMotionEvent &&
                              window.addEventListener(
                                  "devicemotion",
                                  Object(g.throttle)(function (a) {
                                      s(a);
                                  }, 1e3 / 60)
                              );
                };
        },
        tmUY: function (a, b) {
            "use strict";
            var c = window.TweenMax,
                d = function (a, b) {
                    c.fromTo(a, 0.4, { x: 50 * b, autoAlpha: 0 }, { x: 0, autoAlpha: 1, delay: 0.1 });
                },
                e = function (a, b) {
                    c.fromTo(a, 0.3, { x: 0, autoAlpha: 1 }, { x: 50 * b, autoAlpha: 0 });
                };
            b.a = function (a) {
                var b = a.querySelectorAll(".slider__bottle"),
                    c = a.querySelector(".slider__arrow-left"),
                    d = a.querySelector(".slider__arrow-right"),
                    e = 0,
                    g = b.length - 1;
                (b[e].style.opacity = 1), 1 >= b.length ? ((c.style.display = "none"), (d.style.display = "none")) : f({ left: c, right: d, bottles: b, amount: g, current: e });
            };
            var f = function (a) {
                var b = a.left,
                    c = a.right,
                    f = a.bottles,
                    g = a.amount,
                    h = a.current;
                c.addEventListener("click", function () {
                    e(f[h], -1), h < g ? (d(f[h + 1], 1), h++) : (d(f[0], 1), (h = 0));
                }),
                    b.addEventListener("click", function () {
                        e(f[h], 1), 0 < h ? (d(f[h - 1], -1), h--) : (d(f[g], -1), (h = g));
                    });
            };
        },
    },
    ["3qiv"]
);
