export default function wordLengths(sentence) {
  let words = sentence.split(' ');
  let sum = 0;
  for (let i = 0; i < words.length; i++) {
    sum += words[i].length;
  }
  return sum;
}

console.log(wordLengths('The dog jumped over the shipyard fence'));
