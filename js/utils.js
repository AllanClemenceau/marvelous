// var app = new Vue({
//   el: '#myContent',
//   data: {
//     message: 'Hello Vue!'
//   }
// })

var t, pages, container, redPanel, title, titleLa, titleOus, isTitleVisible, isStapeThree;

container = $("#main-container");
redPanel = $("#red-panel");
title = $("#main-container .title");
titleLa = $("#main-container .title-la");
titleOus = $("#main-container .title-ous");

isTitleVisible = false;
isStapeOne = false;
isStapeTwo = false;
isStapeThree = false;
pages = [
    "http://www.can-developing.com/marvelous/img/marvelScreen2.jpg",
    "http://www.can-developing.com/marvelous/img/marvelScreen3.jpg",
    "http://www.can-developing.com/marvelous/img/marvelScreen4.jpg",
    "http://www.can-developing.com/marvelous/img/marvelScreen5.png",
    "http://www.can-developing.com/marvelous/img/marvelScreen1.gif",
    "http://www.can-developing.com/marvelous/img/marvelScreen6.jpg",
    "http://www.can-developing.com/marvelous/img/marvelScreen7.jpg",
    "http://www.can-developing.com/marvelous/img/marvelScreen2.gif",
    "http://www.can-developing.com/marvelous/img/marvelScreen8.jpg",
    "http://www.can-developing.com/marvelous/img/marvelScreen9.jpg",
    "http://www.can-developing.com/marvelous/img/marvelScreen10.jpg",
    "http://www.can-developing.com/marvelous/img/marvelScreen11.jpg",
    "http://www.can-developing.com/marvelous/img/marvelScreen3.gif",
    "http://www.can-developing.com/marvelous/img/marvelScreen12.jpg",
    "http://www.can-developing.com/marvelous/img/marvelScreen13.jpg",
    "http://www.can-developing.com/marvelous/img/marvelScreen14.jpg",
    "http://www.can-developing.com/marvelous/img/marvelScreen4.gif",
    "http://www.can-developing.com/marvelous/img/marvelScreen15.jpg",
    "http://www.can-developing.com/marvelous/img/marvelScreen16.jpg",
    "http://www.can-developing.com/marvelous/img/marvelScreen17.jpg",
    "http://www.can-developing.com/marvelous/img/marvelScreen18.jpg",
    "http://www.can-developing.com/marvelous/img/marvelScreen5.gif",
    "http://www.can-developing.com/marvelous/img/marvelScreen19.jpg",
    "http://www.can-developing.com/marvelous/img/marvelScreen20.jpg",
    "http://www.can-developing.com/marvelous/img/marvelScreen21.jpg",
    "http://www.can-developing.com/marvelous/img/marvelScreen22.jpg",
    "http://www.can-developing.com/marvelous/img/marvelScreen23.jpg",
    "http://www.can-developing.com/marvelous/img/marvelScreen24.jpg",
];

function simulateResize() {
    var evt = document.createEvent('UIEvents');
    evt.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(evt);
}

t = new TimelineLite({paused:true});

function loopPages(url, i, array){
    var startingPoint = (i*0.5 - (0.5/array.length)*i*10);
    // var page = $("<div/>", {
    //   class : "page",
    //   style: "background-image:url('" + url + "');background-repeat:no-repeat;background-size:cover"
    // }).appendTo(container);

    // if (i > (array.length/(5/4)) && !isTitleVisible) {
    //     isTitleVisible = true;
    //     startingPoint = (i*0.5 - (0.5/array.length)*i*16);
    //     t.fromTo(titleLa, 0.5, {opacity: 0}, {opacity: 1}, startingPoint);
    //     t.fromTo(titleOus, 0.5, {opacity: 0}, {opacity: 1}, startingPoint);
    // }  else if (i > (array.length/(3/2))) {
    //     isStapeThree = true;
    //     startingPoint = (i*0.5 - (0.5/array.length)*i*16);
    //     t.to(redPanel, 0.5, {opacity: 1, ease:SlowMo.easeOut}, startingPoint);
    // } else if (i > (array.length/3)) {
    //     startingPoint = (i*0.5 - (0.5/array.length)*i*14);
    //     if (i < (array.length/(3/2))) {
    //         t.fromTo(title, 1, {opacity: 0}, {opacity: 1}, startingPoint);
    //     }
    //     t.to(redPanel, 0.5, {opacity: 0.75, ease:SlowMo.easeOut}, startingPoint);
    // } else if (i > (array.length/(1/3))) {
    //     startingPoint = (i*0.5 - (0.5/array.length)*i*12);
    // } else if (i == 0) {
    //     t.to(redPanel, 1.5, {opacity: 0.5, backgroundColor: '#e23636', ease:SlowMo.easeOut}, 0.3);
    // }
    $('#marvelImages > .marvelImage:nth-child(' + i + ')').addClass('translate');
    $('#red-panel, #main-container .title, #main-container .title-la, #main-container .title-ous').addClass('fadeIn');

    // t.to($('#marvelImages > .marvelImage:nth-child(' + i + ')'), (0.5 - (0.5/array.length)*i), {transform: 'translateY(100vh)', z:0.1, ease:Power1.easeOut}, startingPoint);
    // console.log((i*0.5 - (0.5/array.length)*i));
}

