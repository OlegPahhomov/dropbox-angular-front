(function () {
    'use strict';
    angular.module('dropbox')
        .service('DropboxService', DropboxService);

    DropboxService.$inject = ['$http'];

    function DropboxService($http) {
        var url = serverConfig.SERVER();
        return {
            getPictures: getPictures(),
            removePicture: removePicture
        };

        function getPictures() {
            return $http.get(url + 'files');
        }

        function removePicture(id) {
            return $http.post(url + 'remove/' + id);
        }
    }
})();