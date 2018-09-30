let points = 0;

class Points {
  constructor(pointsNeed) {
    this.pointsNeed = pointsNeed;
  }

  displayPoints() {
    $("#points").text(points);
  }

  levelGain() {

  }

  calculation() {
    this.pointsNeed = (beard.level * 100);
    console.log(this.pointsNeed);
    beard.level++;
  }

  get accses() {
    if(points >= this.pointsNeed) {
      return true;
    }

  }

  reScaleText() {
    $("#beard").on("click", () => {

      if(points >= 10000) {
        $("#points").css({fontSize: "4rem",})
      }

    })
  }

  //Lightining Points Tabel, when points are equal 5000, 10000, and more, u know.
  lightining() {


  }



  //Points Per Second <-- here (Dawid)
  pointsPerSecond() {

  }


}

let point = new Points(5000);
