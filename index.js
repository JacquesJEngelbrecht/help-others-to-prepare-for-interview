// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    //Reverse array method
    // return str.split('').reverse().join('');

    // Decrementing loop
    //let reverse= "";
    //for(let i = str.length - 1; i >= 0; i--) {
        //reverse = reverse + str[i];
    //}
    //return reverse;

    //Incrementing loop
    //let reverse= "";
    //for(let i = 0; i < str.length; i++) {
        //reverse = str[i] + reverse ;
    //}
    //return reverse;

    //ES6 For of loop
    //let reverse= "";
    //for(let char of str) {
        //reverse = char + reverse;
    //}
    //return reverse;

    //Foreach
    //let reverse= "";
    //str.split('').forEach((char) => reverse = char + reverse);
    //return reverse;

    //Reduce
    //return str.split('').reduce((reverse, char) => char + reverse, '');
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    //Reduce
    //let reversedStr = str.split('').reduce((reverse, char) => char + reverse, '');
    //return reversedStr === str ? 'True' : 'False';  
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

//function reverseInt(int) {
    //const reverseInt = int.toString().split('').reverse().join('');
    //return parseInt(reverseInt);
//}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
    //const strArr = str.toLowerCase().split(' ');
    //for(let i = 0; i < strArr.length; i++) {
        //strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    //}
    //return strArr.join(' ');

    //Map
    //return str.toLowerCase().split(' ').map(word => word[0].toUpperCase()
    //+ word.substr(1)).join(' ');

    //Regex
    //return str.replace(/\b[a-z]/gi, function(char) {
        //return char.toUpperCase();
    //});
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
    //const charMap = {};
    //let maxNum = 0;
    //let maxChar = '';
    //str.split('').forEach(char => {
        //charMap[char] ? charMap[char]++ : charMap[char] =1;       
    //});
    //for in to find most
    //for(let char in charMap) {
        //if(charMap[char] > maxNum) {
            //maxNum = charMap[char];
            //maxChar = char;
        //}  
    //}
    //return maxChar;
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
    //for(i = 1; i <= 100; i++) {
        //if(i % 15 === 0) {
            //console.log('FizzBuzz');
        //} else if(i % 3 === 0) {
            //console.log('Fizz');
        //} else if(i % 5 === 0) {
            //console.log('Buzz');
        //} else {
            //console.log(i);
        //}
    //}
}

// Call Function
//const output = reverseString('hello');
//const output = isPalindrome('racecar');
//const output = reverseInt(521);
//const output = capitalizeLetters('i love javaScript');
//const output = maxCharacter('javaScript');
//const output = fizzBuzz();
console.log(output);
