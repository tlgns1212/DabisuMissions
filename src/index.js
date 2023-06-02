import Phaser from 'phaser';
import blockImg from './assets/woodblock.png';
import whiteImg from './assets/whiteblock.png';
import brownImg from './assets/brownblock.png';

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('block3D', blockImg);
        this.load.image('whitebox', whiteImg);
        this.load.image('brownbox', brownImg);
    }
      
    create ()
    {
        var positions1 = {
            exist: [1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
            x: [0, -2, -4, 2, 0, -2, 4, 2, 0, 0, -2, -4, 2, 0, -2, 4, 2, 0, 0, -2, -4, 2, 0, -2, 4, 2, 0],
            y: [0, 2, 4, 2, 4, 6, 4, 6, 8, -4, -2, 0, -2, 0, 2, 0, 2, 4, -8, -6, -4, -6, -4, -2, -4, -2, 0],
            up:[0,0,0,0,0,0,0,0,0],
            front:[0,0,0,0,0,0,0,0,0],
            side:[0,0,0,0,0,0,0,0,0],
        }
        for(var i = 0; i < 27; i++){
            // var ranValue = Phaser.Math.Between(0,1);
            // positions1.exist[i] = ranValue;
            if(positions1.exist[i] == 1){
                var block = this.add.image(positions1.x[i] * 13 + 200, positions1.y[i] * 6 + 350, 'block3D');
                block.setScale(0.1);
            }
            if(positions1.exist[i] == 1){
                positions1.up[i%9] = 1;
            }
            if(positions1.exist[i] == 1){
                positions1.front[Math.floor(i/3)] = 1;
            }
            // if(positions1.exist[] == 1){
            //     positions1.side[] = 1;
            // }
         
        }
        for(var i = 0; i < 9; i++){
            if(positions1.up[i] == 1){
                var block = this.add.image((Math.floor(i/3)) * 27 + 500,(i%3) * 27 + 350, 'brownbox');
                block.setScale(0.12);
            }
            else{
                var block = this.add.image((Math.floor(i/3)) * 27 + 500, (i%3) * 27 + 350, 'whitebox');
                block.setScale(0.12);
            }
        }
        for(var i = 0; i < 9; i++){
            if(positions1.front[i] == 1){
                var block = this.add.image((i%3) * 27 + 600,Math.floor(i/3) * 27 + 350, 'brownbox');
                block.setScale(0.12);
            }
            else{
                var block = this.add.image((i%3) * 27 + 600,Math.floor(i/3) * 27 + 350, 'whitebox');
                block.setScale(0.12);
            }
        }


        console.log("위");
        console.log(positions1.up);
        console.log("앞");
        console.log(positions1.front);
        // console.log("위");
        // console.log(positions1.up);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: "#FFFFF0",
    scene: MyGame
};

const game = new Phaser.Game(config);
