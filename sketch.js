var Score;
var Level;
var j;
var u;
var l;
var r;
function preload(){
  BGimage=loadImage("images/Space.jpg");
  IMimage=loadImage("images/iron.png");
  Dimage=loadImage("images/diamond.png");
  OBimage=loadImage("images/spikes.png");
  SVimage=loadImage("images/Kingpin.png");
  VEimage=loadImage("images/DOOM.png");
  Simage=loadImage("images/stone.png");
  THimage=loadImage("images/Thanos.png");
} 
function setup() {
  createCanvas(1500,700);
  OB=new Group();
  DG=new Group();
  ST=new Group();
  BG=createSprite(0,0);
  BG.scale=3.4;
  BG.addImage(BGimage);
  BG.velocityY=-3;
  IM=createSprite(50,200,90,90);
  IM.scale=0.13;
  IM.addImage(IMimage);
  for(var i=0;i<5;i++){
    GS();
  }
  Score=0;
  Level=1;
  j=0;
  u=0;
  l=0;
  r=0;
}
function draw() {
  if(BG.y<1){
    BG.y=BG.height/4;
  }
  if(keyDown("space")){
    IM.velocityY=-5;
  }
  if(keyDown("right")){
    IM.x=IM.x+5;
  }
  if(keyDown("left")){
    IM.x=IM.x-5;
  }
  if(!keyDown("space")){
    if(IM.y<670){
      IM.velocityY=5;
    }
  }
  GenStones();
  for(var f=0;f<(ST).length;f++){
    temp=ST.get(f);
    if(IM.isTouching(temp)){
      IM.collide(temp);
    }
  }
  GD();
  for(var e=0;e<(DG).length;e++){
    tin=DG.get(e);
    if(IM.isTouching(tin)){
      Score++;
      tin.destroy();
      tin=null;
    }
  }
  if(IM.y>680){
    IM.scale=0;
    Score="You Lose!";
  }
  if(IM.y<20){
    IM.scale=0;
    Score="You Lose!";
  }
  if(IM.x>1450){
    IM.scale=0;
    Score="You Lose!";
  }
  if(IM.x<10){
    IM.scale=0;
    Score="You Lose!";
  }
  if(IM.isTouching(OB)){
    IM.scale=0;
    Score="You Lose!";
  }
  if(Score>1){
    Level=2;
    if(j==0){
    GS();
    j++;
    }
  }
  if(Score>2){
    Level=3;
    if(l==0){
    GS();
    KP();
    l++;
    }
  }
  if(Score>3){
    Level=4;
    if(u==0){
    GS();
    VE();
    u++;
    }
  }
  if(Score>4){
    Level=5;
    if(r==0){
    GS();
    GH();
    r++;
    }
  }
  if(Score>5){
    Level="YOU WIN!";
  }
  drawSprites();
  stroke("red");
  textSize(20);
  text("Your Score:"+Score,1200,100);
  text("Your Level:"+Level,1200,170);
}
function GS(){
  SP=createSprite(random(100,1400),random(50,650),80,80);
  SP.addImage(OBimage);
  SP.scale=0.7;
  OB.add(SP);
}
function VE(){
  VM=createSprite(random(100,1400),random(50,650),80,80);
  VM.addImage(VEimage);
  VM.scale=0.04;
  OB.add(SV);
}
function KP(){
  SV=createSprite(random(100,1400),random(50,650),80,80);
  SV.addImage(SVimage);
  SV.scale=0.17;
  OB.add(SV);
}
function GH(){
  TH=createSprite(random(100,1400),random(50,650),80,80);
  TH.addImage(THimage);
  TH.scale=0.3;
  OB.add(TH);
}
function GD(){
  if(frameCount%70==0){
    D=createSprite(0,0,55,55);
    D.x=Math.round(random(120,1400));
    D.scale=0.2;
    D.addImage(Dimage);
    D.velocityY=5;
    D.lifetime=1000;
    DG.add(D);
  }
}
function GenStones(){
  if(frameCount%70==0){
    Stone=createSprite(0,0,55,55);
    Stone.y=Math.round(random(50,650));
    Stone.scale=0.3;
    Stone.addImage(Simage);
    Stone.velocityX=5;
    Stone.lifetime=1000;
    ST.add(Stone);
  }
}