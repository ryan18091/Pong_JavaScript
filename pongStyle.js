var leftPaddle=document.getElementById('leftPaddle');
var rightPaddle=document.getElementById('rightPaddle');
var Field=document.getElementsByClassName('Field');

var leftPaddleTop = 76;
var rightPaddleTop = 76;

function anim(e){
    //console.log(leftPaddleTop);
   // alert(e.keyCode);
    if(e.keyCode==83) {
        leftPaddleTop +=4;
        leftPaddle.style.top = leftPaddleTop + 'px';
        if (leftPaddleTop >= 298){
            leftPaddleTop -=4;
        }


    }
    if(e.keyCode==87) {
        leftPaddleTop -=4;
        leftPaddle.style.top = leftPaddleTop + 'px';
        if (leftPaddleTop <= 0){
            leftPaddleTop +=4;
        }
        if (leftPaddleTop >= 296){
            leftPaddleTop -=4;
        }

    }

    if(e.keyCode==40) {
        rightPaddleTop +=4;
        rightPaddle.style.top = rightPaddleTop + 'px';
        if (rightPaddleTop >= 298){
            rightPaddleTop -=4;
        }



    }
    if(e.keyCode==38) {
        rightPaddleTop -=4;
        rightPaddle.style.top = rightPaddleTop + 'px';
        if (rightPaddleTop <= 0){
            rightPaddleTop +=4;
        }
        if (rightPaddleTop >= 296){
            rightPaddleTop -=4;
        }

    }

}

document.onkeydown = anim;

var posTop = 200;
var posLeft = 300;


function startMove() {
  var ball = document.getElementById("ball");
  var id = setInterval(frame, 15);
  var move = 'right';
  var upDown = 'down'
  var angle = 1
  function frame() {
      function moveRight() {
          // Detects colision with right Paddle and starts moveLeft Functions
          if (posLeft == 580 && rightPaddleTop <= posTop && (rightPaddleTop + 100) >= posTop) {
              move = 'left';
              console.log(posTop);
              moveLeft();
          // Detects if ball has collided with far right line
          } else if (posLeft >= 590){
              posLeft += 1;
              ball.style.left = posLeft + 'px';
              clearInterval(id);
          // Detects if ball has collided with top line and switched movement to down
          } else if (posTop == 0) {
                  posTop += 1;
                  posLeft += 1;
                  upDown = 'down';
                  ball.style.left = posLeft + 'px';
                  ball.style.top = posTop + 'px';
          //Detects if ball has collided with bottom line and switched movement to up
          } else if (posTop >= 390) {
              posTop -= 1;
              posLeft += 1;
              upDown = 'up';
              ball.style.left = posLeft + 'px';
              ball.style.top = posTop + 'px';
              //clearInterval(id);
          //If ball has not collided with an object its movements is determined by the upDown var
          } else {
              if (upDown == 'up'){
                  posTop -= 1;
                  posLeft += 1;
                  ball.style.left = posLeft + "px";
                  ball.style.top = posTop + 'px';
              } else {
                  posTop += 1;
                  posLeft += 1;
                  ball.style.left = posLeft + "px";
                  ball.style.top = posTop + "px";
              }

          }
      }
      function moveLeft() {
          // Detects colision with left Paddle and starts moveRight Functions
          if (posLeft == 10 && leftPaddleTop <= posTop && (leftPaddleTop + 100) >= posTop) {
              move = 'right';
              moveRight();
          // Detects if ball has collided with far left line
          } else if (posLeft <=0){
              posLeft -= 1;
              ball.style.left = posLeft + 'px';
              console.log('1');
              console.log('leftPaddleTop' + leftPaddleTop)
              console.log('postop' + posTop)

              clearInterval(id);
          // Detects if ball has collided with top line and switched movement to down
          } else if (posTop == 0) {
                  posTop += 1;
                  posLeft -= 1;
                  upDown = 'down';
                  ball.style.left = posLeft + 'px';
                  ball.style.top = posTop + 'px';

                                console.log('2');

                                //clearInterval(id);
          //Detects if ball has collided with bottom line and switched movement to up
          } else if (posTop >= 390) {
              posTop -= 1;
              posLeft -= 1;
              upDown = 'up';
              ball.style.left = posLeft + 'px';
              ball.style.top = posTop + 'px';
                            console.log('3');

              //clearInterval(id);
          //If ball has not collided with an object its movements is determined by the upDown var
          } else {
              if (upDown == 'up'){
                  posTop -= 1;
                  posLeft -= 1;
                  ball.style.left = posLeft + "px";
                  ball.style.top = posTop + 'px';
                                console.log('4');

                                //clearInterval(id);

              } else {
                  posTop += 1;
                  posLeft -= 1;
                  ball.style.left = posLeft + "px";
                  ball.style.top = posTop + "px";
                                //console.log('5');

                                //clearInterval(id);

              }

          }

      }
      //console.log(rightPaddleTop);
      if (move == 'right') {
          moveRight();
      } else {
          moveLeft();
      }

  }
}

startMove();
