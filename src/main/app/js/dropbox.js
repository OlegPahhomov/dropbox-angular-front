(function () {
    'use strict';
    angular
        .module('dropbox', [
            'fancyboxplus',
            'ui.router'
        ])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            //
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("/app");
            //
            // Now set up the states
            $stateProvider
                .state('/app', {
                    url: "/app",
                    templateUrl: "index.html"
                })
        }])
})();