// Obtener 9 imágenes random
let container = document.querySelector('.img-container-js');
for (let i = 1; i < 10; i++) {
  const images = `https://starwars-visualguide.com/assets/img/characters/${i}.jpg`;

  let newImage = document.createElement('img');
  newImage.setAttribute('src', images);
  newImage.setAttribute('class', 'img-style');
  newImage.setAttribute('draggable', 'true');
  newImage.setAttribute('id', (i - 1));
  newImage.dataset.dataToggle = 'modal';
  newImage.dataset.dataTarget = '#exampleModalCenter';
  container.appendChild(newImage);
};

// función que trae los datos
const searchButton = $('.search-js');
// const input = $('.input-js');

searchButton.on('click', () => {
  // let valueInput = input.val();

  // Función para imprimir los personajes  
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(this.responseText);      
      let result = data.results;
      let long = data.results.length;
      xhr.onload = printFigure(result);
      xhr.onerror = handleError;
    };
  };
  xhr.open('GET', 'https://swapi.co/api/people/');
  xhr.send();
  
  let printFigure = (data) => {
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
    const collectionImages = document.getElementsByClassName('img-style');

    for (let i = 0; i < collectionImages.length; i++) {
      const element = collectionImages[i];
      element.addEventListener('click', function() {
        let id = element.id;          
        let name = data[id].name;
        let height = data[id].height;
        let hairColor = data[id].hair_color;
        let birthYear = data[id].birth_year;
        let gender = data[id].gender;
 
        let title = document.getElementById('title');
        let heightModal = document.getElementById('height');
        let hairColorModal = document.getElementById('hairColor');
        let birthYearModal = document.getElementById('birthYear');
        let genderModal = document.getElementById('gender');

        title.innerHTML = name;
        heightModal.innerHTML = height;
        hairColorModal.innerHTML = hairColor;
        birthYearModal.innerHTML = birthYear;
        genderModal.innerHTML = gender;

        $('#exampleModalCenter').modal(element);    
      });
    };
  };

  let handleError = error => {
    console.log(error);
  };
});