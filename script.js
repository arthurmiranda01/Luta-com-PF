const char = createAtur('Atur');
const monster = createLittleMonster('Monstro Pequeno');

stage.start(
    char,
    monster,
    document.querySelector('#character'),
    document.querySelector('#monster')
)

function rollDice(){

    var imagens = [
        "https://dado.online/dado1.png", 
        "https://dado.online/dado2.png",
        "https://dado.online/dado3.png",
        "https://dado.online/dado4.png",
        "https://dado.online/dado5.png",
        "https://dado.online/dado6.png"
    ];
  
          var imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];
          var img = document.getElementById("imagem");
          img.src = imagemAleatoria;
  
  
  }