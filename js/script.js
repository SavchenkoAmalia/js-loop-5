let i = 1;

while(i <= 10){
    console.log(` Число ${i}`);
    i++;
}

const pass = 'abcd';
let userInput;
do{
let userInput = prompt('введіть пароль')
} while(userInput !== pass);