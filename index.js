/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertInput = document.getElementById("convert-input")
const convertBtn = document.getElementById("convert-btn")
const answerDisplay = document.getElementById("answer-display")
const answerDisplayOne = document.getElementById("answer-display-one")
const answerDisplayTwo = document.getElementById("answer-display-two")

convertBtn.addEventListener("click", function() {
    length(convertInput.value)
    volume(convertInput.value)
    mass(convertInput.value)
})

function length(num) {
    let answer = num * 3.281
    console.log(answer.toFixed(3))
    let answerTwo = num / 3.281
    console.log(answerTwo.toFixed(3))
    answerDisplay.textContent = `${num} meter = ${answer.toFixed(3)} feet | ${num} feet = ${answerTwo.toFixed(3)} meter`
}

function volume(num) {
    answer = num * 0.264
    console.log(answer.toFixed(3))
    answerTwo = num / 0.264
    console.log(answerTwo.toFixed(3))
    answerDisplayOne.textContent = `${num} litre = ${answer.toFixed(3)} gallon | ${num} gallon = ${answerTwo.toFixed(3)} litre`
}

function mass(num) {
    answer = num * 2.204
    console.log(answer.toFixed(3))
    answerTwo = num / 2.204
    console.log(answerTwo.toFixed(3))
    answerDisplayTwo.textContent = `${num} kilogram = ${answer.toFixed(3)} pound | ${num} pound = ${answerTwo.toFixed(3)} kilogram`
}