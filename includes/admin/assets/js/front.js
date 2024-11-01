(function (e) {
    var t = function (t) {
        var n, o, i = this, s = t.obj, a = t.optionType || 0, c = t.showType || 0, l = t.visible || 6,
            p = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            r = e('<span class="websters-select__item"></span>'), d = e('<div class="websters-select"></div>'),
            u = e(window), w = e("body"), f = !1, h = function () {
                var t = "";
                s.css({opacity: 0}), s.wrap(d), d = s.parent(), d.append('<div class="websters-select__arrow"></div>'), s.before(r), s.find("option").each(function () {
                    var n = e(this);
                    "selected" == n.attr("selected") && (t = n.text())
                }), "" == t && (t = s.find("option").eq(0).text()), r.text(t)
            }, v = function () {
                f = !1, c ? 1 == c ? n.stop(!0, !1).slideUp(300, function () {
                    n.remove()
                }) : 2 == c && n.stop(!0, !1).fadeOut(300, function () {
                        n.remove()
                    }) : n.css({display: "none"}), d.removeClass("websters-select_opened")
            }, g = function () {
                s[0].obj = i, h(), _(), b()
            }, b = function () {
                s.on("change", function () {
                    r.text(e(this).find("option:selected").text())
                }), 1 != a || p || (d.on({
                    click: function (e) {
                        e.stopPropagation(), f ? v() : j()
                    }
                }), u.on({
                    click: function () {
                        f && v()
                    }
                }))
            }, _ = function () {
                !a || p ? m() : 1 == a && y()
            }, y = function () {
                d.addClass("websters-select_custom")
            }, m = function () {
                d.addClass("websters-select_mobile")
            }, j = function () {
                var t = e("select"), i = e("<ul></ul>"), a = (u.scrollTop(), d.offset()), p = 0,
                    r = s.find("option:selected").index(), h = Math.round(1e3 * Math.random());
                t.each(function () {
                    this !== s[0] && this.obj.checkOpened() && this.obj.close()
                }), f && n.remove(), f = !0, n = e('<div class="websters-select__popup" id="websters-select__popup' + h + '"></div>'), s.find("option").each(function (t) {
                    var n = e(this);
                    "State*" == e(this).val() && e(this).val(""), t == r ? i.append('<li class="active">' + n.text() + "</li>") : i.append("<li>" + n.text() + "</li>")
                }), n.append(i), w.append(n), d.addClass("websters-select_opened"), n.css({
                    width: d.outerWidth(),
                    left: a.left,
                    top: a.top + d.outerHeight() + 5
                }), p = n.outerHeight(), p > n.find("li").eq(0).outerHeight() * l && (n.height(n.find("li").eq(0).outerHeight() * l), o = n.niceScroll({horizrailenabled: !1})), 1 == c ? (n.css({display: "none"}), n.slideDown(300)) : 2 == c && (n.css({opacity: .1}), n.animate({opacity: 1}, 300)), n.find("li").on({
                    click: function (t) {
                        var n = e(this).index();
                        t.stopPropagation(), s.val(s.find("option").eq(n).attr("value")), s.trigger("change"), v()
                    }
                })
            };
        i.checkOpened = function () {
            return f
        }, i.close = function () {
            v()
        }, g()
    };

    var n = function () {
        var t = e(".tpw_widget-wrap"), n = e(".tpw_widget>form"), o = e(".tpw_widget-wrap .tpw_result"),
            i = (e(window), function () {
                s()
            }), s = function () {
                n.on("submit", function () {
                    t.addClass("loading");
                    var i, s = window.location.href, a = e(".tpw_track").val() || "", c = n.attr("data-lang");
                    return i = e(".tpw_types option:selected").length > 1 || e(".tpw_types option:selected").length < 1 ? e(".tpw_types option").eq(0).val() : e(".tpw_types option:selected").val(), e.ajax({
                        type: "get",
                        crossDomain: !0,
                        url: "https://track-package.com.ua/app/send.php",
                        dataType: "jsonp",
                        data: {barcode: a, domain: s, lang: c, delivery: i},
                        jsonpCallback: "gettrackresult",
                        jsonp: "callback",
                        timeout: 1e4,
                        success: function (n) {
                            t.removeClass("loading"), n.status ? (o.addClass("show"), e(".tpw_result").html(n.message)) : "ua" == c ? alert("Не коректно введені данні!") : alert("Не корректные данные!")
                        },
                        error: function () {
                            t.removeClass("loading"), o.removeClass("show"), "ua" == c ? alert("Не коректні данні!") : alert("Не корректные данные!")
                        }
                    }), !1
                })
            };
        i()
    };
    e(function () {
        e(".tpw_widget-wrap").each(function () {
            new n
        })
    })
})(jQuery);

