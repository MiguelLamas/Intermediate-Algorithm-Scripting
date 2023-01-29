/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

// 1. replace any words which begins with a consonant by placing consonant in the end and adding (ay)
// 2. replace (edit) words beginning with vowels by adding (way) to the end of the word.


function translatePigLatin(str) {
    return str.replace(/(^[aeiou]+\w*)/, "$1way").replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
  }
  
  console.log(translatePigLatin("algorithm")); // algorithmway