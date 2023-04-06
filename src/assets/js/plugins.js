// Plugins jQuery File

/* ------------------------------------------------------
    Index 
-------------------------------------
-------------------------------------
    1. jQuery Nice Select
    2. Owl Carousel
    3. Countdown jQuery

------------------------------------------------------ */

// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {};
    var methods = [
        "assert",
        "clear",
        "count",
        "debug",
        "dir",
        "dirxml",
        "error",
        "exception",
        "group",
        "groupCollapsed",
        "groupEnd",
        "info",
        "log",
        "markTimeline",
        "profile",
        "profileEnd",
        "table",
        "time",
        "timeEnd",
        "timeline",
        "timelineEnd",
        "timeStamp",
        "trace",
        "warn",
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
})();

// Place any jQuery/helper plugins in here.

/* -------------------------------------------------
    1. jQuery Nice Select
-------------------------------------------------- */

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!(function (e) {
    e.fn.niceSelect = function (t) {
        function s(t) {
            t.after(
                e("<div></div>")
                    .addClass("nice-select")
                    .addClass(t.attr("class") || "")
                    .addClass(t.attr("disabled") ? "disabled" : "")
                    .attr("tabindex", t.attr("disabled") ? null : "0")
                    .html('<span class="current"></span><ul class="list"></ul>')
            );
            var s = t.next(),
                n = t.find("option"),
                i = t.find("option:selected");
            s.find(".current").html(i.data("display") || i.text()),
                n.each(function (t) {
                    var n = e(this),
                        i = n.data("display");
                    s.find("ul").append(
                        e("<li></li>")
                            .attr("data-value", n.val())
                            .attr("data-display", i || null)
                            .addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : ""))
                            .html(n.text())
                    );
                });
        }
        if ("string" == typeof t)
            return (
                "update" == t
                    ? this.each(function () {
                          var t = e(this),
                              n = e(this).next(".nice-select"),
                              i = n.hasClass("open");
                          n.length && (n.remove(), s(t), i && t.next().trigger("click"));
                      })
                    : "destroy" == t
                    ? (this.each(function () {
                          var t = e(this),
                              s = e(this).next(".nice-select");
                          s.length && (s.remove(), t.css("display", ""));
                      }),
                      0 == e(".nice-select").length && e(document).off(".nice_select"))
                    : console.log('Method "' + t + '" does not exist.'),
                this
            );
        this.hide(),
            this.each(function () {
                var t = e(this);
                t.next().hasClass("nice-select") || s(t);
            }),
            e(document).off(".nice_select"),
            e(document).on("click.nice_select", ".nice-select", function (t) {
                var s = e(this);
                e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus();
            }),
            e(document).on("click.nice_select", function (t) {
                0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option");
            }),
            e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
                var s = e(this),
                    n = s.closest(".nice-select");
                n.find(".selected").removeClass("selected"), s.addClass("selected");
                var i = s.data("display") || s.text();
                n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change");
            }),
            e(document).on("keydown.nice_select", ".nice-select", function (t) {
                var s = e(this),
                    n = e(s.find(".focus") || s.find(".list .option.selected"));
                if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;
                if (40 == t.keyCode) {
                    if (s.hasClass("open")) {
                        var i = n.nextAll(".option:not(.disabled)").first();
                        i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"));
                    } else s.trigger("click");
                    return !1;
                }
                if (38 == t.keyCode) {
                    if (s.hasClass("open")) {
                        var l = n.prevAll(".option:not(.disabled)").first();
                        l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"));
                    } else s.trigger("click");
                    return !1;
                }
                if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
                else if (9 == t.keyCode && s.hasClass("open")) return !1;
            });
        var n = document.createElement("a").style;
        return (n.cssText = "pointer-events:auto"), "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this;
    };
})(jQuery);

/*!
 * jquery.counterup.min.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */ (function (e) {
    "use strict";
    e.fn.counterUp = function (t) {
        var n = e.extend({ time: 400, delay: 10 }, t);
        return this.each(function () {
            var t = e(this),
                r = n,
                i = function () {
                    var e = [],
                        n = r.time / r.delay,
                        i = t.text(),
                        s = /[0-9]+,[0-9]+/.test(i);
                    i = i.replace(/,/g, "");
                    var o = /^[0-9]+$/.test(i),
                        u = /^[0-9]+\.[0-9]+$/.test(i),
                        a = u ? (i.split(".")[1] || []).length : 0;
                    for (var f = n; f >= 1; f--) {
                        var l = parseInt((i / n) * f);
                        u && (l = parseFloat((i / n) * f).toFixed(a));
                        if (s) while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        e.unshift(l);
                    }
                    t.data("counterup-nums", e);
                    t.text("0");
                    var c = function () {
                        t.text(t.data("counterup-nums").shift());
                        if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay);
                        else {
                            delete t.data("counterup-nums");
                            t.data("counterup-nums", null);
                            t.data("counterup-func", null);
                        }
                    };
                    t.data("counterup-func", c);
                    setTimeout(t.data("counterup-func"), r.delay);
                };
            t.waypoint(i, { offset: "100%", triggerOnce: !0 });
        });
    };
})(jQuery);

// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function () {
    var t =
            [].indexOf ||
            function (t) {
                for (var e = 0, n = this.length; e < n; e++) {
                    if (e in this && this[e] === t) return e;
                }
                return -1;
            },
        e = [].slice;
    (function (t, e) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", ["jquery"], function (n) {
                return e(n, t);
            });
        } else {
            return e(t.jQuery, t);
        }
    })(this, function (n, r) {
        var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
        i = n(r);
        c = t.call(r, "ontouchstart") >= 0;
        s = { horizontal: {}, vertical: {} };
        f = 1;
        a = {};
        u = "waypoints-context-id";
        p = "resize.waypoints";
        y = "scroll.waypoints";
        v = 1;
        w = "waypoints-waypoint-ids";
        g = "waypoint";
        m = "waypoints";
        o = (function () {
            function t(t) {
                var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + f++;
                this.oldScroll = { x: t.scrollLeft(), y: t.scrollTop() };
                this.waypoints = { horizontal: {}, vertical: {} };
                t.data(u, this.id);
                a[this.id] = this;
                t.bind(y, function () {
                    var t;
                    if (!(e.didScroll || c)) {
                        e.didScroll = true;
                        t = function () {
                            e.doScroll();
                            return (e.didScroll = false);
                        };
                        return r.setTimeout(t, n[m].settings.scrollThrottle);
                    }
                });
                t.bind(p, function () {
                    var t;
                    if (!e.didResize) {
                        e.didResize = true;
                        t = function () {
                            n[m]("refresh");
                            return (e.didResize = false);
                        };
                        return r.setTimeout(t, n[m].settings.resizeThrottle);
                    }
                });
            }
            t.prototype.doScroll = function () {
                var t,
                    e = this;
                t = {
                    horizontal: { newScroll: this.$element.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" },
                    vertical: { newScroll: this.$element.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" },
                };
                if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
                    n[m]("refresh");
                }
                n.each(t, function (t, r) {
                    var i, o, l;
                    l = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function (t, e) {
                        var n, i;
                        if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
                            return l.push(e);
                        } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
                            return l.push(e);
                        }
                    });
                    l.sort(function (t, e) {
                        return t.offset - e.offset;
                    });
                    if (!o) {
                        l.reverse();
                    }
                    return n.each(l, function (t, e) {
                        if (e.options.continuous || t === l.length - 1) {
                            return e.trigger([i]);
                        }
                    });
                });
                return (this.oldScroll = { x: t.horizontal.newScroll, y: t.vertical.newScroll });
            };
            t.prototype.refresh = function () {
                var t,
                    e,
                    r,
                    i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = {
                    horizontal: { contextOffset: r ? 0 : e.left, contextScroll: r ? 0 : this.oldScroll.x, contextDimension: this.$element.width(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" },
                    vertical: {
                        contextOffset: r ? 0 : e.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top",
                    },
                };
                return n.each(t, function (t, e) {
                    return n.each(i.waypoints[t], function (t, r) {
                        var i, o, l, s, f;
                        i = r.options.offset;
                        l = r.offset;
                        o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
                        if (n.isFunction(i)) {
                            i = i.apply(r.element);
                        } else if (typeof i === "string") {
                            i = parseFloat(i);
                            if (r.options.offset.indexOf("%") > -1) {
                                i = Math.ceil((e.contextDimension * i) / 100);
                            }
                        }
                        r.offset = o - e.contextOffset + e.contextScroll - i;
                        if ((r.options.onlyOnScroll && l != null) || !r.enabled) {
                            return;
                        }
                        if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
                            return r.trigger([e.backward]);
                        } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
                            return r.trigger([e.forward]);
                        } else if (l === null && e.oldScroll >= r.offset) {
                            return r.trigger([e.forward]);
                        }
                    });
                });
            };
            t.prototype.checkEmpty = function () {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([p, y].join(" "));
                    return delete a[this.id];
                }
            };
            return t;
        })();
        l = (function () {
            function t(t, e, r) {
                var i, o;
                r = n.extend({}, n.fn[g].defaults, r);
                if (r.offset === "bottom-in-view") {
                    r.offset = function () {
                        var t;
                        t = n[m]("viewportHeight");
                        if (!n.isWindow(e.element)) {
                            t = e.$element.height();
                        }
                        return t - n(this).outerHeight();
                    };
                }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + v++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                i = (o = t.data(w)) != null ? o : [];
                i.push(this.id);
                t.data(w, i);
            }
            t.prototype.trigger = function (t) {
                if (!this.enabled) {
                    return;
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, t);
                }
                if (this.options.triggerOnce) {
                    return this.destroy();
                }
            };
            t.prototype.disable = function () {
                return (this.enabled = false);
            };
            t.prototype.enable = function () {
                this.context.refresh();
                return (this.enabled = true);
            };
            t.prototype.destroy = function () {
                delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty();
            };
            t.getWaypointsByElement = function (t) {
                var e, r;
                r = n(t).data(w);
                if (!r) {
                    return [];
                }
                e = n.extend({}, s.horizontal, s.vertical);
                return n.map(r, function (t) {
                    return e[t];
                });
            };
            return t;
        })();
        d = {
            init: function (t, e) {
                var r;
                if (e == null) {
                    e = {};
                }
                if ((r = e.handler) == null) {
                    e.handler = t;
                }
                this.each(function () {
                    var t, r, i, s;
                    t = n(this);
                    i = (s = e.context) != null ? s : n.fn[g].defaults.context;
                    if (!n.isWindow(i)) {
                        i = t.closest(i);
                    }
                    i = n(i);
                    r = a[i.data(u)];
                    if (!r) {
                        r = new o(i);
                    }
                    return new l(t, r, e);
                });
                n[m]("refresh");
                return this;
            },
            disable: function () {
                return d._invoke(this, "disable");
            },
            enable: function () {
                return d._invoke(this, "enable");
            },
            destroy: function () {
                return d._invoke(this, "destroy");
            },
            prev: function (t, e) {
                return d._traverse.call(this, t, e, function (t, e, n) {
                    if (e > 0) {
                        return t.push(n[e - 1]);
                    }
                });
            },
            next: function (t, e) {
                return d._traverse.call(this, t, e, function (t, e, n) {
                    if (e < n.length - 1) {
                        return t.push(n[e + 1]);
                    }
                });
            },
            _traverse: function (t, e, i) {
                var o, l;
                if (t == null) {
                    t = "vertical";
                }
                if (e == null) {
                    e = r;
                }
                l = h.aggregate(e);
                o = [];
                this.each(function () {
                    var e;
                    e = n.inArray(this, l[t]);
                    return i(o, e, l[t]);
                });
                return this.pushStack(o);
            },
            _invoke: function (t, e) {
                t.each(function () {
                    var t;
                    t = l.getWaypointsByElement(this);
                    return n.each(t, function (t, n) {
                        n[e]();
                        return true;
                    });
                });
                return this;
            },
        };
        n.fn[g] = function () {
            var t, r;
            (r = arguments[0]), (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
            if (d[r]) {
                return d[r].apply(this, t);
            } else if (n.isFunction(r)) {
                return d.init.apply(this, arguments);
            } else if (n.isPlainObject(r)) {
                return d.init.apply(this, [null, r]);
            } else if (!r) {
                return n.error("jQuery Waypoints needs a callback function or handler option.");
            } else {
                return n.error("The " + r + " method does not exist in jQuery Waypoints.");
            }
        };
        n.fn[g].defaults = { context: r, continuous: true, enabled: true, horizontal: false, offset: 0, triggerOnce: false };
        h = {
            refresh: function () {
                return n.each(a, function (t, e) {
                    return e.refresh();
                });
            },
            viewportHeight: function () {
                var t;
                return (t = r.innerHeight) != null ? t : i.height();
            },
            aggregate: function (t) {
                var e, r, i;
                e = s;
                if (t) {
                    e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0;
                }
                if (!e) {
                    return [];
                }
                r = { horizontal: [], vertical: [] };
                n.each(r, function (t, i) {
                    n.each(e[t], function (t, e) {
                        return i.push(e);
                    });
                    i.sort(function (t, e) {
                        return t.offset - e.offset;
                    });
                    r[t] = n.map(i, function (t) {
                        return t.element;
                    });
                    return (r[t] = n.unique(r[t]));
                });
                return r;
            },
            above: function (t) {
                if (t == null) {
                    t = r;
                }
                return h._filter(t, "vertical", function (t, e) {
                    return e.offset <= t.oldScroll.y;
                });
            },
            below: function (t) {
                if (t == null) {
                    t = r;
                }
                return h._filter(t, "vertical", function (t, e) {
                    return e.offset > t.oldScroll.y;
                });
            },
            left: function (t) {
                if (t == null) {
                    t = r;
                }
                return h._filter(t, "horizontal", function (t, e) {
                    return e.offset <= t.oldScroll.x;
                });
            },
            right: function (t) {
                if (t == null) {
                    t = r;
                }
                return h._filter(t, "horizontal", function (t, e) {
                    return e.offset > t.oldScroll.x;
                });
            },
            enable: function () {
                return h._invoke("enable");
            },
            disable: function () {
                return h._invoke("disable");
            },
            destroy: function () {
                return h._invoke("destroy");
            },
            extendFn: function (t, e) {
                return (d[t] = e);
            },
            _invoke: function (t) {
                var e;
                e = n.extend({}, s.vertical, s.horizontal);
                return n.each(e, function (e, n) {
                    n[t]();
                    return true;
                });
            },
            _filter: function (t, e, r) {
                var i, o;
                i = a[n(t).data(u)];
                if (!i) {
                    return [];
                }
                o = [];
                n.each(i.waypoints[e], function (t, e) {
                    if (r(i, e)) {
                        return o.push(e);
                    }
                });
                o.sort(function (t, e) {
                    return t.offset - e.offset;
                });
                return n.map(o, function (t) {
                    return t.element;
                });
            },
        };
        n[m] = function () {
            var t, n;
            (n = arguments[0]), (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
            if (h[n]) {
                return h[n].apply(null, t);
            } else {
                return h.aggregate.call(null, n);
            }
        };
        n[m].settings = { resizeThrottle: 100, scrollThrottle: 30 };
        return i.load(function () {
            return n[m]("refresh");
        });
    });
}.call(this));

/* -------------------------------------------------
    3. Countdown jQuery
-------------------------------------------------- */
/*!
 * The Final Countdown for jQuery v2.1.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2015 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!(function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery);
})(function (a) {
    "use strict";
    function b(a) {
        if (a instanceof Date) return a;
        if (String(a).match(g)) return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")), new Date(a);
        throw new Error("Couldn't cast `" + a + "` to a date object.");
    }
    function c(a) {
        var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        return new RegExp(b);
    }
    function d(a) {
        return function (b) {
            var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (d)
                for (var f = 0, g = d.length; g > f; ++f) {
                    var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        j = c(h[0]),
                        k = h[1] || "",
                        l = h[3] || "",
                        m = null;
                    (h = h[2]), i.hasOwnProperty(h) && ((m = i[h]), (m = Number(a[m]))), null !== m && ("!" === k && (m = e(l, m)), "" === k && 10 > m && (m = "0" + m.toString()), (b = b.replace(j, m.toString())));
                }
            return (b = b.replace(/%%/, "%"));
        };
    }
    function e(a, b) {
        var c = "s",
            d = "";
        return a && ((a = a.replace(/(:|;|\s)/gi, "").split(/\,/)), 1 === a.length ? (c = a[0]) : ((d = a[0]), (c = a[1]))), 1 === Math.abs(b) ? d : c;
    }
    var f = [],
        g = [],
        h = { precision: 100, elapse: !1 };
    g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), (g = new RegExp(g.join("|")));
    var i = { Y: "years", m: "months", n: "daysToMonth", w: "weeks", d: "daysToWeek", D: "totalDays", H: "hours", M: "minutes", S: "seconds" },
        j = function (b, c, d) {
            (this.el = b),
                (this.$el = a(b)),
                (this.interval = null),
                (this.offset = {}),
                (this.options = a.extend({}, h)),
                (this.instanceNumber = f.length),
                f.push(this),
                this.$el.data("countdown-instance", this.instanceNumber),
                d && ("function" == typeof d ? (this.$el.on("update.countdown", d), this.$el.on("stoped.countdown", d), this.$el.on("finish.countdown", d)) : (this.options = a.extend({}, h, d))),
                this.setFinalDate(c),
                this.start();
        };
    a.extend(j.prototype, {
        start: function () {
            null !== this.interval && clearInterval(this.interval);
            var a = this;
            this.update(),
                (this.interval = setInterval(function () {
                    a.update.call(a);
                }, this.options.precision));
        },
        stop: function () {
            clearInterval(this.interval), (this.interval = null), this.dispatchEvent("stoped");
        },
        toggle: function () {
            this.interval ? this.stop() : this.start();
        },
        pause: function () {
            this.stop();
        },
        resume: function () {
            this.start();
        },
        remove: function () {
            this.stop.call(this), (f[this.instanceNumber] = null), delete this.$el.data().countdownInstance;
        },
        setFinalDate: function (a) {
            this.finalDate = b(a);
        },
        update: function () {
            if (0 === this.$el.closest("html").length) return void this.remove();
            var b,
                c = void 0 !== a._data(this.el, "events"),
                d = new Date();
            (b = this.finalDate.getTime() - d.getTime()),
                (b = Math.ceil(b / 1e3)),
                (b = !this.options.elapse && 0 > b ? 0 : Math.abs(b)),
                this.totalSecsLeft !== b &&
                    c &&
                    ((this.totalSecsLeft = b),
                    (this.elapsed = d >= this.finalDate),
                    (this.offset = {
                        seconds: this.totalSecsLeft % 60,
                        minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                        hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                        days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                        daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                        daysToMonth: Math.floor((this.totalSecsLeft / 60 / 60 / 24) % 30.4368),
                        totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                        weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                        months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                        years: Math.abs(this.finalDate.getFullYear() - d.getFullYear()),
                    }),
                    this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")));
        },
        dispatchEvent: function (b) {
            var c = a.Event(b + ".countdown");
            (c.finalDate = this.finalDate), (c.elapsed = this.elapsed), (c.offset = a.extend({}, this.offset)), (c.strftime = d(this.offset)), this.$el.trigger(c);
        },
    }),
        (a.fn.countdown = function () {
            var b = Array.prototype.slice.call(arguments, 0);
            return this.each(function () {
                var c = a(this).data("countdown-instance");
                if (void 0 !== c) {
                    var d = f[c],
                        e = b[0];
                    j.prototype.hasOwnProperty(e)
                        ? d[e].apply(d, b.slice(1))
                        : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)
                        ? (d.setFinalDate.call(d, e), d.start())
                        : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e));
                } else new j(this, b[0], b[1]);
            });
        });
});

/* -------------------------------------------------
    4. MeanMenu
-------------------------------------------------- */
/*!
 * jQuery meanMenu v2.0.8
 * @Copyright (C) 2012-2014 Chris Wharton @ MeanThemes (https://github.com/meanthemes/meanMenu)
 *
 */
/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * THIS SOFTWARE AND DOCUMENTATION IS PROVIDED "AS IS," AND COPYRIGHT
 * HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR
 * FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE
 * OR DOCUMENTATION WILL NOT INFRINGE ANY THIRD PARTY PATENTS,
 * COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.COPYRIGHT HOLDERS WILL NOT
 * BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL
 * DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENTATION.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://gnu.org/licenses/>.
 *
 * Find more information at http://www.meanthemes.com/plugins/meanmenu/
 *
 */
(function ($) {
    "use strict";
    $.fn.meanmenu = function (options) {
        var defaults = {
            meanMenuTarget: jQuery(this), // Target the current HTML markup you wish to replace
            meanMenuContainer: "body", // Choose where meanmenu will be placed within the HTML
            meanMenuClose: "X", // single character you want to represent the close menu button
            meanMenuCloseSize: "18px", // set font size of close button
            meanMenuOpen: "<span /><span /><span />", // text/markup you want when menu is closed
            meanRevealPosition: "", // left right or center positions
            meanRevealPositionDistance: "0", // Tweak the position of the menu
            meanRevealColour: "", // override CSS colours for the reveal background
            meanScreenWidth: "991", // set the screen width you want meanmenu to kick in at
            meanNavPush: "", // set a height here in px, em or % if you want to budge your layout now the navigation is missing.
            meanShowChildren: true, // true to show children in the menu, false to hide them
            meanExpandableChildren: true, // true to allow expand/collapse children
            meanExpand: "+", // single character you want to represent the expand for ULs
            meanContract: "-", // single character you want to represent the contract for ULs
            meanRemoveAttrs: false, // true to remove classes and IDs, false to keep them
            onePage: false, // set to true for one page sites
            meanDisplay: "block", // override display method for table cell based layouts e.g. table-cell
            removeElements: "", // set to hide page elements
        };
        options = $.extend(defaults, options);

        // get browser width
        var currentWidth = window.innerWidth || document.documentElement.clientWidth;

        return this.each(function () {
            var meanMenu = options.meanMenuTarget;
            var meanContainer = options.meanMenuContainer;
            var meanMenuClose = options.meanMenuClose;
            var meanMenuCloseSize = options.meanMenuCloseSize;
            var meanMenuOpen = options.meanMenuOpen;
            var meanRevealPosition = options.meanRevealPosition;
            var meanRevealPositionDistance = options.meanRevealPositionDistance;
            var meanRevealColour = options.meanRevealColour;
            var meanScreenWidth = options.meanScreenWidth;
            var meanNavPush = options.meanNavPush;
            var meanRevealClass = ".meanmenu-reveal";
            var meanShowChildren = options.meanShowChildren;
            var meanExpandableChildren = options.meanExpandableChildren;
            var meanExpand = options.meanExpand;
            var meanContract = options.meanContract;
            var meanRemoveAttrs = options.meanRemoveAttrs;
            var onePage = options.onePage;
            var meanDisplay = options.meanDisplay;
            var removeElements = options.removeElements;

            //detect known mobile/tablet usage
            var isMobile = false;
            if (
                navigator.userAgent.match(/iPhone/i) ||
                navigator.userAgent.match(/iPod/i) ||
                navigator.userAgent.match(/iPad/i) ||
                navigator.userAgent.match(/Android/i) ||
                navigator.userAgent.match(/Blackberry/i) ||
                navigator.userAgent.match(/Windows Phone/i)
            ) {
                isMobile = true;
            }

            if (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) {
                // add scrollbar for IE7 & 8 to stop breaking resize function on small content sites
                jQuery("html").css("overflow-y", "scroll");
            }

            var meanRevealPos = "";
            var meanCentered = function () {
                if (meanRevealPosition === "center") {
                    var newWidth = window.innerWidth || document.documentElement.clientWidth;
                    var meanCenter = newWidth / 2 - 22 + "px";
                    meanRevealPos = "left:" + meanCenter + ";right:auto;";

                    if (!isMobile) {
                        jQuery(".meanmenu-reveal").css("left", meanCenter);
                    } else {
                        jQuery(".meanmenu-reveal").animate({
                            left: meanCenter,
                        });
                    }
                }
            };

            var menuOn = false;
            var meanMenuExist = false;

            if (meanRevealPosition === "right") {
                meanRevealPos = "right:" + meanRevealPositionDistance + ";left:auto;";
            }
            if (meanRevealPosition === "left") {
                meanRevealPos = "left:" + meanRevealPositionDistance + ";right:auto;";
            }
            // run center function
            meanCentered();

            // set all styles for mean-reveal
            var $navreveal = "";

            var meanInner = function () {
                // get last class name
                if (jQuery($navreveal).is(".meanmenu-reveal.meanclose")) {
                    $navreveal.html(meanMenuClose);
                } else {
                    $navreveal.html(meanMenuOpen);
                }
            };

            // re-instate original nav (and call this on window.width functions)
            var meanOriginal = function () {
                jQuery(".mean-bar,.mean-push").remove();
                jQuery(meanContainer).removeClass("mean-container");
                jQuery(meanMenu).css("display", meanDisplay);
                menuOn = false;
                meanMenuExist = false;
                jQuery(removeElements).removeClass("mean-remove");
            };

            // navigation reveal
            var showMeanMenu = function () {
                var meanStyles = "background:" + meanRevealColour + ";color:" + meanRevealColour + ";" + meanRevealPos;
                if (currentWidth <= meanScreenWidth) {
                    jQuery(removeElements).addClass("mean-remove");
                    meanMenuExist = true;
                    // add class to body so we don't need to worry about media queries here, all CSS is wrapped in '.mean-container'
                    jQuery(meanContainer).addClass("mean-container");
                    jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + meanStyles + '">Show Navigation</a><nav class="mean-nav"></nav></div>');

                    //push meanMenu navigation into .mean-nav
                    var meanMenuContents = jQuery(meanMenu).html();
                    jQuery(".mean-nav").html(meanMenuContents);

                    // remove all classes from EVERYTHING inside meanmenu nav
                    if (meanRemoveAttrs) {
                        jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function () {
                            // First check if this has mean-remove class
                            if (jQuery(this).is(".mean-remove")) {
                                jQuery(this).attr("class", "mean-remove");
                            } else {
                                jQuery(this).removeAttr("class");
                            }
                            jQuery(this).removeAttr("id");
                        });
                    }

                    // push in a holder div (this can be used if removal of nav is causing layout issues)
                    jQuery(meanMenu).before('<div class="mean-push" />');
                    jQuery(".mean-push").css("margin-top", meanNavPush);

                    // hide current navigation and reveal mean nav link
                    jQuery(meanMenu).hide();
                    jQuery(".meanmenu-reveal").show();

                    // turn 'X' on or off
                    jQuery(meanRevealClass).html(meanMenuOpen);
                    $navreveal = jQuery(meanRevealClass);

                    //hide mean-nav ul
                    jQuery(".mean-nav ul").hide();

                    // hide sub nav
                    if (meanShowChildren) {
                        // allow expandable sub nav(s)
                        if (meanExpandableChildren) {
                            jQuery(".mean-nav ul ul").each(function () {
                                if (jQuery(this).children().length) {
                                    jQuery(this, "li:first")
                                        .parent()
                                        .append('<a class="mean-expand" href="#" style="font-size: ' + meanMenuCloseSize + '">' + meanExpand + "</a>");
                                }
                            });
                            jQuery(".mean-expand").on("click", function (e) {
                                e.preventDefault();
                                if (jQuery(this).hasClass("mean-clicked")) {
                                    jQuery(this).text(meanExpand);
                                    jQuery(this)
                                        .prev("ul")
                                        .slideUp(300, function () {});
                                } else {
                                    jQuery(this).text(meanContract);
                                    jQuery(this)
                                        .prev("ul")
                                        .slideDown(300, function () {});
                                }
                                jQuery(this).toggleClass("mean-clicked");
                            });
                        } else {
                            jQuery(".mean-nav ul ul").show();
                        }
                    } else {
                        jQuery(".mean-nav ul ul").hide();
                    }

                    // add last class to tidy up borders
                    jQuery(".mean-nav ul li").last().addClass("mean-last");
                    $navreveal.removeClass("meanclose");
                    jQuery($navreveal).click(function (e) {
                        e.preventDefault();
                        if (menuOn === false) {
                            $navreveal.css("text-align", "center");
                            $navreveal.css("text-indent", "0");
                            $navreveal.css("font-size", meanMenuCloseSize);
                            jQuery(".mean-nav ul:first").slideDown();
                            menuOn = true;
                        } else {
                            jQuery(".mean-nav ul:first").slideUp();
                            menuOn = false;
                        }
                        $navreveal.toggleClass("meanclose");
                        meanInner();
                        jQuery(removeElements).addClass("mean-remove");
                    });

                    // for one page websites, reset all variables...
                    if (onePage) {
                        jQuery(".mean-nav ul > li > a:first-child").on("click", function () {
                            jQuery(".mean-nav ul:first").slideUp();
                            menuOn = false;
                            jQuery($navreveal).toggleClass("meanclose").html(meanMenuOpen);
                        });
                    }
                } else {
                    meanOriginal();
                }
            };

            if (!isMobile) {
                // reset menu on resize above meanScreenWidth
                jQuery(window).resize(function () {
                    currentWidth = window.innerWidth || document.documentElement.clientWidth;
                    if (currentWidth > meanScreenWidth) {
                        meanOriginal();
                    } else {
                        meanOriginal();
                    }
                    if (currentWidth <= meanScreenWidth) {
                        showMeanMenu();
                        meanCentered();
                    } else {
                        meanOriginal();
                    }
                });
            }

            jQuery(window).resize(function () {
                // get browser width
                currentWidth = window.innerWidth || document.documentElement.clientWidth;

                if (!isMobile) {
                    meanOriginal();
                    if (currentWidth <= meanScreenWidth) {
                        showMeanMenu();
                        meanCentered();
                    }
                } else {
                    meanCentered();
                    if (currentWidth <= meanScreenWidth) {
                        if (meanMenuExist === false) {
                            showMeanMenu();
                        }
                    } else {
                        meanOriginal();
                    }
                }
            });

            // run main menuMenu function on load
            showMeanMenu();
        });
    };
})(jQuery);

