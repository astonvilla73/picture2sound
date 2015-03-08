'use strict';

/* Services */

var app = angular.module('ngPicture2sound.services', ['ngResource']);

app.factory(

    'Promotion',
    ['$resource',
    function($resource){

        return $resource('js/webdevtest-data.js', {}, {
          get: {

              method:'GET',
              isArray: false,
              params:{}

          }
        });
    }]

);