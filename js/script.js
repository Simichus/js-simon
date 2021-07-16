/****** FUNCTIONS ******/

function randNumGen(min, max) {
    return Math.floor(Math.random() * max - min) + min;
}



// Generating 5 different random numbers
const randNumbers = [];
let numbersToShow = '';

while (randNumbers.length < 5) {
    const random = randNumGen(1, 100);
    if (!randNumbers.includes(random)) {
        randNumbers.push(random);
        if (randNumbers.length < 5) {
            numbersToShow += random + ', ';
        } else {
            numbersToShow += random;
        }

    }
}
randNumbers.sort();
console.log(numbersToShow);
console.table(randNumbers);

alert('Memorizza i seguenti numeri: ' + numbersToShow);

// 30 secs delay

setTimeout(function () {

    const userNumbers = [];
    do {
        const userNumb = parseInt(prompt('Ricordi i numeri? Inseriscili uno alla volta'));
        console.log(userNumb)
        //is value correct?
        if (userNumb && !isNaN(userNumb)) {
            // isn't in array userNumbers?
            if (!userNumbers.includes(userNumb)) {
                userNumbers.push(userNumb);
            }
        }

    } while (userNumbers.length < randNumbers.length)
    console.table(userNumbers);

    // which one is correct?
    const correctNums = [];
    let correctNumsMessage = 'I numeri corretti sono: ';

    for (let i = 0; i < randNumbers.length; i++) {
        if (randNumbers.includes(userNumbers[i])) {
            correctNums.push(userNumbers[i]);
            if (i === 0) {
                correctNumsMessage += userNumbers[i];
            } else {
                correctNumsMessage += ', ' + userNumbers[i];
            }
        }
    }

    //  result
    if (correctNums.length === 5) {
        alert('Complimenti, hai vinto!!! Li hai indovinati tutti');
    } else if (correctNums.length === 0) {
        alert('Mi dispiace, hai perso. Non ne hai indovinato neanche uno')
    } else {
        alert('Mi dispiace, hai perso. ' + correctNumsMessage);
    }

}, 30000);




