'use strict';

// Declare webdevtest level module which depends on filters, and services
angular.module('ngPicture2sound', [
  'ngPicture2sound.filters',
  'ngPicture2sound.services',
  'ngPicture2sound.directives',
  'ngPicture2sound.controllers'
]).
config(

    ['$locationProvider',
    function($locationProvider) {

        $locationProvider.html5Mode({enabled: true, requireBase: false});

    }]
);