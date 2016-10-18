$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();

    $("button#green").click(function() {
      $("body").removeClass();
      $("body").addClass("green-background");
    });

    $("button#yellow").click(function() {
      $("body").removeClass();
      $("body").addClass("yellow-background");
    });

    $("button#white").click(function() {
      $("body").removeClass();
      $("body").addClass("white-background");
    });

  });
});
