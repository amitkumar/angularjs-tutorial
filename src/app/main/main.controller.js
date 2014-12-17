'use strict';

angular.module('angularjsTutorial')
  .controller('MainCtrl', ['$scope', '$log', '$q', 'TodoService', function ($scope, $log, $q, TodoService) {
    $log.log('MainCtrl instantiated');
    var self = this;

    self.newTodoTitle = '';

    self.addTodo = function(options){
      var newTodo;

      return TodoService.addTodo(options)
      .then(function(newTodoResult){
        newTodo = newTodoResult;
        self.newTodoTitle = '';
      },
      function(err){
        $log.log(err);
      });
    };

  }]);
