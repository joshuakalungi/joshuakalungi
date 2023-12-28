// for me to be able to get quotes, i need a function to help me fetch the qutes using a quotes API

function newQuote() {
    console.log(apiQuotes[Math.floor(Math.random() * apiQuotes.length)]);
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




const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://healthruwords.p.rapidapi.com/v1/quotes/',
  params: {
    t: 'Wisdom',
    maxR: '1',
    size: 'medium',
    id: '731'
  },
  headers: {
    'X-RapidAPI-Key': '2b9fd93f8bmsh1d5a56fcd44dac9p13d78fjsn15b8988dcccb',
    'X-RapidAPI-Host': 'healthruwords.p.rapidapi.com'
  }
};
