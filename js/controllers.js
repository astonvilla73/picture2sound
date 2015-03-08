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

            });


            function change(sourceUrl) {



                /****************/
            }

            $scope.say = function(soundSrc){
                var audio = angular.element("#player");
                angular.element("#sound_src").attr("src", soundSrc);
                audio[0].pause();
                audio[0].currentTime = 0;

                audio[0].load();
                audio[0].play();
            }

        }

    ]

);

