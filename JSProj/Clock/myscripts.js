function updateClock(){
    var currentTime = new Date();

    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    currentHours = (currentHours < 10 ? "0" : "" ) + currentHours;
    currentMinutes = (currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "" ) + currentSeconds;

    var timeOfDay = (currentHours < 12) ? "AM" : "PM";

    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

    // Convert an hours component of "0" to "12"
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  // Update the time display
    document.getElementById("clock_main").innerHTML = currentTimeString;
    let t = setTimeout(function(){ updateClock() }, 1000);
}

updateClock();


function background() {
  var thisColor = document.body.style.backgroundColor = "red";
  var thatColor = document.body.style.backgroundColor = "green";

  var button = document.getElementById("push")
   var x = 0;
  
  if (x=1) {
    return thisColor;
  } else {
    return thatColor;
  }

}