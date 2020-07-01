(function(exports) {
    "use strict";

    function initMap() {
        const loc =  {
            lat: 8.9798,
            lng: 7.2079
          };
      exports.map = new google.maps.Map(document.querySelector(".map"), {
        center: loc,
        zoom: 14
      });
      const marker = new google.maps.Marker({position: loc, map })
    }

    exports.initMap = initMap;
  })((this.window = this.window || {}));

  // Sticky menu background

window.addEventListener('scroll', function(){
  if(window.scrollY>150){
  document.querySelector('#navbar').style.opacity = 0.8;
  }else{
    document.querySelector('#navbar').style.opacity = 1
  }
});

  // Smooth scrolling

  $('#navbar a, .btn').on('click', function(e){
    if(this.hash !== ""){
      e.preventDefault();
      const hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 56
        }, 1000
      );
    }
  });