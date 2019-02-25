// This is the business logic:
$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
      $("#after_submit").show();
    var number1 = parseInt($("input:radio[name=choice]:checked").val());
    var number2 = parseInt($("input:radio[name=choice2]:checked").val());
    var number3 = parseInt($("input:radio[name=choice3]:checked").val());
    var number4 = parseInt($("input:radio[name=choice4]:checked").val());
    var total = (number1 + number2 + number3 + number4);
    var percentage = ((total / 4) * 100);
    $("#result").text("You have scored: " + percentage + "%");
    var pictures = ["images/win.gif", "images/meh.gif", "images/lose.gif"];
    var messages = ["Nice Trial,passed!", "Average,keep up", "Need to study more,fail"];
    var score;
    if (percentage >= 80 && percentage<=100) {
        $("#message").text(messages[0])
        document.getElementById('pictures').src=pictures[0]
    }
    else if (percentage >=50 && percentage<80) {
      $("#message").text(messages[1])
      document.getElementById('pictures').src=pictures[1]
    }
    else {
      $("#message").text(messages[2])
      document.getElementById('pictures').src=pictures[2]
    }



    if (percentage > 80) {
      $("#statement").text("Nice trial,passed");
    } else if ((percentage > 50) && (percentage < 79)) {
      $("#statement").text("Average,keep up.");
    } else {
      $("#statement").text("Need to study more,fail.");
    }

});
});
