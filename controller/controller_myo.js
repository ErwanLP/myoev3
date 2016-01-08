	/**
 * Created by Erwan on 14/12/2015.
 */
var Myo = require('myo');


var controller_main = require('./controller_main');

Myo.onError = function(){
    console.log('Myo Error.Please make sure Myo Connect is running!');
};

Myo.connect('com.stolksdorf.myAwesomeApp');

Myo.on('connected', function(){
    console.log('connected with myo');
});



/** Pose */
Myo.on('fingers_spread', function(){
    controller_main.treatment("fingers_spread");
});
Myo.on('wave_in', function(){
    controller_main.treatment("wave_in");
});
Myo.on('wave_out', function(){
    controller_main.treatment("wave_out");
});
Myo.on('fist', function(){
    controller_main.treatment("fist");
});
Myo.on('double_tap', function(){
    controller_main.treatment("double_tap");
});

/** Pose_off*/
Myo.on('fingers_spread_off', function(){
    controller_main.treatment("fingers_spread_off");
});
Myo.on('wave_in_off', function(){
    controller_main.treatment("wave_in_off");
});
Myo.on('wave_out_off', function(){
    controller_main.treatment("wave_out_off");
});
Myo.on('fist_off', function(){
    controller_main.treatment("fist_off");
});
Myo.on('double_tap_off', function(){
    controller_main.treatment("double_tap_off");
});

