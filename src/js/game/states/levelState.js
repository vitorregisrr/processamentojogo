var levelState = {
	create: criarLevelState,
	update: atualizarLevelState,
};

soundLoop = null;
function criarLevelState() {
	sounds.gen();
	createModals();
	//gerando o bg
	game.add.sprite(0, 0, 'backgroundNormal');

	game.sound.stopAll();
	sounds.play('musicajogo');
	soundLoop = setInterval(function () {
		sounds.play('musicajogo');
	}, 78000);

	var logo = game.add.sprite(game.world.centerX + 90, game.world.centerY - 70, 'logoGrande');
	logo.enableBody = true;
	logo.anchor.x = 0.5;
	logo.anchor.y = 0.5;
	logo.scale.setTo(1.3, 1.3);

	var logoEditora = game.add.sprite(880, 60, 'logoEditora');
	logoEditora.enableBody = true;
	logoEditora.anchor.x = 0.5;
	logoEditora.anchor.y = 0.5;
	logoEditora.scale.setTo(0.8, 0.8);

	btnSom = game.add.button(930, 740, 'btnSom', function(){
		if(game.sound.mute){
			game.sound.mute = false;
			btnSom.frame = 0;
		}else{
			game.sound.mute = true;
			btnSom.frame = 1;
		};
	});

	btnSom.enableBody = true;
	btnSom.anchor.x = 0.5;
	btnSom.anchor.y = 0.5;
	btnSom.scale.setTo(0.8, 0.8);

	btnJogar = game.add.button(game.world.centerX + 80, 540, 'btnJogar', function(){
		game.state.start('jogo');
	});
	btnJogar.anchor.x = 0.5;
	btnJogar.anchor.y = 0.5;
	btnJogar.scale.setTo(1, 1);
	

	personagem = game.add.sprite(40, 80, 'personagem');
}

function atualizarLevelState() {
	if (btnJogar.input.pointerOver()) {
        game.add.tween(btnJogar.scale).to({
            x: 1.1,
            y: 1.1
        }, 100, Phaser.Easing.Linear.None, true);
    } else {
        game.add.tween(btnJogar.scale).to({
            x: 1,
            y: 1
        }, 100, Phaser.Easing.Linear.None, true);
	}
	
	if (btnSom.input.pointerOver()) {
        game.add.tween(btnSom.scale).to({
            x: 1.1,
            y: 1.1
        }, 100, Phaser.Easing.Linear.None, true);
    } else {
        game.add.tween(btnSom.scale).to({
            x: 1,
            y: 1
        }, 100, Phaser.Easing.Linear.None, true);
    }
}