
<!DOCTYPE html>
<html>
<head>
     <style>
       html,body{
  overflow-x: scroll;
  overflow-y: scroll;
  padding:0;
}
    </style>
	<script src="//cdn.jsdelivr.net/npm/phaser@3.24.1/dist/phaser.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/phaser@3.15.1/dist/phaser-arcade-physics.min.js">
    </script><script>


var config = {
    type: Phaser.AUTO,
    width: 800*0.8,
    height: 800*0.8,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },

};
var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('board', '/resources/assets/Monopoly.png');


}

var platforms;

function create ()
{
    this.add.image(400*0.8,400*0.8,'board').setDisplaySize(800*0.8, 800*0.8)


}

	function update ()
	{

	}


	</script>
	<title>Phaser Try-1</title>
</head>
<body>

</body>
</html>
