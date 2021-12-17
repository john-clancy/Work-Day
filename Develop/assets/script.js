//GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var date =  moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
document.getElementById("currentDay") .innerHTML=date;
/* //WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
I havn't done this part yet but I know that it is taught in lesson 5.4.6  */

/* // WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage */
/* 4.4.5 teaches this part. I have written the code to save the tasks to local storage but I havnt written the code to pull the taks from local storage yet */
$(document).ready(function() {
    // select the save button
    var saveButton = $(".saveBtn")
    // add event listener
    saveButton.on("click", function(event) {
        event.preventDefault();
        var userTask = $(this).siblings("textarea").val();
        var hour = $(this).siblings("textarea").attr("id");
        localStorage.setItem(hour, userTask);
    })})
