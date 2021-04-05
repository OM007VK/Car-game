var ball;
var database;
var allPlayers;
var form1, game1, player1;

var gameState=0;
var playerCount=0;

var car1, car2, car3, car4;
var cars = []

function setup(){
    createCanvas(displayWidth, displayHeight);
   
    database=firebase.database();
    //ballrefence=database.ref("ball/position")
    //ballrefence.on("value",readPosition);
    game1 = new game();
    game1.getGameState();
    game1.startGame();
} 

function draw(){
    background("white");
    if (playerCount===4) 
    {
     game1.update(1)
    }
    if (gameState===1)
    {
     clear();
     game1.play();
    }
    
}