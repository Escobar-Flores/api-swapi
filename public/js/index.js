'use strict';

// Obtener 9 imágenes random
var container = document.querySelector('.img-container-js');
for (var i = 0; i < 9; i++) {
  var numberRandom = Math.floor(Math.random() * 87 + 1);
  var images = 'https://starwars-visualguide.com/assets/img/characters/' + numberRandom + '.jpg';

  var newImage = document.createElement('img');
  newImage.setAttribute('src', images);
  newImage.setAttribute('class', 'img-style');
  newImage.setAttribute('draggable', 'true');
  newImage.setAttribute('id', numberRandom);
  newImage.dataset.dataToggle = 'modal';
  newImage.dataset.dataTarget = '#exampleModalCenter';
  container.appendChild(newImage);
};

// función que trae los datos
var searchButton = $('.search-js');
// const input = $('.input-js');

searchButton.on('click', function () {
  // let valueInput = input.val();

  // Función para imprimir los personajes  
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(this.responseText);
      console.log(data);

      var result = data.results;
      console.log(result);
      var long = data.results.length;
      console.log(long);
      xhr.onload = printFigure(result);
      xhr.onerror = handleError;
    };
  };
  xhr.open('GET', 'https://swapi.co/api/people/');
  xhr.send();

  var printFigure = function printFigure(data) {
    console.log(data);
    data.forEach(function (element, index) {
      var image = 'https://starwars-visualguide.com/assets/img/characters/' + (index + 1) + '.jpg';
      var newImage = document.createElement('img');
      newImage.setAttribute('src', image);
      newImage.setAttribute('name', element.name);
      newImage.setAttribute('class', 'img-style');
      newImage.setAttribute('id', index + 1);
      container.appendChild(newImage);
    });

    // Modal
    var collectionImages = document.getElementsByClassName('img-style');

    var _loop = function _loop(_i) {
      var element = collectionImages[_i];
      element.addEventListener('click', function () {
        var id = element.id;
        var uri = 'https://swapi.co/api/people/' + id;
        var name = data.name;

        console.log(uri);
        $('#exampleModalCenter').modal(element);
      });
    };

    for (var _i = 0; _i < collectionImages.length; _i++) {
      _loop(_i);
    };
  };

  var handleError = function handleError(error) {
    console.log(error);
  };
});