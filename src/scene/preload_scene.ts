export default class PreloadScene extends Phaser.Scene {


	constructor() {
	  super({ key: 'PreloadScene' })
	}
  
	private preload(): void {
	  this.load.image('logo', 'images/OK.png')
	}
  
	private create(): void {
		const image = this.add.image(400, 300, 'logo');
		image.setInteractive();
		image.on('pointerdown', () => {
			this.scene.start('WorldScene')
		 }
		);
	}

  }