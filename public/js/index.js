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