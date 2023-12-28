// for me to be able to get quotes, i need a function to help me fetch the qutes using a quotes API


// variables to represent the HTML objects
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const author = document.getElementById('author');
const quoteBtn = document.getElementById('new-quote');

function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    quoteText.textContent = quote.text;

    author.textContent = quote.author;
} 


// global declaration of apiQuotes array
let apiQuotes = [];


async function getQuotes() {
    // apiUrl
    const apiUrl = "https://type.fit/api/quotes";


    // incase an error occurs
    try {
        const response = await fetch(apiUrl);

        // converting the response into a json object
        apiQuotes = await response.json();

        // testing purposes
        console.log(apiQuotes);
        // call the random generator function
        newQuote();

    } catch (error){
        alert(error);
    }
}

// calling the getRequest function onLoad
getQuotes();


