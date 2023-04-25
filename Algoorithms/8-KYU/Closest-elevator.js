// KATA URL
// https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript

// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").

function elevator(left, right, call) {
   return Math.abs(call - right) <= Math.abs(call - left) ? 'right' : 'left';
}





