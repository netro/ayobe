/*
var ticketPrice = 2000; // Ticket Price Varibale 

if (ticketPrice < 1500){ // If The Ticket Cheaper Than 1500

    console.log("Yes Its Cheap"); // Dislplay Message That Its Cheap 

} esle if(ticketPrice == 2000){ // If The Ticket Price Is 2000

    console.log("Yes Its Good Price"); //Display Message That Its Good
}else {
    console.log("No Its Expensive"); //Display Message That Its Expensive 
}
if(Condition 1){

}else if (Condition 2){

}else{
    //other Than Condition 
}
*/

var yourAge = prompt("whats Your Age?");

if(yourAge < 18){

    document.getElementById('test').innerHTML = "Sorry Your Age Is " + yourAge + "Your Are Not Allowed Here ";
}else{

    document.getElementById('test').innerHTML = "Hello Your Age Is  " + yourAge + "Your Are Welcome Here ";
}


