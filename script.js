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

        //statuses
        let pilotStatus = document.getElementById("pilotStatus");
        pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch.`
        let copilotStatus = document.getElementById("copilotStatus");
        copilotStatus.innerHTML = `Co-pilot ${copilotInput.value} is ready for launch.`
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        let launchStatus = document.getElementById("launchStatus")
        let faultyItems = document.getElementById("faultyItems");

        //conditonals for launch
        if ((fuelInput.value >= 10000) && (cargoInput.value <= 10000)) {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "SHUTTLE IS READY FOR LAUNCH!"
            launchStatus.style.color = "#62fff4"
        } else if ((fuelInput.value < 10000) || (cargoInput.value > 10000)) {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "SHUTTLE IS NOT READY FOR LAUNCH!"
            launchStatus.style.color = "#ff0163"
        };

        if (fuelInput.value < 10000) {
            fuelStatus.innerHTML = "Fuel level is too low for launch!"
        } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch."
        };

        if (cargoInput.value > 10000) {
            cargoStatus.innerHTML = "Cargo mass is too great for launch!"
        } else {
            cargoStatus.innerHTML = "Cargo mass is low enough for launch."
        };

    });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/