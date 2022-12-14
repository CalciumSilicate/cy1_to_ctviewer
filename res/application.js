! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = t.length,
            n = re.type(t);
        return "function" === n || re.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function i(t, e, n) {
        if (re.isFunction(e)) return re.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return re.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (he.test(e)) return re.filter(e, t, n);
            e = re.filter(e, t)
        }
        return re.grep(t, function(t) {
            return re.inArray(t, e) >= 0 !== n
        })
    }

    function o(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function r(t) {
        var e = xe[t] = {};
        return re.each(t.match(we) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function a() {
        ge.addEventListener ? (ge.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1)) : (ge.detachEvent("onreadystatechange", s), t.detachEvent("onload", s))
    }

    function s() {
        (ge.addEventListener || "load" === event.type || "complete" === ge.readyState) && (a(), re.ready())
    }

    function l(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(ke, "-$1").toLowerCase();
            if (n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ee.test(n) ? re.parseJSON(n) : n
                } catch (o) {}
                re.data(t, e, n)
            } else n = void 0
        }
        return n
    }

    function u(t) {
        var e;
        for (e in t)
            if (("data" !== e || !re.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function c(t, e, n, i) {
        if (re.acceptData(t)) {
            var o, r, a = re.expando,
                s = t.nodeType,
                l = s ? re.cache : t,
                u = s ? t[a] : t[a] && a;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof e) return u || (u = s ? t[a] = G.pop() || re.guid++ : a), l[u] || (l[u] = s ? {} : {
                toJSON: re.noop
            }), ("object" == typeof e || "function" == typeof e) && (i ? l[u] = re.extend(l[u], e) : l[u].data = re.extend(l[u].data, e)), r = l[u], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[re.camelCase(e)] = n), "string" == typeof e ? (o = r[e], null == o && (o = r[re.camelCase(e)])) : o = r, o
        }
    }

    function d(t, e, n) {
        if (re.acceptData(t)) {
            var i, o, r = t.nodeType,
                a = r ? re.cache : t,
                s = r ? t[re.expando] : re.expando;
            if (a[s]) {
                if (e && (i = n ? a[s] : a[s].data)) {
                    re.isArray(e) ? e = e.concat(re.map(e, re.camelCase)) : e in i ? e = [e] : (e = re.camelCase(e), e = e in i ? [e] : e.split(" ")), o = e.length;
                    for (; o--;) delete i[e[o]];
                    if (n ? !u(i) : !re.isEmptyObject(i)) return
                }(n || (delete a[s].data, u(a[s]))) && (r ? re.cleanData([t], !0) : ie.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function p() {
        return !0
    }

    function h() {
        return !1
    }

    function f() {
        try {
            return ge.activeElement
        } catch (t) {}
    }

    function g(t) {
        var e = Fe.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }

    function m(t, e) {
        var n, i, o = 0,
            r = typeof t.getElementsByTagName !== Ne ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Ne ? t.querySelectorAll(e || "*") : void 0;
        if (!r)
            for (r = [], n = t.childNodes || t; null != (i = n[o]); o++) !e || re.nodeName(i, e) ? r.push(i) : re.merge(r, m(i, e));
        return void 0 === e || e && re.nodeName(t, e) ? re.merge([t], r) : r
    }

    function y(t) {
        Ae.test(t.type) && (t.defaultChecked = t.checked)
    }

    function v(t, e) {
        return re.nodeName(t, "table") && re.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function b(t) {
        return t.type = (null !== re.find.attr(t, "type")) + "/" + t.type, t
    }

    function w(t) {
        var e = Ge.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function x(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) re._data(n, "globalEval", !e || re._data(e[i], "globalEval"))
    }

    function T(t, e) {
        if (1 === e.nodeType && re.hasData(t)) {
            var n, i, o, r = re._data(t),
                a = re._data(e, r),
                s = r.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (i = 0, o = s[n].length; o > i; i++) re.event.add(e, n, s[n][i])
            }
            a.data && (a.data = re.extend({}, a.data))
        }
    }

    function C(t, e) {
        var n, i, o;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !ie.noCloneEvent && e[re.expando]) {
                o = re._data(e);
                for (i in o.events) re.removeEvent(e, i, o.handle);
                e.removeAttribute(re.expando)
            }
            "script" === n && e.text !== t.text ? (b(e).text = t.text, w(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ie.html5Clone && t.innerHTML && !re.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ae.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }

    function N(e, n) {
        var i = re(n.createElement(e)).appendTo(n.body),
            o = t.getDefaultComputedStyle ? t.getDefaultComputedStyle(i[0]).display : re.css(i[0], "display");
        return i.detach(), o
    }

    function E(t) {
        var e = ge,
            n = tn[t];
        return n || (n = N(t, e), "none" !== n && n || (Ze = (Ze || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Ze[0].contentWindow || Ze[0].contentDocument).document, e.write(), e.close(), n = N(t, e), Ze.detach()), tn[t] = n), n
    }

    function k(t, e) {
        return {
            get: function() {
                var n = t();
                if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function S(t, e) {
        if (e in t) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = fn.length; o--;)
            if (e = fn[o] + n, e in t) return e;
        return i
    }

    function j(t, e) {
        for (var n, i, o, r = [], a = 0, s = t.length; s > a; a++) i = t[a], i.style && (r[a] = re._data(i, "olddisplay"), n = i.style.display, e ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Pe(i) && (r[a] = re._data(i, "olddisplay", E(i.nodeName)))) : r[a] || (o = Pe(i), (n && "none" !== n || !o) && re._data(i, "olddisplay", o ? n : re.css(i, "display"))));
        for (a = 0; s > a; a++) i = t[a], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[a] || "" : "none"));
        return t
    }

    function P(t, e, n) {
        var i = cn.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function D(t, e, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += re.css(t, n + je[r], !0, o)), i ? ("content" === n && (a -= re.css(t, "padding" + je[r], !0, o)), "margin" !== n && (a -= re.css(t, "border" + je[r] + "Width", !0, o))) : (a += re.css(t, "padding" + je[r], !0, o), "padding" !== n && (a += re.css(t, "border" + je[r] + "Width", !0, o)));
        return a
    }

    function A(t, e, n) {
        var i = !0,
            o = "width" === e ? t.offsetWidth : t.offsetHeight,
            r = en(t),
            a = ie.boxSizing() && "border-box" === re.css(t, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = nn(t, e, r), (0 > o || null == o) && (o = t.style[e]), rn.test(o)) return o;
            i = a && (ie.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + D(t, e, n || (a ? "border" : "content"), i, r) + "px"
    }

    function L(t, e, n, i, o) {
        return new L.prototype.init(t, e, n, i, o)
    }

    function M() {
        return setTimeout(function() {
            gn = void 0
        }), gn = re.now()
    }

    function $(t, e) {
        var n, i = {
                height: t
            },
            o = 0;
        for (e = e ? 1 : 0; 4 > o; o += 2 - e) n = je[o], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function H(t, e, n) {
        for (var i, o = (xn[e] || []).concat(xn["*"]), r = 0, a = o.length; a > r; r++)
            if (i = o[r].call(n, e, t)) return i
    }

    function B(t, e, n) {
        var i, o, r, a, s, l, u, c, d = this,
            p = {},
            h = t.style,
            f = t.nodeType && Pe(t),
            g = re._data(t, "fxshow");
        n.queue || (s = re._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, re.queue(t, "fx").length || s.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = re.css(t, "display"), c = E(t.nodeName), "none" === u && (u = c), "inline" === u && "none" === re.css(t, "float") && (ie.inlineBlockNeedsLayout && "inline" !== c ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", ie.shrinkWrapBlocks() || d.always(function() {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (o = e[i], yn.exec(o)) {
                if (delete e[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[i]) continue;
                    f = !0
                }
                p[i] = g && g[i] || re.style(t, i)
            } if (!re.isEmptyObject(p)) {
            g ? "hidden" in g && (f = g.hidden) : g = re._data(t, "fxshow", {}), r && (g.hidden = !f), f ? re(t).show() : d.done(function() {
                re(t).hide()
            }), d.done(function() {
                var e;
                re._removeData(t, "fxshow");
                for (e in p) re.style(t, e, p[e])
            });
            for (i in p) a = H(f ? g[i] : 0, i, d), i in g || (g[i] = a.start, f && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function F(t, e) {
        var n, i, o, r, a;
        for (n in t)
            if (i = re.camelCase(n), o = e[i], r = t[n], re.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), a = re.cssHooks[i], a && "expand" in a) {
                r = a.expand(r), delete t[i];
                for (n in r) n in t || (t[n] = r[n], e[n] = o)
            } else e[i] = o
    }

    function O(t, e, n) {
        var i, o, r = 0,
            a = wn.length,
            s = re.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var e = gn || M(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, r = 1 - i, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(r);
                return s.notifyWith(t, [u, r, n]), 1 > r && l ? n : (s.resolveWith(t, [u]), !1)
            },
            u = s.promise({
                elem: t,
                props: re.extend({}, e),
                opts: re.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: gn || M(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = re.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) u.tweens[n].run(1);
                    return e ? s.resolveWith(t, [u, e]) : s.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (F(c, u.opts.specialEasing); a > r; r++)
            if (i = wn[r].call(u, t, c, u.opts)) return i;
        return re.map(c, H, u), re.isFunction(u.opts.start) && u.opts.start.call(t, u), re.fx.timer(re.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function q(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, o = 0,
                r = e.toLowerCase().match(we) || [];
            if (re.isFunction(n))
                for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function _(t, e, n, i) {
        function o(s) {
            var l;
            return r[s] = !0, re.each(t[s] || [], function(t, s) {
                var u = s(e, n, i);
                return "string" != typeof u || a || r[u] ? a ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
            }), l
        }
        var r = {},
            a = t === Yn;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }

    function R(t, e) {
        var n, i, o = re.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
        return n && re.extend(!0, t, n), t
    }

    function W(t, e, n) {
        for (var i, o, r, a, s = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
        if (o)
            for (a in s)
                if (s[a] && s[a].test(o)) {
                    l.unshift(a);
                    break
                } if (l[0] in n) r = l[0];
        else {
            for (a in n) {
                if (!l[0] || t.converters[a + " " + l[0]]) {
                    r = a;
                    break
                }
                i || (i = a)
            }
            r = r || i
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }

    function I(t, e, n, i) {
        var o, r, a, s, l, u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
        for (r = c.shift(); r;)
            if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (a = u[l + " " + r] || u["* " + r], !a)
                for (o in u)
                    if (s = o.split(" "), s[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[o] : u[o] !== !0 && (r = s[0], c.unshift(s[1]));
                        break
                    } if (a !== !0)
                if (a && t["throws"]) e = a(e);
                else try {
                    e = a(e)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function X(t, e, n, i) {
        var o;
        if (re.isArray(e)) re.each(e, function(e, o) {
            n || Un.test(t) ? i(t, o) : X(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
        });
        else if (n || "object" !== re.type(e)) i(t, e);
        else
            for (o in e) X(t + "[" + o + "]", e[o], n, i)
    }

    function Y() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function z() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function V(t) {
        return re.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var G = [],
        U = G.slice,
        Q = G.concat,
        J = G.push,
        K = G.indexOf,
        Z = {},
        te = Z.toString,
        ee = Z.hasOwnProperty,
        ne = "".trim,
        ie = {},
        oe = "1.11.0",
        re = function(t, e) {
            return new re.fn.init(t, e)
        },
        ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        se = /^-ms-/,
        le = /-([\da-z])/gi,
        ue = function(t, e) {
            return e.toUpperCase()
        };
    re.fn = re.prototype = {
        jquery: oe,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function() {
            return U.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : U.call(this)
        },
        pushStack: function(t) {
            var e = re.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return re.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(re.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(U.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: J,
        sort: G.sort,
        splice: G.splice
    }, re.extend = re.fn.extend = function() {
        var t, e, n, i, o, r, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || re.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (o = arguments[s]))
                for (i in o) t = a[i], n = o[i], a !== n && (u && n && (re.isPlainObject(n) || (e = re.isArray(n))) ? (e ? (e = !1, r = t && re.isArray(t) ? t : []) : r = t && re.isPlainObject(t) ? t : {}, a[i] = re.extend(u, r, n)) : void 0 !== n && (a[i] = n));
        return a
    }, re.extend({
        expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === re.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === re.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return t - parseFloat(t) >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== re.type(t) || t.nodeType || re.isWindow(t)) return !1;
            try {
                if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (ie.ownLast)
                for (e in t) return ee.call(t, e);
            for (e in t);
            return void 0 === e || ee.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[te.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && re.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(se, "ms-").replace(le, ue)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, i) {
            var o, r = 0,
                a = t.length,
                s = n(t);
            if (i) {
                if (s)
                    for (; a > r && (o = e.apply(t[r], i), o !== !1); r++);
                else
                    for (r in t)
                        if (o = e.apply(t[r], i), o === !1) break
            } else if (s)
                for (; a > r && (o = e.call(t[r], r, t[r]), o !== !1); r++);
            else
                for (r in t)
                    if (o = e.call(t[r], r, t[r]), o === !1) break;
            return t
        },
        trim: ne && !ne.call("\ufeff\xa0") ? function(t) {
            return null == t ? "" : ne.call(t)
        } : function(t) {
            return null == t ? "" : (t + "").replace(ae, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? re.merge(i, "string" == typeof t ? [t] : t) : J.call(i, t)), i
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (K) return K.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in e && e[n] === t) return n
            }
            return -1
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, o = t.length; n > i;) t[o++] = e[i++];
            if (n !== n)
                for (; void 0 !== e[i];) t[o++] = e[i++];
            return t.length = o, t
        },
        grep: function(t, e, n) {
            for (var i, o = [], r = 0, a = t.length, s = !n; a > r; r++) i = !e(t[r], r), i !== s && o.push(t[r]);
            return o
        },
        map: function(t, e, i) {
            var o, r = 0,
                a = t.length,
                s = n(t),
                l = [];
            if (s)
                for (; a > r; r++) o = e(t[r], r, i), null != o && l.push(o);
            else
                for (r in t) o = e(t[r], r, i), null != o && l.push(o);
            return Q.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, o;
            return "string" == typeof e && (o = t[e], e = t, t = o), re.isFunction(t) ? (n = U.call(arguments, 2), i = function() {
                return t.apply(e || this, n.concat(U.call(arguments)))
            }, i.guid = t.guid = t.guid || re.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ie
    }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    var ce = function(t) {
        function e(t, e, n, i) {
            var o, r, a, s, l, u, d, f, g, m;
            if ((e ? e.ownerDocument || e : _) !== L && A(e), e = e || L, n = n || [], !t || "string" != typeof t) return n;
            if (1 !== (s = e.nodeType) && 9 !== s) return [];
            if ($ && !i) {
                if (o = ve.exec(t))
                    if (a = o[1]) {
                        if (9 === s) {
                            if (r = e.getElementById(a), !r || !r.parentNode) return n;
                            if (r.id === a) return n.push(r), n
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(a)) && O(e, r) && r.id === a) return n.push(r), n
                    } else {
                        if (o[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
                        if ((a = o[3]) && C.getElementsByClassName && e.getElementsByClassName) return Z.apply(n, e.getElementsByClassName(a)), n
                    } if (C.qsa && (!H || !H.test(t))) {
                    if (f = d = q, g = e, m = 9 === s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                        for (u = p(t), (d = e.getAttribute("id")) ? f = d.replace(we, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + h(u[l]);
                        g = be.test(t) && c(e.parentNode) || e, m = u.join(",")
                    }
                    if (m) try {
                        return Z.apply(n, g.querySelectorAll(m)), n
                    } catch (y) {} finally {
                        d || e.removeAttribute("id")
                    }
                }
            }
            return x(t.replace(le, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > N.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[q] = !0, t
        }

        function o(t) {
            var e = L.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function r(t, e) {
            for (var n = t.split("|"), i = t.length; i--;) N.attrHandle[n[i]] = e
        }

        function a(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function s(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function u(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var o, r = t([], n.length, e), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function c(t) {
            return t && typeof t.getElementsByTagName !== V && t
        }

        function d() {}

        function p(t, n) {
            var i, o, r, a, s, l, u, c = X[t + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = t, l = [], u = N.preFilter; s;) {
                (!i || (o = ue.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = ce.exec(s)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(le, " ")
                }), s = s.slice(i.length));
                for (a in N.filter) !(o = fe[a].exec(s)) || u[a] && !(o = u[a](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: a,
                    matches: o
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? e.error(t) : X(t, l).slice(0)
        }

        function h(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i
        }

        function f(t, e, n) {
            var i = e.dir,
                o = n && "parentNode" === i,
                r = W++;
            return e.first ? function(e, n, r) {
                for (; e = e[i];)
                    if (1 === e.nodeType || o) return t(e, n, r)
            } : function(e, n, a) {
                var s, l, u = [R, r];
                if (a) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || o) && t(e, n, a)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || o) {
                            if (l = e[q] || (e[q] = {}), (s = l[i]) && s[0] === R && s[1] === r) return u[2] = s[2];
                            if (l[i] = u, u[2] = t(e, n, a)) return !0
                        }
            }
        }

        function g(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var o = t.length; o--;)
                    if (!t[o](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function m(t, e, n, i, o) {
            for (var r, a = [], s = 0, l = t.length, u = null != e; l > s; s++)(r = t[s]) && (!n || n(r, i, o)) && (a.push(r), u && e.push(s));
            return a
        }

        function y(t, e, n, o, r, a) {
            return o && !o[q] && (o = y(o)), r && !r[q] && (r = y(r, a)), i(function(i, a, s, l) {
                var u, c, d, p = [],
                    h = [],
                    f = a.length,
                    g = i || w(e || "*", s.nodeType ? [s] : s, []),
                    y = !t || !i && e ? g : m(g, p, t, s, l),
                    v = n ? r || (i ? t : f || o) ? [] : a : y;
                if (n && n(y, v, s, l), o)
                    for (u = m(v, h), o(u, [], s, l), c = u.length; c--;)(d = u[c]) && (v[h[c]] = !(y[h[c]] = d));
                if (i) {
                    if (r || t) {
                        if (r) {
                            for (u = [], c = v.length; c--;)(d = v[c]) && u.push(y[c] = d);
                            r(null, v = [], u, l)
                        }
                        for (c = v.length; c--;)(d = v[c]) && (u = r ? ee.call(i, d) : p[c]) > -1 && (i[u] = !(a[u] = d))
                    }
                } else v = m(v === a ? v.splice(f, v.length) : v), r ? r(null, a, v, l) : Z.apply(a, v)
            })
        }

        function v(t) {
            for (var e, n, i, o = t.length, r = N.relative[t[0].type], a = r || N.relative[" "], s = r ? 1 : 0, l = f(function(t) {
                    return t === e
                }, a, !0), u = f(function(t) {
                    return ee.call(e, t) > -1
                }, a, !0), c = [function(t, n, i) {
                    return !r && (i || n !== j) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i))
                }]; o > s; s++)
                if (n = N.relative[t[s].type]) c = [f(g(c), n)];
                else {
                    if (n = N.filter[t[s].type].apply(null, t[s].matches), n[q]) {
                        for (i = ++s; o > i && !N.relative[t[i].type]; i++);
                        return y(s > 1 && g(c), s > 1 && h(t.slice(0, s - 1).concat({
                            value: " " === t[s - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, i > s && v(t.slice(s, i)), o > i && v(t = t.slice(i)), o > i && h(t))
                    }
                    c.push(n)
                } return g(c)
        }

        function b(t, n) {
            var o = n.length > 0,
                r = t.length > 0,
                a = function(i, a, s, l, u) {
                    var c, d, p, h = 0,
                        f = "0",
                        g = i && [],
                        y = [],
                        v = j,
                        b = i || r && N.find.TAG("*", u),
                        w = R += null == v ? 1 : Math.random() || .1,
                        x = b.length;
                    for (u && (j = a !== L && a); f !== x && null != (c = b[f]); f++) {
                        if (r && c) {
                            for (d = 0; p = t[d++];)
                                if (p(c, a, s)) {
                                    l.push(c);
                                    break
                                } u && (R = w)
                        }
                        o && ((c = !p && c) && h--, i && g.push(c))
                    }
                    if (h += f, o && f !== h) {
                        for (d = 0; p = n[d++];) p(g, y, a, s);
                        if (i) {
                            if (h > 0)
                                for (; f--;) g[f] || y[f] || (y[f] = J.call(l));
                            y = m(y)
                        }
                        Z.apply(l, y), u && !i && y.length > 0 && h + n.length > 1 && e.uniqueSort(l)
                    }
                    return u && (R = w, j = v), g
                };
            return o ? i(a) : a
        }

        function w(t, n, i) {
            for (var o = 0, r = n.length; r > o; o++) e(t, n[o], i);
            return i
        }

        function x(t, e, n, i) {
            var o, r, a, s, l, u = p(t);
            if (!i && 1 === u.length) {
                if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && C.getById && 9 === e.nodeType && $ && N.relative[r[1].type]) {
                    if (e = (N.find.ID(a.matches[0].replace(xe, Te), e) || [])[0], !e) return n;
                    t = t.slice(r.shift().value.length)
                }
                for (o = fe.needsContext.test(t) ? 0 : r.length; o-- && (a = r[o], !N.relative[s = a.type]);)
                    if ((l = N.find[s]) && (i = l(a.matches[0].replace(xe, Te), be.test(r[0].type) && c(e.parentNode) || e))) {
                        if (r.splice(o, 1), t = i.length && h(r), !t) return Z.apply(n, i), n;
                        break
                    }
            }
            return S(t, u)(i, e, !$, n, be.test(t) && c(e.parentNode) || e), n
        }
        var T, C, N, E, k, S, j, P, D, A, L, M, $, H, B, F, O, q = "sizzle" + -new Date,
            _ = t.document,
            R = 0,
            W = 0,
            I = n(),
            X = n(),
            Y = n(),
            z = function(t, e) {
                return t === e && (D = !0), 0
            },
            V = "undefined",
            G = 1 << 31,
            U = {}.hasOwnProperty,
            Q = [],
            J = Q.pop,
            K = Q.push,
            Z = Q.push,
            te = Q.slice,
            ee = Q.indexOf || function(t) {
                for (var e = 0, n = this.length; n > e; e++)
                    if (this[e] === t) return e;
                return -1
            },
            ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]",
            oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re = oe.replace("w", "w#"),
            ae = "\\[" + ie + "*(" + oe + ")" + ie + "*(?:([*^$|!~]?=)" + ie + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + re + ")|)|)" + ie + "*\\]",
            se = ":(" + oe + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)",
            le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            ue = new RegExp("^" + ie + "*," + ie + "*"),
            ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
            pe = new RegExp(se),
            he = new RegExp("^" + re + "$"),
            fe = {
                ID: new RegExp("^#(" + oe + ")"),
                CLASS: new RegExp("^\\.(" + oe + ")"),
                TAG: new RegExp("^(" + oe.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ae),
                PSEUDO: new RegExp("^" + se),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ye = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            we = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
            Te = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            };
        try {
            Z.apply(Q = te.call(_.childNodes), _.childNodes), Q[_.childNodes.length].nodeType
        } catch (Ce) {
            Z = {
                apply: Q.length ? function(t, e) {
                    K.apply(t, te.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        C = e.support = {}, k = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, A = e.setDocument = function(t) {
            var e, n = t ? t.ownerDocument || t : _,
                i = n.defaultView;
            return n !== L && 9 === n.nodeType && n.documentElement ? (L = n, M = n.documentElement, $ = !k(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                A()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                A()
            })), C.attributes = o(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), C.getElementsByTagName = o(function(t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), C.getElementsByClassName = ye.test(n.getElementsByClassName) && o(function(t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), C.getById = o(function(t) {
                return M.appendChild(t).id = q, !n.getElementsByName || !n.getElementsByName(q).length
            }), C.getById ? (N.find.ID = function(t, e) {
                if (typeof e.getElementById !== V && $) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, N.filter.ID = function(t) {
                var e = t.replace(xe, Te);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete N.find.ID, N.filter.ID = function(t) {
                var e = t.replace(xe, Te);
                return function(t) {
                    var n = typeof t.getAttributeNode !== V && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), N.find.TAG = C.getElementsByTagName ? function(t, e) {
                return typeof e.getElementsByTagName !== V ? e.getElementsByTagName(t) : void 0
            } : function(t, e) {
                var n, i = [],
                    o = 0,
                    r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, N.find.CLASS = C.getElementsByClassName && function(t, e) {
                return typeof e.getElementsByClassName !== V && $ ? e.getElementsByClassName(t) : void 0
            }, B = [], H = [], (C.qsa = ye.test(n.querySelectorAll)) && (o(function(t) {
                t.innerHTML = "<select t=''><option selected=''></option></select>", t.querySelectorAll("[t^='']").length && H.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || H.push("\\[" + ie + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked").length || H.push(":checked")
            }), o(function(t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && H.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), H.push(",.*:")
            })), (C.matchesSelector = ye.test(F = M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && o(function(t) {
                C.disconnectedMatch = F.call(t, "div"), F.call(t, "[s!='']:x"), B.push("!=", se)
            }), H = H.length && new RegExp(H.join("|")), B = B.length && new RegExp(B.join("|")), e = ye.test(M.compareDocumentPosition), O = e || ye.test(M.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, z = e ? function(t, e) {
                if (t === e) return D = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !C.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === _ && O(_, t) ? -1 : e === n || e.ownerDocument === _ && O(_, e) ? 1 : P ? ee.call(P, t) - ee.call(P, e) : 0 : 4 & i ? -1 : 1)
            } : function(t, e) {
                if (t === e) return D = !0, 0;
                var i, o = 0,
                    r = t.parentNode,
                    s = e.parentNode,
                    l = [t],
                    u = [e];
                if (!r || !s) return t === n ? -1 : e === n ? 1 : r ? -1 : s ? 1 : P ? ee.call(P, t) - ee.call(P, e) : 0;
                if (r === s) return a(t, e);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (i = e; i = i.parentNode;) u.unshift(i);
                for (; l[o] === u[o];) o++;
                return o ? a(l[o], u[o]) : l[o] === _ ? -1 : u[o] === _ ? 1 : 0
            }, n) : L
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== L && A(t), n = n.replace(de, "='$1']"), !(!C.matchesSelector || !$ || B && B.test(n) || H && H.test(n))) try {
                var i = F.call(t, n);
                if (i || C.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (o) {}
            return e(n, L, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== L && A(t), O(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== L && A(t);
            var n = N.attrHandle[e.toLowerCase()],
                i = n && U.call(N.attrHandle, e.toLowerCase()) ? n(t, e, !$) : void 0;
            return void 0 !== i ? i : C.attributes || !$ ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                i = 0,
                o = 0;
            if (D = !C.detectDuplicates, P = !C.sortStable && t.slice(0), t.sort(z), D) {
                for (; e = t[o++];) e === t[o] && (i = n.push(o));
                for (; i--;) t.splice(n[i], 1)
            }
            return P = null, t
        }, E = e.getText = function(t) {
            var e, n = "",
                i = 0,
                o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += E(t)
                } else if (3 === o || 4 === o) return t.nodeValue
            } else
                for (; e = t[i++];) n += E(e);
            return n
        }, N = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(xe, Te), t[3] = (t[4] || t[5] || "").replace(xe, Te), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[5] && t[2];
                    return fe.CHILD.test(t[0]) ? null : (t[3] && void 0 !== t[4] ? t[2] = t[4] : n && pe.test(n) && (e = p(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(xe, Te).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = I[t + " "];
                    return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && I(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== V && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(o) {
                        var r = e.attr(o, t);
                        return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, n, i, o) {
                    var r = "nth" !== t.slice(0, 3),
                        a = "last" !== t.slice(-4),
                        s = "of-type" === e;
                    return 1 === i && 0 === o ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, l) {
                        var u, c, d, p, h, f, g = r !== a ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            y = s && e.nodeName.toLowerCase(),
                            v = !l && !s;
                        if (m) {
                            if (r) {
                                for (; g;) {
                                    for (d = e; d = d[g];)
                                        if (s ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [a ? m.firstChild : m.lastChild], a && v) {
                                for (c = m[q] || (m[q] = {}), u = c[t] || [], h = u[0] === R && u[1], p = u[0] === R && u[2], d = h && m.childNodes[h]; d = ++h && d && d[g] || (p = h = 0) || f.pop();)
                                    if (1 === d.nodeType && ++p && d === e) {
                                        c[t] = [R, h, p];
                                        break
                                    }
                            } else if (v && (u = (e[q] || (e[q] = {}))[t]) && u[0] === R) p = u[1];
                            else
                                for (;
                                    (d = ++h && d && d[g] || (p = h = 0) || f.pop()) && ((s ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++p || (v && ((d[q] || (d[q] = {}))[t] = [R, p]), d !== e)););
                            return p -= o, p === i || p % i === 0 && p / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var o, r = N.pseudos[t] || N.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[q] ? r(n) : r.length > 1 ? (o = [t, t, "", n], N.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, o = r(t, n), a = o.length; a--;) i = ee.call(t, o[a]), t[i] = !(e[i] = o[a])
                    }) : function(t) {
                        return r(t, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [],
                        n = [],
                        o = S(t.replace(le, "$1"));
                    return o[q] ? i(function(t, e, n, i) {
                        for (var r, a = o(t, null, i, []), s = t.length; s--;)(r = a[s]) && (t[s] = !(e[s] = r))
                    }) : function(t, i, r) {
                        return e[0] = t, o(e, null, r, n), !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || E(e)).indexOf(t) > -1
                    }
                }),
                lang: i(function(t) {
                    return he.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xe, Te).toLowerCase(),
                        function(e) {
                            var n;
                            do
                                if (n = $ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === M
                },
                focus: function(t) {
                    return t === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !N.pseudos.empty(t)
                },
                header: function(t) {
                    return me.test(t.nodeName)
                },
                input: function(t) {
                    return ge.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e - 1]
                }),
                eq: u(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: u(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: u(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: u(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }, N.pseudos.nth = N.pseudos.eq;
        for (T in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) N.pseudos[T] = s(T);
        for (T in {
                submit: !0,
                reset: !0
            }) N.pseudos[T] = l(T);
        return d.prototype = N.filters = N.pseudos, N.setFilters = new d, S = e.compile = function(t, e) {
            var n, i = [],
                o = [],
                r = Y[t + " "];
            if (!r) {
                for (e || (e = p(t)), n = e.length; n--;) r = v(e[n]), r[q] ? i.push(r) : o.push(r);
                r = Y(t, b(o, i))
            }
            return r
        }, C.sortStable = q.split("").sort(z).join("") === q, C.detectDuplicates = !!D, A(), C.sortDetached = o(function(t) {
            return 1 & t.compareDocumentPosition(L.createElement("div"))
        }), o(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), C.attributes && o(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || r("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), o(function(t) {
            return null == t.getAttribute("disabled")
        }) || r(ne, function(t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    re.find = ce, re.expr = ce.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ce.uniqueSort, re.text = ce.getText, re.isXMLDoc = ce.isXML, re.contains = ce.contains;
    var de = re.expr.match.needsContext,
        pe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        he = /^.[^:#\[\.,]*$/;
    re.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? re.find.matchesSelector(i, t) ? [i] : [] : re.find.matches(t, re.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, re.fn.extend({
        find: function(t) {
            var e, n = [],
                i = this,
                o = i.length;
            if ("string" != typeof t) return this.pushStack(re(t).filter(function() {
                for (e = 0; o > e; e++)
                    if (re.contains(i[e], this)) return !0
            }));
            for (e = 0; o > e; e++) re.find(t, i[e], n);
            return n = this.pushStack(o > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && de.test(t) ? re(t) : t || [], !1).length
        }
    });
    var fe, ge = t.document,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ye = re.fn.init = function(t, e) {
            var n, i;
            if (!t) return this;
            if ("string" == typeof t) {
                if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : me.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || fe).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof re ? e[0] : e, re.merge(this, re.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : ge, !0)), pe.test(n[1]) && re.isPlainObject(e))
                        for (n in e) re.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                if (i = ge.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2]) return fe.find(t);
                    this.length = 1, this[0] = i
                }
                return this.context = ge, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : re.isFunction(t) ? "undefined" != typeof fe.ready ? fe.ready(t) : t(re) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), re.makeArray(t, this))
        };
    ye.prototype = re.fn, fe = re(ge);
    var ve = /^(?:parents|prev(?:Until|All))/,
        be = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    re.extend({
        dir: function(t, e, n) {
            for (var i = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !re(o).is(n));) 1 === o.nodeType && i.push(o), o = o[e];
            return i
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), re.fn.extend({
        has: function(t) {
            var e, n = re(t, this),
                i = n.length;
            return this.filter(function() {
                for (e = 0; i > e; e++)
                    if (re.contains(this, n[e])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, o = this.length, r = [], a = de.test(t) || "string" != typeof t ? re(t, e || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, t))) {
                        r.push(n);
                        break
                    } return this.pushStack(r.length > 1 ? re.unique(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? re.inArray(this[0], re(t)) : re.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(re.unique(re.merge(this.get(), re(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), re.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return re.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return re.dir(t, "parentNode", n)
        },
        next: function(t) {
            return o(t, "nextSibling")
        },
        prev: function(t) {
            return o(t, "previousSibling")
        },
        nextAll: function(t) {
            return re.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return re.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return re.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return re.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return re.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return re.sibling(t.firstChild)
        },
        contents: function(t) {
            return re.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : re.merge([], t.childNodes)
        }
    }, function(t, e) {
        re.fn[t] = function(n, i) {
            var o = re.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = re.filter(i, o)), this.length > 1 && (be[t] || (o = re.unique(o)), ve.test(t) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var we = /\S+/g,
        xe = {};
    re.Callbacks = function(t) {
        t = "string" == typeof t ? xe[t] || r(t) : re.extend({}, t);
        var e, n, i, o, a, s, l = [],
            u = !t.once && [],
            c = function(r) {
                for (n = t.memory && r, i = !0, a = s || 0, s = 0, o = l.length, e = !0; l && o > a; a++)
                    if (l[a].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                        n = !1;
                        break
                    } e = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function r(e) {
                            re.each(e, function(e, n) {
                                var i = re.type(n);
                                "function" === i ? t.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), e ? o = l.length : n && (s = i, c(n))
                    }
                    return this
                },
                remove: function() {
                    return l && re.each(arguments, function(t, n) {
                        for (var i;
                            (i = re.inArray(n, l, i)) > -1;) l.splice(i, 1), e && (o >= i && o--, a >= i && a--)
                    }), this
                },
                has: function(t) {
                    return t ? re.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = u = n = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, n || d.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(t, n) {
                    return !l || i && !u || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? u.push(n) : c(n)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return d
    }, re.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", re.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return re.Deferred(function(n) {
                            re.each(e, function(e, r) {
                                var a = re.isFunction(t[e]) && t[e];
                                o[r[1]](function() {
                                    var t = a && a.apply(this, arguments);
                                    t && re.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? re.extend(t, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, re.each(e, function(t, r) {
                var a = r[2],
                    s = r[3];
                i[r[1]] = a.add, s && a.add(function() {
                    n = s
                }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(t) {
            var e, n, i, o = 0,
                r = U.call(arguments),
                a = r.length,
                s = 1 !== a || t && re.isFunction(t.promise) ? a : 0,
                l = 1 === s ? t : re.Deferred(),
                u = function(t, n, i) {
                    return function(o) {
                        n[t] = this, i[t] = arguments.length > 1 ? U.call(arguments) : o, i === e ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (e = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) r[o] && re.isFunction(r[o].promise) ? r[o].promise().done(u(o, i, r)).fail(l.reject).progress(u(o, n, e)) : --s;
            return s || l.resolveWith(i, r), l.promise()
        }
    });
    var Te;
    re.fn.ready = function(t) {
        return re.ready.promise().done(t), this
    }, re.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? re.readyWait++ : re.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--re.readyWait : !re.isReady) {
                if (!ge.body) return setTimeout(re.ready);
                re.isReady = !0, t !== !0 && --re.readyWait > 0 || (Te.resolveWith(ge, [re]), re.fn.trigger && re(ge).trigger("ready").off("ready"))
            }
        }
    }), re.ready.promise = function(e) {
        if (!Te)
            if (Te = re.Deferred(), "complete" === ge.readyState) setTimeout(re.ready);
            else if (ge.addEventListener) ge.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1);
        else {
            ge.attachEvent("onreadystatechange", s), t.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == t.frameElement && ge.documentElement
            } catch (i) {}
            n && n.doScroll && ! function o() {
                if (!re.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return setTimeout(o, 50)
                    }
                    a(), re.ready()
                }
            }()
        }
        return Te.promise(e)
    };
    var Ce, Ne = "undefined";
    for (Ce in re(ie)) break;
    ie.ownLast = "0" !== Ce, ie.inlineBlockNeedsLayout = !1, re(function() {
            var t, e, n = ge.getElementsByTagName("body")[0];
            n && (t = ge.createElement("div"), t.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", e = ge.createElement("div"), n.appendChild(t).appendChild(e), typeof e.style.zoom !== Ne && (e.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (ie.inlineBlockNeedsLayout = 3 === e.offsetWidth) && (n.style.zoom = 1)), n.removeChild(t), t = e = null)
        }),
        function() {
            var t = ge.createElement("div");
            if (null == ie.deleteExpando) {
                ie.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    ie.deleteExpando = !1
                }
            }
            t = null
        }(), re.acceptData = function(t) {
            var e = re.noData[(t.nodeName + " ").toLowerCase()],
                n = +t.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        };
    var Ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ke = /([A-Z])/g;
    re.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? re.cache[t[re.expando]] : t[re.expando], !!t && !u(t)
        },
        data: function(t, e, n) {
            return c(t, e, n)
        },
        removeData: function(t, e) {
            return d(t, e)
        },
        _data: function(t, e, n) {
            return c(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return d(t, e, !0)
        }
    }), re.fn.extend({
        data: function(t, e) {
            var n, i, o, r = this[0],
                a = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = re.data(r), 1 === r.nodeType && !re._data(r, "parsedAttrs"))) {
                    for (n = a.length; n--;) i = a[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(r, i, o[i]));
                    re._data(r, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                re.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                re.data(this, t, e)
            }) : r ? l(r, t, re.data(r, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                re.removeData(this, t)
            })
        }
    }), re.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = re._data(t, e), n && (!i || re.isArray(n) ? i = re._data(t, e, re.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = re.queue(t, e),
                i = n.length,
                o = n.shift(),
                r = re._queueHooks(t, e),
                a = function() {
                    re.dequeue(t, e)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, a, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return re._data(t, n) || re._data(t, n, {
                empty: re.Callbacks("once memory").add(function() {
                    re._removeData(t, e + "queue"), re._removeData(t, n)
                })
            })
        }
    }), re.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? re.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = re.queue(this, t, e);
                re._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && re.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                re.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                o = re.Deferred(),
                r = this,
                a = this.length,
                s = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = re._data(r[a], t + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            return s(), o.promise(e)
        }
    });
    var Se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        je = ["Top", "Right", "Bottom", "Left"],
        Pe = function(t, e) {
            return t = e || t, "none" === re.css(t, "display") || !re.contains(t.ownerDocument, t)
        },
        De = re.access = function(t, e, n, i, o, r, a) {
            var s = 0,
                l = t.length,
                u = null == n;
            if ("object" === re.type(n)) {
                o = !0;
                for (s in n) re.access(t, e, s, n[s], !0, r, a)
            } else if (void 0 !== i && (o = !0, re.isFunction(i) || (a = !0), u && (a ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                    return u.call(re(t), n)
                })), e))
                for (; l > s; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
            return o ? t : u ? e.call(t) : l ? e(t[0], n) : r
        },
        Ae = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = ge.createDocumentFragment(),
            e = ge.createElement("div"),
            n = ge.createElement("input");
        if (e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a>", ie.leadingWhitespace = 3 === e.firstChild.nodeType, ie.tbody = !e.getElementsByTagName("tbody").length, ie.htmlSerialize = !!e.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== ge.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), ie.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                ie.noCloneEvent = !1
            }), e.cloneNode(!0).click()), null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete e.test
            } catch (i) {
                ie.deleteExpando = !1
            }
        }
        t = e = n = null
    }(),
    function() {
        var e, n, i = ge.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + e, (ie[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), ie[e + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var Le = /^(?:input|select|textarea)$/i,
        Me = /^key/,
        $e = /^(?:mouse|contextmenu)|click/,
        He = /^(?:focusinfocus|focusoutblur)$/,
        Be = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, a, s, l, u, c, d, p, h, f, g, m = re._data(t);
            if (m) {
                for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = re.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || (c = m.handle = function(t) {
                        return typeof re === Ne || t && re.event.triggered === t.type ? void 0 : re.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = t), e = (e || "").match(we) || [""], s = e.length; s--;) r = Be.exec(e[s]) || [], h = g = r[1], f = (r[2] || "").split(".").sort(), h && (u = re.event.special[h] || {}, h = (o ? u.delegateType : u.bindType) || h, u = re.event.special[h] || {}, d = re.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && re.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, l), (p = a[h]) || (p = a[h] = [], p.delegateCount = 0, u.setup && u.setup.call(t, i, f, c) !== !1 || (t.addEventListener ? t.addEventListener(h, c, !1) : t.attachEvent && t.attachEvent("on" + h, c))), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), re.event.global[h] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, o) {
            var r, a, s, l, u, c, d, p, h, f, g, m = re.hasData(t) && re._data(t);
            if (m && (c = m.events)) {
                for (e = (e || "").match(we) || [""], u = e.length; u--;)
                    if (s = Be.exec(e[u]) || [], h = g = s[1], f = (s[2] || "").split(".").sort(), h) {
                        for (d = re.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, p = c[h] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) a = p[r], !o && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(r, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(t, a));
                        l && !p.length && (d.teardown && d.teardown.call(t, f, m.handle) !== !1 || re.removeEvent(t, h, m.handle), delete c[h])
                    } else
                        for (h in c) re.event.remove(t, h + e[u], n, i, !0);
                re.isEmptyObject(c) && (delete m.handle, re._removeData(t, "events"))
            }
        },
        trigger: function(e, n, i, o) {
            var r, a, s, l, u, c, d, p = [i || ge],
                h = ee.call(e, "type") ? e.type : e,
                f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = c = i = i || ge, 3 !== i.nodeType && 8 !== i.nodeType && !He.test(h + re.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."), h = f.shift(), f.sort()), a = h.indexOf(":") < 0 && "on" + h, e = e[re.expando] ? e : new re.Event(h, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : re.makeArray(n, [e]), u = re.event.special[h] || {}, o || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!o && !u.noBubble && !re.isWindow(i)) {
                    for (l = u.delegateType || h, He.test(l + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                    c === (i.ownerDocument || ge) && p.push(c.defaultView || c.parentWindow || t)
                }
                for (d = 0;
                    (s = p[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? l : u.bindType || h, r = (re._data(s, "events") || {})[e.type] && re._data(s, "handle"), r && r.apply(s, n), r = a && s[a], r && r.apply && re.acceptData(s) && (e.result = r.apply(s, n), e.result === !1 && e.preventDefault());
                if (e.type = h, !o && !e.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), n) === !1) && re.acceptData(i) && a && i[h] && !re.isWindow(i)) {
                    c = i[a], c && (i[a] = null), re.event.triggered = h;
                    try {
                        i[h]()
                    } catch (g) {}
                    re.event.triggered = void 0, c && (i[a] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = re.event.fix(t);
            var e, n, i, o, r, a = [],
                s = U.call(arguments),
                l = (re._data(this, "events") || {})[t.type] || [],
                u = re.event.special[t.type] || {};
            if (s[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (a = re.event.handlers.call(this, t, l), e = 0;
                    (o = a[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = o.elem, r = 0;
                        (i = o.handlers[r++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, o, r, a = [],
                s = e.delegateCount,
                l = t.target;
            if (s && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (o = [], r = 0; s > r; r++) i = e[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? re(n, this).index(l) >= 0 : re.find(n, this, null, [l]).length), o[n] && o.push(i);
                        o.length && a.push({
                            elem: l,
                            handlers: o
                        })
                    } return s < e.length && a.push({
                elem: this,
                handlers: e.slice(s)
            }), a
        },
        fix: function(t) {
            if (t[re.expando]) return t;
            var e, n, i, o = t.type,
                r = t,
                a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = $e.test(o) ? this.mouseHooks : Me.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new re.Event(r), e = i.length; e--;) n = i[e], t[n] = r[n];
            return t.target || (t.target = r.srcElement || ge), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, r) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, o, r = e.button,
                    a = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || ge, o = i.documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return re.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var o = re.extend(new re.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? re.event.trigger(o, null, e) : re.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, re.removeEvent = ge.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === Ne && (t[i] = null), t.detachEvent(i, n))
    }, re.Event = function(t, e) {
        return this instanceof re.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && (t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault()) ? p : h) : this.type = t, e && re.extend(this, e), this.timeStamp = t && t.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(t, e)
    }, re.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = p, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = p, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = p, this.stopPropagation()
        }
    }, re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(t, e) {
        re.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    o = t.relatedTarget,
                    r = t.handleObj;
                return (!o || o !== i && !re.contains(i, o)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), ie.submitBubbles || (re.event.special.submit = {
        setup: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    n = re.nodeName(e, "input") || re.nodeName(e, "button") ? e.form : void 0;
                n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }), re._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && re.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
        }
    }), ie.changeBubbles || (re.event.special.change = {
        setup: function() {
            return Le.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), re.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, t, !0)
            })), !1) : void re.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Le.test(e.nodeName) && !re._data(e, "changeBubbles") && (re.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || re.event.simulate("change", this.parentNode, t, !0)
                }), re._data(e, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return re.event.remove(this, "._change"), !Le.test(this.nodeName)
        }
    }), ie.focusinBubbles || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            re.event.simulate(e, t.target, re.event.fix(t), !0)
        };
        re.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = re._data(i, e);
                o || i.addEventListener(t, n, !0), re._data(i, e, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = re._data(i, e) - 1;
                o ? re._data(i, e, o) : (i.removeEventListener(t, n, !0), re._removeData(i, e))
            }
        }
    }), re.fn.extend({
        on: function(t, e, n, i, o) {
            var r, a;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (r in t) this.on(r, e, n, t[r], o);
                return this
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = h;
            else if (!i) return this;
            return 1 === o && (a = i, i = function(t) {
                return re().off(t), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = re.guid++)), this.each(function() {
                re.event.add(this, t, i, n, e)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, re(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = h), this.each(function() {
                re.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                re.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? re.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Oe = / jQuery\d+="(?:null|\d+)"/g,
        qe = new RegExp("<(?:" + Fe + ")[\\s/>]", "i"),
        _e = /^\s+/,
        Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        We = /<([\w:]+)/,
        Ie = /<tbody/i,
        Xe = /<|&#?\w+;/,
        Ye = /<(?:script|style|link)/i,
        ze = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ve = /^$|\/(?:java|ecma)script/i,
        Ge = /^true\/(.*)/,
        Ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Qe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Je = g(ge),
        Ke = Je.appendChild(ge.createElement("div"));
    Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td, re.extend({
        clone: function(t, e, n) {
            var i, o, r, a, s, l = re.contains(t.ownerDocument, t);
            if (ie.html5Clone || re.isXMLDoc(t) || !qe.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (Ke.innerHTML = t.outerHTML, Ke.removeChild(r = Ke.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || re.isXMLDoc(t)))
                for (i = m(r), s = m(t), a = 0; null != (o = s[a]); ++a) i[a] && C(o, i[a]);
            if (e)
                if (n)
                    for (s = s || m(t), i = i || m(r), a = 0; null != (o = s[a]); a++) T(o, i[a]);
                else T(t, r);
            return i = m(r, "script"), i.length > 0 && x(i, !l && m(t, "script")), i = s = o = null, r
        },
        buildFragment: function(t, e, n, i) {
            for (var o, r, a, s, l, u, c, d = t.length, p = g(e), h = [], f = 0; d > f; f++)
                if (r = t[f], r || 0 === r)
                    if ("object" === re.type(r)) re.merge(h, r.nodeType ? [r] : r);
                    else if (Xe.test(r)) {
                for (s = s || p.appendChild(e.createElement("div")), l = (We.exec(r) || ["", ""])[1].toLowerCase(), c = Qe[l] || Qe._default, s.innerHTML = c[1] + r.replace(Re, "<$1></$2>") + c[2], o = c[0]; o--;) s = s.lastChild;
                if (!ie.leadingWhitespace && _e.test(r) && h.push(e.createTextNode(_e.exec(r)[0])), !ie.tbody)
                    for (r = "table" !== l || Ie.test(r) ? "<table>" !== c[1] || Ie.test(r) ? 0 : s : s.firstChild, o = r && r.childNodes.length; o--;) re.nodeName(u = r.childNodes[o], "tbody") && !u.childNodes.length && r.removeChild(u);
                for (re.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = p.lastChild
            } else h.push(e.createTextNode(r));
            for (s && p.removeChild(s), ie.appendChecked || re.grep(m(h, "input"), y), f = 0; r = h[f++];)
                if ((!i || -1 === re.inArray(r, i)) && (a = re.contains(r.ownerDocument, r), s = m(p.appendChild(r), "script"), a && x(s), n))
                    for (o = 0; r = s[o++];) Ve.test(r.type || "") && n.push(r);
            return s = null, p
        },
        cleanData: function(t, e) {
            for (var n, i, o, r, a = 0, s = re.expando, l = re.cache, u = ie.deleteExpando, c = re.event.special; null != (n = t[a]); a++)
                if ((e || re.acceptData(n)) && (o = n[s], r = o && l[o])) {
                    if (r.events)
                        for (i in r.events) c[i] ? re.event.remove(n, i) : re.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], u ? delete n[s] : typeof n.removeAttribute !== Ne ? n.removeAttribute(s) : n[s] = null, G.push(o))
                }
        }
    }), re.fn.extend({
        text: function(t) {
            return De(this, function(t) {
                return void 0 === t ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ge).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = t ? re.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || re.cleanData(m(n)), n.parentNode && (e && re.contains(n.ownerDocument, n) && x(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && re.cleanData(m(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && re.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return re.clone(this, t, e)
            })
        },
        html: function(t) {
            return De(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Oe, "") : void 0;
                if (!("string" != typeof t || Ye.test(t) || !ie.htmlSerialize && qe.test(t) || !ie.leadingWhitespace && _e.test(t) || Qe[(We.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Re, "<$1></$2>");
                    try {
                        for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (re.cleanData(m(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (o) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, re.cleanData(m(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = Q.apply([], t);
            var n, i, o, r, a, s, l = 0,
                u = this.length,
                c = this,
                d = u - 1,
                p = t[0],
                h = re.isFunction(p);
            if (h || u > 1 && "string" == typeof p && !ie.checkClone && ze.test(p)) return this.each(function(n) {
                var i = c.eq(n);
                h && (t[0] = p.call(this, n, i.html())), i.domManip(t, e)
            });
            if (u && (s = re.buildFragment(t, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (r = re.map(m(s, "script"), b), o = r.length; u > l; l++) i = s, l !== d && (i = re.clone(i, !0, !0), o && re.merge(r, m(i, "script"))), e.call(this[l], i, l);
                if (o)
                    for (a = r[r.length - 1].ownerDocument, re.map(r, w), l = 0; o > l; l++) i = r[l], Ve.test(i.type || "") && !re._data(i, "globalEval") && re.contains(a, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ue, "")));
                s = n = null
            }
            return this
        }
    }), re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        re.fn[t] = function(t) {
            for (var n, i = 0, o = [], r = re(t), a = r.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), re(r[i])[e](n), J.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var Ze, tn = {};
    ! function() {
        var t, e, n = ge.createElement("div"),
            i = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = n.getElementsByTagName("a")[0], t.style.cssText = "float:left;opacity:.5", ie.opacity = /^0.5/.test(t.style.opacity), ie.cssFloat = !!t.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === n.style.backgroundClip, t = n = null, ie.shrinkWrapBlocks = function() {
            var t, n, o, r;
            if (null == e) {
                if (t = ge.getElementsByTagName("body")[0], !t) return;
                r = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = ge.createElement("div"), o = ge.createElement("div"), t.appendChild(n).appendChild(o), e = !1, typeof o.style.zoom !== Ne && (o.style.cssText = i + ";width:1px;padding:1px;zoom:1", o.innerHTML = "<div></div>", o.firstChild.style.width = "5px", e = 3 !== o.offsetWidth), t.removeChild(n), t = n = o = null
            }
            return e
        }
    }();
    var en, nn, on = /^margin/,
        rn = new RegExp("^(" + Se + ")(?!px)[a-z%]+$", "i"),
        an = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (en = function(t) {
            return t.ownerDocument.defaultView.getComputedStyle(t, null)
        }, nn = function(t, e, n) {
            var i, o, r, a, s = t.style;
            return n = n || en(t), a = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== a || re.contains(t.ownerDocument, t) || (a = re.style(t, e)), rn.test(a) && on.test(e) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 === a ? a : a + ""
        }) : ge.documentElement.currentStyle && (en = function(t) {
            return t.currentStyle
        }, nn = function(t, e, n) {
            var i, o, r, a, s = t.style;
            return n = n || en(t), a = n ? n[e] : void 0, null == a && s && s[e] && (a = s[e]), rn.test(a) && !an.test(e) && (i = s.left, o = t.runtimeStyle, r = o && o.left, r && (o.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : a, a = s.pixelLeft + "px", s.left = i, r && (o.left = r)), void 0 === a ? a : a + "" || "auto"
        }),
        function() {
            function e() {
                var e, n, i = ge.getElementsByTagName("body")[0];
                i && (e = ge.createElement("div"), n = ge.createElement("div"), e.style.cssText = u, i.appendChild(e).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", re.swap(i, null != i.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    o = 4 === n.offsetWidth
                }), r = !0, a = !1, s = !0, t.getComputedStyle && (a = "1%" !== (t.getComputedStyle(n, null) || {}).top, r = "4px" === (t.getComputedStyle(n, null) || {
                    width: "4px"
                }).width), i.removeChild(e), n = i = null)
            }
            var n, i, o, r, a, s, l = ge.createElement("div"),
                u = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                c = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
            l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = l.getElementsByTagName("a")[0], n.style.cssText = "float:left;opacity:.5", ie.opacity = /^0.5/.test(n.style.opacity), ie.cssFloat = !!n.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === l.style.backgroundClip, n = l = null, re.extend(ie, {
                reliableHiddenOffsets: function() {
                    if (null != i) return i;
                    var t, e, n, o = ge.createElement("div"),
                        r = ge.getElementsByTagName("body")[0];
                    if (r) return o.setAttribute("className", "t"), o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = ge.createElement("div"), t.style.cssText = u, r.appendChild(t).appendChild(o), o.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = o.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", n = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", i = n && 0 === e[0].offsetHeight, r.removeChild(t), o = r = null, i
                },
                boxSizing: function() {
                    return null == o && e(), o
                },
                boxSizingReliable: function() {
                    return null == r && e(), r
                },
                pixelPosition: function() {
                    return null == a && e(), a
                },
                reliableMarginRight: function() {
                    var e, n, i, o;
                    if (null == s && t.getComputedStyle) {
                        if (e = ge.getElementsByTagName("body")[0], !e) return;
                        n = ge.createElement("div"), i = ge.createElement("div"), n.style.cssText = u, e.appendChild(n).appendChild(i), o = i.appendChild(ge.createElement("div")), o.style.cssText = i.style.cssText = c, o.style.marginRight = o.style.width = "0", i.style.width = "1px", s = !parseFloat((t.getComputedStyle(o, null) || {}).marginRight), e.removeChild(n)
                    }
                    return s
                }
            })
        }(), re.swap = function(t, e, n, i) {
            var o, r, a = {};
            for (r in e) a[r] = t.style[r], t.style[r] = e[r];
            o = n.apply(t, i || []);
            for (r in e) t.style[r] = a[r];
            return o
        };
    var sn = /alpha\([^)]*\)/i,
        ln = /opacity\s*=\s*([^)]*)/,
        un = /^(none|table(?!-c[ea]).+)/,
        cn = new RegExp("^(" + Se + ")(.*)$", "i"),
        dn = new RegExp("^([+-])=(" + Se + ")", "i"),
        pn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        hn = {
            letterSpacing: 0,
            fontWeight: 400
        },
        fn = ["Webkit", "O", "Moz", "ms"];
    re.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = nn(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ie.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, a, s = re.camelCase(e),
                    l = t.style;
                if (e = re.cssProps[s] || (re.cssProps[s] = S(l, s)), a = re.cssHooks[e] || re.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(t, !1, i)) ? o : l[e];
                if (r = typeof n, "string" === r && (o = dn.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(re.css(t, e)), r = "number"), null != n && n === n && ("number" !== r || re.cssNumber[s] || (n += "px"), ie.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(t, n, i))))) try {
                    l[e] = "", l[e] = n
                } catch (u) {}
            }
        },
        css: function(t, e, n, i) {
            var o, r, a, s = re.camelCase(e);
            return e = re.cssProps[s] || (re.cssProps[s] = S(t.style, s)), a = re.cssHooks[e] || re.cssHooks[s], a && "get" in a && (r = a.get(t, !0, n)), void 0 === r && (r = nn(t, e, i)), "normal" === r && e in hn && (r = hn[e]), "" === n || n ? (o = parseFloat(r), n === !0 || re.isNumeric(o) ? o || 0 : r) : r
        }
    }), re.each(["height", "width"], function(t, e) {
        re.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? 0 === t.offsetWidth && un.test(re.css(t, "display")) ? re.swap(t, pn, function() {
                    return A(t, e, i)
                }) : A(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var o = i && en(t);
                return P(t, n, i ? D(t, e, i, ie.boxSizing() && "border-box" === re.css(t, "boxSizing", !1, o), o) : 0)
            }
        }
    }), ie.opacity || (re.cssHooks.opacity = {
        get: function(t, e) {
            return ln.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style,
                i = t.currentStyle,
                o = re.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                r = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === re.trim(r.replace(sn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = sn.test(r) ? r.replace(sn, o) : r + " " + o)
        }
    }), re.cssHooks.marginRight = k(ie.reliableMarginRight, function(t, e) {
        return e ? re.swap(t, {
            display: "inline-block"
        }, nn, [t, "marginRight"]) : void 0
    }), re.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        re.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + je[i] + e] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, on.test(t) || (re.cssHooks[t + e].set = P)
    }), re.fn.extend({
        css: function(t, e) {
            return De(this, function(t, e, n) {
                var i, o, r = {},
                    a = 0;
                if (re.isArray(e)) {
                    for (i = en(t), o = e.length; o > a; a++) r[e[a]] = re.css(t, e[a], !1, i);
                    return r
                }
                return void 0 !== n ? re.style(t, e, n) : re.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return j(this, !0)
        },
        hide: function() {
            return j(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Pe(this) ? re(this).show() : re(this).hide()
            })
        }
    }), re.Tween = L, L.prototype = {
        constructor: L,
        init: function(t, e, n, i, o, r) {
            this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (re.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = L.propHooks[this.prop];
            return t && t.get ? t.get(this) : L.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = L.propHooks[this.prop];
            return this.pos = e = this.options.duration ? re.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
        }
    }, L.prototype.init.prototype = L.prototype, L.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = re.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                re.fx.step[t.prop] ? re.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[re.cssProps[t.prop]] || re.cssHooks[t.prop]) ? re.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, re.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, re.fx = L.prototype.init, re.fx.step = {};
    var gn, mn, yn = /^(?:toggle|show|hide)$/,
        vn = new RegExp("^(?:([+-])=|)(" + Se + ")([a-z%]*)$", "i"),
        bn = /queueHooks$/,
        wn = [B],
        xn = {
            "*": [function(t, e) {
                var n = this.createTween(t, e),
                    i = n.cur(),
                    o = vn.exec(e),
                    r = o && o[3] || (re.cssNumber[t] ? "" : "px"),
                    a = (re.cssNumber[t] || "px" !== r && +i) && vn.exec(re.css(n.elem, t)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== r) {
                    r = r || a[3], o = o || [], a = +i || 1;
                    do s = s || ".5", a /= s, re.style(n.elem, t, a + r); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                }
                return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
    re.Animation = re.extend(O, {
            tweener: function(t, e) {
                re.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, o = t.length; o > i; i++) n = t[i], xn[n] = xn[n] || [], xn[n].unshift(e)
            },
            prefilter: function(t, e) {
                e ? wn.unshift(t) : wn.push(t)
            }
        }), re.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? re.extend({}, t) : {
                complete: n || !n && e || re.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !re.isFunction(e) && e
            };
            return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
            }, i
        }, re.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(Pe).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var o = re.isEmptyObject(t),
                    r = re.speed(e, n, i),
                    a = function() {
                        var e = O(this, re.extend({}, t), r);
                        (o || re._data(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        o = null != t && t + "queueHooks",
                        r = re.timers,
                        a = re._data(this);
                    if (o) a[o] && a[o].stop && i(a[o]);
                    else
                        for (o in a) a[o] && a[o].stop && bn.test(o) && i(a[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                    (e || !n) && re.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = re._data(this),
                        i = n[t + "queue"],
                        o = n[t + "queueHooks"],
                        r = re.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, re.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; a > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), re.each(["toggle", "show", "hide"], function(t, e) {
            var n = re.fn[e];
            re.fn[e] = function(t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate($(e, !0), t, i, o)
            }
        }), re.each({
            slideDown: $("show"),
            slideUp: $("hide"),
            slideToggle: $("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            re.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), re.timers = [], re.fx.tick = function() {
            var t, e = re.timers,
                n = 0;
            for (gn = re.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
            e.length || re.fx.stop(), gn = void 0
        }, re.fx.timer = function(t) {
            re.timers.push(t), t() ? re.fx.start() : re.timers.pop()
        }, re.fx.interval = 13, re.fx.start = function() {
            mn || (mn = setInterval(re.fx.tick, re.fx.interval))
        }, re.fx.stop = function() {
            clearInterval(mn), mn = null
        }, re.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, re.fn.delay = function(t, e) {
            return t = re.fx ? re.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                var i = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var t, e, n, i, o = ge.createElement("div");
            o.setAttribute("className", "t"), o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = o.getElementsByTagName("a")[0], n = ge.createElement("select"), i = n.appendChild(ge.createElement("option")), e = o.getElementsByTagName("input")[0], t.style.cssText = "top:1px", ie.getSetAttribute = "t" !== o.className, ie.style = /top/.test(t.getAttribute("style")), ie.hrefNormalized = "/a" === t.getAttribute("href"), ie.checkOn = !!e.value, ie.optSelected = i.selected, ie.enctype = !!ge.createElement("form").enctype, n.disabled = !0, ie.optDisabled = !i.disabled, e = ge.createElement("input"), e.setAttribute("value", ""), ie.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ie.radioValue = "t" === e.value, t = e = n = i = o = null
        }();
    var Tn = /\r/g;
    re.fn.extend({
        val: function(t) {
            var e, n, i, o = this[0]; {
                if (arguments.length) return i = re.isFunction(t), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? t.call(this, n, re(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : re.isArray(o) && (o = re.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), e = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                });
                if (o) return e = re.valHooks[o.type] || re.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(Tn, "") : null == n ? "" : n)
            }
        }
    }), re.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = re.find.attr(t, "value");
                    return null != e ? e : re.text(t)
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++)
                        if (n = i[l], !(!n.selected && l !== o || (ie.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && re.nodeName(n.parentNode, "optgroup"))) {
                            if (e = re(n).val(), r) return e;
                            a.push(e)
                        } return a
                },
                set: function(t, e) {
                    for (var n, i, o = t.options, r = re.makeArray(e), a = o.length; a--;)
                        if (i = o[a], re.inArray(re.valHooks.option.get(i), r) >= 0) try {
                            i.selected = n = !0
                        } catch (s) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), re.each(["radio", "checkbox"], function() {
        re.valHooks[this] = {
            set: function(t, e) {
                return re.isArray(e) ? t.checked = re.inArray(re(t).val(), e) >= 0 : void 0
            }
        }, ie.checkOn || (re.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Cn, Nn, En = re.expr.attrHandle,
        kn = /^(?:checked|selected)$/i,
        Sn = ie.getSetAttribute,
        jn = ie.input;
    re.fn.extend({
        attr: function(t, e) {
            return De(this, re.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                re.removeAttr(this, t)
            })
        }
    }), re.extend({
        attr: function(t, e, n) {
            var i, o, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === Ne ? re.prop(t, e, n) : (1 === r && re.isXMLDoc(t) || (e = e.toLowerCase(), i = re.attrHooks[e] || (re.expr.match.bool.test(e) ? Nn : Cn)), void 0 === n ? i && "get" in i && null !== (o = i.get(t, e)) ? o : (o = re.find.attr(t, e), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void re.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var n, i, o = 0,
                r = e && e.match(we);
            if (r && 1 === t.nodeType)
                for (; n = r[o++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) ? jn && Sn || !kn.test(n) ? t[i] = !1 : t[re.camelCase("default-" + n)] = t[i] = !1 : re.attr(t, n, ""), t.removeAttribute(Sn ? n : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ie.radioValue && "radio" === e && re.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), Nn = {
        set: function(t, e, n) {
            return e === !1 ? re.removeAttr(t, n) : jn && Sn || !kn.test(n) ? t.setAttribute(!Sn && re.propFix[n] || n, n) : t[re.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = En[e] || re.find.attr;
        En[e] = jn && Sn || !kn.test(e) ? function(t, e, i) {
            var o, r;
            return i || (r = En[e], En[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, En[e] = r), o
        } : function(t, e, n) {
            return n ? void 0 : t[re.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), jn && Sn || (re.attrHooks.value = {
        set: function(t, e, n) {
            return re.nodeName(t, "input") ? void(t.defaultValue = e) : Cn && Cn.set(t, e, n)
        }
    }), Sn || (Cn = {
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
        }
    }, En.id = En.name = En.coords = function(t, e, n) {
        var i;
        return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, re.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0
        },
        set: Cn.set
    }, re.attrHooks.contenteditable = {
        set: function(t, e, n) {
            Cn.set(t, "" === e ? !1 : e, n)
        }
    }, re.each(["width", "height"], function(t, e) {
        re.attrHooks[e] = {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        }
    })), ie.style || (re.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Pn = /^(?:input|select|textarea|button|object)$/i,
        Dn = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function(t, e) {
            return De(this, re.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = re.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {}
            })
        }
    }), re.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var i, o, r, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a) return r = 1 !== a || !re.isXMLDoc(t), r && (e = re.propFix[e] || e, o = re.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = re.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Pn.test(t.nodeName) || Dn.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), ie.hrefNormalized || re.each(["href", "src"], function(t, e) {
        re.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ie.optSelected || (re.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        re.propFix[this.toLowerCase()] = this
    }), ie.enctype || (re.propFix.enctype = "encoding");
    var An = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, a, s = 0,
                l = this.length,
                u = "string" == typeof t && t;
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).addClass(t.call(this, e, this.className))
            });
            if (u)
                for (e = (t || "").match(we) || []; l > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : " ")) {
                        for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a = re.trim(i), n.className !== a && (n.className = a)
                    } return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, a, s = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof t && t;
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).removeClass(t.call(this, e, this.className))
            });
            if (u)
                for (e = (t || "").match(we) || []; l > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : "")) {
                        for (r = 0; o = e[r++];)
                            for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                        a = t ? re.trim(i) : "", n.className !== a && (n.className = a)
                    } return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(re.isFunction(t) ? function(n) {
                re(this).toggleClass(t.call(this, n, this.className, e), e)
            } : function() {
                if ("string" === n)
                    for (var e, i = 0, o = re(this), r = t.match(we) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else(n === Ne || "boolean" === n) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : re._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(An, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        re.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), re.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var Ln = re.now(),
        Mn = /\?/,
        $n = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    re.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var n, i = null,
            o = re.trim(e + "");
        return o && !re.trim(o.replace($n, function(t, e, o, r) {
            return n && e && (i = 0), 0 === i ? t : (n = o || e, i += !r - !o, "")
        })) ? Function("return " + o)() : re.error("Invalid JSON: " + e)
    }, re.parseXML = function(e) {
        var n, i;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch (o) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + e), n
    };
    var Hn, Bn, Fn = /#.*$/,
        On = /([?&])_=[^&]*/,
        qn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        _n = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Rn = /^(?:GET|HEAD)$/,
        Wn = /^\/\//,
        In = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Xn = {},
        Yn = {},
        zn = "*/".concat("*");
    try {
        Bn = location.href
    } catch (Vn) {
        Bn = ge.createElement("a"), Bn.href = "", Bn = Bn.href
    }
    Hn = In.exec(Bn.toLowerCase()) || [], re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Bn,
            type: "GET",
            isLocal: _n.test(Hn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": re.parseJSON,
                "text xml": re.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? R(R(t, re.ajaxSettings), e) : R(re.ajaxSettings, t)
        },
        ajaxPrefilter: q(Xn),
        ajaxTransport: q(Yn),
        ajax: function(t, e) {
            function n(t, e, n, i) {
                var o, c, y, v, w, T = e;
                2 !== b && (b = 2, s && clearTimeout(s), u = void 0, a = i || "", x.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, n && (v = W(d, x, n)), v = I(d, v, x, o), o ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (re.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (re.etag[r] = w)), 204 === t || "HEAD" === d.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = v.state, c = v.data, y = v.error, o = !y)) : (y = T, (t || !T) && (T = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || T) + "", o ? f.resolveWith(p, [c, T, x]) : f.rejectWith(p, [x, T, y]), x.statusCode(m), m = void 0, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [x, d, o ? c : y]), g.fireWith(p, [x, T]), l && (h.trigger("ajaxComplete", [x, d]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var i, o, r, a, s, l, u, c, d = re.ajaxSetup({}, e),
                p = d.context || d,
                h = d.context && (p.nodeType || p.jquery) ? re(p) : re.event,
                f = re.Deferred(),
                g = re.Callbacks("once memory"),
                m = d.statusCode || {},
                y = {},
                v = {},
                b = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; e = qn.exec(a);) c[e[1].toLowerCase()] = e[2];
                            e = c[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return b || (t = v[n] = v[n] || t, y[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return b || (d.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t) m[e] = [m[e], t[e]];
                            else x.always(t[x.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || w;
                        return u && u.abort(e), n(0, e), this
                    }
                };
            if (f.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, d.url = ((t || d.url || Bn) + "").replace(Fn, "").replace(Wn, Hn[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = re.trim(d.dataType || "*").toLowerCase().match(we) || [""], null == d.crossDomain && (i = In.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Hn[1] && i[2] === Hn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Hn[3] || ("http:" === Hn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = re.param(d.data, d.traditional)), _(Xn, d, e, x), 2 === b) return x;
            l = d.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Rn.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (Mn.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = On.test(r) ? r.replace(On, "$1_=" + Ln++) : r + (Mn.test(r) ? "&" : "?") + "_=" + Ln++)), d.ifModified && (re.lastModified[r] && x.setRequestHeader("If-Modified-Since", re.lastModified[r]), re.etag[r] && x.setRequestHeader("If-None-Match", re.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + zn + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers) x.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === b)) return x.abort();
            w = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[o](d[o]);
            if (u = _(Yn, d, e, x)) {
                x.readyState = 1, l && h.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, u.send(y, n)
                } catch (T) {
                    if (!(2 > b)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function(t, e, n) {
            return re.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return re.get(t, void 0, e, "script")
        }
    }), re.each(["get", "post"], function(t, e) {
        re[e] = function(t, n, i, o) {
            return re.isFunction(n) && (o = o || i, i = n, n = void 0), re.ajax({
                url: t,
                type: e,
                dataType: o,
                data: n,
                success: i
            })
        }
    }), re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        re.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), re._evalUrl = function(t) {
        return re.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, re.fn.extend({
        wrapAll: function(t) {
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = re(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return this.each(re.isFunction(t) ? function(e) {
                re(this).wrapInner(t.call(this, e))
            } : function() {
                var e = re(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = re.isFunction(t);
            return this.each(function(n) {
                re(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }), re.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (t.style && t.style.display || re.css(t, "display"))
    }, re.expr.filters.visible = function(t) {
        return !re.expr.filters.hidden(t)
    };
    var Gn = /%20/g,
        Un = /\[\]$/,
        Qn = /\r?\n/g,
        Jn = /^(?:submit|button|image|reset|file)$/i,
        Kn = /^(?:input|select|textarea|keygen)/i;
    re.param = function(t, e) {
        var n, i = [],
            o = function(t, e) {
                e = re.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(t) || t.jquery && !re.isPlainObject(t)) re.each(t, function() {
            o(this.name, this.value)
        });
        else
            for (n in t) X(n, t[n], e, o);
        return i.join("&").replace(Gn, "+")
    }, re.fn.extend({
        serialize: function() {
            return re.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = re.prop(this, "elements");
                return t ? re.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !re(this).is(":disabled") && Kn.test(this.nodeName) && !Jn.test(t) && (this.checked || !Ae.test(t))
            }).map(function(t, e) {
                var n = re(this).val();
                return null == n ? null : re.isArray(n) ? re.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Qn, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Qn, "\r\n")
                }
            }).get()
        }
    }), re.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Y() || z()
    } : Y;
    var Zn = 0,
        ti = {},
        ei = re.ajaxSettings.xhr();
    t.ActiveXObject && re(t).on("unload", function() {
        for (var t in ti) ti[t](void 0, !0)
    }), ie.cors = !!ei && "withCredentials" in ei, ei = ie.ajax = !!ei, ei && re.ajaxTransport(function(t) {
        if (!t.crossDomain || ie.cors) {
            var e;
            return {
                send: function(n, i) {
                    var o, r = t.xhr(),
                        a = ++Zn;
                    if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) r[o] = t.xhrFields[o];
                    t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                    r.send(t.hasContent && t.data || null), e = function(n, o) {
                        var s, l, u;
                        if (e && (o || 4 === r.readyState))
                            if (delete ti[a], e = void 0, r.onreadystatechange = re.noop, o) 4 !== r.readyState && r.abort();
                            else {
                                u = {}, s = r.status, "string" == typeof r.responseText && (u.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (c) {
                                    l = ""
                                }
                                s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            } u && i(s, l, u, r.getAllResponseHeaders())
                    }, t.async ? 4 === r.readyState ? setTimeout(e) : r.onreadystatechange = ti[a] = e : e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }
    }), re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return re.globalEval(t), t
            }
        }
    }), re.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), re.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n = ge.head || re("head")[0] || ge.documentElement;
            return {
                send: function(i, o) {
                    e = ge.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || o(200, "success"))
                    }, n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var ni = [],
        ii = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = ni.pop() || re.expando + "_" + Ln++;
            return this[t] = !0, t
        }
    }), re.ajaxPrefilter("json jsonp", function(e, n, i) {
        var o, r, a, s = e.jsonp !== !1 && (ii.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ii.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = re.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(ii, "$1" + o) : e.jsonp !== !1 && (e.url += (Mn.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
            return a || re.error(o + " was not called"), a[0]
        }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
            a = arguments
        }, i.always(function() {
            t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, ni.push(o)), a && re.isFunction(r) && r(a[0]), a = r = void 0
        }), "script") : void 0
    }), re.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || ge;
        var i = pe.exec(t),
            o = !n && [];
        return i ? [e.createElement(i[1])] : (i = re.buildFragment([t], e, o), o && o.length && re(o).remove(), re.merge([], i.childNodes))
    };
    var oi = re.fn.load;
    re.fn.load = function(t, e, n) {
        if ("string" != typeof t && oi) return oi.apply(this, arguments);
        var i, o, r, a = this,
            s = t.indexOf(" ");
        return s >= 0 && (i = t.slice(s, t.length), t = t.slice(0, s)), re.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), a.length > 0 && re.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, a.html(i ? re("<div>").append(re.parseHTML(t)).find(i) : t)
        }).complete(n && function(t, e) {
            a.each(n, o || [t.responseText, e, t])
        }), this
    }, re.expr.filters.animated = function(t) {
        return re.grep(re.timers, function(e) {
            return t === e.elem
        }).length
    };
    var ri = t.document.documentElement;
    re.offset = {
        setOffset: function(t, e, n) {
            var i, o, r, a, s, l, u, c = re.css(t, "position"),
                d = re(t),
                p = {};
            "static" === c && (t.style.position = "relative"), s = d.offset(), r = re.css(t, "top"), l = re.css(t, "left"), u = ("absolute" === c || "fixed" === c) && re.inArray("auto", [r, l]) > -1, u ? (i = d.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), re.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (p.top = e.top - s.top + a), null != e.left && (p.left = e.left - s.left + o), "using" in e ? e.using.call(t, p) : d.css(p)
        }
    }, re.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                re.offset.setOffset(this, t, e)
            });
            var e, n, i = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                r = o && o.ownerDocument;
            if (r) return e = r.documentElement, re.contains(e, o) ? (typeof o.getBoundingClientRect !== Ne && (i = o.getBoundingClientRect()), n = V(r), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === re.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), re.nodeName(t[0], "html") || (n = t.offset()), n.top += re.css(t[0], "borderTopWidth", !0), n.left += re.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - re.css(i, "marginTop", !0),
                    left: e.left - n.left - re.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || ri; t && !re.nodeName(t, "html") && "static" === re.css(t, "position");) t = t.offsetParent;
                return t || ri
            })
        }
    }), re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = /Y/.test(e);
        re.fn[t] = function(i) {
            return De(this, function(t, i, o) {
                var r = V(t);
                return void 0 === o ? r ? e in r ? r[e] : r.document.documentElement[i] : t[i] : void(r ? r.scrollTo(n ? re(r).scrollLeft() : o, n ? o : re(r).scrollTop()) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), re.each(["top", "left"], function(t, e) {
        re.cssHooks[e] = k(ie.pixelPosition, function(t, n) {
            return n ? (n = nn(t, e), rn.test(n) ? re(t).position()[e] + "px" : n) : void 0
        })
    }), re.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        re.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            re.fn[i] = function(i, o) {
                var r = arguments.length && (n || "boolean" != typeof i),
                    a = n || (i === !0 || o === !0 ? "margin" : "border");
                return De(this, function(e, n, i) {
                    var o;
                    return re.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? re.css(e, n, a) : re.style(e, n, i, a)
                }, e, r ? i : void 0, r, null)
            }
        })
    }), re.fn.size = function() {
        return this.length
    }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return re
    });
    var ai = t.jQuery,
        si = t.$;
    return re.noConflict = function(e) {
        return t.$ === re && (t.$ = si), e && t.jQuery === re && (t.jQuery = ai), re
    }, typeof e === Ne && (t.jQuery = t.$ = re), re
}),
function(t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n, i = t(document);
    t.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        buttonClickSelector: "button[data-remote]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function(e) {
            var n = t('meta[name="csrf-token"]').attr("content");
            n && e.setRequestHeader("X-CSRF-Token", n)
        },
        refreshCSRFTokens: function() {
            var e = t("meta[name=csrf-token]").attr("content"),
                n = t("meta[name=csrf-param]").attr("content");
            t('form input[name="' + n + '"]').val(e)
        },
        fire: function(e, n, i) {
            var o = t.Event(n);
            return e.trigger(o, i), o.result !== !1
        },
        confirm: function(t) {
            return confirm(t)
        },
        ajax: function(e) {
            return t.ajax(e)
        },
        href: function(t) {
            return t.attr("href")
        },
        handleRemote: function(i) {
            var o, r, a, s, l, u, c, d;
            if (n.fire(i, "ajax:before")) {
                if (s = i.data("cross-domain"), l = s === e ? null : s, u = i.data("with-credentials") || null, c = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                    o = i.attr("method"), r = i.attr("action"), a = i.serializeArray();
                    var p = i.data("ujs:submit-button");
                    p && (a.push(p), i.data("ujs:submit-button", null))
                } else i.is(n.inputChangeSelector) ? (o = i.data("method"), r = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get", r = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (o = i.data("method"), r = n.href(i), a = i.data("params") || null);
                d = {
                    type: o || "GET",
                    data: a,
                    dataType: c,
                    beforeSend: function(t, o) {
                        return o.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), n.fire(i, "ajax:beforeSend", [t, o])
                    },
                    success: function(t, e, n) {
                        i.trigger("ajax:success", [t, e, n])
                    },
                    complete: function(t, e) {
                        i.trigger("ajax:complete", [t, e])
                    },
                    error: function(t, e, n) {
                        i.trigger("ajax:error", [t, e, n])
                    },
                    crossDomain: l
                }, u && (d.xhrFields = {
                    withCredentials: u
                }), r && (d.url = r);
                var h = n.ajax(d);
                return i.trigger("ajax:send", h), h
            }
            return !1
        },
        handleMethod: function(i) {
            var o = n.href(i),
                r = i.data("method"),
                a = i.attr("target"),
                s = t("meta[name=csrf-token]").attr("content"),
                l = t("meta[name=csrf-param]").attr("content"),
                u = t('<form method="post" action="' + o + '"></form>'),
                c = '<input name="_method" value="' + r + '" type="hidden" />';
            l !== e && s !== e && (c += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && u.attr("target", a), u.hide().append(c).appendTo("body"), u.submit()
        },
        disableFormElements: function(e) {
            e.find(n.disableSelector).each(function() {
                var e = t(this),
                    n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with", e[n]()), e[n](e.data("disable-with")), e.prop("disabled", !0)
            })
        },
        enableFormElements: function(e) {
            e.find(n.enableSelector).each(function() {
                var e = t(this),
                    n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") && e[n](e.data("ujs:enable-with")), e.prop("disabled", !1)
            })
        },
        allowAction: function(t) {
            var e, i = t.data("confirm"),
                o = !1;
            return i ? (n.fire(t, "confirm") && (o = n.confirm(i), e = n.fire(t, "confirm:complete", [o])), o && e) : !0
        },
        blankInputs: function(e, n, i) {
            var o, r, a = t(),
                s = n || "input,textarea",
                l = e.find(s);
            return l.each(function() {
                if (o = t(this), r = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : o.val(), !r == !i) {
                    if (o.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + o.attr("name") + '"]').length) return !0;
                    a = a.add(o)
                }
            }), a.length ? a : !1
        },
        nonBlankInputs: function(t, e) {
            return n.blankInputs(t, e, !0)
        },
        stopEverything: function(e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function(t) {
            t.data("ujs:enable-with", t.html()), t.html(t.data("disable-with")), t.bind("click.railsDisable", function(t) {
                return n.stopEverything(t)
            })
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
        }
    }, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, i) {
        t.crossDomain || n.CSRFProtection(i)
    }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
        n.enableElement(t(this))
    }), i.delegate(n.linkClickSelector, "click.rails", function(i) {
        var o = t(this),
            r = o.data("method"),
            a = o.data("params"),
            s = i.metaKey || i.ctrlKey;
        if (!n.allowAction(o)) return n.stopEverything(i);
        if (!s && o.is(n.linkDisableSelector) && n.disableElement(o), o.data("remote") !== e) {
            if (s && (!r || "GET" === r) && !a) return !0;
            var l = n.handleRemote(o);
            return l === !1 ? n.enableElement(o) : l.error(function() {
                n.enableElement(o)
            }), !1
        }
        return o.data("method") ? (n.handleMethod(o), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails", function(e) {
        var i = t(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.delegate(n.inputChangeSelector, "change.rails", function(e) {
        var i = t(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
        var o = t(this),
            r = o.data("remote") !== e,
            a = n.blankInputs(o, n.requiredInputSelector),
            s = n.nonBlankInputs(o, n.fileInputSelector);
        if (!n.allowAction(o)) return n.stopEverything(i);
        if (a && o.attr("novalidate") == e && n.fire(o, "ajax:aborted:required", [a])) return n.stopEverything(i);
        if (r) {
            if (s) {
                setTimeout(function() {
                    n.disableFormElements(o)
                }, 13);
                var l = n.fire(o, "ajax:aborted:file", [s]);
                return l || setTimeout(function() {
                    n.enableFormElements(o)
                }, 13), l
            }
            return n.handleRemote(o), !1
        }
        setTimeout(function() {
            n.disableFormElements(o)
        }, 13)
    }), i.delegate(n.formInputClickSelector, "click.rails", function(e) {
        var i = t(this);
        if (!n.allowAction(i)) return n.stopEverything(e);
        var o = i.attr("name"),
            r = o ? {
                name: o,
                value: i.val()
            } : null;
        i.closest("form").data("ujs:submit-button", r)
    }), i.delegate(n.formSubmitSelector, "ajax:beforeSend.rails", function(e) {
        this == e.target && n.disableFormElements(t(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(e) {
        this == e.target && n.enableFormElements(t(this))
    }), t(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery),
function(t) {
    t.fn.fitText = function(e, n) {
        var i = e || 1,
            o = t.extend({
                minFontSize: Number.NEGATIVE_INFINITY,
                maxFontSize: Number.POSITIVE_INFINITY
            }, n);
        return this.each(function() {
            var e = t(this),
                n = function() {
                    e.css("font-size", Math.max(Math.min(e.width() / (10 * i), parseFloat(o.maxFontSize)), parseFloat(o.minFontSize)))
                };
            n(), t(window).on("resize.fittext orientationchange.fittext", n)
        })
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        e && 3 === e.which || (t(o).remove(), t(r).each(function() {
            var i = n(t(this)),
                o = {
                    relatedTarget: this
                };
            i.hasClass("open") && (i.trigger(e = t.Event("hide.bs.dropdown", o)), e.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", o))
        }))
    }

    function n(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function i(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new a(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var o = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        a = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    a.VERSION = "3.2.0", a.prototype.toggle = function(i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var r = n(o),
                a = r.hasClass("open");
            if (e(), !a) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var s = {
                    relatedTarget: this
                };
                if (r.trigger(i = t.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
                o.trigger("focus"), r.toggleClass("open").trigger("shown.bs.dropdown", s)
            }
            return !1
        }
    }, a.prototype.keydown = function(e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var i = t(this);
            if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = n(i),
                    a = o.hasClass("open");
                if (!a || a && 27 == e.keyCode) return 27 == e.which && o.find(r).trigger("focus"), i.trigger("click");
                var s = " li:not(.divider):visible a",
                    l = o.find('[role="menu"]' + s + ', [role="listbox"]' + s);
                if (l.length) {
                    var u = l.index(l.filter(":focus"));
                    38 == e.keyCode && u > 0 && u--, 40 == e.keyCode && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var s = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = s, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, a.prototype.toggle).on("keydown.bs.dropdown.data-api", r + ', [role="menu"], [role="listbox"]', a.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.2.0", i.prototype.close = function(e) {
        function n() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var i = t(this),
            o = i.attr("data-target");
        o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t(o);
        e && e.preventDefault(), r.length || (r = i.hasClass("alert") ? i : i.parent()), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var o = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.collapse"),
                r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !o && r.toggle && "show" == e && (e = !e), o || i.data("bs.collapse", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var n = t.Event("show.bs.collapse");
            if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                var i = this.$parent && this.$parent.find("> .panel > .in");
                if (i && i.length) {
                    var o = i.data("bs.collapse");
                    if (o && o.transitioning) return;
                    e.call(i, "hide"), o || i.data("bs.collapse", null)
                }
                var r = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[r](0), this.transitioning = 1;
                var a = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition) return a.call(this);
                var s = t.camelCase(["scroll", r].join("-"));
                this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(350)[r](this.$element[0][s])
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var i = t.fn.collapse;
    t.fn.collapse = e, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = i, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var i, o = t(this),
            r = o.attr("data-target") || n.preventDefault() || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""),
            a = t(r),
            s = a.data("bs.collapse"),
            l = s ? "toggle" : o.data(),
            u = o.attr("data-parent"),
            c = u && t(u);
        s && s.transitioning || (c && c.find('[data-toggle="collapse"][data-parent="' + u + '"]').not(o).addClass("collapsed"), o[a.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), e.call(a, l)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.affix"),
                r = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.2.0", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = t(document).height(),
                i = this.$target.scrollTop(),
                o = this.$element.offset(),
                r = this.options.offset,
                a = r.top,
                s = r.bottom;
            "object" != typeof r && (s = a = r), "function" == typeof a && (a = r.top(this.$element)), "function" == typeof s && (s = r.bottom(this.$element));
            var l = null != this.unpin && i + this.unpin <= o.top ? !1 : null != s && o.top + this.$element.height() >= e - s ? "bottom" : null != a && a >= i ? "top" : !1;
            if (this.affixed !== l) {
                null != this.unpin && this.$element.css("top", "");
                var u = "affix" + (l ? "-" + l : ""),
                    c = t.Event(u + ".bs.affix");
                this.$element.trigger(c), c.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(u).trigger(t.Event(u.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                    top: e - this.$element.height() - s
                }))
            }
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tooltip"),
                r = "object" == typeof e && e;
            (o || "destroy" != e) && (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(e, n, i) {
        this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var a = o[r];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show()
    }, n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(document.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var i = this,
                o = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), o.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && o.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                s = /\s?auto?\s?/i,
                l = s.test(a);
            l && (a = a.replace(s, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
            var u = this.getPosition(),
                c = o[0].offsetWidth,
                d = o[0].offsetHeight;
            if (l) {
                var p = a,
                    h = this.$element.parent(),
                    f = this.getPosition(h);
                a = "bottom" == a && u.top + u.height + d - f.scroll > f.height ? "top" : "top" == a && u.top - f.scroll - d < 0 ? "bottom" : "right" == a && u.right + c > f.width ? "left" : "left" == a && u.left - c < f.left ? "right" : a, o.removeClass(p).addClass(a)
            }
            var g = this.getCalculatedOffset(a, u, c, d);
            this.applyPlacement(g, a);
            var m = function() {
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(150) : m()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            r = i[0].offsetHeight,
            a = parseInt(i.css("margin-top"), 10),
            s = parseInt(i.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top = e.top + a, e.left = e.left + s, t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            u = i[0].offsetHeight;
        "top" == n && u != r && (e.top = e.top + r - u);
        var c = this.getViewportAdjustedDelta(n, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var d = c.left ? 2 * c.left - o + l : 2 * c.top - r + u,
            p = c.left ? "left" : "top",
            h = c.left ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(d, i[0][h], p)
    }, n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function() {
        function e() {
            "in" != n.hoverState && i.detach(), n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this,
            i = this.tip(),
            o = t.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName;
        return t.extend({}, "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null, {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
            width: i ? t(window).width() : e.outerWidth(),
            height: i ? t(window).height() : e.outerHeight()
        }, i ? {
            top: 0,
            left: 0
        } : e.offset())
    }, n.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var s = e.top - r - a.scroll,
                l = e.top + r - a.scroll + i;
            s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l)
        } else {
            var u = e.left - r,
                c = e.left + r + n;
            u < a.left ? o.left = a.left - u : c > a.width && (o.left = a.left + a.width - c)
        }
        return o
    }, n.prototype.getTitle = function() {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.popover"),
                r = "object" == typeof e && e;
            (o || "destroy" != e) && (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.2.0", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, n.prototype.tip = function() {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery),
function() {
    window.CTV || (window.CTV = {}), CTV.Chart || (CTV.Chart = {}), CTV.Chart.PagesFactory = function() {
        function t(t) {
            null == t && (t = {}), this.song = t.song, this.config = t.config, this.timeManager = new CTV.Chart.TimeManager(this.song)
        }
        return t.prototype.apply = function(t) {
            return t.find(".tile").length ? this.applyAll(t) : t.html(this.html())
        }, t.prototype.html = function() {
            var t, e, n, i, o, r, a, s, l, u, c;
            for (l = this.createSvgDefs(), i = this.song.pages[this.song.pages.length - 1].pageNumber, s = c = 0; i >= 0 ? i >= c : c >= i; s = i >= 0 ? ++c : --c) u = this.song.pages.filter(function(t) {
                return t.pageNumber === s
            }), a = this.song.pages.filter(function(t) {
                return t.pageNumber === s + 1
            }), t = u.length > 0 ? u[0] : null, r = a.length > 0 ? a[0] : null, t ? l += this.createPageTile(t, r) : (o = s % 2, e = "down" === this.song.startDirection ? "down" : "up", n = "down" === this.song.startDirection ? "up" : "down", l += this.createPageTile({
                pageNumber: s,
                direction: 0 === o ? e : n,
                notes: []
            }, r));
            return l
        }, t.prototype.applyAll = function(t) {
            var e, n, i, o, r, a, s, l, u, c, d, p, h;
            for (e = t.find(".js-tile-col"), i = e.attr("class").match(/col-xs-(\d+)/)[0], e.removeClass(i).addClass("col-xs-" + this.config.pageWidth), a = this.song.pages[this.song.pages.length - 1].pageNumber, h = [], c = p = 0; a >= 0 ? a >= p : p >= a; c = a >= 0 ? ++p : --p) d = this.song.pages.filter(function(t) {
                return t.pageNumber === c
            }), u = this.song.pages.filter(function(t) {
                return t.pageNumber === c + 1
            }), n = d.length > 0 ? d[0] : null, l = u.length > 0 ? u[0] : null, n ? h.push(e.eq(c).html(this.createPageBody(n, l))) : (s = c % 2, o = "down" === this.song.startDirection ? "down" : "up", r = "down" === this.song.startDirection ? "up" : "down", h.push(e.eq(c).html(this.createPageBody({
                pageNumber: c,
                direction: 0 === s ? o : r,
                notes: []
            }, l))));
            return h
        }, t.prototype.createSvgDefs = function() {
            return ["<svg style='position:absolute;width:0;height:0;'>", this.defsForPage(), "</svg>"].join("")
        }, t.prototype.createPageTile = function(t, e) {
            return ["<div class='js-tile-col col-xs-" + this.config.pageWidth + "' id='page-" + (t.pageNumber + 1) + "'>", this.createPageBody(t, e), "</div>"].join("")
        }, t.prototype.createPageBody = function(t, e) {
            return ["<div class='tile'><div class='body'><svg viewBox='0 0 " + this.song.displayWidth + " " + this.song.displayHeight + "'>", this.rect("0", "0", "100%", "100%", "url('#gradient-bg')"), this.rect("0", "0", "100%", this.song.fieldTop, "rgba(0,0,0,0.08)"), this.rect("0", this.song.fieldBottom, "100%", this.song.displayHeight - this.song.fieldBottom, "rgba(0,0,0,0.08)"), "<g opacity=0.2>", this.config.onion ? this.notesForPage(e) : void 0, "</g>", this.notesForPage(t), this.linesForPage(t), this.infosForPage(t), "</svg></div></div>"].join("")
        }, t.prototype.notesForPage = function(t) {
            var e, n, i, o, r, a, s;
            if (t) {
                for (i = [], s = t.notes, r = 0, a = s.length; a > r; r++) n = s[r], o = n.type, e = t.direction, o === CTV.Chart.Const.Note.Click && i.push(this.createNormalNoteElement(n, e)), o === CTV.Chart.Const.Note.Hold && i.push(this.createLongNoteElement(n, e)), o === CTV.Chart.Const.Note.Drag && i.push(this.createSlideNoteElement(n, e));
                return i.sort("up" === t.direction ? function(t, e) {
                    return t.positionY - e.positionY
                } : function(t, e) {
                    return e.positionY - t.positionY
                }), i.map(function(t) {
                    return t.element
                }).join("")
            }
        }, t.prototype.linesForPage = function(t) {
            var e, n, i, o, r;
            for (this.timeManager.setCurrentPage(t.pageNumber), e = this.timeManager.horizontalLinePositions({
                    quarter: !0,
                    eighth: !0,
                    sixteenth: !0
                }), i = [], o = 0, r = e.length; r > o; o++) n = e[o], n.beat === CTV.Chart.Const.Beat.Sixteenth && i.push(this.rect(0, n.position - 1, "100%", 2, "rgba(0, 0, 0, 0.2)")), n.beat === CTV.Chart.Const.Beat.Eighth && i.push(this.rect(0, n.position - 1, "100%", 2, "rgba(0, 0, 0, 0.5)")), n.beat === CTV.Chart.Const.Beat.Quarter && i.push(this.rect(0, n.position - 2, "100%", 4, "rgba(255, 0, 0, 0.5)"));
            return i.join("")
        }, t.prototype.infosForPage = function(t) {
            var e, n, i;
            return i = this.song.fieldTop, n = this.song.fieldBottom, e = "up" === t.direction ? ["<path d='", "M 0 " + i, "L 50 " + (i + 80), "L 20 " + (i + 80), "L 20 " + n, "L 0 " + n, " z' fill=\"url('#gradient-info-arrow-up')\" />"].join("") : ["<path d='", "M 0 " + i, "L 20 " + i, "L 20 " + (n - 80), "L 50 " + (n - 80), "L 0 " + n, " z' fill=\"url('#gradient-info-arrow-down')\" />"].join(""), [e, this.text(t.pageNumber + 1, 30, 70, 50, "#777")].join("")
        }, t.prototype.createNormalNoteElement = function(t, e) {
            var n, i;
            return n = "down" === e ? this.circle(t.positionX, t.positionY, 75, "url(#gradient-note-normal-down)") : this.circle(t.positionX, t.positionY, 75, "url(#gradient-note-normal-up)"), i = {
                positionY: t.positionY,
                element: n
            }
        }, t.prototype.createLongNoteElement = function(t, e) {
            var n, i, o, r, a, s;
            return "down" === e ? (r = t.startY, o = t.endY, a = -10, s = 10) : (r = t.endY, o = t.startY, a = 10, s = -10), n = [this.rect(t.startX - 26, r, 52, o - r, "url(#gradient-note-long-tail-base-" + e + ")"), this.rect(t.startX - 13, r, 26, o - r, "url(#gradient-note-long-tail-color-" + e + ")"), this.rect(t.startX - 30, r, 2, o - r, "url(#gradient-note-long-tail-line-" + e + ")"), this.rect(t.startX + 28, r, 2, o - r, "url(#gradient-note-long-tail-line-" + e + ")"), this.circle(t.startX, t.startY, 62, "url(#gradient-note-long-start-color-" + e + ")"), this.circle(t.startX, t.startY, 90, "url(#gradient-note-long-start-base)"), this.circle(t.startX, t.startY + a, 25, "url(#gradient-note-long-start-white)"), this.circle(t.startX, t.startY + s, 30, "url(#gradient-note-long-start-white)")].join(""), i = {
                positionY: t.startY,
                element: n
            }
        }, t.prototype.createSlideNoteElement = function(t, e) {
            var n, i, o, r, a, s, l, u, c, d, p, h, f;
            for (t.subs.sort("down" === e ? function(t, e) {
                    return t.positionY - e.positionY
                } : function(t, e) {
                    return e.positionY - t.positionY
                }), n = t.startX, i = t.startY, r = [], h = t.subs, u = 0, d = h.length; d > u; u++) s = h[u], r.push(this.createSlideNoteLineElement(n, i, s.positionX, s.positionY)), n = s.positionX, i = s.positionY;
            for (r.push(this.createSlideNoteLineElement(n, i, t.endX, t.endY)), l = [], f = t.subs, c = 0, p = f.length; p > c; c++) s = f[c], l.push(this.circle(s.positionX, s.positionY, 35, "url(#gradient-note-slide-sub)"));
            return o = [r.join(""), this.circle(t.endX, t.endY, 35, "url(#gradient-note-slide-sub)"), l.join(""), this.circle(t.startX, t.startY, 75, "url(#gradient-note-slide-start)")].join(""), a = {
                positionY: t.startY,
                element: o
            }
        }, t.prototype.createSlideNoteLineElement = function(t, e, n, i) {
            var o, r, a, s;
            return a = t - n, s = e - i, r = Math.floor(Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2))), o = Math.atan2(a, -s) / Math.PI * 180, ["<g transform='rotate(" + o + ", " + t + ", " + e + ")'>", this.rect(t - 10, e, 20, r, "url(#gradient-note-slide-line)"), "</g>"].join("")
        }, t.prototype.defsForPage = function() {
            return ["<defs>", this.linearGradient("gradient-bg", "0", "0", "100%", "0"), this.stop("0%", "#000", "0.08"), this.stop("20%", "#000", "0.03"), this.stop("50%", "#000", "0.01"), this.stop("80%", "#000", "0.03"), this.stop("100%", "#000", "0.08"), this.linearGradient(this.end), this.linearGradient("gradient-info-arrow-down", "0", "0", "0", "100%"), this.stop("0%", "#dbc100", "0.3"), this.stop("100%", "#dbc100", "1"), this.linearGradient(this.end), this.linearGradient("gradient-info-arrow-up", "0", "0", "0", "100%"), this.stop("0%", "#289bfd", "1"), this.stop("100%", "#289bfd", "0.3"), this.linearGradient(this.end), this.radialGradient("gradient-note-normal-down", "50%", "50%", "50%", "50%", "50%"), this.stop("35%", "#000", "1"), this.stop("45%", "#3e381b", "1"), this.stop("52%", "#767c27", "1"), this.stop("58%", "#e3ff3f", "1"), this.stop("62%", "#fff", "1"), this.stop("75%", "#fff", "1"), this.stop("77%", "#000", "0.6"), this.stop("95%", "#000", "0.05"), this.stop("100%", "#000", "0"), this.radialGradient(this.end), this.radialGradient("gradient-note-normal-up", "50%", "50%", "50%", "50%", "50%"), this.stop("35%", "#000", "1"), this.stop("45%", "#342226", "1"), this.stop("52%", "#7a4a6f", "1"), this.stop("58%", "#e16aff", "1"), this.stop("62%", "#fff", "1"), this.stop("75%", "#fff", "1"), this.stop("77%", "#000", "0.6"), this.stop("95%", "#000", "0.05"), this.stop("100%", "#000", "0"), this.radialGradient(this.end), this.radialGradient("gradient-note-long-start-base", "50%", "50%", "50%", "50%", "50%"), this.stop("38%", "#000", "1"), this.stop("40%", "#fff", "1"), this.stop("42%", "#000", "1"), this.stop("53%", "#000", "0"), this.stop("66%", "#fff", "0"), this.stop("70%", "#000", "1"), this.stop("75%", "#000", "1"), this.stop("79%", "#000", "0.5"), this.stop("95%", "#000", "0.05"), this.stop("100%", "#000", "0"), this.radialGradient(this.end), this.linearGradient("gradient-note-long-start-color-down", "0", "0", "0", "100%"), this.stop("0%", "#aa8024", "1"), this.stop("100%", "#352bd9", "1"), this.linearGradient(this.end), this.linearGradient("gradient-note-long-start-color-up", "0", "0", "0", "100%"), this.stop("0%", "#352bd9", "1"), this.stop("100%", "#aa8024", "1"), this.linearGradient(this.end), this.radialGradient("gradient-note-long-start-white", "50%", "50%", "50%", "50%", "50%"), this.stop("54%", "#fff", "1"), this.stop("60%", "#909090", "0.9"), this.stop("73%", "#909090", "0.7"), this.stop("88%", "#b1b1b1", "0.3"), this.stop("100%", "#fff", "0"), this.radialGradient(this.end), this.linearGradient("gradient-note-long-tail-base-down", "0", "0", "0", "100%"), this.stop("67%", "#000", "1"), this.stop("97%", "#000", "0"), this.linearGradient(this.end), this.linearGradient("gradient-note-long-tail-base-up", "0", "0", "0", "100%"), this.stop("3%", "#000", "0"), this.stop("33%", "#000", "1"), this.linearGradient(this.end), this.linearGradient("gradient-note-long-tail-color-down", "0", "0", "0", "100%"), this.stop("0%", "#56d400", "1"), this.stop("31%", "#ffe300", "1"), this.stop("55%", "#fff", "0.9"), this.stop("100%", "#fff", "0"), this.linearGradient(this.end), this.linearGradient("gradient-note-long-tail-color-up", "0", "0", "0", "100%"), this.stop("0%", "#fff", "0"), this.stop("45%", "#fff", "0.9"), this.stop("69%", "#ffe300", "1"), this.stop("100%", "#56d400", "1"), this.linearGradient(this.end), this.linearGradient("gradient-note-long-tail-line-down", "0", "0", "0", "100%"), this.stop("85%", "#000", "1"), this.stop("100%", "#000", "0"), this.linearGradient(this.end), this.linearGradient("gradient-note-long-tail-line-up", "0", "0", "0", "100%"), this.stop("0%", "#000", "0"), this.stop("15%", "#000", "1"), this.linearGradient(this.end), this.radialGradient("gradient-note-slide-start", "50%", "50%", "50%", "50%", "50%"), this.stop("18%", "#fff", "1"), this.stop("34%", "#000", "1"), this.stop("36%", "#fff", "1"), this.stop("38%", "#000", "1"), this.stop("58%", "#a2ff6a", "1"), this.stop("69%", "#b7ff94", "1"), this.stop("73%", "#000", "1"), this.stop("75%", "#000", "0.6"), this.stop("90%", "#000", "0.05"), this.stop("95%", "#000", "0"), this.radialGradient(this.end), this.radialGradient("gradient-note-slide-sub", "50%", "50%", "50%", "50%", "50%"), this.stop("41%", "#000", "1"), this.stop("56%", "#e5c5b2", "1"), this.stop("61%", "#fff", "1"), this.stop("63%", "#000", "1"), this.stop("80%", "#000", "0.5"), this.stop("100%", "#000", "0"), this.radialGradient(this.end), this.linearGradient("gradient-note-slide-line", "0", "0", "100%", "0"), this.stop("0%", "#000", "0"), this.stop("50%", "#000", "1"), this.stop("100%", "#000", "0"), this.linearGradient(this.end), "</defs>"].join("")
        }, t.prototype.end = function() {
            return "end"
        }, t.prototype.rect = function(t, e, n, i, o, r) {
            return null == t && (t = "0"), null == e && (e = "0"), null == n && (n = "0"), null == i && (i = "0"), null == o && (o = ""), null == r && (r = "1"), "<rect x='" + t + "' y='" + e + "' width='" + n + "' height='" + i + "' fill=\"" + o + '" opacity="' + r + '" />'
        }, t.prototype.circle = function(t, e, n, i, o) {
            return null == t && (t = "0"), null == e && (e = "0"), null == n && (n = "0"), null == i && (i = ""), null == o && (o = "1"), "<circle cx='" + t + "' cy='" + e + "' r='" + n + "' fill=\"" + i + '" opacity="' + o + '" />'
        }, t.prototype.text = function(t, e, n, i, o) {
            return null == t && (t = ""), null == e && (e = 0), null == n && (n = 0), null == i && (i = 30), null == o && (o = "#000"), "<text x='" + e + "' y='" + n + "' font-size='" + i + "' fill=\"" + o + "\" font-family='sans-serif' font-weight='bold'>" + t + "</text>"
        }, t.prototype.linearGradient = function(t, e, n, i, o) {
            return null == t && (t = ""), null == e && (e = "0"), null == n && (n = "0"), null == i && (i = "0"), null == o && (o = "0"), t === this.end ? "</linearGradient>" : "<linearGradient x1='" + e + "' y1='" + n + "' x2='" + i + "' y2='" + o + "' id='" + t + "'>"
        }, t.prototype.radialGradient = function(t, e, n, i, o, r) {
            return null == t && (t = ""), null == e && (e = "50%"), null == n && (n = "50%"), null == i && (i = "50%"), null == o && (o = "50%"), null == r && (r = "50%"), t === this.end ? "</radialGradient>" : "<radialGradient cx='" + e + "' cy='" + n + "' r='" + i + "' fx='" + o + "' fy='" + r + "' id='" + t + "'>"
        }, t.prototype.stop = function(t, e, n) {
            return null == t && (t = ""), null == e && (e = ""), null == n && (n = ""), "<stop offset='" + t + "' stop-color='" + e + "' stop-opacity='" + n + "' />"
        }, t
    }()
}.call(this),
    function() {
        window.CTV || (window.CTV = {}), CTV.Chart || (CTV.Chart = {}), CTV.Chart.TimeManager = function() {
            function t(t) {
                this.song = t, this.setCurrentPage(0)
            }
            return t.prototype.setCurrentTime = function(t) {
                return null == t && (t = 0), this._currentTime = 1 * t
            }, t.prototype.setCurrentPage = function(t) {
                return null == t && (t = 0), this._currentTime = this.song.timePerPage * t
            }, t.prototype.currentTime = function() {
                return this._currentTime
            }, t.prototype.currentPage = function() {
                return Math.round(this._currentTime / this.song.timePerPage)
            }, t.prototype.currentFloatPage = function() {
                return this._currentTime / this.song.timePerPage
            }, t.prototype.currentDirection = function() {
                var t, e;
                return e = "down" === this.song.startDirection ? 0 : 1, t = this.currentPage() % 2 === e ? "down" : "up"
            }, t.prototype.horizontalLinePositions = function(t) {
                var e, n, i, o, r, a, s, l, u, c, d, p, h, f, g, m, y, v, b, w;
                null == t && (t = {}), o = 6e4 / this.song.bpm, p = (this.currentPage() * this.song.timePerPage - 1 * this.song.measureStartTime) / o, d = ((this.currentPage() + 1) * this.song.timePerPage - 1 * this.song.measureStartTime) / o, y = Math.floor(p), u = Math.ceil(d), r = [], a = {}, l = function() {
                    return function(t, e, n) {
                        var i, o, r, a, s;
                        for (i = e - t, r = [], o = a = 0, s = Math.ceil(i * n); s >= 0 ? s > a : a > s; o = s >= 0 ? ++a : --a) r.push(t + o / n);
                        return r
                    }
                }(this), t.quarter && (r.quarter = {
                    beats: l(y, u, 1),
                    beat: CTV.Chart.Const.Beat.Quarter
                }), t.eighth && (r.eighth = {
                    beats: l(y, u, 2),
                    beat: CTV.Chart.Const.Beat.Eighth
                }), t.sixteenth && (r.sixteenth = {
                    beats: l(y, u, 4),
                    beat: CTV.Chart.Const.Beat.Sixteenth
                }), g = [];
                for (m in r)
                    for (n = r[m], w = n.beats, v = 0, b = w.length; b > v; v++) e = w[v], e >= p && d >= e && (s = e - p, i = d - p, c = this.song.fieldBottom - this.song.fieldTop, f = c / i * s, h = "down" === this.currentDirection() ? this.song.fieldTop + f : this.song.fieldBottom - f, g.push({
                        position: Math.round(h),
                        beatNumber: e,
                        beat: n.beat
                    }));
                return g
            }, t
        }()
    }.call(this),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        window.CTV || (window.CTV = {}), CTV.Chart || (CTV.Chart = {}), (t = CTV.Chart).Const || (t.Const = {
            Note: {
                Click: 1,
                Hold: 2,
                Drag: 3
            },
            Beat: {
                Quarter: 1,
                Eighth: 2,
                Sixteenth: 3
            },
            Page: {
                Widths: [2, 3, 4, 6, 12],
                DefaultWidth: {
                    Xs: 6,
                    Sm: 4,
                    Md: 3,
                    Lg: 3
                }
            },
            LocalStorageKeyConfig: "net.laishin.ctviewer.chart.config"
        }), CTV.Chart.Viewer = function() {
            function t(t) {
                null == t && (t = {}), this.onClickSongControl = e(this.onClickSongControl, this), this.jsonPath = t.jsonPath, this.$container = $(".js-song-chart-container"), this.song = null, this.initializeConfig(), $(".js-song-control").on("click", this.onClickSongControl), this.load()
            }
            return t.prototype.load = function() {
                return $.ajax({
                    url: this.jsonPath,
                    success: function(t) {
                        return function(e) {
                            return t.song = e, t.$container.find(".js-song-chart-loading").hide(), t.loadConfig(), t.updateInfos(), t.updateControls(), t.updatePages()
                        }
                    }(this),
                    error: function(t) {
                        return function() {
                            return t.$container.find(".js-song-chart-loading").hide(), alert("Failed to load the music data. Sorry to trouble you, but please try again later.")
                        }
                    }(this)
                })
            }, t.prototype.initializeConfig = function() {
                var t, e;
                return e = $(document).width(), t = 768 > e ? CTV.Chart.Const.Page.DefaultWidth.Xs : 992 > e ? CTV.Chart.Const.Page.DefaultWidth.Sm : 1200 > e ? CTV.Chart.Const.Page.DefaultWidth.Md : CTV.Chart.Const.Page.DefaultWidth.Lg, this.config = {
                    pageWidth: t,
                    onion: !0
                }
            }, t.prototype.loadConfig = function() {
                var t, e, n;
                if (n = localStorage.getItem(CTV.Chart.Const.LocalStorageKeyConfig)) try {
                    if (t = JSON.parse(n)) return this.config = t
                } catch (i) {
                    return e = i, console.log(e)
                }
            }, t.prototype.saveConfig = function() {
                var t;
                return t = JSON.stringify(this.config), localStorage.setItem(CTV.Chart.Const.LocalStorageKeyConfig, t)
            }, t.prototype.updateInfos = function() {
                return !this.song, $(".js-song-details-total").text(this.song.totalNotesCount), $(".js-song-details-clicks").text(this.song.normalNotesCount), $(".js-song-details-holds").text(this.song.longNotesCount), $(".js-song-details-drags").text(this.song.slideNotesCount)
            }, t.prototype.updateControls = function() {
                var t, e, n;
                if (this.config && (n = CTV.Chart.Const.Page.Widths, e = n.indexOf(this.config.pageWidth), !(0 > e))) return t = $(".js-song-control-container"), this.config.onion ? (t.find(".js-song-control-onion-inactive").css("display", "none"), t.find(".js-song-control-onion-active").css("display", "inline-block")) : (t.find(".js-song-control-onion-inactive").css("display", "inline-block"), t.find(".js-song-control-onion-active").css("display", "none")), t.find(".js-song-control-zoom-out-inactive").css("display", "none"), t.find(".js-song-control-zoom-out-active").css("display", "inline-block"), t.find(".js-song-control-zoom-in-inactive").css("display", "none"), t.find(".js-song-control-zoom-in-active").css("display", "inline-block"), 0 === e ? (t.find(".js-song-control-zoom-out-inactive").css("display", "inline-block"), t.find(".js-song-control-zoom-out-active").css("display", "none")) : e === n.length - 1 ? (t.find(".js-song-control-zoom-in-inactive").css("display", "inline-block"), t.find(".js-song-control-zoom-in-active").css("display", "none")) : void 0
            }, t.prototype.updatePages = function() {
                var t;
                if (this.song) return t = new CTV.Chart.PagesFactory({
                    song: this.song,
                    config: this.config
                }), t.apply(this.$container)
            }, t.prototype.onClickSongControl = function(t) {
                var e, n, i;
                if (t.preventDefault(), this.config && (e = $(t.currentTarget), i = CTV.Chart.Const.Page.Widths, n = i.indexOf(this.config.pageWidth), !(0 > n))) {
                    switch (e.attr("data-control")) {
                        case "toggle_onion":
                            this.config.onion = !this.config.onion;
                            break;
                        case "zoom_in":
                            n < i.length - 1 && (this.config.pageWidth = i[n + 1]);
                            break;
                        case "zoom_out":
                            n > 0 && (this.config.pageWidth = i[n - 1])
                    }
                    return this.saveConfig(), this.updateControls(), this.updatePages()
                }
            }, t
        }()
    }.call(this),
    function() {
        var t = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        window.CTV || (window.CTV = {}), CTV.Player || (CTV.Player = {}), CTV.Player.Viewer = function() {
            function e(e) {
                null == e && (e = {}), this.playClickSound = t(this.playClickSound, this), this.playBellSound = t(this.playBellSound, this), this.setElementToTop = t(this.setElementToTop, this), this.updatePageElements = t(this.updatePageElements, this), this.onChangePageSlider = t(this.onChangePageSlider, this), this.onClickForwardButton = t(this.onClickForwardButton, this), this.onClickBackwardButton = t(this.onClickBackwardButton, this), this.onClickPlayButton = t(this.onClickPlayButton, this), this.update = t(this.update, this), this.jsonPath = e.jsonPath, this.manifest = e.manifest, this.timeManager = null, this.song = null, this.stage = null, this.timeline = null, this.stats = null, this.$slider = null, this.preloader = null, this.timelineStartTime = 0, this.startPage = 0, this.lastPage = 0, this.line = null, this.gradient = null, this.pageNumber = null, this.clickDownNotes = [], this.clickUpNotes = [], this.holdNotes = [], this.holdNoteTails = [], this.dragNoteHeads = [], this.dragNoteSubs = [], this.dragNoteLines = [], this.isMobile = !1, this.isDebugMode = !1, this.loadJson()
            }
            return e.prototype.loadJson = function() {
                return $.ajax({
                    url: this.jsonPath,
                    success: function(t) {
                        return function(e) {
                            return t.song = e, t.loadAssets()
                        }
                    }(this),
                    error: function() {
                        return function() {
                            return alert("Failed to load the music data. Sorry to trouble you, but please try again later.")
                        }
                    }(this)
                })
            }, e.prototype.loadAssets = function() {
                var t;
                return this.preloader = new createjs.LoadQueue(!1), this.preloader.installPlugin(createjs.Sound), t = function(t) {
                    return function() {
                        return t.preloader.removeEventListener("complete"), t.initialize()
                    }
                }(this), this.preloader.addEventListener("complete", t), this.preloader.loadManifest(this.manifest)
            }, e.prototype.initialize = function() {
                var t, e, n;
                return this.timeManager = new CTV.Chart.TimeManager(this.song), this.timeManager.setCurrentTime(this.song.barStartTime), this.timelineStartTime = this.timeManager.currentPage() * this.song.timePerPage, this.startPage = this.timeManager.currentPage(), this.lastPage = this.song.pages[this.song.pages.length - 1].pageNumber, this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), e = $(".js-player-stage"), this.isDebugMode && (this.stats = new Stats, this.stats.setMode(0), e.prepend(this.stats.domElement)), n = e.find("canvas")[0], this.stage = new createjs.Stage(n), this.createElements(), this.createTimeline(), createjs.Ticker.setFPS(60), createjs.Ticker.addEventListener("tick", this.update), this.stage.update(), t = e.find(".js-controls"), t.find(".js-player-control-play").on("click", this.onClickPlayButton), t.find(".js-player-control-prev").on("click", this.onClickBackwardButton), t.find(".js-player-control-next").on("click", this.onClickForwardButton), this.$slider = t.find(".js-player-control-slider").on("change", this.onChangePageSlider), this.$slider.attr("min", this.startPage).attr("max", this.lastPage), this.updatePageElements(), t.show()
            }, e.prototype.update = function() {
                return this.stage.update(), this.isDebugMode ? this.stats.update() : void 0
            }, e.prototype.onClickPlayButton = function(t) {
                var e;
                return t.preventDefault(), this.isMobile && createjs.Sound.play("click", .1), e = $(t.currentTarget), this.timeline._paused ? (e.find(".glyphicon-play").hide(), e.find(".glyphicon-pause").show(), this.timeline.setPaused(!1)) : (e.find(".glyphicon-play").show(), e.find(".glyphicon-pause").hide(), this.timeline.setPaused(!0))
            }, e.prototype.onClickBackwardButton = function(t) {
                var e;
                return t.preventDefault(), this.timeManager.setCurrentTime(this.timeline.position + this.timelineStartTime), e = this.timeManager.currentPage(), e > this.startPage && this.timeline.setPosition((e - 1) * this.song.timePerPage - this.timelineStartTime), this.updatePageElements()
            }, e.prototype.onClickForwardButton = function(t) {
                var e;
                return t.preventDefault(), this.timeManager.setCurrentTime(this.timeline.position + this.timelineStartTime), e = this.timeManager.currentPage(), e < this.lastPage && this.timeline.setPosition((e + 1) * this.song.timePerPage - this.timelineStartTime), this.updatePageElements()
            }, e.prototype.onChangePageSlider = function(t) {
                var e;
                return t.preventDefault(), e = this.$slider.val(), this.timeline.setPosition(e * this.song.timePerPage - this.timelineStartTime), this.updatePageElements(!1)
            }, e.prototype.createElements = function() {
                var t;
                return this.gradient = new createjs.Shape, this.stage.addChild(this.gradient), this.gradient.graphics.beginLinearGradientFill(["#bbb", "#eee", "#fff", "#eee", "#bbb"], [0, .25, .5, .75, 1], 0, 0, 960, 0).drawRect(0, 0, 960, 720), this.gradient.set({
                    x: 480,
                    regX: 480
                }), this.gradient.cache(0, 0, 960, 720), t = new createjs.Shape, this.stage.addChild(t), t.graphics.beginFill("#000").drawRect(0, 0, 960, this.song.fieldTop).drawRect(0, this.song.fieldBottom, 960, this.song.displayHeight - this.song.fieldBottom), t.set({
                    alpha: .1
                }), t.cache(0, 0, 960, 720), this.line = new createjs.Shape, this.stage.addChild(this.line), this.line.graphics.beginLinearGradientFill(["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0)"], [0, .5, 1], 0, 0, 0, 30).drawRect(0, 0, 960, 30), this.line.set({
                    alpha: 0,
                    regY: 15
                }), this.line.cache(0, 0, 960, 30), this.pageNumber = new createjs.Text("-", "36px sans-serif", "#333"), this.stage.addChild(this.pageNumber), this.pageNumber.set({
                    x: 20,
                    y: 20
                }), this.updatePageElements()
            }, e.prototype.createTimeline = function() {
                var t, e, n, i, o, r, a;
                return this.timeline = new createjs.Timeline([], null, {
                    paused: !0
                }), this.timeManager.setCurrentTime(this.timelineStartTime), o = this.song.barStartTime - this.timelineStartTime, console.log(createjs.Tween.get(this.line).wait(o).to({
                    alpha: 1
                }, 300)), this.timeline.addTween(createjs.Tween.get(this.line).wait(o).to({
                    alpha: 1
                }, 300)), "down" === this.timeManager.currentDirection() ? (this.line.set({
                    y: this.song.fieldTop
                }), this.timeline.addTween(createjs.Tween.get(this.line, {
                    loop: !0
                }).to({
                    y: this.song.fieldBottom
                }, this.song.timePerPage).call(this.updatePageElements).to({
                    y: this.song.fieldTop
                }, this.song.timePerPage).call(this.updatePageElements))) : (this.line.set({
                    y: this.song.fieldBottom
                }), this.timeline.addTween(createjs.Tween.get(this.line, {
                    loop: !0
                }).to({
                    y: this.song.fieldTop
                }, this.song.timePerPage).call(this.updatePageElements).to({
                    y: this.song.fieldBottom
                }, this.song.timePerPage).call(this.updatePageElements))), e = 6e4 / this.song.bpm, i = Math.floor((1 * this.song.measureStartTime - this.timelineStartTime) / e), o = 1 * this.song.measureStartTime - this.timelineStartTime - i * e, r = function(t) {
                    return function() {
                        return t.timeline.addTween(createjs.Tween).get(t.gradient, {
                            loop: !0
                        }).to({
                            scaleX: 1.3
                        }, e / 2).call(t.playClickSound).to({
                            scaleX: 1
                        }, e / 2, createjs.Ease.quintOut)
                    }
                }(this), n = this.calcNotePositions(), this.createNoteElements(n), t = 300, a = 200, this.createClickTweens(n, t, a), this.createHoldTweens(n, t, a), this.createDragTweens(n, t, a), console.log(this.timeline)
            }, e.prototype.updatePageElements = function() {
                var t;
                return t = this.timeline ? this.timeline.position : 0, this.timeManager.setCurrentTime(t + this.timelineStartTime), this.pageNumber.text = this.timeManager.currentPage() + 1, this.$slider && this.$slider.val() !== this.timeManager.currentPage() ? this.$slider.val(this.timeManager.currentPage()) : void 0
            }, e.prototype.setElementToTop = function(t, e) {
                return null == e && (e = 1), this.stage.setChildIndex(t, e)
            }, e.prototype.playBellSound = function(t) {
                return null == t && (t = .5), this.timeline._paused ? void 0 : createjs.Sound.play("bell", "none", 0, 0, 0, t)
            }, e.prototype.playClickSound = function() {}, e.prototype.calcNotePositions = function() {
                var t, e, n, i, o, r, a, s, l, u, c, d, p, h, f, g, m, y, v, b, w, x, T, C, N, E, k, S, j;
                for (f = {
                        clickDownNotePolyphony: 0,
                        clickUpNotePolyphony: 0,
                        holdDownNotePolyphony: 0,
                        holdUpNotePolyphony: 0,
                        dragNoteHeadPolyphony: 0,
                        dragNoteSubPolyphony: 0,
                        clickNotes: [],
                        holdNotes: [],
                        dragNotes: []
                    }, u = this.song.pages[this.song.pages.length - 1].pageNumber, h = b = 0; u >= 0 ? u >= b : b >= u; h = u >= 0 ? ++b : --b) {
                    if (y = this.song.pages.filter(function(t) {
                            return t.pageNumber === h
                        }), d = this.song.pages.filter(function(t) {
                            return t.pageNumber === h + 1
                        }), n = y.length > 0 ? y[0] : null, c = d.length > 0 ? d[0] : null, t = 0, e = 0, s = 0, l = 0, o = 0, r = 0, n)
                        for (k = n.notes, w = 0, C = k.length; C > w; w++) switch (p = k[w], p.type) {
                            case CTV.Chart.Const.Note.Click:
                                "down" === n.direction ? t += 1 : e += 1, v = this.calcNoteTime(p.positionY, n.pageNumber), f.clickNotes.push({
                                    x: p.positionX,
                                    y: p.positionY,
                                    time: v.time,
                                    pageStartTime: v.pageStartTime,
                                    direction: n.direction
                                });
                                break;
                            case CTV.Chart.Const.Note.Hold:
                                "down" === n.direction ? s += 1 : l += 1, g = this.calcNoteTime(p.startY, n.pageNumber), a = this.calcNoteTime(p.endY, n.pageNumber), f.holdNotes.push({
                                    startX: p.startX,
                                    startY: p.startY,
                                    endY: p.endY,
                                    startTime: g.time,
                                    endTime: a.time,
                                    pageStartTime: g.pageStartTime,
                                    direction: n.direction
                                });
                                break;
                            case CTV.Chart.Const.Note.Drag:
                                for (o += 1, r += 1 + p.subs.length, g = this.calcNoteTime(p.startY, n.pageNumber), i = {
                                        startX: p.startX,
                                        startY: p.startY,
                                        startTime: g.time,
                                        pageStartTime: g.pageStartTime,
                                        direction: n.direction,
                                        subs: []
                                    }, S = p.subs, x = 0, N = S.length; N > x; x++) m = S[x], i.subs.push({
                                    x: m.positionX,
                                    y: m.positionY,
                                    time: this.calcNoteTime(m.positionY, n.pageNumber).time
                                });
                                i.subs.push({
                                    x: p.endX,
                                    y: p.endY,
                                    time: this.calcNoteTime(p.endY, n.pageNumber).time
                                }), f.dragNotes.push(i)
                        }
                    if (c)
                        for (j = c.notes, T = 0, E = j.length; E > T; T++) switch (p = j[T], p.type) {
                            case CTV.Chart.Const.Note.Click:
                                "down" === c.direction ? t += 1 : e += 1;
                                break;
                            case CTV.Chart.Const.Note.Hold:
                                "down" === c.direction ? s += 1 : l += 1;
                                break;
                            case CTV.Chart.Const.Note.Drag:
                                o += 1, r += 1 + p.subs.length
                        }
                    f.clickDownNotePolyphony < t && (f.clickDownNotePolyphony = t), f.clickUpNotePolyphony < e && (f.clickUpNotePolyphony = e), f.holdDownNotePolyphony < s && (f.holdDownNotePolyphony = s), f.holdUpNotePolyphony < l && (f.holdUpNotePolyphony = l), f.dragNoteHeadPolyphony < o && (f.dragNoteHeadPolyphony = o), f.dragNoteSubPolyphony < r && (f.dragNoteSubPolyphony = r)
                }
                return f.clickNotes.sort(function(t, e) {
                    return e.time - t.time
                }), f.holdNotes.sort(function(t, e) {
                    return e.startTime - t.startTime
                }), f.dragNotes.sort(function(t, e) {
                    return e.startTime - t.startTime
                }), f.dragNotes.forEach(function(t) {
                    return t.subs.sort(function(t, e) {
                        return e.time - t.time
                    })
                }), f
            }, e.prototype.calcNoteTime = function(t, e) {
                var n, i, o;
                return this.timeManager.setCurrentPage(e), n = this.song.fieldBottom - this.song.fieldTop, o = "down" === this.timeManager.currentDirection() ? (t - this.song.fieldTop) / n * this.song.timePerPage : (this.song.fieldBottom - t) / n * this.song.timePerPage, i = {
                    time: this.timeManager.currentTime() + o - this.timelineStartTime,
                    pageStartTime: this.timeManager.currentTime() - this.timelineStartTime
                }
            }, e.prototype.createNoteElements = function(t) {
                var e, n, i, o, r, a, s, l, u, c, d, p, h, f, g, m, y, v;
                for (e = function(t) {
                        return function(e) {
                            var n;
                            return n = new createjs.Bitmap(t.preloader.getResult(e)), t.stage.addChild(n), n.set({
                                alpha: 0,
                                x: 75,
                                y: 75,
                                regX: 75,
                                regY: 75
                            }), n.cache(0, 0, 150, 150), n
                        }
                    }(this), o = l = 0, h = t.clickDownNotePolyphony; h >= 0 ? h >= l : l >= h; o = h >= 0 ? ++l : --l) this.clickDownNotes.push(e("click_down"));
                for (o = u = 0, f = t.clickUpNotePolyphony; f >= 0 ? f >= u : u >= f; o = f >= 0 ? ++u : --u) this.clickUpNotes.push(e("click_up"));
                for (o = c = 0, g = t.holdDownNotePolyphony + t.holdUpNotePolyphony; g >= 0 ? g >= c : c >= g; o = g >= 0 ? ++c : --c) i = new createjs.Bitmap(this.preloader.getResult("hold")), this.stage.addChild(i), this.holdNotes.push(i), i.set({
                    alpha: 0,
                    x: 90,
                    y: 90,
                    regX: 90,
                    regY: 90
                }), i.cache(0, 0, 180, 180), s = new createjs.Bitmap(this.preloader.getResult("hold_tail")), this.stage.addChild(s), this.holdNoteTails.push(s), s.set({
                    alpha: 0,
                    x: 31,
                    regX: 31
                }), s.cache(0, 0, 62, 200);
                for (o = d = 0, m = t.dragNoteHeadPolyphony; m >= 0 ? m >= d : d >= m; o = m >= 0 ? ++d : --d) n = new createjs.Bitmap(this.preloader.getResult("drag")), this.stage.addChild(n), this.dragNoteHeads.push(n), n.set({
                    alpha: 0,
                    x: 75,
                    y: 75,
                    regX: 75,
                    regY: 75
                }), n.cache(0, 0, 150, 150);
                for (v = [], o = p = 0, y = t.dragNoteSubPolyphony; y >= 0 ? y >= p : p >= y; o = y >= 0 ? ++p : --p) a = new createjs.Bitmap(this.preloader.getResult("drag_sub")), this.stage.addChild(a), this.dragNoteSubs.push(a), a.set({
                    alpha: 0,
                    x: 35,
                    y: 35,
                    regX: 35,
                    regY: 35
                }), a.cache(0, 0, 70, 70), r = new createjs.Bitmap(this.preloader.getResult("drag_line")), this.stage.addChild(r), this.dragNoteLines.push(r), r.set({
                    alpha: 0,
                    x: 10,
                    regX: 10
                }), v.push(r.cache(0, 0, 20, 1));
                return v
            }, e.prototype.createClickTweens = function(t, e, n) {
                var i, o, r, a, s, l, u, c, d, p, h, f;
                for (r = 0, c = 0, h = t.clickNotes, f = [], d = 0, p = h.length; p > d; d++) o = h[d], "down" === o.direction ? r < this.clickDownNotes.length ? (a = this.clickDownNotes[r], r += 1) : (a = this.clickDownNotes[0], r = 1) : c < this.clickUpNotes.length ? (a = this.clickUpNotes[c], c += 1) : (a = this.clickUpNotes[0], c = 1), l = o.time - this.song.timePerPage, i = o.pageStartTime - e, s = i - l - n, u = createjs.Tween.get(a, {
                    override: !1
                }).wait(l).to({
                    scaleX: .5,
                    scaleY: .5,
                    x: o.x,
                    y: o.y
                }).call(this.setElementToTop, [a]), s > 0 ? u.to({
                    alpha: 1
                }, n).wait(s).to({
                    scaleX: 1,
                    scaleY: 1
                }, 200).wait(o.time - o.pageStartTime + e - 200) : i > l ? u.to({
                    alpha: 1
                }, i - l).to({
                    scaleX: 1,
                    scaleY: 1
                }, 200).wait(o.time - o.pageStartTime + e - 200) : u.to({
                    alpha: 1,
                    scaleX: 1,
                    scaleY: 1
                }, 200).wait(this.song.timePerPage - 200), u.call(this.playBellSound, [.5]).to({
                    alpha: 0,
                    scaleX: 1.4,
                    scaleY: 1.4
                }, 200, createjs.Ease.quintOut), f.push(this.timeline.addTween(u));
                return f
            }, e.prototype.createHoldTweens = function(t, e, n) {
                var i, o, r, a, s, l, u, c, d, p, h, f, g, m, y, v, b;
                for (s = 0, v = t.holdNotes, b = [], m = 0, y = v.length; y > m; m++) a = v[m], s < this.holdNotes.length ? (o = this.holdNotes[s], p = this.holdNoteTails[s], s += 1) : (o = this.holdNotes[0], p = this.holdNoteTails[0], s = 1), d = a.startTime - this.song.timePerPage, i = a.pageStartTime - e, l = i - d - n, u = "down" === a.direction ? 0 : 180, h = Math.abs(a.startY - a.endY) / 200, f = createjs.Tween.get(p).wait(d).to({
                    x: a.startX,
                    y: a.startY,
                    scaleY: 0,
                    rotation: u
                }).call(this.setElementToTop, [p]), r = createjs.Tween.get(o).wait(d).to({
                    x: a.startX,
                    y: a.startY,
                    rotation: u
                }).call(this.setElementToTop, [o]), l > 0 ? (r.to({
                    alpha: .4
                }, n).wait(l).to({
                    alpha: 1
                }, 200).wait(a.startTime - a.pageStartTime + e - 200), f.to({
                    alpha: .4,
                    scaleY: h
                }, n + l).to({
                    alpha: 1
                }, 200).wait(a.startTime - a.pageStartTime + e - 200)) : i > d ? (r.to({
                    alpha: .4
                }, i - d).to({
                    alpha: 1
                }, 200).wait(a.startTime - a.pageStartTime + e - 200), f.to({
                    alpha: .4,
                    scaleY: h
                }, i - d).to({
                    alpha: 1
                }, 200).wait(a.startTime - a.pageStartTime + e - 200)) : (r.to({
                    alpha: 1
                }, 200).wait(this.song.timePerPage - 200), f.to({
                    alpha: 1,
                    scaleY: h
                }, 200).wait(this.song.timePerPage - 200)), a.endTime > a.startTime + 200 ? (g = a.endTime - a.startTime - 200, c = 200) : (g = 0, c = a.endTime - a.startTime), r.call(this.playBellSound, [.5]).to({
                    alpha: .9,
                    scaleX: 1.1,
                    scaleY: 1.1
                }, c, createjs.Ease.quintOut).wait(g).to({
                    alpha: 0,
                    scaleX: 1.4,
                    scaleY: 1.4
                }, 200, createjs.Ease.quintOut), f.wait(a.endTime - a.startTime).to({
                    alpha: 0,
                    scaleX: 1.4
                }, 200, createjs.Ease.quintOut), this.timeline.addTween(r), b.push(this.timeline.addTween(f));
                return b
            }, e.prototype.createDragTweens = function(t, e, n) {
                var i, o, r, a, s, l, u, c, d, p, h, f, g, m, y, v, b, w, x, T, C, N, E, k, S, j, P, D, A, L, M;
                for (c = 0, T = 0, L = t.dragNotes, M = [], j = 0, D = L.length; D > j; j++) {
                    for (a = L[j], c < this.dragNoteHeads.length ? (d = this.dragNoteHeads[c], c += 1) : (d = this.dragNoteHeads[0], c = 1), C = a.startTime - this.song.timePerPage, i = a.pageStartTime - e, b = i - C - n, p = createjs.Tween.get(d).wait(C).to({
                            x: a.startX,
                            y: a.startY,
                            scaleX: .5,
                            scaleY: .5
                        }).call(this.setElementToTop, [d]), b > 0 ? p.to({
                            alpha: 1
                        }, n).wait(b).to({
                            scaleX: 1,
                            scaleY: 1
                        }, 200).wait(a.startTime - a.pageStartTime + e - 200) : i > C ? p.to({
                            alpha: 1
                        }, i - C).to({
                            scaleX: 1,
                            scaleY: 1
                        }, 200).wait(a.startTime - a.pageStartTime + e - 200) : p.to({
                            alpha: 1,
                            scaleX: 1,
                            scaleY: 1
                        }, 200).wait(this.song.timePerPage - 200), p.call(this.playBellSound, [.3]), w = a.subs.slice(0).sort(function(t, e) {
                            return t.time - e.time
                        }), v = a.startTime, P = 0, A = w.length; A > P; P++) k = w[P], p.to({
                        x: k.x,
                        y: k.y
                    }, k.time - v), v = k.time;
                    p.to({
                        alpha: 0,
                        scaleX: 1.4,
                        scaleY: 1.4
                    }, 200, createjs.Ease.quintOut), this.timeline.addTween(p), M.push(function() {
                        var t, e, n;
                        for (n = [], h = t = 0, e = a.subs.length; e >= 0 ? e > t : t > e; h = e >= 0 ? ++t : --t) s = a.subs[h], m = h + 1 < a.subs.length ? a.subs[h + 1] : {
                            x: a.startX,
                            y: a.startY,
                            time: a.startTime
                        }, T < this.dragNoteSubs.length ? (k = this.dragNoteSubs[T], f = this.dragNoteLines[T], T += 1) : (k = this.dragNoteSubs[0], f = this.dragNoteLines[0], T = 1), C = s.time - this.song.timePerPage, S = createjs.Tween.get(k).wait(C).to({
                            x: s.x,
                            y: s.y
                        }).call(this.setElementToTop, [k]).to({
                            alpha: 1
                        }, 200).wait(this.song.timePerPage - 200).call(this.playBellSound, [.3]).to({
                            alpha: 0,
                            scaleX: 1.4,
                            scaleY: 1.4
                        }, 200, createjs.Ease.quintOut), m && (l = s.x - m.x, u = s.y - m.y, r = Math.floor(Math.sqrt(Math.pow(l, 2) + Math.pow(u, 2))), x = Math.atan2(l, -u), o = x / Math.PI * 180, N = s.x + 25 * Math.cos(x + Math.PI / 2), E = s.y + 25 * Math.sin(x + Math.PI / 2), g = createjs.Tween.get(f).wait(C).to({
                            x: N,
                            y: E,
                            scaleY: r - 50,
                            rotation: o
                        }).call(this.setElementToTop, [f]).to({
                            alpha: 1
                        }, 200).wait(this.song.timePerPage - 200 - (s.time - m.time)).to({
                            alpha: 0
                        }, 200, createjs.Ease.quintOut), this.timeline.addTween(g)), y = s, n.push(this.timeline.addTween(S));
                        return n
                    }.call(this))
                }
                return M
            }, e
        }()
    }.call(this);