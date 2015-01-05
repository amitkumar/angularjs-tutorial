'use strict';

angular.module('angularjsTutorial')
.controller('GraphsCtrl', ['$scope', '$log', '$window',
  function ($scope, $log, $window) {
    $log.log('$window.d3', $window.d3);
  }
]);
