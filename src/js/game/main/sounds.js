config = {
    sounds: true
}

var sounds = {
    gen: function () {
        if (config.sounds) {
            this.encaixe = game.add.audio('encaixe');
            this.musicajogo = game.add.audio('musicajogo');
            this.parabens = game.add.audio('parabens');
            this.quepena = game.add.audio('quepena');
            this.cliqueinstrucoes = game.add.audio('cliqueinstrucoes');
        }
    },

    play: function (id) {
        if (config.sounds) {
            switch (id) {

                case 'encaixe':
                    this.encaixe.play();
                    break;

                case 'cliqueinstrucoes':
                    this.cliqueinstrucoes.play();
                    break;

                case 'musicajogo':
                    this.musicajogo.play();
                    break;

                case 'quepena':
                    this.quepena.play();
                    break;


                case 'parabens':
                    this.parabens.play();
                    break;
            }
        } else {
            return false;
        }
    }
}