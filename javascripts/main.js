var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
var velocity;
var y = 0;
var testsong ='data:audio/midi;base64,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';
var counter = 0;
var notes=[];
var datas
var divplayer = document.getElementById('gplayer');


var gplayer = {
  x : 20,
  y : 20,
  width : 5,
  height : 5,
  speed: 0,
  velY: 0
}

divplayer.style.width = gplayer.width;
divplayer.style.height = gplayer.height;
divplayer.style.top = gplayer.y;
divplayer.style.left = gplayer.x;
divplayer.style.color = 'red';

document.onkeydown = checkkey;

window.onload = function () {
	MIDI.loader = new widgets.Loader;
	MIDI.loadPlugin({
		instrument: "acoustic_grand_piano", // or multiple instruments
		callback: function() {
			
			
			MIDI.loader.stop();	
			player = MIDI.Player
			player.timeWarp = 1;
			player.loadFile(testsong, player.start); 
			player.addListener(function(data){
				velocity = data.velocity;
				
		    counter++		
		 	})
			
		
		    player.setAnimation(function(data) {
				datas = data.now;
                var events = data.events; // all the notes currently being processed
           		notes=Object.getOwnPropertyNames(events);
				
				
		});
		}
	})
	
	
}

var draw = function(){
	
	
	for(var i = 0; i<notes.length; i++){
	ctx.fillStyle='#12ffe1';
	ctx.fillRect(datas*100,1000-notes[i]*10,7,10);
	}
	window.scrollTo(datas*100-1000,0);
	requestAnimationFrame(draw);
}

 
draw();


function checkkey(e){
	e = e||window.event;
	if(e.keyCode == '40'){
		//down
	}
	else if(e.keyCode == '37'){
		//left
	}
	else if(e.keyCode == '38'){
		//up
	}
	else if(e.keyCode == '39'){
		if(player.speed <15){
			gplayer.speed++
		}
		else{
			gplayer.speed = 15;
		}
		gplayer.x += gplayer.speed;
	}
}
