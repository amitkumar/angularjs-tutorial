'use strict';

angular.module('angularjsTutorial', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'firebase'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl as mainCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl as contactCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })

  .controller('GlobalCtrl', function(){
    this.globalObject = {
      message : 'Global'
    };
  })
;
