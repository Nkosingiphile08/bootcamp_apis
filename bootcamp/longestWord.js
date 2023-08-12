export default function longestWord(sentence) {
        var word = sentence.split(' ');
        var longest = '';
          for (let i=0; i<word.length; i++) {
         if (word[i].length >= longest.length) {
           longest = word[i].trim();
         }
        } return longest;
        } 
        console.log(longestWord('The dog jumped over the shipyard fence in Greenvillage'))
         