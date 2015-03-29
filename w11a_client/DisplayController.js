(function () {
    var app = angular.module("CategoryMod");

    var DisplayController = function ($scope, $http) {
        var formatOutput = function (rawJSON) {
            var output = "<tr><th>ID</th><th>Name</th><th>Description</th></td>";
            for(var i=0;i<rawJSON.length;i++) {
                var obj = rawJSON[i];
                output += "<tr>";
                for (var key in obj) {
                    if (key !== "Picture" && key !== "$id") {
                        output += "<td>" + obj[key] + "</td>";
                    }
                }                
                output += "</tr>";
            };
            return output;
        }

        $scope.getallcat = function () {
            //console.log('in controller');
            $http.get("http://w11a.ergostratus.com/api/Categories")
            .success( function(response) {
                $scope.categoryInfo = response;
            });
        }
    };
    app.controller("DisplayController", ["$scope", "$http", "$routeParams", DisplayController]);
}());