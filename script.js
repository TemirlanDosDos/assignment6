$(document).ready(function () {
  console.log("jQuery is ready!");

  // Task 1
  $("h1").css("color", "blue");
  $("#greeting").text("Hello, I am Temirlan!");
  $(".intro").css("font-weight", "bold");
  $("#light").on("click", function () {
    $("body").css("background-color", "white");
    $("body").css("color", "black");
  });
  $("#dark").on("click", function () {
    $("body").css("background-color", "gray");
    $("body").css("color", "white");
  });

  // Task 2
  $("#hide").on("click", function () { $("#facts").hide(); });
  $("#show").on("click", function () { $("#facts").show(); });
  $("#toggle").on("click", function () { $("#facts").toggle(); });

  // Task 3
  $("#fade-in").on("click", function () { $("#gallery img").fadeIn(); });
  $("#fade-out").on("click", function () { $("#gallery img").fadeOut(); });
  $("#fade-toggle").on("click", function () { $("#gallery img").fadeToggle(); });

  // Task 4
  $(".heading").on("click", function () {
    $(this).next().slideToggle();
  });
  $("#open-panels").on("click", function () { $(".panel").slideDown(); });
  $("#close-panels").on("click", function () { $(".panel").slideUp(); });

  // Task 5
  $("#add-skill").on("click", function () {
    const skill = $("#new-skill").val().trim();
    if (skill === "") { return; }
    $("#skills").append($("<li>").text(skill));
    $("#new-skill").val("");
  });
  $("#prepend-skill").on("click", function () {
    const skill = $("#new-skill").val().trim();
    if (skill === "") { return; }
    $("#skills").prepend($("<li>").text(skill));
    $("#new-skill").val("");
  });
  $("#remove-skill").on("click", function () {
    $("#skills li").last().remove();
  });

  // Task 6
  $("#change-link").on("click", function () {
    $("#social-link").attr("href", "https://github.com/TemirlanDosDos/assignment55555");
    $("#social-link").text("Assignment 5");
  });

  // Task 7
  $("#contact-form").on("submit", function (event) { event.preventDefault(); });
  $("#name").on("input", function () {
    $("#name-preview").text($("#name").val());
  });
  $("#email").on("input", function () {
    $("#email-preview").text($("#email").val());
  });

  // Task 8
  let expanded = false;
  $("#animate-skills").on("click", function () {
    if (expanded === false) {
      $("#html-bar").animate({width: "80%"});
      $("#css-bar").animate({width: "60%"});
      $("#js-bar").animate({width: "40%"});
      expanded = true;
    } else {
      $(".bar").animate({width: "0%"});
      expanded = false;
    }
  });
});
