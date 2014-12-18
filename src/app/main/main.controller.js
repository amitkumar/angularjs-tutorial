'use strict';

angular.module('angularjsTutorial')
  .controller('MainCtrl', ['$scope', '$log', '$q', 'TodoFireService', function ($scope, $log, $q, TodoFireService) {
    $log.log('MainCtrl instantiated');
    var self = this;

    self.newTodoTitle = '';

    self.addTodo = function(options){
      var newTodo;

      return TodoFireService.addTodo(options)
      .then(function(newTodoResult){
        newTodo = newTodoResult;
        self.newTodoTitle = '';
      },
      function(err){
        $log.log(err);
      });
    };

  }]);
