var JDeffoApp = angular.module('JDeffoApp', ['ngRoute', 'ui.bootstrap']);

JDeffoApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/home', {
            templateUrl: 'Views/Home.html',
            controller: 'HomeController',
            controllerAs: 'hctrl',
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
                    this.openModal(this.htmlTemplates.contactModalTemplate, value);
                    break;
            }
        },

        openModal: function (template, data) {
            var uibModalInstance = $uibModal.open({
                templateUrl: template,
                size: 'lg',
                controller: function ($uibModalInstance, data) {
                    this.data = data;
                    this.close = function() {
                        $uibModalInstance.dismiss('cancel');
                    }
                },
                controllerAs: 'hmctrl',
                resolve: {
                    data: function () {
                        return data;
                    }
                }
            })
        },
    };
});
