(function () {
    var app = angular.module("CategoryMod");

    var CreateController = function ($scope, $http) {

        $scope.create = function () {
            var catname = $scope.catName;
            var catdescription = $scope.catDescription;
            console.log($scope);
            var data = JSON.stringify({ CategoryName: catname, Description: catdescription });
            console.log(data);
            $http.post("http://w11a.ergostratus.com/api/Categories", data)
            .success(function (response) {
                $scope.updatestatus = "The data has been created";
        })
        .error(function (error) {
            console.log("Error with put:" + error);
        });
    }
};
app.controller("CreateController", ["$scope", "$http", "$routeParams", CreateController]);
}());