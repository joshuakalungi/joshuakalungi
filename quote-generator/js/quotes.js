// for me to be able to get quotes, i need a function to help me fetch the qutes using a quotes API


// global declaration of apiQuotes array
let apiQuotes = [];


async function getQuotes() {
    // apiUrl
    const apiUrl = "https://type.fit/api/quotes";

    // incase an error occurs
    try {
        const response = await fetch(apiUrl);

        // converting the response into a json object
        apiQuotes = response.json();

        // testing purposes
        console.log(apiQuotes);
    } catch (error){
        alert(error);
    }
}

// calling the getRequest function onLoad
getQuotes();