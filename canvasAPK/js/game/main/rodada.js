function novaRodada(venceu) {
    if (venceu) {
        rodadaAtual++;
    }
    if (rodadaAtual != 6) {
        rodada = {
            corretoArr:['entrada', 'processamento', 'saida'],
            entradaArr: [undefined, undefined, undefined]
        };
        criaPecas();
        textoFase.setText(rodadaAtual+1+'/6');
    } else {
        levelSuccess();
    }

    if(rodadaAtual == 5){
        sounds.play('ultima_fase');
    }
}