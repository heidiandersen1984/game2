// Game State

let player = {
  x: 50,
  y: 50,
};

let treasure = {
  x: 75,
  y: 250,
};

let enemy = {
  x: 500 * Math.random(),
  y: 500 * Math.random(),
  vx: 0.1 * Math.random() - 0.05,
  vy: 0.1 * Math.random() - 0.05,
};

let score = 0;

// function setup() {
//   createCanvas(400, 400); // Change 1: Canvas Size
// }

// let img;
// function preload() {
//   img = loadImage('assets/tarmac.gif');
// }
// function setup() {
//   image(img, 0, 0);
// }

let img;
let c;
function preload() {
  // preload() runs once
  img = loadImage('assets/laDefense.jpg');
}

function setup() {
  let img = createImage(400, 400); // same as new p5.Image(100, 100);
  img.loadPixels();
  // get color of middle pixel
  c = img.get(img.width / 2, img.height / 2);
  createCanvas(400, 400);
  // background(0);
}

function draw() {
  // ==== updating state
  if (keyIsPressed) {
    const movement = 0.10 * deltaTime;
    if (key == 's') {
      if (player.y < 500 - 40) {
        // move player downwards
        player.y += movement;
      }
    }
    else if(key == 'w') {
      if (player.y > 40) {
        // move player upwards
        player.y -= movement;
      }
    }
    else if(key == 'a') {
      player.x -= movement;
    }
    else if(key == 'd') {
      player.x += movement;
    }
  }

  const distancePlayerTreasure = Math.sqrt(
    Math.pow(treasure.x - player.x, 2) +
    Math.pow(treasure.y - player.y, 2)
  );
  if (distancePlayerTreasure <= 40 + 25) {
    // collision between player and treasure!
    score++;
    treasure = {
      x: 500 * Math.random(),
      y: 500 * Math.random(),
    };
  }

  enemy.x -= enemy.vx * deltaTime;
  enemy.y -= enemy.vy * deltaTime;

  // ===== drawing
  background(img)

  fill('blue');
  circle(player.x, player.y, 80);

  fill(255, 204, 0);
  circle(treasure.x, treasure.y, 50);
  
  fill('red');
  circle(enemy.x, enemy.y, 60);

  text("Score: " + score, 200, 20);
}

