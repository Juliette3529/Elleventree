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
    if (document.getElementsByClassName('trash swiper-slide-next').item(0) != null) {
      getDataForSlide("trash");
    }
    if (document.getElementsByClassName('earth swiper-slide-next').item(0) != null) {
      getDataForSlide("earth");
    }
    if (document.getElementsByClassName('water swiper-slide-next').item(0) != null) {
      getDataForSlide("water");
    }
    if (document.getElementsByClassName('food swiper-slide-next').item(0) != null) {
      getDataForSlide("food");
    }
    if (document.getElementsByClassName('money swiper-slide-next').item(0) != null) {
      getDataForSlide("money");
    }
    if (document.getElementsByClassName('petrole swiper-slide-next').item(0) != null) {
      getDataForSlide("petrole");
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