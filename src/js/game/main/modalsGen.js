function createModals() {

    reg.modal.createModal({
        type: "gameOverModal",
        includeBackground: true,
        modalCloseOnInput: false,
        animation: 'fade',
        itemsArr: [{
                type: "image",
                content: "perdeuFase",
                offsetY: 0,
                contentScale: 1
            },
            {
                type: "image",
                content: "tentarNovamente",
                contentScale: 1.2,
                offsetY: 245,
                callback: function () {
                    game.paused = false;
                    reg.modal.hideModal("gameOverModal");
                    pecas.destroy();
                    placeholders.destroy();
                    respostas.alpha = 0;
                    respostas.destroy();
                    novaRodada(false);
                    erros++;
                    textoErros.setText(erros);
                    sounds.play('cliqueinstrucoes');
                }
            },
        ]
    });

    reg.modal.createModal({
        type: "gameSucessModal",
        includeBackground: true,
        modalCloseOnInput: false,
        animation: 'fade',
        itemsArr: [{
                type: "image",
                content: "venceuFase",
                offsetY: 0,
                contentScale: 1
            },
            {
                type: "image",
                content: "proximoNivel",
                contentScale: 1.2,
                offsetY: 245,
                offsetX: 0,
                callback: function () {
                    game.paused = false;
                    reg.modal.hideModal("gameSucessModal");
                    pecas.destroy();
                    placeholders.destroy();
                    respostas.alpha = 0;
                    respostas.destroy();
                    novaRodada(true);
                    acertos++;
                    textoAcertos.setText(acertos);
                    sounds.play('cliqueinstrucoes');
                }
            },
        ]
    });

    reg.modal.createModal({
        type: "nivelSuccess",
        includeBackground: true,
        modalCloseOnInput: false,
        animation: 'fade',
        itemsArr: [{
                type: "image",
                content: "venceuNivel",
                offsetY: -20,
                contentScale: 1
            },
            {
                type: "image",
                content: "proximodesafio",
                offsetY: 240,
                offsetX: 70,
                contentScale: 1.3,
                callback: function () {
                    game.paused = false;
                    reg.modal.hideModal("nivelSuccess");
                    background.frame = 0;
                    game.state.start('levelState');
                    sounds.play('cliqueinstrucoes');
                }
            },
            {
                type: "text",
                color: '0xFFF',
                content: "0",
                offsetY: 104,
                offsetX: 200,
            },
            {
                type: "text",
                color: '0xFFF',
                content: "0",
                offsetY: 104,
                offsetX: 50,
            },
        ]
    })

    reg.modal.createModal({
        type: "modalSair",
        includeBackground: true,
        modalCloseOnInput: false,
        animation: 'fade',
        itemsArr: [{
                type: "image",
                content: "modalSair",
                offsetY: -20,
                contentScale: 1,
            },
            {
                type: "image",
                content: "sairSim",
                offsetY: 50,
                offsetX: 130,
                contentScale: 0.8,
                callback: function () {
                    game.paused = false;
                    game.state.start('levelState');
                    sounds.play('cliqueinstrucoes');
                }
            },
            {
                type: "image",
                content: "sairNao",
                offsetY: 50,
                offsetX: -130,
                contentScale: 0.8,
                callback: function () {
                    game.paused = false;
                    reg.modal.hideModal("modalSair");
                    sounds.play('cliqueinstrucoes');
                }
            },
        ]
    });
}


function showGameOverModal() {
    reg.modal.showModal("gameOverModal");
}

function showModalSair() {
    game.paused = true;
    reg.modal.showModal("modalSair");
    btnSom.bringToTop();
}

function showNivelSuccessModal() {
    reg.modal.showModal("nivelSuccess");
    reg.modal.updateModalValue(acertos, 'nivelSuccess', 5);
    reg.modal.updateModalValue(erros, 'nivelSuccess', 4);
}

function showGameSucessModal() {
    reg.modal.showModal("gameSucessModal");
}
