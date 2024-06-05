'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// error rendering function

const renderError = msg => {

  countriesContainer.insertAdjacentText('beforeend', msg);
  
  }
  


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


}


///////////////////////////////////////


// not using the v3.1 because it's too slow
// request.open('GET', 'https://restcountries.com/v3.1/name/morocco');

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

// const getCountryData = function(country) {

//   // country 1
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`).then(
    
//   response => {

//     if(!response.ok){
//       throw new Error(`Country not found (error: ${response.status})`)
//     }
    
//     return response.json()}

// ).then(
    
//   ([data]) =>  {
//     renderCountry(data)
//   const neighbour = data.borders?.[0]
//   // country 2 
//   return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`) 
//   }).then(response => response.json()).then(data => renderCountry(data, "neighbour")).catch( err => console.error(renderError(`Something went wrong 💥💥💥💥 ${err.message} Try again`))).finally(()=>{

//     countriesContainer.style.opacity = 1;

//   });






// };




// const getJSON = function (url,errorMsg = 'Something is wrong') {


//   return fetch(url).then(
    
//   response => {

//     if(!response.ok){
//       throw new Error(`${errorMsg} (${response.status})`)
//     }
    
//     return response.json()}

// )};


// simply used arrow functions
// const getCountryData = function(country) {

  // country 1
// getJSON(`https://countries-api-836d.onrender.com/countries/name/${country}`, 'Country not found').then( ([data]) =>  {

//     renderCountry(data)
//   const neighbour = data.borders?.[0]
//   // country 2 
//   return getJSON(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`, 'Neighbour not found')
    
// }).then(data => renderCountry(data, "neighbour")).catch( err => console.error(renderError(`Something went wrong 💥💥💥💥 ${err.message} Try again`))).finally(()=>{

//     countriesContainer.style.opacity = 1;

//   });






// };

// la method then s'execute quand la promesse est fulfilled, la methode catch s'execute quand la promesse fail. alors que finally s'execute peu importe si la promesse est remplie ou pas

/*
// test dataCoordinates 1: 52.508, 13.381 (Latitude, Longitude)
§ Coordinates 2: 19.037, 72.873
§ Coordinates 3: -33.933, 18.474
*/
// btn.addEventListener('click', function(){

//   whereAmI(-33.933, 18.474)

// })


// const whereAmI = (lat,lng) =>{


//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
//   ).then(response => {
  
  
//     return response.json()
   
//   }).then(data => {

//     getCountryData(data.countryName)
     
//   }).catch( err => console.error(renderError((`Something went wrong 💥💥💥💥 ${err.message} Try again`))).finally(()=>{

//     countriesContainer.style.opacity = 1;

//   }));

// }




// console.log(`You are in ${data.city}, ${data.countryName}`);

console.log('test start');

setTimeout(() => console.log('o sec timer'),0 );

Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then( res=> {
  
  for ( let i = 0 ; i<1000000000; i++){};
  console.log(res)

} );


console.log('test end');