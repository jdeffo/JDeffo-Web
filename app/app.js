var JDeffoApp = angular.module('JDeffoApp', ['ngRoute', 'ui.bootstrap']);

JDeffoApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/home', {
            templateUrl: 'Views/Home.html',
            controller: 'HomeController',
            controllerAs: 'hctrl',
            caseInsensitiveMatch: true,
        })
        .when('/home2', {
            templateUrl: 'Views/NewHome.html',
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
          controller: 'ContactController',
          controllerAs: 'cctrl',
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
            /*{
                title: 'GTD',
                link: 'https://github.com/jdeffo/gtd',
                image: 'Images/stockCode1.jpeg',
            },*/
            //Password Manager
            /*{
                title: 'Password Manager',
                link: 'https://github.com/jdeffo/passwordmanager',
                image: 'Images/stockCode2.jpeg',
            },*/
            //Reverse-Shell-And-Key-logger
            /*{
                title: 'Reverse Shell/Key Logger',
                link: 'https://github.com/jdeffo/Reverse-Shell-And-Key-logger',
                image: 'Images/stockCode2.jpeg',
            },*/
        ],

        showIntroPane: true,
        showSkillsPane: false,
        showPortfolioPane: false,
        showContactPane: false,

        togglePane: function(select) {
            if(select == "intro") {
                this.showIntroPane = true;
                this.showSkillsPane = false;
                this.showPortfolioPane = false;
                this.showContactPane = false;
            }
            else if(select == "skills") {
                this.showIntroPane = false;
                this.showSkillsPane = true;
                this.showPortfolioPane = false;
                this.showContactPane = false;
            }
            else if(select == "portfolio") {
                this.showIntroPane = false;
                this.showSkillsPane = false;
                this.showPortfolioPane = true;
                this.showContactPane = false;
            }
            else if(select == "contact") {
                this.showIntroPane = false;
                this.showSkillsPane = false;
                this.showPortfolioPane = false;
                this.showContactPane = true;
            }
        },

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

JDeffoApp.controller('ContactController', function($http){
    var cm = this;

    cm.controller = {

        sendMessage: function() {
            name = cm.model.contact.name;
            email = cm.model.contact.email;
            message = cm.model.contact.message;
            input = {name: name, email: email, message: message};

            $http({
                method: 'POST',
                url: '/sendEmail',
                data: input,
            }).then(function(response) {
                cm.model.contact.result = "call success";

            }, function(error) {
                console.log(error);
            });
        },
    };

    cm.model = {
        contact: {
            name: "",
            email: "",
            message: "",
            result: "",
        },
    };
});













JDeffoApp.controller('HomeModalController', function($uibModalInstance){
    var hmctrl = this;

    hmctrl.close = function () {
        $uibModalInstance.dismiss('cancel');
    };

    hmctrl.sendMessage = function() {
        hmctrl.model.contact.name = "call success";
        name = hmctrl.model.contact.name;
        email = hmctrl.model.contact.email;
        message = hmctrl.model.contact.message;

        hmctrl.model.contact.result = "call success";
        input = {name: name, email: email, message: message};

        /*$.ajax({
            type: "POST",
            url: "~/Scripts/composeEmail",
            data: { param: input}
        }).done(function( o ) {
            // do something
        });*/
    };
    hmctrl.model = {
        contact: {
            name: "",
            email: "",
            message: "",
            result: "Working?",
        },
    };
});

/*function ($modalInstance, data) {
    this.data = data;
    this.close = function() {
        $uibModalInstance.dismiss('cancel');
    }
}*/
