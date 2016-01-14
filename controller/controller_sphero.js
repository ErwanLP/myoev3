/**
 * Created by Erwan on 07/01/2016.
 */
var controller_sphero = {};

// require("controller-myo.js");
/* eslint no-use-before-define: 0 */
/* eslint no-process-exit: 0 */
var Myo = require('myo');
var sphero = require("sphero");

// make sure you install this first - `npm install keypress`
var keypress = require("keypress");

var orb = sphero("COM3");

orb.connect(listen);
var stop = orb.roll.bind(orb, 0, 0),
    roll = orb.roll.bind(orb, 60);
	
// Myo.on('gyroscope', function(data){
// if(data.z>30){
	// roll=orb.roll.bind(orb, 160);
	// }
// else if(data.z<-30){
	// roll=orb.roll.bind(orb, 20)
// }
// else{
	// roll=orb.roll.bind(orb, 60)
// }
// });

controller_sphero.up = function(){
    roll(0);
};

controller_sphero.right = function(){
    roll(90);
};

controller_sphero.down = function(){
    roll(180);
};

controller_sphero.left = function(){
    roll(270);
};

controller_sphero.stop = function(){
    stop();
};

function handle(ch, key) {
    var stop = orb.roll.bind(orb, 0, 0),
        roll = orb.roll.bind(orb, 60);

    if (key.ctrl && key.name === "c") {
        process.stdin.pause();
        process.exit();
    }

    if (key.name === "e") {
        orb.startCalibration();
    }

    if (key.name === "q") {
        orb.finishCalibration();
    }

    if (key.name === "up") {
        roll(0);
    }

    if (key.name === "down") {
        roll(180);
    }

    if (key.name === "left") {
        roll(270);
    }

    if (key.name === "right") {
        roll(90);
    }

    if (key.name === "space") {
        stop();
    }
}

function listen() {
    keypress(process.stdin);
    process.stdin.on("keypress", handle);

    console.log("starting to listen for arrow key presses");

    process.stdin.setRawMode(true);
    process.stdin.resume();
}

module.exports = controller_sphero;
