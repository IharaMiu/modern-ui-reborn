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
		r._d && ta(-1);
		let i = Vn(t), a = Xi.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Xi.length; e > a; e--) $i();
			Vn(i), r._d && ta(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Un(e, t) {
	if (zn === null) return e;
	let r = Ra(zn), i = e.dirs ||= [];
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
function Wn(e, t, n, r) {
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
function Gn(e, t) {
	if (wa) {
		let n = wa.provides, r = wa.parent && wa.parent.provides;
		r === n && (n = wa.provides = Object.create(r)), n[e] = t;
	}
}
function Kn(e, t, n = !1) {
	let r = Ta();
	if (r || ti) {
		let i = ti ? ti._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && g(t) ? t.call(r && r.proxy) : t;
	}
}
function qn() {
	return !!(Ta() || ti);
}
var Jn = /* @__PURE__ */ Symbol.for("v-scx"), Yn = () => Kn(Jn);
function Xn(e, t) {
	return Qn(e, null, t);
}
function Zn(e, t, n) {
	return Qn(e, t, n);
}
function Qn(e, t, r = n) {
	let { immediate: a, deep: o, flush: s, once: l } = r, u = c({}, r), d = t && a || !t && s !== "post", f;
	if (ja) {
		if (s === "sync") {
			let e = Yn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = i, e.resume = i, e.pause = i, e;
		}
	}
	let p = wa;
	u.call = (e, t, n) => yn(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		e.i = p, Ni(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : An(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = gn(e, t, u);
	return ja && (f ? f.push(h) : d && h()), h;
}
function $n(e, t, n) {
	let r = this.proxy, i = v(e) ? e.includes(".") ? er(r, e) : () => r[e] : e.bind(r, r), a;
	g(t) ? a = t : (a = t.handler, n = t);
	let o = Oa(this), s = Qn(i, a.bind(r), n);
	return o(), s;
}
function er(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var tr = /* @__PURE__ */ Symbol("_vte"), nr = (e) => e.__isTeleport, rr = /* @__PURE__ */ Symbol("_leaveCb");
function ir(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== Ji) {
			t = n;
			break;
		}
	}
	return t;
}
function ar(e) {
	if (!hr(e)) return nr(e.type) && e.children ? ir(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && g(n.default)) return n.default();
	}
}
function or(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		or(nr(n.type) && ar(n) || n, t);
	} else if (e.shapeFlag & 128) e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	else if (e.transition = t, e.type === Ki && f(e.children)) {
		let n = ci(e.children, !1);
		n && or(n, t);
	}
}
function sr(e) {
	if (e.component) return sr(e.component.subTree);
	if (e.type === Ki) {
		let t = f(e.children) && ci(e.children, !1);
		return t ? sr(t) : void 0;
	}
	if (e.type !== Ji) return e;
}
// @__NO_SIDE_EFFECTS__
function cr(e, t) {
	return g(e) ? /* @__PURE__ */ c({ name: e.name }, t, { setup: e }) : e;
}
function lr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function ur(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var dr = /* @__PURE__ */ new WeakMap();
function fr(e, t, r, i, o = !1) {
	if (f(e)) {
		e.forEach((e, n) => fr(e, t && (f(t) ? t[n] : t), r, i, o));
		return;
	}
	if (mr(i) && !o) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && fr(e, t, r, i.component.subTree);
		return;
	}
	let s = i.shapeFlag & 4 ? Ra(i.component) : i.el, c = o ? null : s, { i: u, r: p } = e, m = t && t.r, h = u.refs === n ? u.refs = {} : u.refs, y = u.setupState, b = /* @__PURE__ */ j(y), x = y === n ? a : (e) => !ur(h, e) && d(b, e), S = (e, t) => !(t && ur(h, t));
	if (m != null && m !== p) {
		if (pr(t), v(m)) h[m] = null, x(m) && (y[m] = null);
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
					i(), dr.delete(e);
				};
				t.id = -1, dr.set(e, t), Ni(t, r);
			} else pr(e), i();
		}
	}
}
function pr(e) {
	let t = dr.get(e);
	t && (t.flags |= 8, dr.delete(e));
}
fe().requestIdleCallback, fe().cancelIdleCallback;
var mr = (e) => !!e.type.__asyncLoader, hr = (e) => e.type.__isKeepAlive;
function gr(e, t) {
	vr(e, "a", t);
}
function _r(e, t) {
	vr(e, "da", t);
}
function vr(e, t, n = wa) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (br(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) hr(e.parent.vnode) && yr(r, t, n, e), e = e.parent;
	}
}
function yr(e, t, n, r) {
	let i = br(t, e, r, !0);
	Dr(() => {
		l(r[t], i);
	}, n);
}
function br(e, t, n = wa, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ze();
			let i = Oa(n), a = yn(t, n, e, r);
			return i(), Qe(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var xr = (e) => (t, n = wa) => {
	ja && e !== "sp" || br(e, (...e) => t(...e), n);
}, Sr = xr("bm"), Cr = xr("m"), wr = xr("bu"), Tr = xr("u"), Er = xr("bum"), Dr = xr("um"), Or = xr("sp"), kr = xr("rtg"), Ar = xr("rtc");
function jr(e, t = wa) {
	br("ec", e, t);
}
var Mr = /* @__PURE__ */ Symbol.for("v-ndc"), Nr = (e) => e ? Aa(e) ? Ra(e) : Nr(e.parent) : null, Pr = /* @__PURE__ */ c(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Nr(e.parent),
	$root: (e) => Nr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Ur(e),
	$forceUpdate: (e) => e.f ||= () => {
		An(e.update);
	},
	$nextTick: (e) => e.n ||= On.bind(e.proxy),
	$watch: (e) => $n.bind(e)
}), Fr = (e, t) => e !== n && !e.__isScriptSetup && d(e, t), Ir = {
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
			else if (Fr(i, t)) return s[t] = 1, i[t];
			else if (a !== n && d(a, t)) return s[t] = 2, a[t];
			else if (d(o, t)) return s[t] = 3, o[t];
			else if (r !== n && d(r, t)) return s[t] = 4, r[t];
			else Rr && (s[t] = 0);
		}
		let u = Pr[t], f, p;
		if (u) return t === "$attrs" && A(e.attrs, "get", ""), u(e);
		if ((f = c.__cssModules) && (f = f[t])) return f;
		if (r !== n && d(r, t)) return s[t] = 4, r[t];
		if (p = l.config.globalProperties, d(p, t)) return p[t];
	},
	set({ _: e }, t, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Fr(a, t) ? (a[t] = r, !0) : i !== n && d(i, t) ? (i[t] = r, !0) : d(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== n && c[0] !== "$" && d(e, c) || Fr(t, c) || d(o, c) || d(i, c) || d(Pr, c) || d(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? d(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Lr(e) {
	return f(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Rr = !0;
function zr(e) {
	let t = Ur(e), n = e.proxy, r = e.ctx;
	Rr = !1, t.beforeCreate && Vr(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: p, mounted: m, beforeUpdate: h, updated: v, activated: y, deactivated: x, beforeDestroy: S, beforeUnmount: C, destroyed: w, unmounted: T, render: ee, renderTracked: te, renderTriggered: ne, errorCaptured: re, serverPrefetch: E, expose: ie, inheritAttrs: ae, components: oe, directives: se, filters: ce } = t;
	if (u && Br(u, r, null), s) for (let e in s) {
		let t = s[e];
		g(t) && (r[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		b(t) && (e.data = /* @__PURE__ */ Wt(t));
	}
	if (Rr = !0, o) for (let e in o) {
		let t = o[e], a = Ba({
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
	if (c) for (let e in c) Hr(c[e], r, n, e);
	if (l) {
		let e = g(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Gn(t, e[t]);
		});
	}
	d && Vr(d, e, "c");
	function D(e, t) {
		f(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (D(Sr, p), D(Cr, m), D(wr, h), D(Tr, v), D(gr, y), D(_r, x), D(jr, re), D(Ar, te), D(kr, ne), D(Er, C), D(Dr, T), D(Or, E), f(ie)) {
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
	ee && e.render === i && (e.render = ee), ae != null && (e.inheritAttrs = ae), oe && (e.components = oe), se && (e.directives = se), E && lr(e);
}
function Br(e, t, n = i) {
	f(e) && (e = Jr(e));
	for (let n in e) {
		let r = e[n], i;
		i = b(r) ? "default" in r ? Kn(r.from || n, r.default, !0) : Kn(r.from || n) : Kn(r), /* @__PURE__ */ M(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Vr(e, t, n) {
	yn(f(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Hr(e, t, n, r) {
	let i = r.includes(".") ? er(n, r) : () => n[r];
	if (v(e)) {
		let n = t[e];
		g(n) && Zn(i, n);
	} else if (g(e)) Zn(i, e.bind(n));
	else if (b(e)) {
		if (f(e)) e.forEach((e) => Hr(e, t, n, r));
		else {
			let r = g(e.handler) ? e.handler.bind(n) : t[e.handler];
			g(r) && Zn(i, r, e);
		}
	}
}
function Ur(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Wr(c, e, o, !0)), Wr(c, t, o)), b(t) && a.set(t, c), c;
}
function Wr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Wr(e, a, n, !0), i && i.forEach((t) => Wr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Gr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Gr = {
	data: Kr,
	props: Xr,
	emits: Xr,
	methods: Yr,
	computed: Yr,
	beforeCreate: F,
	created: F,
	beforeMount: F,
	mounted: F,
	beforeUpdate: F,
	updated: F,
	beforeDestroy: F,
	beforeUnmount: F,
	destroyed: F,
	unmounted: F,
	activated: F,
	deactivated: F,
	errorCaptured: F,
	serverPrefetch: F,
	components: Yr,
	directives: Yr,
	watch: Zr,
	provide: Kr,
	inject: qr
};
function Kr(e, t) {
	return t ? e ? function() {
		return c(g(e) ? e.call(this, this) : e, g(t) ? t.call(this, this) : t);
	} : t : e;
}
function qr(e, t) {
	return Yr(Jr(e), Jr(t));
}
function Jr(e) {
	if (f(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function F(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Yr(e, t) {
	return e ? c(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Xr(e, t) {
	return e ? f(e) && f(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : c(/* @__PURE__ */ Object.create(null), Lr(e), Lr(t ?? {})) : t;
}
function Zr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = c(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = F(e[r], t[r]);
	return n;
}
function Qr() {
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
var $r = 0;
function ei(e, t) {
	return function(n, r = null) {
		g(n) || (n = c({}, n)), r != null && !b(r) && (r = null);
		let i = Qr(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, l = i.app = {
			_uid: $r++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Va,
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
					let u = l._ceVNode || la(n, r);
					return u.appContext = i, c === !0 ? c = "svg" : c === !1 && (c = void 0), o && t ? t(u, a) : e(u, a, c), s = !0, l._container = a, a.__vue_app__ = l, Ra(u.component);
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
				let t = ti;
				ti = l;
				try {
					return e();
				} finally {
					ti = t;
				}
			}
		};
		return l;
	};
}
var ti = null, ni = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${E(t)}Modifiers`] || e[`${ae(t)}Modifiers`];
function ri(e, t, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || n, a = r, o = t.startsWith("update:"), s = o && ni(i, t.slice(7));
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
var ii = /* @__PURE__ */ new WeakMap();
function ai(e, t, n = !1) {
	let r = n ? ii : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!g(e)) {
		let r = (e) => {
			let n = ai(e, t, !0);
			n && (s = !0, c(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (b(e) && r.set(e, null), null) : (f(a) ? a.forEach((e) => o[e] = null) : c(o, a), b(e) && r.set(e, o), o);
}
function oi(e, t) {
	return !e || !o(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), d(e, t[0].toLowerCase() + t.slice(1)) || d(e, ae(t)) || d(e, t));
}
function si(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, v = Vn(e), y, b;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			y = ha(u.call(t, e, d, f, m, p, h)), b = c;
		} else {
			let e = t;
			y = ha(e.length > 1 ? e(f, {
				attrs: c,
				slots: o,
				emit: l
			}) : e(f, null)), b = t.props ? c : li(c);
		}
	} catch (t) {
		Xi.length = 0, bn(t, e, 1), y = la(Ji);
	}
	let x = y;
	if (b && g !== !1) {
		let e = Object.keys(b), { shapeFlag: t } = x;
		e.length && t & 7 && (a && e.some(s) && (b = ui(b, a)), x = fa(x, b, !1, !0));
	}
	return n.dirs && (x = fa(x, null, !1, !0), x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs), n.transition && or(nr(x.type) && ar(x) || x, n.transition), y = x, Vn(v), y;
}
function ci(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (aa(r)) {
			if (r.type !== Ji || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var li = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || o(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, ui = (e, t) => {
	let n = {};
	for (let r in e) s(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function di(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? fi(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (pi(o, r, n) && !oi(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || fi(r, o, l) : !!o;
	return !1;
}
function fi(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!d(e, a) || pi(t, e, a) && !oi(n, a)) return !0;
	}
	return !1;
}
function pi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && b(r) && b(i) ? !Te(r, i) : r !== i;
}
function mi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var hi = {}, gi = () => Object.create(hi), _i = (e) => Object.getPrototypeOf(e) === hi;
function vi(e, t, n, r = !1) {
	let i = {}, a = gi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), bi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Gt(i) : e.type.props ? i : a, e.attrs = a;
}
function yi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ j(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (oi(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) {
					if (d(a, o)) u !== a[o] && (a[o] = u, l = !0);
					else {
						let t = E(o);
						i[t] = xi(c, s, t, u, e, !1);
					}
				} else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		bi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (d(t, a) || (r = ae(a)) !== a && d(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = xi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && d(t, e) || (delete a[e], l = !0);
	}
	l && ct(e.attrs, "set", "");
}
function bi(e, t, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let n in t) {
		if (te(n)) continue;
		let l = t[n], u;
		a && d(a, u = E(n)) ? !o || !o.includes(u) ? r[u] = l : (c ||= {})[u] = l : oi(e.emitsOptions, n) || n in i && l === i[n] || (i[n] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ j(r), i = c || n;
		for (let n = 0; n < o.length; n++) {
			let s = o[n];
			r[s] = xi(a, t, s, i[s], e, !d(i, s));
		}
	}
	return s;
}
function xi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = d(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && g(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Oa(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === ae(n)) && (r = !0));
	}
	return r;
}
var Si = /* @__PURE__ */ new WeakMap();
function Ci(e, t, i = !1) {
	let a = i ? Si : t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, l = {}, u = [], p = !1;
	if (!g(e)) {
		let n = (e) => {
			p = !0;
			let [n, r] = Ci(e, t, !0);
			c(l, n), r && u.push(...r);
		};
		!i && t.mixins.length && t.mixins.forEach(n), e.extends && n(e.extends), e.mixins && e.mixins.forEach(n);
	}
	if (!s && !p) return b(e) && a.set(e, r), r;
	if (f(s)) for (let e = 0; e < s.length; e++) {
		let t = E(s[e]);
		wi(t) && (l[t] = n);
	}
	else if (s) for (let e in s) {
		let t = E(e);
		if (wi(t)) {
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
function wi(e) {
	return e[0] !== "$" && !te(e);
}
var Ti = (e) => e === "_" || e === "_ctx" || e === "$stable", Ei = (e) => f(e) ? e.map(ha) : [ha(e)], Di = (e, t, n) => {
	if (t._n) return t;
	let r = Hn((...e) => Ei(t(...e)), n);
	return r._c = !1, r;
}, Oi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Ti(n)) continue;
		let i = e[n];
		if (g(i)) t[n] = Di(n, i, r);
		else if (i != null) {
			let e = Ei(i);
			t[n] = () => e;
		}
	}
}, ki = (e, t) => {
	let n = Ei(t);
	e.slots.default = () => n;
}, Ai = (e, t, n) => {
	for (let r in t) (n || !Ti(r)) && (e[r] = t[r]);
}, ji = (e, t, n) => {
	let r = e.slots = gi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Ai(r, t, n), n && le(r, "_", e, !0)) : Oi(t, r);
	} else t && ki(e, t);
}, Mi = (e, t, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = n;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? r && e === 1 ? o = !1 : Ai(a, t, r) : (o = !t.$stable, Oi(t, a)), s = t;
	} else t && (ki(e, t), s = { default: 1 });
	if (o) for (let e in a) !Ti(e) && s[e] == null && delete a[e];
}, Ni = Gi;
function Pi(e) {
	return Fi(e);
}
function Fi(e, t) {
	let a = fe();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = i, insertStaticContent: v } = e, y = (e, t, n, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !oa(e, t) && (i = Se(e), _e(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === r && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case qi:
				b(e, t, n, i);
				break;
			case Ji:
				x(e, t, n, i);
				break;
			case Yi:
				e ?? S(t, n, i, s);
				break;
			case Ki:
				oe(e, t, n, i, a, o, s, c, l);
				break;
			default: f & 1 ? T(e, t, n, i, a, o, s, c, l) : f & 6 ? se(e, t, n, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, n, i, a, o, s, c, l, we);
		}
		d != null && a ? fr(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && fr(e.ref, null, o, e, !0);
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && re(e.children, d, null, r, i, Ii(e, a), s, u), v && Wn(e, null, r, "created"), ne(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !te(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && ya(f, r, e);
		}
		v && Wn(e, null, r, "beforeMount");
		let y = Ri(i, g);
		y && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || y || v) && Ni(() => {
			try {
				f && ya(f, r, e), y && g.enter(d), v && Wn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, ne = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Wi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ne(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, re = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? ga(e[l]) : ha(e[l]);
			y(null, c, t, n, r, i, a, o, s);
		}
	}, E = (e, t, r, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || n, h = t.props || n, g;
		if (r && Li(r, !1), (g = h.onVnodeBeforeUpdate) && ya(g, r, t, e), f && Wn(t, e, r, "beforeUpdate"), r && Li(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? ie(e.dynamicChildren, d, l, r, i, Ii(t, a), o) : s || pe(e, t, l, null, r, i, Ii(t, a), o, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && Ni(() => {
			g && ya(g, r, t, e), f && Wn(t, e, r, "updated");
		}, i);
	}, ie = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || Ui(c), d = u && (c.type === Ki || !oa(c, l) || c.shapeFlag & 198) ? m(u) : n;
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
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), re(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ie(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && zi(e, t, !0)) : pe(e, t, n, f, i, a, s, c, l);
	}, se = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ce(t, n, r, i, a, o, c) : le(e, t, c);
	}, ce = (e, t, n, r, i, a, o) => {
		let s = e.component = Ca(e, r, i);
		if (hr(e) && (s.ctx.renderer = we), Ma(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ue, o, a), !e.el) {
				let r = s.subTree = la(Ji);
				x(null, r, t, n), e.placeholder = r.el;
			}
		} else ue(s, e, t, n, i, a, o);
	}, le = (e, t, n) => {
		let r = t.component = e.component;
		if (di(e, t, n)) {
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
					let n = Vi(e);
					if (n) {
						t && (t.el = c.el, de(e, t, o)), n.asyncDep.then(() => {
							Ni(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Li(e, !1), t ? (t.el = c.el, de(e, t, o)) : t = c, n && D(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ya(d, s, t, c), Li(e, !0);
				let f = si(e), p = e.subTree;
				e.subTree = f, y(p, f, m(p.el), Se(p), e, i, a), t.el = f.el, u === null && mi(e, f.el), r && Ni(r, i), (d = t.props && t.props.onVnodeUpdated) && Ni(() => ya(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = mr(t);
				if (Li(e, !1), l && D(l), !m && (o = c && c.onVnodeBeforeMount) && ya(o, d, t), Li(e, !0), s && Ee) {
					let t = () => {
						e.subTree = si(e), Ee(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = si(e);
					y(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Ni(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Ni(() => ya(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && mr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Ni(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ie(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => An(u), Li(e, !0), l();
	}, de = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, yi(e, t.props, r, n), Mi(e, t.children, n), Ze(), Nn(e), Qe();
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
			let r = t[p] = l ? ga(t[p]) : ha(t[p]);
			y(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? xe(e, a, o, !0, !1, f) : re(t, n, i, a, o, s, c, l, f);
	}, he = (e, t, n, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? ga(t[u]) : ha(t[u]);
			if (oa(r, i)) y(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? ga(t[p]) : ha(t[p]);
			if (oa(r, i)) y(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, r = e < d ? t[e].el : i;
				for (; u <= p;) y(null, t[u] = l ? ga(t[u]) : ha(t[u]), n, r, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) _e(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? ga(t[u]) : ha(t[u]);
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
				else for (v = h; v <= p; v++) if (w[v - h] === 0 && oa(r, t[v])) {
					i = v;
					break;
				}
				i === void 0 ? _e(r, a, o, !0) : (w[i - h] = u + 1, i >= C ? C = i : S = !0, y(r, t[i], n, null, a, o, s, c, l), b++);
			}
			let T = S ? Bi(w) : r;
			for (v = T.length - 1, u = x - 1; u >= 0; u--) {
				let e = h + u, r = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Ui(f) : i;
				w[u] === 0 ? y(null, r, n, p, a, o, s, c, l) : S && (v < 0 || u !== T[v] ? ge(r, n, p, 2) : v--);
			}
		}
	}, ge = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) ge(e.component.subTree, t, n, r);
		else if (d & 128) e.suspense.move(t, n, r);
		else if (d & 64) c.move(e, t, n, we);
		else if (c === Ki) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) ge(u[e], t, n, r);
			o(e.anchor, t, n);
		} else if (c === Yi) C(e, t, n);
		else if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[rr] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), Ni(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[rr];
					a._isLeaving && a[rr](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, _e = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (Ze(), fr(s, null, n, e, !0), Qe()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !mr(e), v;
		if (g && (v = o && o.onVnodeBeforeUnmount) && ya(v, t, e), u & 6) be(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Wn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, we, r) : l && !l.hasOnce && (a !== Ki || d > 0 && d & 64) ? xe(l, t, n, !1, !0) : (a === Ki && d & 384 || !i && u & 16) && xe(c, t, n), r && ve(e);
		}
		let y = m != null && p == null;
		(g && (v = o && o.onVnodeUnmounted) || h || y) && Ni(() => {
			v && ya(v, t, e), h && Wn(e, null, t, "unmounted"), y && (e.el = null);
		}, n);
	}, ve = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === Ki;
		if (a && !i) {
			ye(n, r);
			return;
		}
		if (t === Yi) {
			w(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? sr(e) : e, c = () => {
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
		Hi(c), Hi(l), r && D(r), i.stop(), a ? (a.flags |= 8, _e(o, e, t, n)) : e.vnode.el && o && (o.transition = e.vnode.transition, _e(o, e, t, n)), s && Ni(s, t), Ni(() => {
			e.isUnmounted = !0;
		}, t);
	}, xe = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) _e(e[o], t, n, r, i);
	}, Se = (e) => {
		if (e.shapeFlag & 6) return Se(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[tr];
		return n ? h(n) : t;
	}, Ce = (e, t, n) => {
		In(() => {
			e == null ? t._vnode && _e(t._vnode, null, null, !0) : y(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : Sa());
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
		createApp: ei(Ce, Te)
	};
}
function Ii({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Li({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ri(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function zi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (f(r) && f(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ga(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && zi(t, a)), a.type === qi && (a.patchFlag === -1 && (a = i[e] = ga(a)), a.el = t.el), a.type === Ji && !a.el && (a.el = t.el);
	}
}
function Bi(e) {
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
function Vi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Vi(t);
}
function Hi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Ui(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Ui(t.subTree) : null;
}
var Wi = (e) => e.__isSuspense;
function Gi(e, t) {
	t && t.pendingBranch ? f(e) ? t.effects.push(...e) : t.effects.push(e) : Mn(e);
}
var Ki = /* @__PURE__ */ Symbol.for("v-fgt"), qi = /* @__PURE__ */ Symbol.for("v-txt"), Ji = /* @__PURE__ */ Symbol.for("v-cmt"), Yi = /* @__PURE__ */ Symbol.for("v-stc"), Xi = [], Zi = null;
function Qi(e = !1) {
	Xi.push(Zi = e ? null : []);
}
function $i() {
	Xi.pop(), Zi = Xi[Xi.length - 1] || null;
}
var ea = 1;
function ta(e, t = !1) {
	ea += e, e < 0 && Zi && t && (Zi.hasOnce = !0);
}
function na(e) {
	return e.dynamicChildren = ea > 0 ? Zi || r : null, $i(), ea > 0 && Zi && Zi.push(e), e;
}
function ra(e, t, n, r, i, a) {
	return na(I(e, t, n, r, i, a, !0));
}
function ia(e, t, n, r, i) {
	return na(la(e, t, n, r, i, !0));
}
function aa(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function oa(e, t) {
	return e.type === t.type && e.key === t.key;
}
var sa = ({ key: e }) => e ?? null, ca = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : v(e) || /* @__PURE__ */ M(e) || g(e) ? {
	i: zn,
	r: e,
	k: t,
	f: !!n
} : e);
function I(e, t = null, n = null, r = 0, i = null, a = e === Ki ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && sa(t),
		ref: t && ca(t),
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
	return s ? (_a(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= v(n) ? 8 : 16), ea > 0 && !o && Zi && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Zi.push(c), c;
}
var la = ua;
function ua(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== Mr || (e = Ji), aa(e)) {
		let r = fa(e, t, !0);
		return n && _a(r, n), ea > 0 && !a && Zi && (r.shapeFlag & 6 ? Zi[Zi.indexOf(e)] = r : Zi.push(r)), r.patchFlag = -2, r;
	}
	if (za(e) && (e = e.__vccOpts), t) {
		t = da(t);
		let { class: e, style: n } = t;
		e && !v(e) && (t.class = ve(e)), b(n) && (/* @__PURE__ */ Zt(n) && !f(n) && (n = c({}, n)), t.style = pe(n));
	}
	let o = v(e) ? 1 : Wi(e) ? 128 : nr(e) ? 64 : b(e) ? 4 : g(e) ? 2 : 0;
	return I(e, t, n, r, i, o, a, !0);
}
function da(e) {
	return e ? /* @__PURE__ */ Zt(e) || _i(e) ? c({}, e) : e : null;
}
function fa(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? va(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && sa(l),
		ref: t && t.ref ? n && a ? f(a) ? a.concat(ca(t)) : [a, ca(t)] : ca(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== Ki ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && fa(e.ssContent),
		ssFallback: e.ssFallback && fa(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && or(u, c.clone(u)), u;
}
function pa(e = " ", t = 0) {
	return la(qi, null, e, t);
}
function ma(e = "", t = !1) {
	return t ? (Qi(), ia(Ji, null, e)) : la(Ji, null, e);
}
function ha(e) {
	return e == null || typeof e == "boolean" ? la(Ji) : f(e) ? la(Ki, null, e.slice()) : aa(e) ? ga(e) : la(qi, null, String(e));
}
function ga(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : fa(e);
}
function _a(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (f(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), _a(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !_i(t) ? t._ctx = zn : r === 3 && zn && (zn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (g(t)) {
		if (r & 65) {
			_a(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: zn
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [pa(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function va(...e) {
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
function ya(e, t, n, r = null) {
	yn(e, t, 7, [n, r]);
}
var ba = Qr(), xa = 0;
function Sa() {
	return xa;
}
function Ca(e, t, r) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || ba, o = {
		uid: xa++,
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
		propsOptions: Ci(i, a),
		emitsOptions: ai(i, a),
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
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = ri.bind(null, o), e.ce && e.ce(o), o;
}
var wa = null, Ta = () => wa || zn, Ea, Da;
{
	let e = fe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Ea = t("__VUE_INSTANCE_SETTERS__", (e) => wa = e), Da = t("__VUE_SSR_SETTERS__", (e) => ja = e);
}
var Oa = (e) => {
	let t = wa;
	return Ea(e), e.scope.on(), () => {
		e.scope.off(), Ea(t);
	};
}, ka = () => {
	wa && wa.scope.off(), Ea(null);
};
function Aa(e) {
	return e.vnode.shapeFlag & 4;
}
var ja = !1;
function Ma(e, t = !1, n = !1) {
	t && Da(t);
	let { props: r, children: i } = e.vnode, a = Aa(e);
	vi(e, r, a, t), ji(e, i, n || t);
	let o = a ? Na(e, t) : void 0;
	return t && Da(!1), o;
}
function Na(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ir);
	let { setup: r } = n;
	if (r) {
		Ze();
		let n = e.setupContext = r.length > 1 ? La(e) : null, i = Oa(e), a = vn(r, e, 0, [e.props, n]), o = x(a);
		if (Qe(), i(), (o || e.sp) && !mr(e) && lr(e), o) {
			if (a.then(ka, ka), t) return a.then((n) => {
				Da(!0);
				try {
					Pa(e, n, t);
				} finally {
					Da(!1);
				}
			}).catch((t) => {
				bn(t, e, 0);
			});
			e.asyncDep = a;
		} else Pa(e, a, t);
	} else Fa(e, t);
}
function Pa(e, t, n) {
	g(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) && (e.setupState = on(t)), Fa(e, n);
}
function Fa(e, t, n) {
	let r = e.type;
	e.render ||= r.render || i;
	{
		let t = Oa(e);
		Ze();
		try {
			zr(e);
		} finally {
			Qe(), t();
		}
	}
}
var Ia = { get(e, t) {
	return A(e, "get", ""), e[t];
} };
function La(e) {
	return {
		attrs: new Proxy(e.attrs, Ia),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Ra(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(on(Qt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Pr) return Pr[n](e);
		},
		has(e, t) {
			return t in e || t in Pr;
		}
	}) : e.proxy;
}
function za(e) {
	return g(e) && "__vccOpts" in e;
}
var Ba = (e, t) => /* @__PURE__ */ dn(e, t, ja), Va = "3.5.44", Ha = void 0, Ua = typeof window < "u" && window.trustedTypes;
if (Ua) try {
	Ha = /* @__PURE__ */ Ua.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Wa = Ha ? (e) => Ha.createHTML(e) : (e) => e, Ga = "http://www.w3.org/2000/svg", Ka = "http://www.w3.org/1998/Math/MathML", qa = typeof document < "u" ? document : null, Ja = qa && /* @__PURE__ */ qa.createElement("template"), Ya = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? qa.createElementNS(Ga, e) : t === "mathml" ? qa.createElementNS(Ka, e) : n ? qa.createElement(e, { is: n }) : qa.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => qa.createTextNode(e),
	createComment: (e) => qa.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => qa.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			Ja.innerHTML = Wa(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Ja.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Xa = /* @__PURE__ */ Symbol("_vtc");
function Za(e, t, n) {
	let r = e[Xa];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Qa = /* @__PURE__ */ Symbol("_vod"), $a = /* @__PURE__ */ Symbol("_vsh"), eo = /* @__PURE__ */ Symbol(""), to = /(?:^|;)\s*display\s*:/;
function no(e, t, n) {
	let r = e.style, i = v(n), a = !1;
	if (n && !i) {
		if (t) {
			if (v(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? io(r, t, "");
			}
			else for (let e in t) n[e] ?? io(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? io(r, i, "") : co(e, i, !v(t) && t ? t[i] : void 0, o) || io(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[eo];
			e && (n += ";" + e), r.cssText = n, a = to.test(n);
		}
	} else t && e.removeAttribute("style");
	Qa in e && (i && t === n || (e[Qa] = a ? r.display : ""), e[$a] && (r.display = "none"));
}
var ro = /\s*!important$/;
function io(e, t, n) {
	if (f(n)) n.forEach((n) => io(e, t, n));
	else if (n ??= "", t.startsWith("--")) ro.test(n) ? e.setProperty(t, n.replace(ro, ""), "important") : e.setProperty(t, n);
	else {
		let r = so(e, t);
		ro.test(n) ? e.setProperty(ae(r), n.replace(ro, ""), "important") : e[r] = n;
	}
}
var ao = [
	"Webkit",
	"Moz",
	"ms"
], oo = {};
function so(e, t) {
	let n = oo[t];
	if (n) return n;
	let r = E(t);
	if (r !== "filter" && r in e) return oo[t] = r;
	r = oe(r);
	for (let n = 0; n < ao.length; n++) {
		let i = ao[n] + r;
		if (i in e) return oo[t] = i;
	}
	return t;
}
function co(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && v(r) && n === r;
}
var lo = "http://www.w3.org/1999/xlink";
function uo(e, t, n, r, i, a = ye(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(lo, t.slice(6, t.length)) : e.setAttributeNS(lo, t, n) : n == null || a && !be(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : y(n) ? String(n) : n);
}
function fo(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Wa(n) : n);
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
function po(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function mo(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var ho = /* @__PURE__ */ Symbol("_vei");
function go(e, t, n, r, i = null) {
	let a = e[ho] || (e[ho] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = yo(t);
		r ? po(e, n, a[t] = Co(r, i), s) : o && (mo(e, n, o, s), a[t] = void 0);
	}
}
var _o = /(Once|Passive|Capture)$/, vo = /^on:?(?:Once|Passive|Capture)$/;
function yo(e) {
	let t, n;
	for (; (n = e.match(_o)) && !vo.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : ae(e.slice(2)), t];
}
var bo = 0, xo = /* @__PURE__ */ Promise.resolve(), So = () => bo ||= (xo.then(() => bo = 0), Date.now());
function Co(e, t) {
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
	return n.value = e, n.attached = So(), n;
}
var wo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, To = (e, t, n, r, i, a) => {
	let c = i === "svg";
	t === "class" ? Za(e, r, c) : t === "style" ? no(e, n, r) : o(t) ? s(t) || go(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : Eo(e, t, r, c)) ? (fo(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || uo(e, t, r, c, a, t !== "value")) : e._isVueCE && (Do(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !v(r))) ? fo(e, E(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), uo(e, t, r, c));
};
function Eo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && wo(t) && g(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return wo(t) && v(n) ? !1 : t in e;
}
function Do(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = E(t);
	return Array.isArray(n) ? n.some((e) => E(e) === r) : Object.keys(n).some((e) => E(e) === r);
}
var Oo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return f(t) ? (e) => D(t, e) : t;
};
function ko(e) {
	e.target.composing = !0;
}
function Ao(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var jo = /* @__PURE__ */ Symbol("_assign"), Mo = /* @__PURE__ */ Symbol("_initialValue");
function No(e, t, n) {
	return t && (e = e.trim()), n && (e = ue(e)), e;
}
var Po = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[Mo] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Mo] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[jo] = Oo(i);
		let a = r || i.props && i.props.type === "number";
		po(e, t ? "change" : "input", (t) => {
			t.target.composing || e[jo](No(e.value, n, a));
		}), (n || a) && po(e, "change", () => {
			e.value = No(e.value, n, a);
		}), t || (po(e, "compositionstart", ko), po(e, "compositionend", Ao), po(e, "change", Ao));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[Mo];
		delete e[Mo], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[jo](No(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[jo] = Oo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ue(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, Fo = {
	deep: !0,
	created(e, t, n) {
		e[jo] = Oo(n), po(e, "change", () => {
			let t = e._modelValue, n = Lo(e), r = e.checked, i = e[jo];
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
			} else i(Ro(e, r));
		});
	},
	mounted: Io,
	beforeUpdate(e, t, n) {
		e[jo] = Oo(n), Io(e, t, n);
	}
};
function Io(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (f(t)) i = Ee(t, r.props.value) > -1;
	else if (m(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Te(t, Ro(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
function Lo(e) {
	return "_value" in e ? e._value : e.value;
}
function Ro(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var zo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Bo = {
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
	exact: (e, t) => zo.some((n) => e[`${n}Key`] && !t.includes(n))
}, Vo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Bo[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Ho = /* @__PURE__ */ c({ patchProp: To }, Ya), Uo;
function Wo() {
	return Uo ||= Pi(Ho);
}
var Go = ((...e) => {
	let t = Wo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = qo(e);
		if (!r) return;
		let i = t._component;
		g(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Ko(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Ko(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function qo(e) {
	return v(e) ? document.querySelector(e) : e;
}
// node_modules/pinia/dist/pinia.mjs
var Jo, Yo = (e) => Jo = e, Xo = () => qn() && Kn(Zo) || Jo, Zo = Symbol();
function Qo(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var $o;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})($o ||= {});
var es = typeof window < "u", ts = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function ns(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function rs(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		cs(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function is(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function as(e) {
	try {
		e.dispatchEvent(new MouseEvent("click"));
	} catch {
		let t = document.createEvent("MouseEvents");
		t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(t);
	}
}
var os = typeof navigator == "object" ? navigator : { userAgent: "" }, ss = /Macintosh/.test(os.userAgent) && /AppleWebKit/.test(os.userAgent) && !/Safari/.test(os.userAgent), cs = es ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !ss ? ls : "msSaveOrOpenBlob" in os ? us : ds : () => {};
function ls(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? as(r) : is(r.href) ? rs(e, t, n) : (r.target = "_blank", as(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		as(r);
	}, 0));
}
function us(e, t = "download", n) {
	if (typeof e == "string") {
		if (is(e)) rs(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				as(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(ns(e, n), t);
}
function ds(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return rs(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(ts.HTMLElement)) || "safari" in ts, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || ss) && typeof FileReader < "u") {
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
var { assign: fs } = Object;
function ps() {
	let e = Me(!0), t = e.run(() => /* @__PURE__ */ tn({})), n = [], r = [], i = Qt({
		install(e) {
			Yo(i), i._a = e, e.provide(Zo, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var ms = () => {};
function hs(e, t, n, r = ms) {
	e.push(t);
	let i = () => {
		let n = e.indexOf(t);
		n > -1 && (e.splice(n, 1), r());
	};
	return !n && Ne() && Pe(i), i;
}
function gs(e, ...t) {
	e.slice().forEach((e) => {
		e(...t);
	});
}
var _s = (e) => e(), vs = Symbol(), ys = Symbol();
function bs(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		e[n] = Qo(i) && Qo(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ M(r) && !/* @__PURE__ */ Jt(r) ? bs(i, r) : r;
	}
	return e;
}
var xs = Symbol();
function Ss(e) {
	return !Qo(e) || !e.hasOwnProperty(xs);
}
var { assign: Cs } = Object;
function ws(e) {
	return !!(/* @__PURE__ */ M(e) && e.effect);
}
function Ts(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), Cs(/* @__PURE__ */ sn(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Qt(Ba(() => {
			Yo(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = Es(e, l, t, n, r, !0), c;
}
function Es(e, t, n = {}, r, i, a) {
	let o, s = Cs({ actions: {} }, n), c = { deep: !0 }, l, u, d = [], f = [], p, m = r.state.value[e];
	!a && !m && (r.state.value[e] = {});
	let h;
	function g(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: $o.patchFunction,
			storeId: e,
			events: p
		}) : (bs(r.state.value[e], t), n = {
			type: $o.patchObject,
			payload: t,
			storeId: e,
			events: p
		});
		let i = h = Symbol();
		On().then(() => {
			h === i && (l = !0);
		}), u = !0, gs(d, n, r.state.value[e]);
	}
	let v = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			Cs(e, t);
		});
	} : ms;
	function y() {
		o.stop(), d = [], f = [], r._s.delete(e);
	}
	let b = (t, n = "") => {
		if (vs in t) return t[ys] = n, t;
		let i = function() {
			Yo(r);
			let n = Array.from(arguments), a = [], o = [];
			function s(e) {
				a.push(e);
			}
			function c(e) {
				o.push(e);
			}
			gs(f, {
				args: n,
				name: i[ys],
				store: x,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : x, n);
			} catch (e) {
				throw gs(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (gs(a, e), e)).catch((e) => (gs(o, e), Promise.reject(e))) : (gs(a, l), l);
		};
		return i[vs] = !0, i[ys] = n, i;
	}, x = /* @__PURE__ */ Wt({
		_p: r,
		$id: e,
		$onAction: hs.bind(null, f),
		$patch: g,
		$reset: v,
		$subscribe(t, n = {}) {
			let i = hs(d, t, n.detached, () => a()), a = o.run(() => Zn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: $o.direct,
					events: p
				}, r);
			}, Cs({}, c, n)));
			return i;
		},
		$dispose: y
	});
	r._s.set(e, x);
	let S = (r._a && r._a.runWithContext || _s)(() => r._e.run(() => (o = Me()).run(() => t({ action: b }))));
	for (let t in S) {
		let n = S[t];
		/* @__PURE__ */ M(n) && !ws(n) || /* @__PURE__ */ Jt(n) ? a || (m && Ss(n) && (/* @__PURE__ */ M(n) ? n.value = m[t] : bs(n, m[t])), r.state.value[e][t] = n) : typeof n == "function" && (S[t] = b(n, t), s.actions[t] = n);
	}
	return Cs(x, S), Cs(/* @__PURE__ */ j(x), S), Object.defineProperty(x, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			g((t) => {
				Cs(t, e);
			});
		}
	}), r._p.forEach((e) => {
		Cs(x, o.run(() => e({
			store: x,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), m && a && n.hydrate && n.hydrate(x.$state, m), l = !0, u = !0, x;
}
function Ds(e, t, n) {
	let r, i, a = typeof t == "function";
	typeof e == "string" ? (r = e, i = a ? n : t) : (i = e, r = e.id);
	function o(e, n) {
		let o = qn();
		return e ||= o ? Kn(Zo, null) : null, e && Yo(e), e = Jo, e._s.has(r) || (a ? Es(r, t, i, e) : Ts(r, i, e)), e._s.get(r);
	}
	return o.$id = r, o;
}
// src/host-context.ts
function L() {
	return document;
}
function R() {
	return window;
}
// src/character-management-module.ts
var Os = "th-modern-character-management", ks = "th-modern-character-panel", As = "th-modern-character-list", js = "th-modern-character-editor", Ms = "th-modern-character-summary", Ns = "th-modern-character-summary-main", Ps = "th-modern-character-summary-identity", Fs = "th-modern-character-summary-buttons", Is = "th-modern-character-summary-fields";
function Ls(e, t) {
	e.body.classList.toggle(Os, t), e.querySelector("#right-nav-panel")?.classList.toggle(ks, t), e.querySelector("#rm_characters_block")?.classList.toggle(As, t), e.querySelector("#rm_ch_create_block")?.classList.toggle(js, t);
}
function Rs(e, t, n) {
	let r = e.createComment(`th-modern-character-${t.id || t.classList[0] || "node"}`);
	return t.before(r), n.append(t), {
		marker: r,
		node: t
	};
}
function zs(e) {
	e.marker.parentNode?.insertBefore(e.node, e.marker), e.marker.remove();
}
function Bs(e) {
	e && ([...e.moves].reverse().forEach(zs), e.summary.classList.remove(Ms), e.main.remove(), e.fields.remove());
}
function Vs(e) {
	let t = e.querySelector("#avatar-and-name-block"), n = e.querySelector("#avatar_div"), r = e.querySelector("#rm_PinAndTabs"), i = e.querySelector("#name_div"), a = e.querySelector("#avatar_controls > .form_create_bottom_buttons_block"), o = e.querySelector("#char-management-dropdown")?.closest("label"), s = e.querySelector("#tags_div");
	if (!t || !n || !r || !i || !a || !o || !s) return null;
	let c = e.createElement("div");
	c.className = Ns;
	let l = e.createElement("div");
	l.className = Ps;
	let u = e.createElement("div");
	u.className = Fs;
	let d = e.createElement("div");
	d.className = Is;
	let f = [];
	try {
		f.push(Rs(e, n, c)), c.append(l, u), f.push(Rs(e, r, l)), f.push(Rs(e, i, l)), f.push(Rs(e, a, u)), f.push(Rs(e, o, d)), f.push(Rs(e, s, d)), t.append(c, d), t.classList.add(Ms);
	} catch (e) {
		throw [...f].reverse().forEach(zs), c.remove(), d.remove(), e;
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
function Hs(e, t) {
	return t.summary.isConnected && t.summary.classList.contains(Ms) && t.main.parentElement === t.summary && t.fields.parentElement === t.summary && t.moves.every((e) => e.marker.isConnected && e.node.isConnected) && e.querySelector("#rm_PinAndTabs") === t.pinAndTabs && t.pinAndTabs.parentElement === t.identity && e.querySelector("#name_div") === t.name && t.name.parentElement === t.identity && t.buttonsBlock.parentElement === t.buttons && e.querySelector("#char-management-dropdown")?.closest("label") === t.dropdown && t.dropdown.parentElement === t.fields && e.querySelector("#tags_div") === t.tags && t.tags.parentElement === t.fields;
}
function Us(e) {
	return e?.dataset.menuType === "create" || e?.dataset.menuType === "character_edit";
}
function Ws(e) {
	let t = L(), n = R(), r = n.MutationObserver, i = null, a = null, o = null, s = 0, c = () => {
		Bs(i), i = null;
	}, l = () => {
		a &&= (zs(a), null);
	}, u = (e) => {
		let n = t.querySelector("#rm_button_panel_pin_div"), r = e?.querySelector(":scope > .th-modern-drawer-titlebar .th-modern-drawer-actions");
		a && a.marker.isConnected && a.node === n && a.node.parentElement === r || (l(), n && r && (a = Rs(t, n, r)));
	}, d = () => {
		c(), l(), Ls(t, !1);
	}, f = () => {
		if (s = 0, !(e.is_active && e.settings.modernCharacterManagement)) {
			h(null), d();
			return;
		}
		Ls(t, !0);
		let n = t.querySelector("#right-nav-panel");
		h(n), u(n), Us(n) ? (i && !Hs(t, i) && c(), i ??= Vs(t)) : c();
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
	let g = Zn(() => [e.is_active, e.settings.modernCharacterManagement], p, { immediate: !0 });
	return { destroy() {
		g(), m.disconnect(), s &&= (n.cancelAnimationFrame(s), 0), d();
	} };
}
// src/extension-settings-module.ts
var Gs = "th-modern-extension-settings", Ks = "th-modern-extension-panel", qs = "th-modern-extension-layout", Js = "th-modern-extension-nav", Ys = "th-modern-extension-nav-list", Xs = "th-modern-extension-nav-count", Zs = "th-modern-extension-nav-item", Qs = "is-active", $s = "th-modern-extension-column", ec = "is-active", tc = "th-modern-extension-host-hidden", nc = "th-modern-extension-host-active", rc = "th-modern-extension-drawer", ic = "th-modern-extension-drawer-active", ac = "th-modern-extension-mobile-accordion", oc = 440, sc = "TavernHelper.modernLayout.selectedExtensionSettings";
function cc(e) {
	return (e ?? "").replace(/\s+/g, " ").trim();
}
function lc(e) {
	return e.matches(".inline-drawer") ? [e] : Array.from(e.querySelectorAll(".inline-drawer")).filter((t) => {
		let n = t.parentElement?.closest(".inline-drawer");
		return !n || !e.contains(n);
	});
}
function uc(e, t) {
	let n = t;
	for (; n.parentElement && n.parentElement !== e;) n = n.parentElement;
	return n;
}
function dc(e, t) {
	let n = t?.querySelector(":scope > .inline-drawer-toggle.inline-drawer-header, :scope > .inline-drawer-toggle"), r = n?.querySelector("b, strong, h3, h4") ?? n ?? e.querySelector("h3, h4, .standoutHeader");
	if (!r) return {
		title: cc(e.id.replace(/_container$/i, "").replaceAll("_", " ")) || "未命名扩展",
		badge: null
	};
	let i = r.cloneNode(!0);
	i.querySelectorAll("a, button, .notes-link, i, svg, .inline-drawer-icon").forEach((e) => e.remove());
	let a = null, o = Array.from(i.querySelectorAll("span, small, em")).find((e) => {
		let t = cc(e.textContent), n = e.classList.contains("text-red-500") || e.classList.contains("badge") || e.classList.contains("th-text-xs"), r = /^new!?$/i.test(t);
		return (n || r) && t.length > 0;
	});
	o && (a = cc(o.textContent) || null, o.remove());
	let s = cc(i.textContent);
	return !s && a && (s = a, a = null), s ||= cc(e.id.replace(/_container$/i, "").replaceAll("_", " ")) || "未命名扩展", {
		title: s,
		badge: a
	};
}
function fc(e) {
	let t = L(), n = R(), r = null, i = null, a = null, o = null, s = null, c = [], l = [], u = S(), d = "", f = 0, p = 0, m = null, h = null, g = null, v = null, y = () => n.matchMedia("(max-width: 899.98px)").matches, b = y() || n.matchMedia(`(max-width: ${oc}px)`).matches, x = () => {
		r && ae(r.getBoundingClientRect().width);
	};
	function S() {
		try {
			return n.sessionStorage.getItem(sc);
		} catch {
			return null;
		}
	}
	function C(e) {
		try {
			e ? n.sessionStorage.setItem(sc, e) : n.sessionStorage.removeItem(sc);
		} catch {}
	}
	function w() {
		let e = /* @__PURE__ */ new Map(), t = [], r = (n, r, i, a, o) => {
			let { title: s, badge: c } = dc(i, a), l = i.getAttribute("script_id") ?? a?.getAttribute("script_id") ?? r.getAttribute("script_id"), u = o ?? (i.id ? `id:${i.id}` : a?.id ? `id:${a.id}` : l ? `script:${l}` : `column:${n.id}:title:${s}`), d = e.get(u) ?? 0;
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
				if (!(t instanceof n.HTMLElement) || t === a || t.classList.contains("mc3-hidden") || t.classList.contains("displayNone") || t.hidden || t.style.display === "none" && !t.classList.contains(tc)) return;
				let i = lc(t).filter((e) => !e.classList.contains("mc3-hidden") && !e.classList.contains("displayNone") && !e.hidden && e.style.display !== "none"), o = t.childElementCount > 0 && cc(t.textContent).length > 0;
				if (i.length === 0 && !o) return;
				if (i.length <= 1) {
					r(e, t, t, i[0] ?? null);
					return;
				}
				let s = i.map((e) => uc(t, e)), c = /* @__PURE__ */ new Map();
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
		o?.querySelectorAll(`.${Zs}`).forEach((e) => {
			let t = e.dataset.extensionKey === u;
			e.classList.toggle(Qs, t), e.setAttribute("aria-current", t ? "page" : "false");
		});
	}
	function te() {
		if (!o || !s) return;
		let e = t.createDocumentFragment();
		l.forEach((n) => {
			let r = t.createElement("button");
			r.type = "button", r.className = Zs, r.dataset.extensionKey = n.key, r.title = n.badge ? `${n.title} (${n.badge})` : n.title;
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
				e.host.classList.remove(tc, nc), e.drawer?.classList.remove(ic);
			}), c.forEach((e) => {
				e.classList.remove(ec), Array.from(e.children).forEach((e) => {
					e instanceof n.HTMLElement && e !== a && e.classList.remove(tc, nc);
				});
			}), ee();
			return;
		}
		let e = l.find((e) => e.key === u) ?? null;
		l.forEach((t) => {
			let n = t === e;
			t.host.classList.toggle(tc, !n), t.host.classList.toggle(nc, n), t.drawer?.classList.toggle(ic, n), t.content && (t.content.classList.toggle("open", n), n && t.content.style.display === "none" && t.content.style.removeProperty("display"));
		}), c.forEach((t) => {
			let r = e?.column === t;
			t.classList.toggle(ec, r), Array.from(t.children).forEach((t) => {
				if (t instanceof n.HTMLElement && t !== a) {
					let n = r && e ? t === e.sourceHost || t === e.host || t.contains(e.host) : !1;
					t.classList.toggle(tc, !n);
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
		let t = y() || e > 0 && e < oc;
		r?.classList.toggle(ac, t), b !== t && (b = t, ne(), b || E());
	}
	function oe() {
		if (f = 0, !i?.isConnected) return;
		let e = w();
		l.forEach((e) => {
			e.host.classList.remove(tc, nc), e.drawer?.classList.remove(rc, ic);
		}), l = e, l.forEach((e) => e.drawer?.classList.add(rc)), l.some((e) => e.key === u) || (u = l.find(T)?.key ?? l[0]?.key ?? null, C(u));
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
		m?.disconnect(), m && (c.forEach((e) => {
			m?.observe(e, {
				childList: !0,
				attributes: !0,
				attributeFilter: [
					"class",
					"style",
					"hidden"
				]
			}), Array.from(e.children).forEach((e) => {
				e instanceof n.HTMLElement && (m?.observe(e, {
					childList: !0,
					attributes: !0,
					attributeFilter: [
						"class",
						"style",
						"hidden"
					]
				}), Array.from(e.children).forEach((e) => {
					e instanceof n.HTMLElement && m?.observe(e, {
						childList: !0,
						attributes: !0,
						attributeFilter: [
							"class",
							"style",
							"hidden"
						]
					});
				}));
			});
		}), l.forEach((e) => {
			e.header && m?.observe(e.header, {
				childList: !0,
				characterData: !0,
				subtree: !0
			});
		}));
	}
	function le(e) {
		let t = (e.target instanceof n.Element ? e.target : null)?.closest(`.${Zs}`);
		if (!t || !a?.contains(t)) return;
		let r = t.dataset.extensionKey;
		r && ie(r);
	}
	function ue() {
		let e = t.createElement("nav");
		e.className = Js, e.setAttribute("aria-label", "扩展程序设置");
		let n = t.createElement("div");
		n.className = "th-modern-extension-nav-header";
		let r = t.createElement("span");
		r.textContent = "扩展设置";
		let i = t.createElement("span");
		i.className = Xs, n.append(r, i);
		let a = t.createElement("div");
		return a.className = Ys, e.append(n, a), e.addEventListener("click", le), o = a, s = i, e;
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
		t.body.classList.add(Gs), r.classList.add(Ks), i.classList.add(qs), c.forEach((e) => e.classList.add($s));
		let e = r.getBoundingClientRect().width;
		b = y() || e > 0 && e < oc, r.classList.toggle(ac, b), a = ue(), c[0].before(a), v = n.matchMedia("(max-width: 899.98px)"), v.addEventListener?.("change", x), m = new n.MutationObserver(ce), D(), h = new n.MutationObserver(() => E()), h.observe(r, {
			attributes: !0,
			attributeFilter: ["class"]
		}), g = new n.ResizeObserver((e) => {
			let t = e.find((e) => e.target === r);
			t && ae(t.contentRect.width);
		}), g.observe(r), oe();
	}
	function fe() {
		v?.removeEventListener?.("change", x), v = null, m?.disconnect(), m = null, h?.disconnect(), h = null, g?.disconnect(), g = null, f !== 0 && (n.cancelAnimationFrame(f), f = 0), p !== 0 && (n.cancelAnimationFrame(p), p = 0), a?.removeEventListener("click", le), a?.remove(), l.forEach((e) => {
			e.host.classList.remove(tc, nc), e.drawer?.classList.remove(rc, ic);
		}), c.forEach((e) => {
			e.classList.remove($s, ec), e.querySelectorAll(`.${ic}`).forEach((e) => e.classList.remove(ic)), Array.from(e.children).forEach((e) => e.classList.remove(tc, nc));
		}), i?.classList.remove(qs), r?.classList.remove(Ks, ac), t.body.classList.remove(Gs), r = null, i = null, a = null, o = null, s = null, c = [], l = [], d = "";
	}
	let pe = Zn(() => [e.is_active, e.settings.modernExtensionSettings], ([e, t]) => {
		e && t ? de() : fe();
	}, { immediate: !0 });
	return { destroy() {
		pe(), fe();
	} };
}
// node_modules/zod/v3/helpers/util.js
var z;
(function(e) {
	e.assertEqual = (e) => {};
	function t(e) {}
	e.assertIs = t;
	function n(e) {
		throw Error();
	}
	e.assertNever = n, e.arrayToEnum = (e) => {
		let t = {};
		for (let n of e) t[n] = n;
		return t;
	}, e.getValidEnumValues = (t) => {
		let n = e.objectKeys(t).filter((e) => typeof t[t[e]] != "number"), r = {};
		for (let e of n) r[e] = t[e];
		return e.objectValues(r);
	}, e.objectValues = (t) => e.objectKeys(t).map(function(e) {
		return t[e];
	}), e.objectKeys = typeof Object.keys == "function" ? (e) => Object.keys(e) : (e) => {
		let t = [];
		for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
		return t;
	}, e.find = (e, t) => {
		for (let n of e) if (t(n)) return n;
	}, e.isInteger = typeof Number.isInteger == "function" ? (e) => Number.isInteger(e) : (e) => typeof e == "number" && Number.isFinite(e) && Math.floor(e) === e;
	function r(e, t = " | ") {
		return e.map((e) => typeof e == "string" ? `'${e}'` : e).join(t);
	}
	e.joinValues = r, e.jsonStringifyReplacer = (e, t) => typeof t == "bigint" ? t.toString() : t;
})(z ||= {});
var pc;
(function(e) {
	e.mergeShapes = (e, t) => ({
		...e,
		...t
	});
})(pc ||= {});
var B = z.arrayToEnum([
	"string",
	"nan",
	"number",
	"integer",
	"float",
	"boolean",
	"date",
	"bigint",
	"symbol",
	"function",
	"undefined",
	"null",
	"array",
	"object",
	"unknown",
	"promise",
	"void",
	"never",
	"map",
	"set"
]), mc = (e) => {
	switch (typeof e) {
		case "undefined": return B.undefined;
		case "string": return B.string;
		case "number": return Number.isNaN(e) ? B.nan : B.number;
		case "boolean": return B.boolean;
		case "function": return B.function;
		case "bigint": return B.bigint;
		case "symbol": return B.symbol;
		case "object": return Array.isArray(e) ? B.array : e === null ? B.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? B.promise : typeof Map < "u" && e instanceof Map ? B.map : typeof Set < "u" && e instanceof Set ? B.set : typeof Date < "u" && e instanceof Date ? B.date : B.object;
		default: return B.unknown;
	}
}, V = z.arrayToEnum([
	"invalid_type",
	"invalid_literal",
	"custom",
	"invalid_union",
	"invalid_union_discriminator",
	"invalid_enum_value",
	"unrecognized_keys",
	"invalid_arguments",
	"invalid_return_type",
	"invalid_date",
	"invalid_string",
	"too_small",
	"too_big",
	"invalid_intersection_types",
	"not_multiple_of",
	"not_finite"
]), hc = class e extends Error {
	get errors() {
		return this.issues;
	}
	constructor(e) {
		super(), this.issues = [], this.addIssue = (e) => {
			this.issues = [...this.issues, e];
		}, this.addIssues = (e = []) => {
			this.issues = [...this.issues, ...e];
		};
		let t = new.target.prototype;
		Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
	}
	format(e) {
		let t = e || function(e) {
			return e.message;
		}, n = { _errors: [] }, r = (e) => {
			for (let i of e.issues) if (i.code === "invalid_union") i.unionErrors.map(r);
			else if (i.code === "invalid_return_type") r(i.returnTypeError);
			else if (i.code === "invalid_arguments") r(i.argumentsError);
			else if (i.path.length === 0) n._errors.push(t(i));
			else {
				let e = n, r = 0;
				for (; r < i.path.length;) {
					let n = i.path[r];
					r === i.path.length - 1 ? (e[n] = e[n] || { _errors: [] }, e[n]._errors.push(t(i))) : e[n] = e[n] || { _errors: [] }, e = e[n], r++;
				}
			}
		};
		return r(this), n;
	}
	static assert(t) {
		if (!(t instanceof e)) throw Error(`Not a ZodError: ${t}`);
	}
	toString() {
		return this.message;
	}
	get message() {
		return JSON.stringify(this.issues, z.jsonStringifyReplacer, 2);
	}
	get isEmpty() {
		return this.issues.length === 0;
	}
	flatten(e = (e) => e.message) {
		let t = {}, n = [];
		for (let r of this.issues) if (r.path.length > 0) {
			let n = r.path[0];
			t[n] = t[n] || [], t[n].push(e(r));
		} else n.push(e(r));
		return {
			formErrors: n,
			fieldErrors: t
		};
	}
	get formErrors() {
		return this.flatten();
	}
};
hc.create = (e) => new hc(e);
// node_modules/zod/v3/locales/en.js
var gc = (e, t) => {
	let n;
	switch (e.code) {
		case V.invalid_type:
			n = e.received === B.undefined ? "Required" : `Expected ${e.expected}, received ${e.received}`;
			break;
		case V.invalid_literal:
			n = `Invalid literal value, expected ${JSON.stringify(e.expected, z.jsonStringifyReplacer)}`;
			break;
		case V.unrecognized_keys:
			n = `Unrecognized key(s) in object: ${z.joinValues(e.keys, ", ")}`;
			break;
		case V.invalid_union:
			n = "Invalid input";
			break;
		case V.invalid_union_discriminator:
			n = `Invalid discriminator value. Expected ${z.joinValues(e.options)}`;
			break;
		case V.invalid_enum_value:
			n = `Invalid enum value. Expected ${z.joinValues(e.options)}, received '${e.received}'`;
			break;
		case V.invalid_arguments:
			n = "Invalid function arguments";
			break;
		case V.invalid_return_type:
			n = "Invalid function return type";
			break;
		case V.invalid_date:
			n = "Invalid date";
			break;
		case V.invalid_string:
			typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : z.assertNever(e.validation) : n = e.validation === "regex" ? "Invalid" : `Invalid ${e.validation}`;
			break;
		case V.too_small:
			n = e.type === "array" ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" || e.type === "bigint" ? `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : "Invalid input";
			break;
		case V.too_big:
			n = e.type === "array" ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : "Invalid input";
			break;
		case V.custom:
			n = "Invalid input";
			break;
		case V.invalid_intersection_types:
			n = "Intersection results could not be merged";
			break;
		case V.not_multiple_of:
			n = `Number must be a multiple of ${e.multipleOf}`;
			break;
		case V.not_finite:
			n = "Number must be finite";
			break;
		default: n = t.defaultError, z.assertNever(e);
	}
	return { message: n };
}, _c = gc;
function vc() {
	return _c;
}
// node_modules/zod/v3/helpers/parseUtil.js
var yc = (e) => {
	let { data: t, path: n, errorMaps: r, issueData: i } = e, a = [...n, ...i.path || []], o = {
		...i,
		path: a
	};
	if (i.message !== void 0) return {
		...i,
		path: a,
		message: i.message
	};
	let s = "", c = r.filter((e) => !!e).slice().reverse();
	for (let e of c) s = e(o, {
		data: t,
		defaultError: s
	}).message;
	return {
		...i,
		path: a,
		message: s
	};
};
function H(e, t) {
	let n = vc(), r = yc({
		issueData: t,
		data: e.data,
		path: e.path,
		errorMaps: [
			e.common.contextualErrorMap,
			e.schemaErrorMap,
			n,
			n === gc ? void 0 : gc
		].filter((e) => !!e)
	});
	e.common.issues.push(r);
}
var bc = class e {
	constructor() {
		this.value = "valid";
	}
	dirty() {
		this.value === "valid" && (this.value = "dirty");
	}
	abort() {
		this.value !== "aborted" && (this.value = "aborted");
	}
	static mergeArray(e, t) {
		let n = [];
		for (let r of t) {
			if (r.status === "aborted") return U;
			r.status === "dirty" && e.dirty(), n.push(r.value);
		}
		return {
			status: e.value,
			value: n
		};
	}
	static async mergeObjectAsync(t, n) {
		let r = [];
		for (let e of n) {
			let t = await e.key, n = await e.value;
			r.push({
				key: t,
				value: n
			});
		}
		return e.mergeObjectSync(t, r);
	}
	static mergeObjectSync(e, t) {
		let n = {};
		for (let r of t) {
			let { key: t, value: i } = r;
			if (t.status === "aborted" || i.status === "aborted") return U;
			t.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), t.value !== "__proto__" && (i.value !== void 0 || r.alwaysSet) && (n[t.value] = i.value);
		}
		return {
			status: e.value,
			value: n
		};
	}
}, U = Object.freeze({ status: "aborted" }), xc = (e) => ({
	status: "dirty",
	value: e
}), Sc = (e) => ({
	status: "valid",
	value: e
}), Cc = (e) => e.status === "aborted", wc = (e) => e.status === "dirty", Tc = (e) => e.status === "valid", Ec = (e) => typeof Promise < "u" && e instanceof Promise, W;
(function(e) {
	e.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, e.toString = (e) => typeof e == "string" ? e : e?.message;
})(W ||= {});
// node_modules/zod/v3/types.js
var Dc = class {
	constructor(e, t, n, r) {
		this._cachedPath = [], this.parent = e, this.data = t, this._path = n, this._key = r;
	}
	get path() {
		return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
	}
}, Oc = (e, t) => {
	if (Tc(t)) return {
		success: !0,
		data: t.value
	};
	if (!e.common.issues.length) throw Error("Validation failed but no issues detected.");
	return {
		success: !1,
		get error() {
			if (this._error) return this._error;
			let t = new hc(e.common.issues);
			return this._error = t, this._error;
		}
	};
};
function G(e) {
	if (!e) return {};
	let { errorMap: t, invalid_type_error: n, required_error: r, description: i } = e;
	if (t && (n || r)) throw Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
	return t ? {
		errorMap: t,
		description: i
	} : {
		errorMap: (t, i) => {
			let { message: a } = e;
			return t.code === "invalid_enum_value" ? { message: a ?? i.defaultError } : i.data === void 0 ? { message: a ?? r ?? i.defaultError } : t.code === "invalid_type" ? { message: a ?? n ?? i.defaultError } : { message: i.defaultError };
		},
		description: i
	};
}
var K = class {
	get description() {
		return this._def.description;
	}
	_getType(e) {
		return mc(e.data);
	}
	_getOrReturnCtx(e, t) {
		return t || {
			common: e.parent.common,
			data: e.data,
			parsedType: mc(e.data),
			schemaErrorMap: this._def.errorMap,
			path: e.path,
			parent: e.parent
		};
	}
	_processInputParams(e) {
		return {
			status: new bc(),
			ctx: {
				common: e.parent.common,
				data: e.data,
				parsedType: mc(e.data),
				schemaErrorMap: this._def.errorMap,
				path: e.path,
				parent: e.parent
			}
		};
	}
	_parseSync(e) {
		let t = this._parse(e);
		if (Ec(t)) throw Error("Synchronous parse encountered promise.");
		return t;
	}
	_parseAsync(e) {
		let t = this._parse(e);
		return Promise.resolve(t);
	}
	parse(e, t) {
		let n = this.safeParse(e, t);
		if (n.success) return n.data;
		throw n.error;
	}
	safeParse(e, t) {
		let n = {
			common: {
				issues: [],
				async: t?.async ?? !1,
				contextualErrorMap: t?.errorMap
			},
			path: t?.path || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data: e,
			parsedType: mc(e)
		};
		return Oc(n, this._parseSync({
			data: e,
			path: n.path,
			parent: n
		}));
	}
	"~validate"(e) {
		let t = {
			common: {
				issues: [],
				async: !!this["~standard"].async
			},
			path: [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data: e,
			parsedType: mc(e)
		};
		if (!this["~standard"].async) try {
			let n = this._parseSync({
				data: e,
				path: [],
				parent: t
			});
			return Tc(n) ? { value: n.value } : { issues: t.common.issues };
		} catch (e) {
			e?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0), t.common = {
				issues: [],
				async: !0
			};
		}
		return this._parseAsync({
			data: e,
			path: [],
			parent: t
		}).then((e) => Tc(e) ? { value: e.value } : { issues: t.common.issues });
	}
	async parseAsync(e, t) {
		let n = await this.safeParseAsync(e, t);
		if (n.success) return n.data;
		throw n.error;
	}
	async safeParseAsync(e, t) {
		let n = {
			common: {
				issues: [],
				contextualErrorMap: t?.errorMap,
				async: !0
			},
			path: t?.path || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data: e,
			parsedType: mc(e)
		}, r = this._parse({
			data: e,
			path: n.path,
			parent: n
		});
		return Oc(n, await (Ec(r) ? r : Promise.resolve(r)));
	}
	refine(e, t) {
		let n = (e) => typeof t == "string" || t === void 0 ? { message: t } : typeof t == "function" ? t(e) : t;
		return this._refinement((t, r) => {
			let i = e(t), a = () => r.addIssue({
				code: V.custom,
				...n(t)
			});
			return typeof Promise < "u" && i instanceof Promise ? i.then((e) => e ? !0 : (a(), !1)) : i ? !0 : (a(), !1);
		});
	}
	refinement(e, t) {
		return this._refinement((n, r) => e(n) ? !0 : (r.addIssue(typeof t == "function" ? t(n, r) : t), !1));
	}
	_refinement(e) {
		return new jl({
			schema: this,
			typeName: q.ZodEffects,
			effect: {
				type: "refinement",
				refinement: e
			}
		});
	}
	superRefine(e) {
		return this._refinement(e);
	}
	constructor(e) {
		this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
			version: 1,
			vendor: "zod",
			validate: (e) => this["~validate"](e)
		};
	}
	optional() {
		return Ml.create(this, this._def);
	}
	nullable() {
		return Nl.create(this, this._def);
	}
	nullish() {
		return this.nullable().optional();
	}
	array() {
		return fl.create(this);
	}
	promise() {
		return Al.create(this, this._def);
	}
	or(e) {
		return hl.create([this, e], this._def);
	}
	and(e) {
		return yl.create(this, e, this._def);
	}
	transform(e) {
		return new jl({
			...G(this._def),
			schema: this,
			typeName: q.ZodEffects,
			effect: {
				type: "transform",
				transform: e
			}
		});
	}
	default(e) {
		let t = typeof e == "function" ? e : () => e;
		return new Pl({
			...G(this._def),
			innerType: this,
			defaultValue: t,
			typeName: q.ZodDefault
		});
	}
	brand() {
		return new Ll({
			typeName: q.ZodBranded,
			type: this,
			...G(this._def)
		});
	}
	catch(e) {
		let t = typeof e == "function" ? e : () => e;
		return new Fl({
			...G(this._def),
			innerType: this,
			catchValue: t,
			typeName: q.ZodCatch
		});
	}
	describe(e) {
		let t = this.constructor;
		return new t({
			...this._def,
			description: e
		});
	}
	pipe(e) {
		return Rl.create(this, e);
	}
	readonly() {
		return zl.create(this);
	}
	isOptional() {
		return this.safeParse(void 0).success;
	}
	isNullable() {
		return this.safeParse(null).success;
	}
}, kc = /^c[^\s-]{8,}$/i, Ac = /^[0-9a-z]+$/, jc = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Mc = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Nc = /^[a-z0-9_-]{21}$/i, Pc = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Fc = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Ic = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Lc = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", Rc, zc = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Bc = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Vc = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Hc = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Uc = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Wc = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Gc = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Kc = RegExp(`^${Gc}$`);
function qc(e) {
	let t = "[0-5]\\d";
	e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision ?? (t = `${t}(\\.\\d+)?`);
	let n = e.precision ? "+" : "?";
	return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function Jc(e) {
	return RegExp(`^${qc(e)}$`);
}
function Yc(e) {
	let t = `${Gc}T${qc(e)}`, n = [];
	return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, RegExp(`^${t}$`);
}
function Xc(e, t) {
	return !((t !== "v4" && t || !zc.test(e)) && (t !== "v6" && t || !Vc.test(e)));
}
function Zc(e, t) {
	if (!Pc.test(e)) return !1;
	try {
		let [n] = e.split(".");
		if (!n) return !1;
		let r = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "="), i = JSON.parse(atob(r));
		return !(typeof i != "object" || !i || "typ" in i && i?.typ !== "JWT" || !i.alg || t && i.alg !== t);
	} catch {
		return !1;
	}
}
function Qc(e, t) {
	return !((t !== "v4" && t || !Bc.test(e)) && (t !== "v6" && t || !Hc.test(e)));
}
var $c = class e extends K {
	_parse(e) {
		if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== B.string) {
			let t = this._getOrReturnCtx(e);
			return H(t, {
				code: V.invalid_type,
				expected: B.string,
				received: t.parsedType
			}), U;
		}
		let t = new bc(), n;
		for (let r of this._def.checks) if (r.kind === "min") e.data.length < r.value && (n = this._getOrReturnCtx(e, n), H(n, {
			code: V.too_small,
			minimum: r.value,
			type: "string",
			inclusive: !0,
			exact: !1,
			message: r.message
		}), t.dirty());
		else if (r.kind === "max") e.data.length > r.value && (n = this._getOrReturnCtx(e, n), H(n, {
			code: V.too_big,
			maximum: r.value,
			type: "string",
			inclusive: !0,
			exact: !1,
			message: r.message
		}), t.dirty());
		else if (r.kind === "length") {
			let i = e.data.length > r.value, a = e.data.length < r.value;
			(i || a) && (n = this._getOrReturnCtx(e, n), i ? H(n, {
				code: V.too_big,
				maximum: r.value,
				type: "string",
				inclusive: !0,
				exact: !0,
				message: r.message
			}) : a && H(n, {
				code: V.too_small,
				minimum: r.value,
				type: "string",
				inclusive: !0,
				exact: !0,
				message: r.message
			}), t.dirty());
		} else if (r.kind === "email") Ic.test(e.data) || (n = this._getOrReturnCtx(e, n), H(n, {
			validation: "email",
			code: V.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "emoji") Rc ||= new RegExp(Lc, "u"), Rc.test(e.data) || (n = this._getOrReturnCtx(e, n), H(n, {
			validation: "emoji",
			code: V.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "uuid") Mc.test(e.data) || (n = this._getOrReturnCtx(e, n), H(n, {
			validation: "uuid",
			code: V.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "nanoid") Nc.test(e.data) || (n = this._getOrReturnCtx(e, n), H(n, {
			validation: "nanoid",
			code: V.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "cuid") kc.test(e.data) || (n = this._getOrReturnCtx(e, n), H(n, {
			validation: "cuid",
			code: V.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "cuid2") Ac.test(e.data) || (n = this._getOrReturnCtx(e, n), H(n, {
			validation: "cuid2",
			code: V.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "ulid") jc.test(e.data) || (n = this._getOrReturnCtx(e, n), H(n, {
			validation: "ulid",
			code: V.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "url") try {
			new URL(e.data);
		} catch {
			n = this._getOrReturnCtx(e, n), H(n, {
				validation: "url",
				code: V.invalid_string,
				message: r.message
			}), t.dirty();
		}
		else r.kind === "regex" ? (r.regex.lastIndex = 0, r.regex.test(e.data) || (n = this._getOrReturnCtx(e, n), H(n, {
			validation: "regex",
			code: V.invalid_string,
			message: r.message
		}), t.dirty())) : r.kind === "trim" ? e.data = e.data.trim() : r.kind === "includes" ? e.data.includes(r.value, r.position) || (n = this._getOrReturnCtx(e, n), H(n, {
			code: V.invalid_string,
			validation: {
				includes: r.value,
				position: r.position
			},
			message: r.message
		}), t.dirty()) : r.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : r.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : r.kind === "startsWith" ? e.data.startsWith(r.value) || (n = this._getOrReturnCtx(e, n), H(n, {
			code: V.invalid_string,
			validation: { startsWith: r.value },
			message: r.message
		}), t.dirty()) : r.kind === "endsWith" ? e.data.endsWith(r.value) || (n = this._getOrReturnCtx(e, n), H(n, {
			code: V.invalid_string,
			validation: { endsWith: r.value },
			message: r.message
		}), t.dirty()) : r.kind === "datetime" ? Yc(r).test(e.data) || (n = this._getOrReturnCtx(e, n), H(n, {
			code: V.invalid_string,
			validation: "datetime",
			message: r.message
		}), t.dirty()) : r.kind === "date" ? Kc.test(e.data) || (n = this._getOrReturnCtx(e, n), H(n, {
			code: V.invalid_string,
			validation: "date",
			message: r.message
		}), t.dirty()) : r.kind === "time" ? Jc(r).test(e.data) || (n = this._getOrReturnCtx(e, n), H(n, {
			code: V.invalid_string,
			validation: "time",
			message: r.message
		}), t.dirty()) : r.kind === "duration" ? Fc.test(e.data) || (n = this._getOrReturnCtx(e, n), H(n, {
			validation: "duration",
			code: V.invalid_string,
			message: r.message
		}), t.dirty()) : r.kind === "ip" ? Xc(e.data, r.version) || (n = this._getOrReturnCtx(e, n), H(n, {
			validation: "ip",
			code: V.invalid_string,
			message: r.message
		}), t.dirty()) : r.kind === "jwt" ? Zc(e.data, r.alg) || (n = this._getOrReturnCtx(e, n), H(n, {
			validation: "jwt",
			code: V.invalid_string,
			message: r.message
		}), t.dirty()) : r.kind === "cidr" ? Qc(e.data, r.version) || (n = this._getOrReturnCtx(e, n), H(n, {
			validation: "cidr",
			code: V.invalid_string,
			message: r.message
		}), t.dirty()) : r.kind === "base64" ? Uc.test(e.data) || (n = this._getOrReturnCtx(e, n), H(n, {
			validation: "base64",
			code: V.invalid_string,
			message: r.message
		}), t.dirty()) : r.kind === "base64url" ? Wc.test(e.data) || (n = this._getOrReturnCtx(e, n), H(n, {
			validation: "base64url",
			code: V.invalid_string,
			message: r.message
		}), t.dirty()) : z.assertNever(r);
		return {
			status: t.value,
			value: e.data
		};
	}
	_regex(e, t, n) {
		return this.refinement((t) => e.test(t), {
			validation: t,
			code: V.invalid_string,
			...W.errToObj(n)
		});
	}
	_addCheck(t) {
		return new e({
			...this._def,
			checks: [...this._def.checks, t]
		});
	}
	email(e) {
		return this._addCheck({
			kind: "email",
			...W.errToObj(e)
		});
	}
	url(e) {
		return this._addCheck({
			kind: "url",
			...W.errToObj(e)
		});
	}
	emoji(e) {
		return this._addCheck({
			kind: "emoji",
			...W.errToObj(e)
		});
	}
	uuid(e) {
		return this._addCheck({
			kind: "uuid",
			...W.errToObj(e)
		});
	}
	nanoid(e) {
		return this._addCheck({
			kind: "nanoid",
			...W.errToObj(e)
		});
	}
	cuid(e) {
		return this._addCheck({
			kind: "cuid",
			...W.errToObj(e)
		});
	}
	cuid2(e) {
		return this._addCheck({
			kind: "cuid2",
			...W.errToObj(e)
		});
	}
	ulid(e) {
		return this._addCheck({
			kind: "ulid",
			...W.errToObj(e)
		});
	}
	base64(e) {
		return this._addCheck({
			kind: "base64",
			...W.errToObj(e)
		});
	}
	base64url(e) {
		return this._addCheck({
			kind: "base64url",
			...W.errToObj(e)
		});
	}
	jwt(e) {
		return this._addCheck({
			kind: "jwt",
			...W.errToObj(e)
		});
	}
	ip(e) {
		return this._addCheck({
			kind: "ip",
			...W.errToObj(e)
		});
	}
	cidr(e) {
		return this._addCheck({
			kind: "cidr",
			...W.errToObj(e)
		});
	}
	datetime(e) {
		return typeof e == "string" ? this._addCheck({
			kind: "datetime",
			precision: null,
			offset: !1,
			local: !1,
			message: e
		}) : this._addCheck({
			kind: "datetime",
			precision: e?.precision === void 0 ? null : e?.precision,
			offset: e?.offset ?? !1,
			local: e?.local ?? !1,
			...W.errToObj(e?.message)
		});
	}
	date(e) {
		return this._addCheck({
			kind: "date",
			message: e
		});
	}
	time(e) {
		return typeof e == "string" ? this._addCheck({
			kind: "time",
			precision: null,
			message: e
		}) : this._addCheck({
			kind: "time",
			precision: e?.precision === void 0 ? null : e?.precision,
			...W.errToObj(e?.message)
		});
	}
	duration(e) {
		return this._addCheck({
			kind: "duration",
			...W.errToObj(e)
		});
	}
	regex(e, t) {
		return this._addCheck({
			kind: "regex",
			regex: e,
			...W.errToObj(t)
		});
	}
	includes(e, t) {
		return this._addCheck({
			kind: "includes",
			value: e,
			position: t?.position,
			...W.errToObj(t?.message)
		});
	}
	startsWith(e, t) {
		return this._addCheck({
			kind: "startsWith",
			value: e,
			...W.errToObj(t)
		});
	}
	endsWith(e, t) {
		return this._addCheck({
			kind: "endsWith",
			value: e,
			...W.errToObj(t)
		});
	}
	min(e, t) {
		return this._addCheck({
			kind: "min",
			value: e,
			...W.errToObj(t)
		});
	}
	max(e, t) {
		return this._addCheck({
			kind: "max",
			value: e,
			...W.errToObj(t)
		});
	}
	length(e, t) {
		return this._addCheck({
			kind: "length",
			value: e,
			...W.errToObj(t)
		});
	}
	nonempty(e) {
		return this.min(1, W.errToObj(e));
	}
	trim() {
		return new e({
			...this._def,
			checks: [...this._def.checks, { kind: "trim" }]
		});
	}
	toLowerCase() {
		return new e({
			...this._def,
			checks: [...this._def.checks, { kind: "toLowerCase" }]
		});
	}
	toUpperCase() {
		return new e({
			...this._def,
			checks: [...this._def.checks, { kind: "toUpperCase" }]
		});
	}
	get isDatetime() {
		return !!this._def.checks.find((e) => e.kind === "datetime");
	}
	get isDate() {
		return !!this._def.checks.find((e) => e.kind === "date");
	}
	get isTime() {
		return !!this._def.checks.find((e) => e.kind === "time");
	}
	get isDuration() {
		return !!this._def.checks.find((e) => e.kind === "duration");
	}
	get isEmail() {
		return !!this._def.checks.find((e) => e.kind === "email");
	}
	get isURL() {
		return !!this._def.checks.find((e) => e.kind === "url");
	}
	get isEmoji() {
		return !!this._def.checks.find((e) => e.kind === "emoji");
	}
	get isUUID() {
		return !!this._def.checks.find((e) => e.kind === "uuid");
	}
	get isNANOID() {
		return !!this._def.checks.find((e) => e.kind === "nanoid");
	}
	get isCUID() {
		return !!this._def.checks.find((e) => e.kind === "cuid");
	}
	get isCUID2() {
		return !!this._def.checks.find((e) => e.kind === "cuid2");
	}
	get isULID() {
		return !!this._def.checks.find((e) => e.kind === "ulid");
	}
	get isIP() {
		return !!this._def.checks.find((e) => e.kind === "ip");
	}
	get isCIDR() {
		return !!this._def.checks.find((e) => e.kind === "cidr");
	}
	get isBase64() {
		return !!this._def.checks.find((e) => e.kind === "base64");
	}
	get isBase64url() {
		return !!this._def.checks.find((e) => e.kind === "base64url");
	}
	get minLength() {
		let e = null;
		for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
		return e;
	}
	get maxLength() {
		let e = null;
		for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
		return e;
	}
};
$c.create = (e) => new $c({
	checks: [],
	typeName: q.ZodString,
	coerce: e?.coerce ?? !1,
	...G(e)
});
function el(e, t) {
	let n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, i = n > r ? n : r;
	return Number.parseInt(e.toFixed(i).replace(".", "")) % Number.parseInt(t.toFixed(i).replace(".", "")) / 10 ** i;
}
var tl = class e extends K {
	constructor() {
		super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
	}
	_parse(e) {
		if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== B.number) {
			let t = this._getOrReturnCtx(e);
			return H(t, {
				code: V.invalid_type,
				expected: B.number,
				received: t.parsedType
			}), U;
		}
		let t, n = new bc();
		for (let r of this._def.checks) r.kind === "int" ? z.isInteger(e.data) || (t = this._getOrReturnCtx(e, t), H(t, {
			code: V.invalid_type,
			expected: "integer",
			received: "float",
			message: r.message
		}), n.dirty()) : r.kind === "min" ? (r.inclusive ? e.data < r.value : e.data <= r.value) && (t = this._getOrReturnCtx(e, t), H(t, {
			code: V.too_small,
			minimum: r.value,
			type: "number",
			inclusive: r.inclusive,
			exact: !1,
			message: r.message
		}), n.dirty()) : r.kind === "max" ? (r.inclusive ? e.data > r.value : e.data >= r.value) && (t = this._getOrReturnCtx(e, t), H(t, {
			code: V.too_big,
			maximum: r.value,
			type: "number",
			inclusive: r.inclusive,
			exact: !1,
			message: r.message
		}), n.dirty()) : r.kind === "multipleOf" ? el(e.data, r.value) !== 0 && (t = this._getOrReturnCtx(e, t), H(t, {
			code: V.not_multiple_of,
			multipleOf: r.value,
			message: r.message
		}), n.dirty()) : r.kind === "finite" ? Number.isFinite(e.data) || (t = this._getOrReturnCtx(e, t), H(t, {
			code: V.not_finite,
			message: r.message
		}), n.dirty()) : z.assertNever(r);
		return {
			status: n.value,
			value: e.data
		};
	}
	gte(e, t) {
		return this.setLimit("min", e, !0, W.toString(t));
	}
	gt(e, t) {
		return this.setLimit("min", e, !1, W.toString(t));
	}
	lte(e, t) {
		return this.setLimit("max", e, !0, W.toString(t));
	}
	lt(e, t) {
		return this.setLimit("max", e, !1, W.toString(t));
	}
	setLimit(t, n, r, i) {
		return new e({
			...this._def,
			checks: [...this._def.checks, {
				kind: t,
				value: n,
				inclusive: r,
				message: W.toString(i)
			}]
		});
	}
	_addCheck(t) {
		return new e({
			...this._def,
			checks: [...this._def.checks, t]
		});
	}
	int(e) {
		return this._addCheck({
			kind: "int",
			message: W.toString(e)
		});
	}
	positive(e) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: !1,
			message: W.toString(e)
		});
	}
	negative(e) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: !1,
			message: W.toString(e)
		});
	}
	nonpositive(e) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: !0,
			message: W.toString(e)
		});
	}
	nonnegative(e) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: !0,
			message: W.toString(e)
		});
	}
	multipleOf(e, t) {
		return this._addCheck({
			kind: "multipleOf",
			value: e,
			message: W.toString(t)
		});
	}
	finite(e) {
		return this._addCheck({
			kind: "finite",
			message: W.toString(e)
		});
	}
	safe(e) {
		return this._addCheck({
			kind: "min",
			inclusive: !0,
			value: -(2 ** 53 - 1),
			message: W.toString(e)
		})._addCheck({
			kind: "max",
			inclusive: !0,
			value: 2 ** 53 - 1,
			message: W.toString(e)
		});
	}
	get minValue() {
		let e = null;
		for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
		return e;
	}
	get maxValue() {
		let e = null;
		for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
		return e;
	}
	get isInt() {
		return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && z.isInteger(e.value));
	}
	get isFinite() {
		let e = null, t = null;
		for (let n of this._def.checks) if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf") return !0;
		else n.kind === "min" ? (t === null || n.value > t) && (t = n.value) : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
		return Number.isFinite(t) && Number.isFinite(e);
	}
};
tl.create = (e) => new tl({
	checks: [],
	typeName: q.ZodNumber,
	coerce: e?.coerce || !1,
	...G(e)
});
var nl = class e extends K {
	constructor() {
		super(...arguments), this.min = this.gte, this.max = this.lte;
	}
	_parse(e) {
		if (this._def.coerce) try {
			e.data = BigInt(e.data);
		} catch {
			return this._getInvalidInput(e);
		}
		if (this._getType(e) !== B.bigint) return this._getInvalidInput(e);
		let t, n = new bc();
		for (let r of this._def.checks) r.kind === "min" ? (r.inclusive ? e.data < r.value : e.data <= r.value) && (t = this._getOrReturnCtx(e, t), H(t, {
			code: V.too_small,
			type: "bigint",
			minimum: r.value,
			inclusive: r.inclusive,
			message: r.message
		}), n.dirty()) : r.kind === "max" ? (r.inclusive ? e.data > r.value : e.data >= r.value) && (t = this._getOrReturnCtx(e, t), H(t, {
			code: V.too_big,
			type: "bigint",
			maximum: r.value,
			inclusive: r.inclusive,
			message: r.message
		}), n.dirty()) : r.kind === "multipleOf" ? e.data % r.value !== BigInt(0) && (t = this._getOrReturnCtx(e, t), H(t, {
			code: V.not_multiple_of,
			multipleOf: r.value,
			message: r.message
		}), n.dirty()) : z.assertNever(r);
		return {
			status: n.value,
			value: e.data
		};
	}
	_getInvalidInput(e) {
		let t = this._getOrReturnCtx(e);
		return H(t, {
			code: V.invalid_type,
			expected: B.bigint,
			received: t.parsedType
		}), U;
	}
	gte(e, t) {
		return this.setLimit("min", e, !0, W.toString(t));
	}
	gt(e, t) {
		return this.setLimit("min", e, !1, W.toString(t));
	}
	lte(e, t) {
		return this.setLimit("max", e, !0, W.toString(t));
	}
	lt(e, t) {
		return this.setLimit("max", e, !1, W.toString(t));
	}
	setLimit(t, n, r, i) {
		return new e({
			...this._def,
			checks: [...this._def.checks, {
				kind: t,
				value: n,
				inclusive: r,
				message: W.toString(i)
			}]
		});
	}
	_addCheck(t) {
		return new e({
			...this._def,
			checks: [...this._def.checks, t]
		});
	}
	positive(e) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: !1,
			message: W.toString(e)
		});
	}
	negative(e) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: !1,
			message: W.toString(e)
		});
	}
	nonpositive(e) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: !0,
			message: W.toString(e)
		});
	}
	nonnegative(e) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: !0,
			message: W.toString(e)
		});
	}
	multipleOf(e, t) {
		return this._addCheck({
			kind: "multipleOf",
			value: e,
			message: W.toString(t)
		});
	}
	get minValue() {
		let e = null;
		for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
		return e;
	}
	get maxValue() {
		let e = null;
		for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
		return e;
	}
};
nl.create = (e) => new nl({
	checks: [],
	typeName: q.ZodBigInt,
	coerce: e?.coerce ?? !1,
	...G(e)
});
var rl = class extends K {
	_parse(e) {
		if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== B.boolean) {
			let t = this._getOrReturnCtx(e);
			return H(t, {
				code: V.invalid_type,
				expected: B.boolean,
				received: t.parsedType
			}), U;
		}
		return Sc(e.data);
	}
};
rl.create = (e) => new rl({
	typeName: q.ZodBoolean,
	coerce: e?.coerce || !1,
	...G(e)
});
var il = class e extends K {
	_parse(e) {
		if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== B.date) {
			let t = this._getOrReturnCtx(e);
			return H(t, {
				code: V.invalid_type,
				expected: B.date,
				received: t.parsedType
			}), U;
		}
		if (Number.isNaN(e.data.getTime())) return H(this._getOrReturnCtx(e), { code: V.invalid_date }), U;
		let t = new bc(), n;
		for (let r of this._def.checks) r.kind === "min" ? e.data.getTime() < r.value && (n = this._getOrReturnCtx(e, n), H(n, {
			code: V.too_small,
			message: r.message,
			inclusive: !0,
			exact: !1,
			minimum: r.value,
			type: "date"
		}), t.dirty()) : r.kind === "max" ? e.data.getTime() > r.value && (n = this._getOrReturnCtx(e, n), H(n, {
			code: V.too_big,
			message: r.message,
			inclusive: !0,
			exact: !1,
			maximum: r.value,
			type: "date"
		}), t.dirty()) : z.assertNever(r);
		return {
			status: t.value,
			value: new Date(e.data.getTime())
		};
	}
	_addCheck(t) {
		return new e({
			...this._def,
			checks: [...this._def.checks, t]
		});
	}
	min(e, t) {
		return this._addCheck({
			kind: "min",
			value: e.getTime(),
			message: W.toString(t)
		});
	}
	max(e, t) {
		return this._addCheck({
			kind: "max",
			value: e.getTime(),
			message: W.toString(t)
		});
	}
	get minDate() {
		let e = null;
		for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
		return e == null ? null : new Date(e);
	}
	get maxDate() {
		let e = null;
		for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
		return e == null ? null : new Date(e);
	}
};
il.create = (e) => new il({
	checks: [],
	coerce: e?.coerce || !1,
	typeName: q.ZodDate,
	...G(e)
});
var al = class extends K {
	_parse(e) {
		if (this._getType(e) !== B.symbol) {
			let t = this._getOrReturnCtx(e);
			return H(t, {
				code: V.invalid_type,
				expected: B.symbol,
				received: t.parsedType
			}), U;
		}
		return Sc(e.data);
	}
};
al.create = (e) => new al({
	typeName: q.ZodSymbol,
	...G(e)
});
var ol = class extends K {
	_parse(e) {
		if (this._getType(e) !== B.undefined) {
			let t = this._getOrReturnCtx(e);
			return H(t, {
				code: V.invalid_type,
				expected: B.undefined,
				received: t.parsedType
			}), U;
		}
		return Sc(e.data);
	}
};
ol.create = (e) => new ol({
	typeName: q.ZodUndefined,
	...G(e)
});
var sl = class extends K {
	_parse(e) {
		if (this._getType(e) !== B.null) {
			let t = this._getOrReturnCtx(e);
			return H(t, {
				code: V.invalid_type,
				expected: B.null,
				received: t.parsedType
			}), U;
		}
		return Sc(e.data);
	}
};
sl.create = (e) => new sl({
	typeName: q.ZodNull,
	...G(e)
});
var cl = class extends K {
	constructor() {
		super(...arguments), this._any = !0;
	}
	_parse(e) {
		return Sc(e.data);
	}
};
cl.create = (e) => new cl({
	typeName: q.ZodAny,
	...G(e)
});
var ll = class extends K {
	constructor() {
		super(...arguments), this._unknown = !0;
	}
	_parse(e) {
		return Sc(e.data);
	}
};
ll.create = (e) => new ll({
	typeName: q.ZodUnknown,
	...G(e)
});
var ul = class extends K {
	_parse(e) {
		let t = this._getOrReturnCtx(e);
		return H(t, {
			code: V.invalid_type,
			expected: B.never,
			received: t.parsedType
		}), U;
	}
};
ul.create = (e) => new ul({
	typeName: q.ZodNever,
	...G(e)
});
var dl = class extends K {
	_parse(e) {
		if (this._getType(e) !== B.undefined) {
			let t = this._getOrReturnCtx(e);
			return H(t, {
				code: V.invalid_type,
				expected: B.void,
				received: t.parsedType
			}), U;
		}
		return Sc(e.data);
	}
};
dl.create = (e) => new dl({
	typeName: q.ZodVoid,
	...G(e)
});
var fl = class e extends K {
	_parse(e) {
		let { ctx: t, status: n } = this._processInputParams(e), r = this._def;
		if (t.parsedType !== B.array) return H(t, {
			code: V.invalid_type,
			expected: B.array,
			received: t.parsedType
		}), U;
		if (r.exactLength !== null) {
			let e = t.data.length > r.exactLength.value, i = t.data.length < r.exactLength.value;
			(e || i) && (H(t, {
				code: e ? V.too_big : V.too_small,
				minimum: i ? r.exactLength.value : void 0,
				maximum: e ? r.exactLength.value : void 0,
				type: "array",
				inclusive: !0,
				exact: !0,
				message: r.exactLength.message
			}), n.dirty());
		}
		if (r.minLength !== null && t.data.length < r.minLength.value && (H(t, {
			code: V.too_small,
			minimum: r.minLength.value,
			type: "array",
			inclusive: !0,
			exact: !1,
			message: r.minLength.message
		}), n.dirty()), r.maxLength !== null && t.data.length > r.maxLength.value && (H(t, {
			code: V.too_big,
			maximum: r.maxLength.value,
			type: "array",
			inclusive: !0,
			exact: !1,
			message: r.maxLength.message
		}), n.dirty()), t.common.async) return Promise.all([...t.data].map((e, n) => r.type._parseAsync(new Dc(t, e, t.path, n)))).then((e) => bc.mergeArray(n, e));
		let i = [...t.data].map((e, n) => r.type._parseSync(new Dc(t, e, t.path, n)));
		return bc.mergeArray(n, i);
	}
	get element() {
		return this._def.type;
	}
	min(t, n) {
		return new e({
			...this._def,
			minLength: {
				value: t,
				message: W.toString(n)
			}
		});
	}
	max(t, n) {
		return new e({
			...this._def,
			maxLength: {
				value: t,
				message: W.toString(n)
			}
		});
	}
	length(t, n) {
		return new e({
			...this._def,
			exactLength: {
				value: t,
				message: W.toString(n)
			}
		});
	}
	nonempty(e) {
		return this.min(1, e);
	}
};
fl.create = (e, t) => new fl({
	type: e,
	minLength: null,
	maxLength: null,
	exactLength: null,
	typeName: q.ZodArray,
	...G(t)
});
function pl(e) {
	if (e instanceof ml) {
		let t = {};
		for (let n in e.shape) {
			let r = e.shape[n];
			t[n] = Ml.create(pl(r));
		}
		return new ml({
			...e._def,
			shape: () => t
		});
	}
	return e instanceof fl ? new fl({
		...e._def,
		type: pl(e.element)
	}) : e instanceof Ml ? Ml.create(pl(e.unwrap())) : e instanceof Nl ? Nl.create(pl(e.unwrap())) : e instanceof bl ? bl.create(e.items.map((e) => pl(e))) : e;
}
var ml = class e extends K {
	constructor() {
		super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
	}
	_getCached() {
		if (this._cached !== null) return this._cached;
		let e = this._def.shape(), t = z.objectKeys(e);
		return this._cached = {
			shape: e,
			keys: t
		}, this._cached;
	}
	_parse(e) {
		if (this._getType(e) !== B.object) {
			let t = this._getOrReturnCtx(e);
			return H(t, {
				code: V.invalid_type,
				expected: B.object,
				received: t.parsedType
			}), U;
		}
		let { status: t, ctx: n } = this._processInputParams(e), { shape: r, keys: i } = this._getCached(), a = [];
		if (!(this._def.catchall instanceof ul && this._def.unknownKeys === "strip")) for (let e in n.data) i.includes(e) || a.push(e);
		let o = [];
		for (let e of i) {
			let t = r[e], i = n.data[e];
			o.push({
				key: {
					status: "valid",
					value: e
				},
				value: t._parse(new Dc(n, i, n.path, e)),
				alwaysSet: e in n.data
			});
		}
		if (this._def.catchall instanceof ul) {
			let e = this._def.unknownKeys;
			if (e === "passthrough") for (let e of a) o.push({
				key: {
					status: "valid",
					value: e
				},
				value: {
					status: "valid",
					value: n.data[e]
				}
			});
			else if (e === "strict") a.length > 0 && (H(n, {
				code: V.unrecognized_keys,
				keys: a
			}), t.dirty());
			else if (e !== "strip") throw Error("Internal ZodObject error: invalid unknownKeys value.");
		} else {
			let e = this._def.catchall;
			for (let t of a) {
				let r = n.data[t];
				o.push({
					key: {
						status: "valid",
						value: t
					},
					value: e._parse(new Dc(n, r, n.path, t)),
					alwaysSet: t in n.data
				});
			}
		}
		return n.common.async ? Promise.resolve().then(async () => {
			let e = [];
			for (let t of o) {
				let n = await t.key, r = await t.value;
				e.push({
					key: n,
					value: r,
					alwaysSet: t.alwaysSet
				});
			}
			return e;
		}).then((e) => bc.mergeObjectSync(t, e)) : bc.mergeObjectSync(t, o);
	}
	get shape() {
		return this._def.shape();
	}
	strict(t) {
		return W.errToObj, new e({
			...this._def,
			unknownKeys: "strict",
			...t === void 0 ? {} : { errorMap: (e, n) => {
				let r = this._def.errorMap?.(e, n).message ?? n.defaultError;
				return e.code === "unrecognized_keys" ? { message: W.errToObj(t).message ?? r } : { message: r };
			} }
		});
	}
	strip() {
		return new e({
			...this._def,
			unknownKeys: "strip"
		});
	}
	passthrough() {
		return new e({
			...this._def,
			unknownKeys: "passthrough"
		});
	}
	extend(t) {
		return new e({
			...this._def,
			shape: () => ({
				...this._def.shape(),
				...t
			})
		});
	}
	merge(t) {
		return new e({
			unknownKeys: t._def.unknownKeys,
			catchall: t._def.catchall,
			shape: () => ({
				...this._def.shape(),
				...t._def.shape()
			}),
			typeName: q.ZodObject
		});
	}
	setKey(e, t) {
		return this.augment({ [e]: t });
	}
	catchall(t) {
		return new e({
			...this._def,
			catchall: t
		});
	}
	pick(t) {
		let n = {};
		for (let e of z.objectKeys(t)) t[e] && this.shape[e] && (n[e] = this.shape[e]);
		return new e({
			...this._def,
			shape: () => n
		});
	}
	omit(t) {
		let n = {};
		for (let e of z.objectKeys(this.shape)) t[e] || (n[e] = this.shape[e]);
		return new e({
			...this._def,
			shape: () => n
		});
	}
	deepPartial() {
		return pl(this);
	}
	partial(t) {
		let n = {};
		for (let e of z.objectKeys(this.shape)) {
			let r = this.shape[e];
			n[e] = t && !t[e] ? r : r.optional();
		}
		return new e({
			...this._def,
			shape: () => n
		});
	}
	required(t) {
		let n = {};
		for (let e of z.objectKeys(this.shape)) if (t && !t[e]) n[e] = this.shape[e];
		else {
			let t = this.shape[e];
			for (; t instanceof Ml;) t = t._def.innerType;
			n[e] = t;
		}
		return new e({
			...this._def,
			shape: () => n
		});
	}
	keyof() {
		return Dl(z.objectKeys(this.shape));
	}
};
ml.create = (e, t) => new ml({
	shape: () => e,
	unknownKeys: "strip",
	catchall: ul.create(),
	typeName: q.ZodObject,
	...G(t)
}), ml.strictCreate = (e, t) => new ml({
	shape: () => e,
	unknownKeys: "strict",
	catchall: ul.create(),
	typeName: q.ZodObject,
	...G(t)
}), ml.lazycreate = (e, t) => new ml({
	shape: e,
	unknownKeys: "strip",
	catchall: ul.create(),
	typeName: q.ZodObject,
	...G(t)
});
var hl = class extends K {
	_parse(e) {
		let { ctx: t } = this._processInputParams(e), n = this._def.options;
		function r(e) {
			for (let t of e) if (t.result.status === "valid") return t.result;
			for (let n of e) if (n.result.status === "dirty") return t.common.issues.push(...n.ctx.common.issues), n.result;
			let n = e.map((e) => new hc(e.ctx.common.issues));
			return H(t, {
				code: V.invalid_union,
				unionErrors: n
			}), U;
		}
		if (t.common.async) return Promise.all(n.map(async (e) => {
			let n = {
				...t,
				common: {
					...t.common,
					issues: []
				},
				parent: null
			};
			return {
				result: await e._parseAsync({
					data: t.data,
					path: t.path,
					parent: n
				}),
				ctx: n
			};
		})).then(r);
		{
			let e, r = [];
			for (let i of n) {
				let n = {
					...t,
					common: {
						...t.common,
						issues: []
					},
					parent: null
				}, a = i._parseSync({
					data: t.data,
					path: t.path,
					parent: n
				});
				if (a.status === "valid") return a;
				a.status === "dirty" && !e && (e = {
					result: a,
					ctx: n
				}), n.common.issues.length && r.push(n.common.issues);
			}
			if (e) return t.common.issues.push(...e.ctx.common.issues), e.result;
			let i = r.map((e) => new hc(e));
			return H(t, {
				code: V.invalid_union,
				unionErrors: i
			}), U;
		}
	}
	get options() {
		return this._def.options;
	}
};
hl.create = (e, t) => new hl({
	options: e,
	typeName: q.ZodUnion,
	...G(t)
});
var gl = (e) => e instanceof Tl ? gl(e.schema) : e instanceof jl ? gl(e.innerType()) : e instanceof El ? [e.value] : e instanceof Ol ? e.options : e instanceof kl ? z.objectValues(e.enum) : e instanceof Pl ? gl(e._def.innerType) : e instanceof ol ? [void 0] : e instanceof sl ? [null] : e instanceof Ml ? [void 0, ...gl(e.unwrap())] : e instanceof Nl ? [null, ...gl(e.unwrap())] : e instanceof Ll || e instanceof zl ? gl(e.unwrap()) : e instanceof Fl ? gl(e._def.innerType) : [], _l = class e extends K {
	_parse(e) {
		let { ctx: t } = this._processInputParams(e);
		if (t.parsedType !== B.object) return H(t, {
			code: V.invalid_type,
			expected: B.object,
			received: t.parsedType
		}), U;
		let n = this.discriminator, r = t.data[n], i = this.optionsMap.get(r);
		return i ? t.common.async ? i._parseAsync({
			data: t.data,
			path: t.path,
			parent: t
		}) : i._parseSync({
			data: t.data,
			path: t.path,
			parent: t
		}) : (H(t, {
			code: V.invalid_union_discriminator,
			options: Array.from(this.optionsMap.keys()),
			path: [n]
		}), U);
	}
	get discriminator() {
		return this._def.discriminator;
	}
	get options() {
		return this._def.options;
	}
	get optionsMap() {
		return this._def.optionsMap;
	}
	static create(t, n, r) {
		let i = /* @__PURE__ */ new Map();
		for (let e of n) {
			let n = gl(e.shape[t]);
			if (!n.length) throw Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
			for (let r of n) {
				if (i.has(r)) throw Error(`Discriminator property ${String(t)} has duplicate value ${String(r)}`);
				i.set(r, e);
			}
		}
		return new e({
			typeName: q.ZodDiscriminatedUnion,
			discriminator: t,
			options: n,
			optionsMap: i,
			...G(r)
		});
	}
};
function vl(e, t) {
	let n = mc(e), r = mc(t);
	if (e === t) return {
		valid: !0,
		data: e
	};
	if (n === B.object && r === B.object) {
		let n = z.objectKeys(t), r = z.objectKeys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		for (let n of r) {
			let r = vl(e[n], t[n]);
			if (!r.valid) return { valid: !1 };
			i[n] = r.data;
		}
		return {
			valid: !0,
			data: i
		};
	}
	if (n === B.array && r === B.array) {
		if (e.length !== t.length) return { valid: !1 };
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r], a = t[r], o = vl(i, a);
			if (!o.valid) return { valid: !1 };
			n.push(o.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return n === B.date && r === B.date && +e == +t ? {
		valid: !0,
		data: e
	} : { valid: !1 };
}
var yl = class extends K {
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e), r = (e, r) => {
			if (Cc(e) || Cc(r)) return U;
			let i = vl(e.value, r.value);
			return i.valid ? ((wc(e) || wc(r)) && t.dirty(), {
				status: t.value,
				value: i.data
			}) : (H(n, { code: V.invalid_intersection_types }), U);
		};
		return n.common.async ? Promise.all([this._def.left._parseAsync({
			data: n.data,
			path: n.path,
			parent: n
		}), this._def.right._parseAsync({
			data: n.data,
			path: n.path,
			parent: n
		})]).then(([e, t]) => r(e, t)) : r(this._def.left._parseSync({
			data: n.data,
			path: n.path,
			parent: n
		}), this._def.right._parseSync({
			data: n.data,
			path: n.path,
			parent: n
		}));
	}
};
yl.create = (e, t, n) => new yl({
	left: e,
	right: t,
	typeName: q.ZodIntersection,
	...G(n)
});
var bl = class e extends K {
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e);
		if (n.parsedType !== B.array) return H(n, {
			code: V.invalid_type,
			expected: B.array,
			received: n.parsedType
		}), U;
		if (n.data.length < this._def.items.length) return H(n, {
			code: V.too_small,
			minimum: this._def.items.length,
			inclusive: !0,
			exact: !1,
			type: "array"
		}), U;
		!this._def.rest && n.data.length > this._def.items.length && (H(n, {
			code: V.too_big,
			maximum: this._def.items.length,
			inclusive: !0,
			exact: !1,
			type: "array"
		}), t.dirty());
		let r = [...n.data].map((e, t) => {
			let r = this._def.items[t] || this._def.rest;
			return r ? r._parse(new Dc(n, e, n.path, t)) : null;
		}).filter((e) => !!e);
		return n.common.async ? Promise.all(r).then((e) => bc.mergeArray(t, e)) : bc.mergeArray(t, r);
	}
	get items() {
		return this._def.items;
	}
	rest(t) {
		return new e({
			...this._def,
			rest: t
		});
	}
};
bl.create = (e, t) => {
	if (!Array.isArray(e)) throw Error("You must pass an array of schemas to z.tuple([ ... ])");
	return new bl({
		items: e,
		typeName: q.ZodTuple,
		rest: null,
		...G(t)
	});
};
var xl = class e extends K {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e);
		if (n.parsedType !== B.object) return H(n, {
			code: V.invalid_type,
			expected: B.object,
			received: n.parsedType
		}), U;
		let r = [], i = this._def.keyType, a = this._def.valueType;
		for (let e in n.data) r.push({
			key: i._parse(new Dc(n, e, n.path, e)),
			value: a._parse(new Dc(n, n.data[e], n.path, e)),
			alwaysSet: e in n.data
		});
		return n.common.async ? bc.mergeObjectAsync(t, r) : bc.mergeObjectSync(t, r);
	}
	get element() {
		return this._def.valueType;
	}
	static create(t, n, r) {
		return n instanceof K ? new e({
			keyType: t,
			valueType: n,
			typeName: q.ZodRecord,
			...G(r)
		}) : new e({
			keyType: $c.create(),
			valueType: t,
			typeName: q.ZodRecord,
			...G(n)
		});
	}
}, Sl = class extends K {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e);
		if (n.parsedType !== B.map) return H(n, {
			code: V.invalid_type,
			expected: B.map,
			received: n.parsedType
		}), U;
		let r = this._def.keyType, i = this._def.valueType, a = [...n.data.entries()].map(([e, t], a) => ({
			key: r._parse(new Dc(n, e, n.path, [a, "key"])),
			value: i._parse(new Dc(n, t, n.path, [a, "value"]))
		}));
		if (n.common.async) {
			let e = /* @__PURE__ */ new Map();
			return Promise.resolve().then(async () => {
				for (let n of a) {
					let r = await n.key, i = await n.value;
					if (r.status === "aborted" || i.status === "aborted") return U;
					(r.status === "dirty" || i.status === "dirty") && t.dirty(), e.set(r.value, i.value);
				}
				return {
					status: t.value,
					value: e
				};
			});
		}
		{
			let e = /* @__PURE__ */ new Map();
			for (let n of a) {
				let r = n.key, i = n.value;
				if (r.status === "aborted" || i.status === "aborted") return U;
				(r.status === "dirty" || i.status === "dirty") && t.dirty(), e.set(r.value, i.value);
			}
			return {
				status: t.value,
				value: e
			};
		}
	}
};
Sl.create = (e, t, n) => new Sl({
	valueType: t,
	keyType: e,
	typeName: q.ZodMap,
	...G(n)
});
var Cl = class e extends K {
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e);
		if (n.parsedType !== B.set) return H(n, {
			code: V.invalid_type,
			expected: B.set,
			received: n.parsedType
		}), U;
		let r = this._def;
		r.minSize !== null && n.data.size < r.minSize.value && (H(n, {
			code: V.too_small,
			minimum: r.minSize.value,
			type: "set",
			inclusive: !0,
			exact: !1,
			message: r.minSize.message
		}), t.dirty()), r.maxSize !== null && n.data.size > r.maxSize.value && (H(n, {
			code: V.too_big,
			maximum: r.maxSize.value,
			type: "set",
			inclusive: !0,
			exact: !1,
			message: r.maxSize.message
		}), t.dirty());
		let i = this._def.valueType;
		function a(e) {
			let n = /* @__PURE__ */ new Set();
			for (let r of e) {
				if (r.status === "aborted") return U;
				r.status === "dirty" && t.dirty(), n.add(r.value);
			}
			return {
				status: t.value,
				value: n
			};
		}
		let o = [...n.data.values()].map((e, t) => i._parse(new Dc(n, e, n.path, t)));
		return n.common.async ? Promise.all(o).then((e) => a(e)) : a(o);
	}
	min(t, n) {
		return new e({
			...this._def,
			minSize: {
				value: t,
				message: W.toString(n)
			}
		});
	}
	max(t, n) {
		return new e({
			...this._def,
			maxSize: {
				value: t,
				message: W.toString(n)
			}
		});
	}
	size(e, t) {
		return this.min(e, t).max(e, t);
	}
	nonempty(e) {
		return this.min(1, e);
	}
};
Cl.create = (e, t) => new Cl({
	valueType: e,
	minSize: null,
	maxSize: null,
	typeName: q.ZodSet,
	...G(t)
});
var wl = class e extends K {
	constructor() {
		super(...arguments), this.validate = this.implement;
	}
	_parse(e) {
		let { ctx: t } = this._processInputParams(e);
		if (t.parsedType !== B.function) return H(t, {
			code: V.invalid_type,
			expected: B.function,
			received: t.parsedType
		}), U;
		function n(e, n) {
			return yc({
				data: e,
				path: t.path,
				errorMaps: [
					t.common.contextualErrorMap,
					t.schemaErrorMap,
					vc(),
					gc
				].filter((e) => !!e),
				issueData: {
					code: V.invalid_arguments,
					argumentsError: n
				}
			});
		}
		function r(e, n) {
			return yc({
				data: e,
				path: t.path,
				errorMaps: [
					t.common.contextualErrorMap,
					t.schemaErrorMap,
					vc(),
					gc
				].filter((e) => !!e),
				issueData: {
					code: V.invalid_return_type,
					returnTypeError: n
				}
			});
		}
		let i = { errorMap: t.common.contextualErrorMap }, a = t.data;
		if (this._def.returns instanceof Al) {
			let e = this;
			return Sc(async function(...t) {
				let o = new hc([]), s = await e._def.args.parseAsync(t, i).catch((e) => {
					throw o.addIssue(n(t, e)), o;
				}), c = await Reflect.apply(a, this, s);
				return await e._def.returns._def.type.parseAsync(c, i).catch((e) => {
					throw o.addIssue(r(c, e)), o;
				});
			});
		}
		{
			let e = this;
			return Sc(function(...t) {
				let o = e._def.args.safeParse(t, i);
				if (!o.success) throw new hc([n(t, o.error)]);
				let s = Reflect.apply(a, this, o.data), c = e._def.returns.safeParse(s, i);
				if (!c.success) throw new hc([r(s, c.error)]);
				return c.data;
			});
		}
	}
	parameters() {
		return this._def.args;
	}
	returnType() {
		return this._def.returns;
	}
	args(...t) {
		return new e({
			...this._def,
			args: bl.create(t).rest(ll.create())
		});
	}
	returns(t) {
		return new e({
			...this._def,
			returns: t
		});
	}
	implement(e) {
		return this.parse(e);
	}
	strictImplement(e) {
		return this.parse(e);
	}
	static create(t, n, r) {
		return new e({
			args: t || bl.create([]).rest(ll.create()),
			returns: n || ll.create(),
			typeName: q.ZodFunction,
			...G(r)
		});
	}
}, Tl = class extends K {
	get schema() {
		return this._def.getter();
	}
	_parse(e) {
		let { ctx: t } = this._processInputParams(e);
		return this._def.getter()._parse({
			data: t.data,
			path: t.path,
			parent: t
		});
	}
};
Tl.create = (e, t) => new Tl({
	getter: e,
	typeName: q.ZodLazy,
	...G(t)
});
var El = class extends K {
	_parse(e) {
		if (e.data !== this._def.value) {
			let t = this._getOrReturnCtx(e);
			return H(t, {
				received: t.data,
				code: V.invalid_literal,
				expected: this._def.value
			}), U;
		}
		return {
			status: "valid",
			value: e.data
		};
	}
	get value() {
		return this._def.value;
	}
};
El.create = (e, t) => new El({
	value: e,
	typeName: q.ZodLiteral,
	...G(t)
});
function Dl(e, t) {
	return new Ol({
		values: e,
		typeName: q.ZodEnum,
		...G(t)
	});
}
var Ol = class e extends K {
	_parse(e) {
		if (typeof e.data != "string") {
			let t = this._getOrReturnCtx(e), n = this._def.values;
			return H(t, {
				expected: z.joinValues(n),
				received: t.parsedType,
				code: V.invalid_type
			}), U;
		}
		if (this._cache ||= new Set(this._def.values), !this._cache.has(e.data)) {
			let t = this._getOrReturnCtx(e), n = this._def.values;
			return H(t, {
				received: t.data,
				code: V.invalid_enum_value,
				options: n
			}), U;
		}
		return Sc(e.data);
	}
	get options() {
		return this._def.values;
	}
	get enum() {
		let e = {};
		for (let t of this._def.values) e[t] = t;
		return e;
	}
	get Values() {
		let e = {};
		for (let t of this._def.values) e[t] = t;
		return e;
	}
	get Enum() {
		let e = {};
		for (let t of this._def.values) e[t] = t;
		return e;
	}
	extract(t, n = this._def) {
		return e.create(t, {
			...this._def,
			...n
		});
	}
	exclude(t, n = this._def) {
		return e.create(this.options.filter((e) => !t.includes(e)), {
			...this._def,
			...n
		});
	}
};
Ol.create = Dl;
var kl = class extends K {
	_parse(e) {
		let t = z.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
		if (n.parsedType !== B.string && n.parsedType !== B.number) {
			let e = z.objectValues(t);
			return H(n, {
				expected: z.joinValues(e),
				received: n.parsedType,
				code: V.invalid_type
			}), U;
		}
		if (this._cache ||= new Set(z.getValidEnumValues(this._def.values)), !this._cache.has(e.data)) {
			let e = z.objectValues(t);
			return H(n, {
				received: n.data,
				code: V.invalid_enum_value,
				options: e
			}), U;
		}
		return Sc(e.data);
	}
	get enum() {
		return this._def.values;
	}
};
kl.create = (e, t) => new kl({
	values: e,
	typeName: q.ZodNativeEnum,
	...G(t)
});
var Al = class extends K {
	unwrap() {
		return this._def.type;
	}
	_parse(e) {
		let { ctx: t } = this._processInputParams(e);
		return t.parsedType !== B.promise && t.common.async === !1 ? (H(t, {
			code: V.invalid_type,
			expected: B.promise,
			received: t.parsedType
		}), U) : Sc((t.parsedType === B.promise ? t.data : Promise.resolve(t.data)).then((e) => this._def.type.parseAsync(e, {
			path: t.path,
			errorMap: t.common.contextualErrorMap
		})));
	}
};
Al.create = (e, t) => new Al({
	type: e,
	typeName: q.ZodPromise,
	...G(t)
});
var jl = class extends K {
	innerType() {
		return this._def.schema;
	}
	sourceType() {
		return this._def.schema._def.typeName === q.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
	}
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e), r = this._def.effect || null, i = {
			addIssue: (e) => {
				H(n, e), e.fatal ? t.abort() : t.dirty();
			},
			get path() {
				return n.path;
			}
		};
		if (i.addIssue = i.addIssue.bind(i), r.type === "preprocess") {
			let e = r.transform(n.data, i);
			if (n.common.async) return Promise.resolve(e).then(async (e) => {
				if (t.value === "aborted") return U;
				let r = await this._def.schema._parseAsync({
					data: e,
					path: n.path,
					parent: n
				});
				return r.status === "aborted" ? U : r.status === "dirty" || t.value === "dirty" ? xc(r.value) : r;
			});
			{
				if (t.value === "aborted") return U;
				let r = this._def.schema._parseSync({
					data: e,
					path: n.path,
					parent: n
				});
				return r.status === "aborted" ? U : r.status === "dirty" || t.value === "dirty" ? xc(r.value) : r;
			}
		}
		if (r.type === "refinement") {
			let e = (e) => {
				let t = r.refinement(e, i);
				if (n.common.async) return Promise.resolve(t);
				if (t instanceof Promise) throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
				return e;
			};
			if (n.common.async === !1) {
				let r = this._def.schema._parseSync({
					data: n.data,
					path: n.path,
					parent: n
				});
				return r.status === "aborted" ? U : (r.status === "dirty" && t.dirty(), e(r.value), {
					status: t.value,
					value: r.value
				});
			}
			return this._def.schema._parseAsync({
				data: n.data,
				path: n.path,
				parent: n
			}).then((n) => n.status === "aborted" ? U : (n.status === "dirty" && t.dirty(), e(n.value).then(() => ({
				status: t.value,
				value: n.value
			}))));
		}
		if (r.type === "transform") {
			if (n.common.async === !1) {
				let e = this._def.schema._parseSync({
					data: n.data,
					path: n.path,
					parent: n
				});
				if (!Tc(e)) return U;
				let a = r.transform(e.value, i);
				if (a instanceof Promise) throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
				return {
					status: t.value,
					value: a
				};
			}
			return this._def.schema._parseAsync({
				data: n.data,
				path: n.path,
				parent: n
			}).then((e) => Tc(e) ? Promise.resolve(r.transform(e.value, i)).then((e) => ({
				status: t.value,
				value: e
			})) : U);
		}
		z.assertNever(r);
	}
};
jl.create = (e, t, n) => new jl({
	schema: e,
	typeName: q.ZodEffects,
	effect: t,
	...G(n)
}), jl.createWithPreprocess = (e, t, n) => new jl({
	schema: t,
	effect: {
		type: "preprocess",
		transform: e
	},
	typeName: q.ZodEffects,
	...G(n)
});
var Ml = class extends K {
	_parse(e) {
		return this._getType(e) === B.undefined ? Sc(void 0) : this._def.innerType._parse(e);
	}
	unwrap() {
		return this._def.innerType;
	}
};
Ml.create = (e, t) => new Ml({
	innerType: e,
	typeName: q.ZodOptional,
	...G(t)
});
var Nl = class extends K {
	_parse(e) {
		return this._getType(e) === B.null ? Sc(null) : this._def.innerType._parse(e);
	}
	unwrap() {
		return this._def.innerType;
	}
};
Nl.create = (e, t) => new Nl({
	innerType: e,
	typeName: q.ZodNullable,
	...G(t)
});
var Pl = class extends K {
	_parse(e) {
		let { ctx: t } = this._processInputParams(e), n = t.data;
		return t.parsedType === B.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
			data: n,
			path: t.path,
			parent: t
		});
	}
	removeDefault() {
		return this._def.innerType;
	}
};
Pl.create = (e, t) => new Pl({
	innerType: e,
	typeName: q.ZodDefault,
	defaultValue: typeof t.default == "function" ? t.default : () => t.default,
	...G(t)
});
var Fl = class extends K {
	_parse(e) {
		let { ctx: t } = this._processInputParams(e), n = {
			...t,
			common: {
				...t.common,
				issues: []
			}
		}, r = this._def.innerType._parse({
			data: n.data,
			path: n.path,
			parent: { ...n }
		});
		return Ec(r) ? r.then((e) => ({
			status: "valid",
			value: e.status === "valid" ? e.value : this._def.catchValue({
				get error() {
					return new hc(n.common.issues);
				},
				input: n.data
			})
		})) : {
			status: "valid",
			value: r.status === "valid" ? r.value : this._def.catchValue({
				get error() {
					return new hc(n.common.issues);
				},
				input: n.data
			})
		};
	}
	removeCatch() {
		return this._def.innerType;
	}
};
Fl.create = (e, t) => new Fl({
	innerType: e,
	typeName: q.ZodCatch,
	catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
	...G(t)
});
var Il = class extends K {
	_parse(e) {
		if (this._getType(e) !== B.nan) {
			let t = this._getOrReturnCtx(e);
			return H(t, {
				code: V.invalid_type,
				expected: B.nan,
				received: t.parsedType
			}), U;
		}
		return {
			status: "valid",
			value: e.data
		};
	}
};
Il.create = (e) => new Il({
	typeName: q.ZodNaN,
	...G(e)
});
var Ll = class extends K {
	_parse(e) {
		let { ctx: t } = this._processInputParams(e), n = t.data;
		return this._def.type._parse({
			data: n,
			path: t.path,
			parent: t
		});
	}
	unwrap() {
		return this._def.type;
	}
}, Rl = class e extends K {
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e);
		if (n.common.async) return (async () => {
			let e = await this._def.in._parseAsync({
				data: n.data,
				path: n.path,
				parent: n
			});
			return e.status === "aborted" ? U : e.status === "dirty" ? (t.dirty(), xc(e.value)) : this._def.out._parseAsync({
				data: e.value,
				path: n.path,
				parent: n
			});
		})();
		{
			let e = this._def.in._parseSync({
				data: n.data,
				path: n.path,
				parent: n
			});
			return e.status === "aborted" ? U : e.status === "dirty" ? (t.dirty(), {
				status: "dirty",
				value: e.value
			}) : this._def.out._parseSync({
				data: e.value,
				path: n.path,
				parent: n
			});
		}
	}
	static create(t, n) {
		return new e({
			in: t,
			out: n,
			typeName: q.ZodPipeline
		});
	}
}, zl = class extends K {
	_parse(e) {
		let t = this._def.innerType._parse(e), n = (e) => (Tc(e) && (e.value = Object.freeze(e.value)), e);
		return Ec(t) ? t.then((e) => n(e)) : n(t);
	}
	unwrap() {
		return this._def.innerType;
	}
};
zl.create = (e, t) => new zl({
	innerType: e,
	typeName: q.ZodReadonly,
	...G(t)
}), ml.lazycreate;
var q;
(function(e) {
	e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(q ||= {}), $c.create;
var Bl = tl.create;
Il.create, nl.create;
var Vl = rl.create;
il.create, al.create, ol.create, sl.create, cl.create, ll.create, ul.create, dl.create, fl.create;
var Hl = ml.create;
ml.strictCreate, hl.create, _l.create, yl.create, bl.create, xl.create, Sl.create, Cl.create, wl.create, Tl.create, El.create, Ol.create, kl.create, Al.create, jl.create, Ml.create, Nl.create, jl.createWithPreprocess, Rl.create;
// src/store.ts
var Ul = "现代化界面", Wl = "modern_ui", Gl = 340, Kl = Hl({
	enabled: Vl().default(!0).catch(!0),
	desktopTwoColumn: Vl().default(!0).catch(!0),
	desktopDockedDrawer: Vl().default(!1).catch(!1),
	leftSidebarWidth: Bl().min(320).max(460).default(360).catch(360),
	overlayPanelWidth: Bl().min(720).default(960).catch(960),
	mainChatMaxWidth: Bl().min(0).default(960).catch(960),
	floatingChatInput: Vl().default(!0).catch(!0),
	inputBottomGap: Bl().min(0).max(120).default(15).catch(15),
	inputSideGap: Bl().min(0).max(80).default(16).catch(16),
	quickReplyCollapsed: Vl().default(!1).catch(!1),
	reduceMotion: Vl().default(!1).catch(!1),
	reduceAdvancedEffects: Vl().default(!1).catch(!1),
	modernWorldInfoEditor: Vl().default(!0).catch(!0),
	modernWorldSelect: Vl().default(!0).catch(!0),
	modernCharacterManagement: Vl().default(!0).catch(!0),
	modernExtensionSettings: Vl().default(!0).catch(!0)
}).default({});
function ql() {
	return window.SillyTavern?.getContext?.() || {};
}
function Jl() {
	let e = ql();
	return !window.extension_settings && e.extensionSettings && (window.extension_settings = e.extensionSettings), window.extension_settings = window.extension_settings || {}, window.extension_settings;
}
function Yl() {
	let t = Jl()[Wl];
	t = !t || typeof t != "object" ? {} : e(t), t.desktopTwoColumn === void 0 && typeof t.desktopThreeColumn == "boolean" && (t.desktopTwoColumn = t.desktopThreeColumn), t.overlayPanelWidth === void 0 && t.leftSidebarWidth === Gl && (t.leftSidebarWidth = 360);
	let n = Kl.safeParse(t);
	return n.success ? n.data : (console.warn(`[${Ul}] 设置读取失败，已使用默认设置。`, n.error), Kl.parse({}));
}
function Xl(t) {
	let n = Jl();
	n[Wl] = e(t);
	let r = ql();
	typeof window.saveSettingsDebounced == "function" ? window.saveSettingsDebounced() : typeof r.saveSettingsDebounced == "function" && r.saveSettingsDebounced();
}
var Zl = Ds(Ul, () => {
	let t = /* @__PURE__ */ tn(Yl()), n = /* @__PURE__ */ tn(!0), r = window.eventSource ?? window.SillyTavern?.getContext?.()?.eventSource, i = () => {
		t.value = Yl();
	};
	r?.on?.("settings_loaded", i);
	let a = Ba(() => n.value && t.value.enabled), o = Ba(() => a.value && t.value.desktopTwoColumn);
	Xn(() => {
		Xl(Kl.parse(e(t.value)));
	});
	function s() {
		t.value = Kl.parse({});
	}
	function c() {
		t.value = {
			...t.value,
			enabled: !1
		};
	}
	function l(e = {}) {
		typeof r?.removeListener == "function" ? r.removeListener("settings_loaded", i) : typeof r?.off == "function" && r.off("settings_loaded", i);
	}
	return {
		settings: t,
		should_enable: n,
		is_active: a,
		should_use_two_column: o,
		resetSettings: s,
		disableModernLayout: c,
		destroy: l
	};
}), Ql = {
	key: 0,
	class: "inline-drawer"
}, $l = { class: "inline-drawer-toggle inline-drawer-header" }, eu = { class: "inline-drawer-content" }, tu = {
	class: "checkbox_label",
	for: "th_modern_enabled"
}, nu = {
	class: "checkbox_label",
	for: "th_modern_two_column"
}, ru = ["disabled"], iu = { class: "flex-container justifySpaceBetween alignitemscenter m-t-0_5" }, au = { class: "flex-container alignitemscenter" }, ou = ["value"], su = { class: "flex-container justifySpaceBetween alignitemscenter m-t-0_5" }, cu = { class: "flex-container alignitemscenter" }, lu = ["value"], uu = { class: "flex-container justifySpaceBetween alignitemscenter m-t-0_5" }, du = { class: "flex-container alignitemscenter" }, fu = ["value"], pu = {
	class: "checkbox_label",
	for: "th_modern_floating_input"
}, mu = { class: "flex-container justifySpaceBetween alignitemscenter m-t-0_5" }, hu = { class: "flex-container alignitemscenter" }, gu = { class: "notes m-r-0_5" }, _u = { class: "flex-container alignitemscenter m-t-0_5" }, vu = { class: "range-block-range flex1" }, yu = [
	"min",
	"max",
	"disabled"
], bu = { class: "range-block-counter m-l-0_5" }, xu = [
	"value",
	"min",
	"max",
	"disabled"
], Su = { class: "notes" }, Cu = { class: "flex-container justifySpaceBetween alignitemscenter m-t-0_5" }, wu = { class: "flex-container alignitemscenter" }, Tu = { class: "notes m-r-0_5" }, Eu = { class: "flex-container alignitemscenter m-t-0_5" }, Du = { class: "range-block-range flex1" }, Ou = [
	"min",
	"max",
	"disabled"
], ku = { class: "range-block-counter m-l-0_5" }, Au = [
	"value",
	"min",
	"max",
	"disabled"
], ju = { class: "notes" }, Mu = {
	class: "checkbox_label",
	for: "th_modern_wi_editor"
}, Nu = ["disabled"], Pu = {
	class: "checkbox_label",
	for: "th_modern_cm"
}, Fu = {
	class: "checkbox_label",
	for: "th_modern_ext_settings"
}, Iu = {
	class: "checkbox_label",
	for: "th_modern_reduce_motion"
}, Lu = {
	class: "checkbox_label",
	for: "th_modern_reduce_effects"
}, Ru = /*#__PURE__*/ ((e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
})(/* @__PURE__ */ cr({
	__name: "Panel",
	setup(e) {
		let t = Zl();
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
			(n === !0 || n === window.SillyTavern?.POPUP_RESULT?.AFFIRMATIVE) && (t.resetSettings(), window.toastr !== void 0 && window.toastr.info("已恢复现代化界面默认设置。", Ul));
		}
		return (e, i) => N(t).should_enable ? (Qi(), ra("div", Ql, [I("div", $l, [I("b", null, [I("span", null, Oe(N(Ul)), 1), I("a", {
			class: "notes-link",
			title: "恢复默认设置",
			onClick: Vo(r, ["stop"])
		}, [...i[22] ||= [I("i", { class: "fa-solid fa-rotate-left" }, null, -1)]])]), i[23] ||= I("div", { class: "inline-drawer-icon fa-solid fa-circle-chevron-down down" }, null, -1)]), I("div", eu, [
			I("label", tu, [Un(I("input", {
				id: "th_modern_enabled",
				"onUpdate:modelValue": i[0] ||= (e) => N(t).settings.enabled = e,
				type: "checkbox"
			}, null, 512), [[Fo, N(t).settings.enabled]]), i[24] ||= I("span", null, "启用现代化界面", -1)]),
			i[43] ||= I("small", { class: "notes" }, "全面应用毛玻璃、常驻侧边栏与现代布局排版", -1),
			i[44] ||= I("hr", null, null, -1),
			i[45] ||= I("h4", null, "分栏与排版", -1),
			I("label", nu, [Un(I("input", {
				id: "th_modern_two_column",
				"onUpdate:modelValue": i[1] ||= (e) => N(t).settings.desktopTwoColumn = e,
				type: "checkbox"
			}, null, 512), [[Fo, N(t).settings.desktopTwoColumn]]), i[25] ||= I("span", null, "宽屏两栏与滑出面板", -1)]),
			i[46] ||= I("small", { class: "notes" }, "屏幕 ≥900px 时将左侧抽屉转为常驻侧边栏", -1),
			I("label", {
				class: ve(["checkbox_label", { "is-disabled": !N(t).settings.desktopTwoColumn }]),
				for: "th_modern_docked_drawer"
			}, [Un(I("input", {
				id: "th_modern_docked_drawer",
				"onUpdate:modelValue": i[2] ||= (e) => N(t).settings.desktopDockedDrawer = e,
				type: "checkbox",
				disabled: !N(t).settings.desktopTwoColumn
			}, null, 8, ru), [[Fo, N(t).settings.desktopDockedDrawer]]), i[26] ||= I("span", null, "固定三栏排版", -1)], 2),
			i[47] ||= I("small", { class: "notes" }, "空间足够时固定右侧设置抽屉；窄屏自动降级为滑出面板", -1),
			I("div", iu, [i[28] ||= I("span", null, "左侧栏宽度", -1), I("div", au, [I("input", {
				value: N(t).settings.leftSidebarWidth,
				class: "text_pole width100px text-right",
				type: "number",
				min: "320",
				max: "460",
				step: "4",
				onChange: i[3] ||= (e) => n(e, "leftSidebarWidth", 320, 460),
				onBlur: i[4] ||= (e) => n(e, "leftSidebarWidth", 320, 460)
			}, null, 40, ou), i[27] ||= I("span", { class: "m-l-0_5" }, "px", -1)])]),
			I("div", su, [i[30] ||= I("span", null, "滑出面板偏好宽度", -1), I("div", cu, [I("input", {
				value: N(t).settings.overlayPanelWidth,
				class: "text_pole width100px text-right",
				type: "number",
				min: "720",
				step: "20",
				onChange: i[5] ||= (e) => n(e, "overlayPanelWidth", 720),
				onBlur: i[6] ||= (e) => n(e, "overlayPanelWidth", 720)
			}, null, 40, lu), i[29] ||= I("span", { class: "m-l-0_5" }, "px", -1)])]),
			I("div", uu, [i[32] ||= I("span", null, "主聊天最小宽度", -1), I("div", du, [I("input", {
				value: N(t).settings.mainChatMaxWidth,
				class: "text_pole width100px text-right",
				type: "number",
				min: "0",
				step: "20",
				onChange: i[7] ||= (e) => n(e, "mainChatMaxWidth", 0),
				onBlur: i[8] ||= (e) => n(e, "mainChatMaxWidth", 0)
			}, null, 40, fu), i[31] ||= I("span", { class: "m-l-0_5" }, "px", -1)])]),
			i[48] ||= I("small", { class: "notes" }, "0 表示跟随酒馆宽度比例始终铺满可用空间。", -1),
			i[49] ||= I("hr", null, null, -1),
			i[50] ||= I("h4", null, "输入框设置", -1),
			I("label", pu, [Un(I("input", {
				id: "th_modern_floating_input",
				"onUpdate:modelValue": i[9] ||= (e) => N(t).settings.floatingChatInput = e,
				type: "checkbox"
			}, null, 512), [[Fo, N(t).settings.floatingChatInput]]), i[33] ||= I("span", null, "悬浮输入框", -1)]),
			i[51] ||= I("small", { class: "notes" }, "开启时输入框以毛玻璃胶囊形态悬浮于聊天区上方；关闭时与原版 SillyTavern 一样固定置底铺满。", -1),
			I("div", { class: ve({ "is-disabled": !N(t).settings.floatingChatInput }) }, [
				I("div", mu, [i[34] ||= I("span", null, "底部留白边距", -1), I("div", hu, [I("span", gu, Oe(N(t).settings.inputBottomGap) + " px", 1)])]),
				I("div", _u, [I("div", vu, [Un(I("input", {
					"onUpdate:modelValue": i[10] ||= (e) => N(t).settings.inputBottomGap = e,
					type: "range",
					class: "range_slider",
					min: N(0),
					max: N(120),
					step: "1",
					disabled: !N(t).settings.floatingChatInput
				}, null, 8, yu), [[
					Po,
					N(t).settings.inputBottomGap,
					void 0,
					{ number: !0 }
				]])]), I("div", bu, [I("input", {
					value: N(t).settings.inputBottomGap,
					class: "text_pole width60px text-center",
					type: "number",
					min: N(0),
					max: N(120),
					step: "1",
					disabled: !N(t).settings.floatingChatInput,
					onChange: i[11] ||= (e) => n(e, "inputBottomGap", N(0), N(120)),
					onBlur: i[12] ||= (e) => n(e, "inputBottomGap", N(0), N(120))
				}, null, 40, xu)])]),
				I("small", Su, "调整悬浮输入框与窗口底边的间距（" + Oe(N(t).settings.inputBottomGap) + " px）。", 1),
				I("div", Cu, [i[35] ||= I("span", null, "两侧留白边距", -1), I("div", wu, [I("span", Tu, Oe(N(t).settings.inputSideGap) + " px", 1)])]),
				I("div", Eu, [I("div", Du, [Un(I("input", {
					"onUpdate:modelValue": i[13] ||= (e) => N(t).settings.inputSideGap = e,
					type: "range",
					class: "range_slider",
					min: N(0),
					max: N(80),
					step: "1",
					disabled: !N(t).settings.floatingChatInput
				}, null, 8, Ou), [[
					Po,
					N(t).settings.inputSideGap,
					void 0,
					{ number: !0 }
				]])]), I("div", ku, [I("input", {
					value: N(t).settings.inputSideGap,
					class: "text_pole width60px text-center",
					type: "number",
					min: N(0),
					max: N(80),
					step: "1",
					disabled: !N(t).settings.floatingChatInput,
					onChange: i[14] ||= (e) => n(e, "inputSideGap", N(0), N(80)),
					onBlur: i[15] ||= (e) => n(e, "inputSideGap", N(0), N(80))
				}, null, 40, Au)])]),
				I("small", ju, "调整悬浮输入框左右两侧的留白边距（" + Oe(N(t).settings.inputSideGap) + " px）。", 1)
			], 2),
			i[52] ||= I("hr", null, null, -1),
			i[53] ||= I("h4", null, "增强子模块", -1),
			I("label", Mu, [Un(I("input", {
				id: "th_modern_wi_editor",
				"onUpdate:modelValue": i[16] ||= (e) => N(t).settings.modernWorldInfoEditor = e,
				type: "checkbox"
			}, null, 512), [[Fo, N(t).settings.modernWorldInfoEditor]]), i[36] ||= I("span", null, "现代世界书管理", -1)]),
			i[54] ||= I("small", { class: "notes" }, "优化世界书条目卡片瀑布流与条目编辑网格", -1),
			I("label", {
				class: ve(["checkbox_label", { "is-disabled": !N(t).settings.modernWorldInfoEditor }]),
				for: "th_modern_wi_select"
			}, [Un(I("input", {
				id: "th_modern_wi_select",
				"onUpdate:modelValue": i[17] ||= (e) => N(t).settings.modernWorldSelect = e,
				type: "checkbox",
				disabled: !N(t).settings.modernWorldInfoEditor
			}, null, 8, Nu), [[Fo, N(t).settings.modernWorldSelect]]), i[37] ||= I("span", null, "现代世界书选择器", -1)], 2),
			i[55] ||= I("small", { class: "notes" }, "多端卡片式世界书下拉选择面板与收藏置顶", -1),
			I("label", Pu, [Un(I("input", {
				id: "th_modern_cm",
				"onUpdate:modelValue": i[18] ||= (e) => N(t).settings.modernCharacterManagement = e,
				type: "checkbox"
			}, null, 512), [[Fo, N(t).settings.modernCharacterManagement]]), i[38] ||= I("span", null, "现代角色管理界面", -1)]),
			i[56] ||= I("small", { class: "notes" }, "美化角色卡片列表、头部操作栏与角色编辑抽屉", -1),
			I("label", Fu, [Un(I("input", {
				id: "th_modern_ext_settings",
				"onUpdate:modelValue": i[19] ||= (e) => N(t).settings.modernExtensionSettings = e,
				type: "checkbox"
			}, null, 512), [[Fo, N(t).settings.modernExtensionSettings]]), i[39] ||= I("span", null, "现代扩展设置抽屉", -1)]),
			i[57] ||= I("small", { class: "notes" }, "将酒馆扩展设置抽屉重排为侧边栏导航与卡片分栏体验，深度兼容菜单精简器等扩展", -1),
			i[58] ||= I("hr", null, null, -1),
			i[59] ||= I("h4", null, "视觉与性能", -1),
			I("label", Iu, [Un(I("input", {
				id: "th_modern_reduce_motion",
				"onUpdate:modelValue": i[20] ||= (e) => N(t).settings.reduceMotion = e,
				type: "checkbox"
			}, null, 512), [[Fo, N(t).settings.reduceMotion]]), i[40] ||= I("span", null, "减弱动态效果", -1)]),
			i[60] ||= I("small", { class: "notes" }, "最小化过渡与缩放动画，降低能耗并提升响应", -1),
			I("label", Lu, [Un(I("input", {
				id: "th_modern_reduce_effects",
				"onUpdate:modelValue": i[21] ||= (e) => N(t).settings.reduceAdvancedEffects = e,
				type: "checkbox"
			}, null, 512), [[Fo, N(t).settings.reduceAdvancedEffects]]), i[41] ||= I("span", null, "精简高级特效", -1)]),
			i[61] ||= I("small", { class: "notes" }, "关闭深度阴影与高强度发光滤镜", -1),
			i[62] ||= I("hr", null, null, -1),
			I("div", { class: "flex-container justifyEnd m-t-1" }, [I("div", {
				class: "menu_button",
				title: "重置现代化界面设置",
				onClick: r
			}, [...i[42] ||= [I("i", { class: "fa-solid fa-rotate-left" }, null, -1), I("span", null, "恢复默认设置", -1)]])])
		])])) : ma("", !0);
	}
}), [["__scopeId", "data-v-c3ef14dc"]]), zu = "th-modern-panel-root";
function Bu(e) {
	$(`.${zu}`).remove();
	let t = Go(Ru).use(e), n = document.getElementById("modern-ui-reborn_container"), r = !1;
	return n ? (n.classList.add(zu), $(n).empty()) : (n = $("<div>").attr("id", "modern-ui-reborn_container").addClass(zu).appendTo("#extensions_settings")[0], r = !0), t.mount(n), { destroy: () => {
		t.unmount(), r ? $(n).remove() : $(n).empty().removeClass(zu);
	} };
}
// src/mobile-world-select-module.ts
var Vu = "(min-width: 1200px)", Hu = "(max-width: 560px)", Uu = "th-modern-mobile-world-source", Wu = "th-modern-mobile-world-source-native", Gu = "th-modern-mobile-world-select2-source", Ku = "th-modern-mobile-world-control", qu = "th-modern-mobile-world-picker", Ju = "th-modern-world-select-custom", Yu = "th_modern_world_book_favorites", Xu = 3e4, Zu = 90, Qu = [
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
], $u = {
	all: "全部",
	enabled: "已启用",
	favorites: "收藏"
};
function J(e, t, n) {
	let r = e.createElement(t);
	return n && (r.className = n), r;
}
function ed(e, t) {
	let n = J(e, "i", t);
	return n.setAttribute("aria-hidden", "true"), n;
}
function td(e) {
	return e.normalize("NFKC").toLocaleLowerCase().trim();
}
function nd(e) {
	return Array.isArray(e) ? Array.from(new Set(e.filter((e) => typeof e == "string").map((e) => e.trim()).filter(Boolean))) : [];
}
function rd(e) {
	let t = e;
	return t ? typeof t.closest == "function" ? t : t.nodeType === 3 ? t.parentElement ?? null : null : null;
}
var id = class {
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
		this.options = e, this.enabled = e.enabled, this.document = L(), this.window = R(), this.panelObserver = new this.window.MutationObserver(() => {
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
		}), this.document.addEventListener("click", this.captureRenameIntent, !0), this.favorites = this.readFavorites(), this.mountControllers(), this.applyEnabledState();
	}
	destroy() {
		this.panelObserver.disconnect(), this.documentObserver.disconnect(), this.controllerRefreshFrame &&= (this.window.cancelAnimationFrame(this.controllerRefreshFrame), 0), this.document.removeEventListener("click", this.captureRenameIntent, !0), this.clearRenameIntent(), this.closePicker(), this.unmountControllers(), this.document.querySelector("#WorldInfo")?.classList.remove(Ju);
	}
	setEnabled(e) {
		this.enabled === e || (this.enabled = e, this.closePicker()), this.applyEnabledState();
	}
	requestEnabledChange(e) {
		this.setEnabled(e), this.options.onEnabledChange(e);
	}
	openPicker(e) {
		this.enabled && (this.closePicker(), this.refreshFavoritesAndCleanInvalid(), this.picker = new od(this, e, () => {
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
		this.document.querySelector("#WorldInfo")?.classList.toggle(Ju, this.enabled);
		for (let e of this.controllers) e.setNativeMode(!this.enabled);
	}
	mountControllers() {
		for (let e = this.controllers.length - 1; e >= 0; --e) {
			let t = this.controllers[e];
			t.source.isConnected ? t.syncSelect2Container() : (this.isPickerFor(t) && this.closePicker(), t.destroy(), this.controllers.splice(e, 1));
		}
		for (let e of Qu) for (let t of this.document.querySelectorAll(e.selector)) {
			if (t.closest(".template_element") || this.controllers.some((e) => e.source === t)) continue;
			let n = new ad(this, t, e);
			n.mount(), n.setNativeMode(!this.enabled), this.controllers.push(n);
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
			if (e && e[Yu]) return new Set(nd(e[Yu]));
			let t = localStorage.getItem(Yu);
			return new Set(nd(t ? JSON.parse(t) : []));
		} catch (e) {
			return console.warn("[现代化界面] 读取世界书收藏失败。", e), /* @__PURE__ */ new Set();
		}
	}
	writeFavorites() {
		try {
			let e = [...this.favorites];
			localStorage.setItem(Yu, JSON.stringify(e)), window.extension_settings?.modern_ui && (window.extension_settings.modern_ui[Yu] = e, typeof window.saveSettingsDebounced == "function" && window.saveSettingsDebounced()), this.variableWriteErrorNotified = !1;
		} catch (e) {
			console.error("[现代化界面] 写入世界书收藏失败。", e), this.variableWriteErrorNotified ||= (toastr.error("世界书收藏保存失败，请稍后重试", "现代化界面"), !0);
		}
	}
	refreshFavoritesAndCleanInvalid() {
		this.favorites = this.readFavorites();
		let e = this.getAvailableWorldNames();
		if (e.size === 0) return;
		let t = new Set([...this.favorites].filter((t) => e.has(t)));
		t.size !== this.favorites.size && (this.favorites = t, this.writeFavorites());
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
		if (!rd(e.target)?.closest("#world_popup_name_button")) return;
		let t = this.document.querySelector("#world_editor_select")?.selectedOptions[0]?.label.trim() ?? "";
		if (!t) return;
		this.clearRenameIntent();
		let n = this.window.setTimeout(() => this.clearRenameIntent(), Xu);
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
}, ad = class {
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
	constructor(e, t, n) {
		this.manager = e, this.source = t, this.config = n, this.document = t.ownerDocument, this.window = this.document.defaultView ?? R(), this.namespace = `.thModernWorldSelect_${t.id || n.key}`;
	}
	mount() {
		if (this.wrapper) return;
		this.source.classList.add(Uu), this.surface = this.source.closest("#WorldInfo, .character_world, .persona_world") ?? this.source.parentElement ?? void 0, this.select2Container = this.findSelect2Container(), this.select2Container?.classList.add(Gu);
		let e = J(this.document, "div", Ku);
		e.dataset.source = this.source.id || this.config.key;
		let t = J(this.document, "button", "menu_button th-modern-mobile-world-trigger");
		t.type = "button", t.setAttribute("aria-haspopup", "dialog"), t.setAttribute("aria-expanded", "false"), t.append(ed(this.document, this.config.multiple ? "fa-solid fa-layer-group" : "fa-solid fa-book-open"));
		let n = J(this.document, "span", "th-modern-mobile-world-trigger-text"), r = J(this.document, "span", "th-modern-mobile-world-trigger-primary"), i = J(this.document, "span", "th-modern-mobile-world-trigger-secondary");
		n.append(r, i);
		let a = J(this.document, "span", "th-modern-mobile-world-trigger-count");
		t.append(n, a, ed(this.document, "fa-solid fa-chevron-down th-modern-mobile-world-trigger-chevron"));
		let o = J(this.document, "button", "menu_button menu_button_icon th-modern-mobile-world-native-return");
		o.type = "button", o.title = "使用现代世界书选择器", o.append(ed(this.document, "fa-solid fa-list-check"), J(this.document, "span")), o.lastElementChild.textContent = "现代选择", t.addEventListener("click", this.openPicker), o.addEventListener("click", this.returnToCustomMode), e.append(t, o), (this.select2Container ?? this.source).insertAdjacentElement("afterend", e), this.wrapper = e, this.trigger = t, this.primaryText = r, this.secondaryText = i, this.countBadge = a, this.nativeReturn = o, typeof this.window.$ == "function" ? (this.$source = this.window.$(this.source), this.$source.on(`change${this.namespace}`, this.onSourceChange)) : (this.nativeChangeHandler = this.onSourceChange, this.source.addEventListener("change", this.nativeChangeHandler)), this.observer = new this.window.MutationObserver(this.scheduleSync), this.observer.observe(this.source, {
			attributes: !0,
			attributeFilter: ["disabled"],
			childList: !0,
			subtree: !0
		}), this.syncTrigger();
	}
	destroy() {
		this.syncFrame &&= (this.window.cancelAnimationFrame(this.syncFrame), 0), this.observer?.disconnect(), this.observer = void 0, this.$source?.off(`change${this.namespace}`, this.onSourceChange), this.$source = void 0, this.nativeChangeHandler &&= (this.source.removeEventListener("change", this.nativeChangeHandler), void 0), this.trigger?.removeEventListener("click", this.openPicker), this.nativeReturn?.removeEventListener("click", this.returnToCustomMode), this.wrapper?.remove(), this.wrapper = void 0, this.trigger = void 0, this.primaryText = void 0, this.secondaryText = void 0, this.countBadge = void 0, this.nativeReturn = void 0, this.source.classList.remove(Uu, Wu), this.select2Container?.classList.remove(Gu), this.select2Container = void 0, this.surface = void 0, this.nativeMode = !1;
	}
	getOptions() {
		let e = Array.from(this.source.options).map((e, t) => {
			let n = String(e.label || e.textContent || e.value).trim();
			return {
				disabled: e.disabled,
				favoriteKey: e.value ? n : "",
				label: n,
				searchText: td(n),
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
		this.nativeMode = e, this.surface?.classList.toggle(Ju, !e), this.source.classList.toggle(Wu, e), this.wrapper?.classList.toggle("is-native", e), this.syncTrigger();
	}
	syncSelect2Container() {
		let e = this.findSelect2Container();
		e !== this.select2Container && (this.select2Container?.classList.remove(Gu), this.select2Container = e, this.select2Container?.classList.add(Gu), this.wrapper && (this.select2Container ?? this.source).insertAdjacentElement("afterend", this.wrapper));
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
}, od = class {
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
		let e = J(this.document, "dialog", qu), t = `th-modern-mobile-world-picker-title-${this.controller.source.id}`;
		e.setAttribute("role", "dialog"), e.setAttribute("aria-labelledby", t), e.tabIndex = -1;
		let n = J(this.document, "section", "th-modern-mobile-world-picker-sheet"), r = J(this.document, "span", "th-modern-mobile-world-picker-handle");
		r.setAttribute("aria-hidden", "true");
		let i = J(this.document, "header", "th-modern-mobile-world-picker-header"), a = J(this.document, "div", "th-modern-mobile-world-picker-heading"), o = J(this.document, "strong");
		o.id = t, o.textContent = this.controller.config.title, a.append(o);
		let s = J(this.document, "div", "th-modern-mobile-world-picker-header-actions"), c = J(this.document, "button", "menu_button th-modern-mobile-world-picker-native");
		c.type = "button", c.append(ed(this.document, "fa-solid fa-arrow-rotate-left"), this.document.createTextNode("原生界面")), c.addEventListener("click", this.useNativeMode);
		let l = J(this.document, "button", "menu_button th-modern-mobile-world-picker-close");
		l.type = "button", l.title = "关闭世界书选择", l.setAttribute("aria-label", "关闭世界书选择"), l.append(ed(this.document, "fa-solid fa-xmark")), l.addEventListener("click", this.close), s.append(c, l), i.append(a, s);
		let u = J(this.document, "nav", "th-modern-mobile-world-picker-tabs");
		u.setAttribute("role", "tablist"), u.setAttribute("aria-label", "世界书筛选"), u.addEventListener("click", this.onTabClick);
		let d = J(this.document, "label", "th-modern-mobile-world-picker-search");
		d.append(ed(this.document, "fa-solid fa-magnifying-glass"));
		let f = J(this.document, "input");
		f.type = "search", f.placeholder = "搜索世界书名称…", f.autocomplete = "off", f.spellcheck = !1, f.setAttribute("enterkeyhint", "search"), f.addEventListener("input", this.onSearchInput), f.addEventListener("keydown", this.onSearchKeyDown);
		let p = J(this.document, "button", "th-modern-mobile-world-picker-search-clear");
		p.type = "button", p.title = "清空搜索", p.setAttribute("aria-label", "清空搜索"), p.append(ed(this.document, "fa-solid fa-circle-xmark")), p.addEventListener("click", this.clearSearch), d.append(f, p);
		let m = J(this.document, "div", "th-modern-mobile-world-picker-status");
		m.setAttribute("aria-live", "polite");
		let h = J(this.document, "div", "th-modern-mobile-world-picker-viewport");
		h.tabIndex = 0, h.setAttribute("role", "listbox"), this.controller.config.multiple && h.setAttribute("aria-multiselectable", "true");
		let g = J(this.document, "div", "th-modern-mobile-world-picker-rows"), v = J(this.document, "div", "th-modern-mobile-world-picker-empty"), y = this.document.createTextNode("没有找到匹配的世界书");
		v.append(ed(this.document, "fa-regular fa-folder-open"), y), h.append(g, v), n.append(r, i, u, d, m, h), e.append(n), e.addEventListener("touchstart", this.stopDrawerAutoClose, { passive: !0 }), e.addEventListener("mousedown", this.stopDrawerAutoClose), e.addEventListener("click", this.onOverlayClick), e.addEventListener("keydown", this.onKeyDown), this.window.addEventListener("resize", this.syncLayout, { passive: !0 }), this.overlay = e, this.sheet = n, this.tabs = u, this.searchInput = f, this.clearSearchButton = p, this.resultStatus = m, this.viewport = h, this.rows = g, this.emptyState = v, this.emptyStateText = y, this.renderTabs(), this.filterOptions(), this.document.body.append(e), e.showModal(), this.syncLayout(), this.controller.syncTrigger(), this.window.requestAnimationFrame(() => {
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
			n.append(this.document.createTextNode($u[t]), J(this.document, "span")), n.lastElementChild.textContent = String(r), e.append(n);
		}
		this.tabs.replaceChildren(e);
	}
	filterOptions() {
		let e = td(this.query), t = this.options;
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
			r.append(ed(this.document, this.controller.config.multiple ? "fa-solid fa-check" : "fa-solid fa-circle"));
			let i = J(this.document, "span", "th-modern-mobile-world-picker-row-label"), a = this.document.createTextNode("");
			i.append(a);
			let o = ed(this.document, "fa-solid fa-check th-modern-mobile-world-picker-row-check");
			o.hidden = !0, n.append(r, i, o);
			let s = J(this.document, "button", "th-modern-mobile-world-picker-favorite");
			s.type = "button", s.addEventListener("click", this.onRowClick);
			let c = ed(this.document, "fa-solid fa-star"), l = ed(this.document, "fa-regular fa-star");
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
		return this.window.matchMedia(Vu).matches ? "wide" : this.window.matchMedia(Hu).matches ? "phone" : "narrow";
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
		let t = (rd(e.target)?.closest(".th-modern-mobile-world-picker-tab"))?.dataset.tab;
		t && t !== this.activeTab && this.getAvailableTabs().includes(t) && (this.activeTab = t, this.manager.rememberTab(this.controller, t), this.renderTabs(), this.filterOptions());
	};
	onSearchInput = () => {
		this.searchTimer && this.window.clearTimeout(this.searchTimer), this.searchTimer = this.window.setTimeout(() => {
			this.searchTimer = 0, this.query = this.searchInput?.value ?? "", this.filterOptions();
		}, Zu);
	};
	onSearchKeyDown = (e) => {
		e.key === "ArrowDown" && (e.preventDefault(), this.focusFilteredIndex(0));
	};
	clearSearch = () => {
		this.searchInput && (this.searchInput.value = "", this.query = "", this.filterOptions(), this.searchInput.focus({ preventScroll: !0 }));
	};
	onRowClick = (e) => {
		let t = rd(e.target), n = t?.closest(".th-modern-mobile-world-picker-row");
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
		let t = rd(e.target)?.closest(".th-modern-mobile-world-picker-row");
		if (!t || e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
		let n = Number(t.dataset.sourceIndex), r = this.filteredOptions.findIndex((e) => e.sourceIndex === n);
		r < 0 || (e.preventDefault(), this.focusFilteredIndex(r + (e.key === "ArrowDown" ? 1 : -1)));
	};
};
function sd(e) {
	let t = new id(e);
	return t.mount(), {
		destroy: () => t.destroy(),
		setEnabled: (e) => t.setEnabled(e)
	};
}
// src/world-info-module.ts
var cd = "th-modern-wi-enabled", ld = "th-modern-wi-native", ud = "th-modern-wi-selected", dd = "th-modern-wi-row-checked", fd = "th-modern-wi-multiselect", pd = "th-modern-wi-narrow", md = "th-modern-wi-detail-open", hd = "th-modern-wi-mobile-detail-open", gd = "th-modern-wi-native-editor-loading", _d = "thModernTabsReady", vd = "thModernSummaryReady", yd = "2026-07-18-compact-v2", bd = "thModernConditionalReady", xd = "thModernShortcutSyncReady", Sd = "2026-07-08-tabs-v4", Cd = /* @__PURE__ */ new Map(), wd = [
	["th-modern-wi-position-field", "select[name=\"position\"]"],
	["th-modern-wi-depth-field", "input[name=\"depth\"]"],
	["th-modern-wi-outlet-field", "input[name=\"outletName\"]"],
	["th-modern-wi-order-field", "input[name=\"order\"]"],
	["th-modern-wi-no-recursion-field", "input[name=\"excludeRecursion\"]"],
	["th-modern-wi-prevent-recursion-field", "input[name=\"preventRecursion\"]"]
];
function Td(e) {
	let t = e.getAttribute("uid") ?? e.dataset.uid, n = Number(t);
	return Number.isFinite(n) ? n : void 0;
}
function Ed(e) {
	let t = e.querySelector("#world_editor_select");
	return !t || t.value === "" ? "" : t.selectedOptions[0]?.textContent?.trim() ?? "";
}
function Dd(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Od(e) {
	return Dd(e) && typeof e.message == "string" ? e.message : String(e);
}
function kd(e, t, n) {
	let r = n.structuredClone(e);
	if (!Dd(r) || !Dd(r.entries)) throw Error("世界书数据缺少 entries 对象");
	let i = 0;
	for (let [e, n] of Object.entries(r.entries)) {
		let a = Number(Dd(n) && n.uid !== void 0 ? n.uid : e);
		Number.isFinite(a) && t.has(a) && (delete r.entries[e], i += 1);
	}
	if (i !== t.size) throw Error(`仅找到 ${i}/${t.size} 个待删除条目`);
	return Dd(r.originalData) && Array.isArray(r.originalData.entries) && (r.originalData.entries = r.originalData.entries.filter((e) => {
		let n = Number(Dd(e) ? e.uid ?? e.id : void 0);
		return !Number.isFinite(n) || !t.has(n);
	})), r;
}
function Ad(e) {
	let t = e;
	return t ? typeof t.closest == "function" ? t : t.nodeType === 3 ? t.parentElement ?? null : null : null;
}
function jd(e) {
	return Ad(e)?.closest(".world_entry") ?? null;
}
function Md(e) {
	let t = Ad(e);
	return t ? !!t.closest(".th-modern-wi-tab,.th-modern-wi-editor-surface,.th-modern-wi-editor-actions,.th-modern-wi-toolbar,.drag-handle,.inline-drawer-toggle,.move_entry_button,.duplicate_entry_button,.delete_entry_button,input,select,textarea,button,a,label,.menu_button,.select2,.select2-container") : !1;
}
function Nd(e) {
	let t = Ad(e);
	return !t || !t.closest("#world_popup_entries_list") || Md(t) ? null : jd(t);
}
function Pd(e, t, n, r) {
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
function Fd(e) {
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
function Id(e, t, n, r) {
	let i = Y(e, "button", t);
	return i.type = "button", i.title = n, i.setAttribute("aria-label", n), i.innerHTML = `<i class="${r}" aria-hidden="true"></i>`, i;
}
function Ld(e, t, n, r = !1) {
	let i = Y(e, "label", `th-modern-wi-field${r ? " th-modern-wi-field-wide" : ""}`);
	i.classList.add("th-modern-wi-labeled-field");
	let a = Y(e, "span", "th-modern-wi-field-label", n);
	return i.append(a, t), i;
}
function Rd(e, t, n, r = "") {
	t.append(Y(e, "div", `th-modern-wi-section-title${r ? ` ${r}` : ""}`, n));
}
function zd(e) {
	return e ? e.closest(".world_entry_form_control,.range-block,.checkbox_label,label.checkbox,label,.flex-container") ?? e.parentElement : null;
}
function X(e, t, n, r, i, a = !1, o = "") {
	let s = n.querySelector(r), c = zd(s);
	if (c && !c.closest(".th-modern-wi-panel")) {
		if (i && c === s) {
			let n = Ld(e, c, i, a);
			o && n.classList.add(o), t.append(n);
		} else c.classList.add("th-modern-wi-native-field"), i && (c.classList.add("th-modern-wi-labeled-field"), c.querySelector(":scope > .th-modern-wi-field-label") || c.prepend(Y(e, "span", "th-modern-wi-field-label", i))), a && c.classList.add("th-modern-wi-native-field-wide"), o && c.classList.add(o), t.append(c);
	}
}
function Bd(e, t, n, r, i = !1, a = "", o = "") {
	let s = t.querySelector(n)?.closest(r);
	s && !s.closest(".th-modern-wi-panel") && (s.classList.add("th-modern-wi-native-field"), o && (s.classList.add("th-modern-wi-labeled-field"), s.querySelector(":scope > .th-modern-wi-field-label") || s.prepend(Y(L(), "span", "th-modern-wi-field-label", o))), i && s.classList.add("th-modern-wi-native-field-wide"), a && s.classList.add(a), e.append(s));
}
function Vd(e, t, n, r, i, a = !1, o = "") {
	let s = n.querySelector(r);
	if (!s || s.closest(".th-modern-wi-panel")) return;
	let c = Ld(e, s, i, a);
	o && c.classList.add(o), t.append(c);
}
function Hd(e) {
	let t = e.ownerDocument.defaultView?.Event ?? Event;
	e.dispatchEvent(new t("input", { bubbles: !0 })), e.dispatchEvent(new t("change", { bubbles: !0 }));
}
function Ud(e, t) {
	let n = e.tagName.toLowerCase(), r = t.tagName.toLowerCase();
	n === "input" && r === "input" && e.type === "checkbox" ? t.checked = e.checked : n === "select" && r === "select" ? t.selectedIndex = e.selectedIndex : t.value = e.value;
}
function Wd(e, t, n) {
	let r = [...Array.from(t.querySelectorAll(n)), ...Array.from(e.querySelectorAll(n))];
	return r.find((e) => !e.closest(".th-modern-wi-shortcut-field")) ?? r[0] ?? null;
}
function Gd(e) {
	return wd.find(([t]) => e.classList.contains(t))?.[1];
}
function Kd(e, t) {
	for (let n of t.querySelectorAll(".th-modern-wi-shortcut-field")) {
		let r = Gd(n);
		if (!r) continue;
		let i = n.querySelector("input, select"), a = Wd(e, t, r);
		if (!i || !a || i === a || i.dataset[xd] === "true") continue;
		let o = () => {
			Ud(i, a), Hd(a);
		}, s = () => {
			Ud(a, i), i.disabled = a.disabled;
		};
		i.addEventListener("input", o), i.addEventListener("change", o), a.addEventListener("input", s), a.addEventListener("change", s), i.dataset[xd] = "true", s();
	}
}
function qd(e, t, n, r, i, a = !1, o = "") {
	let s = n.querySelector(r);
	if (!s) return;
	let c = s.tagName.toLowerCase() === "select", l = !c && s.type === "checkbox", u = c ? Y(e, "select") : Y(e, "input");
	if (u.classList.add("th-modern-wi-shortcut-control"), u.setAttribute("aria-label", i), c) {
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
		l ? s.checked = u.checked : c ? s.selectedIndex = u.selectedIndex : s.value = u.value, Hd(s);
	}, f = () => {
		l ? u.checked = s.checked : c ? u.selectedIndex = s.selectedIndex : u.value = s.value, u.disabled = s.disabled;
	};
	u.addEventListener("input", d), u.addEventListener("change", d), s.addEventListener("input", f), s.addEventListener("change", f), u.dataset[xd] = "true";
	let p = Ld(e, u, i, a);
	p.classList.add("th-modern-wi-shortcut-field"), o && p.classList.add(o), t.append(p);
}
function Jd(e, t, n, r, i = !1, a = "") {
	let o = Y(e, "div", "th-modern-wi-shared-slot");
	o.dataset.sharedName = r;
	let s = Ld(e, o, n, i);
	return s.classList.add("th-modern-wi-shared-field", a), t.append(s), o;
}
function Yd(e, t, n, r) {
	let i = zd(e.querySelector(t));
	i && !i.closest(".th-modern-wi-panel") && (i.classList.add("th-modern-wi-shared-control"), i.dataset.sharedName = n, r[0]?.append(i));
}
function Xd(e, t) {
	let n = [
		t,
		t.closest(".inline-drawer-content.inline-drawer-outlet"),
		t.closest(".th-modern-wi-editor-entry-host"),
		e
	];
	return n.filter((e, t) => !!e && n.indexOf(e) === t);
}
function Zd(e, t, n, r) {
	let i = Xd(e, t);
	for (let e of i) {
		let t = e.querySelector(`.th-modern-wi-shared-control[data-shared-name="${r}"]`);
		if (t) return t;
	}
	for (let e of i) {
		let t = zd(e.querySelector(n));
		if (t) return t.classList.add("th-modern-wi-shared-control"), t.dataset.sharedName = r, t;
	}
	return null;
}
function Qd(e, t, n) {
	let r = new Set(t.querySelectorAll(".th-modern-wi-shared-control[data-shared-name]")), i = Zd(e, t, ".keyprimary", "primary-key");
	i && r.add(i);
	for (let e of r) {
		let r = e.dataset.sharedName;
		if (!r) continue;
		let i = t.querySelector(`.th-modern-wi-panel-${n} .th-modern-wi-shared-slot[data-shared-name="${r}"]`);
		i && e.parentElement !== i && i.append(e);
	}
}
function $d(e, t) {
	let n = t.querySelector(".th-modern-wi-panel:not([hidden])")?.querySelector(".th-modern-wi-position-field select"), r = Array.from(t.querySelectorAll(".th-modern-wi-position-field select, select[name=\"position\"]")), i = n ?? r.find((e) => !e.closest(".th-modern-wi-shortcut-field")) ?? r[0] ?? e.querySelector("select[name=\"position\"]"), a = t.querySelector("input[name=\"delay_until_recursion\"]") ?? e.querySelector("input[name=\"delay_until_recursion\"]"), o = i?.value, s = i?.selectedOptions[0]?.textContent?.trim().toLowerCase() ?? "", c = nf(i) ? "depth" : o === "7" || s.includes("outlet") || s.includes("锚点") ? "outlet" : "normal", l = !!a?.checked;
	t.dataset.thModernPositionKind = c, t.dataset.thModernRecursionDelay = l ? "true" : "false";
	for (let e of t.querySelectorAll(".th-modern-wi-depth-field")) {
		e.hidden = c !== "depth";
		for (let t of e.querySelectorAll("input")) t.disabled = c !== "depth", t.style.visibility = c === "depth" ? "visible" : "hidden";
	}
	for (let e of t.querySelectorAll(".th-modern-wi-outlet-field")) e.hidden = c !== "outlet";
	for (let e of t.querySelectorAll(".th-modern-wi-recursion-level-field")) e.hidden = !l;
}
function ef(e, t) {
	let n = () => $d(e, t);
	if (t.dataset[bd] !== "true") {
		let e = (e) => {
			Ad(e.target)?.closest(".th-modern-wi-position-field, select[name=\"position\"], .th-modern-wi-delay-recursion-field, input[name=\"delay_until_recursion\"]") && n();
		};
		t.addEventListener("input", e), t.addEventListener("change", e), t.dataset[bd] = "true";
	}
	n();
}
function tf(e, t = e) {
	return t.querySelector("textarea[name=\"comment\"]")?.value.trim() || `UID ${Td(e) ?? ""}`.trim();
}
function nf(e) {
	let t = e?.selectedOptions[0], n = e?.value, r = t?.dataset.role, i = t?.textContent?.trim().toLowerCase() ?? "";
	return n === "4" || r === "0" || r === "1" || r === "2" || i.includes("@d") || i.includes("depth") || i.includes("深度");
}
function rf(e) {
	let t = e.querySelector("select[name=\"position\"]"), n = t?.selectedOptions[0]?.textContent?.trim() || "", r = e.querySelector("input[name=\"depth\"]")?.value.trim();
	return nf(t) && r ? `${n} ${r}` : n;
}
function af(e, t = e) {
	let n = e.querySelector(".th-modern-wi-row-summary");
	if (!n) return;
	let r = t.querySelector("input[name=\"order\"]")?.value, i = t.querySelector("select[name=\"entryStateSelector\"]")?.value, a = n.querySelector(".th-modern-wi-row-title"), o = n.querySelector(".th-modern-wi-row-meta"), s = n.querySelector(".th-modern-wi-row-stats");
	a && (a.textContent = tf(e, t)), o && (o.textContent = rf(t)), s && (s.textContent = r ? `#${r}` : ""), i && (e.dataset.thModernEntryState = i);
}
function of(e, t, n) {
	let r = t.querySelector(":scope > form.world_entry_form > .inline-drawer > .inline-drawer-header");
	if (!r) return;
	let i = r.querySelector(".th-modern-wi-row-summary");
	i || (i = Y(e, "div", "th-modern-wi-row-summary"), i.tabIndex = 0, i.setAttribute("role", "button"), i.setAttribute("aria-label", "打开世界书条目"), r.append(i)), i.dataset.layoutVersion !== yd && (i.innerHTML = "<span class=\"th-modern-wi-row-leading\" aria-hidden=\"true\"><span class=\"th-modern-wi-select-dot\"></span><span class=\"th-modern-wi-entry-state-icon\"></span></span><span class=\"th-modern-wi-row-text\"><span class=\"th-modern-wi-row-primary\"><strong class=\"th-modern-wi-row-title\"></strong><span class=\"th-modern-wi-row-stats\"></span></span><small class=\"th-modern-wi-row-meta\"></small></span>", i.dataset.layoutVersion = yd), t.dataset[vd] !== "true" && (t.dataset[vd] = "true", t.addEventListener("input", () => n(t)), t.addEventListener("change", () => n(t))), af(t);
}
function sf(e, t, n = e) {
	e.dataset.thModernActiveTab = t;
	for (let e of n.querySelectorAll(".th-modern-wi-tab")) {
		let n = e.dataset.panel === t;
		e.classList.toggle("active", n), e.setAttribute("aria-selected", String(n));
	}
	for (let e of n.querySelectorAll(".th-modern-wi-panel")) e.hidden = e.dataset.panel !== t;
	Qd(e, n, t), $d(e, n), n.querySelector(".th-modern-wi-panels")?.scrollTo({
		top: 0,
		left: 0
	});
}
function cf(e) {
	let t = Td(e);
	if (t !== void 0) {
		let e = Cd.get(t);
		if (e) return Cd.delete(t), e;
	}
	return e.dataset.thModernActiveTab || "main";
}
function lf(e) {
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
function uf(e, t) {
	t.dataset.thModernSwitchCaptureReady !== "true" && (t.addEventListener("click", (t) => {
		let n = Ad(t.target);
		if (!n?.closest(".switch_input_type_icon")) return;
		let r = Td(e);
		if (r !== void 0) {
			let t = n.closest(".th-modern-wi-panel")?.dataset.panel || e.dataset.thModernActiveTab || "keywords";
			Cd.set(r, t);
		}
	}, !0), t.dataset.thModernSwitchCaptureReady = "true"), t.onclick = (n) => {
		if (n.defaultPrevented) return;
		let r = Ad(n.target), i = r?.closest(".th-modern-wi-tab");
		if (i && t.contains(i)) {
			let r = i.dataset.panel;
			if (!r) return;
			n.preventDefault(), sf(e, r, t);
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
function df(e, t, n) {
	let r = t.querySelector(":scope > form.world_entry_form > .inline-drawer > .inline-drawer-content.inline-drawer-outlet"), i = t.querySelector(".world_entry_edit");
	if (!r || !i) return !1;
	if (t.dataset[_d] === "true") {
		let e = r.querySelector(":scope > .th-modern-wi-editor-surface");
		if (e) return e.dataset.thModernLayoutVersion = Sd, lf(t), uf(t, e), Kd(t, e), ef(t, e), sf(t, cf(t), e), !0;
		delete t.dataset[_d];
	}
	t.dataset[_d] = "true", of(e, t, n), lf(t);
	let a = Y(e, "div", "th-modern-wi-editor-surface");
	a.dataset.thModernLayoutVersion = Sd;
	let o = Y(e, "div", "th-modern-wi-editor-top"), s = Y(e, "div", "th-modern-wi-enable-dock"), c = Y(e, "div", "th-modern-wi-editor-actions"), l = Id(e, "menu_button th-modern-wi-action", "移动/复制到其他世界书", "fa-solid fa-arrow-right-arrow-left"), u = Id(e, "menu_button th-modern-wi-action", "复制条目", "fa-regular fa-copy"), d = Id(e, "menu_button th-modern-wi-action danger", "删除条目", "fa-regular fa-trash-can");
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
			e.preventDefault(), sf(t, n, a);
		}), f.append(i);
		let o = Y(e, "div", "th-modern-wi-panel");
		o.classList.add(`th-modern-wi-panel-${n}`), o.dataset.panel = n, p.append(o), h.set(n, o);
	}
	let g = Y(e, "div", "th-modern-wi-content-panel");
	o.append(s, f, c), a.append(o, p, g), r.prepend(a), uf(t, a), Vd(e, s, t, ".killSwitch", "启用", !1, "th-modern-wi-enable-field");
	let v = h.get("main");
	Vd(e, v, t, "textarea[name=\"comment\"]", "条目标题/备注", !0, "th-modern-wi-title-field"), Vd(e, v, t, "select[name=\"entryStateSelector\"]", "条目状态", !1, "th-modern-wi-state-field"), qd(e, v, t, "select[name=\"position\"]", "插入位置", !0, "th-modern-wi-position-field"), qd(e, v, t, "input[name=\"depth\"]", "深度", !1, "th-modern-wi-depth-field"), qd(e, v, t, "input[name=\"outletName\"]", "锚点名称", !1, "th-modern-wi-outlet-field"), qd(e, v, t, "input[name=\"order\"]", "顺序", !1, "th-modern-wi-order-field"), qd(e, v, t, "input[name=\"excludeRecursion\"]", "不可递归", !1, "th-modern-wi-no-recursion-field");
	let y = Jd(e, v, "主要关键字", "primary-key", !0, "th-modern-wi-primary-key-field");
	qd(e, v, t, "input[name=\"preventRecursion\"]", "防止进一步递归", !1, "th-modern-wi-prevent-recursion-field");
	let b = h.get("keywords"), x = Jd(e, b, "主要关键字", "primary-key", !0, "th-modern-wi-primary-key-field");
	X(e, b, t, "select[name=\"entryLogicType\"]", "逻辑", !1, "th-modern-wi-logic-field"), X(e, b, t, ".keysecondary", "可选过滤器", !0, "th-modern-wi-secondary-key-field"), X(e, b, t, "select[name=\"caseSensitive\"]", "区分大小写", !1, "th-modern-wi-case-field"), X(e, b, t, "select[name=\"matchWholeWords\"]", "全词匹配", !1, "th-modern-wi-whole-field"), X(e, b, t, "select[name=\"useGroupScoring\"]", "组评分", !1, "th-modern-wi-group-scoring-field"), X(e, b, t, "input[name=\"scanDepth\"]", "扫描深度", !1, "th-modern-wi-scan-field"), X(e, b, t, "input[name=\"automationId\"]", "自动化 ID", !1, "th-modern-wi-automation-field"), Yd(t, ".keyprimary", "primary-key", [y, x]);
	let S = h.get("insert");
	Vd(e, S, t, "select[name=\"position\"]", "插入位置", !0, "th-modern-wi-position-field"), Vd(e, S, t, "input[name=\"depth\"]", "深度", !1, "th-modern-wi-depth-field"), X(e, S, t, "input[name=\"outletName\"]", "锚点名称", !1, "th-modern-wi-outlet-field"), Vd(e, S, t, "input[name=\"order\"]", "顺序", !1, "th-modern-wi-order-field"), Vd(e, S, t, "input[name=\"probability\"]", "触发概率", !1, "th-modern-wi-probability-field"), X(e, S, t, "input[name=\"useProbability\"]", "使用概率", !1, "th-modern-wi-use-probability-field"), X(e, S, t, "input[name=\"group\"]", "包含组", !0, "th-modern-wi-group-field"), X(e, S, t, "input[name=\"groupWeight\"]", "分组权重", !1, "th-modern-wi-group-weight-field"), X(e, S, t, "input[name=\"sticky\"]", "黏附", !1, "th-modern-wi-sticky-field"), X(e, S, t, "input[name=\"cooldown\"]", "冷却", !1, "th-modern-wi-cooldown-field"), X(e, S, t, "input[name=\"delay\"]", "延迟", !1, "th-modern-wi-delay-field"), Bd(S, t, "select[name=\"characterFilter\"]", ".flex4", !0, "th-modern-wi-character-filter-field", "绑定到角色或标签"), Bd(S, t, "select[name=\"triggers\"]", ".flex4", !0, "th-modern-wi-generation-trigger-field", "筛选生成触发器"), X(e, S, t, "input[name=\"delayUntilRecursionLevel\"]", "递归等级", !1, "th-modern-wi-recursion-level-field"), X(e, S, t, "input[name=\"excludeRecursion\"]", "不可递归", !1, "th-modern-wi-no-recursion-field"), X(e, S, t, "input[name=\"preventRecursion\"]", "防止进一步递归", !1, "th-modern-wi-prevent-recursion-field"), X(e, S, t, "input[name=\"delay_until_recursion\"]", "延迟到递归", !1, "th-modern-wi-delay-recursion-field"), X(e, S, t, "input[name=\"ignoreBudget\"]", "无视回复限额", !1, "th-modern-wi-budget-field");
	let C = h.get("trigger");
	return Rd(e, C, "额外匹配来源", "th-modern-wi-match-source-title"), X(e, C, t, "input[name=\"matchCharacterDescription\"]", "角色描述", !1, "th-modern-wi-match-source-field"), X(e, C, t, "input[name=\"matchCharacterPersonality\"]", "角色性格", !1, "th-modern-wi-match-source-field"), X(e, C, t, "input[name=\"matchScenario\"]", "情景", !1, "th-modern-wi-match-source-field"), X(e, C, t, "input[name=\"matchPersonaDescription\"]", "用户设定描述", !1, "th-modern-wi-match-source-field"), X(e, C, t, "input[name=\"matchCharacterDepthPrompt\"]", "角色备注", !1, "th-modern-wi-match-source-field"), X(e, C, t, "input[name=\"matchCreatorNotes\"]", "创作者的注释", !1, "th-modern-wi-match-source-field"), X(e, g, t, "textarea[name=\"content\"]", "正文", !0), Kd(t, a), ef(t, a), sf(t, cf(t), a), !0;
}
var ff = class {
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
		this.document = L(), this.window = R();
	}
	scheduleSummaryUpdate = (e) => {
		if (!this.mounted || this.pendingSummaryUpdates.has(e)) return;
		let t = this.window.requestAnimationFrame(() => {
			this.pendingSummaryUpdates.delete(e), this.mounted && e.isConnected && af(e);
		});
		this.pendingSummaryUpdates.set(e, t);
	};
	mount() {
		if (this.mounted) {
			this.ensureLayout();
			return;
		}
		let e = this.findWorldInfo(), t = this.findWorldPopup(), n = this.findEntriesList();
		e && t && n && (this.mounted = !0, this.selectedWorldName = Ed(this.document), e.classList.add(ld), this.ensureLayout(t), this.bindResponsiveMode(), this.bindEvents(), this.enhanceEntries(), this.isNarrowMode() || this.selectFirstEntry());
	}
	isMounted() {
		return this.mounted;
	}
	destroy() {
		let e = this.mounted;
		this.worldRevision += 1, this.setDeleteBusy(!1), this.findWorldInfo()?.classList.remove(ld, fd, hd), this.observer?.disconnect(), this.observer = void 0, this.popupObserver?.disconnect(), this.popupObserver = void 0, this.observedPopup = void 0, this.pendingReconcileFrame &&= (this.window.cancelAnimationFrame(this.pendingReconcileFrame), 0), this.cancelPendingEditorRetry(), this.cancelPendingSummaryUpdates(), this.clearSelection(), this.selectedUids.clear(), Cd.clear(), this.selectedWorldName = "", this.multiSelect = !1, this.mounted = !1, this.pendingEnhance &&= (this.window.cancelAnimationFrame(this.pendingEnhance), 0), this.documentClickHandler &&= (this.document.removeEventListener("click", this.documentClickHandler, !0), void 0), this.documentKeyDownHandler &&= (this.document.removeEventListener("keydown", this.documentKeyDownHandler, !0), void 0), this.documentChangeHandler &&= (this.document.removeEventListener("change", this.documentChangeHandler, !0), void 0), this.worldSelect && this.worldSelectChangeHandler && this.worldSelect.off("change.thModernWorldInfo_modern_ui", this.worldSelectChangeHandler), this.worldSelect = void 0, this.worldSelectChangeHandler = void 0, this.narrowQuery && this.narrowQueryHandler && this.narrowQuery.removeEventListener("change", this.narrowQueryHandler), this.narrowQuery = void 0, this.narrowQueryHandler = void 0, this.mobileDetailOpen = !1, this.mobileListScrollTop = 0;
		for (let e of this.document.querySelectorAll(".world_entry")) e.classList.remove(ud, dd, gd);
		return this.observedList = void 0, Fd(this.moved), this.shell?.remove(), this.shell = void 0, this.worldbar = void 0, this.toolbar = void 0, this.main = void 0, this.listPane = void 0, this.editorPane = void 0, this.moreMenu = void 0, e;
	}
	bindResponsiveMode() {
		this.narrowQuery = this.window.matchMedia("(max-width: 899.98px)"), this.narrowQueryHandler = () => this.syncResponsiveMode(), this.narrowQuery.addEventListener("change", this.narrowQueryHandler), this.syncResponsiveMode();
	}
	isNarrowMode() {
		return this.narrowQuery?.matches ?? this.window.matchMedia("(max-width: 899.98px)").matches;
	}
	syncResponsiveMode() {
		let e = this.isNarrowMode(), t = e && this.mobileDetailOpen && !!this.selectedEntry;
		this.shell?.classList.toggle(pd, e), this.findWorldInfo()?.classList.toggle(hd, t), e ? this.shell?.classList.toggle(md, t) : (this.mobileDetailOpen = !1, this.shell?.classList.remove(md), this.selectFirstEntry());
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
		if (this.multiButton && this.multiButton.isConnected || (this.multiButton = Id(this.document, "menu_button th-modern-wi-multi-toggle", "多选条目", "fa-regular fa-square-check"), this.multiButton.addEventListener("click", () => this.toggleMultiSelect())), this.deleteSelectedButton && this.deleteSelectedButton.isConnected || (this.deleteSelectedButton = Id(this.document, "menu_button th-modern-wi-delete-selected danger", "删除选中条目", "fa-regular fa-trash-can"), this.deleteSelectedButton.hidden = this.selectedUids.size === 0, this.deleteSelectedButton.addEventListener("click", () => void this.deleteSelectedEntries())), !this.moreMenu || !this.moreMenu.isConnected) {
			let e = Y(this.document, "details", "th-modern-wi-more-menu"), t = Y(this.document, "summary", "menu_button th-modern-wi-more-toggle");
			t.title = "更多条目操作", t.setAttribute("aria-label", "更多条目操作"), t.innerHTML = "<i class=\"fa-solid fa-ellipsis\" aria-hidden=\"true\"></i>";
			let n = Y(this.document, "div", "th-modern-wi-more-popover");
			e.append(t, n), e.addEventListener("click", (t) => {
				Ad(t.target)?.closest("#OpenAllWIEntries, #CloseAllWIEntries, #world_backfill_memos, #world_apply_current_sorting") && (e.open = !1);
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
			i && i.parentElement !== n && Pd(i, n, this.moved);
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
		(s.firstElementChild !== l || s.lastElementChild !== c) && (s.append(l, c), n = !0), r && r.parentElement !== l && (Pd(r, l, this.moved), n = !0);
		let f = t.querySelector("#world_create_button")?.closest(".flex-container");
		f && f.parentElement !== a && (Pd(f, a, this.moved), n = !0);
		let p = t.querySelector("#world_info_search")?.closest(".flex-container");
		p && p.parentElement !== o && (Pd(p, o, this.moved), n = !0), this.ensureToolbarButtons(o, t);
		let m = this.findWorldInfo()?.querySelector(":scope > .th-modern-drawer-titlebar .th-modern-drawer-actions");
		if (m) {
			let e = m.firstElementChild;
			for (let t of ["#WI_panel_pin_div", "#WorldInfoheader + .flex-container .notes-link"]) {
				let n = this.findWorldInfo()?.querySelector(t);
				n && n.parentElement !== m && Pd(n, m, this.moved, e);
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
			let t = Ad(e.target);
			this.moreMenu?.open && t && !this.moreMenu.contains(t) && (this.moreMenu.open = !1), Nd(e.target) && this.onEntryClick(e);
		}, this.documentKeyDownHandler = (e) => this.onEntryKeyDown(e), this.documentChangeHandler = (e) => {
			Ad(e.target)?.matches("#world_editor_select") && this.syncSelectedWorld();
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
			for (let t of e.querySelectorAll(":scope > .world_entry")) if (of(this.document, t, this.scheduleSummaryUpdate), this.multiSelect || this.selectedUids.size > 0) {
				let e = Td(t);
				t.classList.toggle(dd, e !== void 0 && this.selectedUids.has(e));
			}
		}
	}
	restoreSelectionAfterRender() {
		this.selectedEntry?.isConnected || (this.clearSelection(), this.mobileDetailOpen = !1, this.syncResponsiveMode(), this.isNarrowMode() || this.selectFirstEntry());
	}
	syncSelectedWorld() {
		let e = Ed(this.document);
		if (e !== this.selectedWorldName) {
			this.selectedWorldName = e, this.worldRevision += 1, this.clearSelection(), this.cancelPendingSummaryUpdates(), this.selectedUids.clear(), Cd.clear();
			for (let e of this.document.querySelectorAll(".world_entry")) e.classList.remove(dd);
			this.updateDeleteSelectedButton();
		}
	}
	onEntryKeyDown(e) {
		if (this.deleteBusy || e.repeat || e.key !== "Enter" && e.key !== " ") return;
		let t = Ad(e.target)?.closest(".th-modern-wi-row-summary"), n = t ? Nd(t) : null;
		n && (e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), this.multiSelect ? this.toggleEntrySelected(n) : this.selectEntry(n));
	}
	onEntryClick(e) {
		if (this.deleteBusy) return;
		let t = Nd(e.target);
		if (!t) return;
		let n = Ad(e.target);
		this.nativeEditorToggleEntry === t && n?.closest(".inline-drawer-toggle") || (this.multiSelect ? (e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), this.toggleEntrySelected(t)) : (e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), this.selectEntry(t)));
	}
	selectFirstEntry() {
		if (this.selectedEntry?.isConnected) return;
		let e = this.findEntriesList()?.querySelector(".world_entry");
		e && this.selectEntry(e);
	}
	clearSelection() {
		this.cancelPendingEditorRetry(), this.cancelPendingSummaryUpdates(this.selectedEntry), this.selectedEntry?.classList.remove(gd), this.detachEntryEditor(), this.selectedEntry?.classList.remove(ud), this.selectedEntry = void 0;
	}
	selectEntry(e) {
		this.selectedEntry === e ? (this.editorPane?.childElementCount || this.ensureEntryEditor(e), this.openMobileDetail()) : (this.clearSelection(), this.selectedEntry = e, e.classList.add(ud), this.ensureEntryEditor(e), this.openMobileDetail());
	}
	ensureEntryEditor(e) {
		if (e.classList.contains(gd)) return;
		if (this.cancelPendingEditorRetry(), of(this.document, e, this.scheduleSummaryUpdate), df(this.document, e, this.scheduleSummaryUpdate)) {
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
			e.classList.add(gd);
		}
		let r = 0, i = this.editorRetryRevision, a = () => {
			this.mounted && this.selectedEntry === e && i === this.editorRetryRevision && (r += 1, df(this.document, e, this.scheduleSummaryUpdate) ? (e.classList.remove(gd), this.attachEntryEditor(e)) : r > 20 ? e.classList.remove(gd) : this.pendingEditorRetry = this.window.setTimeout(() => {
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
		Fd(this.editorMoved), e && af(e), this.editorPane?.replaceChildren();
	}
	attachEntryEditor(e) {
		if (!this.editorPane || this.selectedEntry !== e) return;
		let t = e.querySelector(":scope > form.world_entry_form > .inline-drawer > .inline-drawer-content.inline-drawer-outlet");
		if (!t || t.closest(".th-modern-wi-native-editor")) return;
		this.detachEntryEditor();
		let n = Id(this.document, "menu_button th-modern-wi-mobile-back", "返回世界书条目列表", "fa-solid fa-arrow-left");
		n.append(Y(this.document, "span", "", "返回条目列表")), n.addEventListener("click", (e) => {
			e.preventDefault(), this.closeMobileDetail();
		});
		let r = Y(this.document, "div", `${e.className} th-modern-wi-editor-entry-host`);
		for (let t of Array.from(e.attributes)) t.name !== "class" && r.setAttribute(t.name, t.value);
		let i = Y(this.document, "form", "world_entry_form"), a = Y(this.document, "div", "inline-drawer"), o = () => af(e, r);
		r.addEventListener("input", o), r.addEventListener("change", o), i.append(a), r.append(i), this.editorPane.replaceChildren(n, r), t.classList.add("th-modern-wi-active-editor-content"), Pd(t, a, this.editorMoved), af(e, r);
	}
	toggleMultiSelect() {
		if (!this.deleteBusy) {
			if (this.multiSelect = !this.multiSelect, this.findWorldInfo()?.classList.toggle(fd, this.multiSelect), this.multiButton?.classList.toggle("active", this.multiSelect), !this.multiSelect) {
				this.selectedUids.clear();
				for (let e of this.document.querySelectorAll(".world_entry")) e.classList.remove(dd);
			}
			this.updateDeleteSelectedButton();
		}
	}
	toggleEntrySelected(e) {
		let t = Td(e);
		t !== void 0 && (this.selectedUids.has(t) ? (this.selectedUids.delete(t), e.classList.remove(dd)) : (this.selectedUids.add(t), e.classList.add(dd)), this.updateDeleteSelectedButton());
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
		return this.mounted && this.worldRevision === t && Ed(this.document) === e;
	}
	async deleteSelectedEntries() {
		if (this.deleteBusy) return;
		let e = Array.from(this.selectedUids);
		if (!e.length) return;
		let t = Ed(this.document);
		if (!t) {
			toastr.error("无法确定当前正在编辑的世界书");
			return;
		}
		let n = this.worldRevision, r = e.map((e) => this.document.querySelector(`.world_entry[uid="${e}"]`)).filter((e) => !!e).map((e) => tf(e)).slice(0, 5).join("、"), i = e.length > 5 ? ` 等 ${e.length} 项` : "", a = `确认删除 ${e.length} 个世界书条目？\n${r}${i}`;
		if (!this.window.confirm(a) || !this.isDeleteContextCurrent(t, n)) return;
		let o = new Set(e);
		this.setDeleteBusy(!0);
		let s, c = !1;
		try {
			if (s = await SillyTavern.loadWorldInfo(t), !this.isDeleteContextCurrent(t, n)) return;
			if (!s) throw Error(`无法读取世界书“${t}”`);
			let e = kd(s, o, this.window);
			if (!this.isDeleteContextCurrent(t, n) || (c = !0, await SillyTavern.saveWorldInfo(t, e, !0), !this.isDeleteContextCurrent(t, n))) return;
		} catch (e) {
			if (c && s) try {
				await SillyTavern.saveWorldInfo(t, s, !0);
			} catch (e) {
				console.error("[现代化界面] 恢复世界书缓存失败", e), toastr.error(`恢复世界书原数据失败：${Od(e)}`);
			}
			console.error("[现代化界面] 世界书批量删除失败", e), toastr.error(`删除世界书条目失败：${Od(e)}`);
			return;
		} finally {
			this.setDeleteBusy(!1);
		}
		if (this.isDeleteContextCurrent(t, n)) {
			this.clearSelection(), this.selectedUids.clear();
			for (let e of this.document.querySelectorAll(".world_entry")) e.classList.remove(dd);
			this.updateDeleteSelectedButton();
			try {
				await SillyTavern.reloadWorldInfoEditor(t, !0);
			} catch (e) {
				console.error("[现代化界面] 世界书删除成功，但编辑器刷新失败", e), toastr.error("条目已删除，但世界书编辑器刷新失败，请手动刷新");
			}
		}
	}
};
function pf(e) {
	let t = L(), n = R(), r, i, a = null, o = 0, s = () => t.querySelector("#WorldInfo"), c = () => {
		let e = r?.destroy() ?? !1;
		return r = void 0, e;
	}, l = (t, n) => {
		t ? i ? i.setEnabled(n) : i = sd({
			enabled: n,
			onEnabledChange: (t) => {
				e.settings.modernWorldSelect = t;
			}
		}) : (i?.destroy(), i = void 0);
	}, u = () => {
		o = 0;
		let n = e.is_active && e.settings.modernWorldInfoEditor;
		l(n, e.settings.modernWorldSelect);
		let i = s();
		m(i);
		let a = i?.classList.contains("openDrawer") ?? !1;
		i?.classList.toggle(cd, n && (a || !!r)), n && a ? (r ??= new ff(), r.mount(), r.ensureLayout()) : !n && c() && mf(t);
	}, d = (e) => {
		Ad(e.target)?.closest("#WIDrawerIcon, .drawer-toggle, [data-target=\"WorldInfo\"]") && (n.requestAnimationFrame(() => {
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
	let h = Zn(() => [
		e.is_active,
		e.settings.modernWorldInfoEditor,
		e.settings.modernWorldSelect
	], f, { immediate: !0 });
	return { destroy() {
		h(), p?.disconnect(), t.removeEventListener("click", d, !0), o &&= (n.cancelAnimationFrame(o), 0), s()?.classList.remove(cd), i?.destroy(), i = void 0, c() && mf(t);
	} };
}
function mf(e) {
	let t = Ed(e);
	if (t) try {
		SillyTavern.reloadWorldInfoEditor(t, !0);
	} catch (e) {
		console.error("[现代化界面] 恢复原生世界书编辑器失败", e), toastr.error("恢复原生世界书编辑器失败，请手动刷新");
	}
}
// src/index.ts
var hf = "th-modern-enabled", gf = "th-modern-two-column", _f = "th-modern-three-column", vf = "th-modern-docked-drawer", yf = "th-modern-main-fill", bf = "th-modern-floating-input", xf = "th-modern-reduce-motion", Sf = "th-modern-reduce-advanced-effects", Cf = "th-modern-sidebar-collapsed", wf = "th-modern-auto-collapse", Tf = "th-modern-sidebar-temp-expanded", Ef = "th-modern-resizing", Df = "th-modern-drawer-fullscreen", Of = "th-modern-drawer-open", kf = "th-modern-drawer-switching", Af = "th-modern-quick-replies-collapsed", jf = "th-modern-bootstrap-icons", Mf = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css", Nf = "th-modern-sidebar", Pf = "th-modern-sidebar-resize-handle", Ff = "th-modern-overlay-resize-handle", If = "th-modern-quick-reply-toggle", Lf = "th-modern-topbar-label", Rf = "th-modern-drawer-titlebar", zf = "th-modern-drawer-title", Bf = "th-modern-drawer-actions", Vf = "th-modern-drawer-close", Hf = "th-modern-drawer-fullscreen-toggle", Uf = "th-modern-drawer-fullscreen-content", Wf = "th-modern-drawer-active", Gf = "thModernFullscreenPinned", Kf = "thModernFullscreenWasPinned", qf = "thModernDockedPinned", Jf = "thModernDockedWasPinned", Yf = "th-modern-api-source-group", Xf = "th-modern-api-footer", Zf = "th-reset", Qf = "th-modern-failsafe-shortcut", $f = "SillyTavern", ep = "TavernHelper.modernLayout.dispose", tp = "TavernHelper.modernLayout.runtimes", np = "TavernHelper.modernLayout.sidebarCollapsed", rp = "TavernHelper.modernLayout.recentCollapsed", ip = 15, ap = "(min-width: 900px) and (max-width: 1199.98px)", op = "(min-width: 900px)", sp = 320, cp = 460, lp = 720, up = 24, dp = 480, fp = 1e3, pp = "--th-modern-left-nav-height", mp = "--th-modern-input-height", hp = "--th-modern-input-stack-offset", gp = "--th-modern-quick-reply-max-height", _p = "--th-modern-quick-reply-reserve-height", vp = 66, yp = 240, bp = 288, xp = 12, Sp = "modern-ui", Cp = "1.0.0", wp = !1;
function Tp(e, t, n, r) {
	return typeof e != "number" || !Number.isFinite(e) ? r : Math.min(Math.max(e, t), n);
}
function Ep() {
	let e = L();
	return [e.documentElement, e.body];
}
function Dp() {
	return R().localStorage;
}
function Op(e) {
	try {
		return Dp()?.getItem(e) === "true";
	} catch (e) {
		return console.warn(`[${Ul}] 读取浏览器状态失败。`, e), !1;
	}
}
function kp(e, t) {
	try {
		Dp()?.setItem(e, String(t));
	} catch (e) {
		console.warn(`[${Ul}] 保存浏览器状态失败。`, e);
	}
}
function Ap(e, t) {
	Ep().forEach((n) => {
		n.style.getPropertyValue(e) !== t && n.style.setProperty(e, t);
	});
}
function Z(e) {
	Ep().forEach((t) => {
		t.style.getPropertyValue(e) && t.style.removeProperty(e);
	});
}
function jp(e, t) {
	let n = Number.parseFloat(e);
	return Number.isFinite(n) ? n : t;
}
function Mp(e, t, n) {
	e.forEach((e) => {
		e.style.getPropertyValue(t) !== n && e.style.setProperty(t, n);
	});
}
function Np() {
	let e = L();
	if (e.getElementById(jf)) return { destroy: () => {} };
	let t = e.createElement("link");
	return t.id = jf, t.rel = "stylesheet", t.href = Mf, t.dataset.thModernOwned = "true", e.head.append(t), { destroy: () => t.remove() };
}
function Q() {
	let e = R?.() ?? window, t = e.SillyTavern ?? (typeof SillyTavern < "u" ? SillyTavern : void 0), n;
	if (typeof t?.getContext == "function") try {
		n = t.getContext();
	} catch {
		n = void 0;
	}
	return n && typeof n == "object" || (n = t ?? e), Array.isArray(n.characters) || (n.characters = Lp()), Array.isArray(n.groups) || (n.groups = Rp()), n.characterId === void 0 && (n.characterId = e.this_chid ?? e.characterId), n.groupId === void 0 && (n.groupId = e.selected_group ?? e.groupId), typeof n.getCurrentChatId != "function" && (n.getCurrentChatId = () => e.getCurrentChatId?.() ?? e.selected_and_active_chat), n;
}
function Pp() {
	let e, t = !1, n = async () => {
		let e = R(), n = L().baseURI || e.location.href, r = new URL("script.js", n).href, i = new URL("scripts/group-chats.js", n).href, a = e.Function, [o, s] = await a("mainModuleUrl", "groupModuleUrl", "return Promise.all([import(mainModuleUrl), import(groupModuleUrl)]);")(r, i), c = o, l = s;
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
function Fp(e) {
	return e instanceof DOMException && e.name === "AbortError";
}
function Ip() {
	let e = window.SillyTavern?.getContext?.(), t = (window.SillyTavern?.accountStorage ?? e?.accountStorage ?? window.accountStorage ?? localStorage)?.getItem?.("pinnedChats");
	if (typeof t != "string") return [];
	try {
		let e = JSON.parse(t);
		return !e || typeof e != "object" ? [] : Object.values(e).filter((e) => !e || typeof e != "object" ? !1 : typeof e.file_name == "string");
	} catch (e) {
		return console.warn(`[${Ul}] 读取最近聊天置顶状态失败。`, e), [];
	}
}
function Lp() {
	let e = R?.() ?? window, t = e.SillyTavern ?? (typeof SillyTavern < "u" ? SillyTavern : void 0), n = t?.getContext?.();
	return Array.isArray(n?.characters) ? n.characters : Array.isArray(e.characters) ? e.characters : Array.isArray(t?.characters) ? t.characters : Array.isArray(window.characters) ? window.characters : [];
}
function Rp() {
	let e = R?.() ?? window, t = e.SillyTavern ?? (typeof SillyTavern < "u" ? SillyTavern : void 0), n = t?.getContext?.();
	return Array.isArray(n?.groups) ? n.groups : Array.isArray(e.groups) ? e.groups : Array.isArray(t?.groups) ? t.groups : Array.isArray(window.groups) ? window.groups : [];
}
function zp(e) {
	if (e) return Lp().find((t) => t?.avatar === e);
}
function Bp(e) {
	if (e) return Rp().find((t) => t?.id === e);
}
function Vp(e) {
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
function Hp(e, t) {
	if (!t) return "img/groupchat.png";
	let n = window.SillyTavern?.getContext?.(), r = window.SillyTavern?.getThumbnailUrl ?? n?.getThumbnailUrl ?? window.getThumbnailUrl;
	if (typeof r == "function") try {
		return r(e, t);
	} catch {}
	return t.startsWith("http://") || t.startsWith("https://") || t.startsWith("/") ? t : `/characters/${encodeURIComponent(t)}`;
}
function Up(e) {
	let t = zp(e.avatar), n = Bp(e.group);
	if (!t && !n) return;
	let r = e.chat_name ?? e.file_name.replace(/\.jsonl$/i, ""), i = Vp(e.last_mes), a = "", o = "";
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
		char_thumbnail: t ? Hp("avatar", t.avatar) : "img/groupchat.png",
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
function Wp() {
	let e = window.SillyTavern?.getContext?.();
	return typeof window.SillyTavern?.getRequestHeaders == "function" ? window.SillyTavern.getRequestHeaders() : typeof e?.getRequestHeaders == "function" ? e.getRequestHeaders() : typeof window.getRequestHeaders == "function" ? window.getRequestHeaders() : {
		"Content-Type": "application/json",
		"X-CSRF-Token": window.token || ""
	};
}
async function Gp(e) {
	let t = await fetch("/api/chats/recent", {
		method: "POST",
		headers: Wp(),
		body: JSON.stringify({
			max: ip,
			pinned: Ip()
		}),
		cache: "no-cache",
		signal: e
	});
	if (!t.ok) throw Error(`HTTP ${t.status}`);
	let n = await t.json();
	return Array.isArray(n) ? n.map((e) => Up(e)).filter((e) => e !== void 0).slice(0, ip) : [];
}
function Kp(e) {
	return (e ?? "").replace(/\.jsonl$/i, "");
}
async function qp(e, t) {
	let n = await fetch("/api/characters/chats", {
		method: "POST",
		headers: Wp(),
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
		return Kp(r ?? i) === t;
	});
}
function Jp(e) {
	let t = Q(), n = Kp(e.chat_name ?? e.file_name);
	if (!n || Kp(t.getCurrentChatId?.()) !== n) return !1;
	if (e.is_group && e.group) return String(t.groupId ?? "") === e.group;
	if (!e.avatar || t.groupId) return !1;
	let r = (Array.isArray(t.characters) ? t.characters : Lp()).findIndex((t) => t?.avatar === e.avatar);
	return r !== -1 && String(t.characterId) === String(r);
}
function Yp(e, t) {
	let n = $("<button>").attr({
		type: "button",
		title: e.date_long ? `${e.char_name} - ${e.chat_name}\n${e.date_long}` : `${e.char_name} - ${e.chat_name}`
	}).addClass("th-modern-recent-chat").toggleClass("is-current", Jp(e)).on("click", () => t(e)), r = $("<span>").addClass("th-modern-recent-avatar");
	$("<img>").attr({
		src: e.char_thumbnail || "img/ai4.png",
		alt: e.char_name || "聊天头像"
	}).appendTo(r);
	let i = $("<span>").addClass("th-modern-recent-main");
	$("<span>").addClass("th-modern-recent-title").text(e.char_name ? `${e.char_name} - ${e.chat_name}` : e.chat_name ?? e.file_name).appendTo(i), $("<span>").addClass("th-modern-recent-message").text(e.mes || "无最近消息").appendTo(i);
	let a = $("<span>").addClass("th-modern-recent-meta");
	return $("<span>").text(e.date_short ?? "").appendTo(a), $("<span>").text(`${e.chat_items ?? 0} 条`).appendTo(a), n.append(r, i, a);
}
async function Xp(e, t, n) {
	let r = Kp(e.chat_name ?? e.file_name);
	if (!r) throw Error("最近聊天缺少聊天文件名。");
	let i = R?.() ?? window, a = Q(), o = i.SillyTavern?.saveSettingsDebounced ?? a?.saveSettingsDebounced ?? i.saveSettingsDebounced, s = i.SillyTavern?.openGroupChat ?? a?.openGroupChat ?? i.openGroupChat, c = i.SillyTavern?.selectCharacterById ?? a?.selectCharacterById ?? i.selectCharacterById, l = i.SillyTavern?.openCharacterChat ?? a?.openCharacterChat ?? i.openCharacterChat;
	if (e.is_group && e.group) {
		if (!Bp(e.group)) throw Error("未找到对应群组。");
		if (String(Q().groupId ?? "") !== e.group) {
			let r = await t.openGroupById(e.group);
			if (n(), !r && String(Q().groupId ?? "") !== e.group) throw Error("群组切换被聊天保存或生成状态阻止。");
		}
		if (String(Q().groupId ?? "") !== e.group) throw Error("群组未能正确激活。");
		if (t.setActiveGroup(e.group), o?.(), Kp(Q().getCurrentChatId?.()) !== r && (await s?.(e.group, r), n()), String(Q().groupId ?? "") !== e.group || Kp(Q().getCurrentChatId?.()) !== r) throw Error("群组聊天不存在或未能正确打开。");
	} else if (e.avatar) {
		let i = () => {
			let e = Q().characters;
			return Array.isArray(e) ? e : Lp();
		}, a = i().findIndex((t) => t?.avatar === e.avatar);
		if (a === -1) throw Error("未找到对应角色。");
		if (!await qp(e.avatar, r)) throw n(), Error("角色聊天已不存在。");
		if (n(), a = i().findIndex((t) => t?.avatar === e.avatar), a === -1) throw Error("角色已不存在。");
		await c?.(a), n();
		let s = i()[Number(Q().characterId)];
		if (Q().groupId || s?.avatar !== e.avatar) throw Error("角色切换被聊天保存或生成状态阻止。");
		if (t.setActiveCharacter(e.avatar), o?.(), Kp(Q().getCurrentChatId?.()) !== r) {
			if (!await qp(e.avatar, r)) throw n(), Error("角色聊天已不存在。");
			if (n(), Q().groupId || i()[Number(Q().characterId)]?.avatar !== e.avatar) throw Error("角色已不再处于激活状态。");
			t.setActiveCharacter(e.avatar), await l?.(r), n();
		}
		let u = i()[Number(Q().characterId)];
		if (Q().groupId || u?.avatar !== e.avatar || Kp(Q().getCurrentChatId?.()) !== r) throw Error("角色聊天未能正确打开。");
	} else throw Error("最近聊天缺少角色或群组标识。");
}
function Zp(e, t) {
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
function Qp(e = L()) {
	for (let t of [
		".welcomeHeaderVersionDisplay",
		"#version_display_welcome",
		"#version_display"
	]) {
		let n = Zp(e.querySelector(t)?.textContent, "version");
		if (n) return n;
	}
	return Zp(e.querySelector("meta[name=\"application-name\"]")?.content, "plain") || Zp(e.querySelector(".welcomePanel .welcomeHeaderLogo")?.alt, "logo") || (Zp(e.title, "plain") ?? $f);
}
function $p(e) {
	let t = R(), n = L(), r = $("<div>").attr("id", Nf).addClass("th-modern-sidebar recentChat"), i = $("<div>").addClass("th-modern-sidebar-brand"), a = $("<span>").addClass("th-modern-brand-main").appendTo(i), o = $("<img>").addClass("th-modern-brand-logo welcomeHeaderLogo").attr("src", "img/logo.png").appendTo(a), s = $("<span>").addClass("th-modern-brand-name").appendTo(a), c = () => {
		let e = Qp(n);
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
	}).addClass("th-modern-icon-button th-modern-sidebar-toggle bi bi-chevron-left").appendTo(i), d = $("<section>").addClass("th-modern-recent-section"), f = `${Nf}-recent-list`, p = $("<div>").addClass("th-modern-section-header"), m = $("<span>").addClass("th-modern-section-actions"), h = $("<button>").attr({
		type: "button",
		title: "折叠最近聊天",
		"aria-controls": f,
		"aria-expanded": "true"
	}).addClass("th-modern-section-title th-modern-recent-toggle"), g = $("<span>").attr("aria-hidden", "true").addClass("th-modern-icon-button th-modern-recent-collapse bi bi-chevron-up").appendTo(h);
	$("<span>").addClass("th-modern-section-label").text("最近聊天").appendTo(h);
	let v = (e, t = !0) => {
		$(L().body).toggleClass(Cf, e), $(L().body).removeClass(Tf), r.toggleClass("is-collapsed", e), y(), t && kp(np, e);
	}, y = () => {
		let e = L().body, t = e.classList.contains(Cf), n = e.classList.contains(wf) && !e.classList.contains(Tf), r = t || n;
		u.toggleClass("bi-chevron-left", !r).toggleClass("bi-chevron-right", r).attr({
			title: r ? "展开侧边栏" : "折叠侧边栏",
			"aria-pressed": String(r)
		});
	}, b = (e, t = !0) => {
		let n = e ? "展开最近聊天" : "折叠最近聊天";
		d.toggleClass("is-collapsed", e), h.attr({
			title: n,
			"aria-expanded": String(!e)
		}), g.toggleClass("bi-chevron-up", !e).toggleClass("bi-chevron-down", e), t && kp(rp, e);
	}, x = () => {
		b(!d.hasClass("is-collapsed"));
	};
	u.on("click", (e) => {
		e.preventDefault(), e.stopPropagation();
		let t = L().body;
		t.classList.contains(wf) && !t.classList.contains(Cf) ? (t.classList.toggle(Tf), y()) : v(!t.classList.contains(Cf));
	}), h.on("click", (e) => {
		e.preventDefault(), x();
	});
	let S = $("<button>").attr({
		type: "button",
		title: "刷新最近聊天"
	}).addClass("th-modern-icon-button bi bi-arrow-clockwise").on("click", (t) => {
		t.preventDefault(), e();
	});
	m.append(S), p.append(h, m);
	let C = $("<div>").attr("id", f).addClass("th-modern-recent-list");
	d.append(p, C), r.append(i, d).appendTo("body");
	let w = new t.MutationObserver(y);
	return w.observe(L().body, {
		attributes: !0,
		attributeFilter: ["class"]
	}), v(Op(np), !1), b(Op(rp), !1), y(), {
		$list: C,
		destroy: () => {
			w.disconnect(), l.disconnect(), $(L().body).removeClass(Cf), r.remove();
		}
	};
}
function em(e) {
	e.empty().append($("<div>").addClass("th-modern-recent-state").text("正在读取最近聊天..."));
}
function tm(e, t) {
	let n = t instanceof Error ? t.message : String(t);
	e.empty().append($("<div>").addClass("th-modern-recent-state").text(`读取失败：${n}`));
}
function nm(e) {
	let t = Pp(), n, r = 0, i = 0, a = !1, o = !1, s = (t) => {
		a = t, e.toggleClass("is-navigating", t).attr("aria-busy", String(t)), e.find("button").prop("disabled", t);
	}, c = (e) => {
		if (o || a || Jp(e)) return;
		let n = ++i, r = () => {
			if (o || n !== i) throw new DOMException("导航已取消。", "AbortError");
		};
		s(!0), t.get().then(async (t) => {
			r(), await Xp(e, t, r);
		}).catch((e) => {
			if (Fp(e)) return;
			let t = e instanceof Error ? e.message : String(e);
			toastr.error(`打开最近聊天失败：${t}`, Ul), console.error(`[${Ul}] 打开最近聊天失败。`, e);
		}).finally(() => {
			!o && n === i && s(!1);
		});
	};
	return {
		refresh: () => {
			if (o) return;
			n?.abort(), n = new AbortController();
			let t = ++r;
			em(e), Gp(n.signal).then((n) => {
				o || t !== r || (e.empty(), n.length === 0 ? e.append($("<div>").addClass("th-modern-recent-state").text("暂无最近聊天")) : (n.forEach((t) => {
					e.append(Yp(t, c));
				}), a && s(!0)));
			}).catch((n) => {
				o || t !== r || Fp(n) || tm(e, n);
			});
		},
		destroy: () => {
			o = !0, r += 1, i += 1, n?.abort(), n = void 0, t.destroy(), s(!1);
		}
	};
}
function rm(e) {
	let t = e.children(".drawer-icon").first();
	return String(t.attr("title") || e.attr("title") || e.text()).trim();
}
function im() {
	return L().querySelector(`#top-settings-holder > .drawer > .drawer-content.${Uf}`) ?? void 0;
}
function am() {
	let e = im();
	$(`.${Hf}`, L()).each((t, n) => {
		let r = wp && !!(e && $(n).closest(".drawer-content")[0] === e);
		$(n).toggleClass("is-fullscreen", r).toggleClass("bi-arrows-fullscreen", !r).toggleClass("bi-fullscreen-exit", r).attr({
			title: r ? "恢复面板宽度" : "全屏显示面板",
			"aria-label": r ? "恢复面板宽度" : "全屏显示面板"
		});
	});
}
function om(e) {
	let t = L(), n = e === void 0 ? !!t.querySelector("#top-settings-holder > .drawer > .drawer-content.openDrawer") : e.length > 0;
	t.body.classList.contains(Of) !== n && t.body.classList.toggle(Of, n);
}
function sm(e) {
	if (e.dataset[Jf] === void 0) {
		let t = e.classList.contains("pinnedOpen");
		e.dataset[Jf] = String(t), t || (e.dataset[qf] = "true");
	}
	e.classList.add("pinnedOpen");
}
function cm(e) {
	if (e.dataset[Jf] === void 0) return;
	let t = e.dataset[Jf] === "true";
	e.dataset[qf] === "true" ? e.classList.remove("pinnedOpen") : t && e.classList.add("pinnedOpen"), delete e.dataset[qf], delete e.dataset[Jf];
}
function lm(e) {
	let t = L(), n = t.body.classList.contains(vf), r = new Set(e);
	t.querySelectorAll("#top-settings-holder > .drawer > .drawer-content").forEach((e) => {
		n && r.has(e) ? sm(e) : e.classList.contains(Uf) || cm(e);
	});
}
function um() {
	let e = im();
	if (e) {
		let t = e.dataset[Kf] === "true", n = e.dataset[Kf] === void 0 || !t;
		$(e).removeClass(Uf), n ? $(e).removeClass("pinnedOpen") : t && $(e).addClass("pinnedOpen"), delete e.dataset[Gf], delete e.dataset[Kf];
	}
	L().body.classList.remove(Df), om();
}
function dm() {
	wp = !1, um(), am();
}
function fm(e) {
	let t = im();
	if (t && t !== e && um(), !(e instanceof (L().defaultView ?? window).HTMLElement)) return;
	let n = L().body, r = $(e);
	if (e.dataset[Kf] === void 0) {
		let t = r.hasClass("pinnedOpen");
		e.dataset[Kf] = String(t), t || (e.dataset[Gf] = "true");
	}
	r.addClass(`${Uf} pinnedOpen openDrawer`).removeClass("closedDrawer");
	let i = r.closest(".drawer").find(".drawer-icon").first();
	i.hasClass("closedIcon") && i.removeClass("closedIcon").addClass("openIcon"), n.classList.add(Df), om([e]), n.classList.contains(wf) && !n.classList.contains(Cf) && n.classList.add(Tf), am();
}
function pm(e, t) {
	wp = t, t ? fm(e) : dm();
}
function mm(e) {
	im() === e && um();
	let t = $(e);
	if (!t.hasClass("openDrawer")) return;
	cm(e), t.removeClass("openDrawer pinnedOpen").addClass("closedDrawer");
	let n = t.closest(".drawer").find(".drawer-icon").first();
	n.hasClass("openIcon") && n.removeClass("openIcon").addClass("closedIcon"), om();
}
function hm() {
	let e = L(), t = e.defaultView ?? window, n = /* @__PURE__ */ new Map(), r = 0, i, a = 0, o, s = (t, n) => {
		n?.classList.contains("openDrawer") ? o = n : o?.isConnected && o.classList.contains("openDrawer") || (o = t[t.length - 1]);
		let r = t.length > 1;
		e.querySelectorAll("#top-settings-holder > .drawer > .drawer-content").forEach((e) => e.classList.toggle(Wf, r && e === o));
	}, c = () => {
		a !== 0 && (t.clearTimeout(a), a = 0), i = void 0, e.body.classList.remove(kf);
	}, l = (n) => {
		i = n, e.body.classList.add(kf), a !== 0 && t.clearTimeout(a), a = t.setTimeout(() => {
			a = 0, i = void 0, e.body.classList.remove(kf), om();
		}, fp);
	}, u = () => {
		r === 0 && (r = t.requestAnimationFrame(() => {
			r = 0, d();
		}));
	}, d = () => {
		let t = im(), n = Array.from(e.querySelectorAll("#top-settings-holder > .drawer > .drawer-content.openDrawer"));
		if (s(n), lm(n), om(n), i && (!i.isConnected || i.classList.contains("openDrawer")) && c(), !t) {
			if (e.body.classList.contains(Df) && e.body.classList.remove(Df), wp && n[0]) {
				fm(n[0]);
				return;
			}
			am();
			return;
		}
		if (!t.isConnected || !t.classList.contains("openDrawer")) {
			um(), wp && n[0] ? fm(n[0]) : am();
			return;
		}
		let r = n.find((e) => e !== t);
		r && (um(), mm(t), wp ? fm(r) : am());
	}, f = () => {
		$("#top-settings-holder .drawer-toggle").each((e, t) => {
			let r = $(t), i = rm(r);
			if (i) {
				let e = t, a = n.get(e);
				a ? a.written = i : n.set(e, {
					title: e.getAttribute("title"),
					ariaLabel: e.getAttribute("aria-label"),
					written: i
				}), r.attr({
					title: i,
					"aria-label": i
				});
			}
			r.children(`.${Lf}`).length > 0 || i && $("<span>").addClass(Lf).text(i).appendTo(r);
		});
		let e = ".notes-link, .help_button, .help-button, a:has(.note-link-span), a[href*=\"docs.sillytavern.app\"], .note-link-span, [title*=\"帮助\"], [title*=\"Help\"]", t = (t) => {
			let n = t.find(e).not(`.${Rf} *`);
			if (n.length === 0) return $();
			let r = n.first(), i = r.closest("a, button, .notes-link, .help_button");
			return i.length > 0 ? i : r;
		};
		$("#top-settings-holder .drawer-content").each((n, r) => {
			let i = $(r), a = i.attr("id"), o = a !== "WorldInfo" && a !== "rm_extensions_block", s = i.children(`.${Rf}`), c = s.first();
			if (s.slice(1).remove(), c.length > 0) {
				let n = c.find(`.${Bf}`).first();
				if (!o) n.find(e).remove();
				else if (!(n.find(e).length > 0)) {
					let e = t(i);
					e.length > 0 && n.prepend(e);
				}
				return;
			}
			let l = rm(i.closest(".drawer").children(".drawer-toggle").first()), u = $("<div>").addClass(Rf);
			$("<span>").addClass(zf).text(l || "菜单").appendTo(u);
			let d = $("<div>").addClass(Bf).appendTo(u);
			if (o) {
				let e = t(i);
				e.length > 0 && d.append(e);
			}
			$("<button>").attr({
				type: "button",
				title: "全屏显示面板",
				"aria-label": "全屏显示面板"
			}).addClass(`${Hf} bi bi-arrows-fullscreen`).appendTo(d), $("<button>").attr({
				type: "button",
				title: "关闭面板"
			}).addClass(`${Vf} bi bi-x-lg`).appendTo(d), i.prepend(u);
		}), am(), d();
	}, p = (n) => {
		let r = n.target instanceof t.Element ? n.target : null, i = r?.closest("#top-settings-holder > .drawer > .drawer-toggle, #top-settings-holder .drawer-toggle"), a = r?.closest(".drawer-opener");
		if (i || a) {
			let t = i?.closest(".drawer") ?? i?.parentElement ?? (a?.dataset.target ? e.getElementById(a.dataset.target) : null), n = t?.querySelector(":scope > .drawer-content") ?? t?.querySelector(".drawer-content"), r = !!n?.classList.contains("openDrawer");
			if (e.body.classList.contains(vf)) {
				let t = Array.from(e.querySelectorAll("#top-settings-holder .drawer > .drawer-content.openDrawer, #top-settings-holder .drawer-content.openDrawer"));
				n && !r && t.length > 0 && l(n), t.forEach((e) => {
					e !== n && cm(e);
				});
			}
		}
		let o = r?.closest(`.${Hf}, .${Vf}`);
		if (!o) {
			i && u();
			return;
		}
		let s = o.closest("#top-settings-holder > .drawer > .drawer-content");
		s && (n.preventDefault(), n.stopPropagation(), o.classList.contains(Hf) ? pm(s, im() !== s) : (mm(s), u()));
	}, m = e.getElementById("top-settings-holder"), h = m instanceof t.HTMLElement ? new t.MutationObserver((n) => {
		let r = n.find((e) => e.target instanceof t.HTMLElement && !(e.oldValue?.split(/\s+/).includes("openDrawer") ?? !1) && e.target.classList.contains("openDrawer"))?.target;
		if (r instanceof t.HTMLElement) {
			let t = Array.from(e.querySelectorAll("#top-settings-holder > .drawer > .drawer-content.openDrawer"));
			s(t, r), f();
		}
		u();
	}) : void 0, g = () => {
		h?.disconnect(), m?.querySelectorAll(":scope > .drawer > .drawer-content").forEach((e) => h?.observe(e, {
			attributes: !0,
			attributeFilter: ["class"],
			attributeOldValue: !0
		}));
	}, v = () => {
		f(), g();
	};
	v();
	let y = m instanceof t.HTMLElement ? new t.MutationObserver((e) => {
		e.some((e) => e.type === "childList" && (e.target === m || e.target instanceof t.Element && e.target.matches("#top-settings-holder > .drawer"))) && v();
	}) : void 0;
	y?.observe(m, {
		childList: !0,
		subtree: !0
	});
	let b = new t.MutationObserver(() => {
		u();
	});
	return b.observe(e.body, {
		attributes: !0,
		attributeFilter: ["class"]
	}), e.addEventListener("click", p, !0), { destroy: () => {
		r !== 0 && t.cancelAnimationFrame(r), c(), y?.disconnect(), h?.disconnect(), b.disconnect(), e.removeEventListener("click", p, !0), dm(), e.querySelectorAll("#top-settings-holder > .drawer > .drawer-content").forEach((e) => {
			cm(e), e.classList.remove(Wf);
		}), o = void 0, $(`.${Lf}`).remove(), $(`.${Rf}`).remove(), n.forEach((e, t) => {
			t.getAttribute("title") === e.written && (e.title === null ? t.removeAttribute("title") : t.setAttribute("title", e.title)), t.getAttribute("aria-label") === e.written && (e.ariaLabel === null ? t.removeAttribute("aria-label") : t.setAttribute("aria-label", e.ariaLabel));
		}), n.clear();
	} };
}
function gm(e, t) {
	let n = L(), r = n.activeElement;
	$(".th-modern-failsafe-overlay", n).remove();
	let i = $("<div>").addClass("th-modern-failsafe-overlay"), a = "th-modern-failsafe-title", o = "th-modern-failsafe-description", s = $("<div>").attr({
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": a,
		"aria-describedby": o
	}).addClass("th-modern-failsafe-dialog").appendTo(i);
	$("<strong>").attr("id", a).text("关闭现代化界面？").appendTo(s), $("<p>").attr("id", o).text(`将立即还原 ${Qp(n)} 原始布局，并保持关闭状态。之后可以在酒馆助手设置里重新启用。`).appendTo(s);
	let c = $("<div>").addClass("th-modern-failsafe-actions").appendTo(s), l = !1, u = () => {
		l || (l = !0, i.off("keydown", p), i.remove(), t(), r?.isConnected && typeof r.focus == "function" && r.focus());
	}, d = $("<button>").attr("type", "button").addClass("menu_button").text("取消").on("click", u).appendTo(c), f = $("<button>").attr("type", "button").addClass("menu_button th-modern-failsafe-confirm").text("关闭并还原").on("click", () => {
		e.disableModernLayout(), toastr.warning("已关闭现代化界面。", Ul), u();
	}).appendTo(c);
	function p(e) {
		if (e.key === "Escape") {
			e.preventDefault(), u();
			return;
		}
		if (e.key !== "Tab") return;
		let t = d[0], r = f[0];
		e.shiftKey && n.activeElement === t ? (e.preventDefault(), r.focus()) : !e.shiftKey && n.activeElement === r && (e.preventDefault(), t.focus());
	}
	return i.on("click", (e) => {
		e.target === i[0] && u();
	}), i.on("keydown", p), $(n.body).append(i), d[0].focus(), u;
}
function _m(e) {
	let t = L(), n = R(), r = "", i = !1, a, o = () => {
		!i && e.is_active && (i = !0, a = gm(e, () => {
			i = !1, a = void 0;
		}));
	}, s = (e) => {
		e.isComposing || e.ctrlKey || e.altKey || e.metaKey || e.key.length !== 1 || (r = `${r}${e.key.toLowerCase()}`.slice(-8), r === Zf && (r = "", o()));
	}, c = (e) => {
		let n = e.querySelector(".welcomeShortcuts");
		if (!n || n.querySelector(`.${Qf}`)) return;
		let r = t.createElement("button");
		r.type = "button", r.className = `menu_button menu_button_icon ${Qf}`, r.title = "关闭现代化界面并还原原始布局", r.setAttribute("aria-label", "重置界面");
		let i = t.createElement("i");
		i.className = "fa-solid fa-arrow-rotate-left", i.setAttribute("aria-hidden", "true");
		let a = t.createElement("span");
		a.textContent = "重置界面", r.append(i, a), n.append(r);
	}, l = (e) => {
		e instanceof n.Element && e.matches(".welcomePanel") && c(e), e.querySelectorAll(".welcomePanel").forEach(c);
	}, u = (e) => {
		(e.target instanceof n.Element ? e.target : null)?.closest(`.${Qf}`) && (e.preventDefault(), e.stopPropagation(), o());
	};
	l(t);
	let d = new n.MutationObserver((e) => {
		e.forEach((e) => {
			e.addedNodes.forEach((e) => {
				e instanceof n.Element && l(e);
			});
		});
	}), f = t.querySelector("#chat");
	return f && d.observe(f, {
		childList: !0,
		subtree: !0
	}), t.addEventListener("keydown", s, !0), t.addEventListener("click", u, !0), { destroy: () => {
		d.disconnect(), a?.(), t.removeEventListener("keydown", s, !0), t.removeEventListener("click", u, !0), t.querySelectorAll(`.${Qf}`).forEach((e) => e.remove());
	} };
}
function vm(e, t, n, r) {
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
function ym(e, t) {
	let n = e.ownerDocument.defaultView ?? R(), r = n.getComputedStyle(e);
	if (r.display === "none" || r.visibility === "hidden" || r.position !== "absolute" && r.position !== "fixed") return;
	let i = e.getBoundingClientRect();
	if (i.width < 8 || i.height < 8) return;
	let a = Math.max(160, n.innerWidth - 16), o = Math.max(120, n.innerHeight - 16), s = `${a}px`, c = `${o}px`, l = Math.min(Math.max(i.left, 8), n.innerWidth - Math.min(i.width, a) - 8), u = Math.min(Math.max(i.top, 8), n.innerHeight - Math.min(i.height, o) - 8), d = Math.abs(l - i.left) > 1, f = Math.abs(u - i.top) > 1, p = (d || f) && r.position === "absolute" ? e.offsetParent : null, m = p?.getBoundingClientRect(), h, g;
	if (d) {
		let e = jp(r.marginLeft, 0);
		h = `${r.position === "fixed" ? l : p && m ? l - m.left - p.clientLeft + p.scrollLeft - e : l + n.scrollX - e}px`;
	}
	if (f) {
		let e = jp(r.marginTop, 0);
		g = `${r.position === "fixed" ? u : p && m ? u - m.top - p.clientTop + p.scrollTop - e : u + n.scrollY - e}px`;
	}
	vm(e, "maxWidth", s, t), vm(e, "maxHeight", c, t), h !== void 0 && vm(e, "left", h, t), g !== void 0 && vm(e, "top", g, t);
}
function bm() {
	let e = L(), t = e.defaultView ?? window, n = ".select2-container--open, .select2-dropdown, .ui-autocomplete, .list-group, #export_format_popup, #rawPromptPopup", r = /* @__PURE__ */ new Map(), i = 0, a = () => {
		i = 0, r.forEach((e, t) => {
			t.isConnected || r.delete(t);
		}), e.querySelectorAll(n).forEach((e) => {
			ym(e, r);
		});
	}, o = () => {
		e.body.classList.contains(Ef) || i === 0 && (i = t.requestAnimationFrame(a));
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
function xm(e) {
	let t = L(), n = t.defaultView ?? window, r = t.createElement("button");
	r.id = If, r.type = "button", r.className = "menu_button bi", r.setAttribute("aria-controls", "qr--bar"), r.hidden = !0;
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
			r.remove(), r.hidden = !0, Z(mp), Z(hp), Z(gp), Z(_p);
			return;
		}
		r.parentElement !== p && p.append(r);
		let g = t.body.classList.contains(Af), v = d(h);
		r.hidden = !v, r.classList.toggle("bi-chevron-down", v && !g), r.classList.toggle("bi-chevron-up", v && g), r.setAttribute("aria-expanded", String(v && !g)), r.setAttribute("aria-label", g ? "展开快速回复栏" : "收起快速回复栏"), r.title = g ? "展开快速回复栏" : "收起快速回复栏", h.toggleAttribute("inert", g || a?.inert === !0), g ? h.setAttribute("aria-hidden", "true") : a?.ariaHidden === null ? h.removeAttribute("aria-hidden") : a && h.setAttribute("aria-hidden", a.ariaHidden);
		let y = Math.ceil(m?.getBoundingClientRect().height ?? p.getBoundingClientRect().height);
		Ap(mp, `${Math.max(0, y)}px`);
		let b = p.getBoundingClientRect();
		Ap(hp, `${Math.max(0, Math.ceil(b.bottom - u(p)))}px`);
		let x = v ? Math.max(0, Math.ceil(h.scrollHeight)) : 0;
		Ap(gp, `${x}px`);
		let S = r.hidden ? 0 : Math.ceil(r.getBoundingClientRect().height || 26), C = Math.ceil(h.getBoundingClientRect().height), w = g || !g && x > 1 && C <= 1 ? 0 : x;
		Ap(_p, `${v ? Math.max(S + 6, w + 10) : 0}px`);
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
		i !== 0 && n.cancelAnimationFrame(i), h.disconnect(), g.disconnect(), s.disconnect(), o.disconnect(), r.removeEventListener("click", v), r.remove(), c(), n.removeEventListener("resize", p), Z(mp), Z(hp), Z(gp), Z(_p);
	} };
}
function Sm(e) {
	let t = L(), n = t.defaultView ?? window, r = n.matchMedia(ap), i = 0, a = () => {
		Om(e.settings, e.is_active, e.should_use_two_column);
	}, o = () => {
		i === 0 && (i = n.requestAnimationFrame(() => {
			i = 0, a();
		}));
	}, s = (e) => {
		let r = t.body;
		if (!r.classList.contains(wf) || r.classList.contains(Cf)) return;
		let i = !!(e.target instanceof n.Element ? e.target : null)?.closest(`#${Nf}, #top-settings-holder`);
		r.classList.contains(Df) ? r.classList.add(Tf) : r.classList.contains(Tf) && !i && r.classList.remove(Tf);
	};
	return r.addEventListener("change", o), n.addEventListener("resize", o), t.addEventListener("pointerdown", s, !0), a(), { destroy: () => {
		i !== 0 && n.cancelAnimationFrame(i), r.removeEventListener("change", o), n.removeEventListener("resize", o), t.removeEventListener("pointerdown", s, !0), t.body.classList.remove(wf, Tf);
	} };
}
function Cm() {
	let e = L(), t = e.defaultView ?? window, n = e.getElementById("top-settings-holder"), r = 0, i = (e) => {
		let n = e.getBoundingClientRect(), r = t.getComputedStyle(e);
		return n.height + jp(r.marginTop, 0) + jp(r.marginBottom, 0);
	}, a = () => {
		if (r = 0, !(n instanceof t.HTMLElement)) {
			Z(pp);
			return;
		}
		let a = e.body;
		if (!a.classList.contains(hf) || !a.classList.contains(gf)) {
			Z(pp);
			return;
		}
		let o = t.getComputedStyle(a), s = jp(o.getPropertyValue("--th-modern-left-nav-top"), vp), c = jp(o.getPropertyValue("--th-modern-left-nav-min-height"), yp), l = jp(o.getPropertyValue("--th-modern-recent-min-height"), bp), u = Math.max(c, t.innerHeight - s - l - xp), d = t.getComputedStyle(n), f = jp(d.paddingTop, 0) + jp(d.paddingBottom, 0), p = Array.from(n.querySelectorAll(":scope > .drawer > .drawer-toggle")).reduce((e, n) => {
			let r = n.closest(".drawer");
			if (r?.classList.contains("mc3-hidden") || r?.classList.contains("displayNone") || r?.hidden || n.classList.contains("mc3-hidden") || n.classList.contains("displayNone") || n.hidden) return e;
			let a = r ? t.getComputedStyle(r) : null;
			if (a && (a.display === "none" || a.visibility === "hidden")) return e;
			let o = t.getComputedStyle(n);
			return o.display === "none" || o.visibility === "hidden" ? e : e + i(n);
		}, f);
		Ap(pp, `${Math.ceil(Math.min(Math.max(p, c), u))}px`);
	}, o = () => {
		r === 0 && (r = t.requestAnimationFrame(a));
	}, s = n instanceof t.HTMLElement ? new t.ResizeObserver(o) : void 0, c = () => {
		s?.disconnect(), n?.querySelectorAll(":scope > .drawer > .drawer-toggle").forEach((e) => s?.observe(e));
	}, l = n instanceof t.HTMLElement ? new t.MutationObserver((e) => {
		e.some((e) => e.target === n || e.target instanceof t.Element && e.target.matches("#top-settings-holder > .drawer")) && (c(), o());
	}) : void 0;
	l?.observe(n, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: [
			"class",
			"style",
			"hidden"
		]
	}), c();
	let u = e.body.classList.contains(hf) && e.body.classList.contains(gf), d = new t.MutationObserver(() => {
		let t = e.body.classList.contains(hf) && e.body.classList.contains(gf);
		t !== u && (u = t, o());
	});
	return d.observe(e.body, {
		attributes: !0,
		attributeFilter: ["class"]
	}), t.addEventListener("resize", o), o(), { destroy: () => {
		r !== 0 && t.cancelAnimationFrame(r), l?.disconnect(), s?.disconnect(), d.disconnect(), t.removeEventListener("resize", o), Z(pp);
	} };
}
function wm(e) {
	let t = L(), n = t.defaultView ?? window, r = $("<div>").attr("id", Pf).appendTo("body"), i = $("<div>").attr("id", Ff).appendTo("body"), a, o = (r, i) => {
		if (r.button !== 0) return;
		let o = t.body, s = t.getElementById(Nf), c = t.querySelector("#top-settings-holder > .drawer > .drawer-content.openDrawer"), l = o.classList.contains(vf);
		if (i === "sidebar" && (!s || c && !l || o.classList.contains(Cf) || o.classList.contains(wf)) || i === "overlay" && !c) return;
		a?.(), r.preventDefault();
		let u = r.target;
		try {
			u?.setPointerCapture?.(r.pointerId);
		} catch {}
		let d = r.clientX, f = i === "sidebar" ? s.getBoundingClientRect().width : c.getBoundingClientRect().width, p = c?.getBoundingClientRect().left ?? 0, m = i === "sidebar" ? "--th-modern-left-width" : "--th-modern-overlay-width", h = Ep(), g = Math.round(f), v = 0;
		o.classList.add(Ef);
		let y = () => {
			v = 0, Mp(h, m, `${g}px`);
		}, b = (e) => {
			e !== g && (g = e, v === 0 && (v = n.requestAnimationFrame(y)));
		}, x = (e) => {
			let t = e.clientX - d;
			if (i === "sidebar") {
				let e = c ? n.innerWidth - c.getBoundingClientRect().width - dp - 28 : cp, r = l ? Math.min(cp, e) : cp;
				b(Math.round(Tp(f + t, sp, r, 360)));
				return;
			}
			let r = l ? 508 : up, a = Math.max(lp, n.innerWidth - p - r);
			b(Math.round(Tp(f + t, lp, a, 960)));
		}, S = () => {
			v !== 0 && (n.cancelAnimationFrame(v), y()), i === "sidebar" && e.settings.leftSidebarWidth !== g && (e.settings.leftSidebarWidth = g), i === "overlay" && e.settings.overlayPanelWidth !== g && (e.settings.overlayPanelWidth = g), o.classList.remove(Ef);
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
		a?.(), r.remove(), i.remove(), t.body.classList.remove(Ef);
	} };
}
function Tm(e, t, n) {
	if (e.parentElement === t) return () => {};
	let r = e.ownerDocument.createComment(n);
	return e.before(r), t.append(e), () => {
		r.parentNode && r.replaceWith(e);
	};
}
function Em() {
	let e = L(), t = e.defaultView ?? window, n = t.matchMedia(op), r = [], i = /* @__PURE__ */ new Map(), a, o, s = 0, c = () => n.matches && e.body.classList.contains(gf), l = (e) => {
		if (!i.has(e)) return;
		let t = i.get(e);
		t !== void 0 && (t === null ? e.hasAttribute("size") && e.removeAttribute("size") : e.getAttribute("size") !== t && e.setAttribute("size", t));
	}, u = (t, n) => {
		let r = e.querySelector(t);
		if (!r) return;
		if (!n) {
			l(r);
			return;
		}
		i.has(r) || i.set(r, r.getAttribute("size"));
		let a = r.options.length, o;
		o = t.includes("main_api") ? String(Math.min(6, Math.max(1, a))) : String(Math.min(14, Math.max(4, a))), r.getAttribute("size") !== o && r.setAttribute("size", o);
	}, d = () => {
		a?.(), a = void 0, o = void 0;
	}, f = () => {
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
	}, p = (t, n) => {
		let r = f();
		if (u("#rm_api_block #chat_completion_source", !!(t && r?.selector === "#rm_api_block #chat_completion_source" && n)), u("#rm_api_block #textgen_type", !!(t && r?.selector === "#rm_api_block #textgen_type" && n)), !t) {
			d();
			return;
		}
		let i = t.querySelector(`.${Yf}`);
		i || (i = e.createElement("div"), i.className = Yf, t.append(i));
		let s = r ? e.querySelector(r.selector) : null;
		if (!r || !s) d(), i.classList.add("is-empty");
		else if (i.classList.remove("is-empty"), o !== r.selector || s.parentElement !== i) {
			d();
			let t = e.querySelector(r.block_selector), n = (s.previousElementSibling?.matches("h4") ? s.previousElementSibling : t?.querySelector("h4")) ?? null, c = [];
			n && n.parentElement !== i && c.push(Tm(n, i, r.title_marker)), s.parentElement !== i && c.push(Tm(s, i, r.select_marker)), a = () => {
				c.reverse().forEach((e) => e());
			}, o = r.selector;
		}
	}, m = () => {
		e.querySelectorAll("#rm_api_block #chat_completion_source, #rm_api_block #textgen_type, #rm_api_block #main_api").forEach((e) => {
			let t = Array.from(e.querySelectorAll("optgroup"));
			t.length > 0 && t.forEach((t) => {
				for (; t.firstChild;) e.insertBefore(t.firstChild, t);
				t.remove();
			}), Array.from(e.querySelectorAll("option")).forEach((e) => {
				let t = e.textContent?.trim() ?? "";
				(!t || /^[-─—_.\s]+$/.test(t)) && (e.style.display = "none");
			});
		});
	}, h = () => {
		if (!e.querySelector("#rm_api_block")?.classList.contains("openDrawer")) {
			u("#rm_api_block #main_api", !1), u("#rm_api_block #chat_completion_source", !1), u("#rm_api_block #textgen_type", !1);
			return;
		}
		let t = e.querySelector("#rm_api_block #main-API-selector-block"), n = e.querySelector("#rm_api_block > .flex-container.flexFlowColumn"), i = Array.from(e.querySelectorAll("#rm_api_block > .flex-container.alignitemscenter.spaceBetween.wide100p")).find((e) => e.textContent?.includes("自动连接到上次的服务器") || e.querySelector("#viewSecrets"));
		n && i && i.parentElement !== n && (i.classList.add(Xf), r.push(Tm(i, n, "th-modern-api-footer")));
		let a = c();
		if (u("#rm_api_block #main_api", a), p(t, a), m(), t && t.querySelectorAll(".th-modern-api-hint-card").forEach((e) => e.remove()), t && a) {
			let n = t.querySelector(".th-modern-api-main-title");
			n || (n = e.createElement("h4"), n.className = "th-modern-api-main-title", n.textContent = "接口模式", t.prepend(n));
		}
	}, g = () => {
		s !== 0 && (t.cancelAnimationFrame(s), s = 0);
	}, v = () => {
		s === 0 && (s = t.requestAnimationFrame(() => {
			s = 0, h();
		}));
	};
	h();
	let y = e.querySelector("#rm_api_block"), b = y instanceof t.HTMLElement ? new t.MutationObserver(() => {
		v();
	}) : void 0;
	y instanceof t.HTMLElement && b?.observe(y, {
		childList: !0,
		subtree: !0
	});
	let x = y instanceof t.HTMLElement ? new t.MutationObserver(() => {
		v();
	}) : void 0;
	x?.observe(y, {
		attributes: !0,
		attributeFilter: ["class"]
	});
	let S = c(), C = () => {
		let e = c();
		e !== S && (S = e, v());
	}, w = new t.MutationObserver(() => {
		C();
	});
	w.observe(e.body, {
		attributes: !0,
		attributeFilter: ["class"]
	});
	let T = (e) => {
		e.target instanceof t.HTMLSelectElement && e.target.matches("#rm_api_block #main_api, #rm_api_block #chat_completion_source, #rm_api_block #textgen_type") && v();
	};
	return e.addEventListener("input", T), e.addEventListener("change", T), n.addEventListener("change", C), { destroy: () => {
		g(), b?.disconnect(), x?.disconnect(), w.disconnect(), e.removeEventListener("input", T), e.removeEventListener("change", T), n.removeEventListener("change", C), d(), r.reverse().forEach((e) => e()), e.querySelectorAll(`.${Yf}:empty`).forEach((e) => e.remove()), e.querySelectorAll(`.${Xf}`).forEach((e) => e.classList.remove(Xf)), e.querySelectorAll(".th-modern-api-main-title, .th-modern-api-hint-card").forEach((e) => e.remove()), i.forEach((e, t) => {
			e === null ? t.removeAttribute("size") : t.setAttribute("size", e);
		});
	} };
}
function Dm(e, t, n) {
	if (!t || !n || !e.desktopDockedDrawer) return !1;
	let r = L(), i = R();
	return i.matchMedia(op).matches ? Math.min(i.innerWidth, r.documentElement.clientWidth || i.innerWidth) >= Tp(e.leftSidebarWidth, sp, cp, 360) + Tp(e.overlayPanelWidth, lp, 2 ** 53 - 1, 960) + dp + 28 : !1;
}
function Om(e, t, n) {
	let r = L(), i = R(), a = $(r.body), o = t && n && i.matchMedia(ap).matches, s = Dm(e, t, n), c = t && e.floatingChatInput;
	a.toggleClass(hf, t).toggleClass(gf, n).toggleClass(vf, s).toggleClass(yf, t && n && e.mainChatMaxWidth === 0).toggleClass(bf, c).toggleClass(xf, t && e.reduceMotion).toggleClass(Sf, t && e.reduceAdvancedEffects).toggleClass(Af, t && e.quickReplyCollapsed).toggleClass(wf, o).removeClass(_f), (!o || a.hasClass(Cf)) && a.removeClass(Tf), t && n || dm(), Ap("--th-modern-left-width", `${Tp(e.leftSidebarWidth, sp, cp, 360)}px`), Ap("--th-modern-overlay-width", `${Tp(e.overlayPanelWidth, lp, 2 ** 53 - 1, 960)}px`), Ap("--th-modern-main-min-width", `${Tp(e.mainChatMaxWidth, 0, 2 ** 53 - 1, 960)}px`), Ap("--th-modern-input-bottom-gap", `${Tp(e.inputBottomGap, 0, 120, 15)}px`), Ap("--th-modern-input-side-gap", `${Tp(e.inputSideGap, 0, 80, 16)}px`);
}
function km() {
	$(L().body).removeClass(`${hf} ${gf} ${_f} ${vf} ${yf} ${bf} ${xf} ${Sf} ${Af} ${Cf} ${wf} ${Tf} ${Ef} ${Df} ${Of} ${kf}`), Z("--th-modern-left-width"), Z("--th-modern-overlay-width"), Z("--th-modern-main-min-width"), Z("--th-modern-input-bottom-gap"), Z("--th-modern-input-side-gap"), Z(mp), Z(hp), Z(gp), Z(_p), Z(pp);
}
function Am(e) {
	if (e) try {
		e();
	} catch (e) {
		console.error(`[${Ul}] 清理运行时资源失败。`, e);
	}
}
function jm(e) {
	for (; e.length > 0;) Am(e.pop());
}
function Mm() {
	let e = [];
	try {
		return e.push(Np().destroy), { destroy: _.once(() => jm(e)) };
	} catch (t) {
		throw jm(e), t;
	}
}
function Nm() {
	return window.eventSource ?? window.SillyTavern?.getContext?.()?.eventSource;
}
var Pm = {
	APP_READY: "app_ready",
	CHAT_CHANGED: "chat_id_changed",
	CHAT_CREATED: "chat_created",
	CHAT_DELETED: "chat_deleted",
	MESSAGE_SENT: "message_sent",
	MESSAGE_RECEIVED: "message_received",
	CHARACTER_PAGE_LOADED: "character_page_loaded"
};
function Fm(e, t) {
	let n = Nm();
	return n && typeof n.on == "function" ? (n.on(e, t), { stop: () => {
		typeof n.removeListener == "function" ? n.removeListener(e, t) : typeof n.off == "function" && n.off(e, t);
	} }) : { stop: () => {} };
}
function Im(t) {
	let n = [km], r;
	try {
		let i = $p(() => r?.refresh());
		n.push(i.destroy), r = nm(i.$list), n.push(r.destroy), n.push(hm().destroy), n.push(fc(t).destroy), n.push(Cm().destroy), n.push(_m(t).destroy), n.push(bm().destroy), n.push(xm(t).destroy), n.push(Sm(t).destroy), n.push(wm(t).destroy), n.push(Em().destroy), n.push(pf(t).destroy), n.push(Ws(t).destroy);
		let a = Zn(() => [e(t.settings), t.should_use_two_column], ([e, t]) => {
			Om(e, !0, t);
		}, {
			immediate: !0,
			deep: !0,
			flush: "sync"
		});
		n.push(a);
		let o = _.debounce(() => r?.refresh(), 500);
		n.push(o.cancel);
		let s = [
			Fm(Pm.APP_READY, o),
			Fm(Pm.CHAT_CHANGED, o),
			Fm(Pm.CHAT_CREATED, o),
			Fm(Pm.CHAT_DELETED, o),
			Fm(Pm.MESSAGE_SENT, o),
			Fm(Pm.MESSAGE_RECEIVED, o),
			Fm(Pm.CHARACTER_PAGE_LOADED, o)
		];
		return n.push(() => s.forEach((e) => e.stop())), o(), { destroy: _.once(() => jm(n)) };
	} catch (e) {
		throw jm(n), e;
	}
}
function Lm() {
	let e = R(), t = _.get(e, tp);
	if (t && typeof t.get == "function" && typeof t.set == "function") return t;
	let n = /* @__PURE__ */ new Map();
	return _.set(e, tp, n), n;
}
function Rm() {
	let e = R(), t = window, n = _.get(e, ep);
	typeof n == "function" && (n(), _.unset(e, ep));
	let r = "modern-ui", i = Lm();
	i.get(r)?.({ unregisterUnique: !1 });
	let a = Xo() ?? ps();
	Yo(a);
	let o = Zl(), s, c, l, u, d;
	try {
		s = Bu(a).destroy, u = Zn(() => [o.should_enable, o.is_active], () => {
			o.should_enable ? (c ??= Mm(), o.is_active ? l ??= Im(o) : (l?.destroy(), l = void 0)) : (l?.destroy(), l = void 0, c?.destroy(), c = void 0);
		}, {
			immediate: !0,
			flush: "sync"
		});
		let e = () => d?.();
		return d = _.once((n = {}) => {
			t.removeEventListener("pagehide", e), Am(u), u = void 0, Am(l?.destroy), l = void 0, Am(c?.destroy), c = void 0, Am(s), s = void 0, i.get(r) === d && i.delete(r), o.destroy({ unregisterUnique: n.unregisterUnique });
		}), i.set(r, d), t.addEventListener("pagehide", e), { dispose: () => d?.() };
	} catch (e) {
		throw Am(u), Am(l?.destroy), Am(c?.destroy), Am(s), o.destroy(), e;
	}
}
async function zm() {
	return await new Promise((e) => $(e)), Rm();
}
$(() => {
	try {
		zm();
	} catch (e) {
		console.error(`[${Ul}] 自动初始化失败:`, e);
	}
});
var Bm = { activate: zm };
export { Sp as PLUGIN_ID, Cp as PLUGIN_VERSION, zm as activate, Bm as default };
