// Obtener 9 imágenes random

let container = document.querySelector('.img-container-js');
for (let i = 0; i < 9; i++) {
  let numberRandom = Math.floor((Math.random() * 87) + 1);
  const images = `https://starwars-visualguide.com/assets/img/characters/${numberRandom}.jpg`;

  let newImage = document.createElement('img');
  newImage.setAttribute('src', images);
  newImage.setAttribute('class', 'img-thumbnail');
  newImage.setAttribute('class', 'img-style');
  newImage.setAttribute('draggable', 'true');
  newImage.setAttribute('id', numberRandom);
  container.appendChild(newImage);
};
// función que trae los datos : 
const searchButton = $('.search-js');
const input = $('.input-js');
console.log(input);
console.log(searchButton);

searchButton.on('click', () => {
  console.log('click');
  let valueInput = input.val();
  console.log(valueInput);
  // funcion para imprimir los personajes : 
  let getInfo = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(this.responseText);
        let result = data.results;
        console.log(result);
        let long = data.results.length;
        console.log(long);
        xhr.onload = printFigure(result);
        xhr.onerror = handleError;
      };
    };
    xhr.open('GET', 'https://swapi.co/api/people/');
    xhr.send();
  };
  console.log(getInfo());
  let printFigure = (data) => {
    console.log(data);
    data.forEach((element, index) => {
      let image = `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`;
      let newImage = document.createElement('img');
      newImage.setAttribute('src', image);
      newImage.setAttribute('name', element.name);
      newImage.setAttribute('class', 'img-thumbnail');
      newImage.setAttribute('class', 'img-style');
      newImage.setAttribute('id', index + 1);
      container.appendChild(newImage);
    });
  };

  let handleError = error => {
    console.log(error);
  };
});