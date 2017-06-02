// 1 SETUP //

//1 The Rover: point in movement
var myRover = {
  position: [0,0],
  direction: 'N'
  direction: 'E'
  direction: 'S'
  direction: 'W'
  // don't understand why "e" ?
};

//2 The Grid : space of movement
// The grid is spherical (if I go to one edge, I come back to the initial one)
// --> two dimensional arrays look in Google


// 2 ACTION //

//3 Functions // define the movement
//3.1 what is the movement

//if (key is pressed) {
// if (myRover.position == goForward)
//  return move.myRover } else if {} [...]

}
function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]++
      break;
    case 'E':
      rover.position[0]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[0]--
      break;
  };

function goBackwards(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[0]++
      break;
    case 'S':
      rover.position[1]--
      break;
    case 'W':
      rover.position[0]--
      break;
  };

function goRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[0]--
      break;
  };

function goLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[0]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

//3.2 functions to make the object move
goForward(myRover);
//function changeDirection();
// the new changeDirection wil give a new value for the position = newPosition
// f to go forward
// b to go back
// r to turn right
// to turn left

//4 Make the object move: call the functions
// + track movement (display new position of the rover)