/* -------------------------------------------------
    5. ---------------
-------------------------------------------------- */
/* img zoom */

/*!
 * @name        easyzoom
 * @author      Matt Hinchliffe <>
 * @modified    Tuesday, February 14th, 2017
 * @version     2.5.0
 */ !(function (a, b) {
    "use strict";
    "function" == typeof define && define.amd
        ? define(["jquery"], function (a) {
              b(a);
          })
        : "object" == typeof module && module.exports
        ? (module.exports = a.EasyZoom = b(require("jquery")))
        : (a.EasyZoom = b(a.jQuery));
})(this, function (a) {
    "use strict";
    function b(b, c) {
        (this.$target = a(b)), (this.opts = a.extend({}, i, c, this.$target.data())), void 0 === this.isOpen && this._init();
    }
    var c,
        d,
        e,
        f,
        g,
        h,
        i = {
            loadingNotice: "Loading image",
            errorNotice: "The image could not be loaded",
            errorDuration: 2500,
            linkAttribute: "href",
            preventClicks: !0,
            beforeShow: a.noop,
            beforeHide: a.noop,
            onShow: a.noop,
            onHide: a.noop,
            onMove: a.noop,
        };
    (b.prototype._init = function () {
        (this.$link = this.$target.find("a")),
            (this.$image = this.$target.find("img")),
            (this.$flyout = a('<div class="easyzoom-flyout" />')),
            (this.$notice = a('<div class="easyzoom-notice" />')),
            this.$target.on({
                "mousemove.easyzoom touchmove.easyzoom": a.proxy(this._onMove, this),
                "mouseleave.easyzoom touchend.easyzoom": a.proxy(this._onLeave, this),
                "mouseenter.easyzoom touchstart.easyzoom": a.proxy(this._onEnter, this),
            }),
            this.opts.preventClicks &&
                this.$target.on("click.easyzoom", function (a) {
                    a.preventDefault();
                });
    }),
        (b.prototype.show = function (a, b) {
            var g,
                h,
                i,
                j,
                k = this;
            if (this.opts.beforeShow.call(this) !== !1) {
                if (!this.isReady)
                    return this._loadImage(this.$link.attr(this.opts.linkAttribute), function () {
                        (!k.isMouseOver && b) || k.show(a);
                    });
                this.$target.append(this.$flyout),
                    (g = this.$target.width()),
                    (h = this.$target.height()),
                    (i = this.$flyout.width()),
                    (j = this.$flyout.height()),
                    (c = this.$zoom.width() - i),
                    (d = this.$zoom.height() - j),
                    c < 0 && (c = 0),
                    d < 0 && (d = 0),
                    (e = c / g),
                    (f = d / h),
                    (this.isOpen = !0),
                    this.opts.onShow.call(this),
                    a && this._move(a);
            }
        }),
        (b.prototype._onEnter = function (a) {
            var b = a.originalEvent.touches;
            (this.isMouseOver = !0), (b && 1 != b.length) || (a.preventDefault(), this.show(a, !0));
        }),
        (b.prototype._onMove = function (a) {
            this.isOpen && (a.preventDefault(), this._move(a));
        }),
        (b.prototype._onLeave = function () {
            (this.isMouseOver = !1), this.isOpen && this.hide();
        }),
        (b.prototype._onLoad = function (a) {
            a.currentTarget.width && ((this.isReady = !0), this.$notice.detach(), this.$flyout.html(this.$zoom), this.$target.removeClass("is-loading").addClass("is-ready"), a.data.call && a.data());
        }),
        (b.prototype._onError = function () {
            var a = this;
            this.$notice.text(this.opts.errorNotice),
                this.$target.removeClass("is-loading").addClass("is-error"),
                (this.detachNotice = setTimeout(function () {
                    a.$notice.detach(), (a.detachNotice = null);
                }, this.opts.errorDuration));
        }),
        (b.prototype._loadImage = function (b, c) {
            var d = new Image();
            this.$target.addClass("is-loading").append(this.$notice.text(this.opts.loadingNotice)),
                (this.$zoom = a(d).on("error", a.proxy(this._onError, this)).on("load", c, a.proxy(this._onLoad, this))),
                (d.style.position = "absolute"),
                (d.src = b);
        }),
        (b.prototype._move = function (a) {
            if (0 === a.type.indexOf("touch")) {
                var b = a.touches || a.originalEvent.touches;
                (g = b[0].pageX), (h = b[0].pageY);
            } else (g = a.pageX || g), (h = a.pageY || h);
            var i = this.$target.offset(),
                j = h - i.top,
                k = g - i.left,
                l = Math.ceil(j * f),
                m = Math.ceil(k * e);
            if (m < 0 || l < 0 || m > c || l > d) this.hide();
            else {
                var n = l * -1,
                    o = m * -1;
                this.$zoom.css({ top: n, left: o }), this.opts.onMove.call(this, n, o);
            }
        }),
        (b.prototype.hide = function () {
            this.isOpen && this.opts.beforeHide.call(this) !== !1 && (this.$flyout.detach(), (this.isOpen = !1), this.opts.onHide.call(this));
        }),
        (b.prototype.swap = function (b, c, d) {
            this.hide(),
                (this.isReady = !1),
                this.detachNotice && clearTimeout(this.detachNotice),
                this.$notice.parent().length && this.$notice.detach(),
                this.$target.removeClass("is-loading is-ready is-error"),
                this.$image.attr({ src: b, srcset: a.isArray(d) ? d.join() : d }),
                this.$link.attr(this.opts.linkAttribute, c);
        }),
        (b.prototype.teardown = function () {
            this.hide(),
                this.$target.off(".easyzoom").removeClass("is-loading is-ready is-error"),
                this.detachNotice && clearTimeout(this.detachNotice),
                delete this.$link,
                delete this.$zoom,
                delete this.$image,
                delete this.$notice,
                delete this.$flyout,
                delete this.isOpen,
                delete this.isReady;
        }),
        (a.fn.easyZoom = function (c) {
            return this.each(function () {
                var d = a.data(this, "easyZoom");
                d ? void 0 === d.isOpen && d._init() : a.data(this, "easyZoom", new b(this, c));
            });
        });
});

