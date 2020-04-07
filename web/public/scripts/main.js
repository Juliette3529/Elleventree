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
      slideChange: SlideActive,
    },
  });
  function SlideActive() {
    //recup class des next slides
    // envoyer pour chaque class le json qui convient
    if (document.getElementsByClassName('trash swiper-slide-next').item(0) != null) {
      //trouver numero de la slide pour mettre le 1 comme ref id
      getDataForSlide("trash");
    }
    if (document.getElementsByClassName('earth swiper-slide-next').item(0) != null) {
      //trouver numero de la slide pour mettre le 1 comme ref id
      getDataForSlide("earth");
    }
    console.log("page changée");
  }
  async function getJsonAsync(url, myInit, type) {
    let response = await fetch(url, myInit);
    let data = await response.json();
    for (var key in data) {
      $('.title').text(data[type].title);
      $('.number').text(data[type].numberKey);
      $('.text').text(data[type].text);
      $('.background-swiper-slide').css("background-image", "url(" + data[type].pic + ")");
    }
    return data;
  }
  function getDataForSlide(type) {
    var myHeaders = new Headers();
    var myInit = {
      method: 'GET',
      headers: myHeaders,
      mode: 'no-cors',
      cache: 'default'
    };
    getJsonAsync('public/data/json/informations.json', myInit, type)
      .then(function (data) {
      });
  }

});