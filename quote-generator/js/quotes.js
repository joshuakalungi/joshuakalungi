// for me to be able to get quotes, i need a function to help me fetch the qutes using a quotes API


// variables to represent the HTML objects
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const author = document.getElementById('author');
const quoteBtn = document.getElementById('new-quote');
const twitterBtn = document.getElementById('twitter-button');
const loader = document.getElementById('loader');

// show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

function newQuote() {
    loading();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // passing author content
    // check if Author field is blank and replace it with unknown
    if(!quote.author){
        author.textContent='Unknown'
    } else{
        let authorName = quote.author.split(',');
        authorName.pop();
        author.textContent = authorName.join(',');
    }
    // check quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    }else {
        quoteText.classList.remove('long-quote');
    }
    // passing text content
    quoteText.textContent = quote.text;
    // Hide Loader
    complete();
    
} 


// global declaration of apiQuotes array
let apiQuotes = [];


async function getQuotes() {
    loading();
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
        // stop loading
        complete();
    }
}


// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${author.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
quoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// calling the getRequest function onLoad
getQuotes();