/* -------------------------------------------------
    6. jQuery UI - v1.11.4
-------------------------------------------------- */
/*! jQuery UI - v1.11.4 - 2015-12-03
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, button.js, slider.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery);
})(function (e) {
    function t(t, s) {
        var n,
            a,
            o,
            r = t.nodeName.toLowerCase();
        return "area" === r
            ? ((n = t.parentNode), (a = n.name), t.href && a && "map" === n.nodeName.toLowerCase() ? ((o = e("img[usemap='#" + a + "']")[0]), !!o && i(o)) : !1)
            : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t);
    }
    function i(t) {
        return (
            e.expr.filters.visible(t) &&
            !e(t)
                .parents()
                .addBack()
                .filter(function () {
                    return "hidden" === e.css(this, "visibility");
                }).length
        );
    }
    (e.ui = e.ui || {}),
        e.extend(e.ui, { version: "1.11.4", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }),
        e.fn.extend({
            scrollParent: function (t) {
                var i = this.css("position"),
                    s = "absolute" === i,
                    n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    a = this.parents()
                        .filter(function () {
                            var t = e(this);
                            return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"));
                        })
                        .eq(0);
                return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document);
            },
            uniqueId: (function () {
                var e = 0;
                return function () {
                    return this.each(function () {
                        this.id || (this.id = "ui-id-" + ++e);
                    });
                };
            })(),
            removeUniqueId: function () {
                return this.each(function () {
                    /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id");
                });
            },
        }),
        e.extend(e.expr[":"], {
            data: e.expr.createPseudo
                ? e.expr.createPseudo(function (t) {
                      return function (i) {
                          return !!e.data(i, t);
                      };
                  })
                : function (t, i, s) {
                      return !!e.data(t, s[3]);
                  },
            focusable: function (i) {
                return t(i, !isNaN(e.attr(i, "tabindex")));
            },
            tabbable: function (i) {
                var s = e.attr(i, "tabindex"),
                    n = isNaN(s);
                return (n || s >= 0) && t(i, !n);
            },
        }),
        e("<a>").outerWidth(1).jquery ||
            e.each(["Width", "Height"], function (t, i) {
                function s(t, i, s, a) {
                    return (
                        e.each(n, function () {
                            (i -= parseFloat(e.css(t, "padding" + this)) || 0), s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0);
                        }),
                        i
                    );
                }
                var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                    a = i.toLowerCase(),
                    o = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight };
                (e.fn["inner" + i] = function (t) {
                    return void 0 === t
                        ? o["inner" + i].call(this)
                        : this.each(function () {
                              e(this).css(a, s(this, t) + "px");
                          });
                }),
                    (e.fn["outer" + i] = function (t, n) {
                        return "number" != typeof t
                            ? o["outer" + i].call(this, t)
                            : this.each(function () {
                                  e(this).css(a, s(this, t, !0, n) + "px");
                              });
                    });
            }),
        e.fn.addBack ||
            (e.fn.addBack = function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            }),
        e("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
            (e.fn.removeData = (function (t) {
                return function (i) {
                    return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this);
                };
            })(e.fn.removeData)),
        (e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
        e.fn.extend({
            focus: (function (t) {
                return function (i, s) {
                    return "number" == typeof i
                        ? this.each(function () {
                              var t = this;
                              setTimeout(function () {
                                  e(t).focus(), s && s.call(t);
                              }, i);
                          })
                        : t.apply(this, arguments);
                };
            })(e.fn.focus),
            disableSelection: (function () {
                var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function () {
                    return this.bind(e + ".ui-disableSelection", function (e) {
                        e.preventDefault();
                    });
                };
            })(),
            enableSelection: function () {
                return this.unbind(".ui-disableSelection");
            },
            zIndex: function (t) {
                if (void 0 !== t) return this.css("zIndex", t);
                if (this.length)
                    for (var i, s, n = e(this[0]); n.length && n[0] !== document; ) {
                        if (((i = n.css("position")), ("absolute" === i || "relative" === i || "fixed" === i) && ((s = parseInt(n.css("zIndex"), 10)), !isNaN(s) && 0 !== s))) return s;
                        n = n.parent();
                    }
                return 0;
            },
        }),
        (e.ui.plugin = {
            add: function (t, i, s) {
                var n,
                    a = e.ui[t].prototype;
                for (n in s) (a.plugins[n] = a.plugins[n] || []), a.plugins[n].push([i, s[n]]);
            },
            call: function (e, t, i, s) {
                var n,
                    a = e.plugins[t];
                if (a && (s || (e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))) for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i);
            },
        });
    var s = 0,
        n = Array.prototype.slice;
    (e.cleanData = (function (t) {
        return function (i) {
            var s, n, a;
            for (a = 0; null != (n = i[a]); a++)
                try {
                    (s = e._data(n, "events")), s && s.remove && e(n).triggerHandler("remove");
                } catch (o) {}
            t(i);
        };
    })(e.cleanData)),
        (e.widget = function (t, i, s) {
            var n,
                a,
                o,
                r,
                h = {},
                l = t.split(".")[0];
            return (
                (t = t.split(".")[1]),
                (n = l + "-" + t),
                s || ((s = i), (i = e.Widget)),
                (e.expr[":"][n.toLowerCase()] = function (t) {
                    return !!e.data(t, n);
                }),
                (e[l] = e[l] || {}),
                (a = e[l][t]),
                (o = e[l][t] = function (e, t) {
                    return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t);
                }),
                e.extend(o, a, { version: s.version, _proto: e.extend({}, s), _childConstructors: [] }),
                (r = new i()),
                (r.options = e.widget.extend({}, r.options)),
                e.each(s, function (t, s) {
                    return e.isFunction(s)
                        ? ((h[t] = (function () {
                              var e = function () {
                                      return i.prototype[t].apply(this, arguments);
                                  },
                                  n = function (e) {
                                      return i.prototype[t].apply(this, e);
                                  };
                              return function () {
                                  var t,
                                      i = this._super,
                                      a = this._superApply;
                                  return (this._super = e), (this._superApply = n), (t = s.apply(this, arguments)), (this._super = i), (this._superApply = a), t;
                              };
                          })()),
                          void 0)
                        : ((h[t] = s), void 0);
                }),
                (o.prototype = e.widget.extend(r, { widgetEventPrefix: a ? r.widgetEventPrefix || t : t }, h, { constructor: o, namespace: l, widgetName: t, widgetFullName: n })),
                a
                    ? (e.each(a._childConstructors, function (t, i) {
                          var s = i.prototype;
                          e.widget(s.namespace + "." + s.widgetName, o, i._proto);
                      }),
                      delete a._childConstructors)
                    : i._childConstructors.push(o),
                e.widget.bridge(t, o),
                o
            );
        }),
        (e.widget.extend = function (t) {
            for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++)
                for (i in a[o]) (s = a[o][i]), a[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? (e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s)) : s);
            return t;
        }),
        (e.widget.bridge = function (t, i) {
            var s = i.prototype.widgetFullName || t;
            e.fn[t] = function (a) {
                var o = "string" == typeof a,
                    r = n.call(arguments, 1),
                    h = this;
                return (
                    o
                        ? this.each(function () {
                              var i,
                                  n = e.data(this, s);
                              return "instance" === a
                                  ? ((h = n), !1)
                                  : n
                                  ? e.isFunction(n[a]) && "_" !== a.charAt(0)
                                      ? ((i = n[a].apply(n, r)), i !== n && void 0 !== i ? ((h = i && i.jquery ? h.pushStack(i.get()) : i), !1) : void 0)
                                      : e.error("no such method '" + a + "' for " + t + " widget instance")
                                  : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + a + "'");
                          })
                        : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))),
                          this.each(function () {
                              var t = e.data(this, s);
                              t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new i(a, this));
                          })),
                    h
                );
            };
        }),
        (e.Widget = function () {}),
        (e.Widget._childConstructors = []),
        (e.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: { disabled: !1, create: null },
            _createWidget: function (t, i) {
                (i = e(i || this.defaultElement || this)[0]),
                    (this.element = e(i)),
                    (this.uuid = s++),
                    (this.eventNamespace = "." + this.widgetName + this.uuid),
                    (this.bindings = e()),
                    (this.hoverable = e()),
                    (this.focusable = e()),
                    i !== this &&
                        (e.data(i, this.widgetFullName, this),
                        this._on(!0, this.element, {
                            remove: function (e) {
                                e.target === i && this.destroy();
                            },
                        }),
                        (this.document = e(i.style ? i.ownerDocument : i.document || i)),
                        (this.window = e(this.document[0].defaultView || this.document[0].parentWindow))),
                    (this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t)),
                    this._create(),
                    this._trigger("create", null, this._getCreateEventData()),
                    this._init();
            },
            _getCreateOptions: e.noop,
            _getCreateEventData: e.noop,
            _create: e.noop,
            _init: e.noop,
            destroy: function () {
                this._destroy(),
                    this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
                    this.widget()
                        .unbind(this.eventNamespace)
                        .removeAttr("aria-disabled")
                        .removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"),
                    this.bindings.unbind(this.eventNamespace),
                    this.hoverable.removeClass("ui-state-hover"),
                    this.focusable.removeClass("ui-state-focus");
            },
            _destroy: e.noop,
            widget: function () {
                return this.element;
            },
            option: function (t, i) {
                var s,
                    n,
                    a,
                    o = t;
                if (0 === arguments.length) return e.widget.extend({}, this.options);
                if ("string" == typeof t)
                    if (((o = {}), (s = t.split(".")), (t = s.shift()), s.length)) {
                        for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) (n[s[a]] = n[s[a]] || {}), (n = n[s[a]]);
                        if (((t = s.pop()), 1 === arguments.length)) return void 0 === n[t] ? null : n[t];
                        n[t] = i;
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                        o[t] = i;
                    }
                return this._setOptions(o), this;
            },
            _setOptions: function (e) {
                var t;
                for (t in e) this._setOption(t, e[t]);
                return this;
            },
            _setOption: function (e, t) {
                return (this.options[e] = t), "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this;
            },
            enable: function () {
                return this._setOptions({ disabled: !1 });
            },
            disable: function () {
                return this._setOptions({ disabled: !0 });
            },
            _on: function (t, i, s) {
                var n,
                    a = this;
                "boolean" != typeof t && ((s = i), (i = t), (t = !1)),
                    s ? ((i = n = e(i)), (this.bindings = this.bindings.add(i))) : ((s = i), (i = this.element), (n = this.widget())),
                    e.each(s, function (s, o) {
                        function r() {
                            return t || (a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled")) ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0;
                        }
                        "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
                        var h = s.match(/^([\w:-]*)\s*(.*)$/),
                            l = h[1] + a.eventNamespace,
                            u = h[2];
                        u ? n.delegate(u, l, r) : i.bind(l, r);
                    });
            },
            _off: function (t, i) {
                (i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace),
                    t.unbind(i).undelegate(i),
                    (this.bindings = e(this.bindings.not(t).get())),
                    (this.focusable = e(this.focusable.not(t).get())),
                    (this.hoverable = e(this.hoverable.not(t).get()));
            },
            _delay: function (e, t) {
                function i() {
                    return ("string" == typeof e ? s[e] : e).apply(s, arguments);
                }
                var s = this;
                return setTimeout(i, t || 0);
            },
            _hoverable: function (t) {
                (this.hoverable = this.hoverable.add(t)),
                    this._on(t, {
                        mouseenter: function (t) {
                            e(t.currentTarget).addClass("ui-state-hover");
                        },
                        mouseleave: function (t) {
                            e(t.currentTarget).removeClass("ui-state-hover");
                        },
                    });
            },
            _focusable: function (t) {
                (this.focusable = this.focusable.add(t)),
                    this._on(t, {
                        focusin: function (t) {
                            e(t.currentTarget).addClass("ui-state-focus");
                        },
                        focusout: function (t) {
                            e(t.currentTarget).removeClass("ui-state-focus");
                        },
                    });
            },
            _trigger: function (t, i, s) {
                var n,
                    a,
                    o = this.options[t];
                if (((s = s || {}), (i = e.Event(i)), (i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase()), (i.target = this.element[0]), (a = i.originalEvent))) for (n in a) n in i || (i[n] = a[n]);
                return this.element.trigger(i, s), !((e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1) || i.isDefaultPrevented());
            },
        }),
        e.each({ show: "fadeIn", hide: "fadeOut" }, function (t, i) {
            e.Widget.prototype["_" + t] = function (s, n, a) {
                "string" == typeof n && (n = { effect: n });
                var o,
                    r = n ? (n === !0 || "number" == typeof n ? i : n.effect || i) : t;
                (n = n || {}),
                    "number" == typeof n && (n = { duration: n }),
                    (o = !e.isEmptyObject(n)),
                    (n.complete = a),
                    n.delay && s.delay(n.delay),
                    o && e.effects && e.effects.effect[r]
                        ? s[t](n)
                        : r !== t && s[r]
                        ? s[r](n.duration, n.easing, a)
                        : s.queue(function (i) {
                              e(this)[t](), a && a.call(s[0]), i();
                          });
            };
        }),
        e.widget;
    var a = !1;
    e(document).mouseup(function () {
        a = !1;
    }),
        e.widget("ui.mouse", {
            version: "1.11.4",
            options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 },
            _mouseInit: function () {
                var t = this;
                this.element
                    .bind("mousedown." + this.widgetName, function (e) {
                        return t._mouseDown(e);
                    })
                    .bind("click." + this.widgetName, function (i) {
                        return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0;
                    }),
                    (this.started = !1);
            },
            _mouseDestroy: function () {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            },
            _mouseDown: function (t) {
                if (!a) {
                    (this._mouseMoved = !1), this._mouseStarted && this._mouseUp(t), (this._mouseDownEvent = t);
                    var i = this,
                        s = 1 === t.which,
                        n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                    return s && !n && this._mouseCapture(t)
                        ? ((this.mouseDelayMet = !this.options.delay),
                          this.mouseDelayMet ||
                              (this._mouseDelayTimer = setTimeout(function () {
                                  i.mouseDelayMet = !0;
                              }, this.options.delay)),
                          this._mouseDistanceMet(t) && this._mouseDelayMet(t) && ((this._mouseStarted = this._mouseStart(t) !== !1), !this._mouseStarted)
                              ? (t.preventDefault(), !0)
                              : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"),
                                (this._mouseMoveDelegate = function (e) {
                                    return i._mouseMove(e);
                                }),
                                (this._mouseUpDelegate = function (e) {
                                    return i._mouseUp(e);
                                }),
                                this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                                t.preventDefault(),
                                (a = !0),
                                !0))
                        : !0;
                }
            },
            _mouseMove: function (t) {
                if (this._mouseMoved) {
                    if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
                    if (!t.which) return this._mouseUp(t);
                }
                return (
                    (t.which || t.button) && (this._mouseMoved = !0),
                    this._mouseStarted
                        ? (this._mouseDrag(t), t.preventDefault())
                        : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && ((this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
                );
            },
            _mouseUp: function (t) {
                return (
                    this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
                    this._mouseStarted && ((this._mouseStarted = !1), t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)),
                    (a = !1),
                    !1
                );
            },
            _mouseDistanceMet: function (e) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
            },
            _mouseDelayMet: function () {
                return this.mouseDelayMet;
            },
            _mouseStart: function () {},
            _mouseDrag: function () {},
            _mouseStop: function () {},
            _mouseCapture: function () {
                return !0;
            },
        });
    var o,
        r = "ui-button ui-widget ui-state-default ui-corner-all",
        h = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        l = function () {
            var t = e(this);
            setTimeout(function () {
                t.find(":ui-button").button("refresh");
            }, 1);
        },
        u = function (t) {
            var i = t.name,
                s = t.form,
                n = e([]);
            return (
                i &&
                    ((i = i.replace(/'/g, "\\'")),
                    (n = s
                        ? e(s).find("[name='" + i + "'][type=radio]")
                        : e("[name='" + i + "'][type=radio]", t.ownerDocument).filter(function () {
                              return !this.form;
                          }))),
                n
            );
        };
    e.widget("ui.button", {
        version: "1.11.4",
        defaultElement: "<button>",
        options: { disabled: null, text: !0, label: null, icons: { primary: null, secondary: null } },
        _create: function () {
            this.element
                .closest("form")
                .unbind("reset" + this.eventNamespace)
                .bind("reset" + this.eventNamespace, l),
                "boolean" != typeof this.options.disabled ? (this.options.disabled = !!this.element.prop("disabled")) : this.element.prop("disabled", this.options.disabled),
                this._determineButtonType(),
                (this.hasTitle = !!this.buttonElement.attr("title"));
            var t = this,
                i = this.options,
                s = "checkbox" === this.type || "radio" === this.type,
                n = s ? "" : "ui-state-active";
            null === i.label && (i.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()),
                this._hoverable(this.buttonElement),
                this.buttonElement
                    .addClass(r)
                    .attr("role", "button")
                    .bind("mouseenter" + this.eventNamespace, function () {
                        i.disabled || (this === o && e(this).addClass("ui-state-active"));
                    })
                    .bind("mouseleave" + this.eventNamespace, function () {
                        i.disabled || e(this).removeClass(n);
                    })
                    .bind("click" + this.eventNamespace, function (e) {
                        i.disabled && (e.preventDefault(), e.stopImmediatePropagation());
                    }),
                this._on({
                    focus: function () {
                        this.buttonElement.addClass("ui-state-focus");
                    },
                    blur: function () {
                        this.buttonElement.removeClass("ui-state-focus");
                    },
                }),
                s &&
                    this.element.bind("change" + this.eventNamespace, function () {
                        t.refresh();
                    }),
                "checkbox" === this.type
                    ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                          return i.disabled ? !1 : void 0;
                      })
                    : "radio" === this.type
                    ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                          if (i.disabled) return !1;
                          e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
                          var s = t.element[0];
                          u(s)
                              .not(s)
                              .map(function () {
                                  return e(this).button("widget")[0];
                              })
                              .removeClass("ui-state-active")
                              .attr("aria-pressed", "false");
                      })
                    : (this.buttonElement
                          .bind("mousedown" + this.eventNamespace, function () {
                              return i.disabled
                                  ? !1
                                  : (e(this).addClass("ui-state-active"),
                                    (o = this),
                                    t.document.one("mouseup", function () {
                                        o = null;
                                    }),
                                    void 0);
                          })
                          .bind("mouseup" + this.eventNamespace, function () {
                              return i.disabled ? !1 : (e(this).removeClass("ui-state-active"), void 0);
                          })
                          .bind("keydown" + this.eventNamespace, function (t) {
                              return i.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), void 0);
                          })
                          .bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
                              e(this).removeClass("ui-state-active");
                          }),
                      this.buttonElement.is("a") &&
                          this.buttonElement.keyup(function (t) {
                              t.keyCode === e.ui.keyCode.SPACE && e(this).click();
                          })),
                this._setOption("disabled", i.disabled),
                this._resetButton();
        },
        _determineButtonType: function () {
            var e, t, i;
            (this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button"),
                "checkbox" === this.type || "radio" === this.type
                    ? ((e = this.element.parents().last()),
                      (t = "label[for='" + this.element.attr("id") + "']"),
                      (this.buttonElement = e.find(t)),
                      this.buttonElement.length || ((e = e.length ? e.siblings() : this.element.siblings()), (this.buttonElement = e.filter(t)), this.buttonElement.length || (this.buttonElement = e.find(t))),
                      this.element.addClass("ui-helper-hidden-accessible"),
                      (i = this.element.is(":checked")),
                      i && this.buttonElement.addClass("ui-state-active"),
                      this.buttonElement.prop("aria-pressed", i))
                    : (this.buttonElement = this.element);
        },
        widget: function () {
            return this.buttonElement;
        },
        _destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"),
                this.buttonElement
                    .removeClass(r + " ui-state-active " + h)
                    .removeAttr("role")
                    .removeAttr("aria-pressed")
                    .html(this.buttonElement.find(".ui-button-text").html()),
                this.hasTitle || this.buttonElement.removeAttr("title");
        },
        _setOption: function (e, t) {
            return (
                this._super(e, t),
                "disabled" === e
                    ? (this.widget().toggleClass("ui-state-disabled", !!t),
                      this.element.prop("disabled", !!t),
                      t && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")),
                      void 0)
                    : (this._resetButton(), void 0)
            );
        },
        refresh: function () {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t),
                "radio" === this.type
                    ? u(this.element[0]).each(function () {
                          e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false");
                      })
                    : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"));
        },
        _resetButton: function () {
            if ("input" === this.type) return this.options.label && this.element.val(this.options.label), void 0;
            var t = this.buttonElement.removeClass(h),
                i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                s = this.options.icons,
                n = s.primary && s.secondary,
                a = [];
            s.primary || s.secondary
                ? (this.options.text && a.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")),
                  s.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"),
                  s.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"),
                  this.options.text || (a.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i))))
                : a.push("ui-button-text-only"),
                t.addClass(a.join(" "));
        },
    }),
        e.widget("ui.buttonset", {
            version: "1.11.4",
            options: { items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)" },
            _create: function () {
                this.element.addClass("ui-buttonset");
            },
            _init: function () {
                this.refresh();
            },
            _setOption: function (e, t) {
                "disabled" === e && this.buttons.button("option", e, t), this._super(e, t);
            },
            refresh: function () {
                var t = "rtl" === this.element.css("direction"),
                    i = this.element.find(this.options.items),
                    s = i.filter(":ui-button");
                i.not(":ui-button").button(),
                    s.button("refresh"),
                    (this.buttons = i
                        .map(function () {
                            return e(this).button("widget")[0];
                        })
                        .removeClass("ui-corner-all ui-corner-left ui-corner-right")
                        .filter(":first")
                        .addClass(t ? "ui-corner-right" : "ui-corner-left")
                        .end()
                        .filter(":last")
                        .addClass(t ? "ui-corner-left" : "ui-corner-right")
                        .end()
                        .end());
            },
            _destroy: function () {
                this.element.removeClass("ui-buttonset"),
                    this.buttons
                        .map(function () {
                            return e(this).button("widget")[0];
                        })
                        .removeClass("ui-corner-left ui-corner-right")
                        .end()
                        .button("destroy");
            },
        }),
        e.ui.button,
        e.widget("ui.slider", e.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "slide",
            options: { animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null },
            numPages: 5,
            _create: function () {
                (this._keySliding = !1),
                    (this._mouseSliding = !1),
                    (this._animateOff = !0),
                    (this._handleIndex = null),
                    this._detectOrientation(),
                    this._mouseInit(),
                    this._calculateNewMax(),
                    this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"),
                    this._refresh(),
                    this._setOption("disabled", this.options.disabled),
                    (this._animateOff = !1);
            },
            _refresh: function () {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
            },
            _createHandles: function () {
                var t,
                    i,
                    s = this.options,
                    n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
                    o = [];
                for (i = (s.values && s.values.length) || 1, n.length > i && (n.slice(i).remove(), (n = n.slice(0, i))), t = n.length; i > t; t++) o.push(a);
                (this.handles = n.add(e(o.join("")).appendTo(this.element))),
                    (this.handle = this.handles.eq(0)),
                    this.handles.each(function (t) {
                        e(this).data("ui-slider-handle-index", t);
                    });
            },
            _createRange: function () {
                var t = this.options,
                    i = "";
                t.range
                    ? (t.range === !0 &&
                          (t.values ? (t.values.length && 2 !== t.values.length ? (t.values = [t.values[0], t.values[0]]) : e.isArray(t.values) && (t.values = t.values.slice(0))) : (t.values = [this._valueMin(), this._valueMin()])),
                      this.range && this.range.length
                          ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({ left: "", bottom: "" })
                          : ((this.range = e("<div></div>").appendTo(this.element)), (i = "ui-slider-range ui-widget-header ui-corner-all")),
                      this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : "")))
                    : (this.range && this.range.remove(), (this.range = null));
            },
            _setupEvents: function () {
                this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
            },
            _destroy: function () {
                this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy();
            },
            _mouseCapture: function (t) {
                var i,
                    s,
                    n,
                    a,
                    o,
                    r,
                    h,
                    l,
                    u = this,
                    d = this.options;
                return d.disabled
                    ? !1
                    : ((this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }),
                      (this.elementOffset = this.element.offset()),
                      (i = { x: t.pageX, y: t.pageY }),
                      (s = this._normValueFromMouse(i)),
                      (n = this._valueMax() - this._valueMin() + 1),
                      this.handles.each(function (t) {
                          var i = Math.abs(s - u.values(t));
                          (n > i || (n === i && (t === u._lastChangedValue || u.values(t) === d.min))) && ((n = i), (a = e(this)), (o = t));
                      }),
                      (r = this._start(t, o)),
                      r === !1
                          ? !1
                          : ((this._mouseSliding = !0),
                            (this._handleIndex = o),
                            a.addClass("ui-state-active").focus(),
                            (h = a.offset()),
                            (l = !e(t.target).parents().addBack().is(".ui-slider-handle")),
                            (this._clickOffset = l
                                ? { left: 0, top: 0 }
                                : {
                                      left: t.pageX - h.left - a.width() / 2,
                                      top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0),
                                  }),
                            this.handles.hasClass("ui-state-hover") || this._slide(t, o, s),
                            (this._animateOff = !0),
                            !0));
            },
            _mouseStart: function () {
                return !0;
            },
            _mouseDrag: function (e) {
                var t = { x: e.pageX, y: e.pageY },
                    i = this._normValueFromMouse(t);
                return this._slide(e, this._handleIndex, i), !1;
            },
            _mouseStop: function (e) {
                return (
                    this.handles.removeClass("ui-state-active"),
                    (this._mouseSliding = !1),
                    this._stop(e, this._handleIndex),
                    this._change(e, this._handleIndex),
                    (this._handleIndex = null),
                    (this._clickOffset = null),
                    (this._animateOff = !1),
                    !1
                );
            },
            _detectOrientation: function () {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
            },
            _normValueFromMouse: function (e) {
                var t, i, s, n, a;
                return (
                    "horizontal" === this.orientation
                        ? ((t = this.elementSize.width), (i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)))
                        : ((t = this.elementSize.height), (i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0))),
                    (s = i / t),
                    s > 1 && (s = 1),
                    0 > s && (s = 0),
                    "vertical" === this.orientation && (s = 1 - s),
                    (n = this._valueMax() - this._valueMin()),
                    (a = this._valueMin() + s * n),
                    this._trimAlignValue(a)
                );
            },
            _start: function (e, t) {
                var i = { handle: this.handles[t], value: this.value() };
                return this.options.values && this.options.values.length && ((i.value = this.values(t)), (i.values = this.values())), this._trigger("start", e, i);
            },
            _slide: function (e, t, i) {
                var s, n, a;
                this.options.values && this.options.values.length
                    ? ((s = this.values(t ? 0 : 1)),
                      2 === this.options.values.length && this.options.range === !0 && ((0 === t && i > s) || (1 === t && s > i)) && (i = s),
                      i !== this.values(t) && ((n = this.values()), (n[t] = i), (a = this._trigger("slide", e, { handle: this.handles[t], value: i, values: n })), (s = this.values(t ? 0 : 1)), a !== !1 && this.values(t, i)))
                    : i !== this.value() && ((a = this._trigger("slide", e, { handle: this.handles[t], value: i })), a !== !1 && this.value(i));
            },
            _stop: function (e, t) {
                var i = { handle: this.handles[t], value: this.value() };
                this.options.values && this.options.values.length && ((i.value = this.values(t)), (i.values = this.values())), this._trigger("stop", e, i);
            },
            _change: function (e, t) {
                if (!this._keySliding && !this._mouseSliding) {
                    var i = { handle: this.handles[t], value: this.value() };
                    this.options.values && this.options.values.length && ((i.value = this.values(t)), (i.values = this.values())), (this._lastChangedValue = t), this._trigger("change", e, i);
                }
            },
            value: function (e) {
                return arguments.length ? ((this.options.value = this._trimAlignValue(e)), this._refreshValue(), this._change(null, 0), void 0) : this._value();
            },
            values: function (t, i) {
                var s, n, a;
                if (arguments.length > 1) return (this.options.values[t] = this._trimAlignValue(i)), this._refreshValue(), this._change(null, t), void 0;
                if (!arguments.length) return this._values();
                if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
                for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) (s[a] = this._trimAlignValue(n[a])), this._change(null, a);
                this._refreshValue();
            },
            _setOption: function (t, i) {
                var s,
                    n = 0;
                switch (
                    ("range" === t &&
                        this.options.range === !0 &&
                        ("min" === i ? ((this.options.value = this._values(0)), (this.options.values = null)) : "max" === i && ((this.options.value = this._values(this.options.values.length - 1)), (this.options.values = null))),
                    e.isArray(this.options.values) && (n = this.options.values.length),
                    "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i),
                    this._super(t, i),
                    t)
                ) {
                    case "orientation":
                        this._detectOrientation(),
                            this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
                            this._refreshValue(),
                            this.handles.css("horizontal" === i ? "bottom" : "left", "");
                        break;
                    case "value":
                        (this._animateOff = !0), this._refreshValue(), this._change(null, 0), (this._animateOff = !1);
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                        this._animateOff = !1;
                        break;
                    case "step":
                    case "min":
                    case "max":
                        (this._animateOff = !0), this._calculateNewMax(), this._refreshValue(), (this._animateOff = !1);
                        break;
                    case "range":
                        (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
                }
            },
            _value: function () {
                var e = this.options.value;
                return (e = this._trimAlignValue(e));
            },
            _values: function (e) {
                var t, i, s;
                if (arguments.length) return (t = this.options.values[e]), (t = this._trimAlignValue(t));
                if (this.options.values && this.options.values.length) {
                    for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                    return i;
                }
                return [];
            },
            _trimAlignValue: function (e) {
                if (this._valueMin() >= e) return this._valueMin();
                if (e >= this._valueMax()) return this._valueMax();
                var t = this.options.step > 0 ? this.options.step : 1,
                    i = (e - this._valueMin()) % t,
                    s = e - i;
                return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5));
            },
            _calculateNewMax: function () {
                var e = this.options.max,
                    t = this._valueMin(),
                    i = this.options.step,
                    s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;
                (e = s + t), (this.max = parseFloat(e.toFixed(this._precision())));
            },
            _precision: function () {
                var e = this._precisionOf(this.options.step);
                return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e;
            },
            _precisionOf: function (e) {
                var t = "" + e,
                    i = t.indexOf(".");
                return -1 === i ? 0 : t.length - i - 1;
            },
            _valueMin: function () {
                return this.options.min;
            },
            _valueMax: function () {
                return this.max;
            },
            _refreshValue: function () {
                var t,
                    i,
                    s,
                    n,
                    a,
                    o = this.options.range,
                    r = this.options,
                    h = this,
                    l = this._animateOff ? !1 : r.animate,
                    u = {};
                this.options.values && this.options.values.length
                    ? this.handles.each(function (s) {
                          (i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin()))),
                              (u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%"),
                              e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate),
                              h.options.range === !0 &&
                                  ("horizontal" === h.orientation
                                      ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ left: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ width: i - t + "%" }, { queue: !1, duration: r.animate }))
                                      : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ bottom: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ height: i - t + "%" }, { queue: !1, duration: r.animate }))),
                              (t = i);
                      })
                    : ((s = this.value()),
                      (n = this._valueMin()),
                      (a = this._valueMax()),
                      (i = a !== n ? 100 * ((s - n) / (a - n)) : 0),
                      (u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%"),
                      this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate),
                      "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: i + "%" }, r.animate),
                      "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({ width: 100 - i + "%" }, { queue: !1, duration: r.animate }),
                      "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: i + "%" }, r.animate),
                      "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({ height: 100 - i + "%" }, { queue: !1, duration: r.animate }));
            },
            _handleEvents: {
                keydown: function (t) {
                    var i,
                        s,
                        n,
                        a,
                        o = e(t.target).data("ui-slider-handle-index");
                    switch (t.keyCode) {
                        case e.ui.keyCode.HOME:
                        case e.ui.keyCode.END:
                        case e.ui.keyCode.PAGE_UP:
                        case e.ui.keyCode.PAGE_DOWN:
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            if ((t.preventDefault(), !this._keySliding && ((this._keySliding = !0), e(t.target).addClass("ui-state-active"), (i = this._start(t, o)), i === !1))) return;
                    }
                    switch (((a = this.options.step), (s = n = this.options.values && this.options.values.length ? this.values(o) : this.value()), t.keyCode)) {
                        case e.ui.keyCode.HOME:
                            n = this._valueMin();
                            break;
                        case e.ui.keyCode.END:
                            n = this._valueMax();
                            break;
                        case e.ui.keyCode.PAGE_UP:
                            n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case e.ui.keyCode.PAGE_DOWN:
                            n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                            if (s === this._valueMax()) return;
                            n = this._trimAlignValue(s + a);
                            break;
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            if (s === this._valueMin()) return;
                            n = this._trimAlignValue(s - a);
                    }
                    this._slide(t, o, n);
                },
                keyup: function (t) {
                    var i = e(t.target).data("ui-slider-handle-index");
                    this._keySliding && ((this._keySliding = !1), this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"));
                },
            },
        });
});

/* -------------------------------------------------
    7. ---------------
-------------------------------------------------- */
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
(function (i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? (module.exports = i(require("jquery"))) : i(jQuery);
})(function (i) {
    "use strict";
    var e = window.Slick || {};
    (e = (function () {
        function e(e, o) {
            var s,
                n = this;
            (n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(e),
                appendDots: i(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return i('<button type="button" />').text(t + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3,
            }),
                (n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1,
                }),
                i.extend(n, n.initials),
                (n.activeBreakpoint = null),
                (n.animType = null),
                (n.animProp = null),
                (n.breakpoints = []),
                (n.breakpointSettings = []),
                (n.cssTransitions = !1),
                (n.focussed = !1),
                (n.interrupted = !1),
                (n.hidden = "hidden"),
                (n.paused = !0),
                (n.positionProp = null),
                (n.respondTo = null),
                (n.rowCount = 1),
                (n.shouldClick = !0),
                (n.$slider = i(e)),
                (n.$slidesCache = null),
                (n.transformType = null),
                (n.transitionType = null),
                (n.visibilityChange = "visibilitychange"),
                (n.windowWidth = 0),
                (n.windowTimer = null),
                (s = i(e).data("slick") || {}),
                (n.options = i.extend({}, n.defaults, o, s)),
                (n.currentSlide = n.options.initialSlide),
                (n.originalSettings = n.options),
                "undefined" != typeof document.mozHidden
                    ? ((n.hidden = "mozHidden"), (n.visibilityChange = "mozvisibilitychange"))
                    : "undefined" != typeof document.webkitHidden && ((n.hidden = "webkitHidden"), (n.visibilityChange = "webkitvisibilitychange")),
                (n.autoPlay = i.proxy(n.autoPlay, n)),
                (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
                (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
                (n.changeSlide = i.proxy(n.changeSlide, n)),
                (n.clickHandler = i.proxy(n.clickHandler, n)),
                (n.selectHandler = i.proxy(n.selectHandler, n)),
                (n.setPosition = i.proxy(n.setPosition, n)),
                (n.swipeHandler = i.proxy(n.swipeHandler, n)),
                (n.dragHandler = i.proxy(n.dragHandler, n)),
                (n.keyHandler = i.proxy(n.keyHandler, n)),
                (n.instanceUid = t++),
                (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                n.registerBreakpoints(),
                n.init(!0);
        }
        var t = 0;
        return e;
    })()),
        (e.prototype.activateADA = function () {
            var i = this;
            i.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
        }),
        (e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
            var s = this;
            if ("boolean" == typeof t) (o = t), (t = null);
            else if (t < 0 || t >= s.slideCount) return !1;
            s.unload(),
                "number" == typeof t
                    ? 0 === t && 0 === s.$slides.length
                        ? i(e).appendTo(s.$slideTrack)
                        : o
                        ? i(e).insertBefore(s.$slides.eq(t))
                        : i(e).insertAfter(s.$slides.eq(t))
                    : o === !0
                    ? i(e).prependTo(s.$slideTrack)
                    : i(e).appendTo(s.$slideTrack),
                (s.$slides = s.$slideTrack.children(this.options.slide)),
                s.$slideTrack.children(this.options.slide).detach(),
                s.$slideTrack.append(s.$slides),
                s.$slides.each(function (e, t) {
                    i(t).attr("data-slick-index", e);
                }),
                (s.$slidesCache = s.$slides),
                s.reinit();
        }),
        (e.prototype.animateHeight = function () {
            var i = this;
            if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.animate({ height: e }, i.options.speed);
            }
        }),
        (e.prototype.animateSlide = function (e, t) {
            var o = {},
                s = this;
            s.animateHeight(),
                s.options.rtl === !0 && s.options.vertical === !1 && (e = -e),
                s.transformsEnabled === !1
                    ? s.options.vertical === !1
                        ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, t)
                        : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, t)
                    : s.cssTransitions === !1
                    ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft),
                      i({ animStart: s.currentLeft }).animate(
                          { animStart: e },
                          {
                              duration: s.options.speed,
                              easing: s.options.easing,
                              step: function (i) {
                                  (i = Math.ceil(i)), s.options.vertical === !1 ? ((o[s.animType] = "translate(" + i + "px, 0px)"), s.$slideTrack.css(o)) : ((o[s.animType] = "translate(0px," + i + "px)"), s.$slideTrack.css(o));
                              },
                              complete: function () {
                                  t && t.call();
                              },
                          }
                      ))
                    : (s.applyTransition(),
                      (e = Math.ceil(e)),
                      s.options.vertical === !1 ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)") : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
                      s.$slideTrack.css(o),
                      t &&
                          setTimeout(function () {
                              s.disableTransition(), t.call();
                          }, s.options.speed));
        }),
        (e.prototype.getNavTarget = function () {
            var e = this,
                t = e.options.asNavFor;
            return t && null !== t && (t = i(t).not(e.$slider)), t;
        }),
        (e.prototype.asNavFor = function (e) {
            var t = this,
                o = t.getNavTarget();
            null !== o &&
                "object" == typeof o &&
                o.each(function () {
                    var t = i(this).slick("getSlick");
                    t.unslicked || t.slideHandler(e, !0);
                });
        }),
        (e.prototype.applyTransition = function (i) {
            var e = this,
                t = {};
            e.options.fade === !1 ? (t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase) : (t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase),
                e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
        }),
        (e.prototype.autoPlay = function () {
            var i = this;
            i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
        }),
        (e.prototype.autoPlayClear = function () {
            var i = this;
            i.autoPlayTimer && clearInterval(i.autoPlayTimer);
        }),
        (e.prototype.autoPlayIterator = function () {
            var i = this,
                e = i.currentSlide + i.options.slidesToScroll;
            i.paused ||
                i.interrupted ||
                i.focussed ||
                (i.options.infinite === !1 &&
                    (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? (i.direction = 0) : 0 === i.direction && ((e = i.currentSlide - i.options.slidesToScroll), i.currentSlide - 1 === 0 && (i.direction = 1))),
                i.slideHandler(e));
        }),
        (e.prototype.buildArrows = function () {
            var e = this;
            e.options.arrows === !0 &&
                ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
                (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
                e.slideCount > e.options.slidesToShow
                    ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                      e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                      e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
                      e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
                      e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                    : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
        }),
        (e.prototype.buildDots = function () {
            var e,
                t,
                o = this;
            if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
                for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
                (o.$dots = t.appendTo(o.options.appendDots)), o.$dots.find("li").first().addClass("slick-active");
            }
        }),
        (e.prototype.buildOut = function () {
            var e = this;
            (e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                (e.slideCount = e.$slides.length),
                e.$slides.each(function (e, t) {
                    i(t)
                        .attr("data-slick-index", e)
                        .data("originalStyling", i(t).attr("style") || "");
                }),
                e.$slider.addClass("slick-slider"),
                (e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
                (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
                e.$slideTrack.css("opacity", 0),
                (e.options.centerMode !== !0 && e.options.swipeToSlide !== !0) || (e.options.slidesToScroll = 1),
                i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
                e.setupInfinite(),
                e.buildArrows(),
                e.buildDots(),
                e.updateDots(),
                e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                e.options.draggable === !0 && e.$list.addClass("draggable");
        }),
        (e.prototype.buildRows = function () {
            var i,
                e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            if (((o = document.createDocumentFragment()), (n = l.$slider.children()), l.options.rows > 0)) {
                for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                    var d = document.createElement("div");
                    for (e = 0; e < l.options.rows; e++) {
                        var a = document.createElement("div");
                        for (t = 0; t < l.options.slidesPerRow; t++) {
                            var c = i * r + (e * l.options.slidesPerRow + t);
                            n.get(c) && a.appendChild(n.get(c));
                        }
                        d.appendChild(a);
                    }
                    o.appendChild(d);
                }
                l.$slider.empty().append(o),
                    l.$slider
                        .children()
                        .children()
                        .children()
                        .css({ width: 100 / l.options.slidesPerRow + "%", display: "inline-block" });
            }
        }),
        (e.prototype.checkResponsive = function (e, t) {
            var o,
                s,
                n,
                r = this,
                l = !1,
                d = r.$slider.width(),
                a = window.innerWidth || i(window).width();
            if (("window" === r.respondTo ? (n = a) : "slider" === r.respondTo ? (n = d) : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive)) {
                s = null;
                for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (r.originalSettings.mobileFirst === !1 ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                null !== s
                    ? null !== r.activeBreakpoint
                        ? (s !== r.activeBreakpoint || t) &&
                          ((r.activeBreakpoint = s),
                          "unslick" === r.breakpointSettings[s] ? r.unslick(s) : ((r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s])), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)),
                          (l = s))
                        : ((r.activeBreakpoint = s),
                          "unslick" === r.breakpointSettings[s] ? r.unslick(s) : ((r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s])), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)),
                          (l = s))
                    : null !== r.activeBreakpoint && ((r.activeBreakpoint = null), (r.options = r.originalSettings), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e), (l = s)),
                    e || l === !1 || r.$slider.trigger("breakpoint", [r, l]);
            }
        }),
        (e.prototype.changeSlide = function (e, t) {
            var o,
                s,
                n,
                r = this,
                l = i(e.currentTarget);
            switch ((l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), (n = r.slideCount % r.options.slidesToScroll !== 0), (o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll), e.data.message)) {
                case "previous":
                    (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o), r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                    break;
                case "next":
                    (s = 0 === o ? r.options.slidesToScroll : o), r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                    break;
                case "index":
                    var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                    break;
                default:
                    return;
            }
        }),
        (e.prototype.checkNavigable = function (i) {
            var e,
                t,
                o = this;
            if (((e = o.getNavigableIndexes()), (t = 0), i > e[e.length - 1])) i = e[e.length - 1];
            else
                for (var s in e) {
                    if (i < e[s]) {
                        i = t;
                        break;
                    }
                    t = e[s];
                }
            return i;
        }),
        (e.prototype.cleanUpEvents = function () {
            var e = this;
            e.options.dots &&
                null !== e.$dots &&
                (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
                e.options.accessibility === !0 && e.$dots.off("keydown.slick", e.keyHandler)),
                e.$slider.off("focus.slick blur.slick"),
                e.options.arrows === !0 &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
                    e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
                    e.options.accessibility === !0 && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
                e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
                e.$list.off("click.slick", e.clickHandler),
                i(document).off(e.visibilityChange, e.visibility),
                e.cleanUpSlideEvents(),
                e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler),
                e.options.focusOnSelect === !0 && i(e.$slideTrack).children().off("click.slick", e.selectHandler),
                i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
                i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
                i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
        }),
        (e.prototype.cleanUpSlideEvents = function () {
            var e = this;
            e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.cleanUpRows = function () {
            var i,
                e = this;
            e.options.rows > 0 && ((i = e.$slides.children().children()), i.removeAttr("style"), e.$slider.empty().append(i));
        }),
        (e.prototype.clickHandler = function (i) {
            var e = this;
            e.shouldClick === !1 && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
        }),
        (e.prototype.destroy = function (e) {
            var t = this;
            t.autoPlayClear(),
                (t.touchObject = {}),
                t.cleanUpEvents(),
                i(".slick-cloned", t.$slider).detach(),
                t.$dots && t.$dots.remove(),
                t.$prevArrow &&
                    t.$prevArrow.length &&
                    (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
                t.$nextArrow &&
                    t.$nextArrow.length &&
                    (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
                t.$slides &&
                    (t.$slides
                        .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                        .removeAttr("aria-hidden")
                        .removeAttr("data-slick-index")
                        .each(function () {
                            i(this).attr("style", i(this).data("originalStyling"));
                        }),
                    t.$slideTrack.children(this.options.slide).detach(),
                    t.$slideTrack.detach(),
                    t.$list.detach(),
                    t.$slider.append(t.$slides)),
                t.cleanUpRows(),
                t.$slider.removeClass("slick-slider"),
                t.$slider.removeClass("slick-initialized"),
                t.$slider.removeClass("slick-dotted"),
                (t.unslicked = !0),
                e || t.$slider.trigger("destroy", [t]);
        }),
        (e.prototype.disableTransition = function (i) {
            var e = this,
                t = {};
            (t[e.transitionType] = ""), e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
        }),
        (e.prototype.fadeSlide = function (i, e) {
            var t = this;
            t.cssTransitions === !1
                ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }), t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
                : (t.applyTransition(i),
                  t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
                  e &&
                      setTimeout(function () {
                          t.disableTransition(i), e.call();
                      }, t.options.speed));
        }),
        (e.prototype.fadeSlideOut = function (i) {
            var e = this;
            e.cssTransitions === !1 ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
        }),
        (e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
            var e = this;
            null !== i && ((e.$slidesCache = e.$slides), e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
        }),
        (e.prototype.focusHandler = function () {
            var e = this;
            e.$slider
                .off("focus.slick blur.slick")
                .on("focus.slick", "*", function (t) {
                    var o = i(this);
                    setTimeout(function () {
                        e.options.pauseOnFocus && o.is(":focus") && ((e.focussed = !0), e.autoPlay());
                    }, 0);
                })
                .on("blur.slick", "*", function (t) {
                    i(this);
                    e.options.pauseOnFocus && ((e.focussed = !1), e.autoPlay());
                });
        }),
        (e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
            var i = this;
            return i.currentSlide;
        }),
        (e.prototype.getDotCount = function () {
            var i = this,
                e = 0,
                t = 0,
                o = 0;
            if (i.options.infinite === !0)
                if (i.slideCount <= i.options.slidesToShow) ++o;
                else for (; e < i.slideCount; ) ++o, (e = t + i.options.slidesToScroll), (t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow);
            else if (i.options.centerMode === !0) o = i.slideCount;
            else if (i.options.asNavFor) for (; e < i.slideCount; ) ++o, (e = t + i.options.slidesToScroll), (t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow);
            else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
            return o - 1;
        }),
        (e.prototype.getLeft = function (i) {
            var e,
                t,
                o,
                s,
                n = this,
                r = 0;
            return (
                (n.slideOffset = 0),
                (t = n.$slides.first().outerHeight(!0)),
                n.options.infinite === !0
                    ? (n.slideCount > n.options.slidesToShow &&
                          ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
                          (s = -1),
                          n.options.vertical === !0 && n.options.centerMode === !0 && (2 === n.options.slidesToShow ? (s = -1.5) : 1 === n.options.slidesToShow && (s = -2)),
                          (r = t * n.options.slidesToShow * s)),
                      n.slideCount % n.options.slidesToScroll !== 0 &&
                          i + n.options.slidesToScroll > n.slideCount &&
                          n.slideCount > n.options.slidesToShow &&
                          (i > n.slideCount
                              ? ((n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1), (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                              : ((n.slideOffset = (n.slideCount % n.options.slidesToScroll) * n.slideWidth * -1), (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
                    : i + n.options.slidesToShow > n.slideCount && ((n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth), (r = (i + n.options.slidesToShow - n.slideCount) * t)),
                n.slideCount <= n.options.slidesToShow && ((n.slideOffset = 0), (r = 0)),
                n.options.centerMode === !0 && n.slideCount <= n.options.slidesToShow
                    ? (n.slideOffset = (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 - (n.slideWidth * n.slideCount) / 2)
                    : n.options.centerMode === !0 && n.options.infinite === !0
                    ? (n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth)
                    : n.options.centerMode === !0 && ((n.slideOffset = 0), (n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
                (e = n.options.vertical === !1 ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r),
                n.options.variableWidth === !0 &&
                    ((o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow)),
                    (e = n.options.rtl === !0 ? (o[0] ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0) : o[0] ? o[0].offsetLeft * -1 : 0),
                    n.options.centerMode === !0 &&
                        ((o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1)),
                        (e = n.options.rtl === !0 ? (o[0] ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0) : o[0] ? o[0].offsetLeft * -1 : 0),
                        (e += (n.$list.width() - o.outerWidth()) / 2))),
                e
            );
        }),
        (e.prototype.getOption = e.prototype.slickGetOption = function (i) {
            var e = this;
            return e.options[i];
        }),
        (e.prototype.getNavigableIndexes = function () {
            var i,
                e = this,
                t = 0,
                o = 0,
                s = [];
            for (e.options.infinite === !1 ? (i = e.slideCount) : ((t = e.options.slidesToScroll * -1), (o = e.options.slidesToScroll * -1), (i = 2 * e.slideCount)); t < i; )
                s.push(t), (t = o + e.options.slidesToScroll), (o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
            return s;
        }),
        (e.prototype.getSlick = function () {
            return this;
        }),
        (e.prototype.getSlideCount = function () {
            var e,
                t,
                o,
                s,
                n = this;
            return (
                (s = n.options.centerMode === !0 ? Math.floor(n.$list.width() / 2) : 0),
                (o = n.swipeLeft * -1 + s),
                n.options.swipeToSlide === !0
                    ? (n.$slideTrack.find(".slick-slide").each(function (e, s) {
                          var r, l, d;
                          if (((r = i(s).outerWidth()), (l = s.offsetLeft), n.options.centerMode !== !0 && (l += r / 2), (d = l + r), o < d)) return (t = s), !1;
                      }),
                      (e = Math.abs(i(t).attr("data-slick-index") - n.currentSlide) || 1))
                    : n.options.slidesToScroll
            );
        }),
        (e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
            var t = this;
            t.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
        }),
        (e.prototype.init = function (e) {
            var t = this;
            i(t.$slider).hasClass("slick-initialized") ||
                (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()),
                e && t.$slider.trigger("init", [t]),
                t.options.accessibility === !0 && t.initADA(),
                t.options.autoplay && ((t.paused = !1), t.autoPlay());
        }),
        (e.prototype.initADA = function () {
            var e = this,
                t = Math.ceil(e.slideCount / e.options.slidesToShow),
                o = e.getNavigableIndexes().filter(function (i) {
                    return i >= 0 && i < e.slideCount;
                });
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
                null !== e.$dots &&
                    (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
                        var s = o.indexOf(t);
                        if ((i(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + t, tabindex: -1 }), s !== -1)) {
                            var n = "slick-slide-control" + e.instanceUid + s;
                            i("#" + n).length && i(this).attr({ "aria-describedby": n });
                        }
                    }),
                    e.$dots
                        .attr("role", "tablist")
                        .find("li")
                        .each(function (s) {
                            var n = o[s];
                            i(this).attr({ role: "presentation" }),
                                i(this)
                                    .find("button")
                                    .first()
                                    .attr({ role: "tab", id: "slick-slide-control" + e.instanceUid + s, "aria-controls": "slick-slide" + e.instanceUid + n, "aria-label": s + 1 + " of " + t, "aria-selected": null, tabindex: "-1" });
                        })
                        .eq(e.currentSlide)
                        .find("button")
                        .attr({ "aria-selected": "true", tabindex: "0" })
                        .end());
            for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.options.focusOnChange ? e.$slides.eq(s).attr({ tabindex: "0" }) : e.$slides.eq(s).removeAttr("tabindex");
            e.activateADA();
        }),
        (e.prototype.initArrowEvents = function () {
            var i = this;
            i.options.arrows === !0 &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i.changeSlide),
                i.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i.changeSlide),
                i.options.accessibility === !0 && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
        }),
        (e.prototype.initDotEvents = function () {
            var e = this;
            e.options.dots === !0 && e.slideCount > e.options.slidesToShow && (i("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), e.options.accessibility === !0 && e.$dots.on("keydown.slick", e.keyHandler)),
                e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.slideCount > e.options.slidesToShow && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.initSlideEvents = function () {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
        }),
        (e.prototype.initializeEvents = function () {
            var e = this;
            e.initArrowEvents(),
                e.initDotEvents(),
                e.initSlideEvents(),
                e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler),
                e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler),
                e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler),
                e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler),
                e.$list.on("click.slick", e.clickHandler),
                i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
                e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler),
                e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
                i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)),
                i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)),
                i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
                i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
                i(e.setPosition);
        }),
        (e.prototype.initUI = function () {
            var i = this;
            i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.show();
        }),
        (e.prototype.keyHandler = function (i) {
            var e = this;
            i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                (37 === i.keyCode && e.options.accessibility === !0
                    ? e.changeSlide({ data: { message: e.options.rtl === !0 ? "next" : "previous" } })
                    : 39 === i.keyCode && e.options.accessibility === !0 && e.changeSlide({ data: { message: e.options.rtl === !0 ? "previous" : "next" } }));
        }),
        (e.prototype.lazyLoad = function () {
            function e(e) {
                i("img[data-lazy]", e).each(function () {
                    var e = i(this),
                        t = i(this).attr("data-lazy"),
                        o = i(this).attr("data-srcset"),
                        s = i(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                        n = document.createElement("img");
                    (n.onload = function () {
                        e.animate({ opacity: 0 }, 100, function () {
                            o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                                    e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                                }),
                                r.$slider.trigger("lazyLoaded", [r, e, t]);
                        });
                    }),
                        (n.onerror = function () {
                            e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t]);
                        }),
                        (n.src = t);
                });
            }
            var t,
                o,
                s,
                n,
                r = this;
            if (
                (r.options.centerMode === !0
                    ? r.options.infinite === !0
                        ? ((s = r.currentSlide + (r.options.slidesToShow / 2 + 1)), (n = s + r.options.slidesToShow + 2))
                        : ((s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1))), (n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide))
                    : ((s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide), (n = Math.ceil(s + r.options.slidesToShow)), r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)),
                (t = r.$slider.find(".slick-slide").slice(s, n)),
                "anticipated" === r.options.lazyLoad)
            )
                for (var l = s - 1, d = n, a = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++) l < 0 && (l = r.slideCount - 1), (t = t.add(a.eq(l))), (t = t.add(a.eq(d))), l--, d++;
            e(t),
                r.slideCount <= r.options.slidesToShow
                    ? ((o = r.$slider.find(".slick-slide")), e(o))
                    : r.currentSlide >= r.slideCount - r.options.slidesToShow
                    ? ((o = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)), e(o))
                    : 0 === r.currentSlide && ((o = r.$slider.find(".slick-cloned").slice(r.options.slidesToShow * -1)), e(o));
        }),
        (e.prototype.loadSlider = function () {
            var i = this;
            i.setPosition(), i.$slideTrack.css({ opacity: 1 }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
        }),
        (e.prototype.next = e.prototype.slickNext = function () {
            var i = this;
            i.changeSlide({ data: { message: "next" } });
        }),
        (e.prototype.orientationChange = function () {
            var i = this;
            i.checkResponsive(), i.setPosition();
        }),
        (e.prototype.pause = e.prototype.slickPause = function () {
            var i = this;
            i.autoPlayClear(), (i.paused = !0);
        }),
        (e.prototype.play = e.prototype.slickPlay = function () {
            var i = this;
            i.autoPlay(), (i.options.autoplay = !0), (i.paused = !1), (i.focussed = !1), (i.interrupted = !1);
        }),
        (e.prototype.postSlide = function (e) {
            var t = this;
            if (
                !t.unslicked &&
                (t.$slider.trigger("afterChange", [t, e]),
                (t.animating = !1),
                t.slideCount > t.options.slidesToShow && t.setPosition(),
                (t.swipeLeft = null),
                t.options.autoplay && t.autoPlay(),
                t.options.accessibility === !0 && (t.initADA(), t.options.focusOnChange))
            ) {
                var o = i(t.$slides.get(t.currentSlide));
                o.attr("tabindex", 0).focus();
            }
        }),
        (e.prototype.prev = e.prototype.slickPrev = function () {
            var i = this;
            i.changeSlide({ data: { message: "previous" } });
        }),
        (e.prototype.preventDefault = function (i) {
            i.preventDefault();
        }),
        (e.prototype.progressiveLazyLoad = function (e) {
            e = e || 1;
            var t,
                o,
                s,
                n,
                r,
                l = this,
                d = i("img[data-lazy]", l.$slider);
            d.length
                ? ((t = d.first()),
                  (o = t.attr("data-lazy")),
                  (s = t.attr("data-srcset")),
                  (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
                  (r = document.createElement("img")),
                  (r.onload = function () {
                      s && (t.attr("srcset", s), n && t.attr("sizes", n)),
                          t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                          l.options.adaptiveHeight === !0 && l.setPosition(),
                          l.$slider.trigger("lazyLoaded", [l, t, o]),
                          l.progressiveLazyLoad();
                  }),
                  (r.onerror = function () {
                      e < 3
                          ? setTimeout(function () {
                                l.progressiveLazyLoad(e + 1);
                            }, 500)
                          : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
                  }),
                  (r.src = o))
                : l.$slider.trigger("allImagesLoaded", [l]);
        }),
        (e.prototype.refresh = function (e) {
            var t,
                o,
                s = this;
            (o = s.slideCount - s.options.slidesToShow),
                !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
                s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
                (t = s.currentSlide),
                s.destroy(!0),
                i.extend(s, s.initials, { currentSlide: t }),
                s.init(),
                e || s.changeSlide({ data: { message: "index", index: t } }, !1);
        }),
        (e.prototype.registerBreakpoints = function () {
            var e,
                t,
                o,
                s = this,
                n = s.options.responsive || null;
            if ("array" === i.type(n) && n.length) {
                s.respondTo = s.options.respondTo || "window";
                for (e in n)
                    if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
                        for (t = n[e].breakpoint; o >= 0; ) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                        s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
                    }
                s.breakpoints.sort(function (i, e) {
                    return s.options.mobileFirst ? i - e : e - i;
                });
            }
        }),
        (e.prototype.reinit = function () {
            var e = this;
            (e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide")),
                (e.slideCount = e.$slides.length),
                e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
                e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                e.registerBreakpoints(),
                e.setProps(),
                e.setupInfinite(),
                e.buildArrows(),
                e.updateArrows(),
                e.initArrowEvents(),
                e.buildDots(),
                e.updateDots(),
                e.initDotEvents(),
                e.cleanUpSlideEvents(),
                e.initSlideEvents(),
                e.checkResponsive(!1, !0),
                e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
                e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                e.setPosition(),
                e.focusHandler(),
                (e.paused = !e.options.autoplay),
                e.autoPlay(),
                e.$slider.trigger("reInit", [e]);
        }),
        (e.prototype.resize = function () {
            var e = this;
            i(window).width() !== e.windowWidth &&
                (clearTimeout(e.windowDelay),
                (e.windowDelay = window.setTimeout(function () {
                    (e.windowWidth = i(window).width()), e.checkResponsive(), e.unslicked || e.setPosition();
                }, 50)));
        }),
        (e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
            var o = this;
            return (
                "boolean" == typeof i ? ((e = i), (i = e === !0 ? 0 : o.slideCount - 1)) : (i = e === !0 ? --i : i),
                !(o.slideCount < 1 || i < 0 || i > o.slideCount - 1) &&
                    (o.unload(),
                    t === !0 ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(),
                    (o.$slides = o.$slideTrack.children(this.options.slide)),
                    o.$slideTrack.children(this.options.slide).detach(),
                    o.$slideTrack.append(o.$slides),
                    (o.$slidesCache = o.$slides),
                    void o.reinit())
            );
        }),
        (e.prototype.setCSS = function (i) {
            var e,
                t,
                o = this,
                s = {};
            o.options.rtl === !0 && (i = -i),
                (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
                (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
                (s[o.positionProp] = i),
                o.transformsEnabled === !1
                    ? o.$slideTrack.css(s)
                    : ((s = {}), o.cssTransitions === !1 ? ((s[o.animType] = "translate(" + e + ", " + t + ")"), o.$slideTrack.css(s)) : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"), o.$slideTrack.css(s)));
        }),
        (e.prototype.setDimensions = function () {
            var i = this;
            i.options.vertical === !1
                ? i.options.centerMode === !0 && i.$list.css({ padding: "0px " + i.options.centerPadding })
                : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), i.options.centerMode === !0 && i.$list.css({ padding: i.options.centerPadding + " 0px" })),
                (i.listWidth = i.$list.width()),
                (i.listHeight = i.$list.height()),
                i.options.vertical === !1 && i.options.variableWidth === !1
                    ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length)))
                    : i.options.variableWidth === !0
                    ? i.$slideTrack.width(5e3 * i.slideCount)
                    : ((i.slideWidth = Math.ceil(i.listWidth)), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
            var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
            i.options.variableWidth === !1 && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
        }),
        (e.prototype.setFade = function () {
            var e,
                t = this;
            t.$slides.each(function (o, s) {
                (e = t.slideWidth * o * -1),
                    t.options.rtl === !0 ? i(s).css({ position: "relative", right: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) : i(s).css({ position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 });
            }),
                t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 });
        }),
        (e.prototype.setHeight = function () {
            var i = this;
            if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.css("height", e);
            }
        }),
        (e.prototype.setOption = e.prototype.slickSetOption = function () {
            var e,
                t,
                o,
                s,
                n,
                r = this,
                l = !1;
            if (
                ("object" === i.type(arguments[0])
                    ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
                    : "string" === i.type(arguments[0]) &&
                      ((o = arguments[0]), (s = arguments[1]), (l = arguments[2]), "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? (n = "responsive") : "undefined" != typeof arguments[1] && (n = "single")),
                "single" === n)
            )
                r.options[o] = s;
            else if ("multiple" === n)
                i.each(o, function (i, e) {
                    r.options[i] = e;
                });
            else if ("responsive" === n)
                for (t in s)
                    if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
                    else {
                        for (e = r.options.responsive.length - 1; e >= 0; ) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                        r.options.responsive.push(s[t]);
                    }
            l && (r.unload(), r.reinit());
        }),
        (e.prototype.setPosition = function () {
            var i = this;
            i.setDimensions(), i.setHeight(), i.options.fade === !1 ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
        }),
        (e.prototype.setProps = function () {
            var i = this,
                e = document.body.style;
            (i.positionProp = i.options.vertical === !0 ? "top" : "left"),
                "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
                (void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition) || (i.options.useCSS === !0 && (i.cssTransitions = !0)),
                i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : (i.options.zIndex = i.defaults.zIndex)),
                void 0 !== e.OTransform && ((i.animType = "OTransform"), (i.transformType = "-o-transform"), (i.transitionType = "OTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
                void 0 !== e.MozTransform && ((i.animType = "MozTransform"), (i.transformType = "-moz-transform"), (i.transitionType = "MozTransition"), void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)),
                void 0 !== e.webkitTransform &&
                    ((i.animType = "webkitTransform"), (i.transformType = "-webkit-transform"), (i.transitionType = "webkitTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
                void 0 !== e.msTransform && ((i.animType = "msTransform"), (i.transformType = "-ms-transform"), (i.transitionType = "msTransition"), void 0 === e.msTransform && (i.animType = !1)),
                void 0 !== e.transform && i.animType !== !1 && ((i.animType = "transform"), (i.transformType = "transform"), (i.transitionType = "transition")),
                (i.transformsEnabled = i.options.useTransform && null !== i.animType && i.animType !== !1);
        }),
        (e.prototype.setSlideClasses = function (i) {
            var e,
                t,
                o,
                s,
                n = this;
            if (((t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")), n.$slides.eq(i).addClass("slick-current"), n.options.centerMode === !0)) {
                var r = n.options.slidesToShow % 2 === 0 ? 1 : 0;
                (e = Math.floor(n.options.slidesToShow / 2)),
                    n.options.infinite === !0 &&
                        (i >= e && i <= n.slideCount - 1 - e
                            ? n.$slides
                                  .slice(i - e + r, i + e + 1)
                                  .addClass("slick-active")
                                  .attr("aria-hidden", "false")
                            : ((o = n.options.slidesToShow + i),
                              t
                                  .slice(o - e + 1 + r, o + e + 2)
                                  .addClass("slick-active")
                                  .attr("aria-hidden", "false")),
                        0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")),
                    n.$slides.eq(i).addClass("slick-center");
            } else
                i >= 0 && i <= n.slideCount - n.options.slidesToShow
                    ? n.$slides
                          .slice(i, i + n.options.slidesToShow)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")
                    : t.length <= n.options.slidesToShow
                    ? t.addClass("slick-active").attr("aria-hidden", "false")
                    : ((s = n.slideCount % n.options.slidesToShow),
                      (o = n.options.infinite === !0 ? n.options.slidesToShow + i : i),
                      n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow
                          ? t
                                .slice(o - (n.options.slidesToShow - s), o + s)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false")
                          : t
                                .slice(o, o + n.options.slidesToShow)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false"));
            ("ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad) || n.lazyLoad();
        }),
        (e.prototype.setupInfinite = function () {
            var e,
                t,
                o,
                s = this;
            if ((s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && ((t = null), s.slideCount > s.options.slidesToShow))) {
                for (o = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1)
                    (t = e - 1),
                        i(s.$slides[t])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", t - s.slideCount)
                            .prependTo(s.$slideTrack)
                            .addClass("slick-cloned");
                for (e = 0; e < o + s.slideCount; e += 1)
                    (t = e),
                        i(s.$slides[t])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", t + s.slideCount)
                            .appendTo(s.$slideTrack)
                            .addClass("slick-cloned");
                s.$slideTrack
                    .find(".slick-cloned")
                    .find("[id]")
                    .each(function () {
                        i(this).attr("id", "");
                    });
            }
        }),
        (e.prototype.interrupt = function (i) {
            var e = this;
            i || e.autoPlay(), (e.interrupted = i);
        }),
        (e.prototype.selectHandler = function (e) {
            var t = this,
                o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
                s = parseInt(o.attr("data-slick-index"));
            return s || (s = 0), t.slideCount <= t.options.slidesToShow ? void t.slideHandler(s, !1, !0) : void t.slideHandler(s);
        }),
        (e.prototype.slideHandler = function (i, e, t) {
            var o,
                s,
                n,
                r,
                l,
                d = null,
                a = this;
            if (((e = e || !1), !((a.animating === !0 && a.options.waitForAnimate === !0) || (a.options.fade === !0 && a.currentSlide === i))))
                return (
                    e === !1 && a.asNavFor(i),
                    (o = i),
                    (d = a.getLeft(o)),
                    (r = a.getLeft(a.currentSlide)),
                    (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
                    a.options.infinite === !1 && a.options.centerMode === !1 && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)
                        ? void (
                              a.options.fade === !1 &&
                              ((o = a.currentSlide),
                              t !== !0 && a.slideCount > a.options.slidesToShow
                                  ? a.animateSlide(r, function () {
                                        a.postSlide(o);
                                    })
                                  : a.postSlide(o))
                          )
                        : a.options.infinite === !1 && a.options.centerMode === !0 && (i < 0 || i > a.slideCount - a.options.slidesToScroll)
                        ? void (
                              a.options.fade === !1 &&
                              ((o = a.currentSlide),
                              t !== !0 && a.slideCount > a.options.slidesToShow
                                  ? a.animateSlide(r, function () {
                                        a.postSlide(o);
                                    })
                                  : a.postSlide(o))
                          )
                        : (a.options.autoplay && clearInterval(a.autoPlayTimer),
                          (s =
                              o < 0
                                  ? a.slideCount % a.options.slidesToScroll !== 0
                                      ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                                      : a.slideCount + o
                                  : o >= a.slideCount
                                  ? a.slideCount % a.options.slidesToScroll !== 0
                                      ? 0
                                      : o - a.slideCount
                                  : o),
                          (a.animating = !0),
                          a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
                          (n = a.currentSlide),
                          (a.currentSlide = s),
                          a.setSlideClasses(a.currentSlide),
                          a.options.asNavFor && ((l = a.getNavTarget()), (l = l.slick("getSlick")), l.slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide)),
                          a.updateDots(),
                          a.updateArrows(),
                          a.options.fade === !0
                              ? (t !== !0
                                    ? (a.fadeSlideOut(n),
                                      a.fadeSlide(s, function () {
                                          a.postSlide(s);
                                      }))
                                    : a.postSlide(s),
                                void a.animateHeight())
                              : void (t !== !0 && a.slideCount > a.options.slidesToShow
                                    ? a.animateSlide(d, function () {
                                          a.postSlide(s);
                                      })
                                    : a.postSlide(s)))
                );
        }),
        (e.prototype.startLoad = function () {
            var i = this;
            i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()),
                i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
                i.$slider.addClass("slick-loading");
        }),
        (e.prototype.swipeDirection = function () {
            var i,
                e,
                t,
                o,
                s = this;
            return (
                (i = s.touchObject.startX - s.touchObject.curX),
                (e = s.touchObject.startY - s.touchObject.curY),
                (t = Math.atan2(e, i)),
                (o = Math.round((180 * t) / Math.PI)),
                o < 0 && (o = 360 - Math.abs(o)),
                o <= 45 && o >= 0
                    ? s.options.rtl === !1
                        ? "left"
                        : "right"
                    : o <= 360 && o >= 315
                    ? s.options.rtl === !1
                        ? "left"
                        : "right"
                    : o >= 135 && o <= 225
                    ? s.options.rtl === !1
                        ? "right"
                        : "left"
                    : s.options.verticalSwiping === !0
                    ? o >= 35 && o <= 135
                        ? "down"
                        : "up"
                    : "vertical"
            );
        }),
        (e.prototype.swipeEnd = function (i) {
            var e,
                t,
                o = this;
            if (((o.dragging = !1), (o.swiping = !1), o.scrolling)) return (o.scrolling = !1), !1;
            if (((o.interrupted = !1), (o.shouldClick = !(o.touchObject.swipeLength > 10)), void 0 === o.touchObject.curX)) return !1;
            if ((o.touchObject.edgeHit === !0 && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe)) {
                switch ((t = o.swipeDirection())) {
                    case "left":
                    case "down":
                        (e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount()), (o.currentDirection = 0);
                        break;
                    case "right":
                    case "up":
                        (e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount()), (o.currentDirection = 1);
                }
                "vertical" != t && (o.slideHandler(e), (o.touchObject = {}), o.$slider.trigger("swipe", [o, t]));
            } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), (o.touchObject = {}));
        }),
        (e.prototype.swipeHandler = function (i) {
            var e = this;
            if (!(e.options.swipe === !1 || ("ontouchend" in document && e.options.swipe === !1) || (e.options.draggable === !1 && i.type.indexOf("mouse") !== -1)))
                switch (
                    ((e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1),
                    (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
                    e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                    i.data.action)
                ) {
                    case "start":
                        e.swipeStart(i);
                        break;
                    case "move":
                        e.swipeMove(i);
                        break;
                    case "end":
                        e.swipeEnd(i);
                }
        }),
        (e.prototype.swipeMove = function (i) {
            var e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            return (
                (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
                !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
                    ((e = l.getLeft(l.currentSlide)),
                    (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
                    (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
                    (l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2)))),
                    (r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2)))),
                    !l.options.verticalSwiping && !l.swiping && r > 4
                        ? ((l.scrolling = !0), !1)
                        : (l.options.verticalSwiping === !0 && (l.touchObject.swipeLength = r),
                          (t = l.swipeDirection()),
                          void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && ((l.swiping = !0), i.preventDefault()),
                          (s = (l.options.rtl === !1 ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
                          l.options.verticalSwiping === !0 && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
                          (o = l.touchObject.swipeLength),
                          (l.touchObject.edgeHit = !1),
                          l.options.infinite === !1 &&
                              ((0 === l.currentSlide && "right" === t) || (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                              ((o = l.touchObject.swipeLength * l.options.edgeFriction), (l.touchObject.edgeHit = !0)),
                          l.options.vertical === !1 ? (l.swipeLeft = e + o * s) : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
                          l.options.verticalSwiping === !0 && (l.swipeLeft = e + o * s),
                          l.options.fade !== !0 && l.options.touchMove !== !1 && (l.animating === !0 ? ((l.swipeLeft = null), !1) : void l.setCSS(l.swipeLeft))))
            );
        }),
        (e.prototype.swipeStart = function (i) {
            var e,
                t = this;
            return (
                (t.interrupted = !0),
                1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow
                    ? ((t.touchObject = {}), !1)
                    : (void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]),
                      (t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX),
                      (t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY),
                      void (t.dragging = !0))
            );
        }),
        (e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
            var i = this;
            null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
        }),
        (e.prototype.unload = function () {
            var e = this;
            i(".slick-cloned", e.$slider).remove(),
                e.$dots && e.$dots.remove(),
                e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
                e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
                e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
        }),
        (e.prototype.unslick = function (i) {
            var e = this;
            e.$slider.trigger("unslick", [e, i]), e.destroy();
        }),
        (e.prototype.updateArrows = function () {
            var i,
                e = this;
            (i = Math.floor(e.options.slidesToShow / 2)),
                e.options.arrows === !0 &&
                    e.slideCount > e.options.slidesToShow &&
                    !e.options.infinite &&
                    (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                    e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                    0 === e.currentSlide
                        ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                        : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1
                        ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                        : e.currentSlide >= e.slideCount - 1 &&
                          e.options.centerMode === !0 &&
                          (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
        }),
        (e.prototype.updateDots = function () {
            var i = this;
            null !== i.$dots &&
                (i.$dots.find("li").removeClass("slick-active").end(),
                i.$dots
                    .find("li")
                    .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
                    .addClass("slick-active"));
        }),
        (e.prototype.visibility = function () {
            var i = this;
            i.options.autoplay && (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
        }),
        (i.fn.slick = function () {
            var i,
                t,
                o = this,
                s = arguments[0],
                n = Array.prototype.slice.call(arguments, 1),
                r = o.length;
            for (i = 0; i < r; i++) if (("object" == typeof s || "undefined" == typeof s ? (o[i].slick = new e(o[i], s)) : (t = o[i].slick[s].apply(o[i].slick, n)), "undefined" != typeof t)) return t;
            return o;
        });
});

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
})(function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function () {},
        u = !!window.jQuery,
        v = a(window),
        w = function (a, c) {
            b.ev.on(o + a + p, c);
        },
        x = function (b, c, d, e) {
            var f = document.createElement("div");
            return (f.className = "mfp-" + b), d && (f.innerHTML = d), e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)), f;
        },
        y = function (c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && ((c = c.charAt(0).toLowerCase() + c.slice(1)), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
        },
        z = function (c) {
            return (c === g && b.currTemplate.closeBtn) || ((b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose))), (g = c)), b.currTemplate.closeBtn;
        },
        A = function () {
            a.magnificPopup.instance || ((b = new t()), b.init(), (a.magnificPopup.instance = b));
        },
        B = function () {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
            return !1;
        };
    (t.prototype = {
        constructor: t,
        init: function () {
            var c = navigator.appVersion;
            (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
                (b.isAndroid = /android/gi.test(c)),
                (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
                (b.supportsTransition = B()),
                (b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent)),
                (d = a(document)),
                (b.popupsCache = {});
        },
        open: function (c) {
            var e;
            if (c.isObj === !1) {
                (b.items = c.items.toArray()), (b.index = 0);
                var g,
                    h = c.items;
                for (e = 0; e < h.length; e++)
                    if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
                        b.index = e;
                        break;
                    }
            } else (b.items = a.isArray(c.items) ? c.items : [c.items]), (b.index = c.index || 0);
            if (b.isOpen) return void b.updateItemHTML();
            (b.types = []),
                (f = ""),
                c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
                c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), (b.currTemplate = b.popupsCache[c.key])) : (b.currTemplate = {}),
                (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
                (b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos),
                b.st.modal && ((b.st.closeOnContentClick = !1), (b.st.closeOnBgClick = !1), (b.st.showCloseBtn = !1), (b.st.enableEscapeKey = !1)),
                b.bgOverlay ||
                    ((b.bgOverlay = x("bg").on("click" + p, function () {
                        b.close();
                    })),
                    (b.wrap = x("wrap")
                        .attr("tabindex", -1)
                        .on("click" + p, function (a) {
                            b._checkIfClose(a.target) && b.close();
                        })),
                    (b.container = x("container", b.wrap))),
                (b.contentContainer = x("content")),
                b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
            }
            y("BeforeOpen"),
                b.st.showCloseBtn &&
                    (b.st.closeBtnInside
                        ? (w(l, function (a, b, c, d) {
                              c.close_replaceWith = z(d.type);
                          }),
                          (f += " mfp-close-btn-in"))
                        : b.wrap.append(z())),
                b.st.alignTop && (f += " mfp-align-top"),
                b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
                (b.st.fixedBgPos === !1 || ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) && b.bgOverlay.css({ height: d.height(), position: "absolute" }),
                b.st.enableEscapeKey &&
                    d.on("keyup" + p, function (a) {
                        27 === a.keyCode && b.close();
                    }),
                v.on("resize" + p, function () {
                    b.updateSize();
                }),
                b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
                f && b.wrap.addClass(f);
            var k = (b.wH = v.height()),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o);
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : (n.overflow = "hidden"));
            var r = b.st.mainClass;
            return (
                b.isIE7 && (r += " mfp-ie7"),
                r && b._addClassToMFP(r),
                b.updateItemHTML(),
                y("BuildControls"),
                a("html").css(n),
                b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
                (b._lastFocusedEl = document.activeElement),
                setTimeout(function () {
                    b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
                }, 16),
                (b.isOpen = !0),
                b.updateSize(k),
                y(m),
                c
            );
        },
        close: function () {
            b.isOpen &&
                (y(i),
                (b.isOpen = !1),
                b.st.removalDelay && !b.isLowIE && b.supportsTransition
                    ? (b._addClassToMFP(r),
                      setTimeout(function () {
                          b._close();
                      }, b.st.removalDelay))
                    : b._close());
        },
        _close: function () {
            y(h);
            var c = r + " " + q + " ";
            if ((b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos)) {
                var e = { marginRight: "" };
                b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""), a("html").css(e);
            }
            d.off("keyup" + p + " focusin" + p),
                b.ev.off(p),
                b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                b.bgOverlay.attr("class", "mfp-bg"),
                b.container.attr("class", "mfp-container"),
                !b.st.showCloseBtn || (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) || (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
                b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
                (b.currItem = null),
                (b.content = null),
                (b.currTemplate = null),
                (b.prevHeight = 0),
                y(j);
        },
        updateSize: function (a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), (b.wH = d);
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
        },
        updateItemHTML: function () {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if ((y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), (b.currItem = c), !b.currTemplate[d])) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), (c.preloaded = !0), y(n, c), (e = c.type), b.container.prepend(b.contentContainer), y("AfterChange");
        },
        appendContent: function (a, c) {
            (b.content = a),
                a ? (b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : (b.content = a)) : (b.content = ""),
                y(k),
                b.container.addClass("mfp-" + c + "-holder"),
                b.contentContainer.append(b.content);
        },
        parseEl: function (c) {
            var d,
                e = b.items[c];
            if ((e.tagName ? (e = { el: a(e) }) : ((d = e.type), (e = { data: e, src: e.src })), e.el)) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break;
                    }
                (e.src = e.el.attr("data-mfp-src")), e.src || (e.src = e.el.attr("href"));
            }
            return (e.type = d || b.st.type || "inline"), (e.index = c), (e.parsed = !0), (b.items[c] = e), y("ElementParse", e), b.items[c];
        },
        addGroup: function (a, c) {
            var d = function (d) {
                (d.mfpEl = this), b._openClick(d, a, c);
            };
            c || (c = {});
            var e = "click.magnificPopup";
            (c.mainEl = a), c.items ? ((c.isObj = !0), a.off(e).on(e, d)) : ((c.isObj = !1), c.delegate ? a.off(e).on(e, c.delegate, d) : ((c.items = a), a.off(e).on(e, d)));
        },
        _openClick: function (c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0;
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), (e.el = a(c.mfpEl)), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
            }
        },
        updateStatus: function (a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = { status: a, text: d };
                y("UpdateStatus", e),
                    (a = e.status),
                    (d = e.text),
                    b.preloader.html(d),
                    b.preloader.find("a").on("click", function (a) {
                        a.stopImmediatePropagation();
                    }),
                    b.container.addClass("mfp-s-" + a),
                    (c = a);
            }
        },
        _checkIfClose: function (c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || (b.preloader && c === b.preloader[0])) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0;
                } else if (e && a.contains(document, c)) return !0;
                return !1;
            }
        },
        _addClassToMFP: function (a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a);
        },
        _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
        },
        _hasScrollBar: function (a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
        },
        _setFocus: function () {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
        },
        _onFocusIn: function (c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
        },
        _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)),
                y(l, [b, c, d]),
                a.each(c, function (c, d) {
                    if (void 0 === d || d === !1) return !0;
                    if (((e = c.split("_")), e.length > 1)) {
                        var f = b.find(p + "-" + e[0]);
                        if (f.length > 0) {
                            var g = e[1];
                            "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? (f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class")))) : f.attr(e[1], d);
                        }
                    } else b.find(p + "-" + c).html(d);
                });
        },
        _getScrollbarSize: function () {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                (a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"), document.body.appendChild(a), (b.scrollbarSize = a.offsetWidth - a.clientWidth), document.body.removeChild(a);
            }
            return b.scrollbarSize;
        },
    }),
        (a.magnificPopup = {
            instance: null,
            proto: t.prototype,
            modules: [],
            open: function (b, c) {
                return A(), (b = b ? a.extend(!0, {}, b) : {}), (b.isObj = !0), (b.index = c || 0), this.instance.open(b);
            },
            close: function () {
                return a.magnificPopup.instance && a.magnificPopup.instance.close();
            },
            registerModule: function (b, c) {
                c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0,
            },
        }),
        (a.fn.magnificPopup = function (c) {
            A();
            var d = a(this);
            if ("string" == typeof c)
                if ("open" === c) {
                    var e,
                        f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                        g = parseInt(arguments[1], 10) || 0;
                    f.items ? (e = f.items[g]) : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))), b._openClick({ mfpEl: e }, d, f);
                } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
            else (c = a.extend(!0, {}, c)), u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c), b.addGroup(d, c);
            return d;
        });
    var C,
        D,
        E,
        F = "inline",
        G = function () {
            E && (D.after(E.addClass(C)).detach(), (E = null));
        };
    a.magnificPopup.registerModule(F, {
        options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
        proto: {
            initInline: function () {
                b.types.push(F),
                    w(h + "." + F, function () {
                        G();
                    });
            },
            getInline: function (c, d) {
                if ((G(), c.src)) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)), (E = f.after(D).detach().removeClass(C))), b.updateStatus("ready");
                    } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
                    return (c.inlineElement = f), f;
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
            },
        },
    });
    var H,
        I = "ajax",
        J = function () {
            H && a(document.body).removeClass(H);
        },
        K = function () {
            J(), b.req && b.req.abort();
        };
    a.magnificPopup.registerModule(I, {
        options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
        proto: {
            initAjax: function () {
                b.types.push(I), (H = b.st.ajax.cursor), w(h + "." + I, K), w("BeforeChange." + I, K);
            },
            getAjax: function (c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend(
                    {
                        url: c.src,
                        success: function (d, e, f) {
                            var g = { data: d, xhr: f };
                            y("ParseAjax", g),
                                b.appendContent(a(g.data), I),
                                (c.finished = !0),
                                J(),
                                b._setFocus(),
                                setTimeout(function () {
                                    b.wrap.addClass(q);
                                }, 16),
                                b.updateStatus("ready"),
                                y("AjaxContentAdded");
                        },
                        error: function () {
                            J(), (c.finished = c.loadError = !0), b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
                        },
                    },
                    b.st.ajax.settings
                );
                return (b.req = a.ajax(d)), "";
            },
        },
    });
    var L,
        M = function (c) {
            if (c.data && void 0 !== c.data.title) return c.data.title;
            var d = b.st.image.titleSrc;
            if (d) {
                if (a.isFunction(d)) return d.call(b, c);
                if (c.el) return c.el.attr(d) || "";
            }
            return "";
        };
    a.magnificPopup.registerModule("image", {
        options: {
            markup:
                '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.',
        },
        proto: {
            initImage: function () {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"),
                    w(m + d, function () {
                        "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
                    }),
                    w(h + d, function () {
                        c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
                    }),
                    w("Resize" + d, b.resizeImage),
                    b.isLowIE && w("AfterChange", b.resizeImage);
            },
            resizeImage: function () {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c);
                }
            },
            _onImageHasSize: function (a) {
                a.img && ((a.hasSize = !0), L && clearInterval(L), (a.isCheckingImgSize = !1), y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), (a.imgHidden = !1)));
            },
            findImageSize: function (a) {
                var c = 0,
                    d = a.img[0],
                    e = function (f) {
                        L && clearInterval(L),
                            (L = setInterval(function () {
                                return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
                            }, f));
                    };
                e(1);
            },
            getImage: function (c, d) {
                var e = 0,
                    f = function () {
                        c &&
                            (c.img[0].complete
                                ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), (c.hasSize = !0), (c.loaded = !0), y("ImageLoadComplete"))
                                : (e++, 200 > e ? setTimeout(f, 100) : g()));
                    },
                    g = function () {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), (c.hasSize = !0), (c.loaded = !0), (c.loadError = !0));
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    (j.className = "mfp-img"),
                        c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")),
                        (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
                        (j.src = c.src),
                        i.is("img") && (c.img = c.img.clone()),
                        (j = c.img[0]),
                        j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
                }
                return (
                    b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
                    b.resizeImage(),
                    c.hasSize
                        ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d)
                        : (b.updateStatus("loading"), (c.loading = !0), c.hasSize || ((c.imgHidden = !0), d.addClass("mfp-loading"), b.findImageSize(c)), d)
                );
            },
        },
    });
    var N,
        O = function () {
            return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
        };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (a) {
                return a.is("img") ? a : a.find("img");
            },
        },
        proto: {
            initZoom: function () {
                var a,
                    c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e,
                        f,
                        g = c.duration,
                        j = function (a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                f = "transition";
                            return (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d), b.css(e), b;
                        },
                        k = function () {
                            b.content.css("visibility", "visible");
                        };
                    w("BuildControls" + d, function () {
                        if (b._allowZoom()) {
                            if ((clearTimeout(e), b.content.css("visibility", "hidden"), (a = b._getItemToZoom()), !a)) return void k();
                            (f = j(a)),
                                f.css(b._getOffset()),
                                b.wrap.append(f),
                                (e = setTimeout(function () {
                                    f.css(b._getOffset(!0)),
                                        (e = setTimeout(function () {
                                            k(),
                                                setTimeout(function () {
                                                    f.remove(), (a = f = null), y("ZoomAnimationEnded");
                                                }, 16);
                                        }, g));
                                }, 16));
                        }
                    }),
                        w(i + d, function () {
                            if (b._allowZoom()) {
                                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                                    if (((a = b._getItemToZoom()), !a)) return;
                                    f = j(a);
                                }
                                f.css(b._getOffset(!0)),
                                    b.wrap.append(f),
                                    b.content.css("visibility", "hidden"),
                                    setTimeout(function () {
                                        f.css(b._getOffset());
                                    }, 16);
                            }
                        }),
                        w(h + d, function () {
                            b._allowZoom() && (k(), f && f.remove(), (a = null));
                        });
                }
            },
            _allowZoom: function () {
                return "image" === b.currItem.type;
            },
            _getItemToZoom: function () {
                return b.currItem.hasSize ? b.currItem.img : !1;
            },
            _getOffset: function (c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f };
                return O() ? (h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)") : ((h.left = e.left), (h.top = e.top)), h;
            },
        },
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function (a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: { index: "youtube.com", id: "v=", src: "https://www.youtube.com/embed/%id%?autoplay=1" },
                vimeo: { index: "vimeo.com/", id: "/", src: "https://player.vimeo.com/video/%id%?autoplay=1" },
                gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
            },
        },
        proto: {
            initIframe: function () {
                b.types.push(P),
                    w("BeforeChange", function (a, b, c) {
                        b !== c && (b === P ? R() : c === P && R(!0));
                    }),
                    w(h + "." + P, function () {
                        R();
                    });
            },
            getIframe: function (c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), (e = this.src.replace("%id%", e)), !1) : void 0;
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
            },
        },
    });
    var S = function (a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a;
        },
        T = function (a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%",
        },
        proto: {
            initGallery: function () {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return (
                    (b.direction = !0),
                    c && c.enabled
                        ? ((f += " mfp-gallery"),
                          w(m + e, function () {
                              c.navigateByImgClick &&
                                  b.wrap.on("click" + e, ".mfp-img", function () {
                                      return b.items.length > 1 ? (b.next(), !1) : void 0;
                                  }),
                                  d.on("keydown" + e, function (a) {
                                      37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                                  });
                          }),
                          w("UpdateStatus" + e, function (a, c) {
                              c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
                          }),
                          w(l + e, function (a, d, e, f) {
                              var g = b.items.length;
                              e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
                          }),
                          w("BuildControls" + e, function () {
                              if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                                  var d = c.arrowMarkup,
                                      e = (b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s)),
                                      f = (b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s));
                                  e.click(function () {
                                      b.prev();
                                  }),
                                      f.click(function () {
                                          b.next();
                                      }),
                                      b.container.append(e.add(f));
                              }
                          }),
                          w(n + e, function () {
                              b._preloadTimeout && clearTimeout(b._preloadTimeout),
                                  (b._preloadTimeout = setTimeout(function () {
                                      b.preloadNearbyImages(), (b._preloadTimeout = null);
                                  }, 16));
                          }),
                          void w(h + e, function () {
                              d.off(e), b.wrap.off("click" + e), (b.arrowRight = b.arrowLeft = null);
                          }))
                        : !1
                );
            },
            next: function () {
                (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
            },
            prev: function () {
                (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
            },
            goTo: function (a) {
                (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
            },
            preloadNearbyImages: function () {
                var a,
                    c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a);
            },
            _preloadItem: function (c) {
                if (((c = S(c)), !b.items[c].preloaded)) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)),
                        y("LazyLoad", d),
                        "image" === d.type &&
                            (d.img = a('<img class="mfp-img" />')
                                .on("load.mfploader", function () {
                                    d.hasSize = !0;
                                })
                                .on("error.mfploader", function () {
                                    (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                                })
                                .attr("src", d.src)),
                        (d.preloaded = !0);
                }
            },
        },
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function (a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return "@2x" + a;
                });
            },
            ratio: 1,
        },
        proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    (c = isNaN(c) ? c() : c),
                        c > 1 &&
                            (w("ImageHasSize." + U, function (a, b) {
                                b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" });
                            }),
                            w("ElementParse." + U, function (b, d) {
                                d.src = a.replaceSrc(d, c);
                            }));
                }
            },
        },
    }),
        A();
});

