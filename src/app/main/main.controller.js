'use strict';

angular.module('angularjsTutorial')
  .controller('MainCtrl', function ($scope) {
    var self = this;

    self.newTodoTitle = '';

    self.todos = [];

    self.addTodo = function(options){
      var newTodo = {
        title : options.title,
        completed : false
      };

      self.todos.push(newTodo);

      self.newTodoTitle = '';

      return newTodo;
    };


    self.removeTodoByReference = function(todo){
      self.todos = self.todos.filter(function(item){
        return item !== todo;
      });
    };

    self.removeTodo = function(title){
      self.todos = self.todos.filter(function(item){
        return item.title !== title;
      });
    };

    self.getTodoClasses = function(todo){
      return {
        'completed' : todo.completed
      }
    };

    $scope.$watch(function(){
      return self.newTodoTitle;
    }, function(newValue, oldValue){
      console.log('self.newTodoTitle changed', newValue);
    });

    $scope.$watch(function(){
      return self.todos;
    }, function(newValue, oldValue){
      console.log('self.todos changed', newValue);
    },
    true);
  });
