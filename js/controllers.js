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

                $scope.showSpelling = false;

            });

            $scope.say = function(animal){

                var soundSrc = isMsie() ? animal.soundMp3: animal.sound;
                var audio = angular.element("#player");

                if (isMsie()){

                    angular.element("#sound_src").attr("type", "audio/mp3");

                } else {

                    angular.element("#sound_src").removeAttr("type");

                }

                angular.element("#sound_src").attr("src", soundSrc);

                audio[0].pause();
                audio[0].load();
                audio[0].play();
            };

            $scope.spelling = function(value){

                angular.element('#spelling').text(value)

            }

        }

    ]

);

