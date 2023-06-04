import Phaser from 'phaser';
import blockImg from './assets/woodblock.png';
import whiteImg from './assets/whiteblock.png';
import brownImg from './assets/brownblock.png';

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super({key: "MyGame"});
    }

    preload ()
    {
        this.load.image('block3D', blockImg);
        this.load.image('whitebox', whiteImg);
        this.load.image('brownbox', brownImg);
    }

    // refresh(){
    //     {
    //         for(var i = 0; i < 27; i++){
    //             if(positions1.exist[i] == 1){
    //                 var block = this.add.image(positions1.x[i] * 13 + 200, positions1.y[i] * 6 + 350, 'block3D');
    //                 block.setScale(0.1);
    //             }
    //         }
    //         for(var i = 0; i < 9; i++){
    //             if(positions1.up[i] == 1){
    //                 var block = this.add.image((Math.floor(i/3)) * 27 + 400,(i%3) * 27 + 350, 'brownbox');
    //                 block.setScale(0.12);
    //             }
    //             else{
    //                 var block = this.add.image((Math.floor(i/3)) * 27 + 400, (i%3) * 27 + 350, 'whitebox');
    //                 block.setScale(0.12);
    //             }
    //         }
    //         for(var i = 0; i < 9; i++){
    //             if(positions1.front[i] == 1){
    //                 var block = this.add.image((i%3) * 27 + 500,Math.floor(i/3) * -27 + 350 + 54, 'brownbox');
    //                 block.setScale(0.12);
    //             }
    //             else{
    //                 var block = this.add.image((i%3) * 27 + 500,Math.floor(i/3) * -27 + 350 + 54, 'whitebox');
    //                 block.setScale(0.12);
    //             }
    //         }
    //         for(var i = 0; i < 9; i++){
    //             if(positions1.side[i] == 1){
    //                 var block = this.add.image((i%3) * -27 + 600 + 54,Math.floor(i/3) * -27 + 350 + 54, 'brownbox');
    //                 block.setScale(0.12);
    //             }
    //             else{
    //                 var block = this.add.image((i%3) * -27 + 600 + 54,Math.floor(i/3) * -27 + 350 + 54, 'whitebox');
    //                 block.setScale(0.12);
    //             }
    //         }
    //     }}

    create ()
    {
        const positions1 = {
            exist: [1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
            x: [0, -2, -4, 2, 0, -2, 4, 2, 0, 0, -2, -4, 2, 0, -2, 4, 2, 0, 0, -2, -4, 2, 0, -2, 4, 2, 0],
            y: [0, 2, 4, 2, 4, 6, 4, 6, 8, -4, -2, 0, -2, 0, 2, 0, 2, 4, -8, -6, -4, -6, -4, -2, -4, -2, 0],
            up:[0,0,0,0,0,0,0,0,0],
            front:[0,0,0,0,0,0,0,0,0],
            side:[0,0,0,0,0,0,0,0,0],
        }
        // blocks = this.add.group();
        // upblocks = this.add.group();
        // frontblocks = this.add.group();
        // sideblocks = this.add.group();
        for(var i = 0; i < 27; i++){
            positions1.exist[i] = Math.random() > 0.5 ? 1 : 0;
        }

        for(var i = 0; i < 27; i++){
            if(positions1.exist[i] == 1){
                // var block = blocks.create(positions1.x[i] * 13 + 200, positions1.y[i] * 6 + 350, 'block3D');
                var block = this.add.image(positions1.x[i] * 13 + 200, positions1.y[i] * 6 + 350, 'block3D');
                block.setScale(0.1);
                block.setInteractive();
            }
            if(positions1.exist[i] == 1){
                positions1.up[i%9] = 1;
            }
            if(positions1.exist[i] == 1){
                positions1.front[Math.floor(i/3)] = 1;
            }
            if(positions1.exist[i] == 1){
                var div = Math.floor(i/3);
                if(div <= 2) positions1.side[i%3] = 1;
                else if(div <= 5) positions1.side[3 + i%3] = 1;
                else positions1.side[6 + i%3] = 1;
            }
        }
        for(var i = 0; i < 9; i++){
            if(positions1.up[i] == 1){
                // var block = upblocks.create((Math.floor(i/3)) * 27 + 400,(i%3) * 27 + 350, 'brownbox');
                var block = this.add.image((Math.floor(i/3)) * 27 + 400,(i%3) * 27 + 350, 'brownbox');
                block.setScale(0.12);
                block.setInteractive();
            }
            else{
                // var block = upblocks.create((Math.floor(i/3)) * 27 + 400, (i%3) * 27 + 350, 'whitebox');
                var block = this.add.image((Math.floor(i/3)) * 27 + 400, (i%3) * 27 + 350, 'whitebox');
                block.setScale(0.12);
                block.setInteractive();
            }
        }
        for(var i = 0; i < 9; i++){
            if(positions1.front[i] == 1){
                // var block = frontblocks.create((i%3) * 27 + 500,Math.floor(i/3) * -27 + 350 + 54, 'brownbox')
                var block = this.add.image((i%3) * 27 + 500,Math.floor(i/3) * -27 + 350 + 54, 'brownbox');
                block.setScale(0.12);
                block.setInteractive();
            }
            else{
                // var block = frontblocks.create((i%3) * 27 + 500,Math.floor(i/3) * -27 + 350 + 54, 'whitebox')
                var block = this.add.image((i%3) * 27 + 500,Math.floor(i/3) * -27 + 350 + 54, 'whitebox');
                block.setScale(0.12);
                block.setInteractive();
            }
        }
        for(var i = 0; i < 9; i++){
            if(positions1.side[i] == 1){
                // var block = sideblocks.create((i%3) * -27 + 600 + 54,Math.floor(i/3) * -27 + 350 + 54, 'brownbox')
                var block = this.add.image((i%3) * -27 + 600 + 54,Math.floor(i/3) * -27 + 350 + 54, 'brownbox');
                block.setScale(0.12);
                block.setInteractive();
            }
            else{
                // var block = sideblocks.create((i%3) * -27 + 600 + 54,Math.floor(i/3) * -27 + 350 + 54, 'whitebox')
                var block = this.add.image((i%3) * -27 + 600 + 54,Math.floor(i/3) * -27 + 350 + 54, 'whitebox');
                block.setScale(0.12);
                block.setInteractive();
            }
        }
        // var text3 = this.add.text(16,16,"here");
        // var bubbleTextStyle = {font : "16px Arial", fill:"#fff", align: "center"};
        // text2 = game.add.text(0,0,"asda",bubbleTextStyle);
        // text2.anchor.set(0.5);

        var startButton = this.add.rectangle(600,550,100,40,0xfff000)
            .setInteractive({useHandCursor:true})
            .on('pointerup', function (event){
                for(var i = 0; i < 27; i++){
                    positions1.exist[i] = Math.random() > 0.5 ? 1 : 0;
                }
                this.scene.start("MyGame");
                console.log(positions1.exist);
            }, this);
        var text3 = this.add.text(560,540,"문항 생성",{fontSize: '20px', fill:'#000000'});
        // console.log("전체");
        // console.log(positions1.exist);
        // console.log("위");
        // console.log(positions1.up);
        // console.log("앞");
        // console.log(positions1.front);
        // console.log("옆");
        // console.log(positions1.side);

    }
    update(){
        
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
