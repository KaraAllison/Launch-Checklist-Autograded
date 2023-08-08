// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById('missionTarget').innerHTML = (`
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}"/>
    `)
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
    } else if (isNaN(Number(testInput))) {
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
    console.log(list);

    if (Number(fuelLevel) < 10000) {
        list.style.visibility = 'visible';
        // list.outerHTML = list.outerHTML.replace('visibility: hidden;', 'visibility: visible;');
        launchStatus.style.color = 'red';
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        fuelStatus.innerHTML = 'Fuel level too low for launch';
        ready = false;
    } else {
        fuelStatus.innerHTML = 'Fuel level high enough for launch';
    }
    if (Number(cargoLevel) > 10000) {
        // list.outerHTML = list.outerHTML.replace('visibility: hidden;', 'visibility: visible;');
        list.style.visibility = 'visible';
        launchStatus.style.color = 'red';
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
        ready = false;
    } else {
        cargoStatus.innerHTML = 'Cargo mass low enough for launch';
    }
    if (ready) {
        launchStatus.innerHTML = 'Shuttle is Ready for Launch';
        launchStatus.style.color = 'green';
        // list.style.visibility = 'hidden';
        // list.outerHTML = list.outerHTML.replace('visibility: visible;', 'visibility: hidden;');

    }
}
 
 async function myFetch() {
    const response = await fetch(
        'https://handlers.education.launchcode.org/static/planets.json'
    );
    const planetsReturned = await response.json();
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)]
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;