// 1. Quotes are multiple strings that need to be stored in an array.
// 2. Every time the button gets pressed, a random whole number needs to be generated.
// 3. The number will be used as a representation of the array index number for the quote array.
// 4. Once we retrieve the randomly picked quote from the array using our randomly generated whole number, we will place it to the HTML document.


// Time
let startTime =() => {
    const currentDate = new Date();
    let hours =currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    var ampm = "";

    //adds a zero to seconds less than 10
    const checkSeconds =(seconds) => {
    if (seconds <10){seconds=`0${seconds}`};
    return seconds;
    }


    //adds a zero to minutes less than 10
    const checkTime = (minutes) => {
    if (minutes<10) {minutes = `0${minutes}`};  // add zero in front of numbers < 10
    return minutes;
    }


    minutes = checkTime(minutes);  
    seconds = checkSeconds(seconds);

    if (hours > 12) {
    	hours = hours - 12;
    	ampm = " PM";
    } else if (hours == 12){
        hours = 12;
    	ampm = " AM";
    } else if (hours < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  
  if(hours==0) {
    h=12;
  }

    document.getElementById('display').innerHTML = hours+":"+minutes+":"+seconds+ampm;
    let update = setTimeout(()=> {startTime()},500);
}


// //date
const startDate =() => {
    const currentDate = new Date();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("date").innerHTML = days[currentDate.getDay()]+" | "+[currentDate.getMonth()+1]+"/"+currentDate.getDate()+"/"+currentDate.getFullYear();
}


