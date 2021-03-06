export default class WorldScene extends Phaser.Scene {

	constructor() {
	  super({ key: 'WorldScene' })
	}
  
	private preload(): void {

	}
  
	private Click(object: any, callback:() => void) {
		object.setInteractive();
		object.on('pointerdown', callback);
	}

	private create(): void {
		const cercle = this.add.circle(100,100,50,0xffff00,1);
		this.Click(cercle,() => {this.scene.start('MainScene')} );

		const rect = this.add.rectangle(400,300,60,60,0xffffff,1);
		this.Click(rect,() => {this.scene.start('MainScene')} );

		const ellipse = this.add.ellipse(500,400,100,50,0x00ff00,1);
		this.Click(ellipse,() => {this.scene.start('MainScene')} );
	}

  }