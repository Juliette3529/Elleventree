$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
          },
          on: {
            init: function () {
              console.log('swiper initialized');
            },
            slideChange : SlideActive,
          },
      });
      function SlideActive(){
          if($(this).find('.swiper-slide-active')){
            // recup num slide
              
            //+ tard go chercher json + mets image en fond
            //  $(this).find('.swiper-slide-active').addClass
            console.log("page changée")
          }
      }
      SlideActive();
      var myHeaders = new Headers();
      var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'no-cors',
               cache: 'default' };
      fetch('public/data/json/informations.json', myInit)
      .then(function(response) {
        response.json().then(function(parsedJson) {
          console.log(parsedJson);
        })
      })
        

});