//GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
Here is a link that I used to help me with this part: https://momentjs.com/docs/#/displaying/
Also, lesson 5.4.5 talks about how to use moment.js to add current date

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hour.
An example of how one of my time blocks is coded. You will need to repeat this code for all nine time blocks in html
  
<div class="container">
      <div class="row">
        <!-- time -->
        <p class="col-1 hour">
          9AM
        </p>
        <textarea id="9" class="col-10 description">test</textarea>
        <button class="col-1 saveBtn">Save</button>
      </div>



// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
I havn't done this part yet but I know that it is taught in lesson 5.4.6


// WHEN I click into a time block
// THEN I can enter an event
*use the <textarea> element*


// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
4.4.5 teaches this part. I have written the code to save the tasks to local storage but I havnt written the code to pull the taks from local storage yet
$(document).ready(function() {
    // select the save button
    var saveButton = $(".saveBtn")
    // add event listener
    saveButton.on("click", function(event) {
        event.preventDefault();
        var userTask = $(this).siblings("textarea").val();
        var hour = $(this).siblings("textarea").attr("id");
        localStorage.setItem(hour, userTask);

    });
  
// WHEN I refresh the page
//THEN the saved events persist
  Lesson 4.5.6 teaches how to pull items from local storage so review that section to code this part
