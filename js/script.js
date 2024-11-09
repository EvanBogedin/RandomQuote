//const button = document.getElementById("quote-button");
const quote_text = document.getElementById("quote-text");
//input name attribute and value attribute
let quote_index = 0;
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

let shuffled_quotes = [];

//this will reduce the chance of getting the same quote two times in a row
function shuffle() {
  let temp_array = quotes.slice();
  for (let i = 0; i < quotes.length; i++) {
    let random = Math.round(Math.random() * (temp_array.length - 1));
    shuffled_quotes[i] = temp_array[random];
    temp_array.splice(random, 1);
  }
}

function displayQuote() {
  //let random = Math.floor(Math.random() * quotes.length);
  let selected_quote = shuffled_quotes[quote_index];
  alert(selected_quote);

  quote_text.innerHTML = selected_quote;

  quote_index++;
  if (quote_index == 10) {
    quote_index = 0;
    shuffle();
  }
}