/*!
 * Isotope PACKAGED v3.0.4
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */

!(function (t, e) {
    "function" == typeof define && define.amd
        ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
              return e(t, i);
          })
        : "object" == typeof module && module.exports
        ? (module.exports = e(t, require("jquery")))
        : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
    "use strict";
    function i(i, s, a) {
        function u(t, e, o) {
            var n,
                s = "$()." + i + '("' + e + '")';
            return (
                t.each(function (t, u) {
                    var h = a.data(u, i);
                    if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                    var d = h[e];
                    if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                    var l = d.apply(h, o);
                    n = void 0 === n ? l : n;
                }),
                void 0 !== n ? n : t
            );
        }
        function h(t, e) {
            t.each(function (t, o) {
                var n = a.data(o, i);
                n ? (n.option(e), n._init()) : ((n = new s(o, e)), a.data(o, i, n));
            });
        }
        (a = a || e || t.jQuery),
            a &&
                (s.prototype.option ||
                    (s.prototype.option = function (t) {
                        a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
                    }),
                (a.fn[i] = function (t) {
                    if ("string" == typeof t) {
                        var e = n.call(arguments, 1);
                        return u(this, t, e);
                    }
                    return h(this, t), this;
                }),
                o(a));
    }
    function o(t) {
        !t || (t && t.bridget) || (t.bridget = i);
    }
    var n = Array.prototype.slice,
        s = t.console,
        r =
            "undefined" == typeof s
                ? function () {}
                : function (t) {
                      s.error(t);
                  };
    return o(e || t.jQuery), i;
}),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.EvEmitter = e());
    })("undefined" != typeof window ? window : this, function () {
        function t() {}
        var e = t.prototype;
        return (
            (e.on = function (t, e) {
                if (t && e) {
                    var i = (this._events = this._events || {}),
                        o = (i[t] = i[t] || []);
                    return o.indexOf(e) == -1 && o.push(e), this;
                }
            }),
            (e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = (this._onceEvents = this._onceEvents || {}),
                        o = (i[t] = i[t] || {});
                    return (o[e] = !0), this;
                }
            }),
            (e.off = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var o = i.indexOf(e);
                    return o != -1 && i.splice(o, 1), this;
                }
            }),
            (e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var o = 0,
                        n = i[o];
                    e = e || [];
                    for (var s = this._onceEvents && this._onceEvents[t]; n; ) {
                        var r = s && s[n];
                        r && (this.off(t, n), delete s[n]), n.apply(this, e), (o += r ? 0 : 1), (n = i[o]);
                    }
                    return this;
                }
            }),
            t
        );
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("get-size/get-size", [], function () {
                  return e();
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e())
            : (t.getSize = e());
    })(window, function () {
        "use strict";
        function t(t) {
            var e = parseFloat(t),
                i = t.indexOf("%") == -1 && !isNaN(e);
            return i && e;
        }
        function e() {}
        function i() {
            for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < h; e++) {
                var i = u[e];
                t[i] = 0;
            }
            return t;
        }
        function o(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e;
        }
        function n() {
            if (!d) {
                d = !0;
                var e = document.createElement("div");
                (e.style.width = "200px"), (e.style.padding = "1px 2px 3px 4px"), (e.style.borderStyle = "solid"), (e.style.borderWidth = "1px 2px 3px 4px"), (e.style.boxSizing = "border-box");
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var n = o(e);
                (s.isBoxSizeOuter = r = 200 == t(n.width)), i.removeChild(e);
            }
        }
        function s(e) {
            if ((n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType)) {
                var s = o(e);
                if ("none" == s.display) return i();
                var a = {};
                (a.width = e.offsetWidth), (a.height = e.offsetHeight);
                for (var d = (a.isBorderBox = "border-box" == s.boxSizing), l = 0; l < h; l++) {
                    var f = u[l],
                        c = s[f],
                        m = parseFloat(c);
                    a[f] = isNaN(m) ? 0 : m;
                }
                var p = a.paddingLeft + a.paddingRight,
                    y = a.paddingTop + a.paddingBottom,
                    g = a.marginLeft + a.marginRight,
                    v = a.marginTop + a.marginBottom,
                    _ = a.borderLeftWidth + a.borderRightWidth,
                    I = a.borderTopWidth + a.borderBottomWidth,
                    z = d && r,
                    x = t(s.width);
                x !== !1 && (a.width = x + (z ? 0 : p + _));
                var S = t(s.height);
                return S !== !1 && (a.height = S + (z ? 0 : y + I)), (a.innerWidth = a.width - (p + _)), (a.innerHeight = a.height - (y + I)), (a.outerWidth = a.width + g), (a.outerHeight = a.height + v), a;
            }
        }
        var r,
            a =
                "undefined" == typeof console
                    ? e
                    : function (t) {
                          console.error(t);
                      },
            u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            h = u.length,
            d = !1;
        return s;
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.matchesSelector = e());
    })(window, function () {
        "use strict";
        var t = (function () {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var o = e[i],
                    n = o + "MatchesSelector";
                if (t[n]) return n;
            }
        })();
        return function (e, i) {
            return e[t](i);
        };
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
                  return e(t, i);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("desandro-matches-selector")))
            : (t.fizzyUIUtils = e(t, t.matchesSelector));
    })(window, function (t, e) {
        var i = {};
        (i.extend = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }),
            (i.modulo = function (t, e) {
                return ((t % e) + e) % e;
            }),
            (i.makeArray = function (t) {
                var e = [];
                if (Array.isArray(t)) e = t;
                else if (t && "object" == typeof t && "number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]);
                else e.push(t);
                return e;
            }),
            (i.removeFrom = function (t, e) {
                var i = t.indexOf(e);
                i != -1 && t.splice(i, 1);
            }),
            (i.getParent = function (t, i) {
                for (; t.parentNode && t != document.body; ) if (((t = t.parentNode), e(t, i))) return t;
            }),
            (i.getQueryElement = function (t) {
                return "string" == typeof t ? document.querySelector(t) : t;
            }),
            (i.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (i.filterFindElements = function (t, o) {
                t = i.makeArray(t);
                var n = [];
                return (
                    t.forEach(function (t) {
                        if (t instanceof HTMLElement) {
                            if (!o) return void n.push(t);
                            e(t, o) && n.push(t);
                            for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s]);
                        }
                    }),
                    n
                );
            }),
            (i.debounceMethod = function (t, e, i) {
                var o = t.prototype[e],
                    n = e + "Timeout";
                t.prototype[e] = function () {
                    var t = this[n];
                    t && clearTimeout(t);
                    var e = arguments,
                        s = this;
                    this[n] = setTimeout(function () {
                        o.apply(s, e), delete s[n];
                    }, i || 100);
                };
            }),
            (i.docReady = function (t) {
                var e = document.readyState;
                "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
            }),
            (i.toDashed = function (t) {
                return t
                    .replace(/(.)([A-Z])/g, function (t, e, i) {
                        return e + "-" + i;
                    })
                    .toLowerCase();
            });
        var o = t.console;
        return (
            (i.htmlInit = function (e, n) {
                i.docReady(function () {
                    var s = i.toDashed(n),
                        r = "data-" + s,
                        a = document.querySelectorAll("[" + r + "]"),
                        u = document.querySelectorAll(".js-" + s),
                        h = i.makeArray(a).concat(i.makeArray(u)),
                        d = r + "-options",
                        l = t.jQuery;
                    h.forEach(function (t) {
                        var i,
                            s = t.getAttribute(r) || t.getAttribute(d);
                        try {
                            i = s && JSON.parse(s);
                        } catch (a) {
                            return void (o && o.error("Error parsing " + r + " on " + t.className + ": " + a));
                        }
                        var u = new e(t, i);
                        l && l.data(t, n, u);
                    });
                });
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("ev-emitter"), require("get-size")))
            : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
    })(window, function (t, e) {
        "use strict";
        function i(t) {
            for (var e in t) return !1;
            return (e = null), !0;
        }
        function o(t, e) {
            t && ((this.element = t), (this.layout = e), (this.position = { x: 0, y: 0 }), this._create());
        }
        function n(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase();
            });
        }
        var s = document.documentElement.style,
            r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
            a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
            u = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r],
            h = { transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay" },
            d = (o.prototype = Object.create(t.prototype));
        (d.constructor = o),
            (d._create = function () {
                (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });
            }),
            (d.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (d.getSize = function () {
                this.size = e(this.element);
            }),
            (d.css = function (t) {
                var e = this.element.style;
                for (var i in t) {
                    var o = h[i] || i;
                    e[o] = t[i];
                }
            }),
            (d.getPosition = function () {
                var t = getComputedStyle(this.element),
                    e = this.layout._getOption("originLeft"),
                    i = this.layout._getOption("originTop"),
                    o = t[e ? "left" : "right"],
                    n = t[i ? "top" : "bottom"],
                    s = this.layout.size,
                    r = o.indexOf("%") != -1 ? (parseFloat(o) / 100) * s.width : parseInt(o, 10),
                    a = n.indexOf("%") != -1 ? (parseFloat(n) / 100) * s.height : parseInt(n, 10);
                (r = isNaN(r) ? 0 : r), (a = isNaN(a) ? 0 : a), (r -= e ? s.paddingLeft : s.paddingRight), (a -= i ? s.paddingTop : s.paddingBottom), (this.position.x = r), (this.position.y = a);
            }),
            (d.layoutPosition = function () {
                var t = this.layout.size,
                    e = {},
                    i = this.layout._getOption("originLeft"),
                    o = this.layout._getOption("originTop"),
                    n = i ? "paddingLeft" : "paddingRight",
                    s = i ? "left" : "right",
                    r = i ? "right" : "left",
                    a = this.position.x + t[n];
                (e[s] = this.getXValue(a)), (e[r] = "");
                var u = o ? "paddingTop" : "paddingBottom",
                    h = o ? "top" : "bottom",
                    d = o ? "bottom" : "top",
                    l = this.position.y + t[u];
                (e[h] = this.getYValue(l)), (e[d] = ""), this.css(e), this.emitEvent("layout", [this]);
            }),
            (d.getXValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !e ? (t / this.layout.size.width) * 100 + "%" : t + "px";
            }),
            (d.getYValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && e ? (t / this.layout.size.height) * 100 + "%" : t + "px";
            }),
            (d._transitionTo = function (t, e) {
                this.getPosition();
                var i = this.position.x,
                    o = this.position.y,
                    n = parseInt(t, 10),
                    s = parseInt(e, 10),
                    r = n === this.position.x && s === this.position.y;
                if ((this.setPosition(t, e), r && !this.isTransitioning)) return void this.layoutPosition();
                var a = t - i,
                    u = e - o,
                    h = {};
                (h.transform = this.getTranslate(a, u)), this.transition({ to: h, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
            }),
            (d.getTranslate = function (t, e) {
                var i = this.layout._getOption("originLeft"),
                    o = this.layout._getOption("originTop");
                return (t = i ? t : -t), (e = o ? e : -e), "translate3d(" + t + "px, " + e + "px, 0)";
            }),
            (d.goTo = function (t, e) {
                this.setPosition(t, e), this.layoutPosition();
            }),
            (d.moveTo = d._transitionTo),
            (d.setPosition = function (t, e) {
                (this.position.x = parseInt(t, 10)), (this.position.y = parseInt(e, 10));
            }),
            (d._nonTransition = function (t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
            }),
            (d.transition = function (t) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var o = this.element.offsetHeight;
                    o = null;
                }
                this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0);
            });
        var l = "opacity," + n(a);
        (d.enableTransition = function () {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                (t = "number" == typeof t ? t + "ms" : t), this.css({ transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(u, this, !1);
            }
        }),
            (d.onwebkitTransitionEnd = function (t) {
                this.ontransitionend(t);
            }),
            (d.onotransitionend = function (t) {
                this.ontransitionend(t);
            });
        var f = { "-webkit-transform": "transform" };
        (d.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn,
                    o = f[t.propertyName] || t.propertyName;
                if ((delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && ((this.element.style[t.propertyName] = ""), delete e.clean[o]), o in e.onEnd)) {
                    var n = e.onEnd[o];
                    n.call(this), delete e.onEnd[o];
                }
                this.emitEvent("transitionEnd", [this]);
            }
        }),
            (d.disableTransition = function () {
                this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), (this.isTransitioning = !1);
            }),
            (d._removeStyles = function (t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e);
            });
        var c = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
        return (
            (d.removeTransitionStyles = function () {
                this.css(c);
            }),
            (d.stagger = function (t) {
                (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
            }),
            (d.removeElem = function () {
                this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
            }),
            (d.remove = function () {
                return r && parseFloat(this.layout.options.transitionDuration)
                    ? (this.once("transitionEnd", function () {
                          this.removeElem();
                      }),
                      void this.hide())
                    : void this.removeElem();
            }),
            (d.reveal = function () {
                delete this.isHidden, this.css({ display: "" });
                var t = this.layout.options,
                    e = {},
                    i = this.getHideRevealTransitionEndProperty("visibleStyle");
                (e[i] = this.onRevealTransitionEnd), this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
            }),
            (d.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
            }),
            (d.getHideRevealTransitionEndProperty = function (t) {
                var e = this.layout.options[t];
                if (e.opacity) return "opacity";
                for (var i in e) return i;
            }),
            (d.hide = function () {
                (this.isHidden = !0), this.css({ display: "" });
                var t = this.layout.options,
                    e = {},
                    i = this.getHideRevealTransitionEndProperty("hiddenStyle");
                (e[i] = this.onHideTransitionEnd), this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
            }),
            (d.onHideTransitionEnd = function () {
                this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
            }),
            (d.destroy = function () {
                this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
            }),
            o
        );
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
                  return e(t, i, o, n, s);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")))
            : (t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item));
    })(window, function (t, e, i, o, n) {
        "use strict";
        function s(t, e) {
            var i = o.getQueryElement(t);
            if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            (this.element = i), h && (this.$element = h(this.element)), (this.options = o.extend({}, this.constructor.defaults)), this.option(e);
            var n = ++l;
            (this.element.outlayerGUID = n), (f[n] = this), this._create();
            var s = this._getOption("initLayout");
            s && this.layout();
        }
        function r(t) {
            function e() {
                t.apply(this, arguments);
            }
            return (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), e;
        }
        function a(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                o = e && e[2];
            if (!i.length) return 0;
            i = parseFloat(i);
            var n = m[o] || 1;
            return i * n;
        }
        var u = t.console,
            h = t.jQuery,
            d = function () {},
            l = 0,
            f = {};
        (s.namespace = "outlayer"),
            (s.Item = n),
            (s.defaults = {
                containerStyle: { position: "relative" },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                visibleStyle: { opacity: 1, transform: "scale(1)" },
            });
        var c = s.prototype;
        o.extend(c, e.prototype),
            (c.option = function (t) {
                o.extend(this.options, t);
            }),
            (c._getOption = function (t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
            }),
            (s.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer",
            }),
            (c._create = function () {
                this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
                var t = this._getOption("resize");
                t && this.bindResize();
            }),
            (c.reloadItems = function () {
                this.items = this._itemize(this.element.children);
            }),
            (c._itemize = function (t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
                    var s = e[n],
                        r = new i(s, this);
                    o.push(r);
                }
                return o;
            }),
            (c._filterFindItemElements = function (t) {
                return o.filterFindElements(t, this.options.itemSelector);
            }),
            (c.getItemElements = function () {
                return this.items.map(function (t) {
                    return t.element;
                });
            }),
            (c.layout = function () {
                this._resetLayout(), this._manageStamps();
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e), (this._isLayoutInited = !0);
            }),
            (c._init = c.layout),
            (c._resetLayout = function () {
                this.getSize();
            }),
            (c.getSize = function () {
                this.size = i(this.element);
            }),
            (c._getMeasurement = function (t, e) {
                var o,
                    n = this.options[t];
                n ? ("string" == typeof n ? (o = this.element.querySelector(n)) : n instanceof HTMLElement && (o = n), (this[t] = o ? i(o)[e] : n)) : (this[t] = 0);
            }),
            (c.layoutItems = function (t, e) {
                (t = this._getItemsForLayout(t)), this._layoutItems(t, e), this._postLayout();
            }),
            (c._getItemsForLayout = function (t) {
                return t.filter(function (t) {
                    return !t.isIgnored;
                });
            }),
            (c._layoutItems = function (t, e) {
                if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
                    var i = [];
                    t.forEach(function (t) {
                        var o = this._getItemLayoutPosition(t);
                        (o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o);
                    }, this),
                        this._processLayoutQueue(i);
                }
            }),
            (c._getItemLayoutPosition = function () {
                return { x: 0, y: 0 };
            }),
            (c._processLayoutQueue = function (t) {
                this.updateStagger(),
                    t.forEach(function (t, e) {
                        this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                    }, this);
            }),
            (c.updateStagger = function () {
                var t = this.options.stagger;
                return null === t || void 0 === t ? void (this.stagger = 0) : ((this.stagger = a(t)), this.stagger);
            }),
            (c._positionItem = function (t, e, i, o, n) {
                o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
            }),
            (c._postLayout = function () {
                this.resizeContainer();
            }),
            (c.resizeContainer = function () {
                var t = this._getOption("resizeContainer");
                if (t) {
                    var e = this._getContainerSize();
                    e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
                }
            }),
            (c._getContainerSize = d),
            (c._setContainerMeasure = function (t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                        (t = Math.max(t, 0)),
                        (this.element.style[e ? "width" : "height"] = t + "px");
                }
            }),
            (c._emitCompleteOnItems = function (t, e) {
                function i() {
                    n.dispatchEvent(t + "Complete", null, [e]);
                }
                function o() {
                    r++, r == s && i();
                }
                var n = this,
                    s = e.length;
                if (!e || !s) return void i();
                var r = 0;
                e.forEach(function (e) {
                    e.once(t, o);
                });
            }),
            (c.dispatchEvent = function (t, e, i) {
                var o = e ? [e].concat(i) : i;
                if ((this.emitEvent(t, o), h))
                    if (((this.$element = this.$element || h(this.element)), e)) {
                        var n = h.Event(e);
                        (n.type = t), this.$element.trigger(n, i);
                    } else this.$element.trigger(t, i);
            }),
            (c.ignore = function (t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0);
            }),
            (c.unignore = function (t) {
                var e = this.getItem(t);
                e && delete e.isIgnored;
            }),
            (c.stamp = function (t) {
                (t = this._find(t)), t && ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
            }),
            (c.unstamp = function (t) {
                (t = this._find(t)),
                    t &&
                        t.forEach(function (t) {
                            o.removeFrom(this.stamps, t), this.unignore(t);
                        }, this);
            }),
            (c._find = function (t) {
                if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), (t = o.makeArray(t));
            }),
            (c._manageStamps = function () {
                this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
            }),
            (c._getBoundingRect = function () {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
                };
            }),
            (c._manageStamp = d),
            (c._getElementOffset = function (t) {
                var e = t.getBoundingClientRect(),
                    o = this._boundingRect,
                    n = i(t),
                    s = { left: e.left - o.left - n.marginLeft, top: e.top - o.top - n.marginTop, right: o.right - e.right - n.marginRight, bottom: o.bottom - e.bottom - n.marginBottom };
                return s;
            }),
            (c.handleEvent = o.handleEvent),
            (c.bindResize = function () {
                t.addEventListener("resize", this), (this.isResizeBound = !0);
            }),
            (c.unbindResize = function () {
                t.removeEventListener("resize", this), (this.isResizeBound = !1);
            }),
            (c.onresize = function () {
                this.resize();
            }),
            o.debounceMethod(s, "onresize", 100),
            (c.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }),
            (c.needsResizeLayout = function () {
                var t = i(this.element),
                    e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth;
            }),
            (c.addItems = function (t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e;
            }),
            (c.appended = function (t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e));
            }),
            (c.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    (this.items = e.concat(i)), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
                }
            }),
            (c.reveal = function (t) {
                if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e), t.reveal();
                    });
                }
            }),
            (c.hide = function (t) {
                if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e), t.hide();
                    });
                }
            }),
            (c.revealItemElements = function (t) {
                var e = this.getItems(t);
                this.reveal(e);
            }),
            (c.hideItemElements = function (t) {
                var e = this.getItems(t);
                this.hide(e);
            }),
            (c.getItem = function (t) {
                for (var e = 0; e < this.items.length; e++) {
                    var i = this.items[e];
                    if (i.element == t) return i;
                }
            }),
            (c.getItems = function (t) {
                t = o.makeArray(t);
                var e = [];
                return (
                    t.forEach(function (t) {
                        var i = this.getItem(t);
                        i && e.push(i);
                    }, this),
                    e
                );
            }),
            (c.remove = function (t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e),
                    e &&
                        e.length &&
                        e.forEach(function (t) {
                            t.remove(), o.removeFrom(this.items, t);
                        }, this);
            }),
            (c.destroy = function () {
                var t = this.element.style;
                (t.height = ""),
                    (t.position = ""),
                    (t.width = ""),
                    this.items.forEach(function (t) {
                        t.destroy();
                    }),
                    this.unbindResize();
                var e = this.element.outlayerGUID;
                delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace);
            }),
            (s.data = function (t) {
                t = o.getQueryElement(t);
                var e = t && t.outlayerGUID;
                return e && f[e];
            }),
            (s.create = function (t, e) {
                var i = r(s);
                return (
                    (i.defaults = o.extend({}, s.defaults)),
                    o.extend(i.defaults, e),
                    (i.compatOptions = o.extend({}, s.compatOptions)),
                    (i.namespace = t),
                    (i.data = s.data),
                    (i.Item = r(n)),
                    o.htmlInit(i, t),
                    h && h.bridget && h.bridget(t, i),
                    i
                );
            });
        var m = { ms: 1, s: 1e3 };
        return (s.Item = n), s;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope/js/item", ["outlayer/outlayer"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("outlayer")))
            : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
    })(window, function (t) {
        "use strict";
        function e() {
            t.Item.apply(this, arguments);
        }
        var i = (e.prototype = Object.create(t.Item.prototype)),
            o = i._create;
        (i._create = function () {
            (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
        }),
            (i.updateSortData = function () {
                if (!this.isIgnored) {
                    (this.sortData.id = this.id), (this.sortData["original-order"] = this.id), (this.sortData.random = Math.random());
                    var t = this.layout.options.getSortData,
                        e = this.layout._sorters;
                    for (var i in t) {
                        var o = e[i];
                        this.sortData[i] = o(this.element, this);
                    }
                }
            });
        var n = i.destroy;
        return (
            (i.destroy = function () {
                n.apply(this, arguments), this.css({ display: "" });
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("get-size"), require("outlayer")))
            : ((t.Isotope = t.Isotope || {}), (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
    })(window, function (t, e) {
        "use strict";
        function i(t) {
            (this.isotope = t), t && ((this.options = t.options[this.namespace]), (this.element = t.element), (this.items = t.filteredItems), (this.size = t.size));
        }
        var o = i.prototype,
            n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
        return (
            n.forEach(function (t) {
                o[t] = function () {
                    return e.prototype[t].apply(this.isotope, arguments);
                };
            }),
            (o.needsVerticalResizeLayout = function () {
                var e = t(this.isotope.element),
                    i = this.isotope.size && e;
                return i && e.innerHeight != this.isotope.size.innerHeight;
            }),
            (o._getMeasurement = function () {
                this.isotope._getMeasurement.apply(this, arguments);
            }),
            (o.getColumnWidth = function () {
                this.getSegmentSize("column", "Width");
            }),
            (o.getRowHeight = function () {
                this.getSegmentSize("row", "Height");
            }),
            (o.getSegmentSize = function (t, e) {
                var i = t + e,
                    o = "outer" + e;
                if ((this._getMeasurement(i, o), !this[i])) {
                    var n = this.getFirstItemSize();
                    this[i] = (n && n[o]) || this.isotope.size["inner" + e];
                }
            }),
            (o.getFirstItemSize = function () {
                var e = this.isotope.filteredItems[0];
                return e && e.element && t(e.element);
            }),
            (o.layout = function () {
                this.isotope.layout.apply(this.isotope, arguments);
            }),
            (o.getSize = function () {
                this.isotope.getSize(), (this.size = this.isotope.size);
            }),
            (i.modes = {}),
            (i.create = function (t, e) {
                function n() {
                    i.apply(this, arguments);
                }
                return (n.prototype = Object.create(o)), (n.prototype.constructor = n), e && (n.options = e), (n.prototype.namespace = t), (i.modes[t] = n), n;
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("outlayer"), require("get-size")))
            : (t.Masonry = e(t.Outlayer, t.getSize));
    })(window, function (t, e) {
        var i = t.create("masonry");
        i.compatOptions.fitWidth = "isFitWidth";
        var o = i.prototype;
        return (
            (o._resetLayout = function () {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), (this.colYs = []);
                for (var t = 0; t < this.cols; t++) this.colYs.push(0);
                (this.maxY = 0), (this.horizontalColIndex = 0);
            }),
            (o.measureColumns = function () {
                if ((this.getContainerWidth(), !this.columnWidth)) {
                    var t = this.items[0],
                        i = t && t.element;
                    this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
                }
                var o = (this.columnWidth += this.gutter),
                    n = this.containerWidth + this.gutter,
                    s = n / o,
                    r = o - (n % o),
                    a = r && r < 1 ? "round" : "floor";
                (s = Math[a](s)), (this.cols = Math.max(s, 1));
            }),
            (o.getContainerWidth = function () {
                var t = this._getOption("fitWidth"),
                    i = t ? this.element.parentNode : this.element,
                    o = e(i);
                this.containerWidth = o && o.innerWidth;
            }),
            (o._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth,
                    i = e && e < 1 ? "round" : "ceil",
                    o = Math[i](t.size.outerWidth / this.columnWidth);
                o = Math.min(o, this.cols);
                for (
                    var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = { x: this.columnWidth * s.col, y: s.y }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col;
                    h < u;
                    h++
                )
                    this.colYs[h] = a;
                return r;
            }),
            (o._getTopColPosition = function (t) {
                var e = this._getTopColGroup(t),
                    i = Math.min.apply(Math, e);
                return { col: e.indexOf(i), y: i };
            }),
            (o._getTopColGroup = function (t) {
                if (t < 2) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
                return e;
            }),
            (o._getColGroupY = function (t, e) {
                if (e < 2) return this.colYs[t];
                var i = this.colYs.slice(t, t + e);
                return Math.max.apply(Math, i);
            }),
            (o._getHorizontalColPosition = function (t, e) {
                var i = this.horizontalColIndex % this.cols,
                    o = t > 1 && i + t > this.cols;
                i = o ? 0 : i;
                var n = e.size.outerWidth && e.size.outerHeight;
                return (this.horizontalColIndex = n ? i + t : this.horizontalColIndex), { col: i, y: this._getColGroupY(i, t) };
            }),
            (o._manageStamp = function (t) {
                var i = e(t),
                    o = this._getElementOffset(t),
                    n = this._getOption("originLeft"),
                    s = n ? o.left : o.right,
                    r = s + i.outerWidth,
                    a = Math.floor(s / this.columnWidth);
                a = Math.max(0, a);
                var u = Math.floor(r / this.columnWidth);
                (u -= r % this.columnWidth ? 0 : 1), (u = Math.min(this.cols - 1, u));
                for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l]);
            }),
            (o._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = { height: this.maxY };
                return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
            }),
            (o._getContainerFitWidth = function () {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
                return (this.cols - t) * this.columnWidth - this.gutter;
            }),
            (o.needsResizeLayout = function () {
                var t = this.containerWidth;
                return this.getContainerWidth(), t != this.containerWidth;
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("../layout-mode"), require("masonry-layout")))
            : e(t.Isotope.LayoutMode, t.Masonry);
    })(window, function (t, e) {
        "use strict";
        var i = t.create("masonry"),
            o = i.prototype,
            n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
        for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
        var r = o.measureColumns;
        o.measureColumns = function () {
            (this.items = this.isotope.filteredItems), r.call(this);
        };
        var a = o._getOption;
        return (
            (o._getOption = function (t) {
                return "fitWidth" == t ? (void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth) : a.apply(this.isotope, arguments);
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? (module.exports = e(require("../layout-mode"))) : e(t.Isotope.LayoutMode);
    })(window, function (t) {
        "use strict";
        var e = t.create("fitRows"),
            i = e.prototype;
        return (
            (i._resetLayout = function () {
                (this.x = 0), (this.y = 0), (this.maxY = 0), this._getMeasurement("gutter", "outerWidth");
            }),
            (i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth + this.gutter,
                    i = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
                var o = { x: this.x, y: this.y };
                return (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)), (this.x += e), o;
            }),
            (i._getContainerSize = function () {
                return { height: this.maxY };
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? (module.exports = e(require("../layout-mode"))) : e(t.Isotope.LayoutMode);
    })(window, function (t) {
        "use strict";
        var e = t.create("vertical", { horizontalAlignment: 0 }),
            i = e.prototype;
        return (
            (i._resetLayout = function () {
                this.y = 0;
            }),
            (i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                    i = this.y;
                return (this.y += t.size.outerHeight), { x: e, y: i };
            }),
            (i._getContainerSize = function () {
                return { height: this.y };
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define([
                  "outlayer/outlayer",
                  "get-size/get-size",
                  "desandro-matches-selector/matches-selector",
                  "fizzy-ui-utils/utils",
                  "isotope/js/item",
                  "isotope/js/layout-mode",
                  "isotope/js/layout-modes/masonry",
                  "isotope/js/layout-modes/fit-rows",
                  "isotope/js/layout-modes/vertical",
              ], function (i, o, n, s, r, a) {
                  return e(t, i, o, n, s, r, a);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(
                  t,
                  require("outlayer"),
                  require("get-size"),
                  require("desandro-matches-selector"),
                  require("fizzy-ui-utils"),
                  require("isotope/js/item"),
                  require("isotope/js/layout-mode"),
                  require("isotope/js/layout-modes/masonry"),
                  require("isotope/js/layout-modes/fit-rows"),
                  require("isotope/js/layout-modes/vertical")
              ))
            : (t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode));
    })(window, function (t, e, i, o, n, s, r) {
        function a(t, e) {
            return function (i, o) {
                for (var n = 0; n < t.length; n++) {
                    var s = t[n],
                        r = i.sortData[s],
                        a = o.sortData[s];
                    if (r > a || r < a) {
                        var u = void 0 !== e[s] ? e[s] : e,
                            h = u ? 1 : -1;
                        return (r > a ? 1 : -1) * h;
                    }
                }
                return 0;
            };
        }
        var u = t.jQuery,
            h = String.prototype.trim
                ? function (t) {
                      return t.trim();
                  }
                : function (t) {
                      return t.replace(/^\s+|\s+$/g, "");
                  },
            d = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
        (d.Item = s), (d.LayoutMode = r);
        var l = d.prototype;
        (l._create = function () {
            (this.itemGUID = 0), (this._sorters = {}), this._getSorters(), e.prototype._create.call(this), (this.modes = {}), (this.filteredItems = this.items), (this.sortHistory = ["original-order"]);
            for (var t in r.modes) this._initLayoutMode(t);
        }),
            (l.reloadItems = function () {
                (this.itemGUID = 0), e.prototype.reloadItems.call(this);
            }),
            (l._itemize = function () {
                for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
                    var o = t[i];
                    o.id = this.itemGUID++;
                }
                return this._updateItemsSortData(t), t;
            }),
            (l._initLayoutMode = function (t) {
                var e = r.modes[t],
                    i = this.options[t] || {};
                (this.options[t] = e.options ? n.extend(e.options, i) : i), (this.modes[t] = new e(this));
            }),
            (l.layout = function () {
                return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
            }),
            (l._layout = function () {
                var t = this._getIsInstant();
                this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), (this._isLayoutInited = !0);
            }),
            (l.arrange = function (t) {
                this.option(t), this._getIsInstant();
                var e = this._filter(this.items);
                (this.filteredItems = e.matches), this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout();
            }),
            (l._init = l.arrange),
            (l._hideReveal = function (t) {
                this.reveal(t.needReveal), this.hide(t.needHide);
            }),
            (l._getIsInstant = function () {
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                return (this._isInstant = e), e;
            }),
            (l._bindArrangeComplete = function () {
                function t() {
                    e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
                }
                var e,
                    i,
                    o,
                    n = this;
                this.once("layoutComplete", function () {
                    (e = !0), t();
                }),
                    this.once("hideComplete", function () {
                        (i = !0), t();
                    }),
                    this.once("revealComplete", function () {
                        (o = !0), t();
                    });
            }),
            (l._filter = function (t) {
                var e = this.options.filter;
                e = e || "*";
                for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
                    var a = t[r];
                    if (!a.isIgnored) {
                        var u = s(a);
                        u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
                    }
                }
                return { matches: i, needReveal: o, needHide: n };
            }),
            (l._getFilterTest = function (t) {
                return u && this.options.isJQueryFiltering
                    ? function (e) {
                          return u(e.element).is(t);
                      }
                    : "function" == typeof t
                    ? function (e) {
                          return t(e.element);
                      }
                    : function (e) {
                          return o(e.element, t);
                      };
            }),
            (l.updateSortData = function (t) {
                var e;
                t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items), this._getSorters(), this._updateItemsSortData(e);
            }),
            (l._getSorters = function () {
                var t = this.options.getSortData;
                for (var e in t) {
                    var i = t[e];
                    this._sorters[e] = f(i);
                }
            }),
            (l._updateItemsSortData = function (t) {
                for (var e = t && t.length, i = 0; e && i < e; i++) {
                    var o = t[i];
                    o.updateSortData();
                }
            });
        var f = (function () {
            function t(t) {
                if ("string" != typeof t) return t;
                var i = h(t).split(" "),
                    o = i[0],
                    n = o.match(/^\[(.+)\]$/),
                    s = n && n[1],
                    r = e(s, o),
                    a = d.sortDataParsers[i[1]];
                return (t = a
                    ? function (t) {
                          return t && a(r(t));
                      }
                    : function (t) {
                          return t && r(t);
                      });
            }
            function e(t, e) {
                return t
                    ? function (e) {
                          return e.getAttribute(t);
                      }
                    : function (t) {
                          var i = t.querySelector(e);
                          return i && i.textContent;
                      };
            }
            return t;
        })();
        (d.sortDataParsers = {
            parseInt: function (t) {
                return parseInt(t, 10);
            },
            parseFloat: function (t) {
                return parseFloat(t);
            },
        }),
            (l._sort = function () {
                if (this.options.sortBy) {
                    var t = n.makeArray(this.options.sortBy);
                    this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
                    var e = a(this.sortHistory, this.options.sortAscending);
                    this.filteredItems.sort(e);
                }
            }),
            (l._getIsSameSortBy = function (t) {
                for (var e = 0; e < t.length; e++) if (t[e] != this.sortHistory[e]) return !1;
                return !0;
            }),
            (l._mode = function () {
                var t = this.options.layoutMode,
                    e = this.modes[t];
                if (!e) throw new Error("No layout mode: " + t);
                return (e.options = this.options[t]), e;
            }),
            (l._resetLayout = function () {
                e.prototype._resetLayout.call(this), this._mode()._resetLayout();
            }),
            (l._getItemLayoutPosition = function (t) {
                return this._mode()._getItemLayoutPosition(t);
            }),
            (l._manageStamp = function (t) {
                this._mode()._manageStamp(t);
            }),
            (l._getContainerSize = function () {
                return this._mode()._getContainerSize();
            }),
            (l.needsResizeLayout = function () {
                return this._mode().needsResizeLayout();
            }),
            (l.appended = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(i);
                }
            }),
            (l.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    this._resetLayout(), this._manageStamps();
                    var i = this._filterRevealAdded(e);
                    this.layoutItems(this.filteredItems), (this.filteredItems = i.concat(this.filteredItems)), (this.items = e.concat(this.items));
                }
            }),
            (l._filterRevealAdded = function (t) {
                var e = this._filter(t);
                return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches;
            }),
            (l.insert = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i,
                        o,
                        n = e.length;
                    for (i = 0; i < n; i++) (o = e[i]), this.element.appendChild(o.element);
                    var s = this._filter(e).matches;
                    for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
                    for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
                    this.reveal(s);
                }
            });
        var c = l.remove;
        return (
            (l.remove = function (t) {
                t = n.makeArray(t);
                var e = this.getItems(t);
                c.call(this, t);
                for (var i = e && e.length, o = 0; i && o < i; o++) {
                    var s = e[o];
                    n.removeFrom(this.filteredItems, s);
                }
            }),
            (l.shuffle = function () {
                for (var t = 0; t < this.items.length; t++) {
                    var e = this.items[t];
                    e.sortData.random = Math.random();
                }
                (this.options.sortBy = "random"), this._sort(), this._layout();
            }),
            (l._noTransition = function (t, e) {
                var i = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var o = t.apply(this, e);
                return (this.options.transitionDuration = i), o;
            }),
            (l.getFilteredItemElements = function () {
                return this.filteredItems.map(function (t) {
                    return t.element;
                });
            }),
            d
        );
    });

