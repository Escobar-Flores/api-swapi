'use strict';

// Obtener 9 imágenes random

var container = document.querySelector('.img-container-js');
for (var i = 0; i < 9; i++) {
  var numberRandom = Math.floor(Math.random() * 87 + 1);
  var images = 'https://starwars-visualguide.com/assets/img/characters/' + numberRandom + '.jpg';

  var newImage = document.createElement('img');
  newImage.setAttribute('src', images);
  newImage.setAttribute('class', 'img-thumbnail');
  newImage.setAttribute('class', 'img-style');
  newImage.setAttribute('draggable', 'true');
  newImage.setAttribute('id', numberRandom);
  container.appendChild(newImage);
};
// función búsqueda : 
var searchButton = $('.search-js');
var input = $('.input-js');
console.log(input);
console.log(searchButton);

searchButton.on('click', function () {
  console.log('click');
  var valueInput = input.val();
  console.log(valueInput);
  // funcion para imprimir los personajes : 
  var getInfo = function getInfo() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(this.responseText);
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
  };
  console.log(getInfo());
  var printFigure = function printFigure(data) {
    console.log(data);
    data.forEach(function (element, index) {
      var image = 'https://starwars-visualguide.com/assets/img/characters/' + (index + 1) + '.jpg';
      var newImage = document.createElement('img');
      newImage.setAttribute('src', image);
      newImage.setAttribute('name', element.name);
      newImage.setAttribute('class', 'img-thumbnail');
      newImage.setAttribute('class', 'img-style');
      // newImage.setAttribute('draggable', 'true');
      newImage.setAttribute('id', index + 1);
      container.appendChild(newImage);
    });
  };

  var handleError = function handleError(error) {
    console.log(error);
  };
});