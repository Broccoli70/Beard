$(function() {

  let points = 0,
      pointsNeed = 150;

  let words = ["ZAJEBRODA", "OCTOPUSOS", "OCTOPUSOS",  "NIC",  "OMG",];

  let beards = []
  for(let i = 2; i < 10; i++) {
    beards.push("beard_" + i + ".png");
  }

  let nextB = 0;
  let nextQ = 0;
  let beardSize = 1;

  let beardLevel = 1;

  displayPoints();

  //Points addition - Beard Click
  $("#beard").on("click", () => {
    let light;

    if(beardSize < 1.4) {
      beardSize += 0.05;
    } else {
      beardSize = 1;
    }

    $("#beard").css({
      transform: "scale(" + beardSize + ")",
    })
    $("#point")
    .animate({
      opacity: 0.9,
      marginTop: "-190px",

    }, 100, () => {
      $("#point").css({opacity: 0, marginTop: "-100px"});
    })


    //POINTS GAIN LEVEL <-----------------------------
    points += (beardLevel*100);

    displayPoints();

    //Upgrade igniter
    if(points >= pointsNeed) {
      $("#upgrade")
      .css({
        cursor: "pointer",
        filter: "brightness(1.2)",
      })
    }

    //Resize digit
    if(points >= 10000) {
      $("#points").css({fontSize: "4rem",})
    }

  })



  //Upgrade Clicking
  $("#upgrade").on("click", () => {

    if(points >= pointsNeed) {
      beardSize = 1;
      $("#beard").css({
        transform: "scale(" + beardSize + ")",
        filter: " brightness(1)",
      })
      points = points - pointsNeed;

      if(points < pointsNeed*2) {
        $("#upgrade").css({filter: "brightness(1)", cursor: "default",})
      }
      if(beardLevel%2==0){
        pointsNeed *= 1.5;
      }
      else{
        pointsNeed *= 2;
      }
      healthPoint += 150;
      beardLevel++;
      //Change animation
      $("#beard").animate({
        width: "0px",
        height: "0px",
        display: 0,

      }, 200, () => {

        $("#beard").css({background: "url(img/" + beards[nextB] + ")", backgroundSize: "cover"});
        nextB++;
        $(".beard_queue")
        .css({
          display: "grid",
        })
        .animate({
          width: "250px",
          height: "250px",
        }, 400, () => {
          $(".beard_queue").css({display: "none", width: "0px", height: "0px"})
          $(".beard_queue").css({background: "url(img/" + beards[nextQ] + ")", backgroundSize: "cover"});
          $("#beard").css({width: "250px", height: "250px", opacity: 1,})
        })
      })
      nextQ++;

      //Change animation part.2

      $(".star")
      .css({
        display: "grid",
      })
      .animate({
        marginLeft: "200px",
        opacity: 0,
      }, 750, () => {
        $(".star").css({marginLeft: "-75px", display: "none", opacity: 1,})
      })





      displayPoints();
    }

  })

  //Weapon menu
  $(".weapon__open__menu").on("click", () => {
    $(".weapon__menu").css({display: "grid"})
    $("#weapon").css({cursor: "default"})
    $(".weapon__open__menu").css({filter: "brightness(1.5)"})

  })

  //Weapon back
  $(".weapon__menu__back").on("click", () => {
    $(".weapon__menu").css({display: "none"});
    $(".weapon__open__menu").css({filter: "brightness(1)"})

  })


  let click = 0;
  $(".quest_btn").on("click", () => {

    $(".weapon__open__menu").css({filter: "brightness(1.5)"})

    if(click == 0) {
      $(".quest_info").css({display: "grid"});
      click++;
    } else if(click == 1) {
      $(".quest_info").css({display: "none"});
      click = 0;
    }

  })


//nonselection script
$("html").attr('unselectable','on')
       .css({'-moz-user-select':'-moz-none',
             '-moz-user-select':'none',
             '-o-user-select':'none',
             '-khtml-user-select':'none',
             '-webkit-user-select':'none',
             '-ms-user-select':'none',
             'user-select':'none'
}).bind('selectstart', function(){ return false; });

function displayPoints() {
  $("#points").text(points);
  $("#upgrade").text("UPGRADE" + "\n" + points + " / " + pointsNeed);
  $(".weapon__text").text("Buy");
  $(".healthPoint__text").text(healthPoint + "/" + healthPoint);

};


})
