#!/usr/bin/env node
import  readlineSync from 'readline-sync';

const rand = (min, max) => {
    let randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randNumber;
}

const brainCalc = () => {

    console.log('Welcome to The Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    console.log('What is the result of the expression?');

    let win = 0;
    let signs = ['+', '-', '*'];

    for (let i = 0; i < 3; i += 1){

        let a = rand(0, 100);
        let b = rand(0, 100);
        let sign = signs[rand(0,2)];
        console.log(sign);
        let result;

        if (sign == '+') result = a + b;
        if (sign == '-') result = a - b;
        if (sign == '*') result = a * b;
console.log(result);
        console.log(`Question: ${a} ${sign} ${b}`);
        const answer = readlineSync.question('Your answer: ');

        if (answer == result) {
            console.log('Correct!');
            win += 1;
        }
        else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
            console.log(`Let's try again, ${name}!`);
            break;
        }
    }
    if (win === 3) console.log(`Congratulations, ${name}!`);
}

brainCalc();