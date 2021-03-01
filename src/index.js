import readlineSync from 'readline-sync';

const rand = (min, max) => {
  const randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randNumber;
};

export const getName = () => {
  console.log('Welcome to The Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const brainEven = () => {
  console.log('Welcome to The Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let win = 0;

  for (let i = 0; i < 3; i += 1) {
    const num = rand(1, 100);
    let ask; 
    if (num % 2 === 0) {
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
};

export const brainCalc = () => {

  console.log('Welcome to The Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
	let win = 0;
	let signs = ['+', '-', '*'];

  for (let i = 0; i < 3; i += 1){

    let a = rand(0, 100);
    let b = rand(0, 100);
    let sign = signs[rand(0,2)];
    let result;

    if (sign == '+') result = a + b;
    if (sign == '-') result = a - b;
    if (sign == '*') result = a * b;
        
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
};

const nod = (x, y) => {
  if (y > x) return nod(y, x);
  if (!y) return x;
  return nod(y, x % y);
};

export const brainGCD = () => {
	console.log('Welcome to The Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let win = 0;
  for (let i = 0; i < 3; i += 1){
		let a = rand(0, 100);
    let b = rand(0, 100);
    let ask = nod(a, b);
    console.log(`Question: ${a} ${b}`);
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
};

export const brainProgression = () => {
  console.log('Welcome to The Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let win = 0;
    
  for (let i = 0; i < 3; i += 1) {

    let array = [];
    let step = rand(1, 10);
    let begin = rand(1, 100);
    let elem = rand(0,9);

    for (let j = 0; j < 11; j+=1 ) {
      array.push(begin);
      begin += step;
    }

    let ask = array[elem];
    array[elem] = '..';
    let str = array.join(' ');
    console.log(`Question: ${str}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer == ask) {
      console.log('Correct!');
      win += 1;
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${ask}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (win === 3) console.log(`Congratulations, ${name}!`);
};

export const brainPrime = () => {
  console.log('Welcome to The Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let win = 0;

  for (let i = 0; i < 3; i += 1) {
    const num = rand(1,100);
    let ask = 'yes';
    for(let j = 2;j < num; j += 1) {
      if (num % j === 0) ask = 'no';
    }
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (ask == answer) {
      console.log('Correct!');
      win += 1;
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${ask}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (win === 3) console.log(`Congratulations, ${name}!`);
};
