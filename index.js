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

// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}

// Call Function
const output = longestWord('Hello, my name is Brad');

console.log(output);

// Call Function
//const output = reverseString('hello');
//const output = isPalindrome('racecar');
//const output = reverseInt(521);
//const output = capitalizeLetters('i love javaScript');
//const output = maxCharacter('javaScript');
//const output = fizzBuzz();
console.log(output);
