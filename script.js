

$(document).ready(function () {
    var dateTime = $('#dateTime');
    var currentHour = moment().hour();
    // Function to update the date and time
    function updateDateTime() {
      const now = new Date();
      const currentHour = now.getHours();
      const currentDateTime = now.toLocaleString();
      document.querySelector('#datetime').textContent = currentDateTime;
      updateTimeBlock(currentHour);
    }
  
    // Function to update the time block classes (past, present, future)
    function updateTimeBlock() {
      $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("-")[1]);
        console.log("currentHour " + currentHour);
        console.log("timeBlock " + timeBlock);

          if (timeBlock < currentHour) {
              $(this).removeClass("present future").addClass("past");
          } else if (timeBlock === currentHour) {
              $(this).removeClass("past future").addClass("present");
          } else {
              $(this).removeClass("past present").addClass("future");
          }
      });
    
    }
    // Call the `updateDateTime` function every second
    setInterval(updateDateTime, 1000);
  
    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
    
        localStorage.setItem(time, value);
    })
    
    $("#hour-9AM .description").val(localStorage.getItem("hour-9AM"));
    $("#hour-10AM .description").val(localStorage.getItem("hour-10AM"));
    $("#hour-11AM .description").val(localStorage.getItem("hour-11AM"));
    $("#hour-12AM .description").val(localStorage.getItem("hour-12AM"));
    $("#hour-12AM .description").val(localStorage.getItem("hour-13PM"));
    $("#hour-12AM .description").val(localStorage.getItem("hour-14PM"));
    $("#hour-12AM .description").val(localStorage.getItem("hour-15PM"));
    $("#hour-12AM .description").val(localStorage.getItem("hour-16PM"));
    $("#hour-12AM .description").val(localStorage.getItem("hour-17PM"));
    
    printDateTime();
    updateTimeBlock();
    
    
  });
  
