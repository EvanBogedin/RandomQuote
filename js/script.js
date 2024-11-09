const quoteText = document.getElementById("quote-text");
let quoteIndex = 0;
let quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt - Mark Twain",
  "Do not watch the clock. Do what it does. Keep going. - Sam Levenson",
  "Not all those who wander are lost. - J.R.R. Tolkien",
  "The best way to predict the future is to invent it. - Alan Kay",
  "You miss 100% of the shots you don’t take. - Wayne Gretzky",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "I’ve searched all the parks in all the cities and found no statues of committees - G.K. Chesterton",
];
let shuffledQuotes = [];

//Shuffles the quotes reducing the chance of getting the same quote two times in a row
//Also this runs on page load
function shuffle() {
  //make copy of quote array
  let tempArray = quotes.slice();

  //place random quote in each index of shuffledQuote array, each time removing the select quote from tempArray
  for (let i = 0; i < quotes.length; i++) {
    let random = Math.round(Math.random() * (tempArray.length - 1));
    shuffledQuotes[i] = tempArray[random];
    tempArray.splice(random, 1);
  }
  console.log(shuffledQuotes);
}

function displayQuote() {
  let selected_quote = shuffledQuotes[quoteIndex];
  alert(selected_quote);

  quoteText.innerHTML = selected_quote;

  //shuffles the quotes once they have all been exuasted and resets the quoteIndex
  quoteIndex++;
  if (quoteIndex == quotes.length) {
    quoteIndex = 0;
    shuffle();
  }
}
