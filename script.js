const listInstructions = document.querySelector('.listInstructions');
const instructionsButton = document.querySelector('.instructionsButton');

instructionsButton.addEventListener('click', toggleInstructions)

function toggleInstructions() {
    if (instructionsButton.innerHTML === 'SHOW INSTRUCTIONS') {
        listInstructions.style.display = 'block';
        instructionsButton.innerHTML = 'HIDE INSTRUCTIONS'
    }
    else {
        listInstructions.style.display = 'none';
        instructionsButton.innerHTML = 'SHOW INSTRUCTIONS'
    }

};
