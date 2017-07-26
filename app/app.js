var JDeffoApp = angular.module('JDeffoApp', ['ngRoute', 'ui.bootstrap']);

JDeffoApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/home', {
            templateUrl: 'Views/Home.html',
            controller: 'HomeController',
            controllerAs: 'hctrl',
            caseInsensitiveMatch: true,
        })
        .when('/about', {
            templateUrl: 'Views/About.html',
            controller: 'HomeController',
            controllerAs: 'hctrl',
            caseInsensitiveMatch: true,
        })
        .when('/contact', {
          templateUrl: 'Views/Contact.html',
          //controller: 'ContactController',
          caseInsensitiveMatch: true,
        })
        .when('/portfolio', {
          templateUrl: 'Views/Portfolio.html',
          controller: 'PortfolioController',
          controllerAs: 'pctrl',
          caseInsensitiveMatch: true,
        })
        .otherwise({
          redirectTo: '/home'
        })
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

JDeffoApp.controller('PortfolioController', function($uibModal){
    var vm = this;

    vm.controller = {
        //Project Card List
        cardList: [
            //Web
            {
                title: "JDeffo-Web",
                link: "https://github.com/jdeffo/JDeffo-Web",
                image: "Images/stockCode2.jpeg",
            },
            {
                title: 'To-Do-List',
                link: 'https://github.com/jdeffo/To-Do-List',
                image: 'Images/stockCode1.jpeg',
            },
            //Machine Learning
            {
                title: 'Machine Learning',
                link: 'https://github.com/jdeffo/Machine-Learning',
                image: 'Images/stockCode3.jpeg',
            },
            //Various Scripts
            {
                title: 'Various Scripts',
                link: 'https://github.com/jdeffo/Various-Scripts',
                image: 'Images/stockCode2.jpeg',
            },
            //To-Do-List
            {
                title: 'To-Do-List',
                link: 'https://github.com/jdeffo/To-Do-List',
                image: 'Images/stockCode1.jpeg',
            },
            //deffoStocks
            {
                title: 'deffoStocks',
                link: 'https://github.com/jdeffo/deffo-stocks',
                image: 'Images/stockCode3.jpeg',
            },
            //GTD
            {
                title: 'GTD',
                link: 'https://github.com/jdeffo/gtd',
                image: 'Images/stockCode1.jpeg',
            },
            //Password Manager
            {
                title: 'Password Manager',
                link: 'https://github.com/jdeffo/passwordmanager',
                image: 'Images/stockCode2.jpeg',
            },
            //Reverse-Shell-And-Key-logger
            {
                title: 'Reverse Shell/Key Logger',
                link: 'https://github.com/jdeffo/Reverse-Shell-And-Key-logger',
                image: 'Images/stockCode2.jpeg',
            },
        ],
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
