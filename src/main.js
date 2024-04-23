//Вам необхідно написати функцію reverseString(str), 
//яка приймає на вхід рядок і повертає його у зворотному порядку.


const revStr = prompt("Write your message, please");

function reverseString(str) {
        
        let newString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    
}

console.log(reverseString(revStr));


//Вам необхідно написати функцію isPalindrome(str), 
//яка приймає на вхід рядок і перевіряє, чи є введений рядок паліндромом.


const palindromeStr = prompt("Write please");

function isPalindrome(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    if (newString == palindromeStr) {
        console.log ('This is palondrome')
    } else {
        console.log('It is not a palindrome')
    }

}
isPalindrome(palindromeStr);




//Вам необхідно написати функцію findGCD(a, b), яка приймає на вхід два числа 
//і повертає їхній НСД.

const firstNumb = +prompt('Write first number, please');
const secondNumb = +prompt('Write second number, please');

function findGCD(a, b) {
    while (a !== 0 && b !== 0){
        if (a > b) {
            a = a % b;
        } else {
            b = b % a;
        }
    }  return a + b
} 

const result = findGCD(firstNumb, secondNumb)

console.log(`НСД чисел ${firstNumb} та ${secondNumb} = ${result}`);