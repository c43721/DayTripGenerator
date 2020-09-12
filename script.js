"use strict";
let responseElement = document.getElementById("userSelection");
let randomButtonElement = document.getElementById("randomize");

let destinationButton = document.getElementById("destination");
let restaurantButton = document.getElementById("restaurant");
let transportationButton = document.getElementById("transportation");
let entertainmentButton = document.getElementById("entertainment");

randomButtonElement.addEventListener("click", generateRandomString);

let destinations = ["Mexico", "France", "Germany", "UK",  "Spain", "India", "China", "Canada", "Russia", "Portugal", "Australia"];
let restaurants = ["Hof Van Cleve", "Vendôme", "L'Astrance", "Azurmendi", "De Librije", "a local diner"]; //restaurant names in europe
let transportationList = ["Car", "Train", "Airplane", "Boat", "UFO", "foot", "Bike"];
let entertainmentList = ["Boating", "Snorkling", "Hiking", "Swimming", "playing soccer", "playing football", "learning how to play the piano", "throwing a frisbee", "visiting a zoo"];

let selectionOptions = ["destination", "restaurant", "transportation", "entertainment"];

destinationButton.addEventListener("click", () => changeSpecificSelection("destination"));
restaurantButton.addEventListener("click", () => changeSpecificSelection("restaurant"));
transportationButton.addEventListener("click", () => changeSpecificSelection("transportation"));
entertainmentButton.addEventListener("click", () => changeSpecificSelection("entertainment"));

let chosenDestination = getRandomSelection(destinations);
let chosenRestaurant = getRandomSelection(restaurants);
let chosenTransportationMethod = getRandomSelection(transportationList);
let chosenEntertainment = getRandomSelection(entertainmentList);

function getRandomSelection(selection) {
    return selection[getNumberInRange(0, selection.length - 1)]
}

function changeSpecificSelection(selection) {
    switch (selection) {
        case "destination":
            chosenDestination = getRandomSelection(destinations);
            break;
        case "restaurant":
            chosenRestaurant = getRandomSelection(restaurants);
            break;
        case "transportation":
            chosenTransportationMethod = getRandomSelection(transportationList);
            break;
        case "entertainment":
            chosenEntertainment = getRandomSelection(entertainmentList);
            break;
    }
    displayToUser(chosenDestination, chosenRestaurant, chosenTransportationMethod, chosenEntertainment);
}

function getNumberInRange(low, high) {
    return Math.floor(Math.random() * (high - low + 1)) + low;
}

function returnStringResponse(destination, restaurant, transportation, entertainment) {
    return `How does a trip to ${destination} by ${transportation.toLowerCase()}, while you relax by ${entertainment.toLowerCase()} and eating at ${restaurant} sound?`
}

function generateRandomString() {
    chosenDestination = getRandomSelection(destinations);
    chosenRestaurant = getRandomSelection(restaurants);
    chosenTransportationMethod = getRandomSelection(transportationList);
    chosenEntertainment = getRandomSelection(entertainmentList);
    displayToUser(chosenDestination, chosenRestaurant, chosenTransportationMethod, chosenEntertainment);
}

function displayToUser(chosenDestination, chosenRestaurant, chosenTransportationMethod, chosenEntertainment) {
    responseElement.innerText = returnStringResponse(chosenDestination, chosenRestaurant, chosenTransportationMethod, chosenEntertainment);
}

document.addEventListener("load", displayToUser(chosenDestination, chosenRestaurant, chosenTransportationMethod, chosenEntertainment));