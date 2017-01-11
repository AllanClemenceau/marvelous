// var app = new Vue({
//   el: '#myContent',
//   data: {
//     message: 'Hello Vue!'
//   }
// })

var t, add, pages, container;

add = $("#add");
container = $("#main-container");
pages = [
    "https://s-media-cache-ak0.pinimg.com/originals/a7/5b/af/a75baf14f46cfe98fea7245226015dc3.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/f7/5f/e9/f75fe9d6f289c1f3b5382f832ff35477.jpg",
    "https://images.icanvas.com/list-hero/comics.jpg"
];
t = new TimelineLite({paused:true});

function loopPages(url, i){
  var page = $("<div/>", {
    class : "page",
    style: "background-image:url('" + url + "');background-repeat:no-repeat;background-size:cover"
  }).appendTo(container);
  t.to(page, 0.5, {transform: 'translateY(100vh)', ease:Power1.easeOut}, (i*0.5));
}

function addPages(){
  pages.forEach(loopPages);
  t.play();
}

add.click(addPages);
