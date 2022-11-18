let counter = 0;
setInterval(inc_num, 30);

function inc_num() {
  for(var i =0; i<=100; i++){
    counter = i;
    if(i == 93){
      $("#number1").html(i + "%");
    }else if(i == 90){
      $("#number2").html(i + "%");
    }else if(i == 85){
      $("#number4").html(i + "%");
    }else if(i == 80){
      $("#number6").html(i + "%");
      $("#number3").html(i + "%");
    }else if(i == 50){
      $("#number5").html(i + "%");
    }else{
      clearInterval();
    }
  }
}

$(".about-link").on("click", work);
$(".education-link").on("click", work2);
$(".skills-link").on("click", work3);
$(".hire-btn").on("click", work4);
$(".arrow").on("click", work5);
// $(".about-link").on("click", work4);

function work(){
  // alert("Hello! I am an alert box!!");
  $("#home").removeClass("active");
  $("#about").addClass("active");
  $("#skills").removeClass("active");
  $("#education").removeClass("active");
  $("#contact-me").removeClass("active");
};
function work2(){
  // alert("Hello! I am an alert box!!");
  $("#education").addClass("active");
  $("#home").removeClass("active");
  $("#about").removeClass("active");
  $("#skills").removeClass("active");
  $("#contact-me").removeClass("active");
};
function work3(){
  // alert("Hello! I am an alert box!!");
  $("#home").removeClass("active");
  $("#about").removeClass("active");
  $("#skills").addClass("active");
  $("#education").removeClass("active");
  $("#contact-me").removeClass("active");
};
function work4(){
  // alert("Hello! I am an alert box!!");
  $("#home").removeClass("active");
  $("#about").removeClass("active");
  $("#skills").removeClass("active");
  $("#education").removeClass("active");
  $("#contact-me").addClass("active");
};
function work5(){
  // alert("Hello! I am an alert box!!");
  $("#home").addClass("active");
  $("#about").removeClass("active");
  $("#skills").removeClass("active");
  $("#education").removeClass("active");
  $("#contact-me").removeClass("active");
};


// $(".about-link").on("click", job);
//
// function() job{
//   alert("Hello! I am an alert box!!");
//   $("#home").removeClass("active");
//   $("#about").addClass("active");
// }

// $("button").click(function() {
//   alert("A link was clicked");
//   // $("#id").removeClass("active");
//   // $("#about").addClass("active");
// });
