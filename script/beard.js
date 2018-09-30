let beardSize = 1;

class Beard {
  constructor(element, increasePoints, grow){
    this.element = element;
    this.increasePoints = increasePoints;
    this.grow = grow;
    this.level = 1;

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

  get levelUp() {

    if ( point.accses ) {
      this.level++;
    }

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

  }



}

let beard = new Beard("beard", 250, 0.05);
