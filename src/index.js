// Obtener 9 imágenes random

let container = document.querySelector('.img-container-js');
for (let i = 0; i < 9; i++) {  
  let numberRandom = Math.floor((Math.random() * 87) + 1);
  const images = `https://starwars-visualguide.com/assets/img/characters/${numberRandom}.jpg`;
  
  let newImage = document.createElement('img');
  newImage.setAttribute('src', images);
  newImage.setAttribute('class', 'img-style');
  newImage.setAttribute('draggable', 'true');
  newImage.setAttribute('id', numberRandom);
  container.appendChild(newImage);
};