$(function() {

  let points = 10000000,
      pointsNeed = 300;

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
        multiply = 10;
        pointsNeed = 300;
      } else{
        multiply = 10;
        pointsNeed = 300;
      }
      beardLevel++;
      healthPoint += 150;

      displayPoints();

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

  //OppeningCards SCRIPT
  class OppeningCards {
    constructor(element) {
      this.element = element;
      this.counter = 0;
    }

    openClose() { //Open openClose Funcition

      //Script respoinsible to opening and closing every elements menu
      if(this.counter == 0) { //Start if

        $("." + this.element) //Recall to element
        //Change picture to open
        .css({
          background: "url(img/" +  this.element + "_open.png) center center no-repeat",
          backgroundSize: "cover",
        })

        $("." + this.element + "_menu") //Recall to element_menu
        //CSS modification
        .css({
          display: "grid",
          background: "url(img/" +  this.element + "_menu.png) center center no-repeat",
        })
        this.counter++; //Increment counter

      } else if(this.counter == 1) {

        $("." + this.element) //Recall to element
        //Change picture to close
        .css({
          background: "url(img/" +  this.element + ".png) center center no-repeat",
          backgroundSize: "cover",
        })

        $("." + this.element + "_menu") //Recall to element_menu
        //CSS modification
        .css({
          display: "none",
        });
        this.counter = 0; //Increment set value to 0
      } //End if
    } //End openClose animation

  blockOtherElement(blockElement) {

  }


  }

  //Class definiton
  let access;
  let Weapon = new OppeningCards("weapon");
  let Shop = new OppeningCards("shop");

  $(".weapon").on("click", () => {
    Weapon.openClose();
    Weapon.blockOtherElement(".shop_menu");
  });

  $(".shop").on("click", () => {
    Shop.openClose();
    Shop.blockOtherElement(".weapon_menu");
  });


  // $(".shop_menu_item").on("click", (e) => {
  //
  //   let targetId =  e.target.id;
  //   if(points >= pointsNeed) {
  //     $("#" + targetId).css({filter: "brightness(1.2)"})
  //     $(".shop_menu").css({display: "none"});
  //     $("#beard").css({background: "url(img/" + targetId + ".png)", backgroundSize: "cover",})
  //     $(".shop_btn").css({background: "url(img/shop.png)", backgroundSize: "cover",})
  //     click2 = 0;
  //
  //   }
  //
  // })

  //END OF OppeningCards SCRIPT


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
  $(".healthPoint__text").text(healthPoint + "/" + healthPoint);

};

})
