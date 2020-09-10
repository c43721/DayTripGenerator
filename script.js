"use strict";

let destinations = ["Mexico", "France", "Germany", "UK"];
let restaurants = ["Hof Van Cleve", "Vendôme", "L'Astrance", "Azurmendi", "De Librije"]; //restaurant names in europe
let transportationList = ["Car", "Train", "Airplane", "Boat"];
let entertainmentList = ["Boating", "Snorkling", "Mountaineering", "Hiking", "Swimming"];

let selectionOptions = ["destination", "restaurant", "transportation", "entertainment"];

function getRandomDestination() {
    return destinations[generateRandomNumberInRange(0, destinations.length - 1)];
}

function getRandomRestaurant() {
    return restaurants[generateRandomNumberInRange(0, restaurants.length - 1)];
}

function getRandomModeOfTransportation() {
    return transportationList[generateRandomNumberInRange(0, transportationList.length - 1)];
}

function getRandomEntertainment() {
    return entertainmentList[generateRandomNumberInRange(0, entertainmentList.length - 1)];
}

function confirmResultWithUser(message) {
    return confirm(message);
}

function promptUserToReplace() {
    return prompt(`Which selections would you like to replace? Options are ${selectionOptions.join(', ')}, follow each one with a space.`);
}

function generateRandomNumberInRange(low, high) {
    return Math.floor(Math.random() * (high - low + 1)) + low;
}

function returnStringResponse(destination, restaurant, transportation, entertainment) {
    return `You will go to ${destination} by ${restaurant}, while you relax by ${transportation} and eating at ${entertainment}`
}

let chosenDestination = getRandomDestination();
let chosenRestaurant = getRandomRestaurant();
let chosenTransportationMethod = getRandomModeOfTransportation();
let chosenEntertainment = getRandomEntertainment();

let resultFromPrompt = confirmResultWithUser(returnStringResponse(chosenDestination, chosenRestaurant, chosenTransportationMethod, chosenEntertainment));

while (!resultFromPrompt) {
    let whichPropertiesToRoll = promptUserToReplace();

    if (whichPropertiesToRoll) {
        let userSelectionArray = whichPropertiesToRoll.split(" ");
        for (let i = 0; i < userSelectionArray.length; i++) {
            if (userSelectionArray[i] === "destination") {
                chosenDestination = getRandomDestination();
            } else if (userSelectionArray[i] === "restaurant") {
                chosenRestaurant = getRandomRestaurant();
            } else if (userSelectionArray[i] === "transportation") {
                chosenTransportationMethod = getRandomModeOfTransportation();
            } else if (userSelectionArray[i] === "entertainment") {
                chosenEntertainment = getRandomEntertainment();
            }
        }
        resultFromPrompt = confirmResultWithUser(returnStringResponse(chosenDestination, chosenRestaurant, chosenTransportationMethod, chosenEntertainment));
    }
}

console.log(returnStringResponse(chosenDestination, chosenRestaurant, chosenTransportationMethod, chosenEntertainment));