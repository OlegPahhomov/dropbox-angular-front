/*var dropbox = angular.module('dropbox', []);*/

(function () {
    'use strict';
    angular.module('dropbox', []);
})();

/*
 var DropboxService =
 angular.module('dropbox')
 .service('DropboxService', ['$http', function ($http) {
 var url = serverConfig.SERVER();
 return {
 getPictures: getPictures()
 };

 function getPictures() {
 return $http.get(url + 'files');
 }
 }]);*/

(function () {
    'use strict';
    angular.module('dropbox')
        .service('DropboxService', DropboxService);

    DropboxService.$inject = ['$http'];

    function DropboxService($http) {
        var url = serverConfig.SERVER();
        return {
            getPictures: getPictures()
        };

        function getPictures() {
            return $http.get(url + 'files');
        }
    }
})();


/*var PictureDisplayController =
 angular.module('dropbox')
 .controller('PictureDisplayController', function ($scope, DropboxService) {
 $scope.pictures = getPictures();
 function getPictures() {
 DropboxService.getPictures.success(function (response) {
 $scope.pictures = response;
 });
 }
 });*/

(function () {
    'use strict';
    angular.module('dropbox')
        .controller('PictureDisplayController', PictureDisplayController);

    PictureDisplayController.$inject = ['DropboxService', '$scope'];

    function PictureDisplayController(DropboxService, $scope) {
        $scope.pictures = getPictures();
        function getPictures() {
            DropboxService.getPictures.success(function (response) {
                $scope.pictures = response;
            });
        }
    }
})();
