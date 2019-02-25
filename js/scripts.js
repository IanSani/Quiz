// This is the user interface logic:
$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var number1=parseInt($("input:radio[name=number1]:checked").val());
    var number2=parseInt($("input:radio[name=number2]:checked").val());
    var number3=parseInt($("input:radio[name=number3]:checked").val());
    var number4=parseInt($("input:radio[name=number4]:checked").val());
    var total=(number1+number2+number3+number4);

  });
});
