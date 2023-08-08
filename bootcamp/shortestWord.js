export default function shortestWord(sentence) {
        let word = sentence.split(' ');
         var shortest = word[0];
        for (let i=0; i<word.length; i++) {
        if (word[i].length <= shortest.length) {
          shortest = word[i];
        }
        } return shortest.toLowerCase();
      } console.log(shortestWord('The dog jumped over the shipyard fence in Greenvillage'))
      