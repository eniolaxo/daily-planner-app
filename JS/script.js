// Including this so that the document is loaded before executing any code.
$(document).ready()

// Display the current day at the top of the calender when a user opens the planner.
// I selected the ID element and set its text to the current date formatted using the Moment.js library
$("#currentDay").text(moment().format("MMM / D / YYYY"))
// I attached a click event listener to all elements with the class 'saveBtn', so that when a user clicks 
// the save button, the function reads and saves the value of the 'description' using hour as a key.
$(".saveBtn").on("click", function(){
var textArea = $(this).siblings(".description").val()
var hours = $(this).siblings(".hour").text()
localStorage.setItem (hours, textArea);
})


// Present timeblocks for standard business hours when the user scrolls down.
// Made a array variable of all the hours to make it more efficient and quicker to code through
var hoursArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

// Looping through the hours array and get the value from local storage for each hour
hoursArray.forEach(function(hour) {
  var value = localStorage.getItem(hour);
  // This targets the hour id
  $("#" + hour).val(value);
});



// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page