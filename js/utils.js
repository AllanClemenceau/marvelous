// var app = new Vue({
//   el: '#myContent',
//   data: {
//     message: 'Hello Vue!'
//   }
// })

var t, pages, container, redPanel, title;

container = $("#main-container");
redPanel = $("#red-panel");
title = $("#title");
pages = [
    "https://s-media-cache-ak0.pinimg.com/originals/a7/5b/af/a75baf14f46cfe98fea7245226015dc3.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/f7/5f/e9/f75fe9d6f289c1f3b5382f832ff35477.jpg",
    "https://images.icanvas.com/list-hero/comics.jpg"
];
t = new TimelineLite({paused:true});

function loopPages(url, i, array){
  var page = $("<div/>", {
    class : "page",
    style: "background-image:url('" + url + "');background-repeat:no-repeat;background-size:cover"
  }).appendTo(container);
  t.to(page, 0.5, {transform: 'translateY(100vh)', ease:Power1.easeOut}, (i*0.5));
  if (i == 0) {
    t.to(redPanel, 1.5, {opacity: 0.5, backgroundColor: '#e23636', ease:SlowMo.easeOut}, 0);
  }
  if (i == 1) {
    t.to(title, 1, {opacity: 1, ease:SlowMo.easeOut}, 1);
  }
  console.log(array.length);
}

function addPages(){
  pages.forEach(loopPages);
  t.play();
}

$(function() {
    addPages();
});