!(function (e) {
    var t = function (t) {
        var n, o, i = this, s = t.obj, a = t.optionType || 0, c = t.showType || 0, r = t.visible || 6,
            l = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            p = e('<span class="websters-select__item"></span>'), d = e('<div class="websters-select"></div>'),
            u = e(window), f = e("body"), h = !1, w = function () {
                var t = "";
                s.css({opacity: 0}), s.wrap(d), d = s.parent(), d.append('<div class="websters-select__arrow"></div>'), s.before(p), s.find("option").each(function () {
                    var n = e(this);
                    "selected" == n.attr("selected") && (t = n.text())
                }), "" == t && (t = s.find("option").eq(0).text()), p.text(t)
            }, v = function () {
                h = !1, c ? 1 == c ? n.stop(!0, !1).slideUp(300, function () {
                    n.remove()
                }) : 2 == c && n.stop(!0, !1).fadeOut(300, function () {
                        n.remove()
                    }) : n.css({display: "none"}), d.removeClass("websters-select_opened")
            }, b = function () {
                s[0].obj = i, w(), _(), g()
            }, g = function () {
                s.on("change", function () {
                    p.text(e(this).find("option:selected").text())
                }), 1 != a || l || (d.on({
                    click: function (e) {
                        e.stopPropagation(), h ? v() : j()
                    }
                }), u.on({
                    click: function () {
                        h && v()
                    }
                }))
            }, _ = function () {
                !a || l ? y() : 1 == a && m()
            }, m = function () {
                d.addClass("websters-select_custom")
            }, y = function () {
                d.addClass("websters-select_mobile")
            }, j = function () {
                var t = e("select"), i = e("<ul></ul>"), a = (u.scrollTop(), d.offset()), l = 0,
                    p = s.find("option:selected").index(), w = Math.round(1e3 * Math.random());
                t.each(function () {
                    this !== s[0] && this.obj.checkOpened() && this.obj.close()
                }), h && n.remove(), h = !0, n = e('<div class="websters-select__popup" id="websters-select__popup' + w + '"></div>'), s.find("option").each(function (t) {
                    var n = e(this);
                    "State*" == e(this).val() && e(this).val(""), t == p ? i.append('<li class="active">' + n.text() + "</li>") : i.append("<li>" + n.text() + "</li>")
                }), n.append(i), f.append(n), d.addClass("websters-select_opened"), n.css({
                    width: d.outerWidth(),
                    left: a.left,
                    top: a.top + d.outerHeight() + 5
                }), l = n.outerHeight(), l > n.find("li").eq(0).outerHeight() * r && (n.height(n.find("li").eq(0).outerHeight() * r), o = n.niceScroll({horizrailenabled: !1})), 1 == c ? (n.css({display: "none"}), n.slideDown(300)) : 2 == c && (n.css({opacity: .1}), n.animate({opacity: 1}, 300)), n.find("li").on({
                    click: function (t) {
                        var n = e(this).index();
                        t.stopPropagation(), s.val(s.find("option").eq(n).attr("value")), s.trigger("change"), v()
                    }
                })
            };
        i.checkOpened = function () {
            return h
        }, i.close = function () {
            v()
        }, b()
    };
    e(function () {
        e(".tpw_types").each(function () {
            new t({obj: e(this), optionType: 1, showType: 2})
        })
    });
    var n = function () {
        var t = e(".tpw_widget-wrap"), n = e(".tpw_widget>form"), o = e(".tpw_widget-wrap .tpw_result"),
            i = (e(window), function () {
                s()
            }), s = function () {
                n.on("submit", function () {
                    return false;
                })
            };
        i()
    };

})(jQuery);