!function (e) {
    var t = function (t) {
        var n, o, i = this, s = t.obj, a = t.optionType || 0, c = t.showType || 0, r = t.visible || 6, l = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), p = e('<span class="websters-select__item"></span>'), d = e('<div class="websters-select"></div>'), u = e(window), f = e("body"), h = !1, w = function () {
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
            var t = e("select"), i = e("<ul></ul>"), a = (u.scrollTop(), d.offset()), l = 0, p = s.find("option:selected").index(), w = Math.round(1e3 * Math.random());
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
        var t = e(".tpw_widget-wrap"), n = e(".tpw_widget>form"), o = e(".tpw_widget-wrap .tpw_result"), i = (e(window), function () {
            s()
        }), s = function () {
            n.on("submit", function () {
                return false;
            })
        };
        i()
    };
    e(function () {
        e(".tpw_widget-wrap").each(function () {
            new n
        })
    })
}(jQuery);

!function ($) {
    $(function () {
        var TPWC = function () {

            //private properties
            var _self = this,
                _tpw_widget = $('.tpw_widget-wrap'),
                _tpw_widget_form = $('.tpw_widget>form'),
                _tpw_widget_languages = $('.tpwc-lang'),
                _tpw_widget_deltypes = $('.tpwc-delivery'),
                _tpw_current_lang = $('.tpwc-lang:checked').val(),
                _is_valid = false,

                _css_styles = '';
            _js_script = '';
            _types = [],
                _types_names = {
                    novaposhta: "Новая почта",
                    delivery_auto: "Деливери Авто",
                    ukrposhta: "УкрПочта",
                    intime: "Ин-Тайм",
                    autolux: "Автолюкс"
                },
                _types_names_ua = {
                    novaposhta: "Нова пошта",
                    delivery_auto: "Делівери Авто",
                    ukrposhta: "УкрПошта",
                    intime: "Ін-Тайм",
                    autolux: "Автолюкс"
                },
                _window = $(window);

            //private methods
            var _init = function () {
                    _onEvents();
                    _tpw_widget_languages.trigger('click');
                },
                _setLanguage = function (lang) {
                    if (_tpw_current_lang == 'ru') {
                        _tpw_widget_form.attr('data-lang', 'ru');
                        $('.tpw-row button').text('Отследить');
                        $('.tpw_track').attr('placeholder', 'Отследить посылку');
                        $('.linktoservice').text('Отследить посылку');
                    } else {
                        _tpw_widget_form.attr('data-lang', 'ua');
                        $('.tpw-row button').text('Відстежити');
                        $('.tpw_track').attr('placeholder', 'Відстежити вантаж');
                        $('.linktoservice').text('Відстежити вантаж');
                    }
                },
                _setSelect = function (types) {
                    if (types.length <= 0) {
                        _is_valid = false;
                        if (_tpw_current_lang == 'ru') {
                            $('.linktoservice').text('Отследить посылку');
                        } else {
                            $('.linktoservice').text('Відстежити вантаж');
                        }
                        $('.websters-select').parent('.tpw-row').css('display', 'none');

                    } else if (types.length == 1) {
                        _is_valid = true;
                        if (_tpw_current_lang == 'ru') {
                            $('.linktoservice').text('Отследить посылку ' + _types_names[types[0]]);
                        } else {
                            $('.linktoservice').text('Відстежити вантаж ' + _types_names_ua[types[0]]);
                        }
                        $('.websters-select').parent('.tpw-row').css('display', 'none');

                    } else {
                        _is_valid = true;
                        if (_tpw_current_lang == 'ru') {
                            $('.linktoservice').text('Отследить посылку');
                        } else {
                            $('.linktoservice').text('Відстежити вантаж');
                        }
                        $('.websters-select').parent('.tpw-row').css('display', 'block');
                    }

                    if (_tpw_current_lang == 'ru') {
                        $('.tpw_types').html('');
                        types.forEach(function (item, i, arr) {
                            $('.websters-select__item').html(_types_names[item]);
                            $('.tpw_types').append('<option value="' + item + '">' + _types_names[item] + '</option>');
                        })
                    } else {
                        $('.tpw_types').html('');
                        types.forEach(function (item, i, arr) {
                            $('.websters-select__item').html(_types_names_ua[item]);
                            $('.tpw_types').append('<option value="' + item + '" >' + _types_names_ua[item] + '</option>');
                        })

                    }
                    if ($('.tpw_types option').length > 0) {
                        $('.tpw_types option').attr('selected', false);
                        $('.tpw_types option').eq(0).attr('selected', true);
                        $('.tpw_types').trigger('change');
                    }
                    $('.result-container').html('');
                },
                _onEvents = function () {
                    _tpw_widget_form.on('submit', function () {
                        return false;
                    });

                    $('.generate_code').on('click', function () {
                        if (!_is_valid) {
                            $('.result-container').html('');
                            alert('Не выбраны службы доставки!');
                            return false;
                        }
                        $('.result-container').html('<textarea class="tpwc_result" readonly></textarea>');
                        var _clone = $('.tpw_widget-wrap').clone();
                        _clone.wrap('<div class="tpres"></div>');
                        _clone.find('.tpw_types').unwrap();
                        _clone.find('.websters-select__arrow').remove();
                        _clone.find('.websters-select__item').remove();
                        _clone.wrap('<div class="tpw_widget-wrap"></div>');
                        _clone.parent('.tpw_widget-wrap').prepend(_css_styles).prepend(_js_script);
                        $('.tpwc_result').text(_clone.parent('.tpw_widget-wrap').html());
                        return false;
                    });
                    _tpw_widget_languages.on('click', function () {
                        _tpw_current_lang = $(this).val();
                        _setLanguage($(this).val());
                        _types = [];
                        _tpw_widget_deltypes.each(function () {
                            if ($(this).attr('checked')) {
                                _types.push($(this).val());
                            }
                        });
                        _setSelect(_types);
                    });

                    _tpw_widget_deltypes.on('click', function () {
                        _types = [];
                        _tpw_widget_deltypes.each(function () {
                            if ($(this).attr('checked')) {
                                _types.push($(this).val());
                            }
                        });
                        _setSelect(_types);
                    });

                };


            _init();

        };

        $(function () {
            $('.constructor_wrap').each(function () {
                new TPWC();
            });
        });
    })
}(jQuery);