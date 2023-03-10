$(document).ready(function(){

// Display the current day at the top of the calender when a user opens the planner:
// I selected the ID element and set its text to the current date formatted using the Moment.js library
$("#currentDay").text(moment().format("MMM / D / YYYY"))

// I attached a click event listener to all elements with the class 'saveBtn', so that when a user clicks 
// the save button, the function reads and saves the value of the 'description' using hour as a key.
$(".saveBtn").on("click", function(){
var textArea = $(this).siblings(".description").val()
var time = $(this).parent().attr("id")
localStorage.setItem (time, textArea);
})


// Present timeblocks for standard business hours when the user scrolls down:
// Defining variables for each of the time blocks in the HTML
function currentTime(){
  var currentHour = moment().hours();
  $(".time-block").each(function(){
    var past = parseInt($(this).attr("id").split("-")[1]);

    if (past < currentHour) {
      $(this).addClass("past");
    } else if (past === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
currentTime();


// Save the event in local storage when the save button is clicked in that timeblock.
$(".time-block").each(function() {
  var time = $(this).attr("id");
  var event = localStorage.getItem(time);
  if (event !== null) {
    $(this).children(".description").val(event);
  }
});

})