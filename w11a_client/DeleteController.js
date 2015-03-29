(function () {
    var app = angular.module("CategoryMod");

    var DeleteController = function ($scope, $http) {

        $scope.delete = function () {
            var catid = $scope.catID;
            $http.delete("http://w11a.ergostratus.com/api/Categories/" + catid)
            .success(function (response) {
                $scope.updatestatus = "The data has been deleted";
            })
            .error(function (error) {
                console.log("Error with put:" + error);
            });
        }
    };
    app.controller("DeleteController", ["$scope", "$http", "$routeParams", DeleteController]);
}());