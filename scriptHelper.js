// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput === '') {
        return 'Empty';
    } else if (isNaN(testInput)) {
        return 'Not a Number';
    } else {
        return 'Is a Number';
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilot} is ready for launch`;
    let launchStatus = document.getElementById('launchStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    let ready = true;

    if (Number(fuelLevel < 10000)) {
        list.style.visibility = 'visible';
        launchStatus.style.color = 'red';
        launchStatus.innerHTML = 'Shuttle not ready for launch';
        fuelStatus.innerHTML = 'Fuel level too low for launch';
        ready = false;
    }
    if (Number(cargoLevel > 10000)) {
        list.style.visibility = 'visible';
        launchStatus.style.color = 'red';
        launchStatus.innerHTML = 'Shuttle not ready for launch';
        cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
        ready = false;
    }
    if (ready) {
        launchStatus.innerHTML = 'Shuttle is ready for launch';
        launchStatus.style.color = 'green';
    }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;