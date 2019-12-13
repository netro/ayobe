function myAgeInDays(){

    "use strict";

    var myAge = "32";

    return myAge * 365;
}

var ageCalc = myAgeInDays();

document.getElementById("test").innerHTML = "Your Age In Days = " + ageCalc + " Days";