/* -------------------------------------------------
    2. Owl Carousel
-------------------------------------------------- */
/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!(function (a, b, c, d) {
    function e(b, c) {
        (this.settings = null),
            (this.options = a.extend({}, e.Defaults, c)),
            (this.$element = a(b)),
            (this._handlers = {}),
            (this._plugins = {}),
            (this._supress = {}),
            (this._current = null),
            (this._speed = null),
            (this._coordinates = []),
            (this._breakpoint = null),
            (this._width = null),
            (this._items = []),
            (this._clones = []),
            (this._mergers = []),
            (this._widths = []),
            (this._invalidated = {}),
            (this._pipe = []),
            (this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }),
            (this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }),
            a.each(
                ["onResize", "onThrottledResize"],
                a.proxy(function (b, c) {
                    this._handlers[c] = a.proxy(this[c], this);
                }, this)
            ),
            a.each(
                e.Plugins,
                a.proxy(function (a, b) {
                    this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
                }, this)
            ),
            a.each(
                e.Workers,
                a.proxy(function (b, c) {
                    this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
                }, this)
            ),
            this.setup(),
            this.initialize();
    }
    (e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab",
    }),
        (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
        (e.Type = { Event: "event", State: "state" }),
        (e.Plugins = {}),
        (e.Workers = [
            {
                filter: ["width", "settings"],
                run: function () {
                    this._width = this.$element.width();
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    a.current = this._items && this._items[this.relative(this._current)];
                },
            },
            {
                filter: ["items", "settings"],
                run: function () {
                    this.$stage.children(".cloned").remove();
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b = this.settings.margin || "",
                        c = !this.settings.autoWidth,
                        d = this.settings.rtl,
                        e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b };
                    !c && this.$stage.children().css(e), (a.css = e);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                        c = null,
                        d = this._items.length,
                        e = !this.settings.autoWidth,
                        f = [];
                    for (a.items = { merge: !1, width: b }; d--; )
                        (c = this._mergers[d]), (c = (this.settings.mergeFit && Math.min(c, this.settings.items)) || c), (a.items.merge = c > 1 || a.items.merge), (f[d] = e ? b * c : this._items[d].width());
                    this._widths = f;
                },
            },
            {
                filter: ["items", "settings"],
                run: function () {
                    var b = [],
                        c = this._items,
                        d = this.settings,
                        e = Math.max(2 * d.items, 4),
                        f = 2 * Math.ceil(c.length / 2),
                        g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
                        h = "",
                        i = "";
                    for (g /= 2; g > 0; ) b.push(this.normalize(b.length / 2, !0)), (h += c[b[b.length - 1]][0].outerHTML), b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), (i = c[b[b.length - 1]][0].outerHTML + i), (g -= 1);
                    (this._clones = b), a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function () {
                    for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b; )
                        (d = f[c - 1] || 0), (e = this._widths[this.relative(c)] + this.settings.margin), f.push(d + e * a);
                    this._coordinates = f;
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function () {
                    var a = this.settings.stagePadding,
                        b = this._coordinates,
                        c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" };
                    this.$stage.css(c);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b = this._coordinates.length,
                        c = !this.settings.autoWidth,
                        d = this.$stage.children();
                    if (c && a.items.merge) for (; b--; ) (a.css.width = this._widths[this.relative(b)]), d.eq(b).css(a.css);
                    else c && ((a.css.width = a.items.width), d.css(a.css));
                },
            },
            {
                filter: ["items"],
                run: function () {
                    this._coordinates.length < 1 && this.$stage.removeAttr("style");
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    (a.current = a.current ? this.$stage.children().index(a.current) : 0), (a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current))), this.reset(a.current);
                },
            },
            {
                filter: ["position"],
                run: function () {
                    this.animate(this.coordinates(this._current));
                },
            },
            {
                filter: ["width", "position", "items", "settings"],
                run: function () {
                    var a,
                        b,
                        c,
                        d,
                        e = this.settings.rtl ? 1 : -1,
                        f = 2 * this.settings.stagePadding,
                        g = this.coordinates(this.current()) + f,
                        h = g + this.width() * e,
                        i = [];
                    for (c = 0, d = this._coordinates.length; c < d; c++)
                        (a = this._coordinates[c - 1] || 0), (b = Math.abs(this._coordinates[c]) + f * e), ((this.op(a, "<=", g) && this.op(a, ">", h)) || (this.op(b, "<", g) && this.op(b, ">", h))) && i.push(c);
                    this.$stage.children(".active").removeClass("active"),
                        this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"),
                        this.$stage.children(".center").removeClass("center"),
                        this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
                },
            },
        ]),
        (e.prototype.initializeStage = function () {
            (this.$stage = this.$element.find("." + this.settings.stageClass)),
                this.$stage.length ||
                    (this.$element.addClass(this.options.loadingClass),
                    (this.$stage = a("<" + this.settings.stageElement + ">", { class: this.settings.stageClass }).wrap(a("<div/>", { class: this.settings.stageOuterClass }))),
                    this.$element.append(this.$stage.parent()));
        }),
        (e.prototype.initializeItems = function () {
            var b = this.$element.find(".owl-item");
            if (b.length)
                return (
                    (this._items = b.get().map(function (b) {
                        return a(b);
                    })),
                    (this._mergers = this._items.map(function () {
                        return 1;
                    })),
                    void this.refresh()
                );
            this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
        }),
        (e.prototype.initialize = function () {
            if ((this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading"))) {
                var a, b, c;
                (a = this.$element.find("img")), (b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d), (c = this.$element.children(b).width()), a.length && c <= 0 && this.preloadAutoWidthImages(a);
            }
            this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
        }),
        (e.prototype.isVisible = function () {
            return !this.settings.checkVisibility || this.$element.is(":visible");
        }),
        (e.prototype.setup = function () {
            var b = this.viewport(),
                c = this.options.responsive,
                d = -1,
                e = null;
            c
                ? (a.each(c, function (a) {
                      a <= b && a > d && (d = Number(a));
                  }),
                  (e = a.extend({}, this.options, c[d])),
                  "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
                  delete e.responsive,
                  e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d)))
                : (e = a.extend({}, this.options)),
                this.trigger("change", { property: { name: "settings", value: e } }),
                (this._breakpoint = d),
                (this.settings = e),
                this.invalidate("settings"),
                this.trigger("changed", { property: { name: "settings", value: this.settings } });
        }),
        (e.prototype.optionsLogic = function () {
            this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
        }),
        (e.prototype.prepare = function (b) {
            var c = this.trigger("prepare", { content: b });
            return (
                c.data ||
                    (c.data = a("<" + this.settings.itemElement + "/>")
                        .addClass(this.options.itemClass)
                        .append(b)),
                this.trigger("prepared", { content: c.data }),
                c.data
            );
        }),
        (e.prototype.update = function () {
            for (
                var b = 0,
                    c = this._pipe.length,
                    d = a.proxy(function (a) {
                        return this[a];
                    }, this._invalidated),
                    e = {};
                b < c;

            )
                (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
            (this._invalidated = {}), !this.is("valid") && this.enter("valid");
        }),
        (e.prototype.width = function (a) {
            switch ((a = a || e.Width.Default)) {
                case e.Width.Inner:
                case e.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin;
            }
        }),
        (e.prototype.refresh = function () {
            this.enter("refreshing"),
                this.trigger("refresh"),
                this.setup(),
                this.optionsLogic(),
                this.$element.addClass(this.options.refreshClass),
                this.update(),
                this.$element.removeClass(this.options.refreshClass),
                this.leave("refreshing"),
                this.trigger("refreshed");
        }),
        (e.prototype.onThrottledResize = function () {
            b.clearTimeout(this.resizeTimer), (this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate));
        }),
        (e.prototype.onResize = function () {
            return (
                !!this._items.length &&
                this._width !== this.$element.width() &&
                !!this.isVisible() &&
                (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
            );
        }),
        (e.prototype.registerEventHandlers = function () {
            a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)),
                !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize),
                this.settings.mouseDrag &&
                    (this.$element.addClass(this.options.dragClass),
                    this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
                    this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                        return !1;
                    })),
                this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
        }),
        (e.prototype.onDragStart = function (b) {
            var d = null;
            3 !== b.which &&
                (a.support.transform
                    ? ((d = this.$stage
                          .css("transform")
                          .replace(/.*\(|\)| /g, "")
                          .split(",")),
                      (d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }))
                    : ((d = this.$stage.position()), (d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top })),
                this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")),
                this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type),
                this.speed(0),
                (this._drag.time = new Date().getTime()),
                (this._drag.target = a(b.target)),
                (this._drag.stage.start = d),
                (this._drag.stage.current = d),
                (this._drag.pointer = this.pointer(b)),
                a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)),
                a(c).one(
                    "mousemove.owl.core touchmove.owl.core",
                    a.proxy(function (b) {
                        var d = this.difference(this._drag.pointer, this.pointer(b));
                        a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
                    }, this)
                ));
        }),
        (e.prototype.onDragMove = function (a) {
            var b = null,
                c = null,
                d = null,
                e = this.difference(this._drag.pointer, this.pointer(a)),
                f = this.difference(this._drag.stage.start, e);
            this.is("dragging") &&
                (a.preventDefault(),
                this.settings.loop
                    ? ((b = this.coordinates(this.minimum())), (c = this.coordinates(this.maximum() + 1) - b), (f.x = ((((f.x - b) % c) + c) % c) + b))
                    : ((b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum())),
                      (c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum())),
                      (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
                      (f.x = Math.max(Math.min(f.x, b + d), c + d))),
                (this._drag.stage.current = f),
                this.animate(f.x));
        }),
        (e.prototype.onDragEnd = function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b)),
                e = this._drag.stage.current,
                f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
            a(c).off(".owl.core"),
                this.$element.removeClass(this.options.grabClass),
                ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
                    (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                    this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
                    this.invalidate("position"),
                    this.update(),
                    (this._drag.direction = f),
                    (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
                        this._drag.target.one("click.owl.core", function () {
                            return !1;
                        })),
                this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
        }),
        (e.prototype.closest = function (b, c) {
            var e = -1,
                f = 30,
                g = this.width(),
                h = this.coordinates();
            return (
                this.settings.freeDrag ||
                    a.each(
                        h,
                        a.proxy(function (a, i) {
                            return (
                                "left" === c && b > i - f && b < i + f
                                    ? (e = a)
                                    : "right" === c && b > i - g - f && b < i - g + f
                                    ? (e = a + 1)
                                    : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a),
                                -1 === e
                            );
                        }, this)
                    ),
                this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? (e = b = this.minimum()) : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())),
                e
            );
        }),
        (e.prototype.animate = function (b) {
            var c = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(),
                c && (this.enter("animating"), this.trigger("translate")),
                a.support.transform3d && a.support.transition
                    ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "") })
                    : c
                    ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this))
                    : this.$stage.css({ left: b + "px" });
        }),
        (e.prototype.is = function (a) {
            return this._states.current[a] && this._states.current[a] > 0;
        }),
        (e.prototype.current = function (a) {
            if (a === d) return this._current;
            if (0 === this._items.length) return d;
            if (((a = this.normalize(a)), this._current !== a)) {
                var b = this.trigger("change", { property: { name: "position", value: a } });
                b.data !== d && (a = this.normalize(b.data)), (this._current = a), this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
            }
            return this._current;
        }),
        (e.prototype.invalidate = function (b) {
            return (
                "string" === a.type(b) && ((this._invalidated[b] = !0), this.is("valid") && this.leave("valid")),
                a.map(this._invalidated, function (a, b) {
                    return b;
                })
            );
        }),
        (e.prototype.reset = function (a) {
            (a = this.normalize(a)) !== d && ((this._speed = 0), (this._current = a), this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
        }),
        (e.prototype.normalize = function (a, b) {
            var c = this._items.length,
                e = b ? 0 : this._clones.length;
            return !this.isNumeric(a) || c < 1 ? (a = d) : (a < 0 || a >= c + e) && (a = ((((a - e / 2) % c) + c) % c) + e / 2), a;
        }),
        (e.prototype.relative = function (a) {
            return (a -= this._clones.length / 2), this.normalize(a, !0);
        }),
        (e.prototype.maximum = function (a) {
            var b,
                c,
                d,
                e = this.settings,
                f = this._coordinates.length;
            if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
            else if (e.autoWidth || e.merge) {
                if ((b = this._items.length)) for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d); );
                f = b + 1;
            } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
            return a && (f -= this._clones.length / 2), Math.max(f, 0);
        }),
        (e.prototype.minimum = function (a) {
            return a ? 0 : this._clones.length / 2;
        }),
        (e.prototype.items = function (a) {
            return a === d ? this._items.slice() : ((a = this.normalize(a, !0)), this._items[a]);
        }),
        (e.prototype.mergers = function (a) {
            return a === d ? this._mergers.slice() : ((a = this.normalize(a, !0)), this._mergers[a]);
        }),
        (e.prototype.clones = function (b) {
            var c = this._clones.length / 2,
                e = c + this._items.length,
                f = function (a) {
                    return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
                };
            return b === d
                ? a.map(this._clones, function (a, b) {
                      return f(b);
                  })
                : a.map(this._clones, function (a, c) {
                      return a === b ? f(c) : null;
                  });
        }),
        (e.prototype.speed = function (a) {
            return a !== d && (this._speed = a), this._speed;
        }),
        (e.prototype.coordinates = function (b) {
            var c,
                e = 1,
                f = b - 1;
            return b === d
                ? a.map(
                      this._coordinates,
                      a.proxy(function (a, b) {
                          return this.coordinates(b);
                      }, this)
                  )
                : (this.settings.center ? (this.settings.rtl && ((e = -1), (f = b + 1)), (c = this._coordinates[b]), (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e)) : (c = this._coordinates[f] || 0), (c = Math.ceil(c)));
        }),
        (e.prototype.duration = function (a, b, c) {
            return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
        }),
        (e.prototype.to = function (a, b) {
            var c = this.current(),
                d = null,
                e = a - this.relative(c),
                f = (e > 0) - (e < 0),
                g = this._items.length,
                h = this.minimum(),
                i = this.maximum();
            this.settings.loop
                ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), (a = c + e), (d = ((((a - h) % g) + g) % g) + h) !== a && d - e <= i && d - e > 0 && ((c = d - e), (a = d), this.reset(c)))
                : this.settings.rewind
                ? ((i += 1), (a = ((a % i) + i) % i))
                : (a = Math.max(h, Math.min(i, a))),
                this.speed(this.duration(c, a, b)),
                this.current(a),
                this.isVisible() && this.update();
        }),
        (e.prototype.next = function (a) {
            (a = a || !1), this.to(this.relative(this.current()) + 1, a);
        }),
        (e.prototype.prev = function (a) {
            (a = a || !1), this.to(this.relative(this.current()) - 1, a);
        }),
        (e.prototype.onTransitionEnd = function (a) {
            if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
            this.leave("animating"), this.trigger("translated");
        }),
        (e.prototype.viewport = function () {
            var d;
            return (
                this.options.responsiveBaseElement !== b
                    ? (d = a(this.options.responsiveBaseElement).width())
                    : b.innerWidth
                    ? (d = b.innerWidth)
                    : c.documentElement && c.documentElement.clientWidth
                    ? (d = c.documentElement.clientWidth)
                    : console.warn("Can not detect viewport width."),
                d
            );
        }),
        (e.prototype.replace = function (b) {
            this.$stage.empty(),
                (this._items = []),
                b && (b = b instanceof jQuery ? b : a(b)),
                this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
                b
                    .filter(function () {
                        return 1 === this.nodeType;
                    })
                    .each(
                        a.proxy(function (a, b) {
                            (b = this.prepare(b)), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
                        }, this)
                    ),
                this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
                this.invalidate("items");
        }),
        (e.prototype.add = function (b, c) {
            var e = this.relative(this._current);
            (c = c === d ? this._items.length : this.normalize(c, !0)),
                (b = b instanceof jQuery ? b : a(b)),
                this.trigger("add", { content: b, position: c }),
                (b = this.prepare(b)),
                0 === this._items.length || c === this._items.length
                    ? (0 === this._items.length && this.$stage.append(b),
                      0 !== this._items.length && this._items[c - 1].after(b),
                      this._items.push(b),
                      this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1))
                    : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
                this._items[e] && this.reset(this._items[e].index()),
                this.invalidate("items"),
                this.trigger("added", { content: b, position: c });
        }),
        (e.prototype.remove = function (a) {
            (a = this.normalize(a, !0)) !== d &&
                (this.trigger("remove", { content: this._items[a], position: a }),
                this._items[a].remove(),
                this._items.splice(a, 1),
                this._mergers.splice(a, 1),
                this.invalidate("items"),
                this.trigger("removed", { content: null, position: a }));
        }),
        (e.prototype.preloadAutoWidthImages = function (b) {
            b.each(
                a.proxy(function (b, c) {
                    this.enter("pre-loading"),
                        (c = a(c)),
                        a(new Image())
                            .one(
                                "load",
                                a.proxy(function (a) {
                                    c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
                                }, this)
                            )
                            .attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
                }, this)
            );
        }),
        (e.prototype.destroy = function () {
            this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
            for (var d in this._plugins) this._plugins[d].destroy();
            this.$stage.children(".cloned").remove(),
                this.$stage.unwrap(),
                this.$stage.children().contents().unwrap(),
                this.$stage.children().unwrap(),
                this.$stage.remove(),
                this.$element
                    .removeClass(this.options.refreshClass)
                    .removeClass(this.options.loadingClass)
                    .removeClass(this.options.loadedClass)
                    .removeClass(this.options.rtlClass)
                    .removeClass(this.options.dragClass)
                    .removeClass(this.options.grabClass)
                    .attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), ""))
                    .removeData("owl.carousel");
        }),
        (e.prototype.op = function (a, b, c) {
            var d = this.settings.rtl;
            switch (b) {
                case "<":
                    return d ? a > c : a < c;
                case ">":
                    return d ? a < c : a > c;
                case ">=":
                    return d ? a <= c : a >= c;
                case "<=":
                    return d ? a >= c : a <= c;
            }
        }),
        (e.prototype.on = function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
        }),
        (e.prototype.off = function (a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
        }),
        (e.prototype.trigger = function (b, c, d, f, g) {
            var h = { item: { count: this._items.length, index: this.current() } },
                i = a.camelCase(
                    a
                        .grep(["on", b, d], function (a) {
                            return a;
                        })
                        .join("-")
                        .toLowerCase()
                ),
                j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c));
            return (
                this._supress[b] ||
                    (a.each(this._plugins, function (a, b) {
                        b.onTrigger && b.onTrigger(j);
                    }),
                    this.register({ type: e.Type.Event, name: b }),
                    this.$element.trigger(j),
                    this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)),
                j
            );
        }),
        (e.prototype.enter = function (b) {
            a.each(
                [b].concat(this._states.tags[b] || []),
                a.proxy(function (a, b) {
                    this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
                }, this)
            );
        }),
        (e.prototype.leave = function (b) {
            a.each(
                [b].concat(this._states.tags[b] || []),
                a.proxy(function (a, b) {
                    this._states.current[b]--;
                }, this)
            );
        }),
        (e.prototype.register = function (b) {
            if (b.type === e.Type.Event) {
                if ((a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl)) {
                    var c = a.event.special[b.name]._default;
                    (a.event.special[b.name]._default = function (a) {
                        return !c || !c.apply || (a.namespace && -1 !== a.namespace.indexOf("owl")) ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
                    }),
                        (a.event.special[b.name].owl = !0);
                }
            } else
                b.type === e.Type.State &&
                    (this._states.tags[b.name] ? (this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags)) : (this._states.tags[b.name] = b.tags),
                    (this._states.tags[b.name] = a.grep(
                        this._states.tags[b.name],
                        a.proxy(function (c, d) {
                            return a.inArray(c, this._states.tags[b.name]) === d;
                        }, this)
                    )));
        }),
        (e.prototype.suppress = function (b) {
            a.each(
                b,
                a.proxy(function (a, b) {
                    this._supress[b] = !0;
                }, this)
            );
        }),
        (e.prototype.release = function (b) {
            a.each(
                b,
                a.proxy(function (a, b) {
                    delete this._supress[b];
                }, this)
            );
        }),
        (e.prototype.pointer = function (a) {
            var c = { x: null, y: null };
            return (
                (a = a.originalEvent || a || b.event),
                (a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a),
                a.pageX ? ((c.x = a.pageX), (c.y = a.pageY)) : ((c.x = a.clientX), (c.y = a.clientY)),
                c
            );
        }),
        (e.prototype.isNumeric = function (a) {
            return !isNaN(parseFloat(a));
        }),
        (e.prototype.difference = function (a, b) {
            return { x: a.x - b.x, y: a.y - b.y };
        }),
        (a.fn.owlCarousel = function (b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                var d = a(this),
                    f = d.data("owl.carousel");
                f ||
                    ((f = new e(this, "object" == typeof b && b)),
                    d.data("owl.carousel", f),
                    a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
                        f.register({ type: e.Type.Event, name: c }),
                            f.$element.on(
                                c + ".owl.carousel.core",
                                a.proxy(function (a) {
                                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
                                }, f)
                            );
                    })),
                    "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
            });
        }),
        (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._interval = null),
                (this._visible = null),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoRefresh && this.watch();
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
            (e.prototype.watch = function () {
                this._interval || ((this._visible = this._core.isVisible()), (this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)));
            }),
            (e.prototype.refresh = function () {
                this._core.isVisible() !== this._visible && ((this._visible = !this._visible), this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
            }),
            (e.prototype.destroy = function () {
                var a, c;
                b.clearInterval(this._interval);
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._loaded = []),
                (this._handlers = {
                    "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
                        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && ((b.property && "position" == b.property.name) || "initialized" == b.type)) {
                            var c = this._core.settings,
                                e = (c.center && Math.ceil(c.items / 2)) || c.items,
                                f = (c.center && -1 * e) || 0,
                                g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
                                h = this._core.clones().length,
                                i = a.proxy(function (a, b) {
                                    this.load(b);
                                }, this);
                            for (c.lazyLoadEager > 0 && ((e += c.lazyLoadEager), c.loop && ((g -= c.lazyLoadEager), e++)); f++ < e; ) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
                        }
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
            (e.prototype.load = function (c) {
                var d = this._core.$stage.children().eq(c),
                    e = d && d.find(".owl-lazy");
                !e ||
                    a.inArray(d.get(0), this._loaded) > -1 ||
                    (e.each(
                        a.proxy(function (c, d) {
                            var e,
                                f = a(d),
                                g = (b.devicePixelRatio > 1 && f.attr("data-src-retina")) || f.attr("data-src") || f.attr("data-srcset");
                            this._core.trigger("load", { element: f, url: g }, "lazy"),
                                f.is("img")
                                    ? f
                                          .one(
                                              "load.owl.lazy",
                                              a.proxy(function () {
                                                  f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                              }, this)
                                          )
                                          .attr("src", g)
                                    : f.is("source")
                                    ? f
                                          .one(
                                              "load.owl.lazy",
                                              a.proxy(function () {
                                                  this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                              }, this)
                                          )
                                          .attr("srcset", g)
                                    : ((e = new Image()),
                                      (e.onload = a.proxy(function () {
                                          f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                      }, this)),
                                      (e.src = g));
                        }, this)
                    ),
                    this._loaded.push(d.get(0)));
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (c) {
            (this._core = c),
                (this._previousHeight = null),
                (this._handlers = {
                    "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoHeight && this.update();
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update();
                    }, this),
                    "loaded.owl.lazy": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                (this._intervalId = null);
            var d = this;
            a(b).on("load", function () {
                d._core.settings.autoHeight && d.update();
            }),
                a(b).resize(function () {
                    d._core.settings.autoHeight &&
                        (null != d._intervalId && clearTimeout(d._intervalId),
                        (d._intervalId = setTimeout(function () {
                            d.update();
                        }, 250)));
                });
        };
        (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
            (e.prototype.update = function () {
                var b = this._core._current,
                    c = b + this._core.settings.items,
                    d = this._core.settings.lazyLoad,
                    e = this._core.$stage.children().toArray().slice(b, c),
                    f = [],
                    g = 0;
                a.each(e, function (b, c) {
                    f.push(a(c).height());
                }),
                    (g = Math.max.apply(null, f)),
                    g <= 1 && d && this._previousHeight && (g = this._previousHeight),
                    (this._previousHeight = g),
                    this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass);
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._videos = {}),
                (this._playing = null),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
                    }, this),
                    "resize.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
                    }, this),
                    "refreshed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && "position" === a.property.name && this._playing && this.stop();
                    }, this),
                    "prepared.owl.carousel": a.proxy(function (b) {
                        if (b.namespace) {
                            var c = a(b.content).find(".owl-video");
                            c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
                        }
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                this._core.$element.on(
                    "click.owl.video",
                    ".owl-video-play-icon",
                    a.proxy(function (a) {
                        this.play(a);
                    }, this)
                );
        };
        (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
            (e.prototype.fetch = function (a, b) {
                var c = (function () {
                        return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
                    })(),
                    d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
                    e = a.attr("data-width") || this._core.settings.videoWidth,
                    f = a.attr("data-height") || this._core.settings.videoHeight,
                    g = a.attr("href");
                if (!g) throw new Error("Missing video URL.");
                if (
                    ((d = g.match(
                        /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                    )),
                    d[3].indexOf("youtu") > -1)
                )
                    c = "youtube";
                else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
                else {
                    if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                    c = "vzaar";
                }
                (d = d[6]), (this._videos[g] = { type: c, id: d, width: e, height: f }), b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
            }),
            (e.prototype.thumbnail = function (b, c) {
                var d,
                    e,
                    f,
                    g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
                    h = b.find("img"),
                    i = "src",
                    j = "",
                    k = this._core.settings,
                    l = function (c) {
                        (e = '<div class="owl-video-play-icon"></div>'),
                            (d = k.lazyLoad ? a("<div/>", { class: "owl-video-tn " + j, srcType: c }) : a("<div/>", { class: "owl-video-tn", style: "opacity:1;background-image:url(" + c + ")" })),
                            b.after(d),
                            b.after(e);
                    };
                if ((b.wrap(a("<div/>", { class: "owl-video-wrapper", style: g })), this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")), h.length)) return l(h.attr(i)), h.remove(), !1;
                "youtube" === c.type
                    ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"), l(f))
                    : "vimeo" === c.type
                    ? a.ajax({
                          type: "GET",
                          url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                          jsonp: "callback",
                          dataType: "jsonp",
                          success: function (a) {
                              (f = a[0].thumbnail_large), l(f);
                          },
                      })
                    : "vzaar" === c.type &&
                      a.ajax({
                          type: "GET",
                          url: "//vzaar.com/api/videos/" + c.id + ".json",
                          jsonp: "callback",
                          dataType: "jsonp",
                          success: function (a) {
                              (f = a.framegrab_url), l(f);
                          },
                      });
            }),
            (e.prototype.stop = function () {
                this._core.trigger("stop", null, "video"),
                    this._playing.find(".owl-video-frame").remove(),
                    this._playing.removeClass("owl-video-playing"),
                    (this._playing = null),
                    this._core.leave("playing"),
                    this._core.trigger("stopped", null, "video");
            }),
            (e.prototype.play = function (b) {
                var c,
                    d = a(b.target),
                    e = d.closest("." + this._core.settings.itemClass),
                    f = this._videos[e.attr("data-video")],
                    g = f.width || "100%",
                    h = f.height || this._core.$stage.height();
                this._playing ||
                    (this._core.enter("playing"),
                    this._core.trigger("play", null, "video"),
                    (e = this._core.items(this._core.relative(e.index()))),
                    this._core.reset(e.index()),
                    (c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')),
                    c.attr("height", h),
                    c.attr("width", g),
                    "youtube" === f.type
                        ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id)
                        : "vimeo" === f.type
                        ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1")
                        : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"),
                    a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),
                    (this._playing = e.addClass("owl-video-playing")));
            }),
            (e.prototype.isInFullScreen = function () {
                var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
                return b && a(b).parent().hasClass("owl-video-frame");
            }),
            (e.prototype.destroy = function () {
                var a, b;
                this._core.$element.off("click.owl.video");
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Video = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this.core = b),
                (this.core.options = a.extend({}, e.Defaults, this.core.options)),
                (this.swapping = !0),
                (this.previous = d),
                (this.next = d),
                (this.handlers = {
                    "change.owl.carousel": a.proxy(function (a) {
                        a.namespace && "position" == a.property.name && ((this.previous = this.core.current()), (this.next = a.property.value));
                    }, this),
                    "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                        a.namespace && (this.swapping = "translated" == a.type);
                    }, this),
                    "translate.owl.carousel": a.proxy(function (a) {
                        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
                    }, this),
                }),
                this.core.$element.on(this.handlers);
        };
        (e.Defaults = { animateOut: !1, animateIn: !1 }),
            (e.prototype.swap = function () {
                if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                    this.core.speed(0);
                    var b,
                        c = a.proxy(this.clear, this),
                        d = this.core.$stage.children().eq(this.previous),
                        e = this.core.$stage.children().eq(this.next),
                        f = this.core.settings.animateIn,
                        g = this.core.settings.animateOut;
                    this.core.current() !== this.previous &&
                        (g &&
                            ((b = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
                            d
                                .one(a.support.animation.end, c)
                                .css({ left: b + "px" })
                                .addClass("animated owl-animated-out")
                                .addClass(g)),
                        f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
                }
            }),
            (e.prototype.clear = function (b) {
                a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._call = null),
                (this._time = 0),
                (this._timeout = 0),
                (this._paused = !0),
                (this._handlers = {
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && "settings" === a.property.name ? (this._core.settings.autoplay ? this.play() : this.stop()) : a.namespace && "position" === a.property.name && this._paused && (this._time = 0);
                    }, this),
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoplay && this.play();
                    }, this),
                    "play.owl.autoplay": a.proxy(function (a, b, c) {
                        a.namespace && this.play(b, c);
                    }, this),
                    "stop.owl.autoplay": a.proxy(function (a) {
                        a.namespace && this.stop();
                    }, this),
                    "mouseover.owl.autoplay": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "mouseleave.owl.autoplay": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
                    }, this),
                    "touchstart.owl.core": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "touchend.owl.core": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this.play();
                    }, this),
                }),
                this._core.$element.on(this._handlers),
                (this._core.options = a.extend({}, e.Defaults, this._core.options));
        };
        (e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }),
            (e.prototype._next = function (d) {
                (this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read())),
                    this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed);
            }),
            (e.prototype.read = function () {
                return new Date().getTime() - this._time;
            }),
            (e.prototype.play = function (c, d) {
                var e;
                this._core.is("rotating") || this._core.enter("rotating"),
                    (c = c || this._core.settings.autoplayTimeout),
                    (e = Math.min(this._time % (this._timeout || c), c)),
                    this._paused ? ((this._time = this.read()), (this._paused = !1)) : b.clearTimeout(this._call),
                    (this._time += (this.read() % c) - e),
                    (this._timeout = c),
                    (this._call = b.setTimeout(a.proxy(this._next, this, d), c - e));
            }),
            (e.prototype.stop = function () {
                this._core.is("rotating") && ((this._time = 0), (this._paused = !0), b.clearTimeout(this._call), this._core.leave("rotating"));
            }),
            (e.prototype.pause = function () {
                this._core.is("rotating") && !this._paused && ((this._time = this.read()), (this._paused = !0), b.clearTimeout(this._call));
            }),
            (e.prototype.destroy = function () {
                var a, b;
                this.stop();
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        "use strict";
        var e = function (b) {
            (this._core = b),
                (this._initialized = !1),
                (this._pages = []),
                (this._controls = {}),
                (this._templates = []),
                (this.$element = this._core.$element),
                (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
                (this._handlers = {
                    "prepared.owl.carousel": a.proxy(function (b) {
                        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
                    }, this),
                    "added.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
                    }, this),
                    "remove.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && "position" == a.property.name && this.draw();
                    }, this),
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                            !this._initialized &&
                            (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), (this._initialized = !0), this._core.trigger("initialized", null, "navigation"));
                    }, this),
                    "refreshed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this.$element.on(this._handlers);
        };
        (e.Defaults = {
            nav: !1,
            navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
        }),
            (e.prototype.initialize = function () {
                var b,
                    c = this._core.settings;
                (this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled")),
                    (this._controls.$previous = a("<" + c.navElement + ">")
                        .addClass(c.navClass[0])
                        .html(c.navText[0])
                        .prependTo(this._controls.$relative)
                        .on(
                            "click",
                            a.proxy(function (a) {
                                this.prev(c.navSpeed);
                            }, this)
                        )),
                    (this._controls.$next = a("<" + c.navElement + ">")
                        .addClass(c.navClass[1])
                        .html(c.navText[1])
                        .appendTo(this._controls.$relative)
                        .on(
                            "click",
                            a.proxy(function (a) {
                                this.next(c.navSpeed);
                            }, this)
                        )),
                    c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),
                    (this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled")),
                    this._controls.$absolute.on(
                        "click",
                        "button",
                        a.proxy(function (b) {
                            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
                            b.preventDefault(), this.to(d, c.dotsSpeed);
                        }, this)
                    );
                for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
            }),
            (e.prototype.destroy = function () {
                var a, b, c, d, e;
                e = this._core.settings;
                for (a in this._handlers) this.$element.off(a, this._handlers[a]);
                for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
                for (d in this.overides) this._core[d] = this._overrides[d];
                for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
            }),
            (e.prototype.update = function () {
                var a,
                    b,
                    c,
                    d = this._core.clones().length / 2,
                    e = d + this._core.items().length,
                    f = this._core.maximum(!0),
                    g = this._core.settings,
                    h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
                if (("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy))
                    for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                        if (b >= h || 0 === b) {
                            if ((this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f)) break;
                            (b = 0), ++c;
                        }
                        b += this._core.mergers(this._core.relative(a));
                    }
            }),
            (e.prototype.draw = function () {
                var b,
                    c = this._core.settings,
                    d = this._core.items().length <= c.items,
                    e = this._core.relative(this._core.current()),
                    f = c.loop || c.rewind;
                this._controls.$relative.toggleClass("disabled", !c.nav || d),
                    c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))),
                    this._controls.$absolute.toggleClass("disabled", !c.dots || d),
                    c.dots &&
                        ((b = this._pages.length - this._controls.$absolute.children().length),
                        c.dotsData && 0 !== b
                            ? this._controls.$absolute.html(this._templates.join(""))
                            : b > 0
                            ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0]))
                            : b < 0 && this._controls.$absolute.children().slice(b).remove(),
                        this._controls.$absolute.find(".active").removeClass("active"),
                        this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
            }),
            (e.prototype.onTrigger = function (b) {
                var c = this._core.settings;
                b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) };
            }),
            (e.prototype.current = function () {
                var b = this._core.relative(this._core.current());
                return a
                    .grep(
                        this._pages,
                        a.proxy(function (a, c) {
                            return a.start <= b && a.end >= b;
                        }, this)
                    )
                    .pop();
            }),
            (e.prototype.getPosition = function (b) {
                var c,
                    d,
                    e = this._core.settings;
                return (
                    "page" == e.slideBy
                        ? ((c = a.inArray(this.current(), this._pages)), (d = this._pages.length), b ? ++c : --c, (c = this._pages[((c % d) + d) % d].start))
                        : ((c = this._core.relative(this._core.current())), (d = this._core.items().length), b ? (c += e.slideBy) : (c -= e.slideBy)),
                    c
                );
            }),
            (e.prototype.next = function (b) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
            }),
            (e.prototype.prev = function (b) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
            }),
            (e.prototype.to = function (b, c, d) {
                var e;
                !d && this._pages.length ? ((e = this._pages.length), a.proxy(this._overrides.to, this._core)(this._pages[((b % e) + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        "use strict";
        var e = function (c) {
            (this._core = c),
                (this._hashes = {}),
                (this.$element = this._core.$element),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (c) {
                        c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
                    }, this),
                    "prepared.owl.carousel": a.proxy(function (b) {
                        if (b.namespace) {
                            var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                            if (!c) return;
                            this._hashes[c] = b.content;
                        }
                    }, this),
                    "changed.owl.carousel": a.proxy(function (c) {
                        if (c.namespace && "position" === c.property.name) {
                            var d = this._core.items(this._core.relative(this._core.current())),
                                e = a
                                    .map(this._hashes, function (a, b) {
                                        return a === d ? b : null;
                                    })
                                    .join();
                            if (!e || b.location.hash.slice(1) === e) return;
                            b.location.hash = e;
                        }
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this.$element.on(this._handlers),
                a(b).on(
                    "hashchange.owl.navigation",
                    a.proxy(function (a) {
                        var c = b.location.hash.substring(1),
                            e = this._core.$stage.children(),
                            f = this._hashes[c] && e.index(this._hashes[c]);
                        f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
                    }, this)
                );
        };
        (e.Defaults = { URLhashListener: !1 }),
            (e.prototype.destroy = function () {
                var c, d;
                a(b).off("hashchange.owl.navigation");
                for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
                for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        function e(b, c) {
            var e = !1,
                f = b.charAt(0).toUpperCase() + b.slice(1);
            return (
                a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
                    if (g[b] !== d) return (e = !c || b), !1;
                }),
                e
            );
        }
        function f(a) {
            return e(a, !0);
        }
        var g = a("<support>").get(0).style,
            h = "Webkit Moz O ms".split(" "),
            i = {
                transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } },
                animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } },
            },
            j = {
                csstransforms: function () {
                    return !!e("transform");
                },
                csstransforms3d: function () {
                    return !!e("perspective");
                },
                csstransitions: function () {
                    return !!e("transition");
                },
                cssanimations: function () {
                    return !!e("animation");
                },
            };
        j.csstransitions() && ((a.support.transition = new String(f("transition"))), (a.support.transition.end = i.transition.end[a.support.transition])),
            j.cssanimations() && ((a.support.animation = new String(f("animation"))), (a.support.animation.end = i.animation.end[a.support.animation])),
            j.csstransforms() && ((a.support.transform = new String(f("transform"))), (a.support.transform3d = j.csstransforms3d()));
    })(window.Zepto || window.jQuery, window, document);

/*!
 * imagesLoaded PACKAGED v4.1.2
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!(function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.EvEmitter = e());
})("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
        (e.on = function (t, e) {
            if (t && e) {
                var i = (this._events = this._events || {}),
                    n = (i[t] = i[t] || []);
                return -1 == n.indexOf(e) && n.push(e), this;
            }
        }),
        (e.once = function (t, e) {
            if (t && e) {
                this.on(t, e);
                var i = (this._onceEvents = this._onceEvents || {}),
                    n = (i[t] = i[t] || {});
                return (n[e] = !0), this;
            }
        }),
        (e.off = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this;
            }
        }),
        (e.emitEvent = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = 0,
                    o = i[n];
                e = e || [];
                for (var r = this._onceEvents && this._onceEvents[t]; o; ) {
                    var s = r && r[o];
                    s && (this.off(t, o), delete r[o]), o.apply(this, e), (n += s ? 0 : 1), (o = i[n]);
                }
                return this;
            }
        }),
        t
    );
}),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define(["ev-emitter/ev-emitter"], function (i) {
                  return e(t, i);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("ev-emitter")))
            : (t.imagesLoaded = e(t, t.EvEmitter));
    })("undefined" != typeof window ? window : this, function (t, e) {
        function i(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }
        function n(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if ("number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e;
        }
        function o(t, e, r) {
            return this instanceof o
                ? ("string" == typeof t && (t = document.querySelectorAll(t)),
                  (this.elements = n(t)),
                  (this.options = i({}, this.options)),
                  "function" == typeof e ? (r = e) : i(this.options, e),
                  r && this.on("always", r),
                  this.getImages(),
                  h && (this.jqDeferred = new h.Deferred()),
                  void setTimeout(
                      function () {
                          this.check();
                      }.bind(this)
                  ))
                : new o(t, e, r);
        }
        function r(t) {
            this.img = t;
        }
        function s(t, e) {
            (this.url = t), (this.element = e), (this.img = new Image());
        }
        var h = t.jQuery,
            a = t.console;
        (o.prototype = Object.create(e.prototype)),
            (o.prototype.options = {}),
            (o.prototype.getImages = function () {
                (this.images = []), this.elements.forEach(this.addElementImages, this);
            }),
            (o.prototype.addElementImages = function (t) {
                "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
                var e = t.nodeType;
                if (e && d[e]) {
                    for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                        var o = i[n];
                        this.addImage(o);
                    }
                    if ("string" == typeof this.options.background) {
                        var r = t.querySelectorAll(this.options.background);
                        for (n = 0; n < r.length; n++) {
                            var s = r[n];
                            this.addElementBackgroundImages(s);
                        }
                    }
                }
            });
        var d = { 1: !0, 9: !0, 11: !0 };
        return (
            (o.prototype.addElementBackgroundImages = function (t) {
                var e = getComputedStyle(t);
                if (e)
                    for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n; ) {
                        var o = n && n[2];
                        o && this.addBackground(o, t), (n = i.exec(e.backgroundImage));
                    }
            }),
            (o.prototype.addImage = function (t) {
                var e = new r(t);
                this.images.push(e);
            }),
            (o.prototype.addBackground = function (t, e) {
                var i = new s(t, e);
                this.images.push(i);
            }),
            (o.prototype.check = function () {
                function t(t, i, n) {
                    setTimeout(function () {
                        e.progress(t, i, n);
                    });
                }
                var e = this;
                return (
                    (this.progressedCount = 0),
                    (this.hasAnyBroken = !1),
                    this.images.length
                        ? void this.images.forEach(function (e) {
                              e.once("progress", t), e.check();
                          })
                        : void this.complete()
                );
            }),
            (o.prototype.progress = function (t, e, i) {
                this.progressedCount++,
                    (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
                    this.emitEvent("progress", [this, t, e]),
                    this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
                    this.progressedCount == this.images.length && this.complete(),
                    this.options.debug && a && a.log("progress: " + i, t, e);
            }),
            (o.prototype.complete = function () {
                var t = this.hasAnyBroken ? "fail" : "done";
                if (((this.isComplete = !0), this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred)) {
                    var e = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[e](this);
                }
            }),
            (r.prototype = Object.create(e.prototype)),
            (r.prototype.check = function () {
                var t = this.getIsImageComplete();
                return t
                    ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
                    : ((this.proxyImage = new Image()),
                      this.proxyImage.addEventListener("load", this),
                      this.proxyImage.addEventListener("error", this),
                      this.img.addEventListener("load", this),
                      this.img.addEventListener("error", this),
                      void (this.proxyImage.src = this.img.src));
            }),
            (r.prototype.getIsImageComplete = function () {
                return this.img.complete && void 0 !== this.img.naturalWidth;
            }),
            (r.prototype.confirm = function (t, e) {
                (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
            }),
            (r.prototype.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (r.prototype.onload = function () {
                this.confirm(!0, "onload"), this.unbindEvents();
            }),
            (r.prototype.onerror = function () {
                this.confirm(!1, "onerror"), this.unbindEvents();
            }),
            (r.prototype.unbindEvents = function () {
                this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            }),
            (s.prototype = Object.create(r.prototype)),
            (s.prototype.check = function () {
                this.img.addEventListener("load", this), this.img.addEventListener("error", this), (this.img.src = this.url);
                var t = this.getIsImageComplete();
                t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
            }),
            (s.prototype.unbindEvents = function () {
                this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            }),
            (s.prototype.confirm = function (t, e) {
                (this.isLoaded = t), this.emitEvent("progress", [this, this.element, e]);
            }),
            (o.makeJQueryPlugin = function (e) {
                (e = e || t.jQuery),
                    e &&
                        ((h = e),
                        (h.fn.imagesLoaded = function (t, e) {
                            var i = new o(this, t, e);
                            return i.jqDeferred.promise(h(this));
                        }));
            }),
            o.makeJQueryPlugin(),
            o
        );
    });

/*-------------------------------------------------------------
    03. Scrollup Jquery 
---------------------------------------------------------------*/
!(function (l, o, e) {
    "use strict";
    (l.fn.scrollUp = function (o) {
        l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o));
    }),
        (l.fn.scrollUp.init = function (r) {
            var s,
                t,
                c,
                i,
                n,
                a,
                d,
                p = (l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r)),
                f = !1;
            switch (
                ((d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", { id: p.scrollName, href: "#top" })),
                p.scrollTitle && d.attr("title", p.scrollTitle),
                d.appendTo("body"),
                p.scrollImg || p.scrollTrigger || d.html(p.scrollText),
                d.css({ display: "none", position: "fixed", zIndex: p.zIndex }),
                p.activeOverlay &&
                    l("<div/>", { id: p.scrollName + "-active" })
                        .css({ position: "absolute", top: p.scrollDistance + "px", width: "100%", borderTop: "1px dotted" + p.activeOverlay, zIndex: p.zIndex })
                        .appendTo("body"),
                p.animation)
            ) {
                case "fade":
                    (s = "fadeIn"), (t = "fadeOut"), (c = p.animationSpeed);
                    break;
                case "slide":
                    (s = "slideDown"), (t = "slideUp"), (c = p.animationSpeed);
                    break;
                default:
                    (s = "show"), (t = "hide"), (c = 0);
            }
            (i = "top" === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance),
                (n = l(o).scroll(function () {
                    l(o).scrollTop() > i ? f || (d[s](c), (f = !0)) : f && (d[t](c), (f = !1));
                })),
                p.scrollTarget ? ("number" == typeof p.scrollTarget ? (a = p.scrollTarget) : "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top))) : (a = 0),
                d.click(function (o) {
                    o.preventDefault(), l("html, body").animate({ scrollTop: a }, p.scrollSpeed, p.easingType);
                });
        }),
        (l.fn.scrollUp.defaults = {
            scrollName: "scrollUp",
            scrollDistance: 300,
            scrollFrom: "top",
            scrollSpeed: 300,
            easingType: "linear",
            animation: "fade",
            animationSpeed: 200,
            scrollTrigger: !1,
            scrollTarget: !1,
            scrollText: "Scroll to top",
            scrollTitle: !1,
            scrollImg: !1,
            activeOverlay: !1,
            zIndex: 2147483647,
        }),
        (l.fn.scrollUp.destroy = function (r) {
            l.removeData(e.body, "scrollUp"),
                l("#" + l.fn.scrollUp.settings.scrollName).remove(),
                l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(),
                l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r);
        }),
        (l.scrollUp = l.fn.scrollUp);
})(jQuery, window, document);

