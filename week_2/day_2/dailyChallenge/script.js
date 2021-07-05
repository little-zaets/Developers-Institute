let sentence = "His girlfriend is not really that bad";
console.log(sentence);
let wordNot = sentence.indexOf('not');
let wordBad = sentence.indexOf('bad');
let n = sentence.split("");
console.log(n);
console.log(wordNot);
console.log(wordBad);
if (wordNot => 0 && wordNot < wordBad) {
	n.splice(wordNot, n.length - wordNot, 'g', 'o', 'o', 'd');
	console.log(n);
	sentence = n.join(' ');
}
console.log(sentence);

/* Without conditional statements:
let new_sentence = sentence.substr(0, wordNot) + "good" + sentence.substr(wordBad + 3);
console.log(new_sentence);
*/