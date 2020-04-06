$(document).ready(function () {
  //const json = loadJsonData()
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
            //recup class des next slides
            // envoyer pour chaque class le json qui convient
          if(document.getElementsByClassName('trash swiper-slide-next').item(0) != null){

          }
      console.log("page changée");
      }
      async function getJsonAsync(url, myInit) 
      {
        let response = await fetch(url , myInit);
        let data = await response.json();
        for( var key in data) {
          console.log(data[0].title)
            $('.title').html(data[0].title);
            $('.name').html(data[0].name);
        }
        return data;
      }
      var myHeaders = new Headers();
        var myInit = { method: 'GET',
                     headers: myHeaders,
                     mode: 'no-cors',
                     cache: 'default' };
      getJsonAsync('public/data/json/informations.json', myInit)
        .then(function (data){
          console.log(data);
        }); 

});