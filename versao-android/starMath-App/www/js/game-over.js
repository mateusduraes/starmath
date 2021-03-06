var GameOver = {
	preload: function() {
		this.load.image('menuButton','resources/imagens/button-menu.png');
		this.load.image('backgroundGameOver', 'resources/imagens/background-game-over.png');
	},

	create: function() {
		window.plugins.insomnia.allowSleepAgain();
		this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
 	
 		this.add.sprite(0, 0, 'backgroundGameOver');
		this.add.button(this.world.centerX - (245/2), this.world.centerY - 110, 'startButton', this.playAgain, this);
		this.add.button(this.world.centerX - (245/2), this.world.centerY - 50, 'menuButton', this.backToMenu, this);
		this.add.button(this.world.centerX - (245/2), this.world.centerY + 10, 'rankingButton', this.saveScore, this);

		
		this.add.text(this.world.centerX - 95, this.world.centerY - 250, 'Game-over!!', {
			font: "34px Arial",
		    fill: "#ffffff",
		    align: "center"
		});

		this.add.text(this.world.centerX - 50, this.world.centerY + 150, 'Uau!!', {
		 		font: "34px Arial",
		         fill: "#ffffff",
		         align: "center"
		});
		
		this.add.text(this.world.centerX - 80, this.world.centerY + 190, score + ' pontos', {
		 		font: "34px Arial",
		         fill: "#ffffff",
		        align: "center"
		});
	},

	saveScore: function() {
		
	},

	playAgain: function() {
		starMath.state.start('Game');
	},

	backToMenu: function() {
		starMath.state.start('Menu');
	}
};