function pug_rethrow(n, e, r, t) {
	if (!(n instanceof Error)) throw n;
	if (!("undefined" == typeof window && e || t)) throw n.message += " on line " + r, n;
	try { t = t || require("fs").readFileSync(e, "utf8"); } catch (e) { pug_rethrow(n, null, r); }
	var i = 3,
		a = t.split("\n"),
		o = Math.max(r - i, 0),
		h = Math.min(a.length, r + i),
		i = a.slice(o, h).map(function(n, e) { var t = e + o + 1; return (t == r ? "  > " : "    ") + t + "| " + n; }).join("\n");
	throw n.path = e, n.message = (e || "Pug") + ":" + r + "\n" + i + "\n\n" + n.message, n;
}

export default function scoreboardTEMPLATE(locals) {
	var pug_html = "",
		pug_mixins = {},
		pug_interp;
	var pug_debug_filename, pug_debug_line;
	try {
		pug_debug_line = 1;
		pug_debug_filename = "\u002FUsers\u002Frubenhovhannisyan\u002FDesktop\u002FJS\u002F2017_2_PanzerElite\u002Fpublic\u002Fblocks\u002Fscoreboard\u002Fscoreboard.pug";
		pug_html = pug_html + "\u003Cp\u003E";
		pug_debug_line = 1;
		pug_debug_filename = "\u002FUsers\u002Frubenhovhannisyan\u002FDesktop\u002FJS\u002F2017_2_PanzerElite\u002Fpublic\u002Fblocks\u002Fscoreboard\u002Fscoreboard.pug";
		pug_html = pug_html + "HERE MUST BE A SCOREBOARD(in progress)\u003C\u002Fp\u003E";
	} catch (err) { pug_rethrow(err, pug_debug_filename, pug_debug_line); }
	return pug_html;
}