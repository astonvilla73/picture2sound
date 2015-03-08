'use strict';

/* Controllers */

angular.module('ngPicture2sound.controllers', ['ngRoute'])
.run().controller(

    "MainController",
    [
        '$scope', "$location", "$routeParams", 'Promotion',

        function ($scope, $location, $routeParams, Promotion){

            var promoId = $routeParams['promo'];

            Promotion.get().$promise.then(function(value) {

                if (promoId && String(promoId).match(/(promo)?\d+/i)) {

                    if (!isNumber(promoId)) {

                        promoId = promoId.slice(5)

                    }

                    $scope.promo = value['promotion_objects'][promoId - 1]

                } else {

                    $scope.promotions = value['promotion_objects'];

                    $scope.getPromo = function (promoId) {

                        $location.search("promo", promoId);

                    }

                }

            });


    }]

);

