(function () {
    var app = angular.module(["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
          .when("/main", {
              templateUrl: "Default.html",
              controller: "DefaultController"
          })
          .when("/user/:username", {
              templateUrl: "user.html",
              controller: "UserController"
          })
          .otherwise({
              redirectTo: "/main"
          });
    });
}());