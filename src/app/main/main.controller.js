'use strict';

angular.module('angularjsTutorial')
  .controller('MainCtrl', ['$scope', '$log', '$q', 'TodoService', function ($scope, $log, $q, TodoService) {
    $log.log('MainCtrl instantiated');
    var self = this;

    self.newTodoTitle = '';


    self.getTodos = function(){
       return TodoService.getTodos()
        .then(function(todos){
          self.todos = todos;
          return self.todos;
        });
    };

    self.addTodo = function(options){
      var newTodo;

      TodoService.addTodo(options)
        .then(function(newTodoResult){
          newTodo = newTodoResult;
        },
        function(err){
          console.log(err);
        });
    };


    self.removeTodo = function(todo){
      return TodoService.removeTodo(todo);
    };


    self.getTodoClasses = function(todo){
      return {
        'completed' : todo.completed
      }
    };

    self.saveTodo = function(todo){
      return TodoService.saveTodo(todo);
    }

    self.getTodos();
  }]);
