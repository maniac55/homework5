<style>
 #canvas {
   border: solid 1px lightgray
}
</style>

<canvas id="canvas" width=900 height=750></canvas>

<script>
 const canvas = document.getElementById('canvas');
 const ctx = canvas.getContext('2d')
 
 const backgroundImage = new Image();
 backgroundImage.src = 'https://wallpapercave.com/wp/SrvE2xe.jpg';
 
 const nyanCatImg = new Image();
 nyanCatImg.src = 'http://www.pngall.com/wp-content/uploads/2016/06/Nyan-Cat-Transparent.png';
 
 const badDogeImg = new Image();
 badDogeImg.src = 'http://i.imgur.com/RMKNpGQ.png'
 
 const floorY = canvas.height - 50;
 
 const cellingY = 0;
 
 const gameData = {
   hero: {
     x: 0,
     y: 350,
     img: nyanCatImg,
     width: 80,
     height: 80,
     xDelta: 0,
     yDelta: 0
     },
   badDoges: [
     {
     x: 100,
     y: 200,
     img: badDogeImg,
     width: 60,
     height: 60,
     xDelta: 3,
     yDelta: 3
     }
   ]
 };
 
   const draw = function() {
   ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height)
   
   const badDoge = gameData.badDoges[0];
   ctx.drawImage(badDoge.img, badDoge.x, badDoge.y, badDoge.width, badDoge.height);
   
   const hero = gameData.hero;
   ctx.drawImage(hero.img, hero.x, hero.y, hero.width, hero.height);
   
 };
 

 const updateData = function() {
   gameData.badDoges[0].x = gameData.badDoges[0].x + gameData.badDoges[0].xDelta;
   gameData.badDoges[0].y = gameData.badDoges[0].y + gameData.badDoges[0].yDelta;
   
   if (gameData.badDoges[0].x >= canvas.width - gameData.badDoges[0].width + 30  || gameData.badDoges[0].x <=0) {
     gameData.badDoges[0].xDelta = -gameData.badDoges[0].xDelta;
   }
   if (gameData.badDoges[0].y >= canvas.height - gameData.badDoges[0].height + 20  || gameData.badDoges[0].y <=0) {
     gameData.badDoges[0].yDelta = -gameData.badDoges[0].yDelta;
   }
	if(gameData.badDoges[0].x < gameData.hero.x + gameData.hero.width && gameData.badDoges[0].x + gameData.badDoges[0].width > gameData.hero.x && gameData.badDoges[0].y < gameData.hero.y + gameData.hero.height && gameData.hero.height + 
	   gameData.badDoges[0].y > gameData.hero.y) {
		alert("Game Over");
        location.reload();
	}
 }
 
 const loop = function(){
   draw();
   updateData();
   requestAnimationFrame(loop);
 };
 
 loop();
 
 const leftKey = 37;
 const upKey = 38;
 const rightKey = 39;
 const downKey = 40;

 document.addEventListener('keydown', function(event) {
 
	if(event.keyCode === rightKey) {
        gameData.hero.x = gameData.hero.x + 12;
         if (gameData.hero.x >= canvas.width-gameData.hero.width) {
         gameData.hero.x = 0;
         }
  	} else if (event.keyCode === leftKey) {
        gameData.hero.x = gameData.hero.x - 12;
        if (gameData.hero.x <= 0) {
         gameData.hero.x = canvas.width-gameData.hero.width;
         }
    }
    
    else if(event.keyCode === downKey) {
        gameData.hero.y = gameData.hero.y + 10;
        if (gameData.hero.y >= canvas.height-gameData.hero.height) {
         gameData.hero.y = 0;
         }
  	} else if (event.keyCode === upKey) {
        gameData.hero.y = gameData.hero.y - 10;
        if (gameData.hero.y <= 0) {
         gameData.hero.y = canvas.height-gameData.hero.height;
         }
        }
    
}, false);
 
</script>