/*jshint browser:true */
/*!
 * FitVids 1.1
 *
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 */

(function ($) {
    "use strict";

    $.fn.fitVids = function (options) {
        var settings = {
            customSelector: null,
            ignore: null,
        };

        if (!document.getElementById("fit-vids-style")) {
            // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
            var head = document.head || document.getElementsByTagName("head")[0];
            var css =
                ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";
            var div = document.createElement("div");
            div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + "</style>";
            head.appendChild(div.childNodes[1]);
        }

        if (options) {
            $.extend(settings, options);
        }

        return this.each(function () {
            var selectors = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];

            if (settings.customSelector) {
                selectors.push(settings.customSelector);
            }

            var ignoreList = ".fitvidsignore";

            if (settings.ignore) {
                ignoreList = ignoreList + ", " + settings.ignore;
            }

            var $allVideos = $(this).find(selectors.join(","));
            $allVideos = $allVideos.not("object object"); // SwfObj conflict patch
            $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

            $allVideos.each(function () {
                var $this = $(this);
                if ($this.parents(ignoreList).length > 0) {
                    return; // Disable FitVids on this video.
                }
                if ((this.tagName.toLowerCase() === "embed" && $this.parent("object").length) || $this.parent(".fluid-width-video-wrapper").length) {
                    return;
                }
                if (!$this.css("height") && !$this.css("width") && (isNaN($this.attr("height")) || isNaN($this.attr("width")))) {
                    $this.attr("height", 9);
                    $this.attr("width", 16);
                }
                var height = this.tagName.toLowerCase() === "object" || ($this.attr("height") && !isNaN(parseInt($this.attr("height"), 10))) ? parseInt($this.attr("height"), 10) : $this.height(),
                    width = !isNaN(parseInt($this.attr("width"), 10)) ? parseInt($this.attr("width"), 10) : $this.width(),
                    aspectRatio = height / width;
                if (!$this.attr("name")) {
                    var videoName = "fitvid" + $.fn.fitVids._count;
                    $this.attr("name", videoName);
                    $.fn.fitVids._count++;
                }
                $this
                    .wrap('<div class="fluid-width-video-wrapper"></div>')
                    .parent(".fluid-width-video-wrapper")
                    .css("padding-top", aspectRatio * 100 + "%");
                $this.removeAttr("height").removeAttr("width");
            });
        });
    };

    // Internal counter for unique video names.
    $.fn.fitVids._count = 0;

    // Works with either jQuery or Zepto
})(window.jQuery || window.Zepto);
