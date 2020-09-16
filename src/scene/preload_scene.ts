export default class PreloadScene extends Phaser.Scene {

	private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

	constructor() {
	  super({ key: 'PreloadScene' })
	}
  
	private preload(): void {
	  this.load.image('logo', 'images/OK.png')
	}
  
	private create(): void {
		this.add.image(400, 300, 'logo');
		this.cursors = this.input.keyboard.createCursorKeys();
	}

	public update() : void {
		if (this.cursors.space.isDown) {
			this.scene.start('MainScene');
		}
	}

  }