
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // packages/shared/render/plugins/BaseSiteModules/tram-min.js
  var require_tram_min = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/tram-min.js"() {
      window.tram = function(a) {
        function b(a2, b2) {
          var c2 = new M.Bare();
          return c2.init(a2, b2);
        }
        function c(a2) {
          return a2.replace(/[A-Z]/g, function(a3) {
            return "-" + a3.toLowerCase();
          });
        }
        function d(a2) {
          var b2 = parseInt(a2.slice(1), 16), c2 = b2 >> 16 & 255, d2 = b2 >> 8 & 255, e2 = 255 & b2;
          return [c2, d2, e2];
        }
        function e(a2, b2, c2) {
          return "#" + (1 << 24 | a2 << 16 | b2 << 8 | c2).toString(16).slice(1);
        }
        function f() {
        }
        function g(a2, b2) {
          j("Type warning: Expected: [" + a2 + "] Got: [" + typeof b2 + "] " + b2);
        }
        function h(a2, b2, c2) {
          j("Units do not match [" + a2 + "]: " + b2 + ", " + c2);
        }
        function i(a2, b2, c2) {
          if (void 0 !== b2 && (c2 = b2), void 0 === a2)
            return c2;
          var d2 = c2;
          return $.test(a2) || !_.test(a2) ? d2 = parseInt(a2, 10) : _.test(a2) && (d2 = 1e3 * parseFloat(a2)), 0 > d2 && (d2 = 0), d2 === d2 ? d2 : c2;
        }
        function j(a2) {
          U.debug && window && window.console.warn(a2);
        }
        function k(a2) {
          for (var b2 = -1, c2 = a2 ? a2.length : 0, d2 = []; ++b2 < c2; ) {
            var e2 = a2[b2];
            e2 && d2.push(e2);
          }
          return d2;
        }
        var l = function(a2, b2, c2) {
          function d2(a3) {
            return "object" == typeof a3;
          }
          function e2(a3) {
            return "function" == typeof a3;
          }
          function f2() {
          }
          function g2(h2, i2) {
            function j2() {
              var a3 = new k2();
              return e2(a3.init) && a3.init.apply(a3, arguments), a3;
            }
            function k2() {
            }
            i2 === c2 && (i2 = h2, h2 = Object), j2.Bare = k2;
            var l2, m2 = f2[a2] = h2[a2], n2 = k2[a2] = j2[a2] = new f2();
            return n2.constructor = j2, j2.mixin = function(b3) {
              return k2[a2] = j2[a2] = g2(j2, b3)[a2], j2;
            }, j2.open = function(a3) {
              if (l2 = {}, e2(a3) ? l2 = a3.call(j2, n2, m2, j2, h2) : d2(a3) && (l2 = a3), d2(l2))
                for (var c3 in l2)
                  b2.call(l2, c3) && (n2[c3] = l2[c3]);
              return e2(n2.init) || (n2.init = h2), j2;
            }, j2.open(i2);
          }
          return g2;
        }("prototype", {}.hasOwnProperty), m = {
          ease: ["ease", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (-2.75 * f2 * e2 + 11 * e2 * e2 + -15.5 * f2 + 8 * e2 + 0.25 * a2);
          }],
          "ease-in": ["ease-in", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (-1 * f2 * e2 + 3 * e2 * e2 + -3 * f2 + 2 * e2);
          }],
          "ease-out": ["ease-out", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (0.3 * f2 * e2 + -1.6 * e2 * e2 + 2.2 * f2 + -1.8 * e2 + 1.9 * a2);
          }],
          "ease-in-out": ["ease-in-out", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (2 * f2 * e2 + -5 * e2 * e2 + 2 * f2 + 2 * e2);
          }],
          linear: ["linear", function(a2, b2, c2, d2) {
            return c2 * a2 / d2 + b2;
          }],
          "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 + b2;
          }],
          "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(a2, b2, c2, d2) {
            return -c2 * (a2 /= d2) * (a2 - 2) + b2;
          }],
          "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 + b2 : -c2 / 2 * (--a2 * (a2 - 2) - 1) + b2;
          }],
          "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 * a2 + b2;
          }],
          "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(a2, b2, c2, d2) {
            return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 + 1) + b2;
          }],
          "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 + 2) + b2;
          }],
          "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 * a2 * a2 + b2;
          }],
          "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(a2, b2, c2, d2) {
            return -c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 - 1) + b2;
          }],
          "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 + b2 : -c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 - 2) + b2;
          }],
          "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 * a2 * a2 * a2 + b2;
          }],
          "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(a2, b2, c2, d2) {
            return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 * a2 + 1) + b2;
          }],
          "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 * a2 + 2) + b2;
          }],
          "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(a2, b2, c2, d2) {
            return -c2 * Math.cos(a2 / d2 * (Math.PI / 2)) + c2 + b2;
          }],
          "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(a2, b2, c2, d2) {
            return c2 * Math.sin(a2 / d2 * (Math.PI / 2)) + b2;
          }],
          "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(a2, b2, c2, d2) {
            return -c2 / 2 * (Math.cos(Math.PI * a2 / d2) - 1) + b2;
          }],
          "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(a2, b2, c2, d2) {
            return 0 === a2 ? b2 : c2 * Math.pow(2, 10 * (a2 / d2 - 1)) + b2;
          }],
          "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(a2, b2, c2, d2) {
            return a2 === d2 ? b2 + c2 : c2 * (-Math.pow(2, -10 * a2 / d2) + 1) + b2;
          }],
          "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(a2, b2, c2, d2) {
            return 0 === a2 ? b2 : a2 === d2 ? b2 + c2 : (a2 /= d2 / 2) < 1 ? c2 / 2 * Math.pow(2, 10 * (a2 - 1)) + b2 : c2 / 2 * (-Math.pow(2, -10 * --a2) + 2) + b2;
          }],
          "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(a2, b2, c2, d2) {
            return -c2 * (Math.sqrt(1 - (a2 /= d2) * a2) - 1) + b2;
          }],
          "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(a2, b2, c2, d2) {
            return c2 * Math.sqrt(1 - (a2 = a2 / d2 - 1) * a2) + b2;
          }],
          "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? -c2 / 2 * (Math.sqrt(1 - a2 * a2) - 1) + b2 : c2 / 2 * (Math.sqrt(1 - (a2 -= 2) * a2) + 1) + b2;
          }],
          "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(a2, b2, c2, d2, e2) {
            return void 0 === e2 && (e2 = 1.70158), c2 * (a2 /= d2) * a2 * ((e2 + 1) * a2 - e2) + b2;
          }],
          "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(a2, b2, c2, d2, e2) {
            return void 0 === e2 && (e2 = 1.70158), c2 * ((a2 = a2 / d2 - 1) * a2 * ((e2 + 1) * a2 + e2) + 1) + b2;
          }],
          "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(a2, b2, c2, d2, e2) {
            return void 0 === e2 && (e2 = 1.70158), (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * (((e2 *= 1.525) + 1) * a2 - e2) + b2 : c2 / 2 * ((a2 -= 2) * a2 * (((e2 *= 1.525) + 1) * a2 + e2) + 2) + b2;
          }]
        }, n = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
        }, o = document, p = window, q = "bkwld-tram", r = /[\-\.0-9]/g, s = /[A-Z]/, t = "number", u = /^(rgb|#)/, v = /(em|cm|mm|in|pt|pc|px)$/, w = /(em|cm|mm|in|pt|pc|px|%)$/, x = /(deg|rad|turn)$/, y = "unitless", z = /(all|none) 0s ease 0s/, A = /^(width|height)$/, B = " ", C = o.createElement("a"), D = ["Webkit", "Moz", "O", "ms"], E = ["-webkit-", "-moz-", "-o-", "-ms-"], F = function(a2) {
          if (a2 in C.style)
            return {
              dom: a2,
              css: a2
            };
          var b2, c2, d2 = "", e2 = a2.split("-");
          for (b2 = 0; b2 < e2.length; b2++)
            d2 += e2[b2].charAt(0).toUpperCase() + e2[b2].slice(1);
          for (b2 = 0; b2 < D.length; b2++)
            if (c2 = D[b2] + d2, c2 in C.style)
              return {
                dom: c2,
                css: E[b2] + a2
              };
        }, G = b.support = {
          bind: Function.prototype.bind,
          transform: F("transform"),
          transition: F("transition"),
          backface: F("backface-visibility"),
          timing: F("transition-timing-function")
        };
        if (G.transition) {
          var H = G.timing.dom;
          if (C.style[H] = m["ease-in-back"][0], !C.style[H])
            for (var I in n)
              m[I][0] = n[I];
        }
        var J = b.frame = function() {
          var a2 = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
          return a2 && G.bind ? a2.bind(p) : function(a3) {
            p.setTimeout(a3, 16);
          };
        }(), K = b.now = function() {
          var a2 = p.performance, b2 = a2 && (a2.now || a2.webkitNow || a2.msNow || a2.mozNow);
          return b2 && G.bind ? b2.bind(a2) : Date.now || function() {
            return +/* @__PURE__ */ new Date();
          };
        }(), L = l(function(b2) {
          function d2(a2, b3) {
            var c2 = k(("" + a2).split(B)), d3 = c2[0];
            b3 = b3 || {};
            var e3 = Y[d3];
            if (!e3)
              return j("Unsupported property: " + d3);
            if (!b3.weak || !this.props[d3]) {
              var f3 = e3[0], g3 = this.props[d3];
              return g3 || (g3 = this.props[d3] = new f3.Bare()), g3.init(this.$el, c2, e3, b3), g3;
            }
          }
          function e2(a2, b3, c2) {
            if (a2) {
              var e3 = typeof a2;
              if (b3 || (this.timer && this.timer.destroy(), this.queue = [], this.active = false), "number" == e3 && b3)
                return this.timer = new S({
                  duration: a2,
                  context: this,
                  complete: h2
                }), void (this.active = true);
              if ("string" == e3 && b3) {
                switch (a2) {
                  case "hide":
                    o2.call(this);
                    break;
                  case "stop":
                    l2.call(this);
                    break;
                  case "redraw":
                    p2.call(this);
                    break;
                  default:
                    d2.call(this, a2, c2 && c2[1]);
                }
                return h2.call(this);
              }
              if ("function" == e3)
                return void a2.call(this, this);
              if ("object" == e3) {
                var f3 = 0;
                u2.call(this, a2, function(a3, b4) {
                  a3.span > f3 && (f3 = a3.span), a3.stop(), a3.animate(b4);
                }, function(a3) {
                  "wait" in a3 && (f3 = i(a3.wait, 0));
                }), t2.call(this), f3 > 0 && (this.timer = new S({
                  duration: f3,
                  context: this
                }), this.active = true, b3 && (this.timer.complete = h2));
                var g3 = this, j2 = false, k2 = {};
                J(function() {
                  u2.call(g3, a2, function(a3) {
                    a3.active && (j2 = true, k2[a3.name] = a3.nextStyle);
                  }), j2 && g3.$el.css(k2);
                });
              }
            }
          }
          function f2(a2) {
            a2 = i(a2, 0), this.active ? this.queue.push({
              options: a2
            }) : (this.timer = new S({
              duration: a2,
              context: this,
              complete: h2
            }), this.active = true);
          }
          function g2(a2) {
            return this.active ? (this.queue.push({
              options: a2,
              args: arguments
            }), void (this.timer.complete = h2)) : j("No active transition timer. Use start() or wait() before then().");
          }
          function h2() {
            if (this.timer && this.timer.destroy(), this.active = false, this.queue.length) {
              var a2 = this.queue.shift();
              e2.call(this, a2.options, true, a2.args);
            }
          }
          function l2(a2) {
            this.timer && this.timer.destroy(), this.queue = [], this.active = false;
            var b3;
            "string" == typeof a2 ? (b3 = {}, b3[a2] = 1) : b3 = "object" == typeof a2 && null != a2 ? a2 : this.props, u2.call(this, b3, v2), t2.call(this);
          }
          function m2(a2) {
            l2.call(this, a2), u2.call(this, a2, w2, x2);
          }
          function n2(a2) {
            "string" != typeof a2 && (a2 = "block"), this.el.style.display = a2;
          }
          function o2() {
            l2.call(this), this.el.style.display = "none";
          }
          function p2() {
            this.el.offsetHeight;
          }
          function r2() {
            l2.call(this), a.removeData(this.el, q), this.$el = this.el = null;
          }
          function t2() {
            var a2, b3, c2 = [];
            this.upstream && c2.push(this.upstream);
            for (a2 in this.props)
              b3 = this.props[a2], b3.active && c2.push(b3.string);
            c2 = c2.join(","), this.style !== c2 && (this.style = c2, this.el.style[G.transition.dom] = c2);
          }
          function u2(a2, b3, e3) {
            var f3, g3, h3, i2, j2 = b3 !== v2, k2 = {};
            for (f3 in a2)
              h3 = a2[f3], f3 in Z ? (k2.transform || (k2.transform = {}), k2.transform[f3] = h3) : (s.test(f3) && (f3 = c(f3)), f3 in Y ? k2[f3] = h3 : (i2 || (i2 = {}), i2[f3] = h3));
            for (f3 in k2) {
              if (h3 = k2[f3], g3 = this.props[f3], !g3) {
                if (!j2)
                  continue;
                g3 = d2.call(this, f3);
              }
              b3.call(this, g3, h3);
            }
            e3 && i2 && e3.call(this, i2);
          }
          function v2(a2) {
            a2.stop();
          }
          function w2(a2, b3) {
            a2.set(b3);
          }
          function x2(a2) {
            this.$el.css(a2);
          }
          function y2(a2, c2) {
            b2[a2] = function() {
              return this.children ? A2.call(this, c2, arguments) : (this.el && c2.apply(this, arguments), this);
            };
          }
          function A2(a2, b3) {
            var c2, d3 = this.children.length;
            for (c2 = 0; d3 > c2; c2++)
              a2.apply(this.children[c2], b3);
            return this;
          }
          b2.init = function(b3) {
            if (this.$el = a(b3), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = false, U.keepInherited && !U.fallback) {
              var c2 = W(this.el, "transition");
              c2 && !z.test(c2) && (this.upstream = c2);
            }
            G.backface && U.hideBackface && V(this.el, G.backface.css, "hidden");
          }, y2("add", d2), y2("start", e2), y2("wait", f2), y2("then", g2), y2("next", h2), y2("stop", l2), y2("set", m2), y2("show", n2), y2("hide", o2), y2("redraw", p2), y2("destroy", r2);
        }), M = l(L, function(b2) {
          function c2(b3, c3) {
            var d2 = a.data(b3, q) || a.data(b3, q, new L.Bare());
            return d2.el || d2.init(b3), c3 ? d2.start(c3) : d2;
          }
          b2.init = function(b3, d2) {
            var e2 = a(b3);
            if (!e2.length)
              return this;
            if (1 === e2.length)
              return c2(e2[0], d2);
            var f2 = [];
            return e2.each(function(a2, b4) {
              f2.push(c2(b4, d2));
            }), this.children = f2, this;
          };
        }), N = l(function(a2) {
          function b2() {
            var a3 = this.get();
            this.update("auto");
            var b3 = this.get();
            return this.update(a3), b3;
          }
          function c2(a3, b3, c3) {
            return void 0 !== b3 && (c3 = b3), a3 in m ? a3 : c3;
          }
          function d2(a3) {
            var b3 = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a3);
            return (b3 ? e(b3[1], b3[2], b3[3]) : a3).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
          }
          var f2 = {
            duration: 500,
            ease: "ease",
            delay: 0
          };
          a2.init = function(a3, b3, d3, e2) {
            this.$el = a3, this.el = a3[0];
            var g2 = b3[0];
            d3[2] && (g2 = d3[2]), X[g2] && (g2 = X[g2]), this.name = g2, this.type = d3[1], this.duration = i(b3[1], this.duration, f2.duration), this.ease = c2(b3[2], this.ease, f2.ease), this.delay = i(b3[3], this.delay, f2.delay), this.span = this.duration + this.delay, this.active = false, this.nextStyle = null, this.auto = A.test(this.name), this.unit = e2.unit || this.unit || U.defaultUnit, this.angle = e2.angle || this.angle || U.defaultAngle, U.fallback || e2.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + B + this.duration + "ms" + ("ease" != this.ease ? B + m[this.ease][0] : "") + (this.delay ? B + this.delay + "ms" : ""));
          }, a2.set = function(a3) {
            a3 = this.convert(a3, this.type), this.update(a3), this.redraw();
          }, a2.transition = function(a3) {
            this.active = true, a3 = this.convert(a3, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == a3 && (a3 = b2.call(this))), this.nextStyle = a3;
          }, a2.fallback = function(a3) {
            var c3 = this.el.style[this.name] || this.convert(this.get(), this.type);
            a3 = this.convert(a3, this.type), this.auto && ("auto" == c3 && (c3 = this.convert(this.get(), this.type)), "auto" == a3 && (a3 = b2.call(this))), this.tween = new R({
              from: c3,
              to: a3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            });
          }, a2.get = function() {
            return W(this.el, this.name);
          }, a2.update = function(a3) {
            V(this.el, this.name, a3);
          }, a2.stop = function() {
            (this.active || this.nextStyle) && (this.active = false, this.nextStyle = null, V(this.el, this.name, this.get()));
            var a3 = this.tween;
            a3 && a3.context && a3.destroy();
          }, a2.convert = function(a3, b3) {
            if ("auto" == a3 && this.auto)
              return a3;
            var c3, e2 = "number" == typeof a3, f3 = "string" == typeof a3;
            switch (b3) {
              case t:
                if (e2)
                  return a3;
                if (f3 && "" === a3.replace(r, ""))
                  return +a3;
                c3 = "number(unitless)";
                break;
              case u:
                if (f3) {
                  if ("" === a3 && this.original)
                    return this.original;
                  if (b3.test(a3))
                    return "#" == a3.charAt(0) && 7 == a3.length ? a3 : d2(a3);
                }
                c3 = "hex or rgb string";
                break;
              case v:
                if (e2)
                  return a3 + this.unit;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(px) or string(unit)";
                break;
              case w:
                if (e2)
                  return a3 + this.unit;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(px) or string(unit or %)";
                break;
              case x:
                if (e2)
                  return a3 + this.angle;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(deg) or string(angle)";
                break;
              case y:
                if (e2)
                  return a3;
                if (f3 && w.test(a3))
                  return a3;
                c3 = "number(unitless) or string(unit or %)";
            }
            return g(c3, a3), a3;
          }, a2.redraw = function() {
            this.el.offsetHeight;
          };
        }), O = l(N, function(a2, b2) {
          a2.init = function() {
            b2.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), u));
          };
        }), P = l(N, function(a2, b2) {
          a2.init = function() {
            b2.init.apply(this, arguments), this.animate = this.fallback;
          }, a2.get = function() {
            return this.$el[this.name]();
          }, a2.update = function(a3) {
            this.$el[this.name](a3);
          };
        }), Q = l(N, function(a2, b2) {
          function c2(a3, b3) {
            var c3, d2, e2, f2, g2;
            for (c3 in a3)
              f2 = Z[c3], e2 = f2[0], d2 = f2[1] || c3, g2 = this.convert(a3[c3], e2), b3.call(this, d2, g2, e2);
          }
          a2.init = function() {
            b2.init.apply(this, arguments), this.current || (this.current = {}, Z.perspective && U.perspective && (this.current.perspective = U.perspective, V(this.el, this.name, this.style(this.current)), this.redraw()));
          }, a2.set = function(a3) {
            c2.call(this, a3, function(a4, b3) {
              this.current[a4] = b3;
            }), V(this.el, this.name, this.style(this.current)), this.redraw();
          }, a2.transition = function(a3) {
            var b3 = this.values(a3);
            this.tween = new T({
              current: this.current,
              values: b3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease
            });
            var c3, d2 = {};
            for (c3 in this.current)
              d2[c3] = c3 in b3 ? b3[c3] : this.current[c3];
            this.active = true, this.nextStyle = this.style(d2);
          }, a2.fallback = function(a3) {
            var b3 = this.values(a3);
            this.tween = new T({
              current: this.current,
              values: b3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            });
          }, a2.update = function() {
            V(this.el, this.name, this.style(this.current));
          }, a2.style = function(a3) {
            var b3, c3 = "";
            for (b3 in a3)
              c3 += b3 + "(" + a3[b3] + ") ";
            return c3;
          }, a2.values = function(a3) {
            var b3, d2 = {};
            return c2.call(this, a3, function(a4, c3, e2) {
              d2[a4] = c3, void 0 === this.current[a4] && (b3 = 0, ~a4.indexOf("scale") && (b3 = 1), this.current[a4] = this.convert(b3, e2));
            }), d2;
          };
        }), R = l(function(b2) {
          function c2(a2) {
            1 === n2.push(a2) && J(g2);
          }
          function g2() {
            var a2, b3, c3, d2 = n2.length;
            if (d2)
              for (J(g2), b3 = K(), a2 = d2; a2--; )
                c3 = n2[a2], c3 && c3.render(b3);
          }
          function i2(b3) {
            var c3, d2 = a.inArray(b3, n2);
            d2 >= 0 && (c3 = n2.slice(d2 + 1), n2.length = d2, c3.length && (n2 = n2.concat(c3)));
          }
          function j2(a2) {
            return Math.round(a2 * o2) / o2;
          }
          function k2(a2, b3, c3) {
            return e(a2[0] + c3 * (b3[0] - a2[0]), a2[1] + c3 * (b3[1] - a2[1]), a2[2] + c3 * (b3[2] - a2[2]));
          }
          var l2 = {
            ease: m.ease[1],
            from: 0,
            to: 1
          };
          b2.init = function(a2) {
            this.duration = a2.duration || 0, this.delay = a2.delay || 0;
            var b3 = a2.ease || l2.ease;
            m[b3] && (b3 = m[b3][1]), "function" != typeof b3 && (b3 = l2.ease), this.ease = b3, this.update = a2.update || f, this.complete = a2.complete || f, this.context = a2.context || this, this.name = a2.name;
            var c3 = a2.from, d2 = a2.to;
            void 0 === c3 && (c3 = l2.from), void 0 === d2 && (d2 = l2.to), this.unit = a2.unit || "", "number" == typeof c3 && "number" == typeof d2 ? (this.begin = c3, this.change = d2 - c3) : this.format(d2, c3), this.value = this.begin + this.unit, this.start = K(), a2.autoplay !== false && this.play();
          }, b2.play = function() {
            this.active || (this.start || (this.start = K()), this.active = true, c2(this));
          }, b2.stop = function() {
            this.active && (this.active = false, i2(this));
          }, b2.render = function(a2) {
            var b3, c3 = a2 - this.start;
            if (this.delay) {
              if (c3 <= this.delay)
                return;
              c3 -= this.delay;
            }
            if (c3 < this.duration) {
              var d2 = this.ease(c3, 0, 1, this.duration);
              return b3 = this.startRGB ? k2(this.startRGB, this.endRGB, d2) : j2(this.begin + d2 * this.change), this.value = b3 + this.unit, void this.update.call(this.context, this.value);
            }
            b3 = this.endHex || this.begin + this.change, this.value = b3 + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
          }, b2.format = function(a2, b3) {
            if (b3 += "", a2 += "", "#" == a2.charAt(0))
              return this.startRGB = d(b3), this.endRGB = d(a2), this.endHex = a2, this.begin = 0, void (this.change = 1);
            if (!this.unit) {
              var c3 = b3.replace(r, ""), e2 = a2.replace(r, "");
              c3 !== e2 && h("tween", b3, a2), this.unit = c3;
            }
            b3 = parseFloat(b3), a2 = parseFloat(a2), this.begin = this.value = b3, this.change = a2 - b3;
          }, b2.destroy = function() {
            this.stop(), this.context = null, this.ease = this.update = this.complete = f;
          };
          var n2 = [], o2 = 1e3;
        }), S = l(R, function(a2) {
          a2.init = function(a3) {
            this.duration = a3.duration || 0, this.complete = a3.complete || f, this.context = a3.context, this.play();
          }, a2.render = function(a3) {
            var b2 = a3 - this.start;
            b2 < this.duration || (this.complete.call(this.context), this.destroy());
          };
        }), T = l(R, function(a2, b2) {
          a2.init = function(a3) {
            this.context = a3.context, this.update = a3.update, this.tweens = [], this.current = a3.current;
            var b3, c2;
            for (b3 in a3.values)
              c2 = a3.values[b3], this.current[b3] !== c2 && this.tweens.push(new R({
                name: b3,
                from: this.current[b3],
                to: c2,
                duration: a3.duration,
                delay: a3.delay,
                ease: a3.ease,
                autoplay: false
              }));
            this.play();
          }, a2.render = function(a3) {
            var b3, c2, d2 = this.tweens.length, e2 = false;
            for (b3 = d2; b3--; )
              c2 = this.tweens[b3], c2.context && (c2.render(a3), this.current[c2.name] = c2.value, e2 = true);
            return e2 ? void (this.update && this.update.call(this.context)) : this.destroy();
          }, a2.destroy = function() {
            if (b2.destroy.call(this), this.tweens) {
              var a3, c2 = this.tweens.length;
              for (a3 = c2; a3--; )
                this.tweens[a3].destroy();
              this.tweens = null, this.current = null;
            }
          };
        }), U = b.config = {
          debug: false,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: false,
          hideBackface: false,
          perspective: "",
          fallback: !G.transition,
          agentTests: []
        };
        b.fallback = function(a2) {
          if (!G.transition)
            return U.fallback = true;
          U.agentTests.push("(" + a2 + ")");
          var b2 = new RegExp(U.agentTests.join("|"), "i");
          U.fallback = b2.test(navigator.userAgent);
        }, b.fallback("6.0.[2-5] Safari"), b.tween = function(a2) {
          return new R(a2);
        }, b.delay = function(a2, b2, c2) {
          return new S({
            complete: b2,
            duration: a2,
            context: c2
          });
        }, a.fn.tram = function(a2) {
          return b.call(null, this, a2);
        };
        var V = a.style, W = a.css, X = {
          transform: G.transform && G.transform.css
        }, Y = {
          color: [O, u],
          background: [O, u, "background-color"],
          "outline-color": [O, u],
          "border-color": [O, u],
          "border-top-color": [O, u],
          "border-right-color": [O, u],
          "border-bottom-color": [O, u],
          "border-left-color": [O, u],
          "border-width": [N, v],
          "border-top-width": [N, v],
          "border-right-width": [N, v],
          "border-bottom-width": [N, v],
          "border-left-width": [N, v],
          "border-spacing": [N, v],
          "letter-spacing": [N, v],
          margin: [N, v],
          "margin-top": [N, v],
          "margin-right": [N, v],
          "margin-bottom": [N, v],
          "margin-left": [N, v],
          padding: [N, v],
          "padding-top": [N, v],
          "padding-right": [N, v],
          "padding-bottom": [N, v],
          "padding-left": [N, v],
          "outline-width": [N, v],
          opacity: [N, t],
          top: [N, w],
          right: [N, w],
          bottom: [N, w],
          left: [N, w],
          "font-size": [N, w],
          "text-indent": [N, w],
          "word-spacing": [N, w],
          width: [N, w],
          "min-width": [N, w],
          "max-width": [N, w],
          height: [N, w],
          "min-height": [N, w],
          "max-height": [N, w],
          "line-height": [N, y],
          "scroll-top": [P, t, "scrollTop"],
          "scroll-left": [P, t, "scrollLeft"]
        }, Z = {};
        G.transform && (Y.transform = [Q], Z = {
          x: [w, "translateX"],
          y: [w, "translateY"],
          rotate: [x],
          rotateX: [x],
          rotateY: [x],
          scale: [t],
          scaleX: [t],
          scaleY: [t],
          skew: [x],
          skewX: [x],
          skewY: [x]
        }), G.transform && G.backface && (Z.z = [w, "translateZ"], Z.rotateZ = [x], Z.scaleZ = [t], Z.perspective = [v]);
        var $ = /ms/, _ = /s|\./;
        return a.tram = b;
      }(window.jQuery);
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/underscore-custom.js
  var require_underscore_custom = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/underscore-custom.js"(exports, module) {
      var $ = window.$;
      var tram = require_tram_min() && $.tram;
      module.exports = function() {
        var _ = {};
        _.VERSION = "1.6.0-Webflow";
        var breaker = {};
        var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
        var push = ArrayProto.push, slice = ArrayProto.slice, concat = ArrayProto.concat, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
        var nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeReduce = ArrayProto.reduce, nativeReduceRight = ArrayProto.reduceRight, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeLastIndexOf = ArrayProto.lastIndexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind;
        var each = _.each = _.forEach = function(obj, iterator, context) {
          if (obj == null)
            return obj;
          if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
          } else if (obj.length === +obj.length) {
            for (var i = 0, length = obj.length; i < length; i++) {
              if (iterator.call(context, obj[i], i, obj) === breaker)
                return;
            }
          } else {
            var keys = _.keys(obj);
            for (var i = 0, length = keys.length; i < length; i++) {
              if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker)
                return;
            }
          }
          return obj;
        };
        _.map = _.collect = function(obj, iterator, context) {
          var results = [];
          if (obj == null)
            return results;
          if (nativeMap && obj.map === nativeMap)
            return obj.map(iterator, context);
          each(obj, function(value, index, list) {
            results.push(iterator.call(context, value, index, list));
          });
          return results;
        };
        _.find = _.detect = function(obj, predicate, context) {
          var result;
          any(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list)) {
              result = value;
              return true;
            }
          });
          return result;
        };
        _.filter = _.select = function(obj, predicate, context) {
          var results = [];
          if (obj == null)
            return results;
          if (nativeFilter && obj.filter === nativeFilter)
            return obj.filter(predicate, context);
          each(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list))
              results.push(value);
          });
          return results;
        };
        var any = _.some = _.any = function(obj, predicate, context) {
          predicate || (predicate = _.identity);
          var result = false;
          if (obj == null)
            return result;
          if (nativeSome && obj.some === nativeSome)
            return obj.some(predicate, context);
          each(obj, function(value, index, list) {
            if (result || (result = predicate.call(context, value, index, list)))
              return breaker;
          });
          return !!result;
        };
        _.contains = _.include = function(obj, target) {
          if (obj == null)
            return false;
          if (nativeIndexOf && obj.indexOf === nativeIndexOf)
            return obj.indexOf(target) != -1;
          return any(obj, function(value) {
            return value === target;
          });
        };
        _.delay = function(func, wait) {
          var args = slice.call(arguments, 2);
          return setTimeout(function() {
            return func.apply(null, args);
          }, wait);
        };
        _.defer = function(func) {
          return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
        };
        _.throttle = function(func) {
          var wait, args, context;
          return function() {
            if (wait)
              return;
            wait = true;
            args = arguments;
            context = this;
            tram.frame(function() {
              wait = false;
              func.apply(context, args);
            });
          };
        };
        _.debounce = function(func, wait, immediate) {
          var timeout, args, context, timestamp, result;
          var later = function() {
            var last = _.now() - timestamp;
            if (last < wait) {
              timeout = setTimeout(later, wait - last);
            } else {
              timeout = null;
              if (!immediate) {
                result = func.apply(context, args);
                context = args = null;
              }
            }
          };
          return function() {
            context = this;
            args = arguments;
            timestamp = _.now();
            var callNow = immediate && !timeout;
            if (!timeout) {
              timeout = setTimeout(later, wait);
            }
            if (callNow) {
              result = func.apply(context, args);
              context = args = null;
            }
            return result;
          };
        };
        _.defaults = function(obj) {
          if (!_.isObject(obj))
            return obj;
          for (var i = 1, length = arguments.length; i < length; i++) {
            var source = arguments[i];
            for (var prop in source) {
              if (obj[prop] === void 0)
                obj[prop] = source[prop];
            }
          }
          return obj;
        };
        _.keys = function(obj) {
          if (!_.isObject(obj))
            return [];
          if (nativeKeys)
            return nativeKeys(obj);
          var keys = [];
          for (var key in obj)
            if (_.has(obj, key))
              keys.push(key);
          return keys;
        };
        _.has = function(obj, key) {
          return hasOwnProperty.call(obj, key);
        };
        _.isObject = function(obj) {
          return obj === Object(obj);
        };
        _.now = Date.now || function() {
          return (/* @__PURE__ */ new Date()).getTime();
        };
        _.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g
        };
        var noMatch = /(.)^/;
        var escapes = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };
        var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
        var escapeChar = function(match) {
          return "\\" + escapes[match];
        };
        var bareIdentifier = /^\s*(\w|\$)+\s*$/;
        _.template = function(text, settings, oldSettings) {
          if (!settings && oldSettings)
            settings = oldSettings;
          settings = _.defaults({}, settings, _.templateSettings);
          var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join("|") + "|$", "g");
          var index = 0;
          var source = "__p+='";
          text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
            index = offset + match.length;
            if (escape) {
              source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
            } else if (interpolate) {
              source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            } else if (evaluate) {
              source += "';\n" + evaluate + "\n__p+='";
            }
            return match;
          });
          source += "';\n";
          var argument = settings.variable;
          if (argument) {
            if (!bareIdentifier.test(argument))
              throw new Error("variable is not a bare identifier: " + argument);
          } else {
            source = "with(obj||{}){\n" + source + "}\n";
            argument = "obj";
          }
          source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
          var render;
          try {
            render = new Function(settings.variable || "obj", "_", source);
          } catch (e) {
            e.source = source;
            throw e;
          }
          var template = function(data) {
            return render.call(this, data, _);
          };
          template.source = "function(" + argument + "){\n" + source + "}";
          return template;
        };
        return _;
      }();
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-lib.js
  var require_webflow_lib = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-lib.js"(exports, module) {
      var Webflow = {};
      var modules = {};
      var primary = [];
      var secondary = window.Webflow || [];
      var $ = window.jQuery;
      var $win = $(window);
      var $doc = $(document);
      var isFunction = $.isFunction;
      var _ = Webflow._ = require_underscore_custom();
      var tram = Webflow.tram = require_tram_min() && $.tram;
      var domready = false;
      var destroyed = false;
      tram.config.hideBackface = false;
      tram.config.keepInherited = true;
      Webflow.define = function(name, factory, options) {
        if (modules[name]) {
          unbindModule(modules[name]);
        }
        var instance = modules[name] = factory($, _, options) || {};
        bindModule(instance);
        return instance;
      };
      Webflow.require = function(name) {
        return modules[name];
      };
      function bindModule(module2) {
        if (Webflow.env()) {
          isFunction(module2.design) && $win.on("__wf_design", module2.design);
          isFunction(module2.preview) && $win.on("__wf_preview", module2.preview);
        }
        isFunction(module2.destroy) && $win.on("__wf_destroy", module2.destroy);
        if (module2.ready && isFunction(module2.ready)) {
          addReady(module2);
        }
      }
      function addReady(module2) {
        if (domready) {
          module2.ready();
          return;
        }
        if (_.contains(primary, module2.ready)) {
          return;
        }
        primary.push(module2.ready);
      }
      function unbindModule(module2) {
        isFunction(module2.design) && $win.off("__wf_design", module2.design);
        isFunction(module2.preview) && $win.off("__wf_preview", module2.preview);
        isFunction(module2.destroy) && $win.off("__wf_destroy", module2.destroy);
        if (module2.ready && isFunction(module2.ready)) {
          removeReady(module2);
        }
      }
      function removeReady(module2) {
        primary = _.filter(primary, function(readyFn) {
          return readyFn !== module2.ready;
        });
      }
      Webflow.push = function(ready) {
        if (domready) {
          isFunction(ready) && ready();
          return;
        }
        secondary.push(ready);
      };
      Webflow.env = function(mode) {
        var designFlag = window.__wf_design;
        var inApp = typeof designFlag !== "undefined";
        if (!mode) {
          return inApp;
        }
        if (mode === "design") {
          return inApp && designFlag;
        }
        if (mode === "preview") {
          return inApp && !designFlag;
        }
        if (mode === "slug") {
          return inApp && window.__wf_slug;
        }
        if (mode === "editor") {
          return window.WebflowEditor;
        }
        if (mode === "test") {
          return window.__wf_test;
        }
        if (mode === "frame") {
          return window !== window.top;
        }
      };
      var userAgent = navigator.userAgent.toLowerCase();
      var touch = Webflow.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
      var chrome = Webflow.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(userAgent.match(/chrome\/(\d+)\./)[1], 10);
      var ios = Webflow.env.ios = /(ipod|iphone|ipad)/.test(userAgent);
      Webflow.env.safari = /safari/.test(userAgent) && !chrome && !ios;
      var touchTarget;
      touch && $doc.on("touchstart mousedown", function(evt) {
        touchTarget = evt.target;
      });
      Webflow.validClick = touch ? function(clickTarget) {
        return clickTarget === touchTarget || $.contains(clickTarget, touchTarget);
      } : function() {
        return true;
      };
      var resizeEvents = "resize.webflow orientationchange.webflow load.webflow";
      var scrollEvents = "scroll.webflow " + resizeEvents;
      Webflow.resize = eventProxy($win, resizeEvents);
      Webflow.scroll = eventProxy($win, scrollEvents);
      Webflow.redraw = eventProxy();
      function eventProxy(target, types) {
        var handlers = [];
        var proxy = {};
        proxy.up = _.throttle(function(evt) {
          _.each(handlers, function(h) {
            h(evt);
          });
        });
        if (target && types) {
          target.on(types, proxy.up);
        }
        proxy.on = function(handler) {
          if (typeof handler !== "function") {
            return;
          }
          if (_.contains(handlers, handler)) {
            return;
          }
          handlers.push(handler);
        };
        proxy.off = function(handler) {
          if (!arguments.length) {
            handlers = [];
            return;
          }
          handlers = _.filter(handlers, function(h) {
            return h !== handler;
          });
        };
        return proxy;
      }
      Webflow.location = function(url) {
        window.location = url;
      };
      if (Webflow.env()) {
        Webflow.location = function() {
        };
      }
      Webflow.ready = function() {
        domready = true;
        if (destroyed) {
          restoreModules();
        } else {
          _.each(primary, callReady);
        }
        _.each(secondary, callReady);
        Webflow.resize.up();
      };
      function callReady(readyFn) {
        isFunction(readyFn) && readyFn();
      }
      function restoreModules() {
        destroyed = false;
        _.each(modules, bindModule);
      }
      var deferLoad;
      Webflow.load = function(handler) {
        deferLoad.then(handler);
      };
      function bindLoad() {
        if (deferLoad) {
          deferLoad.reject();
          $win.off("load", deferLoad.resolve);
        }
        deferLoad = new $.Deferred();
        $win.on("load", deferLoad.resolve);
      }
      Webflow.destroy = function(options) {
        options = options || {};
        destroyed = true;
        $win.triggerHandler("__wf_destroy");
        if (options.domready != null) {
          domready = options.domready;
        }
        _.each(modules, unbindModule);
        Webflow.resize.off();
        Webflow.scroll.off();
        Webflow.redraw.off();
        primary = [];
        secondary = [];
        if (deferLoad.state() === "pending") {
          bindLoad();
        }
      };
      $(Webflow.ready);
      bindLoad();
      module.exports = window.Webflow = Webflow;
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-brand.js
  var require_webflow_brand = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-brand.js"(exports, module) {
      var Webflow = require_webflow_lib();
      Webflow.define("brand", module.exports = function($) {
        var api = {};
        var doc = document;
        var $html = $("html");
        var $body = $("body");
        var namespace = ".w-webflow-badge";
        var location = window.location;
        var isPhantom = /PhantomJS/i.test(navigator.userAgent);
        var fullScreenEvents = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
        var brandElement;
        api.ready = function() {
          var shouldBrand = $html.attr("data-wf-status");
          var publishedDomain = $html.attr("data-wf-domain") || "";
          if (/\.webflow\.io$/i.test(publishedDomain) && location.hostname !== publishedDomain) {
            shouldBrand = true;
          }
          if (shouldBrand && !isPhantom) {
            brandElement = brandElement || createBadge();
            ensureBrand();
            setTimeout(ensureBrand, 500);
            $(doc).off(fullScreenEvents, onFullScreenChange).on(fullScreenEvents, onFullScreenChange);
          }
        };
        function onFullScreenChange() {
          var fullScreen = doc.fullScreen || doc.mozFullScreen || doc.webkitIsFullScreen || doc.msFullscreenElement || Boolean(doc.webkitFullscreenElement);
          $(brandElement).attr("style", fullScreen ? "display: none !important;" : "");
        }
        function createBadge() {
          var $brand = $('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs");
          var $logoArt = $("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
            marginRight: "8px",
            width: "16px"
          });
          var $logoText = $("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow");
          $brand.append($logoArt, $logoText);
          return $brand[0];
        }
        function ensureBrand() {
          var found = $body.children(namespace);
          var match = found.length && found.get(0) === brandElement;
          var inEditor = Webflow.env("editor");
          if (match) {
            if (inEditor) {
              found.remove();
            }
            return;
          }
          if (found.length) {
            found.remove();
          }
          if (!inEditor) {
            $body.append(brandElement);
          }
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-focus-visible.js
  var require_webflow_focus_visible = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-focus-visible.js"(exports, module) {
      var Webflow = require_webflow_lib();
      Webflow.define("focus-visible", module.exports = function() {
        function applyFocusVisiblePolyfill(scope) {
          var hadKeyboardEvent = true;
          var hadFocusVisibleRecently = false;
          var hadFocusVisibleRecentlyTimeout = null;
          var inputTypesAllowlist = {
            text: true,
            search: true,
            url: true,
            tel: true,
            email: true,
            password: true,
            number: true,
            date: true,
            month: true,
            week: true,
            time: true,
            datetime: true,
            "datetime-local": true
          };
          function isValidFocusTarget(el) {
            if (el && el !== document && el.nodeName !== "HTML" && el.nodeName !== "BODY" && "classList" in el && "contains" in el.classList) {
              return true;
            }
            return false;
          }
          function focusTriggersKeyboardModality(el) {
            var type = el.type;
            var tagName = el.tagName;
            if (tagName === "INPUT" && inputTypesAllowlist[type] && !el.readOnly) {
              return true;
            }
            if (tagName === "TEXTAREA" && !el.readOnly) {
              return true;
            }
            if (el.isContentEditable) {
              return true;
            }
            return false;
          }
          function addFocusVisibleAttribute(el) {
            if (el.getAttribute("data-wf-focus-visible")) {
              return;
            }
            el.setAttribute("data-wf-focus-visible", "true");
          }
          function removeFocusVisibleAttribute(el) {
            if (!el.getAttribute("data-wf-focus-visible")) {
              return;
            }
            el.removeAttribute("data-wf-focus-visible");
          }
          function onKeyDown(e) {
            if (e.metaKey || e.altKey || e.ctrlKey) {
              return;
            }
            if (isValidFocusTarget(scope.activeElement)) {
              addFocusVisibleAttribute(scope.activeElement);
            }
            hadKeyboardEvent = true;
          }
          function onPointerDown() {
            hadKeyboardEvent = false;
          }
          function onFocus(e) {
            if (!isValidFocusTarget(e.target)) {
              return;
            }
            if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
              addFocusVisibleAttribute(e.target);
            }
          }
          function onBlur(e) {
            if (!isValidFocusTarget(e.target)) {
              return;
            }
            if (e.target.hasAttribute("data-wf-focus-visible")) {
              hadFocusVisibleRecently = true;
              window.clearTimeout(hadFocusVisibleRecentlyTimeout);
              hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
                hadFocusVisibleRecently = false;
              }, 100);
              removeFocusVisibleAttribute(e.target);
            }
          }
          function onVisibilityChange() {
            if (document.visibilityState === "hidden") {
              if (hadFocusVisibleRecently) {
                hadKeyboardEvent = true;
              }
              addInitialPointerMoveListeners();
            }
          }
          function addInitialPointerMoveListeners() {
            document.addEventListener("mousemove", onInitialPointerMove);
            document.addEventListener("mousedown", onInitialPointerMove);
            document.addEventListener("mouseup", onInitialPointerMove);
            document.addEventListener("pointermove", onInitialPointerMove);
            document.addEventListener("pointerdown", onInitialPointerMove);
            document.addEventListener("pointerup", onInitialPointerMove);
            document.addEventListener("touchmove", onInitialPointerMove);
            document.addEventListener("touchstart", onInitialPointerMove);
            document.addEventListener("touchend", onInitialPointerMove);
          }
          function removeInitialPointerMoveListeners() {
            document.removeEventListener("mousemove", onInitialPointerMove);
            document.removeEventListener("mousedown", onInitialPointerMove);
            document.removeEventListener("mouseup", onInitialPointerMove);
            document.removeEventListener("pointermove", onInitialPointerMove);
            document.removeEventListener("pointerdown", onInitialPointerMove);
            document.removeEventListener("pointerup", onInitialPointerMove);
            document.removeEventListener("touchmove", onInitialPointerMove);
            document.removeEventListener("touchstart", onInitialPointerMove);
            document.removeEventListener("touchend", onInitialPointerMove);
          }
          function onInitialPointerMove(e) {
            if (e.target.nodeName && e.target.nodeName.toLowerCase() === "html") {
              return;
            }
            hadKeyboardEvent = false;
            removeInitialPointerMoveListeners();
          }
          document.addEventListener("keydown", onKeyDown, true);
          document.addEventListener("mousedown", onPointerDown, true);
          document.addEventListener("pointerdown", onPointerDown, true);
          document.addEventListener("touchstart", onPointerDown, true);
          document.addEventListener("visibilitychange", onVisibilityChange, true);
          addInitialPointerMoveListeners();
          scope.addEventListener("focus", onFocus, true);
          scope.addEventListener("blur", onBlur, true);
        }
        function ready() {
          if (typeof document !== "undefined") {
            try {
              document.querySelector(":focus-visible");
            } catch (e) {
              applyFocusVisiblePolyfill(document);
            }
          }
        }
        return {
          ready
        };
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-focus.js
  var require_webflow_focus = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-focus.js"(exports, module) {
      var Webflow = require_webflow_lib();
      Webflow.define("focus", module.exports = function() {
        var capturedEvents = [];
        var capturing = false;
        function captureEvent(e) {
          if (capturing) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            capturedEvents.unshift(e);
          }
        }
        function isPolyfilledFocusEvent(e) {
          var el = e.target;
          var tag = el.tagName;
          return /^a$/i.test(tag) && el.href != null || // (A)
          /^(button|textarea)$/i.test(tag) && el.disabled !== true || // (B) (C)
          /^input$/i.test(tag) && /^(button|reset|submit|radio|checkbox)$/i.test(el.type) && !el.disabled || // (D)
          !/^(button|input|textarea|select|a)$/i.test(tag) && !Number.isNaN(Number.parseFloat(el.tabIndex)) || // (E)
          /^audio$/i.test(tag) || // (F)
          /^video$/i.test(tag) && el.controls === true;
        }
        function handler(e) {
          if (isPolyfilledFocusEvent(e)) {
            capturing = true;
            setTimeout(() => {
              capturing = false;
              e.target.focus();
              while (capturedEvents.length > 0) {
                var event = capturedEvents.pop();
                event.target.dispatchEvent(new MouseEvent(event.type, event));
              }
            }, 0);
          }
        }
        function ready() {
          if (typeof document !== "undefined" && document.body.hasAttribute("data-wf-focus-within") && Webflow.env.safari) {
            document.addEventListener("mousedown", handler, true);
            document.addEventListener("mouseup", captureEvent, true);
            document.addEventListener("click", captureEvent, true);
          }
        }
        return {
          ready
        };
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-ix-events.js
  var require_webflow_ix_events = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-ix-events.js"(exports, module) {
      "use strict";
      var $ = window.jQuery;
      var api = {};
      var eventQueue = [];
      var namespace = ".w-ix";
      var eventTriggers = {
        reset: function(i, el) {
          el.__wf_intro = null;
        },
        intro: function(i, el) {
          if (el.__wf_intro) {
            return;
          }
          el.__wf_intro = true;
          $(el).triggerHandler(api.types.INTRO);
        },
        outro: function(i, el) {
          if (!el.__wf_intro) {
            return;
          }
          el.__wf_intro = null;
          $(el).triggerHandler(api.types.OUTRO);
        }
      };
      api.triggers = {};
      api.types = {
        INTRO: "w-ix-intro" + namespace,
        OUTRO: "w-ix-outro" + namespace
      };
      api.init = function() {
        var count = eventQueue.length;
        for (var i = 0; i < count; i++) {
          var memo = eventQueue[i];
          memo[0](0, memo[1]);
        }
        eventQueue = [];
        $.extend(api.triggers, eventTriggers);
      };
      api.async = function() {
        for (var key in eventTriggers) {
          var func = eventTriggers[key];
          if (!eventTriggers.hasOwnProperty(key)) {
            continue;
          }
          api.triggers[key] = function(i, el) {
            eventQueue.push([func, el]);
          };
        }
      };
      api.async();
      module.exports = api;
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-ix2-events.js
  var require_webflow_ix2_events = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-ix2-events.js"(exports, module) {
      "use strict";
      var IXEvents = require_webflow_ix_events();
      function dispatchCustomEvent(element, eventName) {
        var event = document.createEvent("CustomEvent");
        event.initCustomEvent(eventName, true, true, null);
        element.dispatchEvent(event);
      }
      var $ = window.jQuery;
      var api = {};
      var namespace = ".w-ix";
      var eventTriggers = {
        reset: function(i, el) {
          IXEvents.triggers.reset(i, el);
        },
        intro: function(i, el) {
          IXEvents.triggers.intro(i, el);
          dispatchCustomEvent(el, "COMPONENT_ACTIVE");
        },
        outro: function(i, el) {
          IXEvents.triggers.outro(i, el);
          dispatchCustomEvent(el, "COMPONENT_INACTIVE");
        }
      };
      api.triggers = {};
      api.types = {
        INTRO: "w-ix-intro" + namespace,
        OUTRO: "w-ix-outro" + namespace
      };
      $.extend(api.triggers, eventTriggers);
      module.exports = api;
    }
  });

  // node_modules/@babel/runtime/helpers/typeof.js
  var require_typeof = __commonJS({
    "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
      function _typeof(obj) {
        "@babel/helpers - typeof";
        return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
          return typeof obj2;
        } : function(obj2) {
          return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(obj);
      }
      module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/interopRequireWildcard.js
  var require_interopRequireWildcard = __commonJS({
    "node_modules/@babel/runtime/helpers/interopRequireWildcard.js"(exports, module) {
      var _typeof = require_typeof()["default"];
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return {
            "default": obj
          };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj["default"] = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/interopRequireDefault.js
  var require_interopRequireDefault = __commonJS({
    "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/core-js/internals/global.js
  var require_global = __commonJS({
    "node_modules/core-js/internals/global.js"(exports, module) {
      var check = function(it) {
        return it && it.Math == Math && it;
      };
      module.exports = // eslint-disable-next-line es/no-global-this -- safe
      check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
      check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
      function() {
        return this;
      }() || Function("return this")();
    }
  });

  // node_modules/core-js/internals/fails.js
  var require_fails = __commonJS({
    "node_modules/core-js/internals/fails.js"(exports, module) {
      module.exports = function(exec) {
        try {
          return !!exec();
        } catch (error) {
          return true;
        }
      };
    }
  });

  // node_modules/core-js/internals/descriptors.js
  var require_descriptors = __commonJS({
    "node_modules/core-js/internals/descriptors.js"(exports, module) {
      var fails = require_fails();
      module.exports = !fails(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }
  });

  // node_modules/core-js/internals/function-call.js
  var require_function_call = __commonJS({
    "node_modules/core-js/internals/function-call.js"(exports, module) {
      var call = Function.prototype.call;
      module.exports = call.bind ? call.bind(call) : function() {
        return call.apply(call, arguments);
      };
    }
  });

  // node_modules/core-js/internals/object-property-is-enumerable.js
  var require_object_property_is_enumerable = __commonJS({
    "node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
      "use strict";
      var $propertyIsEnumerable = {}.propertyIsEnumerable;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
      exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      } : $propertyIsEnumerable;
    }
  });

  // node_modules/core-js/internals/create-property-descriptor.js
  var require_create_property_descriptor = __commonJS({
    "node_modules/core-js/internals/create-property-descriptor.js"(exports, module) {
      module.exports = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value
        };
      };
    }
  });

  // node_modules/core-js/internals/function-uncurry-this.js
  var require_function_uncurry_this = __commonJS({
    "node_modules/core-js/internals/function-uncurry-this.js"(exports, module) {
      var FunctionPrototype = Function.prototype;
      var bind = FunctionPrototype.bind;
      var call = FunctionPrototype.call;
      var callBind = bind && bind.bind(call);
      module.exports = bind ? function(fn) {
        return fn && callBind(call, fn);
      } : function(fn) {
        return fn && function() {
          return call.apply(fn, arguments);
        };
      };
    }
  });

  // node_modules/core-js/internals/classof-raw.js
  var require_classof_raw = __commonJS({
    "node_modules/core-js/internals/classof-raw.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var toString = uncurryThis({}.toString);
      var stringSlice = uncurryThis("".slice);
      module.exports = function(it) {
        return stringSlice(toString(it), 8, -1);
      };
    }
  });

  // node_modules/core-js/internals/indexed-object.js
  var require_indexed_object = __commonJS({
    "node_modules/core-js/internals/indexed-object.js"(exports, module) {
      var global2 = require_global();
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var classof = require_classof_raw();
      var Object2 = global2.Object;
      var split = uncurryThis("".split);
      module.exports = fails(function() {
        return !Object2("z").propertyIsEnumerable(0);
      }) ? function(it) {
        return classof(it) == "String" ? split(it, "") : Object2(it);
      } : Object2;
    }
  });

  // node_modules/core-js/internals/require-object-coercible.js
  var require_require_object_coercible = __commonJS({
    "node_modules/core-js/internals/require-object-coercible.js"(exports, module) {
      var global2 = require_global();
      var TypeError2 = global2.TypeError;
      module.exports = function(it) {
        if (it == void 0)
          throw TypeError2("Can't call method on " + it);
        return it;
      };
    }
  });

  // node_modules/core-js/internals/to-indexed-object.js
  var require_to_indexed_object = __commonJS({
    "node_modules/core-js/internals/to-indexed-object.js"(exports, module) {
      var IndexedObject = require_indexed_object();
      var requireObjectCoercible = require_require_object_coercible();
      module.exports = function(it) {
        return IndexedObject(requireObjectCoercible(it));
      };
    }
  });

  // node_modules/core-js/internals/is-callable.js
  var require_is_callable = __commonJS({
    "node_modules/core-js/internals/is-callable.js"(exports, module) {
      module.exports = function(argument) {
        return typeof argument == "function";
      };
    }
  });

  // node_modules/core-js/internals/is-object.js
  var require_is_object = __commonJS({
    "node_modules/core-js/internals/is-object.js"(exports, module) {
      var isCallable = require_is_callable();
      module.exports = function(it) {
        return typeof it == "object" ? it !== null : isCallable(it);
      };
    }
  });

  // node_modules/core-js/internals/get-built-in.js
  var require_get_built_in = __commonJS({
    "node_modules/core-js/internals/get-built-in.js"(exports, module) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var aFunction = function(argument) {
        return isCallable(argument) ? argument : void 0;
      };
      module.exports = function(namespace, method) {
        return arguments.length < 2 ? aFunction(global2[namespace]) : global2[namespace] && global2[namespace][method];
      };
    }
  });

  // node_modules/core-js/internals/object-is-prototype-of.js
  var require_object_is_prototype_of = __commonJS({
    "node_modules/core-js/internals/object-is-prototype-of.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      module.exports = uncurryThis({}.isPrototypeOf);
    }
  });

  // node_modules/core-js/internals/engine-user-agent.js
  var require_engine_user_agent = __commonJS({
    "node_modules/core-js/internals/engine-user-agent.js"(exports, module) {
      var getBuiltIn = require_get_built_in();
      module.exports = getBuiltIn("navigator", "userAgent") || "";
    }
  });

  // node_modules/core-js/internals/engine-v8-version.js
  var require_engine_v8_version = __commonJS({
    "node_modules/core-js/internals/engine-v8-version.js"(exports, module) {
      var global2 = require_global();
      var userAgent = require_engine_user_agent();
      var process2 = global2.process;
      var Deno = global2.Deno;
      var versions = process2 && process2.versions || Deno && Deno.version;
      var v8 = versions && versions.v8;
      var match;
      var version;
      if (v8) {
        match = v8.split(".");
        version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
      }
      if (!version && userAgent) {
        match = userAgent.match(/Edge\/(\d+)/);
        if (!match || match[1] >= 74) {
          match = userAgent.match(/Chrome\/(\d+)/);
          if (match)
            version = +match[1];
        }
      }
      module.exports = version;
    }
  });

  // node_modules/core-js/internals/native-symbol.js
  var require_native_symbol = __commonJS({
    "node_modules/core-js/internals/native-symbol.js"(exports, module) {
      var V8_VERSION = require_engine_v8_version();
      var fails = require_fails();
      module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
        var symbol = Symbol();
        return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
        !Symbol.sham && V8_VERSION && V8_VERSION < 41;
      });
    }
  });

  // node_modules/core-js/internals/use-symbol-as-uid.js
  var require_use_symbol_as_uid = __commonJS({
    "node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module) {
      var NATIVE_SYMBOL = require_native_symbol();
      module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }
  });

  // node_modules/core-js/internals/is-symbol.js
  var require_is_symbol = __commonJS({
    "node_modules/core-js/internals/is-symbol.js"(exports, module) {
      var global2 = require_global();
      var getBuiltIn = require_get_built_in();
      var isCallable = require_is_callable();
      var isPrototypeOf = require_object_is_prototype_of();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var Object2 = global2.Object;
      module.exports = USE_SYMBOL_AS_UID ? function(it) {
        return typeof it == "symbol";
      } : function(it) {
        var $Symbol = getBuiltIn("Symbol");
        return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object2(it));
      };
    }
  });

  // node_modules/core-js/internals/try-to-string.js
  var require_try_to_string = __commonJS({
    "node_modules/core-js/internals/try-to-string.js"(exports, module) {
      var global2 = require_global();
      var String2 = global2.String;
      module.exports = function(argument) {
        try {
          return String2(argument);
        } catch (error) {
          return "Object";
        }
      };
    }
  });

  // node_modules/core-js/internals/a-callable.js
  var require_a_callable = __commonJS({
    "node_modules/core-js/internals/a-callable.js"(exports, module) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var tryToString = require_try_to_string();
      var TypeError2 = global2.TypeError;
      module.exports = function(argument) {
        if (isCallable(argument))
          return argument;
        throw TypeError2(tryToString(argument) + " is not a function");
      };
    }
  });

  // node_modules/core-js/internals/get-method.js
  var require_get_method = __commonJS({
    "node_modules/core-js/internals/get-method.js"(exports, module) {
      var aCallable = require_a_callable();
      module.exports = function(V, P) {
        var func = V[P];
        return func == null ? void 0 : aCallable(func);
      };
    }
  });

  // node_modules/core-js/internals/ordinary-to-primitive.js
  var require_ordinary_to_primitive = __commonJS({
    "node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module) {
      var global2 = require_global();
      var call = require_function_call();
      var isCallable = require_is_callable();
      var isObject = require_is_object();
      var TypeError2 = global2.TypeError;
      module.exports = function(input, pref) {
        var fn, val;
        if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
          return val;
        if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input)))
          return val;
        if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
          return val;
        throw TypeError2("Can't convert object to primitive value");
      };
    }
  });

  // node_modules/core-js/internals/is-pure.js
  var require_is_pure = __commonJS({
    "node_modules/core-js/internals/is-pure.js"(exports, module) {
      module.exports = false;
    }
  });

  // node_modules/core-js/internals/set-global.js
  var require_set_global = __commonJS({
    "node_modules/core-js/internals/set-global.js"(exports, module) {
      var global2 = require_global();
      var defineProperty = Object.defineProperty;
      module.exports = function(key, value) {
        try {
          defineProperty(global2, key, { value, configurable: true, writable: true });
        } catch (error) {
          global2[key] = value;
        }
        return value;
      };
    }
  });

  // node_modules/core-js/internals/shared-store.js
  var require_shared_store = __commonJS({
    "node_modules/core-js/internals/shared-store.js"(exports, module) {
      var global2 = require_global();
      var setGlobal = require_set_global();
      var SHARED = "__core-js_shared__";
      var store = global2[SHARED] || setGlobal(SHARED, {});
      module.exports = store;
    }
  });

  // node_modules/core-js/internals/shared.js
  var require_shared = __commonJS({
    "node_modules/core-js/internals/shared.js"(exports, module) {
      var IS_PURE = require_is_pure();
      var store = require_shared_store();
      (module.exports = function(key, value) {
        return store[key] || (store[key] = value !== void 0 ? value : {});
      })("versions", []).push({
        version: "3.19.0",
        mode: IS_PURE ? "pure" : "global",
        copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
      });
    }
  });

  // node_modules/core-js/internals/to-object.js
  var require_to_object = __commonJS({
    "node_modules/core-js/internals/to-object.js"(exports, module) {
      var global2 = require_global();
      var requireObjectCoercible = require_require_object_coercible();
      var Object2 = global2.Object;
      module.exports = function(argument) {
        return Object2(requireObjectCoercible(argument));
      };
    }
  });

  // node_modules/core-js/internals/has-own-property.js
  var require_has_own_property = __commonJS({
    "node_modules/core-js/internals/has-own-property.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var toObject = require_to_object();
      var hasOwnProperty = uncurryThis({}.hasOwnProperty);
      module.exports = Object.hasOwn || function hasOwn(it, key) {
        return hasOwnProperty(toObject(it), key);
      };
    }
  });

  // node_modules/core-js/internals/uid.js
  var require_uid = __commonJS({
    "node_modules/core-js/internals/uid.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var id = 0;
      var postfix = Math.random();
      var toString = uncurryThis(1 .toString);
      module.exports = function(key) {
        return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
      };
    }
  });

  // node_modules/core-js/internals/well-known-symbol.js
  var require_well_known_symbol = __commonJS({
    "node_modules/core-js/internals/well-known-symbol.js"(exports, module) {
      var global2 = require_global();
      var shared = require_shared();
      var hasOwn = require_has_own_property();
      var uid = require_uid();
      var NATIVE_SYMBOL = require_native_symbol();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var WellKnownSymbolsStore = shared("wks");
      var Symbol2 = global2.Symbol;
      var symbolFor = Symbol2 && Symbol2["for"];
      var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
      module.exports = function(name) {
        if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
          var description = "Symbol." + name;
          if (NATIVE_SYMBOL && hasOwn(Symbol2, name)) {
            WellKnownSymbolsStore[name] = Symbol2[name];
          } else if (USE_SYMBOL_AS_UID && symbolFor) {
            WellKnownSymbolsStore[name] = symbolFor(description);
          } else {
            WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
          }
        }
        return WellKnownSymbolsStore[name];
      };
    }
  });

  // node_modules/core-js/internals/to-primitive.js
  var require_to_primitive = __commonJS({
    "node_modules/core-js/internals/to-primitive.js"(exports, module) {
      var global2 = require_global();
      var call = require_function_call();
      var isObject = require_is_object();
      var isSymbol = require_is_symbol();
      var getMethod = require_get_method();
      var ordinaryToPrimitive = require_ordinary_to_primitive();
      var wellKnownSymbol = require_well_known_symbol();
      var TypeError2 = global2.TypeError;
      var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
      module.exports = function(input, pref) {
        if (!isObject(input) || isSymbol(input))
          return input;
        var exoticToPrim = getMethod(input, TO_PRIMITIVE);
        var result;
        if (exoticToPrim) {
          if (pref === void 0)
            pref = "default";
          result = call(exoticToPrim, input, pref);
          if (!isObject(result) || isSymbol(result))
            return result;
          throw TypeError2("Can't convert object to primitive value");
        }
        if (pref === void 0)
          pref = "number";
        return ordinaryToPrimitive(input, pref);
      };
    }
  });

  // node_modules/core-js/internals/to-property-key.js
  var require_to_property_key = __commonJS({
    "node_modules/core-js/internals/to-property-key.js"(exports, module) {
      var toPrimitive = require_to_primitive();
      var isSymbol = require_is_symbol();
      module.exports = function(argument) {
        var key = toPrimitive(argument, "string");
        return isSymbol(key) ? key : key + "";
      };
    }
  });

  // node_modules/core-js/internals/document-create-element.js
  var require_document_create_element = __commonJS({
    "node_modules/core-js/internals/document-create-element.js"(exports, module) {
      var global2 = require_global();
      var isObject = require_is_object();
      var document2 = global2.document;
      var EXISTS = isObject(document2) && isObject(document2.createElement);
      module.exports = function(it) {
        return EXISTS ? document2.createElement(it) : {};
      };
    }
  });

  // node_modules/core-js/internals/ie8-dom-define.js
  var require_ie8_dom_define = __commonJS({
    "node_modules/core-js/internals/ie8-dom-define.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      var createElement = require_document_create_element();
      module.exports = !DESCRIPTORS && !fails(function() {
        return Object.defineProperty(createElement("div"), "a", {
          get: function() {
            return 7;
          }
        }).a != 7;
      });
    }
  });

  // node_modules/core-js/internals/object-get-own-property-descriptor.js
  var require_object_get_own_property_descriptor = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
      var DESCRIPTORS = require_descriptors();
      var call = require_function_call();
      var propertyIsEnumerableModule = require_object_property_is_enumerable();
      var createPropertyDescriptor = require_create_property_descriptor();
      var toIndexedObject = require_to_indexed_object();
      var toPropertyKey = require_to_property_key();
      var hasOwn = require_has_own_property();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPropertyKey(P);
        if (IE8_DOM_DEFINE)
          try {
            return $getOwnPropertyDescriptor(O, P);
          } catch (error) {
          }
        if (hasOwn(O, P))
          return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
      };
    }
  });

  // node_modules/core-js/internals/an-object.js
  var require_an_object = __commonJS({
    "node_modules/core-js/internals/an-object.js"(exports, module) {
      var global2 = require_global();
      var isObject = require_is_object();
      var String2 = global2.String;
      var TypeError2 = global2.TypeError;
      module.exports = function(argument) {
        if (isObject(argument))
          return argument;
        throw TypeError2(String2(argument) + " is not an object");
      };
    }
  });

  // node_modules/core-js/internals/object-define-property.js
  var require_object_define_property = __commonJS({
    "node_modules/core-js/internals/object-define-property.js"(exports) {
      var global2 = require_global();
      var DESCRIPTORS = require_descriptors();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var anObject = require_an_object();
      var toPropertyKey = require_to_property_key();
      var TypeError2 = global2.TypeError;
      var $defineProperty = Object.defineProperty;
      exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPropertyKey(P);
        anObject(Attributes);
        if (IE8_DOM_DEFINE)
          try {
            return $defineProperty(O, P, Attributes);
          } catch (error) {
          }
        if ("get" in Attributes || "set" in Attributes)
          throw TypeError2("Accessors not supported");
        if ("value" in Attributes)
          O[P] = Attributes.value;
        return O;
      };
    }
  });

  // node_modules/core-js/internals/create-non-enumerable-property.js
  var require_create_non_enumerable_property = __commonJS({
    "node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module.exports = DESCRIPTORS ? function(object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
      } : function(object, key, value) {
        object[key] = value;
        return object;
      };
    }
  });

  // node_modules/core-js/internals/inspect-source.js
  var require_inspect_source = __commonJS({
    "node_modules/core-js/internals/inspect-source.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var isCallable = require_is_callable();
      var store = require_shared_store();
      var functionToString = uncurryThis(Function.toString);
      if (!isCallable(store.inspectSource)) {
        store.inspectSource = function(it) {
          return functionToString(it);
        };
      }
      module.exports = store.inspectSource;
    }
  });

  // node_modules/core-js/internals/native-weak-map.js
  var require_native_weak_map = __commonJS({
    "node_modules/core-js/internals/native-weak-map.js"(exports, module) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var inspectSource = require_inspect_source();
      var WeakMap2 = global2.WeakMap;
      module.exports = isCallable(WeakMap2) && /native code/.test(inspectSource(WeakMap2));
    }
  });

  // node_modules/core-js/internals/shared-key.js
  var require_shared_key = __commonJS({
    "node_modules/core-js/internals/shared-key.js"(exports, module) {
      var shared = require_shared();
      var uid = require_uid();
      var keys = shared("keys");
      module.exports = function(key) {
        return keys[key] || (keys[key] = uid(key));
      };
    }
  });

  // node_modules/core-js/internals/hidden-keys.js
  var require_hidden_keys = __commonJS({
    "node_modules/core-js/internals/hidden-keys.js"(exports, module) {
      module.exports = {};
    }
  });

  // node_modules/core-js/internals/internal-state.js
  var require_internal_state = __commonJS({
    "node_modules/core-js/internals/internal-state.js"(exports, module) {
      var NATIVE_WEAK_MAP = require_native_weak_map();
      var global2 = require_global();
      var uncurryThis = require_function_uncurry_this();
      var isObject = require_is_object();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var hasOwn = require_has_own_property();
      var shared = require_shared_store();
      var sharedKey = require_shared_key();
      var hiddenKeys = require_hidden_keys();
      var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
      var TypeError2 = global2.TypeError;
      var WeakMap2 = global2.WeakMap;
      var set;
      var get;
      var has;
      var enforce = function(it) {
        return has(it) ? get(it) : set(it, {});
      };
      var getterFor = function(TYPE) {
        return function(it) {
          var state;
          if (!isObject(it) || (state = get(it)).type !== TYPE) {
            throw TypeError2("Incompatible receiver, " + TYPE + " required");
          }
          return state;
        };
      };
      if (NATIVE_WEAK_MAP || shared.state) {
        store = shared.state || (shared.state = new WeakMap2());
        wmget = uncurryThis(store.get);
        wmhas = uncurryThis(store.has);
        wmset = uncurryThis(store.set);
        set = function(it, metadata) {
          if (wmhas(store, it))
            throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          wmset(store, it, metadata);
          return metadata;
        };
        get = function(it) {
          return wmget(store, it) || {};
        };
        has = function(it) {
          return wmhas(store, it);
        };
      } else {
        STATE = sharedKey("state");
        hiddenKeys[STATE] = true;
        set = function(it, metadata) {
          if (hasOwn(it, STATE))
            throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          createNonEnumerableProperty(it, STATE, metadata);
          return metadata;
        };
        get = function(it) {
          return hasOwn(it, STATE) ? it[STATE] : {};
        };
        has = function(it) {
          return hasOwn(it, STATE);
        };
      }
      var store;
      var wmget;
      var wmhas;
      var wmset;
      var STATE;
      module.exports = {
        set,
        get,
        has,
        enforce,
        getterFor
      };
    }
  });

  // node_modules/core-js/internals/function-name.js
  var require_function_name = __commonJS({
    "node_modules/core-js/internals/function-name.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var hasOwn = require_has_own_property();
      var FunctionPrototype = Function.prototype;
      var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
      var EXISTS = hasOwn(FunctionPrototype, "name");
      var PROPER = EXISTS && function something() {
      }.name === "something";
      var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
      module.exports = {
        EXISTS,
        PROPER,
        CONFIGURABLE
      };
    }
  });

  // node_modules/core-js/internals/redefine.js
  var require_redefine = __commonJS({
    "node_modules/core-js/internals/redefine.js"(exports, module) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var hasOwn = require_has_own_property();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var setGlobal = require_set_global();
      var inspectSource = require_inspect_source();
      var InternalStateModule = require_internal_state();
      var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
      var getInternalState = InternalStateModule.get;
      var enforceInternalState = InternalStateModule.enforce;
      var TEMPLATE = String(String).split("String");
      (module.exports = function(O, key, value, options) {
        var unsafe = options ? !!options.unsafe : false;
        var simple = options ? !!options.enumerable : false;
        var noTargetGet = options ? !!options.noTargetGet : false;
        var name = options && options.name !== void 0 ? options.name : key;
        var state;
        if (isCallable(value)) {
          if (String(name).slice(0, 7) === "Symbol(") {
            name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
          }
          if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
            createNonEnumerableProperty(value, "name", name);
          }
          state = enforceInternalState(value);
          if (!state.source) {
            state.source = TEMPLATE.join(typeof name == "string" ? name : "");
          }
        }
        if (O === global2) {
          if (simple)
            O[key] = value;
          else
            setGlobal(key, value);
          return;
        } else if (!unsafe) {
          delete O[key];
        } else if (!noTargetGet && O[key]) {
          simple = true;
        }
        if (simple)
          O[key] = value;
        else
          createNonEnumerableProperty(O, key, value);
      })(Function.prototype, "toString", function toString() {
        return isCallable(this) && getInternalState(this).source || inspectSource(this);
      });
    }
  });

  // node_modules/core-js/internals/to-integer-or-infinity.js
  var require_to_integer_or_infinity = __commonJS({
    "node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module) {
      var ceil = Math.ceil;
      var floor = Math.floor;
      module.exports = function(argument) {
        var number = +argument;
        return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
      };
    }
  });

  // node_modules/core-js/internals/to-absolute-index.js
  var require_to_absolute_index = __commonJS({
    "node_modules/core-js/internals/to-absolute-index.js"(exports, module) {
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var max = Math.max;
      var min = Math.min;
      module.exports = function(index, length) {
        var integer = toIntegerOrInfinity(index);
        return integer < 0 ? max(integer + length, 0) : min(integer, length);
      };
    }
  });

  // node_modules/core-js/internals/to-length.js
  var require_to_length = __commonJS({
    "node_modules/core-js/internals/to-length.js"(exports, module) {
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var min = Math.min;
      module.exports = function(argument) {
        return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
      };
    }
  });

  // node_modules/core-js/internals/length-of-array-like.js
  var require_length_of_array_like = __commonJS({
    "node_modules/core-js/internals/length-of-array-like.js"(exports, module) {
      var toLength = require_to_length();
      module.exports = function(obj) {
        return toLength(obj.length);
      };
    }
  });

  // node_modules/core-js/internals/array-includes.js
  var require_array_includes = __commonJS({
    "node_modules/core-js/internals/array-includes.js"(exports, module) {
      var toIndexedObject = require_to_indexed_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var lengthOfArrayLike = require_length_of_array_like();
      var createMethod = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
          var O = toIndexedObject($this);
          var length = lengthOfArrayLike(O);
          var index = toAbsoluteIndex(fromIndex, length);
          var value;
          if (IS_INCLUDES && el != el)
            while (length > index) {
              value = O[index++];
              if (value != value)
                return true;
            }
          else
            for (; length > index; index++) {
              if ((IS_INCLUDES || index in O) && O[index] === el)
                return IS_INCLUDES || index || 0;
            }
          return !IS_INCLUDES && -1;
        };
      };
      module.exports = {
        // `Array.prototype.includes` method
        // https://tc39.es/ecma262/#sec-array.prototype.includes
        includes: createMethod(true),
        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod(false)
      };
    }
  });

  // node_modules/core-js/internals/object-keys-internal.js
  var require_object_keys_internal = __commonJS({
    "node_modules/core-js/internals/object-keys-internal.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var hasOwn = require_has_own_property();
      var toIndexedObject = require_to_indexed_object();
      var indexOf = require_array_includes().indexOf;
      var hiddenKeys = require_hidden_keys();
      var push = uncurryThis([].push);
      module.exports = function(object, names) {
        var O = toIndexedObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O)
          !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
        while (names.length > i)
          if (hasOwn(O, key = names[i++])) {
            ~indexOf(result, key) || push(result, key);
          }
        return result;
      };
    }
  });

  // node_modules/core-js/internals/enum-bug-keys.js
  var require_enum_bug_keys = __commonJS({
    "node_modules/core-js/internals/enum-bug-keys.js"(exports, module) {
      module.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ];
    }
  });

  // node_modules/core-js/internals/object-get-own-property-names.js
  var require_object_get_own_property_names = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = enumBugKeys.concat("length", "prototype");
      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return internalObjectKeys(O, hiddenKeys);
      };
    }
  });

  // node_modules/core-js/internals/object-get-own-property-symbols.js
  var require_object_get_own_property_symbols = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
      exports.f = Object.getOwnPropertySymbols;
    }
  });

  // node_modules/core-js/internals/own-keys.js
  var require_own_keys = __commonJS({
    "node_modules/core-js/internals/own-keys.js"(exports, module) {
      var getBuiltIn = require_get_built_in();
      var uncurryThis = require_function_uncurry_this();
      var getOwnPropertyNamesModule = require_object_get_own_property_names();
      var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
      var anObject = require_an_object();
      var concat = uncurryThis([].concat);
      module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
        var keys = getOwnPropertyNamesModule.f(anObject(it));
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
      };
    }
  });

  // node_modules/core-js/internals/copy-constructor-properties.js
  var require_copy_constructor_properties = __commonJS({
    "node_modules/core-js/internals/copy-constructor-properties.js"(exports, module) {
      var hasOwn = require_has_own_property();
      var ownKeys = require_own_keys();
      var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
      var definePropertyModule = require_object_define_property();
      module.exports = function(target, source) {
        var keys = ownKeys(source);
        var defineProperty = definePropertyModule.f;
        var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (!hasOwn(target, key))
            defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      };
    }
  });

  // node_modules/core-js/internals/is-forced.js
  var require_is_forced = __commonJS({
    "node_modules/core-js/internals/is-forced.js"(exports, module) {
      var fails = require_fails();
      var isCallable = require_is_callable();
      var replacement = /#|\.prototype\./;
      var isForced = function(feature, detection) {
        var value = data[normalize(feature)];
        return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
      };
      var normalize = isForced.normalize = function(string) {
        return String(string).replace(replacement, ".").toLowerCase();
      };
      var data = isForced.data = {};
      var NATIVE = isForced.NATIVE = "N";
      var POLYFILL = isForced.POLYFILL = "P";
      module.exports = isForced;
    }
  });

  // node_modules/core-js/internals/export.js
  var require_export = __commonJS({
    "node_modules/core-js/internals/export.js"(exports, module) {
      var global2 = require_global();
      var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var redefine = require_redefine();
      var setGlobal = require_set_global();
      var copyConstructorProperties = require_copy_constructor_properties();
      var isForced = require_is_forced();
      module.exports = function(options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var FORCED, target, key, targetProperty, sourceProperty, descriptor;
        if (GLOBAL) {
          target = global2;
        } else if (STATIC) {
          target = global2[TARGET] || setGlobal(TARGET, {});
        } else {
          target = (global2[TARGET] || {}).prototype;
        }
        if (target)
          for (key in source) {
            sourceProperty = source[key];
            if (options.noTargetGet) {
              descriptor = getOwnPropertyDescriptor(target, key);
              targetProperty = descriptor && descriptor.value;
            } else
              targetProperty = target[key];
            FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
            if (!FORCED && targetProperty !== void 0) {
              if (typeof sourceProperty == typeof targetProperty)
                continue;
              copyConstructorProperties(sourceProperty, targetProperty);
            }
            if (options.sham || targetProperty && targetProperty.sham) {
              createNonEnumerableProperty(sourceProperty, "sham", true);
            }
            redefine(target, key, sourceProperty, options);
          }
      };
    }
  });

  // node_modules/core-js/internals/object-keys.js
  var require_object_keys = __commonJS({
    "node_modules/core-js/internals/object-keys.js"(exports, module) {
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      module.exports = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys);
      };
    }
  });

  // node_modules/core-js/internals/object-define-properties.js
  var require_object_define_properties = __commonJS({
    "node_modules/core-js/internals/object-define-properties.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var anObject = require_an_object();
      var toIndexedObject = require_to_indexed_object();
      var objectKeys = require_object_keys();
      module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var props = toIndexedObject(Properties);
        var keys = objectKeys(Properties);
        var length = keys.length;
        var index = 0;
        var key;
        while (length > index)
          definePropertyModule.f(O, key = keys[index++], props[key]);
        return O;
      };
    }
  });

  // node_modules/core-js/internals/html.js
  var require_html = __commonJS({
    "node_modules/core-js/internals/html.js"(exports, module) {
      var getBuiltIn = require_get_built_in();
      module.exports = getBuiltIn("document", "documentElement");
    }
  });

  // node_modules/core-js/internals/object-create.js
  var require_object_create = __commonJS({
    "node_modules/core-js/internals/object-create.js"(exports, module) {
      var anObject = require_an_object();
      var defineProperties = require_object_define_properties();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = require_hidden_keys();
      var html = require_html();
      var documentCreateElement = require_document_create_element();
      var sharedKey = require_shared_key();
      var GT = ">";
      var LT = "<";
      var PROTOTYPE = "prototype";
      var SCRIPT = "script";
      var IE_PROTO = sharedKey("IE_PROTO");
      var EmptyConstructor = function() {
      };
      var scriptTag = function(content) {
        return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
      };
      var NullProtoObjectViaActiveX = function(activeXDocument2) {
        activeXDocument2.write(scriptTag(""));
        activeXDocument2.close();
        var temp = activeXDocument2.parentWindow.Object;
        activeXDocument2 = null;
        return temp;
      };
      var NullProtoObjectViaIFrame = function() {
        var iframe = documentCreateElement("iframe");
        var JS = "java" + SCRIPT + ":";
        var iframeDocument;
        iframe.style.display = "none";
        html.appendChild(iframe);
        iframe.src = String(JS);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(scriptTag("document.F=Object"));
        iframeDocument.close();
        return iframeDocument.F;
      };
      var activeXDocument;
      var NullProtoObject = function() {
        try {
          activeXDocument = new ActiveXObject("htmlfile");
        } catch (error) {
        }
        NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
        var length = enumBugKeys.length;
        while (length--)
          delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
        return NullProtoObject();
      };
      hiddenKeys[IE_PROTO] = true;
      module.exports = Object.create || function create(O, Properties) {
        var result;
        if (O !== null) {
          EmptyConstructor[PROTOTYPE] = anObject(O);
          result = new EmptyConstructor();
          EmptyConstructor[PROTOTYPE] = null;
          result[IE_PROTO] = O;
        } else
          result = NullProtoObject();
        return Properties === void 0 ? result : defineProperties(result, Properties);
      };
    }
  });

  // node_modules/core-js/internals/add-to-unscopables.js
  var require_add_to_unscopables = __commonJS({
    "node_modules/core-js/internals/add-to-unscopables.js"(exports, module) {
      var wellKnownSymbol = require_well_known_symbol();
      var create = require_object_create();
      var definePropertyModule = require_object_define_property();
      var UNSCOPABLES = wellKnownSymbol("unscopables");
      var ArrayPrototype = Array.prototype;
      if (ArrayPrototype[UNSCOPABLES] == void 0) {
        definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
          configurable: true,
          value: create(null)
        });
      }
      module.exports = function(key) {
        ArrayPrototype[UNSCOPABLES][key] = true;
      };
    }
  });

  // node_modules/core-js/modules/es.array.includes.js
  var require_es_array_includes = __commonJS({
    "node_modules/core-js/modules/es.array.includes.js"() {
      "use strict";
      var $ = require_export();
      var $includes = require_array_includes().includes;
      var addToUnscopables = require_add_to_unscopables();
      $({ target: "Array", proto: true }, {
        includes: function includes(el) {
          return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      addToUnscopables("includes");
    }
  });

  // node_modules/core-js/internals/entry-unbind.js
  var require_entry_unbind = __commonJS({
    "node_modules/core-js/internals/entry-unbind.js"(exports, module) {
      var global2 = require_global();
      var uncurryThis = require_function_uncurry_this();
      module.exports = function(CONSTRUCTOR, METHOD) {
        return uncurryThis(global2[CONSTRUCTOR].prototype[METHOD]);
      };
    }
  });

  // node_modules/core-js/es/array/includes.js
  var require_includes = __commonJS({
    "node_modules/core-js/es/array/includes.js"(exports, module) {
      require_es_array_includes();
      var entryUnbind = require_entry_unbind();
      module.exports = entryUnbind("Array", "includes");
    }
  });

  // node_modules/core-js/stable/array/includes.js
  var require_includes2 = __commonJS({
    "node_modules/core-js/stable/array/includes.js"(exports, module) {
      var parent = require_includes();
      module.exports = parent;
    }
  });

  // node_modules/core-js/features/array/includes.js
  var require_includes3 = __commonJS({
    "node_modules/core-js/features/array/includes.js"(exports, module) {
      var parent = require_includes2();
      module.exports = parent;
    }
  });

  // node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "node_modules/lodash/_freeGlobal.js"(exports, module) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    }
  });

  // node_modules/lodash/_root.js
  var require_root = __commonJS({
    "node_modules/lodash/_root.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    }
  });

  // node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "node_modules/lodash/_Symbol.js"(exports, module) {
      var root = require_root();
      var Symbol2 = root.Symbol;
      module.exports = Symbol2;
    }
  });

  // node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "node_modules/lodash/_getRawTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    }
  });

  // node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "node_modules/lodash/_objectToString.js"(exports, module) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    }
  });

  // node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "node_modules/lodash/_baseGetTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    }
  });

  // node_modules/lodash/_overArg.js
  var require_overArg = __commonJS({
    "node_modules/lodash/_overArg.js"(exports, module) {
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      module.exports = overArg;
    }
  });

  // node_modules/lodash/_getPrototype.js
  var require_getPrototype = __commonJS({
    "node_modules/lodash/_getPrototype.js"(exports, module) {
      var overArg = require_overArg();
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      module.exports = getPrototype;
    }
  });

  // node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "node_modules/lodash/isObjectLike.js"(exports, module) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    }
  });

  // node_modules/lodash/isPlainObject.js
  var require_isPlainObject = __commonJS({
    "node_modules/lodash/isPlainObject.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var getPrototype = require_getPrototype();
      var isObjectLike = require_isObjectLike();
      var objectTag = "[object Object]";
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var objectCtorString = funcToString.call(Object);
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      module.exports = isPlainObject;
    }
  });

  // node_modules/symbol-observable/lib/ponyfill.js
  var require_ponyfill = __commonJS({
    "node_modules/symbol-observable/lib/ponyfill.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = symbolObservablePonyfill;
      function symbolObservablePonyfill(root) {
        var result;
        var _Symbol = root.Symbol;
        if (typeof _Symbol === "function") {
          if (_Symbol.observable) {
            result = _Symbol.observable;
          } else {
            result = _Symbol("observable");
            _Symbol.observable = result;
          }
        } else {
          result = "@@observable";
        }
        return result;
      }
    }
  });

  // node_modules/symbol-observable/lib/index.js
  var require_lib = __commonJS({
    "node_modules/symbol-observable/lib/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _ponyfill = require_ponyfill();
      var _ponyfill2 = _interopRequireDefault(_ponyfill);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var root;
      if (typeof self !== "undefined") {
        root = self;
      } else if (typeof window !== "undefined") {
        root = window;
      } else if (typeof global !== "undefined") {
        root = global;
      } else if (typeof module !== "undefined") {
        root = module;
      } else {
        root = Function("return this")();
      }
      var result = (0, _ponyfill2["default"])(root);
      exports["default"] = result;
    }
  });

  // node_modules/redux/lib/createStore.js
  var require_createStore = __commonJS({
    "node_modules/redux/lib/createStore.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.ActionTypes = void 0;
      exports["default"] = createStore;
      var _isPlainObject = require_isPlainObject();
      var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
      var _symbolObservable = require_lib();
      var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var ActionTypes = exports.ActionTypes = {
        INIT: "@@redux/INIT"
      };
      function createStore(reducer, preloadedState, enhancer) {
        var _ref2;
        if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
          enhancer = preloadedState;
          preloadedState = void 0;
        }
        if (typeof enhancer !== "undefined") {
          if (typeof enhancer !== "function") {
            throw new Error("Expected the enhancer to be a function.");
          }
          return enhancer(createStore)(reducer, preloadedState);
        }
        if (typeof reducer !== "function") {
          throw new Error("Expected the reducer to be a function.");
        }
        var currentReducer = reducer;
        var currentState = preloadedState;
        var currentListeners = [];
        var nextListeners = currentListeners;
        var isDispatching = false;
        function ensureCanMutateNextListeners() {
          if (nextListeners === currentListeners) {
            nextListeners = currentListeners.slice();
          }
        }
        function getState() {
          return currentState;
        }
        function subscribe(listener) {
          if (typeof listener !== "function") {
            throw new Error("Expected listener to be a function.");
          }
          var isSubscribed = true;
          ensureCanMutateNextListeners();
          nextListeners.push(listener);
          return function unsubscribe() {
            if (!isSubscribed) {
              return;
            }
            isSubscribed = false;
            ensureCanMutateNextListeners();
            var index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
          };
        }
        function dispatch(action) {
          if (!(0, _isPlainObject2["default"])(action)) {
            throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
          }
          if (typeof action.type === "undefined") {
            throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
          }
          if (isDispatching) {
            throw new Error("Reducers may not dispatch actions.");
          }
          try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
          } finally {
            isDispatching = false;
          }
          var listeners = currentListeners = nextListeners;
          for (var i = 0; i < listeners.length; i++) {
            listeners[i]();
          }
          return action;
        }
        function replaceReducer(nextReducer) {
          if (typeof nextReducer !== "function") {
            throw new Error("Expected the nextReducer to be a function.");
          }
          currentReducer = nextReducer;
          dispatch({ type: ActionTypes.INIT });
        }
        function observable() {
          var _ref;
          var outerSubscribe = subscribe;
          return _ref = {
            /**
             * The minimal observable subscription method.
             * @param {Object} observer Any object that can be used as an observer.
             * The observer object should have a `next` method.
             * @returns {subscription} An object with an `unsubscribe` method that can
             * be used to unsubscribe the observable from the store, and prevent further
             * emission of values from the observable.
             */
            subscribe: function subscribe2(observer) {
              if (typeof observer !== "object") {
                throw new TypeError("Expected the observer to be an object.");
              }
              function observeState() {
                if (observer.next) {
                  observer.next(getState());
                }
              }
              observeState();
              var unsubscribe = outerSubscribe(observeState);
              return { unsubscribe };
            }
          }, _ref[_symbolObservable2["default"]] = function() {
            return this;
          }, _ref;
        }
        dispatch({ type: ActionTypes.INIT });
        return _ref2 = {
          dispatch,
          subscribe,
          getState,
          replaceReducer
        }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
      }
    }
  });

  // node_modules/redux/lib/utils/warning.js
  var require_warning = __commonJS({
    "node_modules/redux/lib/utils/warning.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = warning;
      function warning(message) {
        if (typeof console !== "undefined" && typeof console.error === "function") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (e) {
        }
      }
    }
  });

  // node_modules/redux/lib/combineReducers.js
  var require_combineReducers = __commonJS({
    "node_modules/redux/lib/combineReducers.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = combineReducers;
      var _createStore = require_createStore();
      var _isPlainObject = require_isPlainObject();
      var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
      var _warning = require_warning();
      var _warning2 = _interopRequireDefault(_warning);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function getUndefinedStateErrorMessage(key, action) {
        var actionType = action && action.type;
        var actionName = actionType && '"' + actionType.toString() + '"' || "an action";
        return "Given action " + actionName + ', reducer "' + key + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
      }
      function assertReducerSanity(reducers) {
        Object.keys(reducers).forEach(function(key) {
          var reducer = reducers[key];
          var initialState = reducer(void 0, { type: _createStore.ActionTypes.INIT });
          if (typeof initialState === "undefined") {
            throw new Error('Reducer "' + key + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
          }
          var type = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
          if (typeof reducer(void 0, { type }) === "undefined") {
            throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.");
          }
        });
      }
      function combineReducers(reducers) {
        var reducerKeys = Object.keys(reducers);
        var finalReducers = {};
        for (var i = 0; i < reducerKeys.length; i++) {
          var key = reducerKeys[i];
          if (false) {
            if (typeof reducers[key] === "undefined") {
              (0, _warning2["default"])('No reducer provided for key "' + key + '"');
            }
          }
          if (typeof reducers[key] === "function") {
            finalReducers[key] = reducers[key];
          }
        }
        var finalReducerKeys = Object.keys(finalReducers);
        if (false) {
          var unexpectedKeyCache = {};
        }
        var sanityError;
        try {
          assertReducerSanity(finalReducers);
        } catch (e) {
          sanityError = e;
        }
        return function combination() {
          var state = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
          var action = arguments[1];
          if (sanityError) {
            throw sanityError;
          }
          if (false) {
            var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
            if (warningMessage) {
              (0, _warning2["default"])(warningMessage);
            }
          }
          var hasChanged = false;
          var nextState = {};
          for (var i2 = 0; i2 < finalReducerKeys.length; i2++) {
            var key2 = finalReducerKeys[i2];
            var reducer = finalReducers[key2];
            var previousStateForKey = state[key2];
            var nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === "undefined") {
              var errorMessage = getUndefinedStateErrorMessage(key2, action);
              throw new Error(errorMessage);
            }
            nextState[key2] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
          }
          return hasChanged ? nextState : state;
        };
      }
    }
  });

  // node_modules/redux/lib/bindActionCreators.js
  var require_bindActionCreators = __commonJS({
    "node_modules/redux/lib/bindActionCreators.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = bindActionCreators;
      function bindActionCreator(actionCreator, dispatch) {
        return function() {
          return dispatch(actionCreator.apply(void 0, arguments));
        };
      }
      function bindActionCreators(actionCreators, dispatch) {
        if (typeof actionCreators === "function") {
          return bindActionCreator(actionCreators, dispatch);
        }
        if (typeof actionCreators !== "object" || actionCreators === null) {
          throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? "null" : typeof actionCreators) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        }
        var keys = Object.keys(actionCreators);
        var boundActionCreators = {};
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var actionCreator = actionCreators[key];
          if (typeof actionCreator === "function") {
            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
          }
        }
        return boundActionCreators;
      }
    }
  });

  // node_modules/redux/lib/compose.js
  var require_compose = __commonJS({
    "node_modules/redux/lib/compose.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = compose;
      function compose() {
        for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
          funcs[_key] = arguments[_key];
        }
        if (funcs.length === 0) {
          return function(arg) {
            return arg;
          };
        }
        if (funcs.length === 1) {
          return funcs[0];
        }
        var last = funcs[funcs.length - 1];
        var rest = funcs.slice(0, -1);
        return function() {
          return rest.reduceRight(function(composed, f) {
            return f(composed);
          }, last.apply(void 0, arguments));
        };
      }
    }
  });

  // node_modules/redux/lib/applyMiddleware.js
  var require_applyMiddleware = __commonJS({
    "node_modules/redux/lib/applyMiddleware.js"(exports) {
      "use strict";
      exports.__esModule = true;
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      exports["default"] = applyMiddleware;
      var _compose = require_compose();
      var _compose2 = _interopRequireDefault(_compose);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function applyMiddleware() {
        for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
          middlewares[_key] = arguments[_key];
        }
        return function(createStore) {
          return function(reducer, preloadedState, enhancer) {
            var store = createStore(reducer, preloadedState, enhancer);
            var _dispatch = store.dispatch;
            var chain = [];
            var middlewareAPI = {
              getState: store.getState,
              dispatch: function dispatch(action) {
                return _dispatch(action);
              }
            };
            chain = middlewares.map(function(middleware) {
              return middleware(middlewareAPI);
            });
            _dispatch = _compose2["default"].apply(void 0, chain)(store.dispatch);
            return _extends({}, store, {
              dispatch: _dispatch
            });
          };
        };
      }
    }
  });

  // node_modules/redux/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/redux/lib/index.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = void 0;
      var _createStore = require_createStore();
      var _createStore2 = _interopRequireDefault(_createStore);
      var _combineReducers = require_combineReducers();
      var _combineReducers2 = _interopRequireDefault(_combineReducers);
      var _bindActionCreators = require_bindActionCreators();
      var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
      var _applyMiddleware = require_applyMiddleware();
      var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
      var _compose = require_compose();
      var _compose2 = _interopRequireDefault(_compose);
      var _warning = require_warning();
      var _warning2 = _interopRequireDefault(_warning);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      if (false) {
        (0, _warning2["default"])("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build.");
      }
      exports.createStore = _createStore2["default"];
      exports.combineReducers = _combineReducers2["default"];
      exports.bindActionCreators = _bindActionCreators2["default"];
      exports.applyMiddleware = _applyMiddleware2["default"];
      exports.compose = _compose2["default"];
    }
  });

  // packages/systems/ix2/shared/constants/trigger-events.js
  var require_trigger_events = __commonJS({
    "packages/systems/ix2/shared/constants/trigger-events.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.QuickEffectIds = exports.QuickEffectDirectionConsts = exports.EventTypeConsts = exports.EventLimitAffectedElements = exports.EventContinuousMouseAxes = exports.EventBasedOn = exports.EventAppliesTo = void 0;
      var EventTypeConsts = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL"
      };
      exports.EventTypeConsts = EventTypeConsts;
      var EventAppliesTo = {
        ELEMENT: "ELEMENT",
        CLASS: "CLASS",
        PAGE: "PAGE"
      };
      exports.EventAppliesTo = EventAppliesTo;
      var EventBasedOn = {
        ELEMENT: "ELEMENT",
        VIEWPORT: "VIEWPORT"
      };
      exports.EventBasedOn = EventBasedOn;
      var EventContinuousMouseAxes = {
        X_AXIS: "X_AXIS",
        Y_AXIS: "Y_AXIS"
      };
      exports.EventContinuousMouseAxes = EventContinuousMouseAxes;
      var EventLimitAffectedElements = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
      };
      exports.EventLimitAffectedElements = EventLimitAffectedElements;
      var QuickEffectIds = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
      };
      exports.QuickEffectIds = QuickEffectIds;
      var QuickEffectDirectionConsts = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
      };
      exports.QuickEffectDirectionConsts = QuickEffectDirectionConsts;
    }
  });

  // packages/systems/ix2/shared/constants/animation-actions.js
  var require_animation_actions = __commonJS({
    "packages/systems/ix2/shared/constants/animation-actions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ActionTypeConsts = exports.ActionAppliesTo = void 0;
      var ActionTypeConsts = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        // TODO: Clean these up below because they're not used at this time
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
      };
      exports.ActionTypeConsts = ActionTypeConsts;
      var ActionAppliesTo = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
      };
      exports.ActionAppliesTo = ActionAppliesTo;
    }
  });

  // packages/systems/ix2/shared/constants/trigger-interactions.js
  var require_trigger_interactions = __commonJS({
    "packages/systems/ix2/shared/constants/trigger-interactions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.InteractionTypeConsts = void 0;
      var InteractionTypeConsts = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION"
      };
      exports.InteractionTypeConsts = InteractionTypeConsts;
    }
  });

  // packages/systems/ix2/shared/constants/reduced-motion.js
  var require_reduced_motion = __commonJS({
    "packages/systems/ix2/shared/constants/reduced-motion.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ReducedMotionTypes = void 0;
      var _animationActions = require_animation_actions();
      var {
        TRANSFORM_MOVE,
        TRANSFORM_SCALE,
        TRANSFORM_ROTATE,
        TRANSFORM_SKEW,
        STYLE_SIZE,
        STYLE_FILTER,
        STYLE_FONT_VARIATION
      } = _animationActions.ActionTypeConsts;
      var ReducedMotionTypes = {
        [TRANSFORM_MOVE]: true,
        [TRANSFORM_SCALE]: true,
        [TRANSFORM_ROTATE]: true,
        [TRANSFORM_SKEW]: true,
        [STYLE_SIZE]: true,
        [STYLE_FILTER]: true,
        [STYLE_FONT_VARIATION]: true
      };
      exports.ReducedMotionTypes = ReducedMotionTypes;
    }
  });

  // packages/systems/ix2/shared/constants/IX2EngineActionTypes.js
  var require_IX2EngineActionTypes = __commonJS({
    "packages/systems/ix2/shared/constants/IX2EngineActionTypes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.IX2_VIEWPORT_WIDTH_CHANGED = exports.IX2_TEST_FRAME_RENDERED = exports.IX2_STOP_REQUESTED = exports.IX2_SESSION_STOPPED = exports.IX2_SESSION_STARTED = exports.IX2_SESSION_INITIALIZED = exports.IX2_RAW_DATA_IMPORTED = exports.IX2_PREVIEW_REQUESTED = exports.IX2_PLAYBACK_REQUESTED = exports.IX2_PARAMETER_CHANGED = exports.IX2_MEDIA_QUERIES_DEFINED = exports.IX2_INSTANCE_STARTED = exports.IX2_INSTANCE_REMOVED = exports.IX2_INSTANCE_ADDED = exports.IX2_EVENT_STATE_CHANGED = exports.IX2_EVENT_LISTENER_ADDED = exports.IX2_ELEMENT_STATE_CHANGED = exports.IX2_CLEAR_REQUESTED = exports.IX2_ANIMATION_FRAME_CHANGED = exports.IX2_ACTION_LIST_PLAYBACK_CHANGED = void 0;
      var IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
      exports.IX2_RAW_DATA_IMPORTED = IX2_RAW_DATA_IMPORTED;
      var IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
      exports.IX2_SESSION_INITIALIZED = IX2_SESSION_INITIALIZED;
      var IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
      exports.IX2_SESSION_STARTED = IX2_SESSION_STARTED;
      var IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
      exports.IX2_SESSION_STOPPED = IX2_SESSION_STOPPED;
      var IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
      exports.IX2_PREVIEW_REQUESTED = IX2_PREVIEW_REQUESTED;
      var IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
      exports.IX2_PLAYBACK_REQUESTED = IX2_PLAYBACK_REQUESTED;
      var IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
      exports.IX2_STOP_REQUESTED = IX2_STOP_REQUESTED;
      var IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
      exports.IX2_CLEAR_REQUESTED = IX2_CLEAR_REQUESTED;
      var IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
      exports.IX2_EVENT_LISTENER_ADDED = IX2_EVENT_LISTENER_ADDED;
      var IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
      exports.IX2_EVENT_STATE_CHANGED = IX2_EVENT_STATE_CHANGED;
      var IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
      exports.IX2_ANIMATION_FRAME_CHANGED = IX2_ANIMATION_FRAME_CHANGED;
      var IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
      exports.IX2_PARAMETER_CHANGED = IX2_PARAMETER_CHANGED;
      var IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
      exports.IX2_INSTANCE_ADDED = IX2_INSTANCE_ADDED;
      var IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
      exports.IX2_INSTANCE_STARTED = IX2_INSTANCE_STARTED;
      var IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
      exports.IX2_INSTANCE_REMOVED = IX2_INSTANCE_REMOVED;
      var IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
      exports.IX2_ELEMENT_STATE_CHANGED = IX2_ELEMENT_STATE_CHANGED;
      var IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
      exports.IX2_ACTION_LIST_PLAYBACK_CHANGED = IX2_ACTION_LIST_PLAYBACK_CHANGED;
      var IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
      exports.IX2_VIEWPORT_WIDTH_CHANGED = IX2_VIEWPORT_WIDTH_CHANGED;
      var IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
      exports.IX2_MEDIA_QUERIES_DEFINED = IX2_MEDIA_QUERIES_DEFINED;
      var IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED";
      exports.IX2_TEST_FRAME_RENDERED = IX2_TEST_FRAME_RENDERED;
    }
  });

  // packages/systems/ix2/shared/constants/IX2EngineConstants.js
  var require_IX2EngineConstants = __commonJS({
    "packages/systems/ix2/shared/constants/IX2EngineConstants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.W_MOD_JS = exports.W_MOD_IX = exports.WILL_CHANGE = exports.WIDTH = exports.WF_PAGE = exports.TRANSLATE_Z = exports.TRANSLATE_Y = exports.TRANSLATE_X = exports.TRANSLATE_3D = exports.TRANSFORM = exports.SKEW_Y = exports.SKEW_X = exports.SKEW = exports.SIBLINGS = exports.SCALE_Z = exports.SCALE_Y = exports.SCALE_X = exports.SCALE_3D = exports.ROTATE_Z = exports.ROTATE_Y = exports.ROTATE_X = exports.RENDER_TRANSFORM = exports.RENDER_STYLE = exports.RENDER_PLUGIN = exports.RENDER_GENERAL = exports.PRESERVE_3D = exports.PLAIN_OBJECT = exports.PARENT = exports.OPACITY = exports.IX2_ID_DELIMITER = exports.IMMEDIATE_CHILDREN = exports.HTML_ELEMENT = exports.HEIGHT = exports.FONT_VARIATION_SETTINGS = exports.FLEX = exports.FILTER = exports.DISPLAY = exports.CONFIG_Z_VALUE = exports.CONFIG_Z_UNIT = exports.CONFIG_Y_VALUE = exports.CONFIG_Y_UNIT = exports.CONFIG_X_VALUE = exports.CONFIG_X_UNIT = exports.CONFIG_VALUE = exports.CONFIG_UNIT = exports.COMMA_DELIMITER = exports.COLOR = exports.COLON_DELIMITER = exports.CHILDREN = exports.BOUNDARY_SELECTOR = exports.BORDER_COLOR = exports.BAR_DELIMITER = exports.BACKGROUND_COLOR = exports.BACKGROUND = exports.AUTO = exports.ABSTRACT_NODE = void 0;
      var IX2_ID_DELIMITER = "|";
      exports.IX2_ID_DELIMITER = IX2_ID_DELIMITER;
      var WF_PAGE = "data-wf-page";
      exports.WF_PAGE = WF_PAGE;
      var W_MOD_JS = "w-mod-js";
      exports.W_MOD_JS = W_MOD_JS;
      var W_MOD_IX = "w-mod-ix";
      exports.W_MOD_IX = W_MOD_IX;
      var BOUNDARY_SELECTOR = ".w-dyn-item";
      exports.BOUNDARY_SELECTOR = BOUNDARY_SELECTOR;
      var CONFIG_X_VALUE = "xValue";
      exports.CONFIG_X_VALUE = CONFIG_X_VALUE;
      var CONFIG_Y_VALUE = "yValue";
      exports.CONFIG_Y_VALUE = CONFIG_Y_VALUE;
      var CONFIG_Z_VALUE = "zValue";
      exports.CONFIG_Z_VALUE = CONFIG_Z_VALUE;
      var CONFIG_VALUE = "value";
      exports.CONFIG_VALUE = CONFIG_VALUE;
      var CONFIG_X_UNIT = "xUnit";
      exports.CONFIG_X_UNIT = CONFIG_X_UNIT;
      var CONFIG_Y_UNIT = "yUnit";
      exports.CONFIG_Y_UNIT = CONFIG_Y_UNIT;
      var CONFIG_Z_UNIT = "zUnit";
      exports.CONFIG_Z_UNIT = CONFIG_Z_UNIT;
      var CONFIG_UNIT = "unit";
      exports.CONFIG_UNIT = CONFIG_UNIT;
      var TRANSFORM = "transform";
      exports.TRANSFORM = TRANSFORM;
      var TRANSLATE_X = "translateX";
      exports.TRANSLATE_X = TRANSLATE_X;
      var TRANSLATE_Y = "translateY";
      exports.TRANSLATE_Y = TRANSLATE_Y;
      var TRANSLATE_Z = "translateZ";
      exports.TRANSLATE_Z = TRANSLATE_Z;
      var TRANSLATE_3D = "translate3d";
      exports.TRANSLATE_3D = TRANSLATE_3D;
      var SCALE_X = "scaleX";
      exports.SCALE_X = SCALE_X;
      var SCALE_Y = "scaleY";
      exports.SCALE_Y = SCALE_Y;
      var SCALE_Z = "scaleZ";
      exports.SCALE_Z = SCALE_Z;
      var SCALE_3D = "scale3d";
      exports.SCALE_3D = SCALE_3D;
      var ROTATE_X = "rotateX";
      exports.ROTATE_X = ROTATE_X;
      var ROTATE_Y = "rotateY";
      exports.ROTATE_Y = ROTATE_Y;
      var ROTATE_Z = "rotateZ";
      exports.ROTATE_Z = ROTATE_Z;
      var SKEW = "skew";
      exports.SKEW = SKEW;
      var SKEW_X = "skewX";
      exports.SKEW_X = SKEW_X;
      var SKEW_Y = "skewY";
      exports.SKEW_Y = SKEW_Y;
      var OPACITY = "opacity";
      exports.OPACITY = OPACITY;
      var FILTER = "filter";
      exports.FILTER = FILTER;
      var FONT_VARIATION_SETTINGS = "font-variation-settings";
      exports.FONT_VARIATION_SETTINGS = FONT_VARIATION_SETTINGS;
      var WIDTH = "width";
      exports.WIDTH = WIDTH;
      var HEIGHT = "height";
      exports.HEIGHT = HEIGHT;
      var BACKGROUND_COLOR = "backgroundColor";
      exports.BACKGROUND_COLOR = BACKGROUND_COLOR;
      var BACKGROUND = "background";
      exports.BACKGROUND = BACKGROUND;
      var BORDER_COLOR = "borderColor";
      exports.BORDER_COLOR = BORDER_COLOR;
      var COLOR = "color";
      exports.COLOR = COLOR;
      var DISPLAY = "display";
      exports.DISPLAY = DISPLAY;
      var FLEX = "flex";
      exports.FLEX = FLEX;
      var WILL_CHANGE = "willChange";
      exports.WILL_CHANGE = WILL_CHANGE;
      var AUTO = "AUTO";
      exports.AUTO = AUTO;
      var COMMA_DELIMITER = ",";
      exports.COMMA_DELIMITER = COMMA_DELIMITER;
      var COLON_DELIMITER = ":";
      exports.COLON_DELIMITER = COLON_DELIMITER;
      var BAR_DELIMITER = "|";
      exports.BAR_DELIMITER = BAR_DELIMITER;
      var CHILDREN = "CHILDREN";
      exports.CHILDREN = CHILDREN;
      var IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
      exports.IMMEDIATE_CHILDREN = IMMEDIATE_CHILDREN;
      var SIBLINGS = "SIBLINGS";
      exports.SIBLINGS = SIBLINGS;
      var PARENT = "PARENT";
      exports.PARENT = PARENT;
      var PRESERVE_3D = "preserve-3d";
      exports.PRESERVE_3D = PRESERVE_3D;
      var HTML_ELEMENT = "HTML_ELEMENT";
      exports.HTML_ELEMENT = HTML_ELEMENT;
      var PLAIN_OBJECT = "PLAIN_OBJECT";
      exports.PLAIN_OBJECT = PLAIN_OBJECT;
      var ABSTRACT_NODE = "ABSTRACT_NODE";
      exports.ABSTRACT_NODE = ABSTRACT_NODE;
      var RENDER_TRANSFORM = "RENDER_TRANSFORM";
      exports.RENDER_TRANSFORM = RENDER_TRANSFORM;
      var RENDER_GENERAL = "RENDER_GENERAL";
      exports.RENDER_GENERAL = RENDER_GENERAL;
      var RENDER_STYLE = "RENDER_STYLE";
      exports.RENDER_STYLE = RENDER_STYLE;
      var RENDER_PLUGIN = "RENDER_PLUGIN";
      exports.RENDER_PLUGIN = RENDER_PLUGIN;
    }
  });

  // packages/systems/ix2/shared/constants/index.js
  var require_constants = __commonJS({
    "packages/systems/ix2/shared/constants/index.js"(exports) {
      "use strict";
      var _interopRequireWildcard = require_interopRequireWildcard().default;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _exportNames = {
        IX2EngineActionTypes: true,
        IX2EngineConstants: true
      };
      exports.IX2EngineConstants = exports.IX2EngineActionTypes = void 0;
      var _triggerEvents = require_trigger_events();
      Object.keys(_triggerEvents).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _triggerEvents[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _triggerEvents[key];
          }
        });
      });
      var _animationActions = require_animation_actions();
      Object.keys(_animationActions).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _animationActions[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _animationActions[key];
          }
        });
      });
      var _triggerInteractions = require_trigger_interactions();
      Object.keys(_triggerInteractions).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _triggerInteractions[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _triggerInteractions[key];
          }
        });
      });
      var _reducedMotion = require_reduced_motion();
      Object.keys(_reducedMotion).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _reducedMotion[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _reducedMotion[key];
          }
        });
      });
      var IX2EngineActionTypes = _interopRequireWildcard(require_IX2EngineActionTypes());
      exports.IX2EngineActionTypes = IX2EngineActionTypes;
      var IX2EngineConstants = _interopRequireWildcard(require_IX2EngineConstants());
      exports.IX2EngineConstants = IX2EngineConstants;
    }
  });

  // packages/systems/ix2/engine/reducers/IX2DataReducer.js
  var require_IX2DataReducer = __commonJS({
    "packages/systems/ix2/engine/reducers/IX2DataReducer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ixData = void 0;
      var _constants = require_constants();
      var {
        IX2_RAW_DATA_IMPORTED
      } = _constants.IX2EngineActionTypes;
      var ixData = (state = Object.freeze({}), action) => {
        switch (action.type) {
          case IX2_RAW_DATA_IMPORTED: {
            return action.payload.ixData || Object.freeze({});
          }
          default: {
            return state;
          }
        }
      };
      exports.ixData = ixData;
    }
  });

  // node_modules/@babel/runtime/helpers/extends.js
  var require_extends = __commonJS({
    "node_modules/@babel/runtime/helpers/extends.js"(exports, module) {
      function _extends() {
        module.exports = _extends = Object.assign ? Object.assign.bind() : function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports;
        return _extends.apply(this, arguments);
      }
      module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/timm/lib/timm.js
  var require_timm = __commonJS({
    "node_modules/timm/lib/timm.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      exports.clone = clone;
      exports.addLast = addLast;
      exports.addFirst = addFirst;
      exports.removeLast = removeLast;
      exports.removeFirst = removeFirst;
      exports.insert = insert;
      exports.removeAt = removeAt;
      exports.replaceAt = replaceAt;
      exports.getIn = getIn;
      exports.set = set;
      exports.setIn = setIn;
      exports.update = update;
      exports.updateIn = updateIn;
      exports.merge = merge;
      exports.mergeDeep = mergeDeep;
      exports.mergeIn = mergeIn;
      exports.omit = omit;
      exports.addDefaults = addDefaults;
      var INVALID_ARGS = "INVALID_ARGS";
      function throwStr(msg) {
        throw new Error(msg);
      }
      function getKeysAndSymbols(obj) {
        var keys = Object.keys(obj);
        if (Object.getOwnPropertySymbols) {
          return keys.concat(Object.getOwnPropertySymbols(obj));
        }
        return keys;
      }
      var hasOwnProperty = {}.hasOwnProperty;
      function clone(obj) {
        if (Array.isArray(obj))
          return obj.slice();
        var keys = getKeysAndSymbols(obj);
        var out = {};
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          out[key] = obj[key];
        }
        return out;
      }
      function doMerge(fAddDefaults, fDeep, first) {
        var out = first;
        !(out != null) && throwStr(false ? "At least one object should be provided to merge()" : INVALID_ARGS);
        var fChanged = false;
        for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
          rest[_key - 3] = arguments[_key];
        }
        for (var idx = 0; idx < rest.length; idx++) {
          var obj = rest[idx];
          if (obj == null)
            continue;
          var keys = getKeysAndSymbols(obj);
          if (!keys.length)
            continue;
          for (var j = 0; j <= keys.length; j++) {
            var key = keys[j];
            if (fAddDefaults && out[key] !== void 0)
              continue;
            var nextVal = obj[key];
            if (fDeep && isObject(out[key]) && isObject(nextVal)) {
              nextVal = doMerge(fAddDefaults, fDeep, out[key], nextVal);
            }
            if (nextVal === void 0 || nextVal === out[key])
              continue;
            if (!fChanged) {
              fChanged = true;
              out = clone(out);
            }
            out[key] = nextVal;
          }
        }
        return out;
      }
      function isObject(o) {
        var type = typeof o === "undefined" ? "undefined" : _typeof(o);
        return o != null && (type === "object" || type === "function");
      }
      function addLast(array, val) {
        if (Array.isArray(val))
          return array.concat(val);
        return array.concat([val]);
      }
      function addFirst(array, val) {
        if (Array.isArray(val))
          return val.concat(array);
        return [val].concat(array);
      }
      function removeLast(array) {
        if (!array.length)
          return array;
        return array.slice(0, array.length - 1);
      }
      function removeFirst(array) {
        if (!array.length)
          return array;
        return array.slice(1);
      }
      function insert(array, idx, val) {
        return array.slice(0, idx).concat(Array.isArray(val) ? val : [val]).concat(array.slice(idx));
      }
      function removeAt(array, idx) {
        if (idx >= array.length || idx < 0)
          return array;
        return array.slice(0, idx).concat(array.slice(idx + 1));
      }
      function replaceAt(array, idx, newItem) {
        if (array[idx] === newItem)
          return array;
        var len = array.length;
        var result = Array(len);
        for (var i = 0; i < len; i++) {
          result[i] = array[i];
        }
        result[idx] = newItem;
        return result;
      }
      function getIn(obj, path) {
        !Array.isArray(path) && throwStr(false ? "A path array should be provided when calling getIn()" : INVALID_ARGS);
        if (obj == null)
          return void 0;
        var ptr = obj;
        for (var i = 0; i < path.length; i++) {
          var key = path[i];
          ptr = ptr != null ? ptr[key] : void 0;
          if (ptr === void 0)
            return ptr;
        }
        return ptr;
      }
      function set(obj, key, val) {
        var fallback = typeof key === "number" ? [] : {};
        var finalObj = obj == null ? fallback : obj;
        if (finalObj[key] === val)
          return finalObj;
        var obj2 = clone(finalObj);
        obj2[key] = val;
        return obj2;
      }
      function doSetIn(obj, path, val, idx) {
        var newValue = void 0;
        var key = path[idx];
        if (idx === path.length - 1) {
          newValue = val;
        } else {
          var nestedObj = isObject(obj) && isObject(obj[key]) ? obj[key] : typeof path[idx + 1] === "number" ? [] : {};
          newValue = doSetIn(nestedObj, path, val, idx + 1);
        }
        return set(obj, key, newValue);
      }
      function setIn(obj, path, val) {
        if (!path.length)
          return val;
        return doSetIn(obj, path, val, 0);
      }
      function update(obj, key, fnUpdate) {
        var prevVal = obj == null ? void 0 : obj[key];
        var nextVal = fnUpdate(prevVal);
        return set(obj, key, nextVal);
      }
      function updateIn(obj, path, fnUpdate) {
        var prevVal = getIn(obj, path);
        var nextVal = fnUpdate(prevVal);
        return setIn(obj, path, nextVal);
      }
      function merge(a, b, c, d, e, f) {
        for (var _len2 = arguments.length, rest = Array(_len2 > 6 ? _len2 - 6 : 0), _key2 = 6; _key2 < _len2; _key2++) {
          rest[_key2 - 6] = arguments[_key2];
        }
        return rest.length ? doMerge.call.apply(doMerge, [null, false, false, a, b, c, d, e, f].concat(rest)) : doMerge(false, false, a, b, c, d, e, f);
      }
      function mergeDeep(a, b, c, d, e, f) {
        for (var _len3 = arguments.length, rest = Array(_len3 > 6 ? _len3 - 6 : 0), _key3 = 6; _key3 < _len3; _key3++) {
          rest[_key3 - 6] = arguments[_key3];
        }
        return rest.length ? doMerge.call.apply(doMerge, [null, false, true, a, b, c, d, e, f].concat(rest)) : doMerge(false, true, a, b, c, d, e, f);
      }
      function mergeIn(a, path, b, c, d, e, f) {
        var prevVal = getIn(a, path);
        if (prevVal == null)
          prevVal = {};
        var nextVal = void 0;
        for (var _len4 = arguments.length, rest = Array(_len4 > 7 ? _len4 - 7 : 0), _key4 = 7; _key4 < _len4; _key4++) {
          rest[_key4 - 7] = arguments[_key4];
        }
        if (rest.length) {
          nextVal = doMerge.call.apply(doMerge, [null, false, false, prevVal, b, c, d, e, f].concat(rest));
        } else {
          nextVal = doMerge(false, false, prevVal, b, c, d, e, f);
        }
        return setIn(a, path, nextVal);
      }
      function omit(obj, attrs) {
        var omitList = Array.isArray(attrs) ? attrs : [attrs];
        var fDoSomething = false;
        for (var i = 0; i < omitList.length; i++) {
          if (hasOwnProperty.call(obj, omitList[i])) {
            fDoSomething = true;
            break;
          }
        }
        if (!fDoSomething)
          return obj;
        var out = {};
        var keys = getKeysAndSymbols(obj);
        for (var _i = 0; _i < keys.length; _i++) {
          var key = keys[_i];
          if (omitList.indexOf(key) >= 0)
            continue;
          out[key] = obj[key];
        }
        return out;
      }
      function addDefaults(a, b, c, d, e, f) {
        for (var _len5 = arguments.length, rest = Array(_len5 > 6 ? _len5 - 6 : 0), _key5 = 6; _key5 < _len5; _key5++) {
          rest[_key5 - 6] = arguments[_key5];
        }
        return rest.length ? doMerge.call.apply(doMerge, [null, true, false, a, b, c, d, e, f].concat(rest)) : doMerge(true, false, a, b, c, d, e, f);
      }
      var timm = {
        clone,
        addLast,
        addFirst,
        removeLast,
        removeFirst,
        insert,
        removeAt,
        replaceAt,
        getIn,
        // eslint-disable-next-line object-shorthand
        set,
        // so that flow doesn't complain
        setIn,
        update,
        updateIn,
        merge,
        mergeDeep,
        mergeIn,
        omit,
        addDefaults
      };
      exports.default = timm;
    }
  });

  // packages/systems/ix2/engine/reducers/IX2RequestReducer.js
  var require_IX2RequestReducer = __commonJS({
    "packages/systems/ix2/engine/reducers/IX2RequestReducer.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault().default;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ixRequest = void 0;
      var _extends2 = _interopRequireDefault(require_extends());
      var _constants = require_constants();
      var _timm = require_timm();
      var {
        IX2_PREVIEW_REQUESTED,
        IX2_PLAYBACK_REQUESTED,
        IX2_STOP_REQUESTED,
        IX2_CLEAR_REQUESTED
      } = _constants.IX2EngineActionTypes;
      var initialState = {
        preview: {},
        playback: {},
        stop: {},
        clear: {}
      };
      var stateKeys = Object.create(null, {
        [IX2_PREVIEW_REQUESTED]: {
          value: "preview"
        },
        [IX2_PLAYBACK_REQUESTED]: {
          value: "playback"
        },
        [IX2_STOP_REQUESTED]: {
          value: "stop"
        },
        [IX2_CLEAR_REQUESTED]: {
          value: "clear"
        }
      });
      var ixRequest = (state = initialState, action) => {
        if (action.type in stateKeys) {
          const key = [stateKeys[action.type]];
          return (0, _timm.setIn)(state, [key], (0, _extends2.default)({}, action.payload));
        }
        return state;
      };
      exports.ixRequest = ixRequest;
    }
  });

  // packages/systems/ix2/engine/reducers/IX2SessionReducer.js
  var require_IX2SessionReducer = __commonJS({
    "packages/systems/ix2/engine/reducers/IX2SessionReducer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ixSession = void 0;
      var _constants = require_constants();
      var _timm = require_timm();
      var {
        IX2_SESSION_INITIALIZED,
        IX2_SESSION_STARTED,
        IX2_TEST_FRAME_RENDERED,
        IX2_SESSION_STOPPED,
        IX2_EVENT_LISTENER_ADDED,
        IX2_EVENT_STATE_CHANGED,
        IX2_ANIMATION_FRAME_CHANGED,
        IX2_ACTION_LIST_PLAYBACK_CHANGED,
        IX2_VIEWPORT_WIDTH_CHANGED,
        IX2_MEDIA_QUERIES_DEFINED
      } = _constants.IX2EngineActionTypes;
      var initialState = {
        active: false,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: false,
        hasDefinedMediaQueries: false,
        reducedMotion: false
      };
      var TEST_FRAME_STEPS_SIZE = 20;
      var ixSession = (state = initialState, action) => {
        switch (action.type) {
          case IX2_SESSION_INITIALIZED: {
            const {
              hasBoundaryNodes,
              reducedMotion
            } = action.payload;
            return (0, _timm.merge)(state, {
              hasBoundaryNodes,
              reducedMotion
            });
          }
          case IX2_SESSION_STARTED: {
            return (0, _timm.set)(state, "active", true);
          }
          case IX2_TEST_FRAME_RENDERED: {
            const {
              payload: {
                step = TEST_FRAME_STEPS_SIZE
              }
            } = action;
            return (0, _timm.set)(state, "tick", state.tick + step);
          }
          case IX2_SESSION_STOPPED: {
            return initialState;
          }
          case IX2_ANIMATION_FRAME_CHANGED: {
            const {
              payload: {
                now
              }
            } = action;
            return (0, _timm.set)(state, "tick", now);
          }
          case IX2_EVENT_LISTENER_ADDED: {
            const eventListeners = (0, _timm.addLast)(state.eventListeners, action.payload);
            return (0, _timm.set)(state, "eventListeners", eventListeners);
          }
          case IX2_EVENT_STATE_CHANGED: {
            const {
              stateKey,
              newState
            } = action.payload;
            return (0, _timm.setIn)(state, ["eventState", stateKey], newState);
          }
          case IX2_ACTION_LIST_PLAYBACK_CHANGED: {
            const {
              actionListId,
              isPlaying
            } = action.payload;
            return (0, _timm.setIn)(state, ["playbackState", actionListId], isPlaying);
          }
          case IX2_VIEWPORT_WIDTH_CHANGED: {
            const {
              width,
              mediaQueries
            } = action.payload;
            const mediaQueryCount = mediaQueries.length;
            let mediaQueryKey = null;
            for (let i = 0; i < mediaQueryCount; i++) {
              const {
                key,
                min,
                max
              } = mediaQueries[i];
              if (width >= min && width <= max) {
                mediaQueryKey = key;
                break;
              }
            }
            return (0, _timm.merge)(state, {
              viewportWidth: width,
              mediaQueryKey
            });
          }
          case IX2_MEDIA_QUERIES_DEFINED: {
            return (0, _timm.set)(state, "hasDefinedMediaQueries", true);
          }
          default: {
            return state;
          }
        }
      };
      exports.ixSession = ixSession;
    }
  });

  // node_modules/lodash/_listCacheClear.js
  var require_listCacheClear = __commonJS({
    "node_modules/lodash/_listCacheClear.js"(exports, module) {
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      module.exports = listCacheClear;
    }
  });

  // node_modules/lodash/eq.js
  var require_eq = __commonJS({
    "node_modules/lodash/eq.js"(exports, module) {
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      module.exports = eq;
    }
  });

  // node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS({
    "node_modules/lodash/_assocIndexOf.js"(exports, module) {
      var eq = require_eq();
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      module.exports = assocIndexOf;
    }
  });

  // node_modules/lodash/_listCacheDelete.js
  var require_listCacheDelete = __commonJS({
    "node_modules/lodash/_listCacheDelete.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      module.exports = listCacheDelete;
    }
  });

  // node_modules/lodash/_listCacheGet.js
  var require_listCacheGet = __commonJS({
    "node_modules/lodash/_listCacheGet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      module.exports = listCacheGet;
    }
  });

  // node_modules/lodash/_listCacheHas.js
  var require_listCacheHas = __commonJS({
    "node_modules/lodash/_listCacheHas.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      module.exports = listCacheHas;
    }
  });

  // node_modules/lodash/_listCacheSet.js
  var require_listCacheSet = __commonJS({
    "node_modules/lodash/_listCacheSet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      module.exports = listCacheSet;
    }
  });

  // node_modules/lodash/_ListCache.js
  var require_ListCache = __commonJS({
    "node_modules/lodash/_ListCache.js"(exports, module) {
      var listCacheClear = require_listCacheClear();
      var listCacheDelete = require_listCacheDelete();
      var listCacheGet = require_listCacheGet();
      var listCacheHas = require_listCacheHas();
      var listCacheSet = require_listCacheSet();
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      module.exports = ListCache;
    }
  });

  // node_modules/lodash/_stackClear.js
  var require_stackClear = __commonJS({
    "node_modules/lodash/_stackClear.js"(exports, module) {
      var ListCache = require_ListCache();
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      module.exports = stackClear;
    }
  });

  // node_modules/lodash/_stackDelete.js
  var require_stackDelete = __commonJS({
    "node_modules/lodash/_stackDelete.js"(exports, module) {
      function stackDelete(key) {
        var data = this.__data__, result = data["delete"](key);
        this.size = data.size;
        return result;
      }
      module.exports = stackDelete;
    }
  });

  // node_modules/lodash/_stackGet.js
  var require_stackGet = __commonJS({
    "node_modules/lodash/_stackGet.js"(exports, module) {
      function stackGet(key) {
        return this.__data__.get(key);
      }
      module.exports = stackGet;
    }
  });

  // node_modules/lodash/_stackHas.js
  var require_stackHas = __commonJS({
    "node_modules/lodash/_stackHas.js"(exports, module) {
      function stackHas(key) {
        return this.__data__.has(key);
      }
      module.exports = stackHas;
    }
  });

  // node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "node_modules/lodash/isObject.js"(exports, module) {
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      module.exports = isObject;
    }
  });

  // node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS({
    "node_modules/lodash/isFunction.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObject = require_isObject();
      var asyncTag = "[object AsyncFunction]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var proxyTag = "[object Proxy]";
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      module.exports = isFunction;
    }
  });

  // node_modules/lodash/_coreJsData.js
  var require_coreJsData = __commonJS({
    "node_modules/lodash/_coreJsData.js"(exports, module) {
      var root = require_root();
      var coreJsData = root["__core-js_shared__"];
      module.exports = coreJsData;
    }
  });

  // node_modules/lodash/_isMasked.js
  var require_isMasked = __commonJS({
    "node_modules/lodash/_isMasked.js"(exports, module) {
      var coreJsData = require_coreJsData();
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      module.exports = isMasked;
    }
  });

  // node_modules/lodash/_toSource.js
  var require_toSource = __commonJS({
    "node_modules/lodash/_toSource.js"(exports, module) {
      var funcProto = Function.prototype;
      var funcToString = funcProto.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      module.exports = toSource;
    }
  });

  // node_modules/lodash/_baseIsNative.js
  var require_baseIsNative = __commonJS({
    "node_modules/lodash/_baseIsNative.js"(exports, module) {
      var isFunction = require_isFunction();
      var isMasked = require_isMasked();
      var isObject = require_isObject();
      var toSource = require_toSource();
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      module.exports = baseIsNative;
    }
  });

  // node_modules/lodash/_getValue.js
  var require_getValue = __commonJS({
    "node_modules/lodash/_getValue.js"(exports, module) {
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      module.exports = getValue;
    }
  });

  // node_modules/lodash/_getNative.js
  var require_getNative = __commonJS({
    "node_modules/lodash/_getNative.js"(exports, module) {
      var baseIsNative = require_baseIsNative();
      var getValue = require_getValue();
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      module.exports = getNative;
    }
  });

  // node_modules/lodash/_Map.js
  var require_Map = __commonJS({
    "node_modules/lodash/_Map.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Map2 = getNative(root, "Map");
      module.exports = Map2;
    }
  });

  // node_modules/lodash/_nativeCreate.js
  var require_nativeCreate = __commonJS({
    "node_modules/lodash/_nativeCreate.js"(exports, module) {
      var getNative = require_getNative();
      var nativeCreate = getNative(Object, "create");
      module.exports = nativeCreate;
    }
  });

  // node_modules/lodash/_hashClear.js
  var require_hashClear = __commonJS({
    "node_modules/lodash/_hashClear.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      module.exports = hashClear;
    }
  });

  // node_modules/lodash/_hashDelete.js
  var require_hashDelete = __commonJS({
    "node_modules/lodash/_hashDelete.js"(exports, module) {
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = hashDelete;
    }
  });

  // node_modules/lodash/_hashGet.js
  var require_hashGet = __commonJS({
    "node_modules/lodash/_hashGet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : void 0;
      }
      module.exports = hashGet;
    }
  });

  // node_modules/lodash/_hashHas.js
  var require_hashHas = __commonJS({
    "node_modules/lodash/_hashHas.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
      }
      module.exports = hashHas;
    }
  });

  // node_modules/lodash/_hashSet.js
  var require_hashSet = __commonJS({
    "node_modules/lodash/_hashSet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      module.exports = hashSet;
    }
  });

  // node_modules/lodash/_Hash.js
  var require_Hash = __commonJS({
    "node_modules/lodash/_Hash.js"(exports, module) {
      var hashClear = require_hashClear();
      var hashDelete = require_hashDelete();
      var hashGet = require_hashGet();
      var hashHas = require_hashHas();
      var hashSet = require_hashSet();
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      module.exports = Hash;
    }
  });

  // node_modules/lodash/_mapCacheClear.js
  var require_mapCacheClear = __commonJS({
    "node_modules/lodash/_mapCacheClear.js"(exports, module) {
      var Hash = require_Hash();
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      module.exports = mapCacheClear;
    }
  });

  // node_modules/lodash/_isKeyable.js
  var require_isKeyable = __commonJS({
    "node_modules/lodash/_isKeyable.js"(exports, module) {
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      module.exports = isKeyable;
    }
  });

  // node_modules/lodash/_getMapData.js
  var require_getMapData = __commonJS({
    "node_modules/lodash/_getMapData.js"(exports, module) {
      var isKeyable = require_isKeyable();
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      module.exports = getMapData;
    }
  });

  // node_modules/lodash/_mapCacheDelete.js
  var require_mapCacheDelete = __commonJS({
    "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = mapCacheDelete;
    }
  });

  // node_modules/lodash/_mapCacheGet.js
  var require_mapCacheGet = __commonJS({
    "node_modules/lodash/_mapCacheGet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      module.exports = mapCacheGet;
    }
  });

  // node_modules/lodash/_mapCacheHas.js
  var require_mapCacheHas = __commonJS({
    "node_modules/lodash/_mapCacheHas.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      module.exports = mapCacheHas;
    }
  });

  // node_modules/lodash/_mapCacheSet.js
  var require_mapCacheSet = __commonJS({
    "node_modules/lodash/_mapCacheSet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      module.exports = mapCacheSet;
    }
  });

  // node_modules/lodash/_MapCache.js
  var require_MapCache = __commonJS({
    "node_modules/lodash/_MapCache.js"(exports, module) {
      var mapCacheClear = require_mapCacheClear();
      var mapCacheDelete = require_mapCacheDelete();
      var mapCacheGet = require_mapCacheGet();
      var mapCacheHas = require_mapCacheHas();
      var mapCacheSet = require_mapCacheSet();
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      module.exports = MapCache;
    }
  });

  // node_modules/lodash/_stackSet.js
  var require_stackSet = __commonJS({
    "node_modules/lodash/_stackSet.js"(exports, module) {
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      var MapCache = require_MapCache();
      var LARGE_ARRAY_SIZE = 200;
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      module.exports = stackSet;
    }
  });

  // node_modules/lodash/_Stack.js
  var require_Stack = __commonJS({
    "node_modules/lodash/_Stack.js"(exports, module) {
      var ListCache = require_ListCache();
      var stackClear = require_stackClear();
      var stackDelete = require_stackDelete();
      var stackGet = require_stackGet();
      var stackHas = require_stackHas();
      var stackSet = require_stackSet();
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      module.exports = Stack;
    }
  });

  // node_modules/lodash/_setCacheAdd.js
  var require_setCacheAdd = __commonJS({
    "node_modules/lodash/_setCacheAdd.js"(exports, module) {
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      module.exports = setCacheAdd;
    }
  });

  // node_modules/lodash/_setCacheHas.js
  var require_setCacheHas = __commonJS({
    "node_modules/lodash/_setCacheHas.js"(exports, module) {
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      module.exports = setCacheHas;
    }
  });

  // node_modules/lodash/_SetCache.js
  var require_SetCache = __commonJS({
    "node_modules/lodash/_SetCache.js"(exports, module) {
      var MapCache = require_MapCache();
      var setCacheAdd = require_setCacheAdd();
      var setCacheHas = require_setCacheHas();
      function SetCache(values) {
        var index = -1, length = values == null ? 0 : values.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values[index]);
        }
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      module.exports = SetCache;
    }
  });

  // node_modules/lodash/_arraySome.js
  var require_arraySome = __commonJS({
    "node_modules/lodash/_arraySome.js"(exports, module) {
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      module.exports = arraySome;
    }
  });

  // node_modules/lodash/_cacheHas.js
  var require_cacheHas = __commonJS({
    "node_modules/lodash/_cacheHas.js"(exports, module) {
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      module.exports = cacheHas;
    }
  });

  // node_modules/lodash/_equalArrays.js
  var require_equalArrays = __commonJS({
    "node_modules/lodash/_equalArrays.js"(exports, module) {
      var SetCache = require_SetCache();
      var arraySome = require_arraySome();
      var cacheHas = require_cacheHas();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== void 0) {
            if (compared) {
              continue;
            }
            result = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result;
      }
      module.exports = equalArrays;
    }
  });

  // node_modules/lodash/_Uint8Array.js
  var require_Uint8Array = __commonJS({
    "node_modules/lodash/_Uint8Array.js"(exports, module) {
      var root = require_root();
      var Uint8Array2 = root.Uint8Array;
      module.exports = Uint8Array2;
    }
  });

  // node_modules/lodash/_mapToArray.js
  var require_mapToArray = __commonJS({
    "node_modules/lodash/_mapToArray.js"(exports, module) {
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      module.exports = mapToArray;
    }
  });

  // node_modules/lodash/_setToArray.js
  var require_setToArray = __commonJS({
    "node_modules/lodash/_setToArray.js"(exports, module) {
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      module.exports = setToArray;
    }
  });

  // node_modules/lodash/_equalByTag.js
  var require_equalByTag = __commonJS({
    "node_modules/lodash/_equalByTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var Uint8Array2 = require_Uint8Array();
      var eq = require_eq();
      var equalArrays = require_equalArrays();
      var mapToArray = require_mapToArray();
      var setToArray = require_setToArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      module.exports = equalByTag;
    }
  });

  // node_modules/lodash/_arrayPush.js
  var require_arrayPush = __commonJS({
    "node_modules/lodash/_arrayPush.js"(exports, module) {
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      module.exports = arrayPush;
    }
  });

  // node_modules/lodash/isArray.js
  var require_isArray = __commonJS({
    "node_modules/lodash/isArray.js"(exports, module) {
      var isArray = Array.isArray;
      module.exports = isArray;
    }
  });

  // node_modules/lodash/_baseGetAllKeys.js
  var require_baseGetAllKeys = __commonJS({
    "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var isArray = require_isArray();
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
      }
      module.exports = baseGetAllKeys;
    }
  });

  // node_modules/lodash/_arrayFilter.js
  var require_arrayFilter = __commonJS({
    "node_modules/lodash/_arrayFilter.js"(exports, module) {
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      module.exports = arrayFilter;
    }
  });

  // node_modules/lodash/stubArray.js
  var require_stubArray = __commonJS({
    "node_modules/lodash/stubArray.js"(exports, module) {
      function stubArray() {
        return [];
      }
      module.exports = stubArray;
    }
  });

  // node_modules/lodash/_getSymbols.js
  var require_getSymbols = __commonJS({
    "node_modules/lodash/_getSymbols.js"(exports, module) {
      var arrayFilter = require_arrayFilter();
      var stubArray = require_stubArray();
      var objectProto = Object.prototype;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      module.exports = getSymbols;
    }
  });

  // node_modules/lodash/_baseTimes.js
  var require_baseTimes = __commonJS({
    "node_modules/lodash/_baseTimes.js"(exports, module) {
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      module.exports = baseTimes;
    }
  });

  // node_modules/lodash/_baseIsArguments.js
  var require_baseIsArguments = __commonJS({
    "node_modules/lodash/_baseIsArguments.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      module.exports = baseIsArguments;
    }
  });

  // node_modules/lodash/isArguments.js
  var require_isArguments = __commonJS({
    "node_modules/lodash/isArguments.js"(exports, module) {
      var baseIsArguments = require_baseIsArguments();
      var isObjectLike = require_isObjectLike();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      module.exports = isArguments;
    }
  });

  // node_modules/lodash/stubFalse.js
  var require_stubFalse = __commonJS({
    "node_modules/lodash/stubFalse.js"(exports, module) {
      function stubFalse() {
        return false;
      }
      module.exports = stubFalse;
    }
  });

  // node_modules/lodash/isBuffer.js
  var require_isBuffer = __commonJS({
    "node_modules/lodash/isBuffer.js"(exports, module) {
      var root = require_root();
      var stubFalse = require_stubFalse();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var isBuffer = nativeIsBuffer || stubFalse;
      module.exports = isBuffer;
    }
  });

  // node_modules/lodash/_isIndex.js
  var require_isIndex = __commonJS({
    "node_modules/lodash/_isIndex.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      module.exports = isIndex;
    }
  });

  // node_modules/lodash/isLength.js
  var require_isLength = __commonJS({
    "node_modules/lodash/isLength.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      module.exports = isLength;
    }
  });

  // node_modules/lodash/_baseIsTypedArray.js
  var require_baseIsTypedArray = __commonJS({
    "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isLength = require_isLength();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var objectTag = "[object Object]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      module.exports = baseIsTypedArray;
    }
  });

  // node_modules/lodash/_baseUnary.js
  var require_baseUnary = __commonJS({
    "node_modules/lodash/_baseUnary.js"(exports, module) {
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      module.exports = baseUnary;
    }
  });

  // node_modules/lodash/_nodeUtil.js
  var require_nodeUtil = __commonJS({
    "node_modules/lodash/_nodeUtil.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      module.exports = nodeUtil;
    }
  });

  // node_modules/lodash/isTypedArray.js
  var require_isTypedArray = __commonJS({
    "node_modules/lodash/isTypedArray.js"(exports, module) {
      var baseIsTypedArray = require_baseIsTypedArray();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      module.exports = isTypedArray;
    }
  });

  // node_modules/lodash/_arrayLikeKeys.js
  var require_arrayLikeKeys = __commonJS({
    "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
      var baseTimes = require_baseTimes();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isIndex = require_isIndex();
      var isTypedArray = require_isTypedArray();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
          isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = arrayLikeKeys;
    }
  });

  // node_modules/lodash/_isPrototype.js
  var require_isPrototype = __commonJS({
    "node_modules/lodash/_isPrototype.js"(exports, module) {
      var objectProto = Object.prototype;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      module.exports = isPrototype;
    }
  });

  // node_modules/lodash/_nativeKeys.js
  var require_nativeKeys = __commonJS({
    "node_modules/lodash/_nativeKeys.js"(exports, module) {
      var overArg = require_overArg();
      var nativeKeys = overArg(Object.keys, Object);
      module.exports = nativeKeys;
    }
  });

  // node_modules/lodash/_baseKeys.js
  var require_baseKeys = __commonJS({
    "node_modules/lodash/_baseKeys.js"(exports, module) {
      var isPrototype = require_isPrototype();
      var nativeKeys = require_nativeKeys();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeys;
    }
  });

  // node_modules/lodash/isArrayLike.js
  var require_isArrayLike = __commonJS({
    "node_modules/lodash/isArrayLike.js"(exports, module) {
      var isFunction = require_isFunction();
      var isLength = require_isLength();
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      module.exports = isArrayLike;
    }
  });

  // node_modules/lodash/keys.js
  var require_keys = __commonJS({
    "node_modules/lodash/keys.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeys = require_baseKeys();
      var isArrayLike = require_isArrayLike();
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      module.exports = keys;
    }
  });

  // node_modules/lodash/_getAllKeys.js
  var require_getAllKeys = __commonJS({
    "node_modules/lodash/_getAllKeys.js"(exports, module) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbols = require_getSymbols();
      var keys = require_keys();
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      module.exports = getAllKeys;
    }
  });

  // node_modules/lodash/_equalObjects.js
  var require_equalObjects = __commonJS({
    "node_modules/lodash/_equalObjects.js"(exports, module) {
      var getAllKeys = require_getAllKeys();
      var COMPARE_PARTIAL_FLAG = 1;
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result;
      }
      module.exports = equalObjects;
    }
  });

  // node_modules/lodash/_DataView.js
  var require_DataView = __commonJS({
    "node_modules/lodash/_DataView.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var DataView = getNative(root, "DataView");
      module.exports = DataView;
    }
  });

  // node_modules/lodash/_Promise.js
  var require_Promise = __commonJS({
    "node_modules/lodash/_Promise.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Promise2 = getNative(root, "Promise");
      module.exports = Promise2;
    }
  });

  // node_modules/lodash/_Set.js
  var require_Set = __commonJS({
    "node_modules/lodash/_Set.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Set = getNative(root, "Set");
      module.exports = Set;
    }
  });

  // node_modules/lodash/_WeakMap.js
  var require_WeakMap = __commonJS({
    "node_modules/lodash/_WeakMap.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var WeakMap2 = getNative(root, "WeakMap");
      module.exports = WeakMap2;
    }
  });

  // node_modules/lodash/_getTag.js
  var require_getTag = __commonJS({
    "node_modules/lodash/_getTag.js"(exports, module) {
      var DataView = require_DataView();
      var Map2 = require_Map();
      var Promise2 = require_Promise();
      var Set = require_Set();
      var WeakMap2 = require_WeakMap();
      var baseGetTag = require_baseGetTag();
      var toSource = require_toSource();
      var mapTag = "[object Map]";
      var objectTag = "[object Object]";
      var promiseTag = "[object Promise]";
      var setTag = "[object Set]";
      var weakMapTag = "[object WeakMap]";
      var dataViewTag = "[object DataView]";
      var dataViewCtorString = toSource(DataView);
      var mapCtorString = toSource(Map2);
      var promiseCtorString = toSource(Promise2);
      var setCtorString = toSource(Set);
      var weakMapCtorString = toSource(WeakMap2);
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
        getTag = function(value) {
          var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result;
        };
      }
      module.exports = getTag;
    }
  });

  // node_modules/lodash/_baseIsEqualDeep.js
  var require_baseIsEqualDeep = __commonJS({
    "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
      var Stack = require_Stack();
      var equalArrays = require_equalArrays();
      var equalByTag = require_equalByTag();
      var equalObjects = require_equalObjects();
      var getTag = require_getTag();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isTypedArray = require_isTypedArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var objectTag = "[object Object]";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      module.exports = baseIsEqualDeep;
    }
  });

  // node_modules/lodash/_baseIsEqual.js
  var require_baseIsEqual = __commonJS({
    "node_modules/lodash/_baseIsEqual.js"(exports, module) {
      var baseIsEqualDeep = require_baseIsEqualDeep();
      var isObjectLike = require_isObjectLike();
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      module.exports = baseIsEqual;
    }
  });

  // node_modules/lodash/_baseIsMatch.js
  var require_baseIsMatch = __commonJS({
    "node_modules/lodash/_baseIsMatch.js"(exports, module) {
      var Stack = require_Stack();
      var baseIsEqual = require_baseIsEqual();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseIsMatch(object, source, matchData, customizer) {
        var index = matchData.length, length = index, noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object(object);
        while (index--) {
          var data = matchData[index];
          if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === void 0 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack();
            if (customizer) {
              var result = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
              return false;
            }
          }
        }
        return true;
      }
      module.exports = baseIsMatch;
    }
  });

  // node_modules/lodash/_isStrictComparable.js
  var require_isStrictComparable = __commonJS({
    "node_modules/lodash/_isStrictComparable.js"(exports, module) {
      var isObject = require_isObject();
      function isStrictComparable(value) {
        return value === value && !isObject(value);
      }
      module.exports = isStrictComparable;
    }
  });

  // node_modules/lodash/_getMatchData.js
  var require_getMatchData = __commonJS({
    "node_modules/lodash/_getMatchData.js"(exports, module) {
      var isStrictComparable = require_isStrictComparable();
      var keys = require_keys();
      function getMatchData(object) {
        var result = keys(object), length = result.length;
        while (length--) {
          var key = result[length], value = object[key];
          result[length] = [key, value, isStrictComparable(value)];
        }
        return result;
      }
      module.exports = getMatchData;
    }
  });

  // node_modules/lodash/_matchesStrictComparable.js
  var require_matchesStrictComparable = __commonJS({
    "node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
        };
      }
      module.exports = matchesStrictComparable;
    }
  });

  // node_modules/lodash/_baseMatches.js
  var require_baseMatches = __commonJS({
    "node_modules/lodash/_baseMatches.js"(exports, module) {
      var baseIsMatch = require_baseIsMatch();
      var getMatchData = require_getMatchData();
      var matchesStrictComparable = require_matchesStrictComparable();
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      module.exports = baseMatches;
    }
  });

  // node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "node_modules/lodash/isSymbol.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var symbolTag = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      module.exports = isSymbol;
    }
  });

  // node_modules/lodash/_isKey.js
  var require_isKey = __commonJS({
    "node_modules/lodash/_isKey.js"(exports, module) {
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
      }
      module.exports = isKey;
    }
  });

  // node_modules/lodash/memoize.js
  var require_memoize = __commonJS({
    "node_modules/lodash/memoize.js"(exports, module) {
      var MapCache = require_MapCache();
      var FUNC_ERROR_TEXT = "Expected a function";
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result) || cache;
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      module.exports = memoize;
    }
  });

  // node_modules/lodash/_memoizeCapped.js
  var require_memoizeCapped = __commonJS({
    "node_modules/lodash/_memoizeCapped.js"(exports, module) {
      var memoize = require_memoize();
      var MAX_MEMOIZE_SIZE = 500;
      function memoizeCapped(func) {
        var result = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result.cache;
        return result;
      }
      module.exports = memoizeCapped;
    }
  });

  // node_modules/lodash/_stringToPath.js
  var require_stringToPath = __commonJS({
    "node_modules/lodash/_stringToPath.js"(exports, module) {
      var memoizeCapped = require_memoizeCapped();
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = memoizeCapped(function(string) {
        var result = [];
        if (string.charCodeAt(0) === 46) {
          result.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result;
      });
      module.exports = stringToPath;
    }
  });

  // node_modules/lodash/_arrayMap.js
  var require_arrayMap = __commonJS({
    "node_modules/lodash/_arrayMap.js"(exports, module) {
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      module.exports = arrayMap;
    }
  });

  // node_modules/lodash/_baseToString.js
  var require_baseToString = __commonJS({
    "node_modules/lodash/_baseToString.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var arrayMap = require_arrayMap();
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = baseToString;
    }
  });

  // node_modules/lodash/toString.js
  var require_toString = __commonJS({
    "node_modules/lodash/toString.js"(exports, module) {
      var baseToString = require_baseToString();
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      module.exports = toString;
    }
  });

  // node_modules/lodash/_castPath.js
  var require_castPath = __commonJS({
    "node_modules/lodash/_castPath.js"(exports, module) {
      var isArray = require_isArray();
      var isKey = require_isKey();
      var stringToPath = require_stringToPath();
      var toString = require_toString();
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      module.exports = castPath;
    }
  });

  // node_modules/lodash/_toKey.js
  var require_toKey = __commonJS({
    "node_modules/lodash/_toKey.js"(exports, module) {
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = toKey;
    }
  });

  // node_modules/lodash/_baseGet.js
  var require_baseGet = __commonJS({
    "node_modules/lodash/_baseGet.js"(exports, module) {
      var castPath = require_castPath();
      var toKey = require_toKey();
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : void 0;
      }
      module.exports = baseGet;
    }
  });

  // node_modules/lodash/get.js
  var require_get = __commonJS({
    "node_modules/lodash/get.js"(exports, module) {
      var baseGet = require_baseGet();
      function get(object, path, defaultValue) {
        var result = object == null ? void 0 : baseGet(object, path);
        return result === void 0 ? defaultValue : result;
      }
      module.exports = get;
    }
  });

  // node_modules/lodash/_baseHasIn.js
  var require_baseHasIn = __commonJS({
    "node_modules/lodash/_baseHasIn.js"(exports, module) {
      function baseHasIn(object, key) {
        return object != null && key in Object(object);
      }
      module.exports = baseHasIn;
    }
  });

  // node_modules/lodash/_hasPath.js
  var require_hasPath = __commonJS({
    "node_modules/lodash/_hasPath.js"(exports, module) {
      var castPath = require_castPath();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isIndex = require_isIndex();
      var isLength = require_isLength();
      var toKey = require_toKey();
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1, length = path.length, result = false;
        while (++index < length) {
          var key = toKey(path[index]);
          if (!(result = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result || ++index != length) {
          return result;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
      }
      module.exports = hasPath;
    }
  });

  // node_modules/lodash/hasIn.js
  var require_hasIn = __commonJS({
    "node_modules/lodash/hasIn.js"(exports, module) {
      var baseHasIn = require_baseHasIn();
      var hasPath = require_hasPath();
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      module.exports = hasIn;
    }
  });

  // node_modules/lodash/_baseMatchesProperty.js
  var require_baseMatchesProperty = __commonJS({
    "node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
      var baseIsEqual = require_baseIsEqual();
      var get = require_get();
      var hasIn = require_hasIn();
      var isKey = require_isKey();
      var isStrictComparable = require_isStrictComparable();
      var matchesStrictComparable = require_matchesStrictComparable();
      var toKey = require_toKey();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get(object, path);
          return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      module.exports = baseMatchesProperty;
    }
  });

  // node_modules/lodash/identity.js
  var require_identity = __commonJS({
    "node_modules/lodash/identity.js"(exports, module) {
      function identity(value) {
        return value;
      }
      module.exports = identity;
    }
  });

  // node_modules/lodash/_baseProperty.js
  var require_baseProperty = __commonJS({
    "node_modules/lodash/_baseProperty.js"(exports, module) {
      function baseProperty(key) {
        return function(object) {
          return object == null ? void 0 : object[key];
        };
      }
      module.exports = baseProperty;
    }
  });

  // node_modules/lodash/_basePropertyDeep.js
  var require_basePropertyDeep = __commonJS({
    "node_modules/lodash/_basePropertyDeep.js"(exports, module) {
      var baseGet = require_baseGet();
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      module.exports = basePropertyDeep;
    }
  });

  // node_modules/lodash/property.js
  var require_property = __commonJS({
    "node_modules/lodash/property.js"(exports, module) {
      var baseProperty = require_baseProperty();
      var basePropertyDeep = require_basePropertyDeep();
      var isKey = require_isKey();
      var toKey = require_toKey();
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      module.exports = property;
    }
  });

  // node_modules/lodash/_baseIteratee.js
  var require_baseIteratee = __commonJS({
    "node_modules/lodash/_baseIteratee.js"(exports, module) {
      var baseMatches = require_baseMatches();
      var baseMatchesProperty = require_baseMatchesProperty();
      var identity = require_identity();
      var isArray = require_isArray();
      var property = require_property();
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity;
        }
        if (typeof value == "object") {
          return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      module.exports = baseIteratee;
    }
  });

  // node_modules/lodash/_createFind.js
  var require_createFind = __commonJS({
    "node_modules/lodash/_createFind.js"(exports, module) {
      var baseIteratee = require_baseIteratee();
      var isArrayLike = require_isArrayLike();
      var keys = require_keys();
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object(collection);
          if (!isArrayLike(collection)) {
            var iteratee = baseIteratee(predicate, 3);
            collection = keys(collection);
            predicate = function(key) {
              return iteratee(iterable[key], key, iterable);
            };
          }
          var index = findIndexFunc(collection, predicate, fromIndex);
          return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
        };
      }
      module.exports = createFind;
    }
  });

  // node_modules/lodash/_baseFindIndex.js
  var require_baseFindIndex = __commonJS({
    "node_modules/lodash/_baseFindIndex.js"(exports, module) {
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      module.exports = baseFindIndex;
    }
  });

  // node_modules/lodash/_trimmedEndIndex.js
  var require_trimmedEndIndex = __commonJS({
    "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
      var reWhitespace = /\s/;
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      module.exports = trimmedEndIndex;
    }
  });

  // node_modules/lodash/_baseTrim.js
  var require_baseTrim = __commonJS({
    "node_modules/lodash/_baseTrim.js"(exports, module) {
      var trimmedEndIndex = require_trimmedEndIndex();
      var reTrimStart = /^\s+/;
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      module.exports = baseTrim;
    }
  });

  // node_modules/lodash/toNumber.js
  var require_toNumber = __commonJS({
    "node_modules/lodash/toNumber.js"(exports, module) {
      var baseTrim = require_baseTrim();
      var isObject = require_isObject();
      var isSymbol = require_isSymbol();
      var NAN = 0 / 0;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = toNumber;
    }
  });

  // node_modules/lodash/toFinite.js
  var require_toFinite = __commonJS({
    "node_modules/lodash/toFinite.js"(exports, module) {
      var toNumber = require_toNumber();
      var INFINITY = 1 / 0;
      var MAX_INTEGER = 17976931348623157e292;
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      module.exports = toFinite;
    }
  });

  // node_modules/lodash/toInteger.js
  var require_toInteger = __commonJS({
    "node_modules/lodash/toInteger.js"(exports, module) {
      var toFinite = require_toFinite();
      function toInteger(value) {
        var result = toFinite(value), remainder = result % 1;
        return result === result ? remainder ? result - remainder : result : 0;
      }
      module.exports = toInteger;
    }
  });

  // node_modules/lodash/findIndex.js
  var require_findIndex = __commonJS({
    "node_modules/lodash/findIndex.js"(exports, module) {
      var baseFindIndex = require_baseFindIndex();
      var baseIteratee = require_baseIteratee();
      var toInteger = require_toInteger();
      var nativeMax = Math.max;
      function findIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length + index, 0);
        }
        return baseFindIndex(array, baseIteratee(predicate, 3), index);
      }
      module.exports = findIndex;
    }
  });

  // node_modules/lodash/find.js
  var require_find = __commonJS({
    "node_modules/lodash/find.js"(exports, module) {
      var createFind = require_createFind();
      var findIndex = require_findIndex();
      var find = createFind(findIndex);
      module.exports = find;
    }
  });

  // packages/systems/ix2/shared/logic/IX2BrowserSupport.js
  var require_IX2BrowserSupport = __commonJS({
    "packages/systems/ix2/shared/logic/IX2BrowserSupport.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault().default;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.withBrowser = exports.TRANSFORM_STYLE_PREFIXED = exports.TRANSFORM_PREFIXED = exports.IS_BROWSER_ENV = exports.FLEX_PREFIXED = exports.ELEMENT_MATCHES = void 0;
      var _find = _interopRequireDefault(require_find());
      var IS_BROWSER_ENV = typeof window !== "undefined";
      exports.IS_BROWSER_ENV = IS_BROWSER_ENV;
      var withBrowser = (fn, fallback) => {
        if (IS_BROWSER_ENV) {
          return fn();
        }
        return fallback;
      };
      exports.withBrowser = withBrowser;
      var ELEMENT_MATCHES = withBrowser(() => {
        return (0, _find.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], (key) => key in Element.prototype);
      });
      exports.ELEMENT_MATCHES = ELEMENT_MATCHES;
      var FLEX_PREFIXED = withBrowser(() => {
        const el = document.createElement("i");
        const values = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
        const none = "";
        try {
          const {
            length
          } = values;
          for (let i = 0; i < length; i++) {
            const value = values[i];
            el.style.display = value;
            if (el.style.display === value) {
              return value;
            }
          }
          return none;
        } catch (err) {
          return none;
        }
      }, "flex");
      exports.FLEX_PREFIXED = FLEX_PREFIXED;
      var TRANSFORM_PREFIXED = withBrowser(() => {
        const el = document.createElement("i");
        if (el.style.transform == null) {
          const prefixes = ["Webkit", "Moz", "ms"];
          const suffix = "Transform";
          const {
            length
          } = prefixes;
          for (let i = 0; i < length; i++) {
            const prop = prefixes[i] + suffix;
            if (el.style[prop] !== void 0) {
              return prop;
            }
          }
        }
        return "transform";
      }, "transform");
      exports.TRANSFORM_PREFIXED = TRANSFORM_PREFIXED;
      var TRANSFORM_PREFIX = TRANSFORM_PREFIXED.split("transform")[0];
      var TRANSFORM_STYLE_PREFIXED = TRANSFORM_PREFIX ? TRANSFORM_PREFIX + "TransformStyle" : "transformStyle";
      exports.TRANSFORM_STYLE_PREFIXED = TRANSFORM_STYLE_PREFIXED;
    }
  });

  // node_modules/bezier-easing/src/index.js
  var require_src = __commonJS({
    "node_modules/bezier-easing/src/index.js"(exports, module) {
      var NEWTON_ITERATIONS = 4;
      var NEWTON_MIN_SLOPE = 1e-3;
      var SUBDIVISION_PRECISION = 1e-7;
      var SUBDIVISION_MAX_ITERATIONS = 10;
      var kSplineTableSize = 11;
      var kSampleStepSize = 1 / (kSplineTableSize - 1);
      var float32ArraySupported = typeof Float32Array === "function";
      function A(aA1, aA2) {
        return 1 - 3 * aA2 + 3 * aA1;
      }
      function B(aA1, aA2) {
        return 3 * aA2 - 6 * aA1;
      }
      function C(aA1) {
        return 3 * aA1;
      }
      function calcBezier(aT, aA1, aA2) {
        return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
      }
      function getSlope(aT, aA1, aA2) {
        return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
      }
      function binarySubdivide(aX, aA, aB, mX1, mX2) {
        var currentX, currentT, i = 0;
        do {
          currentT = aA + (aB - aA) / 2;
          currentX = calcBezier(currentT, mX1, mX2) - aX;
          if (currentX > 0) {
            aB = currentT;
          } else {
            aA = currentT;
          }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
        return currentT;
      }
      function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
        for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
          var currentSlope = getSlope(aGuessT, mX1, mX2);
          if (currentSlope === 0) {
            return aGuessT;
          }
          var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
          aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
      }
      module.exports = function bezier(mX1, mY1, mX2, mY2) {
        if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
          throw new Error("bezier x values must be in [0, 1] range");
        }
        var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
        if (mX1 !== mY1 || mX2 !== mY2) {
          for (var i = 0; i < kSplineTableSize; ++i) {
            sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
          }
        }
        function getTForX(aX) {
          var intervalStart = 0;
          var currentSample = 1;
          var lastSample = kSplineTableSize - 1;
          for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
          }
          --currentSample;
          var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
          var guessForT = intervalStart + dist * kSampleStepSize;
          var initialSlope = getSlope(guessForT, mX1, mX2);
          if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
          } else if (initialSlope === 0) {
            return guessForT;
          } else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
          }
        }
        return function BezierEasing(x) {
          if (mX1 === mY1 && mX2 === mY2) {
            return x;
          }
          if (x === 0) {
            return 0;
          }
          if (x === 1) {
            return 1;
          }
          return calcBezier(getTForX(x), mY1, mY2);
        };
      };
    }
  });

  // packages/systems/ix2/shared/logic/IX2Easings.js
  var require_IX2Easings = __commonJS({
    "packages/systems/ix2/shared/logic/IX2Easings.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault().default;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.bounce = bounce;
      exports.bouncePast = bouncePast;
      exports.easeOut = exports.easeInOut = exports.easeIn = exports.ease = void 0;
      exports.inBack = inBack;
      exports.inCirc = inCirc;
      exports.inCubic = inCubic;
      exports.inElastic = inElastic;
      exports.inExpo = inExpo;
      exports.inOutBack = inOutBack;
      exports.inOutCirc = inOutCirc;
      exports.inOutCubic = inOutCubic;
      exports.inOutElastic = inOutElastic;
      exports.inOutExpo = inOutExpo;
      exports.inOutQuad = inOutQuad;
      exports.inOutQuart = inOutQuart;
      exports.inOutQuint = inOutQuint;
      exports.inOutSine = inOutSine;
      exports.inQuad = inQuad;
      exports.inQuart = inQuart;
      exports.inQuint = inQuint;
      exports.inSine = inSine;
      exports.outBack = outBack;
      exports.outBounce = outBounce;
      exports.outCirc = outCirc;
      exports.outCubic = outCubic;
      exports.outElastic = outElastic;
      exports.outExpo = outExpo;
      exports.outQuad = outQuad;
      exports.outQuart = outQuart;
      exports.outQuint = outQuint;
      exports.outSine = outSine;
      exports.swingFrom = swingFrom;
      exports.swingFromTo = swingFromTo;
      exports.swingTo = swingTo;
      var _bezierEasing = _interopRequireDefault(require_src());
      var magicSwing = 1.70158;
      var ease = (0, _bezierEasing.default)(0.25, 0.1, 0.25, 1);
      exports.ease = ease;
      var easeIn = (0, _bezierEasing.default)(0.42, 0, 1, 1);
      exports.easeIn = easeIn;
      var easeOut = (0, _bezierEasing.default)(0, 0, 0.58, 1);
      exports.easeOut = easeOut;
      var easeInOut = (0, _bezierEasing.default)(0.42, 0, 0.58, 1);
      exports.easeInOut = easeInOut;
      function inQuad(pos) {
        return Math.pow(pos, 2);
      }
      function outQuad(pos) {
        return -(Math.pow(pos - 1, 2) - 1);
      }
      function inOutQuad(pos) {
        if ((pos /= 0.5) < 1) {
          return 0.5 * Math.pow(pos, 2);
        }
        return -0.5 * ((pos -= 2) * pos - 2);
      }
      function inCubic(pos) {
        return Math.pow(pos, 3);
      }
      function outCubic(pos) {
        return Math.pow(pos - 1, 3) + 1;
      }
      function inOutCubic(pos) {
        if ((pos /= 0.5) < 1) {
          return 0.5 * Math.pow(pos, 3);
        }
        return 0.5 * (Math.pow(pos - 2, 3) + 2);
      }
      function inQuart(pos) {
        return Math.pow(pos, 4);
      }
      function outQuart(pos) {
        return -(Math.pow(pos - 1, 4) - 1);
      }
      function inOutQuart(pos) {
        if ((pos /= 0.5) < 1) {
          return 0.5 * Math.pow(pos, 4);
        }
        return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
      }
      function inQuint(pos) {
        return Math.pow(pos, 5);
      }
      function outQuint(pos) {
        return Math.pow(pos - 1, 5) + 1;
      }
      function inOutQuint(pos) {
        if ((pos /= 0.5) < 1) {
          return 0.5 * Math.pow(pos, 5);
        }
        return 0.5 * (Math.pow(pos - 2, 5) + 2);
      }
      function inSine(pos) {
        return -Math.cos(pos * (Math.PI / 2)) + 1;
      }
      function outSine(pos) {
        return Math.sin(pos * (Math.PI / 2));
      }
      function inOutSine(pos) {
        return -0.5 * (Math.cos(Math.PI * pos) - 1);
      }
      function inExpo(pos) {
        return pos === 0 ? 0 : Math.pow(2, 10 * (pos - 1));
      }
      function outExpo(pos) {
        return pos === 1 ? 1 : -Math.pow(2, -10 * pos) + 1;
      }
      function inOutExpo(pos) {
        if (pos === 0) {
          return 0;
        }
        if (pos === 1) {
          return 1;
        }
        if ((pos /= 0.5) < 1) {
          return 0.5 * Math.pow(2, 10 * (pos - 1));
        }
        return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
      }
      function inCirc(pos) {
        return -(Math.sqrt(1 - pos * pos) - 1);
      }
      function outCirc(pos) {
        return Math.sqrt(1 - Math.pow(pos - 1, 2));
      }
      function inOutCirc(pos) {
        if ((pos /= 0.5) < 1) {
          return -0.5 * (Math.sqrt(1 - pos * pos) - 1);
        }
        return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
      }
      function outBounce(pos) {
        if (pos < 1 / 2.75) {
          return 7.5625 * pos * pos;
        } else if (pos < 2 / 2.75) {
          return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
        } else if (pos < 2.5 / 2.75) {
          return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
        } else {
          return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
        }
      }
      function inBack(pos) {
        const s = magicSwing;
        return pos * pos * ((s + 1) * pos - s);
      }
      function outBack(pos) {
        const s = magicSwing;
        return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
      }
      function inOutBack(pos) {
        let s = magicSwing;
        if ((pos /= 0.5) < 1) {
          return 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s));
        }
        return 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
      }
      function inElastic(pos) {
        let s = magicSwing;
        let p = 0;
        let a = 1;
        if (pos === 0) {
          return 0;
        }
        if (pos === 1) {
          return 1;
        }
        if (!p) {
          p = 0.3;
        }
        if (a < 1) {
          a = 1;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(1 / a);
        }
        return -(a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
      }
      function outElastic(pos) {
        let s = magicSwing;
        let p = 0;
        let a = 1;
        if (pos === 0) {
          return 0;
        }
        if (pos === 1) {
          return 1;
        }
        if (!p) {
          p = 0.3;
        }
        if (a < 1) {
          a = 1;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(1 / a);
        }
        return a * Math.pow(2, -10 * pos) * Math.sin((pos - s) * (2 * Math.PI) / p) + 1;
      }
      function inOutElastic(pos) {
        let s = magicSwing;
        let p = 0;
        let a = 1;
        if (pos === 0) {
          return 0;
        }
        if ((pos /= 1 / 2) === 2) {
          return 1;
        }
        if (!p) {
          p = 0.3 * 1.5;
        }
        if (a < 1) {
          a = 1;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(1 / a);
        }
        if (pos < 1) {
          return -0.5 * (a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
        }
        return a * Math.pow(2, -10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p) * 0.5 + 1;
      }
      function swingFromTo(pos) {
        let s = magicSwing;
        return (pos /= 0.5) < 1 ? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s)) : 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
      }
      function swingFrom(pos) {
        const s = magicSwing;
        return pos * pos * ((s + 1) * pos - s);
      }
      function swingTo(pos) {
        const s = magicSwing;
        return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
      }
      function bounce(pos) {
        if (pos < 1 / 2.75) {
          return 7.5625 * pos * pos;
        } else if (pos < 2 / 2.75) {
          return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
        } else if (pos < 2.5 / 2.75) {
          return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
        } else {
          return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
        }
      }
      function bouncePast(pos) {
        if (pos < 1 / 2.75) {
          return 7.5625 * pos * pos;
        } else if (pos < 2 / 2.75) {
          return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
        } else if (pos < 2.5 / 2.75) {
          return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
        } else {
          return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
        }
      }
    }
  });

  // packages/systems/ix2/shared/logic/IX2EasingUtils.js
  var require_IX2EasingUtils = __commonJS({
    "packages/systems/ix2/shared/logic/IX2EasingUtils.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault().default;
      var _interopRequireWildcard = require_interopRequireWildcard().default;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.applyEasing = applyEasing;
      exports.createBezierEasing = createBezierEasing;
      exports.optimizeFloat = optimizeFloat;
      var easings = _interopRequireWildcard(require_IX2Easings());
      var _bezierEasing = _interopRequireDefault(require_src());
      function optimizeFloat(value, digits = 5, base = 10) {
        const pow = Math.pow(base, digits);
        const float = Number(Math.round(value * pow) / pow);
        return Math.abs(float) > 1e-4 ? float : 0;
      }
      function createBezierEasing(easing) {
        return (0, _bezierEasing.default)(...easing);
      }
      function applyEasing(easing, position, customEasingFn) {
        if (position === 0) {
          return 0;
        }
        if (position === 1) {
          return 1;
        }
        if (customEasingFn) {
          return optimizeFloat(position > 0 ? customEasingFn(position) : position);
        }
        return optimizeFloat(position > 0 && easing && easings[easing] ? easings[easing](position) : position);
      }
    }
  });

  // packages/systems/ix2/shared/reducers/IX2ElementsReducer.js
  var require_IX2ElementsReducer = __commonJS({
    "packages/systems/ix2/shared/reducers/IX2ElementsReducer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.createElementState = createElementState;
      exports.ixElements = void 0;
      exports.mergeActionState = mergeActionState;
      var _timm = require_timm();
      var _constants = require_constants();
      var {
        HTML_ELEMENT,
        PLAIN_OBJECT,
        ABSTRACT_NODE,
        CONFIG_X_VALUE,
        CONFIG_Y_VALUE,
        CONFIG_Z_VALUE,
        CONFIG_VALUE,
        CONFIG_X_UNIT,
        CONFIG_Y_UNIT,
        CONFIG_Z_UNIT,
        CONFIG_UNIT
      } = _constants.IX2EngineConstants;
      var {
        IX2_SESSION_STOPPED,
        IX2_INSTANCE_ADDED,
        IX2_ELEMENT_STATE_CHANGED
      } = _constants.IX2EngineActionTypes;
      var initialState = {};
      var refState = "refState";
      var ixElements = (state = initialState, action = {}) => {
        switch (action.type) {
          case IX2_SESSION_STOPPED: {
            return initialState;
          }
          case IX2_INSTANCE_ADDED: {
            const {
              elementId,
              element: ref,
              origin,
              actionItem,
              refType
            } = action.payload;
            const {
              actionTypeId
            } = actionItem;
            let newState = state;
            if ((0, _timm.getIn)(newState, [elementId, ref]) !== ref) {
              newState = createElementState(newState, ref, refType, elementId, actionItem);
            }
            return mergeActionState(newState, elementId, actionTypeId, origin, actionItem);
          }
          case IX2_ELEMENT_STATE_CHANGED: {
            const {
              elementId,
              actionTypeId,
              current,
              actionItem
            } = action.payload;
            return mergeActionState(state, elementId, actionTypeId, current, actionItem);
          }
          default: {
            return state;
          }
        }
      };
      exports.ixElements = ixElements;
      function createElementState(state, ref, refType, elementId, actionItem) {
        const refId = refType === PLAIN_OBJECT ? (0, _timm.getIn)(actionItem, ["config", "target", "objectId"]) : null;
        return (0, _timm.mergeIn)(state, [elementId], {
          id: elementId,
          ref,
          refId,
          refType
        });
      }
      function mergeActionState(state, elementId, actionTypeId, actionState, actionItem) {
        const units = pickUnits(actionItem);
        const mergePath = [elementId, refState, actionTypeId];
        return (0, _timm.mergeIn)(state, mergePath, actionState, units);
      }
      var valueUnitPairs = [[CONFIG_X_VALUE, CONFIG_X_UNIT], [CONFIG_Y_VALUE, CONFIG_Y_UNIT], [CONFIG_Z_VALUE, CONFIG_Z_UNIT], [CONFIG_VALUE, CONFIG_UNIT]];
      function pickUnits(actionItem) {
        const {
          config
        } = actionItem;
        return valueUnitPairs.reduce((result, pair) => {
          const valueKey = pair[0];
          const unitKey = pair[1];
          const configValue = config[valueKey];
          const configUnit = config[unitKey];
          if (configValue != null && configUnit != null) {
            result[unitKey] = configUnit;
          }
          return result;
        }, {});
      }
    }
  });

  // packages/systems/ix2/plugins/IX2Lottie.js
  var require_IX2Lottie = __commonJS({
    "packages/systems/ix2/plugins/IX2Lottie.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.renderPlugin = exports.getPluginOrigin = exports.getPluginDuration = exports.getPluginDestination = exports.getPluginConfig = exports.createPluginInstance = exports.clearPlugin = void 0;
      var getPluginConfig = (actionItemConfig) => {
        return actionItemConfig.value;
      };
      exports.getPluginConfig = getPluginConfig;
      var getPluginDuration = (element, actionItem) => {
        if (actionItem.config.duration !== "auto") {
          return null;
        }
        const duration = parseFloat(element.getAttribute("data-duration"));
        if (duration > 0) {
          return duration * 1e3;
        }
        return parseFloat(element.getAttribute("data-default-duration")) * 1e3;
      };
      exports.getPluginDuration = getPluginDuration;
      var getPluginOrigin = (refState) => {
        return refState || {
          value: 0
        };
      };
      exports.getPluginOrigin = getPluginOrigin;
      var getPluginDestination = (actionItemConfig) => {
        return {
          value: actionItemConfig.value
        };
      };
      exports.getPluginDestination = getPluginDestination;
      var createPluginInstance = (element) => {
        const instance = window.Webflow.require("lottie").createInstance(element);
        instance.stop();
        instance.setSubframe(true);
        return instance;
      };
      exports.createPluginInstance = createPluginInstance;
      var renderPlugin = (pluginInstance, refState, actionItem) => {
        if (!pluginInstance) {
          return;
        }
        const percent = refState[actionItem.actionTypeId].value / 100;
        pluginInstance.goToFrame(pluginInstance.frames * percent);
      };
      exports.renderPlugin = renderPlugin;
      var clearPlugin = (element) => {
        const instance = window.Webflow.require("lottie").createInstance(element);
        instance.stop();
      };
      exports.clearPlugin = clearPlugin;
    }
  });

  // packages/systems/ix2/plugins/IX2Spline.js
  var require_IX2Spline = __commonJS({
    "packages/systems/ix2/plugins/IX2Spline.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.renderPlugin = exports.getPluginOrigin = exports.getPluginDuration = exports.getPluginDestination = exports.getPluginConfig = exports.createPluginInstance = exports.clearPlugin = void 0;
      var queryContainerElement = (elementId) => document.querySelector(`[data-w-id="${elementId}"]`);
      var getFrontendModule = () => window.Webflow.require("spline");
      var difference = (arr1, arr2) => arr1.filter((x) => !arr2.includes(x));
      var getPluginConfig = (actionItemConfig, key) => {
        return actionItemConfig.value[key];
      };
      exports.getPluginConfig = getPluginConfig;
      var getPluginDuration = () => {
        return null;
      };
      exports.getPluginDuration = getPluginDuration;
      var DEFAULT_VALUES = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1
      });
      var getPluginOrigin = (refState, actionItem) => {
        const destination = actionItem.config.value;
        const destinationKeys = Object.keys(destination);
        if (refState) {
          const stateKeys = Object.keys(refState);
          const diffKeys = difference(destinationKeys, stateKeys);
          if (diffKeys.length) {
            const origin2 = diffKeys.reduce((result, key) => {
              result[key] = DEFAULT_VALUES[key];
              return result;
            }, refState);
            return origin2;
          }
          return refState;
        }
        const origin = destinationKeys.reduce((result, key) => {
          result[key] = DEFAULT_VALUES[key];
          return result;
        }, {});
        return origin;
      };
      exports.getPluginOrigin = getPluginOrigin;
      var getPluginDestination = (actionItemConfig) => {
        return actionItemConfig.value;
      };
      exports.getPluginDestination = getPluginDestination;
      var createPluginInstance = (element, actionItem) => {
        var _actionItem$config, _actionItem$config$ta;
        const pluginElementId = actionItem === null || actionItem === void 0 ? void 0 : (_actionItem$config = actionItem.config) === null || _actionItem$config === void 0 ? void 0 : (_actionItem$config$ta = _actionItem$config.target) === null || _actionItem$config$ta === void 0 ? void 0 : _actionItem$config$ta.pluginElement;
        return pluginElementId ? queryContainerElement(pluginElementId) : null;
      };
      exports.createPluginInstance = createPluginInstance;
      var renderPlugin = (containerElement, refState, actionItem) => {
        const instance = getFrontendModule().getInstance(containerElement);
        const objectId = actionItem.config.target.objectId;
        if (!instance || !objectId) {
          return;
        }
        const obj = instance.spline.findObjectById(objectId);
        if (!obj) {
          return;
        }
        const {
          PLUGIN_SPLINE: props
        } = refState;
        if (props.positionX != null) {
          obj.position.x = props.positionX;
        }
        if (props.positionY != null) {
          obj.position.y = props.positionY;
        }
        if (props.positionZ != null) {
          obj.position.z = props.positionZ;
        }
        if (props.rotationX != null) {
          obj.rotation.x = props.rotationX;
        }
        if (props.rotationY != null) {
          obj.rotation.y = props.rotationY;
        }
        if (props.rotationZ != null) {
          obj.rotation.z = props.rotationZ;
        }
        if (props.scaleX != null) {
          obj.scale.x = props.scaleX;
        }
        if (props.scaleY != null) {
          obj.scale.y = props.scaleY;
        }
        if (props.scaleZ != null) {
          obj.scale.z = props.scaleZ;
        }
      };
      exports.renderPlugin = renderPlugin;
      var clearPlugin = () => {
        return null;
      };
      exports.clearPlugin = clearPlugin;
    }
  });

  // packages/systems/ix2/plugins/index.js
  var require_plugins = __commonJS({
    "packages/systems/ix2/plugins/index.js"(exports) {
      "use strict";
      var _interopRequireWildcard = require_interopRequireWildcard().default;
      var _interopRequireDefault = require_interopRequireDefault().default;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.pluginMethodMap = void 0;
      var _extends2 = _interopRequireDefault(require_extends());
      var _constants = require_constants();
      var lottie = _interopRequireWildcard(require_IX2Lottie());
      var spline = _interopRequireWildcard(require_IX2Spline());
      var pluginMethodMap = /* @__PURE__ */ new Map([[_constants.ActionTypeConsts.PLUGIN_LOTTIE, (0, _extends2.default)({}, lottie)], [_constants.ActionTypeConsts.PLUGIN_SPLINE, (0, _extends2.default)({}, spline)]]);
      exports.pluginMethodMap = pluginMethodMap;
    }
  });

  // packages/systems/ix2/shared/logic/IX2VanillaPlugins.js
  var require_IX2VanillaPlugins = __commonJS({
    "packages/systems/ix2/shared/logic/IX2VanillaPlugins.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getPluginOrigin = exports.getPluginDuration = exports.getPluginDestination = exports.getPluginConfig = exports.createPluginInstance = exports.clearPlugin = void 0;
      exports.isPluginType = isPluginType;
      exports.renderPlugin = void 0;
      var _IX2BrowserSupport = require_IX2BrowserSupport();
      var _plugins = require_plugins();
      function isPluginType(actionTypeId) {
        return _plugins.pluginMethodMap.has(actionTypeId);
      }
      var pluginMethod = (methodName) => (actionTypeId) => {
        if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
          return () => null;
        }
        const plugin = _plugins.pluginMethodMap.get(actionTypeId);
        if (!plugin) {
          throw new Error(`IX2 no plugin configured for: ${actionTypeId}`);
        }
        const method = plugin[methodName];
        if (!method) {
          throw new Error(`IX2 invalid plugin method: ${methodName}`);
        }
        return method;
      };
      var getPluginConfig = pluginMethod("getPluginConfig");
      exports.getPluginConfig = getPluginConfig;
      var getPluginOrigin = pluginMethod("getPluginOrigin");
      exports.getPluginOrigin = getPluginOrigin;
      var getPluginDuration = pluginMethod("getPluginDuration");
      exports.getPluginDuration = getPluginDuration;
      var getPluginDestination = pluginMethod("getPluginDestination");
      exports.getPluginDestination = getPluginDestination;
      var createPluginInstance = pluginMethod("createPluginInstance");
      exports.createPluginInstance = createPluginInstance;
      var renderPlugin = pluginMethod("renderPlugin");
      exports.renderPlugin = renderPlugin;
      var clearPlugin = pluginMethod("clearPlugin");
      exports.clearPlugin = clearPlugin;
    }
  });

  // node_modules/lodash/defaultTo.js
  var require_defaultTo = __commonJS({
    "node_modules/lodash/defaultTo.js"(exports, module) {
      function defaultTo(value, defaultValue) {
        return value == null || value !== value ? defaultValue : value;
      }
      module.exports = defaultTo;
    }
  });

  // node_modules/lodash/_arrayReduce.js
  var require_arrayReduce = __commonJS({
    "node_modules/lodash/_arrayReduce.js"(exports, module) {
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      module.exports = arrayReduce;
    }
  });

  // node_modules/lodash/_createBaseFor.js
  var require_createBaseFor = __commonJS({
    "node_modules/lodash/_createBaseFor.js"(exports, module) {
      function createBaseFor(fromRight) {
        return function(object, iteratee, keysFunc) {
          var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      module.exports = createBaseFor;
    }
  });

  // node_modules/lodash/_baseFor.js
  var require_baseFor = __commonJS({
    "node_modules/lodash/_baseFor.js"(exports, module) {
      var createBaseFor = require_createBaseFor();
      var baseFor = createBaseFor();
      module.exports = baseFor;
    }
  });

  // node_modules/lodash/_baseForOwn.js
  var require_baseForOwn = __commonJS({
    "node_modules/lodash/_baseForOwn.js"(exports, module) {
      var baseFor = require_baseFor();
      var keys = require_keys();
      function baseForOwn(object, iteratee) {
        return object && baseFor(object, iteratee, keys);
      }
      module.exports = baseForOwn;
    }
  });

  // node_modules/lodash/_createBaseEach.js
  var require_createBaseEach = __commonJS({
    "node_modules/lodash/_createBaseEach.js"(exports, module) {
      var isArrayLike = require_isArrayLike();
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee);
          }
          var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
          while (fromRight ? index-- : ++index < length) {
            if (iteratee(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      module.exports = createBaseEach;
    }
  });

  // node_modules/lodash/_baseEach.js
  var require_baseEach = __commonJS({
    "node_modules/lodash/_baseEach.js"(exports, module) {
      var baseForOwn = require_baseForOwn();
      var createBaseEach = require_createBaseEach();
      var baseEach = createBaseEach(baseForOwn);
      module.exports = baseEach;
    }
  });

  // node_modules/lodash/_baseReduce.js
  var require_baseReduce = __commonJS({
    "node_modules/lodash/_baseReduce.js"(exports, module) {
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      module.exports = baseReduce;
    }
  });

  // node_modules/lodash/reduce.js
  var require_reduce = __commonJS({
    "node_modules/lodash/reduce.js"(exports, module) {
      var arrayReduce = require_arrayReduce();
      var baseEach = require_baseEach();
      var baseIteratee = require_baseIteratee();
      var baseReduce = require_baseReduce();
      var isArray = require_isArray();
      function reduce(collection, iteratee, accumulator) {
        var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
        return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
      }
      module.exports = reduce;
    }
  });

  // node_modules/lodash/findLastIndex.js
  var require_findLastIndex = __commonJS({
    "node_modules/lodash/findLastIndex.js"(exports, module) {
      var baseFindIndex = require_baseFindIndex();
      var baseIteratee = require_baseIteratee();
      var toInteger = require_toInteger();
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      function findLastIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = length - 1;
        if (fromIndex !== void 0) {
          index = toInteger(fromIndex);
          index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
        }
        return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
      }
      module.exports = findLastIndex;
    }
  });

  // node_modules/lodash/findLast.js
  var require_findLast = __commonJS({
    "node_modules/lodash/findLast.js"(exports, module) {
      var createFind = require_createFind();
      var findLastIndex = require_findLastIndex();
      var findLast = createFind(findLastIndex);
      module.exports = findLast;
    }
  });

  // packages/systems/ix2/shared/logic/shallowEqual.js
  var require_shallowEqual = __commonJS({
    "packages/systems/ix2/shared/logic/shallowEqual.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      function is(x, y) {
        if (x === y) {
          return x !== 0 || y !== 0 || 1 / x === 1 / y;
        }
        return x !== x && y !== y;
      }
      function shallowEqual(objA, objB) {
        if (is(objA, objB)) {
          return true;
        }
        if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
          return false;
        }
        const keysA = Object.keys(objA);
        const keysB = Object.keys(objB);
        if (keysA.length !== keysB.length) {
          return false;
        }
        for (let i = 0; i < keysA.length; i++) {
          if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
          }
        }
        return true;
      }
      var _default = shallowEqual;
      exports.default = _default;
    }
  });

  // packages/systems/ix2/shared/logic/IX2VanillaUtils.js
  var require_IX2VanillaUtils = __commonJS({
    "packages/systems/ix2/shared/logic/IX2VanillaUtils.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault().default;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.cleanupHTMLElement = cleanupHTMLElement;
      exports.clearAllStyles = clearAllStyles;
      exports.clearObjectCache = clearObjectCache;
      exports.getActionListProgress = getActionListProgress;
      exports.getAffectedElements = getAffectedElements;
      exports.getComputedStyle = getComputedStyle;
      exports.getDestinationValues = getDestinationValues;
      exports.getElementId = getElementId;
      exports.getInstanceId = getInstanceId;
      exports.getInstanceOrigin = getInstanceOrigin;
      exports.getItemConfigByKey = void 0;
      exports.getMaxDurationItemIndex = getMaxDurationItemIndex;
      exports.getNamespacedParameterId = getNamespacedParameterId;
      exports.getRenderType = getRenderType;
      exports.getStyleProp = getStyleProp;
      exports.mediaQueriesEqual = mediaQueriesEqual;
      exports.observeStore = observeStore;
      exports.reduceListToGroup = reduceListToGroup;
      exports.reifyState = reifyState;
      exports.renderHTMLElement = renderHTMLElement;
      Object.defineProperty(exports, "shallowEqual", {
        enumerable: true,
        get: function() {
          return _shallowEqual.default;
        }
      });
      exports.shouldAllowMediaQuery = shouldAllowMediaQuery;
      exports.shouldNamespaceEventParameter = shouldNamespaceEventParameter;
      exports.stringifyTarget = stringifyTarget;
      var _defaultTo = _interopRequireDefault(require_defaultTo());
      var _reduce = _interopRequireDefault(require_reduce());
      var _findLast = _interopRequireDefault(require_findLast());
      var _timm = require_timm();
      var _constants = require_constants();
      var _shallowEqual = _interopRequireDefault(require_shallowEqual());
      var _IX2EasingUtils = require_IX2EasingUtils();
      var _IX2VanillaPlugins = require_IX2VanillaPlugins();
      var _IX2BrowserSupport = require_IX2BrowserSupport();
      var {
        BACKGROUND,
        TRANSFORM,
        TRANSLATE_3D,
        SCALE_3D,
        ROTATE_X,
        ROTATE_Y,
        ROTATE_Z,
        SKEW,
        PRESERVE_3D,
        FLEX,
        OPACITY,
        FILTER,
        FONT_VARIATION_SETTINGS,
        WIDTH,
        HEIGHT,
        BACKGROUND_COLOR,
        BORDER_COLOR,
        COLOR,
        CHILDREN,
        IMMEDIATE_CHILDREN,
        SIBLINGS,
        PARENT,
        DISPLAY,
        WILL_CHANGE,
        AUTO,
        COMMA_DELIMITER,
        COLON_DELIMITER,
        BAR_DELIMITER,
        RENDER_TRANSFORM,
        RENDER_GENERAL,
        RENDER_STYLE,
        RENDER_PLUGIN
      } = _constants.IX2EngineConstants;
      var {
        TRANSFORM_MOVE,
        TRANSFORM_SCALE,
        TRANSFORM_ROTATE,
        TRANSFORM_SKEW,
        STYLE_OPACITY,
        STYLE_FILTER,
        STYLE_FONT_VARIATION,
        STYLE_SIZE,
        STYLE_BACKGROUND_COLOR,
        STYLE_BORDER,
        STYLE_TEXT_COLOR,
        GENERAL_DISPLAY,
        OBJECT_VALUE
      } = _constants.ActionTypeConsts;
      var trim = (v) => v.trim();
      var colorStyleProps = Object.freeze({
        [STYLE_BACKGROUND_COLOR]: BACKGROUND_COLOR,
        [STYLE_BORDER]: BORDER_COLOR,
        [STYLE_TEXT_COLOR]: COLOR
      });
      var willChangeProps = Object.freeze({
        // $FlowFixMe
        [_IX2BrowserSupport.TRANSFORM_PREFIXED]: TRANSFORM,
        [BACKGROUND_COLOR]: BACKGROUND,
        [OPACITY]: OPACITY,
        [FILTER]: FILTER,
        [WIDTH]: WIDTH,
        [HEIGHT]: HEIGHT,
        [FONT_VARIATION_SETTINGS]: FONT_VARIATION_SETTINGS
      });
      var objectCache = /* @__PURE__ */ new Map();
      function clearObjectCache() {
        objectCache.clear();
      }
      var instanceCount = 1;
      function getInstanceId() {
        return "i" + instanceCount++;
      }
      var elementCount = 1;
      function getElementId(ixElements, ref) {
        for (const key in ixElements) {
          const ixEl = ixElements[key];
          if (ixEl && ixEl.ref === ref) {
            return ixEl.id;
          }
        }
        return "e" + elementCount++;
      }
      function reifyState({
        events,
        actionLists,
        site
      } = {}) {
        const eventTypeMap = (0, _reduce.default)(events, (result, event) => {
          const {
            eventTypeId
          } = event;
          if (!result[eventTypeId]) {
            result[eventTypeId] = {};
          }
          result[eventTypeId][event.id] = event;
          return result;
        }, {});
        let mediaQueries = site && site.mediaQueries;
        let mediaQueryKeys = [];
        if (mediaQueries) {
          mediaQueryKeys = mediaQueries.map((mq) => mq.key);
        } else {
          mediaQueries = [];
          console.warn(`IX2 missing mediaQueries in site data`);
        }
        return {
          ixData: {
            events,
            actionLists,
            eventTypeMap,
            mediaQueries,
            mediaQueryKeys
          }
        };
      }
      var strictEqual = (a, b) => a === b;
      function observeStore({
        store,
        select,
        onChange,
        comparator = strictEqual
      }) {
        const {
          getState,
          subscribe
        } = store;
        const unsubscribe = subscribe(handleChange);
        let currentState = select(getState());
        function handleChange() {
          const nextState = select(getState());
          if (nextState == null) {
            unsubscribe();
            return;
          }
          if (!comparator(nextState, currentState)) {
            currentState = nextState;
            onChange(currentState, store);
          }
        }
        return unsubscribe;
      }
      function normalizeTarget(target) {
        const type = typeof target;
        if (type === "string") {
          return {
            id: target
          };
        } else if (target != null && type === "object") {
          const {
            id,
            objectId,
            selector,
            selectorGuids,
            appliesTo,
            useEventTarget
          } = target;
          return {
            id,
            objectId,
            selector,
            selectorGuids,
            appliesTo,
            useEventTarget
          };
        }
        return {};
      }
      function getAffectedElements({
        config,
        event,
        eventTarget,
        elementRoot,
        elementApi
      }) {
        var _event$action$config$, _event$action, _event$action$config;
        if (!elementApi) {
          throw new Error("IX2 missing elementApi");
        }
        const {
          targets
        } = config;
        if (Array.isArray(targets) && targets.length > 0) {
          return targets.reduce((accumulator, target2) => accumulator.concat(getAffectedElements({
            config: {
              target: target2
            },
            event,
            eventTarget,
            elementRoot,
            elementApi
          })), []);
        }
        const {
          getValidDocument,
          getQuerySelector,
          queryDocument,
          getChildElements,
          getSiblingElements,
          matchSelector,
          elementContains,
          isSiblingNode
        } = elementApi;
        const {
          target
        } = config;
        if (!target) {
          return [];
        }
        const {
          id,
          // $FlowFixMe
          objectId,
          // $FlowFixMe
          selector,
          // $FlowFixMe
          selectorGuids,
          // $FlowFixMe
          appliesTo,
          // $FlowFixMe
          useEventTarget
        } = normalizeTarget(target);
        if (objectId) {
          const ref = objectCache.has(objectId) ? objectCache.get(objectId) : objectCache.set(objectId, {}).get(objectId);
          return [ref];
        }
        if (appliesTo === _constants.EventAppliesTo.PAGE) {
          const doc = getValidDocument(id);
          return doc ? [doc] : [];
        }
        const overrides = (_event$action$config$ = event === null || event === void 0 ? void 0 : (_event$action = event.action) === null || _event$action === void 0 ? void 0 : (_event$action$config = _event$action.config) === null || _event$action$config === void 0 ? void 0 : _event$action$config.affectedElements) !== null && _event$action$config$ !== void 0 ? _event$action$config$ : {};
        const override = overrides[id || selector] || {};
        const validOverride = Boolean(override.id || override.selector);
        let limitAffectedElements;
        let baseSelector;
        let finalSelector;
        const eventTargetSelector = event && getQuerySelector(normalizeTarget(event.target));
        if (validOverride) {
          limitAffectedElements = override.limitAffectedElements;
          baseSelector = eventTargetSelector;
          finalSelector = getQuerySelector(override);
        } else {
          baseSelector = finalSelector = getQuerySelector({
            id,
            selector,
            selectorGuids
          });
        }
        if (event && useEventTarget) {
          const eventTargets = eventTarget && (finalSelector || useEventTarget === true) ? [eventTarget] : queryDocument(eventTargetSelector);
          if (finalSelector) {
            if (useEventTarget === PARENT) {
              return queryDocument(finalSelector).filter((parentElement) => eventTargets.some((targetElement) => elementContains(parentElement, targetElement)));
            }
            if (useEventTarget === CHILDREN) {
              return queryDocument(finalSelector).filter((childElement) => eventTargets.some((targetElement) => elementContains(targetElement, childElement)));
            }
            if (useEventTarget === SIBLINGS) {
              return queryDocument(finalSelector).filter((siblingElement) => eventTargets.some((targetElement) => isSiblingNode(targetElement, siblingElement)));
            }
          }
          return eventTargets;
        }
        if (baseSelector == null || finalSelector == null) {
          return [];
        }
        if (_IX2BrowserSupport.IS_BROWSER_ENV && elementRoot) {
          return queryDocument(finalSelector).filter((element) => elementRoot.contains(element));
        }
        if (limitAffectedElements === CHILDREN) {
          return queryDocument(baseSelector, finalSelector);
        } else if (limitAffectedElements === IMMEDIATE_CHILDREN) {
          return getChildElements(queryDocument(baseSelector)).filter(matchSelector(finalSelector));
        } else if (limitAffectedElements === SIBLINGS) {
          return getSiblingElements(queryDocument(baseSelector)).filter(matchSelector(finalSelector));
        } else {
          return queryDocument(finalSelector);
        }
      }
      function getComputedStyle({
        element,
        actionItem
      }) {
        if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
          return {};
        }
        const {
          actionTypeId
        } = actionItem;
        switch (actionTypeId) {
          case STYLE_SIZE:
          case STYLE_BACKGROUND_COLOR:
          case STYLE_BORDER:
          case STYLE_TEXT_COLOR:
          case GENERAL_DISPLAY:
            return window.getComputedStyle(element);
          default:
            return {};
        }
      }
      var pxValueRegex = /px/;
      var getFilterDefaults = (actionState, filters) => filters.reduce((result, filter) => {
        if (result[filter.type] == null) {
          result[filter.type] = filterDefaults[
            // $FlowFixMe - property `saturation` (did you mean `saturate`?) is missing in `filterDefaults`
            filter.type
          ];
        }
        return result;
      }, actionState || {});
      var getFontVariationDefaults = (actionState, fontVariations) => fontVariations.reduce((result, fontVariation) => {
        if (result[fontVariation.type] == null) {
          result[fontVariation.type] = fontVariationDefaults[fontVariation.type] || fontVariation.defaultValue || 0;
        }
        return result;
      }, actionState || {});
      function getInstanceOrigin(element, refState = {}, computedStyle = {}, actionItem, elementApi) {
        const {
          getStyle
        } = elementApi;
        const {
          actionTypeId
        } = actionItem;
        if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
          return (0, _IX2VanillaPlugins.getPluginOrigin)(actionTypeId)(refState[actionTypeId], actionItem);
        }
        switch (actionItem.actionTypeId) {
          case TRANSFORM_MOVE:
          case TRANSFORM_SCALE:
          case TRANSFORM_ROTATE:
          case TRANSFORM_SKEW: {
            return refState[actionItem.actionTypeId] || transformDefaults[actionItem.actionTypeId];
          }
          case STYLE_FILTER:
            return getFilterDefaults(refState[actionItem.actionTypeId], actionItem.config.filters);
          case STYLE_FONT_VARIATION:
            return getFontVariationDefaults(refState[actionItem.actionTypeId], actionItem.config.fontVariations);
          case STYLE_OPACITY:
            return {
              value: (0, _defaultTo.default)(parseFloat(getStyle(element, OPACITY)), 1)
            };
          case STYLE_SIZE: {
            const inlineWidth = getStyle(element, WIDTH);
            const inlineHeight = getStyle(element, HEIGHT);
            let widthValue;
            let heightValue;
            if (actionItem.config.widthUnit === AUTO) {
              widthValue = pxValueRegex.test(inlineWidth) ? parseFloat(inlineWidth) : parseFloat(computedStyle.width);
            } else {
              widthValue = (0, _defaultTo.default)(parseFloat(inlineWidth), parseFloat(computedStyle.width));
            }
            if (actionItem.config.heightUnit === AUTO) {
              heightValue = pxValueRegex.test(inlineHeight) ? parseFloat(inlineHeight) : parseFloat(computedStyle.height);
            } else {
              heightValue = (0, _defaultTo.default)(parseFloat(inlineHeight), parseFloat(computedStyle.height));
            }
            return {
              widthValue,
              heightValue
            };
          }
          case STYLE_BACKGROUND_COLOR:
          case STYLE_BORDER:
          case STYLE_TEXT_COLOR:
            return parseColor({
              element,
              actionTypeId: actionItem.actionTypeId,
              computedStyle,
              getStyle
            });
          case GENERAL_DISPLAY:
            return {
              value: (0, _defaultTo.default)(getStyle(element, DISPLAY), computedStyle.display)
            };
          case OBJECT_VALUE:
            return refState[actionItem.actionTypeId] || {
              value: 0
            };
          default: {
            return;
          }
        }
      }
      var reduceFilters = (result, filter) => {
        if (filter) {
          result[filter.type] = filter.value || 0;
        }
        return result;
      };
      var reduceFontVariations = (result, fontVariation) => {
        if (fontVariation) {
          result[fontVariation.type] = fontVariation.value || 0;
        }
        return result;
      };
      var getItemConfigByKey = (actionTypeId, key, config) => {
        if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
          return (0, _IX2VanillaPlugins.getPluginConfig)(actionTypeId)(config, key);
        }
        switch (actionTypeId) {
          case STYLE_FILTER: {
            const filter = (0, _findLast.default)(config.filters, ({
              type
            }) => type === key);
            return filter ? filter.value : 0;
          }
          case STYLE_FONT_VARIATION: {
            const fontVariation = (0, _findLast.default)(config.fontVariations, ({
              type
            }) => type === key);
            return fontVariation ? fontVariation.value : 0;
          }
          default:
            return config[key];
        }
      };
      exports.getItemConfigByKey = getItemConfigByKey;
      function getDestinationValues({
        element,
        actionItem,
        elementApi
      }) {
        if ((0, _IX2VanillaPlugins.isPluginType)(actionItem.actionTypeId)) {
          return (0, _IX2VanillaPlugins.getPluginDestination)(actionItem.actionTypeId)(actionItem.config);
        }
        switch (actionItem.actionTypeId) {
          case TRANSFORM_MOVE:
          case TRANSFORM_SCALE:
          case TRANSFORM_ROTATE:
          case TRANSFORM_SKEW: {
            const {
              xValue,
              yValue,
              zValue
            } = actionItem.config;
            return {
              xValue,
              yValue,
              zValue
            };
          }
          case STYLE_SIZE: {
            const {
              getStyle,
              setStyle,
              getProperty
            } = elementApi;
            const {
              widthUnit,
              heightUnit
            } = actionItem.config;
            let {
              widthValue,
              heightValue
            } = actionItem.config;
            if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
              return {
                widthValue,
                heightValue
              };
            }
            if (widthUnit === AUTO) {
              const temp = getStyle(element, WIDTH);
              setStyle(element, WIDTH, "");
              widthValue = getProperty(element, "offsetWidth");
              setStyle(element, WIDTH, temp);
            }
            if (heightUnit === AUTO) {
              const temp = getStyle(element, HEIGHT);
              setStyle(element, HEIGHT, "");
              heightValue = getProperty(element, "offsetHeight");
              setStyle(element, HEIGHT, temp);
            }
            return {
              widthValue,
              heightValue
            };
          }
          case STYLE_BACKGROUND_COLOR:
          case STYLE_BORDER:
          case STYLE_TEXT_COLOR: {
            const {
              rValue,
              gValue,
              bValue,
              aValue
            } = actionItem.config;
            return {
              rValue,
              gValue,
              bValue,
              aValue
            };
          }
          case STYLE_FILTER: {
            return actionItem.config.filters.reduce(reduceFilters, {});
          }
          case STYLE_FONT_VARIATION: {
            return actionItem.config.fontVariations.reduce(reduceFontVariations, {});
          }
          default: {
            const {
              value
            } = actionItem.config;
            return {
              value
            };
          }
        }
      }
      function getRenderType(actionTypeId) {
        if (/^TRANSFORM_/.test(actionTypeId)) {
          return RENDER_TRANSFORM;
        }
        if (/^STYLE_/.test(actionTypeId)) {
          return RENDER_STYLE;
        }
        if (/^GENERAL_/.test(actionTypeId)) {
          return RENDER_GENERAL;
        }
        if (/^PLUGIN_/.test(actionTypeId)) {
          return RENDER_PLUGIN;
        }
      }
      function getStyleProp(renderType, actionTypeId) {
        return renderType === RENDER_STYLE ? actionTypeId.replace("STYLE_", "").toLowerCase() : null;
      }
      function renderHTMLElement(element, refState, actionState, eventId, actionItem, styleProp, elementApi, renderType, pluginInstance) {
        switch (renderType) {
          case RENDER_TRANSFORM: {
            return renderTransform(element, refState, actionState, actionItem, elementApi);
          }
          case RENDER_STYLE: {
            return renderStyle(element, refState, actionState, actionItem, styleProp, elementApi);
          }
          case RENDER_GENERAL: {
            return renderGeneral(element, actionItem, elementApi);
          }
          case RENDER_PLUGIN: {
            const {
              actionTypeId
            } = actionItem;
            if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
              return (0, _IX2VanillaPlugins.renderPlugin)(actionTypeId)(pluginInstance, refState, actionItem);
            }
          }
        }
      }
      var transformDefaults = {
        [TRANSFORM_MOVE]: Object.freeze({
          xValue: 0,
          yValue: 0,
          zValue: 0
        }),
        [TRANSFORM_SCALE]: Object.freeze({
          xValue: 1,
          yValue: 1,
          zValue: 1
        }),
        [TRANSFORM_ROTATE]: Object.freeze({
          xValue: 0,
          yValue: 0,
          zValue: 0
        }),
        [TRANSFORM_SKEW]: Object.freeze({
          xValue: 0,
          yValue: 0
        })
      };
      var filterDefaults = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100
      });
      var fontVariationDefaults = Object.freeze({
        wght: 0,
        opsz: 0,
        wdth: 0,
        slnt: 0
      });
      var getFilterUnit = (filterType, actionItemConfig) => {
        const filter = (0, _findLast.default)(actionItemConfig.filters, ({
          type
        }) => type === filterType);
        if (filter && filter.unit) {
          return filter.unit;
        }
        switch (filterType) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      };
      var transformKeys = Object.keys(transformDefaults);
      function renderTransform(element, refState, actionState, actionItem, elementApi) {
        const newTransform = transformKeys.map((actionTypeId) => {
          const defaults = transformDefaults[actionTypeId];
          const {
            xValue = defaults.xValue,
            yValue = defaults.yValue,
            // $FlowFixMe
            zValue = defaults.zValue,
            xUnit = "",
            yUnit = "",
            zUnit = ""
          } = refState[actionTypeId] || {};
          switch (actionTypeId) {
            case TRANSFORM_MOVE:
              return `${TRANSLATE_3D}(${xValue}${xUnit}, ${yValue}${yUnit}, ${zValue}${zUnit})`;
            case TRANSFORM_SCALE:
              return `${SCALE_3D}(${xValue}${xUnit}, ${yValue}${yUnit}, ${zValue}${zUnit})`;
            case TRANSFORM_ROTATE:
              return `${ROTATE_X}(${xValue}${xUnit}) ${ROTATE_Y}(${yValue}${yUnit}) ${ROTATE_Z}(${zValue}${zUnit})`;
            case TRANSFORM_SKEW:
              return `${SKEW}(${xValue}${xUnit}, ${yValue}${yUnit})`;
            default:
              return "";
          }
        }).join(" ");
        const {
          setStyle
        } = elementApi;
        addWillChange(element, _IX2BrowserSupport.TRANSFORM_PREFIXED, elementApi);
        setStyle(element, _IX2BrowserSupport.TRANSFORM_PREFIXED, newTransform);
        if (hasDefined3dTransform(actionItem, actionState)) {
          setStyle(element, _IX2BrowserSupport.TRANSFORM_STYLE_PREFIXED, PRESERVE_3D);
        }
      }
      function renderFilter(element, actionState, actionItemConfig, elementApi) {
        const filterValue = (0, _reduce.default)(actionState, (result, value, type) => `${result} ${type}(${value}${getFilterUnit(type, actionItemConfig)})`, "");
        const {
          setStyle
        } = elementApi;
        addWillChange(element, FILTER, elementApi);
        setStyle(element, FILTER, filterValue);
      }
      function renderFontVariation(element, actionState, actionItemConfig, elementApi) {
        const fontVariationValue = (0, _reduce.default)(actionState, (result, value, type) => {
          result.push(`"${type}" ${value}`);
          return result;
        }, []).join(", ");
        const {
          setStyle
        } = elementApi;
        addWillChange(element, FONT_VARIATION_SETTINGS, elementApi);
        setStyle(element, FONT_VARIATION_SETTINGS, fontVariationValue);
      }
      function hasDefined3dTransform({
        actionTypeId
      }, {
        xValue,
        yValue,
        zValue
      }) {
        return actionTypeId === TRANSFORM_MOVE && zValue !== void 0 || // SCALE_Z
        actionTypeId === TRANSFORM_SCALE && zValue !== void 0 || // ROTATE_X or ROTATE_Y
        actionTypeId === TRANSFORM_ROTATE && (xValue !== void 0 || yValue !== void 0);
      }
      var paramCapture = "\\(([^)]+)\\)";
      var rgbValidRegex = /^rgb/;
      var rgbMatchRegex = RegExp(`rgba?${paramCapture}`);
      function getFirstMatch(regex, value) {
        const match = regex.exec(value);
        return match ? match[1] : "";
      }
      function parseColor({
        element,
        actionTypeId,
        computedStyle,
        getStyle
      }) {
        const prop = colorStyleProps[actionTypeId];
        const inlineValue = getStyle(element, prop);
        const value = rgbValidRegex.test(inlineValue) ? inlineValue : computedStyle[prop];
        const matches = getFirstMatch(rgbMatchRegex, value).split(COMMA_DELIMITER);
        return {
          rValue: (0, _defaultTo.default)(parseInt(matches[0], 10), 255),
          gValue: (0, _defaultTo.default)(parseInt(matches[1], 10), 255),
          bValue: (0, _defaultTo.default)(parseInt(matches[2], 10), 255),
          aValue: (0, _defaultTo.default)(parseFloat(matches[3]), 1)
        };
      }
      function renderStyle(element, refState, actionState, actionItem, styleProp, elementApi) {
        const {
          setStyle
        } = elementApi;
        switch (actionItem.actionTypeId) {
          case STYLE_SIZE: {
            let {
              widthUnit = "",
              heightUnit = ""
            } = actionItem.config;
            const {
              widthValue,
              heightValue
            } = actionState;
            if (widthValue !== void 0) {
              if (widthUnit === AUTO) {
                widthUnit = "px";
              }
              addWillChange(element, WIDTH, elementApi);
              setStyle(element, WIDTH, widthValue + widthUnit);
            }
            if (heightValue !== void 0) {
              if (heightUnit === AUTO) {
                heightUnit = "px";
              }
              addWillChange(element, HEIGHT, elementApi);
              setStyle(element, HEIGHT, heightValue + heightUnit);
            }
            break;
          }
          case STYLE_FILTER: {
            renderFilter(element, actionState, actionItem.config, elementApi);
            break;
          }
          case STYLE_FONT_VARIATION: {
            renderFontVariation(element, actionState, actionItem.config, elementApi);
            break;
          }
          case STYLE_BACKGROUND_COLOR:
          case STYLE_BORDER:
          case STYLE_TEXT_COLOR: {
            const prop = colorStyleProps[actionItem.actionTypeId];
            const rValue = Math.round(actionState.rValue);
            const gValue = Math.round(actionState.gValue);
            const bValue = Math.round(actionState.bValue);
            const aValue = actionState.aValue;
            addWillChange(element, prop, elementApi);
            setStyle(element, prop, aValue >= 1 ? `rgb(${rValue},${gValue},${bValue})` : `rgba(${rValue},${gValue},${bValue},${aValue})`);
            break;
          }
          default: {
            const {
              unit = ""
            } = actionItem.config;
            addWillChange(element, styleProp, elementApi);
            setStyle(element, styleProp, actionState.value + unit);
            break;
          }
        }
      }
      function renderGeneral(element, actionItem, elementApi) {
        const {
          setStyle
        } = elementApi;
        switch (actionItem.actionTypeId) {
          case GENERAL_DISPLAY: {
            const {
              value
            } = actionItem.config;
            if (value === FLEX && _IX2BrowserSupport.IS_BROWSER_ENV) {
              setStyle(element, DISPLAY, _IX2BrowserSupport.FLEX_PREFIXED);
            } else {
              setStyle(element, DISPLAY, value);
            }
            return;
          }
        }
      }
      function addWillChange(element, prop, elementApi) {
        if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
          return;
        }
        const validProp = willChangeProps[prop];
        if (!validProp) {
          return;
        }
        const {
          getStyle,
          setStyle
        } = elementApi;
        const value = getStyle(element, WILL_CHANGE);
        if (!value) {
          setStyle(element, WILL_CHANGE, validProp);
          return;
        }
        const values = value.split(COMMA_DELIMITER).map(trim);
        if (values.indexOf(validProp) === -1) {
          setStyle(element, WILL_CHANGE, values.concat(validProp).join(COMMA_DELIMITER));
        }
      }
      function removeWillChange(element, prop, elementApi) {
        if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
          return;
        }
        const validProp = willChangeProps[prop];
        if (!validProp) {
          return;
        }
        const {
          getStyle,
          setStyle
        } = elementApi;
        const value = getStyle(element, WILL_CHANGE);
        if (!value || value.indexOf(validProp) === -1) {
          return;
        }
        setStyle(element, WILL_CHANGE, value.split(COMMA_DELIMITER).map(trim).filter((v) => v !== validProp).join(COMMA_DELIMITER));
      }
      function clearAllStyles({
        store,
        elementApi
      }) {
        const {
          ixData
        } = store.getState();
        const {
          events = {},
          actionLists = {}
        } = ixData;
        Object.keys(events).forEach((eventId) => {
          const event = events[eventId];
          const {
            config
          } = event.action;
          const {
            actionListId
          } = config;
          const actionList = actionLists[actionListId];
          if (actionList) {
            clearActionListStyles({
              actionList,
              event,
              elementApi
            });
          }
        });
        Object.keys(actionLists).forEach((actionListId) => {
          clearActionListStyles({
            actionList: actionLists[actionListId],
            elementApi
          });
        });
      }
      function clearActionListStyles({
        actionList = {},
        event,
        elementApi
      }) {
        const {
          actionItemGroups,
          continuousParameterGroups
        } = actionList;
        actionItemGroups && actionItemGroups.forEach((actionGroup) => {
          clearActionGroupStyles({
            actionGroup,
            event,
            elementApi
          });
        });
        continuousParameterGroups && continuousParameterGroups.forEach((paramGroup) => {
          const {
            continuousActionGroups
          } = paramGroup;
          continuousActionGroups.forEach((actionGroup) => {
            clearActionGroupStyles({
              actionGroup,
              event,
              elementApi
            });
          });
        });
      }
      function clearActionGroupStyles({
        actionGroup,
        event,
        elementApi
      }) {
        const {
          actionItems
        } = actionGroup;
        actionItems.forEach(({
          actionTypeId,
          config
        }) => {
          let clearElement;
          if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
            clearElement = (0, _IX2VanillaPlugins.clearPlugin)(actionTypeId);
          } else {
            clearElement = processElementByType({
              effect: clearStyleProp,
              actionTypeId,
              elementApi
            });
          }
          getAffectedElements({
            config,
            event,
            elementApi
          }).forEach(clearElement);
        });
      }
      function cleanupHTMLElement(element, actionItem, elementApi) {
        const {
          setStyle,
          getStyle
        } = elementApi;
        const {
          actionTypeId
        } = actionItem;
        if (actionTypeId === STYLE_SIZE) {
          const {
            config
          } = actionItem;
          if (config.widthUnit === AUTO) {
            setStyle(element, WIDTH, "");
          }
          if (config.heightUnit === AUTO) {
            setStyle(element, HEIGHT, "");
          }
        }
        if (getStyle(element, WILL_CHANGE)) {
          processElementByType({
            effect: removeWillChange,
            actionTypeId,
            elementApi
          })(element);
        }
      }
      var processElementByType = ({
        effect,
        actionTypeId,
        elementApi
      }) => (element) => {
        switch (actionTypeId) {
          case TRANSFORM_MOVE:
          case TRANSFORM_SCALE:
          case TRANSFORM_ROTATE:
          case TRANSFORM_SKEW:
            effect(element, _IX2BrowserSupport.TRANSFORM_PREFIXED, elementApi);
            break;
          case STYLE_FILTER:
            effect(element, FILTER, elementApi);
            break;
          case STYLE_FONT_VARIATION:
            effect(element, FONT_VARIATION_SETTINGS, elementApi);
            break;
          case STYLE_OPACITY:
            effect(element, OPACITY, elementApi);
            break;
          case STYLE_SIZE:
            effect(element, WIDTH, elementApi);
            effect(element, HEIGHT, elementApi);
            break;
          case STYLE_BACKGROUND_COLOR:
          case STYLE_BORDER:
          case STYLE_TEXT_COLOR:
            effect(element, colorStyleProps[actionTypeId], elementApi);
            break;
          case GENERAL_DISPLAY:
            effect(element, DISPLAY, elementApi);
            break;
        }
      };
      function clearStyleProp(element, prop, elementApi) {
        const {
          setStyle
        } = elementApi;
        removeWillChange(element, prop, elementApi);
        setStyle(element, prop, "");
        if (prop === _IX2BrowserSupport.TRANSFORM_PREFIXED) {
          setStyle(element, _IX2BrowserSupport.TRANSFORM_STYLE_PREFIXED, "");
        }
      }
      function getMaxDurationItemIndex(actionItems) {
        let maxDuration = 0;
        let resultIndex = 0;
        actionItems.forEach((actionItem, index) => {
          const {
            config
          } = actionItem;
          const total = config.delay + config.duration;
          if (total >= maxDuration) {
            maxDuration = total;
            resultIndex = index;
          }
        });
        return resultIndex;
      }
      function getActionListProgress(actionList, instance) {
        const {
          actionItemGroups,
          useFirstGroupAsInitialState
        } = actionList;
        const {
          actionItem: instanceItem,
          verboseTimeElapsed = 0
        } = instance;
        let totalDuration = 0;
        let elapsedDuration = 0;
        actionItemGroups.forEach((group, index) => {
          if (useFirstGroupAsInitialState && index === 0) {
            return;
          }
          const {
            actionItems
          } = group;
          const carrierItem = actionItems[getMaxDurationItemIndex(actionItems)];
          const {
            config,
            actionTypeId
          } = carrierItem;
          if (instanceItem.id === carrierItem.id) {
            elapsedDuration = totalDuration + verboseTimeElapsed;
          }
          const duration = getRenderType(actionTypeId) === RENDER_GENERAL ? 0 : config.duration;
          totalDuration += config.delay + duration;
        });
        return totalDuration > 0 ? (0, _IX2EasingUtils.optimizeFloat)(elapsedDuration / totalDuration) : 0;
      }
      function reduceListToGroup({
        actionList,
        actionItemId,
        rawData
      }) {
        const {
          actionItemGroups,
          continuousParameterGroups
        } = actionList;
        const newActionItems = [];
        const takeItemUntilMatch = (actionItem) => {
          newActionItems.push((0, _timm.mergeIn)(actionItem, ["config"], {
            delay: 0,
            duration: 0
          }));
          return actionItem.id === actionItemId;
        };
        actionItemGroups && actionItemGroups.some(({
          actionItems
        }) => {
          return actionItems.some(takeItemUntilMatch);
        });
        continuousParameterGroups && continuousParameterGroups.some((paramGroup) => {
          const {
            continuousActionGroups
          } = paramGroup;
          return continuousActionGroups.some(({
            actionItems
          }) => {
            return actionItems.some(takeItemUntilMatch);
          });
        });
        return (0, _timm.setIn)(rawData, ["actionLists"], {
          [actionList.id]: {
            id: actionList.id,
            actionItemGroups: [{
              actionItems: newActionItems
            }]
          }
        });
      }
      function shouldNamespaceEventParameter(eventTypeId, {
        basedOn
      }) {
        return eventTypeId === _constants.EventTypeConsts.SCROLLING_IN_VIEW && (basedOn === _constants.EventBasedOn.ELEMENT || basedOn == null) || eventTypeId === _constants.EventTypeConsts.MOUSE_MOVE && basedOn === _constants.EventBasedOn.ELEMENT;
      }
      function getNamespacedParameterId(eventStateKey, continuousParameterGroupId) {
        const namespacedParameterId = eventStateKey + COLON_DELIMITER + continuousParameterGroupId;
        return namespacedParameterId;
      }
      function shouldAllowMediaQuery(mediaQueries, mediaQueryKey) {
        if (mediaQueryKey == null) {
          return true;
        }
        return mediaQueries.indexOf(mediaQueryKey) !== -1;
      }
      function mediaQueriesEqual(listA, listB) {
        return (0, _shallowEqual.default)(listA && listA.sort(), listB && listB.sort());
      }
      function stringifyTarget(target) {
        if (typeof target === "string") {
          return target;
        }
        if (target.pluginElement && target.objectId) {
          return target.pluginElement + BAR_DELIMITER + target.objectId;
        }
        const {
          id = "",
          selector = "",
          useEventTarget = ""
        } = target;
        return id + BAR_DELIMITER + selector + BAR_DELIMITER + useEventTarget;
      }
    }
  });

  // packages/systems/ix2/shared/index.js
  var require_shared2 = __commonJS({
    "packages/systems/ix2/shared/index.js"(exports) {
      "use strict";
      var _interopRequireWildcard = require_interopRequireWildcard().default;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.IX2VanillaUtils = exports.IX2VanillaPlugins = exports.IX2ElementsReducer = exports.IX2Easings = exports.IX2EasingUtils = exports.IX2BrowserSupport = void 0;
      var IX2BrowserSupport = _interopRequireWildcard(require_IX2BrowserSupport());
      exports.IX2BrowserSupport = IX2BrowserSupport;
      var IX2Easings = _interopRequireWildcard(require_IX2Easings());
      exports.IX2Easings = IX2Easings;
      var IX2EasingUtils = _interopRequireWildcard(require_IX2EasingUtils());
      exports.IX2EasingUtils = IX2EasingUtils;
      var IX2ElementsReducer = _interopRequireWildcard(require_IX2ElementsReducer());
      exports.IX2ElementsReducer = IX2ElementsReducer;
      var IX2VanillaPlugins = _interopRequireWildcard(require_IX2VanillaPlugins());
      exports.IX2VanillaPlugins = IX2VanillaPlugins;
      var IX2VanillaUtils = _interopRequireWildcard(require_IX2VanillaUtils());
      exports.IX2VanillaUtils = IX2VanillaUtils;
    }
  });

  // packages/systems/ix2/engine/reducers/IX2InstancesReducer.js
  var require_IX2InstancesReducer = __commonJS({
    "packages/systems/ix2/engine/reducers/IX2InstancesReducer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ixInstances = void 0;
      var _constants = require_constants();
      var _shared = require_shared2();
      var _timm = require_timm();
      var {
        IX2_RAW_DATA_IMPORTED,
        IX2_SESSION_STOPPED,
        IX2_INSTANCE_ADDED,
        IX2_INSTANCE_STARTED,
        IX2_INSTANCE_REMOVED,
        IX2_ANIMATION_FRAME_CHANGED
      } = _constants.IX2EngineActionTypes;
      var {
        optimizeFloat,
        applyEasing,
        createBezierEasing
      } = _shared.IX2EasingUtils;
      var {
        RENDER_GENERAL
      } = _constants.IX2EngineConstants;
      var {
        getItemConfigByKey,
        getRenderType,
        getStyleProp
      } = _shared.IX2VanillaUtils;
      var continuousInstance = (state, action) => {
        const {
          position: lastPosition,
          parameterId,
          actionGroups,
          destinationKeys,
          smoothing,
          restingValue,
          actionTypeId,
          customEasingFn,
          skipMotion,
          skipToValue
        } = state;
        const {
          parameters
        } = action.payload;
        let velocity = Math.max(1 - smoothing, 0.01);
        let paramValue = parameters[parameterId];
        if (paramValue == null) {
          velocity = 1;
          paramValue = restingValue;
        }
        const nextPosition = Math.max(paramValue, 0) || 0;
        const positionDiff = optimizeFloat(nextPosition - lastPosition);
        const position = skipMotion ? skipToValue : optimizeFloat(lastPosition + positionDiff * velocity);
        const keyframePosition = position * 100;
        if (position === lastPosition && state.current) {
          return state;
        }
        let fromActionItem;
        let toActionItem;
        let positionOffset;
        let positionRange;
        for (let i = 0, {
          length
        } = actionGroups; i < length; i++) {
          const {
            keyframe,
            actionItems
          } = actionGroups[i];
          if (i === 0) {
            fromActionItem = actionItems[0];
          }
          if (keyframePosition >= keyframe) {
            fromActionItem = actionItems[0];
            const nextGroup = actionGroups[i + 1];
            const hasNextItem = nextGroup && keyframePosition !== keyframe;
            toActionItem = hasNextItem ? nextGroup.actionItems[0] : null;
            if (hasNextItem) {
              positionOffset = keyframe / 100;
              positionRange = (nextGroup.keyframe - keyframe) / 100;
            }
          }
        }
        const current = {};
        if (fromActionItem && !toActionItem) {
          for (let i = 0, {
            length
          } = destinationKeys; i < length; i++) {
            const key = destinationKeys[i];
            current[key] = getItemConfigByKey(actionTypeId, key, fromActionItem.config);
          }
        } else if (fromActionItem && toActionItem && positionOffset !== void 0 && positionRange !== void 0) {
          const localPosition = (position - positionOffset) / positionRange;
          const easing = fromActionItem.config.easing;
          const eased = applyEasing(easing, localPosition, customEasingFn);
          for (let i = 0, {
            length
          } = destinationKeys; i < length; i++) {
            const key = destinationKeys[i];
            const fromVal = getItemConfigByKey(actionTypeId, key, fromActionItem.config);
            const toVal = getItemConfigByKey(actionTypeId, key, toActionItem.config);
            const diff = toVal - fromVal;
            const value = diff * eased + fromVal;
            current[key] = value;
          }
        }
        return (0, _timm.merge)(state, {
          position,
          current
        });
      };
      var timedInstance = (state, action) => {
        const {
          active,
          origin,
          start,
          immediate,
          renderType,
          verbose,
          actionItem,
          destination,
          destinationKeys,
          pluginDuration,
          instanceDelay,
          customEasingFn,
          skipMotion
        } = state;
        const easing = actionItem.config.easing;
        let {
          duration,
          delay
        } = actionItem.config;
        if (pluginDuration != null) {
          duration = pluginDuration;
        }
        delay = instanceDelay != null ? instanceDelay : delay;
        if (renderType === RENDER_GENERAL) {
          duration = 0;
        } else if (immediate || skipMotion) {
          duration = delay = 0;
        }
        const {
          now
        } = action.payload;
        if (active && origin) {
          const delta = now - (start + delay);
          if (verbose) {
            const verboseDelta = now - start;
            const verboseDuration = duration + delay;
            const verbosePosition = optimizeFloat(Math.min(Math.max(0, verboseDelta / verboseDuration), 1));
            state = (0, _timm.set)(state, "verboseTimeElapsed", verboseDuration * verbosePosition);
          }
          if (delta < 0) {
            return state;
          }
          const position = optimizeFloat(Math.min(Math.max(0, delta / duration), 1));
          const eased = applyEasing(easing, position, customEasingFn);
          const newProps = {};
          let current = null;
          if (destinationKeys.length) {
            current = destinationKeys.reduce((result, key) => {
              const destValue = destination[key];
              const originVal = parseFloat(origin[key]) || 0;
              const diff = parseFloat(destValue) - originVal;
              const value = diff * eased + originVal;
              result[key] = value;
              return result;
            }, {});
          }
          newProps.current = current;
          newProps.position = position;
          if (position === 1) {
            newProps.active = false;
            newProps.complete = true;
          }
          return (0, _timm.merge)(state, newProps);
        }
        return state;
      };
      var ixInstances = (state = Object.freeze({}), action) => {
        switch (action.type) {
          case IX2_RAW_DATA_IMPORTED: {
            return action.payload.ixInstances || Object.freeze({});
          }
          case IX2_SESSION_STOPPED: {
            return Object.freeze({});
          }
          case IX2_INSTANCE_ADDED: {
            const {
              instanceId,
              elementId,
              actionItem,
              eventId,
              eventTarget,
              eventStateKey,
              actionListId,
              groupIndex,
              isCarrier,
              origin,
              destination,
              immediate,
              verbose,
              continuous,
              parameterId,
              actionGroups,
              smoothing,
              restingValue,
              pluginInstance,
              pluginDuration,
              instanceDelay,
              skipMotion,
              skipToValue
            } = action.payload;
            const {
              actionTypeId
            } = actionItem;
            const renderType = getRenderType(actionTypeId);
            const styleProp = getStyleProp(renderType, actionTypeId);
            const destinationKeys = Object.keys(destination).filter((key) => destination[key] != null);
            const {
              easing
            } = actionItem.config;
            return (0, _timm.set)(state, instanceId, {
              id: instanceId,
              elementId,
              active: false,
              position: 0,
              start: 0,
              origin,
              destination,
              destinationKeys,
              immediate,
              verbose,
              current: null,
              actionItem,
              actionTypeId,
              eventId,
              eventTarget,
              eventStateKey,
              actionListId,
              groupIndex,
              renderType,
              isCarrier,
              styleProp,
              continuous,
              parameterId,
              actionGroups,
              smoothing,
              restingValue,
              pluginInstance,
              pluginDuration,
              instanceDelay,
              skipMotion,
              skipToValue,
              customEasingFn: Array.isArray(easing) && easing.length === 4 ? createBezierEasing(easing) : void 0
            });
          }
          case IX2_INSTANCE_STARTED: {
            const {
              instanceId,
              time
            } = action.payload;
            return (0, _timm.mergeIn)(state, [instanceId], {
              active: true,
              complete: false,
              start: time
            });
          }
          case IX2_INSTANCE_REMOVED: {
            const {
              instanceId
            } = action.payload;
            if (!state[instanceId]) {
              return state;
            }
            const newState = {};
            const keys = Object.keys(state);
            const {
              length
            } = keys;
            for (let i = 0; i < length; i++) {
              const key = keys[i];
              if (key !== instanceId) {
                newState[key] = state[key];
              }
            }
            return newState;
          }
          case IX2_ANIMATION_FRAME_CHANGED: {
            let newState = state;
            const keys = Object.keys(state);
            const {
              length
            } = keys;
            for (let i = 0; i < length; i++) {
              const key = keys[i];
              const instance = state[key];
              const reducer = instance.continuous ? continuousInstance : timedInstance;
              newState = (0, _timm.set)(newState, key, reducer(instance, action));
            }
            return newState;
          }
          default: {
            return state;
          }
        }
      };
      exports.ixInstances = ixInstances;
    }
  });

  // packages/systems/ix2/engine/reducers/IX2ParametersReducer.js
  var require_IX2ParametersReducer = __commonJS({
    "packages/systems/ix2/engine/reducers/IX2ParametersReducer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ixParameters = void 0;
      var _constants = require_constants();
      var {
        IX2_RAW_DATA_IMPORTED,
        IX2_SESSION_STOPPED,
        IX2_PARAMETER_CHANGED
      } = _constants.IX2EngineActionTypes;
      var ixParameters = (state = {
        /*mutable flat state*/
      }, action) => {
        switch (action.type) {
          case IX2_RAW_DATA_IMPORTED: {
            return action.payload.ixParameters || {
              /*mutable flat state*/
            };
          }
          case IX2_SESSION_STOPPED: {
            return {
              /*mutable flat state*/
            };
          }
          case IX2_PARAMETER_CHANGED: {
            const {
              key,
              value
            } = action.payload;
            state[key] = value;
            return state;
          }
          default: {
            return state;
          }
        }
      };
      exports.ixParameters = ixParameters;
    }
  });

  // packages/systems/ix2/engine/reducers/IX2Reducer.js
  var require_IX2Reducer = __commonJS({
    "packages/systems/ix2/engine/reducers/IX2Reducer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _redux = require_lib2();
      var _IX2DataReducer = require_IX2DataReducer();
      var _IX2RequestReducer = require_IX2RequestReducer();
      var _IX2SessionReducer = require_IX2SessionReducer();
      var _shared = require_shared2();
      var _IX2InstancesReducer = require_IX2InstancesReducer();
      var _IX2ParametersReducer = require_IX2ParametersReducer();
      var {
        ixElements
      } = _shared.IX2ElementsReducer;
      var _default = (0, _redux.combineReducers)({
        ixData: _IX2DataReducer.ixData,
        ixRequest: _IX2RequestReducer.ixRequest,
        ixSession: _IX2SessionReducer.ixSession,
        ixElements,
        ixInstances: _IX2InstancesReducer.ixInstances,
        ixParameters: _IX2ParametersReducer.ixParameters
      });
      exports.default = _default;
    }
  });

  // node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
  var require_objectWithoutPropertiesLoose = __commonJS({
    "node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"(exports, module) {
      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null)
          return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          target[key] = source[key];
        }
        return target;
      }
      module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/lodash/isString.js
  var require_isString = __commonJS({
    "node_modules/lodash/isString.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isArray = require_isArray();
      var isObjectLike = require_isObjectLike();
      var stringTag = "[object String]";
      function isString(value) {
        return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
      }
      module.exports = isString;
    }
  });

  // node_modules/lodash/_asciiSize.js
  var require_asciiSize = __commonJS({
    "node_modules/lodash/_asciiSize.js"(exports, module) {
      var baseProperty = require_baseProperty();
      var asciiSize = baseProperty("length");
      module.exports = asciiSize;
    }
  });

  // node_modules/lodash/_hasUnicode.js
  var require_hasUnicode = __commonJS({
    "node_modules/lodash/_hasUnicode.js"(exports, module) {
      var rsAstralRange = "\\ud800-\\udfff";
      var rsComboMarksRange = "\\u0300-\\u036f";
      var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
      var rsComboSymbolsRange = "\\u20d0-\\u20ff";
      var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      var rsVarRange = "\\ufe0e\\ufe0f";
      var rsZWJ = "\\u200d";
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      module.exports = hasUnicode;
    }
  });

  // node_modules/lodash/_unicodeSize.js
  var require_unicodeSize = __commonJS({
    "node_modules/lodash/_unicodeSize.js"(exports, module) {
      var rsAstralRange = "\\ud800-\\udfff";
      var rsComboMarksRange = "\\u0300-\\u036f";
      var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
      var rsComboSymbolsRange = "\\u20d0-\\u20ff";
      var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      var rsVarRange = "\\ufe0e\\ufe0f";
      var rsAstral = "[" + rsAstralRange + "]";
      var rsCombo = "[" + rsComboRange + "]";
      var rsFitz = "\\ud83c[\\udffb-\\udfff]";
      var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
      var rsNonAstral = "[^" + rsAstralRange + "]";
      var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
      var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
      var rsZWJ = "\\u200d";
      var reOptMod = rsModifier + "?";
      var rsOptVar = "[" + rsVarRange + "]?";
      var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
      var rsSeq = rsOptVar + reOptMod + rsOptJoin;
      var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      module.exports = unicodeSize;
    }
  });

  // node_modules/lodash/_stringSize.js
  var require_stringSize = __commonJS({
    "node_modules/lodash/_stringSize.js"(exports, module) {
      var asciiSize = require_asciiSize();
      var hasUnicode = require_hasUnicode();
      var unicodeSize = require_unicodeSize();
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      module.exports = stringSize;
    }
  });

  // node_modules/lodash/size.js
  var require_size = __commonJS({
    "node_modules/lodash/size.js"(exports, module) {
      var baseKeys = require_baseKeys();
      var getTag = require_getTag();
      var isArrayLike = require_isArrayLike();
      var isString = require_isString();
      var stringSize = require_stringSize();
      var mapTag = "[object Map]";
      var setTag = "[object Set]";
      function size(collection) {
        if (collection == null) {
          return 0;
        }
        if (isArrayLike(collection)) {
          return isString(collection) ? stringSize(collection) : collection.length;
        }
        var tag = getTag(collection);
        if (tag == mapTag || tag == setTag) {
          return collection.size;
        }
        return baseKeys(collection).length;
      }
      module.exports = size;
    }
  });

  // node_modules/lodash/negate.js
  var require_negate = __commonJS({
    "node_modules/lodash/negate.js"(exports, module) {
      var FUNC_ERROR_TEXT = "Expected a function";
      function negate(predicate) {
        if (typeof predicate != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      module.exports = negate;
    }
  });

  // node_modules/lodash/_defineProperty.js
  var require_defineProperty = __commonJS({
    "node_modules/lodash/_defineProperty.js"(exports, module) {
      var getNative = require_getNative();
      var defineProperty = function() {
        try {
          var func = getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      module.exports = defineProperty;
    }
  });

  // node_modules/lodash/_baseAssignValue.js
  var require_baseAssignValue = __commonJS({
    "node_modules/lodash/_baseAssignValue.js"(exports, module) {
      var defineProperty = require_defineProperty();
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      module.exports = baseAssignValue;
    }
  });

  // node_modules/lodash/_assignValue.js
  var require_assignValue = __commonJS({
    "node_modules/lodash/_assignValue.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var eq = require_eq();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      module.exports = assignValue;
    }
  });

  // node_modules/lodash/_baseSet.js
  var require_baseSet = __commonJS({
    "node_modules/lodash/_baseSet.js"(exports, module) {
      var assignValue = require_assignValue();
      var castPath = require_castPath();
      var isIndex = require_isIndex();
      var isObject = require_isObject();
      var toKey = require_toKey();
      function baseSet(object, path, value, customizer) {
        if (!isObject(object)) {
          return object;
        }
        path = castPath(path, object);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index < length) {
          var key = toKey(path[index]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : void 0;
            if (newValue === void 0) {
              newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      module.exports = baseSet;
    }
  });

  // node_modules/lodash/_basePickBy.js
  var require_basePickBy = __commonJS({
    "node_modules/lodash/_basePickBy.js"(exports, module) {
      var baseGet = require_baseGet();
      var baseSet = require_baseSet();
      var castPath = require_castPath();
      function basePickBy(object, paths, predicate) {
        var index = -1, length = paths.length, result = {};
        while (++index < length) {
          var path = paths[index], value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result, castPath(path, object), value);
          }
        }
        return result;
      }
      module.exports = basePickBy;
    }
  });

  // node_modules/lodash/_getSymbolsIn.js
  var require_getSymbolsIn = __commonJS({
    "node_modules/lodash/_getSymbolsIn.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var getPrototype = require_getPrototype();
      var getSymbols = require_getSymbols();
      var stubArray = require_stubArray();
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result = [];
        while (object) {
          arrayPush(result, getSymbols(object));
          object = getPrototype(object);
        }
        return result;
      };
      module.exports = getSymbolsIn;
    }
  });

  // node_modules/lodash/_nativeKeysIn.js
  var require_nativeKeysIn = __commonJS({
    "node_modules/lodash/_nativeKeysIn.js"(exports, module) {
      function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = nativeKeysIn;
    }
  });

  // node_modules/lodash/_baseKeysIn.js
  var require_baseKeysIn = __commonJS({
    "node_modules/lodash/_baseKeysIn.js"(exports, module) {
      var isObject = require_isObject();
      var isPrototype = require_isPrototype();
      var nativeKeysIn = require_nativeKeysIn();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeysIn;
    }
  });

  // node_modules/lodash/keysIn.js
  var require_keysIn = __commonJS({
    "node_modules/lodash/keysIn.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeysIn = require_baseKeysIn();
      var isArrayLike = require_isArrayLike();
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      module.exports = keysIn;
    }
  });

  // node_modules/lodash/_getAllKeysIn.js
  var require_getAllKeysIn = __commonJS({
    "node_modules/lodash/_getAllKeysIn.js"(exports, module) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbolsIn = require_getSymbolsIn();
      var keysIn = require_keysIn();
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }
      module.exports = getAllKeysIn;
    }
  });

  // node_modules/lodash/pickBy.js
  var require_pickBy = __commonJS({
    "node_modules/lodash/pickBy.js"(exports, module) {
      var arrayMap = require_arrayMap();
      var baseIteratee = require_baseIteratee();
      var basePickBy = require_basePickBy();
      var getAllKeysIn = require_getAllKeysIn();
      function pickBy(object, predicate) {
        if (object == null) {
          return {};
        }
        var props = arrayMap(getAllKeysIn(object), function(prop) {
          return [prop];
        });
        predicate = baseIteratee(predicate);
        return basePickBy(object, props, function(value, path) {
          return predicate(value, path[0]);
        });
      }
      module.exports = pickBy;
    }
  });

  // node_modules/lodash/omitBy.js
  var require_omitBy = __commonJS({
    "node_modules/lodash/omitBy.js"(exports, module) {
      var baseIteratee = require_baseIteratee();
      var negate = require_negate();
      var pickBy = require_pickBy();
      function omitBy(object, predicate) {
        return pickBy(object, negate(baseIteratee(predicate)));
      }
      module.exports = omitBy;
    }
  });

  // node_modules/lodash/isEmpty.js
  var require_isEmpty = __commonJS({
    "node_modules/lodash/isEmpty.js"(exports, module) {
      var baseKeys = require_baseKeys();
      var getTag = require_getTag();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isArrayLike = require_isArrayLike();
      var isBuffer = require_isBuffer();
      var isPrototype = require_isPrototype();
      var isTypedArray = require_isTypedArray();
      var mapTag = "[object Map]";
      var setTag = "[object Set]";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function isEmpty(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
          return !value.length;
        }
        var tag = getTag(value);
        if (tag == mapTag || tag == setTag) {
          return !value.size;
        }
        if (isPrototype(value)) {
          return !baseKeys(value).length;
        }
        for (var key in value) {
          if (hasOwnProperty.call(value, key)) {
            return false;
          }
        }
        return true;
      }
      module.exports = isEmpty;
    }
  });

  // node_modules/lodash/mapValues.js
  var require_mapValues = __commonJS({
    "node_modules/lodash/mapValues.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var baseForOwn = require_baseForOwn();
      var baseIteratee = require_baseIteratee();
      function mapValues(object, iteratee) {
        var result = {};
        iteratee = baseIteratee(iteratee, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result, key, iteratee(value, key, object2));
        });
        return result;
      }
      module.exports = mapValues;
    }
  });

  // node_modules/lodash/_arrayEach.js
  var require_arrayEach = __commonJS({
    "node_modules/lodash/_arrayEach.js"(exports, module) {
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      module.exports = arrayEach;
    }
  });

  // node_modules/lodash/_castFunction.js
  var require_castFunction = __commonJS({
    "node_modules/lodash/_castFunction.js"(exports, module) {
      var identity = require_identity();
      function castFunction(value) {
        return typeof value == "function" ? value : identity;
      }
      module.exports = castFunction;
    }
  });

  // node_modules/lodash/forEach.js
  var require_forEach = __commonJS({
    "node_modules/lodash/forEach.js"(exports, module) {
      var arrayEach = require_arrayEach();
      var baseEach = require_baseEach();
      var castFunction = require_castFunction();
      var isArray = require_isArray();
      function forEach(collection, iteratee) {
        var func = isArray(collection) ? arrayEach : baseEach;
        return func(collection, castFunction(iteratee));
      }
      module.exports = forEach;
    }
  });

  // node_modules/lodash/now.js
  var require_now = __commonJS({
    "node_modules/lodash/now.js"(exports, module) {
      var root = require_root();
      var now = function() {
        return root.Date.now();
      };
      module.exports = now;
    }
  });

  // node_modules/lodash/debounce.js
  var require_debounce = __commonJS({
    "node_modules/lodash/debounce.js"(exports, module) {
      var isObject = require_isObject();
      var now = require_now();
      var toNumber = require_toNumber();
      var FUNC_ERROR_TEXT = "Expected a function";
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      function debounce(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = void 0;
          return result;
        }
        function cancel() {
          if (timerId !== void 0) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }
        function flush() {
          return timerId === void 0 ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === void 0) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout(timerId);
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === void 0) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      module.exports = debounce;
    }
  });

  // node_modules/lodash/throttle.js
  var require_throttle = __commonJS({
    "node_modules/lodash/throttle.js"(exports, module) {
      var debounce = require_debounce();
      var isObject = require_isObject();
      var FUNC_ERROR_TEXT = "Expected a function";
      function throttle(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        if (isObject(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce(func, wait, {
          "leading": leading,
          "maxWait": wait,
          "trailing": trailing
        });
      }
      module.exports = throttle;
    }
  });

  // packages/systems/ix2/engine/actions/IX2EngineActions.js
  var require_IX2EngineActions = __commonJS({
    "packages/systems/ix2/engine/actions/IX2EngineActions.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault().default;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.viewportWidthChanged = exports.testFrameRendered = exports.stopRequested = exports.sessionStopped = exports.sessionStarted = exports.sessionInitialized = exports.rawDataImported = exports.previewRequested = exports.playbackRequested = exports.parameterChanged = exports.mediaQueriesDefined = exports.instanceStarted = exports.instanceRemoved = exports.instanceAdded = exports.eventStateChanged = exports.eventListenerAdded = exports.elementStateChanged = exports.clearRequested = exports.animationFrameChanged = exports.actionListPlaybackChanged = void 0;
      var _extends2 = _interopRequireDefault(require_extends());
      var _constants = require_constants();
      var _shared = require_shared2();
      var {
        IX2_RAW_DATA_IMPORTED,
        IX2_SESSION_INITIALIZED,
        IX2_SESSION_STARTED,
        IX2_SESSION_STOPPED,
        IX2_PREVIEW_REQUESTED,
        IX2_PLAYBACK_REQUESTED,
        IX2_STOP_REQUESTED,
        IX2_CLEAR_REQUESTED,
        IX2_EVENT_LISTENER_ADDED,
        IX2_TEST_FRAME_RENDERED,
        IX2_EVENT_STATE_CHANGED,
        IX2_ANIMATION_FRAME_CHANGED,
        IX2_PARAMETER_CHANGED,
        IX2_INSTANCE_ADDED,
        IX2_INSTANCE_STARTED,
        IX2_INSTANCE_REMOVED,
        IX2_ELEMENT_STATE_CHANGED,
        IX2_ACTION_LIST_PLAYBACK_CHANGED,
        IX2_VIEWPORT_WIDTH_CHANGED,
        IX2_MEDIA_QUERIES_DEFINED
      } = _constants.IX2EngineActionTypes;
      var {
        reifyState
      } = _shared.IX2VanillaUtils;
      var rawDataImported = (rawData) => ({
        type: IX2_RAW_DATA_IMPORTED,
        payload: (0, _extends2.default)({}, reifyState(rawData))
      });
      exports.rawDataImported = rawDataImported;
      var sessionInitialized = ({
        hasBoundaryNodes,
        reducedMotion
      }) => ({
        type: IX2_SESSION_INITIALIZED,
        payload: {
          hasBoundaryNodes,
          reducedMotion
        }
      });
      exports.sessionInitialized = sessionInitialized;
      var sessionStarted = () => ({
        type: IX2_SESSION_STARTED
      });
      exports.sessionStarted = sessionStarted;
      var sessionStopped = () => ({
        type: IX2_SESSION_STOPPED
      });
      exports.sessionStopped = sessionStopped;
      var previewRequested = ({
        rawData,
        defer
      }) => ({
        type: IX2_PREVIEW_REQUESTED,
        payload: {
          defer,
          rawData
        }
      });
      exports.previewRequested = previewRequested;
      var playbackRequested = ({
        actionTypeId = _constants.ActionTypeConsts.GENERAL_START_ACTION,
        actionListId,
        actionItemId,
        eventId,
        allowEvents,
        immediate,
        testManual,
        verbose,
        rawData
      }) => ({
        type: IX2_PLAYBACK_REQUESTED,
        payload: {
          actionTypeId,
          actionListId,
          actionItemId,
          testManual,
          eventId,
          allowEvents,
          immediate,
          verbose,
          rawData
        }
      });
      exports.playbackRequested = playbackRequested;
      var stopRequested = (actionListId) => ({
        type: IX2_STOP_REQUESTED,
        payload: {
          actionListId
        }
      });
      exports.stopRequested = stopRequested;
      var clearRequested = () => ({
        type: IX2_CLEAR_REQUESTED
      });
      exports.clearRequested = clearRequested;
      var eventListenerAdded = (target, listenerParams) => ({
        type: IX2_EVENT_LISTENER_ADDED,
        payload: {
          target,
          listenerParams
        }
      });
      exports.eventListenerAdded = eventListenerAdded;
      var testFrameRendered = (step = 1) => ({
        type: IX2_TEST_FRAME_RENDERED,
        payload: {
          step
        }
      });
      exports.testFrameRendered = testFrameRendered;
      var eventStateChanged = (stateKey, newState) => ({
        type: IX2_EVENT_STATE_CHANGED,
        payload: {
          stateKey,
          newState
        }
      });
      exports.eventStateChanged = eventStateChanged;
      var animationFrameChanged = (now, parameters) => ({
        type: IX2_ANIMATION_FRAME_CHANGED,
        payload: {
          now,
          parameters
        }
      });
      exports.animationFrameChanged = animationFrameChanged;
      var parameterChanged = (key, value) => ({
        type: IX2_PARAMETER_CHANGED,
        payload: {
          key,
          value
        }
      });
      exports.parameterChanged = parameterChanged;
      var instanceAdded = (options) => ({
        type: IX2_INSTANCE_ADDED,
        payload: (0, _extends2.default)({}, options)
      });
      exports.instanceAdded = instanceAdded;
      var instanceStarted = (instanceId, time) => ({
        type: IX2_INSTANCE_STARTED,
        payload: {
          instanceId,
          time
        }
      });
      exports.instanceStarted = instanceStarted;
      var instanceRemoved = (instanceId) => ({
        type: IX2_INSTANCE_REMOVED,
        payload: {
          instanceId
        }
      });
      exports.instanceRemoved = instanceRemoved;
      var elementStateChanged = (elementId, actionTypeId, current, actionItem) => ({
        type: IX2_ELEMENT_STATE_CHANGED,
        payload: {
          elementId,
          actionTypeId,
          current,
          actionItem
        }
      });
      exports.elementStateChanged = elementStateChanged;
      var actionListPlaybackChanged = ({
        actionListId,
        isPlaying
      }) => ({
        type: IX2_ACTION_LIST_PLAYBACK_CHANGED,
        payload: {
          actionListId,
          isPlaying
        }
      });
      exports.actionListPlaybackChanged = actionListPlaybackChanged;
      var viewportWidthChanged = ({
        width,
        mediaQueries
      }) => ({
        type: IX2_VIEWPORT_WIDTH_CHANGED,
        payload: {
          width,
          mediaQueries
        }
      });
      exports.viewportWidthChanged = viewportWidthChanged;
      var mediaQueriesDefined = () => ({
        type: IX2_MEDIA_QUERIES_DEFINED
      });
      exports.mediaQueriesDefined = mediaQueriesDefined;
    }
  });

  // packages/systems/ix2/engine/logic/IX2BrowserApi.js
  var require_IX2BrowserApi = __commonJS({
    "packages/systems/ix2/engine/logic/IX2BrowserApi.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.elementContains = elementContains;
      exports.getChildElements = getChildElements;
      exports.getClosestElement = void 0;
      exports.getProperty = getProperty;
      exports.getQuerySelector = getQuerySelector;
      exports.getRefType = getRefType;
      exports.getSiblingElements = getSiblingElements;
      exports.getStyle = getStyle;
      exports.getValidDocument = getValidDocument;
      exports.isSiblingNode = isSiblingNode;
      exports.matchSelector = matchSelector;
      exports.queryDocument = queryDocument;
      exports.setStyle = setStyle;
      var _shared = require_shared2();
      var _constants = require_constants();
      var {
        ELEMENT_MATCHES
      } = _shared.IX2BrowserSupport;
      var {
        IX2_ID_DELIMITER,
        HTML_ELEMENT,
        PLAIN_OBJECT,
        WF_PAGE
      } = _constants.IX2EngineConstants;
      function setStyle(element, prop, value) {
        element.style[prop] = value;
      }
      function getStyle(element, prop) {
        return element.style[prop];
      }
      function getProperty(element, prop) {
        return element[prop];
      }
      function matchSelector(selector) {
        return (element) => element[ELEMENT_MATCHES](selector);
      }
      function getQuerySelector({
        id,
        selector
      }) {
        if (id) {
          let nodeId = id;
          if (id.indexOf(IX2_ID_DELIMITER) !== -1) {
            const pair = id.split(IX2_ID_DELIMITER);
            const pageId = pair[0];
            nodeId = pair[1];
            if (pageId !== document.documentElement.getAttribute(WF_PAGE)) {
              return null;
            }
          }
          return `[data-w-id="${nodeId}"], [data-w-id^="${nodeId}_instance"]`;
        }
        return selector;
      }
      function getValidDocument(pageId) {
        if (pageId == null || // $FlowIgnore — if documentElement is null crash
        pageId === document.documentElement.getAttribute(WF_PAGE)) {
          return document;
        }
        return null;
      }
      function queryDocument(baseSelector, descendantSelector) {
        return Array.prototype.slice.call(document.querySelectorAll(descendantSelector ? baseSelector + " " + descendantSelector : baseSelector));
      }
      function elementContains(parent, child) {
        return parent.contains(child);
      }
      function isSiblingNode(a, b) {
        return a !== b && a.parentNode === b.parentNode;
      }
      function getChildElements(sourceElements) {
        const childElements = [];
        for (let i = 0, {
          length
        } = sourceElements || []; i < length; i++) {
          const {
            children
          } = sourceElements[i];
          const {
            length: childCount
          } = children;
          if (!childCount) {
            continue;
          }
          for (let j = 0; j < childCount; j++) {
            childElements.push(children[j]);
          }
        }
        return childElements;
      }
      function getSiblingElements(sourceElements = []) {
        const elements = [];
        const parentCache = [];
        for (let i = 0, {
          length
        } = sourceElements; i < length; i++) {
          const {
            parentNode
          } = sourceElements[i];
          if (!parentNode || !parentNode.children || !parentNode.children.length) {
            continue;
          }
          if (parentCache.indexOf(parentNode) !== -1) {
            continue;
          }
          parentCache.push(parentNode);
          let el = parentNode.firstElementChild;
          while (el != null) {
            if (sourceElements.indexOf(el) === -1) {
              elements.push(el);
            }
            el = el.nextElementSibling;
          }
        }
        return elements;
      }
      var getClosestElement = Element.prototype.closest ? (element, selector) => {
        if (!document.documentElement.contains(element)) {
          return null;
        }
        return element.closest(selector);
      } : (element, selector) => {
        if (!document.documentElement.contains(element)) {
          return null;
        }
        let el = element;
        do {
          if (el[ELEMENT_MATCHES] && el[ELEMENT_MATCHES](selector)) {
            return el;
          }
          el = el.parentNode;
        } while (el != null);
        return null;
      };
      exports.getClosestElement = getClosestElement;
      function getRefType(ref) {
        if (ref != null && typeof ref == "object") {
          return ref instanceof Element ? HTML_ELEMENT : PLAIN_OBJECT;
        }
        return null;
      }
    }
  });

  // node_modules/lodash/_baseCreate.js
  var require_baseCreate = __commonJS({
    "node_modules/lodash/_baseCreate.js"(exports, module) {
      var isObject = require_isObject();
      var objectCreate = Object.create;
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result = new object();
          object.prototype = void 0;
          return result;
        };
      }();
      module.exports = baseCreate;
    }
  });

  // node_modules/lodash/_baseLodash.js
  var require_baseLodash = __commonJS({
    "node_modules/lodash/_baseLodash.js"(exports, module) {
      function baseLodash() {
      }
      module.exports = baseLodash;
    }
  });

  // node_modules/lodash/_LodashWrapper.js
  var require_LodashWrapper = __commonJS({
    "node_modules/lodash/_LodashWrapper.js"(exports, module) {
      var baseCreate = require_baseCreate();
      var baseLodash = require_baseLodash();
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = void 0;
      }
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      module.exports = LodashWrapper;
    }
  });

  // node_modules/lodash/_isFlattenable.js
  var require_isFlattenable = __commonJS({
    "node_modules/lodash/_isFlattenable.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
      function isFlattenable(value) {
        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      module.exports = isFlattenable;
    }
  });

  // node_modules/lodash/_baseFlatten.js
  var require_baseFlatten = __commonJS({
    "node_modules/lodash/_baseFlatten.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var isFlattenable = require_isFlattenable();
      function baseFlatten(array, depth, predicate, isStrict, result) {
        var index = -1, length = array.length;
        predicate || (predicate = isFlattenable);
        result || (result = []);
        while (++index < length) {
          var value = array[index];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result);
            } else {
              arrayPush(result, value);
            }
          } else if (!isStrict) {
            result[result.length] = value;
          }
        }
        return result;
      }
      module.exports = baseFlatten;
    }
  });

  // node_modules/lodash/flatten.js
  var require_flatten = __commonJS({
    "node_modules/lodash/flatten.js"(exports, module) {
      var baseFlatten = require_baseFlatten();
      function flatten(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, 1) : [];
      }
      module.exports = flatten;
    }
  });

  // node_modules/lodash/_apply.js
  var require_apply = __commonJS({
    "node_modules/lodash/_apply.js"(exports, module) {
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      module.exports = apply;
    }
  });

  // node_modules/lodash/_overRest.js
  var require_overRest = __commonJS({
    "node_modules/lodash/_overRest.js"(exports, module) {
      var apply = require_apply();
      var nativeMax = Math.max;
      function overRest(func, start, transform) {
        start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform(array);
          return apply(func, this, otherArgs);
        };
      }
      module.exports = overRest;
    }
  });

  // node_modules/lodash/constant.js
  var require_constant = __commonJS({
    "node_modules/lodash/constant.js"(exports, module) {
      function constant(value) {
        return function() {
          return value;
        };
      }
      module.exports = constant;
    }
  });

  // node_modules/lodash/_baseSetToString.js
  var require_baseSetToString = __commonJS({
    "node_modules/lodash/_baseSetToString.js"(exports, module) {
      var constant = require_constant();
      var defineProperty = require_defineProperty();
      var identity = require_identity();
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string),
          "writable": true
        });
      };
      module.exports = baseSetToString;
    }
  });

  // node_modules/lodash/_shortOut.js
  var require_shortOut = __commonJS({
    "node_modules/lodash/_shortOut.js"(exports, module) {
      var HOT_COUNT = 800;
      var HOT_SPAN = 16;
      var nativeNow = Date.now;
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(void 0, arguments);
        };
      }
      module.exports = shortOut;
    }
  });

  // node_modules/lodash/_setToString.js
  var require_setToString = __commonJS({
    "node_modules/lodash/_setToString.js"(exports, module) {
      var baseSetToString = require_baseSetToString();
      var shortOut = require_shortOut();
      var setToString = shortOut(baseSetToString);
      module.exports = setToString;
    }
  });

  // node_modules/lodash/_flatRest.js
  var require_flatRest = __commonJS({
    "node_modules/lodash/_flatRest.js"(exports, module) {
      var flatten = require_flatten();
      var overRest = require_overRest();
      var setToString = require_setToString();
      function flatRest(func) {
        return setToString(overRest(func, void 0, flatten), func + "");
      }
      module.exports = flatRest;
    }
  });

  // node_modules/lodash/_metaMap.js
  var require_metaMap = __commonJS({
    "node_modules/lodash/_metaMap.js"(exports, module) {
      var WeakMap2 = require_WeakMap();
      var metaMap = WeakMap2 && new WeakMap2();
      module.exports = metaMap;
    }
  });

  // node_modules/lodash/noop.js
  var require_noop = __commonJS({
    "node_modules/lodash/noop.js"(exports, module) {
      function noop() {
      }
      module.exports = noop;
    }
  });

  // node_modules/lodash/_getData.js
  var require_getData = __commonJS({
    "node_modules/lodash/_getData.js"(exports, module) {
      var metaMap = require_metaMap();
      var noop = require_noop();
      var getData = !metaMap ? noop : function(func) {
        return metaMap.get(func);
      };
      module.exports = getData;
    }
  });

  // node_modules/lodash/_realNames.js
  var require_realNames = __commonJS({
    "node_modules/lodash/_realNames.js"(exports, module) {
      var realNames = {};
      module.exports = realNames;
    }
  });

  // node_modules/lodash/_getFuncName.js
  var require_getFuncName = __commonJS({
    "node_modules/lodash/_getFuncName.js"(exports, module) {
      var realNames = require_realNames();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function getFuncName(func) {
        var result = func.name + "", array = realNames[result], length = hasOwnProperty.call(realNames, result) ? array.length : 0;
        while (length--) {
          var data = array[length], otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result;
      }
      module.exports = getFuncName;
    }
  });

  // node_modules/lodash/_LazyWrapper.js
  var require_LazyWrapper = __commonJS({
    "node_modules/lodash/_LazyWrapper.js"(exports, module) {
      var baseCreate = require_baseCreate();
      var baseLodash = require_baseLodash();
      var MAX_ARRAY_LENGTH = 4294967295;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      module.exports = LazyWrapper;
    }
  });

  // node_modules/lodash/_copyArray.js
  var require_copyArray = __commonJS({
    "node_modules/lodash/_copyArray.js"(exports, module) {
      function copyArray(source, array) {
        var index = -1, length = source.length;
        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      module.exports = copyArray;
    }
  });

  // node_modules/lodash/_wrapperClone.js
  var require_wrapperClone = __commonJS({
    "node_modules/lodash/_wrapperClone.js"(exports, module) {
      var LazyWrapper = require_LazyWrapper();
      var LodashWrapper = require_LodashWrapper();
      var copyArray = require_copyArray();
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result.__actions__ = copyArray(wrapper.__actions__);
        result.__index__ = wrapper.__index__;
        result.__values__ = wrapper.__values__;
        return result;
      }
      module.exports = wrapperClone;
    }
  });

  // node_modules/lodash/wrapperLodash.js
  var require_wrapperLodash = __commonJS({
    "node_modules/lodash/wrapperLodash.js"(exports, module) {
      var LazyWrapper = require_LazyWrapper();
      var LodashWrapper = require_LodashWrapper();
      var baseLodash = require_baseLodash();
      var isArray = require_isArray();
      var isObjectLike = require_isObjectLike();
      var wrapperClone = require_wrapperClone();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function lodash(value) {
        if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty.call(value, "__wrapped__")) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      lodash.prototype = baseLodash.prototype;
      lodash.prototype.constructor = lodash;
      module.exports = lodash;
    }
  });

  // node_modules/lodash/_isLaziable.js
  var require_isLaziable = __commonJS({
    "node_modules/lodash/_isLaziable.js"(exports, module) {
      var LazyWrapper = require_LazyWrapper();
      var getData = require_getData();
      var getFuncName = require_getFuncName();
      var lodash = require_wrapperLodash();
      function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash[funcName];
        if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      module.exports = isLaziable;
    }
  });

  // node_modules/lodash/_createFlow.js
  var require_createFlow = __commonJS({
    "node_modules/lodash/_createFlow.js"(exports, module) {
      var LodashWrapper = require_LodashWrapper();
      var flatRest = require_flatRest();
      var getData = require_getData();
      var getFuncName = require_getFuncName();
      var isArray = require_isArray();
      var isLaziable = require_isLaziable();
      var FUNC_ERROR_TEXT = "Expected a function";
      var WRAP_CURRY_FLAG = 8;
      var WRAP_PARTIAL_FLAG = 32;
      var WRAP_ARY_FLAG = 128;
      var WRAP_REARG_FLAG = 256;
      function createFlow(fromRight) {
        return flatRest(function(funcs) {
          var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index--) {
            var func = funcs[index];
            if (typeof func != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            if (prereq && !wrapper && getFuncName(func) == "wrapper") {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index = wrapper ? index : length;
          while (++index < length) {
            func = funcs[index];
            var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : void 0;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray(value)) {
              return wrapper.plant(value).value();
            }
            var index2 = 0, result = length ? funcs[index2].apply(this, args) : value;
            while (++index2 < length) {
              result = funcs[index2].call(this, result);
            }
            return result;
          };
        });
      }
      module.exports = createFlow;
    }
  });

  // node_modules/lodash/flow.js
  var require_flow = __commonJS({
    "node_modules/lodash/flow.js"(exports, module) {
      var createFlow = require_createFlow();
      var flow = createFlow();
      module.exports = flow;
    }
  });

  // node_modules/lodash/_baseClamp.js
  var require_baseClamp = __commonJS({
    "node_modules/lodash/_baseClamp.js"(exports, module) {
      function baseClamp(number, lower, upper) {
        if (number === number) {
          if (upper !== void 0) {
            number = number <= upper ? number : upper;
          }
          if (lower !== void 0) {
            number = number >= lower ? number : lower;
          }
        }
        return number;
      }
      module.exports = baseClamp;
    }
  });

  // node_modules/lodash/clamp.js
  var require_clamp = __commonJS({
    "node_modules/lodash/clamp.js"(exports, module) {
      var baseClamp = require_baseClamp();
      var toNumber = require_toNumber();
      function clamp(number, lower, upper) {
        if (upper === void 0) {
          upper = lower;
          lower = void 0;
        }
        if (upper !== void 0) {
          upper = toNumber(upper);
          upper = upper === upper ? upper : 0;
        }
        if (lower !== void 0) {
          lower = toNumber(lower);
          lower = lower === lower ? lower : 0;
        }
        return baseClamp(toNumber(number), lower, upper);
      }
      module.exports = clamp;
    }
  });

  // packages/systems/ix2/engine/logic/IX2VanillaEvents.js
  var require_IX2VanillaEvents = __commonJS({
    "packages/systems/ix2/engine/logic/IX2VanillaEvents.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault().default;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _extends2 = _interopRequireDefault(require_extends());
      var _flow = _interopRequireDefault(require_flow());
      var _get = _interopRequireDefault(require_get());
      var _clamp = _interopRequireDefault(require_clamp());
      var _constants = require_constants();
      var _IX2VanillaEngine = require_IX2VanillaEngine();
      var _IX2EngineActions = require_IX2EngineActions();
      var _shared = require_shared2();
      var {
        MOUSE_CLICK,
        MOUSE_SECOND_CLICK,
        MOUSE_DOWN,
        MOUSE_UP,
        MOUSE_OVER,
        MOUSE_OUT,
        DROPDOWN_CLOSE,
        DROPDOWN_OPEN,
        SLIDER_ACTIVE,
        SLIDER_INACTIVE,
        TAB_ACTIVE,
        TAB_INACTIVE,
        NAVBAR_CLOSE,
        NAVBAR_OPEN,
        MOUSE_MOVE,
        PAGE_SCROLL_DOWN,
        SCROLL_INTO_VIEW,
        SCROLL_OUT_OF_VIEW,
        PAGE_SCROLL_UP,
        SCROLLING_IN_VIEW,
        PAGE_FINISH,
        ECOMMERCE_CART_CLOSE,
        ECOMMERCE_CART_OPEN,
        PAGE_START,
        PAGE_SCROLL
      } = _constants.EventTypeConsts;
      var COMPONENT_ACTIVE = "COMPONENT_ACTIVE";
      var COMPONENT_INACTIVE = "COMPONENT_INACTIVE";
      var {
        COLON_DELIMITER
      } = _constants.IX2EngineConstants;
      var {
        getNamespacedParameterId
      } = _shared.IX2VanillaUtils;
      var composableFilter = (predicate) => (options) => {
        if (typeof options === "object" && predicate(options)) {
          return true;
        }
        return options;
      };
      var isElement = composableFilter(({
        element,
        nativeEvent
      }) => {
        return element === nativeEvent.target;
      });
      var containsElement = composableFilter(({
        element,
        nativeEvent
      }) => {
        return element.contains(nativeEvent.target);
      });
      var isOrContainsElement = (0, _flow.default)([isElement, containsElement]);
      var getAutoStopEvent = (store, autoStopEventId) => {
        if (autoStopEventId) {
          const {
            ixData
          } = store.getState();
          const {
            events
          } = ixData;
          const eventToStop = events[autoStopEventId];
          if (eventToStop && !AUTO_STOP_DISABLED_EVENTS[eventToStop.eventTypeId]) {
            return eventToStop;
          }
        }
        return null;
      };
      var hasAutoStopEvent = ({
        store,
        event
      }) => {
        const {
          action: eventAction
        } = event;
        const {
          autoStopEventId
        } = eventAction.config;
        return Boolean(getAutoStopEvent(store, autoStopEventId));
      };
      var actionGroupCreator = ({
        store,
        event,
        element,
        eventStateKey
      }, state) => {
        const {
          action: eventAction,
          id: eventId
        } = event;
        const {
          actionListId,
          autoStopEventId
        } = eventAction.config;
        const eventToStop = getAutoStopEvent(store, autoStopEventId);
        if (eventToStop) {
          (0, _IX2VanillaEngine.stopActionGroup)({
            store,
            eventId: autoStopEventId,
            eventTarget: element,
            eventStateKey: autoStopEventId + COLON_DELIMITER + eventStateKey.split(COLON_DELIMITER)[1],
            actionListId: (0, _get.default)(eventToStop, "action.config.actionListId")
          });
        }
        (0, _IX2VanillaEngine.stopActionGroup)({
          store,
          eventId,
          eventTarget: element,
          eventStateKey,
          actionListId
        });
        (0, _IX2VanillaEngine.startActionGroup)({
          store,
          eventId,
          eventTarget: element,
          eventStateKey,
          actionListId
        });
        return state;
      };
      var withFilter = (filter, handler) => (options, state) => (
        // $FlowFixMe
        filter(options, state) === true ? handler(options, state) : state
      );
      var baseActionGroupOptions = {
        handler: withFilter(isOrContainsElement, actionGroupCreator)
      };
      var baseActivityActionGroupOptions = (0, _extends2.default)({}, baseActionGroupOptions, {
        types: [COMPONENT_ACTIVE, COMPONENT_INACTIVE].join(" ")
      });
      var SCROLL_EVENT_TYPES = [{
        target: window,
        types: "resize orientationchange",
        throttle: true
      }, {
        target: document,
        types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
        throttle: true
      }];
      var MOUSE_OVER_OUT_TYPES = "mouseover mouseout";
      var baseScrollActionGroupOptions = {
        types: SCROLL_EVENT_TYPES
      };
      var AUTO_STOP_DISABLED_EVENTS = {
        PAGE_START,
        PAGE_FINISH
      };
      var getDocumentState = (() => {
        const supportOffset = window.pageXOffset !== void 0;
        const isCSS1Compat = document.compatMode === "CSS1Compat";
        const rootElement = isCSS1Compat ? document.documentElement : document.body;
        return () => ({
          // $FlowFixMe
          scrollLeft: supportOffset ? window.pageXOffset : rootElement.scrollLeft,
          // $FlowFixMe
          scrollTop: supportOffset ? window.pageYOffset : rootElement.scrollTop,
          // required to remove elasticity in Safari scrolling.
          stiffScrollTop: (0, _clamp.default)(
            // $FlowFixMe
            supportOffset ? window.pageYOffset : rootElement.scrollTop,
            0,
            // $FlowFixMe
            rootElement.scrollHeight - window.innerHeight
          ),
          // $FlowFixMe
          scrollWidth: rootElement.scrollWidth,
          // $FlowFixMe
          scrollHeight: rootElement.scrollHeight,
          // $FlowFixMe
          clientWidth: rootElement.clientWidth,
          // $FlowFixMe
          clientHeight: rootElement.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight
        });
      })();
      var areBoxesIntersecting = (a, b) => !(a.left > b.right || a.right < b.left || a.top > b.bottom || a.bottom < b.top);
      var isElementHovered = ({
        element,
        nativeEvent
      }) => {
        const {
          type,
          target,
          relatedTarget
        } = nativeEvent;
        const containsTarget = element.contains(target);
        if (type === "mouseover" && containsTarget) {
          return true;
        }
        const containsRelated = element.contains(relatedTarget);
        if (type === "mouseout" && containsTarget && containsRelated) {
          return true;
        }
        return false;
      };
      var isElementVisible = (options) => {
        const {
          element,
          event: {
            config
          }
        } = options;
        const {
          clientWidth,
          clientHeight
        } = getDocumentState();
        const scrollOffsetValue = config.scrollOffsetValue;
        const scrollOffsetUnit = config.scrollOffsetUnit;
        const isPX = scrollOffsetUnit === "PX";
        const offsetPadding = isPX ? scrollOffsetValue : clientHeight * (scrollOffsetValue || 0) / 100;
        return areBoxesIntersecting(element.getBoundingClientRect(), {
          left: 0,
          top: offsetPadding,
          right: clientWidth,
          bottom: clientHeight - offsetPadding
        });
      };
      var whenComponentActiveChange = (handler) => (options, oldState) => {
        const {
          type
        } = options.nativeEvent;
        const isActive = [COMPONENT_ACTIVE, COMPONENT_INACTIVE].indexOf(type) !== -1 ? type === COMPONENT_ACTIVE : oldState.isActive;
        const newState = (0, _extends2.default)({}, oldState, {
          isActive
        });
        if (!oldState || newState.isActive !== oldState.isActive) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      var whenElementHoverChange = (handler) => (options, oldState) => {
        const newState = {
          elementHovered: isElementHovered(options)
        };
        if (oldState ? newState.elementHovered !== oldState.elementHovered : newState.elementHovered) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      var whenElementVisibiltyChange = (handler) => (options, oldState) => {
        const newState = (0, _extends2.default)({}, oldState, {
          elementVisible: isElementVisible(options)
        });
        if (oldState ? newState.elementVisible !== oldState.elementVisible : newState.elementVisible) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      var whenScrollDirectionChange = (handler) => (
        // $FlowFixMe
        (options, oldState = {}) => {
          const {
            stiffScrollTop: scrollTop,
            scrollHeight,
            innerHeight
          } = getDocumentState();
          const {
            event: {
              config,
              eventTypeId
            }
          } = options;
          const {
            scrollOffsetValue,
            scrollOffsetUnit
          } = config;
          const isPX = scrollOffsetUnit === "PX";
          const scrollHeightBounds = scrollHeight - innerHeight;
          const percentTop = Number((scrollTop / scrollHeightBounds).toFixed(2));
          if (oldState && oldState.percentTop === percentTop) {
            return oldState;
          }
          const scrollTopPadding = (isPX ? scrollOffsetValue : innerHeight * (scrollOffsetValue || 0) / 100) / scrollHeightBounds;
          let scrollingDown;
          let scrollDirectionChanged;
          let anchorTop = 0;
          if (oldState) {
            scrollingDown = percentTop > oldState.percentTop;
            scrollDirectionChanged = oldState.scrollingDown !== scrollingDown;
            anchorTop = scrollDirectionChanged ? percentTop : oldState.anchorTop;
          }
          const inBounds = eventTypeId === PAGE_SCROLL_DOWN ? percentTop >= anchorTop + scrollTopPadding : percentTop <= anchorTop - scrollTopPadding;
          const newState = (0, _extends2.default)({}, oldState, {
            percentTop,
            inBounds,
            anchorTop,
            scrollingDown
          });
          if (oldState && inBounds && (scrollDirectionChanged || newState.inBounds !== oldState.inBounds)) {
            return handler(options, newState) || newState;
          }
          return newState;
        }
      );
      var pointIntersects = (point, rect) => point.left > rect.left && point.left < rect.right && point.top > rect.top && point.top < rect.bottom;
      var whenPageLoadFinish = (handler) => (options, oldState) => {
        const newState = {
          finished: document.readyState === "complete"
        };
        if (newState.finished && !(oldState && oldState.finshed)) {
          handler(options);
        }
        return newState;
      };
      var whenPageLoadStart = (handler) => (options, oldState) => {
        const newState = {
          started: true
        };
        if (!oldState) {
          handler(options);
        }
        return newState;
      };
      var whenClickCountChange = (handler) => (options, oldState = {
        clickCount: 0
      }) => {
        const newState = {
          clickCount: oldState.clickCount % 2 + 1
        };
        if (newState.clickCount !== oldState.clickCount) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      var getComponentActiveOptions = (allowNestedChildrenEvents = true) => (0, _extends2.default)({}, baseActivityActionGroupOptions, {
        handler: withFilter(allowNestedChildrenEvents ? isOrContainsElement : isElement, whenComponentActiveChange((options, state) => {
          return state.isActive ? baseActionGroupOptions.handler(options, state) : state;
        }))
      });
      var getComponentInactiveOptions = (allowNestedChildrenEvents = true) => (0, _extends2.default)({}, baseActivityActionGroupOptions, {
        handler: withFilter(allowNestedChildrenEvents ? isOrContainsElement : isElement, whenComponentActiveChange((options, state) => {
          return !state.isActive ? baseActionGroupOptions.handler(options, state) : state;
        }))
      });
      var scrollIntoOutOfViewOptions = (0, _extends2.default)({}, baseScrollActionGroupOptions, {
        handler: whenElementVisibiltyChange((options, state) => {
          const {
            elementVisible
          } = state;
          const {
            event,
            store
          } = options;
          const {
            ixData
          } = store.getState();
          const {
            events
          } = ixData;
          if (!events[event.action.config.autoStopEventId] && state.triggered) {
            return state;
          }
          if (event.eventTypeId === SCROLL_INTO_VIEW === elementVisible) {
            actionGroupCreator(options);
            return (0, _extends2.default)({}, state, {
              triggered: true
            });
          } else {
            return state;
          }
        })
      });
      var MOUSE_OUT_ROUND_THRESHOLD = 0.05;
      var _default = {
        [SLIDER_ACTIVE]: getComponentActiveOptions(),
        [SLIDER_INACTIVE]: getComponentInactiveOptions(),
        [DROPDOWN_OPEN]: getComponentActiveOptions(),
        [DROPDOWN_CLOSE]: getComponentInactiveOptions(),
        // navbar elements may contain nested components in the menu. To prevent activity misfires, only listed for activity
        // events where the target is the navbar element, and ignore children that dispatch activitiy events.
        [NAVBAR_OPEN]: getComponentActiveOptions(false),
        [NAVBAR_CLOSE]: getComponentInactiveOptions(false),
        [TAB_ACTIVE]: getComponentActiveOptions(),
        [TAB_INACTIVE]: getComponentInactiveOptions(),
        [ECOMMERCE_CART_OPEN]: {
          types: "ecommerce-cart-open",
          handler: withFilter(isOrContainsElement, actionGroupCreator)
        },
        [ECOMMERCE_CART_CLOSE]: {
          types: "ecommerce-cart-close",
          handler: withFilter(isOrContainsElement, actionGroupCreator)
        },
        [MOUSE_CLICK]: {
          types: "click",
          handler: withFilter(isOrContainsElement, whenClickCountChange((options, {
            clickCount
          }) => {
            if (hasAutoStopEvent(options)) {
              clickCount === 1 && actionGroupCreator(options);
            } else {
              actionGroupCreator(options);
            }
          }))
        },
        [MOUSE_SECOND_CLICK]: {
          types: "click",
          handler: withFilter(isOrContainsElement, whenClickCountChange((options, {
            clickCount
          }) => {
            if (clickCount === 2) {
              actionGroupCreator(options);
            }
          }))
        },
        [MOUSE_DOWN]: (0, _extends2.default)({}, baseActionGroupOptions, {
          types: "mousedown"
        }),
        [MOUSE_UP]: (0, _extends2.default)({}, baseActionGroupOptions, {
          types: "mouseup"
        }),
        [MOUSE_OVER]: {
          types: MOUSE_OVER_OUT_TYPES,
          handler: withFilter(isOrContainsElement, whenElementHoverChange((options, state) => {
            if (state.elementHovered) {
              actionGroupCreator(options);
            }
          }))
        },
        [MOUSE_OUT]: {
          types: MOUSE_OVER_OUT_TYPES,
          handler: withFilter(isOrContainsElement, whenElementHoverChange((options, state) => {
            if (!state.elementHovered) {
              actionGroupCreator(options);
            }
          }))
        },
        [MOUSE_MOVE]: {
          types: "mousemove mouseout scroll",
          handler: ({
            store,
            element,
            eventConfig,
            nativeEvent,
            eventStateKey
          }, state = {
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0
          }) => {
            const {
              basedOn,
              selectedAxis,
              continuousParameterGroupId,
              reverse,
              restingState = 0
            } = eventConfig;
            const {
              clientX = state.clientX,
              clientY = state.clientY,
              pageX = state.pageX,
              pageY = state.pageY
            } = nativeEvent;
            const isXAxis = selectedAxis === "X_AXIS";
            const isMouseOut = nativeEvent.type === "mouseout";
            let value = restingState / 100;
            let namespacedParameterId = continuousParameterGroupId;
            let elementHovered = false;
            switch (basedOn) {
              case _constants.EventBasedOn.VIEWPORT: {
                value = isXAxis ? Math.min(clientX, window.innerWidth) / window.innerWidth : Math.min(clientY, window.innerHeight) / window.innerHeight;
                break;
              }
              case _constants.EventBasedOn.PAGE: {
                const {
                  scrollLeft,
                  scrollTop,
                  scrollWidth,
                  scrollHeight
                } = getDocumentState();
                value = isXAxis ? Math.min(scrollLeft + pageX, scrollWidth) / scrollWidth : Math.min(scrollTop + pageY, scrollHeight) / scrollHeight;
                break;
              }
              case _constants.EventBasedOn.ELEMENT:
              default: {
                namespacedParameterId = getNamespacedParameterId(eventStateKey, continuousParameterGroupId);
                const isMouseEvent = nativeEvent.type.indexOf("mouse") === 0;
                if (isMouseEvent && isOrContainsElement({
                  element,
                  nativeEvent
                }) !== true) {
                  break;
                }
                const rect = element.getBoundingClientRect();
                const {
                  left,
                  top,
                  width,
                  height
                } = rect;
                if (!isMouseEvent && !pointIntersects({
                  left: clientX,
                  top: clientY
                }, rect)) {
                  break;
                }
                elementHovered = true;
                value = isXAxis ? (clientX - left) / width : (clientY - top) / height;
                break;
              }
            }
            if (isMouseOut && (value > 1 - MOUSE_OUT_ROUND_THRESHOLD || value < MOUSE_OUT_ROUND_THRESHOLD)) {
              value = Math.round(value);
            }
            if (basedOn !== _constants.EventBasedOn.ELEMENT || elementHovered || // $FlowFixMe
            elementHovered !== state.elementHovered) {
              value = reverse ? 1 - value : value;
              store.dispatch((0, _IX2EngineActions.parameterChanged)(namespacedParameterId, value));
            }
            return {
              elementHovered,
              clientX,
              clientY,
              pageX,
              pageY
            };
          }
        },
        [PAGE_SCROLL]: {
          types: SCROLL_EVENT_TYPES,
          // $FlowFixMe
          handler: ({
            store,
            eventConfig
          }) => {
            const {
              continuousParameterGroupId,
              reverse
            } = eventConfig;
            const {
              scrollTop,
              scrollHeight,
              clientHeight
            } = getDocumentState();
            let value = scrollTop / (scrollHeight - clientHeight);
            value = reverse ? 1 - value : value;
            store.dispatch((0, _IX2EngineActions.parameterChanged)(continuousParameterGroupId, value));
          }
        },
        [SCROLLING_IN_VIEW]: {
          types: SCROLL_EVENT_TYPES,
          handler: ({
            element,
            store,
            eventConfig,
            eventStateKey
          }, state = {
            scrollPercent: 0
          }) => {
            const {
              scrollLeft,
              scrollTop,
              scrollWidth,
              scrollHeight,
              clientHeight: visibleHeight
            } = getDocumentState();
            const {
              basedOn,
              selectedAxis,
              continuousParameterGroupId,
              startsEntering,
              startsExiting,
              addEndOffset,
              addStartOffset,
              addOffsetValue = 0,
              endOffsetValue = 0
            } = eventConfig;
            const isXAxis = selectedAxis === "X_AXIS";
            if (basedOn === _constants.EventBasedOn.VIEWPORT) {
              const value = isXAxis ? scrollLeft / scrollWidth : scrollTop / scrollHeight;
              if (value !== state.scrollPercent) {
                store.dispatch((0, _IX2EngineActions.parameterChanged)(continuousParameterGroupId, value));
              }
              return {
                scrollPercent: value
              };
            } else {
              const namespacedParameterId = getNamespacedParameterId(eventStateKey, continuousParameterGroupId);
              const elementRect = element.getBoundingClientRect();
              let offsetStartPerc = (addStartOffset ? addOffsetValue : 0) / 100;
              let offsetEndPerc = (addEndOffset ? endOffsetValue : 0) / 100;
              offsetStartPerc = startsEntering ? offsetStartPerc : 1 - offsetStartPerc;
              offsetEndPerc = startsExiting ? offsetEndPerc : 1 - offsetEndPerc;
              const offsetElementTop = elementRect.top + Math.min(elementRect.height * offsetStartPerc, visibleHeight);
              const offsetElementBottom = elementRect.top + elementRect.height * offsetEndPerc;
              const offsetHeight = offsetElementBottom - offsetElementTop;
              const fixedScrollHeight = Math.min(visibleHeight + offsetHeight, scrollHeight);
              const fixedScrollTop = Math.min(Math.max(0, visibleHeight - offsetElementTop), fixedScrollHeight);
              const fixedScrollPerc = fixedScrollTop / fixedScrollHeight;
              if (fixedScrollPerc !== state.scrollPercent) {
                store.dispatch((0, _IX2EngineActions.parameterChanged)(namespacedParameterId, fixedScrollPerc));
              }
              return {
                scrollPercent: fixedScrollPerc
              };
            }
          }
        },
        [SCROLL_INTO_VIEW]: scrollIntoOutOfViewOptions,
        [SCROLL_OUT_OF_VIEW]: scrollIntoOutOfViewOptions,
        [PAGE_SCROLL_DOWN]: (0, _extends2.default)({}, baseScrollActionGroupOptions, {
          handler: whenScrollDirectionChange((options, state) => {
            if (state.scrollingDown) {
              actionGroupCreator(options);
            }
          })
        }),
        [PAGE_SCROLL_UP]: (0, _extends2.default)({}, baseScrollActionGroupOptions, {
          handler: whenScrollDirectionChange((options, state) => {
            if (!state.scrollingDown) {
              actionGroupCreator(options);
            }
          })
        }),
        [PAGE_FINISH]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: withFilter(isElement, whenPageLoadFinish(actionGroupCreator))
        },
        [PAGE_START]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: withFilter(isElement, whenPageLoadStart(actionGroupCreator))
        }
      };
      exports.default = _default;
    }
  });

  // packages/systems/ix2/engine/logic/IX2VanillaEngine.js
  var require_IX2VanillaEngine = __commonJS({
    "packages/systems/ix2/engine/logic/IX2VanillaEngine.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault().default;
      var _interopRequireWildcard = require_interopRequireWildcard().default;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.observeRequests = observeRequests;
      exports.startActionGroup = startActionGroup;
      exports.startEngine = startEngine;
      exports.stopActionGroup = stopActionGroup;
      exports.stopAllActionGroups = stopAllActionGroups;
      exports.stopEngine = stopEngine;
      var _extends2 = _interopRequireDefault(require_extends());
      var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require_objectWithoutPropertiesLoose());
      var _find = _interopRequireDefault(require_find());
      var _get = _interopRequireDefault(require_get());
      var _size = _interopRequireDefault(require_size());
      var _omitBy = _interopRequireDefault(require_omitBy());
      var _isEmpty = _interopRequireDefault(require_isEmpty());
      var _mapValues = _interopRequireDefault(require_mapValues());
      var _forEach = _interopRequireDefault(require_forEach());
      var _throttle = _interopRequireDefault(require_throttle());
      var _constants = require_constants();
      var _shared = require_shared2();
      var _IX2EngineActions = require_IX2EngineActions();
      var elementApi = _interopRequireWildcard(require_IX2BrowserApi());
      var _IX2VanillaEvents = _interopRequireDefault(require_IX2VanillaEvents());
      var _excluded = ["store", "computedStyle"];
      var QuickEffectsIdList = Object.keys(_constants.QuickEffectIds);
      var isQuickEffect = (actionTypeId) => QuickEffectsIdList.includes(actionTypeId);
      var {
        COLON_DELIMITER,
        BOUNDARY_SELECTOR,
        HTML_ELEMENT,
        RENDER_GENERAL,
        W_MOD_IX
      } = _constants.IX2EngineConstants;
      var {
        getAffectedElements,
        getElementId,
        getDestinationValues,
        observeStore,
        getInstanceId,
        renderHTMLElement,
        clearAllStyles,
        getMaxDurationItemIndex,
        getComputedStyle,
        getInstanceOrigin,
        reduceListToGroup,
        shouldNamespaceEventParameter,
        getNamespacedParameterId,
        shouldAllowMediaQuery,
        cleanupHTMLElement,
        clearObjectCache,
        stringifyTarget,
        mediaQueriesEqual,
        shallowEqual
      } = _shared.IX2VanillaUtils;
      var {
        isPluginType,
        createPluginInstance,
        getPluginDuration
      } = _shared.IX2VanillaPlugins;
      var ua = navigator.userAgent;
      var IS_MOBILE_SAFARI = ua.match(/iPad/i) || ua.match(/iPhone/);
      var THROTTLED_EVENT_WAIT = 12;
      function observeRequests(store) {
        observeStore({
          store,
          select: ({
            ixRequest
          }) => ixRequest.preview,
          onChange: handlePreviewRequest
        });
        observeStore({
          store,
          select: ({
            ixRequest
          }) => ixRequest.playback,
          onChange: handlePlaybackRequest
        });
        observeStore({
          store,
          select: ({
            ixRequest
          }) => ixRequest.stop,
          onChange: handleStopRequest
        });
        observeStore({
          store,
          select: ({
            ixRequest
          }) => ixRequest.clear,
          onChange: handleClearRequest
        });
      }
      function observeMediaQueryChange(store) {
        observeStore({
          store,
          select: ({
            ixSession
          }) => ixSession.mediaQueryKey,
          onChange: () => {
            stopEngine(store);
            clearAllStyles({
              store,
              elementApi
            });
            startEngine({
              store,
              allowEvents: true
            });
            dispatchPageUpdateEvent();
          }
        });
      }
      function observeOneRenderTick(store, onTick) {
        const unsubscribe = observeStore({
          store,
          select: ({
            ixSession
          }) => ixSession.tick,
          onChange: (tick) => {
            onTick(tick);
            unsubscribe();
          }
        });
      }
      function handlePreviewRequest({
        rawData,
        defer
      }, store) {
        const start = () => {
          startEngine({
            store,
            rawData,
            allowEvents: true
          });
          dispatchPageUpdateEvent();
        };
        defer ? setTimeout(start, 0) : start();
      }
      function dispatchPageUpdateEvent() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function handlePlaybackRequest(playback, store) {
        const {
          actionTypeId,
          actionListId,
          actionItemId,
          eventId,
          allowEvents,
          immediate,
          testManual,
          verbose = true
        } = playback;
        let {
          rawData
        } = playback;
        if (actionListId && actionItemId && rawData && immediate) {
          const actionList = rawData.actionLists[actionListId];
          if (actionList) {
            rawData = reduceListToGroup({
              actionList,
              actionItemId,
              rawData
            });
          }
        }
        startEngine({
          store,
          rawData,
          allowEvents,
          testManual
        });
        if (actionListId && actionTypeId === _constants.ActionTypeConsts.GENERAL_START_ACTION || isQuickEffect(actionTypeId)) {
          stopActionGroup({
            store,
            actionListId
          });
          renderInitialGroup({
            store,
            actionListId,
            eventId
          });
          const started = startActionGroup({
            store,
            eventId,
            actionListId,
            immediate,
            verbose
          });
          if (verbose && started) {
            store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({
              actionListId,
              isPlaying: !immediate
            }));
          }
        }
      }
      function handleStopRequest({
        actionListId
      }, store) {
        if (actionListId) {
          stopActionGroup({
            store,
            actionListId
          });
        } else {
          stopAllActionGroups({
            store
          });
        }
        stopEngine(store);
      }
      function handleClearRequest(state, store) {
        stopEngine(store);
        clearAllStyles({
          store,
          elementApi
        });
      }
      function startEngine({
        store,
        rawData,
        allowEvents,
        testManual
      }) {
        const {
          ixSession
        } = store.getState();
        if (rawData) {
          store.dispatch((0, _IX2EngineActions.rawDataImported)(rawData));
        }
        if (!ixSession.active) {
          store.dispatch((0, _IX2EngineActions.sessionInitialized)({
            hasBoundaryNodes: Boolean(document.querySelector(BOUNDARY_SELECTOR)),
            reducedMotion: (
              // $FlowFixMe - Remove this attribute on beta launch
              document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
            )
          }));
          if (allowEvents) {
            bindEvents(store);
            addDocumentClass();
            if (store.getState().ixSession.hasDefinedMediaQueries) {
              observeMediaQueryChange(store);
            }
          }
          store.dispatch((0, _IX2EngineActions.sessionStarted)());
          startRenderLoop(store, testManual);
        }
      }
      function addDocumentClass() {
        const {
          documentElement
        } = document;
        if (documentElement.className.indexOf(W_MOD_IX) === -1) {
          documentElement.className += ` ${W_MOD_IX}`;
        }
      }
      function startRenderLoop(store, testManual) {
        const handleFrame = (now) => {
          const {
            ixSession,
            ixParameters
          } = store.getState();
          if (ixSession.active) {
            store.dispatch((0, _IX2EngineActions.animationFrameChanged)(now, ixParameters));
            if (testManual) {
              observeOneRenderTick(store, handleFrame);
            } else {
              requestAnimationFrame(handleFrame);
            }
          }
        };
        handleFrame(window.performance.now());
      }
      function stopEngine(store) {
        const {
          ixSession
        } = store.getState();
        if (ixSession.active) {
          const {
            eventListeners
          } = ixSession;
          eventListeners.forEach(clearEventListener);
          clearObjectCache();
          store.dispatch((0, _IX2EngineActions.sessionStopped)());
        }
      }
      function clearEventListener({
        target,
        listenerParams
      }) {
        target.removeEventListener.apply(target, listenerParams);
      }
      function createGroupInstances({
        store,
        eventStateKey,
        eventTarget,
        eventId,
        eventConfig,
        actionListId,
        parameterGroup,
        smoothing,
        restingValue
      }) {
        const {
          ixData,
          ixSession
        } = store.getState();
        const {
          events
        } = ixData;
        const event = events[eventId];
        const {
          eventTypeId
        } = event;
        const targetCache = {};
        const instanceActionGroups = {};
        const instanceConfigs = [];
        const {
          continuousActionGroups
        } = parameterGroup;
        let {
          id: parameterId
        } = parameterGroup;
        if (shouldNamespaceEventParameter(eventTypeId, eventConfig)) {
          parameterId = getNamespacedParameterId(eventStateKey, parameterId);
        }
        const eventElementRoot = ixSession.hasBoundaryNodes && eventTarget ? elementApi.getClosestElement(eventTarget, BOUNDARY_SELECTOR) : null;
        continuousActionGroups.forEach((actionGroup) => {
          const {
            keyframe,
            actionItems
          } = actionGroup;
          actionItems.forEach((actionItem) => {
            const {
              actionTypeId
            } = actionItem;
            const {
              target
            } = actionItem.config;
            if (!target) {
              return;
            }
            const elementRoot = target.boundaryMode ? eventElementRoot : null;
            const key = stringifyTarget(target) + COLON_DELIMITER + actionTypeId;
            instanceActionGroups[key] = appendActionItem(instanceActionGroups[key], keyframe, actionItem);
            if (!targetCache[key]) {
              targetCache[key] = true;
              const {
                config
              } = actionItem;
              getAffectedElements({
                config,
                event,
                eventTarget,
                elementRoot,
                elementApi
              }).forEach((element) => {
                instanceConfigs.push({
                  element,
                  key
                });
              });
            }
          });
        });
        instanceConfigs.forEach(({
          element,
          key
        }) => {
          const actionGroups = instanceActionGroups[key];
          const actionItem = (0, _get.default)(actionGroups, `[0].actionItems[0]`, {});
          const {
            actionTypeId
          } = actionItem;
          const pluginInstance = isPluginType(actionTypeId) ? (
            // $FlowFixMe
            createPluginInstance(actionTypeId)(element, actionItem)
          ) : null;
          const destination = getDestinationValues(
            {
              element,
              actionItem,
              elementApi
            },
            // $FlowFixMe
            pluginInstance
          );
          createInstance({
            store,
            element,
            eventId,
            actionListId,
            actionItem,
            destination,
            continuous: true,
            parameterId,
            actionGroups,
            smoothing,
            restingValue,
            pluginInstance
          });
        });
      }
      function appendActionItem(actionGroups = [], keyframe, actionItem) {
        const newActionGroups = [...actionGroups];
        let groupIndex;
        newActionGroups.some((group, index) => {
          if (group.keyframe === keyframe) {
            groupIndex = index;
            return true;
          }
          return false;
        });
        if (groupIndex == null) {
          groupIndex = newActionGroups.length;
          newActionGroups.push({
            keyframe,
            actionItems: []
          });
        }
        newActionGroups[groupIndex].actionItems.push(actionItem);
        return newActionGroups;
      }
      function bindEvents(store) {
        const {
          ixData
        } = store.getState();
        const {
          eventTypeMap
        } = ixData;
        updateViewportWidth(store);
        (0, _forEach.default)(eventTypeMap, (events, key) => {
          const logic = _IX2VanillaEvents.default[key];
          if (!logic) {
            console.warn(`IX2 event type not configured: ${key}`);
            return;
          }
          bindEventType({
            logic,
            store,
            events
          });
        });
        const {
          ixSession
        } = store.getState();
        if (ixSession.eventListeners.length) {
          bindResizeEvents(store);
        }
      }
      var WINDOW_RESIZE_EVENTS = ["resize", "orientationchange"];
      function bindResizeEvents(store) {
        const handleResize = () => {
          updateViewportWidth(store);
        };
        WINDOW_RESIZE_EVENTS.forEach((type) => {
          window.addEventListener(type, handleResize);
          store.dispatch((0, _IX2EngineActions.eventListenerAdded)(window, [type, handleResize]));
        });
        handleResize();
      }
      function updateViewportWidth(store) {
        const {
          ixSession,
          ixData
        } = store.getState();
        const width = window.innerWidth;
        if (width !== ixSession.viewportWidth) {
          const {
            mediaQueries
          } = ixData;
          store.dispatch((0, _IX2EngineActions.viewportWidthChanged)({
            width,
            mediaQueries
          }));
        }
      }
      var mapFoundValues = (object, iteratee) => (0, _omitBy.default)((0, _mapValues.default)(object, iteratee), _isEmpty.default);
      var forEachEventTarget = (eventTargets, eventCallback) => {
        (0, _forEach.default)(eventTargets, (elements, eventId) => {
          elements.forEach((element, index) => {
            const eventStateKey = eventId + COLON_DELIMITER + index;
            eventCallback(element, eventId, eventStateKey);
          });
        });
      };
      var getAffectedForEvent = (event) => {
        const config = {
          target: event.target,
          targets: event.targets
        };
        return getAffectedElements({
          config,
          elementApi
        });
      };
      function bindEventType({
        logic,
        store,
        events
      }) {
        injectBehaviorCSSFixes(events);
        const {
          types: eventTypes,
          handler: eventHandler
        } = logic;
        const {
          ixData
        } = store.getState();
        const {
          actionLists
        } = ixData;
        const eventTargets = mapFoundValues(events, getAffectedForEvent);
        if (!(0, _size.default)(eventTargets)) {
          return;
        }
        (0, _forEach.default)(eventTargets, (elements, key) => {
          const event = events[key];
          const {
            action: eventAction,
            id: eventId,
            mediaQueries = ixData.mediaQueryKeys
          } = event;
          const {
            actionListId
          } = eventAction.config;
          if (!mediaQueriesEqual(mediaQueries, ixData.mediaQueryKeys)) {
            store.dispatch((0, _IX2EngineActions.mediaQueriesDefined)());
          }
          if (eventAction.actionTypeId === _constants.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
            const configs = Array.isArray(event.config) ? event.config : [event.config];
            configs.forEach((eventConfig) => {
              const {
                continuousParameterGroupId
              } = eventConfig;
              const paramGroups = (0, _get.default)(actionLists, `${actionListId}.continuousParameterGroups`, []);
              const parameterGroup = (0, _find.default)(paramGroups, ({
                id
              }) => id === continuousParameterGroupId);
              const smoothing = (eventConfig.smoothing || 0) / 100;
              const restingValue = (eventConfig.restingState || 0) / 100;
              if (!parameterGroup) {
                return;
              }
              elements.forEach((eventTarget, index) => {
                const eventStateKey = eventId + COLON_DELIMITER + index;
                createGroupInstances({
                  store,
                  eventStateKey,
                  eventTarget,
                  eventId,
                  eventConfig,
                  actionListId,
                  parameterGroup,
                  smoothing,
                  restingValue
                });
              });
            });
          }
          if (eventAction.actionTypeId === _constants.ActionTypeConsts.GENERAL_START_ACTION || isQuickEffect(eventAction.actionTypeId)) {
            renderInitialGroup({
              store,
              actionListId,
              eventId
            });
          }
        });
        const handleEvent = (nativeEvent) => {
          const {
            ixSession
          } = store.getState();
          forEachEventTarget(eventTargets, (element, eventId, eventStateKey) => {
            const event = events[eventId];
            const oldState = ixSession.eventState[eventStateKey];
            const {
              action: eventAction,
              mediaQueries = ixData.mediaQueryKeys
            } = event;
            if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
              return;
            }
            const handleEventWithConfig = (eventConfig = {}) => {
              const newState = eventHandler({
                store,
                element,
                event,
                eventConfig,
                nativeEvent,
                eventStateKey
              }, oldState);
              if (!shallowEqual(newState, oldState)) {
                store.dispatch((0, _IX2EngineActions.eventStateChanged)(eventStateKey, newState));
              }
            };
            if (eventAction.actionTypeId === _constants.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
              const configs = Array.isArray(event.config) ? event.config : [event.config];
              configs.forEach(handleEventWithConfig);
            } else {
              handleEventWithConfig();
            }
          });
        };
        const handleEventThrottled = (0, _throttle.default)(handleEvent, THROTTLED_EVENT_WAIT);
        const addListeners = ({
          target = document,
          types,
          throttle: shouldThrottle
        }) => {
          types.split(" ").filter(Boolean).forEach((type) => {
            const handlerFunc = shouldThrottle ? handleEventThrottled : handleEvent;
            target.addEventListener(type, handlerFunc);
            store.dispatch((0, _IX2EngineActions.eventListenerAdded)(target, [type, handlerFunc]));
          });
        };
        if (Array.isArray(eventTypes)) {
          eventTypes.forEach(addListeners);
        } else if (typeof eventTypes === "string") {
          addListeners(logic);
        }
      }
      function injectBehaviorCSSFixes(events) {
        if (!IS_MOBILE_SAFARI) {
          return;
        }
        const injectedSelectors = {};
        let cssText = "";
        for (const eventId in events) {
          const {
            eventTypeId,
            target
          } = events[eventId];
          const selector = elementApi.getQuerySelector(target);
          if (injectedSelectors[selector]) {
            continue;
          }
          if (eventTypeId === _constants.EventTypeConsts.MOUSE_CLICK || eventTypeId === _constants.EventTypeConsts.MOUSE_SECOND_CLICK) {
            injectedSelectors[selector] = true;
            cssText += // $FlowFixMe
            selector + "{cursor: pointer;touch-action: manipulation;}";
          }
        }
        if (cssText) {
          const style = document.createElement("style");
          style.textContent = cssText;
          document.body.appendChild(style);
        }
      }
      function renderInitialGroup({
        store,
        actionListId,
        eventId
      }) {
        const {
          ixData,
          ixSession
        } = store.getState();
        const {
          actionLists,
          events
        } = ixData;
        const event = events[eventId];
        const actionList = actionLists[actionListId];
        if (actionList && actionList.useFirstGroupAsInitialState) {
          const initialStateItems = (0, _get.default)(actionList, "actionItemGroups[0].actionItems", []);
          const mediaQueries = (0, _get.default)(event, "mediaQueries", ixData.mediaQueryKeys);
          if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
            return;
          }
          initialStateItems.forEach((actionItem) => {
            var _itemConfig$target;
            const {
              config: itemConfig,
              actionTypeId
            } = actionItem;
            const config = (
              // When useEventTarget is explicitly true, use event target/targets to query elements
              (itemConfig === null || itemConfig === void 0 ? void 0 : (_itemConfig$target = itemConfig.target) === null || _itemConfig$target === void 0 ? void 0 : _itemConfig$target.useEventTarget) === true ? {
                target: event.target,
                targets: event.targets
              } : itemConfig
            );
            const itemElements = getAffectedElements({
              config,
              event,
              elementApi
            });
            const shouldUsePlugin = isPluginType(actionTypeId);
            itemElements.forEach((element) => {
              const pluginInstance = shouldUsePlugin ? (
                // $FlowFixMe
                createPluginInstance(actionTypeId)(element, actionItem)
              ) : null;
              createInstance({
                destination: getDestinationValues(
                  {
                    element,
                    actionItem,
                    elementApi
                  },
                  // $FlowFixMe
                  pluginInstance
                ),
                immediate: true,
                store,
                element,
                eventId,
                actionItem,
                actionListId,
                pluginInstance
              });
            });
          });
        }
      }
      function stopAllActionGroups({
        store
      }) {
        const {
          ixInstances
        } = store.getState();
        (0, _forEach.default)(ixInstances, (instance) => {
          if (!instance.continuous) {
            const {
              actionListId,
              verbose
            } = instance;
            removeInstance(instance, store);
            if (verbose) {
              store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({
                actionListId,
                isPlaying: false
              }));
            }
          }
        });
      }
      function stopActionGroup({
        store,
        // $FlowFixMe
        eventId,
        // $FlowFixMe
        eventTarget,
        // $FlowFixMe
        eventStateKey,
        actionListId
      }) {
        const {
          ixInstances,
          ixSession
        } = store.getState();
        const eventElementRoot = ixSession.hasBoundaryNodes && eventTarget ? elementApi.getClosestElement(eventTarget, BOUNDARY_SELECTOR) : null;
        (0, _forEach.default)(ixInstances, (instance) => {
          const boundaryMode = (0, _get.default)(instance, "actionItem.config.target.boundaryMode");
          const validEventKey = eventStateKey ? instance.eventStateKey === eventStateKey : true;
          if (instance.actionListId === actionListId && instance.eventId === eventId && validEventKey) {
            if (eventElementRoot && boundaryMode && !elementApi.elementContains(eventElementRoot, instance.element)) {
              return;
            }
            removeInstance(instance, store);
            if (instance.verbose) {
              store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({
                actionListId,
                isPlaying: false
              }));
            }
          }
        });
      }
      function startActionGroup({
        store,
        eventId,
        // $FlowFixMe
        eventTarget,
        // $FlowFixMe
        eventStateKey,
        actionListId,
        groupIndex = 0,
        // $FlowFixMe
        immediate,
        // $FlowFixMe
        verbose
      }) {
        var _event$action;
        const {
          ixData,
          ixSession
        } = store.getState();
        const {
          events
        } = ixData;
        const event = events[eventId] || {};
        const {
          mediaQueries = ixData.mediaQueryKeys
        } = event;
        const actionList = (0, _get.default)(ixData, `actionLists.${actionListId}`, {});
        const {
          actionItemGroups,
          useFirstGroupAsInitialState
        } = actionList;
        if (!actionItemGroups || !actionItemGroups.length) {
          return false;
        }
        if (groupIndex >= actionItemGroups.length && (0, _get.default)(event, "config.loop")) {
          groupIndex = 0;
        }
        if (groupIndex === 0 && useFirstGroupAsInitialState) {
          groupIndex++;
        }
        const isFirstGroup = groupIndex === 0 || groupIndex === 1 && useFirstGroupAsInitialState;
        const instanceDelay = isFirstGroup && isQuickEffect((_event$action = event.action) === null || _event$action === void 0 ? void 0 : _event$action.actionTypeId) ? event.config.delay : void 0;
        const actionItems = (0, _get.default)(actionItemGroups, [groupIndex, "actionItems"], []);
        if (!actionItems.length) {
          return false;
        }
        if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
          return false;
        }
        const eventElementRoot = ixSession.hasBoundaryNodes && eventTarget ? elementApi.getClosestElement(eventTarget, BOUNDARY_SELECTOR) : null;
        const carrierIndex = getMaxDurationItemIndex(actionItems);
        let groupStartResult = false;
        actionItems.forEach((actionItem, actionIndex) => {
          const {
            config,
            actionTypeId
          } = actionItem;
          const shouldUsePlugin = isPluginType(actionTypeId);
          const {
            target
          } = config;
          if (!target) {
            return;
          }
          const elementRoot = target.boundaryMode ? eventElementRoot : null;
          const elements = getAffectedElements({
            config,
            event,
            eventTarget,
            elementRoot,
            elementApi
          });
          elements.forEach((element, elementIndex) => {
            const pluginInstance = shouldUsePlugin ? (
              // $FlowFixMe
              createPluginInstance(actionTypeId)(element, actionItem)
            ) : null;
            const pluginDuration = shouldUsePlugin ? (
              // $FlowFixMe
              getPluginDuration(actionTypeId)(element, actionItem)
            ) : null;
            groupStartResult = true;
            const isCarrier = carrierIndex === actionIndex && elementIndex === 0;
            const computedStyle = getComputedStyle({
              element,
              actionItem
            });
            const destination = getDestinationValues(
              {
                element,
                actionItem,
                elementApi
              },
              // $FlowFixMe
              pluginInstance
            );
            createInstance({
              store,
              element,
              actionItem,
              eventId,
              eventTarget,
              eventStateKey,
              actionListId,
              groupIndex,
              isCarrier,
              computedStyle,
              destination,
              immediate,
              verbose,
              pluginInstance,
              pluginDuration,
              instanceDelay
            });
          });
        });
        return groupStartResult;
      }
      function createInstance(options) {
        var _ixData$events$eventI;
        const {
          store,
          computedStyle
        } = options, rest = (0, _objectWithoutPropertiesLoose2.default)(options, _excluded);
        const {
          element,
          actionItem,
          // $FlowIgnore - Flow 0.121.0
          immediate,
          pluginInstance,
          // $FlowIgnore - Flow 0.121.0
          continuous,
          // $FlowIgnore - Flow 0.121.0
          restingValue,
          eventId
        } = rest;
        const autoStart = !continuous;
        const instanceId = getInstanceId();
        const {
          ixElements,
          ixSession,
          ixData
        } = store.getState();
        const elementId = getElementId(ixElements, element);
        const {
          refState
        } = ixElements[elementId] || {};
        const refType = elementApi.getRefType(element);
        const skipMotion = ixSession.reducedMotion && _constants.ReducedMotionTypes[actionItem.actionTypeId];
        let skipToValue;
        if (skipMotion && continuous) {
          switch ((_ixData$events$eventI = ixData.events[eventId]) === null || _ixData$events$eventI === void 0 ? void 0 : _ixData$events$eventI.eventTypeId) {
            case _constants.EventTypeConsts.MOUSE_MOVE:
            case _constants.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              skipToValue = restingValue;
              break;
            default:
              skipToValue = 0.5;
              break;
          }
        }
        const origin = getInstanceOrigin(
          element,
          refState,
          computedStyle,
          actionItem,
          elementApi,
          // $FlowFixMe
          pluginInstance
        );
        store.dispatch((0, _IX2EngineActions.instanceAdded)((0, _extends2.default)({
          instanceId,
          elementId,
          origin,
          refType,
          skipMotion,
          skipToValue
        }, rest)));
        dispatchCustomEvent(document.body, "ix2-animation-started", instanceId);
        if (immediate) {
          renderImmediateInstance(store, instanceId);
          return;
        }
        observeStore({
          store,
          select: ({
            ixInstances
          }) => ixInstances[instanceId],
          onChange: handleInstanceChange
        });
        if (autoStart) {
          store.dispatch((0, _IX2EngineActions.instanceStarted)(instanceId, ixSession.tick));
        }
      }
      function removeInstance(instance, store) {
        dispatchCustomEvent(document.body, "ix2-animation-stopping", {
          instanceId: instance.id,
          state: store.getState()
        });
        const {
          elementId,
          actionItem
        } = instance;
        const {
          ixElements
        } = store.getState();
        const {
          ref,
          refType
        } = ixElements[elementId] || {};
        if (refType === HTML_ELEMENT) {
          cleanupHTMLElement(ref, actionItem, elementApi);
        }
        store.dispatch((0, _IX2EngineActions.instanceRemoved)(instance.id));
      }
      function dispatchCustomEvent(element, eventName, detail) {
        const event = document.createEvent("CustomEvent");
        event.initCustomEvent(eventName, true, true, detail);
        element.dispatchEvent(event);
      }
      function renderImmediateInstance(store, instanceId) {
        const {
          ixParameters
        } = store.getState();
        store.dispatch((0, _IX2EngineActions.instanceStarted)(instanceId, 0));
        store.dispatch((0, _IX2EngineActions.animationFrameChanged)(performance.now(), ixParameters));
        const {
          ixInstances
        } = store.getState();
        handleInstanceChange(ixInstances[instanceId], store);
      }
      function handleInstanceChange(instance, store) {
        const {
          active,
          continuous,
          complete,
          elementId,
          actionItem,
          actionTypeId,
          renderType,
          current,
          groupIndex,
          eventId,
          eventTarget,
          eventStateKey,
          actionListId,
          isCarrier,
          styleProp,
          verbose,
          pluginInstance
        } = instance;
        const {
          ixData,
          ixSession
        } = store.getState();
        const {
          events
        } = ixData;
        const event = events[eventId] || {};
        const {
          mediaQueries = ixData.mediaQueryKeys
        } = event;
        if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
          return;
        }
        if (continuous || active || complete) {
          if (current || renderType === RENDER_GENERAL && complete) {
            store.dispatch((0, _IX2EngineActions.elementStateChanged)(elementId, actionTypeId, current, actionItem));
            const {
              ixElements
            } = store.getState();
            const {
              ref,
              refType,
              refState
            } = ixElements[elementId] || {};
            const actionState = refState && refState[actionTypeId];
            if (refType === HTML_ELEMENT || isPluginType(actionTypeId)) {
              renderHTMLElement(ref, refState, actionState, eventId, actionItem, styleProp, elementApi, renderType, pluginInstance);
            }
          }
          if (complete) {
            if (isCarrier) {
              const started = startActionGroup({
                store,
                eventId,
                eventTarget,
                eventStateKey,
                actionListId,
                groupIndex: groupIndex + 1,
                verbose
              });
              if (verbose && !started) {
                store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({
                  actionListId,
                  isPlaying: false
                }));
              }
            }
            removeInstance(instance, store);
          }
        }
      }
    }
  });

  // packages/systems/ix2/engine/index.js
  var require_engine = __commonJS({
    "packages/systems/ix2/engine/index.js"(exports) {
      "use strict";
      var _interopRequireWildcard = require_interopRequireWildcard().default;
      var _interopRequireDefault = require_interopRequireDefault().default;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.actions = void 0;
      exports.destroy = destroy;
      exports.init = init;
      exports.setEnv = setEnv;
      exports.store = void 0;
      require_includes3();
      var _redux = require_lib2();
      var _IX2Reducer = _interopRequireDefault(require_IX2Reducer());
      var _IX2VanillaEngine = require_IX2VanillaEngine();
      var actions = _interopRequireWildcard(require_IX2EngineActions());
      exports.actions = actions;
      var store = (0, _redux.createStore)(_IX2Reducer.default);
      exports.store = store;
      function setEnv(env) {
        if (env()) {
          (0, _IX2VanillaEngine.observeRequests)(store);
        }
      }
      function init(rawData) {
        destroy();
        (0, _IX2VanillaEngine.startEngine)({
          store,
          rawData,
          allowEvents: true
        });
      }
      function destroy() {
        (0, _IX2VanillaEngine.stopEngine)(store);
      }
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-ix2.js
  var require_webflow_ix2 = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-ix2.js"(exports, module) {
      var Webflow = require_webflow_lib();
      var ix2 = require_engine();
      ix2.setEnv(Webflow.env);
      Webflow.define("ix2", module.exports = function() {
        return ix2;
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-links.js
  var require_webflow_links = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-links.js"(exports, module) {
      var Webflow = require_webflow_lib();
      Webflow.define("links", module.exports = function($, _) {
        var api = {};
        var $win = $(window);
        var designer;
        var inApp = Webflow.env();
        var location = window.location;
        var tempLink = document.createElement("a");
        var linkCurrent = "w--current";
        var indexPage = /index\.(html|php)$/;
        var dirList = /\/$/;
        var anchors;
        var slug;
        api.ready = api.design = api.preview = init;
        function init() {
          designer = inApp && Webflow.env("design");
          slug = Webflow.env("slug") || location.pathname || "";
          Webflow.scroll.off(scroll);
          anchors = [];
          var links = document.links;
          for (var i = 0; i < links.length; ++i) {
            select(links[i]);
          }
          if (anchors.length) {
            Webflow.scroll.on(scroll);
            scroll();
          }
        }
        function select(link) {
          var href = designer && link.getAttribute("href-disabled") || link.getAttribute("href");
          tempLink.href = href;
          if (href.indexOf(":") >= 0) {
            return;
          }
          var $link = $(link);
          if (tempLink.hash.length > 1 && tempLink.host + tempLink.pathname === location.host + location.pathname) {
            if (!/^#[a-zA-Z0-9\-\_]+$/.test(tempLink.hash)) {
              return;
            }
            var $section = $(tempLink.hash);
            $section.length && anchors.push({
              link: $link,
              sec: $section,
              active: false
            });
            return;
          }
          if (href === "#" || href === "") {
            return;
          }
          var match = tempLink.href === location.href || href === slug || indexPage.test(href) && dirList.test(slug);
          setClass($link, linkCurrent, match);
        }
        function scroll() {
          var viewTop = $win.scrollTop();
          var viewHeight = $win.height();
          _.each(anchors, function(anchor) {
            var $link = anchor.link;
            var $section = anchor.sec;
            var top = $section.offset().top;
            var height = $section.outerHeight();
            var offset = viewHeight * 0.5;
            var active = $section.is(":visible") && top + height - offset >= viewTop && top + offset <= viewTop + viewHeight;
            if (anchor.active === active) {
              return;
            }
            anchor.active = active;
            setClass($link, linkCurrent, active);
          });
        }
        function setClass($elem, className, add) {
          var exists = $elem.hasClass(className);
          if (add && exists) {
            return;
          }
          if (!add && !exists) {
            return;
          }
          add ? $elem.addClass(className) : $elem.removeClass(className);
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-scroll.js
  var require_webflow_scroll = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-scroll.js"(exports, module) {
      var Webflow = require_webflow_lib();
      Webflow.define("scroll", module.exports = function($) {
        var NS_EVENTS = {
          WF_CLICK_EMPTY: "click.wf-empty-link",
          WF_CLICK_SCROLL: "click.wf-scroll"
        };
        var loc = window.location;
        var history = inIframe() ? null : window.history;
        var $win = $(window);
        var $doc = $(document);
        var $body = $(document.body);
        var animate = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) {
          window.setTimeout(fn, 15);
        };
        var rootTag = Webflow.env("editor") ? ".w-editor-body" : "body";
        var headerSelector = "header, " + rootTag + " > .header, " + rootTag + " > .w-nav:not([data-no-scroll])";
        var emptyHrefSelector = 'a[href="#"]';
        var localHrefSelector = 'a[href*="#"]:not(.w-tab-link):not(' + emptyHrefSelector + ")";
        var scrollTargetOutlineCSS = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}';
        var focusStylesEl = document.createElement("style");
        focusStylesEl.appendChild(document.createTextNode(scrollTargetOutlineCSS));
        function inIframe() {
          try {
            return Boolean(window.frameElement);
          } catch (e) {
            return true;
          }
        }
        var validHash = /^#[a-zA-Z0-9][\w:.-]*$/;
        function linksToCurrentPage(link) {
          return validHash.test(link.hash) && link.host + link.pathname === loc.host + loc.pathname;
        }
        const reducedMotionMediaQuery = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
        function reducedMotionEnabled() {
          return document.body.getAttribute("data-wf-scroll-motion") === "none" || reducedMotionMediaQuery.matches;
        }
        function setFocusable($el, action) {
          var initialTabindex;
          switch (action) {
            case "add":
              initialTabindex = $el.attr("tabindex");
              if (initialTabindex) {
                $el.attr("data-wf-tabindex-swap", initialTabindex);
              } else {
                $el.attr("tabindex", "-1");
              }
              break;
            case "remove":
              initialTabindex = $el.attr("data-wf-tabindex-swap");
              if (initialTabindex) {
                $el.attr("tabindex", initialTabindex);
                $el.removeAttr("data-wf-tabindex-swap");
              } else {
                $el.removeAttr("tabindex");
              }
              break;
          }
          $el.toggleClass("wf-force-outline-none", action === "add");
        }
        function validateScroll(evt) {
          var target = evt.currentTarget;
          if (
            // Bail if in Designer
            Webflow.env("design") || // Ignore links being used by jQuery mobile
            window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(target.className)
          ) {
            return;
          }
          var hash = linksToCurrentPage(target) ? target.hash : "";
          if (hash === "")
            return;
          var $el = $(hash);
          if (!$el.length) {
            return;
          }
          if (evt) {
            evt.preventDefault();
            evt.stopPropagation();
          }
          updateHistory(hash, evt);
          window.setTimeout(function() {
            scroll($el, function setFocus() {
              setFocusable($el, "add");
              $el.get(0).focus({
                preventScroll: true
              });
              setFocusable($el, "remove");
            });
          }, evt ? 0 : 300);
        }
        function updateHistory(hash) {
          if (loc.hash !== hash && history && history.pushState && // Navigation breaks Chrome when the protocol is `file:`.
          !(Webflow.env.chrome && loc.protocol === "file:")) {
            var oldHash = history.state && history.state.hash;
            if (oldHash !== hash) {
              history.pushState({
                hash
              }, "", hash);
            }
          }
        }
        function scroll($targetEl, cb) {
          var start = $win.scrollTop();
          var end = calculateScrollEndPosition($targetEl);
          if (start === end)
            return;
          var duration = calculateScrollDuration($targetEl, start, end);
          var clock = Date.now();
          var step = function() {
            var elapsed = Date.now() - clock;
            window.scroll(0, getY(start, end, elapsed, duration));
            if (elapsed <= duration) {
              animate(step);
            } else if (typeof cb === "function") {
              cb();
            }
          };
          animate(step);
        }
        function calculateScrollEndPosition($targetEl) {
          var $header = $(headerSelector);
          var offsetY = $header.css("position") === "fixed" ? $header.outerHeight() : 0;
          var end = $targetEl.offset().top - offsetY;
          if ($targetEl.data("scroll") === "mid") {
            var available = $win.height() - offsetY;
            var elHeight = $targetEl.outerHeight();
            if (elHeight < available) {
              end -= Math.round((available - elHeight) / 2);
            }
          }
          return end;
        }
        function calculateScrollDuration($targetEl, start, end) {
          if (reducedMotionEnabled())
            return 0;
          var mult = 1;
          $body.add($targetEl).each(function(_, el) {
            var time = parseFloat(el.getAttribute("data-scroll-time"));
            if (!isNaN(time) && time >= 0) {
              mult = time;
            }
          });
          return (472.143 * Math.log(Math.abs(start - end) + 125) - 2e3) * mult;
        }
        function getY(start, end, elapsed, duration) {
          if (elapsed > duration) {
            return end;
          }
          return start + (end - start) * ease(elapsed / duration);
        }
        function ease(t) {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        }
        function ready() {
          var {
            WF_CLICK_EMPTY,
            WF_CLICK_SCROLL
          } = NS_EVENTS;
          $doc.on(WF_CLICK_SCROLL, localHrefSelector, validateScroll);
          $doc.on(WF_CLICK_EMPTY, emptyHrefSelector, function(e) {
            e.preventDefault();
          });
          document.head.insertBefore(focusStylesEl, document.head.firstChild);
        }
        return {
          ready
        };
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-touch.js
  var require_webflow_touch = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-touch.js"(exports, module) {
      var Webflow = require_webflow_lib();
      Webflow.define("touch", module.exports = function($) {
        var api = {};
        var getSelection = window.getSelection;
        $.event.special.tap = {
          bindType: "click",
          delegateType: "click"
        };
        api.init = function(el) {
          el = typeof el === "string" ? $(el).get(0) : el;
          return el ? new Touch(el) : null;
        };
        function Touch(el) {
          var active = false;
          var useTouch = false;
          var thresholdX = Math.min(Math.round(window.innerWidth * 0.04), 40);
          var startX;
          var lastX;
          el.addEventListener("touchstart", start, false);
          el.addEventListener("touchmove", move, false);
          el.addEventListener("touchend", end, false);
          el.addEventListener("touchcancel", cancel, false);
          el.addEventListener("mousedown", start, false);
          el.addEventListener("mousemove", move, false);
          el.addEventListener("mouseup", end, false);
          el.addEventListener("mouseout", cancel, false);
          function start(evt) {
            var touches = evt.touches;
            if (touches && touches.length > 1) {
              return;
            }
            active = true;
            if (touches) {
              useTouch = true;
              startX = touches[0].clientX;
            } else {
              startX = evt.clientX;
            }
            lastX = startX;
          }
          function move(evt) {
            if (!active) {
              return;
            }
            if (useTouch && evt.type === "mousemove") {
              evt.preventDefault();
              evt.stopPropagation();
              return;
            }
            var touches = evt.touches;
            var x = touches ? touches[0].clientX : evt.clientX;
            var velocityX = x - lastX;
            lastX = x;
            if (Math.abs(velocityX) > thresholdX && getSelection && String(getSelection()) === "") {
              triggerEvent("swipe", evt, {
                direction: velocityX > 0 ? "right" : "left"
              });
              cancel();
            }
          }
          function end(evt) {
            if (!active) {
              return;
            }
            active = false;
            if (useTouch && evt.type === "mouseup") {
              evt.preventDefault();
              evt.stopPropagation();
              useTouch = false;
              return;
            }
          }
          function cancel() {
            active = false;
          }
          function destroy() {
            el.removeEventListener("touchstart", start, false);
            el.removeEventListener("touchmove", move, false);
            el.removeEventListener("touchend", end, false);
            el.removeEventListener("touchcancel", cancel, false);
            el.removeEventListener("mousedown", start, false);
            el.removeEventListener("mousemove", move, false);
            el.removeEventListener("mouseup", end, false);
            el.removeEventListener("mouseout", cancel, false);
            el = null;
          }
          this.destroy = destroy;
        }
        function triggerEvent(type, evt, data) {
          var newEvent = $.Event(type, {
            originalEvent: evt
          });
          $(evt.target).trigger(newEvent, data);
        }
        api.instance = api.init(document);
        return api;
      });
    }
  });

  // packages/shared/render/plugins/Form/webflow-forms.js
  var require_webflow_forms = __commonJS({
    "packages/shared/render/plugins/Form/webflow-forms.js"(exports, module) {
      var Webflow = require_webflow_lib();
      Webflow.define("forms", module.exports = function($, _) {
        var api = {};
        var $doc = $(document);
        var $forms;
        var loc = window.location;
        var retro = window.XDomainRequest && !window.atob;
        var namespace = ".w-form";
        var siteId;
        var emailField = /e(-)?mail/i;
        var emailValue = /^\S+@\S+$/;
        var alert = window.alert;
        var inApp = Webflow.env();
        var listening;
        var formUrl;
        var signFileUrl;
        var chimpRegex = /list-manage[1-9]?.com/i;
        var disconnected = _.debounce(function() {
          alert("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.");
        }, 100);
        api.ready = api.design = api.preview = function() {
          init();
          if (!inApp && !listening) {
            addListeners();
          }
        };
        function init() {
          siteId = $("html").attr("data-wf-site");
          formUrl = "https://webflow.com/api/v1/form/" + siteId;
          if (retro && formUrl.indexOf("https://webflow.com") >= 0) {
            formUrl = formUrl.replace("https://webflow.com", "https://formdata.webflow.com");
          }
          signFileUrl = `${formUrl}/signFile`;
          $forms = $(namespace + " form");
          if (!$forms.length) {
            return;
          }
          $forms.each(build);
        }
        function build(i, el) {
          var $el = $(el);
          var data = $.data(el, namespace);
          if (!data) {
            data = $.data(el, namespace, {
              form: $el
            });
          }
          reset(data);
          var wrap = $el.closest("div.w-form");
          data.done = wrap.find("> .w-form-done");
          data.fail = wrap.find("> .w-form-fail");
          data.fileUploads = wrap.find(".w-file-upload");
          data.fileUploads.each(function(j) {
            initFileUpload(j, data);
          });
          var formName = data.form.attr("aria-label") || data.form.attr("data-name") || "Form";
          if (!data.done.attr("aria-label")) {
            data.form.attr("aria-label", formName);
          }
          data.done.attr("tabindex", "-1");
          data.done.attr("role", "region");
          if (!data.done.attr("aria-label")) {
            data.done.attr("aria-label", formName + " success");
          }
          data.fail.attr("tabindex", "-1");
          data.fail.attr("role", "region");
          if (!data.fail.attr("aria-label")) {
            data.fail.attr("aria-label", formName + " failure");
          }
          var action = data.action = $el.attr("action");
          data.handler = null;
          data.redirect = $el.attr("data-redirect");
          if (chimpRegex.test(action)) {
            data.handler = submitMailChimp;
            return;
          }
          if (action) {
            return;
          }
          if (siteId) {
            data.handler = true ? exportedSubmitWebflow : (() => {
              const hostedSubmitHandler = null.default;
              return hostedSubmitHandler(reset, loc, Webflow, collectEnterpriseTrackingCookies, preventDefault, findFields, alert, findFileUploads, disableBtn, siteId, afterSubmit, $, formUrl);
            })();
            return;
          }
          disconnected();
        }
        function addListeners() {
          listening = true;
          $doc.on("submit", namespace + " form", function(evt) {
            var data = $.data(this, namespace);
            if (data.handler) {
              data.evt = evt;
              data.handler(data);
            }
          });
          const CHECKBOX_CLASS_NAME = ".w-checkbox-input";
          const RADIO_INPUT_CLASS_NAME = ".w-radio-input";
          const CHECKED_CLASS = "w--redirected-checked";
          const FOCUSED_CLASS = "w--redirected-focus";
          const FOCUSED_VISIBLE_CLASS = "w--redirected-focus-visible";
          const focusVisibleSelectors = ":focus-visible, [data-wf-focus-visible]";
          const CUSTOM_CONTROLS = [["checkbox", CHECKBOX_CLASS_NAME], ["radio", RADIO_INPUT_CLASS_NAME]];
          $doc.on("change", namespace + ` form input[type="checkbox"]:not(` + CHECKBOX_CLASS_NAME + ")", (evt) => {
            $(evt.target).siblings(CHECKBOX_CLASS_NAME).toggleClass(CHECKED_CLASS);
          });
          $doc.on("change", namespace + ` form input[type="radio"]`, (evt) => {
            $(`input[name="${evt.target.name}"]:not(${CHECKBOX_CLASS_NAME})`).map((i, el) => $(el).siblings(RADIO_INPUT_CLASS_NAME).removeClass(CHECKED_CLASS));
            const $target = $(evt.target);
            if (!$target.hasClass("w-radio-input")) {
              $target.siblings(RADIO_INPUT_CLASS_NAME).addClass(CHECKED_CLASS);
            }
          });
          CUSTOM_CONTROLS.forEach(([controlType, customControlClassName]) => {
            $doc.on("focus", namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ")", (evt) => {
              $(evt.target).siblings(customControlClassName).addClass(FOCUSED_CLASS);
              $(evt.target).filter(focusVisibleSelectors).siblings(customControlClassName).addClass(FOCUSED_VISIBLE_CLASS);
            });
            $doc.on("blur", namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ")", (evt) => {
              $(evt.target).siblings(customControlClassName).removeClass(`${FOCUSED_CLASS} ${FOCUSED_VISIBLE_CLASS}`);
            });
          });
        }
        function reset(data) {
          var btn = data.btn = data.form.find(':input[type="submit"]');
          data.wait = data.btn.attr("data-wait") || null;
          data.success = false;
          btn.prop("disabled", false);
          data.label && btn.val(data.label);
        }
        function disableBtn(data) {
          var btn = data.btn;
          var wait = data.wait;
          btn.prop("disabled", true);
          if (wait) {
            data.label = btn.val();
            btn.val(wait);
          }
        }
        function findFields(form, result) {
          var status = null;
          result = result || {};
          form.find(':input:not([type="submit"]):not([type="file"])').each(function(i, el) {
            var field = $(el);
            var type = field.attr("type");
            var name = field.attr("data-name") || field.attr("name") || "Field " + (i + 1);
            var value = field.val();
            if (type === "checkbox") {
              value = field.is(":checked");
            } else if (type === "radio") {
              if (result[name] === null || typeof result[name] === "string") {
                return;
              }
              value = form.find('input[name="' + field.attr("name") + '"]:checked').val() || null;
            }
            if (typeof value === "string") {
              value = $.trim(value);
            }
            result[name] = value;
            status = status || getStatus(field, type, name, value);
          });
          return status;
        }
        function findFileUploads(form) {
          var result = {};
          form.find(':input[type="file"]').each(function(i, el) {
            var field = $(el);
            var name = field.attr("data-name") || field.attr("name") || "File " + (i + 1);
            var value = field.attr("data-value");
            if (typeof value === "string") {
              value = $.trim(value);
            }
            result[name] = value;
          });
          return result;
        }
        const trackingCookieNameMap = {
          _mkto_trk: "marketo"
          // __hstc: 'hubspot',
        };
        function collectEnterpriseTrackingCookies() {
          const cookies = document.cookie.split("; ").reduce(function(acc, cookie) {
            const splitCookie = cookie.split("=");
            const name = splitCookie[0];
            if (name in trackingCookieNameMap) {
              const mappedName = trackingCookieNameMap[name];
              const value = splitCookie.slice(1).join("=");
              acc[mappedName] = value;
            }
            return acc;
          }, {});
          return cookies;
        }
        function getStatus(field, type, name, value) {
          var status = null;
          if (type === "password") {
            status = "Passwords cannot be submitted.";
          } else if (field.attr("required")) {
            if (!value) {
              status = "Please fill out the required field: " + name;
            } else if (emailField.test(field.attr("type"))) {
              if (!emailValue.test(value)) {
                status = "Please enter a valid email address for: " + name;
              }
            }
          } else if (name === "g-recaptcha-response" && !value) {
            status = "Please confirm you\u2019re not a robot.";
          }
          return status;
        }
        function exportedSubmitWebflow(data) {
          preventDefault(data);
          afterSubmit(data);
        }
        function submitMailChimp(data) {
          reset(data);
          var form = data.form;
          var payload = {};
          if (/^https/.test(loc.href) && !/^https/.test(data.action)) {
            form.attr("method", "post");
            return;
          }
          preventDefault(data);
          var status = findFields(form, payload);
          if (status) {
            return alert(status);
          }
          disableBtn(data);
          var fullName;
          _.each(payload, function(value, key) {
            if (emailField.test(key)) {
              payload.EMAIL = value;
            }
            if (/^((full[ _-]?)?name)$/i.test(key)) {
              fullName = value;
            }
            if (/^(first[ _-]?name)$/i.test(key)) {
              payload.FNAME = value;
            }
            if (/^(last[ _-]?name)$/i.test(key)) {
              payload.LNAME = value;
            }
          });
          if (fullName && !payload.FNAME) {
            fullName = fullName.split(" ");
            payload.FNAME = fullName[0];
            payload.LNAME = payload.LNAME || fullName[1];
          }
          var url = data.action.replace("/post?", "/post-json?") + "&c=?";
          var userId = url.indexOf("u=") + 2;
          userId = url.substring(userId, url.indexOf("&", userId));
          var listId = url.indexOf("id=") + 3;
          listId = url.substring(listId, url.indexOf("&", listId));
          payload["b_" + userId + "_" + listId] = "";
          $.ajax({
            url,
            data: payload,
            dataType: "jsonp"
          }).done(function(resp) {
            data.success = resp.result === "success" || /already/.test(resp.msg);
            if (!data.success) {
              console.info("MailChimp error: " + resp.msg);
            }
            afterSubmit(data);
          }).fail(function() {
            afterSubmit(data);
          });
        }
        function afterSubmit(data) {
          var form = data.form;
          var redirect = data.redirect;
          var success = data.success;
          if (success && redirect) {
            Webflow.location(redirect);
            return;
          }
          data.done.toggle(success);
          data.fail.toggle(!success);
          if (success) {
            data.done.focus();
          } else {
            data.fail.focus();
          }
          form.toggle(!success);
          reset(data);
        }
        function preventDefault(data) {
          data.evt && data.evt.preventDefault();
          data.evt = null;
        }
        function initFileUpload(i, form) {
          if (!form.fileUploads || !form.fileUploads[i]) {
            return;
          }
          var file;
          var $el = $(form.fileUploads[i]);
          var $defaultWrap = $el.find("> .w-file-upload-default");
          var $uploadingWrap = $el.find("> .w-file-upload-uploading");
          var $successWrap = $el.find("> .w-file-upload-success");
          var $errorWrap = $el.find("> .w-file-upload-error");
          var $input = $defaultWrap.find(".w-file-upload-input");
          var $label = $defaultWrap.find(".w-file-upload-label");
          var $labelChildren = $label.children();
          var $errorMsgEl = $errorWrap.find(".w-file-upload-error-msg");
          var $fileEl = $successWrap.find(".w-file-upload-file");
          var $removeEl = $successWrap.find(".w-file-remove-link");
          var $fileNameEl = $fileEl.find(".w-file-upload-file-name");
          var sizeErrMsg = $errorMsgEl.attr("data-w-size-error");
          var typeErrMsg = $errorMsgEl.attr("data-w-type-error");
          var genericErrMsg = $errorMsgEl.attr("data-w-generic-error");
          if (!inApp) {
            $label.on("click keydown", function(e) {
              if (e.type === "keydown" && e.which !== 13 && e.which !== 32) {
                return;
              }
              e.preventDefault();
              $input.click();
            });
          }
          $label.find(".w-icon-file-upload-icon").attr("aria-hidden", "true");
          $removeEl.find(".w-icon-file-upload-remove").attr("aria-hidden", "true");
          if (!inApp) {
            $removeEl.on("click keydown", function(e) {
              if (e.type === "keydown") {
                if (e.which !== 13 && e.which !== 32) {
                  return;
                }
                e.preventDefault();
              }
              $input.removeAttr("data-value");
              $input.val("");
              $fileNameEl.html("");
              $defaultWrap.toggle(true);
              $successWrap.toggle(false);
              $label.focus();
            });
            $input.on("change", function(e) {
              file = e.target && e.target.files && e.target.files[0];
              if (!file) {
                return;
              }
              $defaultWrap.toggle(false);
              $errorWrap.toggle(false);
              $uploadingWrap.toggle(true);
              $uploadingWrap.focus();
              $fileNameEl.text(file.name);
              if (!isUploading()) {
                disableBtn(form);
              }
              form.fileUploads[i].uploading = true;
              signFile(file, afterSign);
            });
            var height = $label.outerHeight();
            $input.height(height);
            $input.width(1);
          } else {
            $input.on("click", function(e) {
              e.preventDefault();
            });
            $label.on("click", function(e) {
              e.preventDefault();
            });
            $labelChildren.on("click", function(e) {
              e.preventDefault();
            });
          }
          function parseError(err) {
            var errorMsg = err.responseJSON && err.responseJSON.msg;
            var userError = genericErrMsg;
            if (typeof errorMsg === "string" && errorMsg.indexOf("InvalidFileTypeError") === 0) {
              userError = typeErrMsg;
            } else if (typeof errorMsg === "string" && errorMsg.indexOf("MaxFileSizeError") === 0) {
              userError = sizeErrMsg;
            }
            $errorMsgEl.text(userError);
            $input.removeAttr("data-value");
            $input.val("");
            $uploadingWrap.toggle(false);
            $defaultWrap.toggle(true);
            $errorWrap.toggle(true);
            $errorWrap.focus();
            form.fileUploads[i].uploading = false;
            if (!isUploading()) {
              reset(form);
            }
          }
          function afterSign(err, data) {
            if (err) {
              return parseError(err);
            }
            var fileName = data.fileName;
            var postData = data.postData;
            var fileId = data.fileId;
            var s3Url = data.s3Url;
            $input.attr("data-value", fileId);
            uploadS3(s3Url, postData, file, fileName, afterUpload);
          }
          function afterUpload(err) {
            if (err) {
              return parseError(err);
            }
            $uploadingWrap.toggle(false);
            $successWrap.css("display", "inline-block");
            $successWrap.focus();
            form.fileUploads[i].uploading = false;
            if (!isUploading()) {
              reset(form);
            }
          }
          function isUploading() {
            var uploads = form.fileUploads && form.fileUploads.toArray() || [];
            return uploads.some(function(value) {
              return value.uploading;
            });
          }
        }
        function signFile(file, cb) {
          var payload = new URLSearchParams({
            name: file.name,
            size: file.size
          });
          $.ajax({
            type: "GET",
            url: `${signFileUrl}?${payload}`,
            crossDomain: true
          }).done(function(data) {
            cb(null, data);
          }).fail(function(err) {
            cb(err);
          });
        }
        function uploadS3(url, data, file, fileName, cb) {
          var formData = new FormData();
          for (var k in data) {
            formData.append(k, data[k]);
          }
          formData.append("file", file, fileName);
          $.ajax({
            type: "POST",
            url,
            data: formData,
            processData: false,
            contentType: false
          }).done(function() {
            cb(null);
          }).fail(function(err) {
            cb(err);
          });
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/Navbar/webflow-navbar.js
  var require_webflow_navbar = __commonJS({
    "packages/shared/render/plugins/Navbar/webflow-navbar.js"(exports, module) {
      var Webflow = require_webflow_lib();
      var IXEvents = require_webflow_ix2_events();
      var KEY_CODES = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
      };
      Webflow.define("navbar", module.exports = function($, _) {
        var api = {};
        var tram = $.tram;
        var $win = $(window);
        var $doc = $(document);
        var debounce = _.debounce;
        var $body;
        var $navbars;
        var designer;
        var inEditor;
        var inApp = Webflow.env();
        var overlay = '<div class="w-nav-overlay" data-wf-ignore />';
        var namespace = ".w-nav";
        var navbarOpenedButton = "w--open";
        var navbarOpenedDropdown = "w--nav-dropdown-open";
        var navbarOpenedDropdownToggle = "w--nav-dropdown-toggle-open";
        var navbarOpenedDropdownList = "w--nav-dropdown-list-open";
        var navbarOpenedLink = "w--nav-link-open";
        var ix = IXEvents.triggers;
        var menuSibling = $();
        api.ready = api.design = api.preview = init;
        api.destroy = function() {
          menuSibling = $();
          removeListeners();
          if ($navbars && $navbars.length) {
            $navbars.each(teardown);
          }
        };
        function init() {
          designer = inApp && Webflow.env("design");
          inEditor = Webflow.env("editor");
          $body = $(document.body);
          $navbars = $doc.find(namespace);
          if (!$navbars.length) {
            return;
          }
          $navbars.each(build);
          removeListeners();
          addListeners();
        }
        function removeListeners() {
          Webflow.resize.off(resizeAll);
        }
        function addListeners() {
          Webflow.resize.on(resizeAll);
        }
        function resizeAll() {
          $navbars.each(resize);
        }
        function build(i, el) {
          var $el = $(el);
          var data = $.data(el, namespace);
          if (!data) {
            data = $.data(el, namespace, {
              open: false,
              el: $el,
              config: {},
              selectedIdx: -1
            });
          }
          data.menu = $el.find(".w-nav-menu");
          data.links = data.menu.find(".w-nav-link");
          data.dropdowns = data.menu.find(".w-dropdown");
          data.dropdownToggle = data.menu.find(".w-dropdown-toggle");
          data.dropdownList = data.menu.find(".w-dropdown-list");
          data.button = $el.find(".w-nav-button");
          data.container = $el.find(".w-container");
          data.overlayContainerId = "w-nav-overlay-" + i;
          data.outside = outside(data);
          var navBrandLink = $el.find(".w-nav-brand");
          if (navBrandLink && navBrandLink.attr("href") === "/" && navBrandLink.attr("aria-label") == null) {
            navBrandLink.attr("aria-label", "home");
          }
          data.button.attr("style", "-webkit-user-select: text;");
          if (data.button.attr("aria-label") == null) {
            data.button.attr("aria-label", "menu");
          }
          data.button.attr("role", "button");
          data.button.attr("tabindex", "0");
          data.button.attr("aria-controls", data.overlayContainerId);
          data.button.attr("aria-haspopup", "menu");
          data.button.attr("aria-expanded", "false");
          data.el.off(namespace);
          data.button.off(namespace);
          data.menu.off(namespace);
          configure(data);
          if (designer) {
            removeOverlay(data);
            data.el.on("setting" + namespace, handler(data));
          } else {
            addOverlay(data);
            data.button.on("click" + namespace, toggle(data));
            data.menu.on("click" + namespace, "a", navigate(data));
            data.button.on("keydown" + namespace, makeToggleButtonKeyboardHandler(data));
            data.el.on("keydown" + namespace, makeLinksKeyboardHandler(data));
          }
          resize(i, el);
        }
        function teardown(i, el) {
          var data = $.data(el, namespace);
          if (data) {
            removeOverlay(data);
            $.removeData(el, namespace);
          }
        }
        function removeOverlay(data) {
          if (!data.overlay) {
            return;
          }
          close(data, true);
          data.overlay.remove();
          data.overlay = null;
        }
        function addOverlay(data) {
          if (data.overlay) {
            return;
          }
          data.overlay = $(overlay).appendTo(data.el);
          data.overlay.attr("id", data.overlayContainerId);
          data.parent = data.menu.parent();
          close(data, true);
        }
        function configure(data) {
          var config = {};
          var old = data.config || {};
          var animation = config.animation = data.el.attr("data-animation") || "default";
          config.animOver = /^over/.test(animation);
          config.animDirect = /left$/.test(animation) ? -1 : 1;
          if (old.animation !== animation) {
            data.open && _.defer(reopen, data);
          }
          config.easing = data.el.attr("data-easing") || "ease";
          config.easing2 = data.el.attr("data-easing2") || "ease";
          var duration = data.el.attr("data-duration");
          config.duration = duration != null ? Number(duration) : 400;
          config.docHeight = data.el.attr("data-doc-height");
          data.config = config;
        }
        function handler(data) {
          return function(evt, options) {
            options = options || {};
            var winWidth = $win.width();
            configure(data);
            options.open === true && open(data, true);
            options.open === false && close(data, true);
            data.open && _.defer(function() {
              if (winWidth !== $win.width()) {
                reopen(data);
              }
            });
          };
        }
        function makeToggleButtonKeyboardHandler(data) {
          return function(evt) {
            switch (evt.keyCode) {
              case KEY_CODES.SPACE:
              case KEY_CODES.ENTER: {
                toggle(data)();
                evt.preventDefault();
                return evt.stopPropagation();
              }
              case KEY_CODES.ESCAPE: {
                close(data);
                evt.preventDefault();
                return evt.stopPropagation();
              }
              case KEY_CODES.ARROW_RIGHT:
              case KEY_CODES.ARROW_DOWN:
              case KEY_CODES.HOME:
              case KEY_CODES.END: {
                if (!data.open) {
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
                if (evt.keyCode === KEY_CODES.END) {
                  data.selectedIdx = data.links.length - 1;
                } else {
                  data.selectedIdx = 0;
                }
                focusSelectedLink(data);
                evt.preventDefault();
                return evt.stopPropagation();
              }
            }
          };
        }
        function makeLinksKeyboardHandler(data) {
          return function(evt) {
            if (!data.open) {
              return;
            }
            data.selectedIdx = data.links.index(document.activeElement);
            switch (evt.keyCode) {
              case KEY_CODES.HOME:
              case KEY_CODES.END: {
                if (evt.keyCode === KEY_CODES.END) {
                  data.selectedIdx = data.links.length - 1;
                } else {
                  data.selectedIdx = 0;
                }
                focusSelectedLink(data);
                evt.preventDefault();
                return evt.stopPropagation();
              }
              case KEY_CODES.ESCAPE: {
                close(data);
                data.button.focus();
                evt.preventDefault();
                return evt.stopPropagation();
              }
              case KEY_CODES.ARROW_LEFT:
              case KEY_CODES.ARROW_UP: {
                data.selectedIdx = Math.max(-1, data.selectedIdx - 1);
                focusSelectedLink(data);
                evt.preventDefault();
                return evt.stopPropagation();
              }
              case KEY_CODES.ARROW_RIGHT:
              case KEY_CODES.ARROW_DOWN: {
                data.selectedIdx = Math.min(data.links.length - 1, data.selectedIdx + 1);
                focusSelectedLink(data);
                evt.preventDefault();
                return evt.stopPropagation();
              }
            }
          };
        }
        function focusSelectedLink(data) {
          if (data.links[data.selectedIdx]) {
            var selectedElement = data.links[data.selectedIdx];
            selectedElement.focus();
            navigate(selectedElement);
          }
        }
        function reopen(data) {
          if (!data.open) {
            return;
          }
          close(data, true);
          open(data, true);
        }
        function toggle(data) {
          return debounce(function() {
            data.open ? close(data) : open(data);
          });
        }
        function navigate(data) {
          return function(evt) {
            var link = $(this);
            var href = link.attr("href");
            if (!Webflow.validClick(evt.currentTarget)) {
              evt.preventDefault();
              return;
            }
            if (href && href.indexOf("#") === 0 && data.open) {
              close(data);
            }
          };
        }
        function outside(data) {
          if (data.outside) {
            $doc.off("click" + namespace, data.outside);
          }
          return function(evt) {
            var $target = $(evt.target);
            if (inEditor && $target.closest(".w-editor-bem-EditorOverlay").length) {
              return;
            }
            outsideDebounced(data, $target);
          };
        }
        var outsideDebounced = debounce(function(data, $target) {
          if (!data.open) {
            return;
          }
          var menu = $target.closest(".w-nav-menu");
          if (!data.menu.is(menu)) {
            close(data);
          }
        });
        function resize(i, el) {
          var data = $.data(el, namespace);
          var collapsed = data.collapsed = data.button.css("display") !== "none";
          if (data.open && !collapsed && !designer) {
            close(data, true);
          }
          if (data.container.length) {
            var updateEachMax = updateMax(data);
            data.links.each(updateEachMax);
            data.dropdowns.each(updateEachMax);
          }
          if (data.open) {
            setOverlayHeight(data);
          }
        }
        var maxWidth = "max-width";
        function updateMax(data) {
          var containMax = data.container.css(maxWidth);
          if (containMax === "none") {
            containMax = "";
          }
          return function(i, link) {
            link = $(link);
            link.css(maxWidth, "");
            if (link.css(maxWidth) === "none") {
              link.css(maxWidth, containMax);
            }
          };
        }
        function addMenuOpen(i, el) {
          el.setAttribute("data-nav-menu-open", "");
        }
        function removeMenuOpen(i, el) {
          el.removeAttribute("data-nav-menu-open");
        }
        function open(data, immediate) {
          if (data.open) {
            return;
          }
          data.open = true;
          data.menu.each(addMenuOpen);
          data.links.addClass(navbarOpenedLink);
          data.dropdowns.addClass(navbarOpenedDropdown);
          data.dropdownToggle.addClass(navbarOpenedDropdownToggle);
          data.dropdownList.addClass(navbarOpenedDropdownList);
          data.button.addClass(navbarOpenedButton);
          var config = data.config;
          var animation = config.animation;
          if (animation === "none" || !tram.support.transform || config.duration <= 0) {
            immediate = true;
          }
          var bodyHeight = setOverlayHeight(data);
          var menuHeight = data.menu.outerHeight(true);
          var menuWidth = data.menu.outerWidth(true);
          var navHeight = data.el.height();
          var navbarEl = data.el[0];
          resize(0, navbarEl);
          ix.intro(0, navbarEl);
          Webflow.redraw.up();
          if (!designer) {
            $doc.on("click" + namespace, data.outside);
          }
          if (immediate) {
            complete();
            return;
          }
          var transConfig = "transform " + config.duration + "ms " + config.easing;
          if (data.overlay) {
            menuSibling = data.menu.prev();
            data.overlay.show().append(data.menu);
          }
          if (config.animOver) {
            tram(data.menu).add(transConfig).set({
              x: config.animDirect * menuWidth,
              height: bodyHeight
            }).start({
              x: 0
            }).then(complete);
            data.overlay && data.overlay.width(menuWidth);
            return;
          }
          var offsetY = navHeight + menuHeight;
          tram(data.menu).add(transConfig).set({
            y: -offsetY
          }).start({
            y: 0
          }).then(complete);
          function complete() {
            data.button.attr("aria-expanded", "true");
          }
        }
        function setOverlayHeight(data) {
          var config = data.config;
          var bodyHeight = config.docHeight ? $doc.height() : $body.height();
          if (config.animOver) {
            data.menu.height(bodyHeight);
          } else if (data.el.css("position") !== "fixed") {
            bodyHeight -= data.el.outerHeight(true);
          }
          data.overlay && data.overlay.height(bodyHeight);
          return bodyHeight;
        }
        function close(data, immediate) {
          if (!data.open) {
            return;
          }
          data.open = false;
          data.button.removeClass(navbarOpenedButton);
          var config = data.config;
          if (config.animation === "none" || !tram.support.transform || config.duration <= 0) {
            immediate = true;
          }
          ix.outro(0, data.el[0]);
          $doc.off("click" + namespace, data.outside);
          if (immediate) {
            tram(data.menu).stop();
            complete();
            return;
          }
          var transConfig = "transform " + config.duration + "ms " + config.easing2;
          var menuHeight = data.menu.outerHeight(true);
          var menuWidth = data.menu.outerWidth(true);
          var navHeight = data.el.height();
          if (config.animOver) {
            tram(data.menu).add(transConfig).start({
              x: menuWidth * config.animDirect
            }).then(complete);
            return;
          }
          var offsetY = navHeight + menuHeight;
          tram(data.menu).add(transConfig).start({
            y: -offsetY
          }).then(complete);
          function complete() {
            data.menu.height("");
            tram(data.menu).set({
              x: 0,
              y: 0
            });
            data.menu.each(removeMenuOpen);
            data.links.removeClass(navbarOpenedLink);
            data.dropdowns.removeClass(navbarOpenedDropdown);
            data.dropdownToggle.removeClass(navbarOpenedDropdownToggle);
            data.dropdownList.removeClass(navbarOpenedDropdownList);
            if (data.overlay && data.overlay.children().length) {
              menuSibling.length ? data.menu.insertAfter(menuSibling) : data.menu.prependTo(data.parent);
              data.overlay.attr("style", "").hide();
            }
            data.el.triggerHandler("w-close");
            data.button.attr("aria-expanded", "false");
          }
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/Slider/webflow-slider.js
  var require_webflow_slider = __commonJS({
    "packages/shared/render/plugins/Slider/webflow-slider.js"(exports, module) {
      var Webflow = require_webflow_lib();
      var IXEvents = require_webflow_ix2_events();
      var KEY_CODES = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
      };
      var FOCUSABLE_SELECTOR = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
      Webflow.define("slider", module.exports = function($, _) {
        var api = {};
        var tram = $.tram;
        var $doc = $(document);
        var $sliders;
        var designer;
        var inApp = Webflow.env();
        var namespace = ".w-slider";
        var dot = '<div class="w-slider-dot" data-wf-ignore />';
        var ariaLiveLabelHtml = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />';
        var forceShow = "w-slider-force-show";
        var ix = IXEvents.triggers;
        var fallback;
        var inRedraw = false;
        api.ready = function() {
          designer = Webflow.env("design");
          init();
        };
        api.design = function() {
          designer = true;
          setTimeout(init, 1e3);
        };
        api.preview = function() {
          designer = false;
          init();
        };
        api.redraw = function() {
          inRedraw = true;
          init();
          inRedraw = false;
        };
        api.destroy = removeListeners;
        function init() {
          $sliders = $doc.find(namespace);
          if (!$sliders.length) {
            return;
          }
          $sliders.each(build);
          if (fallback) {
            return;
          }
          removeListeners();
          addListeners();
        }
        function removeListeners() {
          Webflow.resize.off(renderAll);
          Webflow.redraw.off(api.redraw);
        }
        function addListeners() {
          Webflow.resize.on(renderAll);
          Webflow.redraw.on(api.redraw);
        }
        function renderAll() {
          $sliders.filter(":visible").each(render);
        }
        function build(i, el) {
          var $el = $(el);
          var data = $.data(el, namespace);
          if (!data) {
            data = $.data(el, namespace, {
              index: 0,
              depth: 1,
              hasFocus: {
                keyboard: false,
                mouse: false
              },
              el: $el,
              config: {}
            });
          }
          data.mask = $el.children(".w-slider-mask");
          data.left = $el.children(".w-slider-arrow-left");
          data.right = $el.children(".w-slider-arrow-right");
          data.nav = $el.children(".w-slider-nav");
          data.slides = data.mask.children(".w-slide");
          data.slides.each(ix.reset);
          if (inRedraw) {
            data.maskWidth = 0;
          }
          if ($el.attr("role") === void 0) {
            $el.attr("role", "region");
          }
          if ($el.attr("aria-label") === void 0) {
            $el.attr("aria-label", "carousel");
          }
          var slideViewId = data.mask.attr("id");
          if (!slideViewId) {
            slideViewId = "w-slider-mask-" + i;
            data.mask.attr("id", slideViewId);
          }
          if (!designer && !data.ariaLiveLabel) {
            data.ariaLiveLabel = $(ariaLiveLabelHtml).appendTo(data.mask);
          }
          data.left.attr("role", "button");
          data.left.attr("tabindex", "0");
          data.left.attr("aria-controls", slideViewId);
          if (data.left.attr("aria-label") === void 0) {
            data.left.attr("aria-label", "previous slide");
          }
          data.right.attr("role", "button");
          data.right.attr("tabindex", "0");
          data.right.attr("aria-controls", slideViewId);
          if (data.right.attr("aria-label") === void 0) {
            data.right.attr("aria-label", "next slide");
          }
          if (!tram.support.transform) {
            data.left.hide();
            data.right.hide();
            data.nav.hide();
            fallback = true;
            return;
          }
          data.el.off(namespace);
          data.left.off(namespace);
          data.right.off(namespace);
          data.nav.off(namespace);
          configure(data);
          if (designer) {
            data.el.on("setting" + namespace, handler(data));
            stopTimer(data);
            data.hasTimer = false;
          } else {
            data.el.on("swipe" + namespace, handler(data));
            data.left.on("click" + namespace, previousFunction(data));
            data.right.on("click" + namespace, next(data));
            data.left.on("keydown" + namespace, keyboardSlideButtonsFunction(data, previousFunction));
            data.right.on("keydown" + namespace, keyboardSlideButtonsFunction(data, next));
            data.nav.on("keydown" + namespace, "> div", handler(data));
            if (data.config.autoplay && !data.hasTimer) {
              data.hasTimer = true;
              data.timerCount = 1;
              startTimer(data);
            }
            data.el.on("mouseenter" + namespace, hasFocus(data, true, "mouse"));
            data.el.on("focusin" + namespace, hasFocus(data, true, "keyboard"));
            data.el.on("mouseleave" + namespace, hasFocus(data, false, "mouse"));
            data.el.on("focusout" + namespace, hasFocus(data, false, "keyboard"));
          }
          data.nav.on("click" + namespace, "> div", handler(data));
          if (!inApp) {
            data.mask.contents().filter(function() {
              return this.nodeType === 3;
            }).remove();
          }
          var $elHidden = $el.filter(":hidden");
          $elHidden.addClass(forceShow);
          var $elHiddenParents = $el.parents(":hidden");
          $elHiddenParents.addClass(forceShow);
          if (!inRedraw) {
            render(i, el);
          }
          $elHidden.removeClass(forceShow);
          $elHiddenParents.removeClass(forceShow);
        }
        function configure(data) {
          var config = {};
          config.crossOver = 0;
          config.animation = data.el.attr("data-animation") || "slide";
          if (config.animation === "outin") {
            config.animation = "cross";
            config.crossOver = 0.5;
          }
          config.easing = data.el.attr("data-easing") || "ease";
          var duration = data.el.attr("data-duration");
          config.duration = duration != null ? parseInt(duration, 10) : 500;
          if (isAttrTrue(data.el.attr("data-infinite"))) {
            config.infinite = true;
          }
          if (isAttrTrue(data.el.attr("data-disable-swipe"))) {
            config.disableSwipe = true;
          }
          if (isAttrTrue(data.el.attr("data-hide-arrows"))) {
            config.hideArrows = true;
          } else if (data.config.hideArrows) {
            data.left.show();
            data.right.show();
          }
          if (isAttrTrue(data.el.attr("data-autoplay"))) {
            config.autoplay = true;
            config.delay = parseInt(data.el.attr("data-delay"), 10) || 2e3;
            config.timerMax = parseInt(data.el.attr("data-autoplay-limit"), 10);
            var touchEvents = "mousedown" + namespace + " touchstart" + namespace;
            if (!designer) {
              data.el.off(touchEvents).one(touchEvents, function() {
                stopTimer(data);
              });
            }
          }
          var arrowWidth = data.right.width();
          config.edge = arrowWidth ? arrowWidth + 40 : 100;
          data.config = config;
        }
        function isAttrTrue(value) {
          return value === "1" || value === "true";
        }
        function hasFocus(data, focusIn, eventType) {
          return function(evt) {
            if (!focusIn) {
              if ($.contains(data.el.get(0), evt.relatedTarget)) {
                return;
              }
              data.hasFocus[eventType] = focusIn;
              if (data.hasFocus.mouse && eventType === "keyboard" || data.hasFocus.keyboard && eventType === "mouse") {
                return;
              }
            } else {
              data.hasFocus[eventType] = focusIn;
            }
            if (focusIn) {
              data.ariaLiveLabel.attr("aria-live", "polite");
              if (data.hasTimer) {
                stopTimer(data);
              }
            } else {
              data.ariaLiveLabel.attr("aria-live", "off");
              if (data.hasTimer) {
                startTimer(data);
              }
            }
            return;
          };
        }
        function keyboardSlideButtonsFunction(data, directionFunction) {
          return function(evt) {
            switch (evt.keyCode) {
              case KEY_CODES.SPACE:
              case KEY_CODES.ENTER: {
                directionFunction(data)();
                evt.preventDefault();
                return evt.stopPropagation();
              }
            }
          };
        }
        function previousFunction(data) {
          return function() {
            change(data, {
              index: data.index - 1,
              vector: -1
            });
          };
        }
        function next(data) {
          return function() {
            change(data, {
              index: data.index + 1,
              vector: 1
            });
          };
        }
        function select(data, value) {
          var found = null;
          if (value === data.slides.length) {
            init();
            layout(data);
          }
          _.each(data.anchors, function(anchor, index) {
            $(anchor.els).each(function(i, el) {
              if ($(el).index() === value) {
                found = index;
              }
            });
          });
          if (found != null) {
            change(data, {
              index: found,
              immediate: true
            });
          }
        }
        function startTimer(data) {
          stopTimer(data);
          var config = data.config;
          var timerMax = config.timerMax;
          if (timerMax && data.timerCount++ > timerMax) {
            return;
          }
          data.timerId = window.setTimeout(function() {
            if (data.timerId == null || designer) {
              return;
            }
            next(data)();
            startTimer(data);
          }, config.delay);
        }
        function stopTimer(data) {
          window.clearTimeout(data.timerId);
          data.timerId = null;
        }
        function handler(data) {
          return function(evt, options) {
            options = options || {};
            var config = data.config;
            if (designer && evt.type === "setting") {
              if (options.select === "prev") {
                return previousFunction(data)();
              }
              if (options.select === "next") {
                return next(data)();
              }
              configure(data);
              layout(data);
              if (options.select == null) {
                return;
              }
              select(data, options.select);
              return;
            }
            if (evt.type === "swipe") {
              if (config.disableSwipe) {
                return;
              }
              if (Webflow.env("editor")) {
                return;
              }
              if (options.direction === "left") {
                return next(data)();
              }
              if (options.direction === "right") {
                return previousFunction(data)();
              }
              return;
            }
            if (data.nav.has(evt.target).length) {
              var index = $(evt.target).index();
              if (evt.type === "click") {
                change(data, {
                  index
                });
              }
              if (evt.type === "keydown") {
                switch (evt.keyCode) {
                  case KEY_CODES.ENTER:
                  case KEY_CODES.SPACE: {
                    change(data, {
                      index
                    });
                    evt.preventDefault();
                    break;
                  }
                  case KEY_CODES.ARROW_LEFT:
                  case KEY_CODES.ARROW_UP: {
                    focusDot(data.nav, Math.max(index - 1, 0));
                    evt.preventDefault();
                    break;
                  }
                  case KEY_CODES.ARROW_RIGHT:
                  case KEY_CODES.ARROW_DOWN: {
                    focusDot(data.nav, Math.min(index + 1, data.pages));
                    evt.preventDefault();
                    break;
                  }
                  case KEY_CODES.HOME: {
                    focusDot(data.nav, 0);
                    evt.preventDefault();
                    break;
                  }
                  case KEY_CODES.END: {
                    focusDot(data.nav, data.pages);
                    evt.preventDefault();
                    break;
                  }
                  default: {
                    return;
                  }
                }
              }
            }
          };
        }
        function focusDot($nav, index) {
          var $active = $nav.children().eq(index).focus();
          $nav.children().not($active);
        }
        function change(data, options) {
          options = options || {};
          var config = data.config;
          var anchors = data.anchors;
          data.previous = data.index;
          var index = options.index;
          var shift = {};
          if (index < 0) {
            index = anchors.length - 1;
            if (config.infinite) {
              shift.x = -data.endX;
              shift.from = 0;
              shift.to = anchors[0].width;
            }
          } else if (index >= anchors.length) {
            index = 0;
            if (config.infinite) {
              shift.x = anchors[anchors.length - 1].width;
              shift.from = -anchors[anchors.length - 1].x;
              shift.to = shift.from - shift.x;
            }
          }
          data.index = index;
          var $active = data.nav.children().eq(index).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
          data.nav.children().not($active).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1");
          if (config.hideArrows) {
            data.index === anchors.length - 1 ? data.right.hide() : data.right.show();
            data.index === 0 ? data.left.hide() : data.left.show();
          }
          var lastOffsetX = data.offsetX || 0;
          var offsetX = data.offsetX = -anchors[data.index].x;
          var resetConfig = {
            x: offsetX,
            opacity: 1,
            visibility: ""
          };
          var targets = $(anchors[data.index].els);
          var prevTargs = $(anchors[data.previous] && anchors[data.previous].els);
          var others = data.slides.not(targets);
          var animation = config.animation;
          var easing = config.easing;
          var duration = Math.round(config.duration);
          var vector = options.vector || (data.index > data.previous ? 1 : -1);
          var fadeRule = "opacity " + duration + "ms " + easing;
          var slideRule = "transform " + duration + "ms " + easing;
          targets.find(FOCUSABLE_SELECTOR).removeAttr("tabindex");
          targets.removeAttr("aria-hidden");
          targets.find("*").removeAttr("aria-hidden");
          others.find(FOCUSABLE_SELECTOR).attr("tabindex", "-1");
          others.attr("aria-hidden", "true");
          others.find("*").attr("aria-hidden", "true");
          if (!designer) {
            targets.each(ix.intro);
            others.each(ix.outro);
          }
          if (options.immediate && !inRedraw) {
            tram(targets).set(resetConfig);
            resetOthers();
            return;
          }
          if (data.index === data.previous) {
            return;
          }
          if (!designer) {
            data.ariaLiveLabel.text(`Slide ${index + 1} of ${anchors.length}.`);
          }
          if (animation === "cross") {
            var reduced = Math.round(duration - duration * config.crossOver);
            var wait = Math.round(duration - reduced);
            fadeRule = "opacity " + reduced + "ms " + easing;
            tram(prevTargs).set({
              visibility: ""
            }).add(fadeRule).start({
              opacity: 0
            });
            tram(targets).set({
              visibility: "",
              x: offsetX,
              opacity: 0,
              zIndex: data.depth++
            }).add(fadeRule).wait(wait).then({
              opacity: 1
            }).then(resetOthers);
            return;
          }
          if (animation === "fade") {
            tram(prevTargs).set({
              visibility: ""
            }).stop();
            tram(targets).set({
              visibility: "",
              x: offsetX,
              opacity: 0,
              zIndex: data.depth++
            }).add(fadeRule).start({
              opacity: 1
            }).then(resetOthers);
            return;
          }
          if (animation === "over") {
            resetConfig = {
              x: data.endX
            };
            tram(prevTargs).set({
              visibility: ""
            }).stop();
            tram(targets).set({
              visibility: "",
              zIndex: data.depth++,
              x: offsetX + anchors[data.index].width * vector
            }).add(slideRule).start({
              x: offsetX
            }).then(resetOthers);
            return;
          }
          if (config.infinite && shift.x) {
            tram(data.slides.not(prevTargs)).set({
              visibility: "",
              x: shift.x
            }).add(slideRule).start({
              x: offsetX
            });
            tram(prevTargs).set({
              visibility: "",
              x: shift.from
            }).add(slideRule).start({
              x: shift.to
            });
            data.shifted = prevTargs;
          } else {
            if (config.infinite && data.shifted) {
              tram(data.shifted).set({
                visibility: "",
                x: lastOffsetX
              });
              data.shifted = null;
            }
            tram(data.slides).set({
              visibility: ""
            }).add(slideRule).start({
              x: offsetX
            });
          }
          function resetOthers() {
            targets = $(anchors[data.index].els);
            others = data.slides.not(targets);
            if (animation !== "slide") {
              resetConfig.visibility = "hidden";
            }
            tram(others).set(resetConfig);
          }
        }
        function render(i, el) {
          var data = $.data(el, namespace);
          if (!data) {
            return;
          }
          if (maskChanged(data)) {
            return layout(data);
          }
          if (designer && slidesChanged(data)) {
            layout(data);
          }
        }
        function layout(data) {
          var pages = 1;
          var offset = 0;
          var anchor = 0;
          var width = 0;
          var maskWidth = data.maskWidth;
          var threshold = maskWidth - data.config.edge;
          if (threshold < 0) {
            threshold = 0;
          }
          data.anchors = [{
            els: [],
            x: 0,
            width: 0
          }];
          data.slides.each(function(i, el) {
            if (anchor - offset > threshold) {
              pages++;
              offset += maskWidth;
              data.anchors[pages - 1] = {
                els: [],
                x: anchor,
                width: 0
              };
            }
            width = $(el).outerWidth(true);
            anchor += width;
            data.anchors[pages - 1].width += width;
            data.anchors[pages - 1].els.push(el);
            var ariaLabel = i + 1 + " of " + data.slides.length;
            $(el).attr("aria-label", ariaLabel);
            $(el).attr("role", "group");
          });
          data.endX = anchor;
          if (designer) {
            data.pages = null;
          }
          if (data.nav.length && data.pages !== pages) {
            data.pages = pages;
            buildNav(data);
          }
          var index = data.index;
          if (index >= pages) {
            index = pages - 1;
          }
          change(data, {
            immediate: true,
            index
          });
        }
        function buildNav(data) {
          var dots = [];
          var $dot;
          var spacing = data.el.attr("data-nav-spacing");
          if (spacing) {
            spacing = parseFloat(spacing) + "px";
          }
          for (var i = 0, len = data.pages; i < len; i++) {
            $dot = $(dot);
            $dot.attr("aria-label", "Show slide " + (i + 1) + " of " + len).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1");
            if (data.nav.hasClass("w-num")) {
              $dot.text(i + 1);
            }
            if (spacing != null) {
              $dot.css({
                "margin-left": spacing,
                "margin-right": spacing
              });
            }
            dots.push($dot);
          }
          data.nav.empty().append(dots);
        }
        function maskChanged(data) {
          var maskWidth = data.mask.width();
          if (data.maskWidth !== maskWidth) {
            data.maskWidth = maskWidth;
            return true;
          }
          return false;
        }
        function slidesChanged(data) {
          var slidesWidth = 0;
          data.slides.each(function(i, el) {
            slidesWidth += $(el).outerWidth(true);
          });
          if (data.slidesWidth !== slidesWidth) {
            data.slidesWidth = slidesWidth;
            return true;
          }
          return false;
        }
        return api;
      });
    }
  });

  // <stdin>
  require_webflow_brand();
  require_webflow_focus_visible();
  require_webflow_focus();
  require_webflow_ix2_events();
  require_webflow_ix2();
  require_webflow_links();
  require_webflow_scroll();
  require_webflow_touch();
  require_webflow_forms();
  require_webflow_navbar();
  require_webflow_slider();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init(
{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-428"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636309046869},"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-427"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636309046872},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-5"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c28","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c28","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1636309747823},"e-5":{"id":"e-5","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c28","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c28","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1636309747823},"e-6":{"id":"e-6","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|e8dad3b4-9056-4e07-6074-67b7c35aceba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|e8dad3b4-9056-4e07-6074-67b7c35aceba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636310676980},"e-8":{"id":"e-8","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-299"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|b2ae0b65-e2f1-06d3-f0a8-61b38fb00859","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|b2ae0b65-e2f1-06d3-f0a8-61b38fb00859","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":3,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636310738760},"e-10":{"id":"e-10","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-11"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|45852f9b-7852-b4f3-446f-009ff3e01225","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|45852f9b-7852-b4f3-446f-009ff3e01225","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636310749505},"e-14":{"id":"e-14","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-15"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|3e73ed57-de4a-ad71-5422-742c3d91ea19","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|3e73ed57-de4a-ad71-5422-742c3d91ea19","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636310868964},"e-16":{"id":"e-16","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-17"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|f04aa496-e45f-8ac1-3b8b-e38830ca96f3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|f04aa496-e45f-8ac1-3b8b-e38830ca96f3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636310947536},"e-18":{"id":"e-18","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-19"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|35e086e9-13b8-8e04-8faf-46f9adc61dd3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|35e086e9-13b8-8e04-8faf-46f9adc61dd3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636311315947},"e-20":{"id":"e-20","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|aee1b040-00f3-e88e-681e-7b434f3e8038","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|aee1b040-00f3-e88e-681e-7b434f3e8038","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636311472181},"e-22":{"id":"e-22","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-23"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|7e3b023e-d9db-ca88-7ca6-e6ba7a2d3ade","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|7e3b023e-d9db-ca88-7ca6-e6ba7a2d3ade","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636311477471},"e-24":{"id":"e-24","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-25"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|76776feb-6664-b237-3f5c-da0a042087ec","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|76776feb-6664-b237-3f5c-da0a042087ec","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636311488397},"e-26":{"id":"e-26","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-27"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|d871b665-5797-e774-45ec-c01c9914be09","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|d871b665-5797-e774-45ec-c01c9914be09","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636311494731},"e-28":{"id":"e-28","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-29"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|8c4184eb-87a4-c71f-0b3f-6021f01bde96","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|8c4184eb-87a4-c71f-0b3f-6021f01bde96","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636311505188},"e-30":{"id":"e-30","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-31"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|99a638fd-e40f-26c5-01b7-0ce67641e651","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|99a638fd-e40f-26c5-01b7-0ce67641e651","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636311513604},"e-32":{"id":"e-32","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|76b7c5e4-f122-9602-f6e9-18a6edf8db61","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|76b7c5e4-f122-9602-f6e9-18a6edf8db61","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636311536364},"e-34":{"id":"e-34","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-35"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|d8520283-7c29-d9e2-98e6-72bb4f9bfe1f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|d8520283-7c29-d9e2-98e6-72bb4f9bfe1f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636311581710},"e-36":{"id":"e-36","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-37"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|d8520283-7c29-d9e2-98e6-72bb4f9bfe22","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|d8520283-7c29-d9e2-98e6-72bb4f9bfe22","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636311590005},"e-38":{"id":"e-38","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-39"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|d8520283-7c29-d9e2-98e6-72bb4f9bfe26","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|d8520283-7c29-d9e2-98e6-72bb4f9bfe26","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636311597846},"e-40":{"id":"e-40","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-10","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|6907d216-1a6e-da26-df93-314290a2217d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|6907d216-1a6e-da26-df93-314290a2217d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-10-p","smoothing":98,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1636311611332},"e-41":{"id":"e-41","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-11","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"6500935640c6420fe0573621|76aa8a6d-373d-db49-544b-79a5da46af98","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|76aa8a6d-373d-db49-544b-79a5da46af98","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-11-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":80,"restingState":0},{"continuousParameterGroupId":"a-11-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":80,"restingState":50}],"createdOn":1636312343936},"e-52":{"id":"e-52","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-53"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|c489a869-9289-b3b5-4627-6feedcd6818e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|c489a869-9289-b3b5-4627-6feedcd6818e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636315087721},"e-54":{"id":"e-54","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-55"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|d440c4f3-b4f1-1dab-1043-a9d71746376d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|d440c4f3-b4f1-1dab-1043-a9d71746376d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636315097587},"e-56":{"id":"e-56","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-57"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|1861443a-cc02-930a-a23a-3899b3156a23","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|1861443a-cc02-930a-a23a-3899b3156a23","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636315650146},"e-58":{"id":"e-58","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-59"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|fd97f1fd-2b9e-079c-76fe-c04c27452961","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|fd97f1fd-2b9e-079c-76fe-c04c27452961","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636315660260},"e-60":{"id":"e-60","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-61"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|3589034e-0dca-ad99-5415-87e63eb32264","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|3589034e-0dca-ad99-5415-87e63eb32264","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636315674949},"e-62":{"id":"e-62","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-63"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|3d721fbf-ace1-4517-ea70-c9ac105b5b71","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|3d721fbf-ace1-4517-ea70-c9ac105b5b71","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636315717326},"e-64":{"id":"e-64","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-65"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|deb71fdf-b4c9-2a08-0b7d-b9056fec27fc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|deb71fdf-b4c9-2a08-0b7d-b9056fec27fc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636315724553},"e-66":{"id":"e-66","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-67"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|310000b0-e2d9-dea0-6847-44cd559d6163","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|310000b0-e2d9-dea0-6847-44cd559d6163","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636315730786},"e-68":{"id":"e-68","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-69"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|eb257556-ed0f-7082-8a56-7cd0105a679b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|eb257556-ed0f-7082-8a56-7cd0105a679b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636315736920},"e-70":{"id":"e-70","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-71"}},"mediaQueries":["small","tiny"],"target":{"id":"6500935640c6420fe0573621|a6ba592a-38d1-f3c4-8434-c89e70b08aed","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|a6ba592a-38d1-f3c4-8434-c89e70b08aed","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636316146428},"e-72":{"id":"e-72","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-73"}},"mediaQueries":["main","medium"],"target":{"id":"6500935640c6420fe0573621|a6ba592a-38d1-f3c4-8434-c89e70b08aed","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|a6ba592a-38d1-f3c4-8434-c89e70b08aed","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636316999772},"e-84":{"id":"e-84","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-85"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|d8520283-7c29-d9e2-98e6-72bb4f9bfe29","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|d8520283-7c29-d9e2-98e6-72bb4f9bfe29","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636385301893},"e-86":{"id":"e-86","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-87"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|5320d612-3023-9b8f-15de-39e92e8797d5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|5320d612-3023-9b8f-15de-39e92e8797d5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636385312869},"e-88":{"id":"e-88","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-89"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|ef7006e6-aa1d-9533-7b07-bb711e4101e6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|ef7006e6-aa1d-9533-7b07-bb711e4101e6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636385357886},"e-90":{"id":"e-90","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-91"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|c9b6b91a-1854-f72b-2bf6-04e56071baa9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|c9b6b91a-1854-f72b-2bf6-04e56071baa9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636385364349},"e-92":{"id":"e-92","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-93"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f8ed719a-b6f6-af82-3e69-a9e49bfc6070","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f8ed719a-b6f6-af82-3e69-a9e49bfc6070","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636385373597},"e-94":{"id":"e-94","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-95"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f8ed719a-b6f6-af82-3e69-a9e49bfc6074","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f8ed719a-b6f6-af82-3e69-a9e49bfc6074","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636385380344},"e-96":{"id":"e-96","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-97"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f8ed719a-b6f6-af82-3e69-a9e49bfc6076","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f8ed719a-b6f6-af82-3e69-a9e49bfc6076","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636385387165},"e-98":{"id":"e-98","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-99"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f8ed719a-b6f6-af82-3e69-a9e49bfc607a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f8ed719a-b6f6-af82-3e69-a9e49bfc607a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636385394025},"e-100":{"id":"e-100","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-23","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f8ed719a-b6f6-af82-3e69-a9e49bfc606b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f8ed719a-b6f6-af82-3e69-a9e49bfc606b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-23-p","smoothing":99,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1636385418549},"e-104":{"id":"e-104","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-27","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"6500935640c6420fe0573621|76aa8a6d-373d-db49-544b-79a5da46af98","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|76aa8a6d-373d-db49-544b-79a5da46af98","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-27-p","smoothing":95,"startsEntering":false,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1636421986814},"e-109":{"id":"e-109","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-110"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a8fef48c-b0b3-52dd-2db2-eece9c941d3c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a8fef48c-b0b3-52dd-2db2-eece9c941d3c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1636426827470},"e-110":{"id":"e-110","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-109"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a8fef48c-b0b3-52dd-2db2-eece9c941d3c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a8fef48c-b0b3-52dd-2db2-eece9c941d3c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1636426827471},"e-111":{"id":"e-111","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-112"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a8fef48c-b0b3-52dd-2db2-eece9c941d40","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a8fef48c-b0b3-52dd-2db2-eece9c941d40","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1636426838653},"e-112":{"id":"e-112","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-111"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a8fef48c-b0b3-52dd-2db2-eece9c941d40","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a8fef48c-b0b3-52dd-2db2-eece9c941d40","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1636426838654},"e-113":{"id":"e-113","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-114"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|d440c4f3-b4f1-1dab-1043-a9d71746376d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|d440c4f3-b4f1-1dab-1043-a9d71746376d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636426915388},"e-115":{"id":"e-115","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-116"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|fd97f1fd-2b9e-079c-76fe-c04c27452961","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|fd97f1fd-2b9e-079c-76fe-c04c27452961","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636426921688},"e-117":{"id":"e-117","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-118"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|3589034e-0dca-ad99-5415-87e63eb32264","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|3589034e-0dca-ad99-5415-87e63eb32264","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636426929131},"e-119":{"id":"e-119","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-120"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|1861443a-cc02-930a-a23a-3899b3156a23","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|1861443a-cc02-930a-a23a-3899b3156a23","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636426935057},"e-121":{"id":"e-121","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-122"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|a6ba592a-38d1-f3c4-8434-c89e70b08aed","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|a6ba592a-38d1-f3c4-8434-c89e70b08aed","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1636847421339},"e-122":{"id":"e-122","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-121"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|a6ba592a-38d1-f3c4-8434-c89e70b08aed","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|a6ba592a-38d1-f3c4-8434-c89e70b08aed","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1636847421341},"e-123":{"id":"e-123","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-3","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-3-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1636853712334},"e-124":{"id":"e-124","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-234"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692|77cddacf-9f9f-4a32-ec94-c000de0552fa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692|77cddacf-9f9f-4a32-ec94-c000de0552fa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636855195025},"e-130":{"id":"e-130","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-131"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692|f3989052-1998-2ade-0a70-6167068cbf99","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692|f3989052-1998-2ade-0a70-6167068cbf99","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636855383983},"e-136":{"id":"e-136","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-137"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692|1afde665-2d2c-4e50-3781-22b6bd5f871d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692|1afde665-2d2c-4e50-3781-22b6bd5f871d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636855631397},"e-138":{"id":"e-138","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-139"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692|37496c11-251f-a224-7574-fe68ea200a23","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692|37496c11-251f-a224-7574-fe68ea200a23","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636855632179},"e-140":{"id":"e-140","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-141"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692|f2c6dedc-4a09-3832-748b-c5cd646620d6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692|f2c6dedc-4a09-3832-748b-c5cd646620d6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636855632545},"e-163":{"id":"e-163","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-164"}},"mediaQueries":["main","medium"],"target":{"id":"6500935640c6420fe0573694|2856f812-fc50-52ab-0033-bed04536807b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573694|2856f812-fc50-52ab-0033-bed04536807b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636855865549},"e-165":{"id":"e-165","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-166"}},"mediaQueries":["small","tiny"],"target":{"id":"6500935640c6420fe0573694|2856f812-fc50-52ab-0033-bed04536807b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573694|2856f812-fc50-52ab-0033-bed04536807b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636855865549},"e-167":{"id":"e-167","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-168"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573694|2856f812-fc50-52ab-0033-bed04536807b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573694|2856f812-fc50-52ab-0033-bed04536807b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1636855865549},"e-168":{"id":"e-168","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-167"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573694|2856f812-fc50-52ab-0033-bed04536807b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573694|2856f812-fc50-52ab-0033-bed04536807b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1636855865549},"e-169":{"id":"e-169","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-170"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573694|2856f812-fc50-52ab-0033-bed045368086","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573694|2856f812-fc50-52ab-0033-bed045368086","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636855865549},"e-171":{"id":"e-171","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-172"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573694|2856f812-fc50-52ab-0033-bed04536808b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573694|2856f812-fc50-52ab-0033-bed04536808b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1636855865549},"e-195":{"id":"e-195","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-196"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9ee35ab0-4587-4bd1-f75c-ce6722deabf6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9ee35ab0-4587-4bd1-f75c-ce6722deabf6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1636858383655},"e-196":{"id":"e-196","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-195"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9ee35ab0-4587-4bd1-f75c-ce6722deabf6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9ee35ab0-4587-4bd1-f75c-ce6722deabf6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1636858383655},"e-197":{"id":"e-197","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-198"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9ee35ab0-4587-4bd1-f75c-ce6722deabfa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9ee35ab0-4587-4bd1-f75c-ce6722deabfa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1636858383655},"e-198":{"id":"e-198","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-197"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9ee35ab0-4587-4bd1-f75c-ce6722deabfa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9ee35ab0-4587-4bd1-f75c-ce6722deabfa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1636858383655},"e-199":{"id":"e-199","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-200"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|f9f4ee2d-bc6b-18b7-e898-3f38708d78be","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|f9f4ee2d-bc6b-18b7-e898-3f38708d78be","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637049778976},"e-201":{"id":"e-201","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-202"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|7616ace1-f189-ea2b-e1db-6f2c82d3bc57","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|7616ace1-f189-ea2b-e1db-6f2c82d3bc57","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637049790329},"e-203":{"id":"e-203","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-204"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573660|9da995fb-6412-229b-c266-ad5a17dc5502","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573660|9da995fb-6412-229b-c266-ad5a17dc5502","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637051900880},"e-205":{"id":"e-205","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-206"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573660|7cd7b894-fe1c-69f3-7600-7f481a3db952","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573660|7cd7b894-fe1c-69f3-7600-7f481a3db952","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637051903308},"e-207":{"id":"e-207","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-208"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573660|3b1eedef-aaa4-7ec5-3206-d4e53f0639eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573660|3b1eedef-aaa4-7ec5-3206-d4e53f0639eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637051903709},"e-209":{"id":"e-209","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-210"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573660|260cade2-d833-c2bd-1bca-59db8a6b8f11","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573660|260cade2-d833-c2bd-1bca-59db8a6b8f11","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637051904084},"e-211":{"id":"e-211","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-212"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573660|f5c38c9c-2985-10be-f148-cffb834ace52","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573660|f5c38c9c-2985-10be-f148-cffb834ace52","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637052131290},"e-215":{"id":"e-215","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-216"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573660|f5c38c9c-2985-10be-f148-cffb834ace5e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573660|f5c38c9c-2985-10be-f148-cffb834ace5e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637052131290},"e-217":{"id":"e-217","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-218"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573660|f5c38c9c-2985-10be-f148-cffb834ace64","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573660|f5c38c9c-2985-10be-f148-cffb834ace64","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637052131290},"e-219":{"id":"e-219","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-220"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573660|ed9f8189-b548-eb39-d766-0bb79dfc4a6a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573660|ed9f8189-b548-eb39-d766-0bb79dfc4a6a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637052196589},"e-221":{"id":"e-221","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-222"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573660|ed9f8189-b548-eb39-d766-0bb79dfc4a70","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573660|ed9f8189-b548-eb39-d766-0bb79dfc4a70","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637052196589},"e-223":{"id":"e-223","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-224"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573660|38bb132c-6ac9-016a-29c4-b48712638e86","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573660|38bb132c-6ac9-016a-29c4-b48712638e86","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637052252293},"e-225":{"id":"e-225","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-226"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573660|38bb132c-6ac9-016a-29c4-b48712638e8c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573660|38bb132c-6ac9-016a-29c4-b48712638e8c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637052252293},"e-229":{"id":"e-229","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-230"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573660|8aa0df00-612e-b148-7fc9-b45c104a57f0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573660|8aa0df00-612e-b148-7fc9-b45c104a57f0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637052286234},"e-231":{"id":"e-231","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-232"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573660","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573660","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637085100047},"e-232":{"id":"e-232","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-231"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573660","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573660","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637085100050},"e-233":{"id":"e-233","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-234"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".c-faq-item","originalId":"6500935640c6420fe0573660|7821d247-60d0-dea4-bb46-b22983115378","appliesTo":"CLASS"},"targets":[{"selector":".c-faq-item","originalId":"6500935640c6420fe0573660|7821d247-60d0-dea4-bb46-b22983115378","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1610095150043},"e-234":{"id":"e-234","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-233"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".c-faq-item","originalId":"6500935640c6420fe0573660|7821d247-60d0-dea4-bb46-b22983115378","appliesTo":"CLASS"},"targets":[{"selector":".c-faq-item","originalId":"6500935640c6420fe0573660|7821d247-60d0-dea4-bb46-b22983115378","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1610095150043},"e-237":{"id":"e-237","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-3","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573660","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573660","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-3-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1637088946218},"e-246":{"id":"e-246","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-247"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573660|b9153deb-bcc1-cb43-8136-4fa5ad3b07dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573660|b9153deb-bcc1-cb43-8136-4fa5ad3b07dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637090024034},"e-248":{"id":"e-248","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-249"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573660|b9153deb-bcc1-cb43-8136-4fa5ad3b07e1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573660|b9153deb-bcc1-cb43-8136-4fa5ad3b07e1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637090024034},"e-252":{"id":"e-252","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-253"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".navlink","originalId":"a9937a3a-8bf5-91d0-34e6-465f5d38620d","appliesTo":"CLASS"},"targets":[{"selector":".navlink","originalId":"a9937a3a-8bf5-91d0-34e6-465f5d38620d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1637093577074},"e-256":{"id":"e-256","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-257"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573660|753e1afe-46c7-c8e2-1582-5a8bd21750b4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573660|753e1afe-46c7-c8e2-1582-5a8bd21750b4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637094259269},"e-258":{"id":"e-258","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692|9a758dec-0fea-bd24-a76c-e8f9977b16b1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692|9a758dec-0fea-bd24-a76c-e8f9977b16b1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637095209727},"e-260":{"id":"e-260","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-261"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637095297577},"e-261":{"id":"e-261","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-260"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637095297580},"e-262":{"id":"e-262","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-3","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-3-p","smoothing":70,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1637095308782},"e-272":{"id":"e-272","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-273"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692|e48b1de6-bf3e-3d26-594a-7d03946c2069","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692|e48b1de6-bf3e-3d26-594a-7d03946c2069","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637096939805},"e-274":{"id":"e-274","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-275"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692|53ce15b7-4b32-4541-1db0-5ee820f9c384","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692|53ce15b7-4b32-4541-1db0-5ee820f9c384","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637096946306},"e-276":{"id":"e-276","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-277"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692|08aa2bc5-66d8-9998-05ed-043297299528","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692|08aa2bc5-66d8-9998-05ed-043297299528","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637096954724},"e-278":{"id":"e-278","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-279"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692|941b6cbe-0dd1-e9c3-66bd-e9a45ca3e350","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692|941b6cbe-0dd1-e9c3-66bd-e9a45ca3e350","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637096968961},"e-282":{"id":"e-282","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-3","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573694","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573694","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-3-p","smoothing":70,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1637097869789},"e-283":{"id":"e-283","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-284"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573694","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573694","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637097878082},"e-284":{"id":"e-284","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-283"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573694","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573694","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637097878127},"e-285":{"id":"e-285","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-286"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|113d25a1-5e39-c538-b3c9-25530613f5f7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|113d25a1-5e39-c538-b3c9-25530613f5f7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1637098461429},"e-287":{"id":"e-287","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-288"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|76b7c5e4-f122-9602-f6e9-18a6edf8db61","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|76b7c5e4-f122-9602-f6e9-18a6edf8db61","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1637098472884},"e-289":{"id":"e-289","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-290"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|5320d612-3023-9b8f-15de-39e92e8797d5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|5320d612-3023-9b8f-15de-39e92e8797d5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1637098480520},"e-291":{"id":"e-291","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-3","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573678","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573678","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-3-p","smoothing":70,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1637098608576},"e-292":{"id":"e-292","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-293"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573678","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573678","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637098617890},"e-293":{"id":"e-293","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-292"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573678","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573678","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637098617893},"e-294":{"id":"e-294","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-46","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-295"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1637119351429},"e-295":{"id":"e-295","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-47","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-294"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1637119351429},"e-298":{"id":"e-298","name":"","animationType":"custom","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-49","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-299"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".slider_slide","originalId":"6500935640c6420fe0573662|c5bcd96a-382f-2895-25c6-0ba1997f89fe","appliesTo":"CLASS"},"targets":[{"selector":".slider_slide","originalId":"6500935640c6420fe0573662|c5bcd96a-382f-2895-25c6-0ba1997f89fe","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1616636578150},"e-302":{"id":"e-302","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-303"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573662|caa1ef9e-f6fb-d00c-2427-1f70f4c199ee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573662|caa1ef9e-f6fb-d00c-2427-1f70f4c199ee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1637185747492},"e-303":{"id":"e-303","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-302"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573662|caa1ef9e-f6fb-d00c-2427-1f70f4c199ee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573662|caa1ef9e-f6fb-d00c-2427-1f70f4c199ee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1637185747492},"e-312":{"id":"e-312","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-313"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573662","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573662","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637186876766},"e-313":{"id":"e-313","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-312"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573662","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573662","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637186876768},"e-314":{"id":"e-314","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-51","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573662","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573662","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-51-p","smoothing":70,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1637186892896},"e-317":{"id":"e-317","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-46","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-318"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6500935640c6420fe0573677|183249a2-1978-465a-cb3a-033d192ae7b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573677|183249a2-1978-465a-cb3a-033d192ae7b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1637616837887},"e-318":{"id":"e-318","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-47","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-317"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6500935640c6420fe0573677|183249a2-1978-465a-cb3a-033d192ae7b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573677|183249a2-1978-465a-cb3a-033d192ae7b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1637616837887},"e-329":{"id":"e-329","name":"","animationType":"preset","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-330"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573677","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573677","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637616837887},"e-330":{"id":"e-330","name":"","animationType":"preset","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-329"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573677","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573677","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637616837887},"e-331":{"id":"e-331","name":"","animationType":"preset","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-54","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573677","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573677","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-54-p","smoothing":70,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1637616837887},"e-334":{"id":"e-334","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-335"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c25","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c25","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1637625161963},"e-336":{"id":"e-336","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-56","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-337"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".option-radio","originalId":"6500935640c6420fe0573662|d1b94ff1-84e9-fde9-ac93-9692bc990158","appliesTo":"CLASS"},"targets":[{"selector":".option-radio","originalId":"6500935640c6420fe0573662|d1b94ff1-84e9-fde9-ac93-9692bc990158","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1637626754765},"e-337":{"id":"e-337","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-57","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-336"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".option-radio","originalId":"6500935640c6420fe0573662|d1b94ff1-84e9-fde9-ac93-9692bc990158","appliesTo":"CLASS"},"targets":[{"selector":".option-radio","originalId":"6500935640c6420fe0573662|d1b94ff1-84e9-fde9-ac93-9692bc990158","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1637626754769},"e-338":{"id":"e-338","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-339"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".footer-link","originalId":"a8fef48c-b0b3-52dd-2db2-eece9c941d29","appliesTo":"CLASS"},"targets":[{"selector":".footer-link","originalId":"a8fef48c-b0b3-52dd-2db2-eece9c941d29","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1637627353898},"e-340":{"id":"e-340","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-341"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692|e2103c56-0476-6d26-6281-becc8e3da695","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692|e2103c56-0476-6d26-6281-becc8e3da695","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637693038112},"e-342":{"id":"e-342","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-343"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692|bf618f8a-e2a4-f227-8056-da76e5d1c587","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692|bf618f8a-e2a4-f227-8056-da76e5d1c587","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637897550290},"e-346":{"id":"e-346","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-347"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|2a0aeb66-e01a-5fe9-3692-e7f3b5af1c80","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|2a0aeb66-e01a-5fe9-3692-e7f3b5af1c80","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637956895474},"e-348":{"id":"e-348","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-349"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692|8335644f-f39d-a9c8-a3fc-ff1f5b2191dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692|8335644f-f39d-a9c8-a3fc-ff1f5b2191dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637990739073},"e-350":{"id":"e-350","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-351"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692|8335644f-f39d-a9c8-a3fc-ff1f5b2191e1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692|8335644f-f39d-a9c8-a3fc-ff1f5b2191e1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1637990739073},"e-356":{"id":"e-356","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-58","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573660|7dc74a0c-a27b-2690-b0a8-553166a31fa3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573660|7dc74a0c-a27b-2690-b0a8-553166a31fa3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-58-p","smoothing":98,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1637993320166},"e-359":{"id":"e-359","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-360"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573678|a3a78f30-96f8-c835-b693-9cf3670e72d8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573678|a3a78f30-96f8-c835-b693-9cf3670e72d8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1638224926950},"e-361":{"id":"e-361","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-362"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe057365f|a6d62658-74b4-0cb7-3da4-bff6c2366cca","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe057365f|a6d62658-74b4-0cb7-3da4-bff6c2366cca","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1638228284201},"e-363":{"id":"e-363","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-364"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe057365f|8621bd14-ccd4-5a7b-be8b-11193008ff76","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe057365f|8621bd14-ccd4-5a7b-be8b-11193008ff76","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1638229115343},"e-365":{"id":"e-365","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-366"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573621|8728b64b-427a-7fe7-f373-95445bf62fcf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573621|8728b64b-427a-7fe7-f373-95445bf62fcf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1638464653925},"e-367":{"id":"e-367","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-368"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692|e6a9209d-12d1-bac2-c6db-8bc784c8f0d6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692|e6a9209d-12d1-bac2-c6db-8bc784c8f0d6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1638464679576},"e-375":{"id":"e-375","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-60","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-376"}},"mediaQueries":["main","medium"],"target":{"id":"6500935640c6420fe0573694|d57278d1-a416-2cf2-ebfa-d030590df4a8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573694|d57278d1-a416-2cf2-ebfa-d030590df4a8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":2,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1639530237027},"e-377":{"id":"e-377","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-378"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573694|d57278d1-a416-2cf2-ebfa-d030590df4a8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573694|d57278d1-a416-2cf2-ebfa-d030590df4a8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1639530237027},"e-378":{"id":"e-378","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-377"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573694|d57278d1-a416-2cf2-ebfa-d030590df4a8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573694|d57278d1-a416-2cf2-ebfa-d030590df4a8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1639530237027},"e-379":{"id":"e-379","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-380"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573694|d57278d1-a416-2cf2-ebfa-d030590df4b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573694|d57278d1-a416-2cf2-ebfa-d030590df4b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1639530237027},"e-381":{"id":"e-381","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-382"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573694|d57278d1-a416-2cf2-ebfa-d030590df4b8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573694|d57278d1-a416-2cf2-ebfa-d030590df4b8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1639530237027},"e-383":{"id":"e-383","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-384"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f8ed719a-b6f6-af82-3e69-a9e49bfc607a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f8ed719a-b6f6-af82-3e69-a9e49bfc607a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1639533034771},"e-385":{"id":"e-385","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-386"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692|77cddacf-9f9f-4a32-ec94-c000de0552fa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692|77cddacf-9f9f-4a32-ec94-c000de0552fa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1640030565671},"e-387":{"id":"e-387","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-388"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692|f3989052-1998-2ade-0a70-6167068cbf99","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692|f3989052-1998-2ade-0a70-6167068cbf99","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1640030577996},"e-389":{"id":"e-389","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-390"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6500935640c6420fe0573679|c8cde74c-f6ca-d00c-4f66-76e74e1bf004","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573679|c8cde74c-f6ca-d00c-4f66-76e74e1bf004","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1640923563261},"e-390":{"id":"e-390","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-389"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6500935640c6420fe0573679|c8cde74c-f6ca-d00c-4f66-76e74e1bf004","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573679|c8cde74c-f6ca-d00c-4f66-76e74e1bf004","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1640923563261},"e-395":{"id":"e-395","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-64","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-396"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".blog-card","originalId":"6500935640c6420fe0573661|fd582293-8fea-c900-dfac-460e0ad73cae","appliesTo":"CLASS"},"targets":[{"selector":".blog-card","originalId":"6500935640c6420fe0573661|fd582293-8fea-c900-dfac-460e0ad73cae","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1640925400802},"e-396":{"id":"e-396","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-65","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-395"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".blog-card","originalId":"6500935640c6420fe0573661|fd582293-8fea-c900-dfac-460e0ad73cae","appliesTo":"CLASS"},"targets":[{"selector":".blog-card","originalId":"6500935640c6420fe0573661|fd582293-8fea-c900-dfac-460e0ad73cae","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1640925400804},"e-397":{"id":"e-397","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-66","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-398"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"82584ec3-116d-6de9-6cac-24a209a5357e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"82584ec3-116d-6de9-6cac-24a209a5357e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1640977945325},"e-399":{"id":"e-399","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-400"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573679|d8889aac-a3ec-820e-8e9e-977d7beaaa8a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573679|d8889aac-a3ec-820e-8e9e-977d7beaaa8a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1640992123232},"e-400":{"id":"e-400","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-68","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-399"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573679|d8889aac-a3ec-820e-8e9e-977d7beaaa8a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573679|d8889aac-a3ec-820e-8e9e-977d7beaaa8a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1640992123236},"e-401":{"id":"e-401","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-402"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573679|d8889aac-a3ec-820e-8e9e-977d7beaaa8a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573679|d8889aac-a3ec-820e-8e9e-977d7beaaa8a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1640992608632},"e-402":{"id":"e-402","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-401"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573679|d8889aac-a3ec-820e-8e9e-977d7beaaa8a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573679|d8889aac-a3ec-820e-8e9e-977d7beaaa8a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1640992608639},"e-403":{"id":"e-403","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-71","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-404"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573679|e7406043-07f7-7e5d-bd7d-fb28cc79318b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573679|e7406043-07f7-7e5d-bd7d-fb28cc79318b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1640993489264},"e-404":{"id":"e-404","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-72","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-403"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573679|e7406043-07f7-7e5d-bd7d-fb28cc79318b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573679|e7406043-07f7-7e5d-bd7d-fb28cc79318b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1640993489269},"e-405":{"id":"e-405","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-73","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-406"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573679|a1b79ce7-0325-9bb5-565d-a768f23bb1ba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573679|a1b79ce7-0325-9bb5-565d-a768f23bb1ba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1640993836013},"e-406":{"id":"e-406","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-74","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-405"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573679|a1b79ce7-0325-9bb5-565d-a768f23bb1ba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573679|a1b79ce7-0325-9bb5-565d-a768f23bb1ba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1640993836019},"e-407":{"id":"e-407","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-75","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-408"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573679|9959fa8e-6d8e-02ad-5793-b1302ee363e0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573679|9959fa8e-6d8e-02ad-5793-b1302ee363e0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1640994054494},"e-408":{"id":"e-408","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-76","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-407"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573679|9959fa8e-6d8e-02ad-5793-b1302ee363e0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573679|9959fa8e-6d8e-02ad-5793-b1302ee363e0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1640994054502},"e-409":{"id":"e-409","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-77","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-410"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573679|ca99ed9e-257c-e930-880a-765f9a5af401","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573679|ca99ed9e-257c-e930-880a-765f9a5af401","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1640994299834},"e-410":{"id":"e-410","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-78","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-409"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573679|ca99ed9e-257c-e930-880a-765f9a5af401","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573679|ca99ed9e-257c-e930-880a-765f9a5af401","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1640994299839},"e-411":{"id":"e-411","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-79","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-412"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573679|ca99ed9e-257c-e930-880a-765f9a5af3fc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573679|ca99ed9e-257c-e930-880a-765f9a5af3fc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1640994603233},"e-412":{"id":"e-412","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-80","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-411"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573679|ca99ed9e-257c-e930-880a-765f9a5af3fc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573679|ca99ed9e-257c-e930-880a-765f9a5af3fc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1640994603236},"e-413":{"id":"e-413","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-81","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-414"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".search-btn-wrapper","originalId":"82584ec3-116d-6de9-6cac-24a209a53577","appliesTo":"CLASS"},"targets":[{"selector":".search-btn-wrapper","originalId":"82584ec3-116d-6de9-6cac-24a209a53577","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1641154975885},"e-417":{"id":"e-417","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-84","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573679|5d0b64df-3765-d72c-750a-080b35277e0d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573679|5d0b64df-3765-d72c-750a-080b35277e0d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-84-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1641490136815},"e-418":{"id":"e-418","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-85","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-419"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573661","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573661","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694200975623},"e-420":{"id":"e-420","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-421"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573661","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573661","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1694272499708},"e-421":{"id":"e-421","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-420"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573661","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573661","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1694272499710},"e-422":{"id":"e-422","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-423"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573679","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573679","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1694274050012},"e-423":{"id":"e-423","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-422"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573679","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573679","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1694274050014},"e-424":{"id":"e-424","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-86","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-425"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573679","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573679","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694274130868},"e-426":{"id":"e-426","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-87","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692|33579cff-ff49-1d7b-1b0d-9e62becaaa3b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692|33579cff-ff49-1d7b-1b0d-9e62becaaa3b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-87-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":50,"restingState":50},{"continuousParameterGroupId":"a-87-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":50,"restingState":50}],"createdOn":1694283765485},"e-427":{"id":"e-427","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-98"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".container-2","originalId":"0b50ccba-9fa0-6613-b701-30aa0fa18d3f","appliesTo":"CLASS"},"targets":[{"selector":".container-2","originalId":"633603a3fd598e1853e95916|3f9ed62a-e65e-5337-b84e-6ab900321e0f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1605825737317},"e-429":{"id":"e-429","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-88","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-88-p","smoothing":53,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1694534030903},"e-430":{"id":"e-430","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-431"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692|da2bf55a-6526-a334-e15f-fc256861e252","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692|da2bf55a-6526-a334-e15f-fc256861e252","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1694534455073},"e-432":{"id":"e-432","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-433"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692|f59a56c8-f2b0-3515-0791-335e2d31927e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692|f59a56c8-f2b0-3515-0791-335e2d31927e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":420,"direction":"BOTTOM","effectIn":true},"createdOn":1694534473541},"e-434":{"id":"e-434","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-89","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573692","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"6500935640c6420fe0573692","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-89-p","smoothing":61,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1694535432738},"e-437":{"id":"e-437","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-438"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573660|bfd28bc2-90d2-b8cc-236b-23aa9bbab0a3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1694988641289},"e-439":{"id":"e-439","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-440"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6500935640c6420fe0573660|c8799e4c-4ef4-d003-55bc-17471e9fcb02","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1694988641990}},"actionLists":{"a-2":{"id":"a-2","title":"Nav Show","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c17"},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-2-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":300,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c17"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1636309049891},"a":{"id":"a","title":"Nav Hide","actionItemGroups":[{"actionItems":[{"id":"a-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c17"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":300,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c17"},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1636309049891},"a-4":{"id":"a-4","title":"Mobile Nav - Open","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".m-nav-parent","selectorGuids":["dc221be8-6eab-ddeb-4c6e-d02541e5a78b"]},"value":"none"}},{"id":"a-4-n-39","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"1e8bdcbe-5ec2-9a6f-3a9d-e2299a72bb9a"},"yValue":150,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-4-n-37","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"1e8bdcbe-5ec2-9a6f-3a9d-e2299a72bb9a"},"value":0,"unit":""}},{"id":"a-4-n-35","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-top","selectorGuids":["da4e7d3a-471c-5fbe-8450-ab0557458746"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-4-n-33","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-btm","selectorGuids":["3f147cac-44c5-01d3-ff98-02ebdf0a87f1"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-4-n-30","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-btm","selectorGuids":["3f147cac-44c5-01d3-ff98-02ebdf0a87f1"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-4-n-29","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-top","selectorGuids":["da4e7d3a-471c-5fbe-8450-ab0557458746"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-4-n-27","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-top","selectorGuids":["da4e7d3a-471c-5fbe-8450-ab0557458746"]},"widthValue":80,"heightValue":2,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-4-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c37"},"value":0,"unit":""}},{"id":"a-4-n-21","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c34"},"value":0,"unit":""}},{"id":"a-4-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c31"},"value":0,"unit":""}},{"id":"a-4-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c2e"},"value":0,"unit":""}},{"id":"a-4-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".btn.m-nav","selectorGuids":["a611e48e-2f61-9229-b074-a291bbd944a0","4b679f52-f8c1-9b5d-94dc-96a0575fb108"]},"value":0,"unit":""}},{"id":"a-4-n-11","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".m-nav-bg.bg-orange-gradient","selectorGuids":["06bcff10-3f6d-303b-862e-c9206274e2d1","08dec08e-5864-06bf-bfd5-cc3d098172d3"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"%","locked":false}},{"id":"a-4-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c2e"},"yValue":150,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-4-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c31"},"yValue":150,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-4-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c34"},"yValue":150,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-4-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c37"},"yValue":150,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-4-n-16","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".m-nav-bg-behind.bg-black","selectorGuids":["d17e2e69-a1cb-8c72-6df9-203f7ca5eb14","357296f6-eb40-9678-2542-6be7868ce35a"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"%","locked":false}}]},{"actionItems":[{"id":"a-4-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".m-nav-parent","selectorGuids":["dc221be8-6eab-ddeb-4c6e-d02541e5a78b"]},"value":"flex"}}]},{"actionItems":[{"id":"a-4-n-15","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":1000,"target":{"selector":".m-nav-bg-behind.bg-black","selectorGuids":["d17e2e69-a1cb-8c72-6df9-203f7ca5eb14","357296f6-eb40-9678-2542-6be7868ce35a"]},"widthValue":100,"heightValue":100,"widthUnit":"%","heightUnit":"%","locked":false}},{"id":"a-4-n-28","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-top","selectorGuids":["da4e7d3a-471c-5fbe-8450-ab0557458746"]},"widthValue":100,"heightValue":2,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-4-n-12","actionTypeId":"STYLE_SIZE","config":{"delay":100,"easing":"inOutQuart","duration":1000,"target":{"selector":".m-nav-bg.bg-orange-gradient","selectorGuids":["06bcff10-3f6d-303b-862e-c9206274e2d1","08dec08e-5864-06bf-bfd5-cc3d098172d3"]},"widthValue":100,"heightValue":100,"widthUnit":"%","heightUnit":"%","locked":false}},{"id":"a-4-n-36","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-top","selectorGuids":["da4e7d3a-471c-5fbe-8450-ab0557458746"]},"yValue":6,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-4-n-32","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":100,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-btm","selectorGuids":["3f147cac-44c5-01d3-ff98-02ebdf0a87f1"]},"zValue":40,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-4-n-31","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":100,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-top","selectorGuids":["da4e7d3a-471c-5fbe-8450-ab0557458746"]},"zValue":-40,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-4-n-34","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-btm","selectorGuids":["3f147cac-44c5-01d3-ff98-02ebdf0a87f1"]},"yValue":-6,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-4-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":600,"easing":"inOutQuart","duration":1000,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c2e"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-4-n-23","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"ease","duration":800,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c2e"},"value":1,"unit":""}},{"id":"a-4-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":800,"easing":"inOutQuart","duration":1000,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c31"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-4-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":800,"easing":"ease","duration":800,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c31"},"value":1,"unit":""}},{"id":"a-4-n-25","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":"ease","duration":800,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c34"},"value":1,"unit":""}},{"id":"a-4-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":"inOutQuart","duration":1000,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c34"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-4-n-38","actionTypeId":"STYLE_OPACITY","config":{"delay":1200,"easing":"ease","duration":800,"target":{"id":"1e8bdcbe-5ec2-9a6f-3a9d-e2299a72bb9a"},"value":1,"unit":""}},{"id":"a-4-n-40","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1200,"easing":"inOutQuart","duration":1000,"target":{"id":"1e8bdcbe-5ec2-9a6f-3a9d-e2299a72bb9a"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-4-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1400,"easing":"inOutQuart","duration":1000,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c37"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-4-n-26","actionTypeId":"STYLE_OPACITY","config":{"delay":1400,"easing":"ease","duration":1000,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c37"},"value":1,"unit":""}},{"id":"a-4-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":1600,"easing":"ease","duration":1000,"target":{"selector":".btn.m-nav","selectorGuids":["a611e48e-2f61-9229-b074-a291bbd944a0","4b679f52-f8c1-9b5d-94dc-96a0575fb108"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1636309751817},"a-22":{"id":"a-22","title":"Mobile Nav - Close","actionItemGroups":[{"actionItems":[{"id":"a-22-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".btn.m-nav","selectorGuids":["a611e48e-2f61-9229-b074-a291bbd944a0","4b679f52-f8c1-9b5d-94dc-96a0575fb108"]},"value":0,"unit":""}},{"id":"a-22-n-17","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":200,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-btm","selectorGuids":["3f147cac-44c5-01d3-ff98-02ebdf0a87f1"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-22-n-18","actionTypeId":"STYLE_SIZE","config":{"delay":200,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-top","selectorGuids":["da4e7d3a-471c-5fbe-8450-ab0557458746"]},"widthValue":80,"heightValue":2,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-22-n-16","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":200,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-top","selectorGuids":["da4e7d3a-471c-5fbe-8450-ab0557458746"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-22-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-top","selectorGuids":["da4e7d3a-471c-5fbe-8450-ab0557458746"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-22-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-btm","selectorGuids":["3f147cac-44c5-01d3-ff98-02ebdf0a87f1"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-22-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"inOutQuart","duration":600,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c37"},"yValue":150,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":500,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c37"},"value":0,"unit":""}},{"id":"a-22-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"ease","duration":500,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c34"},"value":0,"unit":""}},{"id":"a-22-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":600,"easing":"inOutQuart","duration":600,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c34"},"yValue":150,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-22-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":800,"easing":"ease","duration":500,"target":{"id":"1e8bdcbe-5ec2-9a6f-3a9d-e2299a72bb9a"},"value":0,"unit":""}},{"id":"a-22-n-20","actionTypeId":"TRANSFORM_MOVE","config":{"delay":800,"easing":"inOutQuart","duration":600,"target":{"id":"1e8bdcbe-5ec2-9a6f-3a9d-e2299a72bb9a"},"yValue":150,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-22-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":"inOutQuart","duration":600,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c31"},"yValue":150,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-22-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":"ease","duration":500,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c31"},"value":0,"unit":""}},{"id":"a-22-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":1200,"easing":"ease","duration":500,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c2e"},"value":0,"unit":""}},{"id":"a-22-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1200,"easing":"inOutQuart","duration":600,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c2e"},"yValue":150,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-22-n-8","actionTypeId":"STYLE_SIZE","config":{"delay":1400,"easing":"inOutQuart","duration":1000,"target":{"selector":".m-nav-bg.bg-orange-gradient","selectorGuids":["06bcff10-3f6d-303b-862e-c9206274e2d1","08dec08e-5864-06bf-bfd5-cc3d098172d3"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"%","locked":false}},{"id":"a-22-n-13","actionTypeId":"STYLE_SIZE","config":{"delay":1500,"easing":"inOutQuart","duration":1000,"target":{"selector":".m-nav-bg-behind.bg-black","selectorGuids":["d17e2e69-a1cb-8c72-6df9-203f7ca5eb14","357296f6-eb40-9678-2542-6be7868ce35a"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"%","locked":false}}]},{"actionItems":[{"id":"a-22-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".m-nav-parent","selectorGuids":["dc221be8-6eab-ddeb-4c6e-d02541e5a78b"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1636309751817},"a-5":{"id":"a-5","title":"Heading In - Normal","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":600,"target":{"useEventTarget":true,"id":"6500935640c6420fe0573621|e8dad3b4-9056-4e07-6074-67b7c35aceba"},"yValue":110,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-5-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuart","duration":600,"target":{"useEventTarget":true,"id":"6500935640c6420fe0573621|e8dad3b4-9056-4e07-6074-67b7c35aceba"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1636310680255},"a-6":{"id":"a-6","title":"Heading In - Delay 0.1","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":600,"target":{"useEventTarget":true,"id":"6500935640c6420fe0573621|e8dad3b4-9056-4e07-6074-67b7c35aceba"},"yValue":110,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-6-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"inOutQuart","duration":600,"target":{"useEventTarget":true,"id":"6500935640c6420fe0573621|e8dad3b4-9056-4e07-6074-67b7c35aceba"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1636310680255},"a-8":{"id":"a-8","title":"Heading In - Delay 0.2","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":600,"target":{"useEventTarget":true,"id":"6500935640c6420fe0573621|e8dad3b4-9056-4e07-6074-67b7c35aceba"},"yValue":110,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-8-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutQuart","duration":600,"target":{"useEventTarget":true,"id":"6500935640c6420fe0573621|e8dad3b4-9056-4e07-6074-67b7c35aceba"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1636310680255},"a-9":{"id":"a-9","title":"Fade In","actionItemGroups":[{"actionItems":[{"id":"a-9-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6500935640c6420fe0573621|35e086e9-13b8-8e04-8faf-46f9adc61dd3"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-9-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":1000,"target":{"useEventTarget":true,"id":"6500935640c6420fe0573621|35e086e9-13b8-8e04-8faf-46f9adc61dd3"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1636311322694},"a-10":{"id":"a-10","title":"Home Services - Image Move","continuousParameterGroups":[{"id":"a-10-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":5,"actionItems":[{"id":"a-10-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-parent.h-services._5","selectorGuids":["fb096df1-0548-602d-7ee2-d4b46fdb9c67","d158322f-b0c8-75b4-fd0a-5d8f156b7085","13a46a85-eeb4-f01e-b8ce-adaedf3cb4fc"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-10-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-parent.h-services._4","selectorGuids":["fb096df1-0548-602d-7ee2-d4b46fdb9c67","d158322f-b0c8-75b4-fd0a-5d8f156b7085","cb4809ad-ad22-9b39-3076-756cf6bf6cc1"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-10-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-parent.h-services._3","selectorGuids":["fb096df1-0548-602d-7ee2-d4b46fdb9c67","d158322f-b0c8-75b4-fd0a-5d8f156b7085","dcad715a-4b68-616e-98c9-e06dfbb8431b"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-10-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-parent.h-services._2","selectorGuids":["fb096df1-0548-602d-7ee2-d4b46fdb9c67","d158322f-b0c8-75b4-fd0a-5d8f156b7085","f0ba5f41-9a1b-a434-23a2-b16aff78cce2"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-10-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-parent.h-services._1","selectorGuids":["fb096df1-0548-602d-7ee2-d4b46fdb9c67","d158322f-b0c8-75b4-fd0a-5d8f156b7085","e3cb5cc9-b9b0-4eb6-eefe-ad78c8c86df8"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"keyframe":80,"actionItems":[{"id":"a-10-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutSine","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-parent.h-services._5","selectorGuids":["fb096df1-0548-602d-7ee2-d4b46fdb9c67","d158322f-b0c8-75b4-fd0a-5d8f156b7085","13a46a85-eeb4-f01e-b8ce-adaedf3cb4fc"]},"yValue":15,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-10-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutSine","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-parent.h-services._4","selectorGuids":["fb096df1-0548-602d-7ee2-d4b46fdb9c67","d158322f-b0c8-75b4-fd0a-5d8f156b7085","cb4809ad-ad22-9b39-3076-756cf6bf6cc1"]},"yValue":-25,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-10-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutSine","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-parent.h-services._3","selectorGuids":["fb096df1-0548-602d-7ee2-d4b46fdb9c67","d158322f-b0c8-75b4-fd0a-5d8f156b7085","dcad715a-4b68-616e-98c9-e06dfbb8431b"]},"yValue":25,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-10-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutSine","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-parent.h-services._2","selectorGuids":["fb096df1-0548-602d-7ee2-d4b46fdb9c67","d158322f-b0c8-75b4-fd0a-5d8f156b7085","f0ba5f41-9a1b-a434-23a2-b16aff78cce2"]},"yValue":-45,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-10-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutSine","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".img-parent.h-services._1","selectorGuids":["fb096df1-0548-602d-7ee2-d4b46fdb9c67","d158322f-b0c8-75b4-fd0a-5d8f156b7085","e3cb5cc9-b9b0-4eb6-eefe-ad78c8c86df8"]},"yValue":-15,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}]}],"createdOn":1636311619668},"a-11":{"id":"a-11","title":"Hero - Mouse Move","continuousParameterGroups":[{"id":"a-11-p","type":"MOUSE_X","parameterLabel":"Mouse X","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-11-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-circle-1","selectorGuids":["fd43acb4-cebf-57ec-4e36-80cc9ae66506"]},"xValue":0,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-11-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-circle-2","selectorGuids":["d4641408-41ca-befe-11bd-df170d756c24"]},"xValue":0,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-11-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-circle-1","selectorGuids":["fd43acb4-cebf-57ec-4e36-80cc9ae66506"]},"xValue":80,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-11-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-circle-2","selectorGuids":["d4641408-41ca-befe-11bd-df170d756c24"]},"xValue":-80,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]},{"id":"a-11-p-2","type":"MOUSE_Y","parameterLabel":"Mouse Y","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-11-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-circle-1","selectorGuids":["fd43acb4-cebf-57ec-4e36-80cc9ae66506"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-11-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-circle-2","selectorGuids":["d4641408-41ca-befe-11bd-df170d756c24"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"keyframe":50,"actionItems":[{"id":"a-11-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-circle-1","selectorGuids":["fd43acb4-cebf-57ec-4e36-80cc9ae66506"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-11-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-circle-2","selectorGuids":["d4641408-41ca-befe-11bd-df170d756c24"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-11-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-circle-1","selectorGuids":["fd43acb4-cebf-57ec-4e36-80cc9ae66506"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-11-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-circle-2","selectorGuids":["d4641408-41ca-befe-11bd-df170d756c24"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}]}],"createdOn":1636312346934},"a-15":{"id":"a-15","title":"Floating - Aluce Circle","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutSine","duration":2000,"target":{"useEventTarget":true,"id":"6500935640c6420fe0573621|8da66dce-954f-f484-bac2-97ca4b46e20b"},"xValue":null,"yValue":-10,"xUnit":"%","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-15-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutSine","duration":2000,"target":{"useEventTarget":true,"id":"6500935640c6420fe0573621|8da66dce-954f-f484-bac2-97ca4b46e20b"},"yValue":10,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1636314659479},"a-13":{"id":"a-13","title":"Floating","actionItemGroups":[{"actionItems":[{"id":"a-13-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutSine","duration":2000,"target":{"useEventTarget":true,"id":"6500935640c6420fe0573621|8da66dce-954f-f484-bac2-97ca4b46e20b"},"xValue":null,"yValue":-5,"xUnit":"%","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-13-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutSine","duration":2000,"target":{"useEventTarget":true,"id":"6500935640c6420fe0573621|8da66dce-954f-f484-bac2-97ca4b46e20b"},"yValue":5,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1636314659479},"a-14":{"id":"a-14","title":"Floating - Delay","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutSine","duration":2000,"target":{"useEventTarget":true,"id":"6500935640c6420fe0573621|8da66dce-954f-f484-bac2-97ca4b46e20b"},"xValue":null,"yValue":5,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-14-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"inOutSine","duration":2000,"target":{"useEventTarget":true,"id":"6500935640c6420fe0573621|8da66dce-954f-f484-bac2-97ca4b46e20b"},"yValue":-5,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1636314659479},"a-17":{"id":"a-17","title":"Project Intro - Featured - Mobile","actionItemGroups":[{"actionItems":[{"id":"a-17-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".project-card-bg","selectorGuids":["f0f72eb2-84e7-6597-9539-858b1d2dddab"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"%","locked":false}},{"id":"a-17-n-28","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".project-img-1.thats-clutch-app","selectorGuids":["aa762aeb-0fb5-4d13-d025-c4dee457a13c","3da1ed42-de6e-cda0-867f-eb409770f1d8"]},"zValue":17.6,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-17-n-27","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".m-project-site-img","selectorGuids":["24a212e6-9274-3495-ffa5-d170078b2274"]},"zValue":-5.5,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-17-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".project-img-1.thats-clutch-app","selectorGuids":["aa762aeb-0fb5-4d13-d025-c4dee457a13c","3da1ed42-de6e-cda0-867f-eb409770f1d8"]},"yValue":10,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-17-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".m-project-site-img","selectorGuids":["24a212e6-9274-3495-ffa5-d170078b2274"]},"yValue":10,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-17-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".project-img-1.thats-clutch-app","selectorGuids":["aa762aeb-0fb5-4d13-d025-c4dee457a13c","3da1ed42-de6e-cda0-867f-eb409770f1d8"]},"value":0,"unit":""}},{"id":"a-17-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".poster-img._1","selectorGuids":["885a4ded-744d-f62f-7ab7-d3d230d5d796","810f3f2d-75a9-b899-713c-3f0118eff270"]},"value":0,"unit":""}},{"id":"a-17-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".m-project-site-img","selectorGuids":["24a212e6-9274-3495-ffa5-d170078b2274"]},"value":0,"unit":""}},{"id":"a-17-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".project-sticker","selectorGuids":["1272bacf-5f90-48c8-33a0-b873ecacce12"]},"value":0,"unit":""}},{"id":"a-17-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".project-sticker","selectorGuids":["1272bacf-5f90-48c8-33a0-b873ecacce12"]},"yValue":10,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-17-n-14","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":1000,"target":{"selector":".project-card-bg","selectorGuids":["f0f72eb2-84e7-6597-9539-858b1d2dddab"]},"widthValue":100,"heightValue":100,"widthUnit":"%","heightUnit":"%","locked":false}},{"id":"a-17-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":800,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".m-project-site-img","selectorGuids":["24a212e6-9274-3495-ffa5-d170078b2274"]},"value":1,"unit":""}},{"id":"a-17-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":800,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".m-project-site-img","selectorGuids":["24a212e6-9274-3495-ffa5-d170078b2274"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-17-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".project-img-1.thats-clutch-app","selectorGuids":["aa762aeb-0fb5-4d13-d025-c4dee457a13c","3da1ed42-de6e-cda0-867f-eb409770f1d8"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-17-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".project-img-1.thats-clutch-app","selectorGuids":["aa762aeb-0fb5-4d13-d025-c4dee457a13c","3da1ed42-de6e-cda0-867f-eb409770f1d8"]},"value":1,"unit":""}},{"id":"a-17-n-25","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".project-sticker","selectorGuids":["1272bacf-5f90-48c8-33a0-b873ecacce12"]},"value":1,"unit":""}},{"id":"a-17-n-26","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".project-sticker","selectorGuids":["1272bacf-5f90-48c8-33a0-b873ecacce12"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1636316156861},"a-16":{"id":"a-16","title":"Project Intro - Featured - Desktop","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".project-card-bg.bg-thats-clutch","selectorGuids":["f0f72eb2-84e7-6597-9539-858b1d2dddab","c9b671d7-ee4a-2ede-9b86-91a03b1ef013"]},"widthValue":0,"heightValue":100,"widthUnit":"%","heightUnit":"%","locked":false}},{"id":"a-16-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".project-img-1.thats-clutch-app","selectorGuids":["aa762aeb-0fb5-4d13-d025-c4dee457a13c","3da1ed42-de6e-cda0-867f-eb409770f1d8"]},"yValue":10,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-16-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".project-site-img","selectorGuids":["33133a3f-d94d-8ca2-7678-53ae65a1f0fc"]},"yValue":10,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-16-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".project-img-1.thats-clutch-app","selectorGuids":["aa762aeb-0fb5-4d13-d025-c4dee457a13c","3da1ed42-de6e-cda0-867f-eb409770f1d8"]},"value":0,"unit":""}},{"id":"a-16-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".poster-img._1","selectorGuids":["885a4ded-744d-f62f-7ab7-d3d230d5d796","810f3f2d-75a9-b899-713c-3f0118eff270"]},"value":0,"unit":""}},{"id":"a-16-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".project-site-img","selectorGuids":["33133a3f-d94d-8ca2-7678-53ae65a1f0fc"]},"value":0,"unit":""}},{"id":"a-16-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".poster-img._2","selectorGuids":["885a4ded-744d-f62f-7ab7-d3d230d5d796","5a10af76-5438-ed19-c029-22c959fa2131"]},"value":0,"unit":""}},{"id":"a-16-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".poster-img._3","selectorGuids":["885a4ded-744d-f62f-7ab7-d3d230d5d796","8d67618c-4da2-a47c-cf65-fb648a7e2c40"]},"value":0,"unit":""}},{"id":"a-16-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".project-sticker","selectorGuids":["1272bacf-5f90-48c8-33a0-b873ecacce12"]},"value":0,"unit":""}},{"id":"a-16-n-23","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".poster-img._3","selectorGuids":["885a4ded-744d-f62f-7ab7-d3d230d5d796","8d67618c-4da2-a47c-cf65-fb648a7e2c40"]},"yValue":10,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-16-n-24","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".poster-img._2","selectorGuids":["885a4ded-744d-f62f-7ab7-d3d230d5d796","5a10af76-5438-ed19-c029-22c959fa2131"]},"yValue":10,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-16-n-25","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".poster-img._1","selectorGuids":["885a4ded-744d-f62f-7ab7-d3d230d5d796","810f3f2d-75a9-b899-713c-3f0118eff270"]},"yValue":10,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-16-n-26","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".project-sticker","selectorGuids":["1272bacf-5f90-48c8-33a0-b873ecacce12"]},"yValue":10,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-16-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".project-card-bg.bg-thats-clutch","selectorGuids":["f0f72eb2-84e7-6597-9539-858b1d2dddab","c9b671d7-ee4a-2ede-9b86-91a03b1ef013"]},"widthValue":100,"heightValue":100,"widthUnit":"%","heightUnit":"%","locked":false}},{"id":"a-16-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":800,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".project-site-img","selectorGuids":["33133a3f-d94d-8ca2-7678-53ae65a1f0fc"]},"value":1,"unit":""}},{"id":"a-16-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":800,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".project-site-img","selectorGuids":["33133a3f-d94d-8ca2-7678-53ae65a1f0fc"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-16-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".project-img-1.thats-clutch-app","selectorGuids":["aa762aeb-0fb5-4d13-d025-c4dee457a13c","3da1ed42-de6e-cda0-867f-eb409770f1d8"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-16-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".project-img-1.thats-clutch-app","selectorGuids":["aa762aeb-0fb5-4d13-d025-c4dee457a13c","3da1ed42-de6e-cda0-867f-eb409770f1d8"]},"value":1,"unit":""}},{"id":"a-16-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".poster-img._3","selectorGuids":["885a4ded-744d-f62f-7ab7-d3d230d5d796","8d67618c-4da2-a47c-cf65-fb648a7e2c40"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-16-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".poster-img._3","selectorGuids":["885a4ded-744d-f62f-7ab7-d3d230d5d796","8d67618c-4da2-a47c-cf65-fb648a7e2c40"]},"value":1,"unit":""}},{"id":"a-16-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".poster-img._2","selectorGuids":["885a4ded-744d-f62f-7ab7-d3d230d5d796","5a10af76-5438-ed19-c029-22c959fa2131"]},"value":1,"unit":""}},{"id":"a-16-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".poster-img._2","selectorGuids":["885a4ded-744d-f62f-7ab7-d3d230d5d796","5a10af76-5438-ed19-c029-22c959fa2131"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-16-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".poster-img._1","selectorGuids":["885a4ded-744d-f62f-7ab7-d3d230d5d796","810f3f2d-75a9-b899-713c-3f0118eff270"]},"value":1,"unit":""}},{"id":"a-16-n-19","actionTypeId":"TRANSFORM_MOVE","config":{"delay":600,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".poster-img._1","selectorGuids":["885a4ded-744d-f62f-7ab7-d3d230d5d796","810f3f2d-75a9-b899-713c-3f0118eff270"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-16-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":800,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".project-sticker","selectorGuids":["1272bacf-5f90-48c8-33a0-b873ecacce12"]},"value":1,"unit":""}},{"id":"a-16-n-21","actionTypeId":"TRANSFORM_MOVE","config":{"delay":800,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".project-sticker","selectorGuids":["1272bacf-5f90-48c8-33a0-b873ecacce12"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1636316156861},"a-23":{"id":"a-23","title":"CTA - Scroll Animation","continuousParameterGroups":[{"id":"a-23-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-23-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".cta-circle-2","selectorGuids":["5b213356-6208-2ba4-fb09-9d8a62dcd514"]},"yValue":-20,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-23-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".cta-circle-1","selectorGuids":["6205cfcd-abd8-3955-c03f-4512596f1ecc"]},"yValue":10,"xUnit":"PX","yUnit":"vw","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-23-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".cta-circle-2","selectorGuids":["5b213356-6208-2ba4-fb09-9d8a62dcd514"]},"yValue":20,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-23-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".cta-circle-1","selectorGuids":["6205cfcd-abd8-3955-c03f-4512596f1ecc"]},"yValue":-12,"xUnit":"PX","yUnit":"vw","zUnit":"PX"}}]}]}],"createdOn":1636385422182},"a-27":{"id":"a-27","title":"Hero - Scrolling Parallax","continuousParameterGroups":[{"id":"a-27-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-27-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-heading-move._1","selectorGuids":["5dee89ba-e6ce-a2d7-c618-df56ab623915","2d492dc7-ec3a-1969-dd9d-eede35f05652"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-27-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-heading-line-wrapper","selectorGuids":["6d9daaa9-e596-5e65-8496-8dd1667bcf4c"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-27-n-19","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-heading-move._2","selectorGuids":["5dee89ba-e6ce-a2d7-c618-df56ab623915","cad21480-808d-f4da-03f6-6f1adb781322"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-27-n-21","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".label-1","selectorGuids":["9416bdef-9a2d-f6d1-9bea-008c5a1ce48a"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-27-n-23","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".label-4","selectorGuids":["bfbef603-6109-63ca-b6be-a535c8528dc4"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-27-n-25","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".label-2","selectorGuids":["bf4afa20-a32a-ce75-73e1-5a4d9f169926"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-27-n-27","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".label-3","selectorGuids":["5f5528ad-6115-949f-b6f2-5454a8d75db2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"keyframe":60,"actionItems":[{"id":"a-27-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-heading-line-wrapper","selectorGuids":["6d9daaa9-e596-5e65-8496-8dd1667bcf4c"]},"yValue":-50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-27-n-24","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".label-4","selectorGuids":["bfbef603-6109-63ca-b6be-a535c8528dc4"]},"yValue":25,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"keyframe":70,"actionItems":[{"id":"a-27-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-heading-move._1","selectorGuids":["5dee89ba-e6ce-a2d7-c618-df56ab623915","2d492dc7-ec3a-1969-dd9d-eede35f05652"]},"yValue":-100,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-27-n-22","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".label-1","selectorGuids":["9416bdef-9a2d-f6d1-9bea-008c5a1ce48a"]},"yValue":25,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"keyframe":90,"actionItems":[{"id":"a-27-n-20","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-heading-move._2","selectorGuids":["5dee89ba-e6ce-a2d7-c618-df56ab623915","cad21480-808d-f4da-03f6-6f1adb781322"]},"yValue":50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-27-n-26","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".label-2","selectorGuids":["bf4afa20-a32a-ce75-73e1-5a4d9f169926"]},"yValue":-40,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-27-n-28","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".label-3","selectorGuids":["5f5528ad-6115-949f-b6f2-5454a8d75db2"]},"yValue":-150,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}]}],"createdOn":1636421993573},"a-28":{"id":"a-28","title":"Social Link - Hover","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".social-arrow","selectorGuids":["78a940a4-1547-25c6-0817-46b875efc16e"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-28-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".social-arrow","selectorGuids":["78a940a4-1547-25c6-0817-46b875efc16e"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-28-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".social-arrow","selectorGuids":["78a940a4-1547-25c6-0817-46b875efc16e"]},"yValue":-5,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-28-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".social-arrow","selectorGuids":["78a940a4-1547-25c6-0817-46b875efc16e"]},"zValue":4,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1636426703977},"a-29":{"id":"a-29","title":"Social Link - Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".social-arrow","selectorGuids":["78a940a4-1547-25c6-0817-46b875efc16e"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-29-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".social-arrow","selectorGuids":["78a940a4-1547-25c6-0817-46b875efc16e"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1636426703977},"a-30":{"id":"a-30","title":"Project Hover","actionItemGroups":[{"actionItems":[{"id":"a-30-n","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".project-card-bg","selectorGuids":["f0f72eb2-84e7-6597-9539-858b1d2dddab"]},"filters":[{"type":"saturate","filterId":"2868","value":200,"unit":"%"}]}}]}],"useFirstGroupAsInitialState":false,"createdOn":1636847340641},"a-31":{"id":"a-31","title":"Project Hover 2","actionItemGroups":[{"actionItems":[{"id":"a-31-n","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".project-card-bg","selectorGuids":["f0f72eb2-84e7-6597-9539-858b1d2dddab"]},"filters":[{"type":"saturate","filterId":"2868","value":100,"unit":"%"}]}}]}],"useFirstGroupAsInitialState":false,"createdOn":1636847340641},"a-3":{"id":"a-3","title":"Nav BG Color","continuousParameterGroups":[{"id":"a-3-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":3,"actionItems":[{"id":"a-3-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c18"},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}}]},{"keyframe":6,"actionItems":[{"id":"a-3-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c18"},"globalSwatchId":"1482844f","rValue":241,"bValue":239,"gValue":240,"aValue":1}}]}]}],"createdOn":1636309300270},"a-32":{"id":"a-32","title":"Social Link - Hover 2","actionItemGroups":[{"actionItems":[{"id":"a-32-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".social-arrow","selectorGuids":["78a940a4-1547-25c6-0817-46b875efc16e"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-32-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".social-arrow","selectorGuids":["78a940a4-1547-25c6-0817-46b875efc16e"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-32-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".social-arrow","selectorGuids":["78a940a4-1547-25c6-0817-46b875efc16e"]},"yValue":-5,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-32-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".social-arrow","selectorGuids":["78a940a4-1547-25c6-0817-46b875efc16e"]},"zValue":4,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1636426703977},"a-33":{"id":"a-33","title":"Social Link - Hover Out 2","actionItemGroups":[{"actionItems":[{"id":"a-33-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".social-arrow","selectorGuids":["78a940a4-1547-25c6-0817-46b875efc16e"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-33-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".social-arrow","selectorGuids":["78a940a4-1547-25c6-0817-46b875efc16e"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1636426703977},"a-34":{"id":"a-34","title":"SHOW Faq Item","actionItemGroups":[{"actionItems":[{"id":"a-34-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":350,"target":{},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-34-n-19","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6500935640c6420fe0573660|7821d247-60d0-dea4-bb46-b22983115378"},"globalSwatchId":"","rValue":4,"bValue":21,"gValue":9,"aValue":0.1}},{"id":"a-34-n-17","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}},{"id":"a-34-n-15","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-34-n-13","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{},"widthValue":0,"heightValue":1,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-34-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-34-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":350,"target":{},"yValue":50,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-34-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":350,"target":{},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-34-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":350,"target":{},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-34-n-20","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":true,"id":"6500935640c6420fe0573660|7821d247-60d0-dea4-bb46-b22983115378"},"globalSwatchId":"","rValue":4,"bValue":21,"gValue":9,"aValue":0}},{"id":"a-34-n-18","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{},"globalSwatchId":"25013353","rValue":254,"bValue":5,"gValue":117,"aValue":1}},{"id":"a-34-n-16","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{},"zValue":90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-34-n-14","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":1000,"target":{},"widthValue":100,"heightValue":1,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-34-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-34-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":350,"target":{},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-34-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":350,"target":{},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1610095163825},"a-38":{"id":"a-38","title":"HIDE Faq Item","actionItemGroups":[{"actionItems":[{"id":"a-38-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":350,"target":{},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-38-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}},{"id":"a-38-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-38-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":400,"target":{},"widthValue":0,"heightValue":1,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-38-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{},"value":0,"unit":""}},{"id":"a-38-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":350,"target":{},"yValue":50,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-38-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":350,"target":{},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-38-n-8","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":true,"id":"6500935640c6420fe0573660|7821d247-60d0-dea4-bb46-b22983115378"},"globalSwatchId":"","rValue":4,"bValue":21,"gValue":9,"aValue":0.1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1610095163825},"a-41":{"id":"a-41","title":"Outro","actionItemGroups":[{"actionItems":[{"id":"a-41-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".outro-parent","selectorGuids":["80f6c69d-779b-3200-8d64-e2e3857c6f3e"]},"value":"none"}},{"id":"a-41-n-13","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".outro-bg._2","selectorGuids":["fa154bf3-2c6d-34f7-1bfc-20669e47d7e0","aa7e6111-fcac-ad0a-d02b-6a88cbd6908c"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"%","locked":false}},{"id":"a-41-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".outro-line","selectorGuids":["9632001b-f960-596c-4e9a-d00d215ae84d"]},"value":0,"unit":""}},{"id":"a-41-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".outro-text","selectorGuids":["0f7391b7-a7cc-dc46-9623-8f3e6b7d05c7"]},"value":0,"unit":""}},{"id":"a-41-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".outro-logo","selectorGuids":["dc008c71-0f4d-7197-769f-e0793b8731e2"]},"value":0,"unit":""}},{"id":"a-41-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".outro-bg.gradient-bg","selectorGuids":["fa154bf3-2c6d-34f7-1bfc-20669e47d7e0","4c956ade-907d-8973-c11c-6a1f7c5148a1"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"%","locked":false}}]},{"actionItems":[{"id":"a-41-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".outro-parent","selectorGuids":["80f6c69d-779b-3200-8d64-e2e3857c6f3e"]},"value":"flex"}}]},{"actionItems":[{"id":"a-41-n-14","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":1000,"target":{"selector":".outro-bg._2","selectorGuids":["fa154bf3-2c6d-34f7-1bfc-20669e47d7e0","aa7e6111-fcac-ad0a-d02b-6a88cbd6908c"]},"widthValue":100,"heightValue":100,"widthUnit":"%","heightUnit":"%","locked":false}},{"id":"a-41-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":50,"easing":"inOutQuart","duration":1000,"target":{"selector":".outro-bg.gradient-bg","selectorGuids":["fa154bf3-2c6d-34f7-1bfc-20669e47d7e0","4c956ade-907d-8973-c11c-6a1f7c5148a1"]},"widthValue":100,"heightValue":100,"widthUnit":"%","heightUnit":"%","locked":false}},{"id":"a-41-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":"ease","duration":400,"target":{"selector":".outro-logo","selectorGuids":["dc008c71-0f4d-7197-769f-e0793b8731e2"]},"value":1,"unit":""}},{"id":"a-41-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":"ease","duration":400,"target":{"selector":".outro-line","selectorGuids":["9632001b-f960-596c-4e9a-d00d215ae84d"]},"value":1,"unit":""}},{"id":"a-41-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":"ease","duration":400,"target":{"selector":".outro-text","selectorGuids":["0f7391b7-a7cc-dc46-9623-8f3e6b7d05c7"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1637091367494},"a-46":{"id":"a-46","title":"Mobile Nav - Open 2","actionItemGroups":[{"actionItems":[{"id":"a-46-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".m-nav-parent","selectorGuids":["dc221be8-6eab-ddeb-4c6e-d02541e5a78b"]},"value":"none"}},{"id":"a-46-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-top","selectorGuids":["da4e7d3a-471c-5fbe-8450-ab0557458746"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-46-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-btm","selectorGuids":["3f147cac-44c5-01d3-ff98-02ebdf0a87f1"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-46-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-btm","selectorGuids":["3f147cac-44c5-01d3-ff98-02ebdf0a87f1"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-46-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-top","selectorGuids":["da4e7d3a-471c-5fbe-8450-ab0557458746"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-46-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-top","selectorGuids":["da4e7d3a-471c-5fbe-8450-ab0557458746"]},"widthValue":80,"heightValue":2,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-46-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7ce"},"value":0,"unit":""}},{"id":"a-46-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7cb"},"value":0,"unit":""}},{"id":"a-46-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7c8"},"value":0,"unit":""}},{"id":"a-46-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7c5"},"value":0,"unit":""}},{"id":"a-46-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".btn.m-nav","selectorGuids":["a611e48e-2f61-9229-b074-a291bbd944a0","4b679f52-f8c1-9b5d-94dc-96a0575fb108"]},"value":0,"unit":""}},{"id":"a-46-n-12","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".m-nav-bg.bg-orange-gradient","selectorGuids":["06bcff10-3f6d-303b-862e-c9206274e2d1","08dec08e-5864-06bf-bfd5-cc3d098172d3"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"%","locked":false}},{"id":"a-46-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7c5"},"yValue":150,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-46-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7c8"},"yValue":150,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-46-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7cb"},"yValue":150,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-46-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7ce"},"yValue":150,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-46-n-17","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".m-nav-bg-behind.bg-black","selectorGuids":["d17e2e69-a1cb-8c72-6df9-203f7ca5eb14","357296f6-eb40-9678-2542-6be7868ce35a"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"%","locked":false}}]},{"actionItems":[{"id":"a-46-n-18","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".m-nav-parent","selectorGuids":["dc221be8-6eab-ddeb-4c6e-d02541e5a78b"]},"value":"flex"}}]},{"actionItems":[{"id":"a-46-n-19","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":1000,"target":{"selector":".m-nav-bg-behind.bg-black","selectorGuids":["d17e2e69-a1cb-8c72-6df9-203f7ca5eb14","357296f6-eb40-9678-2542-6be7868ce35a"]},"widthValue":100,"heightValue":100,"widthUnit":"%","heightUnit":"%","locked":false}},{"id":"a-46-n-20","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-top","selectorGuids":["da4e7d3a-471c-5fbe-8450-ab0557458746"]},"widthValue":100,"heightValue":2,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-46-n-21","actionTypeId":"STYLE_SIZE","config":{"delay":100,"easing":"inOutQuart","duration":1000,"target":{"selector":".m-nav-bg.bg-orange-gradient","selectorGuids":["06bcff10-3f6d-303b-862e-c9206274e2d1","08dec08e-5864-06bf-bfd5-cc3d098172d3"]},"widthValue":100,"heightValue":100,"widthUnit":"%","heightUnit":"%","locked":false}},{"id":"a-46-n-22","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-top","selectorGuids":["da4e7d3a-471c-5fbe-8450-ab0557458746"]},"yValue":6,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-46-n-23","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":100,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-btm","selectorGuids":["3f147cac-44c5-01d3-ff98-02ebdf0a87f1"]},"zValue":40,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-46-n-24","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":100,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-top","selectorGuids":["da4e7d3a-471c-5fbe-8450-ab0557458746"]},"zValue":-40,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-46-n-25","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-btm","selectorGuids":["3f147cac-44c5-01d3-ff98-02ebdf0a87f1"]},"yValue":-6,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-46-n-26","actionTypeId":"TRANSFORM_MOVE","config":{"delay":600,"easing":"inOutQuart","duration":1000,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7c5"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-46-n-27","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"ease","duration":800,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7c5"},"value":1,"unit":""}},{"id":"a-46-n-28","actionTypeId":"TRANSFORM_MOVE","config":{"delay":800,"easing":"inOutQuart","duration":1000,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7c8"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-46-n-29","actionTypeId":"STYLE_OPACITY","config":{"delay":800,"easing":"ease","duration":800,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7c8"},"value":1,"unit":""}},{"id":"a-46-n-30","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":"ease","duration":800,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7cb"},"value":1,"unit":""}},{"id":"a-46-n-31","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":"inOutQuart","duration":1000,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7cb"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-46-n-32","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1200,"easing":"inOutQuart","duration":1000,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7ce"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-46-n-33","actionTypeId":"STYLE_OPACITY","config":{"delay":1200,"easing":"ease","duration":1000,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7ce"},"value":1,"unit":""}},{"id":"a-46-n-34","actionTypeId":"STYLE_OPACITY","config":{"delay":1400,"easing":"ease","duration":1000,"target":{"selector":".btn.m-nav","selectorGuids":["a611e48e-2f61-9229-b074-a291bbd944a0","4b679f52-f8c1-9b5d-94dc-96a0575fb108"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1636309751817},"a-47":{"id":"a-47","title":"Mobile Nav - Close 2","actionItemGroups":[{"actionItems":[{"id":"a-47-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".btn.m-nav","selectorGuids":["a611e48e-2f61-9229-b074-a291bbd944a0","4b679f52-f8c1-9b5d-94dc-96a0575fb108"]},"value":0,"unit":""}},{"id":"a-47-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":200,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-btm","selectorGuids":["3f147cac-44c5-01d3-ff98-02ebdf0a87f1"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-47-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":200,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-top","selectorGuids":["da4e7d3a-471c-5fbe-8450-ab0557458746"]},"widthValue":80,"heightValue":2,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-47-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":200,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-top","selectorGuids":["da4e7d3a-471c-5fbe-8450-ab0557458746"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-47-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-top","selectorGuids":["da4e7d3a-471c-5fbe-8450-ab0557458746"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-47-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".burger-line-btm","selectorGuids":["3f147cac-44c5-01d3-ff98-02ebdf0a87f1"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-47-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"inOutQuart","duration":600,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7ce"},"yValue":150,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-47-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":500,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7ce"},"value":0,"unit":""}},{"id":"a-47-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"ease","duration":500,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7cb"},"value":0,"unit":""}},{"id":"a-47-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":600,"easing":"inOutQuart","duration":600,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7cb"},"yValue":150,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-47-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":800,"easing":"ease","duration":500,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7c8"},"value":0,"unit":""}},{"id":"a-47-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":800,"easing":"inOutQuart","duration":600,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7c8"},"yValue":150,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-47-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":"inOutQuart","duration":600,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7c5"},"yValue":150,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-47-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":"ease","duration":500,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7c5"},"value":0,"unit":""}},{"id":"a-47-n-15","actionTypeId":"STYLE_SIZE","config":{"delay":1200,"easing":"inOutQuart","duration":1000,"target":{"selector":".m-nav-bg.bg-orange-gradient","selectorGuids":["06bcff10-3f6d-303b-862e-c9206274e2d1","08dec08e-5864-06bf-bfd5-cc3d098172d3"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"%","locked":false}},{"id":"a-47-n-16","actionTypeId":"STYLE_SIZE","config":{"delay":1300,"easing":"inOutQuart","duration":1000,"target":{"selector":".m-nav-bg-behind.bg-black","selectorGuids":["d17e2e69-a1cb-8c72-6df9-203f7ca5eb14","357296f6-eb40-9678-2542-6be7868ce35a"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"%","locked":false}}]},{"actionItems":[{"id":"a-47-n-17","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".m-nav-parent","selectorGuids":["dc221be8-6eab-ddeb-4c6e-d02541e5a78b"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1636309751817},"a-49":{"id":"a-49","title":"Slide In View","actionItemGroups":[{"actionItems":[{"id":"a-49-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"","duration":0,"target":{},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-49-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"","duration":0,"target":{},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-49-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-49-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1616636583903},"a-39":{"id":"a-39","title":"Text Btn Hover","actionItemGroups":[{"actionItems":[{"id":"a-39-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".lg-p.text-btn","selectorGuids":["ae1d5afb-3866-8064-6d1d-8fd0a810918a","e25ce08d-eb22-adfa-a5f0-b70d48144ef9"]},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}},{"id":"a-39-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-btn-line.inner","selectorGuids":["67845c33-e7f6-f85a-bffc-b20227bdf9c7","21fa499b-9261-5c8e-2f72-0caaf3b442e1"]},"widthValue":0,"heightValue":2,"widthUnit":"%","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-39-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".lg-p.text-btn","selectorGuids":["ae1d5afb-3866-8064-6d1d-8fd0a810918a","e25ce08d-eb22-adfa-a5f0-b70d48144ef9"]},"globalSwatchId":"25013353","rValue":254,"bValue":5,"gValue":117,"aValue":1}},{"id":"a-39-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".text-btn-line.inner","selectorGuids":["67845c33-e7f6-f85a-bffc-b20227bdf9c7","21fa499b-9261-5c8e-2f72-0caaf3b442e1"]},"widthValue":100,"heightValue":2,"widthUnit":"%","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1637089571712},"a-40":{"id":"a-40","title":"Text Btn Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-40-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".lg-p.text-btn","selectorGuids":["ae1d5afb-3866-8064-6d1d-8fd0a810918a","e25ce08d-eb22-adfa-a5f0-b70d48144ef9"]},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}},{"id":"a-40-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".text-btn-line.inner","selectorGuids":["67845c33-e7f6-f85a-bffc-b20227bdf9c7","21fa499b-9261-5c8e-2f72-0caaf3b442e1"]},"widthValue":0,"heightValue":2,"widthUnit":"%","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1637089571712},"a-52":{"id":"a-52","title":"Nav Show - Black","actionItemGroups":[{"actionItems":[{"id":"a-52-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuart","duration":300,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7ac"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1636309049891},"a-53":{"id":"a-53","title":"Nav Hide - Black","actionItemGroups":[{"actionItems":[{"id":"a-53-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7ac"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-53-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuart","duration":400,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7ac"},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1636309049891},"a-51":{"id":"a-51","title":"Nav BG Color - Black","continuousParameterGroups":[{"id":"a-51-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":3,"actionItems":[{"id":"a-51-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7ac"},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}}]},{"keyframe":6,"actionItems":[{"id":"a-51-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6500935640c6420fe0573662|183249a2-1978-465a-cb3a-033d192ae7ac"},"globalSwatchId":"b7a1a1f5","rValue":2,"bValue":13,"gValue":6,"aValue":1}}]}]}],"createdOn":1636309300270},"a-54":{"id":"a-54","title":"Nav BG Color - Black 2","continuousParameterGroups":[{"id":"a-54-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":3,"actionItems":[{"id":"a-54-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6500935640c6420fe0573677|6e567a92-9de4-c0ce-ab0f-2b873dc23c18"},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}}]},{"keyframe":6,"actionItems":[{"id":"a-54-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6500935640c6420fe0573677|6e567a92-9de4-c0ce-ab0f-2b873dc23c18"},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}}]}]}],"createdOn":1636309300270},"a-56":{"id":"a-56","title":"Radio Option Hover","actionItemGroups":[{"actionItems":[{"id":"a-56-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".radio-fill","selectorGuids":["37fcd278-ec85-7307-35ff-04d6c20e8c00"]},"heightValue":0,"widthUnit":"PX","heightUnit":"em","locked":false}},{"id":"a-56-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".option-label","selectorGuids":["cf8ae24b-28c4-9028-7169-1cdb206d04da"]},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}}]},{"actionItems":[{"id":"a-56-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":600,"target":{"useEventTarget":"SIBLINGS","selector":".radio-fill","selectorGuids":["37fcd278-ec85-7307-35ff-04d6c20e8c00"]},"heightValue":8,"widthUnit":"PX","heightUnit":"em","locked":false}},{"id":"a-56-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":200,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".option-label","selectorGuids":["cf8ae24b-28c4-9028-7169-1cdb206d04da"]},"globalSwatchId":"1482844f","rValue":241,"bValue":239,"gValue":240,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1637626759531},"a-57":{"id":"a-57","title":"Radio Option Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-57-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".radio-fill","selectorGuids":["37fcd278-ec85-7307-35ff-04d6c20e8c00"]},"heightValue":0,"widthUnit":"PX","heightUnit":"em","locked":false}},{"id":"a-57-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".option-label","selectorGuids":["cf8ae24b-28c4-9028-7169-1cdb206d04da"]},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1637626759531},"a-58":{"id":"a-58","title":"About - Circles Move","continuousParameterGroups":[{"id":"a-58-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":5,"actionItems":[{"id":"a-58-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"6500935640c6420fe0573660|d367f674-90ab-cde0-bbe1-c63fbff041d4"},"xValue":0,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-58-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"6500935640c6420fe0573660|1a751250-cb07-8846-2bdd-0d66b9c39761"},"xValue":0,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-58-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"6500935640c6420fe0573660|3ee95742-5f7d-1f8b-3f3f-604d6457bc75"},"xValue":5,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-58-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"6500935640c6420fe0573660|690008a9-60e6-0f9f-c0ac-a14fa78ea97f"},"xValue":10,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]},{"keyframe":80,"actionItems":[{"id":"a-58-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutSine","duration":500,"target":{"useEventTarget":"CHILDREN","id":"6500935640c6420fe0573660|d367f674-90ab-cde0-bbe1-c63fbff041d4"},"xValue":-40,"yValue":-50,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-58-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutSine","duration":500,"target":{"useEventTarget":"CHILDREN","id":"6500935640c6420fe0573660|1a751250-cb07-8846-2bdd-0d66b9c39761"},"xValue":20,"yValue":25,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-58-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutSine","duration":500,"target":{"useEventTarget":"CHILDREN","id":"6500935640c6420fe0573660|3ee95742-5f7d-1f8b-3f3f-604d6457bc75"},"xValue":70,"yValue":-30,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-58-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutSine","duration":500,"target":{"useEventTarget":"CHILDREN","id":"6500935640c6420fe0573660|690008a9-60e6-0f9f-c0ac-a14fa78ea97f"},"xValue":0,"yValue":45,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]}]}],"createdOn":1636311619668},"a-60":{"id":"a-60","title":"CC - Project Intro - Desktop","actionItemGroups":[{"actionItems":[{"id":"a-60-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".project-card-bg.bg-cc","selectorGuids":["f0f72eb2-84e7-6597-9539-858b1d2dddab","342e2cf7-a65e-0de7-b029-c30fd3e82d20"]},"widthValue":0,"heightValue":100,"widthUnit":"%","heightUnit":"%","locked":false}},{"id":"a-60-n-23","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".cc-icon-1","selectorGuids":["4ab8a408-95eb-c2de-1cd5-0ef3d3701cc2"]},"value":0,"unit":""}},{"id":"a-60-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".cc-img-1","selectorGuids":["5c72852d-1f14-4299-6290-64045beb7912"]},"yValue":10,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-60-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".cc-img-1","selectorGuids":["5c72852d-1f14-4299-6290-64045beb7912"]},"value":0,"unit":""}},{"id":"a-60-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".poster-img._1","selectorGuids":["885a4ded-744d-f62f-7ab7-d3d230d5d796","810f3f2d-75a9-b899-713c-3f0118eff270"]},"value":0,"unit":""}},{"id":"a-60-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".cc-img-2","selectorGuids":["e8996122-54bb-143c-6c9a-6171f94d04ff"]},"value":0,"unit":""}},{"id":"a-60-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".cc-img-2","selectorGuids":["e8996122-54bb-143c-6c9a-6171f94d04ff"]},"yValue":10,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-60-n-25","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".cc-icon-2","selectorGuids":["fa939830-d5f8-47d4-99b9-1fc1cbdbdd7d"]},"value":0,"unit":""}},{"id":"a-60-n-29","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".cc-icon-4","selectorGuids":["0af7b0df-69e5-711a-1d9e-5330a59c30b9"]},"value":0,"unit":""}},{"id":"a-60-n-27","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".cc-icon-3","selectorGuids":["669be660-5af7-dde0-9e94-12f405a283f2"]},"value":0,"unit":""}},{"id":"a-60-n-31","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".cc-icon-5","selectorGuids":["1a97e6cf-1436-1939-578f-ab70754b5049"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-60-n-14","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".project-card-bg.bg-cc","selectorGuids":["f0f72eb2-84e7-6597-9539-858b1d2dddab","342e2cf7-a65e-0de7-b029-c30fd3e82d20"]},"widthValue":100,"heightValue":100,"widthUnit":"%","heightUnit":"%","locked":false}}]},{"actionItems":[{"id":"a-60-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".cc-img-1","selectorGuids":["5c72852d-1f14-4299-6290-64045beb7912"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-60-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".cc-img-1","selectorGuids":["5c72852d-1f14-4299-6290-64045beb7912"]},"value":1,"unit":""}},{"id":"a-60-n-21","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".cc-img-2","selectorGuids":["e8996122-54bb-143c-6c9a-6171f94d04ff"]},"value":1,"unit":""}},{"id":"a-60-n-22","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".cc-img-2","selectorGuids":["e8996122-54bb-143c-6c9a-6171f94d04ff"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-60-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".cc-icon-1","selectorGuids":["4ab8a408-95eb-c2de-1cd5-0ef3d3701cc2"]},"value":1,"unit":""}},{"id":"a-60-n-26","actionTypeId":"STYLE_OPACITY","config":{"delay":50,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".cc-icon-2","selectorGuids":["fa939830-d5f8-47d4-99b9-1fc1cbdbdd7d"]},"value":1,"unit":""}},{"id":"a-60-n-28","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".cc-icon-3","selectorGuids":["669be660-5af7-dde0-9e94-12f405a283f2"]},"value":1,"unit":""}},{"id":"a-60-n-30","actionTypeId":"STYLE_OPACITY","config":{"delay":150,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".cc-icon-4","selectorGuids":["0af7b0df-69e5-711a-1d9e-5330a59c30b9"]},"value":1,"unit":""}},{"id":"a-60-n-32","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".cc-icon-5","selectorGuids":["1a97e6cf-1436-1939-578f-ab70754b5049"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1636316156861},"a-64":{"id":"a-64","title":"Blog Card Hover","actionItemGroups":[{"actionItems":[{"id":"a-64-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".a-link-text","selectorGuids":["dd08196e-2d84-ffed-9375-b8fd27586bbc"]},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}},{"id":"a-64-n-6","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".blog-card_content","selectorGuids":["5e502f50-35c7-009c-24b4-1420187e57c9"]},"globalSwatchId":"b7a1a1f5","rValue":2,"bValue":13,"gValue":6,"aValue":1}},{"id":"a-64-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".card-link-line","selectorGuids":["c95b3425-9980-81f4-e3dc-a83f25837441"]},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}}]},{"actionItems":[{"id":"a-64-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".a-link-text","selectorGuids":["dd08196e-2d84-ffed-9375-b8fd27586bbc"]},"globalSwatchId":"25013353","rValue":254,"bValue":5,"gValue":117,"aValue":1}},{"id":"a-64-n-7","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".blog-card_content","selectorGuids":["5e502f50-35c7-009c-24b4-1420187e57c9"]},"globalSwatchId":"25013353","rValue":254,"bValue":5,"gValue":117,"aValue":1}},{"id":"a-64-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".card-link-line","selectorGuids":["c95b3425-9980-81f4-e3dc-a83f25837441"]},"globalSwatchId":"25013353","rValue":254,"bValue":5,"gValue":117,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1640925406217},"a-65":{"id":"a-65","title":"Blog Card Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-65-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".a-link-text","selectorGuids":["dd08196e-2d84-ffed-9375-b8fd27586bbc"]},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}},{"id":"a-65-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".blog-card_content","selectorGuids":["5e502f50-35c7-009c-24b4-1420187e57c9"]},"globalSwatchId":"b7a1a1f5","rValue":2,"bValue":13,"gValue":6,"aValue":1}},{"id":"a-65-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"selector":".card-link-line","selectorGuids":["c95b3425-9980-81f4-e3dc-a83f25837441"]},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1640925406217},"a-66":{"id":"a-66","title":"Open Blog Nav 2","actionItemGroups":[],"useFirstGroupAsInitialState":false,"createdOn":1640924510322},"a-67":{"id":"a-67","title":"Post Like Button Hover","actionItemGroups":[{"actionItems":[{"id":"a-67-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".post-button_fill.is--like","selectorGuids":["d2498d28-c536-17a8-859d-2d546e4c3882","6be8da98-dc9c-3250-af18-7bf5d6e8cea8"]},"xValue":0,"yValue":0,"locked":true}},{"id":"a-67-n-5","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".post-button_text","selectorGuids":["ed049f69-931b-1d44-7fb4-04cd1d7252c6"]},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}}]},{"actionItems":[{"id":"a-67-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_fill.is--like","selectorGuids":["d2498d28-c536-17a8-859d-2d546e4c3882","6be8da98-dc9c-3250-af18-7bf5d6e8cea8"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-67-n-6","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_text","selectorGuids":["ed049f69-931b-1d44-7fb4-04cd1d7252c6"]},"globalSwatchId":"714db2f1","rValue":226,"bValue":18,"gValue":64,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1640992126192},"a-68":{"id":"a-68","title":"Post Like Button Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-68-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutQuart","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_fill.is--like","selectorGuids":["d2498d28-c536-17a8-859d-2d546e4c3882","6be8da98-dc9c-3250-af18-7bf5d6e8cea8"]},"xValue":0,"yValue":0,"locked":true}},{"id":"a-68-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_text","selectorGuids":["ed049f69-931b-1d44-7fb4-04cd1d7252c6"]},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1640992126192},"a-69":{"id":"a-69","title":"Post Like","actionItemGroups":[{"actionItems":[{"id":"a-69-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".post-button_icon-img.active","selectorGuids":["3fbbf2a2-dbb7-0ebb-66f9-3e7b7766e0a8","1cb700ad-b365-0e32-f413-690c7fdae74a"]},"value":0,"unit":""}},{"id":"a-69-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".post-button_icon-img.active","selectorGuids":["3fbbf2a2-dbb7-0ebb-66f9-3e7b7766e0a8","1cb700ad-b365-0e32-f413-690c7fdae74a"]},"value":"none"}}]},{"actionItems":[{"id":"a-69-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".post-button_icon-img.active","selectorGuids":["3fbbf2a2-dbb7-0ebb-66f9-3e7b7766e0a8","1cb700ad-b365-0e32-f413-690c7fdae74a"]},"value":"block"}}]},{"actionItems":[{"id":"a-69-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_icon-img.active","selectorGuids":["3fbbf2a2-dbb7-0ebb-66f9-3e7b7766e0a8","1cb700ad-b365-0e32-f413-690c7fdae74a"]},"value":1,"unit":""}},{"id":"a-69-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_fill.is--like","selectorGuids":["d2498d28-c536-17a8-859d-2d546e4c3882","6be8da98-dc9c-3250-af18-7bf5d6e8cea8"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1640992611868},"a-70":{"id":"a-70","title":"Post Unlike","actionItemGroups":[{"actionItems":[{"id":"a-70-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_icon-img.active","selectorGuids":["3fbbf2a2-dbb7-0ebb-66f9-3e7b7766e0a8","1cb700ad-b365-0e32-f413-690c7fdae74a"]},"value":0,"unit":""}},{"id":"a-70-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_fill.is--like","selectorGuids":["d2498d28-c536-17a8-859d-2d546e4c3882","6be8da98-dc9c-3250-af18-7bf5d6e8cea8"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1640992611868},"a-71":{"id":"a-71","title":"Tweet Button Hover","actionItemGroups":[{"actionItems":[{"id":"a-71-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".post-button_fill.is--tweet","selectorGuids":["d2498d28-c536-17a8-859d-2d546e4c3882","0729b54d-aa15-d9e4-6613-59a0d42faacd"]},"xValue":0,"yValue":0,"locked":true}},{"id":"a-71-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".post-button_text","selectorGuids":["ed049f69-931b-1d44-7fb4-04cd1d7252c6"]},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}}]},{"actionItems":[{"id":"a-71-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_fill.is--tweet","selectorGuids":["d2498d28-c536-17a8-859d-2d546e4c3882","0729b54d-aa15-d9e4-6613-59a0d42faacd"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-71-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_text","selectorGuids":["ed049f69-931b-1d44-7fb4-04cd1d7252c6"]},"globalSwatchId":"","rValue":29,"bValue":242,"gValue":161,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1640992126192},"a-72":{"id":"a-72","title":"Tweet Button Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-72-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutQuart","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_fill.is--tweet","selectorGuids":["d2498d28-c536-17a8-859d-2d546e4c3882","0729b54d-aa15-d9e4-6613-59a0d42faacd"]},"xValue":0,"yValue":0,"locked":true}},{"id":"a-72-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_text","selectorGuids":["ed049f69-931b-1d44-7fb4-04cd1d7252c6"]},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1640992126192},"a-73":{"id":"a-73","title":"Email Button Hover","actionItemGroups":[{"actionItems":[{"id":"a-73-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".post-button_fill.is--linkedin","selectorGuids":["d2498d28-c536-17a8-859d-2d546e4c3882","60ad2662-4b5d-c5f7-0b93-7916138fcc01"]},"xValue":0,"yValue":0,"locked":true}},{"id":"a-73-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".post-button_text","selectorGuids":["ed049f69-931b-1d44-7fb4-04cd1d7252c6"]},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}}]},{"actionItems":[{"id":"a-73-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_fill.is--linkedin","selectorGuids":["d2498d28-c536-17a8-859d-2d546e4c3882","60ad2662-4b5d-c5f7-0b93-7916138fcc01"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-73-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_text","selectorGuids":["ed049f69-931b-1d44-7fb4-04cd1d7252c6"]},"globalSwatchId":"","rValue":14,"bValue":168,"gValue":118,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1640992126192},"a-74":{"id":"a-74","title":"Email Button Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-74-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutQuart","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_fill.is--linkedin","selectorGuids":["d2498d28-c536-17a8-859d-2d546e4c3882","60ad2662-4b5d-c5f7-0b93-7916138fcc01"]},"xValue":0,"yValue":0,"locked":true}},{"id":"a-74-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_text","selectorGuids":["ed049f69-931b-1d44-7fb4-04cd1d7252c6"]},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1640992126192},"a-75":{"id":"a-75","title":"Copy Button Hover","actionItemGroups":[{"actionItems":[{"id":"a-75-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".post-button_fill.is--copy","selectorGuids":["d2498d28-c536-17a8-859d-2d546e4c3882","61944cce-bd6d-a110-fc29-27a45192d624"]},"xValue":0,"yValue":0,"locked":true}},{"id":"a-75-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".post-button_text","selectorGuids":["ed049f69-931b-1d44-7fb4-04cd1d7252c6"]},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}}]},{"actionItems":[{"id":"a-75-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_fill.is--copy","selectorGuids":["d2498d28-c536-17a8-859d-2d546e4c3882","61944cce-bd6d-a110-fc29-27a45192d624"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-75-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_text","selectorGuids":["ed049f69-931b-1d44-7fb4-04cd1d7252c6"]},"globalSwatchId":"","rValue":24,"bValue":130,"gValue":204,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1640992126192},"a-76":{"id":"a-76","title":"Copy Button Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-76-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutQuart","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_fill.is--copy","selectorGuids":["d2498d28-c536-17a8-859d-2d546e4c3882","61944cce-bd6d-a110-fc29-27a45192d624"]},"xValue":0,"yValue":0,"locked":true}},{"id":"a-76-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_text","selectorGuids":["ed049f69-931b-1d44-7fb4-04cd1d7252c6"]},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1640992126192},"a-77":{"id":"a-77","title":"Email Us Button Hover","actionItemGroups":[{"actionItems":[{"id":"a-77-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".post-button_fill.is--email-us","selectorGuids":["d2498d28-c536-17a8-859d-2d546e4c3882","a6f6e0f4-457b-deae-aa0a-89e8a501371e"]},"xValue":0,"yValue":0,"locked":true}},{"id":"a-77-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".post-button_text","selectorGuids":["ed049f69-931b-1d44-7fb4-04cd1d7252c6"]},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}}]},{"actionItems":[{"id":"a-77-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_fill.is--email-us","selectorGuids":["d2498d28-c536-17a8-859d-2d546e4c3882","e291a9ac-d743-9cbb-1572-333ef05be12c"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-77-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_text","selectorGuids":["ed049f69-931b-1d44-7fb4-04cd1d7252c6"]},"globalSwatchId":"25013353","rValue":254,"bValue":5,"gValue":117,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1640992126192},"a-78":{"id":"a-78","title":"Email Us Button Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-78-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutQuart","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_fill.is--email-us","selectorGuids":["d2498d28-c536-17a8-859d-2d546e4c3882","e291a9ac-d743-9cbb-1572-333ef05be12c"]},"xValue":0,"yValue":0,"locked":true}},{"id":"a-78-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_text","selectorGuids":["ed049f69-931b-1d44-7fb4-04cd1d7252c6"]},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1640992126192},"a-79":{"id":"a-79","title":"Call Us Button Hover","actionItemGroups":[{"actionItems":[{"id":"a-79-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".post-button_fill.is--call-us","selectorGuids":["d2498d28-c536-17a8-859d-2d546e4c3882","acf9e0d4-d851-1c35-4b15-72281521b65e"]},"xValue":0,"yValue":0,"locked":true}},{"id":"a-79-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".post-button_text","selectorGuids":["ed049f69-931b-1d44-7fb4-04cd1d7252c6"]},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}}]},{"actionItems":[{"id":"a-79-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_fill.is--call-us","selectorGuids":["d2498d28-c536-17a8-859d-2d546e4c3882","acf9e0d4-d851-1c35-4b15-72281521b65e"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-79-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_text","selectorGuids":["ed049f69-931b-1d44-7fb4-04cd1d7252c6"]},"globalSwatchId":"25013353","rValue":254,"bValue":5,"gValue":117,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1640992126192},"a-80":{"id":"a-80","title":"Call Us Button Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-80-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutQuart","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_fill.is--call-us","selectorGuids":["d2498d28-c536-17a8-859d-2d546e4c3882","acf9e0d4-d851-1c35-4b15-72281521b65e"]},"xValue":0,"yValue":0,"locked":true}},{"id":"a-80-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".post-button_text","selectorGuids":["ed049f69-931b-1d44-7fb4-04cd1d7252c6"]},"globalSwatchId":"ae39433d","rValue":4,"bValue":21,"gValue":9,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1640992126192},"a-81":{"id":"a-81","title":"Search Open","actionItemGroups":[{"actionItems":[{"id":"a-81-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".search-btn-icon","selectorGuids":["b02b3fce-6173-0dad-ac5e-aba0277f1120"]},"value":"block"}},{"id":"a-81-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".search-button","selectorGuids":["2adf720c-c79c-82f2-3b1a-eb17b29d067a"]},"value":0,"unit":""}},{"id":"a-81-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".search-input-wrapper","selectorGuids":["f1a39755-c714-ca9c-433f-e66e68f79d37"]},"value":"none"}},{"id":"a-81-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".search-input-wrapper","selectorGuids":["f1a39755-c714-ca9c-433f-e66e68f79d37"]},"widthValue":0,"heightValue":100,"widthUnit":"em","heightUnit":"%","locked":false}}]},{"actionItems":[{"id":"a-81-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".search-btn-icon","selectorGuids":["b02b3fce-6173-0dad-ac5e-aba0277f1120"]},"value":"none"}}]},{"actionItems":[{"id":"a-81-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".search-input-wrapper","selectorGuids":["f1a39755-c714-ca9c-433f-e66e68f79d37"]},"value":"block"}},{"id":"a-81-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":1000,"target":{"useEventTarget":"SIBLINGS","selector":".search-input-wrapper","selectorGuids":["f1a39755-c714-ca9c-433f-e66e68f79d37"]},"widthValue":27.5,"heightValue":100,"widthUnit":"em","heightUnit":"%","locked":false}},{"id":"a-81-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"ease","duration":500,"target":{"selector":".search-button","selectorGuids":["2adf720c-c79c-82f2-3b1a-eb17b29d067a"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1641154953221},"a-84":{"id":"a-84","title":"Blog CTA - Scroll Animation","continuousParameterGroups":[{"id":"a-84-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-84-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".cta-circle-2.is--post","selectorGuids":["5b213356-6208-2ba4-fb09-9d8a62dcd514","307389cf-96c2-1388-3147-7882fcc7ab4f"]},"yValue":0,"xUnit":"PX","yUnit":"vw","zUnit":"PX"}},{"id":"a-84-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".cta-circle-1.is--post","selectorGuids":["6205cfcd-abd8-3955-c03f-4512596f1ecc","61b7ede4-4eb0-99f3-ad01-2260bb4d68fd"]},"yValue":0,"xUnit":"PX","yUnit":"vw","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-84-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".cta-circle-2.is--post","selectorGuids":["5b213356-6208-2ba4-fb09-9d8a62dcd514","307389cf-96c2-1388-3147-7882fcc7ab4f"]},"yValue":10,"xUnit":"PX","yUnit":"vw","zUnit":"PX"}},{"id":"a-84-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".cta-circle-1.is--post","selectorGuids":["6205cfcd-abd8-3955-c03f-4512596f1ecc","61b7ede4-4eb0-99f3-ad01-2260bb4d68fd"]},"yValue":-12,"xUnit":"PX","yUnit":"vw","zUnit":"PX"}}]}]}],"createdOn":1636385422182},"a-85":{"id":"a-85","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-85-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c18"},"globalSwatchId":"1482844f","rValue":241,"bValue":239,"gValue":240,"aValue":1}}]},{"actionItems":[{"id":"a-85-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c18"},"globalSwatchId":"1482844f","rValue":241,"bValue":239,"gValue":240,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694200900826},"a-86":{"id":"a-86","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-86-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6e567a92-9de4-c0ce-ab0f-2b873dc23c17"},"globalSwatchId":"1482844f","rValue":241,"bValue":239,"gValue":240,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694274170662},"a-87":{"id":"a-87","title":"New Mouse Animation","continuousParameterGroups":[{"id":"a-87-p","type":"MOUSE_X","parameterLabel":"Mouse X","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-87-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6500935640c6420fe0573692|33579cff-ff49-1d7b-1b0d-9e62becaaa3b"},"globalSwatchId":"714db2f1","rValue":226,"bValue":18,"gValue":64,"aValue":1}}]},{"keyframe":100,"actionItems":[{"id":"a-87-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6500935640c6420fe0573692|33579cff-ff49-1d7b-1b0d-9e62becaaa3b"},"globalSwatchId":"38c11680","rValue":38,"bValue":185,"gValue":82,"aValue":1}}]}]},{"id":"a-87-p-2","type":"MOUSE_Y","parameterLabel":"Mouse Y","continuousActionGroups":[]}],"createdOn":1694283776611},"a-88":{"id":"a-88","title":"Spin Service Wheel","continuousParameterGroups":[{"id":"a-88-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-88-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6500935640c6420fe0573692|f59a56c8-f2b0-3515-0791-335e2d31927e"},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"keyframe":100,"actionItems":[{"id":"a-88-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6500935640c6420fe0573692|f59a56c8-f2b0-3515-0791-335e2d31927e"},"zValue":690,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}]}],"createdOn":1694534036247},"a-89":{"id":"a-89","title":"Stretch Handles","continuousParameterGroups":[{"id":"a-89-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":20,"actionItems":[{"id":"a-89-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6500935640c6420fe0573692|585c0812-537e-031a-87a8-1282170be785"},"xValue":1.8,"yValue":1.8,"locked":true}},{"id":"a-89-n","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6500935640c6420fe0573692|585c0812-537e-031a-87a8-1282170be785"},"xValue":25,"yValue":-17,"xUnit":"deg","yUnit":"deg","zUnit":"DEG"}}]},{"keyframe":70,"actionItems":[{"id":"a-89-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6500935640c6420fe0573692|585c0812-537e-031a-87a8-1282170be785"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-89-n-2","actionTypeId":"TRANSFORM_SKEW","config":{"delay":0,"easing":"","duration":500,"target":{"id":"6500935640c6420fe0573692|585c0812-537e-031a-87a8-1282170be785"},"xValue":1,"yValue":-1,"xUnit":"deg","yUnit":"deg","zUnit":"DEG"}}]}]}],"createdOn":1694535436654},"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}
);
