// Regular expressions (or Regex) are patterns used to match character combinations in strings. In this crash course tutorial, you will learn how to use regular expressions in JavaScript. You will be able to apply the concepts to any programming language.

// 1. Using the Test Method
// Anything between '/' will be found exactly in the string.(Case sensitive)
let sentence = "The dog chased the cat."
let regex = /the/

// we use 'test' method to check if the string is present ore not(it returns true and false)
let myString = "Hello, World!";
let myRegex = /Hello/;
let result1 = myRegex.test(myString);

// console.log(result1);


// 2. Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result2 = waldoRegex.test(waldoIsHiding);
// console.log(result2);


// 3. Match a Literal String with Different Possibilities
// We use "|" operator to find possible strings provided
let petString = "James has a pet cat.";
let petRegex = /dog | cat | bird|fish/;
let result3 = petRegex.test(petString);
// console.log(result3);


// 4.  Ignore Case While Matching
// we use flag 'i' at end of regex to ignore case matching
let myString2 = "JohniIsGoodBoy"
let fccregex = /isgood/i
let result4 = fccregex.test(myString2)
// console.log(result4);


// 5. Extract Matches
// we can extract actual matches found with help of match method
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result5 = extractStr.match(codingRegex);
// console.log(result5);


// 6. Find More Than the First Match
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/g;
// console.log(testStr.match(ourRegex));

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let result6 = twinkleStar.match(starRegex);
// console.log(result6);


// 7. Match Anything with Wildcard Period
// "." peroiod only look for single character before or after where it is been placed.
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
// console.log(humStr.match(huRegex));
 // Returns ["hum"]
// console.log(hugStr.match(huRegex));
 // Returns ["hug"]

let exampleStr = "Let's have ffun with regular expressions!";
let unRegex = /.un/;
let result7 = exampleStr.match(unRegex);

// console.log(result7);


// 8. Match Single Character with Multiple Possibilities
let bgRegex = /b[aiu]g/;
let quoteSample1 = "Beware of bugs in the above code;"
let vowelRegex = /[aeiou]/ig;
let result8 = quoteSample1.match(vowelRegex);
// console.log(result8);


// 9. Match Letters of the Alphabet
let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;//Searches through string for all the character(a-z)
let result9 = quoteSample2.match(alphabetRegex);
// console.log(result9);


// 10. Match Numbers and Letters of the Alphabet
let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[2-6h-s]/ig;
let result10 = quoteSample3.match(myRegex2);
// console.log(result10);


// 11. Match Single Characters Not Specified
let quoteSample4 = "3 blind mice.";
let myRegex3 = /[^0-9aeiou]/ig;
let result11 = quoteSample4.match(myRegex3);
// console.log(result11);


// 12. Match Characters that Occur One or More Times
let difficultSpelling = "Mississipspi";
let myRegex4 = /s+/g;
let result12 = difficultSpelling.match(myRegex4);
// console.log(result12);


// 13. Match Characters that Occur One or More Times
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooo00"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result13 = chewieQuote.match(chewieRegex);
// console.log(result13)


// 14. Find Characters with Lazy Matching & Greedy Matching.
let string = "titanic" ;
let regex2 = /t[a-z]*?i/;
string.match(regex2);

// Greedy
// Gives longest posssible
let text1 = "<h1>Winter is coming</h1>";
let myRegex5 = /<.*>/;
let result14 = text1.match(myRegex5);
// console.log(result14);

// Lazy
// Gives smallest posssible
let text2 = "<h1>Winter is coming</h1>";
let myRegex6 = /<.*?>/;
let result15 = text2.match(myRegex6);
// console.log(result15);


// 15. Find One or More Criminals in a Hunt
// A group of criminals escaped from jail and ran away, but you don’t know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once.
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
let reCriminals = /C+/
let matchedCriminals = crowd.match(reCriminals);
// console.log(matchedCriminals);


// 16.  Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result16 = calRegex.test(rickyAndCal);
// console.log(result16);


// 17. Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result17 = lastRegex.test(caboose);
// console.log(result17);


// 18. Match All Letters and Numbers
// "\w" checks for every letter from A-Z and a-z and 0-9 and "_".
let quoteSample5 = "The five boxing wizards jump quickly."
let alphabetRegexV22= /\w/g;
let result18 = quoteSample5.match(alphabetRegexV22).length;
// console.log(result18);


// 19. Match Everything But Letters and Numbers
// "\W" checks for every letter that is not in  A-Z and a-z and 0-9 and "_".
let quoteSample6 = "The five boxing wizards jump quickly."
let nonalphabetRegex = /\W/g;
let result19 = quoteSample6.match(nonalphabetRegex).length;
// console.log(result19);


// 20. Match All Numbers
// matches only number or digit
let numString1 = "Your sandwich will be $5.00";
let numRegex1 = /\d/g; 
let result20 = numString1.match(numRegex1).length;
// console.log(result20);


// 21. Match All Non-Numbers
let numString2 = "Your sandwich will be $5.00";
let numRegex2 = /\D/g; 
let result21 = numString2.match(numRegex2).length;
// console.log(result21);


// 22. Restrict Possible Usernames
// req 1) If there are numbers, they must be at the end.
// req 2) Letters can be lowercase and uppercase.
// req 3) At least two characters long. Two-letter names can't have numbers.
let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]{2,}\d*$/; // here {2,} is a quantity specifier
// let result22 = userCheck.test(username);


// 23. Match Whitespace
let sample1 = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // \s matches all spaces, tabs, newlines.
let result23 = sample1.match(countWhiteSpace);
// console.log(result23);


// 24. Match Non-Whitespace Characters
let sample = "Whitespace is important in separating words";
let countnonWhiteSpace = /\S/g; // \S matches all non spaces, tabs, newlines.
let result24 = sample.match(countnonWhiteSpace);
// console.log(result24);


// 25. Specify Upper and Lower Number of Matches
let ohstr = "Ohhh no"
let ohRegex = /Oh{3,6} no/;
let result25 = ohRegex.test(ohstr)
// console.log(result25);


// 26. Specify Only the Lower Number of Matches
let haStr = "Hazzzzah";
let haRegex = /z{4,}/; // Change this line
let result26 = haRegex.test(haStr);
// console.log(result26);


// 27. Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result27 = timRegex.test(timStr);
// console.log(result27);


// 28. Check for All or None
let favWord = "favorite";
let favRegex = /favou?rite/ // ? checks whether letter before ? mark i present or not and all other letter must be same
let result28 = favRegex.test(favWord);
// console.log(result28);


// 29. Positive and Negative Lookahead
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/; // Positive Lookahead '?='
let qRegex = /q(?!u)/; // Negative Lookahead '?!'
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5})(?=\D*\d{2})/; // Change this line
let result29 = pwRegex.test(sampleWord);
// console.log(result29);


// 30. Reuse Patterns Using Capture Groups
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result30 = reRegex.test(repeatNum); 
// console.log(result30);


// 31. Use Capture Groups to Search and Replace
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"
let huhText = "This sandwich is good."
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result31 = huhText.replace(fixRegex, replaceText);
// console.log(result31);


// 32. Remove Whitespace from Start and End without trim
let hello = " Hello, World!"
let wsRegex = /^\s+\\s+$/g; // Change this line
let result32 = hello. replace (wsRegex, ''); // Change this line
console.log(result32);
// console.log(result31);