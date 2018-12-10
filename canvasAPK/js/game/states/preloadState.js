var preloadState = {
    create: criarPreload,
    preload: precarregarPreload
}

function precarregarPreload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    game.stage.backgroundColor = "#ffffff";

    var logo = game.add.sprite(game.world.centerX, game.world.centerY - 80, 'logoPreload');
    logo.enableBody = true;
    logo.anchor.x = 0.5;
    logo.anchor.y = 0.5;
    logo.scale.setTo(0.8, 0.8);

    var preloadBarBg = game.add.sprite(game.world.centerX, game.world.centerY + 40, 'preloadBarBg');
    preloadBarBg.enableBody = true;
    preloadBarBg.anchor.x = 0.5;
    preloadBarBg.anchor.y = 0.5;


    preloadBar = game.add.sprite(game.world.centerX - 170, game.world.centerY - 4 + 40, 'preloadBar');
    this.load.setPreloadSprite(preloadBar);

    game.load.image('logoGrande', 'assets/logoGrande.png');
    game.load.image('logoEditora', 'assets/logoEditora.png');
    game.load.spritesheet('btnSom', 'assets/btnSom.png', 60, 54);
    game.load.spritesheet('resposta', 'assets/resposta.png', 181, 181);
    game.load.image('btnClose', 'assets/btnClose.png');
    game.load.image('backgroundNormal', 'assets/backgroundNormal.png');
    game.load.spritesheet('backgroundFase', 'assets/backgroundFase.png', 1000, 800, 2);
    game.load.image('sairSim', 'assets/sairSim.png');
    game.load.image('sairNao', 'assets/sairNao.png');
    game.load.image('modalSair', 'assets/modalSair.png');
    game.load.image('venceuFase', 'assets/venceuFase.png');
    game.load.image('perdeuFase', 'assets/perdeuFase.png');
    game.load.image('fundoPecas', 'assets/fundoPecas.png');
    game.load.image('tentarNovamente', 'assets/tentarNovamente.png');
    game.load.image('proximoNivel', 'assets/proximoNivel.png');
    game.load.image('venceuNivel', 'assets/venceuNivel.png');
    game.load.image('proximodesafio', 'assets/proximodesafio.png');
    game.load.image('estatisticas', 'assets/estatisticas.png');
    game.load.image('fundopecas', 'assets/fundopecas.png');
    game.load.image('personagem', 'assets/personagem.png');

    game.load.image('grupo1_entrada', 'assets/grupo1_entrada.png');
    game.load.image('grupo1_processamento', 'assets/grupo1_processamento.png');
    game.load.image('grupo1_saida', 'assets/grupo1_saida.png');

    game.load.image('grupo2_entrada', 'assets/grupo2_entrada.png');
    game.load.image('grupo2_processamento', 'assets/grupo2_processamento.png');
    game.load.image('grupo2_saida', 'assets/grupo2_saida.png');

    game.load.image('grupo3_entrada', 'assets/grupo3_entrada.png');
    game.load.image('grupo3_processamento', 'assets/grupo3_processamento.png');
    game.load.image('grupo3_saida', 'assets/grupo3_saida.png');
    
    game.load.image('grupo4_entrada', 'assets/grupo4_entrada.png');
    game.load.image('grupo4_processamento', 'assets/grupo4_processamento.png');
    game.load.image('grupo4_saida', 'assets/grupo4_saida.png');

    game.load.image('grupo5_entrada', 'assets/grupo5_entrada.png');
    game.load.image('grupo5_processamento', 'assets/grupo5_processamento.png');
    game.load.image('grupo5_saida', 'assets/grupo5_saida.png');

    game.load.image('grupo6_entrada', 'assets/grupo6_entrada.png');
    game.load.image('grupo6_processamento', 'assets/grupo6_processamento.png');
    game.load.image('grupo6_saida', 'assets/grupo6_saida.png');

    game.load.image('grupo7_entrada', 'assets/grupo7_entrada.png');
    game.load.image('grupo7_processamento', 'assets/grupo7_processamento.png');
    game.load.image('grupo7_saida', 'assets/grupo7_saida.png');

    game.load.image('grupo8_entrada', 'assets/grupo8_entrada.png');
    game.load.image('grupo8_processamento', 'assets/grupo8_processamento.png');
    game.load.image('grupo8_saida', 'assets/grupo8_saida.png');

    game.load.image('grupo8_entrada', 'assets/grupo8_entrada.png');
    game.load.image('grupo8_processamento', 'assets/grupo8_processamento.png');
    game.load.image('grupo8_saida', 'assets/grupo8_saida.png');

    game.load.image('grupo9_entrada', 'assets/grupo9_entrada.png');
    game.load.image('grupo9_processamento', 'assets/grupo9_processamento.png');
    game.load.image('grupo9_saida', 'assets/grupo9_saida.png');

    game.load.image('grupo10_entrada', 'assets/grupo10_entrada.png');
    game.load.image('grupo10_processamento', 'assets/grupo10_processamento.png');
    game.load.image('grupo10_saida', 'assets/grupo10_saida.png');

    game.load.image('grupo11_entrada', 'assets/grupo11_entrada.png');
    game.load.image('grupo11_processamento', 'assets/grupo11_processamento.png');
    game.load.image('grupo11_saida', 'assets/grupo11_saida.png');

    game.load.image('grupo12_entrada', 'assets/grupo12_entrada.png');
    game.load.image('grupo12_processamento', 'assets/grupo12_processamento.png');
    game.load.image('grupo12_saida', 'assets/grupo12_saida.png');

    
    game.load.image('grupo13_entrada', 'assets/grupo13_entrada.png');
    game.load.image('grupo13_processamento', 'assets/grupo13_processamento.png');
    game.load.image('grupo13_saida', 'assets/grupo13_saida.png');

    
    game.load.image('grupo14_entrada', 'assets/grupo14_entrada.png');
    game.load.image('grupo14_processamento', 'assets/grupo14_processamento.png');
    game.load.image('grupo14_saida', 'assets/grupo14_saida.png');

    
    game.load.image('grupo15_entrada', 'assets/grupo15_entrada.png');
    game.load.image('grupo15_processamento', 'assets/grupo15_processamento.png');
    game.load.image('grupo15_saida', 'assets/grupo15_saida.png');

    game.load.image('placeholder', 'assets/placeholder.png');
    game.load.image('btnJogar', 'assets/btnJogar.png');
    game.load.image('btnProcura', 'assets/btnProcura.png');

    game.load.audio('encaixe',['assets/sounds/encaixe.ogg', 'assets/sounds/encaixe.mp3']);
    game.load.audio('quepena',['assets/sounds/quepena.ogg', 'assets/sounds/quepena.mp3']);
    game.load.audio('parabens',['assets/sounds/parabens.ogg', 'assets/sounds/parabens.mp3']);
    game.load.audio('musicajogo',['assets/sounds/musicajogo.ogg', 'assets/sounds/musicajogo.mp3']);
    game.load.audio('ultimafase',['assets/sounds/ultimafase.ogg', 'assets/sounds/ultimafase.mp3']);
}


function criarPreload() {
    game.state.start('levelState');
}