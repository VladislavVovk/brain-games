import  readlineSync from 'readline-sync';


const rand = () => {
    let min = 0;
    let max = 101;
    let randNumber = Math.floor(Math.random() * (max - min)) + min;
    return randNumber;
}
export const brainEven = () => {

    console.log('Welcome to The Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
    let win = 0;
    for (let i = 0; i < 3; i += 1){
        let num = rand();
        let ask;
        

        if(num % 2 === 0) {
            ask = 'yes'
        }
        else {
            ask = 'no'
        }

        console.log('Question: ' + num);
        const answer = readlineSync.question('Your answer: ');
        if (answer == ask) {
            console.log('Correct!')
            win += 1;
        }
        else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${ask}'.`);
            console.log(`Let's try again, ${name}!`);
            break;
        } 
    }
    if (win === 3) console.log(`Congratulations, ${name}!`);
}

brainEven();