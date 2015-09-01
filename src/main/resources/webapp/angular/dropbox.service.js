/*
(function () {
    'use strict';
    angular
        .module('dropbox')
        .factory('DropboxService', DropboxService);

    DropboxService.$inject = ['$http', '$upload'];
    function DropboxService($http, $upload) {
        //var url = serverConfig.SERVER;
        var url = "http://localhost:8080/";

        var service = {
            getFiles: getFiles,
            getOneFile: getOneFile,
            deleteFile: deleteFile,
            addFiles: addFiles
        };
        return service;

        function getFiles() {
            return $http.get(url + 'files');
        }

        function getOneFile(id) {
            return $http.get(url + 'picture/' + id);
        }

        function deleteFile(id) {
            return $http.post(url + 'delete/' + id, id);
        }

        function addFiles(url, data, file) {
            return $upload
                .upload({
                    url: url + '/add',
                    file: file
                })
        }
    }
})();
*/
