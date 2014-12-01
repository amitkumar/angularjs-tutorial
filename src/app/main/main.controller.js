'use strict';

angular.module('angularjsTutorial')
  .controller('MainCtrl', ['$scope', 'TodoService', function ($scope, TodoService) {
    console.log('MainCtrl instantiated');
    var self = this;

    self.newTodoTitle = '';


    self.getTodos = function(){
       self.todos = TodoService.getTodos();
       console.log('self.todos', self.todos);
       return self.todos;
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

    self.saveTodos = function(){
      console.log('saveTodos');
      TodoService.saveTodos();
    }

    self.getTodos();
  }]);
