// Array of quotes with quote and author
const quotes = [
  {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
  },
  {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
  },
  {
      quote: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs"
  },
  {
      quote: "If life were predictable it would cease to be life, and be without flavor.",
      author: "Eleanor Roosevelt"
  },
  {
      quote: "If you look at what you have in life, you'll always have more.",
      author: "Oprah Winfrey"
  },
  {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
  }
];

// Function to generate a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Function to update the displayed quote and author
function displayQuote() {
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");

  const randomQuote = getRandomQuote();
  quoteElement.textContent = `"${randomQuote.quote}"`;
  authorElement.textContent = `- ${randomQuote.author}`;
}

// Function to reset the quote display to default
function resetQuote() {
  document.getElementById("quote").textContent = '"Click the button to get a quote!"';
  document.getElementById("author").textContent = '- Author';
}

// Add event listener to the new quote button
document.getElementById("new-quote").addEventListener("click", displayQuote);

// Add event listener to the reset button
document.getElementById("reset-quote").addEventListener("click", resetQuote);
