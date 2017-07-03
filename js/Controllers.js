var app = angular.module('ftms.controllers', ['ftms.Services']);
app.controller('loginCtrl', function ($scope,$location,AjaxService) {
    $scope.msg = "You are in login page";
    var url = 'http://localhost:51362/Account/SignIn';
    $scope.user = {};
    $scope.user.username = $scope.username;
    $scope.user.password = $scope.password;
    AjaxService.postService(url, user).then(function (response) {
        console.log(response);
        if (response.statuscode == 100) {
            $location.path('html/Home.html');
        }
    },
    function (response) {
        $scope.msg = "Error occured while adding user";
        console.log(response);
        console.log(msg);
    });


});
app.controller('HomeCtrl', function ($scope) {
    $scope.msg = "you are in home page";
});
app.controller('EventCtrl', function ($scope) {
    $scope.msg = "You are in event msg";
})