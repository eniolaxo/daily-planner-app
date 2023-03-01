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
// maybe I should make a for each loop going through all the hours instead of one-by-one, to be efficient

var nineAm = localStorage.getItem("9am")
$("#9am").val(nineAm)

var tenAm = localStorage.getItem("10am")
$("#10am").val(tenAm)

var elevenAm = localStorage.getItem("11am")
$("#11am").val(elevenAm)

var twelveAm = localStorage.getItem("12am")
$("#12am").val(twelveAm)

var onePm = localStorage.getItem("1pm")
$("#1pm").val(onePm)

var twoPm = localStorage.getItem("2pm")
$("#2pm").val(twoPm)

var threePm = localStorage.getItem("3pm")
$("#3pm").val(threePm)

var fourPm = localStorage.getItem("4pm")
$("#4pm").val(fourPm)#

var fivePm = localStorage.getItem("5pm")
$("#5pm").val(fivePm)

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page