const StatusCodes = require("http-status-codes");
const csv = require('csv-parser');
const fs = require('fs');
const path = require("path");

exports.postPLanguage = (request, response) => {
    var phrase = request.body.palindromo;
    var word = "";
    var phraseSplitted = phrase.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split(" ");
    phraseSplitted.forEach((wordLoop) => {
        word += wordLoop;
    });
    var wordSplitted = word.split("");
    var counter = 0;
    wordSplitted.forEach((character, idx) => {
        if (character === wordSplitted[wordSplitted.length - 1 - idx])
            counter += 1;
    });
    response.status(StatusCodes.OK).json({ message: counter === wordSplitted.length ? "Es capicúa" : "No es capicúa" });
};

exports.postFLanguage = (request, response) => {
    var phrase = request.body.oracionF;
    var phraseSplitted = phrase.split("");
    var counter = 1;
    var returnedString = "";
    phraseSplitted.forEach((letter, idx) => {
        if (1 > counter || (counter > 1 && letter === "f" && phraseSplitted[idx - 1].replace(/[\u0300-\u036f]/g, "").match(/[aeiou]/g)))
            counter = letter === "f" ? -1 : counter;
        else
            returnedString += letter;
        counter += 1;
    });
    response.status(StatusCodes.OK).json({ message: returnedString })
}