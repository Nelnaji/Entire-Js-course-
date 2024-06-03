'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////


// not using the v3.1 because it's too slow
// request.open('GET', 'https://restcountries.com/v3.1/name/morocco');

// function qui affiche le pays
const renderCountry = function (data, className = '' ) { //important d'ajouter le = '' sinon undefined serra ajouter a la class

  const countryHTML = `   
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} Million people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name} </p>


    </div>
  </article>
`
countriesContainer.insertAdjacentHTML('beforeend', countryHTML);
countriesContainer.style.opacity = 1;

}
/*

const getCountryAndNeighbour = function(country) {
  // AjAX call country 1
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://countries-api-836d.onrender.com/countries/name/${country}`
  );
  request.send();

// display of the country

  request.addEventListener('load', function () {

    const [data] = JSON.parse(this.responseText);
    // render country 1
    renderCountry(data);
    console.log(data)

// get neighbour country with optional chaining ? 2
  const neighbour = data.borders?.[0];

  // AJAX call country 2
  


  const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
    );
    request2.send();

    request2.addEventListener('load', function(){
    // don't need to destructure it, because when using alpha the format is already good
      const data2 = JSON.parse(this.responseText);

      renderCountry(data2, 'neighbour' );

    })

});}

// the AJAX call is made, but whatever the request is answered first will be displayed first

getCountryAndNeighbour('morocco');

// when we want multiple function to run asynchronuously in sequence, we call it callback Hell

*/

// new way of making api calls

const request = fetch('https://countries-api-836d.onrender.com/countries/name/morocco')

// simply used arrow functions
const getCountryData = function(country) {

  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`).then(response => response.json()).then( ([data]) =>  renderCountry(data));

};

getCountryData('morocco');