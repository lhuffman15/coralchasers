var page = 0;
var filler;
var home;
var learn;
var map;
var camera;
var cameraFirst;
var cameraSec;
var act;
var learn2;
var learn3;
var learn4;
var learn5;
var learn6;
var learn7;




function preload(){
	filler = loadImage('img/ph.jpg');
	home = loadImage('img/ph2.jpg');
	learn = loadImage('img/ph3.jpg');
	camera = loadImage('img/ph4.jpg');
	cameraFirst = loadImage('img/ph7.jpg');
	cameraSec = loadImage('img/ph9.jpg');
	map = loadImage('img/ph5.jpg');
	act = loadImage('img/ph6.jpg');
	learn2 = loadImage('img/ph10.jpg');
	learn3 = loadImage('img/ph11.jpg');
	learn4 = loadImage('img/ph12.jpg');
	learn5 = loadImage('img/ph13.jpg');
	learn6 = loadImage('img/ph14.jpg');
	learn7 = loadImage('img/ph15.jpg');
}

function setup() {
	createCanvas(375, 677);
}

function draw() {

//BUTTON FUNCTIONALITY

		//Application intro screen
		if (page == 0){
			image(filler, 0, 0, 375, 677);
    }

		//Home screen
    if (mouseIsPressed && mouseX > 0 && mouseX < 77 && mouseY > 602 && mouseY < 677){
      page = 1;
    }

		//X out back to home screen
		if (mouseIsPressed && mouseX > 300 && mouseX < 358 && mouseY > 16 && mouseY < 74){
			page = 1;
		}

		// initial learn page
    if (mouseIsPressed && mouseX > 78 && mouseX < 155 && mouseY > 602 && mouseY < 677){
      page = 2;
    }

		//initial camera page
    if (mouseIsPressed && mouseX > 156 && mouseX < 233 && mouseY > 602 && mouseY < 677){
      page = 3;
    }

		//initial map page
    if (mouseIsPressed && mouseX > 234 && mouseX < 311 && mouseY > 602 && mouseY < 677){
      page = 4;
    }

		//initial act page
    if (mouseIsPressed && mouseX > 312 && mouseX < 376 && mouseY > 602 && mouseY < 677){
      page = 5;
    }

		//camera upload page
		if (mouseIsPressed && mouseX > 78 && mouseX < 298 && mouseY > 448 && mouseY < 483){
			page = 6;
		}

		//camera share page
		if (mouseIsPressed && mouseX > 103 && mouseX < 270 && mouseY > 515 && mouseY < 550){
			page = 7;
		}

		//learn prompt pages
		if (mouseIsPressed && mouseX > 75 && mouseX < 103 && mouseY > 170 && mouseY < 199){
			page = 8;
		}
		if (mouseIsPressed && mouseX > 115 && mouseX < 144 && mouseY > 170 && mouseY < 199){
			page = 9;
		}
		if (mouseIsPressed && mouseX > 156 && mouseX < 185 && mouseY > 170 && mouseY < 199){
			page = 10;
		}
		if (mouseIsPressed && mouseX > 196 && mouseX < 225 && mouseY > 170 && mouseY < 199){
			page = 11;
		}
		if (mouseIsPressed && mouseX > 237 && mouseX < 266 && mouseY > 170 && mouseY < 199){
			page = 12;
		}
		if (mouseIsPressed && mouseX > 277 && mouseX < 306 && mouseY > 170 && mouseY < 199){
			page = 13;
		}

//IMAGES / Screenshots

		//home feed page
    if(page == 1){
    	image(home, 0, 0, 375, 677);
    }

		//initial learn page
		if(page == 2){
			image(learn, 0, 0, 375, 677);
		}

		//initial camera page
		if(page == 3){
			image(cameraFirst, 0, 0, 375, 677);
		}

		//map page
		if(page == 4){
			image(map, 0, 0, 375, 677);
		}

		//act page
		if(page == 5){
			image(act, 0, 0, 375, 677);
		}

		//camera upload page
		if(page == 6){
			image(camera, 0, 0, 375, 677);
		}

		//camera share page
		if(page == 7){
			image(cameraSec, 0, 0, 375, 677);
		}

		//Learn prompts
		if(page == 8){
			image(learn2, 0, 0, 375, 677);
		}

		if(page == 9){
			image(learn3, 0, 0, 375, 677);
		}

		if(page == 10){
			image(learn4, 0, 0, 375, 677);
		}

		if(page == 11){
			image(learn5, 0, 0, 375, 677);
		}

		if(page == 12){
			image(learn6, 0, 0, 375, 677);
		}

		if(page == 13){
			image(learn7, 0, 0, 375, 677);
		}



}
