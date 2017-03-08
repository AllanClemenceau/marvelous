// var app = new Vue({
//   el: '#myContent',
//   data: {
//     message: 'Hello Vue!'
//   }
// })

window.viewportUnitsBuggyfill.init();

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
    t.to('body', 0, {
        backgroundColor: '#000'
    }, 1);
    t.to('#headerSvg > path', 0, {
        fill: '#e23636',
        z:0.1
    }, 0);
    t.to('#headerSvg > path', 0.5, {
        clearProps: 'fill, z'
    }, 6.75);
    t.to("#header > svg#star > path", 0, {
        fill: '#e23636',
        stroke: '#fff',
        strokeWidth: '1',
        z:0.1,
        ease: Power1.easeIn
    }, 0);
    t.to("#main-container", 0, {
        display: 'none'
    }, 6.75);
    t.to("#header > svg#star > path", 0.5, {
        clearProps: 'fill, stroke, strokeWidth, z',
        onComplete: simulateResize()
    }, 6.75);
    t.play();
}

$('.hero polygon').hover(function() {
    $(this).parent().addClass('bright');
}, function() {
    $(this).parent().removeClass('bright');
});

$('.hero polygon').click(function() {
    var id = $(this).parent().attr('id').replace("map-", "");
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


var scene = $('#scene').parallax();
var width = window.width ? window.width : $(window).width();
var height = window.innerHeight ? window.innerHeight : $(window).height();
var currentRatio = width/height;

// if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
//     $('.hero').addClass('iOS');
// }

// if (Hammer.HAS_TOUCHEVENTS) {
//     alert('toto');
// }

// Pretty simple huh?
// scene.parallax();

// Check for orientation support.
// setTimeout(function() {
// 	if (scene.data('mode') === 'cursor') {
//       alert('tata');
// 	}
// },1000);

var isAccelerationDevice = false;
window.addEventListener("deviceorientation", function(event) {
  if (event.alpha !== null || event.beta !== null || event.gamma !== null) {
      isAccelerationDevice = true;
  }
}, true);

$(function() {
    Pace.on('done', function() {
        addPages();
        scene.parallax();
        if (width < height) {
            $('#scene, .layer').css({'height' : '150vh', 'width' : 'calc(150vh * 1.6)'});
            $('.parallaxContainer').css({'top' : '-26vh', 'left' : 'calc(-55.5vh * 1.6)'});
            if (isAccelerationDevice) {
                scene.parallax('scalar', 25, 12);
            } else {
                scene.parallax('scalar', 70, 20);
            }
        } else {
            if (height < (width / 1.6)) {
                $('#scene, .layer').css({'width' : '150vw', 'height' : 'calc(150vw / 1.6)'});
                $('.parallaxContainer').css({'top' : '-20vw', 'left' : 'calc(-37vw / 1.6)'});
                if (isAccelerationDevice) {
                    scene.parallax('scalar', 14, 20);
                } else {
                    scene.parallax('scalar', 30 , 35);
                }
            } else {
                $('#scene, .layer').css({'height' : '150vh', 'width' : 'calc(150vh * 1.6)'});
                $('.parallaxContainer').css({'top' : '-25vh', 'left' : 'calc(-35vh * 1.6)'});
                if (isAccelerationDevice) {
                    scene.parallax('scalar', 8, 8);
                } else {
                    scene.parallax('scalar', 45, 30);
                }
            }
        }


        $( window ).resize(function() {
            width = window.width ? window.width : $(window).width();
            height = window.innerHeight ? window.innerHeight : $(window).height();

            if (width < height) {
                // console.log('bim');
                $('#scene, .layer').css({'height' : '150vh', 'width' : 'calc(150vh * 1.6)'});
                $('.parallaxContainer').css({'top' : '-26vh', 'left' : 'calc(-55.5vh * 1.6)'});
                if (isAccelerationDevice) {
                    scene.parallax('scalar', 25, 12);
                } else {
                    scene.parallax('scalar', 70, 20);
                }
            } else {
                if (height < (width / 1.6)) {
                    // console.log('bam');
                    $('#scene, .layer').css({'width' : '150vw', 'height' : 'calc(150vw / 1.6)'});
                    $('.parallaxContainer').css({'top' : '-20vw', 'left' : 'calc(-37vw / 1.6)'});
                    if (isAccelerationDevice) {
                        scene.parallax('scalar', 14, 20);
                    } else {
                        scene.parallax('scalar', 30 , 35);
                    }
                } else {
                    // console.log('boum');
                    $('#scene, .layer').css({'height' : '150vh', 'width' : 'calc(150vh * 1.6)'});
                    $('.parallaxContainer').css({'top' : '-25vh', 'left' : 'calc(-35vh * 1.6)'});
                    if (isAccelerationDevice) {
                        scene.parallax('scalar', 8, 8);
                    } else {
                        scene.parallax('scalar', 45, 30);
                    }
                }
            }
        });
    });
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
