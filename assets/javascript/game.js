var counter = 0;
var targetNumber = 0;
var wins = 0;
var losses = 0;
var valueOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

getTargetNum();
generateCrystals();

//$(".crystal-image").on("click", function () {	
$("#crystals").on("click", ".crystal-image", function () { //need to target parent div of items dynamically generated with jquery
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#counter-txt").text(counter);

    if (counter === targetNumber) {
        wins++;
        $("#wins-txt").text(wins);
        reset();
    } else if (counter > targetNumber) {
        losses++;
        $("#losses-txt").text(losses);
        reset();
    }

});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandValue() {
    var randValue;
    return randValue = valueOptions[Math.floor(Math.random() * valueOptions.length)];
    console.log(randValue);
}

function getTargetNum() {
    targetNumber = getRandomInt(19, 120);
    $("#number-to-guess").text(targetNumber);
}

function generateCrystals() {
    for (var i = 0; i < 4; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
        imageCrystal.attr("data-crystalvalue", getRandValue());
        $("#crystals").append(imageCrystal);
    }
}

function reset() {
    getTargetNum();
    counter = 0;
    $("#counter-txt").text(counter);
    $("#crystals").empty();
    generateCrystals();
}