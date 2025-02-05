// Write your JavaScript code here!

// require { validateInput, formSubmission } from "./scriptHelper";

window.addEventListener("load", function() {

    let form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let list = document.getElementById("faultyItems");
        let pilot = document.querySelector('input[name=pilotName]').value;
        let copilot = document.querySelector('input[name=copilotName]').value;
        let fuelLevel = document.querySelector('input[name=fuelLevel]').value;
        let cargoMass = document.querySelector('input[name=cargoMass]').value;
        let alertMsg = 'All fields are required.';
        let pass = true;
        if (validateInput(pilot) !== 'Not a Number') {
            alertMsg += '\npilot must contain alpha characters.'
            pass = false;
        }
        if (validateInput(copilot) !== 'Not a Number') {
            alertMsg += '\nco-pilot must contain alpha characters.'
            pass = false;
        }
        if (validateInput(fuelLevel) !== 'Is a Number') {
            alertMsg += '\nfuel level must be a number.'
            pass = false;
        }
        if (validateInput(cargoMass) !== 'Is a Number') {
            alertMsg += '\ncargo mass must be a number.'
            pass = false;
        }
        if (pass) {
            formSubmission(document,list,pilot,copilot,fuelLevel,cargoMass);
            // event.preventDefault();
        } else {
            alert(alertMsg);
            // event.preventDefault();
        }
        
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance,
            planet.moons, planet.image);
    })
    
 });