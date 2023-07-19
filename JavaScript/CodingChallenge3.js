function LongestWord(sen) {

  // code goes here
  sen = sen.replace(/[^\w\s]|_/g, "");

  let words = sen.split(" ");
  let longest = words[0]
  for (let i = 0; i < words.length; i++) {

    if (words[i].length > longest.length) {
    longest = words[i];
    }
  }
  return longest;

}

// keep this function call here
console.log(LongestWord(readline()));