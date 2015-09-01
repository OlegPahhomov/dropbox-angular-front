(function () {
    'use strict';
    angular.module('dropbox')
        .directive('fancybox', FancyBoxDirective);

    FancyBoxDirective.$inject = ['$scope, $timeout'];

    function FancyBoxDirective($scope, element, attrs) {
        element.fancybox({
            hideOnOverlayClick: false,
            hideOnContentClick: false,
            enableEscapeButton: false,
            showNavArrows: false,
            onComplete: function () {
                $timeout(function () {
                    $compile($("#fancybox-content"))($scope);
                    $scope.$apply();
                    $.fancybox.resize();
                })
            }
        });
    }
})();