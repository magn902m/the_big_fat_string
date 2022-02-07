`use strict`;

const inputText = document.querySelector("#input_text");
const operator = document.querySelector("#operator");
const outputText = document.querySelector("#output_text");
const generateBtn = document.querySelector("#generate");

let pickedOption;
let input;
let output;
let outputResult;

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  generateBtn.addEventListener("click", generate);
}

function generate() {
  console.log("generate");

  input = inputText.value;
  pickedOption = operator.value;
  console.log(input);

  if (pickedOption === `0`) {
    outputText.value = input.charAt(0).toUpperCase() + input.substring(1).toLowerCase();
  } else if (pickedOption === `1`) {
    console.log(input);
  } else if (pickedOption === `2`) {
    console.log(input);
  } else if (pickedOption === `3`) {
    console.log(input);
  } else if (pickedOption === `4`) {
    console.log(input);
  } else if (pickedOption === `5`) {
    console.log(input);
  } else if (pickedOption === `6`) {
    console.log(input);
  } else if (pickedOption === `7`) {
    console.log(input);
  }
}
