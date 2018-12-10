function pecaSolta(peca) {
    var overlap = checkPlaceholderOverlap(peca);

    if (overlap && !overlap.peca) {
        sounds.play('encaixe');
        placeholders.forEach(function (placeholder) {
            if (placeholder.peca == peca) {
                placeholder.peca = undefined;
                rodada.entradaArr[placeholder.posicao] = undefined;
            }
        });

        if (overlap.peca) {
            overlap.peca.x = posPecas[overlap.peca.posicao][0];
            overlap.peca.y = posPecas[overlap.peca.posicao][1];
            overlap.peca = peca;
        }

        peca.x = overlap.x;
        peca.y = overlap.y;
        overlap.peca = peca;
        rodada.entradaArr[overlap.posicao] = peca.valor;

    } else {
        peca.x = posPecas[peca.posicao][0];
        peca.y = posPecas[peca.posicao][1];

        placeholders.forEach(function (placeholder) {
            if (placeholder.peca == peca) {
                placeholder.peca = undefined;
                rodada.entradaArr[placeholder.posicao] = undefined;
            }
        });
    }

    console.log(rodada.entradaArr);

    //checa se já está completado e se já ganhou
    var cont = 0;
    rodada.entradaArr.forEach(function (item) {
        if (item != undefined) {
            cont++;
        }
    });

    if (cont == 3) {

        for (x = 0; x <= 2; x++) {
            game.add.tween(respostas).to({
                alpha: 0.8
            }, 200, Phaser.Easing.Linear.None, true);

            if (Array.from(rodada.entradaArr)[x] == Array.from(rodada.corretoArr)[x]) {
                respostas.getAt(x).frame = 0;
               
            }else{
                respostas.getAt(x).frame = 1;
            }
        }

        if (rodada.entradaArr.toString() == rodada.corretoArr.toString()) {
            sounds.play('parabens');
            setTimeout(() => {
                showGameSucessModal();
            }, 4000);

            pecas.forEach(function (peca) {
                peca.input.draggable = false;
            });

        } else {
            sounds.play('quepena');
            pecas.forEach(function (peca) {
                peca.input.draggable = false;
            });
            setTimeout(() => {
                showGameOverModal();
            }, 4000);
        }
    }

}

function criaPecas() {

    var posPlaceHolders = [
        [135, 613],
        [349, 613],
        [564, 614]
    ];

    placeholders = game.add.group();

    for (x = 0; x <= 2; x++) {
        var placeholder = game.add.sprite(posPlaceHolders[x][0], posPlaceHolders[x][1], 'placeholder');
        placeholder.scale.setTo(0.8, 0.8);
        placeholder.posicao = x;
        placeholder.anchor.setTo(0.5, 0.5);
        placeholder.ocupado = undefined;
        placeholder.alpha = 0;
        placeholders.add(placeholder);
    }

    pecas = game.add.group();

    posPecas = [
        [155, 265],
        [335, 265],
        [515, 265]
    ];

    arrayCombinacoes = shuffle(arrayCombinacoes);
    for (x = 0; x <= 2; x++) {
        var peca = game.add.sprite(posPecas[x][0], posPecas[x][1], 'grupo' + arrayRodadas[rodadaAtual] + '_' + arrayCombinacoes[x]);
        peca.posicao = x;
        peca.valor = arrayCombinacoes[x];
        peca.scale.setTo(0.9, 0.9);
        peca.frame = 1;
        peca.anchor.set(0.5);
        pecas.add(peca);
        text = game.add.text(0, 0, peca.valor, {
            fill: "#fff",
        });
        text.alpha = 0;
        peca.addChild(text);
    }

    pecas.forEach(function (peca) {
        peca.inputEnabled = true;
        peca.input.enableDrag(true);
        peca.events.onDragStop.add(pecaSolta, this);
        peca.events.onDragStart.add(function () {
            game.add.tween(peca.scale).to({
                x: 0.85,
                y: 0.85
            }, 200, Phaser.Easing.Linear.None, true);
        }, this);
    });

    respostas = game.add.group();

    for (x = 0; x <= 2; x++) {
        var resposta = game.add.sprite(posPlaceHolders[x][0], posPlaceHolders[x][1], 'resposta');
        resposta.anchor.setTo(0.5, 0.5);
        respostas.add(resposta);
    }
    respostas.alpha = 0;
}

function checkPlaceholderOverlap(peca) {

    var x = false;
    placeholders.forEach(function (e) {
        if (!x) {
            if (Phaser.Rectangle.intersects(peca, e)) {
                overlapControl = true;
                placeOverlaped = e;
                x = true;
            } else {
                overlapControl = false;
                x = false;
            }
        }
    });

    console.log(overlapControl)
    if (overlapControl) {
        return placeOverlaped;
    } else {
        return false;
    }

}