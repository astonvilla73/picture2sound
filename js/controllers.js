'use strict';

/* Controllers */

angular.module('ngPicture2sound.controllers', [])
.run().controller(

    "MainController",
    [
        '$scope', "Animals",

        function ($scope, Animals) {

            Animals.get().$promise.then(function(response) {

                $scope.animals = response.slice(0,6);

            })

        }

    ]

);

