import * as Phaser from "phaser";
import MainScene from './scene/main_scene'
import WorldScene from './scene/world_scene'
import PreloadScene from './scene/preload_scene'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 0,x: 0 },
			debug: false
		}
	},
	scene: [PreloadScene,WorldScene,MainScene]
}

window.addEventListener('load', () => {
	const game = new Phaser.Game(config)
})
