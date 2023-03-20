function moveMonster(clavier) {
    if (clavier == 'ArrowDown') {
        if (y != heightCanvas - widthMonster) {
            console.log('on va en bas');
            y = y + 10;
        }
        else {
            y = 0;
        }
    }

    if (clavier == 'ArrowUp') {
        if (y != 0) {
            console.log('on va en haut');
            y = y - 10;
        }
        else {
            y = heightCanvas - 50;
        }
    }

    if (clavier == 'ArrowRight') {
        if (x != widthCanvas - widthMonster) {
            console.log('on va a gauche');
            x = x + 10;
        }
        else {
            x = 0;
        }
    }

    if (clavier == 'ArrowLeft') {
        if (x != 0) {
            console.log('on va a droite');
            x = x - 10;
        }
        else {
            x = widthCanvas - 50;
        }
    }
}
