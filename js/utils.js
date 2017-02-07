// var app = new Vue({
//   el: '#myContent',
//   data: {
//     message: 'Hello Vue!'
//   }
// })

function simulateResize() {
    var evt = document.createEvent('UIEvents');
    evt.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(evt);
}

t = new TimelineLite({
    paused: true
});


function addPages() {
    $('#marvelImages > .marvelImage').addClass('translate');
    $('#red-panel, #main-container .title, #main-container .title-la, #main-container .title-ous').addClass('fadeIn');
    $('#headerSvg > path, #headerSvg, #header > .title, #headerSvg > path, #main-container, #header > svg#star > path, #header > svg#star').addClass('phaseTwo');
    t.to('#headerSvg > path', 0, {
        fill: '#e23636'
    }, 0);
    t.to('#headerSvg > path', 0.5, {
        clearProps: 'fill'
    }, 6.75);
    t.to("#header > svg#star > path", 0, {
        fill: '#e23636',
        stroke: '#fff',
        strokeWidth: '1',
        ease: Power1.easeIn
    }, 0);
    t.to("#header > svg#star > path", 0.5, {
        clearProps: 'fill, stroke, strokeWidth',
        onComplete: simulateResize()
    }, 6.75);
    t.play();
}

function parallax(e, target, layer) {
    var layer_coeff = 10 / layer;
    var x = ($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
    var y = ($(window).height() - target.offsetHeight) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff;
    var t1 = new TimelineLite();
    t1.to($(target), 1, {
        left: x,
        top: y
    });
};

$('.heroMap').click(function() {
    var id = $(this).attr('id').replace("map-", "");
    var t2 = new TimelineLite();
    if ($('#menu').hasClass('menu--open')) {
        $('#menu .trigger').click();
    }
    t2.to('.morph-shape svg path', 1, {
        fill: '#20346F',
        ease: Power1.easeIn
    }, 0);
    t2.to('.trigger', 1, {
        color: '#FFF',
        ease: Power1.easeIn
    }, 0);
    t2.to('.menu__items li a', 0, {
        color: '#FFF',
        background: '#20346F',
        ease: Power1.easeIn
    }, 1);
    $('.inFront').removeClass('inFront');
    $('#' + id + 'Box, #' + id).addClass('ouvert').removeClass('ferme');
});

$('.close').click(function() {
    var id = $(this).parent().attr('id').replace("Box", "");
    var t3 = new TimelineLite();
    if ($('#menu').hasClass('menu--open')) {
        $('#menu .trigger').click();
    }
    t3.to('.morph-shape svg path', 1, {
        clearProps: 'fill',
        ease: Power1.easeIn
    }, 0);
    t3.to('.trigger', 1, {
        color: '#20346F',
        ease: Power1.easeIn
    }, 0);
    t3.to('.trigger', 0, {
        clearProps: 'color',
        ease: Power1.easeIn
    }, 1);
    t3.to('.menu__items li a', 0, {
        clearProps: 'color, background',
        ease: Power1.easeIn
    }, 1);
    $('#' + id + 'Box, #' + id).addClass('ferme').addClass('inFront').removeClass('ouvert');
});

$(function() {
    // var x = 0.5;
    // var y = 0.5;
    // for (i = 0; i <= 24; i++) {
    //     console.log(x);
    //     y = y - 0.03;
    //     // console.log(y);
    //     x = Math.round((x + y) * 100) / 100;
    // }
    Pace.on('done', function() {
        addPages();
    });
    // if ('ontouchstart' in window || navigator.maxTouchPoints) {
    $('#scene').mousemove(function(e) {
        parallax(e, this, 2);
        // parallax(e, document.getElementById('layer-two'), 2);
    });
    // }

    $('map').imageMapResize();
});


(function() {
    function SVGMenu(el, options) {
        this.el = el;
        this.init();
    }

    SVGMenu.prototype.init = function() {
        this.trigger = this.el.querySelector('button.trigger');
        this.shapeEl = this.el.querySelector('span.morph-shape');

        var s = Snap(this.shapeEl.querySelector('svg'));
        this.pathEl = s.select('path');
        this.paths = {
            reset: this.pathEl.attr('d'),
            active: this.shapeEl.getAttribute('data-morph-active')
        };

        this.isOpen = false;

        this.initEvents();
    };

    SVGMenu.prototype.initEvents = function() {
        this.trigger.addEventListener('click', this.toggle.bind(this));
    };

    SVGMenu.prototype.toggle = function() {
        var self = this;

        if (this.isOpen) {
            $(this.el).removeClass('menu--open');
        } else {
            setTimeout(function() {
                $(self.el).addClass('menu--open');
            }, 175);
        }

        this.pathEl.stop().animate({
            'path': this.paths.active
        }, 150, mina.easein, function() {
            self.pathEl.stop().animate({
                'path': self.paths.reset
            }, 800, mina.elastic);
        });

        this.isOpen = !this.isOpen;
    };
    new SVGMenu(document.getElementById('menu'));
})();
