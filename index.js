// node_modules/klona/dist/index.mjs
function e(t) {
	if (typeof t != "object") return t;
	var n, r, i = Object.prototype.toString.call(t);
	if (i === "[object Object]") {
		if (t.constructor !== Object && typeof t.constructor == "function") for (n in r = new t.constructor(), t) t.hasOwnProperty(n) && r[n] !== t[n] && (r[n] = e(t[n]));
		else for (n in r = {}, t) n === "__proto__" ? Object.defineProperty(r, n, {
			value: e(t[n]),
			configurable: !0,
			enumerable: !0,
			writable: !0
		}) : r[n] = e(t[n]);
		return r;
	}
	if (i === "[object Array]") {
		for (n = t.length, r = Array(n); n--;) r[n] = e(t[n]);
		return r;
	}
	return i === "[object Set]" ? (r = /* @__PURE__ */ new Set(), t.forEach(function(t) {
		r.add(e(t));
	}), r) : i === "[object Map]" ? (r = /* @__PURE__ */ new Map(), t.forEach(function(t, n) {
		r.set(e(n), e(t));
	}), r) : i === "[object Date]" ? /* @__PURE__ */ new Date(+t) : i === "[object RegExp]" ? (r = new RegExp(t.source, t.flags), r.lastIndex = t.lastIndex, r) : i === "[object DataView]" ? new t.constructor(e(t.buffer)) : i === "[object ArrayBuffer]" ? t.slice(0) : i.slice(-6) === "Array]" ? new t.constructor(t) : t;
}
// node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function t(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var n = {}, r = [], i = () => {}, a = () => !1, o = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), s = (e) => e.startsWith("onUpdate:"), c = Object.assign, l = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, u = Object.prototype.hasOwnProperty, d = (e, t) => u.call(e, t), f = Array.isArray, p = (e) => C(e) === "[object Map]", m = (e) => C(e) === "[object Set]", h = (e) => C(e) === "[object Date]", g = (e) => typeof e == "function", v = (e) => typeof e == "string", y = (e) => typeof e == "symbol", b = (e) => typeof e == "object" && !!e, x = (e) => (b(e) || g(e)) && g(e.then) && g(e.catch), S = Object.prototype.toString, C = (e) => S.call(e), w = (e) => C(e).slice(8, -1), T = (e) => C(e) === "[object Object]", ee = (e) => v(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, te = /* @__PURE__ */ t(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ne = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, re = /-\w/g, E = ne((e) => e.replace(re, (e) => e.slice(1).toUpperCase())), ie = /\B([A-Z])/g, ae = ne((e) => e.replace(ie, "-$1").toLowerCase()), oe = ne((e) => e.charAt(0).toUpperCase() + e.slice(1)), se = ne((e) => e ? `on${oe(e)}` : ""), ce = (e, t) => !Object.is(e, t), D = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, le = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, ue = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, de, fe = () => de ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function pe(e) {
	if (f(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = v(r) ? _e(r) : pe(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (v(e) || b(e)) return e;
}
var me = /;(?![^(]*\))/g, he = /:([^]+)/, ge = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function _e(e) {
	let t = {};
	return e.replace(ge, (e) => e.startsWith("/*") ? "" : e).split(me).forEach((e) => {
		if (e) {
			let n = e.split(he);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function ve(e) {
	let t = "";
	if (v(e)) t = e;
	else if (f(e)) for (let n = 0; n < e.length; n++) {
		let r = ve(e[n]);
		r && (t += r + " ");
	}
	else if (b(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var ye = /* @__PURE__ */ t("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");
function be(e) {
	return !!e || e === "";
}
function xe(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = Te(e[i], t[i], n);
	return r;
}
function Se(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && Te(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function Ce(e, t, n) {
	let r = p(e), i = p(t);
	if (r || i || (r = m(e), i = m(t), r || i)) return r && i ? Se(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !Te(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function we(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function Te(e, t, n) {
	if (e === t) return !0;
	let r = h(e), i = h(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = y(e), i = y(t), r || i ? e === t : (r = f(e), i = f(t), r || i ? r && i ? we(e, t, n, xe) : !1 : (r = b(e), i = b(t), r || i ? !r || !i ? !1 : we(e, t, n, Ce) : String(e) === String(t))));
}
function Ee(e, t) {
	return e.findIndex((e) => Te(e, t));
}
var De = (e) => !!(e && e.__v_isRef === !0), Oe = (e) => v(e) ? e : e == null ? "" : f(e) || b(e) && (e.toString === S || !g(e.toString)) ? De(e) ? Oe(e.value) : JSON.stringify(e, ke, 2) : String(e), ke = (e, t) => De(t) ? ke(e, t.value) : p(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ae(t, r) + " =>"] = n, e), {}) } : m(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ae(e)) } : y(t) ? Ae(t) : b(t) && !f(t) && !T(t) ? String(t) : t, Ae = (e, t = "") => y(e) ? `Symbol(${e.description ?? t})` : e, O, je = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && O && (O.active ? (this.parent = O, this.index = (O.scopes || (O.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].pause();
			}
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].resume();
			}
			let n = this.effects.slice();
			for (e = 0, t = n.length; e < t; e++) n[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = O;
			try {
				return O = this, e();
			} finally {
				O = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = O, O = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (O === this) O = this.prevScope;
			else {
				let e = O;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				let e = this.scopes.slice();
				for (t = 0, n = e.length; t < n; t++) e[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Me(e) {
	return new je(e);
}
function Ne() {
	return O;
}
function Pe(e, t = !1) {
	O && O.cleanups.push(e);
}
var k, Fe = /* @__PURE__ */ new WeakSet(), Ie = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, O && (O.active ? O.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Fe.has(this) && (Fe.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Be(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, $e(this), Ue(this);
		let e = k, t = Ye;
		k = this, Ye = !0;
		try {
			return this.fn();
		} finally {
			We(this), k = e, Ye = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) qe(e);
			this.deps = this.depsTail = void 0, $e(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Fe.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Ge(this) && this.run();
	}
	get dirty() {
		return Ge(this);
	}
}, Le = 0, Re, ze;
function Be(e, t = !1) {
	e.flags |= 8, t ? (e.next = ze, ze = e) : (e.next = Re, Re = e);
}
function Ve() {
	Le++;
}
function He() {
	if (--Le > 0) return;
	if (ze) {
		let e = ze;
		for (ze = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Re;) {
		let t = Re;
		for (Re = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function Ue(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function We(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), qe(r), Je(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Ge(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ke(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ke(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === et) || (e.globalVersion = et, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ge(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = k, r = Ye;
	k = e, Ye = !0;
	try {
		Ue(e);
		let n = e.fn(e._value);
		(t.version === 0 || ce(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		k = n, Ye = r, We(e), e.flags &= -3;
	}
}
function qe(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) qe(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Je(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Ye = !0, Xe = [];
function Ze() {
	Xe.push(Ye), Ye = !1;
}
function Qe() {
	let e = Xe.pop();
	Ye = e === void 0 || e;
}
function $e(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = k;
		k = void 0;
		try {
			t();
		} finally {
			k = e;
		}
	}
}
var et = 0, tt = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, nt = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!k || !Ye || k === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== k) t = this.activeLink = new tt(k, this), k.deps ? (t.prevDep = k.depsTail, k.depsTail.nextDep = t, k.depsTail = t) : k.deps = k.depsTail = t, rt(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = k.depsTail, t.nextDep = void 0, k.depsTail.nextDep = t, k.depsTail = t, k.deps === t && (k.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, et++, this.notify(e);
	}
	notify(e) {
		Ve();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			He();
		}
	}
};
function rt(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) rt(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var it = /* @__PURE__ */ new WeakMap(), at = /* @__PURE__ */ Symbol(""), ot = /* @__PURE__ */ Symbol(""), st = /* @__PURE__ */ Symbol("");
function A(e, t, n) {
	if (Ye && k) {
		let t = it.get(e);
		t || it.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new nt()), r.map = t, r.key = n), r.track();
	}
}
function ct(e, t, n, r, i, a) {
	let o = it.get(e);
	if (!o) {
		et++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ve(), t === "clear") o.forEach(s);
	else {
		let i = f(e), a = i && ee(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === st || !y(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(st)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(at)), p(e) && s(o.get(ot)));
				break;
			case "delete":
				i || (s(o.get(at)), p(e) && s(o.get(ot)));
				break;
			case "set": p(e) && s(o.get(at));
		}
	}
	He();
}
function lt(e, t) {
	let n = it.get(e);
	return n && n.get(t);
}
function ut(e) {
	let t = /* @__PURE__ */ j(e);
	return t === e || (A(t, "iterate", st), /* @__PURE__ */ Xt(e)) ? t : /* @__PURE__ */ Yt(e) ? /* @__PURE__ */ Jt(e) ? t.map((e) => en($t(e))) : t.map(en) : t.map($t);
}
function dt(e) {
	return A(e = /* @__PURE__ */ j(e), "iterate", st), e;
}
function ft(e, t) {
	return /* @__PURE__ */ Yt(e) ? en(/* @__PURE__ */ Jt(e) ? $t(t) : t) : $t(t);
}
var pt = {
	__proto__: null,
	[Symbol.iterator]() {
		return mt(this, Symbol.iterator, (e) => ft(this, e));
	},
	concat(...e) {
		return ut(this).concat(...e.map((e) => f(e) ? ut(e) : e));
	},
	entries() {
		return mt(this, "entries", (e) => (e[1] = ft(this, e[1]), e));
	},
	every(e, t) {
		return _t(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return _t(this, "filter", e, t, (e) => e.map((e) => ft(this, e)), arguments);
	},
	find(e, t) {
		return _t(this, "find", e, t, (e) => ft(this, e), arguments);
	},
	findIndex(e, t) {
		return _t(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return _t(this, "findLast", e, t, (e) => ft(this, e), arguments);
	},
	findLastIndex(e, t) {
		return _t(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return _t(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return yt(this, "includes", e);
	},
	indexOf(...e) {
		return yt(this, "indexOf", e);
	},
	join(e) {
		return ut(this).join(e);
	},
	lastIndexOf(...e) {
		return yt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return _t(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return bt(this, "pop");
	},
	push(...e) {
		return bt(this, "push", e);
	},
	reduce(e, ...t) {
		return vt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return vt(this, "reduceRight", e, t);
	},
	shift() {
		return bt(this, "shift");
	},
	some(e, t) {
		return _t(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return bt(this, "splice", e);
	},
	toReversed() {
		return ut(this).toReversed();
	},
	toSorted(e) {
		return ut(this).toSorted(e);
	},
	toSpliced(...e) {
		return ut(this).toSpliced(...e);
	},
	unshift(...e) {
		return bt(this, "unshift", e);
	},
	values() {
		return mt(this, "values", (e) => ft(this, e));
	}
};
function mt(e, t, n) {
	let r = dt(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ Xt(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => ht(a.next(), n), i !== gt[t] && Object.defineProperties(e, {
				return: { get() {
					let e = a.return;
					return typeof e == "function" ? e.bind(a) : e;
				} },
				throw: { get() {
					let e = a.throw;
					return typeof e == "function" ? e.bind(a) : e;
				} }
			}), e;
		}
		a._next = a.next, a.next = () => ht(a._next(), n);
	}
	return a;
}
function ht(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var gt = Array.prototype;
function _t(e, t, n, r, i, a) {
	let o = dt(e), s = o !== e && !/* @__PURE__ */ Xt(e), c = o[t];
	if (c !== gt[t]) {
		let t = c.apply(e, a);
		return s ? $t(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, ft(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function vt(e, t, n, r) {
	let i = dt(e), a = i !== e && !/* @__PURE__ */ Xt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = ft(e, t)), n.call(this, t, ft(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? ft(e, c) : c;
}
function yt(e, t, n) {
	let r = /* @__PURE__ */ j(e);
	A(r, "iterate", st);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Zt(n[0]) ? (n[0] = /* @__PURE__ */ j(n[0]), r[t](...n)) : i;
}
function bt(e, t, n = []) {
	Ze(), Ve();
	let r = (/* @__PURE__ */ j(e))[t].apply(e, n);
	return He(), Qe(), r;
}
var xt = /* @__PURE__ */ t("__proto__,__v_isRef,__isVue"), St = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(y));
function Ct(e) {
	y(e) || (e = String(e));
	let t = /* @__PURE__ */ j(this);
	return A(t, "has", e), t.hasOwnProperty(e);
}
var wt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Ht : Vt : i ? Bt : zt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = f(e);
		if (!r) {
			let e;
			if (a && (e = pt[t])) return e;
			if (t === "hasOwnProperty") return Ct;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ M(e) ? e : n);
		if ((y(t) ? St.has(t) : xt(t)) || (r || A(e, "get", t), i)) return o;
		if (/* @__PURE__ */ M(o)) {
			let e = a && ee(t) ? o : o.value;
			return r && b(e) ? /* @__PURE__ */ Kt(e) : e;
		}
		return b(o) ? r ? /* @__PURE__ */ Kt(o) : /* @__PURE__ */ Wt(o) : o;
	}
}, Tt = class extends wt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = f(e) && ee(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Yt(i);
			if (!/* @__PURE__ */ Xt(n) && !/* @__PURE__ */ Yt(n) && (i = /* @__PURE__ */ j(i), n = /* @__PURE__ */ j(n)), !a && /* @__PURE__ */ M(i) && !/* @__PURE__ */ M(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : d(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ M(e) ? e : r);
		return e === /* @__PURE__ */ j(r) && s && (o ? ce(n, i) && ct(e, "set", t, n, i) : ct(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = d(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && ct(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return y(t) && St.has(t) || A(e, "has", t), n;
	}
	ownKeys(e) {
		return A(e, "iterate", f(e) ? "length" : at), Reflect.ownKeys(e);
	}
}, Et = class extends wt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Dt = /* @__PURE__ */ new Tt(), Ot = /* @__PURE__ */ new Et(), kt = /* @__PURE__ */ new Tt(!0), At = (e) => e, jt = (e) => Reflect.getPrototypeOf(e);
function Mt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ j(i), o = p(a), s = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? At : t ? en : $t;
		return !t && A(a, "iterate", l ? ot : at), c(Object.create(u), { next() {
			let { value: e, done: t } = u.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: s ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function Nt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Pt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ j(r), a = /* @__PURE__ */ j(n);
			e || (ce(n, a) && A(i, "get", n), A(i, "get", a));
			let { has: o } = jt(i), s = t ? At : e ? en : $t;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && A(/* @__PURE__ */ j(t), "iterate", at), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ j(n), i = /* @__PURE__ */ j(t);
			return e || (ce(t, i) && A(r, "has", t), A(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ j(a), s = t ? At : e ? en : $t;
			return !e && A(o, "iterate", at), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return c(n, e ? {
		add: Nt("add"),
		set: Nt("set"),
		delete: Nt("delete"),
		clear: Nt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ j(this), r = jt(n), i = /* @__PURE__ */ j(e), a = !t && !/* @__PURE__ */ Xt(e) && !/* @__PURE__ */ Yt(e) ? i : e;
			return r.has.call(n, a) || ce(e, a) && r.has.call(n, e) || ce(i, a) && r.has.call(n, i) || (n.add(a), ct(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ Xt(n) || /* @__PURE__ */ Yt(n) || (n = /* @__PURE__ */ j(n));
			let r = /* @__PURE__ */ j(this), { has: i, get: a } = jt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ j(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? ce(n, s) && ct(r, "set", e, n, s) : ct(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ j(this), { has: n, get: r } = jt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ j(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && ct(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ j(this), t = e.size !== 0, n = e.clear();
			return t && ct(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Mt(r, e, t);
	}), n;
}
function Ft(e, t) {
	let n = Pt(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(d(n, i) && i in r ? n : r, i, a);
}
var It = { get: /* @__PURE__ */ Ft(!1, !1) }, Lt = { get: /* @__PURE__ */ Ft(!1, !0) }, Rt = { get: /* @__PURE__ */ Ft(!0, !1) }, zt = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap();
function Ut(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return /* @__PURE__ */ Yt(e) ? e : qt(e, !1, Dt, It, zt);
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
	return qt(e, !1, kt, Lt, Bt);
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return qt(e, !0, Ot, Rt, Vt);
}
function qt(e, t, n, r, i) {
	if (!b(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Ut(w(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return /* @__PURE__ */ Yt(e) ? /* @__PURE__ */ Jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function j(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ j(t) : e;
}
function Qt(e) {
	return !d(e, "__v_skip") && Object.isExtensible(e) && le(e, "__v_skip", !0), e;
}
var $t = (e) => b(e) ? /* @__PURE__ */ Wt(e) : e, en = (e) => b(e) ? /* @__PURE__ */ Kt(e) : e;
// @__NO_SIDE_EFFECTS__
function M(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function tn(e) {
	return nn(e, !1);
}
function nn(e, t) {
	return /* @__PURE__ */ M(e) ? e : new rn(e, t);
}
var rn = class {
	constructor(e, t) {
		this.dep = new nt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ j(e), this._value = t ? e : $t(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Xt(e) || /* @__PURE__ */ Yt(e);
		e = n ? e : /* @__PURE__ */ j(e), ce(e, t) && (this._rawValue = e, this._value = n ? e : $t(e), this.dep.trigger());
	}
};
function N(e) {
	return /* @__PURE__ */ M(e) ? e.value : e;
}
var an = {
	get: (e, t, n) => t === "__v_raw" ? e : N(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ M(i) && !/* @__PURE__ */ M(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function on(e) {
	return /* @__PURE__ */ Jt(e) ? e : new Proxy(e, an);
}
// @__NO_SIDE_EFFECTS__
function sn(e) {
	let t = f(e) ? Array(e.length) : {};
	for (let n in e) t[n] = ln(e, n);
	return t;
}
var cn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = y(t) ? t : String(t), this._raw = /* @__PURE__ */ j(e);
		let r = !0, i = e;
		if (!f(e) || y(this._key) || !ee(this._key)) do
			r = !/* @__PURE__ */ Zt(i) || /* @__PURE__ */ Xt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = N(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ M(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ M(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return lt(this._raw, this._key);
	}
};
function ln(e, t, n) {
	return new cn(e, t, n);
}
var un = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new nt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = et - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && k !== this) return Be(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ke(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function dn(e, t, n = !1) {
	let r, i;
	return g(e) ? r = e : (r = e.get, i = e.set), new un(r, i, n);
}
var fn = {}, pn = /* @__PURE__ */ new WeakMap(), mn = void 0;
function hn(e, t = !1, n = mn) {
	if (n) {
		let t = pn.get(n);
		t || pn.set(n, t = []), t.push(e);
	}
}
function gn(e, t, r = n) {
	let { immediate: a, deep: o, once: s, scheduler: c, augmentJob: u, call: d } = r, p = (e) => o ? e : /* @__PURE__ */ Xt(e) || o === !1 || o === 0 ? _n(e, 1) : _n(e), m, h, v, y, b = !1, x = !1;
	if (/* @__PURE__ */ M(e) ? (h = () => e.value, b = /* @__PURE__ */ Xt(e)) : /* @__PURE__ */ Jt(e) ? (h = () => p(e), b = !0) : f(e) ? (x = !0, b = e.some((e) => /* @__PURE__ */ Jt(e) || /* @__PURE__ */ Xt(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ M(e)) return e.value;
		if (/* @__PURE__ */ Jt(e)) return p(e);
		if (g(e)) return d ? d(e, 2) : e();
	})) : h = g(e) ? t ? d ? () => d(e, 2) : e : () => {
		if (v) {
			Ze();
			try {
				v();
			} finally {
				Qe();
			}
		}
		let t = mn;
		mn = m;
		try {
			return d ? d(e, 3, [y]) : e(y);
		} finally {
			mn = t;
		}
	} : i, t && o) {
		let e = h, t = o === !0 ? Infinity : o;
		h = () => _n(e(), t);
	}
	let S = Ne(), C = () => {
		m.stop(), S && S.active && l(S.effects, m);
	};
	if (s && t) {
		let e = t;
		t = (...t) => {
			try {
				return e(...t);
			} finally {
				C();
			}
		};
	}
	let w = x ? Array(e.length).fill(fn) : fn, T = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (t) {
				let n = m.run();
				if (e || o || b || (x ? n.some((e, t) => ce(e, w[t])) : ce(n, w))) {
					let e = mn;
					Ze();
					try {
						v && v(), mn = m;
						let e = [
							n,
							w === fn ? void 0 : x && w[0] === fn ? [] : w,
							y
						];
						w = n, d ? d(t, 3, e) : t(...e);
					} finally {
						mn = e, Qe();
					}
				}
			} else m.run();
		}
	};
	return u && u(T), m = new Ie(h), m.scheduler = c ? () => c(T, !1) : T, y = (e) => hn(e, !1, m), v = m.onStop = () => {
		let e = pn.get(m);
		if (e) {
			if (d) d(e, 4);
			else for (let t of e) t();
			pn.delete(m);
		}
	}, t ? a ? T(!0) : w = m.run() : c ? c(T.bind(null, !0), !0) : m.run(), C.pause = m.pause.bind(m), C.resume = m.resume.bind(m), C.stop = C, C;
}
function _n(e, t = Infinity, n) {
	if (t <= 0 || !b(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ M(e)) _n(e.value, t, n);
	else if (f(e)) for (let r = 0; r < e.length; r++) _n(e[r], t, n);
	else if (m(e) || p(e)) e.forEach((e) => {
		_n(e, t, n);
	});
	else if (T(e)) {
		for (let r in e) _n(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && _n(e[r], t, n);
	}
	return e;
}
// node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function vn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		bn(e, t, n);
	}
}
function yn(e, t, n, r) {
	if (g(e)) {
		let i = vn(e, t, n, r);
		return i && x(i) && i.catch((e) => {
			bn(e, t, n);
		}), i;
	}
	if (f(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(yn(e[a], t, n, r));
		return i;
	}
}
function bn(e, t, r, i = !0) {
	let a = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || n;
	if (t) {
		let n = t.parent, i = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${r}`;
		for (; n;) {
			let t = n.ec;
			if (t) {
				for (let n = 0; n < t.length; n++) if (t[n](e, i, a) === !1) return;
			}
			n = n.parent;
		}
		if (o) {
			Ze(), vn(o, null, 10, [
				e,
				i,
				a
			]), Qe();
			return;
		}
	}
	xn(e, r, a, i, s);
}
function xn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var P = [], Sn = -1, Cn = [], wn = null, Tn = 0, En = /* @__PURE__ */ Promise.resolve(), Dn = null;
function On(e) {
	let t = Dn || En;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function kn(e) {
	let t = Sn + 1, n = P.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = P[r], a = Ln(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function An(e) {
	if (!(e.flags & 1)) {
		let t = Ln(e), n = P[P.length - 1];
		!n || !(e.flags & 2) && t >= Ln(n) ? P.push(e) : P.splice(kn(t), 0, e), e.flags |= 1, jn();
	}
}
function jn() {
	Dn ||= En.then(Rn);
}
function Mn(e) {
	if (!f(e)) wn && e.id === -1 ? wn.splice(Tn + 1, 0, e) : e.flags & 1 || (Cn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) Cn.push(e[t]);
	jn();
}
function Nn(e, t, n, r = Sn + 1) {
	for (; r < P.length; r++) {
		let n = P[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			P.splice(r, 1), r = e ? r - 1 : Sn, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function Pn(e, t, n = 0) {
	if (Cn.length) {
		let e = Cn, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < Cn.length; i++) {
				let a = Cn[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? Cn[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => Ln(e) - Ln(t));
		if (Cn.length = r, wn) {
			for (let e = 0; e < i.length; e++) wn.push(i[e]);
			return;
		}
		for (wn = i, Tn = 0; Tn < wn.length; Tn++) {
			let e = wn[Tn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		wn = null, Tn = 0;
	}
}
var Fn = !1;
function In(e, t) {
	if (Fn) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(Cn);
	e(), Fn = !0;
	try {
		Nn(void 0, t), Pn(void 0, n, t);
	} finally {
		Fn = !1;
	}
}
var Ln = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Rn(e) {
	try {
		for (Sn = 0; Sn < P.length; Sn++) {
			let e = P[Sn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), vn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; Sn < P.length; Sn++) {
			let e = P[Sn];
			e && (e.flags &= -2);
		}
		Sn = -1, P.length = 0, Pn(e), Dn = null, (P.length || Cn.length) && Rn(e);
	}
}
var zn = null, Bn = null;
function Vn(e) {
	let t = zn;
	return zn = e, Bn = e && e.type.__scopeId || null, t;
}
function Hn(e, t = zn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && ea(-1);
		let i = Vn(t), a = Yi.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Yi.length; e > a; e--) Qi();
			Vn(i), r._d && ea(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function F(e, t) {
	if (zn === null) return e;
	let r = Pa(zn), i = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [a, o, s, c = n] = t[e];
		a && (g(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && _n(o), i.push({
			dir: a,
			instance: r,
			value: o,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function Un(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Ze(), yn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Qe());
	}
}
function Wn(e, t) {
	if (R) {
		let n = R.provides, r = R.parent && R.parent.provides;
		r === n && (n = R.provides = Object.create(r)), n[e] = t;
	}
}
function Gn(e, t, n = !1) {
	let r = xa();
	if (r || ei) {
		let i = ei ? ei._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && g(t) ? t.call(r && r.proxy) : t;
	}
}
function Kn() {
	return !!(xa() || ei);
}
var qn = /* @__PURE__ */ Symbol.for("v-scx"), Jn = () => Gn(qn);
function Yn(e, t) {
	return Zn(e, null, t);
}
function Xn(e, t, n) {
	return Zn(e, t, n);
}
function Zn(e, t, r = n) {
	let { immediate: a, deep: o, flush: s, once: l } = r, u = c({}, r), d = t && a || !t && s !== "post", f;
	if (Da) {
		if (s === "sync") {
			let e = Jn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = i, e.resume = i, e.pause = i, e;
		}
	}
	let p = R;
	u.call = (e, t, n) => yn(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		e.i = p, Mi(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : An(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = gn(e, t, u);
	return Da && (f ? f.push(h) : d && h()), h;
}
function Qn(e, t, n) {
	let r = this.proxy, i = v(e) ? e.includes(".") ? $n(r, e) : () => r[e] : e.bind(r, r), a;
	g(t) ? a = t : (a = t.handler, n = t);
	let o = wa(this), s = Zn(i, a.bind(r), n);
	return o(), s;
}
function $n(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var er = /* @__PURE__ */ Symbol("_vte"), tr = (e) => e.__isTeleport, nr = /* @__PURE__ */ Symbol("_leaveCb");
function rr(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== qi) {
			t = n;
			break;
		}
	}
	return t;
}
function ir(e) {
	if (!mr(e)) return tr(e.type) && e.children ? rr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && g(n.default)) return n.default();
	}
}
function ar(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		ar(tr(n.type) && ir(n) || n, t);
	} else if (e.shapeFlag & 128) e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	else if (e.transition = t, e.type === Gi && f(e.children)) {
		let n = si(e.children, !1);
		n && ar(n, t);
	}
}
function or(e) {
	if (e.component) return or(e.component.subTree);
	if (e.type === Gi) {
		let t = f(e.children) && si(e.children, !1);
		return t ? or(t) : void 0;
	}
	if (e.type !== qi) return e;
}
// @__NO_SIDE_EFFECTS__
function sr(e, t) {
	return g(e) ? /* @__PURE__ */ c({ name: e.name }, t, { setup: e }) : e;
}
function cr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function lr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var ur = /* @__PURE__ */ new WeakMap();
function dr(e, t, r, i, o = !1) {
	if (f(e)) {
		e.forEach((e, n) => dr(e, t && (f(t) ? t[n] : t), r, i, o));
		return;
	}
	if (pr(i) && !o) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && dr(e, t, r, i.component.subTree);
		return;
	}
	let s = i.shapeFlag & 4 ? Pa(i.component) : i.el, c = o ? null : s, { i: u, r: p } = e, m = t && t.r, h = u.refs === n ? u.refs = {} : u.refs, y = u.setupState, b = /* @__PURE__ */ j(y), x = y === n ? a : (e) => !lr(h, e) && d(b, e), S = (e, t) => !(t && lr(h, t));
	if (m != null && m !== p) {
		if (fr(t), v(m)) h[m] = null, x(m) && (y[m] = null);
		else if (/* @__PURE__ */ M(m)) {
			let e = t;
			S(m, e.k) && (m.value = null), e.k && (h[e.k] = null);
		}
	}
	if (g(p)) vn(p, u, 12, [c, h]);
	else {
		let t = v(p), n = /* @__PURE__ */ M(p);
		if (t || n) {
			let i = () => {
				if (e.f) {
					let n = t ? x(p) ? y[p] : h[p] : S(p) || !e.k ? p.value : h[e.k];
					if (o) f(n) && l(n, s);
					else if (f(n)) n.includes(s) || n.push(s);
					else if (t) h[p] = [s], x(p) && (y[p] = h[p]);
					else {
						let t = [s];
						S(p, e.k) && (p.value = t), e.k && (h[e.k] = t);
					}
				} else t ? (h[p] = c, x(p) && (y[p] = c)) : n && (S(p, e.k) && (p.value = c), e.k && (h[e.k] = c));
			};
			if (c) {
				let t = () => {
					i(), ur.delete(e);
				};
				t.id = -1, ur.set(e, t), Mi(t, r);
			} else fr(e), i();
		}
	}
}
function fr(e) {
	let t = ur.get(e);
	t && (t.flags |= 8, ur.delete(e));
}
fe().requestIdleCallback, fe().cancelIdleCallback;
var pr = (e) => !!e.type.__asyncLoader, mr = (e) => e.type.__isKeepAlive;
function hr(e, t) {
	_r(e, "a", t);
}
function gr(e, t) {
	_r(e, "da", t);
}
function _r(e, t, n = R) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (yr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) mr(e.parent.vnode) && vr(r, t, n, e), e = e.parent;
	}
}
function vr(e, t, n, r) {
	let i = yr(t, e, r, !0);
	Er(() => {
		l(r[t], i);
	}, n);
}
function yr(e, t, n = R, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ze();
			let i = wa(n), a = yn(t, n, e, r);
			return i(), Qe(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var br = (e) => (t, n = R) => {
	Da && e !== "sp" || yr(e, (...e) => t(...e), n);
}, xr = br("bm"), Sr = br("m"), Cr = br("bu"), wr = br("u"), Tr = br("bum"), Er = br("um"), Dr = br("sp"), Or = br("rtg"), kr = br("rtc");
function Ar(e, t = R) {
	yr("ec", e, t);
}
var jr = /* @__PURE__ */ Symbol.for("v-ndc"), Mr = (e) => e ? Ea(e) ? Pa(e) : Mr(e.parent) : null, Nr = /* @__PURE__ */ c(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Mr(e.parent),
	$root: (e) => Mr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Hr(e),
	$forceUpdate: (e) => e.f ||= () => {
		An(e.update);
	},
	$nextTick: (e) => e.n ||= On.bind(e.proxy),
	$watch: (e) => Qn.bind(e)
}), Pr = (e, t) => e !== n && !e.__isScriptSetup && d(e, t), Fr = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: r, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (t[0] !== "$") {
			let e = s[t];
			if (e !== void 0) switch (e) {
				case 1: return i[t];
				case 2: return a[t];
				case 4: return r[t];
				case 3: return o[t];
			}
			else if (Pr(i, t)) return s[t] = 1, i[t];
			else if (a !== n && d(a, t)) return s[t] = 2, a[t];
			else if (d(o, t)) return s[t] = 3, o[t];
			else if (r !== n && d(r, t)) return s[t] = 4, r[t];
			else Lr && (s[t] = 0);
		}
		let u = Nr[t], f, p;
		if (u) return t === "$attrs" && A(e.attrs, "get", ""), u(e);
		if ((f = c.__cssModules) && (f = f[t])) return f;
		if (r !== n && d(r, t)) return s[t] = 4, r[t];
		if (p = l.config.globalProperties, d(p, t)) return p[t];
	},
	set({ _: e }, t, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Pr(a, t) ? (a[t] = r, !0) : i !== n && d(i, t) ? (i[t] = r, !0) : d(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== n && c[0] !== "$" && d(e, c) || Pr(t, c) || d(o, c) || d(i, c) || d(Nr, c) || d(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? d(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Ir(e) {
	return f(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Lr = !0;
function Rr(e) {
	let t = Hr(e), n = e.proxy, r = e.ctx;
	Lr = !1, t.beforeCreate && Br(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: p, mounted: m, beforeUpdate: h, updated: v, activated: y, deactivated: x, beforeDestroy: S, beforeUnmount: C, destroyed: w, unmounted: T, render: ee, renderTracked: te, renderTriggered: ne, errorCaptured: re, serverPrefetch: E, expose: ie, inheritAttrs: ae, components: oe, directives: se, filters: ce } = t;
	if (u && zr(u, r, null), s) for (let e in s) {
		let t = s[e];
		g(t) && (r[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		b(t) && (e.data = /* @__PURE__ */ Wt(t));
	}
	if (Lr = !0, o) for (let e in o) {
		let t = o[e], a = Ia({
			get: g(t) ? t.bind(n, n) : g(t.get) ? t.get.bind(n, n) : i,
			set: !g(t) && g(t.set) ? t.set.bind(n) : i
		});
		Object.defineProperty(r, e, {
			enumerable: !0,
			configurable: !0,
			get: () => a.value,
			set: (e) => a.value = e
		});
	}
	if (c) for (let e in c) Vr(c[e], r, n, e);
	if (l) {
		let e = g(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Wn(t, e[t]);
		});
	}
	d && Br(d, e, "c");
	function D(e, t) {
		f(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (D(xr, p), D(Sr, m), D(Cr, h), D(wr, v), D(hr, y), D(gr, x), D(Ar, re), D(kr, te), D(Or, ne), D(Tr, C), D(Er, T), D(Dr, E), f(ie)) {
		if (ie.length) {
			let t = e.exposed ||= {};
			ie.forEach((e) => {
				Object.defineProperty(t, e, {
					get: () => n[e],
					set: (t) => n[e] = t,
					enumerable: !0
				});
			});
		} else e.exposed ||= {};
	}
	ee && e.render === i && (e.render = ee), ae != null && (e.inheritAttrs = ae), oe && (e.components = oe), se && (e.directives = se), E && cr(e);
}
function zr(e, t, n = i) {
	f(e) && (e = qr(e));
	for (let n in e) {
		let r = e[n], i;
		i = b(r) ? "default" in r ? Gn(r.from || n, r.default, !0) : Gn(r.from || n) : Gn(r), /* @__PURE__ */ M(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Br(e, t, n) {
	yn(f(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Vr(e, t, n, r) {
	let i = r.includes(".") ? $n(n, r) : () => n[r];
	if (v(e)) {
		let n = t[e];
		g(n) && Xn(i, n);
	} else if (g(e)) Xn(i, e.bind(n));
	else if (b(e)) {
		if (f(e)) e.forEach((e) => Vr(e, t, n, r));
		else {
			let r = g(e.handler) ? e.handler.bind(n) : t[e.handler];
			g(r) && Xn(i, r, e);
		}
	}
}
function Hr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Ur(c, e, o, !0)), Ur(c, t, o)), b(t) && a.set(t, c), c;
}
function Ur(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Ur(e, a, n, !0), i && i.forEach((t) => Ur(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Wr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Wr = {
	data: Gr,
	props: Yr,
	emits: Yr,
	methods: Jr,
	computed: Jr,
	beforeCreate: I,
	created: I,
	beforeMount: I,
	mounted: I,
	beforeUpdate: I,
	updated: I,
	beforeDestroy: I,
	beforeUnmount: I,
	destroyed: I,
	unmounted: I,
	activated: I,
	deactivated: I,
	errorCaptured: I,
	serverPrefetch: I,
	components: Jr,
	directives: Jr,
	watch: Xr,
	provide: Gr,
	inject: Kr
};
function Gr(e, t) {
	return t ? e ? function() {
		return c(g(e) ? e.call(this, this) : e, g(t) ? t.call(this, this) : t);
	} : t : e;
}
function Kr(e, t) {
	return Jr(qr(e), qr(t));
}
function qr(e) {
	if (f(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function I(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Jr(e, t) {
	return e ? c(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Yr(e, t) {
	return e ? f(e) && f(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : c(/* @__PURE__ */ Object.create(null), Ir(e), Ir(t ?? {})) : t;
}
function Xr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = c(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = I(e[r], t[r]);
	return n;
}
function Zr() {
	return {
		app: null,
		config: {
			isNativeTag: a,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var Qr = 0;
function $r(e, t) {
	return function(n, r = null) {
		g(n) || (n = c({}, n)), r != null && !b(r) && (r = null);
		let i = Zr(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, l = i.app = {
			_uid: Qr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: La,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && g(e.install) ? (a.add(e), e.install(l, ...t)) : g(e) && (a.add(e), e(l, ...t))), l;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), l;
			},
			component(e, t) {
				return t ? (i.components[e] = t, l) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, l) : i.directives[e];
			},
			mount(a, o, c) {
				if (!s) {
					let u = l._ceVNode || sa(n, r);
					return u.appContext = i, c === !0 ? c = "svg" : c === !1 && (c = void 0), o && t ? t(u, a) : e(u, a, c), s = !0, l._container = a, a.__vue_app__ = l, Pa(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (yn(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = ei;
				ei = l;
				try {
					return e();
				} finally {
					ei = t;
				}
			}
		};
		return l;
	};
}
var ei = null, ti = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${E(t)}Modifiers`] || e[`${ae(t)}Modifiers`];
function ni(e, t, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || n, a = r, o = t.startsWith("update:"), s = o && ti(i, t.slice(7));
	s && (s.trim && (a = r.map((e) => v(e) ? e.trim() : e)), s.number && (a = a.map(ue)));
	let c, l = i[c = se(t)] || i[c = se(E(t))];
	!l && o && (l = i[c = se(ae(t))]), l && yn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, yn(u, e, 6, a);
	}
}
var ri = /* @__PURE__ */ new WeakMap();
function ii(e, t, n = !1) {
	let r = n ? ri : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!g(e)) {
		let r = (e) => {
			let n = ii(e, t, !0);
			n && (s = !0, c(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (b(e) && r.set(e, null), null) : (f(a) ? a.forEach((e) => o[e] = null) : c(o, a), b(e) && r.set(e, o), o);
}
function ai(e, t) {
	return !e || !o(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), d(e, t[0].toLowerCase() + t.slice(1)) || d(e, ae(t)) || d(e, t));
}
function oi(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, v = Vn(e), y, b;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			y = fa(u.call(t, e, d, f, m, p, h)), b = c;
		} else {
			let e = t;
			y = fa(e.length > 1 ? e(f, {
				attrs: c,
				slots: o,
				emit: l
			}) : e(f, null)), b = t.props ? c : ci(c);
		}
	} catch (t) {
		Yi.length = 0, bn(t, e, 1), y = sa(qi);
	}
	let x = y;
	if (b && g !== !1) {
		let e = Object.keys(b), { shapeFlag: t } = x;
		e.length && t & 7 && (a && e.some(s) && (b = li(b, a)), x = ua(x, b, !1, !0));
	}
	return n.dirs && (x = ua(x, null, !1, !0), x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs), n.transition && ar(tr(x.type) && ir(x) || x, n.transition), y = x, Vn(v), y;
}
function si(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (ra(r)) {
			if (r.type !== qi || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var ci = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || o(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, li = (e, t) => {
	let n = {};
	for (let r in e) s(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function ui(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? di(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (fi(o, r, n) && !ai(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || di(r, o, l) : !!o;
	return !1;
}
function di(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!d(e, a) || fi(t, e, a) && !ai(n, a)) return !0;
	}
	return !1;
}
function fi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && b(r) && b(i) ? !Te(r, i) : r !== i;
}
function pi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var mi = {}, hi = () => Object.create(mi), gi = (e) => Object.getPrototypeOf(e) === mi;
function _i(e, t, n, r = !1) {
	let i = {}, a = hi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), yi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Gt(i) : e.type.props ? i : a, e.attrs = a;
}
function vi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ j(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (ai(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) {
					if (d(a, o)) u !== a[o] && (a[o] = u, l = !0);
					else {
						let t = E(o);
						i[t] = bi(c, s, t, u, e, !1);
					}
				} else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		yi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (d(t, a) || (r = ae(a)) !== a && d(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = bi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && d(t, e) || (delete a[e], l = !0);
	}
	l && ct(e.attrs, "set", "");
}
function yi(e, t, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let n in t) {
		if (te(n)) continue;
		let l = t[n], u;
		a && d(a, u = E(n)) ? !o || !o.includes(u) ? r[u] = l : (c ||= {})[u] = l : ai(e.emitsOptions, n) || n in i && l === i[n] || (i[n] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ j(r), i = c || n;
		for (let n = 0; n < o.length; n++) {
			let s = o[n];
			r[s] = bi(a, t, s, i[s], e, !d(i, s));
		}
	}
	return s;
}
function bi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = d(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && g(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = wa(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === ae(n)) && (r = !0));
	}
	return r;
}
var xi = /* @__PURE__ */ new WeakMap();
function Si(e, t, i = !1) {
	let a = i ? xi : t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, l = {}, u = [], p = !1;
	if (!g(e)) {
		let n = (e) => {
			p = !0;
			let [n, r] = Si(e, t, !0);
			c(l, n), r && u.push(...r);
		};
		!i && t.mixins.length && t.mixins.forEach(n), e.extends && n(e.extends), e.mixins && e.mixins.forEach(n);
	}
	if (!s && !p) return b(e) && a.set(e, r), r;
	if (f(s)) for (let e = 0; e < s.length; e++) {
		let t = E(s[e]);
		Ci(t) && (l[t] = n);
	}
	else if (s) for (let e in s) {
		let t = E(e);
		if (Ci(t)) {
			let n = s[e], r = l[t] = f(n) || g(n) ? { type: n } : c({}, n), i = r.type, a = !1, o = !0;
			if (f(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = g(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				}
				n === "String" && (o = !1);
			}
			else a = g(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || d(r, "default")) && u.push(t);
		}
	}
	let m = [l, u];
	return b(e) && a.set(e, m), m;
}
function Ci(e) {
	return e[0] !== "$" && !te(e);
}
var wi = (e) => e === "_" || e === "_ctx" || e === "$stable", Ti = (e) => f(e) ? e.map(fa) : [fa(e)], Ei = (e, t, n) => {
	if (t._n) return t;
	let r = Hn((...e) => Ti(t(...e)), n);
	return r._c = !1, r;
}, Di = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (wi(n)) continue;
		let i = e[n];
		if (g(i)) t[n] = Ei(n, i, r);
		else if (i != null) {
			let e = Ti(i);
			t[n] = () => e;
		}
	}
}, Oi = (e, t) => {
	let n = Ti(t);
	e.slots.default = () => n;
}, ki = (e, t, n) => {
	for (let r in t) (n || !wi(r)) && (e[r] = t[r]);
}, Ai = (e, t, n) => {
	let r = e.slots = hi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (ki(r, t, n), n && le(r, "_", e, !0)) : Di(t, r);
	} else t && Oi(e, t);
}, ji = (e, t, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = n;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? r && e === 1 ? o = !1 : ki(a, t, r) : (o = !t.$stable, Di(t, a)), s = t;
	} else t && (Oi(e, t), s = { default: 1 });
	if (o) for (let e in a) !wi(e) && s[e] == null && delete a[e];
}, Mi = Wi;
function Ni(e) {
	return Pi(e);
}
function Pi(e, t) {
	let a = fe();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = i, insertStaticContent: v } = e, y = (e, t, n, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !ia(e, t) && (i = Se(e), _e(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === r && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case Ki:
				b(e, t, n, i);
				break;
			case qi:
				x(e, t, n, i);
				break;
			case Ji:
				e ?? S(t, n, i, s);
				break;
			case Gi:
				oe(e, t, n, i, a, o, s, c, l);
				break;
			default: f & 1 ? T(e, t, n, i, a, o, s, c, l) : f & 6 ? se(e, t, n, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, n, i, a, o, s, c, l, we);
		}
		d != null && a ? dr(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && dr(e.ref, null, o, e, !0);
	}, b = (e, t, n, r) => {
		if (e == null) o(t.el = u(t.children), n, r);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, x = (e, t, n, r) => {
		e == null ? o(t.el = d(t.children || ""), n, r) : t.el = e.el;
	}, S = (e, t, n, r) => {
		[e.el, e.anchor] = v(e.children, t, n, r, e.el, e.anchor);
	}, C = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, w = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, T = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) ee(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), E(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, ee = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: v } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && re(e.children, d, null, r, i, Fi(e, a), s, u), v && Un(e, null, r, "created"), ne(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !te(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && ga(f, r, e);
		}
		v && Un(e, null, r, "beforeMount");
		let y = Li(i, g);
		y && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || y || v) && Mi(() => {
			try {
				f && ga(f, r, e), y && g.enter(d), v && Un(e, null, r, "mounted");
			} finally {}
		}, i);
	}, ne = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Ui(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ne(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, re = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? pa(e[l]) : fa(e[l]);
			y(null, c, t, n, r, i, a, o, s);
		}
	}, E = (e, t, r, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || n, h = t.props || n, g;
		if (r && Ii(r, !1), (g = h.onVnodeBeforeUpdate) && ga(g, r, t, e), f && Un(t, e, r, "beforeUpdate"), r && Ii(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? ie(e.dynamicChildren, d, l, r, i, Fi(t, a), o) : s || pe(e, t, l, null, r, i, Fi(t, a), o, !1), u > 0) {
			if (u & 16) ae(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !s && d == null && ae(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && Mi(() => {
			g && ga(g, r, t, e), f && Un(t, e, r, "updated");
		}, i);
	}, ie = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || Hi(c), d = u && (c.type === Gi || !ia(c, l) || c.shapeFlag & 198) ? m(u) : n;
			y(c, l, d, null, r, i, a, o, !0);
		}
	}, ae = (e, t, r, i, a) => {
		if (t !== r) {
			if (t !== n) for (let n in t) !te(n) && !(n in r) && c(e, n, t[n], null, a, i);
			for (let n in r) {
				if (te(n)) continue;
				let o = r[n], s = t[n];
				o !== s && n !== "value" && c(e, n, s, o, a, i);
			}
			"value" in r && c(e, "value", t.value, r.value, a);
		}
	}, oe = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), re(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ie(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Ri(e, t, !0)) : pe(e, t, n, f, i, a, s, c, l);
	}, se = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ce(t, n, r, i, a, o, c) : le(e, t, c);
	}, ce = (e, t, n, r, i, a, o) => {
		let s = e.component = ba(e, r, i);
		if (mr(e) && (s.ctx.renderer = we), Oa(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ue, o, a), !e.el) {
				let r = s.subTree = sa(qi);
				x(null, r, t, n), e.placeholder = r.el;
			}
		} else ue(s, e, t, n, i, a, o);
	}, le = (e, t, n) => {
		let r = t.component = e.component;
		if (ui(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, t.placeholder = e.placeholder, de(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, t.placeholder = e.placeholder, r.vnode = t;
	}, ue = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Bi(e);
					if (n) {
						t && (t.el = c.el, de(e, t, o)), n.asyncDep.then(() => {
							Mi(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Ii(e, !1), t ? (t.el = c.el, de(e, t, o)) : t = c, n && D(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ga(d, s, t, c), Ii(e, !0);
				let f = oi(e), p = e.subTree;
				e.subTree = f, y(p, f, m(p.el), Se(p), e, i, a), t.el = f.el, u === null && pi(e, f.el), r && Mi(r, i), (d = t.props && t.props.onVnodeUpdated) && Mi(() => ga(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = pr(t);
				if (Ii(e, !1), l && D(l), !m && (o = c && c.onVnodeBeforeMount) && ga(o, d, t), Ii(e, !0), s && Ee) {
					let t = () => {
						e.subTree = oi(e), Ee(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = oi(e);
					y(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Mi(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Mi(() => ga(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && pr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Mi(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ie(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => An(u), Ii(e, !0), l();
	}, de = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, vi(e, t.props, r, n), ji(e, t.children, n), Ze(), Nn(e), Qe();
	}, pe = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				he(l, d, n, r, i, a, o, s, c);
				return;
			}
			if (f & 256) {
				me(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && xe(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? he(l, d, n, r, i, a, o, s, c) : xe(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && re(d, n, r, i, a, o, s, c));
	}, me = (e, t, n, i, a, o, s, c, l) => {
		e ||= r, t ||= r;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let r = t[p] = l ? pa(t[p]) : fa(t[p]);
			y(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? xe(e, a, o, !0, !1, f) : re(t, n, i, a, o, s, c, l, f);
	}, he = (e, t, n, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? pa(t[u]) : fa(t[u]);
			if (ia(r, i)) y(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? pa(t[p]) : fa(t[p]);
			if (ia(r, i)) y(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, r = e < d ? t[e].el : i;
				for (; u <= p;) y(null, t[u] = l ? pa(t[u]) : fa(t[u]), n, r, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) _e(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? pa(t[u]) : fa(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let v, b = 0, x = p - h + 1, S = !1, C = 0, w = Array(x);
			for (u = 0; u < x; u++) w[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (b >= x) {
					_e(r, a, o, !0);
					continue;
				}
				let i;
				if (r.key != null) i = g.get(r.key);
				else for (v = h; v <= p; v++) if (w[v - h] === 0 && ia(r, t[v])) {
					i = v;
					break;
				}
				i === void 0 ? _e(r, a, o, !0) : (w[i - h] = u + 1, i >= C ? C = i : S = !0, y(r, t[i], n, null, a, o, s, c, l), b++);
			}
			let T = S ? zi(w) : r;
			for (v = T.length - 1, u = x - 1; u >= 0; u--) {
				let e = h + u, r = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Hi(f) : i;
				w[u] === 0 ? y(null, r, n, p, a, o, s, c, l) : S && (v < 0 || u !== T[v] ? ge(r, n, p, 2) : v--);
			}
		}
	}, ge = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) ge(e.component.subTree, t, n, r);
		else if (d & 128) e.suspense.move(t, n, r);
		else if (d & 64) c.move(e, t, n, we);
		else if (c === Gi) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) ge(u[e], t, n, r);
			o(e.anchor, t, n);
		} else if (c === Ji) C(e, t, n);
		else if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[nr] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), Mi(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[nr];
					a._isLeaving && a[nr](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, _e = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (Ze(), dr(s, null, n, e, !0), Qe()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !pr(e), v;
		if (g && (v = o && o.onVnodeBeforeUnmount) && ga(v, t, e), u & 6) be(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Un(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, we, r) : l && !l.hasOnce && (a !== Gi || d > 0 && d & 64) ? xe(l, t, n, !1, !0) : (a === Gi && d & 384 || !i && u & 16) && xe(c, t, n), r && ve(e);
		}
		let y = m != null && p == null;
		(g && (v = o && o.onVnodeUnmounted) || h || y) && Mi(() => {
			v && ga(v, t, e), h && Un(e, null, t, "unmounted"), y && (e.el = null);
		}, n);
	}, ve = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === Gi;
		if (a && !i) {
			ye(n, r);
			return;
		}
		if (t === Ji) {
			w(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? or(e) : e, c = () => {
			a ? m(n) && ye(n, r) : s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (o && o.shapeFlag & 1 && i && !i.persisted) {
			let { leave: e, delayLeave: t } = i, n = o.el, r = () => e(n, c);
			t ? t(n, c, r) : r();
		} else c();
	}, ye = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, be = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Vi(c), Vi(l), r && D(r), i.stop(), a ? (a.flags |= 8, _e(o, e, t, n)) : e.vnode.el && o && (o.transition = e.vnode.transition, _e(o, e, t, n)), s && Mi(s, t), Mi(() => {
			e.isUnmounted = !0;
		}, t);
	}, xe = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) _e(e[o], t, n, r, i);
	}, Se = (e) => {
		if (e.shapeFlag & 6) return Se(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[er];
		return n ? h(n) : t;
	}, Ce = (e, t, n) => {
		In(() => {
			e == null ? t._vnode && _e(t._vnode, null, null, !0) : y(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : ya());
	}, we = {
		p: y,
		um: _e,
		m: ge,
		r: ve,
		mt: ce,
		mc: re,
		pc: pe,
		pbc: ie,
		n: Se,
		o: e
	}, Te, Ee;
	return t && ([Te, Ee] = t(we)), {
		render: Ce,
		hydrate: Te,
		createApp: $r(Ce, Te)
	};
}
function Fi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ii({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Li(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ri(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (f(r) && f(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = pa(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Ri(t, a)), a.type === Ki && (a.patchFlag === -1 && (a = i[e] = pa(a)), a.el = t.el), a.type === qi && !a.el && (a.el = t.el);
	}
}
function zi(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function Bi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Bi(t);
}
function Vi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Hi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Hi(t.subTree) : null;
}
var Ui = (e) => e.__isSuspense;
function Wi(e, t) {
	t && t.pendingBranch ? f(e) ? t.effects.push(...e) : t.effects.push(e) : Mn(e);
}
var Gi = /* @__PURE__ */ Symbol.for("v-fgt"), Ki = /* @__PURE__ */ Symbol.for("v-txt"), qi = /* @__PURE__ */ Symbol.for("v-cmt"), Ji = /* @__PURE__ */ Symbol.for("v-stc"), Yi = [], Xi = null;
function Zi(e = !1) {
	Yi.push(Xi = e ? null : []);
}
function Qi() {
	Yi.pop(), Xi = Yi[Yi.length - 1] || null;
}
var $i = 1;
function ea(e, t = !1) {
	$i += e, e < 0 && Xi && t && (Xi.hasOnce = !0);
}
function ta(e) {
	return e.dynamicChildren = $i > 0 ? Xi || r : null, Qi(), $i > 0 && Xi && Xi.push(e), e;
}
function na(e, t, n, r, i, a) {
	return ta(L(e, t, n, r, i, a, !0));
}
function ra(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function ia(e, t) {
	return e.type === t.type && e.key === t.key;
}
var aa = ({ key: e }) => e ?? null, oa = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : v(e) || /* @__PURE__ */ M(e) || g(e) ? {
	i: zn,
	r: e,
	k: t,
	f: !!n
} : e);
function L(e, t = null, n = null, r = 0, i = null, a = e === Gi ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && aa(t),
		ref: t && oa(t),
		scopeId: Bn,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: zn
	};
	return s ? (ma(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= v(n) ? 8 : 16), $i > 0 && !o && Xi && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Xi.push(c), c;
}
var sa = ca;
function ca(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== jr || (e = qi), ra(e)) {
		let r = ua(e, t, !0);
		return n && ma(r, n), $i > 0 && !a && Xi && (r.shapeFlag & 6 ? Xi[Xi.indexOf(e)] = r : Xi.push(r)), r.patchFlag = -2, r;
	}
	if (Fa(e) && (e = e.__vccOpts), t) {
		t = la(t);
		let { class: e, style: n } = t;
		e && !v(e) && (t.class = ve(e)), b(n) && (/* @__PURE__ */ Zt(n) && !f(n) && (n = c({}, n)), t.style = pe(n));
	}
	let o = v(e) ? 1 : Ui(e) ? 128 : tr(e) ? 64 : b(e) ? 4 : g(e) ? 2 : 0;
	return L(e, t, n, r, i, o, a, !0);
}
function la(e) {
	return e ? /* @__PURE__ */ Zt(e) || gi(e) ? c({}, e) : e : null;
}
function ua(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ha(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && aa(l),
		ref: t && t.ref ? n && a ? f(a) ? a.concat(oa(t)) : [a, oa(t)] : oa(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== Gi ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && ua(e.ssContent),
		ssFallback: e.ssFallback && ua(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && ar(u, c.clone(u)), u;
}
function da(e = " ", t = 0) {
	return sa(Ki, null, e, t);
}
function fa(e) {
	return e == null || typeof e == "boolean" ? sa(qi) : f(e) ? sa(Gi, null, e.slice()) : ra(e) ? pa(e) : sa(Ki, null, String(e));
}
function pa(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : ua(e);
}
function ma(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (f(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), ma(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !gi(t) ? t._ctx = zn : r === 3 && zn && (zn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (g(t)) {
		if (r & 65) {
			ma(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: zn
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [da(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function ha(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = ve([t.class, r.class]));
		else if (e === "style") t.style = pe([t.style, r.style]);
		else if (o(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(f(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !s(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function ga(e, t, n, r = null) {
	yn(e, t, 7, [n, r]);
}
var _a = Zr(), va = 0;
function ya() {
	return va;
}
function ba(e, t, r) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || _a, o = {
		uid: va++,
		vnode: e,
		type: i,
		parent: t,
		appContext: a,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new je(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: t ? t.provides : Object.create(a.provides),
		ids: t ? t.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: Si(i, a),
		emitsOptions: ii(i, a),
		emit: null,
		emitted: null,
		propsDefaults: n,
		inheritAttrs: i.inheritAttrs,
		ctx: n,
		data: n,
		props: n,
		attrs: n,
		slots: n,
		refs: n,
		setupState: n,
		setupContext: null,
		suspense: r,
		suspenseId: r ? r.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = ni.bind(null, o), e.ce && e.ce(o), o;
}
var R = null, xa = () => R || zn, Sa, Ca;
{
	let e = fe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Sa = t("__VUE_INSTANCE_SETTERS__", (e) => R = e), Ca = t("__VUE_SSR_SETTERS__", (e) => Da = e);
}
var wa = (e) => {
	let t = R;
	return Sa(e), e.scope.on(), () => {
		e.scope.off(), Sa(t);
	};
}, Ta = () => {
	R && R.scope.off(), Sa(null);
};
function Ea(e) {
	return e.vnode.shapeFlag & 4;
}
var Da = !1;
function Oa(e, t = !1, n = !1) {
	t && Ca(t);
	let { props: r, children: i } = e.vnode, a = Ea(e);
	_i(e, r, a, t), Ai(e, i, n || t);
	let o = a ? ka(e, t) : void 0;
	return t && Ca(!1), o;
}
function ka(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Fr);
	let { setup: r } = n;
	if (r) {
		Ze();
		let n = e.setupContext = r.length > 1 ? Na(e) : null, i = wa(e), a = vn(r, e, 0, [e.props, n]), o = x(a);
		if (Qe(), i(), (o || e.sp) && !pr(e) && cr(e), o) {
			if (a.then(Ta, Ta), t) return a.then((n) => {
				Ca(!0);
				try {
					Aa(e, n, t);
				} finally {
					Ca(!1);
				}
			}).catch((t) => {
				bn(t, e, 0);
			});
			e.asyncDep = a;
		} else Aa(e, a, t);
	} else ja(e, t);
}
function Aa(e, t, n) {
	g(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) && (e.setupState = on(t)), ja(e, n);
}
function ja(e, t, n) {
	let r = e.type;
	e.render ||= r.render || i;
	{
		let t = wa(e);
		Ze();
		try {
			Rr(e);
		} finally {
			Qe(), t();
		}
	}
}
var Ma = { get(e, t) {
	return A(e, "get", ""), e[t];
} };
function Na(e) {
	return {
		attrs: new Proxy(e.attrs, Ma),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Pa(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(on(Qt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Nr) return Nr[n](e);
		},
		has(e, t) {
			return t in e || t in Nr;
		}
	}) : e.proxy;
}
function Fa(e) {
	return g(e) && "__vccOpts" in e;
}
var Ia = (e, t) => /* @__PURE__ */ dn(e, t, Da), La = "3.5.44", Ra = void 0, za = typeof window < "u" && window.trustedTypes;
if (za) try {
	Ra = /* @__PURE__ */ za.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Ba = Ra ? (e) => Ra.createHTML(e) : (e) => e, Va = "http://www.w3.org/2000/svg", Ha = "http://www.w3.org/1998/Math/MathML", Ua = typeof document < "u" ? document : null, Wa = Ua && /* @__PURE__ */ Ua.createElement("template"), Ga = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Ua.createElementNS(Va, e) : t === "mathml" ? Ua.createElementNS(Ha, e) : n ? Ua.createElement(e, { is: n }) : Ua.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Ua.createTextNode(e),
	createComment: (e) => Ua.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Ua.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			Wa.innerHTML = Ba(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Wa.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Ka = /* @__PURE__ */ Symbol("_vtc");
function qa(e, t, n) {
	let r = e[Ka];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Ja = /* @__PURE__ */ Symbol("_vod"), Ya = /* @__PURE__ */ Symbol("_vsh"), Xa = /* @__PURE__ */ Symbol(""), Za = /(?:^|;)\s*display\s*:/;
function Qa(e, t, n) {
	let r = e.style, i = v(n), a = !1;
	if (n && !i) {
		if (t) {
			if (v(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? eo(r, t, "");
			}
			else for (let e in t) n[e] ?? eo(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? eo(r, i, "") : io(e, i, !v(t) && t ? t[i] : void 0, o) || eo(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Xa];
			e && (n += ";" + e), r.cssText = n, a = Za.test(n);
		}
	} else t && e.removeAttribute("style");
	Ja in e && (i && t === n || (e[Ja] = a ? r.display : ""), e[Ya] && (r.display = "none"));
}
var $a = /\s*!important$/;
function eo(e, t, n) {
	if (f(n)) n.forEach((n) => eo(e, t, n));
	else if (n ??= "", t.startsWith("--")) $a.test(n) ? e.setProperty(t, n.replace($a, ""), "important") : e.setProperty(t, n);
	else {
		let r = ro(e, t);
		$a.test(n) ? e.setProperty(ae(r), n.replace($a, ""), "important") : e[r] = n;
	}
}
var to = [
	"Webkit",
	"Moz",
	"ms"
], no = {};
function ro(e, t) {
	let n = no[t];
	if (n) return n;
	let r = E(t);
	if (r !== "filter" && r in e) return no[t] = r;
	r = oe(r);
	for (let n = 0; n < to.length; n++) {
		let i = to[n] + r;
		if (i in e) return no[t] = i;
	}
	return t;
}
function io(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && v(r) && n === r;
}
var ao = "http://www.w3.org/1999/xlink";
function oo(e, t, n, r, i, a = ye(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ao, t.slice(6, t.length)) : e.setAttributeNS(ao, t, n) : n == null || a && !be(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : y(n) ? String(n) : n);
}
function so(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Ba(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		r === i && "_value" in e || (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = be(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function co(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function lo(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var uo = /* @__PURE__ */ Symbol("_vei");
function fo(e, t, n, r, i = null) {
	let a = e[uo] || (e[uo] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = ho(t);
		r ? co(e, n, a[t] = yo(r, i), s) : o && (lo(e, n, o, s), a[t] = void 0);
	}
}
var po = /(Once|Passive|Capture)$/, mo = /^on:?(?:Once|Passive|Capture)$/;
function ho(e) {
	let t, n;
	for (; (n = e.match(po)) && !mo.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : ae(e.slice(2)), t];
}
var go = 0, _o = /* @__PURE__ */ Promise.resolve(), vo = () => go ||= (_o.then(() => go = 0), Date.now());
function yo(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (f(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && yn(e, t, 5, a);
			}
		} else yn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = vo(), n;
}
var bo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, xo = (e, t, n, r, i, a) => {
	let c = i === "svg";
	t === "class" ? qa(e, r, c) : t === "style" ? Qa(e, n, r) : o(t) ? s(t) || fo(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : So(e, t, r, c)) ? (so(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || oo(e, t, r, c, a, t !== "value")) : e._isVueCE && (Co(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !v(r))) ? so(e, E(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), oo(e, t, r, c));
};
function So(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && bo(t) && g(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return bo(t) && v(n) ? !1 : t in e;
}
function Co(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = E(t);
	return Array.isArray(n) ? n.some((e) => E(e) === r) : Object.keys(n).some((e) => E(e) === r);
}
var wo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return f(t) ? (e) => D(t, e) : t;
};
function To(e) {
	e.target.composing = !0;
}
function Eo(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Do = /* @__PURE__ */ Symbol("_assign"), Oo = /* @__PURE__ */ Symbol("_initialValue");
function ko(e, t, n) {
	return t && (e = e.trim()), n && (e = ue(e)), e;
}
var Ao = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[Oo] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Oo] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[Do] = wo(i);
		let a = r || i.props && i.props.type === "number";
		co(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Do](ko(e.value, n, a));
		}), (n || a) && co(e, "change", () => {
			e.value = ko(e.value, n, a);
		}), t || (co(e, "compositionstart", To), co(e, "compositionend", Eo), co(e, "change", Eo));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[Oo];
		delete e[Oo], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[Do](ko(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Do] = wo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ue(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, jo = {
	deep: !0,
	created(e, t, n) {
		e[Do] = wo(n), co(e, "change", () => {
			let t = e._modelValue, n = No(e), r = e.checked, i = e[Do];
			if (f(t)) {
				let e = Ee(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (m(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(Po(e, r));
		});
	},
	mounted: Mo,
	beforeUpdate(e, t, n) {
		e[Do] = wo(n), Mo(e, t, n);
	}
};
function Mo(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (f(t)) i = Ee(t, r.props.value) > -1;
	else if (m(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Te(t, Po(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
function No(e) {
	return "_value" in e ? e._value : e.value;
}
function Po(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var Fo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Io = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, t) => Fo.some((n) => e[`${n}Key`] && !t.includes(n))
}, Lo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Io[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Ro = /* @__PURE__ */ c({ patchProp: xo }, Ga), zo;
function Bo() {
	return zo ||= Ni(Ro);
}
var Vo = ((...e) => {
	let t = Bo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Uo(e);
		if (!r) return;
		let i = t._component;
		g(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Ho(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Ho(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Uo(e) {
	return v(e) ? document.querySelector(e) : e;
}
// node_modules/pinia/dist/pinia.mjs
var Wo, Go = (e) => Wo = e, Ko = () => Kn() && Gn(qo) || Wo, qo = Symbol();
function Jo(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Yo;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Yo ||= {});
var Xo = typeof window < "u", Zo = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Qo(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function $o(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		is(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function es(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function ts(e) {
	try {
		e.dispatchEvent(new MouseEvent("click"));
	} catch {
		let t = document.createEvent("MouseEvents");
		t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(t);
	}
}
var ns = typeof navigator == "object" ? navigator : { userAgent: "" }, rs = /Macintosh/.test(ns.userAgent) && /AppleWebKit/.test(ns.userAgent) && !/Safari/.test(ns.userAgent), is = Xo ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !rs ? as : "msSaveOrOpenBlob" in ns ? os : ss : () => {};
function as(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? ts(r) : es(r.href) ? $o(e, t, n) : (r.target = "_blank", ts(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		ts(r);
	}, 0));
}
function os(e, t = "download", n) {
	if (typeof e == "string") {
		if (es(e)) $o(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				ts(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(Qo(e, n), t);
}
function ss(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return $o(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Zo.HTMLElement)) || "safari" in Zo, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || rs) && typeof FileReader < "u") {
		let t = new FileReader();
		t.onloadend = function() {
			let e = t.result;
			if (typeof e != "string") throw r = null, Error("Wrong reader.result type");
			e = o ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = e : location.assign(e), r = null;
		}, t.readAsDataURL(e);
	} else {
		let t = URL.createObjectURL(e);
		r ? r.location.assign(t) : location.href = t, r = null, setTimeout(function() {
			URL.revokeObjectURL(t);
		}, 4e4);
	}
}
var { assign: cs } = Object;
function ls() {
	let e = Me(!0), t = e.run(() => /* @__PURE__ */ tn({})), n = [], r = [], i = Qt({
		install(e) {
			Go(i), i._a = e, e.provide(qo, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
		},
		use(e) {
			return this._a ? n.push(e) : r.push(e), this;
		},
		_p: n,
		_a: null,
		_e: e,
		_s: /* @__PURE__ */ new Map(),
		state: t
	});
	return i;
}
var us = () => {};
function ds(e, t, n, r = us) {
	e.push(t);
	let i = () => {
		let n = e.indexOf(t);
		n > -1 && (e.splice(n, 1), r());
	};
	return !n && Ne() && Pe(i), i;
}
function fs(e, ...t) {
	e.slice().forEach((e) => {
		e(...t);
	});
}
var ps = (e) => e(), ms = Symbol(), hs = Symbol();
function gs(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		e[n] = Jo(i) && Jo(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ M(r) && !/* @__PURE__ */ Jt(r) ? gs(i, r) : r;
	}
	return e;
}
var _s = Symbol();
function vs(e) {
	return !Jo(e) || !e.hasOwnProperty(_s);
}
var { assign: ys } = Object;
function bs(e) {
	return !!(/* @__PURE__ */ M(e) && e.effect);
}
function xs(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), ys(/* @__PURE__ */ sn(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Qt(Ia(() => {
			Go(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = Ss(e, l, t, n, r, !0), c;
}
function Ss(e, t, n = {}, r, i, a) {
	let o, s = ys({ actions: {} }, n), c = { deep: !0 }, l, u, d = [], f = [], p, m = r.state.value[e];
	!a && !m && (r.state.value[e] = {});
	let h;
	function g(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: Yo.patchFunction,
			storeId: e,
			events: p
		}) : (gs(r.state.value[e], t), n = {
			type: Yo.patchObject,
			payload: t,
			storeId: e,
			events: p
		});
		let i = h = Symbol();
		On().then(() => {
			h === i && (l = !0);
		}), u = !0, fs(d, n, r.state.value[e]);
	}
	let v = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			ys(e, t);
		});
	} : us;
	function y() {
		o.stop(), d = [], f = [], r._s.delete(e);
	}
	let b = (t, n = "") => {
		if (ms in t) return t[hs] = n, t;
		let i = function() {
			Go(r);
			let n = Array.from(arguments), a = [], o = [];
			function s(e) {
				a.push(e);
			}
			function c(e) {
				o.push(e);
			}
			fs(f, {
				args: n,
				name: i[hs],
				store: x,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : x, n);
			} catch (e) {
				throw fs(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (fs(a, e), e)).catch((e) => (fs(o, e), Promise.reject(e))) : (fs(a, l), l);
		};
		return i[ms] = !0, i[hs] = n, i;
	}, x = /* @__PURE__ */ Wt({
		_p: r,
		$id: e,
		$onAction: ds.bind(null, f),
		$patch: g,
		$reset: v,
		$subscribe(t, n = {}) {
			let i = ds(d, t, n.detached, () => a()), a = o.run(() => Xn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: Yo.direct,
					events: p
				}, r);
			}, ys({}, c, n)));
			return i;
		},
		$dispose: y
	});
	r._s.set(e, x);
	let S = (r._a && r._a.runWithContext || ps)(() => r._e.run(() => (o = Me()).run(() => t({ action: b }))));
	for (let t in S) {
		let n = S[t];
		/* @__PURE__ */ M(n) && !bs(n) || /* @__PURE__ */ Jt(n) ? a || (m && vs(n) && (/* @__PURE__ */ M(n) ? n.value = m[t] : gs(n, m[t])), r.state.value[e][t] = n) : typeof n == "function" && (S[t] = b(n, t), s.actions[t] = n);
	}
	return ys(x, S), ys(/* @__PURE__ */ j(x), S), Object.defineProperty(x, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			g((t) => {
				ys(t, e);
			});
		}
	}), r._p.forEach((e) => {
		ys(x, o.run(() => e({
			store: x,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), m && a && n.hydrate && n.hydrate(x.$state, m), l = !0, u = !0, x;
}
function Cs(e, t, n) {
	let r, i, a = typeof t == "function";
	typeof e == "string" ? (r = e, i = a ? n : t) : (i = e, r = e.id);
	function o(e, n) {
		let o = Kn();
		return e ||= o ? Gn(qo, null) : null, e && Go(e), e = Wo, e._s.has(r) || (a ? Ss(r, t, i, e) : xs(r, i, e)), e._s.get(r);
	}
	return o.$id = r, o;
}
// src/host-context.ts
function z() {
	return document;
}
function B() {
	return window;
}
// src/character-management-module.ts
var ws = "th-modern-character-management", Ts = "th-modern-character-panel", Es = "th-modern-character-list", Ds = "th-modern-character-editor", Os = "th-modern-character-summary", ks = "th-modern-character-summary-main", As = "th-modern-character-summary-identity", js = "th-modern-character-summary-buttons", Ms = "th-modern-character-summary-fields";
function Ns(e, t) {
	e.body.classList.toggle(ws, t), e.querySelector("#right-nav-panel")?.classList.toggle(Ts, t), e.querySelector("#rm_characters_block")?.classList.toggle(Es, t), e.querySelector("#rm_ch_create_block")?.classList.toggle(Ds, t);
}
function Ps(e, t, n) {
	let r = e.createComment(`th-modern-character-${t.id || t.classList[0] || "node"}`);
	return t.before(r), n.append(t), {
		marker: r,
		node: t
	};
}
function Fs(e) {
	e.marker.parentNode?.insertBefore(e.node, e.marker), e.marker.remove();
}
function Is(e) {
	e && ([...e.moves].reverse().forEach(Fs), e.summary.classList.remove(Os), e.main.remove(), e.fields.remove());
}
function Ls(e) {
	let t = e.querySelector("#avatar-and-name-block"), n = e.querySelector("#avatar_div"), r = e.querySelector("#rm_PinAndTabs"), i = e.querySelector("#name_div"), a = e.querySelector("#avatar_controls > .form_create_bottom_buttons_block"), o = e.querySelector("#char-management-dropdown")?.closest("label"), s = e.querySelector("#tags_div");
	if (!t || !n || !r || !i || !a || !o || !s) return null;
	let c = e.createElement("div");
	c.className = ks;
	let l = e.createElement("div");
	l.className = As;
	let u = e.createElement("div");
	u.className = js;
	let d = e.createElement("div");
	d.className = Ms;
	let f = [];
	try {
		f.push(Ps(e, n, c)), c.append(l, u), f.push(Ps(e, r, l)), f.push(Ps(e, i, l)), f.push(Ps(e, a, u)), f.push(Ps(e, o, d)), f.push(Ps(e, s, d)), t.append(c, d), t.classList.add(Os);
	} catch (e) {
		throw [...f].reverse().forEach(Fs), c.remove(), d.remove(), e;
	}
	return {
		buttons: u,
		buttonsBlock: a,
		dropdown: o,
		fields: d,
		identity: l,
		main: c,
		moves: f,
		name: i,
		pinAndTabs: r,
		summary: t,
		tags: s
	};
}
function Rs(e, t) {
	return t.summary.isConnected && t.summary.classList.contains(Os) && t.main.parentElement === t.summary && t.fields.parentElement === t.summary && t.moves.every((e) => e.marker.isConnected && e.node.isConnected) && e.querySelector("#rm_PinAndTabs") === t.pinAndTabs && t.pinAndTabs.parentElement === t.identity && e.querySelector("#name_div") === t.name && t.name.parentElement === t.identity && t.buttonsBlock.parentElement === t.buttons && e.querySelector("#char-management-dropdown")?.closest("label") === t.dropdown && t.dropdown.parentElement === t.fields && e.querySelector("#tags_div") === t.tags && t.tags.parentElement === t.fields;
}
function zs(e) {
	return e?.dataset.menuType === "create" || e?.dataset.menuType === "character_edit";
}
function Bs(e) {
	let t = z(), n = B(), r = n.MutationObserver, i = null, a = null, o = null, s = 0, c = () => {
		Is(i), i = null;
	}, l = () => {
		a &&= (Fs(a), null);
	}, u = (e) => {
		let n = t.querySelector("#rm_button_panel_pin_div"), r = e?.querySelector(":scope > .th-modern-drawer-titlebar .th-modern-drawer-actions");
		a && a.marker.isConnected && a.node === n && a.node.parentElement === r || (l(), n && r && (a = Ps(t, n, r), r.prepend(n)));
	}, d = () => {
		c(), l(), Ns(t, !1);
	}, f = () => {
		if (s = 0, !(e.is_active && e.settings.modernCharacterManagement)) {
			h(null), d();
			return;
		}
		Ns(t, !0);
		let n = t.querySelector("#right-nav-panel");
		h(n), u(n), zs(n) ? (i && !Rs(t, i) && c(), i ??= Ls(t)) : c();
	}, p = () => {
		s ||= n.requestAnimationFrame(f);
	}, m = new r(p);
	function h(e) {
		e !== o && (m.disconnect(), o = e, e && m.observe(e, {
			attributes: !0,
			attributeFilter: ["data-menu-type"],
			childList: !0,
			subtree: !0
		}));
	}
	let g = Xn(() => [e.is_active, e.settings.modernCharacterManagement], p, { immediate: !0 });
	return { destroy() {
		g(), m.disconnect(), s &&= (n.cancelAnimationFrame(s), 0), d();
	} };
}
// src/pointer-drag.ts
function Vs({ target: e, event: t, onMove: n, onStop: r, cursor: i = "col-resize" }) {
	let a = e.ownerDocument, o = a.defaultView || (typeof window < "u" ? window : null);
	if (!o) return r(), () => {};
	let s = t.pointerId, c = a.createElement("div");
	c.className = "th-modern-drag-shield", c.setAttribute("aria-hidden", "true"), c.style.cssText = `position:fixed;inset:0;z-index:2147483647;pointer-events:auto;touch-action:none;cursor:${i};background:transparent`, a.body.append(c);
	let l = !0, u = () => {
		if (l) {
			l = !1, o.removeEventListener("pointermove", d, !0), o.removeEventListener("pointerup", f, !0), o.removeEventListener("pointercancel", f, !0), o.removeEventListener("blur", u), o.removeEventListener("keydown", m, !0), a.removeEventListener("visibilitychange", p), e.removeEventListener("lostpointercapture", f), c.remove();
			try {
				e.hasPointerCapture?.(s) && e.releasePointerCapture(s);
			} catch {}
			r();
		}
	}, d = (e) => {
		e.pointerId === s && (e.pointerType === "mouse" && !(e.buttons & 1) ? u() : n(e));
	}, f = (e) => {
		e.pointerId === s && u();
	}, p = () => {
		a.hidden && u();
	}, m = (e) => {
		e.key === "Escape" && u();
	};
	o.addEventListener("pointermove", d, !0), o.addEventListener("pointerup", f, !0), o.addEventListener("pointercancel", f, !0), o.addEventListener("blur", u), o.addEventListener("keydown", m, !0), a.addEventListener("visibilitychange", p), e.addEventListener("lostpointercapture", f);
	try {
		e.setPointerCapture?.(s);
	} catch {}
	return u;
}
// src/native-save-feedback.ts
async function Hs(e, t) {
	return await e(), t();
}
function Us(e, t) {
	return e !== t;
}
// src/preset-prompt-model.ts
function Ws(e, t, n, r, i, a, o, s) {
	return JSON.stringify({
		order: e.map(({ identifier: e, enabled: t }) => [e, !!t]),
		groups: t.map((e) => [
			e.id,
			e.name,
			e.parentId ?? null,
			e.identifiers,
			!!e.single_select
		]),
		prompts: n.map((e) => [
			e.identifier,
			e.name,
			e.role,
			!!e.marker,
			!!e.system_prompt,
			e.injection_position,
			e.injection_depth,
			o ? e.content : void 0
		]),
		counts: Object.entries(r).sort(([e], [t]) => e.localeCompare(t)),
		tokenUsage: i,
		collapsed: [...a.entries()],
		search: o,
		onlyEnabled: s
	});
}
function Gs(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return typeof t.id == "string" && Array.isArray(t.identifiers);
}
function Ks(e) {
	let t = e.extensions?.luker?.prompt_groups;
	return Array.isArray(t) ? t.filter(Gs) : [];
}
function qs(e) {
	let t = e.extensions ??= {}, n = t.luker ??= {};
	return Array.isArray(n.prompt_groups) || (n.prompt_groups = []), n.prompt_groups;
}
function Js(e, t) {
	let n = new Map(e.map((e) => [e.id, e])), r = [], i = n.get(t);
	for (; i && !r.includes(i) && r.length < 100;) r.unshift(i), i = i.parentId ? n.get(i.parentId) : void 0;
	return r;
}
function Ys(e, t) {
	let n = [], r = (i) => {
		for (let a of e) a.parentId === i && !n.includes(a.id) && a.id !== t && (n.push(a.id), r(a.id));
	};
	return r(t), n;
}
function Xs(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of [t, ...Ys(e, t)]) e.find((e) => e.id === r)?.identifiers.forEach((e) => n.add(e));
	return [...n];
}
function Zs(e, t) {
	return e.find((e) => e.identifiers.includes(t)) ?? null;
}
function Qs(e, t, n) {
	let r = [], i = /* @__PURE__ */ new Set(), a = [];
	for (let o of e) {
		let e = Zs(t, o.identifier), s = e ? Js(t, e.id) : [], c = 0;
		for (; c < a.length && c < s.length && a[c] === s[c];) c += 1;
		a = a.slice(0, c);
		for (let e = c; e < s.length; e += 1) {
			let t = s[e];
			r.push({
				kind: "group",
				group: t,
				depth: e,
				continued: i.has(t.id),
				ancestors: s.slice(0, e).map((e) => e.id)
			}), i.add(t.id), a.push(t);
		}
		r.push({
			kind: "prompt",
			identifier: o.identifier,
			enabled: o.enabled,
			prompt: n(o.identifier),
			groupId: e?.id ?? null,
			depth: s.length,
			ancestors: s.map((e) => e.id)
		});
	}
	return r;
}
function $s(e, t) {
	let n = Zs(e, t);
	return n?.single_select ? n.identifiers.filter((e) => e !== t) : [];
}
function ec(e, t) {
	for (let n of e) n.identifiers = n.identifiers.filter((e) => t.has(e));
	let n = !0;
	for (; n;) {
		n = !1;
		let t = new Set(e.map((e) => e.id));
		for (let r = e.length - 1; r >= 0; --r) {
			let i = e[r];
			i.parentId && !t.has(i.parentId) && (i.parentId = null);
			let a = e.some((e) => e.parentId === i.id);
			!i.identifiers.length && !a && (e.splice(r, 1), n = !0);
		}
	}
}
function tc(e, t, n) {
	let r = new Set(t);
	for (let t of e) t.identifiers = t.identifiers.filter((e) => !r.has(e));
	(n ? e.find((e) => e.id === n) : void 0)?.identifiers.push(...t);
}
function nc(e, t) {
	tc(e, t.identifiers, null);
	let n = {
		id: t.id,
		name: t.name,
		collapsed: !1,
		identifiers: [...t.identifiers],
		parentId: t.parentId,
		single_select: !!t.single_select
	};
	return e.push(n), n;
}
function rc(e, t) {
	let n = e.findIndex((e) => e.id === t);
	if (n === -1) return;
	let [r] = e.splice(n, 1), i = r.parentId ?? null;
	for (let n of e) n.parentId === t && (n.parentId = i);
	(i ? e.find((e) => e.id === i) : void 0)?.identifiers.push(...r.identifiers);
}
function ic(e, t, n) {
	if (n === t || n && Ys(e, t).includes(n)) return !1;
	let r = e.find((e) => e.id === t);
	return r ? (r.parentId = n, !0) : !1;
}
function ac(e, t, n, r) {
	if (t.has(n) || !e.some((e) => e.identifier === n)) return null;
	let i = e.filter((e) => t.has(e.identifier));
	if (!i.length) return null;
	let a = e.filter((e) => !t.has(e.identifier)), o = a.findIndex((e) => e.identifier === n), s = r === "before" ? o : o + 1, c = [
		...a.slice(0, s),
		...i,
		...a.slice(s)
	];
	return c.every((t, n) => t === e[n]) ? null : c;
}
function oc(e, t, n) {
	let r = n ? e.findIndex((e) => e.identifier === n) : -1, i = r === -1 ? e.length : r + 1;
	return [
		...e.slice(0, i),
		...t,
		...e.slice(i)
	];
}
// src/preset-module.ts
var sc = "th-modern-preset-enabled", cc = "data-th-preset-tab", lc = "th-modern-preset-pm-section", uc = "th-modern-pm-narrow", dc = "th-modern-pm-detail-open", fc = "th-modern-preset-tab", pc = "th-modern-preset-collapsed:", mc = [
	"main",
	"nsfw",
	"jailbreak"
], hc = 400, gc = 800, _c = 5e3, vc = 640, yc = 4, bc = 36, xc = 1, Sc = 450, Cc = 8, wc = "is-multiselect", Tc = {
	system: "系统",
	user: "用户",
	assistant: "AI"
}, Ec = [
	{
		id: "params",
		label: "参数"
	},
	{
		id: "prompts",
		label: "提示词"
	},
	{
		id: "advanced",
		label: "高级"
	}
], Dc = {
	"bi-arrow-clockwise": "fa-solid fa-rotate",
	"bi-arrow-counterclockwise": "fa-solid fa-arrow-rotate-left",
	"bi-arrow-left": "fa-solid fa-arrow-left",
	"bi-box-arrow-in-down": "fa-solid fa-file-import",
	"bi-box-arrow-right": "fa-solid fa-arrow-right-from-bracket",
	"bi-box-arrow-up": "fa-solid fa-file-export",
	"bi-check2-square": "fa-solid fa-square-check",
	"bi-check-all": "fa-solid fa-check-double",
	"bi-check-lg": "fa-solid fa-check",
	"bi-chevron-down": "fa-solid fa-chevron-down",
	"bi-chevron-right": "fa-solid fa-chevron-right",
	"bi-files": "fa-solid fa-copy",
	"bi-folder": "fa-solid fa-folder",
	"bi-folder2-open": "fa-solid fa-folder-open",
	"bi-folder-plus": "fa-solid fa-folder-plus",
	"bi-folder-x": "fa-solid fa-folder-minus",
	"bi-grip-vertical": "fa-solid fa-grip-vertical",
	"bi-pin-angle-fill": "fa-solid fa-thumbtack",
	"bi-plus-lg": "fa-solid fa-plus",
	"bi-search": "fa-solid fa-magnifying-glass",
	"bi-three-dots": "fa-solid fa-ellipsis",
	"bi-toggle-off": "fa-solid fa-toggle-off",
	"bi-toggle-on": "fa-solid fa-toggle-on",
	"bi-trash3": "fa-solid fa-trash-can",
	"bi-x-lg": "fa-solid fa-xmark"
};
function Oc(e) {
	return Dc[e] ?? (e.startsWith("fa-") ? e : `fa-solid ${e}`);
}
function kc(e) {
	try {
		return B().localStorage.getItem(e);
	} catch {
		return null;
	}
}
function Ac(e, t) {
	try {
		let n = B().localStorage;
		t === null ? n.removeItem(e) : n.setItem(e, t);
	} catch {}
}
function V(e, t, n = "", r = "") {
	let i = e.createElement(t);
	return n && (i.className = n), r && (i.textContent = r), i;
}
function jc(e, t, n, r) {
	let i = V(e, "button", `th-modern-pm-icon-button ${t}`.trim());
	return i.type = "button", i.title = n, i.setAttribute("aria-label", n), i.append(V(e, "i", Oc(r))), i;
}
function Mc(e, t, n) {
	let r = V(e, "button", "th-modern-pm-toggle");
	return r.type = "button", r.setAttribute("role", "switch"), r.setAttribute("aria-checked", t === "mixed" ? "false" : String(t)), r.toggleAttribute("data-mixed", t === "mixed"), r.setAttribute("aria-label", t === "mixed" ? `${n}（部分开启）` : n), r.title = n, r;
}
function Nc(e, t) {
	let n = e.ownerDocument.createComment("th-modern-preset");
	return e.before(n), t.append(e), {
		marker: n,
		node: e
	};
}
function Pc(e, t) {
	e && (e.marker.isConnected ? e.marker.replaceWith(e.node) : t && t(e.node), e.marker.remove());
}
function Fc(e, t) {
	return e?.name?.trim() || t;
}
async function Ic() {
	let e = B(), t = new URL("scripts/openai.js", z().baseURI || e.location.href).href, n = e.Function("url", "return import(url);");
	try {
		let r = await n(t), i = {};
		try {
			i = await n(new URL("scripts/preset-manager.js", z().baseURI || e.location.href).href);
		} catch {}
		return {
			getPromptManager: () => r.promptManager ?? e.promptManager ?? null,
			getPreset: r.getChatCompletionPreset,
			savePreset: async (e, t) => {
				let n = i.getPresetManager?.("openai");
				if (!n?.savePreset) throw Error("宿主未提供预设保存接口");
				return n.savePreset(e, t);
			}
		};
	} catch {
		return { getPromptManager: () => e.promptManager ?? null };
	}
}
var Lc = class {
	store;
	options;
	document = z();
	window = B();
	customCheckDirty;
	host;
	hostLoading = !1;
	scheduledSync = 0;
	panel;
	toolbar;
	presetsMove;
	pinMove;
	tabButtons = /* @__PURE__ */ new Map();
	dirtyBadge;
	saveButton;
	promptSection;
	shell;
	list;
	dropLine;
	editorHeader;
	editorExtra;
	editorBody;
	editorPlaceholder;
	editAreaMove;
	inspectMove;
	multiButton;
	batchBar;
	batchCount;
	tokenTotal;
	resizeObserver;
	isSwitchingPreset = !1;
	presetSwitchTimer = 0;
	observer;
	observedPanel;
	observedSettings;
	observedContainer;
	tab;
	search = "";
	onlyEnabled = !1;
	unusedOpen = !1;
	selected = /* @__PURE__ */ new Set();
	activeId = null;
	activeGroupId = null;
	anchorId = null;
	editingId = null;
	editingPrompt = null;
	detailOpen = !1;
	collapsed = /* @__PURE__ */ new Map();
	collapsedKey = "";
	rows = [];
	visibleRows = [];
	groups = [];
	orderMap = /* @__PURE__ */ new Map();
	listSignature = "";
	suppressEditorEvents = !1;
	applyTimer = 0;
	dirtyTimer = 0;
	dirtyInterval = 0;
	dirty = null;
	localDirty = !1;
	editRevision = 0;
	stopSaveFeedback;
	presetSelectCleanup;
	editorApplyPending = !1;
	stopDrag;
	autoScrollFrame = 0;
	multiSelect = !1;
	longPress;
	suppressNextClick = !1;
	editorView = "edit";
	previewSource = void 0;
	lastCleanSnapshot = "";
	boundHostEvents = [];
	constructor(e, t = {}) {
		this.store = e, this.options = t, this.customCheckDirty = t.checkDirty;
		let n = kc(fc);
		this.tab = Ec.some((e) => e.id === n) ? n : "params";
		let r = this.window.MutationObserver;
		this.observer = new r(() => this.scheduleSync()), this.bindHostEventListeners();
	}
	scheduleSync = (e = 120) => {
		this.isInternalCommitting || (this.scheduledSync &&= (this.window.clearTimeout(this.scheduledSync), 0), this.scheduledSync = this.window.setTimeout(() => {
			this.scheduledSync = 0, this.isInternalCommitting || this.sync();
		}, e));
	};
	destroy() {
		this.scheduledSync &&= (this.window.clearTimeout(this.scheduledSync), 0), this.unbindHostEventListeners(), this.observer.disconnect(), this.observedPanel = void 0, this.observedSettings = void 0, this.observedContainer = void 0, this.teardown();
	}
	get promptManager() {
		return this.host?.getPromptManager() ?? null;
	}
	bindHostEventListeners() {
		let e = this.window.eventSource;
		if (!e || typeof e.on != "function") return;
		let t = () => {
			if (!this.flushEditorApply()) {
				let e = this.promptManager?.configuration?.prefix ?? "completion_", t = this.document.getElementById(`${e}prompt_manager_popup_entry_form_prompt`);
				if (t) {
					try {
						this.window.localStorage.setItem("th-modern-preset-recovery", t.value);
					} catch {}
					try {
						this.window.prompt("切换前内容写回失败，请复制下方内容；它也会保存在本机浏览器中。", t.value);
					} catch {}
				}
				this.editorApplyPending = !1;
			}
			this.cancelSaveFeedback(), this.isSwitchingPreset = !0, this.activeId = null, this.activeGroupId = null, this.anchorId = null, this.selected.clear(), this.editingId = null, this.editingPrompt = null, this.presetSwitchTimer && this.window.clearTimeout(this.presetSwitchTimer), this.presetSwitchTimer = this.window.setTimeout(() => {
				this.isSwitchingPreset = !1, this.presetSwitchTimer = 0, this.shell?.classList.remove("is-loading-preset");
			}, 1500), this.shell && this.shell.classList.add("is-loading-preset");
		}, n = () => {
			this.isSwitchingPreset = !1, this.presetSwitchTimer && this.window.clearTimeout(this.presetSwitchTimer), this.presetSwitchTimer = 0, this.shell && this.shell.classList.remove("is-loading-preset"), this.activeId = null, this.activeGroupId = null, this.anchorId = null, this.selected.clear(), this.editingId = null, this.editingPrompt = null;
			try {
				this.resetCleanBaseline(), this.shell?.isConnected ? (this.renderList(), this.scheduleDirtyCheck(400)) : this.scheduleSync();
			} catch (e) {
				console.error("[现代化预设] 预设切换刷新异常：", e);
			}
		}, r = () => {
			this.resetCleanBaseline(), this.shell?.isConnected ? (this.editingPrompt = null, this.renderList(), this.scheduleDirtyCheck(400)) : this.scheduleSync();
		}, i = () => {
			this.localDirty || this.resetCleanBaseline(), this.shell?.isConnected ? (this.renderList(), this.scheduleDirtyCheck(400)) : this.scheduleSync();
		}, a = [
			["oai_preset_changed_before", t],
			["oai_preset_changed_after", n],
			["preset_changed", n],
			["oai_preset_import_ready", r],
			["chatLoaded", i],
			["chat_id_changed", i]
		];
		for (let [t, n] of a) e.on(t, n), this.boundHostEvents.push({
			event: t,
			handler: n
		});
	}
	unbindHostEventListeners() {
		let e = this.window.eventSource;
		if (e && typeof e.removeListener == "function") {
			for (let { event: t, handler: n } of this.boundHostEvents) try {
				e.removeListener(t, n);
			} catch {}
			this.boundHostEvents = [];
		}
	}
	isChatCompletionApi() {
		let e = this.document.getElementById("main_api");
		if (e?.value) return e.value === "openai";
		let t = this.window;
		if (t.main_api) return t.main_api === "openai";
		let n = this.document.getElementById("openai_settings"), r = this.document.getElementById("openai_api-presets");
		return !!(n || r);
	}
	sync() {
		if (!this.store.is_active || !this.store.settings.modernPresetEditor) {
			this.observe(void 0, void 0, void 0), this.teardown();
			return;
		}
		if (!this.host) {
			this.ensureHost();
			return;
		}
		let e = this.document.getElementById("left-nav-panel") ?? void 0, t = this.document.getElementById("openai_settings") ?? void 0, n = this.document.getElementById("completion_prompt_manager") ?? void 0;
		this.observe(e, t, n);
		let r = this.document.getElementById("respective-presets-block"), i = this.promptManager;
		if (!this.isChatCompletionApi()) {
			this.teardown();
			return;
		}
		if (!e || !r || !t || !n || !i) return;
		let a = e.classList.contains("openDrawer");
		this.panel = e, e.classList.add(sc), this.ensurePanelPin(e), this.ensureToolbar(r), this.ensurePromptShell(n), this.applyTab(), a ? (this.loadCollapsed(), this.groups = Ks(i.serviceSettings), this.buildListSignature() === this.listSignature ? this.syncEditor() : this.renderList(), this.ensureDirtyPolling()) : this.stopDirtyPolling();
	}
	ensureHost() {
		this.hostLoading || (this.hostLoading = !0, (this.options.loadHost ?? Ic)().then((e) => {
			this.host = e, this.resetCleanBaseline(), this.scheduleSync();
		}).catch((e) => {
			console.warn("[现代化界面] 预设界面无法读取酒馆提示词管理器，已保留原生界面。", e);
		}).finally(() => {
			this.hostLoading = !1;
		}));
	}
	observe(e, t, n) {
		(e !== this.observedPanel || t !== this.observedSettings || n !== this.observedContainer) && (this.observer.disconnect(), this.observedPanel = e, this.observedSettings = t, this.observedContainer = n, e && this.observer.observe(e, {
			attributes: !0,
			attributeFilter: ["class"]
		}), t && this.observer.observe(t, {
			attributes: !0,
			attributeFilter: ["style"]
		}), n && this.observer.observe(n, {
			childList: !0,
			subtree: !0
		}));
	}
	teardown() {
		this.cancelSaveFeedback(), this.flushEditorApply(), this.presetSelectCleanup?.(), this.presetSelectCleanup = void 0, this.stopDrag?.(), this.stopDrag = void 0, this.stopDirtyPolling(), this.presetSwitchTimer && this.window.clearTimeout(this.presetSwitchTimer), this.presetSwitchTimer = 0, this.isSwitchingPreset = !1, this.dirtyTimer = 0, this.dirtyInterval = 0, this.resizeObserver?.disconnect(), this.resizeObserver = void 0, this.cancelLongPress(), Pc(this.editAreaMove, (e) => {
			let t = this.document.getElementById("completion_prompt_manager_popup");
			t && t.append(e);
		}), this.editAreaMove = void 0, Pc(this.inspectMove, (e) => {
			let t = this.document.getElementById("completion_prompt_manager_popup");
			t && t.prepend(e);
		}), this.inspectMove = void 0, this.previewSource = void 0;
		let e = this.presetsMove?.node ?? this.document.getElementById("respective-presets-block");
		if (Pc(this.presetsMove, (e) => {
			let t = this.document.getElementById("ai_response_configuration");
			t && t.prepend(e);
		}), this.presetsMove = void 0, e && (this.toolbar?.contains(e) || !e.isConnected)) {
			let t = this.document.getElementById("ai_response_configuration");
			t && t.prepend(e);
		}
		let t = this.pinMove?.node ?? this.document.getElementById("lm_button_panel_pin_div");
		if (Pc(this.pinMove, (e) => {
			let t = this.document.getElementById("lm_button_panel_pin_div_parent") ?? this.document.getElementById("left-nav-panel");
			t && t.prepend(e);
		}), this.pinMove = void 0, t && (t.parentElement?.classList.contains("th-modern-drawer-actions") || !t.isConnected)) {
			let e = this.document.getElementById("lm_button_panel_pin_div_parent") ?? this.document.getElementById("left-nav-panel");
			e && e.prepend(t);
		}
		this.toolbar?.remove(), this.toolbar = void 0, this.tabButtons.clear(), this.shell?.remove(), this.shell = void 0, this.list = void 0, this.editingId = null, this.editingPrompt = null, this.promptSection?.classList.remove(lc), this.promptSection = void 0, this.panel?.classList.remove(sc), this.panel?.removeAttribute(cc), this.panel = void 0;
	}
	ensurePanelPin(e) {
		let t = this.document.getElementById("lm_button_panel_pin_div"), n = e.querySelector(":scope > .th-modern-drawer-titlebar .th-modern-drawer-actions");
		if (!(this.pinMove && this.pinMove.marker.isConnected && this.pinMove.node === t && t?.parentElement === n) && (Pc(this.pinMove), this.pinMove = void 0, t && n)) {
			let e = this.document.createComment("th-modern-preset-pin");
			t.before(e), n.prepend(t), this.pinMove = {
				marker: e,
				node: t
			};
		}
	}
	ensureToolbar(e) {
		if (this.toolbar?.isConnected && e.parentElement === this.toolbar) return;
		let t = this.document.getElementById("ai_response_configuration");
		Pc(this.presetsMove, (e) => {
			t && t.prepend(e);
		}), this.presetsMove = void 0, this.toolbar && this.toolbar.contains(e) && t && t.prepend(e), this.toolbar?.remove();
		let n = V(this.document, "div", "th-modern-preset-toolbar");
		e.before(n), this.presetsMove = Nc(e, n);
		let r = e.querySelector("#settings_preset_openai");
		if (this.presetSelectCleanup?.(), r) {
			let e = r.value, t = (t) => {
				this.flushEditorApply() ? (e = r.value, this.isSwitchingPreset = !0, this.activeId = null, this.activeGroupId = null, this.anchorId = null, this.selected.clear(), this.editingId = null, this.editingPrompt = null, this.presetSwitchTimer && this.window.clearTimeout(this.presetSwitchTimer), this.presetSwitchTimer = this.window.setTimeout(() => {
					this.isSwitchingPreset = !1, this.presetSwitchTimer = 0, this.shell?.classList.remove("is-loading-preset");
				}, 1500), this.shell && this.shell.classList.add("is-loading-preset")) : (t.stopImmediatePropagation(), r.value = e);
			};
			r.addEventListener("change", t, !0), this.presetSelectCleanup = () => r.removeEventListener("change", t, !0);
		}
		let i = V(this.document, "div", "th-modern-preset-tabs"), a = V(this.document, "div", "th-modern-preset-tablist");
		a.setAttribute("role", "tablist"), this.tabButtons.clear();
		for (let e of Ec) {
			let t = V(this.document, "button", "th-modern-preset-tab");
			t.type = "button", t.setAttribute("role", "tab"), t.dataset.tab = e.id, t.append(V(this.document, "span", "", e.label)), e.id === "prompts" && t.append(V(this.document, "span", "th-modern-preset-tab-count")), t.addEventListener("click", () => this.setTab(e.id)), a.append(t), this.tabButtons.set(e.id, t);
		}
		let o = V(this.document, "div", "th-modern-preset-status");
		this.dirtyBadge = V(this.document, "span", "th-modern-preset-dirty"), this.saveButton = V(this.document, "button", "th-modern-preset-save menu_button", "保存预设"), this.saveButton.type = "button", this.saveButton.addEventListener("click", async () => {
			if (this.editingId && this.editorView === "edit" && !this.applyEditor()) {
				this.window.toastr?.error?.("条目内容未能写回，未发起预设保存，请查看控制台错误");
				return;
			}
			this.flushEditorApply();
			let e = this.document.getElementById("settings_preset_openai")?.selectedOptions[0]?.textContent?.trim(), t = this.host?.getPreset?.();
			if (!e || !t || !this.host?.savePreset) {
				this.window.toastr?.error?.("宿主预设保存接口不可用，请使用原生保存按钮。");
				return;
			}
			this.cancelSaveFeedback();
			let n = this.takeSnapshot(), r = this.editRevision, i = !0;
			this.stopSaveFeedback = () => {
				i = !1;
			}, this.saveButton.disabled = !0, this.saveButton.textContent = "保存中…";
			try {
				await Hs(() => this.host.savePreset(e, t), () => i && this.document.getElementById("settings_preset_openai")?.selectedOptions[0]?.textContent?.trim() === e) && n && (this.lastCleanSnapshot = n, this.localDirty = Us(r, this.editRevision), this.runDirtyCheck(), this.window.toastr?.success?.("预设已更新"));
			} catch (e) {
				console.error("[现代化预设] 保存失败", e), this.window.toastr?.error?.("预设保存失败，请重试。");
			} finally {
				i && this.cancelSaveFeedback();
			}
		}), o.append(this.dirtyBadge, this.saveButton), i.append(a, o), n.append(i), this.toolbar = n, this.renderDirty();
	}
	cancelSaveFeedback() {
		this.stopSaveFeedback?.(), this.stopSaveFeedback = void 0, this.saveButton && (this.saveButton.disabled = !1, this.saveButton.textContent = "保存预设");
	}
	setTab(e) {
		this.tab !== e && this.flushEditorApply() && (this.tab = e, Ac(fc, e), this.applyTab(), this.panel?.querySelector(".scrollableInner")?.scrollTo({ top: 0 }));
	}
	applyTab() {
		this.panel?.setAttribute(cc, this.tab);
		for (let [e, t] of this.tabButtons) {
			let n = e === this.tab;
			t.classList.toggle("is-active", n), t.setAttribute("aria-selected", String(n));
		}
	}
	getActiveCharacterTarget() {
		let e = this.promptManager;
		if (!e) return;
		if (e.activeCharacter && e.getPromptOrderForCharacter(e.activeCharacter)?.length) return e.activeCharacter;
		let t = e.configuration?.promptOrder?.dummyId;
		if (t !== void 0 && e.getPromptOrderForCharacter({ id: t })?.length) return { id: t };
		if (Array.isArray(e.serviceSettings?.prompt_order) && e.serviceSettings.prompt_order.length > 0) {
			let t = e.serviceSettings.prompt_order.find((e) => Array.isArray(e?.order) && e.order.length > 0);
			if (t && t.character_id !== void 0) return { id: t.character_id };
		}
		return e.activeCharacter ?? (t === void 0 ? void 0 : { id: t });
	}
	takeSnapshot() {
		let e = this.promptManager;
		if (!e) return "";
		try {
			let t = this.getActiveCharacterTarget(), n = (e.getPromptOrderForCharacter(t) || this.getOrder() || []).map((e) => ({
				identifier: e.identifier,
				enabled: !!e.enabled
			})), r = (e.serviceSettings.prompts || []).map((e) => ({
				identifier: e.identifier,
				name: e.name || "",
				role: e.role || "system",
				content: e.content || "",
				system_prompt: !!e.system_prompt,
				marker: !!e.marker,
				injection_position: e.injection_position ?? 0,
				injection_depth: e.injection_depth ?? 0
			})).sort((e, t) => e.identifier.localeCompare(t.identifier)), i = (Ks(e.serviceSettings) || []).map((e) => ({
				id: e.id,
				name: e.name,
				identifiers: [...e.identifiers || []].sort(),
				parentId: e.parentId || null,
				single_select: !!e.single_select
			})).sort((e, t) => e.id.localeCompare(t.id)), a = this.host?.getPreset?.() ?? e.serviceSettings;
			return JSON.stringify({
				order: n,
				prompts: r,
				groups: i,
				preset: a
			});
		} catch {
			return "";
		}
	}
	resetCleanBaseline() {
		this.cancelSaveFeedback(), this.lastCleanSnapshot = this.takeSnapshot(), this.localDirty = !1, this.dirty = !this.lastCleanSnapshot && null, this.renderDirty();
	}
	checkDirtyState() {
		if (this.customCheckDirty) return this.customCheckDirty();
		let e = this.takeSnapshot();
		return !e || !this.lastCleanSnapshot ? null : e !== this.lastCleanSnapshot;
	}
	stopDirtyPolling() {
		this.dirtyInterval &&= (this.window.clearInterval(this.dirtyInterval), 0), this.dirtyTimer &&= (this.window.clearTimeout(this.dirtyTimer), 0);
	}
	ensureDirtyPolling() {
		this.dirtyInterval || (this.dirtyInterval = this.window.setInterval(() => {
			this.panel?.classList.contains("openDrawer") && (this.runDirtyCheck(), this.scheduleSync());
		}, _c), this.scheduleDirtyCheck());
	}
	scheduleDirtyCheck = (e = gc) => {
		this.toolbar && (this.window.clearTimeout(this.dirtyTimer), this.dirtyTimer = this.window.setTimeout(() => this.runDirtyCheck(), e));
	};
	runDirtyCheck() {
		this.dirtyTimer = 0;
		let e = this.localDirty || this.applyTimer ? !0 : this.checkDirtyState();
		e !== this.dirty && (this.dirty = e, this.renderDirty());
	}
	renderDirty() {
		if (!this.dirtyBadge || !this.saveButton) return;
		let e = this.dirty === !0;
		this.dirtyBadge.textContent = e ? "未保存的修改" : this.dirty === !1 ? "已保存" : "", this.dirtyBadge.classList.toggle("is-dirty", e), this.saveButton.classList.toggle("is-dirty", e);
	}
	ensurePromptShell(e) {
		let t = this.findPromptSection(e);
		if (t !== this.promptSection && (this.promptSection?.classList.remove(lc), this.promptSection = t ?? void 0, this.promptSection?.classList.add(lc)), this.shell?.isConnected) {
			this.shell.previousElementSibling !== e && e.after(this.shell);
			return;
		}
		let n = V(this.document, "div", "th-modern-pm");
		e.after(n), this.shell = n, n.append(this.buildPromptToolbar(), this.buildBatchBar());
		let r = V(this.document, "div", "th-modern-pm-body"), i = V(this.document, "div", "th-modern-pm-list");
		i.setAttribute("role", "listbox"), i.setAttribute("aria-multiselectable", "true"), i.tabIndex = 0, i.addEventListener("click", this.handleListClick), i.addEventListener("pointerdown", this.handleListPointerDown), i.addEventListener("pointerdown", this.handleLongPressStart), i.addEventListener("pointermove", this.handleLongPressMove), i.addEventListener("pointerup", this.cancelLongPress), i.addEventListener("pointercancel", this.cancelLongPress), i.addEventListener("contextmenu", this.handleListContextMenu), i.addEventListener("keydown", this.handleListKeyDown), this.dropLine = V(this.document, "div", "th-modern-pm-drop-line"), this.list = i;
		let a = V(this.document, "section", "th-modern-pm-editor");
		this.editorHeader = V(this.document, "div", "th-modern-pm-editor-header"), this.editorExtra = V(this.document, "div", "th-modern-pm-editor-extra"), this.editorBody = V(this.document, "div", "th-modern-pm-editor-body"), this.editorBody.addEventListener("input", this.handleEditorInput, !0), this.editorBody.addEventListener("change", this.handleEditorInput, !0), this.editorBody.addEventListener("focusout", this.flushEditorApplyOnFocusOut, !0), this.editorBody.addEventListener("click", this.handleEditorClick, !0), this.editorPlaceholder = V(this.document, "div", "th-modern-pm-editor-placeholder"), a.append(this.editorHeader, this.editorExtra, this.editorBody, this.editorPlaceholder), r.append(i, a), n.append(r), n.classList.toggle(wc, this.multiSelect), this.editingId = null, this.editingPrompt = null;
		let o = this.window.ResizeObserver;
		this.resizeObserver?.disconnect(), this.resizeObserver = o ? new o(() => this.updateNarrow()) : void 0, this.resizeObserver?.observe(n), this.updateNarrow();
	}
	findPromptSection(e) {
		let t = e;
		for (; t?.parentElement && t.parentElement.id !== "openai_settings";) t = t.parentElement;
		return t?.parentElement ? t : null;
	}
	updateNarrow() {
		if (!this.shell) return;
		let e = this.shell.getBoundingClientRect().width, t = e > 0 && e < vc;
		this.shell.classList.toggle(uc, t), this.shell.classList.toggle(dc, t && this.detailOpen);
	}
	buildPromptToolbar() {
		let e = V(this.document, "div", "th-modern-pm-toolbar"), t = V(this.document, "label", "th-modern-pm-search");
		t.append(V(this.document, "i", Oc("bi-search")));
		let n = V(this.document, "input", "text_pole");
		n.type = "search", n.placeholder = "搜索条目名称或内容", n.value = this.search, n.addEventListener("input", () => {
			this.search = n.value.trim().toLowerCase(), this.renderList();
		}), t.append(n);
		let r = V(this.document, "button", "th-modern-pm-chip", "仅显示启用");
		r.type = "button", r.setAttribute("aria-pressed", String(this.onlyEnabled)), r.addEventListener("click", () => {
			this.onlyEnabled = !this.onlyEnabled, r.setAttribute("aria-pressed", String(this.onlyEnabled)), this.renderList();
		});
		let i = V(this.document, "button", "th-modern-pm-chip th-modern-pm-multi");
		i.type = "button", i.title = "多选模式：单击条目即可勾选，手机上也可以长按条目进入", i.append(V(this.document, "i", Oc("bi-check2-square")), V(this.document, "span", "", "多选")), i.setAttribute("aria-pressed", String(this.multiSelect)), i.addEventListener("click", () => this.setMultiSelect(!this.multiSelect)), this.multiButton = i, this.tokenTotal = V(this.document, "span", "th-modern-pm-token-total");
		let a = V(this.document, "button", "th-modern-pm-add menu_button");
		a.type = "button", a.append(V(this.document, "i", Oc("bi-plus-lg")), V(this.document, "span", "", "新增")), a.title = "在选中条目下方新增条目", a.addEventListener("click", () => this.addPromptEntry());
		let o = V(this.document, "details", "th-modern-pm-more"), s = V(this.document, "summary", "th-modern-pm-icon-button");
		s.title = "更多操作", s.setAttribute("aria-label", "更多操作"), s.append(V(this.document, "i", Oc("bi-three-dots")));
		let c = V(this.document, "div", "th-modern-pm-menu"), l = [
			[
				"bi-box-arrow-in-down",
				"导入条目",
				() => this.promptManager?.handleImport?.()
			],
			[
				"bi-box-arrow-up",
				"导出条目",
				() => this.promptManager?.handleFullExport?.()
			],
			[
				"bi-arrow-counterclockwise",
				"重置当前角色的排序",
				() => this.promptManager?.handleCharacterReset?.()
			]
		];
		for (let [e, t, n] of l) {
			let r = V(this.document, "button", "th-modern-pm-menu-item");
			r.type = "button", r.append(V(this.document, "i", Oc(e)), V(this.document, "span", "", t)), r.addEventListener("click", () => {
				o.open = !1, n();
			}), c.append(r);
		}
		return o.append(s, c), e.append(t, r, i, this.tokenTotal, a, o), e;
	}
	buildBatchBar() {
		let e = V(this.document, "div", "th-modern-pm-batch");
		this.batchCount = V(this.document, "span", "th-modern-pm-batch-count");
		let t = [
			[
				"bi-toggle-on",
				"开启",
				() => this.setEnabled([...this.selected], !0)
			],
			[
				"bi-toggle-off",
				"关闭",
				() => this.setEnabled([...this.selected], !1)
			],
			[
				"bi-folder-plus",
				"建组",
				() => void this.createGroupFromSelection()
			],
			[
				"bi-files",
				"复制",
				() => this.copyEntries([...this.selected])
			],
			[
				"bi-trash3",
				"删除",
				() => void this.deleteEntries([...this.selected])
			],
			[
				"bi-check-all",
				"全选",
				() => this.selectAllVisible()
			],
			[
				"bi-x-lg",
				"完成",
				() => this.clearSelection()
			]
		];
		e.append(this.batchCount);
		for (let [n, r, i] of t) {
			let t = V(this.document, "button", "th-modern-pm-batch-button");
			t.type = "button", t.append(V(this.document, "i", Oc(n)), V(this.document, "span", "", r)), t.addEventListener("click", i), e.append(t);
		}
		return this.batchBar = e, e;
	}
	getOrder() {
		let e = this.promptManager;
		if (!e) return [];
		let t = this.getActiveCharacterTarget(), n = e.getPromptOrderForCharacter(t);
		if ((!n || !n.length) && Array.isArray(e.serviceSettings?.prompt_order) && e.serviceSettings.prompt_order.length > 0) {
			let t = e.serviceSettings.prompt_order.find((e) => Array.isArray(e?.order) && e.order.length > 0);
			t?.order && (n = t.order);
		}
		return n ?? [];
	}
	getPrompt(e) {
		return this.promptManager?.getPromptById(e) ?? null;
	}
	getGroup(e) {
		return e ? this.groups.find((t) => t.id === e) : void 0;
	}
	loadCollapsed() {
		let e = `${pc}${this.document.querySelector("#settings_preset_openai")?.selectedOptions[0]?.textContent ?? ""}`;
		if (e !== this.collapsedKey) {
			this.collapsedKey = e, this.collapsed = /* @__PURE__ */ new Map();
			try {
				let t = JSON.parse(kc(e) ?? "{}");
				if (t && typeof t == "object" && !Array.isArray(t)) for (let [e, n] of Object.entries(t)) typeof n == "boolean" && this.collapsed.set(e, n);
			} catch {}
		}
	}
	isCollapsed(e) {
		return this.collapsed.get(e.id) ?? !!e.collapsed;
	}
	toggleCollapsed(e) {
		let t = this.getGroup(e);
		t && (this.collapsed.set(e, !this.isCollapsed(t)), Ac(this.collapsedKey, JSON.stringify(Object.fromEntries(this.collapsed))), this.renderList());
	}
	matchesFilter(e) {
		return this.onlyEnabled && !e.enabled ? !1 : !this.search || Fc(e.prompt, e.identifier).toLowerCase().includes(this.search) || (e.prompt?.content ?? "").toLowerCase().includes(this.search);
	}
	computeVisibleRows() {
		if (this.search || this.onlyEnabled) {
			let e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set();
			for (let n of this.rows) n.kind === "prompt" && this.matchesFilter(n) && (t.add(n), n.ancestors.forEach((t) => e.add(t)));
			return this.rows.filter((n) => n.kind === "group" ? e.has(n.group.id) : t.has(n));
		}
		return this.rows.filter((e) => !e.ancestors.some((e) => {
			let t = this.getGroup(e);
			return t ? this.isCollapsed(t) : !1;
		}));
	}
	buildListSignature() {
		let e = this.promptManager;
		return e ? Ws(this.getOrder(), this.groups, e.serviceSettings.prompts || [], e.tokenHandler?.getCounts?.() ?? {}, e.tokenUsage, this.collapsed, this.search, this.onlyEnabled) : "";
	}
	renderList() {
		let e = this.promptManager, t = this.list;
		if (!e || !t) return;
		this.loadCollapsed();
		let n = this.getOrder();
		this.orderMap = new Map(n.map((e) => [e.identifier, e])), this.groups = Ks(e.serviceSettings), this.rows = Qs(n, this.groups, (e) => this.getPrompt(e));
		let r = new Set(n.map((e) => e.identifier));
		for (let e of [...this.selected]) r.has(e) || this.selected.delete(e);
		this.activeId && !r.has(this.activeId) && !this.getPrompt(this.activeId) && (this.activeId = null), this.activeGroupId && !this.getGroup(this.activeGroupId) && (this.activeGroupId = null), !this.activeId && !this.activeGroupId && n.length && (this.activeId = n[0].identifier, this.selected = /* @__PURE__ */ new Set([this.activeId]), this.anchorId = this.activeId, this.openDetail());
		let i = e.tokenHandler?.getCounts?.() ?? {};
		t.classList.toggle("has-tokens", n.some((e) => typeof i[e.identifier] == "number"));
		let a = t.scrollTop, o = this.document.createDocumentFragment();
		this.visibleRows = this.computeVisibleRows();
		for (let t of this.visibleRows) o.append(t.kind === "group" ? this.createGroupRow(t) : this.createPromptRow(e, t, i[t.identifier]));
		this.visibleRows.length || o.append(V(this.document, "div", "th-modern-pm-empty", this.rows.length ? "没有符合条件的条目" : "列表里还没有条目")), o.append(this.createUnusedSection(e, r)), this.dropLine && o.append(this.dropLine), t.replaceChildren(o), t.scrollTop = a;
		let s = this.tabButtons.get("prompts")?.querySelector(".th-modern-preset-tab-count");
		s && (s.textContent = String(n.length)), this.tokenTotal && (this.tokenTotal.textContent = e.tokenUsage ? `总 Token：${e.tokenUsage}` : ""), this.renderBatchBar(), this.syncEditor(), this.listSignature = this.buildListSignature();
	}
	getGroupState(e) {
		let t = Xs(this.groups, e.id);
		return {
			enabled: t.filter((e) => this.orderMap.get(e)?.enabled).length,
			total: t.length
		};
	}
	createGroupRow(e) {
		let { group: t } = e, n = this.isCollapsed(t), r = this.getGroupState(t), i = V(this.document, "div", "th-modern-pm-row is-group-header");
		i.dataset.groupId = t.id, i.style.setProperty("--th-modern-pm-indent", `${e.depth * xc}rem`), i.classList.toggle("is-active", t.id === this.activeGroupId), i.classList.toggle("is-disabled", r.enabled === 0), i.classList.toggle("is-continued", e.continued);
		let a = V(this.document, "span", "th-modern-pm-handle");
		a.title = "拖动整组", a.append(V(this.document, "i", Oc("bi-grip-vertical")));
		let o = jc(this.document, "th-modern-pm-collapse", n ? "展开分组" : "折叠分组", n ? "bi-chevron-right" : "bi-chevron-down");
		o.setAttribute("aria-expanded", String(!n)), o.addEventListener("click", (e) => {
			e.stopPropagation(), this.toggleCollapsed(t.id);
		});
		let s = V(this.document, "span", "th-modern-pm-main");
		s.append(V(this.document, "i", `th-modern-pm-kind ${Oc(n ? "bi-folder" : "bi-folder2-open")}`), V(this.document, "span", "th-modern-pm-name", t.name || "未命名分组"), V(this.document, "span", "th-modern-pm-group-count", `${r.enabled}/${r.total}`)), t.single_select && s.append(V(this.document, "span", "th-modern-pm-badge is-mode", "单选")), e.continued && s.append(V(this.document, "span", "th-modern-pm-badge", "续"));
		let c = t.single_select ? r.enabled > 0 : r.enabled === r.total ? !0 : r.enabled ? "mixed" : !1, l = Mc(this.document, c, t.single_select ? "单选组：有选项开启时点击全部关闭，否则开启第一项" : "开启或关闭组内全部条目");
		l.disabled = !r.total;
		let u = (e) => {
			e.stopPropagation(), e.preventDefault(), this.toggleGroup(t.id);
		};
		l.addEventListener("click", u), l.addEventListener("pointerup", (e) => {
			e.button === 0 && u(e);
		});
		let d = Xs(this.groups, t.id), f = d.length > 0 && d.every((e) => this.selected.has(e));
		i.classList.toggle("is-selected", this.multiSelect && f), i.append(a, this.createCheck(f), o, s, l);
		let p = 0, m = (e) => {
			e.target?.closest(".th-modern-pm-handle, .th-modern-pm-toggle, .th-modern-pm-collapse, button") || Date.now() - p < 200 || (p = Date.now(), this.handleGroupRowClick(t.id, e));
		};
		return i.addEventListener("click", m), i.addEventListener("pointerup", (e) => {
			e.pointerType === "mouse" && e.button === 0 && !this.stopDrag && m(e);
		}), i;
	}
	createPromptRow(e, t, n) {
		let { identifier: r, prompt: i } = t, a = V(this.document, "div", "th-modern-pm-row");
		a.dataset.id = r, a.style.setProperty("--th-modern-pm-indent", `${t.depth * xc}rem`), a.setAttribute("role", "option"), a.setAttribute("aria-selected", String(this.selected.has(r))), a.classList.toggle("is-disabled", !t.enabled), a.classList.toggle("is-active", r === this.activeId && !this.activeGroupId), a.classList.toggle("is-selected", this.selected.has(r)), a.classList.toggle("is-marker", !!i?.marker), a.classList.toggle("is-grouped", t.depth > 0), a.classList.toggle("is-missing", !i);
		let o = V(this.document, "span", "th-modern-pm-handle");
		if (o.title = "拖动排序；选中多项后可一起拖动", o.append(V(this.document, "i", Oc("bi-grip-vertical"))), a.append(o, this.createCheck(this.selected.has(r))), i?.marker) {
			let e = V(this.document, "i", `th-modern-pm-kind ${Oc("bi-pin-angle-fill")}`);
			e.title = "占位条目：内容由酒馆在生成时填入", a.append(e);
		}
		let s = V(this.document, "span", "th-modern-pm-main");
		s.append(V(this.document, "span", "th-modern-pm-name", Fc(i, r))), a.append(s);
		let c = V(this.document, "span", "th-modern-pm-badges");
		i && !i.marker && i.role && c.append(V(this.document, "span", `th-modern-pm-badge is-role-${i.role}`, Tc[i.role] ?? i.role)), i?.injection_position === 1 && c.append(V(this.document, "span", "th-modern-pm-badge is-depth", `@${i.injection_depth ?? 4}`)), i || c.append(V(this.document, "span", "th-modern-pm-badge is-warning", "缺失")), a.append(c), a.append(V(this.document, "span", "th-modern-pm-tokens", typeof n == "number" ? String(n) : ""));
		let l = V(this.document, "span", "th-modern-pm-actions");
		if (i && !i.marker) {
			let e = jc(this.document, "th-modern-pm-copy", "复制条目", "bi-files");
			e.addEventListener("click", (e) => {
				e.stopPropagation(), this.copyEntries([r]);
			}), l.append(e);
		}
		if (i) {
			let t = e.isPromptDeletionAllowed(i), n = jc(this.document, "th-modern-pm-delete", t ? "删除条目" : "移出列表（内置条目不能删除）", t ? "bi-trash3" : "bi-box-arrow-right");
			n.addEventListener("click", (e) => {
				e.stopPropagation(), this.deleteEntries([r]);
			}), l.append(n);
		}
		a.append(l);
		let u = Mc(this.document, t.enabled, t.enabled ? "已启用，点击关闭" : "已关闭，点击启用");
		u.disabled = !i || !e.isPromptToggleAllowed(i);
		let d = (e) => {
			e.stopPropagation(), e.preventDefault(), this.toggleEntry(r);
		};
		u.addEventListener("click", d), u.addEventListener("pointerup", (e) => {
			e.button === 0 && d(e);
		}), a.append(u);
		let f = 0, p = (e) => {
			e.target?.closest(".th-modern-pm-handle, .th-modern-pm-toggle, .th-modern-pm-actions, button") || Date.now() - f < 200 || (f = Date.now(), this.handlePromptRowClick(r, e));
		};
		return a.addEventListener("click", p), a.addEventListener("pointerup", (e) => {
			e.pointerType === "mouse" && e.button === 0 && !this.stopDrag && p(e);
		}), a;
	}
	createUnusedSection(e, t) {
		let n = e.serviceSettings.prompts.filter((e) => e && !t.has(e.identifier)), r = V(this.document, "details", "th-modern-pm-unused");
		r.open = this.unusedOpen, r.hidden = !n.length, r.addEventListener("toggle", () => {
			this.unusedOpen = r.open;
		}), r.append(V(this.document, "summary", "", `未加入列表的条目（${n.length}）`));
		for (let e of n) {
			let t = V(this.document, "div", "th-modern-pm-unused-item");
			t.append(V(this.document, "span", "th-modern-pm-name", Fc(e, e.identifier)));
			let n = V(this.document, "button", "th-modern-pm-unused-add menu_button", "加入");
			n.type = "button", n.title = "加入到选中条目下方", n.addEventListener("click", () => this.attachEntry(e.identifier)), t.append(n), r.append(t);
		}
		return r;
	}
	renderBatchBar() {
		this.batchBar && this.batchCount && (this.batchBar.hidden = !this.multiSelect && this.selected.size < 2, this.batchCount.textContent = `已选 ${this.selected.size} 项`);
	}
	handleGroupRowClick(e, t) {
		if (this.multiSelect) this.toggleGroupSelection(e);
		else {
			if (!this.flushEditorApply()) return;
			this.activeGroupId = e, this.selected.clear(), this.openDetail(), this.renderList();
		}
	}
	handlePromptRowClick(e, t) {
		if (this.suppressNextClick) this.suppressNextClick = !1;
		else try {
			if (t && t.shiftKey && this.anchorId) {
				let t = this.visibleRows.flatMap((e) => e.kind === "prompt" ? [e.identifier] : []), n = t.indexOf(this.anchorId), r = t.indexOf(e);
				n !== -1 && r !== -1 && (this.selected = new Set(t.slice(Math.min(n, r), Math.max(n, r) + 1)));
			} else t && (this.multiSelect || t.ctrlKey || t.metaKey) ? (this.selected.has(e) && (this.multiSelect || this.selected.size > 1) ? this.selected.delete(e) : this.selected.add(e), this.anchorId = e, this.activeId = e, this.activeGroupId = null, this.openDetail()) : this.select(e);
			this.updateActiveRowStyles(), this.syncEditor();
		} catch (e) {
			console.error("[现代化预设] 提示词条目点选异常：", e);
		}
	}
	handleListClick = (e) => {
		let t = e.target, n = t?.closest(".th-modern-pm-row");
		if (this.suppressNextClick) this.suppressNextClick = !1;
		else if (n && !t?.closest(".th-modern-pm-handle")) try {
			let r = n.dataset.groupId;
			if (r) {
				t?.closest(".th-modern-pm-toggle") ? this.toggleGroup(r) : t?.closest(".th-modern-pm-collapse") ? this.toggleCollapsed(r) : this.handleGroupRowClick(r, e);
				return;
			}
			let i = n.dataset.id;
			if (!i) return;
			if (t?.closest(".th-modern-pm-toggle")) {
				this.toggleEntry(i);
				return;
			}
			if (t?.closest(".th-modern-pm-copy")) {
				this.copyEntries(this.selected.has(i) ? [...this.selected] : [i]);
				return;
			}
			if (t?.closest(".th-modern-pm-delete")) {
				this.deleteEntries(this.selected.has(i) ? [...this.selected] : [i]);
				return;
			}
			this.handlePromptRowClick(i, e);
		} catch (e) {
			console.error("[现代化预设] 提示词条目点击处理异常：", e);
		}
	};
	updateActiveRowStyles() {
		if (!this.list) return;
		let e = this.list.querySelectorAll(".th-modern-pm-row");
		for (let t of e) {
			let e = t.dataset.id, n = t.dataset.groupId;
			e ? (t.classList.toggle("is-active", e === this.activeId && !this.activeGroupId), t.classList.toggle("is-selected", this.selected.has(e)), t.setAttribute("aria-selected", String(this.selected.has(e)))) : n && t.classList.toggle("is-active", n === this.activeGroupId);
		}
		this.renderBatchBar();
	}
	handleListKeyDown = (e) => {
		e.key === "Escape" && (this.multiSelect || this.selected.size > 1) && (e.preventDefault(), this.clearSelection());
	};
	clearSelection() {
		this.multiSelect = !1, this.selected = new Set(this.activeId && !this.activeGroupId ? [this.activeId] : []), this.applyMultiSelectState(), this.renderList();
	}
	setMultiSelect(e) {
		e ? (this.multiSelect = !0, this.applyMultiSelectState(), this.renderList()) : this.clearSelection();
	}
	applyMultiSelectState() {
		this.shell?.classList.toggle(wc, this.multiSelect), this.multiButton?.setAttribute("aria-pressed", String(this.multiSelect));
	}
	selectAllVisible() {
		let e = this.visibleRows.flatMap((e) => e.kind === "prompt" ? [e.identifier] : []), t = e.length > 0 && e.every((e) => this.selected.has(e));
		this.selected = t ? /* @__PURE__ */ new Set() : new Set(e), this.multiSelect = !0, this.applyMultiSelectState(), this.renderList();
	}
	toggleGroupSelection(e) {
		let t = Xs(this.groups, e), n = t.every((e) => this.selected.has(e));
		for (let e of t) n ? this.selected.delete(e) : this.selected.add(e);
		this.renderList();
	}
	createCheck(e) {
		let t = V(this.document, "span", "th-modern-pm-check");
		return t.setAttribute("aria-hidden", "true"), e && t.append(V(this.document, "i", Oc("bi-check-lg"))), t;
	}
	handleLongPressStart = (e) => {
		if (e.pointerType === "mouse" || e.button !== 0) return;
		let t = e.target, n = t?.closest(".th-modern-pm-row");
		if (!n || t?.closest(".th-modern-pm-handle, .th-modern-pm-toggle, button")) return;
		this.cancelLongPress();
		let r = this.window.setTimeout(() => {
			this.longPress = void 0, this.suppressNextClick = !0, this.multiSelect = !0, n.dataset.groupId ? this.toggleGroupSelection(n.dataset.groupId) : n.dataset.id && (this.selected.add(n.dataset.id), this.anchorId = n.dataset.id), this.applyMultiSelectState(), this.renderList(), this.window.navigator.vibrate?.(15);
		}, Sc);
		this.longPress = {
			timer: r,
			x: e.clientX,
			y: e.clientY,
			pointerId: e.pointerId
		};
	};
	handleLongPressMove = (e) => {
		let t = this.longPress;
		t && t.pointerId === e.pointerId && Math.hypot(e.clientX - t.x, e.clientY - t.y) > Cc && this.cancelLongPress();
	};
	cancelLongPress = () => {
		this.longPress &&= (this.window.clearTimeout(this.longPress.timer), void 0);
	};
	handleListContextMenu = (e) => {
		(this.longPress || this.suppressNextClick) && e.preventDefault();
	};
	openDetail() {
		this.detailOpen = !0, this.updateNarrow();
	}
	select(e) {
		this.flushEditorApply() && (this.activeId = e, this.activeGroupId = null, this.anchorId = e, this.selected = /* @__PURE__ */ new Set([e]), this.openDetail());
	}
	isInternalCommitting = !1;
	commit(e = !0, t = !0) {
		let n = this.promptManager;
		if (n) {
			this.isInternalCommitting = !0;
			try {
				Promise.resolve(n.saveServiceSettings()).catch((e) => console.error("[现代化界面] 保存提示词设置失败", e)), t && n.render(!1), e && this.renderList(), this.localDirty = !0, this.editRevision++, this.dirty = !0, this.renderDirty();
			} finally {
				this.window.setTimeout(() => {
					this.isInternalCommitting = !1;
				}, 150);
			}
		}
	}
	replaceOrder(e) {
		let t = this.promptManager;
		if (!t) return;
		let n = this.getActiveCharacterTarget();
		n && (t.removePromptOrderForCharacter(n), t.addPromptOrderForCharacter(n, e));
	}
	cleanupGroupData() {
		let e = this.promptManager;
		e && Ks(e.serviceSettings).length && ec(qs(e.serviceSettings), new Set(this.getOrder().map((e) => e.identifier)));
	}
	resetTokenCount(e) {
		let t = this.promptManager?.tokenHandler?.getCounts?.();
		t && (t[e] = null);
	}
	toggleEntry(e) {
		let t = this.getOrder().find((t) => t.identifier === e);
		if (t) {
			let n = !t.enabled, r = this.list?.querySelector(`.th-modern-pm-row[data-id="${e}"]`);
			if (r) {
				r.classList.toggle("is-disabled", !n);
				let e = r.querySelector(".th-modern-pm-toggle");
				e && (e.setAttribute("aria-checked", String(n)), e.title = n ? "已启用，点击关闭" : "已关闭，点击启用", e.setAttribute("aria-label", e.title));
			}
			let i = this.editorHeader?.querySelector(".th-modern-pm-toggle");
			i && this.editingId === e && (i.setAttribute("aria-checked", String(n)), i.title = n ? "提示词条目状态：已启用（点击关闭）" : "提示词条目状态：已关闭（点击启用）", i.setAttribute("aria-label", i.title)), this.setEnabled([e], n);
		}
	}
	setEnabled(e, t) {
		let n = this.promptManager;
		if (!n) return;
		let r = this.getOrder(), i = !1;
		for (let a of e) {
			let e = r.find((e) => e.identifier === a), o = this.getPrompt(a);
			if (e && o && n.isPromptToggleAllowed(o) && e.enabled !== t && (e.enabled = t, this.resetTokenCount(a), i = !0, t)) for (let e of $s(this.groups, a)) {
				let t = r.find((t) => t.identifier === e);
				t?.enabled && (t.enabled = !1, this.resetTokenCount(e));
			}
		}
		i && this.commit();
	}
	toggleGroup(e) {
		let t = this.getGroup(e);
		if (!t) return;
		let n = this.getOrder();
		if (t.single_select) {
			let e = t.identifiers.filter((e) => n.find((t) => t.identifier === e)?.enabled);
			if (e.length) this.setEnabled(e, !1);
			else {
				let e = n.find((e) => t.identifiers.includes(e.identifier));
				e && this.setEnabled([e.identifier], !0);
			}
			return;
		}
		let r = Xs(this.groups, e), i = r.every((e) => n.find((t) => t.identifier === e)?.enabled);
		this.setEnabled(r, !i);
	}
	createIdentifier() {
		let e = this.window.crypto;
		return this.promptManager?.getUuidv4?.() ?? e?.randomUUID?.() ?? `th-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
	}
	insertNear(e, t) {
		let n = this.promptManager;
		if (!n) return;
		this.replaceOrder(oc(this.getOrder(), e, t));
		let r = t ? Zs(this.groups, t) : null;
		r && tc(qs(n.serviceSettings), e.map((e) => e.identifier), r.id);
	}
	getInsertAnchor() {
		if (this.activeGroupId) {
			let e = Xs(this.groups, this.activeGroupId);
			return [...this.getOrder()].reverse().find((t) => e.includes(t.identifier))?.identifier ?? null;
		}
		return this.activeId;
	}
	addPromptEntry() {
		let e = this.promptManager;
		if (!e || !this.flushEditorApply()) return;
		let t = this.createIdentifier();
		e.addPrompt({
			name: "新条目",
			role: "system",
			content: "",
			system_prompt: !1,
			marker: !1,
			injection_position: 0,
			injection_depth: 4,
			injection_order: 100,
			forbid_overrides: !1
		}, t), this.insertNear([{
			identifier: t,
			enabled: !1
		}], this.getInsertAnchor()), this.select(t), this.commit(), this.focusEditorName();
	}
	attachEntry(e) {
		this.getOrder().some((t) => t.identifier === e) || (this.insertNear([{
			identifier: e,
			enabled: !1
		}], this.getInsertAnchor()), this.select(e), this.commit());
	}
	copyEntries(e) {
		let t = this.promptManager;
		if (!t || !this.flushEditorApply()) return;
		let n = this.getOrder().filter((t) => e.includes(t.identifier)), r = null;
		for (let e of n) {
			let n = this.getPrompt(e.identifier);
			if (!n || n.marker) continue;
			let i = this.createIdentifier(), a = JSON.parse(JSON.stringify(n));
			t.serviceSettings.prompts.push({
				...a,
				identifier: i,
				name: `${Fc(n, e.identifier)} 副本`,
				system_prompt: !1,
				marker: !1
			}), this.insertNear([{
				identifier: i,
				enabled: e.enabled
			}], e.identifier), r = i;
		}
		r && (this.select(r), this.commit(), this.window.toastr?.success?.(`已创建 ${n.length} 个条目副本`));
	}
	getSillyTavernPopupContext() {
		let e = this.window, t = e.SillyTavern?.getContext?.() ?? {};
		return {
			callGenericPopup: t.callGenericPopup ?? e.callGenericPopup ?? e.Popup?.callGenericPopup ?? e.SillyTavern?.callGenericPopup,
			POPUP_TYPE: t.POPUP_TYPE ?? e.POPUP_TYPE ?? e.SillyTavern?.POPUP_TYPE ?? {
				TEXT: 0,
				CONFIRM: 1,
				INPUT: 2,
				FORM: 3
			},
			POPUP_RESULT: t.POPUP_RESULT ?? e.POPUP_RESULT ?? e.SillyTavern?.POPUP_RESULT ?? {
				AFFIRMATIVE: 1,
				NEGATIVE: 0,
				CANCELLED: -1
			}
		};
	}
	async confirm(e) {
		let { callGenericPopup: t, POPUP_TYPE: n, POPUP_RESULT: r } = this.getSillyTavernPopupContext();
		try {
			if (typeof t == "function" && n?.CONFIRM !== void 0) {
				let i = await t(e, n.CONFIRM);
				return i === !0 || i === 1 || i === r?.AFFIRMATIVE;
			}
			return this.window.confirm(e);
		} catch (t) {
			console.warn("[现代化预设] 确认弹窗异常：", t);
			try {
				return this.window.confirm(e);
			} catch {
				return !1;
			}
		}
	}
	async deleteEntries(e) {
		let t = this.promptManager;
		if (!t || !e.length || !this.flushEditorApply()) return;
		let n = e.map((e) => this.getPrompt(e)), r = e.filter((e, r) => {
			let i = n[r];
			return !i || t.isPromptDeletionAllowed(i);
		}), i = e.filter((e) => !r.includes(e)), a = e.slice(0, 3).map((e, t) => Fc(n[t], e)), o = e.length === 1 ? `「${a[0]}」` : `${a.join("、")}${e.length > 3 ? " 等" : ""} ${e.length} 个条目`, s = i.length ? `\n其中 ${i.length} 个是酒馆内置条目，只会移出列表，可在列表底部重新加入。` : "";
		if (!await this.confirm(`确定要删除${o}吗？${s}`)) return;
		let c = new Set(r), l = new Set(i), u = this.getOrder(), d = this.rows.flatMap((e) => e.kind === "prompt" ? [e.identifier] : []);
		for (let e of t.serviceSettings.prompt_order ?? []) {
			let t = e.order === u;
			for (let n = e.order.length - 1; n >= 0; --n) {
				let r = e.order[n].identifier;
				(c.has(r) || t && l.has(r)) && e.order.splice(n, 1);
			}
		}
		for (let e = t.serviceSettings.prompts.length - 1; e >= 0; --e) c.has(t.serviceSettings.prompts[e]?.identifier) && t.serviceSettings.prompts.splice(e, 1);
		if (this.cleanupGroupData(), this.activeId && (c.has(this.activeId) || l.has(this.activeId))) {
			let e = new Set(this.getOrder().map((e) => e.identifier)), t = d.indexOf(this.activeId);
			this.activeId = d.slice(t + 1).find((t) => e.has(t)) ?? d.slice(0, t).reverse().find((t) => e.has(t)) ?? null;
		}
		this.selected = new Set(this.activeId ? [this.activeId] : []), this.anchorId = this.activeId, this.commit(), this.window.toastr?.success?.("已删除条目");
	}
	async askGroupName(e = "") {
		let { callGenericPopup: t, POPUP_TYPE: n } = this.getSillyTavernPopupContext();
		try {
			if (typeof t == "function" && n?.INPUT !== void 0) {
				let r = await t("新建分组", n.INPUT, e, {
					okButton: "创建",
					cancelButton: "取消"
				});
				return typeof r == "string" && r.trim() ? r.trim() : null;
			}
			let r = this.window.prompt("请输入分组名称：", e);
			return r && r.trim() ? r.trim() : null;
		} catch (e) {
			return console.warn("[现代化预设] 打开分组输入框失败：", e), null;
		}
	}
	async createGroupFromSelection(e = [...this.selected]) {
		let t = this.promptManager;
		if (!t || !e.length || !this.flushEditorApply()) return;
		let n = await this.askGroupName();
		if (!n) return;
		let r = this.getOrder(), i = new Set(e), a = r.findIndex((e) => i.has(e.identifier));
		if (a === -1) return;
		let o = r.filter((e) => i.has(e.identifier)), s = r.filter((e) => !i.has(e.identifier)), c = r.slice(0, a).filter((e) => !i.has(e.identifier)).length;
		this.replaceOrder([
			...s.slice(0, c),
			...o,
			...s.slice(c)
		]);
		let l = qs(t.serviceSettings), u = new Set(o.map((e) => Zs(l, e.identifier)?.id ?? null)), d = u.size === 1 ? [...u][0] : null, f = nc(l, {
			id: `grp_${this.createIdentifier()}`,
			name: n,
			identifiers: o.map((e) => e.identifier),
			parentId: d
		});
		this.cleanupGroupData(), this.activeGroupId = f.id, this.selected.clear(), this.commit(), this.window.toastr?.success?.(`已创建分组「${n}」`);
	}
	updateGroup(e, t) {
		let n = this.getGroup(e);
		n && (t(n), this.commit());
	}
	async dissolveGroup(e) {
		let t = this.promptManager, n = this.getGroup(e);
		t && n && await this.confirm(`解散分组「${n.name}」？组内条目会保留，只是不再归组。`) && (rc(qs(t.serviceSettings), e), this.cleanupGroupData(), this.activeGroupId = null, this.activeId = n.identifiers[0] ?? this.activeId, this.commit());
	}
	handleListPointerDown = (e) => {
		if (e.button !== 0) return;
		let t = e.target?.closest(".th-modern-pm-handle"), n = t?.closest(".th-modern-pm-row");
		if (!t || !n || !this.list) return;
		e.preventDefault();
		let r = n.dataset.groupId ?? null, i = n.dataset.id, a, o = /* @__PURE__ */ new Set();
		if (r) a = new Set(Xs(this.groups, r)), o = /* @__PURE__ */ new Set([r, ...Ys(this.groups, r)]);
		else if (i) a = this.selected.has(i) ? new Set(this.selected) : /* @__PURE__ */ new Set([i]);
		else return;
		if (!a.size) return;
		let s = e.clientY, c = !1, l = null, u = e.clientY, d = V(this.document, "div", "th-modern-pm-drag-ghost", r ? `移动分组（${a.size} 项）` : `移动 ${a.size} 项`), f = (e) => e.dataset.groupId ? o.has(e.dataset.groupId) : a.has(e.dataset.id ?? ""), p = () => {
			if (this.autoScrollFrame = 0, !c || !this.list) return;
			let e = this.list.getBoundingClientRect(), t = 0;
			u < e.top + bc && (t = -Math.ceil((e.top + bc - u) / 3)), u > e.bottom - bc && (t = Math.ceil((u - e.bottom + bc) / 3)), t && (this.list.scrollTop += t, l = this.updateDropTarget(u, f, a, o), this.autoScrollFrame = this.window.requestAnimationFrame(p));
		};
		this.stopDrag?.(), this.stopDrag = Vs({
			target: t,
			event: e,
			cursor: "grabbing",
			onMove: (e) => {
				if (u = e.clientY, !c) {
					if (Math.abs(e.clientY - s) < yc || !this.flushEditorApply()) return;
					c = !0, this.document.body.append(d), this.list?.querySelectorAll(".th-modern-pm-row").forEach((e) => {
						e.classList.toggle("is-dragging", f(e));
					});
				}
				d.style.transform = `translate(${e.clientX + 14}px, ${e.clientY + 10}px)`, l = this.updateDropTarget(e.clientY, f, a, o), this.autoScrollFrame ||= this.window.requestAnimationFrame(p);
			},
			onStop: () => {
				this.stopDrag = void 0, this.autoScrollFrame &&= (this.window.cancelAnimationFrame(this.autoScrollFrame), 0), d.remove(), this.dropLine?.classList.remove("is-visible"), this.list?.querySelectorAll(".is-dragging").forEach((e) => e.classList.remove("is-dragging")), c && l && this.applyDrop(l, a, r);
			}
		});
	};
	applyDrop(e, t, n) {
		let r = this.promptManager;
		if (!r) return;
		let i = this.getOrder(), a = ac(i, t, e.anchorId, e.placement), o = !1;
		if (n) {
			if ((this.getGroup(n)?.parentId ?? null) !== e.groupId) {
				if (!ic(qs(r.serviceSettings), n, e.groupId)) return;
				o = !0;
			}
		} else if ([...t].some((t) => (Zs(this.groups, t)?.id ?? null) !== e.groupId) && (e.groupId || this.groups.length)) {
			let n = (a ?? i).filter((e) => t.has(e.identifier)).map((e) => e.identifier);
			tc(qs(r.serviceSettings), n, e.groupId), o = !0;
		}
		(a || o) && (a && this.replaceOrder(a), this.cleanupGroupData(), this.commit());
	}
	updateDropTarget(e, t, n, r) {
		let i = this.list, a = this.dropLine;
		if (!i || !a) return null;
		let o = [...i.querySelectorAll(".th-modern-pm-row")].filter((e) => !t(e));
		if (!o.length) return null;
		let s = o[o.length - 1], c = "after";
		for (let t of o) {
			let n = t.getBoundingClientRect();
			if (e < n.top + n.height / 2) {
				s = t, c = "before";
				break;
			}
		}
		let l = this.getOrder(), u = (e, t = !1) => (t ? [...l].reverse() : l).find((t) => e.includes(t.identifier) && !n.has(t.identifier))?.identifier ?? null, d = null, f = s.dataset.groupId;
		if (f) {
			let e = this.getGroup(f);
			if (!e) return null;
			let t = Xs(this.groups, f), n = e.parentId ?? null;
			if (c === "before") {
				let e = u(t);
				d = e ? {
					anchorId: e,
					placement: "before",
					groupId: n
				} : null;
			} else if (this.isCollapsed(e)) {
				let e = u(t, !0);
				d = e ? {
					anchorId: e,
					placement: "after",
					groupId: n
				} : null;
			} else {
				let e = u(t);
				d = e ? {
					anchorId: e,
					placement: "before",
					groupId: f
				} : null;
			}
			d?.groupId && r.has(d.groupId) && (d = null);
		} else {
			let e = s.dataset.id ?? "";
			d = {
				anchorId: e,
				placement: c,
				groupId: Zs(this.groups, e)?.id ?? null
			};
		}
		return d ? (a.style.top = `${c === "before" ? s.offsetTop - 1 : s.offsetTop + s.offsetHeight - 1}px`, a.classList.add("is-visible"), d) : (a.classList.remove("is-visible"), null);
	}
	getEditArea() {
		let e = this.promptManager?.configuration.prefix ?? "completion_";
		return this.document.getElementById(`${e}prompt_manager_popup_edit`);
	}
	syncEditor() {
		if (!this.editorBody) return;
		if (this.activeGroupId) {
			if (!this.flushEditorApply()) return;
			this.editingId = null, this.editingPrompt = null, this.renderGroupEditor(this.activeGroupId);
			return;
		}
		let e = this.activeId, t = e ? this.getPrompt(e) : null, n = this.getEditArea(), r = n ? n.parentElement !== this.editorBody : !1, i = n ? n.style.display === "none" || r : !1;
		try {
			if (e !== this.editingId || t !== this.editingPrompt || t && this.isEditable(t) && i) {
				if (!this.flushEditorApply()) return;
				this.editingId = e, this.editingPrompt = t, this.loadPromptEditor();
			} else t && (this.editorView === "preview" || !this.isEditable(t)) && this.renderPreview();
			this.renderPromptEditorHeader();
		} catch (e) {
			console.error("[现代化预设] 同步编辑器区域异常：", e);
		}
	}
	getInspectArea() {
		let e = this.promptManager?.configuration.prefix ?? "completion_";
		return this.document.getElementById(`${e}prompt_manager_popup_inspect`);
	}
	showEditArea(e, t = "") {
		let n = this.getEditArea(), r = this.getInspectArea();
		n && n.style.setProperty("display", e ? "flex" : "none", "important"), r && this.inspectMove && (r.style.display = "none"), this.previewSource = void 0, this.editorBody && (this.editorBody.hidden = !e), this.setPlaceholder(e ? "" : t);
	}
	setPlaceholder(e) {
		this.editorPlaceholder && (this.editorPlaceholder.hidden = !e, this.editorPlaceholder.textContent = e);
	}
	isEditable(e) {
		return !!e && !!this.promptManager?.isPromptEditAllowed(e);
	}
	renderPreview(e = !1) {
		let t = this.promptManager, n = this.editingId, r = this.getInspectArea();
		if (!t || !n || !this.editorBody) return;
		r && (this.inspectMove ? r.parentElement !== this.editorBody && this.editorBody.append(r) : this.inspectMove = Nc(r, this.editorBody));
		let i = this.getEditArea();
		i && (i.style.display = "none");
		let a = t.messages?.hasItemWithIdentifier(n) ? t.messages.getItemByIdentifier(n) : null;
		(e || a !== this.previewSource) && (this.previewSource = a, !r || !a || !t.loadMessagesIntoInspectForm ? (r && (r.style.display = "none"), this.editorBody.hidden = !0, this.setPlaceholder("还没有可查看的内容。打开一个聊天后，酒馆在计算 Token 时会生成每个条目实际发送的消息；也可以点上方的刷新按钮重新计算。")) : (t.clearInspectForm?.(), t.loadMessagesIntoInspectForm(a), r.style.display = "", this.editorBody.hidden = !1, this.setPlaceholder("")));
	}
	setEditorView(e) {
		this.editorView !== e && this.flushEditorApply() && (this.editorView = e, this.loadPromptEditor(), this.renderPromptEditorHeader());
	}
	loadPromptEditor() {
		let e = this.promptManager, t = this.editingId, n = this.getEditArea();
		if (!e || !this.editorBody) return;
		n && (this.editAreaMove ? n.parentElement !== this.editorBody && this.editorBody.append(n) : this.editAreaMove = Nc(n, this.editorBody));
		let r = this.editingPrompt;
		if (r && (this.editorView === "preview" || !this.isEditable(r))) this.renderPreview(!0);
		else if (n && r && e.isPromptEditAllowed(r)) {
			this.suppressEditorEvents = !0;
			try {
				e.loadPromptIntoEditForm(r);
			} catch (e) {
				console.warn("[现代化预设] 宿主加载条目表单失败，正在使用手动兜底填充：", e);
			} finally {
				this.suppressEditorEvents = !1;
			}
			this.ensureEditFormValues(r);
			let t = e.configuration.prefix ?? "completion_", n = this.document.getElementById(`${t}prompt_manager_forbid_overrides_block`), i = this.document.getElementById(`${t}prompt_manager_popup_entry_form_forbid_overrides`);
			n && (n.style.setProperty("display", "inline-flex", "important"), n.style.setProperty("width", "auto", "important"), n.style.setProperty("flex", "0 0 auto", "important")), i && (i.style.setProperty("width", "1rem", "important"), i.style.setProperty("height", "1rem", "important"), i.style.setProperty("min-width", "1rem", "important"), i.style.setProperty("max-width", "1rem", "important"), i.style.setProperty("flex", "0 0 1rem", "important"), i.style.setProperty("transform", "none", "important")), this.showEditArea(!0);
		} else this.showEditArea(!1, t ? "这个条目在预设里找不到定义，可以删除后重新添加。" : "在左侧选择一个条目进行编辑");
	}
	ensureEditFormValues(e) {
		let t = this.promptManager?.configuration.prefix ?? "completion_", n = this.document.getElementById(`${t}prompt_manager_popup_entry_form_name`), r = this.document.getElementById(`${t}prompt_manager_popup_entry_form_role`), i = this.document.getElementById(`${t}prompt_manager_popup_entry_form_prompt`), a = this.document.getElementById(`${t}prompt_manager_popup_entry_form_injection_position`), o = this.document.getElementById(`${t}prompt_manager_popup_entry_form_injection_depth`), s = this.document.getElementById(`${t}prompt_manager_popup_entry_form_injection_order`), c = this.document.getElementById(`${t}prompt_manager_popup_entry_form_forbid_overrides`), l = this.document.getElementById(`${t}prompt_manager_popup_entry_form_save`);
		n && n.value !== (e.name ?? "") && (n.value = e.name ?? ""), r && r.value !== (e.role || "system") && (r.value = e.role || "system"), i && (i.value !== (e.content ?? "") && (i.value = e.content ?? ""), i.disabled = e.marker ?? !1), a && typeof e.injection_position == "number" && (a.value = String(e.injection_position)), o && typeof e.injection_depth == "number" && (o.value = String(e.injection_depth)), s && typeof e.injection_order == "number" && (s.value = String(e.injection_order)), c && (c.checked = !!e.forbid_overrides), l && (l.dataset.pmPrompt = e.identifier);
	}
	fallbackFillEditForm(e) {
		this.ensureEditFormValues(e);
	}
	renderPromptEditorHeader() {
		let e = this.editorHeader, t = this.editorExtra, n = this.promptManager;
		if (!e || !t || !n) return;
		e.replaceChildren(), t.replaceChildren();
		let r = this.editingId;
		if (!r) return;
		let i = this.getPrompt(r), a = this.getOrder().find((e) => e.identifier === r), o = V(this.document, "div", "th-modern-pm-editor-actions"), s = this.isEditable(i), c = !!i && (this.editorView === "preview" || !s);
		if (i) {
			let e = V(this.document, "div", "th-modern-pm-view-switch");
			e.setAttribute("role", "group"), e.title = "切换编辑/查看视图";
			for (let [t, n] of [["edit", "编辑"], ["preview", "查看"]]) {
				let r = V(this.document, "button", "th-modern-pm-view-button", n);
				r.type = "button", r.setAttribute("aria-pressed", String(c === (t === "preview"))), r.disabled = t === "edit" && !s, r.title = t === "edit" ? s ? "编辑模式：修改此条目的内容与参数" : "占位条目的内容由酒馆在生成时填入，不能直接编辑" : "查看模式：查看最近一次实际发送的内容", r.setAttribute("aria-label", r.title), r.addEventListener("click", () => this.setEditorView(t)), e.append(r);
			}
			if (o.append(e), c) {
				let e = jc(this.document, "", "重新计算实际内容", "bi-arrow-clockwise");
				e.addEventListener("click", () => {
					this.previewSource = void 0, this.promptManager?.render();
				}), o.append(e);
			}
		}
		if (a && i) {
			let e = Mc(this.document, a.enabled, a.enabled ? "条目状态：已启用（点击关闭）" : "条目状态：已关闭（点击启用）");
			e.disabled = !n.isPromptToggleAllowed(i), e.addEventListener("click", (e) => {
				e.stopPropagation(), this.toggleEntry(r);
			}), o.append(e);
		}
		if (a) {
			let e = jc(this.document, "", "将此条目放入新分组", "bi-folder-plus");
			e.addEventListener("click", () => void this.createGroupFromSelection([r])), o.append(e);
		}
		if (i && !i.marker) {
			let e = jc(this.document, "", "复制此条目生成副本", "bi-files");
			e.addEventListener("click", () => this.copyEntries([r])), o.append(e);
		}
		if (i && a) {
			let e = n.isPromptDeletionAllowed(i), t = jc(this.document, "is-danger", e ? "删除此条目" : "移出列表（内置条目不能删除）", e ? "bi-trash3" : "bi-box-arrow-right");
			t.addEventListener("click", () => void this.deleteEntries([r])), o.append(t);
		}
		e.append(this.createBackButton(), V(this.document, "div", "th-modern-pm-editor-title", Fc(i, r)), o);
		let l = Zs(this.groups, r);
		if (l) {
			let e = V(this.document, "div", "th-modern-pm-editor-path");
			e.append(V(this.document, "i", Oc("bi-folder2-open"))), e.append(V(this.document, "span", "", l.name || "未命名分组")), l.single_select && e.append(V(this.document, "span", "th-modern-pm-badge is-mode", "单选")), t.append(e);
		}
	}
	createBackButton() {
		let e = jc(this.document, "th-modern-pm-back", "返回列表", "bi-arrow-left");
		return e.addEventListener("click", () => {
			this.detailOpen = !1, this.updateNarrow();
		}), e;
	}
	renderGroupEditor(e) {
		let t = this.editorHeader, n = this.editorExtra, r = this.getGroup(e);
		if (!t || !n || !r) return;
		this.showEditArea(!1), t.replaceChildren(), n.replaceChildren();
		let i = this.getGroupState(r), a = V(this.document, "div", "th-modern-pm-editor-actions"), o = jc(this.document, "is-danger", "解散分组", "bi-folder-x");
		o.addEventListener("click", () => void this.dissolveGroup(e)), a.append(o), t.append(this.createBackButton(), V(this.document, "div", "th-modern-pm-editor-title", r.name || "未命名分组"), a);
		let s = V(this.document, "div", "th-modern-pm-group-form"), c = V(this.document, "label", "th-modern-pm-field");
		c.append(V(this.document, "span", "", "分组名称"));
		let l = V(this.document, "input", "text_pole");
		l.value = r.name, l.addEventListener("change", () => {
			let t = l.value.trim();
			t && t !== r.name && this.updateGroup(e, (e) => e.name = t);
		}), c.append(l);
		let u = V(this.document, "label", "th-modern-pm-field");
		u.append(V(this.document, "span", "", "选择方式"));
		let d = V(this.document, "select", "text_pole");
		for (let [e, t] of [["multi", "可多选"], ["single", "单选：开启一项时关闭同组其它项"]]) {
			let n = V(this.document, "option", "", t);
			n.value = e, d.append(n);
		}
		d.value = r.single_select ? "single" : "multi", d.addEventListener("change", () => {
			this.updateGroup(e, (e) => {
				d.value === "single" ? e.single_select = !0 : delete e.single_select;
			});
		}), u.append(d);
		let f = V(this.document, "p", "th-modern-pm-group-summary", `共 ${i.total} 个条目，已开启 ${i.enabled} 个。拖动组标题可以整组移动；把条目拖进或拖出分组即可调整成员。`), p = V(this.document, "small", "th-modern-pm-meta-hint", "分组保存在预设的 Luker 分组数据里，Luker 原生界面也能识别；单选设置只在现代化界面中生效。");
		s.append(c, u, f, p), n.append(s);
	}
	handleEditorInput = () => {
		!this.suppressEditorEvents && this.editingId && (this.localDirty = !0, this.editorApplyPending = !0, this.editRevision++, this.dirty = !0, this.renderDirty(), this.window.clearTimeout(this.applyTimer), this.applyTimer = this.window.setTimeout(() => this.applyEditor(), hc));
	};
	handleEditorClick = (e) => {
		let t = this.promptManager?.configuration.prefix ?? "completion_";
		e.target?.closest(`#${t}prompt_manager_popup_entry_form_reset`) && this.window.setTimeout(() => {
			this.editingId = null, this.editingPrompt = null, this.syncEditor(), this.scheduleDirtyCheck();
		}, 50);
	};
	flushEditorApplyOnFocusOut = () => {
		this.flushEditorApply();
	};
	flushEditorApply() {
		return !this.editorApplyPending || this.applyEditor() ? !0 : (this.window.toastr?.error?.("条目内容未能写回，请保留当前内容并重试。"), !1);
	}
	applyEditor() {
		this.window.clearTimeout(this.applyTimer), this.applyTimer = 0;
		let e = this.promptManager, t = this.editingId, n = t ? this.getPrompt(t) : null;
		if (!e || !t || !n) return !1;
		let r = JSON.stringify([
			n.name,
			n.role,
			n.marker,
			n.system_prompt,
			n.injection_position,
			n.injection_depth
		]);
		try {
			if (e.isPromptEditAllowed(n)) e.updatePromptWithPromptEditForm(n);
			else {
				let t = e.configuration?.prefix ?? "completion_", r = this.document.getElementById(`${t}prompt_manager_popup_entry_form_prompt`);
				r && !r.disabled && n.content !== r.value && (n.content = r.value);
			}
		} catch (e) {
			return console.error("[现代化预设] 保存表单到条目异常：", e), !1;
		}
		mc.includes(t) && e.updateQuickEdit?.(t, n), this.resetTokenCount(t);
		let i = r !== JSON.stringify([
			n.name,
			n.role,
			n.marker,
			n.system_prompt,
			n.injection_position,
			n.injection_depth
		]);
		return this.commit(i, i), this.editorApplyPending = !1, !0;
	}
	focusEditorName() {
		let e = this.promptManager?.configuration.prefix ?? "completion_", t = this.document.getElementById(`${e}prompt_manager_popup_entry_form_name`);
		t?.focus(), t?.select();
	}
};
function Rc(e, t = {}) {
	let n = new Lc(e, t), r = Xn(() => [e.is_active, e.settings.modernPresetEditor], () => n.scheduleSync(), { immediate: !0 });
	return {
		scheduleSync() {
			n.scheduleSync();
		},
		destroy() {
			r(), n.destroy();
		}
	};
}
// src/extension-settings-module.ts
var zc = "th-modern-extension-settings", Bc = "th-modern-extension-panel", Vc = "th-modern-extension-layout", Hc = "th-modern-extension-nav", Uc = "th-modern-extension-nav-list", Wc = "th-modern-extension-nav-count", Gc = "th-modern-extension-nav-item", Kc = "is-active", qc = "th-modern-extension-column", Jc = "is-active", Yc = "th-modern-extension-host-hidden", Xc = "th-modern-extension-host-active", Zc = "th-modern-extension-drawer", Qc = "th-modern-extension-drawer-active", $c = "th-modern-extension-mobile-accordion", el = 440, tl = "TavernHelper.modernLayout.selectedExtensionSettings";
function nl(e) {
	return (e ?? "").replace(/\s+/g, " ").trim();
}
function rl(e) {
	return e.matches(".inline-drawer") ? [e] : Array.from(e.querySelectorAll(".inline-drawer")).filter((t) => {
		let n = t.parentElement?.closest(".inline-drawer");
		return !n || !e.contains(n);
	});
}
function il(e, t) {
	let n = t;
	for (; n.parentElement && n.parentElement !== e;) n = n.parentElement;
	return n;
}
function al(e, t) {
	let n = t?.querySelector(":scope > .inline-drawer-toggle.inline-drawer-header, :scope > .inline-drawer-toggle"), r = n?.querySelector("b, strong, h3, h4") ?? n ?? e.querySelector("h3, h4, .standoutHeader");
	if (!r) return {
		title: nl(e.id.replace(/_container$/i, "").replaceAll("_", " ")) || "未命名扩展",
		badge: null
	};
	let i = r.cloneNode(!0);
	i.querySelectorAll("a, button, .notes-link, i, svg, .inline-drawer-icon").forEach((e) => e.remove());
	let a = null, o = Array.from(i.querySelectorAll("span, small, em")).find((e) => {
		let t = nl(e.textContent), n = e.classList.contains("text-red-500") || e.classList.contains("badge") || e.classList.contains("th-text-xs"), r = /^new!?$/i.test(t);
		return (n || r) && t.length > 0;
	});
	o && (a = nl(o.textContent) || null, o.remove());
	let s = nl(i.textContent);
	return !s && a && (s = a, a = null), s ||= nl(e.id.replace(/_container$/i, "").replaceAll("_", " ")) || "未命名扩展", {
		title: s,
		badge: a
	};
}
function ol(e) {
	let t = z(), n = B(), r = null, i = null, a = null, o = null, s = null, c = [], l = [], u = S(), d = "", f = 0, p = 0, m = null, h = null, g = null, v = null, y = () => n.matchMedia("(max-width: 899.98px)").matches, b = y() || n.matchMedia(`(max-width: ${el}px)`).matches, x = () => {
		r && ae(r.getBoundingClientRect().width);
	};
	function S() {
		try {
			return n.sessionStorage.getItem(tl);
		} catch {
			return null;
		}
	}
	function C(e) {
		try {
			e ? n.sessionStorage.setItem(tl, e) : n.sessionStorage.removeItem(tl);
		} catch {}
	}
	function w() {
		let e = /* @__PURE__ */ new Map(), t = [], r = (n, r, i, a, o) => {
			let { title: s, badge: c } = al(i, a), l = i.getAttribute("script_id") ?? a?.getAttribute("script_id") ?? r.getAttribute("script_id"), u = o ?? (i.id ? `id:${i.id}` : a?.id ? `id:${a.id}` : l ? `script:${l}` : `column:${n.id}:title:${s}`), d = e.get(u) ?? 0;
			e.set(u, d + 1);
			let f = d === 0 ? u : `${u}:${d}`, p = a?.querySelector(":scope > .inline-drawer-toggle.inline-drawer-header, :scope > .inline-drawer-toggle") ?? null, m = a?.querySelector(":scope > .inline-drawer-content") ?? null;
			t.push({
				column: n,
				sourceHost: r,
				content: m,
				drawer: a,
				header: p,
				host: i,
				key: f,
				title: s,
				badge: c
			});
		};
		return c.forEach((e) => {
			Array.from(e.children).forEach((t) => {
				if (!(t instanceof n.HTMLElement) || t === a || t.classList.contains("mc3-hidden") || t.classList.contains("displayNone") || t.hidden || t.style.display === "none" && !t.classList.contains(Yc)) return;
				let i = rl(t).filter((e) => !e.classList.contains("mc3-hidden") && !e.classList.contains("displayNone") && !e.hidden && e.style.display !== "none"), o = t.childElementCount > 0 && nl(t.textContent).length > 0;
				if (i.length === 0 && !o) return;
				if (i.length <= 1) {
					r(e, t, t, i[0] ?? null);
					return;
				}
				let s = i.map((e) => il(t, e)), c = /* @__PURE__ */ new Map();
				s.forEach((e) => c.set(e, (c.get(e) ?? 0) + 1));
				let l = t.id ? `id:${t.id}` : t.getAttribute("script_id") ? `script:${t.getAttribute("script_id")}` : void 0;
				i.forEach((n, i) => {
					let a = s[i], o = c.get(a) === 1 ? a : n;
					r(e, t, o, n, i === 0 ? l : void 0);
				});
			});
		}), t;
	}
	function T(e) {
		return !e.content || e.drawer?.classList.contains("open") || e.content.classList.contains("open") || e.header?.querySelector(".inline-drawer-icon")?.classList.contains("up") ? !0 : e.content.style.display ? e.content.style.display !== "none" : !1;
	}
	function ee() {
		o?.querySelectorAll(`.${Gc}`).forEach((e) => {
			let t = e.dataset.extensionKey === u;
			e.classList.toggle(Kc, t), e.setAttribute("aria-current", t ? "page" : "false");
		});
	}
	function te() {
		if (!o || !s) return;
		let e = t.createDocumentFragment();
		l.forEach((n) => {
			let r = t.createElement("button");
			r.type = "button", r.className = Gc, r.dataset.extensionKey = n.key, r.title = n.badge ? `${n.title} (${n.badge})` : n.title;
			let i = t.createElement("span");
			if (i.className = "th-modern-extension-nav-label", i.textContent = n.title, r.append(i), n.badge) {
				let e = t.createElement("span");
				e.className = "th-modern-extension-nav-badge", e.textContent = n.badge, r.append(e);
			}
			e.append(r);
		}), o.replaceChildren(e), s.textContent = String(l.length), ee();
	}
	function ne() {
		if (b) {
			l.forEach((e) => {
				e.host.classList.remove(Yc, Xc), e.drawer?.classList.remove(Qc);
			}), c.forEach((e) => {
				e.classList.remove(Jc), Array.from(e.children).forEach((e) => {
					e instanceof n.HTMLElement && e !== a && e.classList.remove(Yc, Xc);
				});
			}), ee();
			return;
		}
		let e = l.find((e) => e.key === u) ?? null;
		l.forEach((t) => {
			let n = t === e;
			t.host.classList.toggle(Yc, !n), t.host.classList.toggle(Xc, n), t.drawer?.classList.toggle(Qc, n), t.content && (t.content.classList.toggle("open", n), n && t.content.style.display === "none" && t.content.style.removeProperty("display"));
		}), c.forEach((t) => {
			let r = e?.column === t;
			t.classList.toggle(Jc, r), Array.from(t.children).forEach((t) => {
				if (t instanceof n.HTMLElement && t !== a) {
					let n = r && e ? t === e.sourceHost || t === e.host || t.contains(e.host) : !1;
					t.classList.toggle(Yc, !n);
				}
			});
		}), ee();
	}
	function re() {
		if (p = 0, b || !r?.classList.contains("openDrawer")) return;
		let e = l.find((e) => e.key === u);
		e?.header && e.content && !T(e) && e.header.click();
	}
	function E() {
		p === 0 && (p = n.requestAnimationFrame(re));
	}
	function ie(e) {
		l.some((t) => t.key === e) && (u = e, C(u), ne(), E());
	}
	function ae(e) {
		let t = y() || e > 0 && e < el;
		r?.classList.toggle($c, t), b !== t && (b = t, ne(), b || E());
	}
	function oe() {
		if (f = 0, !i?.isConnected) return;
		let e = w();
		l.forEach((e) => {
			e.host.classList.remove(Yc, Xc), e.drawer?.classList.remove(Zc, Qc);
		}), l = e, l.forEach((e) => e.drawer?.classList.add(Zc)), l.some((e) => e.key === u) || (u = l.find(T)?.key ?? l[0]?.key ?? null, C(u));
		let t = l.map((e) => `${e.key}\u0000${e.title}\u0000${e.badge ?? ""}`).join("");
		t !== d && (d = t, te()), ne(), D(), E();
	}
	function se() {
		f === 0 && (f = n.requestAnimationFrame(oe));
	}
	function ce() {
		se();
	}
	function D() {
		m?.disconnect(), m && (i && m.observe(i, {
			childList: !0,
			subtree: !0,
			attributes: !0,
			attributeFilter: [
				"class",
				"style",
				"hidden"
			]
		}), l.forEach((e) => {
			e.header && m?.observe(e.header, {
				childList: !0,
				characterData: !0,
				subtree: !0
			});
		}));
	}
	function le(e) {
		let t = (e.target instanceof n.Element ? e.target : null)?.closest(`.${Gc}`);
		if (!t || !a?.contains(t)) return;
		let r = t.dataset.extensionKey;
		r && ie(r);
	}
	function ue() {
		let e = t.createElement("nav");
		e.className = Hc, e.setAttribute("aria-label", "扩展程序设置");
		let n = t.createElement("div");
		n.className = "th-modern-extension-nav-header";
		let r = t.createElement("span");
		r.textContent = "扩展设置";
		let i = t.createElement("span");
		i.className = Wc, n.append(r, i);
		let a = t.createElement("div");
		return a.className = Uc, e.append(n, a), e.addEventListener("click", le), o = a, s = i, e;
	}
	function de() {
		if (i?.isConnected) {
			se();
			return;
		}
		if (r = t.querySelector("#rm_extensions_block"), i = r?.querySelector(":scope > .extensions_block") ?? null, c = ["extensions_settings", "extensions_settings2"].map((e) => t.getElementById(e)).filter((e) => e instanceof n.HTMLElement), !r || !i || c.length === 0) {
			r = null, i = null, c = [];
			return;
		}
		t.body.classList.add(zc), r.classList.add(Bc), i.classList.add(Vc), c.forEach((e) => e.classList.add(qc));
		let e = r.getBoundingClientRect().width;
		b = y() || e > 0 && e < el, r.classList.toggle($c, b), a = ue(), c[0].before(a), v = n.matchMedia("(max-width: 899.98px)"), v.addEventListener?.("change", x), m = new n.MutationObserver(ce), D(), h = new n.MutationObserver(() => E()), h.observe(r, {
			attributes: !0,
			attributeFilter: ["class"]
		}), g = new n.ResizeObserver((e) => {
			let t = e.find((e) => e.target === r);
			t && ae(t.contentRect.width);
		}), g.observe(r), oe();
	}
	function fe() {
		v?.removeEventListener?.("change", x), v = null, m?.disconnect(), m = null, h?.disconnect(), h = null, g?.disconnect(), g = null, f !== 0 && (n.cancelAnimationFrame(f), f = 0), p !== 0 && (n.cancelAnimationFrame(p), p = 0), a?.removeEventListener("click", le), a?.remove(), l.forEach((e) => {
			e.host.classList.remove(Yc, Xc), e.drawer?.classList.remove(Zc, Qc);
		}), c.forEach((e) => {
			e.classList.remove(qc, Jc), e.querySelectorAll(`.${Qc}`).forEach((e) => e.classList.remove(Qc)), Array.from(e.children).forEach((e) => e.classList.remove(Yc, Xc));
		}), i?.classList.remove(Vc), r?.classList.remove(Bc, $c), t.body.classList.remove(zc), r = null, i = null, a = null, o = null, s = null, c = [], l = [], d = "";
	}
	let pe = Xn(() => [e.is_active, e.settings.modernExtensionSettings], ([e, t]) => {
		e && t ? de() : fe();
	}, { immediate: !0 });
	return { destroy() {
		pe(), fe();
	} };
}
// node_modules/zod/v4/core/util.js
function sl(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function cl(e, t = "|") {
	return e.map((e) => Ml(e)).join(t);
}
function ll(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
var ul = class {
	constructor(e) {
		this._getter = e, this._value = void 0;
	}
	get value() {
		let e = this._getter;
		return e !== void 0 && (this._value = e(), this._getter = void 0), this._value;
	}
};
function dl(e) {
	return new ul(e);
}
function fl(e) {
	return e == null;
}
function pl(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function ml(e, t) {
	let n = e / t, r = Math.round(n), i = 4 * 2 ** -52 * Math.max(Math.abs(n), 1);
	return Math.abs(n - r) < i ? 0 : n - r;
}
function hl(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function gl(e) {
	let t = Object.getOwnPropertyDescriptor(e, "shape");
	return t?.get ? t.get.raw : t?.value;
}
function _l(e) {
	return gl(e._zod.def) ?? e._zod.def.shape;
}
function vl(e, t, n) {
	Object.defineProperty(e, t, {
		get() {
			let e = n();
			return hl(this, t, e), e;
		},
		enumerable: !0,
		configurable: !0
	});
}
function yl(e, t, n) {
	t in e ? hl(e, t, n) : e[t] = n;
}
function bl(e, t, n, r) {
	let i = _l(t);
	for (let a of n) {
		let n = Object.getOwnPropertyDescriptor(i, a);
		n.enumerable && (n.get ? vl(e, a, () => {
			let e = t._zod.def.shape[a];
			return r ? r(e, a) : e;
		}) : yl(e, a, r ? r(n.value, a) : n.value));
	}
}
function xl(e, t) {
	for (let n of Reflect.ownKeys(t)) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.enumerable && (r.get ? vl(e, n, () => t[n]) : yl(e, n, r.value));
	}
}
function Sl(...e) {
	let t = {};
	for (let n of e) {
		let e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function Cl(e) {
	return JSON.stringify(e);
}
var wl = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function Tl(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
var El = /* @__PURE__*/ dl(() => {
	if (xu.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return Function(""), !0;
	} catch {
		return !1;
	}
});
function Dl(e) {
	if (Tl(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return Tl(n) !== !1 && Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") !== !1;
}
function Ol(e) {
	return Dl(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
var kl = /* @__PURE__*/ new Set([
	"string",
	"number",
	"symbol"
]);
function Al(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function jl(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function H(e) {
	let t = e;
	if (!t) return {};
	if (typeof t == "string") return { error: () => t };
	if (t?.message !== void 0) {
		if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
		t.error = t.message;
	}
	return delete t.message, typeof t.error == "string" ? {
		...t,
		error: () => t.error
	} : t;
}
function Ml(e) {
	return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function Nl(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional");
}
var Pl = {
	safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, Fl = {
	int64: [/* @__PURE__*/ BigInt("-9223372036854775808"), /* @__PURE__*/ BigInt("9223372036854775807")],
	uint64: [/* @__PURE__*/ BigInt(0), /* @__PURE__*/ BigInt("18446744073709551615")]
};
function Il(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	let i = {};
	return bl(i, e, Ll(e, t)), jl(e, Sl(n, {
		shape: i,
		checks: []
	}));
}
function Ll(e, t) {
	let n = _l(e), r = [];
	for (let e of Reflect.ownKeys(t)) {
		if (!Object.getOwnPropertyDescriptor(n, e)?.enumerable) throw Error(`Unrecognized key: "${String(e)}"`);
		t[e] && r.push(e);
	}
	return r;
}
function Rl(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	let i = new Set(Ll(e, t)), a = {};
	return bl(a, e, Reflect.ownKeys(_l(e)).filter((e) => !i.has(e))), jl(e, Sl(n, {
		shape: a,
		checks: []
	}));
}
function zl(e, t) {
	if (!Dl(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = _l(e);
		for (let e of Reflect.ownKeys(t)) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return jl(e, Sl(e._zod.def, { shape: Bl(e, t) }));
}
function Bl(e, t) {
	let n = {};
	return bl(n, e, Reflect.ownKeys(_l(e))), xl(n, t), n;
}
function Vl(e, t) {
	if (!Dl(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return jl(e, Sl(e._zod.def, { shape: Bl(e, t) }));
}
function Hl(e, t) {
	if (!t?._zod?.def) throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
	if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	let n = {};
	return bl(n, e, Reflect.ownKeys(_l(e))), bl(n, t, Reflect.ownKeys(_l(t))), jl(e, Sl(e._zod.def, {
		shape: n,
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: t._zod.def.checks ?? []
	}));
}
function Ul(e, t, n, r = "partial") {
	let i = t._zod.def.checks;
	if (i && i.length > 0) throw Error(`.${r}() cannot be used on object schemas containing refinements`);
	let a = n ? new Set(Ll(t, n)) : void 0, o = {};
	return bl(o, t, Reflect.ownKeys(_l(t)), e && ((t, n) => a && !a.has(n) ? t : new e({
		type: "optional",
		innerType: t
	}))), jl(t, Sl(t._zod.def, {
		shape: o,
		checks: []
	}));
}
function Wl(e, t, n) {
	let r = n ? new Set(Ll(t, n)) : void 0, i = {};
	return bl(i, t, Reflect.ownKeys(_l(t)), (t, n) => r && !r.has(n) ? t : new e({
		type: "nonoptional",
		innerType: t
	})), jl(t, Sl(t._zod.def, { shape: i }));
}
function Gl(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function Kl(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
	return !1;
}
function ql(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function Jl(e) {
	return typeof e == "string" ? e : e?.message;
}
function Yl(e) {
	let t = [];
	for (let n of e ?? []) {
		let e = n._zod.def;
		if (!/_(length|size)$|_equals$/.test(e.check)) break;
		let r = e.maximum ?? e.length ?? e.size;
		r >= 0 && t.push([r, n]);
	}
	return t;
}
function Xl(e, t, n) {
	var r;
	for (let i = t; i < e.length; i++) (r = e[i]).schema ?? (r.schema = n);
}
function Zl(e, t, n) {
	var r;
	let i = e.inst?._zod?.traits;
	i?.has("$ZodType") && (i.has("$ZodCheck") ? (r = e).schema ?? (r.schema = e.inst) : e.schema = e.inst);
	let a = e.schema === e.inst ? void 0 : e.schema?._zod.def?.error, o = e.message ? e.message : Jl(e.inst?._zod.def?.error?.(e)) ?? Jl(a?.(e)) ?? Jl(t?.error?.(e)) ?? Jl(n.customError?.(e)) ?? Jl(n.localeError?.(e)) ?? "Invalid input", s = {};
	for (let t of Object.keys(e)) t !== "inst" && t !== "schema" && t !== "continue" && t !== "input" && t !== "__proto__" && (s[t] = e[t]);
	return s.path ??= [], s.message = o, t?.reportInput && (s.input = e.input), s;
}
var Ql = /[\uD800-\uDBFF]/;
function $l(e) {
	let t = e.length;
	if (!Ql.test(e)) return t;
	let n = t;
	for (let r = 0; r < t - 1; r++) (e.charCodeAt(r) & 64512) == 55296 && (e.charCodeAt(r + 1) & 64512) == 56320 && (n--, r++);
	return n;
}
function eu(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function tu(e) {
	let t = typeof e;
	switch (t) {
		case "number": return Number.isNaN(e) ? "nan" : "number";
		case "object": {
			if (e === null) return "null";
			if (Array.isArray(e)) return "array";
			let t = e;
			if (t && Object.getPrototypeOf(t) !== Object.prototype && "constructor" in t && t.constructor) return t.constructor.name;
		}
	}
	return t;
}
function nu(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
function ru(e, t) {
	for (let n in t) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.get ? Object.defineProperty(e, n, {
			...r,
			enumerable: !1
		}) : su(e, n, r.value);
	}
}
function iu(e, t, n, r = !0) {
	return Object.defineProperty(e, t, {
		configurable: !0,
		writable: !0,
		enumerable: r,
		value: n
	}), n;
}
function au(e, t, n) {
	return iu(e, t, n, !1);
}
/* @__NO_SIDE_EFFECTS__ */
function ou(e, t) {
	for (let n in e) {
		let r = e[n];
		Object.defineProperty(t, n, {
			configurable: !0,
			enumerable: !0,
			get() {
				return iu(this, n, r(this));
			},
			set(e) {
				iu(this, n, e);
			}
		});
	}
	return t;
}
function su(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		get() {
			return this == null ? n : iu(this, t, n.bind(this));
		},
		set(e) {
			iu(this, t, e);
		}
	});
}
function cu(e, t) {
	let n = Object.getPrototypeOf(e);
	return t in n ? void 0 : n;
}
var lu, uu = !1, du = {
	configurable: !0,
	get() {
		uu = !0;
	}
};
function U(e, t, n) {
	let r = Object.getPrototypeOf(e._zod);
	t in r && lu !== e._zod ? lu = void 0 : (lu = e._zod, Object.defineProperty(r, t, {
		configurable: !0,
		get() {
			Object.defineProperty(this, t, du);
			let e = uu;
			uu = !1;
			try {
				let r = n(this);
				return uu ? delete this[t] : Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: r
				}), uu ||= e, r;
			} catch (n) {
				throw delete this[t], uu ||= e, n;
			}
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				value: e
			});
		}
	}));
}
function fu(e, t, n, r) {
	let i = cu(e, t);
	i && Object.defineProperty(i, t, {
		configurable: !0,
		get() {
			let e = {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: void 0
			};
			return Object.defineProperty(this, t, e), e.value = n(this), Object.defineProperty(this, t, e), e.value;
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: e
			});
		}
	});
}
var pu = "~constantCatch";
function mu(e) {
	let t = () => e;
	return t[pu] = !0, t;
}
// node_modules/zod/v4/core/core.js
var hu, gu = {
	value: void 0,
	enumerable: !1
}, _u = "captureStackTrace" in Error ? Error : null;
function vu(e) {
	let t = _u;
	if (t) {
		let n = t.stackTraceLimit;
		if (typeof n == "number") {
			try {
				t.stackTraceLimit = 0;
			} catch {
				return _u = null, new e();
			}
			try {
				return new e();
			} finally {
				t.stackTraceLimit = n;
			}
		}
	}
	return new e();
}
/* @__NO_SIDE_EFFECTS__ */
function W(e, t, n, r) {
	let i = {};
	function a(e) {
		this.def = e, this.constr = d, this.traits = /* @__PURE__ */ new Set();
	}
	a.prototype = i;
	let o = n, s = o && /* @__PURE__ */ new WeakSet();
	function c(n, r) {
		if (!n._zod) {
			gu.value = new a(r);
			try {
				Object.defineProperty(n, "_zod", gu);
			} finally {
				gu.value = void 0;
			}
		} else if (n._zod.traits.has(e)) return;
		if (n._zod.traits.add(e), t(n, r), s) {
			let e = Object.getPrototypeOf(n), t = n._zod.constr.prototype, r = e;
			for (; r && r !== t;) r = Object.getPrototypeOf(r);
			let i = r ?? e;
			s.has(i) || (s.add(i), ru(i, o));
		}
		let i = d.prototype;
		for (let e in i) Object.prototype.hasOwnProperty.call(i, e) && (e in n || (n[e] = i[e].bind(n)));
	}
	let l = r?.Parent ?? Object;
	class u extends l {}
	Object.defineProperty(u, "name", { value: e });
	function d(e) {
		let t = r?.Parent ? vu(u) : this;
		c(t, e);
		let n = t._zod.deferred;
		if (n) {
			for (let e of n) e();
			t._zod.deferred = void 0;
		}
		let i = globalThis.__zod_globalConfig?.postProcessor;
		return i && i(t), t;
	}
	return Object.defineProperty(d, "init", { value: c }), Object.defineProperty(d, Symbol.hasInstance, { value: (t) => r?.Parent && t instanceof r.Parent ? !0 : t?._zod?.traits?.has(e) }), Object.defineProperty(d, "name", { value: e }), d;
}
var yu = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, bu = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(hu = globalThis).__zod_globalConfig ?? (hu.__zod_globalConfig = {});
var xu = globalThis.__zod_globalConfig;
function Su(e) {
	return e && Object.assign(xu, e), xu;
}
// node_modules/zod/v4/core/errors.js
function Cu() {
	let e = this._zod;
	return e.message ??= JSON.stringify(e.def, ll, 2), e.message;
}
function wu(e) {
	this._zod.message = e;
}
var Tu = {
	get: Cu,
	set: wu,
	enumerable: !0,
	configurable: !0
}, Eu = {
	value: void 0,
	enumerable: !1
}, Du = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), Ou = /* @__PURE__ */ W("$ZodError", (e, t) => {
	e.name = "$ZodError", Eu.value = t, Object.defineProperty(e, "issues", Eu), Eu.value = void 0, Object.defineProperty(e, "message", Tu);
	let n = Object.getPrototypeOf(e);
	Du.has(n) || (Du.add(n), Object.defineProperty(n, "toString", {
		configurable: !0,
		enumerable: !1,
		get() {
			let e = () => this.message;
			return Object.defineProperty(this, "toString", {
				value: e,
				configurable: !0,
				writable: !0
			}), e;
		},
		set(e) {
			Object.defineProperty(this, "toString", {
				value: e,
				configurable: !0,
				writable: !0
			});
		}
	}));
});
function ku(e, t, n) {
	return Object.prototype.hasOwnProperty.call(e, t) || (t === "__proto__" ? Object.defineProperty(e, t, {
		value: n(),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : e[t] = n()), e[t];
}
function Au(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? ku(n, i.path[0], () => []).push(t(i)) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function ju(e, t = (e) => e.message) {
	let n = { _errors: [] }, r = (e, i = []) => {
		for (let a of e.issues) if (a.code === "invalid_union" && a.errors.length) a.errors.map((e) => r({ issues: e }, [...i, ...a.path]));
		else if (a.code === "invalid_key") r({ issues: a.issues }, [...i, ...a.path]);
		else if (a.code === "invalid_element") r({ issues: a.issues }, [...i, ...a.path]);
		else {
			let e = [...i, ...a.path];
			if (e.length === 0) n._errors.push(t(a));
			else {
				let r = n, i = 0;
				for (; i < e.length;) {
					let n = e[i], o = i === e.length - 1;
					if (n === "_errors") {
						o && r._errors.push(t(a)), i++;
						continue;
					}
					Object.prototype.hasOwnProperty.call(r, n) || Object.defineProperty(r, n, {
						value: { _errors: [] },
						enumerable: !0,
						writable: !0,
						configurable: !0
					});
					let s = r[n];
					o && s._errors.push(t(a)), r = s, i++;
				}
			}
		}
	};
	return r(e), n;
}
// node_modules/zod/v4/core/parse.js
function Mu(e, t) {
	return {
		callee: t?.callee ?? e,
		Err: t?.Err
	};
}
var Nu = (e) => {
	let t = (n, r, i, a) => {
		let o = i ? {
			...i,
			async: !1
		} : { async: !1 }, s = n._zod.run({
			value: r,
			issues: []
		}, o);
		if (s instanceof Promise) throw new yu();
		if (s.issues.length) {
			let n = new ((a?.Err) ?? e)(s.issues.map((e) => Zl(e, o, Su())));
			throw wl(n, a?.callee ?? t), n;
		}
		return s.value;
	};
	return t;
}, Pu = (e) => {
	let t = async (n, r, i, a) => {
		let o = i ? {
			...i,
			async: !0
		} : { async: !0 }, s = n._zod.run({
			value: r,
			issues: []
		}, o);
		if (s instanceof Promise && (s = await s), s.issues.length) {
			let n = new ((a?.Err) ?? e)(s.issues.map((e) => Zl(e, o, Su())));
			throw wl(n, a?.callee ?? t), n;
		}
		return s.value;
	};
	return t;
}, Fu = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		async: !1
	} : { async: !1 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (a instanceof Promise) throw new yu();
	return a.issues.length ? Iu(e, a.issues, i) : {
		success: !0,
		data: a.value
	};
};
function Iu(e, t, n) {
	let r;
	return {
		success: !1,
		get error() {
			return r || (r = new e(t.map((e) => Zl(e, n, Su()))), t = void 0, n = void 0), r;
		},
		set error(e) {
			r = e, t = void 0, n = void 0;
		}
	};
}
var Lu = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		async: !0
	} : { async: !0 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	return a instanceof Promise && (a = await a), a.issues.length ? Iu(e, a.issues, i) : {
		success: !0,
		data: a.value
	};
}, Ru = /* @__PURE__ */ Symbol.for("zod.compile.invalid"), zu = /* @__PURE__ */ Symbol.for("zod.compile.fallback"), Bu = ((e, t, n) => {
	let r = e._zod.bag.validator;
	if (r !== void 0) {
		if (r(t) !== Ru) return !0;
		if (r.definite === !0 && n === void 0) return !1;
	}
	return Vu(e, t, n);
});
function Vu(e, t, n) {
	let r = n ? {
		...n,
		async: !1,
		abortEarly: !0
	} : {
		async: !1,
		abortEarly: !0
	}, i = e._zod.bag.fallbackRun, a;
	if (i ? (r[zu] = !0, a = i({
		value: t,
		issues: []
	}, r)) : a = e._zod.run({
		value: t,
		issues: []
	}, r), a instanceof Promise) throw new yu();
	return a.issues.length === 0;
}
var Hu = async (e, t, n) => {
	let r = n ? {
		...n,
		async: !0,
		abortEarly: !0
	} : {
		async: !0,
		abortEarly: !0
	}, i = e._zod.run({
		value: t,
		issues: []
	}, r);
	return i instanceof Promise && (i = await i), i.issues.length === 0;
}, Uu = (e) => {
	let t = Nu(e), n = (e, r, i, a) => {
		let o = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return t(e, r, o, Mu(n, a));
	};
	return n;
}, Wu = (e) => {
	let t = Nu(e), n = (e, r, i, a) => t(e, r, i, Mu(n, a));
	return n;
}, Gu = (e) => {
	let t = Pu(e), n = async (e, r, i, a) => {
		let o = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return await t(e, r, o, Mu(n, a));
	};
	return n;
}, Ku = (e) => {
	let t = Pu(e), n = async (e, r, i, a) => await t(e, r, i, Mu(n, a));
	return n;
}, qu = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return Fu(e)(t, n, i);
}, Ju = (e) => (t, n, r) => Fu(e)(t, n, r), Yu = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return Lu(e)(t, n, i);
}, Xu = (e) => async (t, n, r) => Lu(e)(t, n, r), Zu = /^-?\d+(?:\.\d+)?$/, Qu = /^(?:true|false)$/i, $u = /*@__PURE__*/ W("$ZodCheck", (e, t) => {
	var n;
	e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), ed = (e) => {
	let t = e.value;
	return !fl(t) && t.length !== void 0;
}, td = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, nd = /*@__PURE__*/ W("$ZodCheckLessThan", (e, t) => {
	$u.init(e, t);
	let n = td[typeof t.value];
	e._zod.check = (r) => {
		(t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
			origin: td[typeof r.value] ?? n,
			code: "too_big",
			maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
			input: r.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), rd = /*@__PURE__*/ W("$ZodCheckGreaterThan", (e, t) => {
	$u.init(e, t);
	let n = td[typeof t.value];
	e._zod.check = (r) => {
		(t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
			origin: td[typeof r.value] ?? n,
			code: "too_small",
			minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
			input: r.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), id = /*@__PURE__*/ W("$ZodCheckMultipleOf", (e, t) => {
	$u.init(e, t), e._zod.check = (n) => {
		if (typeof n.value != typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
		(typeof n.value == "bigint" ? t.value !== BigInt(0) && n.value % t.value === BigInt(0) : ml(n.value, t.value) === 0) || n.issues.push({
			origin: typeof n.value,
			code: "not_multiple_of",
			divisor: t.value,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), ad = /*@__PURE__*/ W("$ZodCheckNumberFormat", (e, t) => {
	$u.init(e, t), t.format = t.format || "float64";
	let n = t.format?.includes("int"), r = n ? "int" : "number", [i, a] = Pl[t.format];
	e._zod.check = (o) => {
		let s = o.value;
		if (n) {
			if (!Number.isInteger(s)) {
				o.issues.push({
					expected: r,
					format: t.format,
					code: "invalid_type",
					continue: !1,
					input: s,
					inst: e
				});
				return;
			}
			if (!Number.isSafeInteger(s)) {
				s > 0 ? o.issues.push({
					input: s,
					code: "too_big",
					maximum: 2 ** 53 - 1,
					note: "Integers must be within the safe integer range.",
					inst: e,
					origin: r,
					inclusive: !0,
					continue: !t.abort
				}) : o.issues.push({
					input: s,
					code: "too_small",
					minimum: -(2 ** 53 - 1),
					note: "Integers must be within the safe integer range.",
					inst: e,
					origin: r,
					inclusive: !0,
					continue: !t.abort
				});
				return;
			}
		}
		s < i && o.issues.push({
			origin: "number",
			input: s,
			code: "too_small",
			minimum: i,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		}), s > a && o.issues.push({
			origin: "number",
			input: s,
			code: "too_big",
			maximum: a,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		});
	};
}), od = /*@__PURE__*/ W("$ZodCheckMaxLength", (e, t) => {
	var n;
	$u.init(e, t), (n = e._zod.def).when ?? (n.when = ed), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if ((typeof r == "string" && i > t.maximum ? $l(r) : i) <= t.maximum) return;
		let a = eu(r);
		n.issues.push({
			origin: a,
			code: "too_big",
			maximum: t.maximum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), sd = /*@__PURE__*/ W("$ZodCheckMinLength", (e, t) => {
	var n;
	$u.init(e, t), (n = e._zod.def).when ?? (n.when = ed), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if ((typeof r == "string" && i >= t.minimum && i < t.minimum * 2 ? $l(r) : i) >= t.minimum) return;
		let a = eu(r);
		n.issues.push({
			origin: a,
			code: "too_small",
			minimum: t.minimum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), cd = /*@__PURE__*/ W("$ZodCheckLengthEquals", (e, t) => {
	var n;
	$u.init(e, t), (n = e._zod.def).when ?? (n.when = ed), e._zod.check = (n) => {
		let r = n.value, i = r.length, a = typeof r == "string" && i >= t.length && i <= t.length * 2 ? $l(r) : i;
		if (a === t.length) return;
		let o = eu(r), s = a > t.length;
		n.issues.push({
			origin: o,
			...s ? {
				code: "too_big",
				maximum: t.length
			} : {
				code: "too_small",
				minimum: t.length
			},
			inclusive: !0,
			exact: !0,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), ld = /*@__PURE__*/ W("$ZodCheckOverwrite", (e, t) => {
	$u.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
}), ud = class {
	constructor(e = [], t = {}) {
		this.content = [], this.indent = 0, this.args = e, this.closed = t;
	}
	indented(e) {
		this.indent += 1;
		try {
			e(this);
		} finally {
			--this.indent;
		}
	}
	write(e) {
		if (typeof e == "function") {
			e(this, { execution: "sync" }), e(this, { execution: "async" });
			return;
		}
		let t = e.split("\n").filter((e) => e), n = Math.min(...t.map((e) => e.length - e.trimStart().length)), r = t.map((e) => e.slice(n)).map((e) => " ".repeat(this.indent * 2) + e);
		for (let e of r) this.content.push(e);
	}
	compile() {
		let e = Function, t = this?.content ?? [""];
		return new e(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {\n${t.join("\n")}\n};`)(...Object.values(this.closed));
	}
}, dd = {
	major: 4,
	minor: 6,
	patch: 7
}, G = /*@__PURE__*/ W("$ZodType", (e, t) => {
	var n;
	e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = dd;
	let r = e._zod.def.checks, i = e._zod.traits.has("$ZodCheck") ? [e, ...r ?? []] : r?.length ? [...r] : [];
	for (let t of i) for (let n of t._zod.onattach) n(e);
	if (i.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		let t = (t, n, r) => {
			if (t.memo) return t;
			let i = Gl(t), a;
			for (let o of n) {
				if (o._zod.def.when) {
					if (Kl(t) || !o._zod.def.when(t)) continue;
				} else if (i) continue;
				let n = t.issues.length, s = o._zod.check(t);
				if (s instanceof Promise && r?.async === !1) throw new yu();
				if (a || s instanceof Promise) a = (a ?? Promise.resolve()).then(async () => {
					await s, t.issues.length !== n && (Xl(t.issues, n, e), i ||= Gl(t, n));
				});
				else {
					if (t.issues.length === n) continue;
					Xl(t.issues, n, e), i ||= Gl(t, n);
				}
			}
			return a ? a.then(() => t) : t;
		}, n = (n, r, a) => {
			if (Gl(n)) return n.aborted = !0, n;
			let o = t(r, i, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new yu();
				return o.then((t) => e._zod.parse(t, a));
			}
			return e._zod.parse(o, a);
		};
		e._zod.run = (r, a) => {
			if (a.skipChecks) return e._zod.parse(r, a);
			if (a.direction === "backward") {
				let t = e._zod.parse({
					value: r.value,
					issues: []
				}, {
					...a,
					skipChecks: !0
				});
				return t instanceof Promise ? t.then((e) => n(e, r, a)) : n(t, r, a);
			}
			let o = e._zod.parse(r, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new yu();
				return o.then((e) => t(e, i, a));
			}
			return t(o, i, a);
		};
	}
}, {
	get "~standard"() {
		return au(this, "~standard", md(this));
	},
	set "~standard"(e) {
		iu(this, "~standard", e);
	}
}), fd = (e, t) => e.issues.length ? { issues: e.issues.map((e) => Zl(e, t, Su())) } : { value: e.value };
async function pd(e, t) {
	let n = { async: !0 };
	return fd(await e._zod.run({
		value: t,
		issues: []
	}, n), n);
}
function md(e) {
	return {
		validate: (t) => {
			let n = { async: !1 };
			try {
				let r = e._zod.run({
					value: t,
					issues: []
				}, n);
				if (!(r instanceof Promise)) return fd(r, n);
			} catch {}
			return pd(e, t);
		},
		vendor: "zod",
		version: 1
	};
}
var hd = /*@__PURE__*/ W("$ZodNumber", (e, t) => {
	G.init(e, t), e._zod.pattern = Zu, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = Number(n.value);
		} catch {}
		let i = n.value;
		if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i)) return n;
		let a = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : String(i) : void 0;
		return n.issues.push({
			expected: "number",
			code: "invalid_type",
			input: i,
			inst: e,
			...a ? { received: a } : {}
		}), n;
	};
}), gd = /*@__PURE__*/ W("$ZodNumberFormat", (e, t) => {
	ad.init(e, t), hd.init(e, t);
}), _d = /*@__PURE__*/ W("$ZodBoolean", (e, t) => {
	G.init(e, t), e._zod.pattern = Qu, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = !!n.value;
		} catch {}
		let i = n.value;
		return typeof i == "boolean" || n.issues.push({
			expected: "boolean",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
	};
}), vd = /*@__PURE__*/ W("$ZodUnknown", (e, t) => {
	G.init(e, t), e._zod.parse = (e) => e;
}), yd = /*@__PURE__*/ W("$ZodNever", (e, t) => {
	G.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function bd(e, t) {
	let n = Yl(e._zod.def.checks);
	if (!n.length) return;
	let r = Math.min(...n.map((e) => e[0])), i = e._zod.parse;
	e._zod.parse = (n, a) => {
		let o = t(n.value);
		if (o > r && !a?.skipChecks && a?.direction !== "backward") {
			for (let [t, r] of Yl(e._zod.def.checks)) if (o > t && r._zod.def.when(n)) {
				let t = n.issues.length;
				return r._zod.check(n), n.issues[t].continue = !1, Xl(n.issues, t, e), n;
			}
		}
		return i(n, a);
	};
}
var xd = (e) => Array.isArray(e) ? e.length : -1;
function Sd(e, t, n) {
	e.issues.length && t.issues.push(...ql(n, e.issues)), t.value[n] = e.value;
}
var Cd = /*@__PURE__*/ W("$ZodArray", (e, t) => {
	G.init(e, t);
	let n = xu.memoizer;
	n?.attach(e), e._zod.parse = (r, i) => {
		let a = r.value;
		if (!Array.isArray(a)) return r.issues.push({
			expected: "array",
			code: "invalid_type",
			input: a,
			inst: e
		}), r;
		r.value = n ? n.alloc(e, r, Array(a.length), i) : Array(a.length);
		let o = [], s = i?.abortEarly;
		for (let e = 0; e < a.length; e++) {
			let n = a[e], c = t.element._zod.run({
				value: n,
				issues: []
			}, i);
			if (c instanceof Promise) o.push(c.then((t) => Sd(t, r, e)));
			else if (Sd(c, r, e), s && c.issues.length !== 0 && Gl(c)) break;
		}
		return o.length ? Promise.all(o).then(() => r) : r;
	}, bd(e, xd);
});
function wd(e, t, n, r, i, a) {
	let o = n in r, s = a === "optional";
	if (o || !s || i !== "optional") {
		if (e.issues.length) {
			if (i !== void 0 && s && !o) return;
			t.issues.push(...ql(n, e.issues));
		}
		!o && i === void 0 ? e.issues.length || t.issues.push({
			code: "invalid_type",
			expected: "nonoptional",
			input: void 0,
			path: [n]
		}) : e.value === void 0 ? (o || i === "defaulted" && !s) && (t.value[n] = void 0) : t.value[n] = e.value;
	}
}
var Td = [];
function Ed(e) {
	let t = Object.keys(e.shape), n = Object.getOwnPropertySymbols(e.shape), r = n.length ? n : Td, i = r.length ? [...t, ...r] : t;
	for (let t of i) if (!e.shape?.[t]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`);
	let a = Nl(e.shape);
	return {
		...e,
		allKeys: i,
		symbolKeys: r,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(a)
	};
}
function Dd(e, t, n, r, i, a, o) {
	let s = [], c = i.keySet, l = i.catchall._zod, u = l.def.type, d = l.optin, f = l.optout, p = 0;
	for (let i in t) {
		if (o && n.issues.length !== p) {
			if (Gl(n, p)) break;
			p = n.issues.length;
		}
		if (c.has(i)) continue;
		if (i === "__proto__") {
			u === "never" && s.push(i);
			continue;
		}
		if (u === "never") {
			s.push(i);
			continue;
		}
		let a = l.run({
			value: t[i],
			issues: []
		}, r);
		a instanceof Promise ? e.push(a.then((e) => wd(e, n, i, t, d, f))) : wd(a, n, i, t, d, f);
	}
	return s.length && n.issues.push({
		code: "unrecognized_keys",
		keys: s,
		input: t,
		inst: a,
		continue: !0
	}), e.length ? Promise.all(e).then(() => n) : n;
}
var Od = /*@__PURE__*/ W("$ZodObject", (e, t) => {
	G.init(e, t);
	let n = Object.getOwnPropertyDescriptor(t, "shape"), r = n?.get ? n.get.raw : t.shape ?? {};
	if (r) {
		let e = () => {
			let n = { ...r };
			return Object.defineProperty(t, "shape", { value: n }), e.raw = n, n;
		};
		e.raw = r, Object.defineProperty(t, "shape", { get: e });
	}
	let i = dl(() => Ed(t));
	U(e, "propValues", (e) => {
		let t = e.def.shape, n = {};
		for (let e in t) {
			let r = t[e]._zod;
			if (r.values) {
				Object.prototype.hasOwnProperty.call(n, e) || hl(n, e, /* @__PURE__ */ new Set());
				for (let t of r.values) n[e].add(t);
				r.optin !== void 0 && n[e].add(void 0);
			}
		}
		return n;
	});
	let a = Tl, o = t.catchall, s, c = xu.memoizer;
	c?.attach(e), e._zod.parse = (t, n) => {
		s ??= i.value;
		let r = t.value;
		if (!a(r)) return t.issues.push({
			expected: "object",
			code: "invalid_type",
			input: r,
			inst: e
		}), t;
		t.value = c ? c.alloc(e, t, {}, n) : {};
		let l = [], u = s.shape, d = n?.abortEarly, f = t.issues.length;
		for (let e of s.allKeys) {
			if (d && t.issues.length !== f) {
				if (Gl(t, f)) break;
				f = t.issues.length;
			}
			if (e === "__proto__") continue;
			let i = u[e], a = i._zod.optin, o = i._zod.optout, s = i._zod.run({
				value: r[e],
				issues: []
			}, n);
			s instanceof Promise ? l.push(s.then((n) => wd(n, t, e, r, a, o))) : wd(s, t, e, r, a, o);
		}
		return o ? Dd(l, r, t, n, i.value, e, d === !0) : l.length ? Promise.all(l).then(() => t) : t;
	};
}), kd = /*@__PURE__*/ W("$ZodObjectJIT", (e, t) => {
	Od.init(e, t);
	let n = e._zod.parse, r = dl(() => Ed(t)), i = xu.memoizer, a = (t) => {
		let n = r.value, a = n.symbolKeys, o = new ud(["payload", "ctx"], {
			shape: t,
			inst: e,
			memo: i,
			syms: a
		}), s = (e) => `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`, c = (e, t) => `
          let ${e}_ab = false;
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${e}_ab = true;
          }
          if (${e}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
		o.write("const input = payload.value;");
		let l = Object.create(null), u = 0;
		for (let e of n.allKeys) l[e] = `key_${u++}`;
		o.write(i ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
		for (let e of n.allKeys) {
			if (e === "__proto__") continue;
			let n = l[e], r = typeof e == "symbol" ? `syms[${a.indexOf(e)}]` : Cl(e), i = `${r} in input`, u = t[e], d = u?._zod?.optin, f = d !== void 0, p = u?._zod?.optout === "optional";
			if (o.write(`const ${n} = ${s(r)};`), f && p) {
				let e = d === "optional" ? `${n}_present` : `${n}.value !== undefined || ${n}_present`;
				o.write(`
        const ${n}_present = ${i};
        if (!${n}.issues.length || ${n}_present) {
          if (${n}.issues.length) {${c(n, r)}
          }

          if (${e}) {
            newResult[${r}] = ${n}.value;
          }
        }

      `);
			} else f ? (o.write(`
        if (${n}.issues.length) {${c(n, r)}
        }
      `), d === "defaulted" ? o.write(`newResult[${r}] = ${n}.value;`) : o.write(`
        if (${n}.value !== undefined || ${i}) {
          newResult[${r}] = ${n}.value;
        }
      `)) : o.write(`
        const ${n}_present = ${i};
        if (${n}.issues.length) {${c(n, r)}
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${r}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${n}_present) {
          newResult[${r}] = ${n}.value;
        }

      `);
		}
		return o.write("payload.value = newResult;"), o.write("return payload;"), o.compile();
	}, o, s = Tl, c = !xu.jitless, l = c && El.value, u = t.catchall, d;
	e._zod.parse = (i, f) => {
		d ??= r.value;
		let p = i.value;
		return s(p) ? c && l && f?.async === !1 && f.jitless !== !0 ? (o ||= a(t.shape), i = o(i, f), u ? Dd([], p, i, f, d, e, f?.abortEarly === !0) : i) : n(i, f) : (i.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), i);
	};
});
function Ad(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !Gl(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => Zl(e, r, Su())))
	}), t);
}
var jd = /*@__PURE__*/ W("$ZodUnion", (e, t) => {
	G.init(e, t), U(e, "optin", (e) => e.def.options.some((e) => e._zod.optin === "defaulted") ? "defaulted" : e.def.options.some((e) => e._zod.optin !== void 0) ? "optional" : void 0), U(e, "optout", (e) => e.def.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), U(e, "values", (e) => {
		if (e.def.options.every((e) => e._zod.values)) return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)));
	}), U(e, "pattern", (e) => {
		if (e.def.options.every((e) => e._zod.pattern)) {
			let t = e.def.options.map((e) => e._zod.pattern);
			return RegExp(`^(${t.map((e) => pl(e.source)).join("|")})$`);
		}
	});
	let n = t.options.length === 1 ? t.options[0]._zod.run : null;
	e._zod.parse = (r, i) => {
		if (n) return n(r, i);
		let a = !1, o = [];
		for (let e of t.options) {
			let t = e._zod.run({
				value: r.value,
				issues: []
			}, i);
			if (t instanceof Promise) o.push(t), a = !0;
			else {
				if (t.issues.length === 0) return t;
				o.push(t);
			}
		}
		return a ? Promise.all(o).then((t) => Ad(t, r, e, i)) : Ad(o, r, e, i);
	};
}), Md = /*@__PURE__*/ W("$ZodIntersection", (e, t) => {
	G.init(e, t), e._zod.parse = (e, n) => {
		let r = e.value, i = t.left._zod.run({
			value: r,
			issues: []
		}, n), a = t.right._zod.run({
			value: r,
			issues: []
		}, n);
		return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => Pd(e, t, n)) : Pd(e, i, a);
	};
});
function Nd(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (Dl(e) && Dl(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
		for (let n of r) {
			if (n === "__proto__") continue;
			let r = Nd(e[n], t[n]);
			if (!r.valid) return {
				valid: !1,
				mergeErrorPath: [n, ...r.mergeErrorPath]
			};
			i[n] = r.data;
		}
		return {
			valid: !0,
			data: i
		};
	}
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return {
			valid: !1,
			mergeErrorPath: []
		};
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r], a = t[r], o = Nd(i, a);
			if (!o.valid) return {
				valid: !1,
				mergeErrorPath: [r, ...o.mergeErrorPath]
			};
			n.push(o.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return {
		valid: !1,
		mergeErrorPath: []
	};
}
function Pd(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i, a = /* @__PURE__ */ new Map(), o = (e, t) => {
		let n;
		if (e.code === "unrecognized_keys" && !e.path?.length) i ??= e, n = e.keys;
		else if (e.code === "invalid_key" && e.origin === "record" && e.path?.length === 1) {
			let t = String(e.path[0]);
			a.has(t) || a.set(t, e), n = [t];
		} else return !1;
		for (let e of n) r.has(e) || r.set(e, {}), r.get(e)[t] = !0;
		return !0;
	};
	for (let n of t.issues) o(n, "l") || e.issues.push(n);
	for (let t of n.issues) o(t, "r") || e.issues.push(t);
	let s = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (s.length) {
		let t = i ? s.filter((e) => i.keys.includes(e)) : [];
		t.length && e.issues.push({
			...i,
			keys: t
		});
		for (let n of s) !t.includes(n) && a.has(n) && e.issues.push(a.get(n));
	}
	let c = Nd(t.value, n.value);
	if (!c.valid) {
		if (Gl(e)) return e;
		throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`);
	}
	return e.value = c.data, e;
}
var Fd = /*@__PURE__*/ W("$ZodEnum", (e, t) => {
	G.init(e, t);
	let n = sl(t.entries), r = new Set(n);
	e._zod.values = r, U(e, "pattern", (e) => {
		let t = sl(e.def.entries).filter((e) => kl.has(typeof e));
		return RegExp(t.length ? `^(${t.map((e) => Al(e.toString())).join("|")})$` : "^[^\\s\\S]$");
	}), e._zod.parse = (t, i) => {
		let a = t.value;
		return r.has(a) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: a,
			inst: e
		}), t;
	};
}), Id = /*@__PURE__*/ W("$ZodTransform", (e, t) => {
	G.init(e, t), e._zod.optin = "optional", xu.memoizer?.guard(e), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new bu(e.constructor.name);
		let i = t.transform(n.value, n);
		if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
		if (i instanceof Promise) throw new yu();
		return n.value = i, n;
	};
});
function Ld(e, t) {
	return e.value = t.issues.length ? void 0 : t.value, e;
}
var Rd = /*@__PURE__*/ W("$ZodOptional", (e, t) => {
	G.init(e, t), U(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), e._zod.optout = "optional", U(e, "values", (e) => {
		let t = e.def.innerType._zod.values;
		return t ? /* @__PURE__ */ new Set([...t, void 0]) : void 0;
	}), U(e, "pattern", (e) => {
		let t = e.def.innerType._zod.pattern;
		return t ? RegExp(`^(${pl(t.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if (e.value === void 0) {
			if (t.innerType._zod.optin !== "defaulted") return e;
			let r = t.innerType._zod.run({
				value: e.value,
				issues: []
			}, n);
			return r instanceof Promise ? r.then((t) => Ld(e, t)) : Ld(e, r);
		}
		return t.innerType._zod.run(e, n);
	};
}), zd = /*@__PURE__*/ W("$ZodExactOptional", (e, t) => {
	Rd.init(e, t), U(e, "values", (e) => e.def.innerType._zod.values), U(e, "pattern", (e) => e.def.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), Bd = /*@__PURE__*/ W("$ZodNullable", (e, t) => {
	G.init(e, t), U(e, "optin", (e) => e.def.innerType._zod.optin), U(e, "optout", (e) => e.def.innerType._zod.optout), U(e, "pattern", (e) => {
		let t = e.def.innerType._zod.pattern;
		return t ? RegExp(`^(${pl(t.source)}|null)$`) : void 0;
	}), U(e, "values", (e) => e.def.innerType._zod.values ? /* @__PURE__ */ new Set([...e.def.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
}), Vd = /*@__PURE__*/ W("$ZodDefault", (e, t) => {
	G.init(e, t), e._zod.optin = "defaulted", U(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		if (e.value === void 0) return e.value = t.defaultValue, e;
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => Hd(e, t)) : Hd(r, t);
	};
});
function Hd(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
var Ud = /*@__PURE__*/ W("$ZodPrefault", (e, t) => {
	G.init(e, t), e._zod.optin = "defaulted", U(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), Wd = /*@__PURE__*/ W("$ZodNonOptional", (e, t) => {
	G.init(e, t), U(e, "values", (e) => {
		let t = e.def.innerType._zod.values;
		return t ? new Set([...t].filter((e) => e !== void 0)) : void 0;
	}), e._zod.parse = (n, r) => {
		let i = t.innerType._zod.run(n, r);
		return i instanceof Promise ? i.then((t) => Gd(t, e)) : Gd(i, e);
	};
});
function Gd(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
function Kd(e, t, n, r) {
	return t.issues.length ? (e.value = n.catchValue({
		...t,
		value: e.value,
		error: { issues: t.issues.map((e) => Zl(e, r, Su())) },
		input: e.value
	}), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
var qd = /*@__PURE__*/ W("$ZodCatch", (e, t) => {
	G.init(e, t), U(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), U(e, "optout", (e) => e.def.innerType._zod.optout), U(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run({
			value: e.value,
			issues: []
		}, n);
		return r instanceof Promise ? r.then((r) => Kd(e, r, t, n)) : Kd(e, r, t, n);
	};
}), Jd = /*@__PURE__*/ W("$ZodPipe", (e, t) => {
	G.init(e, t), U(e, "values", (e) => e.def.in._zod.values), U(e, "optin", (e) => e.def.in._zod.optin), U(e, "optout", (e) => e.def.out._zod.optout), U(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
		if (n.direction === "backward") {
			let r = t.out._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => Yd(e, t.in, n)) : Yd(r, t.in, n);
		}
		let r = t.in._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => Yd(e, t.out, n)) : Yd(r, t.out, n);
	};
});
function Yd(e, t, n) {
	return e.issues.some((e) => e.code !== "unrecognized_keys") ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
var Xd = /*@__PURE__*/ W("$ZodReadonly", (e, t) => {
	G.init(e, t), U(e, "propValues", (e) => e.def.innerType._zod.propValues), U(e, "values", (e) => e.def.innerType._zod.values), U(e, "optin", (e) => e.def.innerType?._zod?.optin), U(e, "optout", (e) => e.def.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then(Zd) : Zd(r);
	};
});
function Zd(e) {
	return e.memo || (e.value = Object.freeze(e.value)), e;
}
var Qd = /*@__PURE__*/ W("$ZodCustom", (e, t) => {
	$u.init(e, t), G.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		let r = n.value, i = t.fn(r);
		if (i instanceof Promise) return i.then((t) => $d(t, n, r, e));
		$d(i, n, r, e);
	};
});
function $d(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(nu(e));
	}
}
// node_modules/zod/v4/core/memoizer.js
var ef = class extends Error {
	constructor() {
		super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
	}
}, tf = "~memo", nf = [];
function rf(e) {
	return typeof e == "object" && !!e;
}
function af(e) {
	return e.map((e) => e.path ? {
		...e,
		path: e.path.slice()
	} : { ...e });
}
var of = /*@__PURE__*/ new WeakMap(), sf = 0, cf = 1, lf = 2;
function uf(e, t, n) {
	let r = of.get(e);
	if (r !== void 0) return r ? lf : sf;
	if (t.has(e)) return lf;
	t.add(e);
	let i = sf, a = (e) => {
		if (i !== lf && e?._zod) {
			let r = uf(e, t, n);
			r > i && (i = r);
		}
	}, o = (e, r) => {
		let i = sf;
		for (let a of Reflect.ownKeys(e)) {
			let o = Object.getOwnPropertyDescriptor(e, a);
			if (r && !o.enumerable) continue;
			let s = o.get ? cf : o.value?._zod ? uf(o.value, t, n) : sf;
			s > i && (i = s);
		}
		return i;
	}, s = (e) => {
		e > i && (i = e);
	}, c = e._zod.def;
	switch (c.type) {
		case "object": {
			let e = gl(c);
			s(e ? o(e, !0) : cf), a(c.catchall);
			break;
		}
		case "array":
			a(c.element);
			break;
		case "tuple":
			for (let e of c.items) a(e);
			a(c.rest);
			break;
		case "record":
		case "map":
			a(c.keyType), a(c.valueType);
			break;
		case "set":
			a(c.valueType);
			break;
		case "union":
			for (let e of c.options) a(e);
			break;
		case "intersection":
			a(c.left), a(c.right);
			break;
		case "optional":
		case "nullable":
		case "default":
		case "prefault":
		case "catch":
		case "readonly":
		case "nonoptional":
		case "promise":
		case "success":
			a(c.innerType);
			break;
		case "pipe":
			a(c.in), a(c.out);
			break;
		case "function":
			a(c.input), a(c.output);
			break;
		case "lazy": {
			let r = c._cachedInner ?? (n ? e._zod.innerType : void 0);
			s(r ? uf(r, t, !1) : cf);
			break;
		}
		case "template_literal":
		case "string":
		case "number":
		case "int":
		case "boolean":
		case "bigint":
		case "symbol":
		case "undefined":
		case "null":
		case "void":
		case "never":
		case "any":
		case "unknown":
		case "date":
		case "nan":
		case "enum":
		case "literal":
		case "file":
		case "transform":
		case "custom": break;
		default: for (let e in c) {
			let t = Object.getOwnPropertyDescriptor(c, e);
			if (!t || t.get) continue;
			let n = t.value;
			if (n && typeof n == "object") {
				if (n._zod) a(n);
				else if (Array.isArray(n)) for (let e of n) a(e);
			}
		}
	}
	return t.delete(e), df(e, i);
}
function df(e, t) {
	return t !== cf && of.set(e, t === lf), t;
}
function ff(e, t) {
	let n = e.buckets.get(t);
	return n || (n = /* @__PURE__ */ new WeakMap(), e.buckets.set(t, n)), n;
}
var pf, mf = [], hf = {
	alloc(e, t, n) {
		let r = pf;
		if (!r) return n;
		pf = void 0;
		let i = {
			value: n,
			issues: null
		};
		return r.set(t.value, i), mf.push(i), n;
	},
	guard(e) {
		var t;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			let t = e._zod.parse, n = (e, n) => {
				if (n.direction !== "backward" && _f(n, e.value)) throw new ef();
				return t(e, n);
			};
			e._zod.parse = n, e._zod.run === t && (e._zod.run = n);
		});
	},
	attach(e) {
		var t;
		let n, r = !1, i, a;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			let t = e._zod.parse, o = (s, c) => {
				if (n === void 0) {
					let i = uf(e, /* @__PURE__ */ new Set(), !1);
					if (i === sf) return e._zod.parse = t, e._zod.run === o && (e._zod.run = t), t(s, c);
					i === lf || r ? n = !0 : r = !0;
				}
				let l = s.value;
				if (!rf(l)) return t(s, c);
				let u = c[tf];
				u || (u = {
					buckets: /* @__PURE__ */ new WeakMap(),
					backEdges: void 0
				}, c[tf] = u);
				let d;
				i === c ? d = a : (d = ff(u, e), i = c, a = d);
				let f = d.get(l);
				if (f) return s.value = f.value, f.issues ? f.issues.length && s.issues.push(...af(f.issues)) : (s.memo = !0, u.backEdges ?? (u.backEdges = /* @__PURE__ */ new WeakSet()), u.backEdges.add(f.value)), s;
				pf = d;
				let p = mf.length, m = t(s, c);
				pf = void 0;
				let h = mf.length > p ? mf.pop() : void 0;
				return m instanceof Promise ? m.then((e) => (h && (h.issues = e.issues.length ? af(e.issues) : nf), e)) : (h && (h.issues = m.issues.length ? af(m.issues) : nf), m);
			};
			e._zod.parse = o, e._zod.run === t && (e._zod.run = o);
		});
	}
};
function gf() {
	return hf;
}
function _f(e, t) {
	let n = e[tf]?.backEdges;
	return n !== void 0 && rf(t) && n.has(t);
}
// node_modules/zod/v4/locales/en.js
var vf = () => {
	let e = {
		string: {
			unit: "characters",
			verb: "to have"
		},
		file: {
			unit: "bytes",
			verb: "to have"
		},
		array: {
			unit: "items",
			verb: "to have"
		},
		set: {
			unit: "items",
			verb: "to have"
		},
		map: {
			unit: "entries",
			verb: "to have"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "input",
		email: "email address",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO datetime",
		date: "ISO date",
		time: "ISO time",
		duration: "ISO duration",
		ipv4: "IPv4 address",
		ipv6: "IPv6 address",
		mac: "MAC address",
		cidrv4: "IPv4 range",
		cidrv6: "IPv6 range",
		base64: "base64-encoded string",
		base64url: "base64url-encoded string",
		json_string: "JSON string",
		e164: "E.164 number",
		currency_code: "currency code",
		credit_card: "credit card number",
		iban: "IBAN",
		jwt: "JWT",
		template_literal: "input"
	}, r = { nan: "NaN" };
	function i(e, t) {
		return e === "number" && typeof t == "number" && !Number.isFinite(t) ? String(t) : r[e] ?? e;
	}
	return (e) => {
		switch (e.code) {
			case "invalid_type": return `Invalid input: expected ${i(e.expected)}, received ${i(tu(e.input), e.input)}`;
			case "invalid_value": return e.values.length === 1 ? `Invalid input: expected ${Ml(e.values[0])}` : `Invalid option: expected one of ${cl(e.values, "|")}`;
			case "too_big": {
				let n = e.exact ? "exactly " : e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Too big: expected ${e.origin ?? "value"} to have ${n}${e.maximum.toString()} ${r.unit ?? "elements"}` : `Too big: expected ${e.origin ?? "value"} to be ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.exact ? "exactly " : e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Too small: expected ${e.origin} to have ${n}${e.minimum.toString()} ${r.unit}` : `Too small: expected ${e.origin} to be ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Invalid string: must start with "${t.prefix}"` : t.format === "ends_with" ? `Invalid string: must end with "${t.suffix}"` : t.format === "includes" ? `Invalid string: must include "${t.includes}"` : t.format === "regex" ? `Invalid string: must match pattern ${t.pattern}` : `Invalid ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Invalid number: must be a multiple of ${e.divisor}`;
			case "unrecognized_keys": return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${cl(e.keys, ", ")}`;
			case "invalid_key": return `Invalid key in ${e.origin}`;
			case "invalid_union": return e.options && Array.isArray(e.options) && e.options.length > 0 ? `Invalid discriminator value. Expected ${e.options.map((e) => `'${e}'`).join(" | ")}` : e.inclusive === !1 ? "Invalid input: more than one option matched" : "Invalid input";
			case "invalid_element": return `Invalid value in ${e.origin}`;
			default: return "Invalid input";
		}
	};
};
function yf() {
	return { localeError: vf() };
}
// node_modules/zod/v4/core/registries.js
var bf, xf = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
	}
	add(e, ...t) {
		let n = t[0];
		return this._map.set(e, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, e), this;
	}
	clear() {
		return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
	}
	remove(e) {
		let t = this._map.get(e);
		return t && typeof t == "object" && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
	}
	get(e) {
		let t = e._zod.parent;
		if (t) {
			let n = { ...this.get(t) ?? {} };
			delete n.id;
			let r = {
				...n,
				...this._map.get(e)
			};
			return Object.keys(r).length ? r : void 0;
		}
		return this._map.get(e);
	}
	has(e) {
		return this._map.has(e);
	}
};
function Sf() {
	return new xf();
}
(bf = globalThis).__zod_globalRegistry ?? (bf.__zod_globalRegistry = Sf());
var Cf = globalThis.__zod_globalRegistry;
// node_modules/zod/v4/core/api.js
function wf(e) {
	return e.checks &&= [...e.checks], e;
}
// @__NO_SIDE_EFFECTS__
function Tf(e, t) {
	return new e(wf({
		type: "number",
		checks: [],
		...H(t)
	}));
}
// @__NO_SIDE_EFFECTS__
function Ef(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...H(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Df(e, t) {
	return new e({
		type: "boolean",
		...H(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Of(e) {
	return new e({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function kf(e, t) {
	return new e({
		type: "never",
		...H(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Af(e, t) {
	return new nd({
		check: "less_than",
		...H(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function jf(e, t) {
	return new nd({
		check: "less_than",
		...H(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function Mf(e, t) {
	return new rd({
		check: "greater_than",
		...H(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function Nf(e, t) {
	return new rd({
		check: "greater_than",
		...H(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function Pf(e, t) {
	return new id({
		check: "multiple_of",
		...H(t),
		value: e
	});
}
// @__NO_SIDE_EFFECTS__
function Ff(e, t) {
	return new od({
		check: "max_length",
		...H(t),
		maximum: e
	});
}
// @__NO_SIDE_EFFECTS__
function If(e, t) {
	return new sd({
		check: "min_length",
		...H(t),
		minimum: e
	});
}
// @__NO_SIDE_EFFECTS__
function Lf(e, t) {
	return new cd({
		check: "length_equals",
		...H(t),
		length: e
	});
}
// @__NO_SIDE_EFFECTS__
function Rf(e) {
	return new ld({
		check: "overwrite",
		tx: e
	});
}
// @__NO_SIDE_EFFECTS__
function zf(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...H(n)
	});
}
// @__NO_SIDE_EFFECTS__
function Bf(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...H(n)
	});
}
// @__NO_SIDE_EFFECTS__
function Vf(e, t) {
	let n = /* @__PURE__ */ Hf((t) => (t.addIssue = (e) => {
		if (typeof e == "string") t.issues.push(nu(e, t.value, n._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", "input" in r || (r.input = t.value), r.inst ??= n, r.continue ??= !n._zod.def.abort, t.issues.push(nu(r));
		}
	}, e(t.value, t)), t);
	return n;
}
// @__NO_SIDE_EFFECTS__
function Hf(e, t) {
	let n = new $u({
		check: "custom",
		...H(t)
	});
	return n._zod.check = e, n;
}
// node_modules/zod/v4/core/to-json-schema.js
function Uf(e, ...t) {
	for (let n of t) for (let t of Reflect.ownKeys(n)) Object.prototype.propertyIsEnumerable.call(n, t) && hl(e, t, n[t]);
	return e;
}
function Wf(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? Cf,
		target: t,
		unrepresentable: e?.unrepresentable ?? "throw",
		override: e?.override ?? (() => {}),
		io: e?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		sharedDefsExtractedFor: void 0,
		sharedEmitDoneFor: void 0,
		cycles: e?.cycles ?? "ref",
		reused: e?.reused ?? "inline",
		intersections: [],
		deferred: [],
		external: e?.external ?? void 0
	};
}
function Gf(e, t, n, r, i) {
	let a = typeof t.unrepresentable == "function" ? t.unrepresentable({
		zodSchema: e,
		path: r.path,
		message: i
	}) : t.unrepresentable;
	if (a === "any") return !1;
	if (a === void 0 || a === "throw") throw Error(i);
	return Object.assign(n, a), !0;
}
function K(e, t, n = {
	path: [],
	schemaPath: []
}) {
	var r;
	let i = e._zod.def, a = t.seen.get(e);
	if (a) return a.count++, n.schemaPath.includes(e) && (a.cycle = n.path), a.schema;
	let o = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: n.path
	};
	t.seen.set(e, o), t.sharedDefsExtractedFor = void 0, t.sharedEmitDoneFor = void 0;
	let s = e._zod.toJSONSchema?.();
	if (s) o.schema = s;
	else {
		let r = {
			...n,
			schemaPath: [...n.schemaPath, e],
			path: n.path
		};
		if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
		else {
			let n = o.schema, a = t.processors[i.type];
			if (!a) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
			a(e, t, n, r);
		}
		let a = e._zod.parent;
		a && (o.ref ||= a, K(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && Uf(o.schema, c), t.io === "input" && tp(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function Kf(e) {
	return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function qf(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	if (e.external && e.sharedDefsExtractedFor === e.external) return;
	let r = /* @__PURE__ */ new Map();
	for (let t of e.seen.entries()) {
		let n = e.metadataRegistry.get(t[0])?.id;
		if (n) {
			let e = r.get(n);
			if (e && e !== t[0]) throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			r.set(n, t[0]);
		}
	}
	let i = (t) => {
		let r = e.target === "draft-2020-12" ? "$defs" : "definitions";
		if (e.external) {
			let n = e.external.registry.get(t[0])?.id, i = e.external.uri ?? ((e) => e);
			if (n) return { ref: i(n) };
			let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
			return t[1].defId = a, {
				defId: a,
				ref: `${i("__shared")}#/${r}/${Kf(a)}`
			};
		}
		let i = `#/${r}/`;
		if (t[1] === n && !t[1].schema.id) return { ref: "#" };
		let a = t[1].schema.id ?? `__schema${e.counter++}`;
		return {
			defId: a,
			ref: i + Kf(a)
		};
	}, a = (e) => {
		if (e[1].schema.$ref) return;
		let t = e[1], { ref: n, defId: r } = i(e);
		t.def = { ...t.schema }, r && (t.defId = r);
		let a = t.schema;
		for (let e in a) delete a[e];
		a.$ref = n;
	};
	if (e.cycles === "throw") for (let t of e.seen.entries()) {
		let e = t[1];
		if (e.cycle) throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (let n of e.seen.entries()) {
		let r = n[1];
		if (t === n[0]) a(n);
		else {
			if (e.external) {
				let r = e.external.registry.get(n[0])?.id;
				if (t !== n[0] && r) {
					a(n);
					continue;
				}
			}
			(e.metadataRegistry.get(n[0])?.id || r.cycle || r.count > 1 && e.reused === "ref") && a(n);
		}
	}
	e.external && (e.sharedDefsExtractedFor = e.external);
}
function Jf(e) {
	let t = e.anyOf;
	if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
	let n = [];
	for (let e of t) {
		if (!e || typeof e != "object") return;
		Jf(e);
		let t = Object.keys(e);
		if (t.length !== 1 || t[0] !== "type") return;
		let r = e.type;
		for (let e of Array.isArray(r) ? r : [r]) {
			if (typeof e != "string") return;
			n.includes(e) || n.push(e);
		}
	}
	delete e.anyOf, e.type = n.length === 1 ? n[0] : n;
}
var Yf = /* @__PURE__ */ new Set([
	"type",
	"properties",
	"required",
	"additionalProperties"
]), Xf = ["oneOf", "anyOf"];
function Zf(e) {
	let t = e.additionalProperties;
	return t === void 0 || t === !1 || typeof t != "object" || !t ? null : Object.keys(t).length ? t : null;
}
function Qf(e) {
	let t = [];
	for (let n of e) {
		if (typeof n != "object" || n.type !== "object") return null;
		for (let e in n) if (!Yf.has(e)) return null;
		t.push(n);
	}
	let n = {}, r = /* @__PURE__ */ new Set();
	for (let e of t) {
		for (let r in e.properties) {
			if (Object.prototype.hasOwnProperty.call(n, r)) continue;
			let e = [];
			for (let n of t) {
				let t = n.properties?.[r] ?? Zf(n);
				t != null && (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) || e.push(t));
			}
			hl(n, r, e.length === 1 ? e[0] : Qf(e) ?? { allOf: e });
		}
		for (let t of e.required ?? []) r.add(t);
	}
	let i = {
		type: "object",
		properties: n
	};
	if (r.size && (i.required = [...r]), t.every((e) => e.additionalProperties === !1)) i.additionalProperties = !1;
	else {
		let e = [];
		for (let n of t) {
			let t = Zf(n);
			t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t);
		}
		e.length === 1 ? i.additionalProperties = e[0] : e.length > 1 && (i.additionalProperties = { allOf: e });
	}
	return i;
}
function $f(e) {
	let t = e.allOf;
	if (!Array.isArray(t) || t.length < 2) return;
	for (let t of Yf) if (t in e) return;
	let n = t.filter((e) => Xf.some((t) => Array.isArray(e[t]))), r = null;
	if (!n.length) r = Qf(t);
	else {
		let e = n[0], i = Xf.find((t) => Array.isArray(e[t]));
		if (Object.keys(e).length !== 1) return;
		let a = t.filter((t) => t !== e), o = e[i].map((e) => Qf([...a, e]));
		if (o.some((e) => !e)) return;
		r = { [i]: o };
	}
	r && (delete e.allOf, Uf(e, r));
}
function ep(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = (t) => {
		let n = e.seen.get(t);
		if (n.ref === null) return;
		let i = n.def ?? n.schema, a = { ...i }, o = n.ref;
		if (n.ref = null, o) {
			r(o);
			let n = e.seen.get(o), s = n.schema;
			if (s.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : Uf(i, s), Uf(i, a), t._zod.parent === o) for (let e in i) e !== "$ref" && e !== "allOf" && (e in a || delete i[e]);
			if (s.$ref && n.def) for (let e in i) e !== "$ref" && e !== "allOf" && e in n.def && JSON.stringify(i[e]) === JSON.stringify(n.def[e]) && delete i[e];
		}
		let s = t._zod.parent;
		if (s && s !== o) {
			r(s);
			let t = e.seen.get(s);
			if (t?.schema.$ref && (i.$ref = t.schema.$ref, t.def)) for (let e in i) e !== "$ref" && e !== "allOf" && e in t.def && JSON.stringify(i[e]) === JSON.stringify(t.def[e]) && delete i[e];
		}
		e.override({
			zodSchema: t,
			jsonSchema: i,
			path: n.path ?? []
		});
	};
	if (!e.external || e.sharedEmitDoneFor !== e.external) {
		for (let t of [...e.seen.entries()].reverse()) r(t[0]);
		if (e.target !== "openapi-3.0") for (let t of e.seen.entries()) Jf(t[1].def ?? t[1].schema);
		for (let t of e.deferred) t();
		if (e.intersections.length) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.seen.values()) for (let e of [n.schema, n.def]) {
				let n = e?.allOf;
				if (!Array.isArray(n)) continue;
				let r = t.get(n);
				r ? r.push(e) : t.set(n, [e]);
			}
			for (let n of e.intersections) for (let e of t.get(n) ?? []) $f(e);
		}
	}
	let i = {};
	if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		let n = e.external.registry.get(t)?.id;
		if (!n) throw Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	Uf(i, n.defId ? n.schema : n.def ?? n.schema);
	let a = e.metadataRegistry.get(t)?.id;
	a !== void 0 && i.id === a && delete i.id;
	let o = e.external?.defs ?? {};
	if (!e.external || e.sharedEmitDoneFor !== e.external) for (let t of e.seen.entries()) {
		let e = t[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, hl(o, e.defId, e.def));
	}
	e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
	try {
		let n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: rp(t, "input", e.processors),
					output: rp(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function tp(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return tp(r.element, n);
	if (r.type === "set") return tp(r.valueType, n);
	if (r.type === "lazy") return tp(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault" || r.type === "catch") return tp(r.innerType, n);
	if (r.type === "intersection") return tp(r.left, n) || tp(r.right, n);
	if (r.type === "record" || r.type === "map") return tp(r.keyType, n) || tp(r.valueType, n);
	if (r.type === "pipe") return e._zod.traits.has("$ZodCodec") ? !0 : tp(r.in, n) || tp(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (tp(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (tp(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (tp(e, n)) return !0;
		return !!(r.rest && tp(r.rest, n));
	}
	return !1;
}
var np = (e, t = {}) => (n) => {
	let r = Wf({
		...n,
		processors: t
	});
	return K(e, r), qf(r, e), ep(r, e);
}, rp = (e, t, n = {}) => (r) => {
	let { libraryOptions: i, target: a } = r ?? {}, o = Wf({
		...i ?? {},
		target: a,
		io: t,
		processors: n
	});
	return K(e, o), qf(o, e), ep(o, e);
}, ip = (e, t, n) => {
	(e[t] === void 0 || n > e[t]) && (e[t] = n);
}, ap = (e, t, n) => {
	(e[t] === void 0 || n < e[t]) && (e[t] = n);
}, op = (e, t) => {
	ip(e, "minimum", t), ap(e, "maximum", t);
}, sp = (e, t) => {
	e.multipleOf ??= [], e.multipleOf.includes(t) || e.multipleOf.push(t);
}, cp = (e, t) => {
	e.patterns ??= /* @__PURE__ */ new Set(), e.patterns.add(t);
}, lp = (e, t) => {
	e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t];
}, up = (e, t) => {
	e.format = t, t.includes("int") && (e.isInt = !0);
}, dp = (e, t) => ip(e, "minimum", t.minimum), fp = (e, t) => ap(e, "maximum", t.maximum), pp = (e) => (t, n) => {
	up(t, n.format);
	let [r, i] = e[n.format];
	ip(t, "minimum", r), ap(t, "maximum", i);
}, mp = {
	greater_than: (e, t) => ip(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
	less_than: (e, t) => ap(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
	multiple_of: (e, t) => sp(e, t.value),
	number_format: pp(Pl),
	bigint_format: pp(Fl),
	min_length: dp,
	max_length: fp,
	length_equals: (e, t) => op(e, t.length),
	min_size: dp,
	max_size: fp,
	size_equals: (e, t) => op(e, t.size),
	string_format: (e, t) => {
		up(e, t.format), t.pattern && cp(e, t.pattern), (t.format === "base64" || t.format === "base64url") && (e.contentEncoding = t.format), (t.local || t.precision === -1) && (e.laxFormat = !0);
	},
	mime_type: (e, t) => lp(e, t.mime)
};
function hp(e) {
	let t = {}, n = e._zod.def, r = e._zod.traits.has("$ZodCheck") ? [e, ...n.checks ?? []] : n.checks ?? [];
	for (let e of r) mp[e._zod.def.check]?.(t, e._zod.def);
	let i = e._zod.bag;
	i.minimum !== void 0 && ip(t, "minimum", i.minimum), i.exclusiveMinimum !== void 0 && ip(t, "exclusiveMinimum", i.exclusiveMinimum), i.maximum !== void 0 && ap(t, "maximum", i.maximum), i.exclusiveMaximum !== void 0 && ap(t, "exclusiveMaximum", i.exclusiveMaximum), i.multipleOf !== void 0 && sp(t, i.multipleOf), i.format !== void 0 && (t.format ??= i.format, i.format.includes("int") && (t.isInt = !0)), i.mime && lp(t, i.mime);
	for (let e of i.patterns ?? []) cp(t, e);
	return t;
}
var gp = (e, t, n, r) => {
	let i = n, { minimum: a, maximum: o, multipleOf: s, exclusiveMaximum: c, exclusiveMinimum: l, isInt: u } = hp(e);
	i.type = u ? "integer" : "number";
	let d = typeof l == "number" && l >= (a ?? -Infinity), f = typeof c == "number" && c <= (o ?? Infinity), p = t.target === "draft-04" || t.target === "openapi-3.0";
	if (d ? p ? (i.minimum = l, i.exclusiveMinimum = !0) : i.exclusiveMinimum = l : typeof a == "number" && (i.minimum = a), f ? p ? (i.maximum = c, i.exclusiveMaximum = !0) : i.exclusiveMaximum = c : typeof o == "number" && (i.maximum = o), s) {
		let n = /* @__PURE__ */ new Set();
		for (let a of s) Number.isFinite(a) && a !== 0 ? n.add(Math.abs(a)) : Gf(e, t, i, r, `A multipleOf divisor of ${a} cannot be represented in JSON Schema`);
		let [a, ...o] = n;
		a !== void 0 && (i.multipleOf = a), o.length && (i.allOf = [...i.allOf ?? [], ...o.map((e) => ({ multipleOf: e }))]);
	}
}, _p = (e, t, n, r) => {
	n.type = "boolean";
}, vp = (e, t, n, r) => {
	n.not = {};
}, yp = (e, t, n, r) => {
	let i = e._zod.def, a = sl(i.entries);
	a.length === 0 ? n.not = {} : (a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a);
}, bp = (e, t, n, r) => {
	Gf(e, t, n, r, "Custom types cannot be represented in JSON Schema");
}, xp = (e, t, n, r) => {
	Gf(e, t, n, r, "Transforms cannot be represented in JSON Schema");
}, Sp = (e, t, n, r) => {
	let i = n, a = e._zod.def, { minimum: o, maximum: s } = hp(e);
	typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = K(a.element, t, {
		...r,
		path: [...r.path, "items"]
	});
};
function Cp(e) {
	let t = e._zod.def;
	return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform") ? Cp(t.out) : t.type === "catch" ? Cp(t.innerType) : e._zod.optin;
}
var wp = (e, t, n, r) => {
	let i = n, a = e._zod.def, o = a.shape;
	if (Object.getOwnPropertySymbols(o).length && Gf(e, t, i, r, "Symbol keys cannot be represented in JSON Schema")) return;
	i.type = "object", i.properties = {};
	for (let e in o) hl(i.properties, e, K(o[e], t, {
		...r,
		path: [
			...r.path,
			"properties",
			e
		]
	}));
	let s = [];
	for (let e of Object.keys(o)) {
		let n = a.shape[e];
		(t.io === "input" ? Cp(n) === void 0 : n._zod.optout === void 0) && s.push(e);
	}
	s.length > 0 && (i.required = s), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = K(a.catchall, t, {
		...r,
		path: [...r.path, "additionalProperties"]
	})) : t.io === "output" && (i.additionalProperties = !1);
}, Tp = (e, t, n, r) => {
	let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => K(e, t, {
		...r,
		path: [
			...r.path,
			a ? "oneOf" : "anyOf",
			n
		]
	}));
	a ? n.oneOf = o : n.anyOf = o;
}, Ep = (e, t, n, r) => {
	let i = e._zod.def, a = K(i.left, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			0
		]
	}), o = K(i.right, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			1
		]
	}), s = (e) => "allOf" in e && Object.keys(e).length === 1, c = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
	n.allOf = c, t.intersections.push(c);
}, Dp = (e, t, n, r) => {
	let i = e._zod.def, a = K(i.innerType, t, r), o = t.seen.get(e);
	t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
}, Op = (e, t, n, r) => {
	let i = e._zod.def;
	K(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, kp = Symbol();
function Ap(e, t, n, r, i) {
	let a = !1, o = JSON.stringify(e, (e, t) => typeof t == "bigint" ? (a = !0, null) : t);
	return a ? (Gf(t, n, r, i, "BigInt defaults cannot be represented in JSON Schema"), kp) : JSON.parse(o);
}
var jp = (e, t, n, r) => {
	let i = e._zod.def;
	K(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o = Ap(i.defaultValue, e, t, n, r);
	o !== kp && (n.default = o);
}, Mp = (e, t, n, r) => {
	let i = e._zod.def;
	K(i.innerType, t, r);
	let a = t.seen.get(e);
	if (a.ref = i.innerType, t.io !== "input") return;
	let o = Ap(i.defaultValue, e, t, n, r);
	o !== kp && (n._prefault = o);
}, Np = (e, t, n, r) => {
	let i = e._zod.def;
	K(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o;
	try {
		o = i.catchValue(void 0);
	} catch {
		Gf(e, t, n, r, "Dynamic catch values are not supported in JSON Schema");
		return;
	}
	n.default = o;
}, Pp = (e, t, n, r) => {
	let i = e._zod.def, a = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? a ? i.out : i.in : i.out;
	K(o, t, r);
	let s = t.seen.get(e);
	s.ref = o;
}, Fp = (e, t, n, r) => {
	let i = e._zod.def;
	K(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.readOnly = !0;
}, Ip = (e, t, n, r) => {
	let i = e._zod.def;
	K(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, Lp = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function Rp(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		get() {
			let e = n(this);
			return Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			}), e;
		},
		set(e) {
			Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			});
		}
	});
}
var zp = /*@__PURE__*/ W("ZodError", (e, t) => {
	Ou.init(e, t), e.name = "ZodError";
	let n = Object.getPrototypeOf(e);
	Lp.has(n) || (Lp.add(n), Rp(n, "format", (e) => (t) => ju(e, t)), Rp(n, "flatten", (e) => (t) => Au(e, t)), Rp(n, "addIssue", (e) => (t) => {
		e.issues.push(t), e.message = JSON.stringify(e.issues, ll, 2);
	}), Rp(n, "addIssues", (e) => (t) => {
		e.issues.push(...t), e.message = JSON.stringify(e.issues, ll, 2);
	}), Object.defineProperty(n, "isEmpty", {
		configurable: !0,
		enumerable: !1,
		get() {
			return this.issues.length === 0;
		}
	}));
}, void 0, { Parent: Error }), Bp = /* @__PURE__ */ Nu(zp), Vp = /* @__PURE__ */ Pu(zp), Hp = /* @__PURE__ */ Fu(zp), Up = /* @__PURE__ */ Lu(zp), Wp = /* @__PURE__ */ Uu(zp), Gp = /* @__PURE__ */ Wu(zp), Kp = /* @__PURE__ */ Gu(zp), qp = /* @__PURE__ */ Ku(zp), Jp = /* @__PURE__ */ qu(zp), Yp = /* @__PURE__ */ Ju(zp), Xp = /* @__PURE__ */ Yu(zp), Zp = /* @__PURE__ */ Xu(zp);
// node_modules/zod/v4/classic/schemas.js
function Qp() {
	xu.localeError || Su(yf());
}
function $p() {
	xu.memoizer || Su({ memoizer: gf() });
}
var q = /*@__PURE__*/ W("ZodType", (e, t) => (Qp(), G.init(e, t), e.def = t, e.type = t.type, e), {
	check(...e) {
		let t = this.def;
		return this.clone(Sl(t, { checks: [...t.checks ?? [], ...e.map((e) => typeof e == "function" ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)] }), { parent: !0 });
	},
	with(...e) {
		return this.check(...e);
	},
	clone(e, t) {
		return jl(this, e, t);
	},
	brand() {
		return this;
	},
	register(e, t) {
		return e.add(this, t), this;
	},
	refine(e, t) {
		return this.check(Vm(e, t));
	},
	superRefine(e, t) {
		return this.check(Hm(e, t));
	},
	overwrite(e) {
		return this.check(/* @__PURE__ */ Rf(e));
	},
	optional() {
		return Cm(this);
	},
	exactOptional() {
		return Tm(this);
	},
	nullable() {
		return Dm(this);
	},
	nullish() {
		return Cm(Dm(this));
	},
	nonoptional(e) {
		return Nm(this, e);
	},
	array() {
		return dm(this);
	},
	or(e) {
		return hm([this, e]);
	},
	and(e) {
		return _m(this, e);
	},
	transform(e) {
		return Lm(this, xm(e));
	},
	default(e) {
		return km(this, e);
	},
	prefault(e) {
		return jm(this, e);
	},
	catch(e) {
		return Fm(this, e);
	},
	pipe(e) {
		return Lm(this, e);
	},
	readonly() {
		return zm(this);
	},
	describe(e) {
		let t = this.clone();
		return Cf.add(t, { description: e }), t;
	},
	meta(...e) {
		if (e.length === 0) return Cf.get(this);
		let t = this.clone();
		return Cf.add(t, e[0]), t;
	},
	isOptional() {
		return this.safeParse(void 0).success;
	},
	isNullable() {
		return this.safeParse(null).success;
	},
	apply(e, ...t) {
		return t.length === 0 ? e(this) : e(this, ...t);
	},
	get "~standard"() {
		return au(this, "~standard", {
			...md(this),
			jsonSchema: {
				input: rp(this, "input"),
				output: rp(this, "output")
			}
		});
	},
	set "~standard"(e) {
		iu(this, "~standard", e);
	},
	parse: function e(t, n) {
		return Bp(this, t, n, { callee: e });
	},
	parseAsync: async function e(t, n) {
		return await Vp(this, t, n, { callee: e });
	},
	safeParse(e, t) {
		return Hp(this, e, t);
	},
	async safeParseAsync(e, t) {
		return Up(this, e, t);
	},
	get spa() {
		return this?.safeParseAsync;
	},
	set spa(e) {
		iu(this, "spa", e);
	},
	validate(e, t) {
		return Bu(this, e, t);
	},
	validateAsync(e, t) {
		return Hu(this, e, t);
	},
	encode: function e(t, n) {
		return Wp(this, t, n, { callee: e });
	},
	decode: function e(t, n) {
		return Gp(this, t, n, { callee: e });
	},
	encodeAsync: async function e(t, n) {
		return await Kp(this, t, n, { callee: e });
	},
	decodeAsync: async function e(t, n) {
		return await qp(this, t, n, { callee: e });
	},
	safeEncode(e, t) {
		return Jp(this, e, t);
	},
	safeDecode(e, t) {
		return Yp(this, e, t);
	},
	async safeEncodeAsync(e, t) {
		return Xp(this, e, t);
	},
	async safeDecodeAsync(e, t) {
		return Zp(this, e, t);
	},
	toJSONSchema(e) {
		return np(this, {})(e);
	},
	get description() {
		return Cf.get(this)?.description;
	},
	get _def() {
		return this._zod.def;
	}
}), em = /*@__PURE__*/ W("ZodNumber", (e, t) => {
	hd.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => gp(e, t, n, r), e.isFinite = !0;
}, /*@__PURE__*/ ou({
	minValue: (e) => {
		let { minimum: t, exclusiveMinimum: n } = hp(e);
		return Math.max(t ?? -Infinity, n ?? -Infinity);
	},
	maxValue: (e) => {
		let { maximum: t, exclusiveMaximum: n } = hp(e);
		return Math.min(t ?? Infinity, n ?? Infinity);
	},
	isInt: (e) => {
		let { isInt: t, multipleOf: n } = hp(e);
		return !!t || !!n?.some(Number.isSafeInteger);
	},
	format: (e) => hp(e).format ?? null
}, {
	gt(e, t) {
		return this.check(/* @__PURE__ */ Mf(e, t));
	},
	gte(e, t) {
		return this.check(/* @__PURE__ */ Nf(e, t));
	},
	min(e, t) {
		return this.check(/* @__PURE__ */ Nf(e, t));
	},
	lt(e, t) {
		return this.check(/* @__PURE__ */ Af(e, t));
	},
	lte(e, t) {
		return this.check(/* @__PURE__ */ jf(e, t));
	},
	max(e, t) {
		return this.check(/* @__PURE__ */ jf(e, t));
	},
	int(e) {
		return this.check(rm(e));
	},
	safe(e) {
		return this.check(rm(e));
	},
	positive(e) {
		return this.check(/* @__PURE__ */ Mf(0, e));
	},
	nonnegative(e) {
		return this.check(/* @__PURE__ */ Nf(0, e));
	},
	negative(e) {
		return this.check(/* @__PURE__ */ Af(0, e));
	},
	nonpositive(e) {
		return this.check(/* @__PURE__ */ jf(0, e));
	},
	multipleOf(e, t) {
		return this.check(/* @__PURE__ */ Pf(e, t));
	},
	step(e, t) {
		return this.check(/* @__PURE__ */ Pf(e, t));
	},
	finite() {
		return this;
	}
}));
function tm(e) {
	return /* @__PURE__ */ Tf(em, e);
}
var nm = /*@__PURE__*/ W("ZodNumberFormat", (e, t) => {
	gd.init(e, t), em.init(e, t);
});
function rm(e) {
	return /* @__PURE__ */ Ef(nm, e);
}
var im = /*@__PURE__*/ W("ZodBoolean", (e, t) => {
	_d.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => _p(e, t, n, r);
});
function am(e) {
	return /* @__PURE__ */ Df(im, e);
}
var om = /*@__PURE__*/ W("ZodUnknown", (e, t) => {
	vd.init(e, t), q.init(e, t), e._zod.processJSONSchema = (e, t, n) => void 0;
});
function sm() {
	return /* @__PURE__ */ Of(om);
}
var cm = /*@__PURE__*/ W("ZodNever", (e, t) => {
	yd.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => vp(e, t, n, r);
});
function lm(e) {
	return /* @__PURE__ */ kf(cm, e);
}
var um = /*@__PURE__*/ W("ZodArray", (e, t) => {
	$p(), Cd.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Sp(e, t, n, r), e.element = t.element;
}, {
	min(e, t) {
		return this.check(/* @__PURE__ */ If(e, t));
	},
	nonempty(e) {
		return this.check(/* @__PURE__ */ If(1, e));
	},
	max(e, t) {
		return this.check(/* @__PURE__ */ Ff(e, t));
	},
	length(e, t) {
		return this.check(/* @__PURE__ */ Lf(e, t));
	},
	unwrap() {
		return this.element;
	}
});
function dm(e, t) {
	return /* @__PURE__ */ zf(um, e, t);
}
var fm = /*@__PURE__*/ W("ZodObject", (e, t) => {
	$p(), kd.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => wp(e, t, n, r), fu(e, "shape", (e) => e._zod.def.shape, !1);
}, {
	keyof() {
		return ym(Object.keys(this._zod.def.shape));
	},
	catchall(e) {
		return this.clone(Sl(this._zod.def, { catchall: e }));
	},
	passthrough() {
		return this.clone(Sl(this._zod.def, { catchall: sm() }));
	},
	loose() {
		return this.clone(Sl(this._zod.def, { catchall: sm() }));
	},
	strict() {
		return this.clone(Sl(this._zod.def, { catchall: lm() }));
	},
	strip() {
		return this.clone(Sl(this._zod.def, { catchall: void 0 }));
	},
	extend(e) {
		return zl(this, e);
	},
	safeExtend(e) {
		return Vl(this, e);
	},
	merge(e) {
		return Hl(this, e);
	},
	pick(e) {
		return Il(this, e);
	},
	omit(e) {
		return Rl(this, e);
	},
	partial(...e) {
		return Ul(Sm, this, e[0]);
	},
	exactPartial(...e) {
		return Ul(wm, this, e[0], "exactPartial");
	},
	required(...e) {
		return Wl(Mm, this, e[0]);
	}
});
function pm(e, t) {
	return new fm({
		type: "object",
		shape: e ?? {},
		...H(t)
	});
}
var mm = /*@__PURE__*/ W("ZodUnion", (e, t) => {
	jd.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Tp(e, t, n, r), e.options = t.options;
});
function hm(e, t) {
	return new mm({
		type: "union",
		options: e,
		...H(t)
	});
}
var gm = /*@__PURE__*/ W("ZodIntersection", (e, t) => {
	Md.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ep(e, t, n, r);
});
function _m(e, t) {
	return new gm({
		type: "intersection",
		left: e,
		right: t
	});
}
var vm = /*@__PURE__*/ W("ZodEnum", (e, t) => {
	Fd.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => yp(e, t, n, r), e.enum = t.entries, e.options = [...e._zod.values];
	let n = new Set(Object.keys(t.entries));
	e.extract = (e, r) => {
		let i = {};
		for (let r of e) if (n.has(r)) i[r] = t.entries[r];
		else throw Error(`Key ${r} not found in enum`);
		return new vm({
			...t,
			checks: [],
			...H(r),
			entries: i
		});
	}, e.exclude = (e, r) => {
		let i = { ...t.entries };
		for (let t of e) if (n.has(t)) delete i[t];
		else throw Error(`Key ${t} not found in enum`);
		return new vm({
			...t,
			checks: [],
			...H(r),
			entries: i
		});
	};
});
function ym(e, t) {
	return new vm({
		type: "enum",
		entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
		...H(t)
	});
}
var bm = /*@__PURE__*/ W("ZodTransform", (e, t) => {
	$p(), Id.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => xp(e, t, n, r), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new bu(e.constructor.name);
		n.addIssue = (r) => {
			if (typeof r == "string") n.issues.push(nu(r, n.value, t));
			else {
				let t = r;
				t.fatal && (t.continue = !1), t.code ??= "custom", "input" in t || (t.input = n.value), t.inst ??= e, n.issues.push(nu(t));
			}
		};
		let i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
	};
});
function xm(e) {
	return new bm({
		type: "transform",
		transform: e
	});
}
var Sm = /*@__PURE__*/ W("ZodOptional", (e, t) => {
	Rd.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ip(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Cm(e) {
	return new Sm({
		type: "optional",
		innerType: e
	});
}
var wm = /*@__PURE__*/ W("ZodExactOptional", (e, t) => {
	zd.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ip(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Tm(e) {
	return new wm({
		type: "optional",
		innerType: e
	});
}
var Em = /*@__PURE__*/ W("ZodNullable", (e, t) => {
	Bd.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Dp(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Dm(e) {
	return new Em({
		type: "nullable",
		innerType: e
	});
}
var Om = /*@__PURE__*/ W("ZodDefault", (e, t) => {
	Vd.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => jp(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function km(e, t) {
	return new Om({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : Ol(t);
		}
	});
}
var Am = /*@__PURE__*/ W("ZodPrefault", (e, t) => {
	Ud.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Mp(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function jm(e, t) {
	return new Am({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : Ol(t);
		}
	});
}
var Mm = /*@__PURE__*/ W("ZodNonOptional", (e, t) => {
	Wd.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Op(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Nm(e, t) {
	return new Mm({
		type: "nonoptional",
		innerType: e,
		...H(t)
	});
}
var Pm = /*@__PURE__*/ W("ZodCatch", (e, t) => {
	qd.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Np(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Fm(e, t) {
	return new Pm({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : mu(t)
	});
}
var Im = /*@__PURE__*/ W("ZodPipe", (e, t) => {
	Jd.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Pp(e, t, n, r), e.in = t.in, e.out = t.out;
});
function Lm(e, t) {
	return new Im({
		type: "pipe",
		in: e,
		out: t
	});
}
var Rm = /*@__PURE__*/ W("ZodReadonly", (e, t) => {
	Xd.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Fp(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function zm(e) {
	return new Rm({
		type: "readonly",
		innerType: e
	});
}
var Bm = /*@__PURE__*/ W("ZodCustom", (e, t) => {
	Qd.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => bp(e, t, n, r);
});
function Vm(e, t = {}) {
	return /* @__PURE__ */ Bf(Bm, e, t);
}
function Hm(e, t) {
	return /* @__PURE__ */ Vf(e, t);
}
// src/store.ts
var Um = "现代化界面", Wm = "modern_ui", Gm = 340, Km = pm({
	enabled: am().default(!0).catch(!0),
	desktopTwoColumn: am().default(!0).catch(!0),
	desktopDockedDrawer: am().default(!1).catch(!1),
	leftSidebarWidth: tm().min(320).max(460).default(360).catch(360),
	overlayPanelWidth: tm().min(720).default(960).catch(960),
	mainChatMaxWidth: tm().min(0).default(960).catch(960),
	floatingChatInput: am().default(!0).catch(!0),
	singleLineChatInput: am().default(!1).catch(!1),
	inputBottomGap: tm().min(0).max(120).default(15).catch(15),
	inputSideGap: tm().min(0).max(80).default(16).catch(16),
	quickReplyCollapsed: am().default(!1).catch(!1),
	reduceMotion: am().default(!1).catch(!1),
	reduceAdvancedEffects: am().default(!1).catch(!1),
	modernWorldInfoEditor: am().default(!0).catch(!0),
	modernWorldSelect: am().default(!0).catch(!0),
	modernCharacterManagement: am().default(!0).catch(!0),
	modernPersonaManagement: am().default(!0).catch(!0),
	modernPresetEditor: am().default(!1).catch(!1),
	modernExtensionSettings: am().default(!0).catch(!0)
}).default({});
function qm() {
	return typeof window < "u" ? window : globalThis;
}
function Jm() {
	return qm().SillyTavern?.getContext?.() || {};
}
function Ym() {
	let e = qm(), t = Jm();
	return !e.extension_settings && t.extensionSettings && (e.extension_settings = t.extensionSettings), e.extension_settings = e.extension_settings || {}, e.extension_settings;
}
function Xm() {
	let t = Ym()[Wm];
	t = !t || typeof t != "object" ? {} : e(t), t.desktopTwoColumn === void 0 && typeof t.desktopThreeColumn == "boolean" && (t.desktopTwoColumn = t.desktopThreeColumn), t.overlayPanelWidth === void 0 && t.leftSidebarWidth === Gm && (t.leftSidebarWidth = 360);
	let n = Km.safeParse(t);
	return n.success ? n.data : (console.warn(`[${Um}] 设置读取失败，已使用默认设置。`, n.error), Km.parse({}));
}
function Zm(t) {
	let n = Ym(), r = n[Wm];
	n[Wm] = {
		...typeof r == "object" && r ? r : {},
		...e(t)
	};
	let i = qm(), a = Jm();
	typeof i.saveSettingsDebounced == "function" ? i.saveSettingsDebounced() : typeof a.saveSettingsDebounced == "function" && a.saveSettingsDebounced();
}
var Qm = Cs(Um, () => {
	let t = qm(), n = /* @__PURE__ */ tn(Xm()), r = t.eventSource ?? t.SillyTavern?.getContext?.()?.eventSource, i = () => {
		n.value = Xm();
	};
	r?.on?.("settings_loaded", i);
	let a = Ia(() => n.value.enabled), o = Ia(() => a.value && n.value.desktopTwoColumn);
	Yn(() => {
		Zm(Km.parse(e(n.value)));
	});
	function s() {
		n.value = Km.parse({});
	}
	function c() {
		n.value = {
			...n.value,
			enabled: !1
		};
	}
	function l() {
		typeof r?.removeListener == "function" ? r.removeListener("settings_loaded", i) : typeof r?.off == "function" && r.off("settings_loaded", i);
	}
	return {
		settings: n,
		is_active: a,
		should_use_two_column: o,
		resetSettings: s,
		disableModernLayout: c,
		destroy: l
	};
}), $m = { class: "inline-drawer" }, eh = { class: "inline-drawer-toggle inline-drawer-header" }, th = { class: "inline-drawer-content" }, nh = {
	class: "checkbox_label",
	for: "th_modern_enabled"
}, rh = {
	class: "checkbox_label",
	for: "th_modern_two_column"
}, ih = ["disabled"], ah = { class: "flex-container justifySpaceBetween alignitemscenter m-t-0_5" }, oh = { class: "flex-container alignitemscenter" }, sh = ["value"], ch = { class: "flex-container justifySpaceBetween alignitemscenter m-t-0_5" }, lh = { class: "flex-container alignitemscenter" }, uh = ["value"], dh = { class: "flex-container justifySpaceBetween alignitemscenter m-t-0_5" }, fh = { class: "flex-container alignitemscenter" }, ph = ["value"], mh = {
	class: "checkbox_label",
	for: "th_modern_floating_input"
}, hh = {
	class: "checkbox_label m-t-0_5",
	for: "th_modern_single_line_input"
}, gh = { class: "flex-container justifySpaceBetween alignitemscenter m-t-0_5" }, _h = { class: "flex-container alignitemscenter" }, vh = { class: "notes m-r-0_5" }, yh = { class: "flex-container alignitemscenter m-t-0_5" }, bh = { class: "range-block-range flex1" }, xh = [
	"min",
	"max",
	"disabled"
], Sh = { class: "range-block-counter m-l-0_5" }, Ch = [
	"value",
	"min",
	"max",
	"disabled"
], wh = { class: "notes" }, Th = { class: "flex-container justifySpaceBetween alignitemscenter m-t-0_5" }, Eh = { class: "flex-container alignitemscenter" }, Dh = { class: "notes m-r-0_5" }, Oh = { class: "flex-container alignitemscenter m-t-0_5" }, kh = { class: "range-block-range flex1" }, Ah = [
	"min",
	"max",
	"disabled"
], jh = { class: "range-block-counter m-l-0_5" }, Mh = [
	"value",
	"min",
	"max",
	"disabled"
], Nh = { class: "notes" }, Ph = {
	class: "checkbox_label",
	for: "th_modern_wi_editor"
}, Fh = ["disabled"], Ih = {
	class: "checkbox_label",
	for: "th_modern_cm"
}, Lh = {
	class: "checkbox_label",
	for: "th_modern_persona"
}, Rh = {
	class: "checkbox_label",
	for: "th_modern_preset_editor"
}, zh = {
	class: "checkbox_label",
	for: "th_modern_ext_settings"
}, Bh = {
	class: "checkbox_label",
	for: "th_modern_reduce_motion"
}, Vh = {
	class: "checkbox_label",
	for: "th_modern_reduce_effects"
}, Hh = /*#__PURE__*/ ((e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
})(/* @__PURE__ */ sr({
	__name: "Panel",
	setup(e) {
		let t = Qm();
		function n(e, n, r, i = Infinity) {
			let a = e.currentTarget, o = t.settings[n], s = a.valueAsNumber;
			if (!Number.isFinite(s)) {
				a.value = String(o);
				return;
			}
			let c = Math.min(i, Math.max(r, s));
			t.settings[n] = c, a.value = String(c);
		}
		async function r() {
			let e = window.SillyTavern?.POPUP_TYPE?.CONFIRM ?? "confirm", n = await window.SillyTavern?.callGenericPopup?.("确定将现代化界面设置重置为默认值吗？", e);
			(n === !0 || n === window.SillyTavern?.POPUP_RESULT?.AFFIRMATIVE) && (t.resetSettings(), window.toastr !== void 0 && window.toastr.info("已恢复现代化界面默认设置。", Um));
		}
		return (e, i) => (Zi(), na("div", $m, [L("div", eh, [L("b", null, [L("span", null, Oe(N(Um)), 1), L("a", {
			class: "notes-link",
			title: "恢复默认设置",
			onClick: Lo(r, ["stop"])
		}, [...i[25] ||= [L("i", { class: "fa-solid fa-rotate-left" }, null, -1)]])]), i[26] ||= L("div", { class: "inline-drawer-icon fa-solid fa-circle-chevron-down down" }, null, -1)]), L("div", th, [
			L("label", nh, [F(L("input", {
				id: "th_modern_enabled",
				"onUpdate:modelValue": i[0] ||= (e) => N(t).settings.enabled = e,
				type: "checkbox"
			}, null, 512), [[jo, N(t).settings.enabled]]), i[27] ||= L("span", null, "启用现代化界面", -1)]),
			i[49] ||= L("small", { class: "notes" }, "全面应用毛玻璃、常驻侧边栏与现代布局排版", -1),
			i[50] ||= L("hr", null, null, -1),
			i[51] ||= L("h4", null, "分栏与排版", -1),
			L("label", rh, [F(L("input", {
				id: "th_modern_two_column",
				"onUpdate:modelValue": i[1] ||= (e) => N(t).settings.desktopTwoColumn = e,
				type: "checkbox"
			}, null, 512), [[jo, N(t).settings.desktopTwoColumn]]), i[28] ||= L("span", null, "宽屏两栏与滑出面板", -1)]),
			i[52] ||= L("small", { class: "notes" }, "屏幕 ≥900px 时将左侧抽屉转为常驻侧边栏", -1),
			L("label", {
				class: ve(["checkbox_label", { "is-disabled": !N(t).settings.desktopTwoColumn }]),
				for: "th_modern_docked_drawer"
			}, [F(L("input", {
				id: "th_modern_docked_drawer",
				"onUpdate:modelValue": i[2] ||= (e) => N(t).settings.desktopDockedDrawer = e,
				type: "checkbox",
				disabled: !N(t).settings.desktopTwoColumn
			}, null, 8, ih), [[jo, N(t).settings.desktopDockedDrawer]]), i[29] ||= L("span", null, "固定三栏排版", -1)], 2),
			i[53] ||= L("small", { class: "notes" }, "空间足够时固定右侧设置抽屉；窄屏自动降级为滑出面板", -1),
			L("div", ah, [i[31] ||= L("span", null, "左侧栏宽度", -1), L("div", oh, [L("input", {
				value: N(t).settings.leftSidebarWidth,
				class: "text_pole width100px text-right",
				type: "number",
				min: "320",
				max: "460",
				step: "4",
				onChange: i[3] ||= (e) => n(e, "leftSidebarWidth", 320, 460),
				onBlur: i[4] ||= (e) => n(e, "leftSidebarWidth", 320, 460)
			}, null, 40, sh), i[30] ||= L("span", { class: "m-l-0_5" }, "px", -1)])]),
			L("div", ch, [i[33] ||= L("span", null, "滑出面板偏好宽度", -1), L("div", lh, [L("input", {
				value: N(t).settings.overlayPanelWidth,
				class: "text_pole width100px text-right",
				type: "number",
				min: "720",
				max: "2000",
				step: "20",
				onChange: i[5] ||= (e) => n(e, "overlayPanelWidth", 720, 2e3),
				onBlur: i[6] ||= (e) => n(e, "overlayPanelWidth", 720, 2e3)
			}, null, 40, uh), i[32] ||= L("span", { class: "m-l-0_5" }, "px", -1)])]),
			L("div", dh, [i[35] ||= L("span", null, "主聊天最小宽度", -1), L("div", fh, [L("input", {
				value: N(t).settings.mainChatMaxWidth,
				class: "text_pole width100px text-right",
				type: "number",
				min: "0",
				max: "4000",
				step: "20",
				onChange: i[7] ||= (e) => n(e, "mainChatMaxWidth", 0, 4e3),
				onBlur: i[8] ||= (e) => n(e, "mainChatMaxWidth", 0, 4e3)
			}, null, 40, ph), i[34] ||= L("span", { class: "m-l-0_5" }, "px", -1)])]),
			i[54] ||= L("small", { class: "notes" }, "0 表示跟随酒馆宽度比例始终铺满可用空间。", -1),
			i[55] ||= L("hr", null, null, -1),
			i[56] ||= L("h4", null, "输入框设置", -1),
			L("label", mh, [F(L("input", {
				id: "th_modern_floating_input",
				"onUpdate:modelValue": i[9] ||= (e) => N(t).settings.floatingChatInput = e,
				type: "checkbox"
			}, null, 512), [[jo, N(t).settings.floatingChatInput]]), i[36] ||= L("span", null, "悬浮输入框", -1)]),
			i[57] ||= L("small", { class: "notes" }, "开启时输入框以毛玻璃胶囊形态悬浮于聊天区上方；关闭时与原版 SillyTavern 一样固定置底铺满。", -1),
			L("label", hh, [F(L("input", {
				id: "th_modern_single_line_input",
				"onUpdate:modelValue": i[10] ||= (e) => N(t).settings.singleLineChatInput = e,
				type: "checkbox"
			}, null, 512), [[jo, N(t).settings.singleLineChatInput]]), i[37] ||= L("span", null, "单行输入框", -1)]),
			i[58] ||= L("small", { class: "notes" }, "开启后输入框采用紧凑单行排版（发送与操作按钮置于输入框两侧）；关闭时保持双行排版（上方输入文本、下方操作按钮）。", -1),
			L("div", { class: ve({ "is-disabled": !N(t).settings.floatingChatInput }) }, [
				L("div", gh, [i[38] ||= L("span", null, "底部留白边距", -1), L("div", _h, [L("span", vh, Oe(N(t).settings.inputBottomGap) + " px", 1)])]),
				L("div", yh, [L("div", bh, [F(L("input", {
					"onUpdate:modelValue": i[11] ||= (e) => N(t).settings.inputBottomGap = e,
					type: "range",
					class: "range_slider",
					min: N(0),
					max: N(120),
					step: "1",
					disabled: !N(t).settings.floatingChatInput
				}, null, 8, xh), [[
					Ao,
					N(t).settings.inputBottomGap,
					void 0,
					{ number: !0 }
				]])]), L("div", Sh, [L("input", {
					value: N(t).settings.inputBottomGap,
					class: "text_pole width60px text-center",
					type: "number",
					min: N(0),
					max: N(120),
					step: "1",
					disabled: !N(t).settings.floatingChatInput,
					onChange: i[12] ||= (e) => n(e, "inputBottomGap", N(0), N(120)),
					onBlur: i[13] ||= (e) => n(e, "inputBottomGap", N(0), N(120))
				}, null, 40, Ch)])]),
				L("small", wh, "调整悬浮输入框与窗口底边的间距（" + Oe(N(t).settings.inputBottomGap) + " px）。", 1),
				L("div", Th, [i[39] ||= L("span", null, "两侧留白边距", -1), L("div", Eh, [L("span", Dh, Oe(N(t).settings.inputSideGap) + " px", 1)])]),
				L("div", Oh, [L("div", kh, [F(L("input", {
					"onUpdate:modelValue": i[14] ||= (e) => N(t).settings.inputSideGap = e,
					type: "range",
					class: "range_slider",
					min: N(0),
					max: N(80),
					step: "1",
					disabled: !N(t).settings.floatingChatInput
				}, null, 8, Ah), [[
					Ao,
					N(t).settings.inputSideGap,
					void 0,
					{ number: !0 }
				]])]), L("div", jh, [L("input", {
					value: N(t).settings.inputSideGap,
					class: "text_pole width60px text-center",
					type: "number",
					min: N(0),
					max: N(80),
					step: "1",
					disabled: !N(t).settings.floatingChatInput,
					onChange: i[15] ||= (e) => n(e, "inputSideGap", N(0), N(80)),
					onBlur: i[16] ||= (e) => n(e, "inputSideGap", N(0), N(80))
				}, null, 40, Mh)])]),
				L("small", Nh, "调整悬浮输入框左右两侧的留白边距（" + Oe(N(t).settings.inputSideGap) + " px）。", 1)
			], 2),
			i[59] ||= L("hr", null, null, -1),
			i[60] ||= L("h4", null, "增强子模块", -1),
			L("label", Ph, [F(L("input", {
				id: "th_modern_wi_editor",
				"onUpdate:modelValue": i[17] ||= (e) => N(t).settings.modernWorldInfoEditor = e,
				type: "checkbox"
			}, null, 512), [[jo, N(t).settings.modernWorldInfoEditor]]), i[40] ||= L("span", null, "现代世界书管理", -1)]),
			i[61] ||= L("small", { class: "notes" }, "优化世界书条目卡片瀑布流与条目编辑网格", -1),
			L("label", {
				class: ve(["checkbox_label", { "is-disabled": !N(t).settings.modernWorldInfoEditor }]),
				for: "th_modern_wi_select"
			}, [F(L("input", {
				id: "th_modern_wi_select",
				"onUpdate:modelValue": i[18] ||= (e) => N(t).settings.modernWorldSelect = e,
				type: "checkbox",
				disabled: !N(t).settings.modernWorldInfoEditor
			}, null, 8, Fh), [[jo, N(t).settings.modernWorldSelect]]), i[41] ||= L("span", null, "现代世界书选择器", -1)], 2),
			i[62] ||= L("small", { class: "notes" }, "多端卡片式世界书下拉选择面板与收藏置顶", -1),
			L("label", Ih, [F(L("input", {
				id: "th_modern_cm",
				"onUpdate:modelValue": i[19] ||= (e) => N(t).settings.modernCharacterManagement = e,
				type: "checkbox"
			}, null, 512), [[jo, N(t).settings.modernCharacterManagement]]), i[42] ||= L("span", null, "现代角色管理界面", -1)]),
			i[63] ||= L("small", { class: "notes" }, "美化角色卡片列表、头部操作栏与角色编辑抽屉", -1),
			L("label", Lh, [F(L("input", {
				id: "th_modern_persona",
				"onUpdate:modelValue": i[20] ||= (e) => N(t).settings.modernPersonaManagement = e,
				type: "checkbox"
			}, null, 512), [[jo, N(t).settings.modernPersonaManagement]]), i[43] ||= L("span", null, "现代用户设定界面", -1)]),
			i[64] ||= L("small", { class: "notes" }, "优化人设卡片、选中状态、操作按钮与描述表单", -1),
			L("label", Rh, [F(L("input", {
				id: "th_modern_preset_editor",
				"onUpdate:modelValue": i[21] ||= (e) => N(t).settings.modernPresetEditor = e,
				type: "checkbox"
			}, null, 512), [[jo, N(t).settings.modernPresetEditor]]), i[44] ||= L("span", null, [da("现代化预设编辑器 "), L("small", { style: {
				color: "#e5a04b",
				"font-weight": "bold",
				"margin-left": "4px"
			} }, "(实验性)")], -1)]),
			i[65] ||= L("small", { class: "notes" }, "优化预设提示词顺序列表、支持多选拖拽、分组折叠与单选互斥（大型预设调优中，默认关闭）", -1),
			L("label", zh, [F(L("input", {
				id: "th_modern_ext_settings",
				"onUpdate:modelValue": i[22] ||= (e) => N(t).settings.modernExtensionSettings = e,
				type: "checkbox"
			}, null, 512), [[jo, N(t).settings.modernExtensionSettings]]), i[45] ||= L("span", null, "现代扩展设置抽屉", -1)]),
			i[66] ||= L("small", { class: "notes" }, "将酒馆扩展设置抽屉重排为侧边栏导航与卡片分栏体验，深度兼容菜单精简器等扩展", -1),
			i[67] ||= L("hr", null, null, -1),
			i[68] ||= L("h4", null, "视觉与性能", -1),
			L("label", Bh, [F(L("input", {
				id: "th_modern_reduce_motion",
				"onUpdate:modelValue": i[23] ||= (e) => N(t).settings.reduceMotion = e,
				type: "checkbox"
			}, null, 512), [[jo, N(t).settings.reduceMotion]]), i[46] ||= L("span", null, "减弱动态效果", -1)]),
			i[69] ||= L("small", { class: "notes" }, "最小化过渡与缩放动画，降低能耗并提升响应", -1),
			L("label", Vh, [F(L("input", {
				id: "th_modern_reduce_effects",
				"onUpdate:modelValue": i[24] ||= (e) => N(t).settings.reduceAdvancedEffects = e,
				type: "checkbox"
			}, null, 512), [[jo, N(t).settings.reduceAdvancedEffects]]), i[47] ||= L("span", null, "精简高级特效", -1)]),
			i[70] ||= L("small", { class: "notes" }, "关闭深度阴影与高强度发光滤镜", -1),
			i[71] ||= L("hr", null, null, -1),
			L("div", { class: "flex-container justifyEnd m-t-1" }, [L("div", {
				class: "menu_button menu_button_icon reset-button",
				title: "重置现代化界面设置",
				onClick: r
			}, [...i[48] ||= [L("i", { class: "fa-solid fa-rotate-left" }, null, -1), L("span", null, "恢复默认设置", -1)]])])
		])]));
	}
}), [["__scopeId", "data-v-b8b4c929"]]), Uh = "th-modern-panel-root";
function Wh(e) {
	$(`.${Uh}`).remove();
	let t = !1, n, r = document.getElementById("modern-ui-reborn_container"), i = !1, a = () => {
		if (t || n) return;
		let a = document.getElementById("extensions_settings");
		a && (n = Vo(Hh).use(e), r ? (r.classList.add(Uh), $(r).empty()) : (r = $("<div>").attr("id", "modern-ui-reborn_container").addClass(Uh).appendTo(a)[0], i = !0), n.mount(r));
	};
	a();
	let o;
	return n || (o = new MutationObserver(() => {
		document.getElementById("extensions_settings") && (o?.disconnect(), o = void 0, a());
	}), o.observe(document.body, {
		childList: !0,
		subtree: !0
	})), { destroy: () => {
		t = !0, o?.disconnect(), n?.unmount(), i && r ? $(r).remove() : r && $(r).empty().removeClass(Uh);
	} };
}
// src/mobile-world-select-module.ts
var Gh = "(min-width: 1200px)", Kh = "(max-width: 560px)", qh = "th-modern-mobile-world-source", Jh = "th-modern-mobile-world-source-native", Yh = "th-modern-mobile-world-select2-source", Xh = "th-modern-mobile-world-control", Zh = "th-modern-mobile-world-picker", Qh = "th-modern-world-select-custom", $h = "th_modern_world_book_favorites", eg = 3e4, tg = 90, ng = [
	{
		key: "global",
		selector: "#world_info",
		title: "启用全局世界书",
		placeholder: "尚未启用世界书",
		multiple: !0
	},
	{
		key: "editor",
		selector: "#world_editor_select",
		title: "选择要编辑的世界书",
		placeholder: "选择一个世界书",
		multiple: !1
	},
	{
		key: "character-primary",
		selector: ".character_world_info_selector",
		title: "绑定主要世界书",
		placeholder: "未绑定主要世界书",
		multiple: !1
	},
	{
		key: "character-additional",
		selector: ".character_extra_world_info_selector",
		title: "绑定附加世界书",
		placeholder: "尚未绑定附加世界书",
		multiple: !0
	},
	{
		key: "persona",
		selector: ".persona_world_info_selector",
		title: "绑定人设世界书",
		placeholder: "未绑定人设世界书",
		multiple: !1
	}
], rg = {
	all: "全部",
	enabled: "已启用",
	favorites: "收藏"
};
function J(e, t, n) {
	let r = e.createElement(t);
	return n && (r.className = n), r;
}
function ig(e, t) {
	let n = J(e, "i", t);
	return n.setAttribute("aria-hidden", "true"), n;
}
function ag(e) {
	return e.normalize("NFKC").toLocaleLowerCase().trim();
}
function og(e) {
	return Array.isArray(e) ? Array.from(new Set(e.filter((e) => typeof e == "string").map((e) => e.trim()).filter(Boolean))) : [];
}
function sg(e) {
	let t = e;
	return t ? typeof t.closest == "function" ? t : t.nodeType === 3 ? t.parentElement ?? null : null : null;
}
var cg = class {
	document;
	window;
	options;
	panelObserver;
	documentObserver;
	controllers = [];
	lastTabs = /* @__PURE__ */ new Map();
	favorites = /* @__PURE__ */ new Set();
	enabled;
	picker;
	pendingRename;
	controllerRefreshFrame = 0;
	variableWriteErrorNotified = !1;
	constructor(e) {
		this.options = e, this.enabled = e.enabled, this.document = z(), this.window = B(), this.panelObserver = new this.window.MutationObserver(() => {
			this.document.querySelector("#WorldInfo.openDrawer") || this.closePicker();
		}), this.documentObserver = new this.window.MutationObserver(this.scheduleControllerRefresh);
	}
	mount() {
		let e = this.document.querySelector("#WorldInfo");
		e && this.panelObserver.observe(e, {
			attributes: !0,
			attributeFilter: ["class"]
		}), this.documentObserver.observe(this.document.body, {
			childList: !0,
			subtree: !0
		}), this.document.addEventListener("click", this.captureRenameIntent, !0), this.favorites = this.readFavorites(), this.applyEnabledState();
	}
	destroy() {
		this.panelObserver.disconnect(), this.documentObserver.disconnect(), this.controllerRefreshFrame &&= (this.window.cancelAnimationFrame(this.controllerRefreshFrame), 0), this.document.removeEventListener("click", this.captureRenameIntent, !0), this.clearRenameIntent(), this.closePicker(), this.unmountControllers(), this.document.querySelector("#WorldInfo")?.classList.remove(Qh);
	}
	setEnabled(e) {
		this.enabled === e || (this.enabled = e, this.closePicker()), this.applyEnabledState();
	}
	requestEnabledChange(e) {
		this.setEnabled(e), this.options.onEnabledChange(e);
	}
	openPicker(e) {
		this.enabled && (this.closePicker(), this.refreshFavoritesAndCleanInvalid(), this.picker = new ug(this, e, () => {
			this.picker = void 0;
		}), this.picker.mount());
	}
	closePicker() {
		this.picker?.destroy(), this.picker = void 0;
	}
	isPickerFor(e) {
		return this.picker?.belongsTo(e) ?? !1;
	}
	notifySourceChanged(e) {
		this.tryMigrateRenamedFavorite(), e.syncTrigger(), this.picker?.belongsTo(e) && this.picker.refreshFromSource();
	}
	getInitialTab(e) {
		let t = this.lastTabs.get(e.config.key);
		return t && (e.config.multiple || t !== "enabled") ? t : "all";
	}
	rememberTab(e, t) {
		this.lastTabs.set(e.config.key, t);
	}
	getFavorites() {
		return new Set(this.favorites);
	}
	isFavorite(e) {
		return this.favorites.has(e);
	}
	toggleFavorite(e) {
		if (!e) return !1;
		let t = !this.favorites.has(e);
		return t ? this.favorites.add(e) : this.favorites.delete(e), this.writeFavorites(), t;
	}
	applyEnabledState() {
		if (this.document.querySelector("#WorldInfo")?.classList.toggle(Qh, this.enabled), !this.enabled) this.unmountControllers();
		else {
			this.mountControllers();
			for (let e of this.controllers) e.setNativeMode(!1);
		}
	}
	mountControllers() {
		if (this.enabled) {
			for (let e = this.controllers.length - 1; e >= 0; --e) {
				let t = this.controllers[e];
				t.source.isConnected ? t.syncSelect2Container() : (this.isPickerFor(t) && this.closePicker(), t.destroy(), this.controllers.splice(e, 1));
			}
			for (let e of ng) for (let t of this.document.querySelectorAll(e.selector)) {
				if (t.closest(".template_element") || this.controllers.some((e) => e.source === t)) continue;
				let n = new lg(this, t, e);
				n.mount(), n.setNativeMode(!this.enabled), this.controllers.push(n);
			}
		}
	}
	unmountControllers() {
		for (; this.controllers.length > 0;) this.controllers.pop()?.destroy();
	}
	getAvailableWorldNames() {
		return new Set(this.controllers.flatMap((e) => e.getOptions().map((e) => e.favoriteKey).filter(Boolean)));
	}
	readFavorites() {
		try {
			let e = window.extension_settings?.modern_ui;
			if (e && e[$h]) return new Set(og(e[$h]));
			let t = localStorage.getItem($h);
			return new Set(og(t ? JSON.parse(t) : []));
		} catch (e) {
			return console.warn("[现代化界面] 读取世界书收藏失败。", e), /* @__PURE__ */ new Set();
		}
	}
	writeFavorites() {
		try {
			let e = [...this.favorites];
			localStorage.setItem($h, JSON.stringify(e)), window.extension_settings?.modern_ui && (window.extension_settings.modern_ui[$h] = e, typeof window.saveSettingsDebounced == "function" && window.saveSettingsDebounced()), this.variableWriteErrorNotified = !1;
		} catch (e) {
			console.error("[现代化界面] 写入世界书收藏失败。", e), this.variableWriteErrorNotified ||= (toastr.error("世界书收藏保存失败，请稍后重试", "现代化界面"), !0);
		}
	}
	refreshFavoritesAndCleanInvalid() {
		this.favorites = this.readFavorites();
	}
	migrateFavorite(e, t) {
		this.favorites.has(e) && t && e !== t && (this.favorites.delete(e), this.favorites.add(t), this.writeFavorites());
	}
	tryMigrateRenamedFavorite() {
		if (!this.pendingRename) return;
		let e = this.getAvailableWorldNames(), t = this.document.querySelector("#world_editor_select")?.selectedOptions[0]?.label.trim() ?? "";
		!e.has(this.pendingRename.oldName) && t && e.has(t) && (this.migrateFavorite(this.pendingRename.oldName, t), this.clearRenameIntent());
	}
	clearRenameIntent() {
		this.pendingRename &&= (this.window.clearTimeout(this.pendingRename.timeout), void 0);
	}
	captureRenameIntent = (e) => {
		if (!sg(e.target)?.closest("#world_popup_name_button")) return;
		let t = this.document.querySelector("#world_editor_select")?.selectedOptions[0]?.label.trim() ?? "";
		if (!t) return;
		this.clearRenameIntent();
		let n = this.window.setTimeout(() => this.clearRenameIntent(), eg);
		this.pendingRename = {
			oldName: t,
			timeout: n
		};
	};
	scheduleControllerRefresh = () => {
		this.controllerRefreshFrame ||= this.window.requestAnimationFrame(() => {
			this.controllerRefreshFrame = 0, this.mountControllers();
		});
	};
}, lg = class {
	config;
	document;
	source;
	window;
	manager;
	namespace;
	observer;
	surface;
	wrapper;
	trigger;
	primaryText;
	secondaryText;
	countBadge;
	nativeReturn;
	select2Container;
	$source;
	nativeChangeHandler;
	syncFrame = 0;
	nativeMode = !1;
	nativeSourceAttributes;
	constructor(e, t, n) {
		this.manager = e, this.source = t, this.config = n, this.document = t.ownerDocument, this.window = this.document.defaultView ?? B(), this.namespace = `.thModernWorldSelect_${t.id || n.key}`;
	}
	mount() {
		if (this.wrapper) return;
		this.source.classList.add(qh), this.surface = this.source.closest("#WorldInfo, .character_world, .persona_world") ?? this.source.parentElement ?? void 0, this.select2Container = this.findSelect2Container(), this.select2Container?.classList.add(Yh);
		let e = J(this.document, "div", Xh);
		e.dataset.source = this.source.id || this.config.key;
		let t = J(this.document, "button", "menu_button th-modern-mobile-world-trigger");
		t.type = "button", t.setAttribute("aria-haspopup", "dialog"), t.setAttribute("aria-expanded", "false"), t.append(ig(this.document, this.config.multiple ? "fa-solid fa-layer-group" : "fa-solid fa-book-open"));
		let n = J(this.document, "span", "th-modern-mobile-world-trigger-text"), r = J(this.document, "span", "th-modern-mobile-world-trigger-primary"), i = J(this.document, "span", "th-modern-mobile-world-trigger-secondary");
		n.append(r, i);
		let a = J(this.document, "span", "th-modern-mobile-world-trigger-count");
		t.append(n, a, ig(this.document, "fa-solid fa-chevron-down th-modern-mobile-world-trigger-chevron"));
		let o = J(this.document, "button", "menu_button menu_button_icon th-modern-mobile-world-native-return");
		o.type = "button", o.title = "使用现代世界书选择器", o.append(ig(this.document, "fa-solid fa-list-check"), J(this.document, "span")), o.lastElementChild.textContent = "现代选择", t.addEventListener("click", this.openPicker), o.addEventListener("click", this.returnToCustomMode), e.append(t, o), (this.select2Container ?? this.source).insertAdjacentElement("afterend", e), this.wrapper = e, this.trigger = t, this.primaryText = r, this.secondaryText = i, this.countBadge = a, this.nativeReturn = o, typeof this.window.$ == "function" ? (this.$source = this.window.$(this.source), this.$source.on(`change${this.namespace}`, this.onSourceChange)) : (this.nativeChangeHandler = this.onSourceChange, this.source.addEventListener("change", this.nativeChangeHandler)), this.observer = new this.window.MutationObserver(this.scheduleSync), this.observer.observe(this.source, {
			attributes: !0,
			attributeFilter: ["disabled"],
			childList: !0,
			subtree: !0
		}), this.syncTrigger();
	}
	destroy() {
		this.syncFrame &&= (this.window.cancelAnimationFrame(this.syncFrame), 0), this.observer?.disconnect(), this.observer = void 0, this.$source?.off(`change${this.namespace}`, this.onSourceChange), this.$source = void 0, this.nativeChangeHandler &&= (this.source.removeEventListener("change", this.nativeChangeHandler), void 0), this.trigger?.removeEventListener("click", this.openPicker), this.nativeReturn?.removeEventListener("click", this.returnToCustomMode), this.wrapper?.remove(), this.wrapper = void 0, this.trigger = void 0, this.primaryText = void 0, this.secondaryText = void 0, this.countBadge = void 0, this.nativeReturn = void 0, this.restoreNativeSourceAttributes(), this.source.classList.remove(qh, Jh), this.select2Container?.classList.remove(Yh), this.select2Container = void 0, this.surface?.classList.remove(Qh), this.surface = void 0, this.nativeMode = !1;
	}
	getOptions() {
		let e = Array.from(this.source.options).map((e, t) => {
			let n = String(e.label || e.textContent || e.value).trim();
			return {
				disabled: e.disabled,
				favoriteKey: e.value ? n : "",
				label: n,
				searchText: ag(n),
				selected: e.selected,
				sourceIndex: t,
				value: e.value
			};
		});
		if (!this.config.multiple) return e;
		let t = e.filter((e) => e.value !== "");
		return t.length > 0 ? t : e;
	}
	getSelectedValues() {
		return new Set(Array.from(this.source.selectedOptions).map((e) => e.value).filter((e) => !this.config.multiple || e !== ""));
	}
	getTriggerRect() {
		return this.trigger?.getBoundingClientRect();
	}
	commit(e) {
		let t = !1;
		if (this.config.multiple) for (let n of Array.from(this.source.options)) {
			let r = n.value !== "" && e.has(n.value);
			n.selected !== r && (n.selected = r, t = !0);
		}
		else {
			let n = e.values().next().value ?? "";
			t = this.source.value !== n, this.source.value = n;
		}
		t ? this.triggerSourceChange() : this.syncTrigger();
	}
	setNativeMode(e) {
		this.nativeMode = e;
		let t = e && !this.select2Container;
		t ? (this.nativeSourceAttributes ??= {
			tabIndex: this.source.getAttribute("tabindex"),
			ariaHidden: this.source.getAttribute("aria-hidden")
		}, this.source.removeAttribute("tabindex"), this.source.removeAttribute("aria-hidden")) : this.restoreNativeSourceAttributes(), this.surface?.classList.toggle(Qh, !e), this.source.classList.toggle(Jh, t), this.wrapper?.classList.toggle("is-native", e), this.syncTrigger();
	}
	restoreNativeSourceAttributes() {
		if (this.nativeSourceAttributes) {
			for (let [e, t] of [["tabindex", this.nativeSourceAttributes.tabIndex], ["aria-hidden", this.nativeSourceAttributes.ariaHidden]]) t === null ? this.source.removeAttribute(e) : this.source.setAttribute(e, t);
			this.nativeSourceAttributes = void 0;
		}
	}
	syncSelect2Container() {
		let e = this.findSelect2Container();
		e !== this.select2Container && (this.select2Container?.classList.remove(Yh), this.select2Container = e, this.select2Container?.classList.add(Yh), this.wrapper && (this.select2Container ?? this.source).insertAdjacentElement("afterend", this.wrapper), this.setNativeMode(this.nativeMode));
	}
	syncTrigger() {
		if (!this.trigger || !this.primaryText || !this.secondaryText || !this.countBadge) return;
		let e = this.getOptions(), t = this.getSelectedValues(), n = e.filter((e) => t.has(e.value)), r = e.filter((e) => !e.disabled);
		if (this.trigger.disabled = this.source.disabled || r.length === 0, this.trigger.setAttribute("aria-expanded", String(this.manager.isPickerFor(this))), this.config.multiple) this.primaryText.textContent = n.length > 0 ? `${n.length} 本已启用` : this.config.placeholder, this.secondaryText.textContent = n.length > 0 ? `${n.slice(0, 2).map((e) => e.label).join("、")}${n.length > 2 ? ` 等 ${n.length} 本` : ""}` : "", this.secondaryText.hidden = n.length === 0, this.countBadge.textContent = String(n.length), this.countBadge.hidden = n.length === 0;
		else {
			let e = n[0];
			this.primaryText.textContent = e?.value ? e.label : this.config.placeholder, this.secondaryText.textContent = "", this.secondaryText.hidden = !0, this.countBadge.hidden = !0;
		}
		this.trigger.title = `${this.config.title}：${this.primaryText.textContent}`, this.wrapper?.classList.toggle("is-native", this.nativeMode);
	}
	findSelect2Container() {
		let e = this.source.nextElementSibling;
		return e instanceof this.window.HTMLElement && e.classList.contains("select2-container") ? e : void 0;
	}
	triggerSourceChange() {
		typeof this.window.$ == "function" ? this.window.$(this.source).trigger("change") : this.source.dispatchEvent(new this.window.Event("change", { bubbles: !0 }));
	}
	openPicker = () => {
		this.source.disabled || this.manager.openPicker(this);
	};
	returnToCustomMode = () => {
		this.manager.requestEnabledChange(!0);
	};
	onSourceChange = () => {
		this.manager.notifySourceChanged(this);
	};
	scheduleSync = () => {
		this.syncFrame ||= this.window.requestAnimationFrame(() => {
			this.syncFrame = 0, this.manager.notifySourceChanged(this);
		});
	};
}, ug = class {
	manager;
	controller;
	document;
	window;
	onDestroy;
	options = [];
	filteredOptions = [];
	selectedValues = /* @__PURE__ */ new Set();
	enabledSnapshot = /* @__PURE__ */ new Set();
	favoriteSnapshot = /* @__PURE__ */ new Set();
	activeTab;
	layout = "phone";
	overlay;
	sheet;
	tabs;
	searchInput;
	clearSearchButton;
	resultStatus;
	viewport;
	rows;
	emptyState;
	emptyStateText;
	rowPool = [];
	previousFocus;
	searchTimer = 0;
	query = "";
	destroyed = !1;
	constructor(e, t, n) {
		this.manager = e, this.controller = t, this.document = t.document, this.window = t.window, this.onDestroy = n, this.activeTab = e.getInitialTab(t);
	}
	belongsTo(e) {
		return this.controller === e;
	}
	mount() {
		this.previousFocus = this.document.activeElement, this.options = this.controller.getOptions(), this.selectedValues = this.controller.getSelectedValues(), this.enabledSnapshot = new Set(this.selectedValues), this.favoriteSnapshot = this.manager.getFavorites();
		let e = J(this.document, "dialog", Zh), t = `th-modern-mobile-world-picker-title-${this.controller.source.id}`;
		e.setAttribute("role", "dialog"), e.setAttribute("aria-labelledby", t), e.tabIndex = -1;
		let n = J(this.document, "section", "th-modern-mobile-world-picker-sheet"), r = J(this.document, "span", "th-modern-mobile-world-picker-handle");
		r.setAttribute("aria-hidden", "true");
		let i = J(this.document, "header", "th-modern-mobile-world-picker-header"), a = J(this.document, "div", "th-modern-mobile-world-picker-heading"), o = J(this.document, "strong");
		o.id = t, o.textContent = this.controller.config.title, a.append(o);
		let s = J(this.document, "div", "th-modern-mobile-world-picker-header-actions"), c = J(this.document, "button", "menu_button th-modern-mobile-world-picker-native");
		c.type = "button", c.append(ig(this.document, "fa-solid fa-arrow-rotate-left"), this.document.createTextNode("原生界面")), c.addEventListener("click", this.useNativeMode);
		let l = J(this.document, "button", "menu_button th-modern-mobile-world-picker-close");
		l.type = "button", l.title = "关闭世界书选择", l.setAttribute("aria-label", "关闭世界书选择"), l.append(ig(this.document, "fa-solid fa-xmark")), l.addEventListener("click", this.close), s.append(c, l), i.append(a, s);
		let u = J(this.document, "nav", "th-modern-mobile-world-picker-tabs");
		u.setAttribute("role", "tablist"), u.setAttribute("aria-label", "世界书筛选"), u.addEventListener("click", this.onTabClick);
		let d = J(this.document, "label", "th-modern-mobile-world-picker-search");
		d.append(ig(this.document, "fa-solid fa-magnifying-glass"));
		let f = J(this.document, "input");
		f.type = "search", f.placeholder = "搜索世界书名称…", f.autocomplete = "off", f.spellcheck = !1, f.setAttribute("enterkeyhint", "search"), f.addEventListener("input", this.onSearchInput), f.addEventListener("keydown", this.onSearchKeyDown);
		let p = J(this.document, "button", "th-modern-mobile-world-picker-search-clear");
		p.type = "button", p.title = "清空搜索", p.setAttribute("aria-label", "清空搜索"), p.append(ig(this.document, "fa-solid fa-circle-xmark")), p.addEventListener("click", this.clearSearch), d.append(f, p);
		let m = J(this.document, "div", "th-modern-mobile-world-picker-status");
		m.setAttribute("aria-live", "polite");
		let h = J(this.document, "div", "th-modern-mobile-world-picker-viewport");
		h.tabIndex = 0, h.setAttribute("role", "listbox"), this.controller.config.multiple && h.setAttribute("aria-multiselectable", "true");
		let g = J(this.document, "div", "th-modern-mobile-world-picker-rows"), v = J(this.document, "div", "th-modern-mobile-world-picker-empty"), y = this.document.createTextNode("没有找到匹配的世界书");
		v.append(ig(this.document, "fa-regular fa-folder-open"), y), h.append(g, v), n.append(r, i, u, d, m, h), e.append(n), e.addEventListener("touchstart", this.stopDrawerAutoClose, { passive: !0 }), e.addEventListener("mousedown", this.stopDrawerAutoClose), e.addEventListener("click", this.onOverlayClick), e.addEventListener("keydown", this.onKeyDown), this.window.addEventListener("resize", this.syncLayout, { passive: !0 }), this.overlay = e, this.sheet = n, this.tabs = u, this.searchInput = f, this.clearSearchButton = p, this.resultStatus = m, this.viewport = h, this.rows = g, this.emptyState = v, this.emptyStateText = y, this.renderTabs(), this.filterOptions(), this.document.body.append(e), e.showModal(), this.syncLayout(), this.controller.syncTrigger(), this.window.requestAnimationFrame(() => {
			this.layout === "wide" ? this.searchInput?.focus({ preventScroll: !0 }) : e.focus({ preventScroll: !0 });
		});
	}
	destroy(e = !0) {
		this.destroyed || (this.destroyed = !0, this.searchTimer &&= (this.window.clearTimeout(this.searchTimer), 0), this.searchInput?.removeEventListener("input", this.onSearchInput), this.searchInput?.removeEventListener("keydown", this.onSearchKeyDown), this.clearSearchButton?.removeEventListener("click", this.clearSearch), this.tabs?.removeEventListener("click", this.onTabClick), this.overlay?.removeEventListener("touchstart", this.stopDrawerAutoClose), this.overlay?.removeEventListener("mousedown", this.stopDrawerAutoClose), this.overlay?.removeEventListener("click", this.onOverlayClick), this.overlay?.removeEventListener("keydown", this.onKeyDown), this.window.removeEventListener("resize", this.syncLayout), this.overlay?.remove(), this.overlay = void 0, e && this.previousFocus?.isConnected && this.previousFocus.focus({ preventScroll: !0 }), this.controller.syncTrigger(), this.onDestroy());
	}
	refreshFromSource() {
		this.options = this.controller.getOptions(), this.selectedValues = this.controller.getSelectedValues();
		for (let e of this.selectedValues) this.enabledSnapshot.add(e);
		this.renderTabs(), this.filterOptions();
	}
	getAvailableTabs() {
		return this.controller.config.multiple ? [
			"all",
			"enabled",
			"favorites"
		] : ["all", "favorites"];
	}
	renderTabs() {
		if (!this.tabs) return;
		let e = this.document.createDocumentFragment();
		for (let t of this.getAvailableTabs()) {
			let n = J(this.document, "button", "th-modern-mobile-world-picker-tab");
			n.type = "button", n.dataset.tab = t, n.setAttribute("role", "tab"), n.setAttribute("aria-selected", String(this.activeTab === t)), n.classList.toggle("is-active", this.activeTab === t);
			let r = t === "all" ? this.options.length : t === "enabled" ? this.selectedValues.size : this.manager.getFavorites().size;
			n.append(this.document.createTextNode(rg[t]), J(this.document, "span")), n.lastElementChild.textContent = String(r), e.append(n);
		}
		this.tabs.replaceChildren(e);
	}
	filterOptions() {
		let e = ag(this.query), t = this.options;
		this.activeTab === "enabled" ? t = t.filter((e) => this.enabledSnapshot.has(e.value)) : this.activeTab === "favorites" && (t = t.filter((e) => this.favoriteSnapshot.has(e.favoriteKey))), this.filteredOptions = e ? t.filter((t) => t.searchText.includes(e)) : [...t], this.viewport && (this.viewport.scrollTop = 0), this.updateStatus(t.length), this.renderRows();
	}
	renderRows() {
		if (!this.viewport || !this.rows || !this.emptyState) return;
		let e = this.filteredOptions.length;
		if (this.emptyState.hidden = e > 0, e === 0) for (let e of this.rowPool) e.root.hidden = !0;
		else {
			this.ensureRowPool(e);
			for (let e = 0; e < this.rowPool.length; e += 1) {
				let t = this.rowPool[e], n = this.filteredOptions[e];
				n ? (t.root.hidden = !1, this.updatePooledRow(t, n)) : t.root.hidden = !0;
			}
		}
	}
	ensureRowPool(e) {
		if (!this.rows || this.rowPool.length >= e) return;
		let t = this.document.createDocumentFragment();
		for (; this.rowPool.length < e;) {
			let e = J(this.document, "div", "th-modern-mobile-world-picker-row");
			e.setAttribute("role", "option");
			let n = J(this.document, "button", "th-modern-mobile-world-picker-row-select");
			n.type = "button", n.addEventListener("click", this.onRowClick);
			let r = J(this.document, "span", this.controller.config.multiple ? "th-modern-mobile-world-picker-checkbox" : "th-modern-mobile-world-picker-radio");
			r.append(ig(this.document, this.controller.config.multiple ? "fa-solid fa-check" : "fa-solid fa-circle"));
			let i = J(this.document, "span", "th-modern-mobile-world-picker-row-label"), a = this.document.createTextNode("");
			i.append(a);
			let o = ig(this.document, "fa-solid fa-check th-modern-mobile-world-picker-row-check");
			o.hidden = !0, n.append(r, i, o);
			let s = J(this.document, "button", "th-modern-mobile-world-picker-favorite");
			s.type = "button", s.addEventListener("click", this.onRowClick);
			let c = ig(this.document, "fa-solid fa-star"), l = ig(this.document, "fa-regular fa-star");
			c.hidden = !0, s.append(c, l), e.append(n, s), t.append(e), this.rowPool.push({
				favoriteButton: s,
				favoriteOffIcon: l,
				favoriteOnIcon: c,
				labelText: a,
				root: e,
				selectButton: n,
				selectedIcon: o
			});
		}
		this.rows.append(t);
	}
	updatePooledRow(e, t) {
		let n = this.selectedValues.has(t.value), r = this.manager.isFavorite(t.favoriteKey), i = t.label || (t.value === "" ? "不选择世界书" : t.value);
		e.root.dataset.sourceIndex = String(t.sourceIndex), e.root.setAttribute("aria-selected", String(n)), e.root.dataset.favorite = String(r), e.selectButton.disabled = t.disabled, e.selectButton.title = this.controller.config.multiple ? `${n ? "停用" : "启用"}世界书：${t.label}` : `选择世界书：${t.label}`, e.labelText.data = i, e.selectedIcon.hidden = !n, e.favoriteButton.hidden = !t.value, e.favoriteButton.setAttribute("aria-pressed", String(r)), e.favoriteButton.setAttribute("aria-label", `${r ? "取消收藏" : "收藏"}世界书：${t.label}`), e.favoriteButton.title = r ? "取消收藏" : "收藏", e.favoriteOnIcon.hidden = !r, e.favoriteOffIcon.hidden = r;
	}
	updateStatus(e) {
		if (this.resultStatus) {
			let t = this.query ? `找到 ${this.filteredOptions.length} / ${e} 本` : `当前页签 ${e} 本`;
			this.resultStatus.textContent = this.controller.config.multiple ? `${t} · 已启用 ${this.selectedValues.size} 本 · 点击即生效` : `${t} · 点击即选择`;
		}
		this.clearSearchButton && (this.clearSearchButton.hidden = this.query.length === 0), this.emptyStateText && (this.emptyStateText.data = this.query ? "没有找到匹配的世界书" : this.activeTab === "favorites" ? "还没有收藏世界书" : this.activeTab === "enabled" ? "当前没有已启用的世界书" : "没有可选择的世界书");
	}
	getLayout() {
		return this.window.matchMedia(Gh).matches ? "wide" : this.window.matchMedia(Kh).matches ? "phone" : "narrow";
	}
	positionWideSheet() {
		if (!this.sheet) return;
		let e = Math.min(this.window.innerWidth, this.document.documentElement.clientWidth || this.window.innerWidth), t = Math.min(this.window.innerHeight, this.document.documentElement.clientHeight || this.window.innerHeight), n = this.controller.getTriggerRect();
		if (!n) return;
		let r = Math.min(560, e - 24), i = Math.min(640, t - 24), a = Math.max(0, t - n.bottom - 8 - 12), o = Math.max(0, n.top - 8 - 12), s = a >= Math.min(420, i) || a >= o, c = Math.max(220, Math.min(i, s ? a : o)), l = Math.max(12, Math.min(n.left, e - r - 12)), u = s ? Math.min(t - c - 12, n.bottom + 8) : Math.max(12, n.top - 8 - c);
		this.sheet.style.left = `${l}px`, this.sheet.style.top = `${u}px`, this.sheet.style.width = `${r}px`, this.sheet.style.height = `${c}px`;
	}
	focusFilteredIndex(e) {
		if (!this.viewport || this.filteredOptions.length === 0) return;
		let t = Math.max(0, Math.min(e, this.filteredOptions.length - 1)), n = this.filteredOptions[t];
		this.window.requestAnimationFrame(() => {
			let e = this.rows?.querySelector(`.th-modern-mobile-world-picker-row[data-source-index="${n.sourceIndex}"] .th-modern-mobile-world-picker-row-select`);
			e?.focus({ preventScroll: !0 }), e?.scrollIntoView({ block: "nearest" });
		});
	}
	syncLayout = () => {
		this.layout = this.getLayout(), this.overlay && this.sheet && (this.overlay.dataset.layout = this.layout, this.overlay.setAttribute("aria-modal", String(this.layout !== "wide")), this.sheet.removeAttribute("style"), this.layout === "wide" && this.positionWideSheet());
	};
	onTabClick = (e) => {
		let t = (sg(e.target)?.closest(".th-modern-mobile-world-picker-tab"))?.dataset.tab;
		t && t !== this.activeTab && this.getAvailableTabs().includes(t) && (this.activeTab = t, this.manager.rememberTab(this.controller, t), this.renderTabs(), this.filterOptions());
	};
	onSearchInput = () => {
		this.searchTimer && this.window.clearTimeout(this.searchTimer), this.searchTimer = this.window.setTimeout(() => {
			this.searchTimer = 0, this.query = this.searchInput?.value ?? "", this.filterOptions();
		}, tg);
	};
	onSearchKeyDown = (e) => {
		e.key === "ArrowDown" && (e.preventDefault(), this.focusFilteredIndex(0));
	};
	clearSearch = () => {
		this.searchInput && (this.searchInput.value = "", this.query = "", this.filterOptions(), this.searchInput.focus({ preventScroll: !0 }));
	};
	onRowClick = (e) => {
		let t = sg(e.target), n = t?.closest(".th-modern-mobile-world-picker-row");
		if (!n) return;
		let r = Number(n.dataset.sourceIndex), i = this.options.find((e) => e.sourceIndex === r);
		if (!i) return;
		if (t?.closest(".th-modern-mobile-world-picker-favorite")) {
			this.manager.toggleFavorite(i.favoriteKey) && this.favoriteSnapshot.add(i.favoriteKey), this.renderTabs(), this.updateStatus(this.activeTab === "all" ? this.options.length : this.activeTab === "enabled" ? this.options.filter((e) => this.enabledSnapshot.has(e.value)).length : this.options.filter((e) => this.favoriteSnapshot.has(e.favoriteKey)).length), this.renderRows();
			return;
		}
		let a = t?.closest(".th-modern-mobile-world-picker-row-select");
		a && !a.disabled && (this.controller.config.multiple ? (this.selectedValues.has(i.value) ? this.selectedValues.delete(i.value) : (this.selectedValues.add(i.value), this.enabledSnapshot.add(i.value)), this.controller.commit(this.selectedValues), this.renderTabs(), this.renderRows()) : (this.controller.commit(/* @__PURE__ */ new Set([i.value])), this.destroy()));
	};
	useNativeMode = () => {
		this.manager.requestEnabledChange(!1), this.destroy(!1);
	};
	close = () => {
		this.destroy();
	};
	onOverlayClick = (e) => {
		e.target === this.overlay && this.close();
	};
	stopDrawerAutoClose = (e) => {
		e.stopPropagation();
	};
	onKeyDown = (e) => {
		if (e.key === "Escape") {
			e.preventDefault(), this.close();
			return;
		}
		let t = sg(e.target)?.closest(".th-modern-mobile-world-picker-row");
		if (!t || e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
		let n = Number(t.dataset.sourceIndex), r = this.filteredOptions.findIndex((e) => e.sourceIndex === n);
		r < 0 || (e.preventDefault(), this.focusFilteredIndex(r + (e.key === "ArrowDown" ? 1 : -1)));
	};
};
function dg(e) {
	let t = new cg(e);
	return t.mount(), {
		destroy: () => t.destroy(),
		setEnabled: (e) => t.setEnabled(e)
	};
}
// src/world-info-concurrency.ts
function fg(e, t, n) {
	return JSON.stringify(t) !== e || JSON.stringify(n) !== e;
}
// src/world-info-module.ts
var pg = "th-modern-wi-enabled", mg = "th-modern-wi-native", hg = "th-modern-wi-selected", gg = "th-modern-wi-row-checked", _g = "th-modern-wi-multiselect", vg = "th-modern-wi-narrow", yg = "th-modern-wi-detail-open", bg = "th-modern-wi-mobile-detail-open", xg = "th-modern-wi-native-editor-loading", Sg = "thModernTabsReady", Cg = "thModernSummaryReady", wg = "2026-07-18-compact-v2", Tg = "thModernConditionalReady", Eg = "thModernShortcutSyncReady", Dg = "2026-07-08-tabs-v4", Og = /* @__PURE__ */ new Map(), kg = [
	["th-modern-wi-position-field", "select[name=\"position\"]"],
	["th-modern-wi-depth-field", "input[name=\"depth\"]"],
	["th-modern-wi-outlet-field", "input[name=\"outletName\"]"],
	["th-modern-wi-order-field", "input[name=\"order\"]"],
	["th-modern-wi-no-recursion-field", "input[name=\"excludeRecursion\"]"],
	["th-modern-wi-prevent-recursion-field", "input[name=\"preventRecursion\"]"]
];
function Ag(e) {
	let t = e.getAttribute("uid") ?? e.dataset.uid, n = Number(t);
	return Number.isFinite(n) ? n : void 0;
}
function jg(e) {
	let t = e.querySelector("#world_editor_select");
	return !t || t.value === "" ? "" : t.selectedOptions[0]?.textContent?.trim() ?? "";
}
function Mg(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Ng(e) {
	return Mg(e) && typeof e.message == "string" ? e.message : String(e);
}
function Pg(e, t, n) {
	let r = n.structuredClone(e);
	if (!Mg(r) || !Mg(r.entries)) throw Error("世界书数据缺少 entries 对象");
	let i = 0;
	for (let [e, n] of Object.entries(r.entries)) {
		let a = Number(Mg(n) && n.uid !== void 0 ? n.uid : e);
		Number.isFinite(a) && t.has(a) && (delete r.entries[e], i += 1);
	}
	if (i !== t.size) throw Error(`仅找到 ${i}/${t.size} 个待删除条目`);
	return Mg(r.originalData) && Array.isArray(r.originalData.entries) && (r.originalData.entries = r.originalData.entries.filter((e) => {
		let n = Number(Mg(e) ? e.uid ?? e.id : void 0);
		return !Number.isFinite(n) || !t.has(n);
	})), r;
}
function Fg(e) {
	let t = e;
	return t ? typeof t.closest == "function" ? t : t.nodeType === 3 ? t.parentElement ?? null : null : null;
}
function Ig(e) {
	return Fg(e)?.closest(".world_entry") ?? null;
}
function Lg(e) {
	let t = Fg(e);
	return t ? !!t.closest(".th-modern-wi-tab,.th-modern-wi-editor-surface,.th-modern-wi-editor-actions,.th-modern-wi-toolbar,.drag-handle,.inline-drawer-toggle,.move_entry_button,.duplicate_entry_button,.delete_entry_button,input,select,textarea,button,a,label,.menu_button,.select2,.select2-container") : !1;
}
function Rg(e) {
	let t = Fg(e);
	return !t || !t.closest("#world_popup_entries_list") || Lg(t) ? null : Ig(t);
}
function zg(e, t, n, r) {
	if (e.parentNode === t) {
		r && e.nextSibling !== r && t.insertBefore(e, r);
		return;
	}
	if (n.findIndex((t) => t.node === e) !== -1) {
		r ? t.insertBefore(e, r) : t.append(e);
		return;
	}
	let i = e.parentNode;
	if (!i) return;
	let a = t.ownerDocument.createComment("th-modern-wi-restore");
	i.insertBefore(a, e), r ? t.insertBefore(e, r) : t.append(e), n.push({
		marker: a,
		node: e
	});
}
function Bg(e) {
	for (let t of [...e].reverse()) {
		let e = t.marker.parentNode;
		e && (e.insertBefore(t.node, t.marker), t.marker.remove());
	}
	e.length = 0;
}
function Y(e, t, n, r) {
	let i = e.createElement(t);
	return n && (i.className = n), r !== void 0 && (i.textContent = r), i;
}
function Vg(e, t, n, r) {
	let i = Y(e, "button", t);
	return i.type = "button", i.title = n, i.setAttribute("aria-label", n), i.innerHTML = `<i class="${r}" aria-hidden="true"></i>`, i;
}
function Hg(e, t, n, r = !1) {
	let i = Y(e, "label", `th-modern-wi-field${r ? " th-modern-wi-field-wide" : ""}`);
	i.classList.add("th-modern-wi-labeled-field");
	let a = Y(e, "span", "th-modern-wi-field-label", n);
	return i.append(a, t), i;
}
function Ug(e, t, n, r = "") {
	t.append(Y(e, "div", `th-modern-wi-section-title${r ? ` ${r}` : ""}`, n));
}
function Wg(e) {
	return e ? e.closest(".world_entry_form_control,.range-block,.checkbox_label,label.checkbox,label,.flex-container") ?? e.parentElement : null;
}
function X(e, t, n, r, i, a = !1, o = "") {
	let s = n.querySelector(r), c = Wg(s);
	if (c && !c.closest(".th-modern-wi-panel")) {
		if (i && c === s) {
			let n = Hg(e, c, i, a);
			o && n.classList.add(o), t.append(n);
		} else c.classList.add("th-modern-wi-native-field"), i && (c.classList.add("th-modern-wi-labeled-field"), c.querySelector(":scope > .th-modern-wi-field-label") || c.prepend(Y(e, "span", "th-modern-wi-field-label", i))), a && c.classList.add("th-modern-wi-native-field-wide"), o && c.classList.add(o), t.append(c);
	}
}
function Gg(e, t, n, r, i = !1, a = "", o = "") {
	let s = t.querySelector(n)?.closest(r);
	s && !s.closest(".th-modern-wi-panel") && (s.classList.add("th-modern-wi-native-field"), o && (s.classList.add("th-modern-wi-labeled-field"), s.querySelector(":scope > .th-modern-wi-field-label") || s.prepend(Y(z(), "span", "th-modern-wi-field-label", o))), i && s.classList.add("th-modern-wi-native-field-wide"), a && s.classList.add(a), e.append(s));
}
function Kg(e, t, n, r, i, a = !1, o = "") {
	let s = n.querySelector(r);
	if (!s || s.closest(".th-modern-wi-panel")) return;
	let c = Hg(e, s, i, a);
	o && c.classList.add(o), t.append(c);
}
function qg(e) {
	let t = e.ownerDocument.defaultView?.Event ?? Event;
	e.dispatchEvent(new t("input", { bubbles: !0 })), e.dispatchEvent(new t("change", { bubbles: !0 }));
}
function Jg(e, t) {
	let n = e.tagName.toLowerCase(), r = t.tagName.toLowerCase();
	n === "input" && r === "input" && e.type === "checkbox" ? t.checked = e.checked : n === "select" && r === "select" ? t.selectedIndex = e.selectedIndex : t.value = e.value;
}
function Yg(e, t, n) {
	let r = [...Array.from(t.querySelectorAll(n)), ...Array.from(e.querySelectorAll(n))];
	return r.find((e) => !e.closest(".th-modern-wi-shortcut-field")) ?? r[0] ?? null;
}
function Xg(e) {
	return kg.find(([t]) => e.classList.contains(t))?.[1];
}
function Zg(e, t) {
	for (let n of t.querySelectorAll(".th-modern-wi-shortcut-field")) {
		let r = Xg(n);
		if (!r) continue;
		let i = n.querySelector("input, select"), a = Yg(e, t, r);
		if (!i || !a || i === a || i.dataset[Eg] === "true") continue;
		let o = () => {
			Jg(i, a), qg(a);
		}, s = () => {
			Jg(a, i), i.disabled = a.disabled;
		};
		i.addEventListener("input", o), i.addEventListener("change", o), a.addEventListener("input", s), a.addEventListener("change", s), i.dataset[Eg] = "true", s();
	}
}
function Qg(e, t, n, r, i, a = !1, o = "") {
	let s = n.querySelector(r);
	if (!s) return;
	let c = s.tagName.toLowerCase() === "select", l = !c && s.type === "checkbox", u = c ? Y(e, "select") : Y(e, "input");
	if (u.classList.add("th-modern-wi-shortcut-control"), u.setAttribute("aria-label", i), s.name && u.setAttribute("name", s.name), c) {
		let t = u, n = s;
		for (let r of Array.from(n.options)) {
			let n = e.createElement("option");
			for (let e of Array.from(r.attributes)) n.setAttribute(e.name, e.value);
			n.textContent = r.textContent, t.append(n);
		}
		t.selectedIndex = n.selectedIndex;
	} else {
		let e = u, t = s;
		e.type = t.type || "text", e.placeholder = t.placeholder, e.min = t.min, e.max = t.max, e.step = t.step, l ? e.checked = t.checked : e.value = t.value;
	}
	u.disabled = s.disabled;
	let d = () => {
		l ? s.checked = u.checked : c ? s.selectedIndex = u.selectedIndex : s.value = u.value, qg(s);
	}, f = () => {
		l ? u.checked = s.checked : c ? u.selectedIndex = s.selectedIndex : u.value = s.value, u.disabled = s.disabled;
	};
	u.addEventListener("input", d), u.addEventListener("change", d), s.addEventListener("input", f), s.addEventListener("change", f), u.dataset[Eg] = "true";
	let p = Hg(e, u, i, a);
	p.classList.add("th-modern-wi-shortcut-field"), o && p.classList.add(o), t.append(p);
}
function $g(e, t, n, r, i = !1, a = "") {
	let o = Y(e, "div", "th-modern-wi-shared-slot");
	o.dataset.sharedName = r;
	let s = Hg(e, o, n, i);
	return s.classList.add("th-modern-wi-shared-field", a), t.append(s), o;
}
function e_(e, t, n, r) {
	let i = Wg(e.querySelector(t));
	i && !i.closest(".th-modern-wi-panel") && (i.classList.add("th-modern-wi-shared-control"), i.dataset.sharedName = n, r[0]?.append(i));
}
function t_(e, t) {
	let n = [
		t,
		t.closest(".inline-drawer-content.inline-drawer-outlet"),
		t.closest(".th-modern-wi-editor-entry-host"),
		e
	];
	return n.filter((e, t) => !!e && n.indexOf(e) === t);
}
function n_(e, t, n, r) {
	let i = t_(e, t);
	for (let e of i) {
		let t = e.querySelector(`.th-modern-wi-shared-control[data-shared-name="${r}"]`);
		if (t) return t;
	}
	for (let e of i) {
		let t = Wg(e.querySelector(n));
		if (t) return t.classList.add("th-modern-wi-shared-control"), t.dataset.sharedName = r, t;
	}
	return null;
}
function r_(e, t, n) {
	let r = new Set(t.querySelectorAll(".th-modern-wi-shared-control[data-shared-name]")), i = n_(e, t, ".keyprimary", "primary-key");
	i && r.add(i);
	for (let e of r) {
		let r = e.dataset.sharedName;
		if (!r) continue;
		let i = t.querySelector(`.th-modern-wi-panel-${n} .th-modern-wi-shared-slot[data-shared-name="${r}"]`);
		i && e.parentElement !== i && i.append(e);
	}
}
function i_(e, t) {
	let n = t.querySelector(".th-modern-wi-panel:not([hidden])")?.querySelector(".th-modern-wi-position-field select"), r = Array.from(t.querySelectorAll(".th-modern-wi-position-field select, select[name=\"position\"]")), i = n ?? r.find((e) => !e.closest(".th-modern-wi-shortcut-field")) ?? r[0] ?? e.querySelector("select[name=\"position\"]"), a = t.querySelector("input[name=\"delay_until_recursion\"]") ?? e.querySelector("input[name=\"delay_until_recursion\"]"), o = i?.value, s = i?.selectedOptions[0]?.textContent?.trim().toLowerCase() ?? "", c = s_(i) ? "depth" : o === "7" || s.includes("outlet") || s.includes("锚点") ? "outlet" : "normal", l = !!a?.checked;
	t.dataset.thModernPositionKind = c, t.dataset.thModernRecursionDelay = l ? "true" : "false";
	for (let e of t.querySelectorAll(".th-modern-wi-depth-field")) {
		e.hidden = c !== "depth";
		for (let t of e.querySelectorAll("input")) t.disabled = c !== "depth", t.style.visibility = c === "depth" ? "visible" : "hidden";
	}
	for (let e of t.querySelectorAll(".th-modern-wi-outlet-field")) e.hidden = c !== "outlet";
	for (let e of t.querySelectorAll(".th-modern-wi-recursion-level-field")) e.hidden = !l;
}
function a_(e, t) {
	let n = () => i_(e, t);
	if (t.dataset[Tg] !== "true") {
		let e = (e) => {
			Fg(e.target)?.closest(".th-modern-wi-position-field, select[name=\"position\"], .th-modern-wi-delay-recursion-field, input[name=\"delay_until_recursion\"]") && n();
		};
		t.addEventListener("input", e), t.addEventListener("change", e), t.dataset[Tg] = "true";
	}
	n();
}
function o_(e, t = e) {
	let n = t.querySelector("textarea[name=\"comment\"]")?.value.trim();
	if (n) return e.dataset.thModernTitle = n, n;
	let r = e === t ? void 0 : e.querySelector("textarea[name=\"comment\"]")?.value.trim();
	if (r) return e.dataset.thModernTitle = r, r;
	let i = e.classList.contains(hg) ? e.ownerDocument.querySelector(".th-modern-wi-native-editor textarea[name=\"comment\"]")?.value.trim() : void 0;
	return i ? (e.dataset.thModernTitle = i, i) : e.dataset.thModernTitle ? e.dataset.thModernTitle : `UID ${Ag(e) ?? ""}`.trim();
}
function s_(e) {
	let t = e?.selectedOptions[0], n = e?.value, r = t?.dataset.role, i = t?.textContent?.trim().toLowerCase() ?? "";
	return n === "4" || r === "0" || r === "1" || r === "2" || i.includes("@d") || i.includes("depth") || i.includes("深度");
}
function c_(e, t = e) {
	let n = e.classList.contains(hg) ? e.ownerDocument.querySelector(".th-modern-wi-native-editor") : null, r = t.querySelector("select[name=\"position\"]") ?? (e === t ? null : e.querySelector("select[name=\"position\"]")) ?? n?.querySelector("select[name=\"position\"]"), i = t.querySelector("input[name=\"depth\"]") ?? (e === t ? null : e.querySelector("input[name=\"depth\"]")) ?? n?.querySelector("input[name=\"depth\"]"), a = r?.selectedOptions[0]?.textContent?.trim() || "", o = i?.value.trim(), s = s_(r) && o ? `${a} ${o}` : a;
	return s && (e.dataset.thModernPosition = s), s || e.dataset.thModernPosition || "";
}
function l_(e, t = e) {
	let n = e.querySelector(".th-modern-wi-row-summary");
	if (!n) return;
	let r = e.classList.contains(hg) ? e.ownerDocument.querySelector(".th-modern-wi-native-editor") : null, i = t.querySelector("input[name=\"order\"]") ?? (e === t ? null : e.querySelector("input[name=\"order\"]")) ?? r?.querySelector("input[name=\"order\"]"), a = i?.value ?? e.dataset.thModernOrder;
	i?.value && (e.dataset.thModernOrder = i.value);
	let o = t.querySelector("select[name=\"entryStateSelector\"]") ?? (e === t ? null : e.querySelector("select[name=\"entryStateSelector\"]")) ?? r?.querySelector("select[name=\"entryStateSelector\"]"), s = o?.value ?? e.dataset.thModernEntryState;
	o?.value && (e.dataset.thModernEntryState = o.value);
	let c = n.querySelector(".th-modern-wi-row-title"), l = n.querySelector(".th-modern-wi-row-meta"), u = n.querySelector(".th-modern-wi-row-stats");
	c && (c.textContent = o_(e, t)), l && (l.textContent = c_(e, t)), u && (u.textContent = a ? `#${a}` : ""), s && (e.dataset.thModernEntryState = s);
}
function u_(e, t, n) {
	let r = t.querySelector(":scope > form.world_entry_form > .inline-drawer > .inline-drawer-header");
	if (!r) return;
	let i = r.querySelector(".th-modern-wi-row-summary");
	i || (i = Y(e, "div", "th-modern-wi-row-summary"), i.tabIndex = 0, i.setAttribute("role", "button"), i.setAttribute("aria-label", "打开世界书条目"), r.append(i)), i.dataset.layoutVersion !== wg && (i.innerHTML = "<span class=\"th-modern-wi-row-leading\" aria-hidden=\"true\"><span class=\"th-modern-wi-select-dot\"></span><span class=\"th-modern-wi-entry-state-icon\"></span></span><span class=\"th-modern-wi-row-text\"><span class=\"th-modern-wi-row-primary\"><strong class=\"th-modern-wi-row-title\"></strong><span class=\"th-modern-wi-row-stats\"></span></span><small class=\"th-modern-wi-row-meta\"></small></span>", i.dataset.layoutVersion = wg), t.dataset[Cg] !== "true" && (t.dataset[Cg] = "true", t.addEventListener("input", () => n(t)), t.addEventListener("change", () => n(t))), l_(t);
}
function d_(e, t, n = e) {
	e.dataset.thModernActiveTab = t;
	for (let e of n.querySelectorAll(".th-modern-wi-tab")) {
		let n = e.dataset.panel === t;
		e.classList.toggle("active", n), e.setAttribute("aria-selected", String(n));
	}
	for (let e of n.querySelectorAll(".th-modern-wi-panel")) e.hidden = e.dataset.panel !== t;
	r_(e, n, t), i_(e, n), n.querySelector(".th-modern-wi-panels")?.scrollTo({
		top: 0,
		left: 0
	});
}
function f_(e) {
	let t = Ag(e);
	if (t !== void 0) {
		let e = Og.get(t);
		if (e) return Og.delete(t), e;
	}
	return e.dataset.thModernActiveTab || "main";
}
function p_(e) {
	let t = e.querySelector("select[name=\"entryStateSelector\"]");
	if (!t) return;
	let n = {
		constant: "🔵 常量",
		normal: "🟢 普通",
		vectorized: "🔗 向量化"
	};
	for (let e of t.options) {
		let t = n[e.value];
		t && (e.textContent = t);
	}
}
function m_(e, t) {
	t.dataset.thModernSwitchCaptureReady !== "true" && (t.addEventListener("click", (t) => {
		let n = Fg(t.target);
		if (!n?.closest(".switch_input_type_icon")) return;
		let r = Ag(e);
		if (r !== void 0) {
			let t = n.closest(".th-modern-wi-panel")?.dataset.panel || e.dataset.thModernActiveTab || "keywords";
			Og.set(r, t);
		}
	}, !0), t.dataset.thModernSwitchCaptureReady = "true"), t.onclick = (n) => {
		if (n.defaultPrevented) return;
		let r = Fg(n.target), i = r?.closest(".th-modern-wi-tab");
		if (i && t.contains(i)) {
			let r = i.dataset.panel;
			if (!r) return;
			n.preventDefault(), d_(e, r, t);
			return;
		}
		let a = r?.closest(".th-modern-wi-action");
		if (!a || !t.contains(a)) return;
		let o = {
			move: ".move_entry_button",
			duplicate: ".duplicate_entry_button",
			delete: ".delete_entry_button"
		}[a.dataset.action || (a.classList.contains("danger") ? "delete" : a.title.includes("复制") ? "duplicate" : "move")];
		o && (n.preventDefault(), e.querySelector(o)?.click());
	};
}
function h_(e, t, n) {
	let r = t.querySelector(":scope > form.world_entry_form > .inline-drawer > .inline-drawer-content.inline-drawer-outlet"), i = t.querySelector(".world_entry_edit");
	if (!r || !i) return !1;
	if (t.dataset[Sg] === "true") {
		let e = r.querySelector(":scope > .th-modern-wi-editor-surface");
		if (e) return e.dataset.thModernLayoutVersion = Dg, p_(t), m_(t, e), Zg(t, e), a_(t, e), d_(t, f_(t), e), !0;
		delete t.dataset[Sg];
	}
	t.dataset[Sg] = "true", u_(e, t, n), p_(t);
	let a = Y(e, "div", "th-modern-wi-editor-surface");
	a.dataset.thModernLayoutVersion = Dg;
	let o = Y(e, "div", "th-modern-wi-editor-top"), s = Y(e, "div", "th-modern-wi-enable-dock"), c = Y(e, "div", "th-modern-wi-editor-actions"), l = Vg(e, "menu_button th-modern-wi-action", "移动/复制到其他世界书", "fa-solid fa-arrow-right-arrow-left"), u = Vg(e, "menu_button th-modern-wi-action", "复制条目", "fa-regular fa-copy"), d = Vg(e, "menu_button th-modern-wi-action danger", "删除条目", "fa-regular fa-trash-can");
	l.dataset.action = "move", u.dataset.action = "duplicate", d.dataset.action = "delete", c.append(l, u, d);
	let f = Y(e, "div", "th-modern-wi-tabs"), p = Y(e, "div", "th-modern-wi-panels"), m = [
		["main", "主要"],
		["keywords", "关键词"],
		["insert", "插入"],
		["trigger", "触发"]
	], h = /* @__PURE__ */ new Map();
	for (let [n, r] of m) {
		let i = Y(e, "button", "th-modern-wi-tab", r);
		i.type = "button", i.dataset.panel = n, i.addEventListener("click", (e) => {
			e.preventDefault(), d_(t, n, a);
		}), f.append(i);
		let o = Y(e, "div", "th-modern-wi-panel");
		o.classList.add(`th-modern-wi-panel-${n}`), o.dataset.panel = n, p.append(o), h.set(n, o);
	}
	let g = Y(e, "div", "th-modern-wi-content-panel");
	o.append(s, f, c), a.append(o, p, g), r.prepend(a), m_(t, a), Kg(e, s, t, ".killSwitch", "启用", !1, "th-modern-wi-enable-field");
	let v = h.get("main");
	Kg(e, v, t, "textarea[name=\"comment\"]", "条目标题/备注", !0, "th-modern-wi-title-field"), Kg(e, v, t, "select[name=\"entryStateSelector\"]", "条目状态", !1, "th-modern-wi-state-field"), Qg(e, v, t, "select[name=\"position\"]", "插入位置", !0, "th-modern-wi-position-field"), Qg(e, v, t, "input[name=\"depth\"]", "深度", !1, "th-modern-wi-depth-field"), Qg(e, v, t, "input[name=\"outletName\"]", "锚点名称", !1, "th-modern-wi-outlet-field"), Qg(e, v, t, "input[name=\"order\"]", "顺序", !1, "th-modern-wi-order-field"), Qg(e, v, t, "input[name=\"excludeRecursion\"]", "不可递归", !1, "th-modern-wi-no-recursion-field");
	let y = $g(e, v, "主要关键字", "primary-key", !0, "th-modern-wi-primary-key-field");
	Qg(e, v, t, "input[name=\"preventRecursion\"]", "防止进一步递归", !1, "th-modern-wi-prevent-recursion-field");
	let b = h.get("keywords"), x = $g(e, b, "主要关键字", "primary-key", !0, "th-modern-wi-primary-key-field");
	X(e, b, t, "select[name=\"entryLogicType\"]", "逻辑", !1, "th-modern-wi-logic-field"), X(e, b, t, ".keysecondary", "可选过滤器", !0, "th-modern-wi-secondary-key-field"), X(e, b, t, "select[name=\"caseSensitive\"]", "区分大小写", !1, "th-modern-wi-case-field"), X(e, b, t, "select[name=\"matchWholeWords\"]", "全词匹配", !1, "th-modern-wi-whole-field"), X(e, b, t, "select[name=\"useGroupScoring\"]", "组评分", !1, "th-modern-wi-group-scoring-field"), X(e, b, t, "input[name=\"scanDepth\"]", "扫描深度", !1, "th-modern-wi-scan-field"), X(e, b, t, "input[name=\"automationId\"]", "自动化 ID", !1, "th-modern-wi-automation-field"), e_(t, ".keyprimary", "primary-key", [y, x]);
	let S = h.get("insert");
	Kg(e, S, t, "select[name=\"position\"]", "插入位置", !0, "th-modern-wi-position-field"), Kg(e, S, t, "input[name=\"depth\"]", "深度", !1, "th-modern-wi-depth-field"), X(e, S, t, "input[name=\"outletName\"]", "锚点名称", !1, "th-modern-wi-outlet-field"), Kg(e, S, t, "input[name=\"order\"]", "顺序", !1, "th-modern-wi-order-field"), Kg(e, S, t, "input[name=\"probability\"]", "触发概率", !1, "th-modern-wi-probability-field"), X(e, S, t, "input[name=\"useProbability\"]", "使用概率", !1, "th-modern-wi-use-probability-field"), X(e, S, t, "input[name=\"group\"]", "包含组", !0, "th-modern-wi-group-field"), X(e, S, t, "input[name=\"groupWeight\"]", "分组权重", !1, "th-modern-wi-group-weight-field"), X(e, S, t, "input[name=\"sticky\"]", "黏附", !1, "th-modern-wi-sticky-field"), X(e, S, t, "input[name=\"cooldown\"]", "冷却", !1, "th-modern-wi-cooldown-field"), X(e, S, t, "input[name=\"delay\"]", "延迟", !1, "th-modern-wi-delay-field"), Gg(S, t, "select[name=\"characterFilter\"]", ".flex4", !0, "th-modern-wi-character-filter-field", "绑定到角色或标签"), Gg(S, t, "select[name=\"triggers\"]", ".flex4", !0, "th-modern-wi-generation-trigger-field", "筛选生成触发器"), X(e, S, t, "input[name=\"delayUntilRecursionLevel\"]", "递归等级", !1, "th-modern-wi-recursion-level-field"), X(e, S, t, "input[name=\"excludeRecursion\"]", "不可递归", !1, "th-modern-wi-no-recursion-field"), X(e, S, t, "input[name=\"preventRecursion\"]", "防止进一步递归", !1, "th-modern-wi-prevent-recursion-field"), X(e, S, t, "input[name=\"delay_until_recursion\"]", "延迟到递归", !1, "th-modern-wi-delay-recursion-field"), X(e, S, t, "input[name=\"ignoreBudget\"]", "无视回复限额", !1, "th-modern-wi-budget-field");
	let C = h.get("trigger");
	return Ug(e, C, "额外匹配来源", "th-modern-wi-match-source-title"), X(e, C, t, "input[name=\"matchCharacterDescription\"]", "角色描述", !1, "th-modern-wi-match-source-field"), X(e, C, t, "input[name=\"matchCharacterPersonality\"]", "角色性格", !1, "th-modern-wi-match-source-field"), X(e, C, t, "input[name=\"matchScenario\"]", "情景", !1, "th-modern-wi-match-source-field"), X(e, C, t, "input[name=\"matchPersonaDescription\"]", "用户设定描述", !1, "th-modern-wi-match-source-field"), X(e, C, t, "input[name=\"matchCharacterDepthPrompt\"]", "角色备注", !1, "th-modern-wi-match-source-field"), X(e, C, t, "input[name=\"matchCreatorNotes\"]", "创作者的注释", !1, "th-modern-wi-match-source-field"), X(e, g, t, "textarea[name=\"content\"]", "正文", !0), Zg(t, a), a_(t, a), d_(t, f_(t), a), !0;
}
var g_ = class {
	document;
	window;
	moved = [];
	observer;
	shell;
	listPane;
	editorPane;
	observedList;
	documentClickHandler;
	documentKeyDownHandler;
	documentChangeHandler;
	worldSelectChangeHandler;
	worldSelect;
	narrowQuery;
	narrowQueryHandler;
	editorMoved = [];
	pendingSummaryUpdates = /* @__PURE__ */ new Map();
	worldbar;
	toolbar;
	main;
	popupObserver;
	observedPopup;
	pendingReconcileFrame = 0;
	multiButton;
	deleteSelectedButton;
	moreMenu;
	selectedUids = /* @__PURE__ */ new Set();
	selectedEntry;
	selectedWorldName = "";
	worldRevision = 0;
	deleteBusy = !1;
	lockedWorldSelect;
	mounted = !1;
	multiSelect = !1;
	mobileDetailOpen = !1;
	mobileListScrollTop = 0;
	pendingEnhance = 0;
	pendingEditorRetry = 0;
	editorRetryRevision = 0;
	nativeEditorToggleEntry;
	constructor() {
		this.document = z(), this.window = B();
	}
	scheduleSummaryUpdate = (e) => {
		if (!this.mounted || this.pendingSummaryUpdates.has(e)) return;
		let t = this.window.requestAnimationFrame(() => {
			this.pendingSummaryUpdates.delete(e), this.mounted && e.isConnected && l_(e, this.selectedEntry === e && this.editorPane && this.editorPane.childElementCount > 0 ? this.editorPane : e);
		});
		this.pendingSummaryUpdates.set(e, t);
	};
	mount() {
		if (this.mounted) {
			this.ensureLayout();
			return;
		}
		let e = this.findWorldInfo(), t = this.findWorldPopup(), n = this.findEntriesList();
		e && t && n && (this.mounted = !0, this.selectedWorldName = jg(this.document), e.classList.add(mg), this.ensureLayout(t), this.bindResponsiveMode(), this.bindEvents(), this.enhanceEntries(), this.isNarrowMode() || this.selectFirstEntry());
	}
	isMounted() {
		return this.mounted;
	}
	destroy() {
		let e = this.mounted;
		this.worldRevision += 1, this.setDeleteBusy(!1), this.findWorldInfo()?.classList.remove(mg, _g, bg), this.observer?.disconnect(), this.observer = void 0, this.popupObserver?.disconnect(), this.popupObserver = void 0, this.observedPopup = void 0, this.pendingReconcileFrame &&= (this.window.cancelAnimationFrame(this.pendingReconcileFrame), 0), this.cancelPendingEditorRetry(), this.cancelPendingSummaryUpdates(), this.clearSelection(), this.selectedUids.clear(), Og.clear(), this.selectedWorldName = "", this.multiSelect = !1, this.mounted = !1, this.pendingEnhance &&= (this.window.cancelAnimationFrame(this.pendingEnhance), 0), this.documentClickHandler &&= (this.document.removeEventListener("click", this.documentClickHandler, !0), void 0), this.documentKeyDownHandler &&= (this.document.removeEventListener("keydown", this.documentKeyDownHandler, !0), void 0), this.documentChangeHandler &&= (this.document.removeEventListener("change", this.documentChangeHandler, !0), void 0), this.worldSelect && this.worldSelectChangeHandler && this.worldSelect.off("change.thModernWorldInfo_modern_ui", this.worldSelectChangeHandler), this.worldSelect = void 0, this.worldSelectChangeHandler = void 0, this.narrowQuery && this.narrowQueryHandler && this.narrowQuery.removeEventListener("change", this.narrowQueryHandler), this.narrowQuery = void 0, this.narrowQueryHandler = void 0, this.mobileDetailOpen = !1, this.mobileListScrollTop = 0;
		for (let e of this.document.querySelectorAll(".world_entry")) e.classList.remove(hg, gg, xg);
		return this.observedList = void 0, Bg(this.moved), this.shell?.remove(), this.shell = void 0, this.worldbar = void 0, this.toolbar = void 0, this.main = void 0, this.listPane = void 0, this.editorPane = void 0, this.moreMenu = void 0, e;
	}
	bindResponsiveMode() {
		this.narrowQuery = this.window.matchMedia("(max-width: 899.98px)"), this.narrowQueryHandler = () => this.syncResponsiveMode(), this.narrowQuery.addEventListener("change", this.narrowQueryHandler), this.syncResponsiveMode();
	}
	isNarrowMode() {
		return this.narrowQuery?.matches ?? this.window.matchMedia("(max-width: 899.98px)").matches;
	}
	syncResponsiveMode() {
		let e = this.isNarrowMode(), t = e && this.mobileDetailOpen && !!this.selectedEntry;
		this.shell?.classList.toggle(vg, e), this.findWorldInfo()?.classList.toggle(bg, t), e ? this.shell?.classList.toggle(yg, t) : (this.mobileDetailOpen = !1, this.shell?.classList.remove(yg), this.selectFirstEntry());
	}
	openMobileDetail() {
		if (!this.isNarrowMode()) return;
		let e = this.findWorldInfo();
		this.mobileListScrollTop = e?.scrollTop ?? 0, this.mobileDetailOpen = !0, this.syncResponsiveMode(), e?.scrollTo({
			top: 0,
			left: 0,
			behavior: "auto"
		});
	}
	closeMobileDetail() {
		let e = this.findWorldInfo();
		this.mobileDetailOpen = !1, this.syncResponsiveMode(), this.window.requestAnimationFrame(() => {
			this.mounted && this.isNarrowMode() && e?.scrollTo({
				top: this.mobileListScrollTop,
				left: 0,
				behavior: "auto"
			});
		});
	}
	findWorldInfo() {
		return this.document.querySelector("#WorldInfo");
	}
	findWorldPopup() {
		return this.document.querySelector("#world_popup");
	}
	findEntriesList() {
		return this.document.querySelector("#world_popup_entries_list");
	}
	ensureToolbarButtons(e, t) {
		if (this.multiButton && this.multiButton.isConnected || (this.multiButton = Vg(this.document, "menu_button th-modern-wi-multi-toggle", "多选条目", "fa-regular fa-square-check"), this.multiButton.addEventListener("click", () => this.toggleMultiSelect())), this.deleteSelectedButton && this.deleteSelectedButton.isConnected || (this.deleteSelectedButton = Vg(this.document, "menu_button th-modern-wi-delete-selected danger", "删除选中条目", "fa-regular fa-trash-can"), this.deleteSelectedButton.hidden = this.selectedUids.size === 0, this.deleteSelectedButton.addEventListener("click", () => void this.deleteSelectedEntries())), !this.moreMenu || !this.moreMenu.isConnected) {
			let e = Y(this.document, "details", "th-modern-wi-more-menu"), t = Y(this.document, "summary", "menu_button th-modern-wi-more-toggle");
			t.title = "更多条目操作", t.setAttribute("aria-label", "更多条目操作"), t.innerHTML = "<i class=\"fa-solid fa-ellipsis\" aria-hidden=\"true\"></i>";
			let n = Y(this.document, "div", "th-modern-wi-more-popover");
			e.append(t, n), e.addEventListener("click", (t) => {
				Fg(t.target)?.closest("#OpenAllWIEntries, #CloseAllWIEntries, #world_backfill_memos, #world_apply_current_sorting") && (e.open = !1);
			}), this.moreMenu = e;
		}
		let n = this.moreMenu.querySelector(".th-modern-wi-more-popover");
		if (n) for (let r of [
			"#OpenAllWIEntries",
			"#CloseAllWIEntries",
			"#world_backfill_memos",
			"#world_apply_current_sorting"
		]) {
			let i = t.querySelector(r) ?? e.querySelector(r);
			i && i.parentElement !== n && zg(i, n, this.moved);
		}
		this.multiButton.parentElement !== e && e.append(this.multiButton), this.deleteSelectedButton.parentElement !== e && e.append(this.deleteSelectedButton), this.moreMenu.parentElement !== e && e.append(this.moreMenu);
	}
	ensureLayout(e) {
		if (!this.mounted) return !1;
		let t = e ?? this.findWorldPopup();
		if (!t || !t.isConnected) return !1;
		let n = !1, r = this.findEntriesList(), i = Array.from(t.querySelectorAll(":scope > .th-modern-wi-native-shell"));
		for (let e of i) this.shell && e !== this.shell && (r && e.contains(r) || (e.remove(), n = !0));
		if (!this.shell || !this.shell.isConnected || this.shell.parentElement !== t) {
			let e = t.querySelector(":scope > .th-modern-wi-native-shell");
			e ? this.shell = e : (this.shell = Y(this.document, "div", "th-modern-wi-native-shell"), t.append(this.shell), n = !0);
		}
		let a = this.shell.querySelector(":scope > .th-modern-wi-worldbar");
		a || (a = Y(this.document, "div", "th-modern-wi-worldbar"), this.shell.prepend(a), n = !0);
		let o = this.shell.querySelector(":scope > .th-modern-wi-toolbar");
		o || (o = Y(this.document, "div", "th-modern-wi-toolbar"), a.after(o), n = !0);
		let s = this.shell.querySelector(":scope > .th-modern-wi-native-main");
		s || (s = Y(this.document, "div", "th-modern-wi-native-main"), this.shell.append(s), n = !0);
		let c = s.querySelector(":scope > .th-modern-wi-native-editor");
		c || (c = Y(this.document, "div", "th-modern-wi-native-editor"), s.append(c), n = !0);
		let l = s.querySelector(":scope > .th-modern-wi-native-list");
		l || (l = Y(this.document, "div", "th-modern-wi-native-list"), s.insertBefore(l, c), n = !0), this.worldbar = a, this.toolbar = o, this.main = s, this.listPane = l, this.editorPane = c;
		let u = [
			a,
			o,
			s
		], d = Array.from(this.shell.children).filter((e) => u.includes(e));
		if (u.some((e, t) => d[t] !== e)) {
			for (let e of u) this.shell.append(e);
			n = !0;
		}
		(s.firstElementChild !== l || s.lastElementChild !== c) && (s.append(l, c), n = !0), r && r.parentElement !== l && (zg(r, l, this.moved), n = !0);
		let f = t.querySelector("#world_create_button")?.closest(".flex-container");
		f && f.parentElement !== a && (zg(f, a, this.moved), n = !0);
		let p = t.querySelector("#world_info_search")?.closest(".flex-container");
		p && p.parentElement !== o && (zg(p, o, this.moved), n = !0), this.ensureToolbarButtons(o, t);
		let m = this.findWorldInfo()?.querySelector(":scope > .th-modern-drawer-titlebar .th-modern-drawer-actions");
		if (m) {
			let e = m.firstElementChild;
			for (let t of ["#WI_panel_pin_div", "#WorldInfoheader + .flex-container .notes-link"]) {
				let n = this.findWorldInfo()?.querySelector(t);
				n && n.parentElement !== m && zg(n, m, this.moved, e);
			}
		}
		return this.isNarrowMode() || this.multiSelect || c.childElementCount || (this.selectedEntry && this.selectedEntry.isConnected ? this.ensureEntryEditor(this.selectedEntry) : this.selectFirstEntry()), this.syncResponsiveMode(), this.observePopup(), n;
	}
	buildLayout(e, t) {
		this.ensureLayout(e);
	}
	observePopup() {
		let e = this.findWorldPopup();
		e && this.observedPopup !== e && (this.popupObserver?.disconnect(), this.observedPopup = e, this.popupObserver = new this.window.MutationObserver((e) => {
			e.some((e) => {
				if (e.type !== "childList") return !1;
				for (let t = 0; t < e.addedNodes.length; t++) {
					let n = e.addedNodes[t];
					if (n instanceof HTMLElement && (n.id === "world_popup_entries_list" || n.id === "world_create_button" || n.id === "world_info_search" || n.classList.contains("th-modern-wi-native-shell") || n.classList.contains("flex-container"))) return !0;
				}
				return !1;
			}) && this.scheduleLayoutReconciliation();
		}), this.popupObserver.observe(e, { childList: !0 }));
	}
	scheduleLayoutReconciliation() {
		this.pendingReconcileFrame ||= this.window.requestAnimationFrame(() => {
			this.pendingReconcileFrame = 0, this.mounted && this.ensureLayout();
		});
	}
	bindEvents() {
		this.documentClickHandler = (e) => {
			let t = Fg(e.target);
			this.moreMenu?.open && t && !this.moreMenu.contains(t) && (this.moreMenu.open = !1), Rg(e.target) && this.onEntryClick(e);
		}, this.documentKeyDownHandler = (e) => this.onEntryKeyDown(e), this.documentChangeHandler = (e) => {
			Fg(e.target)?.matches("#world_editor_select") && this.syncSelectedWorld();
		}, this.document.addEventListener("click", this.documentClickHandler, !0), this.document.addEventListener("keydown", this.documentKeyDownHandler, !0), this.document.addEventListener("change", this.documentChangeHandler, !0);
		let e = this.document.querySelector("#world_editor_select");
		if (e) {
			if (typeof this.window.$ != "function") throw Error("宿主页缺少世界书切换所需的 jQuery。");
			this.worldSelectChangeHandler = () => this.syncSelectedWorld(), this.worldSelect = this.window.$(e), this.worldSelect.on("change.thModernWorldInfo_modern_ui", this.worldSelectChangeHandler);
		}
		this.observer = new this.window.MutationObserver((e) => {
			e.some((e) => e.addedNodes.length > 0 || e.removedNodes.length > 0) && this.scheduleEnhance();
		}), this.observeCurrentList(), this.observePopup();
	}
	observeCurrentList() {
		if (!this.observer) return;
		let e = this.findEntriesList();
		e && this.observedList !== e && (this.observer.disconnect(), this.listPane && this.observer.observe(this.listPane, { childList: !0 }), this.observer.observe(e, { childList: !0 }), this.observedList = e);
	}
	scheduleEnhance() {
		this.mounted && !this.pendingEnhance && (this.pendingEnhance = this.window.requestAnimationFrame(() => {
			this.pendingEnhance = 0, this.mounted && (this.ensureLayout(), this.syncSelectedWorld(), this.observeCurrentList(), this.enhanceEntries(), this.restoreSelectionAfterRender());
		}));
	}
	enhanceEntries() {
		this.observeCurrentList();
		let e = this.findEntriesList();
		if (e) {
			for (let t of e.querySelectorAll(":scope > .world_entry")) if (u_(this.document, t, this.scheduleSummaryUpdate), this.multiSelect || this.selectedUids.size > 0) {
				let e = Ag(t);
				t.classList.toggle(gg, e !== void 0 && this.selectedUids.has(e));
			}
		}
	}
	restoreSelectionAfterRender() {
		this.selectedEntry?.isConnected || (this.clearSelection(), this.mobileDetailOpen = !1, this.syncResponsiveMode(), this.isNarrowMode() || this.selectFirstEntry());
	}
	syncSelectedWorld() {
		let e = jg(this.document);
		if (e !== this.selectedWorldName) {
			this.selectedWorldName = e, this.worldRevision += 1, this.clearSelection(), this.cancelPendingSummaryUpdates(), this.selectedUids.clear(), Og.clear();
			for (let e of this.document.querySelectorAll(".world_entry")) e.classList.remove(gg);
			this.updateDeleteSelectedButton();
		}
	}
	onEntryKeyDown(e) {
		if (this.deleteBusy || e.repeat || e.key !== "Enter" && e.key !== " ") return;
		let t = Fg(e.target)?.closest(".th-modern-wi-row-summary"), n = t ? Rg(t) : null;
		n && (e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), this.multiSelect ? this.toggleEntrySelected(n) : this.selectEntry(n));
	}
	onEntryClick(e) {
		if (this.deleteBusy) return;
		let t = Rg(e.target);
		if (!t) return;
		let n = Fg(e.target);
		this.nativeEditorToggleEntry === t && n?.closest(".inline-drawer-toggle") || (this.multiSelect ? (e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), this.toggleEntrySelected(t)) : (e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), this.selectEntry(t)));
	}
	selectFirstEntry() {
		if (this.selectedEntry?.isConnected) return;
		let e = this.findEntriesList()?.querySelector(".world_entry");
		e && this.selectEntry(e);
	}
	clearSelection() {
		this.cancelPendingEditorRetry(), this.cancelPendingSummaryUpdates(this.selectedEntry), this.selectedEntry?.classList.remove(xg), this.detachEntryEditor(), this.selectedEntry?.classList.remove(hg), this.selectedEntry = void 0;
	}
	selectEntry(e) {
		this.selectedEntry === e ? (this.editorPane?.childElementCount || this.ensureEntryEditor(e), this.openMobileDetail()) : (this.clearSelection(), this.selectedEntry = e, e.classList.add(hg), this.ensureEntryEditor(e), this.openMobileDetail());
	}
	ensureEntryEditor(e) {
		if (e.classList.contains(xg)) return;
		if (this.cancelPendingEditorRetry(), u_(this.document, e, this.scheduleSummaryUpdate), h_(this.document, e, this.scheduleSummaryUpdate)) {
			this.attachEntryEditor(e);
			return;
		}
		let t = e.querySelector(":scope > form.world_entry_form > .inline-drawer > .inline-drawer-header .inline-drawer-toggle"), n = e.querySelector(":scope > form.world_entry_form > .inline-drawer > .inline-drawer-content.inline-drawer-outlet");
		if (t && !n?.querySelector(".world_entry_edit")) {
			this.nativeEditorToggleEntry = e;
			try {
				t.click();
			} finally {
				this.nativeEditorToggleEntry = void 0;
			}
			e.classList.add(xg);
		}
		let r = 0, i = this.editorRetryRevision, a = () => {
			this.mounted && this.selectedEntry === e && i === this.editorRetryRevision && (r += 1, h_(this.document, e, this.scheduleSummaryUpdate) ? (e.classList.remove(xg), this.attachEntryEditor(e)) : r > 20 ? e.classList.remove(xg) : this.pendingEditorRetry = this.window.setTimeout(() => {
				this.pendingEditorRetry = 0, a();
			}, 50));
		};
		a();
	}
	cancelPendingEditorRetry() {
		this.editorRetryRevision += 1, this.pendingEditorRetry &&= (this.window.clearTimeout(this.pendingEditorRetry), 0);
	}
	cancelPendingSummaryUpdates(e) {
		if (e) {
			let t = this.pendingSummaryUpdates.get(e);
			t !== void 0 && (this.window.cancelAnimationFrame(t), this.pendingSummaryUpdates.delete(e));
		} else {
			for (let e of this.pendingSummaryUpdates.values()) this.window.cancelAnimationFrame(e);
			this.pendingSummaryUpdates.clear();
		}
	}
	detachEntryEditor() {
		let e = this.selectedEntry;
		for (let e of this.editorMoved) e.node.nodeType === 1 && e.node.classList.remove("th-modern-wi-active-editor-content");
		Bg(this.editorMoved), e && l_(e), this.editorPane?.replaceChildren();
	}
	attachEntryEditor(e) {
		if (!this.editorPane || this.selectedEntry !== e) return;
		let t = e.querySelector(":scope > form.world_entry_form > .inline-drawer > .inline-drawer-content.inline-drawer-outlet");
		if (!t || t.closest(".th-modern-wi-native-editor")) return;
		this.detachEntryEditor();
		let n = Vg(this.document, "menu_button th-modern-wi-mobile-back", "返回世界书条目列表", "fa-solid fa-arrow-left");
		n.append(Y(this.document, "span", "", "返回条目列表")), n.addEventListener("click", (e) => {
			e.preventDefault(), this.closeMobileDetail();
		});
		let r = Y(this.document, "div", `${e.className} th-modern-wi-editor-entry-host`);
		for (let t of Array.from(e.attributes)) t.name !== "class" && r.setAttribute(t.name, t.value);
		let i = Y(this.document, "form", "world_entry_form"), a = Y(this.document, "div", "inline-drawer"), o = () => l_(e, r);
		r.addEventListener("input", o), r.addEventListener("change", o), i.append(a), r.append(i), this.editorPane.replaceChildren(n, r), t.classList.add("th-modern-wi-active-editor-content"), zg(t, a, this.editorMoved), l_(e, r);
	}
	toggleMultiSelect() {
		if (!this.deleteBusy) {
			if (this.multiSelect = !this.multiSelect, this.findWorldInfo()?.classList.toggle(_g, this.multiSelect), this.multiButton?.classList.toggle("active", this.multiSelect), !this.multiSelect) {
				this.selectedUids.clear();
				for (let e of this.document.querySelectorAll(".world_entry")) e.classList.remove(gg);
			}
			this.updateDeleteSelectedButton();
		}
	}
	toggleEntrySelected(e) {
		let t = Ag(e);
		t !== void 0 && (this.selectedUids.has(t) ? (this.selectedUids.delete(t), e.classList.remove(gg)) : (this.selectedUids.add(t), e.classList.add(gg)), this.updateDeleteSelectedButton());
	}
	updateDeleteSelectedButton() {
		if (!this.deleteSelectedButton) return;
		let e = this.selectedUids.size;
		this.deleteSelectedButton.hidden = !this.multiSelect || e === 0, this.deleteSelectedButton.title = `删除选中条目 (${e})`, this.deleteSelectedButton.setAttribute("aria-label", this.deleteSelectedButton.title);
	}
	setDeleteBusy(e) {
		if (this.deleteBusy = e, this.shell && (this.shell.inert = e, e ? this.shell.setAttribute("aria-busy", "true") : this.shell.removeAttribute("aria-busy")), this.multiButton && (this.multiButton.disabled = e), this.deleteSelectedButton && (this.deleteSelectedButton.disabled = e, e ? this.deleteSelectedButton.setAttribute("aria-busy", "true") : this.deleteSelectedButton.removeAttribute("aria-busy")), e) {
			let e = this.document.querySelector("#world_editor_select");
			e && (this.lockedWorldSelect = {
				element: e,
				wasDisabled: e.disabled
			}, e.disabled = !0);
		} else this.lockedWorldSelect &&= (this.lockedWorldSelect.element.disabled = this.lockedWorldSelect.wasDisabled, void 0);
	}
	isDeleteContextCurrent(e, t) {
		return this.mounted && this.worldRevision === t && jg(this.document) === e;
	}
	async deleteSelectedEntries() {
		if (this.deleteBusy) return;
		let e = Array.from(this.selectedUids);
		if (!e.length) return;
		let t = jg(this.document);
		if (!t) {
			toastr.error("无法确定当前正在编辑的世界书");
			return;
		}
		let n = this.worldRevision, r = e.map((e) => this.document.querySelector(`.world_entry[uid="${e}"]`)).filter((e) => !!e).map((e) => o_(e)).slice(0, 5).join("、"), i = e.length > 5 ? ` 等 ${e.length} 项` : "", a = `确认删除 ${e.length} 个世界书条目？\n${r}${i}`;
		if (!this.window.confirm(a) || !this.isDeleteContextCurrent(t, n)) return;
		let o = new Set(e);
		this.setDeleteBusy(!0);
		let s;
		try {
			if (s = await SillyTavern.loadWorldInfo(t), !this.isDeleteContextCurrent(t, n)) return;
			if (!s) throw Error(`无法读取世界书“${t}”`);
			let e = JSON.stringify(s), r = this.window.SillyTavern?.getContext?.()?.getRequestHeaders?.();
			if (!r) throw Error("宿主不支持验证世界书版本，请使用原生删除功能");
			let i = await this.window.fetch("/api/worldinfo/get", {
				method: "POST",
				headers: r,
				body: JSON.stringify({ name: t }),
				cache: "no-cache"
			});
			if (!i.ok) throw Error("无法验证世界书是否被其他窗口修改");
			if (fg(e, await i.json(), s)) throw Error("世界书已更改，请检查并刷新后重试");
			let a = Pg(s, o, this.window);
			if (!this.isDeleteContextCurrent(t, n) || (await SillyTavern.saveWorldInfo(t, a, !0), !this.isDeleteContextCurrent(t, n))) return;
		} catch (e) {
			console.error("[现代化界面] 世界书批量删除失败", e), toastr.error(`删除世界书条目失败：${Ng(e)}`);
			return;
		} finally {
			this.setDeleteBusy(!1);
		}
		if (this.isDeleteContextCurrent(t, n)) {
			this.clearSelection(), this.selectedUids.clear();
			for (let e of this.document.querySelectorAll(".world_entry")) e.classList.remove(gg);
			this.updateDeleteSelectedButton();
			try {
				await SillyTavern.reloadWorldInfoEditor(t, !0);
			} catch (e) {
				console.error("[现代化界面] 世界书删除成功，但编辑器刷新失败", e), toastr.error("条目已删除，但世界书编辑器刷新失败，请手动刷新");
			}
		}
	}
};
function __(e) {
	let t = z(), n = B(), r, i, a = null, o = 0, s = () => t.querySelector("#WorldInfo"), c = () => {
		let e = r?.destroy() ?? !1;
		return r = void 0, e;
	}, l = (t, n) => {
		!t || !n ? (i?.destroy(), i = void 0) : i ? i.setEnabled(n) : i = dg({
			enabled: n,
			onEnabledChange: (t) => {
				e.settings.modernWorldSelect = t;
			}
		});
	}, u = () => {
		o = 0;
		let n = e.is_active && e.settings.modernWorldInfoEditor;
		l(n, e.settings.modernWorldSelect);
		let i = s();
		m(i);
		let a = i?.classList.contains("openDrawer") ?? !1;
		i?.classList.toggle(pg, n && (a || !!r)), n && a ? (r ??= new g_(), r.mount(), r.ensureLayout()) : !n && c() && v_(t);
	}, d = (e) => {
		Fg(e.target)?.closest("#WIDrawerIcon, .drawer-toggle, [data-target=\"WorldInfo\"]") && (n.requestAnimationFrame(() => {
			r?.isMounted() && r.ensureLayout();
		}), n.setTimeout(() => {
			r?.isMounted() && r.ensureLayout();
		}, 180));
	};
	t.addEventListener("click", d, !0);
	let f = () => {
		o ||= n.requestAnimationFrame(u);
	}, p = new n.MutationObserver(f);
	function m(e) {
		e !== a && (p.disconnect(), a = e, e && p.observe(e, {
			attributes: !0,
			attributeFilter: ["class"]
		}));
	}
	let h = Xn(() => [
		e.is_active,
		e.settings.modernWorldInfoEditor,
		e.settings.modernWorldSelect
	], f, { immediate: !0 });
	return { destroy() {
		h(), p?.disconnect(), t.removeEventListener("click", d, !0), o &&= (n.cancelAnimationFrame(o), 0), s()?.classList.remove(pg), i?.destroy(), i = void 0, c() && v_(t);
	} };
}
function v_(e) {
	let t = jg(e);
	if (t) try {
		SillyTavern.reloadWorldInfoEditor(t, !0);
	} catch (e) {
		console.error("[现代化界面] 恢复原生世界书编辑器失败", e), toastr.error("恢复原生世界书编辑器失败，请手动刷新");
	}
}
// src/index.ts
var y_ = "th-modern-enabled", b_ = "th-modern-persona-management", x_ = "th-modern-two-column", S_ = "th-modern-three-column", C_ = "th-modern-docked-drawer", w_ = "th-modern-main-fill", T_ = "th-modern-floating-input", E_ = "th-modern-single-line-input", D_ = "th-modern-reduce-motion", O_ = "th-modern-reduce-advanced-effects", k_ = "th-modern-sidebar-collapsed", A_ = "th-modern-auto-collapse", j_ = "th-modern-sidebar-temp-expanded", M_ = "th-modern-resizing", N_ = "th-modern-drawer-fullscreen", P_ = "th-modern-drawer-open", F_ = "th-modern-drawer-switching", I_ = "th-modern-quick-replies-collapsed", L_ = "th-modern-sidebar", R_ = "th-modern-sidebar-resize-handle", z_ = "th-modern-overlay-resize-handle", B_ = "th-modern-quick-reply-toggle", V_ = "th-modern-topbar-label", H_ = "th-modern-drawer-titlebar", U_ = "th-modern-drawer-title", W_ = "th-modern-drawer-actions", G_ = "th-modern-drawer-close", K_ = "th-modern-drawer-fullscreen-toggle", q_ = "th-modern-drawer-fullscreen-content", J_ = "th-modern-drawer-active", Y_ = "thModernFullscreenPinned", X_ = "thModernFullscreenWasPinned", Z_ = "thModernDockedPinned", Q_ = "thModernDockedWasPinned", $_ = "th-modern-api-source-group", ev = "th-modern-api-footer", tv = "th-reset", nv = "th-modern-failsafe-shortcut", rv = "SillyTavern", iv = "TavernHelper.modernLayout.dispose", av = "TavernHelper.modernLayout.runtimes", ov = "TavernHelper.modernLayout.sidebarCollapsed", sv = "TavernHelper.modernLayout.recentCollapsed", cv = 15, lv = "(min-width: 900px) and (max-width: 1199.98px)", uv = "(min-width: 900px)", dv = 320, fv = 460, pv = 720, mv = 24, hv = 480, gv = 1e3, _v = "--th-modern-left-nav-height", vv = "--th-modern-input-height", yv = "--th-modern-input-stack-offset", bv = "--th-modern-quick-reply-max-height", xv = "--th-modern-quick-reply-reserve-height", Sv = 66, Cv = 240, wv = 44, Tv = 12, Ev = "modern-ui", Dv = "1.0.0", Ov = !1;
function kv(e, t, n, r) {
	return typeof e != "number" || !Number.isFinite(e) ? r : Math.min(Math.max(e, t), n);
}
function Av() {
	let e = z();
	return e.body ? [e.documentElement, e.body] : [e.documentElement];
}
function jv() {
	return B().localStorage;
}
function Mv(e) {
	try {
		return jv()?.getItem(e) === "true";
	} catch (e) {
		return console.warn(`[${Um}] 读取浏览器状态失败。`, e), !1;
	}
}
function Nv(e, t) {
	try {
		jv()?.setItem(e, String(t));
	} catch (e) {
		console.warn(`[${Um}] 保存浏览器状态失败。`, e);
	}
}
function Pv(e, t) {
	Av().forEach((n) => {
		n.style.getPropertyValue(e) !== t && n.style.setProperty(e, t);
	});
}
function Z(e) {
	Av().forEach((t) => {
		t.style.getPropertyValue(e) && t.style.removeProperty(e);
	});
}
function Fv(e, t) {
	let n = Number.parseFloat(e);
	return Number.isFinite(n) ? n : t;
}
function Iv(e, t, n) {
	e.forEach((e) => {
		e.style.getPropertyValue(t) !== n && e.style.setProperty(t, n);
	});
}
function Q() {
	let e = B?.() ?? window, t = e.SillyTavern ?? (typeof SillyTavern < "u" ? SillyTavern : void 0), n;
	if (typeof t?.getContext == "function") try {
		n = t.getContext();
	} catch {
		n = void 0;
	}
	return n && typeof n == "object" || (n = t ?? e), Array.isArray(n.characters) || (n.characters = Bv()), Array.isArray(n.groups) || (n.groups = Vv()), n.characterId === void 0 && (n.characterId = e.this_chid ?? e.characterId), n.groupId === void 0 && (n.groupId = e.selected_group ?? e.groupId), typeof n.getCurrentChatId != "function" && (n.getCurrentChatId = () => e.getCurrentChatId?.() ?? e.selected_and_active_chat), n;
}
function Lv() {
	let e, t = !1, n = async () => {
		let e = B(), n = z().baseURI || e.location.href, r = new URL("script.js", n).href, i = new URL("scripts/group-chats.js", n).href, a = e.Function, [o, s] = await a("mainModuleUrl", "groupModuleUrl", "return Promise.all([import(mainModuleUrl), import(groupModuleUrl)]);")(r, i), c = o, l = s;
		if (typeof c.selectCharacterById != "function" || typeof c.isGenerating != "function" || typeof c.isChatSaving != "boolean" || typeof c.setActiveCharacter != "function" || typeof c.setActiveGroup != "function" || typeof l.openGroupChat != "function" || typeof l.openGroupById != "function") throw Error("当前 SillyTavern 缺少最近聊天所需的导航能力。");
		if (t) throw new DOMException("导航桥已销毁。", "AbortError");
		let u = c.isGenerating, d = c.setActiveCharacter, f = c.setActiveGroup, p = l.openGroupById, m = () => {
			if (c.isChatSaving) throw Error("聊天仍在保存，请稍后再切换。");
			if (u()) throw Error("正在生成回复，当前不能切换聊天。");
		};
		return {
			openGroupById: async (e) => (m(), p(e)),
			setActiveCharacter: (e) => {
				m(), d(e);
			},
			setActiveGroup: (e) => {
				m(), f(e);
			}
		};
	};
	return {
		get: () => t ? Promise.reject(new DOMException("导航桥已销毁。", "AbortError")) : (e ??= n().catch((t) => {
			throw e = void 0, t;
		}), e),
		destroy: () => {
			t = !0, e = void 0;
		}
	};
}
function Rv(e) {
	return e instanceof DOMException && e.name === "AbortError";
}
function zv() {
	let e = window.SillyTavern?.getContext?.(), t = (window.SillyTavern?.accountStorage ?? e?.accountStorage ?? window.accountStorage ?? localStorage)?.getItem?.("pinnedChats");
	if (typeof t != "string") return [];
	try {
		let e = JSON.parse(t);
		return !e || typeof e != "object" ? [] : Object.values(e).filter((e) => !e || typeof e != "object" ? !1 : typeof e.file_name == "string");
	} catch (e) {
		return console.warn(`[${Um}] 读取最近聊天置顶状态失败。`, e), [];
	}
}
function Bv() {
	let e = B?.() ?? window, t = e.SillyTavern ?? (typeof SillyTavern < "u" ? SillyTavern : void 0), n = t?.getContext?.();
	return Array.isArray(n?.characters) ? n.characters : Array.isArray(e.characters) ? e.characters : Array.isArray(t?.characters) ? t.characters : Array.isArray(window.characters) ? window.characters : [];
}
function Vv() {
	let e = B?.() ?? window, t = e.SillyTavern ?? (typeof SillyTavern < "u" ? SillyTavern : void 0), n = t?.getContext?.();
	return Array.isArray(n?.groups) ? n.groups : Array.isArray(e.groups) ? e.groups : Array.isArray(t?.groups) ? t.groups : Array.isArray(window.groups) ? window.groups : [];
}
function Hv(e) {
	if (e) return Bv().find((t) => t?.avatar === e);
}
function Uv(e) {
	if (e) return Vv().find((t) => t?.id === e);
}
function Wv(e) {
	if (!e) return;
	let t = window.SillyTavern?.getContext?.(), n = window.SillyTavern?.timestampToMoment ?? t?.timestampToMoment;
	if (typeof n == "function") try {
		return n(e);
	} catch {}
	let r = window.moment;
	if (typeof r == "function") try {
		return r(e);
	} catch {}
}
function Gv(e, t) {
	if (!t) return "img/groupchat.png";
	let n = window.SillyTavern?.getContext?.(), r = window.SillyTavern?.getThumbnailUrl ?? n?.getThumbnailUrl ?? window.getThumbnailUrl;
	if (typeof r == "function") try {
		return r(e, t);
	} catch {}
	return t.startsWith("http://") || t.startsWith("https://") || t.startsWith("/") ? t : `/characters/${encodeURIComponent(t)}`;
}
function Kv(e) {
	let t = Hv(e.avatar), n = Uv(e.group);
	if (!t && !n) return;
	let r = e.chat_name ?? e.file_name.replace(/\.jsonl$/i, ""), i = Wv(e.last_mes), a = "", o = "";
	if (i?.format) try {
		a = i.format("l"), o = i.format("LL LT");
	} catch {}
	else if (e.last_mes) try {
		let t = new Date(e.last_mes);
		isNaN(t.getTime()) || (a = t.toLocaleDateString(), o = t.toLocaleString());
	} catch {}
	return {
		...e,
		chat_name: r,
		char_name: t?.name ?? String(n?.name ?? ""),
		char_thumbnail: t ? Gv("avatar", t.avatar) : "img/groupchat.png",
		date_short: a,
		date_long: o,
		is_group: !!n,
		avatar: e.avatar ?? "",
		group: e.group ?? "",
		pinned: !!e.pinned,
		mes: e.mes ?? "",
		chat_items: e.chat_items ?? 0,
		file_size: e.file_size ?? "",
		last_mes: e.last_mes ?? ""
	};
}
function qv() {
	let e = window.SillyTavern?.getContext?.();
	return typeof window.SillyTavern?.getRequestHeaders == "function" ? window.SillyTavern.getRequestHeaders() : typeof e?.getRequestHeaders == "function" ? e.getRequestHeaders() : typeof window.getRequestHeaders == "function" ? window.getRequestHeaders() : {
		"Content-Type": "application/json",
		"X-CSRF-Token": window.token || ""
	};
}
async function Jv(e) {
	let t = await fetch("/api/chats/recent", {
		method: "POST",
		headers: qv(),
		body: JSON.stringify({
			max: cv,
			pinned: zv()
		}),
		cache: "no-cache",
		signal: e
	});
	if (!t.ok) throw Error(`HTTP ${t.status}`);
	let n = await t.json();
	return Array.isArray(n) ? n.map((e) => Kv(e)).filter((e) => e !== void 0).slice(0, cv) : [];
}
function Yv(e) {
	return (e ?? "").replace(/\.jsonl$/i, "");
}
async function Xv(e, t) {
	let n = await fetch("/api/characters/chats", {
		method: "POST",
		headers: qv(),
		body: JSON.stringify({
			avatar_url: e,
			simple: !0
		}),
		cache: "no-cache"
	});
	if (!n.ok) throw Error(`读取角色聊天列表失败（HTTP ${n.status}）`);
	let r = await n.json();
	return !r || typeof r != "object" ? !1 : (Array.isArray(r) ? r : Object.values(r)).some((e) => {
		if (!e || typeof e != "object") return !1;
		let n = e, r = typeof n.file_id == "string" ? n.file_id : void 0, i = typeof n.file_name == "string" ? n.file_name : void 0;
		return Yv(r ?? i) === t;
	});
}
function Zv(e) {
	let t = Q(), n = Yv(e.chat_name ?? e.file_name);
	if (!n || Yv(t.getCurrentChatId?.()) !== n) return !1;
	if (e.is_group && e.group) return String(t.groupId ?? "") === e.group;
	if (!e.avatar || t.groupId) return !1;
	let r = (Array.isArray(t.characters) ? t.characters : Bv()).findIndex((t) => t?.avatar === e.avatar);
	return r !== -1 && String(t.characterId) === String(r);
}
function Qv(e, t) {
	let n = $("<button>").attr({
		type: "button",
		title: e.date_long ? `${e.char_name} - ${e.chat_name}\n${e.date_long}` : `${e.char_name} - ${e.chat_name}`
	}).addClass("th-modern-recent-chat").toggleClass("is-current", Zv(e)).on("click", () => t(e)), r = $("<span>").addClass("th-modern-recent-avatar");
	$("<img>").attr({
		src: e.char_thumbnail || "img/ai4.png",
		alt: e.char_name || "聊天头像"
	}).appendTo(r);
	let i = $("<span>").addClass("th-modern-recent-main");
	$("<span>").addClass("th-modern-recent-title").text(e.char_name ? `${e.char_name} - ${e.chat_name}` : e.chat_name ?? e.file_name).appendTo(i), $("<span>").addClass("th-modern-recent-message").text(e.mes || "无最近消息").appendTo(i);
	let a = $("<span>").addClass("th-modern-recent-meta");
	return $("<span>").text(e.date_short ?? "").appendTo(a), $("<span>").text(`${e.chat_items ?? 0} 条`).appendTo(a), n.append(r, i, a);
}
async function $v(e, t, n) {
	let r = Yv(e.chat_name ?? e.file_name);
	if (!r) throw Error("最近聊天缺少聊天文件名。");
	let i = B?.() ?? window, a = Q(), o = i.SillyTavern?.saveSettingsDebounced ?? a?.saveSettingsDebounced ?? i.saveSettingsDebounced, s = i.SillyTavern?.openGroupChat ?? a?.openGroupChat ?? i.openGroupChat, c = i.SillyTavern?.selectCharacterById ?? a?.selectCharacterById ?? i.selectCharacterById, l = i.SillyTavern?.openCharacterChat ?? a?.openCharacterChat ?? i.openCharacterChat;
	if (e.is_group && e.group) {
		if (!Uv(e.group)) throw Error("未找到对应群组。");
		if (String(Q().groupId ?? "") !== e.group) {
			let r = await t.openGroupById(e.group);
			if (n(), !r && String(Q().groupId ?? "") !== e.group) throw Error("群组切换被聊天保存或生成状态阻止。");
		}
		if (String(Q().groupId ?? "") !== e.group) throw Error("群组未能正确激活。");
		if (t.setActiveGroup(e.group), o?.(), Yv(Q().getCurrentChatId?.()) !== r && (await s?.(e.group, r), n()), String(Q().groupId ?? "") !== e.group || Yv(Q().getCurrentChatId?.()) !== r) throw Error("群组聊天不存在或未能正确打开。");
	} else if (e.avatar) {
		let i = () => {
			let e = Q().characters;
			return Array.isArray(e) ? e : Bv();
		}, a = i().findIndex((t) => t?.avatar === e.avatar);
		if (a === -1) throw Error("未找到对应角色。");
		if (!await Xv(e.avatar, r)) throw n(), Error("角色聊天已不存在。");
		if (n(), a = i().findIndex((t) => t?.avatar === e.avatar), a === -1) throw Error("角色已不存在。");
		await c?.(a), n();
		let s = i()[Number(Q().characterId)];
		if (Q().groupId || s?.avatar !== e.avatar) throw Error("角色切换被聊天保存或生成状态阻止。");
		if (t.setActiveCharacter(e.avatar), o?.(), Yv(Q().getCurrentChatId?.()) !== r) {
			if (!await Xv(e.avatar, r)) throw n(), Error("角色聊天已不存在。");
			if (n(), Q().groupId || i()[Number(Q().characterId)]?.avatar !== e.avatar) throw Error("角色已不再处于激活状态。");
			t.setActiveCharacter(e.avatar), await l?.(r), n();
		}
		let u = i()[Number(Q().characterId)];
		if (Q().groupId || u?.avatar !== e.avatar || Yv(Q().getCurrentChatId?.()) !== r) throw Error("角色聊天未能正确打开。");
	} else throw Error("最近聊天缺少角色或群组标识。");
}
function ey(e, t) {
	let n = String(e ?? "").replace(/\s+/g, " ").trim();
	if (n) {
		if (t === "version") {
			let e = n.match(/^(.+?)\s+v?\d+(?:\.\d+){1,3}(?:[-+][0-9a-z.-]+)?(?:\s|$)/i);
			if (!e) return;
			n = e[1].trim();
		} else t === "logo" && (n = n.replace(/\s+(?:logo|徽标|標誌|标志)$/i, "").trim());
		if (!(!n || n.length > 64 || n.includes("://"))) return n;
	}
}
function ty(e = z()) {
	for (let t of [
		".welcomeHeaderVersionDisplay",
		"#version_display_welcome",
		"#version_display"
	]) {
		let n = ey(e.querySelector(t)?.textContent, "version");
		if (n) return n;
	}
	return ey(e.querySelector("meta[name=\"application-name\"]")?.content, "plain") || ey(e.querySelector(".welcomePanel .welcomeHeaderLogo")?.alt, "logo") || (ey(e.title, "plain") ?? rv);
}
function ny(e) {
	let t = B(), n = z(), r = $("<div>").attr("id", L_).addClass("th-modern-sidebar recentChat"), i = $("<div>").addClass("th-modern-sidebar-brand"), a = $("<span>").addClass("th-modern-brand-main").appendTo(i), o = $("<img>").addClass("th-modern-brand-logo welcomeHeaderLogo").attr("src", "img/logo.png").appendTo(a), s = $("<span>").addClass("th-modern-brand-name").appendTo(a), c = () => {
		let e = ty(n);
		s.text(e), o.attr("alt", `${e} Logo`);
	};
	c();
	let l = new t.MutationObserver(c);
	[
		".welcomeHeaderVersionDisplay",
		"#version_display_welcome",
		"#version_display"
	].forEach((e) => {
		let t = n.querySelector(e);
		t && l.observe(t, {
			childList: !0,
			characterData: !0,
			subtree: !0
		});
	});
	let u = $("<button>").attr({
		type: "button",
		title: "折叠侧边栏",
		"aria-pressed": "false"
	}).addClass("th-modern-icon-button th-modern-sidebar-toggle fa-solid fa-chevron-left").appendTo(i), d = $("<section>").addClass("th-modern-recent-section"), f = `${L_}-recent-list`, p = $("<div>").addClass("th-modern-section-header"), m = $("<span>").addClass("th-modern-section-actions"), h = $("<button>").attr({
		type: "button",
		title: "折叠最近聊天",
		"aria-controls": f,
		"aria-expanded": "true"
	}).addClass("th-modern-section-title th-modern-recent-toggle"), g = $("<span>").attr("aria-hidden", "true").addClass("th-modern-icon-button th-modern-recent-collapse fa-solid fa-chevron-up").appendTo(h);
	$("<span>").addClass("th-modern-section-label").text("最近聊天").appendTo(h);
	let v = (e, t = !0) => {
		$(z().body).toggleClass(k_, e), $(z().body).removeClass(j_), r.toggleClass("is-collapsed", e), y(), t && Nv(ov, e);
	}, y = () => {
		let e = z().body, t = e.classList.contains(k_), n = e.classList.contains(A_) && !e.classList.contains(j_), r = t || n;
		u.toggleClass("fa-chevron-left", !r).toggleClass("fa-chevron-right", r).attr({
			title: r ? "展开侧边栏" : "折叠侧边栏",
			"aria-pressed": String(r)
		});
	}, b = (e, t = !0) => {
		let n = e ? "展开最近聊天" : "折叠最近聊天";
		d.toggleClass("is-collapsed", e), h.attr({
			title: n,
			"aria-expanded": String(!e)
		}), g.toggleClass("fa-chevron-up", !e).toggleClass("fa-chevron-down", e), t && Nv(sv, e);
	}, x = () => {
		b(!d.hasClass("is-collapsed"));
	};
	u.on("click", (e) => {
		e.preventDefault(), e.stopPropagation();
		let t = z().body;
		t.classList.contains(A_) && !t.classList.contains(k_) ? (t.classList.toggle(j_), y()) : v(!t.classList.contains(k_));
	}), h.on("click", (e) => {
		e.preventDefault(), x();
	});
	let S = $("<button>").attr({
		type: "button",
		title: "刷新最近聊天"
	}).addClass("th-modern-icon-button fa-solid fa-rotate-right").on("click", (t) => {
		t.preventDefault(), e();
	});
	m.append(S), p.append(h, m);
	let C = $("<div>").attr("id", f).addClass("th-modern-recent-list");
	d.append(p, C), r.append(i, d).appendTo("body");
	let w = new t.MutationObserver(y);
	return w.observe(z().body, {
		attributes: !0,
		attributeFilter: ["class"]
	}), v(Mv(ov), !1), b(Mv(sv), !1), y(), {
		$list: C,
		destroy: () => {
			w.disconnect(), l.disconnect(), $(z().body).removeClass(k_), r.remove();
		}
	};
}
function ry(e) {
	e.empty().append($("<div>").addClass("th-modern-recent-state").text("正在读取最近聊天..."));
}
function iy(e, t) {
	let n = t instanceof Error ? t.message : String(t);
	e.empty().append($("<div>").addClass("th-modern-recent-state").text(`读取失败：${n}`));
}
function ay(e) {
	let t = Lv(), n, r = 0, i = 0, a = !1, o = !1, s = (t) => {
		a = t, e.toggleClass("is-navigating", t).attr("aria-busy", String(t)), e.find("button").prop("disabled", t);
	}, c = (e) => {
		if (o || a || Zv(e)) return;
		let n = ++i, r = () => {
			if (o || n !== i) throw new DOMException("导航已取消。", "AbortError");
		};
		s(!0), t.get().then(async (t) => {
			r(), await $v(e, t, r);
		}).catch((e) => {
			if (Rv(e)) return;
			let t = e instanceof Error ? e.message : String(e);
			toastr.error(`打开最近聊天失败：${t}`, Um), console.error(`[${Um}] 打开最近聊天失败。`, e);
		}).finally(() => {
			!o && n === i && s(!1);
		});
	};
	return {
		refresh: () => {
			if (o) return;
			n?.abort(), n = new AbortController();
			let t = ++r;
			ry(e), Jv(n.signal).then((n) => {
				o || t !== r || (e.empty(), n.length === 0 ? e.append($("<div>").addClass("th-modern-recent-state").text("暂无最近聊天")) : (n.forEach((t) => {
					e.append(Qv(t, c));
				}), a && s(!0)));
			}).catch((n) => {
				o || t !== r || Rv(n) || iy(e, n);
			});
		},
		destroy: () => {
			o = !0, r += 1, i += 1, n?.abort(), n = void 0, t.destroy(), s(!1);
		}
	};
}
function oy(e) {
	let t = e.children(".drawer-icon").first();
	return String(t.attr("title") || e.attr("title") || e.text()).trim();
}
function sy() {
	return z().querySelector(`#top-settings-holder > .drawer > .drawer-content.${q_}`) ?? void 0;
}
function cy() {
	let e = sy();
	$(`.${K_}`, z()).each((t, n) => {
		let r = Ov && !!(e && $(n).closest(".drawer-content")[0] === e);
		$(n).toggleClass("is-fullscreen", r).toggleClass("fa-expand", !r).toggleClass("fa-compress", r).attr({
			title: r ? "恢复面板宽度" : "全屏显示面板",
			"aria-label": r ? "恢复面板宽度" : "全屏显示面板"
		});
	});
}
function ly(e) {
	let t = z(), n = e === void 0 ? !!t.querySelector("#top-settings-holder > .drawer > .drawer-content.openDrawer") : e.length > 0;
	t.body.classList.contains(P_) !== n && t.body.classList.toggle(P_, n);
}
function uy(e) {
	if (e.dataset[Q_] === void 0) {
		let t = e.classList.contains("pinnedOpen");
		e.dataset[Q_] = String(t), t || (e.dataset[Z_] = "true");
	}
	e.classList.add("pinnedOpen");
}
function dy(e) {
	if (e.dataset[Q_] === void 0) return;
	let t = e.dataset[Q_] === "true";
	e.dataset[Z_] === "true" ? e.classList.remove("pinnedOpen") : t && e.classList.add("pinnedOpen"), delete e.dataset[Z_], delete e.dataset[Q_];
}
function fy(e) {
	let t = z(), n = t.body.classList.contains(C_), r = new Set(e);
	t.querySelectorAll("#top-settings-holder > .drawer > .drawer-content").forEach((e) => {
		n && r.has(e) ? uy(e) : e.classList.contains(q_) || dy(e);
	});
}
function py() {
	let e = sy();
	if (e) {
		let t = e.dataset[X_] === "true", n = e.dataset[X_] === void 0 || !t;
		$(e).removeClass(q_), n ? $(e).removeClass("pinnedOpen") : t && $(e).addClass("pinnedOpen"), delete e.dataset[Y_], delete e.dataset[X_];
	}
	z().body.classList.remove(N_), ly();
}
function my() {
	Ov = !1, py(), cy();
}
function hy(e) {
	let t = sy();
	if (t && t !== e && py(), !(e instanceof (z().defaultView ?? window).HTMLElement)) return;
	let n = z().body, r = $(e);
	if (e.dataset[X_] === void 0) {
		let t = r.hasClass("pinnedOpen");
		e.dataset[X_] = String(t), t || (e.dataset[Y_] = "true");
	}
	r.addClass(`${q_} pinnedOpen openDrawer`).removeClass("closedDrawer");
	let i = r.closest(".drawer").find(".drawer-icon").first();
	i.hasClass("closedIcon") && i.removeClass("closedIcon").addClass("openIcon"), n.classList.add(N_), ly([e]), n.classList.contains(A_) && !n.classList.contains(k_) && n.classList.add(j_), cy();
}
function gy(e, t) {
	Ov = t, t ? hy(e) : my();
}
function _y(e) {
	sy() === e && py();
	let t = $(e);
	if (!t.hasClass("openDrawer")) return;
	dy(e), t.removeClass("openDrawer pinnedOpen").addClass("closedDrawer");
	let n = t.closest(".drawer").find(".drawer-icon").first();
	n.hasClass("openIcon") && n.removeClass("openIcon").addClass("closedIcon"), ly();
}
function vy(e) {
	let t = z(), n = t.defaultView ?? window, r = /* @__PURE__ */ new Map(), i = 0, a, o = 0, s, c = (e, n) => {
		n?.classList.contains("openDrawer") ? s = n : s?.isConnected && s.classList.contains("openDrawer") || (s = e[e.length - 1]);
		let r = e.length > 1;
		t.querySelectorAll("#top-settings-holder > .drawer > .drawer-content").forEach((e) => e.classList.toggle(J_, r && e === s));
	}, l = () => {
		o !== 0 && (n.clearTimeout(o), o = 0), a = void 0, t.body.classList.remove(F_);
	}, u = (e) => {
		a = e, t.body.classList.add(F_), o !== 0 && n.clearTimeout(o), o = n.setTimeout(() => {
			o = 0, a = void 0, t.body.classList.remove(F_), ly();
		}, gv);
	}, d = () => {
		i === 0 && (i = n.requestAnimationFrame(() => {
			i = 0, f();
		}));
	}, f = () => {
		let e = sy(), n = Array.from(t.querySelectorAll("#top-settings-holder > .drawer > .drawer-content.openDrawer"));
		if (c(n), fy(n), ly(n), a && (!a.isConnected || a.classList.contains("openDrawer")) && l(), !e) {
			if (t.body.classList.contains(N_) && t.body.classList.remove(N_), Ov && n[0]) {
				hy(n[0]);
				return;
			}
			cy();
			return;
		}
		if (!e.isConnected || !e.classList.contains("openDrawer")) {
			py(), Ov && n[0] ? hy(n[0]) : cy();
			return;
		}
		let r = n.find((t) => t !== e);
		r && (py(), _y(e), Ov ? hy(r) : cy());
	}, p = () => {
		$("#top-settings-holder .drawer-toggle").each((e, t) => {
			let n = $(t), i = oy(n);
			if (i) {
				let e = t, a = r.get(e);
				a ? a.written = i : r.set(e, {
					title: e.getAttribute("title"),
					ariaLabel: e.getAttribute("aria-label"),
					written: i
				}), n.attr({
					title: i,
					"aria-label": i
				});
			}
			n.children(`.${V_}`).length > 0 || i && $("<span>").addClass(V_).text(i).appendTo(n);
		});
		let e = ".notes-link, .help_button, .help-button, a:has(.note-link-span), a[href*=\"docs.sillytavern.app\"], .note-link-span, [title*=\"帮助\"], [title*=\"Help\"]", t = (t) => {
			let n = t.find(e).not(`.${H_} *`);
			if (n.length === 0) return $();
			let r = n.first(), i = r.closest("a, button, .notes-link, .help_button");
			return i.length > 0 ? i : r;
		};
		$("#top-settings-holder .drawer-content").each((n, r) => {
			let i = $(r), a = i.attr("id"), o = a !== "WorldInfo" && a !== "rm_extensions_block", s = i.children(`.${H_}`), c = s.first();
			if (s.slice(1).remove(), c.length > 0) {
				let n = c.find(`.${W_}`).first();
				if (!o) n.find(e).remove();
				else if (!(n.find(e).length > 0)) {
					let e = t(i);
					e.length > 0 && n.prepend(e);
				}
				return;
			}
			let l = oy(i.closest(".drawer").children(".drawer-toggle").first()), u = $("<div>").addClass(H_);
			$("<span>").addClass(U_).text(l || "菜单").appendTo(u);
			let d = $("<div>").addClass(W_).appendTo(u);
			if (o) {
				let e = t(i);
				e.length > 0 && d.append(e);
			}
			$("<button>").attr({
				type: "button",
				title: "全屏显示面板",
				"aria-label": "全屏显示面板"
			}).addClass(`${K_} fa-solid fa-expand`).appendTo(d), $("<button>").attr({
				type: "button",
				title: "关闭面板"
			}).addClass(`${G_} fa-solid fa-xmark`).appendTo(d), i.prepend(u);
		}), cy(), f();
	}, m = (e) => {
		let r = e.target instanceof n.Element ? e.target : null, i = r?.closest("#top-settings-holder > .drawer > .drawer-toggle, #top-settings-holder .drawer-toggle"), a = r?.closest(".drawer-opener");
		if (i || a) {
			let e = i?.closest(".drawer") ?? i?.parentElement ?? (a?.dataset.target ? t.getElementById(a.dataset.target) : null), n = e?.querySelector(":scope > .drawer-content") ?? e?.querySelector(".drawer-content"), r = !!n?.classList.contains("openDrawer");
			if (t.body.classList.contains(C_)) {
				let e = Array.from(t.querySelectorAll("#top-settings-holder .drawer > .drawer-content.openDrawer, #top-settings-holder .drawer-content.openDrawer"));
				n && !r && e.length > 0 && u(n), e.forEach((e) => {
					e !== n && dy(e);
				});
			}
		}
		let o = r?.closest(`.${K_}, .${G_}`);
		if (!o) {
			i && d();
			return;
		}
		let s = o.closest("#top-settings-holder > .drawer > .drawer-content");
		s && (e.preventDefault(), e.stopPropagation(), o.classList.contains(K_) ? gy(s, sy() !== s) : (_y(s), d()));
	}, h = t.getElementById("top-settings-holder"), g = h instanceof n.HTMLElement ? new n.MutationObserver((r) => {
		let i = r.find((e) => e.target instanceof n.HTMLElement && !(e.oldValue?.split(/\s+/).includes("openDrawer") ?? !1) && e.target.classList.contains("openDrawer"))?.target;
		if (i instanceof n.HTMLElement) {
			let n = Array.from(t.querySelectorAll("#top-settings-holder > .drawer > .drawer-content.openDrawer"));
			c(n, i), p(), e?.(i.id);
		}
		d();
	}) : void 0, v = () => {
		g?.disconnect(), h?.querySelectorAll(":scope > .drawer > .drawer-content").forEach((e) => g?.observe(e, {
			attributes: !0,
			attributeFilter: ["class"],
			attributeOldValue: !0
		}));
	}, y = () => {
		p(), v();
	};
	y();
	let b = h instanceof n.HTMLElement ? new n.MutationObserver((e) => {
		e.some((e) => e.type === "childList" && (e.target === h || e.target instanceof n.Element && e.target.matches("#top-settings-holder > .drawer"))) && y();
	}) : void 0;
	b?.observe(h, {
		childList: !0,
		subtree: !0
	});
	let x = new n.MutationObserver(() => {
		d();
	});
	return x.observe(t.body, {
		attributes: !0,
		attributeFilter: ["class"]
	}), t.addEventListener("click", m, !0), { destroy: () => {
		i !== 0 && n.cancelAnimationFrame(i), l(), b?.disconnect(), g?.disconnect(), x.disconnect(), t.removeEventListener("click", m, !0), my(), t.querySelectorAll("#top-settings-holder > .drawer > .drawer-content").forEach((e) => {
			dy(e), e.classList.remove(J_);
		}), s = void 0, $(`.${V_}`).remove(), $(`.${H_}`).remove(), r.forEach((e, t) => {
			t.getAttribute("title") === e.written && (e.title === null ? t.removeAttribute("title") : t.setAttribute("title", e.title)), t.getAttribute("aria-label") === e.written && (e.ariaLabel === null ? t.removeAttribute("aria-label") : t.setAttribute("aria-label", e.ariaLabel));
		}), r.clear();
	} };
}
async function yy(e) {
	let t = B(), n = t.SillyTavern, r = n?.POPUP_TYPE, i = n?.POPUP_RESULT;
	if (typeof n?.callGenericPopup != "function") {
		t.confirm("将立即还原原始布局，确认继续？") && (e.disableModernLayout(), toastr.warning("已关闭现代化界面。", Um));
		return;
	}
	let a = await n.callGenericPopup(`将立即还原 ${ty(z())} 原始布局，并保持关闭状态。之后可在酒馆助手设置里重新启用。`, r?.CONFIRM ?? "confirm", void 0, {
		okButton: "关闭并还原",
		cancelButton: "取消"
	});
	(a === !0 || a === (i?.AFFIRMATIVE ?? 1)) && (e.disableModernLayout(), toastr.warning("已关闭现代化界面。", Um));
}
function by(e) {
	let t = z(), n = B(), r = "", i = !1, a = async () => {
		if (!i && e.is_active) {
			i = !0;
			try {
				await yy(e);
			} finally {
				i = !1;
			}
		}
	}, o = (e) => {
		e.isComposing || e.ctrlKey || e.altKey || e.metaKey || e.key.length !== 1 || (r = `${r}${e.key.toLowerCase()}`.slice(-8), r === tv && (r = "", a()));
	}, s = (e) => {
		let n = e.querySelector(".welcomeShortcuts");
		if (!n || n.querySelector(`.${nv}`)) return;
		let r = t.createElement("button");
		r.type = "button", r.className = `menu_button menu_button_icon ${nv}`, r.title = "关闭现代化界面并还原原始布局", r.setAttribute("aria-label", "重置界面");
		let i = t.createElement("i");
		i.className = "fa-solid fa-arrow-rotate-left", i.setAttribute("aria-hidden", "true");
		let a = t.createElement("span");
		a.textContent = "重置界面", r.append(i, a), n.append(r);
	}, c = (e) => {
		e instanceof n.Element && e.matches(".welcomePanel") && s(e), e.querySelectorAll(".welcomePanel").forEach(s);
	}, l = (e) => {
		(e.target instanceof n.Element ? e.target : null)?.closest(`.${nv}`) && (e.preventDefault(), e.stopPropagation(), a());
	};
	c(t);
	let u = new n.MutationObserver((e) => {
		e.forEach((e) => {
			e.addedNodes.forEach((e) => {
				e instanceof n.Element && c(e);
			});
		});
	}), d = t.querySelector("#chat");
	return d && u.observe(d, {
		childList: !0,
		subtree: !0
	}), t.addEventListener("keydown", o, !0), t.addEventListener("click", l, !0), { destroy: () => {
		u.disconnect(), t.removeEventListener("keydown", o, !0), t.removeEventListener("click", l, !0), t.querySelectorAll(`.${nv}`).forEach((e) => e.remove());
	} };
}
function xy(e, t, n, r) {
	let i = r.get(e);
	i ? i.applied[t] !== void 0 && e.style[t] !== i.applied[t] && (i.original[t] = e.style[t]) : (i = {
		original: {
			maxWidth: e.style.maxWidth,
			maxHeight: e.style.maxHeight,
			left: e.style.left,
			top: e.style.top
		},
		applied: {}
	}, r.set(e, i)), e.style[t] !== n && (e.style[t] = n), i.applied[t] = n;
}
function Sy(e, t) {
	let n = e.ownerDocument.defaultView ?? B(), r = n.getComputedStyle(e);
	if (r.display === "none" || r.visibility === "hidden" || r.position !== "absolute" && r.position !== "fixed") return;
	let i = e.getBoundingClientRect();
	if (i.width < 8 || i.height < 8) return;
	let a = Math.max(160, n.innerWidth - 16), o = Math.max(120, n.innerHeight - 16), s = `${a}px`, c = `${o}px`, l = Math.min(Math.max(i.left, 8), n.innerWidth - Math.min(i.width, a) - 8), u = Math.min(Math.max(i.top, 8), n.innerHeight - Math.min(i.height, o) - 8), d = Math.abs(l - i.left) > 1, f = Math.abs(u - i.top) > 1, p = (d || f) && r.position === "absolute" ? e.offsetParent : null, m = p?.getBoundingClientRect(), h, g;
	if (d) {
		let e = Fv(r.marginLeft, 0);
		h = `${r.position === "fixed" ? l : p && m ? l - m.left - p.clientLeft + p.scrollLeft - e : l + n.scrollX - e}px`;
	}
	if (f) {
		let e = Fv(r.marginTop, 0);
		g = `${r.position === "fixed" ? u : p && m ? u - m.top - p.clientTop + p.scrollTop - e : u + n.scrollY - e}px`;
	}
	xy(e, "maxWidth", s, t), xy(e, "maxHeight", c, t), h !== void 0 && xy(e, "left", h, t), g !== void 0 && xy(e, "top", g, t);
}
function Cy() {
	let e = z(), t = e.defaultView ?? window, n = ".select2-container--open, .select2-dropdown, .ui-autocomplete, .list-group, #export_format_popup, #rawPromptPopup", r = /* @__PURE__ */ new Map(), i = 0, a = () => {
		i = 0, r.forEach((e, t) => {
			t.isConnected || r.delete(t);
		}), e.querySelectorAll(n).forEach((e) => {
			Sy(e, r);
		});
	}, o = () => {
		e.body.classList.contains(M_) || i === 0 && (i = t.requestAnimationFrame(a));
	}, s = (e) => e instanceof t.Element && (e.matches(n) || !!e.querySelector(n)), c = new t.MutationObserver((e) => {
		e.some((e) => [...e.addedNodes].some(s)) && o();
	});
	c.observe(e.body, { childList: !0 });
	let l = (e) => {
		e.target instanceof t.Element && e.target.matches(".ui-autocomplete-input, .select2-search__field") && o();
	};
	return e.addEventListener("click", o, !0), e.addEventListener("focusin", o, !0), e.addEventListener("input", l, !0), t.addEventListener("resize", o), { destroy: () => {
		i !== 0 && t.cancelAnimationFrame(i), c.disconnect(), e.removeEventListener("click", o, !0), e.removeEventListener("focusin", o, !0), e.removeEventListener("input", l, !0), t.removeEventListener("resize", o), r.forEach((e, t) => {
			Object.keys(e.applied).forEach((n) => {
				t.style[n] === e.applied[n] && (t.style[n] = e.original[n]);
			});
		}), r.clear();
	} };
}
function wy(e) {
	let t = z(), n = t.defaultView ?? window, r = t.createElement("button");
	r.id = B_, r.type = "button", r.className = "menu_button fa-solid", r.setAttribute("aria-controls", "qr--bar"), r.hidden = !0;
	let i = 0, a, o = new n.ResizeObserver(() => p()), s = new n.MutationObserver(p), c = () => {
		a &&= (a.element.toggleAttribute("inert", a.inert), a.ariaHidden === null ? a.element.removeAttribute("aria-hidden") : a.element.setAttribute("aria-hidden", a.ariaHidden), void 0);
	}, l = (e) => {
		a?.element !== e && (c(), e && (a = {
			element: e,
			inert: e.hasAttribute("inert"),
			ariaHidden: e.getAttribute("aria-hidden")
		}));
	}, u = (e) => {
		let t = [e.querySelector("#file_form:not(.displayNone)"), e.querySelector("#nonQRFormItems")].filter((e) => {
			if (!e) return !1;
			let t = n.getComputedStyle(e), r = e.getBoundingClientRect();
			return !e.hidden && t.display !== "none" && t.visibility !== "hidden" && r.height > 0;
		});
		return t.length === 0 ? e.getBoundingClientRect().top : Math.min(...t.map((e) => e.getBoundingClientRect().top));
	}, d = (e) => Array.from(e.children).some((e) => {
		if (!(e instanceof n.HTMLElement) || e.id === "qr--popoutTrigger" || e.hidden) return !1;
		let t = n.getComputedStyle(e);
		return t.display !== "none" && t.visibility !== "hidden";
	}), f = () => {
		i = 0;
		let e = t.getElementById("send_form"), c = t.getElementById("form_sheld"), f = t.getElementById("qr--bar"), p = e instanceof n.HTMLElement ? e : null, m = c instanceof n.HTMLElement ? c : null, h = f instanceof n.HTMLElement ? f : null;
		if (o.disconnect(), s.disconnect(), [
			m,
			p,
			h,
			...h ? Array.from(h.children) : []
		].forEach((e) => {
			e instanceof n.HTMLElement && o.observe(e);
		}), p && s.observe(p, {
			childList: !0,
			subtree: !0,
			attributes: !0,
			attributeFilter: [
				"class",
				"hidden",
				"style"
			]
		}), l(h), !p || !h) {
			r.remove(), r.hidden = !0, Z(vv), Z(yv), Z(bv), Z(xv);
			return;
		}
		r.parentElement !== p && p.append(r);
		let g = t.body.classList.contains(I_), v = d(h);
		r.hidden = !v, r.classList.toggle("fa-chevron-down", v && !g), r.classList.toggle("fa-chevron-up", v && g), r.setAttribute("aria-expanded", String(v && !g)), r.setAttribute("aria-label", g ? "展开快速回复栏" : "收起快速回复栏"), r.title = g ? "展开快速回复栏" : "收起快速回复栏", h.toggleAttribute("inert", g || a?.inert === !0), g ? h.setAttribute("aria-hidden", "true") : a?.ariaHidden === null ? h.removeAttribute("aria-hidden") : a && h.setAttribute("aria-hidden", a.ariaHidden);
		let y = Math.ceil(m?.getBoundingClientRect().height ?? p.getBoundingClientRect().height);
		Pv(vv, `${Math.max(0, y)}px`);
		let b = p.getBoundingClientRect();
		Pv(yv, `${Math.max(0, Math.ceil(b.bottom - u(p)))}px`);
		let x = v ? Math.max(0, Math.ceil(h.scrollHeight)) : 0;
		Pv(bv, `${x}px`);
		let S = r.hidden ? 0 : Math.ceil(r.getBoundingClientRect().height || 26), C = Math.ceil(h.getBoundingClientRect().height), w = g || !g && x > 1 && C <= 1 ? 0 : x;
		Pv(xv, `${v ? Math.max(S + 6, w + 10) : 0}px`);
	};
	function p() {
		i === 0 && (i = n.requestAnimationFrame(f));
	}
	let m = (e) => e instanceof n.HTMLElement ? e.matches("#form_sheld, #send_form, #qr--bar") || e.querySelector("#form_sheld, #send_form, #qr--bar") !== null : !1, h = new n.MutationObserver((e) => {
		e.some((e) => [...e.addedNodes, ...e.removedNodes].some(m)) && p();
	});
	h.observe(t.body, {
		childList: !0,
		subtree: !0
	});
	let g = new n.MutationObserver(p);
	g.observe(t.body, {
		attributes: !0,
		attributeFilter: ["class", "hidden"]
	});
	let v = (t) => {
		t.preventDefault(), t.stopPropagation(), e.settings.quickReplyCollapsed = !e.settings.quickReplyCollapsed;
	};
	return r.addEventListener("click", v), n.addEventListener("resize", p), p(), { destroy: () => {
		i !== 0 && n.cancelAnimationFrame(i), h.disconnect(), g.disconnect(), s.disconnect(), o.disconnect(), r.removeEventListener("click", v), r.remove(), c(), n.removeEventListener("resize", p), Z(vv), Z(yv), Z(bv), Z(xv);
	} };
}
function Ty(e) {
	let t = z(), n = t.defaultView ?? window, r = n.matchMedia(lv), i = 0, a = () => {
		My(e.settings, e.is_active, e.should_use_two_column);
	}, o = () => {
		i === 0 && (i = n.requestAnimationFrame(() => {
			i = 0, a();
		}));
	}, s = (e) => {
		let r = t.body;
		if (!r.classList.contains(A_) || r.classList.contains(k_)) return;
		let i = !!(e.target instanceof n.Element ? e.target : null)?.closest(`#${L_}, #top-settings-holder`);
		r.classList.contains(N_) ? r.classList.add(j_) : r.classList.contains(j_) && !i && r.classList.remove(j_);
	};
	return r.addEventListener("change", o), n.addEventListener("resize", o), t.addEventListener("pointerdown", s, !0), a(), { destroy: () => {
		i !== 0 && n.cancelAnimationFrame(i), r.removeEventListener("change", o), n.removeEventListener("resize", o), t.removeEventListener("pointerdown", s, !0), t.body.classList.remove(A_, j_);
	} };
}
function Ey() {
	let e = z(), t = e.defaultView ?? window, n = e.getElementById("top-settings-holder"), r = 0, i = () => {
		if (r = 0, !(n instanceof t.HTMLElement)) {
			Z(_v);
			return;
		}
		let i = e.body;
		if (!i.classList.contains(y_) || !i.classList.contains(x_)) {
			Z(_v);
			return;
		}
		let a = t.getComputedStyle(i), o = Fv(a.getPropertyValue("--th-modern-left-nav-top"), Sv), s = Fv(a.getPropertyValue("--th-modern-left-nav-min-height"), Cv), c = Fv(a.getPropertyValue("--th-modern-recent-min-height"), wv), l = Math.min(c, 44), u = Math.max(s, t.innerHeight - o - l - Tv), d = t.getComputedStyle(n), f = Fv(d.paddingTop, 0) + Fv(d.paddingBottom, 0) + Array.from(n.querySelectorAll(":scope > .drawer > .drawer-toggle")).map((e) => {
			let n = e.closest(".drawer");
			if (n?.classList.contains("mc3-hidden") || n?.classList.contains("displayNone") || n?.hidden || e.classList.contains("mc3-hidden") || e.classList.contains("displayNone") || e.hidden) return 0;
			let r = n ? t.getComputedStyle(n) : null;
			if (r && (r.display === "none" || r.visibility === "hidden")) return 0;
			let i = t.getComputedStyle(e);
			return i.display === "none" || i.visibility === "hidden" ? 0 : e.getBoundingClientRect().height + Fv(i.marginTop, 0) + Fv(i.marginBottom, 0);
		}).reduce((e, t) => e + t, 0);
		Pv(_v, `${Math.ceil(Math.min(f > 0 ? f : s, u))}px`);
	}, a = () => {
		r === 0 && (r = t.requestAnimationFrame(i));
	}, o = n instanceof t.HTMLElement ? new t.ResizeObserver(a) : void 0, s = () => {
		o?.disconnect(), n?.querySelectorAll(":scope > .drawer > .drawer-toggle").forEach((e) => o?.observe(e));
	}, c = n instanceof t.HTMLElement ? new t.MutationObserver((e) => {
		e.some((e) => e.target === n || e.target instanceof t.Element && e.target.matches("#top-settings-holder > .drawer")) && (s(), a());
	}) : void 0;
	c?.observe(n, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: [
			"class",
			"style",
			"hidden"
		]
	}), s();
	let l = new t.MutationObserver(() => {
		a();
	});
	return l.observe(e.body, {
		attributes: !0,
		attributeFilter: ["class"]
	}), t.addEventListener("resize", a), a(), { destroy: () => {
		r !== 0 && t.cancelAnimationFrame(r), c?.disconnect(), o?.disconnect(), l.disconnect(), t.removeEventListener("resize", a), Z(_v);
	} };
}
function Dy(e) {
	let t = z(), n = t.defaultView ?? window, r = $("<div>").attr("id", R_).appendTo("body"), i = $("<div>").attr("id", z_).appendTo("body"), a, o = (r, i) => {
		if (r.button !== 0) return;
		let o = t.body, s = t.getElementById(L_), c = t.querySelector("#top-settings-holder .drawer > .drawer-content.openDrawer.th-modern-drawer-active, #top-settings-holder .drawer-content.openDrawer.th-modern-drawer-active") ?? t.querySelector("#top-settings-holder .drawer > .drawer-content.openDrawer, #top-settings-holder .drawer-content.openDrawer"), l = o.classList.contains(C_);
		if (i === "sidebar" && (!s || c && !l || o.classList.contains(k_) || o.classList.contains(A_)) || i === "overlay" && !c) return;
		a?.(), r.preventDefault();
		let u = r.target;
		try {
			u?.setPointerCapture?.(r.pointerId);
		} catch {}
		let d = r.clientX, f = i === "sidebar" ? s.getBoundingClientRect().width : c.getBoundingClientRect().width, p = c?.getBoundingClientRect().left ?? 0, m = i === "sidebar" ? "--th-modern-left-width" : "--th-modern-overlay-width", h = Av(), g = Math.round(f), v = 0;
		o.classList.add(M_);
		let y = () => {
			v = 0, Iv(h, m, `${g}px`);
		}, b = (e) => {
			e !== g && (g = e, v === 0 && (v = n.requestAnimationFrame(y)));
		}, x = (e) => {
			let t = e.clientX - d;
			if (i === "sidebar") {
				let e = c ? n.innerWidth - c.getBoundingClientRect().width - hv - 28 : fv, r = l ? Math.min(fv, e) : fv;
				b(Math.round(kv(f + t, dv, r, 360)));
				return;
			}
			let r = l ? 508 : mv, a = Math.max(pv, n.innerWidth - p - r);
			b(Math.round(kv(f + t, pv, a, 960)));
		}, S = () => {
			v !== 0 && (n.cancelAnimationFrame(v), y()), i === "sidebar" && e.settings.leftSidebarWidth !== g && (e.settings.leftSidebarWidth = g), i === "overlay" && e.settings.overlayPanelWidth !== g && (e.settings.overlayPanelWidth = g), o.classList.remove(M_);
			try {
				u?.hasPointerCapture?.(r.pointerId) && u.releasePointerCapture(r.pointerId);
			} catch {}
			n.removeEventListener("pointermove", x), n.removeEventListener("pointerup", S), n.removeEventListener("pointercancel", S), a = void 0;
		};
		a = S, n.addEventListener("pointermove", x), n.addEventListener("pointerup", S), n.addEventListener("pointercancel", S);
	};
	return r.on("pointerdown", (e) => {
		o(e.originalEvent, "sidebar");
	}), i.on("pointerdown", (e) => {
		o(e.originalEvent, "overlay");
	}), { destroy: () => {
		a?.(), r.remove(), i.remove(), t.body.classList.remove(M_);
	} };
}
function Oy(e, t, n) {
	if (e.parentElement === t) return () => {};
	let r = e.ownerDocument.createComment(n);
	return e.before(r), t.append(e), () => {
		r.parentNode && r.replaceWith(e);
	};
}
function ky() {
	let e = z(), t = e.defaultView ?? window, n = t.matchMedia(uv), r = [], i = /* @__PURE__ */ new Map(), a = [], o = /* @__PURE__ */ new Map(), s, c, l = 0, u = () => n.matches && e.body.classList.contains(x_), d = (e) => {
		if (!i.has(e)) return;
		let t = i.get(e);
		t !== void 0 && (t === null ? e.hasAttribute("size") && e.removeAttribute("size") : e.getAttribute("size") !== t && e.setAttribute("size", t));
	}, f = (t, n) => {
		let r = e.querySelector(t);
		if (!r) return;
		if (!n) {
			d(r);
			return;
		}
		i.has(r) || i.set(r, r.getAttribute("size"));
		let a = r.options.length, o;
		o = t.includes("main_api") ? String(Math.min(6, Math.max(1, a))) : String(Math.min(14, Math.max(4, a))), r.getAttribute("size") !== o && r.setAttribute("size", o);
	}, p = () => {
		s?.(), s = void 0, c = void 0;
	}, m = () => {
		switch (e.querySelector("#rm_api_block #main_api")?.value) {
			case "openai": return {
				selector: "#rm_api_block #chat_completion_source",
				block_selector: "#rm_api_block #openai_api",
				title_marker: "th-modern-api-chat-source-title",
				select_marker: "th-modern-api-chat-source-select"
			};
			case "textgenerationwebui": return {
				selector: "#rm_api_block #textgen_type",
				block_selector: "#rm_api_block #textgenerationwebui_api",
				title_marker: "th-modern-api-textgen-source-title",
				select_marker: "th-modern-api-textgen-source-select"
			};
			default: return;
		}
	}, h = (t, n) => {
		let r = m();
		if (f("#rm_api_block #chat_completion_source", !!(t && r?.selector === "#rm_api_block #chat_completion_source" && n)), f("#rm_api_block #textgen_type", !!(t && r?.selector === "#rm_api_block #textgen_type" && n)), !t) {
			p();
			return;
		}
		let i = t.querySelector(`.${$_}`);
		i || (i = e.createElement("div"), i.className = $_, t.append(i));
		let a = r ? e.querySelector(r.selector) : null;
		if (!r || !a) p(), i.classList.add("is-empty");
		else if (i.classList.remove("is-empty"), c !== r.selector || a.parentElement !== i) {
			p();
			let t = e.querySelector(r.block_selector), n = (a.previousElementSibling?.matches("h4") ? a.previousElementSibling : t?.querySelector("h4")) ?? null, o = [];
			n && n.parentElement !== i && o.push(Oy(n, i, r.title_marker)), a.parentElement !== i && o.push(Oy(a, i, r.select_marker)), s = () => {
				o.reverse().forEach((e) => e());
			}, c = r.selector;
		}
	}, g = () => {
		e.querySelectorAll("#rm_api_block #chat_completion_source, #rm_api_block #textgen_type, #rm_api_block #main_api").forEach((n) => {
			let r = Array.from(n.querySelectorAll("optgroup"));
			r.length > 0 && r.forEach((r) => {
				let i = e.createComment("modern-api-group");
				r.before(i);
				let o = Array.from(r.childNodes), s = /* @__PURE__ */ new Map();
				for (let e of o) r.disabled && e instanceof t.HTMLOptionElement && (s.set(e, e.disabled), e.disabled = !0), n.insertBefore(e, r);
				r.remove(), a.push(() => {
					if (i.parentNode) {
						i.before(r);
						for (let e of o) e.parentNode === n && r.append(e);
						s.forEach((e, t) => {
							t.disabled = e;
						}), i.remove();
					}
				});
			}), Array.from(n.querySelectorAll("option")).forEach((e) => {
				let t = e.textContent?.trim() ?? "";
				(!t || /^[-─—_.\s]+$/.test(t)) && (o.has(e) || o.set(e, e.style.display), e.style.display = "none");
			});
		});
	}, v = () => {
		if (!e.querySelector("#rm_api_block")?.classList.contains("openDrawer")) {
			f("#rm_api_block #main_api", !1), f("#rm_api_block #chat_completion_source", !1), f("#rm_api_block #textgen_type", !1);
			return;
		}
		let t = e.querySelector("#rm_api_block #main-API-selector-block"), n = e.querySelector("#rm_api_block > .flex-container.flexFlowColumn"), i = Array.from(e.querySelectorAll("#rm_api_block > .flex-container.alignitemscenter.spaceBetween.wide100p")).find((e) => e.textContent?.includes("自动连接到上次的服务器") || e.querySelector("#viewSecrets"));
		n && i && i.parentElement !== n && (i.classList.add(ev), r.push(Oy(i, n, "th-modern-api-footer")));
		let a = u();
		if (f("#rm_api_block #main_api", a), h(t, a), g(), t && t.querySelectorAll(".th-modern-api-hint-card").forEach((e) => e.remove()), t) {
			let n = t.querySelector(".th-modern-api-main-title");
			n || (n = e.createElement("h4"), n.className = "th-modern-api-main-title", n.textContent = "接口模式", t.prepend(n));
		}
	}, y = () => {
		l !== 0 && (t.cancelAnimationFrame(l), l = 0);
	}, b = () => {
		l === 0 && (l = t.requestAnimationFrame(() => {
			l = 0, v();
		}));
	};
	v();
	let x = e.querySelector("#rm_api_block"), S = x instanceof t.HTMLElement ? new t.MutationObserver(() => {
		b();
	}) : void 0;
	x instanceof t.HTMLElement && S?.observe(x, {
		childList: !0,
		subtree: !0
	});
	let C = x instanceof t.HTMLElement ? new t.MutationObserver(() => {
		b();
	}) : void 0;
	C?.observe(x, {
		attributes: !0,
		attributeFilter: ["class"]
	});
	let w = u(), T = () => {
		let e = u();
		e !== w && (w = e, b());
	}, ee = new t.MutationObserver(() => {
		T();
	});
	ee.observe(e.body, {
		attributes: !0,
		attributeFilter: ["class"]
	});
	let te = (e) => {
		e.target instanceof t.HTMLSelectElement && e.target.matches("#rm_api_block #main_api, #rm_api_block #chat_completion_source, #rm_api_block #textgen_type") && b();
	};
	return e.addEventListener("input", te), e.addEventListener("change", te), n.addEventListener("change", T), { destroy: () => {
		y(), S?.disconnect(), C?.disconnect(), ee.disconnect(), e.removeEventListener("input", te), e.removeEventListener("change", te), n.removeEventListener("change", T), p(), r.reverse().forEach((e) => e()), e.querySelectorAll(`.${$_}:empty`).forEach((e) => e.remove()), e.querySelectorAll(`.${ev}`).forEach((e) => e.classList.remove(ev)), e.querySelectorAll(".th-modern-api-main-title, .th-modern-api-hint-card").forEach((e) => e.remove()), a.splice(0).reverse().forEach((e) => e()), o.forEach((e, t) => {
			t.style.display = e;
		}), o.clear(), i.forEach((e, t) => {
			e === null ? t.removeAttribute("size") : t.setAttribute("size", e);
		});
	} };
}
function Ay(e, t, n) {
	if (!t || !n || !e.desktopDockedDrawer) return !1;
	let r = z(), i = B();
	return i.matchMedia(uv).matches ? Math.min(i.innerWidth, r.documentElement.clientWidth || i.innerWidth) >= kv(e.leftSidebarWidth, dv, fv, 360) + kv(e.overlayPanelWidth, pv, 2 ** 53 - 1, 960) + hv + 28 : !1;
}
var jy;
function My(e, t, n) {
	let r = z(), i = B(), a = $(r.body), o = t && n && i.matchMedia(lv).matches, s = Ay(e, t, n), c = t && e.floatingChatInput, l = t && e.singleLineChatInput;
	if (a.toggleClass(y_, t).toggleClass(b_, t && e.modernPersonaManagement).toggleClass(x_, n).toggleClass(C_, s).toggleClass(w_, t && n && e.mainChatMaxWidth === 0).toggleClass(T_, c).toggleClass(E_, l).toggleClass(D_, t && e.reduceMotion).toggleClass(O_, t && e.reduceAdvancedEffects).toggleClass(I_, t && e.quickReplyCollapsed).toggleClass(A_, o).removeClass(S_), jy !== void 0 && jy !== l) {
		let e = r.getElementById("send_textarea");
		e instanceof i.HTMLTextAreaElement && (e.style.height = "", e.dispatchEvent(new i.Event("input", { bubbles: !0 })));
	}
	jy = l, (!o || a.hasClass(k_)) && a.removeClass(j_), t && n || my(), Pv("--th-modern-left-width", `${kv(e.leftSidebarWidth, dv, fv, 360)}px`), Pv("--th-modern-overlay-width", `${kv(e.overlayPanelWidth, pv, 2 ** 53 - 1, 960)}px`), Pv("--th-modern-main-min-width", `${kv(e.mainChatMaxWidth, 0, 2 ** 53 - 1, 960)}px`), Pv("--th-modern-input-bottom-gap", `${kv(e.inputBottomGap, 0, 120, 15)}px`), Pv("--th-modern-input-side-gap", `${kv(e.inputSideGap, 0, 80, 16)}px`);
}
function Ny() {
	jy = void 0, $(z().body).removeClass(`${y_} ${b_} ${x_} ${S_} ${C_} ${w_} ${T_} ${E_} ${D_} ${O_} ${I_} ${k_} ${A_} ${j_} ${M_} ${N_} ${P_} ${F_}`), Z("--th-modern-left-width"), Z("--th-modern-overlay-width"), Z("--th-modern-main-min-width"), Z("--th-modern-input-bottom-gap"), Z("--th-modern-input-side-gap"), Z(vv), Z(yv), Z(bv), Z(xv), Z(_v);
}
function Py(e) {
	if (e) try {
		e();
	} catch (e) {
		console.error(`[${Um}] 清理运行时资源失败。`, e);
	}
}
function Fy(e) {
	for (; e.length > 0;) Py(e.pop());
}
function Iy() {
	return window.eventSource ?? window.SillyTavern?.getContext?.()?.eventSource;
}
var Ly = {
	APP_READY: "app_ready",
	CHAT_CHANGED: "chat_id_changed",
	CHAT_CREATED: "chat_created",
	CHAT_DELETED: "chat_deleted",
	MESSAGE_SENT: "message_sent",
	MESSAGE_RECEIVED: "message_received",
	CHARACTER_PAGE_LOADED: "character_page_loaded"
};
function Ry(e, t) {
	let n = Iy();
	return n && typeof n.on == "function" ? (n.on(e, t), { stop: () => {
		typeof n.removeListener == "function" ? n.removeListener(e, t) : typeof n.off == "function" && n.off(e, t);
	} }) : { stop: () => {} };
}
function zy(t) {
	let n = [Ny], r;
	try {
		let i = ny(() => r?.refresh());
		n.push(i.destroy), r = ay(i.$list), n.push(r.destroy);
		let a = Rc(t);
		n.push(a.destroy), n.push(vy((e) => {
			e === "left-nav-panel" && a.scheduleSync();
		}).destroy), n.push(ol(t).destroy), n.push(Ey().destroy), n.push(by(t).destroy), n.push(Cy().destroy), n.push(wy(t).destroy), n.push(Ty(t).destroy), n.push(Dy(t).destroy), n.push(ky().destroy), n.push(__(t).destroy), n.push(Bs(t).destroy);
		let o = Xn(() => [e(t.settings), t.should_use_two_column], ([e, t]) => {
			My(e, !0, t);
		}, {
			immediate: !0,
			deep: !0,
			flush: "sync"
		});
		n.push(o);
		let s = _.debounce(() => r?.refresh(), 500);
		n.push(s.cancel);
		let c = [
			Ry(Ly.APP_READY, s),
			Ry(Ly.CHAT_CHANGED, s),
			Ry(Ly.CHAT_CREATED, s),
			Ry(Ly.CHAT_DELETED, s),
			Ry(Ly.MESSAGE_SENT, s),
			Ry(Ly.MESSAGE_RECEIVED, s),
			Ry(Ly.CHARACTER_PAGE_LOADED, s)
		];
		return n.push(() => c.forEach((e) => e.stop())), s(), { destroy: _.once(() => Fy(n)) };
	} catch (e) {
		throw Fy(n), e;
	}
}
function By() {
	let e = B(), t = _.get(e, av);
	if (t && typeof t.get == "function" && typeof t.set == "function") return t;
	let n = /* @__PURE__ */ new Map();
	return _.set(e, av, n), n;
}
function Vy() {
	let e = B(), t = window, n = _.get(e, iv);
	typeof n == "function" && (n(), _.unset(e, iv));
	let r = "modern-ui", i = By();
	i.get(r)?.({ unregisterUnique: !1 });
	let a = Ko() ?? ls();
	Go(a);
	let o = Qm(), s, c, l, u;
	try {
		s = Wh(a).destroy, l = Xn(() => o.is_active, () => {
			o.is_active ? c ??= zy(o) : (c?.destroy(), c = void 0);
		}, {
			immediate: !0,
			flush: "sync"
		});
		let e = () => u?.();
		return u = _.once((n = {}) => {
			t.removeEventListener("pagehide", e), Py(l), l = void 0, Py(c?.destroy), c = void 0, Py(s), s = void 0, i.get(r) === u && i.delete(r), o.destroy();
		}), i.set(r, u), t.addEventListener("pagehide", e), { dispose: () => u?.() };
	} catch (e) {
		throw Py(l), Py(c?.destroy), Py(s), o.destroy(), e;
	}
}
async function Hy() {
	return await new Promise((e) => $(e)), Vy();
}
$(() => {
	try {
		Hy();
	} catch (e) {
		console.error(`[${Um}] 自动初始化失败:`, e);
	}
});
var Uy = { activate: Hy };
export { Ev as PLUGIN_ID, Dv as PLUGIN_VERSION, Hy as activate, Uy as default };
