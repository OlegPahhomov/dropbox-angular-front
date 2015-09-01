var app = angular.module('plunker', []);

app.directive('fancybox', function($compile) {
    return {
        restrict: 'A',
        replace: false,
        link: function($scope, element, attrs) {

            $scope.open_fancybox = function() {

                var el = angular.element(element.html()),

                    compiled = $compile(el);

                $.fancybox.open(el);

                compiled($scope);

            };
        }
    };
});

app.controller('MainCtrl', ['$scope',
    function ControllerZero($scope) {

        $scope.phones = [{
            'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.',
            'age': 1
        }, {
            'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.',
            'age': 2
        }, {
            'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.',
            'age': 3
        }];

        $scope.alert = function (phone) { window.alert(phone.name); };

    }
]);    