/*! Elastic border */
$(".elastic-border").each(function (t) {
    function s(t, i, o) {
        (this.x = t), (this.ix = t), (this.vx = 0), (this.cx = 0), (this.y = i), (this.iy = i), (this.cy = 0), (this.canvas = o);
    }
    function h() {
        var t = $(".elastic-border"),
            i = t.get(0).getContext("2d");
        for (a = requestAnimationFrame(h), i.clearRect(0, 0, t.width(), t.height()), i.fillStyle = l.leftColor, i.fillRect(0, 0, t.width(), t.height()), o = 0; o <= l.totalPoints - 1; o++) n[o].move();
        for (i.fillStyle = l.rightColor, i.strokeStyle = l.rightColor, i.lineWidth = 1, i.beginPath(), i.moveTo($(window).width() / 2, 0), o = 0; o <= l.totalPoints - 1; o++)
            (e = n[o]), null != n[o + 1] ? ((e.cx = (e.x + n[o + 1].x) / 2 - 1e-4), (e.cy = (e.y + n[o + 1].y) / 2)) : ((e.cx = e.ix), (e.cy = e.iy)), i.bezierCurveTo(e.x, e.y, e.cx, e.cy, e.cx, e.cy);
        if ((i.lineTo($(window).width(), $(window).height()), i.lineTo($(window).width(), 0), i.closePath(), i.fill(), l.showIndicators)) {
            for (i.fillStyle = "#2E2F36", i.beginPath(), o = 0; o <= l.totalPoints - 1; o++) (e = n[o]), i.rect(e.x - 2, e.y - 2, 4, 4);
            i.fill(), (i.fillStyle = "#fff"), i.beginPath();
            for (var o = 0; o <= l.totalPoints - 1; o++) {
                var e = n[o];
                i.rect(e.cx - 1, e.cy - 1, 2, 2);
            }
            i.fill();
        }
    }
    var n = [],
        a = null,
        l = new (function () {
            (this.totalPoints = 2), (this.viscosity = 10), (this.mouseDist = 100), (this.damping = 0.05), (this.showIndicators = !1), (this.leftColor = "#ffffff"), (this.rightColor = "#2E2F36");
        })(),
        e = 0,
        r = 0,
        i = 0,
        o = 0,
        c = 0,
        f = 0;

        (function t() {
            (f = e - i), r - o, (i = e), (o = r), setTimeout(t, 50);
        })(),
        (s.prototype.move = function () {
            this.vx += (this.ix - this.x) / l.viscosity;
            var t = this.ix - e,
                i = this.y - r,
                o = this.canvas.data("gap");
            ((0 < c && e > this.x) || (c < 0 && e < this.x)) && Math.sqrt(t * t) < l.mouseDist && Math.sqrt(i * i) < o && (this.vx = f / 8), (this.vx *= 1 - l.damping), (this.x += this.vx);
        }),
        $(window)
            .on("resize", function () {
                !(function () {
                    var t = $(".elastic-border");
                    t.get(0).getContext("2d"), cancelAnimationFrame(a), ($(".elastic-border").get(0).width = $(window).width()), ($(".elastic-border").get(0).height = $(window).height()), (n = []);
                    for (var i = t.height() / (l.totalPoints - 1), o = $(window).width() / 2, e = 0; e <= l.totalPoints - 1; e++) n.push(new s(o, e * i, t));
                    h(), t.data("gap", i);
                })();
            })
            .trigger("resize");
});

$(document).ready(function() {

    'use strict';

    /* Slide nav */

    $('.slideNav').each(function(i) {
        var sideNavTl = anime.timeline({autoplay: false});
        anime.set('.slideNav', {
            translateX: '-100%'
        });
        anime.set('.slideNav .slideNav__item', {
            translateX: '-100%'
        });
        anime.set('.slideClose', {
            translateX: '70'
        });
        sideNavTl
        .add({
            targets: '.slideOpen',
            duration: 300,
            translateX: '-300',
            opacity: 0,
            easing: 'easeInOutQuart'
        })
        .add({
            targets: '.overlay-slideNav',
            opacity: {
                value: 1,
                duration: 500,
                delay: 0
            },
            zIndex: {
                value: 1010,
                duration: 1,
                delay: 0
            }
        },'-=300')
        .add({
            targets: '.slideNav',
            translateX: 0,
            duration: 500,
            easing: 'easeInOutQuart'
        },'-=500')
        .add({
            targets: '.slideClose',
            translateX: 0,
            opacity: 1,
            rotate: 90,
            easing: 'easeInOutQuart'
        },'-=500')
        .add({
            targets: '.slideNav .slideNav__item',
            duration: 200,
            delay: anime.stagger(60),
            translateX: 0,
            easing: 'easeInOutCirc'
        },'-=1000');

        $('.btnSlideNav').on('click', function(e) {
            e.preventDefault();
            if (sideNavTl.began) {
                sideNavTl.reverse()
                sideNavTl.completed = false;
            }
            if (sideNavTl.paused) {
                sideNavTl.play()
            }
        });
    });

});