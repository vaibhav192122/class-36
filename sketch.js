var canvas,backgroundImage;
var gameState=0;
var playerCount;
var database;
var player,game,form;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
  text(mouseX +","+mouseY,mouseX,mouseY);
}