/**
 * Created by Erwan on 15/12/2015.
 */

var controller_socket = require('./controller_socket');
//var controller_sphero = require('./controller_sphero');
var controller_main = {};


controller_main.treatment = function(event){
    controller_socket.emit(event);
    switch(event) {
        case "fingers_spread":
            console.log('fingers_spread');
			controller_sphero.stop();
            break;
        case "fingers_spread_off":
            console.log('fingers_spread_off');
            break;
        case "wave_in":
            console.log('wave_in');
            controller_sphero.left();
            break;
        case "wave_in_off":
            console.log('wave_in_off');
            break;
        case "wave_out":
            console.log('wave-out');
			controller_sphero.right();
            break;
        case "wave_out_off":
            console.log('wave_out_off');
            break;
        case "fist":
            console.log('fist');
			controller_sphero.up();
            break;
        case "fist_off":
            console.log('fist_off');
            break;
        case "double_tap":
            console.log('double_tap');
			controller_sphero.down();
            break;
        case "double_tap_off":
            console.log('double_tap_off');
            break;
        default :
            console.log('default : ' + event);
    }
};
module.exports = controller_main;