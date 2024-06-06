'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// error rendering function

const renderError = msg => {

  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
  
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



const getJSON = function (url,errorMsg = 'Something is wrong') {


  return fetch(url).then(
    
  response => {

    if(!response.ok){
      throw new Error(`${errorMsg} (${response.status})`)
    }
    
    return response.json()}

)};

///////////////////////////////////////

/*
// not using the v3.1 because it's too slow
// request.open('GET', 'https://restcountries.com/v3.1/name/morocco');



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



// new way of making api calls


const getCountryData = function(country) {

  // country 1
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`).then(
    
  response => {

    if(!response.ok){
      throw new Error(`Country not found (error: ${response.status})`)
    }
    
    return response.json()}

).then(
    
  ([data]) =>  {
    renderCountry(data)
  const neighbour = data.borders?.[0]
  // country 2 
  return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`) 
  }).then(response => response.json()).then(data => renderCountry(data, "neighbour")).catch( err => console.error(renderError(`Something went wrong 💥💥💥💥 ${err.message} Try again`))).finally(()=>{

    countriesContainer.style.opacity = 1;

  });






};





// simply used arrow functions
const getCountryData = function(country) {

  country 1
getJSON(`https://countries-api-836d.onrender.com/countries/name/${country}`, 'Country not found').then( ([data]) =>  {

    renderCountry(data)
  const neighbour = data.borders?.[0]
  // country 2 
  return getJSON(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`, 'Neighbour not found')
    
}).then(data => renderCountry(data, "neighbour")).catch( err => console.error(renderError(`Something went wrong 💥💥💥💥 ${err.message} Try again`))).finally(()=>{

    countriesContainer.style.opacity = 1;

  });






};

// la method then s'execute quand la promesse est fulfilled, la methode catch s'execute quand la promesse fail. alors que finally s'execute peu importe si la promesse est remplie ou pas


// test dataCoordinates 1: 52.508, 13.381 (Latitude, Longitude)
// § Coordinates 2: 19.037, 72.873
// § Coordinates 3: -33.933, 18.474

btn.addEventListener('click', function(){

  whereAmI(-33.933, 18.474)

})


const whereAmI = (lat,lng) =>{


  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  ).then(response => {
  
  
    return response.json()
   
  }).then(data => {

    getCountryData(data.countryName)
     
  }).catch( err => console.error(renderError((`Something went wrong 💥💥💥💥 ${err.message} Try again`))).finally(()=>{

    countriesContainer.style.opacity = 1;

  }));

}




console.log(`You are in ${data.city}, ${data.countryName}`);

console.log('test start');

setTimeout(() => console.log('o sec timer'),0 );

Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then( res=> {
  
  for ( let i = 0 ; i<1000000000; i++){};
  console.log(res)

} );


// console.log('test end');

const lotteryPromise = new Promise(function(resolve,reject) {

console.log('lottery draw is happening')

  setTimeout(function(){
    if(Math.random() >= 0.5)
      {
    
        resolve( 'youwing');
      } else {
        reject(new Error('You lose'));
      }
    
  }, 2000)
})

lotteryPromise.then( res => console.log(res)
  ).catch(err => console.error(err))

// promisifying etTimeout

  const wait = function (seconds) {

return new Promise ( function (resolve) {

  setTimeout(resolve, seconds * 1000)
})
  }


  wait(1).then(() =>{ console.log('Ive waited for 1 s')

  return wait(1);
  }

).then(() => {
  console.log("I've waited for 2 s")
  return wait (1);
}).then(()=> {
  console.log('waited 3 sec')
  return wait(1)
}).then(() => console.log('4s'))


const getPosition = function () {

return new Promise(function (resolve, reject) {

navigator.geolocation.getCurrentPosition(resolve,reject);
});

};

// getPosition().then( pos => {
// let  {latitude} = pos.coords;
// let  {longitude} = pos.coords;

//   console.log(latitude, longitude)
// })


const whereAmI = () =>{

getPosition().then(pos => {

  const {latitude:lat, longitude:lng} = pos.coords;

  return   fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  );
})

  .then(response => {
    
    
      return response.json()
     
    }).then(data => {
  
      getCountryData(data.countryName)
       
    }).catch( err => console.error(`Something went wrong 💥💥💥💥 ${err.message} Try again`)).finally(()=>{
  
      countriesContainer.style.opacity = 1;
  
    });
  
  }
  

  btn.addEventListener('click', whereAmI)





const whereAmI = async function(country){

try{
  const pos = await getPosition();

  const{  latitude:lat, longitude:lng} = pos.coords

  const resGeo = await fetch(
  `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
);


if(!resGeo.ok) {
  throw new Error('problem getting location data')
}
const dataGeo = await resGeo.json();

console.log(dataGeo)

// fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`).then( res => console.log(res))




const res = await fetch(`https://countries-api-836d.onrender.com/countries/name/${dataGeo.countryName}`)

if (!res.ok) {
  throw new Error('problem getting country')
}
const data = await res.json();

renderCountry(data[0])


countriesContainer.style.opacity = 1;

return `I live in ${dataGeo.countryName}`
}catch(err){
  console.error(err.message);

}

 };

//  try{
//   let y = 1;
//   const x = 3;

//   pageYOffset = 3;
//  } catch(err) {

//   alert(err.message)
//  }


*/


// always try catch block when dealing with async function

const get3Countries = async function(c1,c2,c3) {
try{
// const [data1] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`);
// const [data2] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`);
// const [data3] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`);

let data = await Promise.all([getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`),getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`),getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`)])

console.log(data.map(d => d[0].capital))



}catch(error){
console.log(error.message)
}}

get3Countries('germany', 'france', 'belgium')