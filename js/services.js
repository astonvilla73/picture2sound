'use strict';

/* Services */

var app = angular.module('ngPicture2sound.services', ['ngResource']);

app.factory(

    'Animals',
    ['$resource',
    function($resource){

        return $resource('json/picture.json', {}, {
          get: {

              method:'GET',
              isArray: true,
              params:{}

          }
        });
    }]

);