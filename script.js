const char = createAtur('Atur');
const monster = createLittleMonster('Monstro Pequeno');

stage.start(
    char,
    monster,
    document.querySelector('#character'),
    document.querySelector('#monster')
)