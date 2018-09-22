$(function() {

  let points = 0,
      pointsNeed = 1000;

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
    points += (beardLevel*50);

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
      points -= pointsNeed;

      if(points < pointsNeed*2) {
        $("#upgrade").css({filter: "brightness(1)", cursor: "default",})
      }


      //PointsNeed System
      let fifthGrade = 0;
      let multiply = 1;
      for(let i=1; i <= 101; i++) {
        if(fifthGrade % 5 == 0) {
        }
        fifthGrade++;
      }

      if(beardLevel == fifthGrade){
        multiply = 120;
        pointsNeed = pointsNeed + beardLevel * multiply;
      } else{
        multiply = 100;
        pointsNeed = pointsNeed + beardLevel * multiply;
      }
      beardLevel++;
      healthPoint += 150;

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
  let click2 = 0;
  $(".quest_btn").on("click", () => {

    if(click == 0) {
      $(".quest_info").css({display: "grid"});
      click++;
    } else if(click == 1) {
      $(".quest_info").css({display: "none"});
      click = 0;
    }
  });

  $(".shop_btn").on("click", () => {

    if(click2 == 0) {
      $(".shop_btn").css({background: "url(img/shop_open.png)", backgroundSize: "cover",})
      $(".shop_menu").css({display: "grid"});
      click2++;
    } else if(click2 == 1) {
      $(".shop_menu").css({display: "none"});
      $(".shop_btn").css({background: "url(img/shop.png)", backgroundSize: "cover",})
      click2 = 0;
    }

  })

  $(".shop_menu_item").on("click", (e) => {

    let targetId =  e.target.id;
    if(points >= pointsNeed) {
      $("#" + targetId).css({filter: "brightness(1.2)"})
      $(".shop_menu").css({display: "none"});
      $("#beard").css({background: "url(img/" + targetId + ".png)", backgroundSize: "cover",})
      $(".shop_btn").css({background: "url(img/shop.png)", backgroundSize: "cover",})
      click2 = 0;

      //Change animation
      $("#beard").animate({
        width: "0px",
        height: "0px",
        display: 0,

      }, 200, () => {

        $("#beard").css({background: "url(img/" +  targetId + ")", backgroundSize: "cover"});
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
          $(".beard_queue").css({background: "url(img/" +  targetId + ")", backgroundSize: "cover"});
          $("#beard").css({width: "250px", height: "250px", opacity: 1,})
        })
      })
      nextQ++;

      //Change animation part.2

      $(".scissors")
      .css({
        display: "grid",
      })
      .animate({
        marginLeft: "150px",

      }, 500, () => {
        $(".scissors").css({marginLeft: "-150px", display: "none",})
      })
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
