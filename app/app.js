var JDeffoApp = angular.module('JDeffoApp', ['ngRoute', 'ui.bootstrap']);

JDeffoApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/home', {
            templateUrl: 'Views/Home.html',
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
}]);

JDeffoApp.controller('HomeController', function($uibModal){
    var vm = this;

    vm.controller = {

        testText: "This is a test",

        showContactModal: function() {
            this.setDisplay('contactModal', true);
        },

        htmlTemplates: {
            contactModalTemplate: 'Views\ContactModal.html',
        },

        setDisplay: function(element, value) {
            switch (element) {
                case 'contactModal':
                    this.openModal('Views/ContactModal.html', value);
                    break;
            }
        },

        openModal: function (template, data) {
            var modalInstance = $uibModal.open({
                templateUrl: 'Views/ContactModal.html',
                controller: 'HomeModalController',
                controllerAs: 'hmctrl',
                size: 'lg',
                resolve: {
                    data: function () {
                        return data;
                    }
                }
            });
        },
    };
});

JDeffoApp.controller('HomeModalController', function($uibModalInstance){
    var hmctrl = this;

    hmctrl.close = function () {
        $uibModalInstance.dismiss('cancel');
    };

    hmctrl.contact = {
        //Model
        name: "",
        email: "",
        message: "",

        sendMessage: function() {
            hmctrl.close();
        },

    };
});

/*function ($modalInstance, data) {
    this.data = data;
    this.close = function() {
        $uibModalInstance.dismiss('cancel');
    }
}*/
