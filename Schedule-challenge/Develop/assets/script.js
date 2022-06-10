var date =  moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
document.getElementById("currentDay") .innerHTML=date;

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

$(document).ready(function(){
    for (i = 9; i < 18; i++){
        var currentHour ="" +i+ "";
        var currentHourText = localStorage.getItem(currentHour);
        if (currentHour){
            document.getElementById(currentHour).textContent = currentHourText;
        }
        var hourCheck = (moment().hour())
        if (currentHour <= hourCheck) {
            if (currentHour = hourCheck) {
                document.getElementById(currentHour).classList.add("present");
            } else {
                document.getElementById(currentHour).classList.add("past");
            }
        } else {
                document.getElementById(currentHour).classList.add("future")
        }
    }
})