function addPages(){
  $('#marvelImages > .marvelImage').addClass('translate');
  $('#red-panel, #main-container .title, #main-container .title-la, #main-container .title-ous').addClass('fadeIn');
  setTimeout(function(){
  t.to(title, 2, {transform: 'scale(0.15)', top: '-50%'}, 0);
  t.to('#headerSvg > path' , 0, {fill: '#e23636'}, 0);
  t.fromTo('#headerSvg', 2, {top: '-500px'}, {top : '0'}, 0);
  t.fromTo('#header > .title', 2, {top: '-500px'}, {top : '15%'}, 0);
  t.to('#headerSvg > path', 2.5, {clearProps: 'fill'}, 0);
  t.to(container, 1, {opacity: '0'}, 0);
  t.to(container, 1, {display: 'none'}, 0);
  t.to("#header > svg#star > path", 0, {fill: '#e23636', stroke: '#fff', strokeWidth: '1', ease: Power1.easeIn}, 0);
  t.fromTo('#header > svg#star', 2, {top: '100vh'}, {rotation: '+=1080', top : '100px'}, 0);
  // t.to("#header > svg#star > path", 0.25, {fill: '#20346F', stroke: '#20346F', ease: Power1.easeOut});
  t.to("#header > svg#star > path", 0.5, {clearProps: 'fill, stroke, strokeWidth', onComplete:simulateResize()});
  // t.to(container, 0, {display: 'none'});
  t.play();
      // $('#headerSvg > path,
      //     #headerSvg,
      //     #header > .title,
      //     #headerSvg > path,
      //     #main-container,
      //     #header > svg#star > path,
      //     #header > svg#star
      // ').addClass('phaseTwo');
  }, 6640);
}

function parallax(e, target, layer) {
    var layer_coeff = 10 / layer;
    var x = ($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
    var y = ($(window).height() - target.offsetHeight) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff;
    var t1 = new TimelineLite();
    t1.to($(target), 1, {left: x, top: y});
};

$('.heroMap').click(function() {
    var id = $(this).attr('id').replace("map-", "");
    var t2 = new TimelineLite();
    if ($('#menu').hasClass('menu--open')) {
        $('#menu .trigger').click();
    }
    t2.to('.morph-shape svg path', 1, {fill: '#20346F', ease: Power1.easeIn}, 0);
    t2.to('.trigger', 1, {color: '#FFF', ease: Power1.easeIn}, 0);
    t2.to('.menu__items li a', 0, {color: '#FFF', background: '#20346F', ease: Power1.easeIn}, 1);
    t2.to('#' + id, 1, {transform: 'scale(20)', z:0.1, filter: 'brightness(0) invert(1)', ease: Power1.easeIn}, 0)
    t2.from('#' + id + 'Box', 0, {top: '0', display: 'inherit', opacity: '0'})
        .to('#' + id + 'Box', 0.5, {top: '0', display: 'inherit', opacity: '1'}, 1);
});

$('.close').click(function() {
    var id = $(this).parent().attr('id').replace("Box", "");
    var t3 = new TimelineLite();
    if ($('#menu').hasClass('menu--open')) {
        $('#menu .trigger').click();
    }
    t3.to('.morph-shape svg path', 1, {clearProps: 'fill', ease: Power1.easeIn}, 0);
    t3.to('.trigger', 1, {color: '#20346F', ease: Power1.easeIn}, 0);
    t3.to('.trigger', 0, {clearProps: 'color', ease: Power1.easeIn}, 1);
    t3.to('.menu__items li a', 0, {clearProps: 'color, background', ease: Power1.easeIn}, 1);
    t3.from('#' + id + 'Box', 0, {top: '0', display: 'inherit', opacity: '1'})
        .to('#' + id + 'Box', 0.5, {top: '0', display: 'none', opacity: '0'}, 0);
    t3.to('#' + id, 1, {transform: 'scale(1)', z:0.1, ease: Power1.easeOut}, 0.5)
      .to('#' + id, 0, {clearProps: 'filter, transform'}, 1.5);
});

$(function() {
    var x = 0.5;
    var y = 0.5;
    for (i=0;i<=24; i++) {
      console.log(x);
      y = y - 0.1;
        // console.log(y);
      x = Math.round((x + y) * 100) / 100;
    }
    Pace.on('done', function() {
        addPages();
    });
    // if ('ontouchstart' in window || navigator.maxTouchPoints) {
        $('#scene').mousemove(function (e) {
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
			reset : this.pathEl.attr('d'),
			active : this.shapeEl.getAttribute('data-morph-active')
		};

		this.isOpen = false;

		this.initEvents();
	};

	SVGMenu.prototype.initEvents = function() {
		this.trigger.addEventListener('click', this.toggle.bind(this));
	};

	SVGMenu.prototype.toggle = function() {
		var self = this;

		if(this.isOpen) {
			$(this.el).removeClass('menu--open');
		}
		else {
			setTimeout(function() {$(self.el).addClass('menu--open');}, 175);
		}

		this.pathEl.stop().animate({'path' : this.paths.active}, 150, mina.easein, function() {
			self.pathEl.stop().animate({'path' : self.paths.reset}, 800, mina.elastic);
		} );

		this.isOpen = !this.isOpen;
	};
	new SVGMenu( document.getElementById('menu'));
})();
