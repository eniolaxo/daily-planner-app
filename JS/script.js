// Display the current day at the top of the calender when a user opens the planner.

// Present timeblocks for standard business hours when the user scrolls down.
$("#currentDay").text(moment().format("MMM / D / YY"))
$(".saveBtn").on("click", function(){
var textArea = $(this).siblings(".description").val()
var hours = $(this).siblings(".hour").text()
localStorage.setItem (hours, textArea);

})

var nineAm = localStorage.getItem("9am")
$("#9am").val(nineAm)
var nineAm = localStorage.getItem("9am")
$("#9am").val(nineAm)
// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page