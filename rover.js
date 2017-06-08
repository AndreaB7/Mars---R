// VOID SETUP //

//1 The Rover: point in movement

var myRover = {
  position: [0,0],
  direction: 'N'
};

var rover = myRover;

//2 Functions // define the movements of the bot

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]++;
      //console.log(rover);
      break;
    case 'E':
      rover.position[0]++;
      break;
    case 'S':
      //doc original está marcado 1
      rover.position[1]--;
      break;
    case 'W':
      rover.position[0]--;
      break;
  }
  gridControl();
}

function goBackwards(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]--;
      break;
    case 'E':
      rover.position[0]--;
      break;
    case 'S':
      rover.position[1]++;
      break;
    case 'W':
      rover.position[0]++;
      break;
    }
    gridControl();
  }

function goRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = "E";
      break;
    case 'E':
      rover.direction = "S";
      break;
    case 'S':
      rover.direction = "O";
      break;
    case 'W':
      rover.direction = "N";
      break;
    }
  }

function goLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = "O";
      break;
    case 'E':
      rover.direction = "N";
      break;
    case 'S':
      rover.direction = "E";
      break;
    case 'W':
      rover.direction = "S";
      break;
    }
  }

//3 Limits of the Grid: resetting the bot to the origin 0,0

function gridControl() {
  if(rover.position[0]< 0){
    rover.position[0] = 0;
  } else if(rover.position[0]>10){
    rover.position[0] = 0;
  } else if (rover.position[1]<0){
    rover.position[1] = 0;
  } else if(rover.position[1]>10){
    rover.position[1] = 0;
  } else {}
}

// VOID DRAW //
//4 Define the movement of the bot

var movement = "fffrfflfffbb";

//function movement
  for (var i=1 ; i<=movement.length ; i++) {
    switch (movement[i]) {
      case "r":
        goRight(rover);
        break;
      case "l":
        goLeft(rover);
        break;
      case "f":
        goForward(rover);
        break;
      case "b":
        goBackwards(rover);
        break;
    }
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
  }
