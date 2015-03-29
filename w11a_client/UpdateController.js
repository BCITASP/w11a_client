(function () {
    var app = angular.module("CategoryMod");

    var UpdateController = function ($scope, $http) {
        var displayCatInfo = function (data) {
            console.log(data.CategoryID);
            console.log(data.CategoryName);
            console.log(data.Description);

            $scope.catID = data.CategoryID;
            $scope.catName = data.CategoryName;
            $scope.catDescription = data.Description;

            //$('#categoryID').val(data.CategoryID);
            //$('#categoryName').val(data.CategoryName);
            //$('#categoryDescription').val(data.Description);
        }

        $scope.getbyid = function () {
            var catID = $scope.findID.trim();
            if (catID.length > 0) {
                $http.get("http://w11a.ergostratus.com/api/Categories/" + catID)
                    .success(function (response) {
                        displayCatInfo(response);
                    });
                }
            }            

        $scope.update = function () {
            var catid = $scope.catID;
            var catname = $scope.catName;
            var catdescription = $scope.catDescription;
            console.log($scope);
            var data = JSON.stringify({ CategoryID: catid, CategoryName: catname, Description: catdescription });
            console.log(data);
            $http.put("http://w11a.ergostratus.com/api/Categories/" + catid, data)
            .success(function (response) {
                $scope.updatestatus = "The data has been updated";
            })
            .error(function (error) {
                console.log("Error with put:" + error);
            });
        }
    };
    app.controller("UpdateController", ["$scope", "$http", "$routeParams", UpdateController]);
}());