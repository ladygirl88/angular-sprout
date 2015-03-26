'use strict';

/**
 * @ngdoc overview
 * @name sproutApp.controllers
 *
 * @description
 * This `sproutApp.controllers` module contains the controllers of the app.
 */
angular.module('sproutApp.controllers', []).

/**
 * @ngdoc function
 * @name sproutApp.controllers.MainController
 * @requires $mdSidenav
 * @requires $scope
 * @requires App
 *
 * @description
 * This is the controller for the index.
 */
 controller('IndexController', function($mdSidenav, $scope, App) {
  $scope.appName = App.name;
  $scope.navItems = [
    {name: 'Action', route: 'someroute'},
    {name: 'Action', route: 'someroute'},
    {name: 'Action', route: 'someroute'},
    {name: 'Action', route: 'someroute'},
    {name: 'Action', route: 'someroute'}
  ];

  $scope.toggleNav = function() {
    if(!$mdSidenav('nav').isLockedOpen()) {
      $mdSidenav('nav').toggle();
    }
  };

  $scope.closeNav = function() {
    if(!$mdSidenav('nav').isLockedOpen()) {
      $mdSidenav('nav').close();
    }
  };
 }).

/**
 * @ngdoc function
 * @name sproutApp.controllers.MainController
 * @requires $scope
 *
 * @description
 * This is the controller for the main view.
 */
 controller('MainController', function($scope) {
  $scope.title = 'AngularSprout';
  $scope.description = 'The seed project for AngularJS and Angular Material';
 });
