var btImg1, btImg2,btImg3,btImg4;
var obstacles, battleShip,rand,backGroundImg,ground;
var obstacles,rand2;
var startImg,obsImg,obsGroup;
var gameState,START,END;

function preload() {
    btImg1 = loadImage("bt1Final.png")
    btImg2 = loadImage("bt2Img copy.png")
    btImg3 = loadImage("bt3Fin.png")
    btImg4 = loadImage("bt4Img copy.png")
    backGroundImg = loadImage("back.png")

    obsImg = loadImage("obs1.png")
}

function setup() {
    createCanvas(2200,1000)
    rand = Math.round(random(1,4));
    
    ground = createSprite(300,300);
    ground.addImage(backGroundImg);
    ground.velocityY = 3;
    gameState = START;

    battleShip = createSprite(500,500,10,10);
   obsGroup = new Group();
   

    switch(rand){
        case 1:battleShip.addImage(btImg1);
        
        break;
        case 2:battleShip.addImage(btImg2);
        break;
        case 3:battleShip.addImage(btImg3);
        break;
        case 4:battleShip.addImage(btImg4)
        break;
        default:break
    }
    
    battleShip.scale = 0.3;
  
}

function draw() {
    background(0)
    battleShip.debug = true;
    if(gameState===START) {
        battleShip.x = mouseX;
    battleShip.y = mouseY;
    
    drawSprites();
    spawnObstacles();

    

    if(ground.y>600){
        ground.y = 200;
    }
    if(battleShip.isTouching(obsGroup)) {
        battleShip.destroy();
        obstacles.destroy();
        gameState = END;
    }}
    if(gameState === END) {
        textSize(30)
        text("GAME OVER", 500,500);
    }
 
}


function spawnObstacles() {
    if(frameCount%100===0) {
        rand2 = Math.round(random(200,800));
        obstacles = createSprite(200,-10,50,50);
        obstacles.addImage(obsImg);
        obstacles.velocityY = 4;
        obstacles.x=rand2;
        obstacles.scale = 0.2;
        obstacles.debug = true;
        obsGroup.add(obstacles)
    }
}
