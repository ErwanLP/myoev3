/**
 * Created by Erwan on 07/01/2016.
 */
var controller_sphero = {};

var sphero = require("sphero"),
    orb = sphero("COM3"); // change port accordingly

orb.connect(function() {
    console.log("Sphero's connected!");
    // do some cool stuff here!
});


module.exports = controller_sphero;