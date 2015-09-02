(function () {
    'use strict';
    angular.module('dropbox')
        .controller('PictureDisplayController', PictureDisplayController);

    PictureDisplayController.$inject = ['DropboxService'];

    function PictureDisplayController(DropboxService) {
        var url = serverConfig.SERVER();
        var vm = this;
        vm.pictures = getPictures();

        function getPictures() {
            DropboxService.getPictures
                .success(function (response) {
                    vm.pictures = response;
                    var addDtoParameters = function (picture) {
                        picture.ratioClass = (picture.ratio > 1.45 ? "file bigfile" : "file"); // (b?x:y) parens fix bug
                        picture.urlLink = url + 'picture/' + picture.id + '.jpg';
                        //todo later
                        //picture.deletePicture = removePicture;
                    };
                    vm.pictures.forEach(addDtoParameters);
                });
        }

        function removePicture(id) {
            DropboxService.removePicture(id)
                .success(function (response) {
                    return response;
                })
        }
    }
})();

