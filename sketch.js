function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
/*story=a dog trying to get a bone by moving left and right
bone would spawn randomly if he misses one bone the game would end and the dog would lose
playing character=dog
non playing character=bone
goal=the dog getting the bone
rules=the dog can only move left and right
      the bone are spawned randomly
skill=the dog can move quickly
chance=the bone are spawned randomly
game adaptivity=the bone are spawned in lesstime and faster
feedback=after some score the music will become cheerful as to congratulate for reaching that score
end=the dog misses to take the bone */