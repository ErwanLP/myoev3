/**
 * Created by Erwan on 15/12/2015.
 */

var controller_socket = require('./controller_socket');
var controller_main = {};
var sphero = false;
controller_main.myoData = {};
if(sphero){
    var controller_sphero = require('./controller_sphero');
}

controller_main.myoInfo = function(info){
    if(info.battery_level){
        controller_main.myoData.battery_level = info.battery_level
    } else if(info.bluetooth_strength){
        controller_main.myoData.bluetooth_strength = info.bluetooth_strength
    } else {
        console.error('Info Myo Error' + info);
    }
};


controller_main.treatment = function(event){
    switch(event) {
        case "fingers_spread":
            controller_socket.emit(null);
            if(sphero)
			controller_sphero.stop();
            break;
        case "fingers_spread_off":
            break;
        case "left":
        case "wave_in":
            controller_socket.emit('left');
            if(sphero)
            controller_sphero.left();
            break;
        case "wave_in_off":
            break;
        case 'right':
        case "wave_out":
            controller_socket.emit('right');
            if(sphero)
			controller_sphero.right();
            break;
        case "wave_out_off":
            break;
        case 'up' :
        case "fist":
            controller_socket.emit('up');
            if(sphero)
			controller_sphero.up();
            break;
        case "fist_off":
            break;
        case 'down' :
        case "double_tap":
            controller_socket.emit('down');
            if(sphero)
            controller_sphero.down();
            break;
        case "double_tap_off":
            //console.log('double_tap_off');
            break;
        default :
            controller_socket.emit(null);
    }
};
module.exports = controller_main;