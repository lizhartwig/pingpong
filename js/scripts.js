$(document).ready(function() {
var number = prompt("Please enter a number higher than 50 but under 100.");

if (number > 50 && number < 100){

for (i = 1; i <= number; i++) {

  if (i % 3 == 0 && i % 5 == 0) {
      document.write("Ping-Pong");
  } else if (i % 3 == 0) {
      document.write("Ping");
  } else if (i % 5 == 0) {
      document.write("Pong");
  } else {
      document.write(i);
    }
  document.write("<br>");
  }

}

else{document.write("The number you entered, " + number +
  ", does not fit the program parameters. Please reload and try again.");}