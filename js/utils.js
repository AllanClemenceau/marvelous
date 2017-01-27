// var app = new Vue({
//   el: '#myContent',
//   data: {
//     message: 'Hello Vue!'
//   }
// })

var t, pages, container, redPanel, title, titleLa, titleOus, isTitleVisible, isStapeThree;

container = $("#main-container");
redPanel = $("#red-panel");
title = $("#title");
titleLa = $("#title-la");
titleOus = $("#title-ous");
isTitleVisible = false;
isStapeOne = false;
isStapeTwo = false;
isStapeThree = false;
pages = [
    "http://image.noelshack.com/fichiers/2014/17/1398182340-page-3.jpg",
    "http://4.bp.blogspot.com/-AwTsFKz_62g/T8aFqQ2-SHI/AAAAAAAAGRY/xba9PeZm5wE/s1600/wallpaper_vintage_comics_ironman.jpg",
    "http://wallpapercave.com/wp/8oG4DbU.jpg",
    "https://sayruhlong.files.wordpress.com/2015/05/img_0082.jpg?w=2484&h=1920",
    "https://fsmedia.imgix.net/f6/2c/84/4b/c4fa/4566/9d7a/49e020330bb0/deadpool-comic-spreadpng.png",
    "http://www.opengavel.com/wp-content/uploads/2014/06/black-panther-marvel-wallpaper-3.jpg",
    "http://ekladata.com/_fVpNyheQnr2KVVAIqJAgGbwMFM.jpg",
    "http://evilavatar.com/images/thumbs/comics/SI-Splash1.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/a7/5b/af/a75baf14f46cfe98fea7245226015dc3.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/f7/5f/e9/f75fe9d6f289c1f3b5382f832ff35477.jpg",
    "https://images.icanvas.com/list-hero/comics.jpg",
    "https://s-media-cache-ak0.pinimg.com/564x/b2/6a/96/b26a962900cbb31076db83de5e372d8a.jpg",
    "http://www.collectededitions.com/marvel/mm/deathlok/images/MSPOT033017_col.jpg",
    "https://2.bp.blogspot.com/_KypEs8uC3b4/TQjhU5OQjyI/AAAAAAAAAlg/vInP5BEo4II/s1600/Special_Marvel_Ed_16-05.jpg",
    "https://s-media-cache-ak0.pinimg.com/564x/2a/58/8b/2a588b8e424444c50d47f4e7d6648ee1.jpg",
    "http://vignette2.wikia.nocookie.net/marveldatabase/images/7/73/Fantastic_Four_Vol_1_213_page_30.jpg/revision/latest?cb=20101206042921",
    "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Image/76294/FEB110567-02._QL80_TTD_.jpg",
    "http://vignette3.wikia.nocookie.net/marveldatabase/images/2/27/Marvel_Zombies_Vs._Army_of_Darkness_Vol_1_2_page_06.jpg/revision/latest?cb=20090513212419",
    "https://s-media-cache-ak0.pinimg.com/564x/ef/cd/fc/efcdfcf2eaf5d020e70babda39f950ee.jpg",
    "http://static1.comicvine.com/uploads/scale_large/10/100239/2849203-__addme___marvel_super_heroes_origins_v9999___page_1.jpg",
    "https://marvelitesxmen.files.wordpress.com/2012/01/ms_marvel_vol_1_46_page_12_karla_sofen_earth-616.jpg",
    "https://lh5.googleusercontent.com/-uPOrbq_1e_U/TW9w2hZ7baI/AAAAAAAAAos/aL226fn6pzk/s1600/avengers-01-page-01.jpg",
    "http://img2.wikia.nocookie.net/__cb20081222215435/marveldatabase/images/f/f9/Marvel_Zombies_Vs_Army_of_Darkness_Vol_1_5_page_20-21_Marvel_Werewolves_(Earth-7085).jpg",
    "http://www.anenglishmaninsandiego.com/wp-content/uploads/2015/10/image-Marvel-Comics-Deadpool-1-preview-page-01.jpg",
];
t = new TimelineLite({paused:true});

function loopPages(url, i, array){
  var startingPoint = (i*0.5 - (0.5/array.length)*i*10);
  var page = $("<div/>", {
    class : "page",
    style: "background-image:url('" + url + "');background-repeat:no-repeat;background-size:cover"
  }).appendTo(container);

  if (i > (array.length/(5/4)) && !isTitleVisible) {
    isTitleVisible = true;
    startingPoint = (i*0.5 - (0.5/array.length)*i*16);
    t.fromTo(titleLa, 0.5, {opacity: 0}, {opacity: 1}, startingPoint);
    t.fromTo(titleOus, 0.5, {opacity: 0}, {opacity: 1}, startingPoint);
  }  else if (i > (array.length/(3/2))) {
    isStapeThree = true;
    startingPoint = (i*0.5 - (0.5/array.length)*i*16);
    t.to(redPanel, 0.5, {opacity: 1, ease:SlowMo.easeOut}, startingPoint);
  } else if (i > (array.length/3)) {
    startingPoint = (i*0.5 - (0.5/array.length)*i*14);
    if (i < (array.length/(3/2))) {
        t.fromTo(title, 1, {opacity: 0}, {opacity: 1}, startingPoint);
    }
    t.to(redPanel, 0.5, {opacity: 0.75, ease:SlowMo.easeOut}, startingPoint);
  } else if (i > (array.length/(1/3))) {
    startingPoint = (i*0.5 - (0.5/array.length)*i*12);
  } else if (i == 0) {
    t.to(redPanel, 1.5, {opacity: 0.5, backgroundColor: '#e23636', ease:SlowMo.easeOut}, 0.3);
  }

  t.to(page, (0.5 - (0.5/array.length)*i), {transform: 'translateY(100vh)', ease:Power1.easeOut}, startingPoint);
  // console.log((i*0.5 - (0.5/array.length)*i));
}

function addPages(){
  pages.forEach(loopPages);
  t.play();
  t.to(container, 1, { opacity: '0' });
  t.to(container, 0, { display: 'none' });
}

function parallax(e, target, layer) {
    var layer_coeff = 10 / layer;
    var x = ($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
    var y = ($(window).height() - target.offsetHeight) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff;
    var t1 = new TimelineLite();
    t1.to($(target), 1, {left: x, top: y});
};

$('#map-batman').click(function() {
    console.log('toto');
    var t2 = new TimelineLite();
    t2.from($('#batmanBox'), 1, {top: '100vh', display: 'inherit'})
        .to($('#batmanBox'), 1, {top: '0', display: 'inherit'});
});

$(function() {
    addPages();
    $('#canvas').mousemove(function (e) {
        parallax(e, this, 2);
        // parallax(e, document.getElementById('layer-two'), 2);
        // parallax(e, document.getElementById('layer-three'), 3);
    });

  	$('map').imageMapResize();
});
