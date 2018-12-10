function createGameUI() {
	logoEditora = game.add.image(860, 730, 'logoEditora');
	logoEditora.enableBody = true;
	logoEditora.anchor.x = 0.5;
	logoEditora.anchor.y = 0.5;
    logoEditora.scale.setTo(1.1, 1.1);
    
    logoJogo = game.add.image(840, 120, 'logoGrande');
	logoJogo.enableBody = true;
	logoJogo.anchor.x = 0.5;
	logoJogo.anchor.y = 0.5;
    logoJogo.scale.setTo(0.6, 0.6);
    
    estatisticas = game.add.image(840, 362, 'estatisticas');
	estatisticas.enableBody = true;
	estatisticas.anchor.x = 0.5;
    estatisticas.anchor.y = 0.5;
    estatisticas.scale.setTo(1.1, 1.1);
    
    textoAcertos = game.add.text(60, 60, 0, {
        fill: "#fff",
        fontSize: "35px",
        fontFamily: "Exo",
        stroke: '#000000',
        strokeThickness: 2
    });
    textoAcertos.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
    estatisticas.addChild(textoAcertos);

    textoErros = game.add.text(50, -25, 0, {
        fill: "#fff",
        fontSize: "35px",
        fontFamily: "Exo",
        stroke: '#000000',
        strokeThickness: 2
    });
    textoErros.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
    estatisticas.addChild(textoErros);

    textoFase = game.add.text(20, -105, '1/6', {
        fill: "#fff",
        fontSize: "35px",
        fontFamily: "Exo",
        stroke: '#000000',
        strokeThickness: 2
    });
    textoFase.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
    estatisticas.addChild(textoFase);

	btnSom = game.add.button(915, 590, 'btnSom', function(){
        if(game.sound.mute){
			game.sound.mute = false;
			btnSom.frame = 0;
		}else{
			game.sound.mute = true;
			btnSom.frame = 1;
        };
        sounds.play('cliqueinstrucoes');
    });
    
	btnSom.enableBody = true;
	btnSom.anchor.x = 0.5;
	btnSom.anchor.y = 0.5;
	btnSom.scale.setTo(1.1, 1.1);

	
	btnClose = game.add.button(920, 660, 'btnClose', function(){
        showModalSair();
        sounds.play('cliqueinstrucoes');
	});
	btnClose.enableBody = true;
	btnClose.anchor.x = 0.5;
	btnClose.anchor.y = 0.5;
    btnClose.scale.setTo(0.8, 0.8);
    
}

function attGameUI(){
	if (btnSom.input.pointerOver()) {
        game.add.tween(btnSom.scale).to({
            x: 1.2,
            y: 1.2
        }, 100, Phaser.Easing.Linear.None, true);
    } else {
        game.add.tween(btnSom.scale).to({
            x: 1.1,
            y: 1.1
        }, 100, Phaser.Easing.Linear.None, true);
    }

    if (btnClose.input.pointerOver()) {
        game.add.tween(btnClose.scale).to({
            x: 1.1,
            y: 1.1
        }, 100, Phaser.Easing.Linear.None, true);
    } else {
        game.add.tween(btnClose.scale).to({
            x:0.95,
            y:0.95
        }, 100, Phaser.Easing.Linear.None, true);
    }
}