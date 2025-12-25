let lastQuote = null;

async function displayQuote() {
  const response = await fetch("https://github.com/HassanOHOsman/quote-generator-app/tree/main/backend");
  const text = await response.text();

  const [quotePart, authorPart] = text.split(" -");

  document.getElementById("quote").textContent = quotePart;
  document.getElementById("author").textContent = `— ${authorPart}`;

}

window.addEventListener("DOMContentLoaded", () => {
  displayQuote();
  document.getElementById("new-quote").addEventListener("click", displayQuote);
});

// DO NOT EDIT BELOW HERE

// pickFromArray is a function which will return one item, at
// random, from the given array.
//
// Parameters
// ----------
// choices: an array of items to pick from.
//
// Returns
// -------
// One item at random from the given array.
//
// Examples of use
// ---------------
// pickFromArray(['a','b','c','d'])     // maybe returns 'c'

// You don't need to change this function
function pickFromArray(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

