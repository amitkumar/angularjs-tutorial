'use strict';

angular.module('angularjsTutorial')
  .controller('MainCtrl', function ($scope) {
    console.log('MainCtrl instantiated');
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

  });
