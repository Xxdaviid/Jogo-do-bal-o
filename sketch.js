var fundo, carregarimagem; 
var imagembalao, balao
function preload(){
  carregarimagem = loadImage ("./assets/bg.png")
imagembalao = loadAnimation("./assets/balloon1.png","./assets/balloon2.png","./assets/balloon3.png")
}

function setup() {
createCanvas(1200,750);    
fundo = createSprite(600,485);
fundo.addImage(carregarimagem);
fundo.scale = 2.0

balao = createSprite(100,200);
balao.addAnimation("balao",imagembalao);
balao.scale = 0.8

}

function draw() {

if(keyDown("W")){
balao.velocityY = -5
}
balao.velocityY+=1














drawSprites()




}