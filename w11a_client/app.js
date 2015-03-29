(function () {
    var app = angular.module("CategoryMod", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
          .when("/main", {
              templateUrl: "Display.html",
              controller: "DisplayController"
          })
            .when("/update", {
                templateUrl: "Update.html",
                controller: "UpdateController"
            })
            .when("/create", {
                templateUrl: "Create.html",
                controller: "CreateController"
            })
            .when("/delete", {
                templateUrl: "Delete.html",
                controller: "DeleteController"
            })
          .otherwise({
              redirectTo: "/main"
          });
    });
}());