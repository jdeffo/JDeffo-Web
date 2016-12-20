var JDeffoApp = angular.module('JDeffoApp', ['ngRoute']);

JDeffoApp.config(['$routeProvider', function($routeProvider){

  $routeProvider
    .when('/home', {
      templateUrl: 'Views/Home.html'
      controller: 'HomeController'
      caseInsensitiveMatch: true
    })
    .when('/about', {
      templateUrl: 'Views/About.html'
      controller: 'AboutController'
      caseInsensitiveMatch: true
    })
    .when('/contact', {
      templateUrl: 'Views/Contact.html'
      controller: 'ContactController'
      caseInsensitiveMatch: true
    })
    .when('/portfolio', {
      templateUrl: 'Views/Portfolio.html'
      controller: 'PortfolioControler'
      caseInsensitiveMatch: true
    })
    .when('/resume', {
      templateUrl: 'Views/Resume.html'
      controller: 'ResumeController'
      caseInsensitiveMatch: true
    })
    .otherwise({
      redirectTo: '/home'
    });

}]);

JDeffoApp.run(function() {

});

JDeffoApp.controller('HomeController', ['$scope', function($scope){



}]);
