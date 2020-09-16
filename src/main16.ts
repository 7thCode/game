import * as Phaser from "phaser";
import MainScene from './scene/main_scene'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 300},
			debug: false
		}
	},
	scene: [MainScene]
}

window.addEventListener('load', () => {
	const game = new Phaser.Game(config)
})
