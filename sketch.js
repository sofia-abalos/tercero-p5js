var palpito = false;
function setup() {
  createCanvas(400, 500);
  background(255);
  strokeWeight(2);
}
function draw() {

  strokeWeight(2 + 3 * sin(((palpito + 1) * frameCount) / 8));

  if (mouseIsPressed === true) {
    //Fila 1 lila
    fill("#ad2bad");
    rect(0, 0, 90, 30);

    fill("#ad2bad");
    rect(220, 0, 40, 80);

    //Fila 1 mostaza
    fill("#f7db15");
    rect(90, 0, 50, 30);

    //Fila 1 rosa
    fill("#e42692");
    rect(140, 0, 80, 30);

    fill("#e42692");
    rect(260, 0, 70, 30);

    //Fila 1 verde
    fill("#88c425");
    rect(330, 0, 30, 80);

    //Fila 1 azul
    fill("#2f2bad");
    rect(360, 0, 41, 140);

    //Fila 2 mostaza
    fill("#f7db15");
    rect(260, 30, 70, 50);

    //Fila 2 verde
    fill("#88c425");
    rect(0, 30, 20, 110);

    fill("#88c425");
    rect(60, 30, 90, 50);

    //Fila 2 azul
    fill("#2f2bad");
    rect(20, 30, 40, 110);

    fill("#2f2bad");
    rect(150, 30, 70, 50);

    //Fila 3 lila
    fill("#ad2bad");
    rect(60, 80, 40, 90);

    fill("#ad2bad");
    rect(290, 80, 70, 60);

    //Fila 3 mostaza
    fill("#f7db15"); //mostaza
    rect(140, 80, 50, 60);

    //Fila 3 rosa
    fill("#e42692"); //rosa
    rect(100, 80, 40, 90);

    //Fila 3 verde
    fill("#88c425");
    rect(190, 80, 60, 60);

    //Fila 3 azul
    fill("#2f2bad");
    rect(250, 80, 40, 60);

    //Fila 4 lila
    fill("#ad2bad");
    rect(200, 140, 50, 60);

    //Fila 4 mostaza
    fill("#f7db15");
    rect(0, 140, 20, 90);

    fill("#f7db15"); //mostaza
    rect(320, 140, 81, 60);

    //Fila 4 rosa
    fill("#e42692");
    rect(20, 140, 40, 90);

    fill("#e42692");
    rect(250, 140, 70, 60);

    //Fila 4 azul
    fill("#2f2bad");
    rect(140, 140, 60, 30);

    //Fila 5 lila
    fill("#ad2bad");
    rect(0, 230, 60, 60);

    //Fila 5 mostaza
    fill("#f7db15");
    rect(100, 170, 60, 60);

    //Fila 5 verde
    fill("#88c425");
    rect(160, 170, 40, 60);

    //Fila 5 azul
    fill("#2f2bad");
    rect(60, 170, 40, 60);

    //Fila 6 lila
    fill("#ad2bad");
    rect(280, 200, 60, 90);

    //Fila 6 mostaza
    fill("#f7db15");
    rect(200, 200, 80, 60);

    //Fila 6 rosa
    fill("#e42692");
    rect(340, 200, 61, 90);

    //Fila 7 lila
    fill("#ad2bad");
    rect(0, 230, 60, 60);
    fill("#ad2bad");
    rect(160, 230, 40, 60);

    //Fila 7 rosa
    fill("#e42692");
    rect(100, 230, 60, 60);

    //Fila 7 verde
    fill("#88c425");
    rect(60, 230, 40, 60);

    //Fila 8 rosa
    fill("#e42692");
    rect(200, 260, 50, 90);

    //Fila 8 verde
    fill("#88c425");
    rect(250, 260, 30, 90);

    //Fila 9 mostaza
    fill("#f7db15");
    rect(60, 290, 30, 80);
    fill("#f7db15");
    rect(340, 290, 61, 60);

    //Fila 9 rosa
    fill("#e42692");
    rect(0, 290, 60, 80);

    //Fila 9 verde
    fill("#88c425");
    rect(140, 290, 60, 60);

    //Fila 9 azul
    fill("#2f2bad");
    rect(90, 290, 50, 60);
    fill("#2f2bad");
    rect(280, 290, 60, 60);

    //Fila 10 lila
    fill("#ad2bad");
    rect(160, 350, 70, 70);
    fill("#ad2bad");
    rect(330, 350, 45, 120);

    //Fila 10 mostaza
    fill("#f7db15");
    rect(230, 350, 50, 70);

    //Fila 10 rosa
    fill("#e42692");
    rect(90, 350, 70, 70);
    fill("#e42692");
    rect(280, 350, 50, 120);

    //Fila 10 verde
    fill("#88c425");
    rect(375, 350, 26, 120);

    //Fila 11 lila
    fill("#ad2bad");
    rect(0, 370, 45, 100);

    //Fila 11 verde
    fill("#88c425");
    rect(45, 370, 45, 100);

    //Fila 12 mostaza
    fill("#f7db15");
    rect(90, 420, 70, 50);

    //Fila 12 verde
    fill("#88c425");
    rect(160, 420, 50, 91);

    //Fila 12 azul
    fill("#2f2bad");
    rect(210, 420, 70, 91);

    //Fila 13 lila
    fill("#ad2bad");
    rect(90, 470, 70, 31);

    //Fila 13 mostaza
    fill("#f7db15");
    rect(280, 470, 121, 31);

    //Fila 13 azul
    fill("#2f2bad");
    rect(0, 470, 90, 31);
  } else {
    if (mouseIsPressed === false) {
      //Fila 1 lila
      fill(190, 180, 173);
      rect(0, 0, 90, 30);
      fill(190, 180, 173);
      rect(220, 0, 40, 80);

      //Fila 1 mostaza
      fill(190, 145, 14);
      rect(90, 0, 50, 30);

      //Fila 1 rosa
      fill(221, 182, 176);
      rect(140, 0, 80, 30);
      fill(221, 182, 176);
      rect(260, 0, 70, 30);

      //Fila 1 verde
      fill(141, 180, 149);
      rect(330, 0, 30, 80);

      //Fila 1 azul
      fill(108, 130, 167);
      rect(360, 0, 41, 140);

      //Fila 2 mostaza
      fill(190, 145, 14);
      rect(260, 30, 70, 50);

      //Fila 2 verde
      fill(141, 180, 149);
      rect(0, 30, 20, 110);
      fill(141, 180, 149);
      rect(60, 30, 90, 50);

      //Fila 2 azul
      fill(108, 130, 167);
      rect(20, 30, 40, 110);
      fill(108, 130, 167);
      rect(150, 30, 70, 50);

      //Fila 3 lila
      fill(190, 180, 173);
      rect(60, 80, 40, 90);
      fill(190, 180, 173);
      rect(290, 80, 70, 60);

      //Fila 3 mostaza
      fill(190, 145, 14);
      rect(140, 80, 50, 60);

      //Fila 3 rosa
      fill(221, 182, 176);
      rect(100, 80, 40, 90);

      //Fila 3 verde
      fill(141, 180, 149);
      rect(190, 80, 60, 60);

      //Fila 3 azul
      fill(108, 130, 167);
      rect(250, 80, 40, 60);

      //Fila 4 lila
      fill(190, 180, 173);
      rect(200, 140, 50, 60);

      //Fila 4 mostaza
      fill(190, 145, 14);
      rect(0, 140, 20, 90);
      fill(190, 145, 14);
      rect(320, 140, 81, 60);

      //Fila 4 rosa
      fill(221, 182, 176);
      rect(20, 140, 40, 90);
      fill(221, 182, 176);
      rect(250, 140, 70, 60);

      //Fila 4 azul
      fill(108, 130, 167);
      rect(140, 140, 60, 30);

      //Fila 5 lila
      fill(190, 180, 173);
      rect(280, 200, 60, 90);

      //Fila 5 mostaza
      fill(190, 145, 14);
      rect(100, 170, 60, 60);

      //Fila 5 verde
      fill(141, 180, 149);
      rect(160, 170, 40, 60);
      //Fila 5 azul
      fill(108, 130, 167);
      rect(60, 170, 40, 60);

      //Fila 6 mostaza
      fill(190, 145, 14);
      rect(200, 200, 80, 60);

      //Fila 6 rosa
      fill(221, 182, 176);
      rect(340, 200, 61, 90);

      //Fila 7 lila
      fill(190, 180, 173);
      rect(0, 230, 60, 60);
      fill(190, 180, 173);
      rect(160, 230, 40, 60);

      //Fila 7 rosa
      fill(221, 182, 176);
      rect(100, 230, 60, 60);

      //Fila 7 verde
      fill(141, 180, 149);
      rect(60, 230, 40, 60);

      //Fila 8 rosa
      fill(221, 182, 176);
      rect(200, 260, 50, 90);

      //Fila 8 verde
      fill(141, 180, 149);
      rect(250, 260, 30, 90);

      //Fila 9 mostaza
      fill(190, 145, 14);
      rect(60, 290, 30, 80);
      fill(190, 145, 14);
      rect(340, 290, 61, 60);

      //Fila 9 rosa
      fill(221, 182, 176);
      rect(0, 290, 60, 80);

      //Fila 9 verde
      fill(141, 180, 149);
      rect(140, 290, 60, 60);

      //Fila 9 azul
      fill(108, 130, 167);
      rect(90, 290, 50, 60);
      fill(108, 130, 167);
      rect(280, 290, 60, 60);

      //Fila 10 lila
      fill(190, 180, 173);
      rect(160, 350, 70, 70);
      fill(190, 180, 173);
      rect(330, 350, 45, 120);

      //Fila 10 mostaza
      fill(190, 145, 14);
      rect(230, 350, 50, 70);

      //Fila 10 rosa
      fill(221, 182, 176);
      rect(90, 350, 70, 70);
      fill(221, 182, 176);
      rect(280, 350, 50, 120);

      //Fila 10 verde
      fill(141, 180, 149);
      rect(375, 350, 26, 120);

      //Fila 11 lila
      fill(190, 180, 173);
      rect(0, 370, 45, 100);

      //Fila 11 verde
      fill(141, 180, 149);
      rect(375, 350, 26, 120);
      fill(141, 180, 149);
      rect(45, 370, 45, 100);

      //Fila 12 mostaza
      fill(190, 145, 14);
      rect(90, 420, 70, 50);

      //Fila 12 verde
      fill(141, 180, 149);
      rect(160, 420, 50, 91);

      //Fila 12 azul
      fill(108, 130, 167);
      rect(210, 420, 70, 91);

      //Fila 13 lila
      fill(190, 180, 173);
      rect(90, 470, 70, 31);

      //Fila 13 mostaza
      fill(190, 145, 14);
      rect(280, 470, 121, 31);

      //Fila 13 azul
      fill(108, 130, 167);
      rect(0, 470, 90, 31);
    }
  }
}
