'use strict';

angular.module('angularjsTutorial')
  .controller('MainCtrl', ['$scope', '$log', 'TodoService', function ($scope, $log, TodoService) {
    $log.log('MainCtrl instantiated');
    var self = this;

    self.newTodoTitle = '';


    self.getTodos = function(){
       self.todos = TodoService.getTodos();
       return self.todos;
    };

    self.addTodo = function(options){
      var newTodo = TodoService.addTodo(options);
      self.getTodos();

      self.newTodoTitle = '';

      return newTodo;
    };


    self.removeTodo = function(todo){
      TodoService.removeTodoById(todo.id);
      self.getTodos();
    };


    self.getTodoClasses = function(todo){
      return {
        'completed' : todo.completed
      }
    };

    self.saveTodos = function(){
      TodoService.saveTodos();
    }

    self.getTodos();
  }]);
