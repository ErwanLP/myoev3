/**
 * Created by Erwan on 15/12/2015.
 */
var controller_main = {};


controller_main.treatment = function(event){
    switch(event) {
        case "fingers_spread":
            console.log('fingers_spread');
            break;
        case "fingers_spread_off":
            console.log('fingers_spread_off');
            break;
        case "wave_in":
            console.log('wave_in');
            break;
        case "wave_in_off":
            console.log('wave_in_off');
            break;
        case "wave_out":
            console.log('wave-out');
            break;
        case "wave_out_off":
            console.log('wave_out_off');
            break;
        case "fist":
            console.log('fist');
            break;
        case "fist_off":
            console.log('fist_off');
            break;
        case "double_tap":
            console.log('double_tap');
            break;
        case "double_tap_off":
            console.log('double_tap_off');
            break;
        default :
            console.log('default : ' + event);
    }
};
module.exports = controller_main;