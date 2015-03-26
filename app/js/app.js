'use strict';

/**
 * @ngdoc overview
 * @name sproutApp
 *
 * @description
 * This `sproutApp` module is the main module of the app.
 */
angular.module('sproutApp', [
  'ngAnimate',
  'ngMaterial',
  'ngResource',
  'ngRoute',
  'sproutApp.controllers',
  'sproutApp.directives',
  'sproutApp.filters',
  'sproutApp.services'
]).
config(function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'partials/main.html',
    controller: 'MainController'
  }).
  otherwise({
    redirectTo: '/'
  });
}).
constant('App', {
  name: 'SproutApp'
});
