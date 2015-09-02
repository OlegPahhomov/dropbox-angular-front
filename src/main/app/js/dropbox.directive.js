(function () {
    'use strict';
    angular.module('dropbox')
        .directive('fancybox', FancyBoxDirective);

    FancyBoxDirective.$inject = ['$compile'];

    function FancyBoxDirective($compile) {
        return {
            restrict: 'A',
            replace: false,
            link: function ($scope, element) {
                if ($scope) setTimeout(function () {
                    $scope.open_fancybox = function () {
                        var el = angular.element(element.html());
                        var compiled = $compile(el);
                        $.fancybox.open(el);
                        compiled($scope);
                    }
                });
            }
        };
    }
})();