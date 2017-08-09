var JDeffoApp = angular.module('JDeffoApp', ['ngRoute', 'ui.bootstrap']);

JDeffoApp.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/home', {
        templateUrl: 'Views/Home.html',
        caseInsensitiveMatch: true,
        controller: 'HomeController',
        controllerAs: 'hctrl',
    })
    .when('/about', {
      templateUrl: 'Views/About.html',
      controller: 'AboutController',
      caseInsensitiveMatch: true
    })
    .when('/contact', {
      templateUrl: 'Views/Contact.html',
      controller: 'ContactController',
      caseInsensitiveMatch: true
    })
    .when('/portfolio', {
      templateUrl: 'Views/Portfolio.html',
      controller: 'PortfolioControler',
      caseInsensitiveMatch: true
    })
    .otherwise({
      redirectTo: '/home'
    });
});
JDeffoApp.controller('JDeffocontroller', function($location) {
    this.backButton = function() {
        $location.path('/home');
    }
})
