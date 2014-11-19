'use strict';

angular.module('angularjsTutorial')
  .controller('MainCtrl', function ($scope) {
    var self = this;

    self.todos = [];

    self.addTodo = function(todo){
      self.todos.push({
        description : self.newTodo,
        done : false
      });
    };

    self.getTodoClasses = function(todo){
      return {
        done : todo.done
      }
    };

    // $scope.$watch(function () {
    //   return self.todos;
    // }, function (newVal, oldVal) {
    //   console.log('self.todos changed', newVal);
    // },
    // true);
  });
