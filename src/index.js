import Phaser from "phaser";
import blockImg from "./assets/woodblock.png";
import whiteImg from "./assets/whiteblock.png";
import brownImg from "./assets/brownblock.png";
import uparrowImg from "./assets/uparrow.png";
import frontarrowImg from "./assets/frontarrow.png";
import sidearrowImg from "./assets/sidearrow.png";
import upImg from "./assets/up.png";
import frontImg from "./assets/front.png";
import sideImg from "./assets/side.png";

class MyGame extends Phaser.Scene {
    constructor() {
        super({ key: "MyGame" });
    }

    preload() {
        this.load.image("block3D", blockImg);
        this.load.image("whitebox", whiteImg);
        this.load.image("brownbox", brownImg);
        this.load.image("uparrow", uparrowImg);
        this.load.image("frontarrow", frontarrowImg);
        this.load.image("sidearrow", sidearrowImg);
        this.load.image("up", upImg);
        this.load.image("front", frontImg);
        this.load.image("side", sideImg);
    }

    create() {
        const positions1 = {
            exist: [
                1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0,
                0, 0, 0, 1, 1, 0,
            ],
            x: [
                0, -2, -4, 2, 0, -2, 4, 2, 0, 0, -2, -4, 2, 0, -2, 4, 2, 0, 0,
                -2, -4, 2, 0, -2, 4, 2, 0,
            ],
            y: [
                0, 2, 4, 2, 4, 6, 4, 6, 8, -4, -2, 0, -2, 0, 2, 0, 2, 4, -8, -6,
                -4, -6, -4, -2, -4, -2, 0,
            ],
            up: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            front: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            side: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        };

        for (var i = 0; i < 27; i++) {
            positions1.exist[i] = Math.random() > 0.5 ? 1 : 0;
            let j = i;
            while (positions1.exist[j] == 1 && j > 8) {
                if (positions1.exist[j - 9] == 0) {
                    positions1.exist[j] = 0;
                    positions1.exist[j - 9] = 1;
                }
                j -= 9;
            }
        }

        for (var i = 0; i < 27; i++) {
            if (positions1.exist[i] == 1) {
                var block = this.add.image(
                    positions1.x[i] * 12.6 + 200,
                    positions1.y[i] * 6.1 + 350,
                    "block3D"
                );
                block.setScale(0.1);
                block.setInteractive();
            }
            if (positions1.exist[i] == 1) {
                positions1.up[i % 9] = 1;
            }
            if (positions1.exist[i] == 1) {
                positions1.front[Math.floor(i / 3)] = 1;
            }
            if (positions1.exist[i] == 1) {
                var div = Math.floor(i / 3);
                if (div <= 2) positions1.side[i % 3] = 1;
                else if (div <= 5) positions1.side[3 + (i % 3)] = 1;
                else positions1.side[6 + (i % 3)] = 1;
            }
        }
        for (var i = 0; i < 9; i++) {
            if (positions1.up[i] == 1) {
                var block = this.add.image(
                    Math.floor(i / 3) * 27 + 400,
                    (i % 3) * 27 + 350,
                    "brownbox"
                );
                block.setScale(0.12);
                block.setInteractive();
            } else {
                var block = this.add.image(
                    Math.floor(i / 3) * 27 + 400,
                    (i % 3) * 27 + 350,
                    "whitebox"
                );
                block.setScale(0.12);
                block.setInteractive();
            }
        }
        for (var i = 0; i < 9; i++) {
            if (positions1.front[i] == 1) {
                var block = this.add.image(
                    (i % 3) * 27 + 500,
                    Math.floor(i / 3) * -27 + 350 + 54,
                    "brownbox"
                );
                block.setScale(0.12);
                block.setInteractive();
            } else {
                var block = this.add.image(
                    (i % 3) * 27 + 500,
                    Math.floor(i / 3) * -27 + 350 + 54,
                    "whitebox"
                );
                block.setScale(0.12);
                block.setInteractive();
            }
        }
        for (var i = 0; i < 9; i++) {
            if (positions1.side[i] == 1) {
                var block = this.add.image(
                    (i % 3) * -27 + 600 + 54,
                    Math.floor(i / 3) * -27 + 350 + 54,
                    "brownbox"
                );
                block.setScale(0.12);
                block.setInteractive();
            } else {
                var block = this.add.image(
                    (i % 3) * -27 + 600 + 54,
                    Math.floor(i / 3) * -27 + 350 + 54,
                    "whitebox"
                );
                block.setScale(0.12);
                block.setInteractive();
            }
        }
        console.log("모두", positions1.exist);
        console.log("위", positions1.up);
        console.log("앞", positions1.front);
        console.log("옆", positions1.side);

        let upArrow = this.add.image(200, 240, "uparrow");
        let frontArrow = this.add.image(100, 430, "frontarrow");
        let sideArrow = this.add.image(300, 430, "sidearrow");
        let up = this.add.image(425, 300, "up");
        let front = this.add.image(525, 300, "front");
        let side = this.add.image(625, 300, "side");

        upArrow.setScale(0.5);
        frontArrow.setScale(0.5);
        sideArrow.setScale(0.5);
        up.setScale(0.5);
        front.setScale(0.5);
        side.setScale(0.5);

        var startButton = this.add
            .rectangle(600, 550, 100, 40, 0xfff000)
            .setInteractive({ useHandCursor: true })
            .on(
                "pointerup",
                function (event) {
                    this.scene.start("MyGame");
                },
                this
            );
        var text3 = this.add.text(560, 543, "New Block", {
            fontSize: "15px",
            fill: "#000000",
        });
    }
    update() {}
}

const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 800,
    height: 600,
    backgroundColor: "#FFFFFF",
    scene: MyGame,
};

const game = new Phaser.Game(config);
