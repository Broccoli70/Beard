let healthPoint = 0,
    actualHealthPoint = 0;

$(function() {

let beardClass,
    icon = ["url(../img/class_bin.png)", "url(../img/class_clean.png)"],
    value;

  //DIRTY -- CLASS
  $("#dirty").on("click", () => {
    beardClass = "Dirty";
    healthPoint = 400;
    value = 0;
    displayPoints();
  })


  //STAR -- CLASS
  $("#clean").on("click", () => {
    beardClass = "Clean";
    healthPoint = 100;
    value = 1;
    displayPoints();
  })


  //BOTH BUTTONS
  let elementsToDisplay = ["#beardClass", "#HP", "#upgrade", ".weapon",
                           ".beardPoints_info", ".quest_btn", ".shop",".needPoints"];


   for(let i=0; i < elementsToDisplay.length; i++) {
     $(elementsToDisplay[i]).css({display: "grid",});
   }
   $(".classPick").css({display: "none",})

  $(".classPick__btn").on("click", (e) => {

  })

  //STATS DISPLAY
  function displayPoints() {

    $(".beardClass__text").text("Class: " + beardClass);
    $(".beardClass__icon").css({background: icon[value], backgroundSize: "cover"})
    $(".healthPoint__text").text(healthPoint + "/" + healthPoint);
  }


})
