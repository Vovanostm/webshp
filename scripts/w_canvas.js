if (game.getContext) {
  var context = game.getContext('2d');
  context.fillStyle = "rgba(255,0,0,0.4)";
  context.fillRect(10, 10, 100, 100);
}
var pl1 = {
  x: 30,
  y: 75,
  w: 5,
  h: 25,
  color: '#ff0000',
};

var pl2 = {
  x: 270,
  y: 75,
  w: 5,
  h: 25,
  vy: 0,
  color: '#ff0000',
};

var ball = {
  x: 150,
  y: 75,
  vx: 30,
  vy: 20,
  radius: 5,
  color: 'blue',
};

st_gm.addEventListener("click", open_game)

function open_game(event) {

  event.preventDefault();
  console.log(game.clientWidth);
  game.setAttribute('style', 'height:' + game.clientWidth / 2 +
    'px; border:1px solid black;');
  var timerId = setInterval(function() {
    redraw();
  }, 20);
}
var score = {
  pl1: 0,
  pl2: 0,
}
game.width = 300;
game.height = 150;
var mnx = game.width;
var mny = game.height;

// через 5 сек остановить повторы
// setTimeout(function() {
// clearInterval(timerId);
// alert( 'стоп' );
// }, 5000);
function remath() {

  ball.x = ball.x + ball.vx / 10;
  ball.y = ball.y + ball.vy / 10;
  if ((ball.x + ball.radius) >= 280) {
    ball.x = 150;
    ball.y = 75;
    score.pl1++;
  }
  if (ball.x - ball.radius <= 20) {
    ball.x = 150;
    ball.y = 75;
    score.pl2++;
  }

  if ((ball.y + ball.radius >= game.height) || (ball.y - ball.radius <= 0))
    ball.vy = -ball.vy + (Math.random() * (9)) - 4;
  var x_h = pl1.y + pl1.h,
    n_h = pl1.y - pl1.h,
    x_h2 = pl2.y + pl2.h,
    n_h2 = pl2.y - pl2.h;
  if ((ball.x - ball.radius <= pl1.x + pl1.w / 2) && (ball.y - ball
      .radius >= n_h) && (
      ball.y + ball.radius <= x_h)) {
    ball.vx = -ball.vx + (Math.random() * (9)) -
      4;
    ball.vy += (Math.random() * (9)) - 4;
  }
  if ((ball.x + ball.radius >= pl2.x + pl2.w / 2) && (ball.y -
      ball
      .radius >= n_h2) && (
      ball.y + ball.radius <= x_h2)) {
    ball.vx = -ball.vx + (Math.random() * (9)) -
      4;
    ball.vy += (Math.random() * (9)) - 4;
  }
  //ии
  var spd = Math.random() * (2) + 1;
  pl2.vy = ball.y > pl2.y ? spd : -spd;

  // if ((pl2.vy < -10) && (pl2.y < ball.y)) pl2.vy = 0;
  // if ((pl2.vy > 10) && (pl2.y > ball.y)) pl2.vy = 0;
  pl2.y += pl2.vy;

}
ctx = game.getContext('2d');

function redraw() {
  mnx = game.width / 300;
  mny = game.height / 150;
  clear();
  remath();
  ctx.fillStyle = pl1.color;
  ctx.fillRect(pl1.x, (pl1.y - pl1.h / 2), (pl1.w), pl1.h);
  ctx.fillRect(pl2.x, (pl2.y - pl2.h / 2), (pl2.w), pl2.h);
  ctx.fillStyle = 'rgba(40,40,255,1)';

  context.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
  ctx.font = "15px sans-serif";
  ctx.fillText(score.pl1, 2, 20);
  ctx.fillText(score.pl2, 280, 20);
}



function clear() {
  ctx.fillStyle = 'rgba(255,255,255,1)';
  ctx.fillRect(0, 0, game.width, game.height);
}
game.addEventListener('mousemove', function(e) {
  // if (!running) {
  // clear();
  // pl1.x = e.clientX - game.offsetLeft;
  // console.log(game.clientHeight);
  mny = game.clientHeight / game.height;
  pl1.y = (window.pageYOffset - game.offsetTop + e.clientY) / mny;
  // }
});
