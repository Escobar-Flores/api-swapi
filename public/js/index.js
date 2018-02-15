'use strict';

// Obtener 9 imágenes random
var container = document.querySelector('.img-container-js');
for (var i = 1; i < 10; i++) {
  var images = 'https://starwars-visualguide.com/assets/img/characters/' + i + '.jpg';

  var newImage = document.createElement('img');
  newImage.setAttribute('src', images);
  newImage.setAttribute('class', 'img-style');
  newImage.setAttribute('draggable', 'true');
  newImage.setAttribute('id', i - 1);
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
      var result = data.results;
      var long = data.results.length;
      xhr.onload = printFigure(result);
      xhr.onerror = handleError;
    };
  };
  xhr.open('GET', 'https://swapi.co/api/people/');
  xhr.send();

  var printFigure = function printFigure(data) {
    // data.forEach((element, index) => {
    //   let image = `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`;
    //   let newImage = document.createElement('img');
    //   newImage.setAttribute('src', image);
    //   newImage.setAttribute('name', element.name);
    //   newImage.setAttribute('class', 'img-style');
    //   newImage.setAttribute('id', index + 1);
    //   container.appendChild(newImage);
    // });

    // Modal
    var collectionImages = document.getElementsByClassName('img-style');

    var _loop = function _loop(_i) {
      var element = collectionImages[_i];
      element.addEventListener('click', function () {
        var id = element.id;
        var name = data[id].name;
        var height = data[id].height;
        var hairColor = data[id].hair_color;
        var birthYear = data[id].birth_year;
        var gender = data[id].gender;

        var title = document.getElementById('title');
        var heightModal = document.getElementById('height');
        var hairColorModal = document.getElementById('hairColor');
        var birthYearModal = document.getElementById('birthYear');
        var genderModal = document.getElementById('gender');

        title.innerHTML = name;
        heightModal.innerHTML = height;
        hairColorModal.innerHTML = hairColor;
        birthYearModal.innerHTML = birthYear;
        genderModal.innerHTML = gender;

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