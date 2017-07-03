var app = angular.module('ftms.Services', []);

app.factory('Ajaxservice', function ($scope,$http) {
    var service = {};
    service.getService = function (url,params) {
        $http({
            method:'GET',
            url: url,
            datatype: 'json',
            data: JSON.stringify(params)
        }),
        service.postService = function (url, params) {
            $http({
                method: 'POST',
                url: url,
                data: 'json',
                datatype:JSON.stringify(params)
            })
            return service;
        }
    }
});