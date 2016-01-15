/**
 * Created by Erwan on 15/01/2016.
 */
/**
 * Created by Erwan on 14/01/2016.
 */
myoApp.factory('myoInfo', ['$http', function ($http) {

    var s = {};

    s.getMyoInfo = function(callback){

        var responsePromise = $http.get("/myoInfo");

        responsePromise.success(function(data, status, headers, config) {
            console.log(data);
            callback(data);
        });
        responsePromise.error(function(data, status, headers, config) {
            console.error(data);
        });

    };



    return s;
}]);