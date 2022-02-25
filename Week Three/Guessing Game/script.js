const submit_button = document.getElementById('submit');
const guess = document.getElementById('guess');
const result = document.getElementById('result');


let guess_counter = 0;
const random_number = Math.floor(Math.random() * 100) + 1;

console.log(random_number);

const handleClick = (event) => {
    if (event.target.id == 'submit') {
        if (guess.value < random_number) {
            result.innerHTML = "Guessed to Low!";
        } else if (guess.value > random_number) {
            result.innerHTML = "Guessed to High!";
        } else {
            result.innerHTML = `
                Perfect! You guessed the right number ${random_number}!<br>It took ${guess_counter} guesses!<br>
                <img src = "https://media.giphy.com/media/BK1EfIsdkKZMY/giphy.gif" />
            `
        }
        guess_counter++;
        guess.value = "";
    }
}

submit_button.addEventListener('click', handleClick);