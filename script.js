// Write your JavaScript code here!
window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        //inputs
        let pilotInput = document.querySelector("input[name=pilotName]");
        let copilotInput = document.querySelector("input[name=copilotName]");
        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let cargoInput = document.querySelector("input[name=cargoMass]");

        //capitalizes name inputs
        pilotInput = pilotInput.value.toString();
        pilotInput = pilotInput[0].toUpperCase() + pilotInput.substring(1);
        copilotInput = copilotInput.value.toString();
        copilotInput = copilotInput[0].toUpperCase() + copilotInput.substring(1);

        //statuses
        let pilotStatus = document.getElementById("pilotStatus");
        pilotStatus.innerHTML = `Pilot ${pilotInput} is ready for launch.`;
        let copilotStatus = document.getElementById("copilotStatus");
        copilotStatus.innerHTML = `Co-pilot ${copilotInput} is ready for launch.`;
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        let launchStatus = document.getElementById("launchStatus")
        let faultyItems = document.getElementById("faultyItems");

        //conditionals for launch
        if ((fuelInput.value >= 10000) && (cargoInput.value <= 10000)) {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle is ready for launch!"
            launchStatus.style.color = "#62fff4"
        } else if ((fuelInput.value < 10000) || (cargoInput.value > 10000)) {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle is not ready for launch!";
            launchStatus.style.color = "#ff0163";
        };

        if (fuelInput.value < 10000) {
            fuelStatus.innerHTML = "Fuel level is too low for launch!";
        } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch.";
        };

        if (cargoInput.value > 10000) {
            cargoStatus.innerHTML = "Cargo mass is too great for launch!";
        } else {
            cargoStatus.innerHTML = "Cargo mass is low enough for launch.";
        };
    });

    //planetary data
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        response.json().then(function(json) {

            //bonus mission: randomizes destination
            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            };
            let randomDestination = getRandomInt(5);

            //missionTarget html format
            const missionTarget = document.getElementById("missionTarget");
            missionTarget.innerHTML = `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[randomDestination].name}</li>
               <li>Diameter: ${json[randomDestination].diameter}</li>
               <li>Star: ${json[randomDestination].star}</li>
               <li>Distance from Earth: ${json[randomDestination].distance}</li>
               <li>Number of Moons: ${json[randomDestination].moons}</li>
            </ol>
            <img src="${json[randomDestination].image}">`
        });
    });
});