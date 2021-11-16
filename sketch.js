var cara
var rua
var forca
function preload(){
  //imagens pré-carregadas
  corredor=loadAnimation("Runner-1.png","Runner-2.png")
  caminho=loadImage("path.png")
  poder=loadImage("power.png")
  
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  rua=createSprite(200,200)
  rua.addImage(caminho)
  cara=createSprite(200,200)
  cara.addAnimation("corredor",corredor)
  cara.scale=0.1
  

}

function draw() {
  background(0);
  cara.x=World.mouseX
  drawSprites()
}
