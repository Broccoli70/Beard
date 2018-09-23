$(function() {

  let points = 0,
      pointsNeed = 300;

  let beards = []
  for(let i = 2; i < 10; i++) {
    beards.push("beard_" + i + ".png");
  }

  let nextB = 0;
  let nextQ = 0;
  let beardSize = 1;
  let beardLevel = 1;


  //Points addition - Beard Click
  $("#beard").on("click", () => {
    let light;




    //POINTS GAIN LEVEL <-----------------------------


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

  //-------------------------------------------- New Code / 22.09 23.09 24.09


  //Point class

  class Point {
    constructor() {

    }

    displayPoints() {
      $("#points").text(points);
      $(".needPoints").text(pointsNeed);
    }

  }

  let point = new Point();



  //Beard class
  class Beard {
    constructor(element, increasePoints, grow){
      this.element = element;
      this.increasePoints = increasePoints;
      this.grow = grow;

      }
    buy(id) {
      points -= price;
      }
    getPoints(id) {
        return pps;
      }
    getPrice(id) {
        return price;
      }
    getImage(id) {
        return img;
      }
    growUp() {
      if(beardSize < 1.4) {
        beardSize += this.grow;
      } else {
        beardSize = 1;
      }

      $("." + this.element).css({
        transform: "scale(" + beardSize + ")",
      })

    } //end grow function
    points(element) {

      //increasePoints
      points += this.increasePoints;

      //Display gold point's aniations
      $(element)
      .animate({
        opacity: 0.9,
        marginTop: "-190px",

      }, 100, () => {
        $(".point").css({opacity: 0, marginTop: "-100px"});
      })

    } //end points function

  } //end beard class

    let beard = new Beard("beard", 150, 0.05);
    $(".beard").on( "click" , () => {
      beard.growUp();
      beard.points(".point");
      point.displayPoints();
    })

    point.displayPoints();


  //OppeningCards SCRIPT

  class OppeningCards {
    constructor(element) {
      this.element = element;
      this.counter = 0;
    }

    open() {

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
    }

    close() {

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

    }

    openClose() { //Open openClose Funcition

      if(this.counter == 0) {

        this.open();
        this.counter++;
      } else if(this.counter == 1) {

        this.close();
        this.counter = 0;
      } //End if
    } //End openClose animation

  eventHandler() {

    $("." + this.element).on("click", () => {
      this.openClose();
    })
  }

    //in work



  } //end OppeningCards class




  class Shop extends OppeningCards {
    constructor(elementShop) {
      super(elementShop, elementShop);
      this.elementShop = elementShop;
    }

    beardChoice() {

      $(".shop_menu_item").on("click", (e) => {

        let targetId =  e.target.id;
        if(this.pointCheck) {

          this.openClose();
          $(".shop_menu").css({display: "none"});
          $("#beard").css({background: "url(img/" + targetId + ".png)", backgroundSize: "cover",})
          $(".shop_btn").css({background: "url(img/shop.png)", backgroundSize: "cover",})


        } //end points chceking if
      })
    } //end beardChoice function

  get pointCheck() {
    if(points >= pointsNeed) {
      return true;
    } else {
      return false;
    }
  }

  } //end Shop class


  //Class definiton


  let Weapon = new OppeningCards("weapon");
  let Sklep = new OppeningCards("shop");
  let SklepMenu = new Shop("shop_menu")


  Sklep.eventHandler();
  Weapon.eventHandler();
  SklepMenu.beardChoice();




//------------------------------------------ New Code / 22.09 23.09 24.09


  //Buying a beard
  // $(".shop_menu_item").on("click")
  // {
  //   tempID = parseInt($(".shop_menu_item").attr('id'));    //Getting ID of clicked beard
  //   if( points >= this['beard' + tempID].getPrice(tempID)){
  //     this['beard' + tempID].buy(tempID);
  //     $(".beard").css({
  //       background: url(this['beard' + tempID].getImage(tempID))
  //     });
  //   }
  //
  // }
  //
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

})
