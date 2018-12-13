var jogoState = {
	create: criarJogo,
	update: atualizarJogo,
};

function criarJogo() {
	createModals();
	sounds.gen();
	erros = 0;
	acertos = 0;
	levelNumber = 1;
	levelType = "numeros";
	background = game.add.sprite(0, 0, 'backgroundFase');
	background.width = 1050;
	
	game.add.sprite(30, 60, 'fundopecas');
	createGameUI();
	rodadaAtual = 0;
	arrayRodadas = shuffle(arrayRodadas);
	novaRodada();

}

function atualizarJogo() {
	attGameUI();
}