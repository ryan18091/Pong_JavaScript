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
var posLeft = 0;

function startMove() {
  var ball = document.getElementById("ball");
  var id = setInterval(frame, 10);
  var move = 'right';
  function frame() {
      function moveRight() {
          if (posLeft == 580 && rightPaddleTop >= 100 && rightPaddleTop <= 200) {
              move = 'left';
              console.log(rightPaddleTop);
              moveLeft();
          } else if (posLeft <= 600) {
              posLeft += 1;
              ball.style.left = posLeft + 'px';
          } else {
              posLeft += 1;
              ball.style.left = posLeft + 'px';
          }
      }
      function moveLeft() {
          if (posLeft == 0) {
              move = 'right';
              moveRight();
          } else {
              posLeft -= 1;
              ball.style.left = posLeft + "px";
          }

      }
      //console.log(rightPaddleTop);
      if (move == 'right') {
          moveRight();
      } else {
          moveLeft();
      }

    /*
    if (posTop == 390) {
      clearInterval(id);
      posTop -=1
      //posTop = 0;
      elem.style.top = posTop + 'px';
    } else {
      posTop++;
      elem.style.top = posTop + 'px';
      //console.log(posTop);
      //elem.style.left = pos + 'px';
    }*/
  }
}

startMove();
