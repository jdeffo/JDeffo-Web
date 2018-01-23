var JDeffoApp = angular.module('JDeffoApp', ['ngRoute', 'ui.bootstrap']);

JDeffoApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'Views/Home.html',
            controller: 'HomeController',
            controllerAs: 'hctrl',
            caseInsensitiveMatch: true,
        })
        .otherwise({
          redirectTo: '/home'
        })
}]);

JDeffoApp.controller('HomeController', function($uibModal, $location, $anchorScroll){
    var vm = this;

    vm.controller = {
        //ng-show toggles
        showAboutPane: true,
        showSkillsPane: false,
        showPortfolioPane: false,
        showContactPane: false,
        showMobile: false,
        //Show pane on desktop
        togglePane: function(select) {
            if(select == "intro") {
                this.showAboutPane = true;
                this.showSkillsPane = false;
                this.showPortfolioPane = false;
                this.showContactPane = false;
            }
            else if(select == "skills") {
                this.showAboutPane = false;
                this.showSkillsPane = true;
                this.showPortfolioPane = false;
                this.showContactPane = false;
            }
            else if(select == "portfolio") {
                this.showAboutPane = false;
                this.showSkillsPane = false;
                this.showPortfolioPane = true;
                this.showContactPane = false;
            }
            else if(select == "contact") {
                this.showAboutPane = false;
                this.showSkillsPane = false;
                this.showPortfolioPane = false;
                this.showContactPane = true;
            }
        },
        //Scroll to clicked link for mobile
        scrollMobile: function(loc) {
            $location.hash(loc);
            $anchorScroll();
        },
        sendMessage: function() {
            /*$.post("sendInquiry", inquiry, function(){

            });*/
            /*$.getJSON('http://127.0.0.1:5000/sendInquiry', {
                key: inquiry,
            }, function(data){
                // Handles the callback when the data returns
            });*/
            $.ajax({
                url:'http://127.0.0.1:5000/sendInquiry',
                type: 'POST',
                data: JSON.stringify(vm.model.contact),
                contentType: "application/json",
                success: function(data) {
                }
            })
            event.preventDefault();
            vm.model.clearContact();
        },
        /*Init to check display size to determine whether to show
        desktop or mobile design*/
        init: function() {
            var size = screen.width;
            if(size <= 1000) {
                this.showMobile = true;
                this.showAboutPane = false;
                this.showSkillsPane = false;
                this.showPortfolioPane = false;
                this.showContactPane = false;
            }
        },
    };
    vm.model = {
        contact: {
            name: null,
            email: null,
            message: null,
        },
        clearContact: function() {
            this.contact = [];
        }
    };
    vm.controller.init();
});
