'use strict';

angular.module('angularjsTutorial')
  .controller('MainCtrl', ['$scope', '$log', 'TodoService', function ($scope, $log, TodoService) {
    $log.log('MainCtrl instantiated');
    var self = this;

    self.newTodoTitle = '';


    self.getTodos = function(){
       return TodoService.getTodos().then(function(todos){
          self.todos = todos;
       });
    };

    self.addTodo = function(options){
      return TodoService.addTodo(options)
        .then(self.getTodos)
        .then(function(newTodo){
          self.newTodoTitle = '';
        });
    };


    self.removeTodo = function(todo){
      return TodoService.removeTodoById(todo.id)
        .then(self.getTodos);
    };


    self.getTodoClasses = function(todo){
      return {
        'completed' : todo.completed
      }
    };

    self.saveTodos = function(){
      return TodoService.saveTodos();
    }

    self.getTodos();
  }]);
