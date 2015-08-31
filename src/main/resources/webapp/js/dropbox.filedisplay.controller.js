(function () {
    'use strict';

    angular
        .module('dropbox')
        .controller('DropboxController', DropboxController);

    DropboxController.$inject = ['FileDisplayService'];

    function DropboxController(DropboxService) {
        var vm = this;
        vm.error = null;
        vm.response = null;
        vm.files = getFiles();
        vm.removePicture = removePicture;
        vm.addPictures = addPictures;

        function getFiles() {
            DropboxService.files()
                .success(function (data) {
                    vm.files = data;
                })
                .error(function () {
                    console.log("error");
                });
        }
    }
})();


dropboxApp.controller('fileDisplayController',
    ['$scope', '$http', function ($scope, $http) {
        $http.get(serverConfig.url('files'))
            .success(function (data) {
                $scope.files = data;
            })
    }]);


dropboxApp.controller('uploadPictureController',
    ['$scope', '$http', function ($scope, $http) {

    }]);