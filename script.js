"use strict";

let destinations = ["Mexico", "France", "Germany", "UK"];
let restaurants = ["1", "2", "3", "4", "5"];
let transportationList = ["Car", "Train", "Airplane", "Boat"];
let entertainmentList = ["Boating", "Snorkling", "Mountaineering", "Hiking", "Swimming"];

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
    let responseFromUser = confirm(message);

    return responseFromUser;
}

function generateRandomNumberInRange(low, high) {
    return Math.floor(Math.random() * (high - low + 1)) + low;
}

function generateRandomResult() {
    let chosenDestination = getRandomDestination();
    let chosenRestaurant = getRandomRestaurant();
    let chosenTransportationMethod = getRandomModeOfTransportation();
    let chosenEntertainment = getRandomEntertainment();

    return `You will go to ${chosenDestination} by ${chosenTransportationMethod}, while you relax by ${chosenEntertainment} and eating at ${chosenRestaurant}`
}

let resultFromPrompt = false;
while (!resultFromPrompt) {
    let resultString = generateRandomResult()
    resultFromPrompt = confirmResultWithUser(resultString);
    if (resultFromPrompt) console.log(resultString);
}