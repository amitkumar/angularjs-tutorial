'use strict';

angular.module('angularjsTutorial')
  .controller('MainCtrl', ['$scope', 'TodoService', function ($scope, TodoService) {
    console.log('MainCtrl instantiated');
    var self = this;

    self.newTodoTitle = '';

    self.todos = TodoService.getTodos();

    self.getTodos = function(){
      return self.todos = TodoService.getTodos();
    };

    self.addTodo = function(options){
      var newTodo = TodoService.addTodo(options);
      self.getTodos();

      self.newTodoTitle = '';

      return newTodo;
    };


    self.removeTodoByReference = function(todo){
      TodoService.removeTodoByReference(todo);
      self.getTodos();
    };

    self.removeTodo = function(title){
      TodoService.removeTodo(title);
      self.getTodos();
    };

    self.getTodoClasses = function(todo){
      return {
        'completed' : todo.completed
      }
    };

  }]);
